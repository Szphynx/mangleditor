(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Md(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Rt={},Lo=[],fi=()=>{},fg=()=>!1,ic=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ed=t=>t.startsWith("onUpdate:"),en=Object.assign,wd=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},J_=Object.prototype.hasOwnProperty,vt=(t,e)=>J_.call(t,e),je=Array.isArray,Fo=t=>la(t)==="[object Map]",dg=t=>la(t)==="[object Set]",Rh=t=>la(t)==="[object Date]",Je=t=>typeof t=="function",Ot=t=>typeof t=="string",Xn=t=>typeof t=="symbol",xt=t=>t!==null&&typeof t=="object",hg=t=>(xt(t)||Je(t))&&Je(t.then)&&Je(t.catch),pg=Object.prototype.toString,la=t=>pg.call(t),Q_=t=>la(t).slice(8,-1),mg=t=>la(t)==="[object Object]",rc=t=>Ot(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Rs=Md(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oc=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},ex=/-\w/g,Ln=oc(t=>t.replace(ex,e=>e.slice(1).toUpperCase())),tx=/\B([A-Z])/g,fo=oc(t=>t.replace(tx,"-$1").toLowerCase()),sc=oc(t=>t.charAt(0).toUpperCase()+t.slice(1)),zc=oc(t=>t?`on${sc(t)}`:""),Vi=(t,e)=>!Object.is(t,e),Vc=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},gg=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},nx=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ph;const ac=()=>Ph||(Ph=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Nt(t){if(je(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ot(i)?sx(i):Nt(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(Ot(t)||xt(t))return t}const ix=/;(?![^(]*\))/g,rx=/:([^]+)/,ox=/\/\*[^]*?\*\//g;function sx(t){const e={};return t.replace(ox,"").split(ix).forEach(n=>{if(n){const i=n.split(rx);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function zt(t){let e="";if(Ot(t))e=t;else if(je(t))for(let n=0;n<t.length;n++){const i=zt(t[n]);i&&(e+=i+" ")}else if(xt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function ax(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ot(e)&&(t.class=zt(e)),n&&(t.style=Nt(n)),t}const lx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cx=Md(lx);function vg(t){return!!t||t===""}function ux(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Td(t[i],e[i]);return n}function Td(t,e){if(t===e)return!0;let n=Rh(t),i=Rh(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Xn(t),i=Xn(e),n||i)return t===e;if(n=je(t),i=je(e),n||i)return n&&i?ux(t,e):!1;if(n=xt(t),i=xt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,o=Object.keys(e).length;if(r!==o)return!1;for(const s in t){const a=t.hasOwnProperty(s),l=e.hasOwnProperty(s);if(a&&!l||!a&&l||!Td(t[s],e[s]))return!1}}return String(t)===String(e)}const _g=t=>!!(t&&t.__v_isRef===!0),Ze=t=>Ot(t)?t:t==null?"":je(t)||xt(t)&&(t.toString===pg||!Je(t.toString))?_g(t)?Ze(t.value):JSON.stringify(t,xg,2):String(t),xg=(t,e)=>_g(e)?xg(t,e.value):Fo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],o)=>(n[Hc(i,o)+" =>"]=r,n),{})}:dg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Hc(n))}:Xn(e)?Hc(e):xt(e)&&!je(e)&&!mg(e)?String(e):e,Hc=(t,e="")=>{var n;return Xn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let on;class yg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=on;try{return on=this,e()}finally{on=n}}}on(){++this._on===1&&(this.prevScope=on,on=this)}off(){this._on>0&&--this._on===0&&(on=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function lc(t){return new yg(t)}function cc(){return on}function Ps(t,e=!1){on&&on.cleanups.push(t)}let It;const Gc=new WeakSet;class bg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,on&&on.active&&on.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Gc.has(this)&&(Gc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Mg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ih(this),Eg(this);const e=It,n=$n;It=this,$n=!0;try{return this.fn()}finally{wg(this),It=e,$n=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Rd(e);this.deps=this.depsTail=void 0,Ih(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Gc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xu(this)&&this.run()}get dirty(){return Xu(this)}}let Sg=0,Is,Ns;function Mg(t,e=!1){if(t.flags|=8,e){t.next=Ns,Ns=t;return}t.next=Is,Is=t}function Ad(){Sg++}function Cd(){if(--Sg>0)return;if(Ns){let e=Ns;for(Ns=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Is;){let e=Is;for(Is=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Eg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function wg(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Rd(i),fx(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Xu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Tg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Tg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===zs)||(t.globalVersion=zs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Xu(t))))return;t.flags|=2;const e=t.dep,n=It,i=$n;It=t,$n=!0;try{Eg(t);const r=t.fn(t._value);(e.version===0||Vi(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{It=n,$n=i,wg(t),t.flags&=-3}}function Rd(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Rd(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function fx(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let $n=!0;const Ag=[];function Xi(){Ag.push($n),$n=!1}function Yi(){const t=Ag.pop();$n=t===void 0?!0:t}function Ih(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=It;It=void 0;try{e()}finally{It=n}}}let zs=0;class dx{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class uc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!It||!$n||It===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==It)n=this.activeLink=new dx(It,this),It.deps?(n.prevDep=It.depsTail,It.depsTail.nextDep=n,It.depsTail=n):It.deps=It.depsTail=n,Cg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=It.depsTail,n.nextDep=void 0,It.depsTail.nextDep=n,It.depsTail=n,It.deps===n&&(It.deps=i)}return n}trigger(e){this.version++,zs++,this.notify(e)}notify(e){Ad();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Cd()}}}function Cg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Cg(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Tl=new WeakMap,Qr=Symbol(""),Yu=Symbol(""),Vs=Symbol("");function sn(t,e,n){if($n&&It){let i=Tl.get(t);i||Tl.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new uc),r.map=i,r.key=n),r.track()}}function Di(t,e,n,i,r,o){const s=Tl.get(t);if(!s){zs++;return}const a=l=>{l&&l.trigger()};if(Ad(),e==="clear")s.forEach(a);else{const l=je(t),c=l&&rc(n);if(l&&n==="length"){const u=Number(i);s.forEach((f,d)=>{(d==="length"||d===Vs||!Xn(d)&&d>=u)&&a(f)})}else switch((n!==void 0||s.has(void 0))&&a(s.get(n)),c&&a(s.get(Vs)),e){case"add":l?c&&a(s.get("length")):(a(s.get(Qr)),Fo(t)&&a(s.get(Yu)));break;case"delete":l||(a(s.get(Qr)),Fo(t)&&a(s.get(Yu)));break;case"set":Fo(t)&&a(s.get(Qr));break}}Cd()}function hx(t,e){const n=Tl.get(t);return n&&n.get(e)}function mo(t){const e=mt(t);return e===t?e:(sn(e,"iterate",Vs),Tn(t)?e:e.map(Yn))}function fc(t){return sn(t=mt(t),"iterate",Vs),t}function gr(t,e){return qi(t)?$o(Hi(t)?Yn(e):e):Yn(e)}const px={__proto__:null,[Symbol.iterator](){return $c(this,Symbol.iterator,t=>gr(this,t))},concat(...t){return mo(this).concat(...t.map(e=>je(e)?mo(e):e))},entries(){return $c(this,"entries",t=>(t[1]=gr(this,t[1]),t))},every(t,e){return Mi(this,"every",t,e,void 0,arguments)},filter(t,e){return Mi(this,"filter",t,e,n=>n.map(i=>gr(this,i)),arguments)},find(t,e){return Mi(this,"find",t,e,n=>gr(this,n),arguments)},findIndex(t,e){return Mi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Mi(this,"findLast",t,e,n=>gr(this,n),arguments)},findLastIndex(t,e){return Mi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Mi(this,"forEach",t,e,void 0,arguments)},includes(...t){return Wc(this,"includes",t)},indexOf(...t){return Wc(this,"indexOf",t)},join(t){return mo(this).join(t)},lastIndexOf(...t){return Wc(this,"lastIndexOf",t)},map(t,e){return Mi(this,"map",t,e,void 0,arguments)},pop(){return as(this,"pop")},push(...t){return as(this,"push",t)},reduce(t,...e){return Nh(this,"reduce",t,e)},reduceRight(t,...e){return Nh(this,"reduceRight",t,e)},shift(){return as(this,"shift")},some(t,e){return Mi(this,"some",t,e,void 0,arguments)},splice(...t){return as(this,"splice",t)},toReversed(){return mo(this).toReversed()},toSorted(t){return mo(this).toSorted(t)},toSpliced(...t){return mo(this).toSpliced(...t)},unshift(...t){return as(this,"unshift",t)},values(){return $c(this,"values",t=>gr(this,t))}};function $c(t,e,n){const i=fc(t),r=i[e]();return i!==t&&!Tn(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.done||(o.value=n(o.value)),o}),r}const mx=Array.prototype;function Mi(t,e,n,i,r,o){const s=fc(t),a=s!==t&&!Tn(t),l=s[e];if(l!==mx[e]){const f=l.apply(t,o);return a?Yn(f):f}let c=n;s!==t&&(a?c=function(f,d){return n.call(this,gr(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(s,c,i);return a&&r?r(u):u}function Nh(t,e,n,i){const r=fc(t);let o=n;return r!==t&&(Tn(t)?n.length>3&&(o=function(s,a,l){return n.call(this,s,a,l,t)}):o=function(s,a,l){return n.call(this,s,gr(t,a),l,t)}),r[e](o,...i)}function Wc(t,e,n){const i=mt(t);sn(i,"iterate",Vs);const r=i[e](...n);return(r===-1||r===!1)&&dc(n[0])?(n[0]=mt(n[0]),i[e](...n)):r}function as(t,e,n=[]){Xi(),Ad();const i=mt(t)[e].apply(t,n);return Cd(),Yi(),i}const gx=Md("__proto__,__v_isRef,__isVue"),Rg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Xn));function vx(t){Xn(t)||(t=String(t));const e=mt(this);return sn(e,"has",t),e.hasOwnProperty(t)}class Pg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(r?o?Ax:Lg:o?Dg:Ng).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const s=je(e);if(!r){let l;if(s&&(l=px[n]))return l;if(n==="hasOwnProperty")return vx}const a=Reflect.get(e,n,Dt(e)?e:i);if((Xn(n)?Rg.has(n):gx(n))||(r||sn(e,"get",n),o))return a;if(Dt(a)){const l=s&&rc(n)?a:a.value;return r&&xt(l)?Al(l):l}return xt(a)?r?Al(a):wr(a):a}}class Ig extends Pg{constructor(e=!1){super(!1,e)}set(e,n,i,r){let o=e[n];const s=je(e)&&rc(n);if(!this._isShallow){const c=qi(o);if(!Tn(i)&&!qi(i)&&(o=mt(o),i=mt(i)),!s&&Dt(o)&&!Dt(i))return c||(o.value=i),!0}const a=s?Number(n)<e.length:vt(e,n),l=Reflect.set(e,n,i,Dt(e)?e:r);return e===mt(r)&&(a?Vi(i,o)&&Di(e,"set",n,i):Di(e,"add",n,i)),l}deleteProperty(e,n){const i=vt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Di(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Xn(n)||!Rg.has(n))&&sn(e,"has",n),i}ownKeys(e){return sn(e,"iterate",je(e)?"length":Qr),Reflect.ownKeys(e)}}class _x extends Pg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const xx=new Ig,yx=new _x,bx=new Ig(!0);const qu=t=>t,Sa=t=>Reflect.getPrototypeOf(t);function Sx(t,e,n){return function(...i){const r=this.__v_raw,o=mt(r),s=Fo(o),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,c=r[t](...i),u=n?qu:e?$o:Yn;return!e&&sn(o,"iterate",l?Yu:Qr),en(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Ma(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Mx(t,e){const n={get(r){const o=this.__v_raw,s=mt(o),a=mt(r);t||(Vi(r,a)&&sn(s,"get",r),sn(s,"get",a));const{has:l}=Sa(s),c=e?qu:t?$o:Yn;if(l.call(s,r))return c(o.get(r));if(l.call(s,a))return c(o.get(a));o!==s&&o.get(r)},get size(){const r=this.__v_raw;return!t&&sn(mt(r),"iterate",Qr),r.size},has(r){const o=this.__v_raw,s=mt(o),a=mt(r);return t||(Vi(r,a)&&sn(s,"has",r),sn(s,"has",a)),r===a?o.has(r):o.has(r)||o.has(a)},forEach(r,o){const s=this,a=s.__v_raw,l=mt(a),c=e?qu:t?$o:Yn;return!t&&sn(l,"iterate",Qr),a.forEach((u,f)=>r.call(o,c(u),c(f),s))}};return en(n,t?{add:Ma("add"),set:Ma("set"),delete:Ma("delete"),clear:Ma("clear")}:{add(r){!e&&!Tn(r)&&!qi(r)&&(r=mt(r));const o=mt(this);return Sa(o).has.call(o,r)||(o.add(r),Di(o,"add",r,r)),this},set(r,o){!e&&!Tn(o)&&!qi(o)&&(o=mt(o));const s=mt(this),{has:a,get:l}=Sa(s);let c=a.call(s,r);c||(r=mt(r),c=a.call(s,r));const u=l.call(s,r);return s.set(r,o),c?Vi(o,u)&&Di(s,"set",r,o):Di(s,"add",r,o),this},delete(r){const o=mt(this),{has:s,get:a}=Sa(o);let l=s.call(o,r);l||(r=mt(r),l=s.call(o,r)),a&&a.call(o,r);const c=o.delete(r);return l&&Di(o,"delete",r,void 0),c},clear(){const r=mt(this),o=r.size!==0,s=r.clear();return o&&Di(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Sx(r,t,e)}),n}function Pd(t,e){const n=Mx(t,e);return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(vt(n,r)&&r in i?n:i,r,o)}const Ex={get:Pd(!1,!1)},wx={get:Pd(!1,!0)},Tx={get:Pd(!0,!1)};const Ng=new WeakMap,Dg=new WeakMap,Lg=new WeakMap,Ax=new WeakMap;function Cx(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Rx(t){return t.__v_skip||!Object.isExtensible(t)?0:Cx(Q_(t))}function wr(t){return qi(t)?t:Id(t,!1,xx,Ex,Ng)}function Px(t){return Id(t,!1,bx,wx,Dg)}function Al(t){return Id(t,!0,yx,Tx,Lg)}function Id(t,e,n,i,r){if(!xt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=Rx(t);if(o===0)return t;const s=r.get(t);if(s)return s;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Hi(t){return qi(t)?Hi(t.__v_raw):!!(t&&t.__v_isReactive)}function qi(t){return!!(t&&t.__v_isReadonly)}function Tn(t){return!!(t&&t.__v_isShallow)}function dc(t){return t?!!t.__v_raw:!1}function mt(t){const e=t&&t.__v_raw;return e?mt(e):t}function eo(t){return!vt(t,"__v_skip")&&Object.isExtensible(t)&&gg(t,"__v_skip",!0),t}const Yn=t=>xt(t)?wr(t):t,$o=t=>xt(t)?Al(t):t;function Dt(t){return t?t.__v_isRef===!0:!1}function Ke(t){return Fg(t,!1)}function Mr(t){return Fg(t,!0)}function Fg(t,e){return Dt(t)?t:new Ix(t,e)}class Ix{constructor(e,n){this.dep=new uc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:mt(e),this._value=n?e:Yn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Tn(e)||qi(e);e=i?e:mt(e),Vi(e,n)&&(this._rawValue=e,this._value=i?e:Yn(e),this.dep.trigger())}}function pe(t){return Dt(t)?t.value:t}function lt(t){return Je(t)?t():pe(t)}const Nx={get:(t,e,n)=>e==="__v_raw"?t:pe(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Dt(r)&&!Dt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Ug(t){return Hi(t)?t:new Proxy(t,Nx)}class Dx{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new uc,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function Lx(t){return new Dx(t)}function Og(t){const e=je(t)?new Array(t.length):{};for(const n in t)e[n]=Bg(t,n);return e}class Fx{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=mt(e);let r=!0,o=e;if(!je(e)||!rc(String(n)))do r=!dc(o)||Tn(o);while(r&&(o=o.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=pe(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Dt(this._raw[this._key])){const n=this._object[this._key];if(Dt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return hx(this._raw,this._key)}}class Ux{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Tt(t,e,n){return Dt(t)?t:Je(t)?new Ux(t):xt(t)&&arguments.length>1?Bg(t,e,n):Ke(t)}function Bg(t,e,n){return new Fx(t,e,n)}class Ox{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new uc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=zs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&It!==this)return Mg(this,!0),!0}get value(){const e=this.dep.track();return Tg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Bx(t,e,n=!1){let i,r;return Je(t)?i=t:(i=t.get,r=t.set),new Ox(i,r,n)}const Ea={},Cl=new WeakMap;let Hr;function kx(t,e=!1,n=Hr){if(n){let i=Cl.get(n);i||Cl.set(n,i=[]),i.push(t)}}function zx(t,e,n=Rt){const{immediate:i,deep:r,once:o,scheduler:s,augmentJob:a,call:l}=n,c=b=>r?b:Tn(b)||r===!1||r===0?Li(b,1):Li(b);let u,f,d,h,g=!1,x=!1;if(Dt(t)?(f=()=>t.value,g=Tn(t)):Hi(t)?(f=()=>c(t),g=!0):je(t)?(x=!0,g=t.some(b=>Hi(b)||Tn(b)),f=()=>t.map(b=>{if(Dt(b))return b.value;if(Hi(b))return c(b);if(Je(b))return l?l(b,2):b()})):Je(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Xi();try{d()}finally{Yi()}}const b=Hr;Hr=u;try{return l?l(t,3,[h]):t(h)}finally{Hr=b}}:f=fi,e&&r){const b=f,L=r===!0?1/0:r;f=()=>Li(b(),L)}const m=cc(),p=()=>{u.stop(),m&&m.active&&wd(m.effects,u)};if(o&&e){const b=e;e=(...L)=>{b(...L),p()}}let M=x?new Array(t.length).fill(Ea):Ea;const y=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const L=u.run();if(r||g||(x?L.some((B,z)=>Vi(B,M[z])):Vi(L,M))){d&&d();const B=Hr;Hr=u;try{const z=[L,M===Ea?void 0:x&&M[0]===Ea?[]:M,h];M=L,l?l(e,3,z):e(...z)}finally{Hr=B}}}else u.run()};return a&&a(y),u=new bg(f),u.scheduler=s?()=>s(y,!1):y,h=b=>kx(b,!1,u),d=u.onStop=()=>{const b=Cl.get(u);if(b){if(l)l(b,4);else for(const L of b)L();Cl.delete(u)}},e?i?y(!0):M=u.run():s?s(y.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Li(t,e=1/0,n){if(e<=0||!xt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Dt(t))Li(t.value,e,n);else if(je(t))for(let i=0;i<t.length;i++)Li(t[i],e,n);else if(dg(t)||Fo(t))t.forEach(i=>{Li(i,e,n)});else if(mg(t)){for(const i in t)Li(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Li(t[i],e,n)}return t}function ca(t,e,n,i){try{return i?t(...i):t()}catch(r){hc(r,e,n)}}function gi(t,e,n,i){if(Je(t)){const r=ca(t,e,n,i);return r&&hg(r)&&r.catch(o=>{hc(o,e,n)}),r}if(je(t)){const r=[];for(let o=0;o<t.length;o++)r.push(gi(t[o],e,n,i));return r}}function hc(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||Rt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(o){Xi(),ca(o,null,10,[t,l,c]),Yi();return}}Vx(t,n,r,i,s)}function Vx(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const un=[];let ni=-1;const Uo=[];let vr=null,Do=0;const kg=Promise.resolve();let Rl=null;function Nn(t){const e=Rl||kg;return t?e.then(this?t.bind(this):t):e}function Hx(t){let e=ni+1,n=un.length;for(;e<n;){const i=e+n>>>1,r=un[i],o=Hs(r);o<t||o===t&&r.flags&2?e=i+1:n=i}return e}function Nd(t){if(!(t.flags&1)){const e=Hs(t),n=un[un.length-1];!n||!(t.flags&2)&&e>=Hs(n)?un.push(t):un.splice(Hx(e),0,t),t.flags|=1,zg()}}function zg(){Rl||(Rl=kg.then(Hg))}function Gx(t){je(t)?Uo.push(...t):vr&&t.id===-1?vr.splice(Do+1,0,t):t.flags&1||(Uo.push(t),t.flags|=1),zg()}function Dh(t,e,n=ni+1){for(;n<un.length;n++){const i=un[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;un.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Vg(t){if(Uo.length){const e=[...new Set(Uo)].sort((n,i)=>Hs(n)-Hs(i));if(Uo.length=0,vr){vr.push(...e);return}for(vr=e,Do=0;Do<vr.length;Do++){const n=vr[Do];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}vr=null,Do=0}}const Hs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Hg(t){try{for(ni=0;ni<un.length;ni++){const e=un[ni];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ca(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ni<un.length;ni++){const e=un[ni];e&&(e.flags&=-2)}ni=-1,un.length=0,Vg(),Rl=null,(un.length||Uo.length)&&Hg()}}let jt=null,Gg=null;function Pl(t){const e=jt;return jt=t,Gg=t&&t.type.__scopeId||null,e}function En(t,e=jt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Dl(-1);const o=Pl(e);let s;try{s=t(...r)}finally{Pl(o),i._d&&Dl(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function Lh(t,e){if(jt===null)return t;const n=vc(jt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,s,a,l=Rt]=e[r];o&&(Je(o)&&(o={mounted:o,updated:o}),o.deep&&Li(s),i.push({dir:o,instance:n,value:s,oldValue:void 0,arg:a,modifiers:l}))}return t}function Dr(t,e,n,i){const r=t.dirs,o=e&&e.dirs;for(let s=0;s<r.length;s++){const a=r[s];o&&(a.oldValue=o[s].value);let l=a.dir[i];l&&(Xi(),gi(l,n,8,[t.el,a,t,e]),Yi())}}function Tr(t,e){if(an){let n=an.provides;const i=an.parent&&an.parent.provides;i===n&&(n=an.provides=Object.create(i)),n[t]=e}}function Dn(t,e,n=!1){const i=nr();if(i||to){let r=to?to._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Je(e)?e.call(i&&i.proxy):e}}function $x(){return!!(nr()||to)}const Wx=Symbol.for("v-scx"),Xx=()=>Dn(Wx);function Yx(t,e){return Dd(t,null,e)}function ft(t,e,n){return Dd(t,e,n)}function Dd(t,e,n=Rt){const{immediate:i,deep:r,flush:o,once:s}=n,a=en({},n),l=e&&i||!e&&o!=="post";let c;if(Ws){if(o==="sync"){const h=Xx();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=fi,h.resume=fi,h.pause=fi,h}}const u=an;a.call=(h,g,x)=>gi(h,u,g,x);let f=!1;o==="post"?a.scheduler=h=>{mn(h,u&&u.suspense)}:o!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():Nd(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=zx(t,e,a);return Ws&&(c?c.push(d):l&&d()),d}function qx(t,e,n){const i=this.proxy,r=Ot(t)?t.includes(".")?$g(i,t):()=>i[t]:t.bind(i,i);let o;Je(e)?o=e:(o=e.handler,n=e);const s=ua(this),a=Dd(r,o.bind(i),n);return s(),a}function $g(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Kx=Symbol("_vte"),Zx=t=>t.__isTeleport,jx=Symbol("_leaveCb");function Ld(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ld(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Lt(t,e){return Je(t)?en({name:t.name},e,{setup:t}):t}function Wg(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Fh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Il=new WeakMap;function Ds(t,e,n,i,r=!1){if(je(t)){t.forEach((x,m)=>Ds(x,e&&(je(e)?e[m]:e),n,i,r));return}if(Oo(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ds(t,e,n,i.component.subTree);return}const o=i.shapeFlag&4?vc(i.component):i.el,s=r?null:o,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Rt?a.refs={}:a.refs,f=a.setupState,d=mt(f),h=f===Rt?fg:x=>Fh(u,x)?!1:vt(d,x),g=(x,m)=>!(m&&Fh(u,m));if(c!=null&&c!==l){if(Uh(e),Ot(c))u[c]=null,h(c)&&(f[c]=null);else if(Dt(c)){const x=e;g(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(Je(l))ca(l,a,12,[s,u]);else{const x=Ot(l),m=Dt(l);if(x||m){const p=()=>{if(t.f){const M=x?h(l)?f[l]:u[l]:g()||!t.k?l.value:u[t.k];if(r)je(M)&&wd(M,o);else if(je(M))M.includes(o)||M.push(o);else if(x)u[l]=[o],h(l)&&(f[l]=u[l]);else{const y=[o];g(l,t.k)&&(l.value=y),t.k&&(u[t.k]=y)}}else x?(u[l]=s,h(l)&&(f[l]=s)):m&&(g(l,t.k)&&(l.value=s),t.k&&(u[t.k]=s))};if(s){const M=()=>{p(),Il.delete(t)};M.id=-1,Il.set(t,M),mn(M,n)}else Uh(t),p()}}}function Uh(t){const e=Il.get(t);e&&(e.flags|=8,Il.delete(t))}ac().requestIdleCallback;ac().cancelIdleCallback;const Oo=t=>!!t.type.__asyncLoader,Xg=t=>t.type.__isKeepAlive;function Jx(t,e){Yg(t,"a",e)}function Qx(t,e){Yg(t,"da",e)}function Yg(t,e,n=an){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(pc(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Xg(r.parent.vnode)&&ey(i,e,n,r),r=r.parent}}function ey(t,e,n,i){const r=pc(e,t,i,!0);Fd(()=>{wd(i[e],r)},n)}function pc(t,e,n=an,i=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...s)=>{Xi();const a=ua(n),l=gi(e,n,t,s);return a(),Yi(),l});return i?r.unshift(o):r.push(o),o}}const tr=t=>(e,n=an)=>{(!Ws||t==="sp")&&pc(t,(...i)=>e(...i),n)},qg=tr("bm"),Kn=tr("m"),ty=tr("bu"),ny=tr("u"),is=tr("bum"),Fd=tr("um"),iy=tr("sp"),ry=tr("rtg"),oy=tr("rtc");function sy(t,e=an){pc("ec",t,e)}const Kg="components";function Zg(t,e){return Qg(Kg,t,!0,e)||t}const jg=Symbol.for("v-ndc");function Jg(t){return Ot(t)?Qg(Kg,t,!1)||t:t||jg}function Qg(t,e,n=!0,i=!1){const r=jt||an;if(r){const o=r.type;{const a=$y(o,!1);if(a&&(a===e||a===Ln(e)||a===sc(Ln(e))))return o}const s=Oh(r[t]||o[t],e)||Oh(r.appContext[t],e);return!s&&i?o:s}}function Oh(t,e){return t&&(t[e]||t[Ln(e)]||t[sc(Ln(e))])}function wn(t,e,n,i){let r;const o=n&&n[i],s=je(t);if(s||Ot(t)){const a=s&&Hi(t);let l=!1,c=!1;a&&(l=!Tn(t),c=qi(t),t=fc(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?$o(Yn(t[u])):Yn(t[u]):t[u],u,void 0,o&&o[u])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,o&&o[a])}else if(xt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,o&&o[l]));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,o&&o[l])}}else r=[];return n&&(n[i]=r),r}function ay(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(je(i))for(let r=0;r<i.length;r++)t[i[r].name]=i[r].fn;else i&&(t[i.name]=i.key?(...r)=>{const o=i.fn(...r);return o&&(o.key=i.key),o}:i.fn)}return t}function Wn(t,e,n={},i,r){if(jt.ce||jt.parent&&Oo(jt.parent)&&jt.parent.ce){const c=Object.keys(n).length>0;return e!=="default"&&(n.name=e),ye(),yn(dt,null,[rt("slot",n,i&&i())],c?-2:64)}let o=t[e];o&&o._c&&(o._d=!1),ye();const s=o&&ev(o(n)),a=n.key||s&&s.key,l=yn(dt,{key:(a&&!Xn(a)?a:`_${e}`)+(!s&&i?"_fb":"")},s||(i?i():[]),s&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function ev(t){return t.some(e=>Gs(e)?!(e.type===Ki||e.type===dt&&!ev(e.children)):!0)?t:null}const Ku=t=>t?Sv(t)?vc(t):Ku(t.parent):null,Ls=en(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ku(t.parent),$root:t=>Ku(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>rv(t),$forceUpdate:t=>t.f||(t.f=()=>{Nd(t.update)}),$nextTick:t=>t.n||(t.n=Nn.bind(t.proxy)),$watch:t=>qx.bind(t)}),Xc=(t,e)=>t!==Rt&&!t.__isScriptSetup&&vt(t,e),ly={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:o,accessCache:s,type:a,appContext:l}=t;if(e[0]!=="$"){const d=s[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(Xc(i,e))return s[e]=1,i[e];if(r!==Rt&&vt(r,e))return s[e]=2,r[e];if(vt(o,e))return s[e]=3,o[e];if(n!==Rt&&vt(n,e))return s[e]=4,n[e];Zu&&(s[e]=0)}}const c=Ls[e];let u,f;if(c)return e==="$attrs"&&sn(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Rt&&vt(n,e))return s[e]=4,n[e];if(f=l.config.globalProperties,vt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return Xc(r,e)?(r[e]=n,!0):i!==Rt&&vt(i,e)?(i[e]=n,!0):vt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:o,type:s}},a){let l;return!!(n[a]||t!==Rt&&a[0]!=="$"&&vt(t,a)||Xc(e,a)||vt(o,a)||vt(i,a)||vt(Ls,a)||vt(r.config.globalProperties,a)||(l=s.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:vt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function tv(){return nv().slots}function Ud(){return nv().attrs}function nv(t){const e=nr();return e.setupContext||(e.setupContext=Ev(e))}function Bh(t){return je(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function cy(t,e){const n={};for(const i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}let Zu=!0;function uy(t){const e=rv(t),n=t.proxy,i=t.ctx;Zu=!1,e.beforeCreate&&kh(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:s,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:y,unmounted:b,render:L,renderTracked:B,renderTriggered:z,errorCaptured:v,serverPrefetch:_,expose:D,inheritAttrs:I,components:C,directives:X,filters:E}=e;if(c&&fy(c,i,null),s)for(const P in s){const k=s[P];Je(k)&&(i[P]=k.bind(n))}if(r){const P=r.call(n,n);xt(P)&&(t.data=wr(P))}if(Zu=!0,o)for(const P in o){const k=o[P],Y=Je(k)?k.bind(n,n):Je(k.get)?k.get.bind(n,n):fi,q=!Je(k)&&Je(k.set)?k.set.bind(n):fi,H=He({get:Y,set:q});Object.defineProperty(i,P,{enumerable:!0,configurable:!0,get:()=>H.value,set:K=>H.value=K})}if(a)for(const P in a)iv(a[P],i,n,P);if(l){const P=Je(l)?l.call(n):l;Reflect.ownKeys(P).forEach(k=>{Tr(k,P[k])})}u&&kh(u,t,"c");function T(P,k){je(k)?k.forEach(Y=>P(Y.bind(n))):k&&P(k.bind(n))}if(T(qg,f),T(Kn,d),T(ty,h),T(ny,g),T(Jx,x),T(Qx,m),T(sy,v),T(oy,B),T(ry,z),T(is,M),T(Fd,b),T(iy,_),je(D))if(D.length){const P=t.exposed||(t.exposed={});D.forEach(k=>{Object.defineProperty(P,k,{get:()=>n[k],set:Y=>n[k]=Y,enumerable:!0})})}else t.exposed||(t.exposed={});L&&t.render===fi&&(t.render=L),I!=null&&(t.inheritAttrs=I),C&&(t.components=C),X&&(t.directives=X),_&&Wg(t)}function fy(t,e,n=fi){je(t)&&(t=ju(t));for(const i in t){const r=t[i];let o;xt(r)?"default"in r?o=Dn(r.from||i,r.default,!0):o=Dn(r.from||i):o=Dn(r),Dt(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[i]=o}}function kh(t,e,n){gi(je(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function iv(t,e,n,i){let r=i.includes(".")?$g(n,i):()=>n[i];if(Ot(t)){const o=e[t];Je(o)&&ft(r,o)}else if(Je(t))ft(r,t.bind(n));else if(xt(t))if(je(t))t.forEach(o=>iv(o,e,n,i));else{const o=Je(t.handler)?t.handler.bind(n):e[t.handler];Je(o)&&ft(r,o,t)}}function rv(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Nl(l,c,s,!0)),Nl(l,e,s)),xt(e)&&o.set(e,l),l}function Nl(t,e,n,i=!1){const{mixins:r,extends:o}=e;o&&Nl(t,o,n,!0),r&&r.forEach(s=>Nl(t,s,n,!0));for(const s in e)if(!(i&&s==="expose")){const a=dy[s]||n&&n[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const dy={data:zh,props:Vh,emits:Vh,methods:bs,computed:bs,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:bs,directives:bs,watch:py,provide:zh,inject:hy};function zh(t,e){return e?t?function(){return en(Je(t)?t.call(this,this):t,Je(e)?e.call(this,this):e)}:e:t}function hy(t,e){return bs(ju(t),ju(e))}function ju(t){if(je(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ln(t,e){return t?[...new Set([].concat(t,e))]:e}function bs(t,e){return t?en(Object.create(null),t,e):e}function Vh(t,e){return t?je(t)&&je(e)?[...new Set([...t,...e])]:en(Object.create(null),Bh(t),Bh(e??{})):e}function py(t,e){if(!t)return e;if(!e)return t;const n=en(Object.create(null),t);for(const i in e)n[i]=ln(t[i],e[i]);return n}function ov(){return{app:null,config:{isNativeTag:fg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let my=0;function gy(t,e){return function(i,r=null){Je(i)||(i=en({},i)),r!=null&&!xt(r)&&(r=null);const o=ov(),s=new WeakSet,a=[];let l=!1;const c=o.app={_uid:my++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:Yy,get config(){return o.config},set config(u){},use(u,...f){return s.has(u)||(u&&Je(u.install)?(s.add(u),u.install(c,...f)):Je(u)&&(s.add(u),u(c,...f))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,f){return f?(o.components[u]=f,c):o.components[u]},directive(u,f){return f?(o.directives[u]=f,c):o.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||rt(i,r);return h.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,vc(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(gi(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return o.provides[u]=f,c},runWithContext(u){const f=to;to=c;try{return u()}finally{to=f}}};return c}}let to=null;const vy=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ln(e)}Modifiers`]||t[`${fo(e)}Modifiers`];function _y(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Rt;let r=n;const o=e.startsWith("update:"),s=o&&vy(i,e.slice(7));s&&(s.trim&&(r=n.map(u=>Ot(u)?u.trim():u)),s.number&&(r=n.map(nx)));let a,l=i[a=zc(e)]||i[a=zc(Ln(e))];!l&&o&&(l=i[a=zc(fo(e))]),l&&gi(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gi(c,t,6,r)}}const xy=new WeakMap;function sv(t,e,n=!1){const i=n?xy:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let s={},a=!1;if(!Je(t)){const l=c=>{const u=sv(c,e,!0);u&&(a=!0,en(s,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(xt(t)&&i.set(t,null),null):(je(o)?o.forEach(l=>s[l]=null):en(s,o),xt(t)&&i.set(t,s),s)}function mc(t,e){return!t||!ic(e)?!1:(e=e.slice(2).replace(/Once$/,""),vt(t,e[0].toLowerCase()+e.slice(1))||vt(t,fo(e))||vt(t,e))}function Hh(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[o],slots:s,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:x}=t,m=Pl(t);let p,M;try{if(n.shapeFlag&4){const b=r||i,L=b;p=ri(c.call(L,b,u,f,h,d,g)),M=a}else{const b=e;p=ri(b.length>1?b(f,{attrs:a,slots:s,emit:l}):b(f,null)),M=e.props?a:yy(a)}}catch(b){Fs.length=0,hc(b,t,1),p=rt(Ki)}let y=p;if(M&&x!==!1){const b=Object.keys(M),{shapeFlag:L}=y;b.length&&L&7&&(o&&b.some(Ed)&&(M=by(M,o)),y=Xo(y,M,!1,!0))}return n.dirs&&(y=Xo(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&Ld(y,n.transition),p=y,Pl(m),p}const yy=t=>{let e;for(const n in t)(n==="class"||n==="style"||ic(n))&&((e||(e={}))[n]=t[n]);return e},by=(t,e)=>{const n={};for(const i in t)(!Ed(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Sy(t,e,n){const{props:i,children:r,component:o}=t,{props:s,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Gh(i,s,c):!!s;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(av(s,i,d)&&!mc(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===s?!1:i?s?Gh(i,s,c):!0:!!s;return!1}function Gh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(av(e,t,o)&&!mc(n,o))return!0}return!1}function av(t,e,n){const i=t[n],r=e[n];return n==="style"&&xt(i)&&xt(r)?!Td(i,r):i!==r}function My({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const lv={},cv=()=>Object.create(lv),uv=t=>Object.getPrototypeOf(t)===lv;function Ey(t,e,n,i=!1){const r={},o=cv();t.propsDefaults=Object.create(null),fv(t,e,r,o);for(const s in t.propsOptions[0])s in r||(r[s]=void 0);n?t.props=i?r:Px(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function wy(t,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:s}}=t,a=mt(r),[l]=t.propsOptions;let c=!1;if((i||s>0)&&!(s&16)){if(s&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(mc(t.emitsOptions,d))continue;const h=e[d];if(l)if(vt(o,d))h!==o[d]&&(o[d]=h,c=!0);else{const g=Ln(d);r[g]=Ju(l,a,g,h,t,!1)}else h!==o[d]&&(o[d]=h,c=!0)}}}else{fv(t,e,r,o)&&(c=!0);let u;for(const f in a)(!e||!vt(e,f)&&((u=fo(f))===f||!vt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Ju(l,a,f,void 0,t,!0)):delete r[f]);if(o!==a)for(const f in o)(!e||!vt(e,f))&&(delete o[f],c=!0)}c&&Di(t.attrs,"set","")}function fv(t,e,n,i){const[r,o]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(Rs(l))continue;const c=e[l];let u;r&&vt(r,u=Ln(l))?!o||!o.includes(u)?n[u]=c:(a||(a={}))[u]=c:mc(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,s=!0)}if(o){const l=mt(n),c=a||Rt;for(let u=0;u<o.length;u++){const f=o[u];n[f]=Ju(r,l,f,c[f],t,!vt(c,f))}}return s}function Ju(t,e,n,i,r,o){const s=t[n];if(s!=null){const a=vt(s,"default");if(a&&i===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&Je(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=ua(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}s[0]&&(o&&!a?i=!1:s[1]&&(i===""||i===fo(n))&&(i=!0))}return i}const Ty=new WeakMap;function dv(t,e,n=!1){const i=n?Ty:e.propsCache,r=i.get(t);if(r)return r;const o=t.props,s={},a=[];let l=!1;if(!Je(t)){const u=f=>{l=!0;const[d,h]=dv(f,e,!0);en(s,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!o&&!l)return xt(t)&&i.set(t,Lo),Lo;if(je(o))for(let u=0;u<o.length;u++){const f=Ln(o[u]);$h(f)&&(s[f]=Rt)}else if(o)for(const u in o){const f=Ln(u);if($h(f)){const d=o[u],h=s[f]=je(d)||Je(d)?{type:d}:en({},d),g=h.type;let x=!1,m=!0;if(je(g))for(let p=0;p<g.length;++p){const M=g[p],y=Je(M)&&M.name;if(y==="Boolean"){x=!0;break}else y==="String"&&(m=!1)}else x=Je(g)&&g.name==="Boolean";h[0]=x,h[1]=m,(x||vt(h,"default"))&&a.push(f)}}const c=[s,a];return xt(t)&&i.set(t,c),c}function $h(t){return t[0]!=="$"&&!Rs(t)}const Od=t=>t==="_"||t==="_ctx"||t==="$stable",Bd=t=>je(t)?t.map(ri):[ri(t)],Ay=(t,e,n)=>{if(e._n)return e;const i=En((...r)=>Bd(e(...r)),n);return i._c=!1,i},hv=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Od(r))continue;const o=t[r];if(Je(o))e[r]=Ay(r,o,i);else if(o!=null){const s=Bd(o);e[r]=()=>s}}},pv=(t,e)=>{const n=Bd(e);t.slots.default=()=>n},mv=(t,e,n)=>{for(const i in e)(n||!Od(i))&&(t[i]=e[i])},Cy=(t,e,n)=>{const i=t.slots=cv();if(t.vnode.shapeFlag&32){const r=e._;r?(mv(i,e,n),n&&gg(i,"_",r,!0)):hv(e,i)}else e&&pv(t,e)},Ry=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,s=Rt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?o=!1:mv(r,e,n):(o=!e.$stable,hv(e,r)),s=e}else e&&(pv(t,e),s={default:1});if(o)for(const a in r)!Od(a)&&s[a]==null&&delete r[a]},mn=Ly;function Py(t){return Iy(t)}function Iy(t,e){const n=ac();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:s,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=fi,insertStaticContent:g}=t,x=(V,$,R,N=null,O=null,G=null,w=void 0,ie=null,Q=!!$.dynamicChildren)=>{if(V===$)return;V&&!ls(V,$)&&(N=ne(V),K(V,O,G,!0),V=null),$.patchFlag===-2&&(Q=!1,$.dynamicChildren=null);const{type:J,ref:te,shapeFlag:A}=$;switch(J){case gc:m(V,$,R,N);break;case Ki:p(V,$,R,N);break;case qc:V==null&&M($,R,N,w);break;case dt:C(V,$,R,N,O,G,w,ie,Q);break;default:A&1?L(V,$,R,N,O,G,w,ie,Q):A&6?X(V,$,R,N,O,G,w,ie,Q):(A&64||A&128)&&J.process(V,$,R,N,O,G,w,ie,Q,xe)}te!=null&&O?Ds(te,V&&V.ref,G,$||V,!$):te==null&&V&&V.ref!=null&&Ds(V.ref,null,G,V,!0)},m=(V,$,R,N)=>{if(V==null)i($.el=a($.children),R,N);else{const O=$.el=V.el;$.children!==V.children&&c(O,$.children)}},p=(V,$,R,N)=>{V==null?i($.el=l($.children||""),R,N):$.el=V.el},M=(V,$,R,N)=>{[V.el,V.anchor]=g(V.children,$,R,N,V.el,V.anchor)},y=({el:V,anchor:$},R,N)=>{let O;for(;V&&V!==$;)O=d(V),i(V,R,N),V=O;i($,R,N)},b=({el:V,anchor:$})=>{let R;for(;V&&V!==$;)R=d(V),r(V),V=R;r($)},L=(V,$,R,N,O,G,w,ie,Q)=>{if($.type==="svg"?w="svg":$.type==="math"&&(w="mathml"),V==null)B($,R,N,O,G,w,ie,Q);else{const J=V.el&&V.el._isVueCE?V.el:null;try{J&&J._beginPatch(),_(V,$,O,G,w,ie,Q)}finally{J&&J._endPatch()}}},B=(V,$,R,N,O,G,w,ie)=>{let Q,J;const{props:te,shapeFlag:A,transition:S,dirs:W}=V;if(Q=V.el=s(V.type,G,te&&te.is,te),A&8?u(Q,V.children):A&16&&v(V.children,Q,null,N,O,Yc(V,G),w,ie),W&&Dr(V,null,N,"created"),z(Q,V,V.scopeId,w,N),te){for(const ue in te)ue!=="value"&&!Rs(ue)&&o(Q,ue,null,te[ue],G,N);"value"in te&&o(Q,"value",null,te.value,G),(J=te.onVnodeBeforeMount)&&Qn(J,N,V)}W&&Dr(V,null,N,"beforeMount");const re=Ny(O,S);re&&S.beforeEnter(Q),i(Q,$,R),((J=te&&te.onVnodeMounted)||re||W)&&mn(()=>{J&&Qn(J,N,V),re&&S.enter(Q),W&&Dr(V,null,N,"mounted")},O)},z=(V,$,R,N,O)=>{if(R&&h(V,R),N)for(let G=0;G<N.length;G++)h(V,N[G]);if(O){let G=O.subTree;if($===G||xv(G.type)&&(G.ssContent===$||G.ssFallback===$)){const w=O.vnode;z(V,w,w.scopeId,w.slotScopeIds,O.parent)}}},v=(V,$,R,N,O,G,w,ie,Q=0)=>{for(let J=Q;J<V.length;J++){const te=V[J]=ie?Ni(V[J]):ri(V[J]);x(null,te,$,R,N,O,G,w,ie)}},_=(V,$,R,N,O,G,w)=>{const ie=$.el=V.el;let{patchFlag:Q,dynamicChildren:J,dirs:te}=$;Q|=V.patchFlag&16;const A=V.props||Rt,S=$.props||Rt;let W;if(R&&Lr(R,!1),(W=S.onVnodeBeforeUpdate)&&Qn(W,R,$,V),te&&Dr($,V,R,"beforeUpdate"),R&&Lr(R,!0),(A.innerHTML&&S.innerHTML==null||A.textContent&&S.textContent==null)&&u(ie,""),J?D(V.dynamicChildren,J,ie,R,N,Yc($,O),G):w||k(V,$,ie,null,R,N,Yc($,O),G,!1),Q>0){if(Q&16)I(ie,A,S,R,O);else if(Q&2&&A.class!==S.class&&o(ie,"class",null,S.class,O),Q&4&&o(ie,"style",A.style,S.style,O),Q&8){const re=$.dynamicProps;for(let ue=0;ue<re.length;ue++){const oe=re[ue],Pe=A[oe],be=S[oe];(be!==Pe||oe==="value")&&o(ie,oe,Pe,be,O,R)}}Q&1&&V.children!==$.children&&u(ie,$.children)}else!w&&J==null&&I(ie,A,S,R,O);((W=S.onVnodeUpdated)||te)&&mn(()=>{W&&Qn(W,R,$,V),te&&Dr($,V,R,"updated")},N)},D=(V,$,R,N,O,G,w)=>{for(let ie=0;ie<$.length;ie++){const Q=V[ie],J=$[ie],te=Q.el&&(Q.type===dt||!ls(Q,J)||Q.shapeFlag&198)?f(Q.el):R;x(Q,J,te,null,N,O,G,w,!0)}},I=(V,$,R,N,O)=>{if($!==R){if($!==Rt)for(const G in $)!Rs(G)&&!(G in R)&&o(V,G,$[G],null,O,N);for(const G in R){if(Rs(G))continue;const w=R[G],ie=$[G];w!==ie&&G!=="value"&&o(V,G,ie,w,O,N)}"value"in R&&o(V,"value",$.value,R.value,O)}},C=(V,$,R,N,O,G,w,ie,Q)=>{const J=$.el=V?V.el:a(""),te=$.anchor=V?V.anchor:a("");let{patchFlag:A,dynamicChildren:S,slotScopeIds:W}=$;W&&(ie=ie?ie.concat(W):W),V==null?(i(J,R,N),i(te,R,N),v($.children||[],R,te,O,G,w,ie,Q)):A>0&&A&64&&S&&V.dynamicChildren&&V.dynamicChildren.length===S.length?(D(V.dynamicChildren,S,R,O,G,w,ie),($.key!=null||O&&$===O.subTree)&&gv(V,$,!0)):k(V,$,R,te,O,G,w,ie,Q)},X=(V,$,R,N,O,G,w,ie,Q)=>{$.slotScopeIds=ie,V==null?$.shapeFlag&512?O.ctx.activate($,R,N,w,Q):E($,R,N,O,G,w,Q):U(V,$,Q)},E=(V,$,R,N,O,G,w)=>{const ie=V.component=zy(V,N,O);if(Xg(V)&&(ie.ctx.renderer=xe),Vy(ie,!1,w),ie.asyncDep){if(O&&O.registerDep(ie,T,w),!V.el){const Q=ie.subTree=rt(Ki);p(null,Q,$,R),V.placeholder=Q.el}}else T(ie,V,$,R,O,G,w)},U=(V,$,R)=>{const N=$.component=V.component;if(Sy(V,$,R))if(N.asyncDep&&!N.asyncResolved){P(N,$,R);return}else N.next=$,N.update();else $.el=V.el,N.vnode=$},T=(V,$,R,N,O,G,w)=>{const ie=()=>{if(V.isMounted){let{next:A,bu:S,u:W,parent:re,vnode:ue}=V;{const We=vv(V);if(We){A&&(A.el=ue.el,P(V,A,w)),We.asyncDep.then(()=>{mn(()=>{V.isUnmounted||J()},O)});return}}let oe=A,Pe;Lr(V,!1),A?(A.el=ue.el,P(V,A,w)):A=ue,S&&Vc(S),(Pe=A.props&&A.props.onVnodeBeforeUpdate)&&Qn(Pe,re,A,ue),Lr(V,!0);const be=Hh(V),ke=V.subTree;V.subTree=be,x(ke,be,f(ke.el),ne(ke),V,O,G),A.el=be.el,oe===null&&My(V,be.el),W&&mn(W,O),(Pe=A.props&&A.props.onVnodeUpdated)&&mn(()=>Qn(Pe,re,A,ue),O)}else{let A;const{el:S,props:W}=$,{bm:re,m:ue,parent:oe,root:Pe,type:be}=V,ke=Oo($);Lr(V,!1),re&&Vc(re),!ke&&(A=W&&W.onVnodeBeforeMount)&&Qn(A,oe,$),Lr(V,!0);{Pe.ce&&Pe.ce._hasShadowRoot()&&Pe.ce._injectChildStyle(be);const We=V.subTree=Hh(V);x(null,We,R,N,V,O,G),$.el=We.el}if(ue&&mn(ue,O),!ke&&(A=W&&W.onVnodeMounted)){const We=$;mn(()=>Qn(A,oe,We),O)}($.shapeFlag&256||oe&&Oo(oe.vnode)&&oe.vnode.shapeFlag&256)&&V.a&&mn(V.a,O),V.isMounted=!0,$=R=N=null}};V.scope.on();const Q=V.effect=new bg(ie);V.scope.off();const J=V.update=Q.run.bind(Q),te=V.job=Q.runIfDirty.bind(Q);te.i=V,te.id=V.uid,Q.scheduler=()=>Nd(te),Lr(V,!0),J()},P=(V,$,R)=>{$.component=V;const N=V.vnode.props;V.vnode=$,V.next=null,wy(V,$.props,N,R),Ry(V,$.children,R),Xi(),Dh(V),Yi()},k=(V,$,R,N,O,G,w,ie,Q=!1)=>{const J=V&&V.children,te=V?V.shapeFlag:0,A=$.children,{patchFlag:S,shapeFlag:W}=$;if(S>0){if(S&128){q(J,A,R,N,O,G,w,ie,Q);return}else if(S&256){Y(J,A,R,N,O,G,w,ie,Q);return}}W&8?(te&16&&Z(J,O,G),A!==J&&u(R,A)):te&16?W&16?q(J,A,R,N,O,G,w,ie,Q):Z(J,O,G,!0):(te&8&&u(R,""),W&16&&v(A,R,N,O,G,w,ie,Q))},Y=(V,$,R,N,O,G,w,ie,Q)=>{V=V||Lo,$=$||Lo;const J=V.length,te=$.length,A=Math.min(J,te);let S;for(S=0;S<A;S++){const W=$[S]=Q?Ni($[S]):ri($[S]);x(V[S],W,R,null,O,G,w,ie,Q)}J>te?Z(V,O,G,!0,!1,A):v($,R,N,O,G,w,ie,Q,A)},q=(V,$,R,N,O,G,w,ie,Q)=>{let J=0;const te=$.length;let A=V.length-1,S=te-1;for(;J<=A&&J<=S;){const W=V[J],re=$[J]=Q?Ni($[J]):ri($[J]);if(ls(W,re))x(W,re,R,null,O,G,w,ie,Q);else break;J++}for(;J<=A&&J<=S;){const W=V[A],re=$[S]=Q?Ni($[S]):ri($[S]);if(ls(W,re))x(W,re,R,null,O,G,w,ie,Q);else break;A--,S--}if(J>A){if(J<=S){const W=S+1,re=W<te?$[W].el:N;for(;J<=S;)x(null,$[J]=Q?Ni($[J]):ri($[J]),R,re,O,G,w,ie,Q),J++}}else if(J>S)for(;J<=A;)K(V[J],O,G,!0),J++;else{const W=J,re=J,ue=new Map;for(J=re;J<=S;J++){const Ie=$[J]=Q?Ni($[J]):ri($[J]);Ie.key!=null&&ue.set(Ie.key,J)}let oe,Pe=0;const be=S-re+1;let ke=!1,We=0;const Se=new Array(be);for(J=0;J<be;J++)Se[J]=0;for(J=W;J<=A;J++){const Ie=V[J];if(Pe>=be){K(Ie,O,G,!0);continue}let Fe;if(Ie.key!=null)Fe=ue.get(Ie.key);else for(oe=re;oe<=S;oe++)if(Se[oe-re]===0&&ls(Ie,$[oe])){Fe=oe;break}Fe===void 0?K(Ie,O,G,!0):(Se[Fe-re]=J+1,Fe>=We?We=Fe:ke=!0,x(Ie,$[Fe],R,null,O,G,w,ie,Q),Pe++)}const we=ke?Dy(Se):Lo;for(oe=we.length-1,J=be-1;J>=0;J--){const Ie=re+J,Fe=$[Ie],Ue=$[Ie+1],tt=Ie+1<te?Ue.el||_v(Ue):N;Se[J]===0?x(null,Fe,R,tt,O,G,w,ie,Q):ke&&(oe<0||J!==we[oe]?H(Fe,R,tt,2):oe--)}}},H=(V,$,R,N,O=null)=>{const{el:G,type:w,transition:ie,children:Q,shapeFlag:J}=V;if(J&6){H(V.component.subTree,$,R,N);return}if(J&128){V.suspense.move($,R,N);return}if(J&64){w.move(V,$,R,xe);return}if(w===dt){i(G,$,R);for(let A=0;A<Q.length;A++)H(Q[A],$,R,N);i(V.anchor,$,R);return}if(w===qc){y(V,$,R);return}if(N!==2&&J&1&&ie)if(N===0)ie.beforeEnter(G),i(G,$,R),mn(()=>ie.enter(G),O);else{const{leave:A,delayLeave:S,afterLeave:W}=ie,re=()=>{V.ctx.isUnmounted?r(G):i(G,$,R)},ue=()=>{G._isLeaving&&G[jx](!0),A(G,()=>{re(),W&&W()})};S?S(G,re,ue):ue()}else i(G,$,R)},K=(V,$,R,N=!1,O=!1)=>{const{type:G,props:w,ref:ie,children:Q,dynamicChildren:J,shapeFlag:te,patchFlag:A,dirs:S,cacheIndex:W}=V;if(A===-2&&(O=!1),ie!=null&&(Xi(),Ds(ie,null,R,V,!0),Yi()),W!=null&&($.renderCache[W]=void 0),te&256){$.ctx.deactivate(V);return}const re=te&1&&S,ue=!Oo(V);let oe;if(ue&&(oe=w&&w.onVnodeBeforeUnmount)&&Qn(oe,$,V),te&6)he(V.component,R,N);else{if(te&128){V.suspense.unmount(R,N);return}re&&Dr(V,null,$,"beforeUnmount"),te&64?V.type.remove(V,$,R,xe,N):J&&!J.hasOnce&&(G!==dt||A>0&&A&64)?Z(J,$,R,!1,!0):(G===dt&&A&384||!O&&te&16)&&Z(Q,$,R),N&&le(V)}(ue&&(oe=w&&w.onVnodeUnmounted)||re)&&mn(()=>{oe&&Qn(oe,$,V),re&&Dr(V,null,$,"unmounted")},R)},le=V=>{const{type:$,el:R,anchor:N,transition:O}=V;if($===dt){ge(R,N);return}if($===qc){b(V);return}const G=()=>{r(R),O&&!O.persisted&&O.afterLeave&&O.afterLeave()};if(V.shapeFlag&1&&O&&!O.persisted){const{leave:w,delayLeave:ie}=O,Q=()=>w(R,G);ie?ie(V.el,G,Q):Q()}else G()},ge=(V,$)=>{let R;for(;V!==$;)R=d(V),r(V),V=R;r($)},he=(V,$,R)=>{const{bum:N,scope:O,job:G,subTree:w,um:ie,m:Q,a:J}=V;Wh(Q),Wh(J),N&&Vc(N),O.stop(),G&&(G.flags|=8,K(w,V,$,R)),ie&&mn(ie,$),mn(()=>{V.isUnmounted=!0},$)},Z=(V,$,R,N=!1,O=!1,G=0)=>{for(let w=G;w<V.length;w++)K(V[w],$,R,N,O)},ne=V=>{if(V.shapeFlag&6)return ne(V.component.subTree);if(V.shapeFlag&128)return V.suspense.next();const $=d(V.anchor||V.el),R=$&&$[Kx];return R?d(R):$};let de=!1;const Me=(V,$,R)=>{let N;V==null?$._vnode&&(K($._vnode,null,null,!0),N=$._vnode.component):x($._vnode||null,V,$,null,null,null,R),$._vnode=V,de||(de=!0,Dh(N),Vg(),de=!1)},xe={p:x,um:K,m:H,r:le,mt:E,mc:v,pc:k,pbc:D,n:ne,o:t};return{render:Me,hydrate:void 0,createApp:gy(Me)}}function Yc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Lr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ny(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function gv(t,e,n=!1){const i=t.children,r=e.children;if(je(i)&&je(r))for(let o=0;o<i.length;o++){const s=i[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=Ni(r[o]),a.el=s.el),!n&&a.patchFlag!==-2&&gv(s,a)),a.type===gc&&(a.patchFlag===-1&&(a=r[o]=Ni(a)),a.el=s.el),a.type===Ki&&!a.el&&(a.el=s.el)}}function Dy(t){const e=t.slice(),n=[0];let i,r,o,s,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=e[s];return n}function vv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:vv(e)}function Wh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function _v(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?_v(e.subTree):null}const xv=t=>t.__isSuspense;function Ly(t,e){e&&e.pendingBranch?je(t)?e.effects.push(...t):e.effects.push(t):Gx(t)}const dt=Symbol.for("v-fgt"),gc=Symbol.for("v-txt"),Ki=Symbol.for("v-cmt"),qc=Symbol.for("v-stc"),Fs=[];let dn=null;function ye(t=!1){Fs.push(dn=t?null:[])}function Fy(){Fs.pop(),dn=Fs[Fs.length-1]||null}let Wo=1;function Dl(t,e=!1){Wo+=t,t<0&&dn&&e&&(dn.hasOnce=!0)}function yv(t){return t.dynamicChildren=Wo>0?dn||Lo:null,Fy(),Wo>0&&dn&&dn.push(t),t}function Te(t,e,n,i,r,o){return yv(ve(t,e,n,i,r,o,!0))}function yn(t,e,n,i,r){return yv(rt(t,e,n,i,r,!0))}function Gs(t){return t?t.__v_isVNode===!0:!1}function ls(t,e){return t.type===e.type&&t.key===e.key}const bv=({key:t})=>t??null,ll=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ot(t)||Dt(t)||Je(t)?{i:jt,r:t,k:e,f:!!n}:t:null);function ve(t,e=null,n=null,i=0,r=null,o=t===dt?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&bv(e),ref:e&&ll(e),scopeId:Gg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:jt};return a?(zd(l,n),o&128&&t.normalize(l)):n&&(l.shapeFlag|=Ot(n)?8:16),Wo>0&&!s&&dn&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&dn.push(l),l}const rt=Uy;function Uy(t,e=null,n=null,i=0,r=null,o=!1){if((!t||t===jg)&&(t=Ki),Gs(t)){const a=Xo(t,e,!0);return n&&zd(a,n),Wo>0&&!o&&dn&&(a.shapeFlag&6?dn[dn.indexOf(t)]=a:dn.push(a)),a.patchFlag=-2,a}if(Wy(t)&&(t=t.__vccOpts),e){e=Oy(e);let{class:a,style:l}=e;a&&!Ot(a)&&(e.class=zt(a)),xt(l)&&(dc(l)&&!je(l)&&(l=en({},l)),e.style=Nt(l))}const s=Ot(t)?1:xv(t)?128:Zx(t)?64:xt(t)?4:Je(t)?2:0;return ve(t,e,n,i,r,s,o,!0)}function Oy(t){return t?dc(t)||uv(t)?en({},t):t:null}function Xo(t,e,n=!1,i=!1){const{props:r,ref:o,patchFlag:s,children:a,transition:l}=t,c=e?$s(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&bv(c),ref:e&&e.ref?n&&o?je(o)?o.concat(ll(e)):[o,ll(e)]:ll(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xo(t.ssContent),ssFallback:t.ssFallback&&Xo(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Ld(u,l.clone(u)),u}function kd(t=" ",e=0){return rt(gc,null,t,e)}function ct(t="",e=!1){return e?(ye(),yn(Ki,null,t)):rt(Ki,null,t)}function ri(t){return t==null||typeof t=="boolean"?rt(Ki):je(t)?rt(dt,null,t.slice()):Gs(t)?Ni(t):rt(gc,null,String(t))}function Ni(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xo(t)}function zd(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(je(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),zd(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!uv(e)?e._ctx=jt:r===3&&jt&&(jt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Je(e)?(e={default:e,_ctx:jt},n=32):(e=String(e),i&64?(n=16,e=[kd(e)]):n=8);t.children=e,t.shapeFlag|=n}function $s(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=zt([e.class,i.class]));else if(r==="style")e.style=Nt([e.style,i.style]);else if(ic(r)){const o=e[r],s=i[r];s&&o!==s&&!(je(o)&&o.includes(s))&&(e[r]=o?[].concat(o,s):s)}else r!==""&&(e[r]=i[r])}return e}function Qn(t,e,n,i=null){gi(t,e,7,[n,i])}const By=ov();let ky=0;function zy(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||By,o={uid:ky++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dv(i,r),emitsOptions:sv(i,r),emit:null,emitted:null,propsDefaults:Rt,inheritAttrs:i.inheritAttrs,ctx:Rt,data:Rt,props:Rt,attrs:Rt,slots:Rt,refs:Rt,setupState:Rt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=_y.bind(null,o),t.ce&&t.ce(o),o}let an=null;const nr=()=>an||jt;let Ll,Qu;{const t=ac(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),o=>{r.length>1?r.forEach(s=>s(o)):r[0](o)}};Ll=e("__VUE_INSTANCE_SETTERS__",n=>an=n),Qu=e("__VUE_SSR_SETTERS__",n=>Ws=n)}const ua=t=>{const e=an;return Ll(t),t.scope.on(),()=>{t.scope.off(),Ll(e)}},Xh=()=>{an&&an.scope.off(),Ll(null)};function Sv(t){return t.vnode.shapeFlag&4}let Ws=!1;function Vy(t,e=!1,n=!1){e&&Qu(e);const{props:i,children:r}=t.vnode,o=Sv(t);Ey(t,i,o,e),Cy(t,r,n||e);const s=o?Hy(t,e):void 0;return e&&Qu(!1),s}function Hy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ly);const{setup:i}=n;if(i){Xi();const r=t.setupContext=i.length>1?Ev(t):null,o=ua(t),s=ca(i,t,0,[t.props,r]),a=hg(s);if(Yi(),o(),(a||t.sp)&&!Oo(t)&&Wg(t),a){if(s.then(Xh,Xh),e)return s.then(l=>{Yh(t,l)}).catch(l=>{hc(l,t,0)});t.asyncDep=s}else Yh(t,s)}else Mv(t)}function Yh(t,e,n){Je(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xt(e)&&(t.setupState=Ug(e)),Mv(t)}function Mv(t,e,n){const i=t.type;t.render||(t.render=i.render||fi);{const r=ua(t);Xi();try{uy(t)}finally{Yi(),r()}}}const Gy={get(t,e){return sn(t,"get",""),t[e]}};function Ev(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Gy),slots:t.slots,emit:t.emit,expose:e}}function vc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ug(eo(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ls)return Ls[n](t)},has(e,n){return n in e||n in Ls}})):t.proxy}function $y(t,e=!0){return Je(t)?t.displayName||t.name:t.name||e&&t.__name}function Wy(t){return Je(t)&&"__vccOpts"in t}const He=(t,e)=>Bx(t,e,Ws);function _t(t,e,n){try{Dl(-1);const i=arguments.length;return i===2?xt(e)&&!je(e)?Gs(e)?rt(t,null,[e]):rt(t,e):rt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Gs(n)&&(n=[n]),rt(t,e,n))}finally{Dl(1)}}function Xy(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(Vi(n[i],e[i]))return!1;return Wo>0&&dn&&dn.push(t),!0}const Yy="3.5.29";let ef;const qh=typeof window<"u"&&window.trustedTypes;if(qh)try{ef=qh.createPolicy("vue",{createHTML:t=>t})}catch{}const wv=ef?t=>ef.createHTML(t):t=>t,qy="http://www.w3.org/2000/svg",Ky="http://www.w3.org/1998/Math/MathML",Ii=typeof document<"u"?document:null,Kh=Ii&&Ii.createElement("template"),Zy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Ii.createElementNS(qy,t):e==="mathml"?Ii.createElementNS(Ky,t):n?Ii.createElement(t,{is:n}):Ii.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Ii.createTextNode(t),createComment:t=>Ii.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ii.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,o){const s=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Kh.innerHTML=wv(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Kh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},jy=Symbol("_vtc");function Jy(t,e,n){const i=t[jy];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Fl=Symbol("_vod"),Tv=Symbol("_vsh"),Zh={name:"show",beforeMount(t,{value:e},{transition:n}){t[Fl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):cs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),cs(t,!0),i.enter(t)):i.leave(t,()=>{cs(t,!1)}):cs(t,e))},beforeUnmount(t,{value:e}){cs(t,e)}};function cs(t,e){t.style.display=e?t[Fl]:"none",t[Tv]=!e}const Qy=Symbol(""),eb=/(?:^|;)\s*display\s*:/;function tb(t,e,n){const i=t.style,r=Ot(n);let o=!1;if(n&&!r){if(e)if(Ot(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();n[a]==null&&cl(i,a,"")}else for(const s in e)n[s]==null&&cl(i,s,"");for(const s in n)s==="display"&&(o=!0),cl(i,s,n[s])}else if(r){if(e!==n){const s=i[Qy];s&&(n+=";"+s),i.cssText=n,o=eb.test(n)}}else e&&t.removeAttribute("style");Fl in t&&(t[Fl]=o?i.display:"",t[Tv]&&(i.display="none"))}const jh=/\s*!important$/;function cl(t,e,n){if(je(n))n.forEach(i=>cl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=nb(t,e);jh.test(n)?t.setProperty(fo(i),n.replace(jh,""),"important"):t[i]=n}}const Jh=["Webkit","Moz","ms"],Kc={};function nb(t,e){const n=Kc[e];if(n)return n;let i=Ln(e);if(i!=="filter"&&i in t)return Kc[e]=i;i=sc(i);for(let r=0;r<Jh.length;r++){const o=Jh[r]+i;if(o in t)return Kc[e]=o}return e}const Qh="http://www.w3.org/1999/xlink";function ep(t,e,n,i,r,o=cx(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Qh,e.slice(6,e.length)):t.setAttributeNS(Qh,e,n):n==null||o&&!vg(n)?t.removeAttribute(e):t.setAttribute(e,o?"":Xn(n)?String(n):n)}function tp(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?wv(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let s=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=vg(n):n==null&&a==="string"?(n="",s=!0):a==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(r||e)}function ib(t,e,n,i){t.addEventListener(e,n,i)}function rb(t,e,n,i){t.removeEventListener(e,n,i)}const np=Symbol("_vei");function ob(t,e,n,i,r=null){const o=t[np]||(t[np]={}),s=o[e];if(i&&s)s.value=i;else{const[a,l]=sb(e);if(i){const c=o[e]=cb(i,r);ib(t,a,c,l)}else s&&(rb(t,a,s,l),o[e]=void 0)}}const ip=/(?:Once|Passive|Capture)$/;function sb(t){let e;if(ip.test(t)){e={};let i;for(;i=t.match(ip);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):fo(t.slice(2)),e]}let Zc=0;const ab=Promise.resolve(),lb=()=>Zc||(ab.then(()=>Zc=0),Zc=Date.now());function cb(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;gi(ub(i,n.value),e,5,[i])};return n.value=t,n.attached=lb(),n}function ub(t,e){if(je(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const rp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,fb=(t,e,n,i,r,o)=>{const s=r==="svg";e==="class"?Jy(t,i,s):e==="style"?tb(t,n,i):ic(e)?Ed(e)||ob(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):db(t,e,i,s))?(tp(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ep(t,e,i,s,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ot(i))?tp(t,Ln(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),ep(t,e,i,s))};function db(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&rp(e)&&Je(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return rp(e)&&Ot(n)?!1:e in t}const hb=["ctrl","shift","alt","meta"],pb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hb.some(n=>t[`${n}Key`]&&!e.includes(n))},at=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...o)=>{for(let s=0;s<e.length;s++){const a=pb[e[s]];if(a&&a(r,e))return}return t(r,...o)}))},mb=en({patchProp:fb},Zy);let op;function gb(){return op||(op=Py(mb))}const vb=((...t)=>{const e=gb().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=xb(i);if(!r)return;const o=e._component;!Je(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=n(r,!1,_b(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e});function _b(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function xb(t){return Ot(t)?document.querySelector(t):t}let Av;const _c=t=>Av=t,Cv=Symbol();function tf(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Us;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Us||(Us={}));function yb(){const t=lc(!0),e=t.run(()=>Ke({}));let n=[],i=[];const r=eo({install(o){_c(r),r._a=o,o.provide(Cv,r),o.config.globalProperties.$pinia=r,i.forEach(s=>n.push(s)),i=[]},use(o){return this._a?n.push(o):i.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Rv=()=>{};function sp(t,e,n,i=Rv){t.add(e);const r=()=>{t.delete(e)&&i()};return!n&&cc()&&Ps(r),r}function go(t,...e){t.forEach(n=>{n(...e)})}const bb=t=>t(),ap=Symbol(),jc=Symbol();function nf(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];tf(r)&&tf(i)&&t.hasOwnProperty(n)&&!Dt(i)&&!Hi(i)?t[n]=nf(r,i):t[n]=i}return t}const Sb=Symbol();function Mb(t){return!tf(t)||!Object.prototype.hasOwnProperty.call(t,Sb)}const{assign:hr}=Object;function Eb(t){return!!(Dt(t)&&t.effect)}function wb(t,e,n,i){const{state:r,actions:o,getters:s}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=Og(n.state.value[t]);return hr(u,o,Object.keys(s||{}).reduce((f,d)=>(f[d]=eo(He(()=>{_c(n);const h=n._s.get(t);return s[d].call(h,h)})),f),{}))}return l=Pv(t,c,e,n,i,!0),l}function Pv(t,e,n={},i,r,o){let s;const a=hr({actions:{}},n),l={deep:!0};let c,u,f=new Set,d=new Set,h;const g=i.state.value[t];!o&&!g&&(i.state.value[t]={});let x;function m(v){let _;c=u=!1,typeof v=="function"?(v(i.state.value[t]),_={type:Us.patchFunction,storeId:t,events:h}):(nf(i.state.value[t],v),_={type:Us.patchObject,payload:v,storeId:t,events:h});const D=x=Symbol();Nn().then(()=>{x===D&&(c=!0)}),u=!0,go(f,_,i.state.value[t])}const p=o?function(){const{state:_}=n,D=_?_():{};this.$patch(I=>{hr(I,D)})}:Rv;function M(){s.stop(),f.clear(),d.clear(),i._s.delete(t)}const y=(v,_="")=>{if(ap in v)return v[jc]=_,v;const D=function(){_c(i);const I=Array.from(arguments),C=new Set,X=new Set;function E(P){C.add(P)}function U(P){X.add(P)}go(d,{args:I,name:D[jc],store:L,after:E,onError:U});let T;try{T=v.apply(this&&this.$id===t?this:L,I)}catch(P){throw go(X,P),P}return T instanceof Promise?T.then(P=>(go(C,P),P)).catch(P=>(go(X,P),Promise.reject(P))):(go(C,T),T)};return D[ap]=!0,D[jc]=_,D},b={_p:i,$id:t,$onAction:sp.bind(null,d),$patch:m,$reset:p,$subscribe(v,_={}){const D=sp(f,v,_.detached,()=>I()),I=s.run(()=>ft(()=>i.state.value[t],C=>{(_.flush==="sync"?u:c)&&v({storeId:t,type:Us.direct,events:h},C)},hr({},l,_)));return D},$dispose:M},L=wr(b);i._s.set(t,L);const z=(i._a&&i._a.runWithContext||bb)(()=>i._e.run(()=>(s=lc()).run(()=>e({action:y}))));for(const v in z){const _=z[v];if(Dt(_)&&!Eb(_)||Hi(_))o||(g&&Mb(_)&&(Dt(_)?_.value=g[v]:nf(_,g[v])),i.state.value[t][v]=_);else if(typeof _=="function"){const D=y(_,v);z[v]=D,a.actions[v]=_}}return hr(L,z),hr(mt(L),z),Object.defineProperty(L,"$state",{get:()=>i.state.value[t],set:v=>{m(_=>{hr(_,v)})}}),i._p.forEach(v=>{hr(L,s.run(()=>v({store:L,app:i._a,pinia:i,options:a})))}),g&&o&&n.hydrate&&n.hydrate(L.$state,g),c=!0,u=!0,L}function Tb(t,e,n){let i;const r=typeof e=="function";i=r?n:e;function o(s,a){const l=$x();return s=s||(l?Dn(Cv,null):null),s&&_c(s),s=Av,s._s.has(t)||(r?Pv(t,e,i,s):wb(t,i,s)),s._s.get(t)}return o.$id=t,o}const Vd="183",Ab=0,lp=1,Cb=2,ul=1,Rb=2,Ss=3,Ar=0,xn=1,Fi=2,Gi=0,Bo=1,cp=2,up=3,fp=4,Pb=5,$r=100,Ib=101,Nb=102,Db=103,Lb=104,Fb=200,Ub=201,Ob=202,Bb=203,rf=204,of=205,kb=206,zb=207,Vb=208,Hb=209,Gb=210,$b=211,Wb=212,Xb=213,Yb=214,sf=0,af=1,lf=2,Yo=3,cf=4,uf=5,ff=6,df=7,Iv=0,qb=1,Kb=2,di=0,Nv=1,Dv=2,Lv=3,Fv=4,Uv=5,Ov=6,Bv=7,kv=300,so=301,qo=302,Jc=303,Qc=304,xc=306,hf=1e3,Oi=1001,pf=1002,Jt=1003,Zb=1004,wa=1005,wt=1006,eu=1007,Kr=1008,fn=1009,zv=1010,Vv=1011,Xs=1012,Hd=1013,vi=1014,ci=1015,Zi=1016,Gd=1017,$d=1018,Ys=1020,Hv=35902,Gv=35899,$v=1021,Wv=1022,hn=1023,ji=1026,Zr=1027,Xv=1028,Wd=1029,Ko=1030,Xd=1031,Yd=1033,fl=33776,dl=33777,hl=33778,pl=33779,mf=35840,gf=35841,vf=35842,_f=35843,xf=36196,yf=37492,bf=37496,Sf=37488,Mf=37489,Ef=37490,wf=37491,Tf=37808,Af=37809,Cf=37810,Rf=37811,Pf=37812,If=37813,Nf=37814,Df=37815,Lf=37816,Ff=37817,Uf=37818,Of=37819,Bf=37820,kf=37821,zf=36492,Vf=36494,Hf=36495,Gf=36283,$f=36284,Wf=36285,Xf=36286,jb=3200,Jb=0,Qb=1,yr="",In="srgb",Cr="srgb-linear",Ul="linear",bt="srgb",vo=7680,dp=519,eS=512,tS=513,nS=514,qd=515,iS=516,rS=517,Kd=518,oS=519,hp=35044,pp="300 es",ui=2e3,Ol=2001;function sS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function aS(){const t=Bl("canvas");return t.style.display="block",t}const mp={};function gp(...t){const e="THREE."+t.shift();console.log(e,...t)}function Yv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function et(...t){t=Yv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function gt(...t){t=Yv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function kl(...t){const e=t.join(" ");e in mp||(mp[e]=!0,et(...t))}function lS(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const cS={[sf]:af,[lf]:ff,[cf]:df,[Yo]:uf,[af]:sf,[ff]:lf,[df]:cf,[uf]:Yo};class rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tu=Math.PI/180,Yf=180/Math.PI;function fa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function ut(t,e,n){return Math.max(e,Math.min(n,t))}function uS(t,e){return(t%e+e)%e}function nu(t,e,n){return(1-n)*t+n*e}function us(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class St{constructor(e=0,n=0){St.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ut(this.x,e.x,n.x),this.y=ut(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ut(this.x,e,n),this.y=ut(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class os{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=o[s+0],h=o[s+1],g=o[s+2],x=o[s+3];if(f!==x||l!==d||c!==h||u!==g){let m=l*d+c*h+u*g+f*x;m<0&&(d=-d,h=-h,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){const M=Math.acos(m),y=Math.sin(M);p=Math.sin(p*M)/y,a=Math.sin(a*M)/y,l=l*p+d*a,c=c*p+h*a,u=u*p+g*a,f=f*p+x*a}else{l=l*p+d*a,c=c*p+h*a,u=u*p+g*a,f=f*p+x*a;const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=o[s],d=o[s+1],h=o[s+2],g=o[s+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(o/2),d=l(i/2),h=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(o-c)*h,this._z=(s-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(o+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(o-c)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(s-r)/h,this._x=(o+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+s*a+r*c-o*l,this._y=r*u+s*l+o*a-i*c,this._z=o*u+s*c+i*l-r*a,this._w=s*u-i*a-r*l-o*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,o=-o,s=-s,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+o*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+o*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,n=0,i=0){ce.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(vp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(vp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,c=2*(s*r-a*i),u=2*(a*n-o*r),f=2*(o*i-s*n);return this.x=n+l*c+s*f-a*u,this.y=i+l*u+a*c-o*f,this.z=r+l*f+o*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ut(this.x,e.x,n.x),this.y=ut(this.y,e.y,n.y),this.z=ut(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ut(this.x,e,n),this.y=ut(this.y,e,n),this.z=ut(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const iu=new ce,vp=new os;class it{constructor(e,n,i,r,o,s,a,l,c){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c)}set(e,n,i,r,o,s,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=o,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],x=r[0],m=r[3],p=r[6],M=r[1],y=r[4],b=r[7],L=r[2],B=r[5],z=r[8];return o[0]=s*x+a*M+l*L,o[3]=s*m+a*y+l*B,o[6]=s*p+a*b+l*z,o[1]=c*x+u*M+f*L,o[4]=c*m+u*y+f*B,o[7]=c*p+u*b+f*z,o[2]=d*x+h*M+g*L,o[5]=d*m+h*y+g*B,o[8]=d*p+h*b+g*z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*s*u-n*a*c-i*o*u+i*a*l+r*o*c-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*s-a*c,d=a*l-u*o,h=c*o-s*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*s)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*o-a*n)*x,e[6]=h*x,e[7]=(i*l-c*n)*x,e[8]=(s*n-i*o)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*s+c*a)+s+e,-r*c,r*l,-r*(-c*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ru.makeScale(e,n)),this}rotate(e){return this.premultiply(ru.makeRotation(-e)),this}translate(e,n){return this.premultiply(ru.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ru=new it,_p=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xp=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fS(){const t={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===bt&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===bt&&(r.r=ko(r.r),r.g=ko(r.g),r.b=ko(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yr?Ul:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return kl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return kl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Cr]:{primaries:e,whitePoint:i,transfer:Ul,toXYZ:_p,fromXYZ:xp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:_p,fromXYZ:xp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),t}const ht=fS();function $i(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ko(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let _o;class dS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_o===void 0&&(_o=Bl("canvas")),_o.width=e.width,_o.height=e.height;const r=_o.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=_o}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=$i(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor($i(n[i]/255)*255):n[i]=$i(n[i]);return{data:n,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hS=0;class Zd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=fa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(ou(r[s].image)):o.push(ou(r[s]))}else o=ou(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function ou(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?dS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}let pS=0;const su=new ce;class Qt extends rs{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=Oi,r=Oi,o=wt,s=Kr,a=hn,l=fn,c=Qt.DEFAULT_ANISOTROPY,u=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=fa(),this.name="",this.source=new Zd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(su).x}get height(){return this.source.getSize(su).y}get depth(){return this.source.getSize(su).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){et(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){et(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hf:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case pf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hf:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case pf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=kv;Qt.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,n=0,i=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,b=(h+1)/2,L=(p+1)/2,B=(u+d)/4,z=(f+x)/4,v=(g+m)/4;return y>b&&y>L?y<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(y),r=B/i,o=z/i):b>L?b<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(b),i=B/r,o=v/r):L<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(L),i=z/o,r=v/o),this.set(i,r,o,n),this}let M=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-x)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ut(this.x,e.x,n.x),this.y=ut(this.y,e.y,n.y),this.z=ut(this.z,e.z,n.z),this.w=ut(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ut(this.x,e,n),this.y=ut(this.y,e,n),this.z=ut(this.z,e,n),this.w=ut(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ut(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mS extends rs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new kt(0,0,e,n),this.scissorTest=!1,this.viewport=new kt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},o=new Qt(r),s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:wt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Zd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends mS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class qv extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gS extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $t{constructor(e,n,i,r,o,s,a,l,c,u,f,d,h,g,x,m){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,c,u,f,d,h,g,x,m)}set(e,n,i,r,o,s,a,l,c,u,f,d,h,g,x,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/xo.setFromMatrixColumn(e,0).length(),o=1/xo.setFromMatrixColumn(e,1).length(),s=1/xo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const d=s*u,h=s*f,g=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=g+h*c,n[10]=s*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,x=c*f;n[0]=d+x*a,n[4]=g*a-h,n[8]=s*c,n[1]=s*f,n[5]=s*u,n[9]=-a,n[2]=h*a-g,n[6]=x+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,x=c*f;n[0]=d-x*a,n[4]=-s*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=s*u,n[9]=x-d*a,n[2]=-s*c,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*u,h=s*f,g=a*u,x=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,h=s*c,g=a*l,x=a*c;n[0]=l*u,n[4]=x-d*f,n[8]=g*f+h,n[1]=f,n[5]=s*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-x*f}else if(e.order==="XZY"){const d=s*l,h=s*c,g=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+x,n[5]=s*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vS,e,_S)}lookAt(e,n,i){const r=this.elements;return Sn.subVectors(e,n),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),sr.crossVectors(i,Sn),sr.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),sr.crossVectors(i,Sn)),sr.normalize(),Ta.crossVectors(Sn,sr),r[0]=sr.x,r[4]=Ta.x,r[8]=Sn.x,r[1]=sr.y,r[5]=Ta.y,r[9]=Sn.y,r[2]=sr.z,r[6]=Ta.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],x=i[6],m=i[10],p=i[14],M=i[3],y=i[7],b=i[11],L=i[15],B=r[0],z=r[4],v=r[8],_=r[12],D=r[1],I=r[5],C=r[9],X=r[13],E=r[2],U=r[6],T=r[10],P=r[14],k=r[3],Y=r[7],q=r[11],H=r[15];return o[0]=s*B+a*D+l*E+c*k,o[4]=s*z+a*I+l*U+c*Y,o[8]=s*v+a*C+l*T+c*q,o[12]=s*_+a*X+l*P+c*H,o[1]=u*B+f*D+d*E+h*k,o[5]=u*z+f*I+d*U+h*Y,o[9]=u*v+f*C+d*T+h*q,o[13]=u*_+f*X+d*P+h*H,o[2]=g*B+x*D+m*E+p*k,o[6]=g*z+x*I+m*U+p*Y,o[10]=g*v+x*C+m*T+p*q,o[14]=g*_+x*X+m*P+p*H,o[3]=M*B+y*D+b*E+L*k,o[7]=M*z+y*I+b*U+L*Y,o[11]=M*v+y*C+b*T+L*q,o[15]=M*_+y*X+b*P+L*H,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],x=e[7],m=e[11],p=e[15],M=l*h-c*d,y=a*h-c*f,b=a*d-l*f,L=s*h-c*u,B=s*d-l*u,z=s*f-a*u;return n*(x*M-m*y+p*b)-i*(g*M-m*L+p*B)+r*(g*y-x*L+p*z)-o*(g*b-x*B+m*z)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],x=e[13],m=e[14],p=e[15],M=n*a-i*s,y=n*l-r*s,b=n*c-o*s,L=i*l-r*a,B=i*c-o*a,z=r*c-o*l,v=u*x-f*g,_=u*m-d*g,D=u*p-h*g,I=f*m-d*x,C=f*p-h*x,X=d*p-h*m,E=M*X-y*C+b*I+L*D-B*_+z*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/E;return e[0]=(a*X-l*C+c*I)*U,e[1]=(r*C-i*X-o*I)*U,e[2]=(x*z-m*B+p*L)*U,e[3]=(d*B-f*z-h*L)*U,e[4]=(l*D-s*X-c*_)*U,e[5]=(n*X-r*D+o*_)*U,e[6]=(m*b-g*z-p*y)*U,e[7]=(u*z-d*b+h*y)*U,e[8]=(s*C-a*D+c*v)*U,e[9]=(i*D-n*C-o*v)*U,e[10]=(g*B-x*b+p*M)*U,e[11]=(f*b-u*B-h*M)*U,e[12]=(a*_-s*I-l*v)*U,e[13]=(n*I-i*_+r*v)*U,e[14]=(x*y-g*L-m*M)*U,e[15]=(u*L-f*y+d*M)*U,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,c=o*s,u=o*a;return this.set(c*s+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*s,0,c*l-r*a,u*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,c=o+o,u=s+s,f=a+a,d=o*c,h=o*u,g=o*f,x=s*u,m=s*f,p=a*f,M=l*c,y=l*u,b=l*f,L=i.x,B=i.y,z=i.z;return r[0]=(1-(x+p))*L,r[1]=(h+b)*L,r[2]=(g-y)*L,r[3]=0,r[4]=(h-b)*B,r[5]=(1-(d+p))*B,r[6]=(m+M)*B,r[7]=0,r[8]=(g+y)*z,r[9]=(m-M)*z,r[10]=(1-(d+x))*z,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const o=this.determinant();if(o===0)return i.set(1,1,1),n.identity(),this;let s=xo.set(r[0],r[1],r[2]).length();const a=xo.set(r[4],r[5],r[6]).length(),l=xo.set(r[8],r[9],r[10]).length();o<0&&(s=-s),Un.copy(this);const c=1/s,u=1/a,f=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=f,Un.elements[9]*=f,Un.elements[10]*=f,n.setFromRotationMatrix(Un),i.x=s,i.y=a,i.z=l,this}makePerspective(e,n,i,r,o,s,a=ui,l=!1){const c=this.elements,u=2*o/(n-e),f=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,x;if(l)g=o/(s-o),x=s*o/(s-o);else if(a===ui)g=-(s+o)/(s-o),x=-2*s*o/(s-o);else if(a===Ol)g=-s/(s-o),x=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=ui,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),h=-(i+r)/(i-r);let g,x;if(l)g=1/(s-o),x=s/(s-o);else if(a===ui)g=-2/(s-o),x=-(s+o)/(s-o);else if(a===Ol)g=-1/(s-o),x=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xo=new ce,Un=new $t,vS=new ce(0,0,0),_S=new ce(1,1,1),sr=new ce,Ta=new ce,Sn=new ce,yp=new $t,bp=new os;class Ji{constructor(e=0,n=0,i=0,r=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-u,h),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bp.setFromEuler(this),this.setFromQuaternion(bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class Kv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xS=0;const Sp=new ce,yo=new os,Ei=new $t,Aa=new ce,fs=new ce,yS=new ce,bS=new os,Mp=new ce(1,0,0),Ep=new ce(0,1,0),wp=new ce(0,0,1),Tp={type:"added"},SS={type:"removed"},bo={type:"childadded",child:null},au={type:"childremoved",child:null};class An extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new ce,n=new Ji,i=new os,r=new ce(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $t},normalMatrix:{value:new it}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return yo.setFromAxisAngle(e,n),this.quaternion.multiply(yo),this}rotateOnWorldAxis(e,n){return yo.setFromAxisAngle(e,n),this.quaternion.premultiply(yo),this}rotateX(e){return this.rotateOnAxis(Mp,e)}rotateY(e){return this.rotateOnAxis(Ep,e)}rotateZ(e){return this.rotateOnAxis(wp,e)}translateOnAxis(e,n){return Sp.copy(e).applyQuaternion(this.quaternion),this.position.add(Sp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mp,e)}translateY(e){return this.translateOnAxis(Ep,e)}translateZ(e){return this.translateOnAxis(wp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Aa.copy(e):Aa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(fs,Aa,this.up):Ei.lookAt(Aa,fs,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),yo.setFromRotationMatrix(Ei),this.quaternion.premultiply(yo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tp),bo.child=e,this.dispatchEvent(bo),bo.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(SS),au.child=e,this.dispatchEvent(au),au.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tp),bo.child=e,this.dispatchEvent(bo),bo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,yS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,bS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,o=this.matrix.elements;o[12]+=n-o[0]*n-o[4]*i-o[8]*r,o[13]+=i-o[1]*n-o[5]*i-o[9]*r,o[14]+=r-o[2]*n-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),f=s(e.shapes),d=s(e.skeletons),h=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}An.DEFAULT_UP=new ce(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ca extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MS={type:"move"};class lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(MS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ca;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Zv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function cu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}let At=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ht.workingColorSpace){return this.r=e,this.g=n,this.b=i,ht.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ht.workingColorSpace){if(e=uS(e,1),n=ut(n,0,1),i=ut(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=cu(s,o,e+1/3),this.g=cu(s,o,e),this.b=cu(s,o,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,n=In){function i(o){o!==void 0&&parseFloat(o)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:et("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=Zv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return ht.workingToColorSpace(rn.copy(this),e),Math.round(ut(rn.r*255,0,255))*65536+Math.round(ut(rn.g*255,0,255))*256+Math.round(ut(rn.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ht.workingColorSpace){ht.workingToColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,o=rn.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const f=s-a;switch(c=u<=.5?f/(s+a):f/(2-s-a),s){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ht.workingColorSpace){return ht.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=In){ht.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+n,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ar),e.getHSL(Ra);const i=nu(ar.h,Ra.h,n),r=nu(ar.s,Ra.s,n),o=nu(ar.l,Ra.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const rn=new At;At.NAMES=Zv;class ES extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const On=new ce,wi=new ce,uu=new ce,Ti=new ce,So=new ce,Mo=new ce,Ap=new ce,fu=new ce,du=new ce,hu=new ce,pu=new kt,mu=new kt,gu=new kt;class zn{constructor(e=new ce,n=new ce,i=new ce){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){On.subVectors(r,n),wi.subVectors(i,n),uu.subVectors(e,n);const s=On.dot(On),a=On.dot(wi),l=On.dot(uu),c=wi.dot(wi),u=wi.dot(uu),f=s*c-a*a;if(f===0)return o.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(s*u-a*l)*d;return o.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ti.x),l.addScaledVector(s,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return pu.setScalar(0),mu.setScalar(0),gu.setScalar(0),pu.fromBufferAttribute(e,n),mu.fromBufferAttribute(e,i),gu.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(pu,o.x),s.addScaledVector(mu,o.y),s.addScaledVector(gu,o.z),s}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),wi.subVectors(e,n),On.cross(wi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),On.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;So.subVectors(r,i),Mo.subVectors(o,i),fu.subVectors(e,i);const l=So.dot(fu),c=Mo.dot(fu);if(l<=0&&c<=0)return n.copy(i);du.subVectors(e,r);const u=So.dot(du),f=Mo.dot(du);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return s=l/(l-u),n.copy(i).addScaledVector(So,s);hu.subVectors(e,o);const h=So.dot(hu),g=Mo.dot(hu);if(g>=0&&h<=g)return n.copy(o);const x=h*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Mo,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Ap.subVectors(o,r),a=(f-u)/(f-u+(h-g)),n.copy(r).addScaledVector(Ap,a);const p=1/(m+x+d);return s=x*p,a=d*p,n.copy(i).addScaledVector(So,s).addScaledVector(Mo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class da{constructor(e=new ce(1/0,1/0,1/0),n=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Bn):Bn.fromBufferAttribute(o,s),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pa.copy(i.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ds),Ia.subVectors(this.max,ds),Eo.subVectors(e.a,ds),wo.subVectors(e.b,ds),To.subVectors(e.c,ds),lr.subVectors(wo,Eo),cr.subVectors(To,wo),Fr.subVectors(Eo,To);let n=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Fr.z,Fr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Fr.z,0,-Fr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Fr.y,Fr.x,0];return!vu(n,Eo,wo,To,Ia)||(n=[1,0,0,0,1,0,0,0,1],!vu(n,Eo,wo,To,Ia))?!1:(Na.crossVectors(lr,cr),n=[Na.x,Na.y,Na.z],vu(n,Eo,wo,To,Ia))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ai=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Bn=new ce,Pa=new da,Eo=new ce,wo=new ce,To=new ce,lr=new ce,cr=new ce,Fr=new ce,ds=new ce,Ia=new ce,Na=new ce,Ur=new ce;function vu(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){Ur.fromArray(t,o);const a=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),l=e.dot(Ur),c=n.dot(Ur),u=i.dot(Ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Vt=new ce,Da=new St;let wS=0;class hi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=hp,this.updateRanges=[],this.gpuType=ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Da.fromBufferAttribute(this,n),Da.applyMatrix3(e),this.setXY(n,Da.x,Da.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=us(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=us(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=us(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=us(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=us(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array),o=pn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hp&&(e.usage=this.usage),e}}class jv extends hi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Jv extends hi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Wi extends hi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const TS=new da,hs=new ce,_u=new ce;class jd{constructor(e=new ce,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):TS.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const n=hs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_u.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(_u)),this.expandByPoint(hs.copy(e.center).sub(_u))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let AS=0;const Pn=new $t,xu=new An,Ao=new ce,Mn=new da,ps=new da,Kt=new ce;class ir extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=fa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sS(e)?Jv:jv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new it().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Wi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const o=e[r];n.setXYZ(r,o.x,o.y,o.z||0)}e.length>n.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Mn.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];ps.setFromBufferAttribute(a),this.morphTargetsRelative?(Kt.addVectors(Mn.min,ps.min),Mn.expandByPoint(Kt),Kt.addVectors(Mn.max,ps.max),Mn.expandByPoint(Kt)):(Mn.expandByPoint(ps.min),Mn.expandByPoint(ps.max))}Mn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Kt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Kt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Kt.fromBufferAttribute(a,c),l&&(Ao.fromBufferAttribute(e,c),Kt.add(Ao)),r=Math.max(r,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new ce,l[v]=new ce;const c=new ce,u=new ce,f=new ce,d=new St,h=new St,g=new St,x=new ce,m=new ce;function p(v,_,D){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,_),f.fromBufferAttribute(i,D),d.fromBufferAttribute(o,v),h.fromBufferAttribute(o,_),g.fromBufferAttribute(o,D),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const I=1/(h.x*g.y-g.x*h.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(I),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(I),a[v].add(x),a[_].add(x),a[D].add(x),l[v].add(m),l[_].add(m),l[D].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,_=M.length;v<_;++v){const D=M[v],I=D.start,C=D.count;for(let X=I,E=I+C;X<E;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const y=new ce,b=new ce,L=new ce,B=new ce;function z(v){L.fromBufferAttribute(r,v),B.copy(L);const _=a[v];y.copy(_),y.sub(L.multiplyScalar(L.dot(_))).normalize(),b.crossVectors(B,_);const I=b.dot(l[v])<0?-1:1;s.setXYZW(v,y.x,y.y,y.z,I)}for(let v=0,_=M.length;v<_;++v){const D=M[v],I=D.start,C=D.count;for(let X=I,E=I+C;X<E;X+=3)z(e.getX(X+0)),z(e.getX(X+1)),z(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new ce,o=new ce,s=new ce,a=new ce,l=new ce,c=new ce,u=new ce,f=new ce;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,x),s.fromBufferAttribute(n,m),u.subVectors(s,o),f.subVectors(r,o),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),u.subVectors(s,o),f.subVectors(r,o),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Kt.fromBufferAttribute(e,n),Kt.normalize(),e.setXYZ(n,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new hi(d,u,f)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ir,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const o=e.morphAttributes;for(const c in o){const u=[],f=o[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const f=s[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let CS=0;class yc extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=fa(),this.name="",this.type="Material",this.blending=Bo,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rf,this.blendDst=of,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){et(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){et(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bo&&(i.blending=this.blending),this.side!==Ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rf&&(i.blendSrc=this.blendSrc),this.blendDst!==of&&(i.blendDst=this.blendDst),this.blendEquation!==$r&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ci=new ce,yu=new ce,La=new ce,ur=new ce,bu=new ce,Fa=new ce,Su=new ce;class RS{constructor(e=new ce,n=new ce(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yu.copy(e).add(n).multiplyScalar(.5),La.copy(n).sub(e).normalize(),ur.copy(this.origin).sub(yu);const o=e.distanceTo(n)*.5,s=-this.direction.dot(La),a=ur.dot(this.direction),l=-ur.dot(La),c=ur.lengthSq(),u=Math.abs(1-s*s);let f,d,h,g;if(u>0)if(f=s*l-a,d=s*a-l,g=o*u,f>=0)if(d>=-g)if(d<=g){const x=1/u;f*=x,d*=x,h=f*(f+s*d+2*a)+d*(s*f+d+2*l)+c}else d=o,f=Math.max(0,-(s*d+a)),h=-f*f+d*(d+2*l)+c;else d=-o,f=Math.max(0,-(s*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-s*o+a)),d=f>0?-o:Math.min(Math.max(-o,-l),o),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-o,-l),o),h=d*(d+2*l)+c):(f=Math.max(0,-(s*o+a)),d=f>0?o:Math.min(Math.max(-o,-l),o),h=-f*f+d*(d+2*l)+c);else d=s>0?-o:o,f=Math.max(0,-(s*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(yu).addScaledVector(La,d),h}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(o=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(o=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,o){bu.subVectors(n,e),Fa.subVectors(i,e),Su.crossVectors(bu,Fa);let s=this.direction.dot(Su),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;ur.subVectors(this.origin,e);const l=a*this.direction.dot(Fa.crossVectors(ur,Fa));if(l<0)return null;const c=a*this.direction.dot(bu.cross(ur));if(c<0||l+c>s)return null;const u=-a*ur.dot(Su);return u<0?null:this.at(u/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qv extends yc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=Iv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cp=new $t,Or=new RS,Ua=new jd,Rp=new ce,Oa=new ce,Ba=new ce,ka=new ce,Mu=new ce,za=new ce,Pp=new ce,Va=new ce;class _i extends An{constructor(e=new ir,n=new Qv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){za.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const u=a[l],f=o[l];u!==0&&(Mu.fromBufferAttribute(f,e),s?za.addScaledVector(Mu,u):za.addScaledVector(Mu.sub(n),u))}n.add(za)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(o),Or.copy(e.ray).recast(e.near),!(Ua.containsPoint(Or.origin)===!1&&(Or.intersectSphere(Ua,Rp)===null||Or.origin.distanceToSquared(Rp)>(e.far-e.near)**2))&&(Cp.copy(o).invert(),Or.copy(e.ray).applyMatrix4(Cp),!(i.boundingBox!==null&&Or.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Or)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,u=o.attributes.uv1,f=o.attributes.normal,d=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=s[m.materialIndex],M=Math.max(m.start,h.start),y=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let b=M,L=y;b<L;b+=3){const B=a.getX(b),z=a.getX(b+1),v=a.getX(b+2);r=Ha(this,p,e,i,c,u,f,B,z,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const M=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);r=Ha(this,s,e,i,c,u,f,M,y,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=s[m.materialIndex],M=Math.max(m.start,h.start),y=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let b=M,L=y;b<L;b+=3){const B=b,z=b+1,v=b+2;r=Ha(this,p,e,i,c,u,f,B,z,v),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const M=m,y=m+1,b=m+2;r=Ha(this,s,e,i,c,u,f,M,y,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function PS(t,e,n,i,r,o,s,a){let l;if(e.side===xn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Ar,a),l===null)return null;Va.copy(a),Va.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Va);return c<n.near||c>n.far?null:{distance:c,point:Va.clone(),object:t}}function Ha(t,e,n,i,r,o,s,a,l,c){t.getVertexPosition(a,Oa),t.getVertexPosition(l,Ba),t.getVertexPosition(c,ka);const u=PS(t,e,n,i,Oa,Ba,ka,Pp);if(u){const f=new ce;zn.getBarycoord(Pp,Oa,Ba,ka,f),r&&(u.uv=zn.getInterpolatedAttribute(r,a,l,c,f,new St)),o&&(u.uv1=zn.getInterpolatedAttribute(o,a,l,c,f,new St)),s&&(u.normal=zn.getInterpolatedAttribute(s,a,l,c,f,new ce),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new ce,materialIndex:0};zn.getNormal(Oa,Ba,ka,d.normal),u.face=d,u.barycoord=f}return u}class IS extends Qt{constructor(e=null,n=1,i=1,r,o,s,a,l,c=Jt,u=Jt,f,d){super(null,s,a,l,c,u,r,o,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Eu=new ce,NS=new ce,DS=new it;class Gr{constructor(e=new ce(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Eu.subVectors(i,n).cross(NS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Eu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||DS.getNormalMatrix(e),r=this.coplanarPoint(Eu).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new jd,LS=new St(.5,.5),Ga=new ce;class e0{constructor(e=new Gr,n=new Gr,i=new Gr,r=new Gr,o=new Gr,s=new Gr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui,i=!1){const r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],c=o[3],u=o[4],f=o[5],d=o[6],h=o[7],g=o[8],x=o[9],m=o[10],p=o[11],M=o[12],y=o[13],b=o[14],L=o[15];if(r[0].setComponents(c-s,h-u,p-g,L-M).normalize(),r[1].setComponents(c+s,h+u,p+g,L+M).normalize(),r[2].setComponents(c+a,h+f,p+x,L+y).normalize(),r[3].setComponents(c-a,h-f,p-x,L-y).normalize(),i)r[4].setComponents(l,d,m,b).normalize(),r[5].setComponents(c-l,h-d,p-m,L-b).normalize();else if(r[4].setComponents(c-l,h-d,p-m,L-b).normalize(),n===ui)r[5].setComponents(c+l,h+d,p+m,L+b).normalize();else if(n===Ol)r[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){Br.center.set(0,0,0);const n=LS.distanceTo(e.center);return Br.radius=.7071067811865476+n,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ga.x=r.normal.x>0?e.max.x:e.min.x,Ga.y=r.normal.y>0?e.max.y:e.min.y,Ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class FS extends Qt{constructor(e,n,i,r,o=wt,s=wt,a,l,c){super(e,n,i,r,o,s,a,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function f(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class t0 extends Qt{constructor(e=[],n=so,i,r,o,s,a,l,c,u){super(e,n,i,r,o,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qs extends Qt{constructor(e,n,i=vi,r,o,s,a=Jt,l=Jt,c,u=ji,f=1){if(u!==ji&&u!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,o,s,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class US extends qs{constructor(e,n=vi,i=so,r,o,s=Jt,a=Jt,l,c=ji){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,o,s,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class n0 extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ha extends ir{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,s,o,0),g("z","y","x",1,-1,i,n,-e,s,o,1),g("x","z","y",1,1,e,i,n,r,s,2),g("x","z","y",1,-1,e,i,-n,r,s,3),g("x","y","z",1,-1,e,n,i,r,o,4),g("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Wi(c,3)),this.setAttribute("normal",new Wi(u,3)),this.setAttribute("uv",new Wi(f,2));function g(x,m,p,M,y,b,L,B,z,v,_){const D=b/z,I=L/v,C=b/2,X=L/2,E=B/2,U=z+1,T=v+1;let P=0,k=0;const Y=new ce;for(let q=0;q<T;q++){const H=q*I-X;for(let K=0;K<U;K++){const le=K*D-C;Y[x]=le*M,Y[m]=H*y,Y[p]=E,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[m]=0,Y[p]=B>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(K/z),f.push(1-q/v),P+=1}}for(let q=0;q<v;q++)for(let H=0;H<z;H++){const K=d+H+U*q,le=d+H+U*(q+1),ge=d+(H+1)+U*(q+1),he=d+(H+1)+U*q;l.push(K,le,he),l.push(le,ge,he),k+=6}a.addGroup(h,k,_),h+=k,d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pa extends ir{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const M=p*d-s;for(let y=0;y<c;y++){const b=y*f-o;g.push(b,-M,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const y=M+c*p,b=M+c*(p+1),L=M+1+c*(p+1),B=M+1+c*p;h.push(y,b,B),h.push(b,L,B)}this.setIndex(h),this.setAttribute("position",new Wi(g,3)),this.setAttribute("normal",new Wi(x,3)),this.setAttribute("uv",new Wi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}function Zo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=Zo(t[n]);for(const r in i)e[r]=i[r]}return e}function OS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function i0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const BS={clone:Zo,merge:cn};var kS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qn extends yc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kS,this.fragmentShader=zS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zo(e.uniforms),this.uniformsGroups=OS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class VS extends qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class HS extends yc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jb,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GS extends yc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $a=new ce,Wa=new os,ei=new ce;class r0 extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($a,Wa,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Wa,ei.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose($a,Wa,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Wa,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const fr=new ce,Ip=new St,Np=new St;class kn extends r0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Yf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yf*2*Math.atan(Math.tan(tu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,n){return this.getViewBounds(e,Ip,Np),n.subVectors(Np,Ip)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(tu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Jd extends r0{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Co=-90,Ro=1;class $S extends An{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(Co,Ro,e,n);r.layers=this.layers,this.add(r);const o=new kn(Co,Ro,e,n);o.layers=this.layers,this.add(o);const s=new kn(Co,Ro,e,n);s.layers=this.layers,this.add(s);const a=new kn(Co,Ro,e,n);a.layers=this.layers,this.add(a);const l=new kn(Co,Ro,e,n);l.layers=this.layers,this.add(l);const c=new kn(Co,Ro,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const c of n)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class WS extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Dp(t,e,n,i){const r=XS(i);switch(n){case $v:return t*e;case Xv:return t*e/r.components*r.byteLength;case Wd:return t*e/r.components*r.byteLength;case Ko:return t*e*2/r.components*r.byteLength;case Xd:return t*e*2/r.components*r.byteLength;case Wv:return t*e*3/r.components*r.byteLength;case hn:return t*e*4/r.components*r.byteLength;case Yd:return t*e*4/r.components*r.byteLength;case fl:case dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case hl:case pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gf:case _f:return Math.max(t,16)*Math.max(e,8)/4;case mf:case vf:return Math.max(t,8)*Math.max(e,8)/2;case xf:case yf:case Sf:case Mf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bf:case Ef:case wf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case If:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Df:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Lf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Of:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case kf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case zf:case Vf:case Hf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Gf:case $f:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Wf:case Xf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function XS(t){switch(t){case fn:case zv:return{byteLength:1,components:1};case Xs:case Vv:case Zi:return{byteLength:2,components:1};case Gd:case $d:return{byteLength:2,components:4};case vi:case Hd:case ci:return{byteLength:4,components:1};case Hv:case Gv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vd}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vd);function o0(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function YS(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],x=f[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const x=f[h];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:o,update:s}}var qS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KS=`#ifdef USE_ALPHAHASH
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
#endif`,ZS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eM=`#ifdef USE_AOMAP
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
#endif`,tM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nM=`#ifdef USE_BATCHING
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
#endif`,iM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aM=`#ifdef USE_IRIDESCENCE
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
#endif`,lM=`#ifdef USE_BUMPMAP
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
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vM=`#define PI 3.141592653589793
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
} // validated`,_M=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xM=`vec3 transformedNormal = objectNormal;
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
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,MM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EM="gl_FragColor = linearToOutputTexel( gl_FragColor );",wM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TM=`#ifdef USE_ENVMAP
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
#endif`,AM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
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
#endif`,RM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,IM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,NM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FM=`#ifdef USE_GRADIENTMAP
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
}`,UM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kM=`uniform bool receiveShadow;
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
#endif`,zM=`#ifdef USE_ENVMAP
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
#endif`,VM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$M=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WM=`PhysicalMaterial material;
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
#endif`,XM=`uniform sampler2D dfgLUT;
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
}`,YM=`
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
#endif`,qM=`#if defined( RE_IndirectDiffuse )
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
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i1=`#if defined( USE_POINTS_UV )
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
#endif`,r1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,s1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c1=`#ifdef USE_MORPHTARGETS
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
#endif`,u1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,d1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g1=`#ifdef USE_NORMALMAP
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
#endif`,v1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,x1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,y1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,S1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,M1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,E1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,w1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,T1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,I1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,N1=`float getShadowMask() {
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
}`,D1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,L1=`#ifdef USE_SKINNING
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
#endif`,F1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U1=`#ifdef USE_SKINNING
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
#endif`,O1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,V1=`#ifdef USE_TRANSMISSION
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
#endif`,H1=`#ifdef USE_TRANSMISSION
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
#endif`,G1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q1=`uniform sampler2D t2D;
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
}`,K1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q1=`#include <common>
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
}`,eE=`#if DEPTH_PACKING == 3200
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
}`,tE=`#define DISTANCE
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
}`,nE=`#define DISTANCE
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
}`,iE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oE=`uniform float scale;
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
}`,sE=`uniform vec3 diffuse;
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
}`,aE=`#include <common>
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
}`,lE=`uniform vec3 diffuse;
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
}`,cE=`#define LAMBERT
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
}`,uE=`#define LAMBERT
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
}`,fE=`#define MATCAP
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
}`,dE=`#define MATCAP
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
}`,hE=`#define NORMAL
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
}`,pE=`#define NORMAL
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
}`,mE=`#define PHONG
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
}`,gE=`#define PHONG
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
}`,vE=`#define STANDARD
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
}`,_E=`#define STANDARD
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
}`,xE=`#define TOON
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
}`,yE=`#define TOON
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
}`,bE=`uniform float size;
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
}`,SE=`uniform vec3 diffuse;
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
}`,ME=`#include <common>
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
}`,EE=`uniform vec3 color;
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
}`,wE=`uniform float rotation;
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
}`,TE=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:qS,alphahash_pars_fragment:KS,alphamap_fragment:ZS,alphamap_pars_fragment:jS,alphatest_fragment:JS,alphatest_pars_fragment:QS,aomap_fragment:eM,aomap_pars_fragment:tM,batching_pars_vertex:nM,batching_vertex:iM,begin_vertex:rM,beginnormal_vertex:oM,bsdfs:sM,iridescence_fragment:aM,bumpmap_pars_fragment:lM,clipping_planes_fragment:cM,clipping_planes_pars_fragment:uM,clipping_planes_pars_vertex:fM,clipping_planes_vertex:dM,color_fragment:hM,color_pars_fragment:pM,color_pars_vertex:mM,color_vertex:gM,common:vM,cube_uv_reflection_fragment:_M,defaultnormal_vertex:xM,displacementmap_pars_vertex:yM,displacementmap_vertex:bM,emissivemap_fragment:SM,emissivemap_pars_fragment:MM,colorspace_fragment:EM,colorspace_pars_fragment:wM,envmap_fragment:TM,envmap_common_pars_fragment:AM,envmap_pars_fragment:CM,envmap_pars_vertex:RM,envmap_physical_pars_fragment:zM,envmap_vertex:PM,fog_vertex:IM,fog_pars_vertex:NM,fog_fragment:DM,fog_pars_fragment:LM,gradientmap_pars_fragment:FM,lightmap_pars_fragment:UM,lights_lambert_fragment:OM,lights_lambert_pars_fragment:BM,lights_pars_begin:kM,lights_toon_fragment:VM,lights_toon_pars_fragment:HM,lights_phong_fragment:GM,lights_phong_pars_fragment:$M,lights_physical_fragment:WM,lights_physical_pars_fragment:XM,lights_fragment_begin:YM,lights_fragment_maps:qM,lights_fragment_end:KM,logdepthbuf_fragment:ZM,logdepthbuf_pars_fragment:jM,logdepthbuf_pars_vertex:JM,logdepthbuf_vertex:QM,map_fragment:e1,map_pars_fragment:t1,map_particle_fragment:n1,map_particle_pars_fragment:i1,metalnessmap_fragment:r1,metalnessmap_pars_fragment:o1,morphinstance_vertex:s1,morphcolor_vertex:a1,morphnormal_vertex:l1,morphtarget_pars_vertex:c1,morphtarget_vertex:u1,normal_fragment_begin:f1,normal_fragment_maps:d1,normal_pars_fragment:h1,normal_pars_vertex:p1,normal_vertex:m1,normalmap_pars_fragment:g1,clearcoat_normal_fragment_begin:v1,clearcoat_normal_fragment_maps:_1,clearcoat_pars_fragment:x1,iridescence_pars_fragment:y1,opaque_fragment:b1,packing:S1,premultiplied_alpha_fragment:M1,project_vertex:E1,dithering_fragment:w1,dithering_pars_fragment:T1,roughnessmap_fragment:A1,roughnessmap_pars_fragment:C1,shadowmap_pars_fragment:R1,shadowmap_pars_vertex:P1,shadowmap_vertex:I1,shadowmask_pars_fragment:N1,skinbase_vertex:D1,skinning_pars_vertex:L1,skinning_vertex:F1,skinnormal_vertex:U1,specularmap_fragment:O1,specularmap_pars_fragment:B1,tonemapping_fragment:k1,tonemapping_pars_fragment:z1,transmission_fragment:V1,transmission_pars_fragment:H1,uv_pars_fragment:G1,uv_pars_vertex:$1,uv_vertex:W1,worldpos_vertex:X1,background_vert:Y1,background_frag:q1,backgroundCube_vert:K1,backgroundCube_frag:Z1,cube_vert:j1,cube_frag:J1,depth_vert:Q1,depth_frag:eE,distance_vert:tE,distance_frag:nE,equirect_vert:iE,equirect_frag:rE,linedashed_vert:oE,linedashed_frag:sE,meshbasic_vert:aE,meshbasic_frag:lE,meshlambert_vert:cE,meshlambert_frag:uE,meshmatcap_vert:fE,meshmatcap_frag:dE,meshnormal_vert:hE,meshnormal_frag:pE,meshphong_vert:mE,meshphong_frag:gE,meshphysical_vert:vE,meshphysical_frag:_E,meshtoon_vert:xE,meshtoon_frag:yE,points_vert:bE,points_frag:SE,shadow_vert:ME,shadow_frag:EE,sprite_vert:wE,sprite_frag:TE},Ne={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},oi={basic:{uniforms:cn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:cn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:cn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:cn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:cn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new At(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:cn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:cn([Ne.points,Ne.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:cn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:cn([Ne.common,Ne.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:cn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:cn([Ne.sprite,Ne.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:cn([Ne.common,Ne.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:cn([Ne.lights,Ne.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};oi.physical={uniforms:cn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const Xa={r:0,b:0,g:0},kr=new Ji,AE=new $t;function CE(t,e,n,i,r,o){const s=new At(0);let a=r===!0?0:1,l,c,u=null,f=0,d=null;function h(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){const b=M.backgroundBlurriness>0;y=e.get(y,b)}return y}function g(M){let y=!1;const b=h(M);b===null?m(s,a):b&&b.isColor&&(m(b,1),y=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(M,y){const b=h(y);b&&(b.isCubeTexture||b.mapping===xc)?(c===void 0&&(c=new _i(new ha(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Zo(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(L,B,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),kr.copy(y.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(AE.makeRotationFromEuler(kr)),c.material.toneMapped=ht.getTransfer(b.colorSpace)!==bt,(u!==b||f!==b.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new _i(new pa(2,2),new qn({name:"BackgroundMaterial",uniforms:Zo(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ht.getTransfer(b.colorSpace)!==bt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=t.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,y){M.getRGB(Xa,i0(t)),n.buffers.color.setClear(Xa.r,Xa.g,Xa.b,y,o)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(M,y=1){s.set(M),a=y,m(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(s,a)},render:g,addToRenderList:x,dispose:p}}function RE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let o=r,s=!1;function a(I,C,X,E,U){let T=!1;const P=f(I,E,X,C);o!==P&&(o=P,c(o.object)),T=h(I,E,X,U),T&&g(I,E,X,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(T||s)&&(s=!1,b(I,C,X,E),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function c(I){return t.bindVertexArray(I)}function u(I){return t.deleteVertexArray(I)}function f(I,C,X,E){const U=E.wireframe===!0;let T=i[C.id];T===void 0&&(T={},i[C.id]=T);const P=I.isInstancedMesh===!0?I.id:0;let k=T[P];k===void 0&&(k={},T[P]=k);let Y=k[X.id];Y===void 0&&(Y={},k[X.id]=Y);let q=Y[U];return q===void 0&&(q=d(l()),Y[U]=q),q}function d(I){const C=[],X=[],E=[];for(let U=0;U<n;U++)C[U]=0,X[U]=0,E[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:X,attributeDivisors:E,object:I,attributes:{},index:null}}function h(I,C,X,E){const U=o.attributes,T=C.attributes;let P=0;const k=X.getAttributes();for(const Y in k)if(k[Y].location>=0){const H=U[Y];let K=T[Y];if(K===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),H===void 0||H.attribute!==K||K&&H.data!==K.data)return!0;P++}return o.attributesNum!==P||o.index!==E}function g(I,C,X,E){const U={},T=C.attributes;let P=0;const k=X.getAttributes();for(const Y in k)if(k[Y].location>=0){let H=T[Y];H===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(H=I.instanceColor));const K={};K.attribute=H,H&&H.data&&(K.data=H.data),U[Y]=K,P++}o.attributes=U,o.attributesNum=P,o.index=E}function x(){const I=o.newAttributes;for(let C=0,X=I.length;C<X;C++)I[C]=0}function m(I){p(I,0)}function p(I,C){const X=o.newAttributes,E=o.enabledAttributes,U=o.attributeDivisors;X[I]=1,E[I]===0&&(t.enableVertexAttribArray(I),E[I]=1),U[I]!==C&&(t.vertexAttribDivisor(I,C),U[I]=C)}function M(){const I=o.newAttributes,C=o.enabledAttributes;for(let X=0,E=C.length;X<E;X++)C[X]!==I[X]&&(t.disableVertexAttribArray(X),C[X]=0)}function y(I,C,X,E,U,T,P){P===!0?t.vertexAttribIPointer(I,C,X,U,T):t.vertexAttribPointer(I,C,X,E,U,T)}function b(I,C,X,E){x();const U=E.attributes,T=X.getAttributes(),P=C.defaultAttributeValues;for(const k in T){const Y=T[k];if(Y.location>=0){let q=U[k];if(q===void 0&&(k==="instanceMatrix"&&I.instanceMatrix&&(q=I.instanceMatrix),k==="instanceColor"&&I.instanceColor&&(q=I.instanceColor)),q!==void 0){const H=q.normalized,K=q.itemSize,le=e.get(q);if(le===void 0)continue;const ge=le.buffer,he=le.type,Z=le.bytesPerElement,ne=he===t.INT||he===t.UNSIGNED_INT||q.gpuType===Hd;if(q.isInterleavedBufferAttribute){const de=q.data,Me=de.stride,xe=q.offset;if(de.isInstancedInterleavedBuffer){for(let Re=0;Re<Y.locationSize;Re++)p(Y.location+Re,de.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Re=0;Re<Y.locationSize;Re++)m(Y.location+Re);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let Re=0;Re<Y.locationSize;Re++)y(Y.location+Re,K/Y.locationSize,he,H,Me*Z,(xe+K/Y.locationSize*Re)*Z,ne)}else{if(q.isInstancedBufferAttribute){for(let de=0;de<Y.locationSize;de++)p(Y.location+de,q.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let de=0;de<Y.locationSize;de++)m(Y.location+de);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let de=0;de<Y.locationSize;de++)y(Y.location+de,K/Y.locationSize,he,H,K*Z,K/Y.locationSize*de*Z,ne)}}else if(P!==void 0){const H=P[k];if(H!==void 0)switch(H.length){case 2:t.vertexAttrib2fv(Y.location,H);break;case 3:t.vertexAttrib3fv(Y.location,H);break;case 4:t.vertexAttrib4fv(Y.location,H);break;default:t.vertexAttrib1fv(Y.location,H)}}}}M()}function L(){_();for(const I in i){const C=i[I];for(const X in C){const E=C[X];for(const U in E){const T=E[U];for(const P in T)u(T[P].object),delete T[P];delete E[U]}}delete i[I]}}function B(I){if(i[I.id]===void 0)return;const C=i[I.id];for(const X in C){const E=C[X];for(const U in E){const T=E[U];for(const P in T)u(T[P].object),delete T[P];delete E[U]}}delete i[I.id]}function z(I){for(const C in i){const X=i[C];for(const E in X){const U=X[E];if(U[I.id]===void 0)continue;const T=U[I.id];for(const P in T)u(T[P].object),delete T[P];delete U[I.id]}}}function v(I){for(const C in i){const X=i[C],E=I.isInstancedMesh===!0?I.id:0,U=X[E];if(U!==void 0){for(const T in U){const P=U[T];for(const k in P)u(P[k].object),delete P[k];delete U[T]}delete X[E],Object.keys(X).length===0&&delete i[C]}}}function _(){D(),s=!0,o!==r&&(o=r,c(o.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:_,resetDefaultState:D,dispose:L,releaseStatesOfGeometry:B,releaseStatesOfObject:v,releaseStatesOfProgram:z,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function PE(t,e,n){let i;function r(c){i=c}function o(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function s(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];n.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)s(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*d[x];n.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function IE(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(z){return!(z!==hn&&i.convert(z)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(z){const v=z===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==fn&&i.convert(z)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ci&&!v)}function l(z){if(z==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(et("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=t.getParameter(t.MAX_SAMPLES),B=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:b,maxSamples:L,samples:B}}function NE(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Gr,a=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){o=!0,u(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||o&&!m)o?u(null):c();else{const M=o?0:i,y=M*4;let b=p.clippingState||null;l.value=b,b=u(g,d,y,h);for(let L=0;L!==y;++L)b[L]=n[L];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=h+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,b=h;y!==x;++y,b+=4)s.copy(f[y]).applyMatrix4(M,a),s.normal.toArray(m,b),m[b+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}const Er=4,Lp=[.125,.215,.35,.446,.526,.582],Wr=20,DE=256,ms=new Jd,Fp=new At;let wu=null,Tu=0,Au=0,Cu=!1;const LE=new ce;class Up{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,o={}){const{size:s=256,position:a=LE}=o;wu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wu,Tu,Au),this._renderer.xr.enabled=Cu,e.scissorTest=!1,Po(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===so||e.mapping===qo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Au=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:wt,minFilter:wt,generateMipmaps:!1,type:Zi,format:hn,colorSpace:Cr,depthBuffer:!1},r=Op(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Op(e,n,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FE(o)),this._blurMaterial=OE(o,e,n),this._ggxMaterial=UE(o,e,n)}return r}_compileMaterial(e){const n=new _i(new ir,e);this._renderer.compile(n,ms)}_sceneToCubeUV(e,n,i,r,o){const l=new kn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Fp),f.toneMapping=di,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _i(new ha,new Qv({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Fp),p=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(l.up.set(0,c[y],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+u[y],o.y,o.z)):b===1?(l.up.set(0,0,c[y]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+u[y],o.z)):(l.up.set(0,c[y],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+u[y]));const L=this._cubeSize;Po(r,b*L,y>2?L:0,L,L),f.setRenderTarget(r),p&&f.render(x,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=M}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===so||e.mapping===qo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bp());const o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;const a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Po(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,ms)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;const l=s.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-Er?i-g+Er:0),p=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-n,Po(o,m,p,3*x,2*x),r.setRenderTarget(o),r.render(a,ms),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=g-i,Po(e,m,p,3*x,2*x),r.setRenderTarget(e),r.render(a,ms)}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&gt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*Wr-1),x=o/g,m=isFinite(o)?1+Math.floor(u*x):Wr;m>Wr&&et(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wr}`);const p=[];let M=0;for(let z=0;z<Wr;++z){const v=z/x,_=Math.exp(-v*v/2);p.push(_),z===0?M+=_:z<m&&(M+=2*_)}for(let z=0;z<p.length;z++)p[z]=p[z]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const b=this._sizeLods[r],L=3*b*(r>y-Er?r-y+Er:0),B=4*(this._cubeSize-b);Po(n,L,B,3*b,2*b),l.setRenderTarget(n),l.render(f,ms)}}function FE(t){const e=[],n=[],i=[];let r=t;const o=t-Er+1+Lp.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);e.push(a);let l=1/a;s>t-Er?l=Lp[s-t+Er-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*h),y=new Float32Array(m*g*h),b=new Float32Array(p*g*h);for(let B=0;B<h;B++){const z=B%3*2/3-1,v=B>2?0:-1,_=[z,v,0,z+2/3,v,0,z+2/3,v+1,0,z,v,0,z+2/3,v+1,0,z,v+1,0];M.set(_,x*g*B),y.set(d,m*g*B);const D=[B,B,B,B,B,B];b.set(D,p*g*B)}const L=new ir;L.setAttribute("position",new hi(M,x)),L.setAttribute("uv",new hi(y,m)),L.setAttribute("faceIndex",new hi(b,p)),i.push(new _i(L,null)),r>Er&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Op(t,e,n){const i=new gn(t,e,n);return i.texture.mapping=xc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Po(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function UE(t,e,n){return new qn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:DE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function OE(t,e,n){const i=new Float32Array(Wr),r=new ce(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Bp(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bc(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function kp(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function bc(){return`

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
	`}class s0 extends gn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new t0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ha(5,5,5),o=new qn({name:"CubemapFromEquirect",uniforms:Zo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:Gi});o.uniforms.tEquirect.value=n;const s=new _i(r,o),a=n.minFilter;return n.minFilter===Kr&&(n.minFilter=wt),new $S(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}function BE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?s(d):o(d)}function o(d){if(d&&d.isTexture){const h=d.mapping;if(h===Jc||h===Qc)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const x=new s0(g.height);return x.fromEquirectangularTexture(t,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function s(d){if(d&&d.isTexture){const h=d.mapping,g=h===Jc||h===Qc,x=h===so||h===qo;if(g||x){let m=n.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Up(t)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return g&&M&&M.height>0||x&&M&&l(M)?(i===null&&(i=new Up(t)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,h){return h===Jc?d.mapping=so:h===Qc&&(d.mapping=qo),d}function l(d){let h=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&h++;return h===g}function c(d){const h=d.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function kE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&kl("WebGLRenderer: "+i+" extension not supported."),r}}}function zE(t,e,n,i){const r={},o=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",s),delete r[d.id];const h=o.get(d);h&&(e.remove(h),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let x=0;if(g===void 0)return;if(h!==null){const M=h.array;x=h.version;for(let y=0,b=M.length;y<b;y+=3){const L=M[y+0],B=M[y+1],z=M[y+2];d.push(L,B,B,z,z,L)}}else{const M=g.array;x=g.version;for(let y=0,b=M.length/3-1;y<b;y+=3){const L=y+0,B=y+1,z=y+2;d.push(L,B,B,z,z,L)}}const m=new(g.count>=65535?Jv:jv)(d,1);m.version=x;const p=o.get(f);p&&e.remove(p),o.set(f,m)}function u(f){const d=o.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return o.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function VE(t,e,n){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,h){t.drawElements(i,h,o,d*s),n.update(h,i,1)}function c(d,h,g){g!==0&&(t.drawElementsInstanced(i,h,o,d*s,g),n.update(h,i,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,o,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function f(d,h,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/s,h[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,o,d,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=h[M]*x[M];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function HE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:gt("WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function GE(t,e,n){const i=new WeakMap,r=new kt;function o(s,a,l){const c=s.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let _=function(){z.dispose(),i.delete(a),a.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let y=0;h===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let b=a.attributes.position.count*y,L=1;b>e.maxTextureSize&&(L=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const B=new Float32Array(b*L*4*f),z=new qv(B,b,L,f);z.type=ci,z.needsUpdate=!0;const v=y*4;for(let D=0;D<f;D++){const I=m[D],C=p[D],X=M[D],E=b*L*4*D;for(let U=0;U<I.count;U++){const T=U*v;h===!0&&(r.fromBufferAttribute(I,U),B[E+T+0]=r.x,B[E+T+1]=r.y,B[E+T+2]=r.z,B[E+T+3]=0),g===!0&&(r.fromBufferAttribute(C,U),B[E+T+4]=r.x,B[E+T+5]=r.y,B[E+T+6]=r.z,B[E+T+7]=0),x===!0&&(r.fromBufferAttribute(X,U),B[E+T+8]=r.x,B[E+T+9]=r.y,B[E+T+10]=r.z,B[E+T+11]=X.itemSize===4?r.w:1)}}d={count:f,texture:z,size:new St(b,L)},i.set(a,d),a.addEventListener("dispose",_)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let h=0;for(let x=0;x<c.length;x++)h+=c[x];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:o}}function $E(t,e,n,i,r){let o=new WeakMap;function s(c){const u=r.render.frame,f=c.geometry,d=e.get(c,f);if(o.get(d)!==u&&(e.update(d),o.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),o.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),o.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;o.get(h)!==u&&(h.update(),o.set(h,u))}return d}function a(){o=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}const WE={[Nv]:"LINEAR_TONE_MAPPING",[Dv]:"REINHARD_TONE_MAPPING",[Lv]:"CINEON_TONE_MAPPING",[Fv]:"ACES_FILMIC_TONE_MAPPING",[Ov]:"AGX_TONE_MAPPING",[Bv]:"NEUTRAL_TONE_MAPPING",[Uv]:"CUSTOM_TONE_MAPPING"};function XE(t,e,n,i,r){const o=new gn(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),s=new gn(e,n,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),a=new ir;a.setAttribute("position",new Wi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Wi([0,2,0,0,2,0],2));const l=new VS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new _i(a,l),u=new Jd(-1,1,1,-1,0,1);let f=null,d=null,h=!1,g,x=null,m=[],p=!1;this.setSize=function(M,y){o.setSize(M,y),s.setSize(M,y);for(let b=0;b<m.length;b++){const L=m[b];L.setSize&&L.setSize(M,y)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const y=o.width,b=o.height;for(let L=0;L<m.length;L++){const B=m[L];B.setSize&&B.setSize(y,b)}},this.begin=function(M,y){if(h||M.toneMapping===di&&m.length===0)return!1;if(x=y,y!==null){const b=y.width,L=y.height;(o.width!==b||o.height!==L)&&this.setSize(b,L)}return p===!1&&M.setRenderTarget(o),g=M.toneMapping,M.toneMapping=di,!0},this.hasRenderPass=function(){return p},this.end=function(M,y){M.toneMapping=g,h=!0;let b=o,L=s;for(let B=0;B<m.length;B++){const z=m[B];if(z.enabled!==!1&&(z.render(M,L,b,y),z.needsSwap!==!1)){const v=b;b=L,L=v}}if(f!==M.outputColorSpace||d!==M.toneMapping){f=M.outputColorSpace,d=M.toneMapping,l.defines={},ht.getTransfer(f)===bt&&(l.defines.SRGB_TRANSFER="");const B=WE[d];B&&(l.defines[B]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(x),M.render(c,u),x=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s.dispose(),a.dispose(),l.dispose()}}const a0=new Qt,qf=new qs(1,1),l0=new qv,c0=new gS,u0=new t0,zp=[],Vp=[],Hp=new Float32Array(16),Gp=new Float32Array(9),$p=new Float32Array(4);function ss(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=zp[r];if(o===void 0&&(o=new Float32Array(r),zp[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Yt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Sc(t,e){let n=Vp[e];n===void 0&&(n=new Int32Array(e),Vp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function YE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),Yt(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),Yt(n,e)}}function ZE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),Yt(n,e)}}function jE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Yt(n,e)}else{if(Xt(n,i))return;$p.set(i),t.uniformMatrix2fv(this.addr,!1,$p),Yt(n,i)}}function JE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Yt(n,e)}else{if(Xt(n,i))return;Gp.set(i),t.uniformMatrix3fv(this.addr,!1,Gp),Yt(n,i)}}function QE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Yt(n,e)}else{if(Xt(n,i))return;Hp.set(i),t.uniformMatrix4fv(this.addr,!1,Hp),Yt(n,i)}}function ew(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),Yt(n,e)}}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),Yt(n,e)}}function iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),Yt(n,e)}}function rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),Yt(n,e)}}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),Yt(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),Yt(n,e)}}function lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(qf.compareFunction=n.isReversedDepthBuffer()?Kd:qd,o=qf):o=a0,n.setTexture2D(e||o,r)}function cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||c0,r)}function uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||u0,r)}function fw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||l0,r)}function dw(t){switch(t){case 5126:return YE;case 35664:return qE;case 35665:return KE;case 35666:return ZE;case 35674:return jE;case 35675:return JE;case 35676:return QE;case 5124:case 35670:return ew;case 35667:case 35671:return tw;case 35668:case 35672:return nw;case 35669:case 35673:return iw;case 5125:return rw;case 36294:return ow;case 36295:return sw;case 36296:return aw;case 35678:case 36198:case 36298:case 36306:case 35682:return lw;case 35679:case 36299:case 36307:return cw;case 35680:case 36300:case 36308:case 36293:return uw;case 36289:case 36303:case 36311:case 36292:return fw}}function hw(t,e){t.uniform1fv(this.addr,e)}function pw(t,e){const n=ss(e,this.size,2);t.uniform2fv(this.addr,n)}function mw(t,e){const n=ss(e,this.size,3);t.uniform3fv(this.addr,n)}function gw(t,e){const n=ss(e,this.size,4);t.uniform4fv(this.addr,n)}function vw(t,e){const n=ss(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function _w(t,e){const n=ss(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xw(t,e){const n=ss(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function yw(t,e){t.uniform1iv(this.addr,e)}function bw(t,e){t.uniform2iv(this.addr,e)}function Sw(t,e){t.uniform3iv(this.addr,e)}function Mw(t,e){t.uniform4iv(this.addr,e)}function Ew(t,e){t.uniform1uiv(this.addr,e)}function ww(t,e){t.uniform2uiv(this.addr,e)}function Tw(t,e){t.uniform3uiv(this.addr,e)}function Aw(t,e){t.uniform4uiv(this.addr,e)}function Cw(t,e,n){const i=this.cache,r=e.length,o=Sc(n,r);Xt(i,o)||(t.uniform1iv(this.addr,o),Yt(i,o));let s;this.type===t.SAMPLER_2D_SHADOW?s=qf:s=a0;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||s,o[a])}function Rw(t,e,n){const i=this.cache,r=e.length,o=Sc(n,r);Xt(i,o)||(t.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||c0,o[s])}function Pw(t,e,n){const i=this.cache,r=e.length,o=Sc(n,r);Xt(i,o)||(t.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||u0,o[s])}function Iw(t,e,n){const i=this.cache,r=e.length,o=Sc(n,r);Xt(i,o)||(t.uniform1iv(this.addr,o),Yt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||l0,o[s])}function Nw(t){switch(t){case 5126:return hw;case 35664:return pw;case 35665:return mw;case 35666:return gw;case 35674:return vw;case 35675:return _w;case 35676:return xw;case 5124:case 35670:return yw;case 35667:case 35671:return bw;case 35668:case 35672:return Sw;case 35669:case 35673:return Mw;case 5125:return Ew;case 36294:return ww;case 36295:return Tw;case 36296:return Aw;case 35678:case 36198:case 36298:case 36306:case 35682:return Cw;case 35679:case 36299:case 36307:return Rw;case 35680:case 36300:case 36308:case 36293:return Pw;case 36289:case 36303:case 36311:case 36292:return Iw}}class Dw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=dw(n.type)}}class Lw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Nw(n.type)}}class Fw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Ru=/(\w+)(\])?(\[|\.)?/g;function Wp(t,e){t.seq.push(e),t.map[e.id]=e}function Uw(t,e,n){const i=t.name,r=i.length;for(Ru.lastIndex=0;;){const o=Ru.exec(i),s=Ru.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===r){Wp(n,c===void 0?new Dw(a,t,e):new Lw(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Fw(a),Wp(n,f)),n=f}}}class ml{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(n,s),l=e.getUniformLocation(n,a.name);Uw(a,l,this)}const r=[],o=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function Xp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ow=37297;let Bw=0;function kw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const Yp=new it;function zw(t){ht._getMatrix(Yp,ht.workingColorSpace,t);const e=`mat3( ${Yp.elements.map(n=>n.toFixed(4))} )`;switch(ht.getTransfer(t)){case Ul:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function qp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),o=(t.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+o+`

`+kw(t.getShaderSource(e),a)}else return o}function Vw(t,e){const n=zw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Hw={[Nv]:"Linear",[Dv]:"Reinhard",[Lv]:"Cineon",[Fv]:"ACESFilmic",[Ov]:"AgX",[Bv]:"Neutral",[Uv]:"Custom"};function Gw(t,e){const n=Hw[e];return n===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ya=new ce;function $w(){ht.getLuminanceCoefficients(Ya);const t=Ya.x.toFixed(4),e=Ya.y.toFixed(4),n=Ya.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ww(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function Xw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Yw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Ms(t){return t!==""}function Kp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kf(t){return t.replace(qw,Zw)}const Kw=new Map;function Zw(t,e){let n=ot[e];if(n===void 0){const i=Kw.get(e);if(i!==void 0)n=ot[i],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kf(n)}const jw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jp(t){return t.replace(jw,Jw)}function Jw(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Jp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const Qw={[ul]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function eT(t){return Qw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tT={[so]:"ENVMAP_TYPE_CUBE",[qo]:"ENVMAP_TYPE_CUBE",[xc]:"ENVMAP_TYPE_CUBE_UV"};function nT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":tT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const iT={[qo]:"ENVMAP_MODE_REFRACTION"};function rT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":iT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oT={[Iv]:"ENVMAP_BLENDING_MULTIPLY",[qb]:"ENVMAP_BLENDING_MIX",[Kb]:"ENVMAP_BLENDING_ADD"};function sT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":oT[t.combine]||"ENVMAP_BLENDING_NONE"}function aT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function lT(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=eT(n),c=nT(n),u=rT(n),f=sT(n),d=aT(n),h=Ww(n),g=Xw(o),x=r.createProgram();let m,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ms).join(`
`),p.length>0&&(p+=`
`)):(m=[Jp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),p=[Jp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==di?"#define TONE_MAPPING":"",n.toneMapping!==di?ot.tonemapping_pars_fragment:"",n.toneMapping!==di?Gw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Vw("linearToOutputTexel",n.outputColorSpace),$w(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ms).join(`
`)),s=Kf(s),s=Kp(s,n),s=Zp(s,n),a=Kf(a),a=Kp(a,n),a=Zp(a,n),s=jp(s),a=jp(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+m+s,b=M+p+a,L=Xp(r,r.VERTEX_SHADER,y),B=Xp(r,r.FRAGMENT_SHADER,b);r.attachShader(x,L),r.attachShader(x,B),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function z(I){if(t.debug.checkShaderErrors){const C=r.getProgramInfoLog(x)||"",X=r.getShaderInfoLog(L)||"",E=r.getShaderInfoLog(B)||"",U=C.trim(),T=X.trim(),P=E.trim();let k=!0,Y=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(k=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,L,B);else{const q=qp(r,L,"vertex"),H=qp(r,B,"fragment");gt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+U+`
`+q+`
`+H)}else U!==""?et("WebGLProgram: Program Info Log:",U):(T===""||P==="")&&(Y=!1);Y&&(I.diagnostics={runnable:k,programLog:U,vertexShader:{log:T,prefix:m},fragmentShader:{log:P,prefix:p}})}r.deleteShader(L),r.deleteShader(B),v=new ml(r,x),_=Yw(r,x)}let v;this.getUniforms=function(){return v===void 0&&z(this),v};let _;this.getAttributes=function(){return _===void 0&&z(this),_};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(x,Ow)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Bw++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=B,this}let cT=0;class uT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fT(e),n.set(e,i)),i}}class fT{constructor(e){this.id=cT++,this.code=e,this.usedTimes=0}}function dT(t,e,n,i,r,o){const s=new Kv,a=new uT,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,_,D,I,C){const X=I.fog,E=C.geometry,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,T=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,P=e.get(v.envMap||U,T),k=P&&P.mapping===xc?P.image.height:null,Y=h[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&et("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const q=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,H=q!==void 0?q.length:0;let K=0;E.morphAttributes.position!==void 0&&(K=1),E.morphAttributes.normal!==void 0&&(K=2),E.morphAttributes.color!==void 0&&(K=3);let le,ge,he,Z;if(Y){const yt=oi[Y];le=yt.vertexShader,ge=yt.fragmentShader}else le=v.vertexShader,ge=v.fragmentShader,a.update(v),he=a.getVertexShaderID(v),Z=a.getFragmentShaderID(v);const ne=t.getRenderTarget(),de=t.state.buffers.depth.getReversed(),Me=C.isInstancedMesh===!0,xe=C.isBatchedMesh===!0,Re=!!v.map,V=!!v.matcap,$=!!P,R=!!v.aoMap,N=!!v.lightMap,O=!!v.bumpMap,G=!!v.normalMap,w=!!v.displacementMap,ie=!!v.emissiveMap,Q=!!v.metalnessMap,J=!!v.roughnessMap,te=v.anisotropy>0,A=v.clearcoat>0,S=v.dispersion>0,W=v.iridescence>0,re=v.sheen>0,ue=v.transmission>0,oe=te&&!!v.anisotropyMap,Pe=A&&!!v.clearcoatMap,be=A&&!!v.clearcoatNormalMap,ke=A&&!!v.clearcoatRoughnessMap,We=W&&!!v.iridescenceMap,Se=W&&!!v.iridescenceThicknessMap,we=re&&!!v.sheenColorMap,Ie=re&&!!v.sheenRoughnessMap,Fe=!!v.specularMap,Ue=!!v.specularColorMap,tt=!!v.specularIntensityMap,j=ue&&!!v.transmissionMap,Ce=ue&&!!v.thicknessMap,Ae=!!v.gradientMap,ze=!!v.alphaMap,Ee=v.alphaTest>0,me=!!v.alphaHash,Ge=!!v.extensions;let Qe=di;v.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Qe=t.toneMapping);const Pt={shaderID:Y,shaderType:v.type,shaderName:v.name,vertexShader:le,fragmentShader:ge,defines:v.defines,customVertexShaderID:he,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:xe,batchingColor:xe&&C._colorsTexture!==null,instancing:Me,instancingColor:Me&&C.instanceColor!==null,instancingMorph:Me&&C.morphTexture!==null,outputColorSpace:ne===null?t.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Cr,alphaToCoverage:!!v.alphaToCoverage,map:Re,matcap:V,envMap:$,envMapMode:$&&P.mapping,envMapCubeUVHeight:k,aoMap:R,lightMap:N,bumpMap:O,normalMap:G,displacementMap:w,emissiveMap:ie,normalMapObjectSpace:G&&v.normalMapType===Qb,normalMapTangentSpace:G&&v.normalMapType===Jb,metalnessMap:Q,roughnessMap:J,anisotropy:te,anisotropyMap:oe,clearcoat:A,clearcoatMap:Pe,clearcoatNormalMap:be,clearcoatRoughnessMap:ke,dispersion:S,iridescence:W,iridescenceMap:We,iridescenceThicknessMap:Se,sheen:re,sheenColorMap:we,sheenRoughnessMap:Ie,specularMap:Fe,specularColorMap:Ue,specularIntensityMap:tt,transmission:ue,transmissionMap:j,thicknessMap:Ce,gradientMap:Ae,opaque:v.transparent===!1&&v.blending===Bo&&v.alphaToCoverage===!1,alphaMap:ze,alphaTest:Ee,alphaHash:me,combine:v.combine,mapUv:Re&&g(v.map.channel),aoMapUv:R&&g(v.aoMap.channel),lightMapUv:N&&g(v.lightMap.channel),bumpMapUv:O&&g(v.bumpMap.channel),normalMapUv:G&&g(v.normalMap.channel),displacementMapUv:w&&g(v.displacementMap.channel),emissiveMapUv:ie&&g(v.emissiveMap.channel),metalnessMapUv:Q&&g(v.metalnessMap.channel),roughnessMapUv:J&&g(v.roughnessMap.channel),anisotropyMapUv:oe&&g(v.anisotropyMap.channel),clearcoatMapUv:Pe&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:be&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:we&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&g(v.sheenRoughnessMap.channel),specularMapUv:Fe&&g(v.specularMap.channel),specularColorMapUv:Ue&&g(v.specularColorMap.channel),specularIntensityMapUv:tt&&g(v.specularIntensityMap.channel),transmissionMapUv:j&&g(v.transmissionMap.channel),thicknessMapUv:Ce&&g(v.thicknessMap.channel),alphaMapUv:ze&&g(v.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(G||te),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!E.attributes.uv&&(Re||ze),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||E.attributes.normal===void 0&&G===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:de,skinning:C.isSkinnedMesh===!0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:K,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Qe,decodeVideoTexture:Re&&v.map.isVideoTexture===!0&&ht.getTransfer(v.map.colorSpace)===bt,decodeVideoTextureEmissive:ie&&v.emissiveMap.isVideoTexture===!0&&ht.getTransfer(v.emissiveMap.colorSpace)===bt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Fi,flipSided:v.side===xn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ge&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&v.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function m(v){const _=[];if(v.shaderID?_.push(v.shaderID):(_.push(v.customVertexShaderID),_.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)_.push(D),_.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(p(_,v),M(_,v),_.push(t.outputColorSpace)),_.push(v.customProgramCacheKey),_.join()}function p(v,_){v.push(_.precision),v.push(_.outputColorSpace),v.push(_.envMapMode),v.push(_.envMapCubeUVHeight),v.push(_.mapUv),v.push(_.alphaMapUv),v.push(_.lightMapUv),v.push(_.aoMapUv),v.push(_.bumpMapUv),v.push(_.normalMapUv),v.push(_.displacementMapUv),v.push(_.emissiveMapUv),v.push(_.metalnessMapUv),v.push(_.roughnessMapUv),v.push(_.anisotropyMapUv),v.push(_.clearcoatMapUv),v.push(_.clearcoatNormalMapUv),v.push(_.clearcoatRoughnessMapUv),v.push(_.iridescenceMapUv),v.push(_.iridescenceThicknessMapUv),v.push(_.sheenColorMapUv),v.push(_.sheenRoughnessMapUv),v.push(_.specularMapUv),v.push(_.specularColorMapUv),v.push(_.specularIntensityMapUv),v.push(_.transmissionMapUv),v.push(_.thicknessMapUv),v.push(_.combine),v.push(_.fogExp2),v.push(_.sizeAttenuation),v.push(_.morphTargetsCount),v.push(_.morphAttributeCount),v.push(_.numDirLights),v.push(_.numPointLights),v.push(_.numSpotLights),v.push(_.numSpotLightMaps),v.push(_.numHemiLights),v.push(_.numRectAreaLights),v.push(_.numDirLightShadows),v.push(_.numPointLightShadows),v.push(_.numSpotLightShadows),v.push(_.numSpotLightShadowsWithMaps),v.push(_.numLightProbes),v.push(_.shadowMapType),v.push(_.toneMapping),v.push(_.numClippingPlanes),v.push(_.numClipIntersection),v.push(_.depthPacking)}function M(v,_){s.disableAll(),_.instancing&&s.enable(0),_.instancingColor&&s.enable(1),_.instancingMorph&&s.enable(2),_.matcap&&s.enable(3),_.envMap&&s.enable(4),_.normalMapObjectSpace&&s.enable(5),_.normalMapTangentSpace&&s.enable(6),_.clearcoat&&s.enable(7),_.iridescence&&s.enable(8),_.alphaTest&&s.enable(9),_.vertexColors&&s.enable(10),_.vertexAlphas&&s.enable(11),_.vertexUv1s&&s.enable(12),_.vertexUv2s&&s.enable(13),_.vertexUv3s&&s.enable(14),_.vertexTangents&&s.enable(15),_.anisotropy&&s.enable(16),_.alphaHash&&s.enable(17),_.batching&&s.enable(18),_.dispersion&&s.enable(19),_.batchingColor&&s.enable(20),_.gradientMap&&s.enable(21),v.push(s.mask),s.disableAll(),_.fog&&s.enable(0),_.useFog&&s.enable(1),_.flatShading&&s.enable(2),_.logarithmicDepthBuffer&&s.enable(3),_.reversedDepthBuffer&&s.enable(4),_.skinning&&s.enable(5),_.morphTargets&&s.enable(6),_.morphNormals&&s.enable(7),_.morphColors&&s.enable(8),_.premultipliedAlpha&&s.enable(9),_.shadowMapEnabled&&s.enable(10),_.doubleSided&&s.enable(11),_.flipSided&&s.enable(12),_.useDepthPacking&&s.enable(13),_.dithering&&s.enable(14),_.transmission&&s.enable(15),_.sheen&&s.enable(16),_.opaque&&s.enable(17),_.pointsUvs&&s.enable(18),_.decodeVideoTexture&&s.enable(19),_.decodeVideoTextureEmissive&&s.enable(20),_.alphaToCoverage&&s.enable(21),v.push(s.mask)}function y(v){const _=h[v.type];let D;if(_){const I=oi[_];D=BS.clone(I.uniforms)}else D=v.uniforms;return D}function b(v,_){let D=u.get(_);return D!==void 0?++D.usedTimes:(D=new lT(t,_,v,r),c.push(D),u.set(_,D)),D}function L(v){if(--v.usedTimes===0){const _=c.indexOf(v);c[_]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function B(v){a.remove(v)}function z(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:y,acquireProgram:b,releaseProgram:L,releaseShaderCache:B,programs:c,dispose:z}}function hT(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function pT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Qp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function em(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,g,x,m,p){let M=t[e];return M===void 0?(M={id:d.id,object:d,geometry:h,material:g,materialVariant:s(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},t[e]=M):(M.id=d.id,M.object=d,M.geometry=h,M.material=g,M.materialVariant=s(d),M.groupOrder=x,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function l(d,h,g,x,m,p){const M=a(d,h,g,x,m,p);g.transmission>0?i.push(M):g.transparent===!0?r.push(M):n.push(M)}function c(d,h,g,x,m,p){const M=a(d,h,g,x,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?r.unshift(M):n.unshift(M)}function u(d,h){n.length>1&&n.sort(d||pT),i.length>1&&i.sort(h||Qp),r.length>1&&r.sort(h||Qp)}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:l,unshift:c,finish:f,sort:u}}function mT(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new em,t.set(i,[s])):r>=o.length?(s=new em,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function gT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ce,color:new At};break;case"SpotLight":n={position:new ce,direction:new ce,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ce,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ce,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return t[e.id]=n,n}}}function vT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let _T=0;function xT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yT(t){const e=new gT,n=vT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new ce);const r=new ce,o=new $t,s=new $t;function a(c){let u=0,f=0,d=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,M=0,y=0,b=0,L=0,B=0,z=0;c.sort(xT);for(let _=0,D=c.length;_<D;_++){const I=c[_],C=I.color,X=I.intensity,E=I.distance;let U=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ko?U=I.shadow.map.texture:U=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=C.r*X,f+=C.g*X,d+=C.b*X;else if(I.isLightProbe){for(let T=0;T<9;T++)i.probe[T].addScaledVector(I.sh.coefficients[T],X);z++}else if(I.isDirectionalLight){const T=e.get(I);if(T.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const P=I.shadow,k=n.get(I);k.shadowIntensity=P.intensity,k.shadowBias=P.bias,k.shadowNormalBias=P.normalBias,k.shadowRadius=P.radius,k.shadowMapSize=P.mapSize,i.directionalShadow[h]=k,i.directionalShadowMap[h]=U,i.directionalShadowMatrix[h]=I.shadow.matrix,M++}i.directional[h]=T,h++}else if(I.isSpotLight){const T=e.get(I);T.position.setFromMatrixPosition(I.matrixWorld),T.color.copy(C).multiplyScalar(X),T.distance=E,T.coneCos=Math.cos(I.angle),T.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),T.decay=I.decay,i.spot[x]=T;const P=I.shadow;if(I.map&&(i.spotLightMap[L]=I.map,L++,P.updateMatrices(I),I.castShadow&&B++),i.spotLightMatrix[x]=P.matrix,I.castShadow){const k=n.get(I);k.shadowIntensity=P.intensity,k.shadowBias=P.bias,k.shadowNormalBias=P.normalBias,k.shadowRadius=P.radius,k.shadowMapSize=P.mapSize,i.spotShadow[x]=k,i.spotShadowMap[x]=U,b++}x++}else if(I.isRectAreaLight){const T=e.get(I);T.color.copy(C).multiplyScalar(X),T.halfWidth.set(I.width*.5,0,0),T.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=T,m++}else if(I.isPointLight){const T=e.get(I);if(T.color.copy(I.color).multiplyScalar(I.intensity),T.distance=I.distance,T.decay=I.decay,I.castShadow){const P=I.shadow,k=n.get(I);k.shadowIntensity=P.intensity,k.shadowBias=P.bias,k.shadowNormalBias=P.normalBias,k.shadowRadius=P.radius,k.shadowMapSize=P.mapSize,k.shadowCameraNear=P.camera.near,k.shadowCameraFar=P.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=I.shadow.matrix,y++}i.point[g]=T,g++}else if(I.isHemisphereLight){const T=e.get(I);T.skyColor.copy(I.color).multiplyScalar(X),T.groundColor.copy(I.groundColor).multiplyScalar(X),i.hemi[p]=T,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const v=i.hash;(v.directionalLength!==h||v.pointLength!==g||v.spotLength!==x||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==M||v.numPointShadows!==y||v.numSpotShadows!==b||v.numSpotMaps!==L||v.numLightProbes!==z)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+L-B,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=z,v.directionalLength=h,v.pointLength=g,v.spotLength=x,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=M,v.numPointShadows=y,v.numSpotShadows=b,v.numSpotMaps=L,v.numLightProbes=z,i.version=_T++)}function l(c,u){let f=0,d=0,h=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const y=c[p];if(y.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(y.isSpotLight){const b=i.spot[h];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(y.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),s.identity(),o.copy(y.matrixWorld),o.premultiply(m),s.extractRotation(o),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),g++}else if(y.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const b=i.hemi[x];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function tm(t){const e=new yT(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function o(u){n.push(u)}function s(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function bT(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new tm(t),e.set(r,[a])):o>=s.length?(a=new tm(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const ST=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,MT=`uniform sampler2D shadow_pass;
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
}`,ET=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],wT=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],nm=new $t,gs=new ce,Pu=new ce;function TT(t,e,n){let i=new e0;const r=new St,o=new St,s=new kt,a=new HS,l=new GS,c={},u=n.maxTextureSize,f={[Ar]:xn,[xn]:Ar,[Fi]:Fi},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:ST,fragmentShader:MT}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new ir;g.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new _i(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ul;let p=this.type;this.render=function(B,z,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||B.length===0)return;this.type===Rb&&(et("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ul);const _=t.getRenderTarget(),D=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),C=t.state;C.setBlending(Gi),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const X=p!==this.type;X&&z.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(U=>U.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,U=B.length;E<U;E++){const T=B[E],P=T.shadow;if(P===void 0){et("WebGLShadowMap:",T,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const k=P.getFrameExtents();r.multiply(k),o.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(o.x=Math.floor(u/k.x),r.x=o.x*k.x,P.mapSize.x=o.x),r.y>u&&(o.y=Math.floor(u/k.y),r.y=o.y*k.y,P.mapSize.y=o.y));const Y=t.state.buffers.depth.getReversed();if(P.camera._reversedDepth=Y,P.map===null||X===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===Ss){if(T.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new gn(r.x,r.y,{format:Ko,type:Zi,minFilter:wt,magFilter:wt,generateMipmaps:!1}),P.map.texture.name=T.name+".shadowMap",P.map.depthTexture=new qs(r.x,r.y,ci),P.map.depthTexture.name=T.name+".shadowMapDepth",P.map.depthTexture.format=ji,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Jt,P.map.depthTexture.magFilter=Jt}else T.isPointLight?(P.map=new s0(r.x),P.map.depthTexture=new US(r.x,vi)):(P.map=new gn(r.x,r.y),P.map.depthTexture=new qs(r.x,r.y,vi)),P.map.depthTexture.name=T.name+".shadowMap",P.map.depthTexture.format=ji,this.type===ul?(P.map.depthTexture.compareFunction=Y?Kd:qd,P.map.depthTexture.minFilter=wt,P.map.depthTexture.magFilter=wt):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=Jt,P.map.depthTexture.magFilter=Jt);P.camera.updateProjectionMatrix()}const q=P.map.isWebGLCubeRenderTarget?6:1;for(let H=0;H<q;H++){if(P.map.isWebGLCubeRenderTarget)t.setRenderTarget(P.map,H),t.clear();else{H===0&&(t.setRenderTarget(P.map),t.clear());const K=P.getViewport(H);s.set(o.x*K.x,o.y*K.y,o.x*K.z,o.y*K.w),C.viewport(s)}if(T.isPointLight){const K=P.camera,le=P.matrix,ge=T.distance||K.far;ge!==K.far&&(K.far=ge,K.updateProjectionMatrix()),gs.setFromMatrixPosition(T.matrixWorld),K.position.copy(gs),Pu.copy(K.position),Pu.add(ET[H]),K.up.copy(wT[H]),K.lookAt(Pu),K.updateMatrixWorld(),le.makeTranslation(-gs.x,-gs.y,-gs.z),nm.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),P._frustum.setFromProjectionMatrix(nm,K.coordinateSystem,K.reversedDepth)}else P.updateMatrices(T);i=P.getFrustum(),b(z,v,P.camera,T,this.type)}P.isPointLightShadow!==!0&&this.type===Ss&&M(P,v),P.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(_,D,I)};function M(B,z){const v=e.update(x);d.defines.VSM_SAMPLES!==B.blurSamples&&(d.defines.VSM_SAMPLES=B.blurSamples,h.defines.VSM_SAMPLES=B.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new gn(r.x,r.y,{format:Ko,type:Zi})),d.uniforms.shadow_pass.value=B.map.depthTexture,d.uniforms.resolution.value=B.mapSize,d.uniforms.radius.value=B.radius,t.setRenderTarget(B.mapPass),t.clear(),t.renderBufferDirect(z,null,v,d,x,null),h.uniforms.shadow_pass.value=B.mapPass.texture,h.uniforms.resolution.value=B.mapSize,h.uniforms.radius.value=B.radius,t.setRenderTarget(B.map),t.clear(),t.renderBufferDirect(z,null,v,h,x,null)}function y(B,z,v,_){let D=null;const I=v.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(I!==void 0)D=I;else if(D=v.isPointLight===!0?l:a,t.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const C=D.uuid,X=z.uuid;let E=c[C];E===void 0&&(E={},c[C]=E);let U=E[X];U===void 0&&(U=D.clone(),E[X]=U,z.addEventListener("dispose",L)),D=U}if(D.visible=z.visible,D.wireframe=z.wireframe,_===Ss?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:f[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const C=t.properties.get(D);C.light=v}return D}function b(B,z,v,_,D){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&D===Ss)&&(!B.frustumCulled||i.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,B.matrixWorld);const X=e.update(B),E=B.material;if(Array.isArray(E)){const U=X.groups;for(let T=0,P=U.length;T<P;T++){const k=U[T],Y=E[k.materialIndex];if(Y&&Y.visible){const q=y(B,Y,_,D);B.onBeforeShadow(t,B,z,v,X,q,k),t.renderBufferDirect(v,null,X,q,B,k),B.onAfterShadow(t,B,z,v,X,q,k)}}}else if(E.visible){const U=y(B,E,_,D);B.onBeforeShadow(t,B,z,v,X,U,null),t.renderBufferDirect(v,null,X,U,B,null),B.onAfterShadow(t,B,z,v,X,U,null)}}const C=B.children;for(let X=0,E=C.length;X<E;X++)b(C[X],z,v,_,D)}function L(B){B.target.removeEventListener("dispose",L);for(const v in c){const _=c[v],D=B.target.uuid;D in _&&(_[D].dispose(),delete _[D])}}}function AT(t,e){function n(){let j=!1;const Ce=new kt;let Ae=null;const ze=new kt(0,0,0,0);return{setMask:function(Ee){Ae!==Ee&&!j&&(t.colorMask(Ee,Ee,Ee,Ee),Ae=Ee)},setLocked:function(Ee){j=Ee},setClear:function(Ee,me,Ge,Qe,Pt){Pt===!0&&(Ee*=Qe,me*=Qe,Ge*=Qe),Ce.set(Ee,me,Ge,Qe),ze.equals(Ce)===!1&&(t.clearColor(Ee,me,Ge,Qe),ze.copy(Ce))},reset:function(){j=!1,Ae=null,ze.set(-1,0,0,0)}}}function i(){let j=!1,Ce=!1,Ae=null,ze=null,Ee=null;return{setReversed:function(me){if(Ce!==me){const Ge=e.get("EXT_clip_control");me?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ce=me;const Qe=Ee;Ee=null,this.setClear(Qe)}},getReversed:function(){return Ce},setTest:function(me){me?ne(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(me){Ae!==me&&!j&&(t.depthMask(me),Ae=me)},setFunc:function(me){if(Ce&&(me=cS[me]),ze!==me){switch(me){case sf:t.depthFunc(t.NEVER);break;case af:t.depthFunc(t.ALWAYS);break;case lf:t.depthFunc(t.LESS);break;case Yo:t.depthFunc(t.LEQUAL);break;case cf:t.depthFunc(t.EQUAL);break;case uf:t.depthFunc(t.GEQUAL);break;case ff:t.depthFunc(t.GREATER);break;case df:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ze=me}},setLocked:function(me){j=me},setClear:function(me){Ee!==me&&(Ee=me,Ce&&(me=1-me),t.clearDepth(me))},reset:function(){j=!1,Ae=null,ze=null,Ee=null,Ce=!1}}}function r(){let j=!1,Ce=null,Ae=null,ze=null,Ee=null,me=null,Ge=null,Qe=null,Pt=null;return{setTest:function(yt){j||(yt?ne(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(yt){Ce!==yt&&!j&&(t.stencilMask(yt),Ce=yt)},setFunc:function(yt,bi,Si){(Ae!==yt||ze!==bi||Ee!==Si)&&(t.stencilFunc(yt,bi,Si),Ae=yt,ze=bi,Ee=Si)},setOp:function(yt,bi,Si){(me!==yt||Ge!==bi||Qe!==Si)&&(t.stencilOp(yt,bi,Si),me=yt,Ge=bi,Qe=Si)},setLocked:function(yt){j=yt},setClear:function(yt){Pt!==yt&&(t.clearStencil(yt),Pt=yt)},reset:function(){j=!1,Ce=null,Ae=null,ze=null,Ee=null,me=null,Ge=null,Qe=null,Pt=null}}}const o=new n,s=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,x=!1,m=null,p=null,M=null,y=null,b=null,L=null,B=null,z=new At(0,0,0),v=0,_=!1,D=null,I=null,C=null,X=null,E=null;const U=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let T=!1,P=0;const k=t.getParameter(t.VERSION);k.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(k)[1]),T=P>=1):k.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),T=P>=2);let Y=null,q={};const H=t.getParameter(t.SCISSOR_BOX),K=t.getParameter(t.VIEWPORT),le=new kt().fromArray(H),ge=new kt().fromArray(K);function he(j,Ce,Ae,ze){const Ee=new Uint8Array(4),me=t.createTexture();t.bindTexture(j,me),t.texParameteri(j,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(j,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<Ae;Ge++)j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?t.texImage3D(Ce,0,t.RGBA,1,1,ze,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(Ce+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return me}const Z={};Z[t.TEXTURE_2D]=he(t.TEXTURE_2D,t.TEXTURE_2D,1),Z[t.TEXTURE_CUBE_MAP]=he(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[t.TEXTURE_2D_ARRAY]=he(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Z[t.TEXTURE_3D]=he(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ne(t.DEPTH_TEST),s.setFunc(Yo),O(!1),G(lp),ne(t.CULL_FACE),R(Gi);function ne(j){u[j]!==!0&&(t.enable(j),u[j]=!0)}function de(j){u[j]!==!1&&(t.disable(j),u[j]=!1)}function Me(j,Ce){return f[j]!==Ce?(t.bindFramebuffer(j,Ce),f[j]=Ce,j===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Ce),j===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Ce),!0):!1}function xe(j,Ce){let Ae=h,ze=!1;if(j){Ae=d.get(Ce),Ae===void 0&&(Ae=[],d.set(Ce,Ae));const Ee=j.textures;if(Ae.length!==Ee.length||Ae[0]!==t.COLOR_ATTACHMENT0){for(let me=0,Ge=Ee.length;me<Ge;me++)Ae[me]=t.COLOR_ATTACHMENT0+me;Ae.length=Ee.length,ze=!0}}else Ae[0]!==t.BACK&&(Ae[0]=t.BACK,ze=!0);ze&&t.drawBuffers(Ae)}function Re(j){return g!==j?(t.useProgram(j),g=j,!0):!1}const V={[$r]:t.FUNC_ADD,[Ib]:t.FUNC_SUBTRACT,[Nb]:t.FUNC_REVERSE_SUBTRACT};V[Db]=t.MIN,V[Lb]=t.MAX;const $={[Fb]:t.ZERO,[Ub]:t.ONE,[Ob]:t.SRC_COLOR,[rf]:t.SRC_ALPHA,[Gb]:t.SRC_ALPHA_SATURATE,[Vb]:t.DST_COLOR,[kb]:t.DST_ALPHA,[Bb]:t.ONE_MINUS_SRC_COLOR,[of]:t.ONE_MINUS_SRC_ALPHA,[Hb]:t.ONE_MINUS_DST_COLOR,[zb]:t.ONE_MINUS_DST_ALPHA,[$b]:t.CONSTANT_COLOR,[Wb]:t.ONE_MINUS_CONSTANT_COLOR,[Xb]:t.CONSTANT_ALPHA,[Yb]:t.ONE_MINUS_CONSTANT_ALPHA};function R(j,Ce,Ae,ze,Ee,me,Ge,Qe,Pt,yt){if(j===Gi){x===!0&&(de(t.BLEND),x=!1);return}if(x===!1&&(ne(t.BLEND),x=!0),j!==Pb){if(j!==m||yt!==_){if((p!==$r||b!==$r)&&(t.blendEquation(t.FUNC_ADD),p=$r,b=$r),yt)switch(j){case Bo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case cp:t.blendFunc(t.ONE,t.ONE);break;case up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case fp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:gt("WebGLState: Invalid blending: ",j);break}else switch(j){case Bo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case cp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case up:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fp:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",j);break}M=null,y=null,L=null,B=null,z.set(0,0,0),v=0,m=j,_=yt}return}Ee=Ee||Ce,me=me||Ae,Ge=Ge||ze,(Ce!==p||Ee!==b)&&(t.blendEquationSeparate(V[Ce],V[Ee]),p=Ce,b=Ee),(Ae!==M||ze!==y||me!==L||Ge!==B)&&(t.blendFuncSeparate($[Ae],$[ze],$[me],$[Ge]),M=Ae,y=ze,L=me,B=Ge),(Qe.equals(z)===!1||Pt!==v)&&(t.blendColor(Qe.r,Qe.g,Qe.b,Pt),z.copy(Qe),v=Pt),m=j,_=!1}function N(j,Ce){j.side===Fi?de(t.CULL_FACE):ne(t.CULL_FACE);let Ae=j.side===xn;Ce&&(Ae=!Ae),O(Ae),j.blending===Bo&&j.transparent===!1?R(Gi):R(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),s.setFunc(j.depthFunc),s.setTest(j.depthTest),s.setMask(j.depthWrite),o.setMask(j.colorWrite);const ze=j.stencilWrite;a.setTest(ze),ze&&(a.setMask(j.stencilWriteMask),a.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),a.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),ie(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?ne(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function O(j){D!==j&&(j?t.frontFace(t.CW):t.frontFace(t.CCW),D=j)}function G(j){j!==Ab?(ne(t.CULL_FACE),j!==I&&(j===lp?t.cullFace(t.BACK):j===Cb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),I=j}function w(j){j!==C&&(T&&t.lineWidth(j),C=j)}function ie(j,Ce,Ae){j?(ne(t.POLYGON_OFFSET_FILL),(X!==Ce||E!==Ae)&&(X=Ce,E=Ae,s.getReversed()&&(Ce=-Ce),t.polygonOffset(Ce,Ae))):de(t.POLYGON_OFFSET_FILL)}function Q(j){j?ne(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function J(j){j===void 0&&(j=t.TEXTURE0+U-1),Y!==j&&(t.activeTexture(j),Y=j)}function te(j,Ce,Ae){Ae===void 0&&(Y===null?Ae=t.TEXTURE0+U-1:Ae=Y);let ze=q[Ae];ze===void 0&&(ze={type:void 0,texture:void 0},q[Ae]=ze),(ze.type!==j||ze.texture!==Ce)&&(Y!==Ae&&(t.activeTexture(Ae),Y=Ae),t.bindTexture(j,Ce||Z[j]),ze.type=j,ze.texture=Ce)}function A(){const j=q[Y];j!==void 0&&j.type!==void 0&&(t.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function S(){try{t.compressedTexImage2D(...arguments)}catch(j){gt("WebGLState:",j)}}function W(){try{t.compressedTexImage3D(...arguments)}catch(j){gt("WebGLState:",j)}}function re(){try{t.texSubImage2D(...arguments)}catch(j){gt("WebGLState:",j)}}function ue(){try{t.texSubImage3D(...arguments)}catch(j){gt("WebGLState:",j)}}function oe(){try{t.compressedTexSubImage2D(...arguments)}catch(j){gt("WebGLState:",j)}}function Pe(){try{t.compressedTexSubImage3D(...arguments)}catch(j){gt("WebGLState:",j)}}function be(){try{t.texStorage2D(...arguments)}catch(j){gt("WebGLState:",j)}}function ke(){try{t.texStorage3D(...arguments)}catch(j){gt("WebGLState:",j)}}function We(){try{t.texImage2D(...arguments)}catch(j){gt("WebGLState:",j)}}function Se(){try{t.texImage3D(...arguments)}catch(j){gt("WebGLState:",j)}}function we(j){le.equals(j)===!1&&(t.scissor(j.x,j.y,j.z,j.w),le.copy(j))}function Ie(j){ge.equals(j)===!1&&(t.viewport(j.x,j.y,j.z,j.w),ge.copy(j))}function Fe(j,Ce){let Ae=c.get(Ce);Ae===void 0&&(Ae=new WeakMap,c.set(Ce,Ae));let ze=Ae.get(j);ze===void 0&&(ze=t.getUniformBlockIndex(Ce,j.name),Ae.set(j,ze))}function Ue(j,Ce){const ze=c.get(Ce).get(j);l.get(Ce)!==ze&&(t.uniformBlockBinding(Ce,ze,j.__bindingPointIndex),l.set(Ce,ze))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},Y=null,q={},f={},d=new WeakMap,h=[],g=null,x=!1,m=null,p=null,M=null,y=null,b=null,L=null,B=null,z=new At(0,0,0),v=0,_=!1,D=null,I=null,C=null,X=null,E=null,le.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:ne,disable:de,bindFramebuffer:Me,drawBuffers:xe,useProgram:Re,setBlending:R,setMaterial:N,setFlipSided:O,setCullFace:G,setLineWidth:w,setPolygonOffset:ie,setScissorTest:Q,activeTexture:J,bindTexture:te,unbindTexture:A,compressedTexImage2D:S,compressedTexImage3D:W,texImage2D:We,texImage3D:Se,updateUBOMapping:Fe,uniformBlockBinding:Ue,texStorage2D:be,texStorage3D:ke,texSubImage2D:re,texSubImage3D:ue,compressedTexSubImage2D:oe,compressedTexSubImage3D:Pe,scissor:we,viewport:Ie,reset:tt}}function CT(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new St,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return h?new OffscreenCanvas(A,S):Bl("canvas")}function x(A,S,W){let re=1;const ue=te(A);if((ue.width>W||ue.height>W)&&(re=W/Math.max(ue.width,ue.height)),re<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const oe=Math.floor(re*ue.width),Pe=Math.floor(re*ue.height);f===void 0&&(f=g(oe,Pe));const be=S?g(oe,Pe):f;return be.width=oe,be.height=Pe,be.getContext("2d").drawImage(A,0,0,oe,Pe),et("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+oe+"x"+Pe+")."),be}else return"data"in A&&et("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){t.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(A,S,W,re,ue=!1){if(A!==null){if(t[A]!==void 0)return t[A];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe=S;if(S===t.RED&&(W===t.FLOAT&&(oe=t.R32F),W===t.HALF_FLOAT&&(oe=t.R16F),W===t.UNSIGNED_BYTE&&(oe=t.R8)),S===t.RED_INTEGER&&(W===t.UNSIGNED_BYTE&&(oe=t.R8UI),W===t.UNSIGNED_SHORT&&(oe=t.R16UI),W===t.UNSIGNED_INT&&(oe=t.R32UI),W===t.BYTE&&(oe=t.R8I),W===t.SHORT&&(oe=t.R16I),W===t.INT&&(oe=t.R32I)),S===t.RG&&(W===t.FLOAT&&(oe=t.RG32F),W===t.HALF_FLOAT&&(oe=t.RG16F),W===t.UNSIGNED_BYTE&&(oe=t.RG8)),S===t.RG_INTEGER&&(W===t.UNSIGNED_BYTE&&(oe=t.RG8UI),W===t.UNSIGNED_SHORT&&(oe=t.RG16UI),W===t.UNSIGNED_INT&&(oe=t.RG32UI),W===t.BYTE&&(oe=t.RG8I),W===t.SHORT&&(oe=t.RG16I),W===t.INT&&(oe=t.RG32I)),S===t.RGB_INTEGER&&(W===t.UNSIGNED_BYTE&&(oe=t.RGB8UI),W===t.UNSIGNED_SHORT&&(oe=t.RGB16UI),W===t.UNSIGNED_INT&&(oe=t.RGB32UI),W===t.BYTE&&(oe=t.RGB8I),W===t.SHORT&&(oe=t.RGB16I),W===t.INT&&(oe=t.RGB32I)),S===t.RGBA_INTEGER&&(W===t.UNSIGNED_BYTE&&(oe=t.RGBA8UI),W===t.UNSIGNED_SHORT&&(oe=t.RGBA16UI),W===t.UNSIGNED_INT&&(oe=t.RGBA32UI),W===t.BYTE&&(oe=t.RGBA8I),W===t.SHORT&&(oe=t.RGBA16I),W===t.INT&&(oe=t.RGBA32I)),S===t.RGB&&(W===t.UNSIGNED_INT_5_9_9_9_REV&&(oe=t.RGB9_E5),W===t.UNSIGNED_INT_10F_11F_11F_REV&&(oe=t.R11F_G11F_B10F)),S===t.RGBA){const Pe=ue?Ul:ht.getTransfer(re);W===t.FLOAT&&(oe=t.RGBA32F),W===t.HALF_FLOAT&&(oe=t.RGBA16F),W===t.UNSIGNED_BYTE&&(oe=Pe===bt?t.SRGB8_ALPHA8:t.RGBA8),W===t.UNSIGNED_SHORT_4_4_4_4&&(oe=t.RGBA4),W===t.UNSIGNED_SHORT_5_5_5_1&&(oe=t.RGB5_A1)}return(oe===t.R16F||oe===t.R32F||oe===t.RG16F||oe===t.RG32F||oe===t.RGBA16F||oe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function b(A,S){let W;return A?S===null||S===vi||S===Ys?W=t.DEPTH24_STENCIL8:S===ci?W=t.DEPTH32F_STENCIL8:S===Xs&&(W=t.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vi||S===Ys?W=t.DEPTH_COMPONENT24:S===ci?W=t.DEPTH_COMPONENT32F:S===Xs&&(W=t.DEPTH_COMPONENT16),W}function L(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Jt&&A.minFilter!==wt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function B(A){const S=A.target;S.removeEventListener("dispose",B),v(S),S.isVideoTexture&&u.delete(S)}function z(A){const S=A.target;S.removeEventListener("dispose",z),D(S)}function v(A){const S=i.get(A);if(S.__webglInit===void 0)return;const W=A.source,re=d.get(W);if(re){const ue=re[S.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&_(A),Object.keys(re).length===0&&d.delete(W)}i.remove(A)}function _(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const W=A.source,re=d.get(W);delete re[S.__cacheKey],s.memory.textures--}function D(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let ue=0;ue<S.__webglFramebuffer[re].length;ue++)t.deleteFramebuffer(S.__webglFramebuffer[re][ue]);else t.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)t.deleteFramebuffer(S.__webglFramebuffer[re]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=A.textures;for(let re=0,ue=W.length;re<ue;re++){const oe=i.get(W[re]);oe.__webglTexture&&(t.deleteTexture(oe.__webglTexture),s.memory.textures--),i.remove(W[re])}i.remove(A)}let I=0;function C(){I=0}function X(){const A=I;return A>=r.maxTextures&&et("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),I+=1,A}function E(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function U(A,S){const W=i.get(A);if(A.isVideoTexture&&Q(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&W.__version!==A.version){const re=A.image;if(re===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{Z(W,A,S);return}}else A.isExternalTexture&&(W.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,W.__webglTexture,t.TEXTURE0+S)}function T(A,S){const W=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){Z(W,A,S);return}else A.isExternalTexture&&(W.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,W.__webglTexture,t.TEXTURE0+S)}function P(A,S){const W=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){Z(W,A,S);return}n.bindTexture(t.TEXTURE_3D,W.__webglTexture,t.TEXTURE0+S)}function k(A,S){const W=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&W.__version!==A.version){ne(W,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,W.__webglTexture,t.TEXTURE0+S)}const Y={[hf]:t.REPEAT,[Oi]:t.CLAMP_TO_EDGE,[pf]:t.MIRRORED_REPEAT},q={[Jt]:t.NEAREST,[Zb]:t.NEAREST_MIPMAP_NEAREST,[wa]:t.NEAREST_MIPMAP_LINEAR,[wt]:t.LINEAR,[eu]:t.LINEAR_MIPMAP_NEAREST,[Kr]:t.LINEAR_MIPMAP_LINEAR},H={[eS]:t.NEVER,[oS]:t.ALWAYS,[tS]:t.LESS,[qd]:t.LEQUAL,[nS]:t.EQUAL,[Kd]:t.GEQUAL,[iS]:t.GREATER,[rS]:t.NOTEQUAL};function K(A,S){if(S.type===ci&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===wt||S.magFilter===eu||S.magFilter===wa||S.magFilter===Kr||S.minFilter===wt||S.minFilter===eu||S.minFilter===wa||S.minFilter===Kr)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,Y[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Y[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Y[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,q[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,q[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,H[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Jt||S.minFilter!==wa&&S.minFilter!==Kr||S.type===ci&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function le(A,S){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",B));const re=S.source;let ue=d.get(re);ue===void 0&&(ue={},d.set(re,ue));const oe=E(S);if(oe!==A.__cacheKey){ue[oe]===void 0&&(ue[oe]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,W=!0),ue[oe].usedTimes++;const Pe=ue[A.__cacheKey];Pe!==void 0&&(ue[A.__cacheKey].usedTimes--,Pe.usedTimes===0&&_(S)),A.__cacheKey=oe,A.__webglTexture=ue[oe].texture}return W}function ge(A,S,W){return Math.floor(Math.floor(A/W)/S)}function he(A,S,W,re){const oe=A.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,W,re,S.data);else{oe.sort((Se,we)=>Se.start-we.start);let Pe=0;for(let Se=1;Se<oe.length;Se++){const we=oe[Pe],Ie=oe[Se],Fe=we.start+we.count,Ue=ge(Ie.start,S.width,4),tt=ge(we.start,S.width,4);Ie.start<=Fe+1&&Ue===tt&&ge(Ie.start+Ie.count-1,S.width,4)===Ue?we.count=Math.max(we.count,Ie.start+Ie.count-we.start):(++Pe,oe[Pe]=Ie)}oe.length=Pe+1;const be=t.getParameter(t.UNPACK_ROW_LENGTH),ke=t.getParameter(t.UNPACK_SKIP_PIXELS),We=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Se=0,we=oe.length;Se<we;Se++){const Ie=oe[Se],Fe=Math.floor(Ie.start/4),Ue=Math.ceil(Ie.count/4),tt=Fe%S.width,j=Math.floor(Fe/S.width),Ce=Ue,Ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,tt),t.pixelStorei(t.UNPACK_SKIP_ROWS,j),n.texSubImage2D(t.TEXTURE_2D,0,tt,j,Ce,Ae,W,re,S.data)}A.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,be),t.pixelStorei(t.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(t.UNPACK_SKIP_ROWS,We)}}function Z(A,S,W){let re=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=t.TEXTURE_3D);const ue=le(A,S),oe=S.source;n.bindTexture(re,A.__webglTexture,t.TEXTURE0+W);const Pe=i.get(oe);if(oe.version!==Pe.__version||ue===!0){n.activeTexture(t.TEXTURE0+W);const be=ht.getPrimaries(ht.workingColorSpace),ke=S.colorSpace===yr?null:ht.getPrimaries(S.colorSpace),We=S.colorSpace===yr||be===ke?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Se=x(S.image,!1,r.maxTextureSize);Se=J(S,Se);const we=o.convert(S.format,S.colorSpace),Ie=o.convert(S.type);let Fe=y(S.internalFormat,we,Ie,S.colorSpace,S.isVideoTexture);K(re,S);let Ue;const tt=S.mipmaps,j=S.isVideoTexture!==!0,Ce=Pe.__version===void 0||ue===!0,Ae=oe.dataReady,ze=L(S,Se);if(S.isDepthTexture)Fe=b(S.format===Zr,S.type),Ce&&(j?n.texStorage2D(t.TEXTURE_2D,1,Fe,Se.width,Se.height):n.texImage2D(t.TEXTURE_2D,0,Fe,Se.width,Se.height,0,we,Ie,null));else if(S.isDataTexture)if(tt.length>0){j&&Ce&&n.texStorage2D(t.TEXTURE_2D,ze,Fe,tt[0].width,tt[0].height);for(let Ee=0,me=tt.length;Ee<me;Ee++)Ue=tt[Ee],j?Ae&&n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,Ue.width,Ue.height,we,Ie,Ue.data):n.texImage2D(t.TEXTURE_2D,Ee,Fe,Ue.width,Ue.height,0,we,Ie,Ue.data);S.generateMipmaps=!1}else j?(Ce&&n.texStorage2D(t.TEXTURE_2D,ze,Fe,Se.width,Se.height),Ae&&he(S,Se,we,Ie)):n.texImage2D(t.TEXTURE_2D,0,Fe,Se.width,Se.height,0,we,Ie,Se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){j&&Ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,Fe,tt[0].width,tt[0].height,Se.depth);for(let Ee=0,me=tt.length;Ee<me;Ee++)if(Ue=tt[Ee],S.format!==hn)if(we!==null)if(j){if(Ae)if(S.layerUpdates.size>0){const Ge=Dp(Ue.width,Ue.height,S.format,S.type);for(const Qe of S.layerUpdates){const Pt=Ue.data.subarray(Qe*Ge/Ue.data.BYTES_PER_ELEMENT,(Qe+1)*Ge/Ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Ee,0,0,Qe,Ue.width,Ue.height,1,we,Pt)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Ee,0,0,0,Ue.width,Ue.height,Se.depth,we,Ue.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Ee,Fe,Ue.width,Ue.height,Se.depth,0,Ue.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?Ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Ee,0,0,0,Ue.width,Ue.height,Se.depth,we,Ie,Ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Ee,Fe,Ue.width,Ue.height,Se.depth,0,we,Ie,Ue.data)}else{j&&Ce&&n.texStorage2D(t.TEXTURE_2D,ze,Fe,tt[0].width,tt[0].height);for(let Ee=0,me=tt.length;Ee<me;Ee++)Ue=tt[Ee],S.format!==hn?we!==null?j?Ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,Ee,0,0,Ue.width,Ue.height,we,Ue.data):n.compressedTexImage2D(t.TEXTURE_2D,Ee,Fe,Ue.width,Ue.height,0,Ue.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?Ae&&n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,Ue.width,Ue.height,we,Ie,Ue.data):n.texImage2D(t.TEXTURE_2D,Ee,Fe,Ue.width,Ue.height,0,we,Ie,Ue.data)}else if(S.isDataArrayTexture)if(j){if(Ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ze,Fe,Se.width,Se.height,Se.depth),Ae)if(S.layerUpdates.size>0){const Ee=Dp(Se.width,Se.height,S.format,S.type);for(const me of S.layerUpdates){const Ge=Se.data.subarray(me*Ee/Se.data.BYTES_PER_ELEMENT,(me+1)*Ee/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,me,Se.width,Se.height,1,we,Ie,Ge)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,we,Ie,Se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,Se.width,Se.height,Se.depth,0,we,Ie,Se.data);else if(S.isData3DTexture)j?(Ce&&n.texStorage3D(t.TEXTURE_3D,ze,Fe,Se.width,Se.height,Se.depth),Ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,we,Ie,Se.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,Se.width,Se.height,Se.depth,0,we,Ie,Se.data);else if(S.isFramebufferTexture){if(Ce)if(j)n.texStorage2D(t.TEXTURE_2D,ze,Fe,Se.width,Se.height);else{let Ee=Se.width,me=Se.height;for(let Ge=0;Ge<ze;Ge++)n.texImage2D(t.TEXTURE_2D,Ge,Fe,Ee,me,0,we,Ie,null),Ee>>=1,me>>=1}}else if(tt.length>0){if(j&&Ce){const Ee=te(tt[0]);n.texStorage2D(t.TEXTURE_2D,ze,Fe,Ee.width,Ee.height)}for(let Ee=0,me=tt.length;Ee<me;Ee++)Ue=tt[Ee],j?Ae&&n.texSubImage2D(t.TEXTURE_2D,Ee,0,0,we,Ie,Ue):n.texImage2D(t.TEXTURE_2D,Ee,Fe,we,Ie,Ue);S.generateMipmaps=!1}else if(j){if(Ce){const Ee=te(Se);n.texStorage2D(t.TEXTURE_2D,ze,Fe,Ee.width,Ee.height)}Ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,we,Ie,Se)}else n.texImage2D(t.TEXTURE_2D,0,Fe,we,Ie,Se);m(S)&&p(re),Pe.__version=oe.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ne(A,S,W){if(S.image.length!==6)return;const re=le(A,S),ue=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+W);const oe=i.get(ue);if(ue.version!==oe.__version||re===!0){n.activeTexture(t.TEXTURE0+W);const Pe=ht.getPrimaries(ht.workingColorSpace),be=S.colorSpace===yr?null:ht.getPrimaries(S.colorSpace),ke=S.colorSpace===yr||Pe===be?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const We=S.isCompressedTexture||S.image[0].isCompressedTexture,Se=S.image[0]&&S.image[0].isDataTexture,we=[];for(let me=0;me<6;me++)!We&&!Se?we[me]=x(S.image[me],!0,r.maxCubemapSize):we[me]=Se?S.image[me].image:S.image[me],we[me]=J(S,we[me]);const Ie=we[0],Fe=o.convert(S.format,S.colorSpace),Ue=o.convert(S.type),tt=y(S.internalFormat,Fe,Ue,S.colorSpace),j=S.isVideoTexture!==!0,Ce=oe.__version===void 0||re===!0,Ae=ue.dataReady;let ze=L(S,Ie);K(t.TEXTURE_CUBE_MAP,S);let Ee;if(We){j&&Ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ze,tt,Ie.width,Ie.height);for(let me=0;me<6;me++){Ee=we[me].mipmaps;for(let Ge=0;Ge<Ee.length;Ge++){const Qe=Ee[Ge];S.format!==hn?Fe!==null?j?Ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge,0,0,Qe.width,Qe.height,Fe,Qe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge,tt,Qe.width,Qe.height,0,Qe.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge,0,0,Qe.width,Qe.height,Fe,Ue,Qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge,tt,Qe.width,Qe.height,0,Fe,Ue,Qe.data)}}}else{if(Ee=S.mipmaps,j&&Ce){Ee.length>0&&ze++;const me=te(we[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ze,tt,me.width,me.height)}for(let me=0;me<6;me++)if(Se){j?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,we[me].width,we[me].height,Fe,Ue,we[me].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,tt,we[me].width,we[me].height,0,Fe,Ue,we[me].data);for(let Ge=0;Ge<Ee.length;Ge++){const Pt=Ee[Ge].image[me].image;j?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge+1,0,0,Pt.width,Pt.height,Fe,Ue,Pt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge+1,tt,Pt.width,Pt.height,0,Fe,Ue,Pt.data)}}else{j?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Fe,Ue,we[me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,tt,Fe,Ue,we[me]);for(let Ge=0;Ge<Ee.length;Ge++){const Qe=Ee[Ge];j?Ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge+1,0,0,Fe,Ue,Qe.image[me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ge+1,tt,Fe,Ue,Qe.image[me])}}}m(S)&&p(t.TEXTURE_CUBE_MAP),oe.__version=ue.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function de(A,S,W,re,ue,oe){const Pe=o.convert(W.format,W.colorSpace),be=o.convert(W.type),ke=y(W.internalFormat,Pe,be,W.colorSpace),We=i.get(S),Se=i.get(W);if(Se.__renderTarget=S,!We.__hasExternalTextures){const we=Math.max(1,S.width>>oe),Ie=Math.max(1,S.height>>oe);ue===t.TEXTURE_3D||ue===t.TEXTURE_2D_ARRAY?n.texImage3D(ue,oe,ke,we,Ie,S.depth,0,Pe,be,null):n.texImage2D(ue,oe,ke,we,Ie,0,Pe,be,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),ie(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,ue,Se.__webglTexture,0,w(S)):(ue===t.TEXTURE_2D||ue>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,ue,Se.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Me(A,S,W){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){const re=S.depthTexture,ue=re&&re.isDepthTexture?re.type:null,oe=b(S.stencilBuffer,ue),Pe=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ie(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,w(S),oe,S.width,S.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,w(S),oe,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,oe,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Pe,t.RENDERBUFFER,A)}else{const re=S.textures;for(let ue=0;ue<re.length;ue++){const oe=re[ue],Pe=o.convert(oe.format,oe.colorSpace),be=o.convert(oe.type),ke=y(oe.internalFormat,Pe,be,oe.colorSpace);ie(S)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,w(S),ke,S.width,S.height):W?t.renderbufferStorageMultisample(t.RENDERBUFFER,w(S),ke,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ke,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function xe(A,S,W){const re=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=i.get(S.depthTexture);if(ue.__renderTarget=S,(!ue.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),re){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,S.depthTexture.addEventListener("dispose",B)),ue.__webglTexture===void 0){ue.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ue.__webglTexture),K(t.TEXTURE_CUBE_MAP,S.depthTexture);const We=o.convert(S.depthTexture.format),Se=o.convert(S.depthTexture.type);let we;S.depthTexture.format===ji?we=t.DEPTH_COMPONENT24:S.depthTexture.format===Zr&&(we=t.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,we,S.width,S.height,0,We,Se,null)}}else U(S.depthTexture,0);const oe=ue.__webglTexture,Pe=w(S),be=re?t.TEXTURE_CUBE_MAP_POSITIVE_X+W:t.TEXTURE_2D,ke=S.depthTexture.format===Zr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===ji)ie(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ke,be,oe,0,Pe):t.framebufferTexture2D(t.FRAMEBUFFER,ke,be,oe,0);else if(S.depthTexture.format===Zr)ie(S)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ke,be,oe,0,Pe):t.framebufferTexture2D(t.FRAMEBUFFER,ke,be,oe,0);else throw new Error("Unknown depthTexture format")}function Re(A){const S=i.get(A),W=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const re=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),re){const ue=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,re.removeEventListener("dispose",ue)};re.addEventListener("dispose",ue),S.__depthDisposeCallback=ue}S.__boundDepthTexture=re}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(W)for(let re=0;re<6;re++)xe(S.__webglFramebuffer[re],A,re);else{const re=A.texture.mipmaps;re&&re.length>0?xe(S.__webglFramebuffer[0],A,0):xe(S.__webglFramebuffer,A,0)}else if(W){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]===void 0)S.__webglDepthbuffer[re]=t.createRenderbuffer(),Me(S.__webglDepthbuffer[re],A,!1);else{const ue=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=S.__webglDepthbuffer[re];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,oe)}}else{const re=A.texture.mipmaps;if(re&&re.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),Me(S.__webglDepthbuffer,A,!1);else{const ue=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,oe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function V(A,S,W){const re=i.get(A);S!==void 0&&de(re.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),W!==void 0&&Re(A)}function $(A){const S=A.texture,W=i.get(A),re=i.get(S);A.addEventListener("dispose",z);const ue=A.textures,oe=A.isWebGLCubeRenderTarget===!0,Pe=ue.length>1;if(Pe||(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=S.version,s.memory.textures++),oe){W.__webglFramebuffer=[];for(let be=0;be<6;be++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[be]=[];for(let ke=0;ke<S.mipmaps.length;ke++)W.__webglFramebuffer[be][ke]=t.createFramebuffer()}else W.__webglFramebuffer[be]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let be=0;be<S.mipmaps.length;be++)W.__webglFramebuffer[be]=t.createFramebuffer()}else W.__webglFramebuffer=t.createFramebuffer();if(Pe)for(let be=0,ke=ue.length;be<ke;be++){const We=i.get(ue[be]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),s.memory.textures++)}if(A.samples>0&&ie(A)===!1){W.__webglMultisampledFramebuffer=t.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let be=0;be<ue.length;be++){const ke=ue[be];W.__webglColorRenderbuffer[be]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,W.__webglColorRenderbuffer[be]);const We=o.convert(ke.format,ke.colorSpace),Se=o.convert(ke.type),we=y(ke.internalFormat,We,Se,ke.colorSpace,A.isXRRenderTarget===!0),Ie=w(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,we,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,W.__webglColorRenderbuffer[be])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=t.createRenderbuffer(),Me(W.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),K(t.TEXTURE_CUBE_MAP,S);for(let be=0;be<6;be++)if(S.mipmaps&&S.mipmaps.length>0)for(let ke=0;ke<S.mipmaps.length;ke++)de(W.__webglFramebuffer[be][ke],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke);else de(W.__webglFramebuffer[be],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);m(S)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let be=0,ke=ue.length;be<ke;be++){const We=ue[be],Se=i.get(We);let we=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(we=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(we,Se.__webglTexture),K(we,We),de(W.__webglFramebuffer,A,We,t.COLOR_ATTACHMENT0+be,we,0),m(We)&&p(we)}n.unbindTexture()}else{let be=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(be=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(be,re.__webglTexture),K(be,S),S.mipmaps&&S.mipmaps.length>0)for(let ke=0;ke<S.mipmaps.length;ke++)de(W.__webglFramebuffer[ke],A,S,t.COLOR_ATTACHMENT0,be,ke);else de(W.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,be,0);m(S)&&p(be),n.unbindTexture()}A.depthBuffer&&Re(A)}function R(A){const S=A.textures;for(let W=0,re=S.length;W<re;W++){const ue=S[W];if(m(ue)){const oe=M(A),Pe=i.get(ue).__webglTexture;n.bindTexture(oe,Pe),p(oe),n.unbindTexture()}}}const N=[],O=[];function G(A){if(A.samples>0){if(ie(A)===!1){const S=A.textures,W=A.width,re=A.height;let ue=t.COLOR_BUFFER_BIT;const oe=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pe=i.get(A),be=S.length>1;if(be)for(let We=0;We<S.length;We++)n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ke=A.texture.mipmaps;ke&&ke.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let We=0;We<S.length;We++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ue|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ue|=t.STENCIL_BUFFER_BIT)),be){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[We]);const Se=i.get(S[We]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,W,re,0,0,W,re,ue,t.NEAREST),l===!0&&(N.length=0,O.length=0,N.push(t.COLOR_ATTACHMENT0+We),A.depthBuffer&&A.resolveDepthBuffer===!1&&(N.push(oe),O.push(oe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,O)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,N))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),be)for(let We=0;We<S.length;We++){n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[We]);const Se=i.get(S[We]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+We,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function w(A){return Math.min(r.maxSamples,A.samples)}function ie(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Q(A){const S=s.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function J(A,S){const W=A.colorSpace,re=A.format,ue=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==Cr&&W!==yr&&(ht.getTransfer(W)===bt?(re!==hn||ue!==fn)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",W)),S}function te(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=C,this.setTexture2D=U,this.setTexture2DArray=T,this.setTexture3D=P,this.setTextureCube=k,this.rebindTextures=V,this.setupRenderTarget=$,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ie,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function RT(t,e){function n(i,r=yr){let o;const s=ht.getTransfer(r);if(i===fn)return t.UNSIGNED_BYTE;if(i===Gd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===$d)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Hv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Gv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===zv)return t.BYTE;if(i===Vv)return t.SHORT;if(i===Xs)return t.UNSIGNED_SHORT;if(i===Hd)return t.INT;if(i===vi)return t.UNSIGNED_INT;if(i===ci)return t.FLOAT;if(i===Zi)return t.HALF_FLOAT;if(i===$v)return t.ALPHA;if(i===Wv)return t.RGB;if(i===hn)return t.RGBA;if(i===ji)return t.DEPTH_COMPONENT;if(i===Zr)return t.DEPTH_STENCIL;if(i===Xv)return t.RED;if(i===Wd)return t.RED_INTEGER;if(i===Ko)return t.RG;if(i===Xd)return t.RG_INTEGER;if(i===Yd)return t.RGBA_INTEGER;if(i===fl||i===dl||i===hl||i===pl)if(s===bt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===fl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===fl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mf||i===gf||i===vf||i===_f)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===mf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_f)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xf||i===yf||i===bf||i===Sf||i===Mf||i===Ef||i===wf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===xf||i===yf)return s===bt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===bf)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sf)return o.COMPRESSED_R11_EAC;if(i===Mf)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Ef)return o.COMPRESSED_RG11_EAC;if(i===wf)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Tf||i===Af||i===Cf||i===Rf||i===Pf||i===If||i===Nf||i===Df||i===Lf||i===Ff||i===Uf||i===Of||i===Bf||i===kf)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Tf)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Af)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cf)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rf)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Pf)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===If)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nf)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Df)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lf)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ff)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uf)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Of)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bf)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kf)return s===bt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zf||i===Vf||i===Hf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===zf)return s===bt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gf||i===$f||i===Wf||i===Xf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Gf)return o.COMPRESSED_RED_RGTC1_EXT;if(i===$f)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const PT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IT=`
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

}`;class NT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new n0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qn({vertexShader:PT,fragmentShader:IT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _i(new pa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class DT extends rs{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const x=typeof XRWebGLBinding<"u",m=new NT,p={},M=n.getContextAttributes();let y=null,b=null;const L=[],B=[],z=new St;let v=null;const _=new kn;_.viewport=new kt;const D=new kn;D.viewport=new kt;const I=[_,D],C=new WS;let X=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ne=L[Z];return ne===void 0&&(ne=new lu,L[Z]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Z){let ne=L[Z];return ne===void 0&&(ne=new lu,L[Z]=ne),ne.getGripSpace()},this.getHand=function(Z){let ne=L[Z];return ne===void 0&&(ne=new lu,L[Z]=ne),ne.getHandSpace()};function U(Z){const ne=B.indexOf(Z.inputSource);if(ne===-1)return;const de=L[ne];de!==void 0&&(de.update(Z.inputSource,Z.frame,c||s),de.dispatchEvent({type:Z.type,data:Z.inputSource}))}function T(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",T),r.removeEventListener("inputsourceschange",P);for(let Z=0;Z<L.length;Z++){const ne=B[Z];ne!==null&&(B[Z]=null,L[Z].disconnect(ne))}X=null,E=null,m.reset();for(const Z in p)delete p[Z];e.setRenderTarget(y),h=null,d=null,f=null,r=null,b=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,i.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",T),r.addEventListener("inputsourceschange",P),M.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(z),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Me=null,xe=null;M.depth&&(xe=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=M.stencil?Zr:ji,Me=M.stencil?Ys:vi);const Re={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:o};f=this.getBinding(),d=f.createProjectionLayer(Re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new gn(d.textureWidth,d.textureHeight,{format:hn,type:fn,depthTexture:new qs(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,n,de),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new gn(h.framebufferWidth,h.framebufferHeight,{format:hn,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(a),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function P(Z){for(let ne=0;ne<Z.removed.length;ne++){const de=Z.removed[ne],Me=B.indexOf(de);Me>=0&&(B[Me]=null,L[Me].disconnect(de))}for(let ne=0;ne<Z.added.length;ne++){const de=Z.added[ne];let Me=B.indexOf(de);if(Me===-1){for(let Re=0;Re<L.length;Re++)if(Re>=B.length){B.push(de),Me=Re;break}else if(B[Re]===null){B[Re]=de,Me=Re;break}if(Me===-1)break}const xe=L[Me];xe&&xe.connect(de)}}const k=new ce,Y=new ce;function q(Z,ne,de){k.setFromMatrixPosition(ne.matrixWorld),Y.setFromMatrixPosition(de.matrixWorld);const Me=k.distanceTo(Y),xe=ne.projectionMatrix.elements,Re=de.projectionMatrix.elements,V=xe[14]/(xe[10]-1),$=xe[14]/(xe[10]+1),R=(xe[9]+1)/xe[5],N=(xe[9]-1)/xe[5],O=(xe[8]-1)/xe[0],G=(Re[8]+1)/Re[0],w=V*O,ie=V*G,Q=Me/(-O+G),J=Q*-O;if(ne.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(J),Z.translateZ(Q),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),xe[10]===-1)Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const te=V+Q,A=$+Q,S=w-J,W=ie+(Me-J),re=R*$/A*te,ue=N*$/A*te;Z.projectionMatrix.makePerspective(S,W,re,ue,te,A),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function H(Z,ne){ne===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ne.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ne=Z.near,de=Z.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(de=m.depthFar)),C.near=D.near=_.near=ne,C.far=D.far=_.far=de,(X!==C.near||E!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),X=C.near,E=C.far),C.layers.mask=Z.layers.mask|6,_.layers.mask=C.layers.mask&-5,D.layers.mask=C.layers.mask&-3;const Me=Z.parent,xe=C.cameras;H(C,Me);for(let Re=0;Re<xe.length;Re++)H(xe[Re],Me);xe.length===2?q(C,_,D):C.projectionMatrix.copy(_.projectionMatrix),K(Z,C,Me)};function K(Z,ne,de){de===null?Z.matrix.copy(ne.matrixWorld):(Z.matrix.copy(de.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ne.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ne.projectionMatrix),Z.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Yf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(Z){return p[Z]};let le=null;function ge(Z,ne){if(u=ne.getViewerPose(c||s),g=ne,u!==null){const de=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let Me=!1;de.length!==C.cameras.length&&(C.cameras.length=0,Me=!0);for(let $=0;$<de.length;$++){const R=de[$];let N=null;if(h!==null)N=h.getViewport(R);else{const G=f.getViewSubImage(d,R);N=G.viewport,$===0&&(e.setRenderTargetTextures(b,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(b))}let O=I[$];O===void 0&&(O=new kn,O.layers.enable($),O.viewport=new kt,I[$]=O),O.matrix.fromArray(R.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(R.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(N.x,N.y,N.width,N.height),$===0&&(C.matrix.copy(O.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Me===!0&&C.cameras.push(O)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const $=f.getDepthInformation(de[0]);$&&$.isValid&&$.texture&&m.init($,r.renderState)}if(xe&&xe.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let $=0;$<de.length;$++){const R=de[$].camera;if(R){let N=p[R];N||(N=new n0,p[R]=N);const O=f.getCameraImage(R);N.sourceTexture=O}}}}for(let de=0;de<L.length;de++){const Me=B[de],xe=L[de];Me!==null&&xe!==void 0&&xe.update(Me,ne,c||s)}le&&le(Z,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const he=new o0;he.setAnimationLoop(ge),this.setAnimationLoop=function(Z){le=Z},this.dispose=function(){}}}const zr=new Ji,LT=new $t;function FT(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,i0(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,y,b){p.isMeshBasicMaterial?o(m,p):p.isMeshLambertMaterial?(o(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(o(m,p),f(m,p)):p.isMeshPhongMaterial?(o(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===xn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===xn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),y=M.envMap,b=M.envMapRotation;y&&(m.envMap.value=y,zr.copy(b),zr.x*=-1,zr.y*=-1,zr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),m.envMapRotation.value.setFromMatrix4(LT.makeRotationFromEuler(zr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=y*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function UT(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,y){const b=y.program;i.uniformBlockBinding(M,b)}function c(M,y){let b=r[M.id];b===void 0&&(g(M),b=u(M),r[M.id]=b,M.addEventListener("dispose",m));const L=y.program;i.updateUBOMapping(M,L);const B=e.render.frame;o[M.id]!==B&&(d(M),o[M.id]=B)}function u(M){const y=f();M.__bindingPointIndex=y;const b=t.createBuffer(),L=M.__size,B=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,L,B),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,b),b}function f(){for(let M=0;M<a;M++)if(s.indexOf(M)===-1)return s.push(M),M;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const y=r[M.id],b=M.uniforms,L=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let B=0,z=b.length;B<z;B++){const v=Array.isArray(b[B])?b[B]:[b[B]];for(let _=0,D=v.length;_<D;_++){const I=v[_];if(h(I,B,_,L)===!0){const C=I.__offset,X=Array.isArray(I.value)?I.value:[I.value];let E=0;for(let U=0;U<X.length;U++){const T=X[U],P=x(T);typeof T=="number"||typeof T=="boolean"?(I.__data[0]=T,t.bufferSubData(t.UNIFORM_BUFFER,C+E,I.__data)):T.isMatrix3?(I.__data[0]=T.elements[0],I.__data[1]=T.elements[1],I.__data[2]=T.elements[2],I.__data[3]=0,I.__data[4]=T.elements[3],I.__data[5]=T.elements[4],I.__data[6]=T.elements[5],I.__data[7]=0,I.__data[8]=T.elements[6],I.__data[9]=T.elements[7],I.__data[10]=T.elements[8],I.__data[11]=0):(T.toArray(I.__data,E),E+=P.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,C,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(M,y,b,L){const B=M.value,z=y+"_"+b;if(L[z]===void 0)return typeof B=="number"||typeof B=="boolean"?L[z]=B:L[z]=B.clone(),!0;{const v=L[z];if(typeof B=="number"||typeof B=="boolean"){if(v!==B)return L[z]=B,!0}else if(v.equals(B)===!1)return v.copy(B),!0}return!1}function g(M){const y=M.uniforms;let b=0;const L=16;for(let z=0,v=y.length;z<v;z++){const _=Array.isArray(y[z])?y[z]:[y[z]];for(let D=0,I=_.length;D<I;D++){const C=_[D],X=Array.isArray(C.value)?C.value:[C.value];for(let E=0,U=X.length;E<U;E++){const T=X[E],P=x(T),k=b%L,Y=k%P.boundary,q=k+Y;b+=Y,q!==0&&L-q<P.storage&&(b+=L-q),C.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=b,b+=P.storage}}}const B=b%L;return B>0&&(b+=L-B),M.__size=b,M.__cache={},this}function x(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):et("WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){const y=M.target;y.removeEventListener("dispose",m);const b=s.indexOf(y.__bindingPointIndex);s.splice(b,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete o[y.id]}function p(){for(const M in r)t.deleteBuffer(r[M]);s=[],r={},o={}}return{bind:l,update:c,dispose:p}}const OT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function BT(){return ti===null&&(ti=new IS(OT,16,16,Ko,Zi),ti.name="DFG_LUT",ti.minFilter=wt,ti.magFilter=wt,ti.wrapS=Oi,ti.wrapT=Oi,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class kT{constructor(e={}){const{canvas:n=aS(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=fn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=s;const x=h,m=new Set([Yd,Xd,Wd]),p=new Set([fn,vi,Xs,Ys,Gd,$d]),M=new Uint32Array(4),y=new Int32Array(4);let b=null,L=null;const B=[],z=[];let v=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let D=!1;this._outputColorSpace=In;let I=0,C=0,X=null,E=-1,U=null;const T=new kt,P=new kt;let k=null;const Y=new At(0);let q=0,H=n.width,K=n.height,le=1,ge=null,he=null;const Z=new kt(0,0,H,K),ne=new kt(0,0,H,K);let de=!1;const Me=new e0;let xe=!1,Re=!1;const V=new $t,$=new ce,R=new kt,N={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let O=!1;function G(){return X===null?le:1}let w=i;function ie(F,ee){return n.getContext(F,ee)}try{const F={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vd}`),n.addEventListener("webglcontextlost",Ge,!1),n.addEventListener("webglcontextrestored",Qe,!1),n.addEventListener("webglcontextcreationerror",Pt,!1),w===null){const ee="webgl2";if(w=ie(ee,F),w===null)throw ie(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(F){throw gt("WebGLRenderer: "+F.message),F}let Q,J,te,A,S,W,re,ue,oe,Pe,be,ke,We,Se,we,Ie,Fe,Ue,tt,j,Ce,Ae,ze;function Ee(){Q=new kE(w),Q.init(),Ce=new RT(w,Q),J=new IE(w,Q,e,Ce),te=new AT(w,Q),J.reversedDepthBuffer&&d&&te.buffers.depth.setReversed(!0),A=new HE(w),S=new hT,W=new CT(w,Q,te,S,J,Ce,A),re=new BE(_),ue=new YS(w),Ae=new RE(w,ue),oe=new zE(w,ue,A,Ae),Pe=new $E(w,oe,ue,Ae,A),Ue=new GE(w,J,W),we=new NE(S),be=new dT(_,re,Q,J,Ae,we),ke=new FT(_,S),We=new mT,Se=new bT(Q),Fe=new CE(_,re,te,Pe,g,l),Ie=new TT(_,Pe,J),ze=new UT(w,A,J,te),tt=new PE(w,Q,A),j=new VE(w,Q,A),A.programs=be.programs,_.capabilities=J,_.extensions=Q,_.properties=S,_.renderLists=We,_.shadowMap=Ie,_.state=te,_.info=A}Ee(),x!==fn&&(v=new XE(x,n.width,n.height,r,o));const me=new DT(_,w);this.xr=me,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const F=Q.get("WEBGL_lose_context");F&&F.loseContext()},this.forceContextRestore=function(){const F=Q.get("WEBGL_lose_context");F&&F.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(F){F!==void 0&&(le=F,this.setSize(H,K,!1))},this.getSize=function(F){return F.set(H,K)},this.setSize=function(F,ee,fe=!0){if(me.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}H=F,K=ee,n.width=Math.floor(F*le),n.height=Math.floor(ee*le),fe===!0&&(n.style.width=F+"px",n.style.height=ee+"px"),v!==null&&v.setSize(n.width,n.height),this.setViewport(0,0,F,ee)},this.getDrawingBufferSize=function(F){return F.set(H*le,K*le).floor()},this.setDrawingBufferSize=function(F,ee,fe){H=F,K=ee,le=fe,n.width=Math.floor(F*fe),n.height=Math.floor(ee*fe),this.setViewport(0,0,F,ee)},this.setEffects=function(F){if(x===fn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(F){for(let ee=0;ee<F.length;ee++)if(F[ee].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(F||[])},this.getCurrentViewport=function(F){return F.copy(T)},this.getViewport=function(F){return F.copy(Z)},this.setViewport=function(F,ee,fe,ae){F.isVector4?Z.set(F.x,F.y,F.z,F.w):Z.set(F,ee,fe,ae),te.viewport(T.copy(Z).multiplyScalar(le).round())},this.getScissor=function(F){return F.copy(ne)},this.setScissor=function(F,ee,fe,ae){F.isVector4?ne.set(F.x,F.y,F.z,F.w):ne.set(F,ee,fe,ae),te.scissor(P.copy(ne).multiplyScalar(le).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(F){te.setScissorTest(de=F)},this.setOpaqueSort=function(F){ge=F},this.setTransparentSort=function(F){he=F},this.getClearColor=function(F){return F.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(F=!0,ee=!0,fe=!0){let ae=0;if(F){let se=!1;if(X!==null){const De=X.texture.format;se=m.has(De)}if(se){const De=X.texture.type,Be=p.has(De),Le=Fe.getClearColor(),$e=Fe.getClearAlpha(),Ye=Le.r,nt=Le.g,st=Le.b;Be?(M[0]=Ye,M[1]=nt,M[2]=st,M[3]=$e,w.clearBufferuiv(w.COLOR,0,M)):(y[0]=Ye,y[1]=nt,y[2]=st,y[3]=$e,w.clearBufferiv(w.COLOR,0,y))}else ae|=w.COLOR_BUFFER_BIT}ee&&(ae|=w.DEPTH_BUFFER_BIT),fe&&(ae|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&w.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ge,!1),n.removeEventListener("webglcontextrestored",Qe,!1),n.removeEventListener("webglcontextcreationerror",Pt,!1),Fe.dispose(),We.dispose(),Se.dispose(),S.dispose(),re.dispose(),Pe.dispose(),Ae.dispose(),ze.dispose(),be.dispose(),me.dispose(),me.removeEventListener("sessionstart",bh),me.removeEventListener("sessionend",Sh),Ir.stop()};function Ge(F){F.preventDefault(),gp("WebGLRenderer: Context Lost."),D=!0}function Qe(){gp("WebGLRenderer: Context Restored."),D=!1;const F=A.autoReset,ee=Ie.enabled,fe=Ie.autoUpdate,ae=Ie.needsUpdate,se=Ie.type;Ee(),A.autoReset=F,Ie.enabled=ee,Ie.autoUpdate=fe,Ie.needsUpdate=ae,Ie.type=se}function Pt(F){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",F.statusMessage)}function yt(F){const ee=F.target;ee.removeEventListener("dispose",yt),bi(ee)}function bi(F){Si(F),S.remove(F)}function Si(F){const ee=S.get(F).programs;ee!==void 0&&(ee.forEach(function(fe){be.releaseProgram(fe)}),F.isShaderMaterial&&be.releaseShaderCache(F))}this.renderBufferDirect=function(F,ee,fe,ae,se,De){ee===null&&(ee=N);const Be=se.isMesh&&se.matrixWorld.determinant()<0,Le=X_(F,ee,fe,ae,se);te.setMaterial(ae,Be);let $e=fe.index,Ye=1;if(ae.wireframe===!0){if($e=oe.getWireframeAttribute(fe),$e===void 0)return;Ye=2}const nt=fe.drawRange,st=fe.attributes.position;let qe=nt.start*Ye,Mt=(nt.start+nt.count)*Ye;De!==null&&(qe=Math.max(qe,De.start*Ye),Mt=Math.min(Mt,(De.start+De.count)*Ye)),$e!==null?(qe=Math.max(qe,0),Mt=Math.min(Mt,$e.count)):st!=null&&(qe=Math.max(qe,0),Mt=Math.min(Mt,st.count));const Bt=Mt-qe;if(Bt<0||Bt===1/0)return;Ae.setup(se,ae,Le,fe,$e);let Ut,Et=tt;if($e!==null&&(Ut=ue.get($e),Et=j,Et.setIndex(Ut)),se.isMesh)ae.wireframe===!0?(te.setLineWidth(ae.wireframeLinewidth*G()),Et.setMode(w.LINES)):Et.setMode(w.TRIANGLES);else if(se.isLine){let tn=ae.linewidth;tn===void 0&&(tn=1),te.setLineWidth(tn*G()),se.isLineSegments?Et.setMode(w.LINES):se.isLineLoop?Et.setMode(w.LINE_LOOP):Et.setMode(w.LINE_STRIP)}else se.isPoints?Et.setMode(w.POINTS):se.isSprite&&Et.setMode(w.TRIANGLES);if(se.isBatchedMesh)if(se._multiDrawInstances!==null)kl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount,se._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))Et.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const tn=se._multiDrawStarts,Xe=se._multiDrawCounts,bn=se._multiDrawCount,pt=$e?ue.get($e).bytesPerElement:1,Fn=S.get(ae).currentProgram.getUniforms();for(let Jn=0;Jn<bn;Jn++)Fn.setValue(w,"_gl_DrawID",Jn),Et.render(tn[Jn]/pt,Xe[Jn])}else if(se.isInstancedMesh)Et.renderInstances(qe,Bt,se.count);else if(fe.isInstancedBufferGeometry){const tn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Xe=Math.min(fe.instanceCount,tn);Et.renderInstances(qe,Bt,Xe)}else Et.render(qe,Bt)};function yh(F,ee,fe){F.transparent===!0&&F.side===Fi&&F.forceSinglePass===!1?(F.side=xn,F.needsUpdate=!0,ba(F,ee,fe),F.side=Ar,F.needsUpdate=!0,ba(F,ee,fe),F.side=Fi):ba(F,ee,fe)}this.compile=function(F,ee,fe=null){fe===null&&(fe=F),L=Se.get(fe),L.init(ee),z.push(L),fe.traverseVisible(function(se){se.isLight&&se.layers.test(ee.layers)&&(L.pushLight(se),se.castShadow&&L.pushShadow(se))}),F!==fe&&F.traverseVisible(function(se){se.isLight&&se.layers.test(ee.layers)&&(L.pushLight(se),se.castShadow&&L.pushShadow(se))}),L.setupLights();const ae=new Set;return F.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const De=se.material;if(De)if(Array.isArray(De))for(let Be=0;Be<De.length;Be++){const Le=De[Be];yh(Le,fe,se),ae.add(Le)}else yh(De,fe,se),ae.add(De)}),L=z.pop(),ae},this.compileAsync=function(F,ee,fe=null){const ae=this.compile(F,ee,fe);return new Promise(se=>{function De(){if(ae.forEach(function(Be){S.get(Be).currentProgram.isReady()&&ae.delete(Be)}),ae.size===0){se(F);return}setTimeout(De,10)}Q.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Bc=null;function W_(F){Bc&&Bc(F)}function bh(){Ir.stop()}function Sh(){Ir.start()}const Ir=new o0;Ir.setAnimationLoop(W_),typeof self<"u"&&Ir.setContext(self),this.setAnimationLoop=function(F){Bc=F,me.setAnimationLoop(F),F===null?Ir.stop():Ir.start()},me.addEventListener("sessionstart",bh),me.addEventListener("sessionend",Sh),this.render=function(F,ee){if(ee!==void 0&&ee.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const fe=me.enabled===!0&&me.isPresenting===!0,ae=v!==null&&(X===null||fe)&&v.begin(_,X);if(F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(ee),ee=me.getCamera()),F.isScene===!0&&F.onBeforeRender(_,F,ee,X),L=Se.get(F,z.length),L.init(ee),z.push(L),V.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Me.setFromProjectionMatrix(V,ui,ee.reversedDepth),Re=this.localClippingEnabled,xe=we.init(this.clippingPlanes,Re),b=We.get(F,B.length),b.init(),B.push(b),me.enabled===!0&&me.isPresenting===!0){const Be=_.xr.getDepthSensingMesh();Be!==null&&kc(Be,ee,-1/0,_.sortObjects)}kc(F,ee,0,_.sortObjects),b.finish(),_.sortObjects===!0&&b.sort(ge,he),O=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,O&&Fe.addToRenderList(b,F),this.info.render.frame++,xe===!0&&we.beginShadows();const se=L.state.shadowsArray;if(Ie.render(se,F,ee),xe===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&v.hasRenderPass())===!1){const Be=b.opaque,Le=b.transmissive;if(L.setupLights(),ee.isArrayCamera){const $e=ee.cameras;if(Le.length>0)for(let Ye=0,nt=$e.length;Ye<nt;Ye++){const st=$e[Ye];Eh(Be,Le,F,st)}O&&Fe.render(F);for(let Ye=0,nt=$e.length;Ye<nt;Ye++){const st=$e[Ye];Mh(b,F,st,st.viewport)}}else Le.length>0&&Eh(Be,Le,F,ee),O&&Fe.render(F),Mh(b,F,ee)}X!==null&&C===0&&(W.updateMultisampleRenderTarget(X),W.updateRenderTargetMipmap(X)),ae&&v.end(_),F.isScene===!0&&F.onAfterRender(_,F,ee),Ae.resetDefaultState(),E=-1,U=null,z.pop(),z.length>0?(L=z[z.length-1],xe===!0&&we.setGlobalState(_.clippingPlanes,L.state.camera)):L=null,B.pop(),B.length>0?b=B[B.length-1]:b=null};function kc(F,ee,fe,ae){if(F.visible===!1)return;if(F.layers.test(ee.layers)){if(F.isGroup)fe=F.renderOrder;else if(F.isLOD)F.autoUpdate===!0&&F.update(ee);else if(F.isLight)L.pushLight(F),F.castShadow&&L.pushShadow(F);else if(F.isSprite){if(!F.frustumCulled||Me.intersectsSprite(F)){ae&&R.setFromMatrixPosition(F.matrixWorld).applyMatrix4(V);const Be=Pe.update(F),Le=F.material;Le.visible&&b.push(F,Be,Le,fe,R.z,null)}}else if((F.isMesh||F.isLine||F.isPoints)&&(!F.frustumCulled||Me.intersectsObject(F))){const Be=Pe.update(F),Le=F.material;if(ae&&(F.boundingSphere!==void 0?(F.boundingSphere===null&&F.computeBoundingSphere(),R.copy(F.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),R.copy(Be.boundingSphere.center)),R.applyMatrix4(F.matrixWorld).applyMatrix4(V)),Array.isArray(Le)){const $e=Be.groups;for(let Ye=0,nt=$e.length;Ye<nt;Ye++){const st=$e[Ye],qe=Le[st.materialIndex];qe&&qe.visible&&b.push(F,Be,qe,fe,R.z,st)}}else Le.visible&&b.push(F,Be,Le,fe,R.z,null)}}const De=F.children;for(let Be=0,Le=De.length;Be<Le;Be++)kc(De[Be],ee,fe,ae)}function Mh(F,ee,fe,ae){const{opaque:se,transmissive:De,transparent:Be}=F;L.setupLightsView(fe),xe===!0&&we.setGlobalState(_.clippingPlanes,fe),ae&&te.viewport(T.copy(ae)),se.length>0&&ya(se,ee,fe),De.length>0&&ya(De,ee,fe),Be.length>0&&ya(Be,ee,fe),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function Eh(F,ee,fe,ae){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ae.id]===void 0){const qe=Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ae.id]=new gn(1,1,{generateMipmaps:!0,type:qe?Zi:fn,minFilter:Kr,samples:Math.max(4,J.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace})}const De=L.state.transmissionRenderTarget[ae.id],Be=ae.viewport||T;De.setSize(Be.z*_.transmissionResolutionScale,Be.w*_.transmissionResolutionScale);const Le=_.getRenderTarget(),$e=_.getActiveCubeFace(),Ye=_.getActiveMipmapLevel();_.setRenderTarget(De),_.getClearColor(Y),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),O&&Fe.render(fe);const nt=_.toneMapping;_.toneMapping=di;const st=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),L.setupLightsView(ae),xe===!0&&we.setGlobalState(_.clippingPlanes,ae),ya(F,fe,ae),W.updateMultisampleRenderTarget(De),W.updateRenderTargetMipmap(De),Q.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Mt=0,Bt=ee.length;Mt<Bt;Mt++){const Ut=ee[Mt],{object:Et,geometry:tn,material:Xe,group:bn}=Ut;if(Xe.side===Fi&&Et.layers.test(ae.layers)){const pt=Xe.side;Xe.side=xn,Xe.needsUpdate=!0,wh(Et,fe,ae,tn,Xe,bn),Xe.side=pt,Xe.needsUpdate=!0,qe=!0}}qe===!0&&(W.updateMultisampleRenderTarget(De),W.updateRenderTargetMipmap(De))}_.setRenderTarget(Le,$e,Ye),_.setClearColor(Y,q),st!==void 0&&(ae.viewport=st),_.toneMapping=nt}function ya(F,ee,fe){const ae=ee.isScene===!0?ee.overrideMaterial:null;for(let se=0,De=F.length;se<De;se++){const Be=F[se],{object:Le,geometry:$e,group:Ye}=Be;let nt=Be.material;nt.allowOverride===!0&&ae!==null&&(nt=ae),Le.layers.test(fe.layers)&&wh(Le,ee,fe,$e,nt,Ye)}}function wh(F,ee,fe,ae,se,De){F.onBeforeRender(_,ee,fe,ae,se,De),F.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,F.matrixWorld),F.normalMatrix.getNormalMatrix(F.modelViewMatrix),se.onBeforeRender(_,ee,fe,ae,F,De),se.transparent===!0&&se.side===Fi&&se.forceSinglePass===!1?(se.side=xn,se.needsUpdate=!0,_.renderBufferDirect(fe,ee,ae,se,F,De),se.side=Ar,se.needsUpdate=!0,_.renderBufferDirect(fe,ee,ae,se,F,De),se.side=Fi):_.renderBufferDirect(fe,ee,ae,se,F,De),F.onAfterRender(_,ee,fe,ae,se,De)}function ba(F,ee,fe){ee.isScene!==!0&&(ee=N);const ae=S.get(F),se=L.state.lights,De=L.state.shadowsArray,Be=se.state.version,Le=be.getParameters(F,se.state,De,ee,fe),$e=be.getProgramCacheKey(Le);let Ye=ae.programs;ae.environment=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?ee.environment:null,ae.fog=ee.fog;const nt=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap;ae.envMap=re.get(F.envMap||ae.environment,nt),ae.envMapRotation=ae.environment!==null&&F.envMap===null?ee.environmentRotation:F.envMapRotation,Ye===void 0&&(F.addEventListener("dispose",yt),Ye=new Map,ae.programs=Ye);let st=Ye.get($e);if(st!==void 0){if(ae.currentProgram===st&&ae.lightsStateVersion===Be)return Ah(F,Le),st}else Le.uniforms=be.getUniforms(F),F.onBeforeCompile(Le,_),st=be.acquireProgram(Le,$e),Ye.set($e,st),ae.uniforms=Le.uniforms;const qe=ae.uniforms;return(!F.isShaderMaterial&&!F.isRawShaderMaterial||F.clipping===!0)&&(qe.clippingPlanes=we.uniform),Ah(F,Le),ae.needsLights=q_(F),ae.lightsStateVersion=Be,ae.needsLights&&(qe.ambientLightColor.value=se.state.ambient,qe.lightProbe.value=se.state.probe,qe.directionalLights.value=se.state.directional,qe.directionalLightShadows.value=se.state.directionalShadow,qe.spotLights.value=se.state.spot,qe.spotLightShadows.value=se.state.spotShadow,qe.rectAreaLights.value=se.state.rectArea,qe.ltc_1.value=se.state.rectAreaLTC1,qe.ltc_2.value=se.state.rectAreaLTC2,qe.pointLights.value=se.state.point,qe.pointLightShadows.value=se.state.pointShadow,qe.hemisphereLights.value=se.state.hemi,qe.directionalShadowMatrix.value=se.state.directionalShadowMatrix,qe.spotLightMatrix.value=se.state.spotLightMatrix,qe.spotLightMap.value=se.state.spotLightMap,qe.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.currentProgram=st,ae.uniformsList=null,st}function Th(F){if(F.uniformsList===null){const ee=F.currentProgram.getUniforms();F.uniformsList=ml.seqWithValue(ee.seq,F.uniforms)}return F.uniformsList}function Ah(F,ee){const fe=S.get(F);fe.outputColorSpace=ee.outputColorSpace,fe.batching=ee.batching,fe.batchingColor=ee.batchingColor,fe.instancing=ee.instancing,fe.instancingColor=ee.instancingColor,fe.instancingMorph=ee.instancingMorph,fe.skinning=ee.skinning,fe.morphTargets=ee.morphTargets,fe.morphNormals=ee.morphNormals,fe.morphColors=ee.morphColors,fe.morphTargetsCount=ee.morphTargetsCount,fe.numClippingPlanes=ee.numClippingPlanes,fe.numIntersection=ee.numClipIntersection,fe.vertexAlphas=ee.vertexAlphas,fe.vertexTangents=ee.vertexTangents,fe.toneMapping=ee.toneMapping}function X_(F,ee,fe,ae,se){ee.isScene!==!0&&(ee=N),W.resetTextureUnits();const De=ee.fog,Be=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?ee.environment:null,Le=X===null?_.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Cr,$e=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Ye=re.get(ae.envMap||Be,$e),nt=ae.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,st=!!fe.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),qe=!!fe.morphAttributes.position,Mt=!!fe.morphAttributes.normal,Bt=!!fe.morphAttributes.color;let Ut=di;ae.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ut=_.toneMapping);const Et=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,tn=Et!==void 0?Et.length:0,Xe=S.get(ae),bn=L.state.lights;if(xe===!0&&(Re===!0||F!==U)){const qt=F===U&&ae.id===E;we.setState(ae,F,qt)}let pt=!1;ae.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==bn.state.version||Xe.outputColorSpace!==Le||se.isBatchedMesh&&Xe.batching===!1||!se.isBatchedMesh&&Xe.batching===!0||se.isBatchedMesh&&Xe.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&Xe.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&Xe.instancing===!1||!se.isInstancedMesh&&Xe.instancing===!0||se.isSkinnedMesh&&Xe.skinning===!1||!se.isSkinnedMesh&&Xe.skinning===!0||se.isInstancedMesh&&Xe.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Xe.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Xe.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Xe.instancingMorph===!1&&se.morphTexture!==null||Xe.envMap!==Ye||ae.fog===!0&&Xe.fog!==De||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==we.numPlanes||Xe.numIntersection!==we.numIntersection)||Xe.vertexAlphas!==nt||Xe.vertexTangents!==st||Xe.morphTargets!==qe||Xe.morphNormals!==Mt||Xe.morphColors!==Bt||Xe.toneMapping!==Ut||Xe.morphTargetsCount!==tn)&&(pt=!0):(pt=!0,Xe.__version=ae.version);let Fn=Xe.currentProgram;pt===!0&&(Fn=ba(ae,ee,se));let Jn=!1,Nr=!1,ho=!1;const Ct=Fn.getUniforms(),Zt=Xe.uniforms;if(te.useProgram(Fn.program)&&(Jn=!0,Nr=!0,ho=!0),ae.id!==E&&(E=ae.id,Nr=!0),Jn||U!==F){te.buffers.depth.getReversed()&&F.reversedDepth!==!0&&(F._reversedDepth=!0,F.updateProjectionMatrix()),Ct.setValue(w,"projectionMatrix",F.projectionMatrix),Ct.setValue(w,"viewMatrix",F.matrixWorldInverse);const or=Ct.map.cameraPosition;or!==void 0&&or.setValue(w,$.setFromMatrixPosition(F.matrixWorld)),J.logarithmicDepthBuffer&&Ct.setValue(w,"logDepthBufFC",2/(Math.log(F.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ct.setValue(w,"isOrthographic",F.isOrthographicCamera===!0),U!==F&&(U=F,Nr=!0,ho=!0)}if(Xe.needsLights&&(bn.state.directionalShadowMap.length>0&&Ct.setValue(w,"directionalShadowMap",bn.state.directionalShadowMap,W),bn.state.spotShadowMap.length>0&&Ct.setValue(w,"spotShadowMap",bn.state.spotShadowMap,W),bn.state.pointShadowMap.length>0&&Ct.setValue(w,"pointShadowMap",bn.state.pointShadowMap,W)),se.isSkinnedMesh){Ct.setOptional(w,se,"bindMatrix"),Ct.setOptional(w,se,"bindMatrixInverse");const qt=se.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Ct.setValue(w,"boneTexture",qt.boneTexture,W))}se.isBatchedMesh&&(Ct.setOptional(w,se,"batchingTexture"),Ct.setValue(w,"batchingTexture",se._matricesTexture,W),Ct.setOptional(w,se,"batchingIdTexture"),Ct.setValue(w,"batchingIdTexture",se._indirectTexture,W),Ct.setOptional(w,se,"batchingColorTexture"),se._colorsTexture!==null&&Ct.setValue(w,"batchingColorTexture",se._colorsTexture,W));const rr=fe.morphAttributes;if((rr.position!==void 0||rr.normal!==void 0||rr.color!==void 0)&&Ue.update(se,fe,Fn),(Nr||Xe.receiveShadow!==se.receiveShadow)&&(Xe.receiveShadow=se.receiveShadow,Ct.setValue(w,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&ee.environment!==null&&(Zt.envMapIntensity.value=ee.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=BT()),Nr&&(Ct.setValue(w,"toneMappingExposure",_.toneMappingExposure),Xe.needsLights&&Y_(Zt,ho),De&&ae.fog===!0&&ke.refreshFogUniforms(Zt,De),ke.refreshMaterialUniforms(Zt,ae,le,K,L.state.transmissionRenderTarget[F.id]),ml.upload(w,Th(Xe),Zt,W)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(ml.upload(w,Th(Xe),Zt,W),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ct.setValue(w,"center",se.center),Ct.setValue(w,"modelViewMatrix",se.modelViewMatrix),Ct.setValue(w,"normalMatrix",se.normalMatrix),Ct.setValue(w,"modelMatrix",se.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const qt=ae.uniformsGroups;for(let or=0,po=qt.length;or<po;or++){const Ch=qt[or];ze.update(Ch,Fn),ze.bind(Ch,Fn)}}return Fn}function Y_(F,ee){F.ambientLightColor.needsUpdate=ee,F.lightProbe.needsUpdate=ee,F.directionalLights.needsUpdate=ee,F.directionalLightShadows.needsUpdate=ee,F.pointLights.needsUpdate=ee,F.pointLightShadows.needsUpdate=ee,F.spotLights.needsUpdate=ee,F.spotLightShadows.needsUpdate=ee,F.rectAreaLights.needsUpdate=ee,F.hemisphereLights.needsUpdate=ee}function q_(F){return F.isMeshLambertMaterial||F.isMeshToonMaterial||F.isMeshPhongMaterial||F.isMeshStandardMaterial||F.isShadowMaterial||F.isShaderMaterial&&F.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(F,ee,fe){const ae=S.get(F);ae.__autoAllocateDepthBuffer=F.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),S.get(F.texture).__webglTexture=ee,S.get(F.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:fe,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(F,ee){const fe=S.get(F);fe.__webglFramebuffer=ee,fe.__useDefaultFramebuffer=ee===void 0};const K_=w.createFramebuffer();this.setRenderTarget=function(F,ee=0,fe=0){X=F,I=ee,C=fe;let ae=null,se=!1,De=!1;if(F){const Le=S.get(F);if(Le.__useDefaultFramebuffer!==void 0){te.bindFramebuffer(w.FRAMEBUFFER,Le.__webglFramebuffer),T.copy(F.viewport),P.copy(F.scissor),k=F.scissorTest,te.viewport(T),te.scissor(P),te.setScissorTest(k),E=-1;return}else if(Le.__webglFramebuffer===void 0)W.setupRenderTarget(F);else if(Le.__hasExternalTextures)W.rebindTextures(F,S.get(F.texture).__webglTexture,S.get(F.depthTexture).__webglTexture);else if(F.depthBuffer){const nt=F.depthTexture;if(Le.__boundDepthTexture!==nt){if(nt!==null&&S.has(nt)&&(F.width!==nt.image.width||F.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(F)}}const $e=F.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(De=!0);const Ye=S.get(F).__webglFramebuffer;F.isWebGLCubeRenderTarget?(Array.isArray(Ye[ee])?ae=Ye[ee][fe]:ae=Ye[ee],se=!0):F.samples>0&&W.useMultisampledRTT(F)===!1?ae=S.get(F).__webglMultisampledFramebuffer:Array.isArray(Ye)?ae=Ye[fe]:ae=Ye,T.copy(F.viewport),P.copy(F.scissor),k=F.scissorTest}else T.copy(Z).multiplyScalar(le).floor(),P.copy(ne).multiplyScalar(le).floor(),k=de;if(fe!==0&&(ae=K_),te.bindFramebuffer(w.FRAMEBUFFER,ae)&&te.drawBuffers(F,ae),te.viewport(T),te.scissor(P),te.setScissorTest(k),se){const Le=S.get(F.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Le.__webglTexture,fe)}else if(De){const Le=ee;for(let $e=0;$e<F.textures.length;$e++){const Ye=S.get(F.textures[$e]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+$e,Ye.__webglTexture,fe,Le)}}else if(F!==null&&fe!==0){const Le=S.get(F.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Le.__webglTexture,fe)}E=-1},this.readRenderTargetPixels=function(F,ee,fe,ae,se,De,Be,Le=0){if(!(F&&F.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=S.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Be!==void 0&&($e=$e[Be]),$e){te.bindFramebuffer(w.FRAMEBUFFER,$e);try{const Ye=F.textures[Le],nt=Ye.format,st=Ye.type;if(F.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Le),!J.textureFormatReadable(nt)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(st)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=F.width-ae&&fe>=0&&fe<=F.height-se&&w.readPixels(ee,fe,ae,se,Ce.convert(nt),Ce.convert(st),De)}finally{const Ye=X!==null?S.get(X).__webglFramebuffer:null;te.bindFramebuffer(w.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(F,ee,fe,ae,se,De,Be,Le=0){if(!(F&&F.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=S.get(F).__webglFramebuffer;if(F.isWebGLCubeRenderTarget&&Be!==void 0&&($e=$e[Be]),$e)if(ee>=0&&ee<=F.width-ae&&fe>=0&&fe<=F.height-se){te.bindFramebuffer(w.FRAMEBUFFER,$e);const Ye=F.textures[Le],nt=Ye.format,st=Ye.type;if(F.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Le),!J.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,qe),w.bufferData(w.PIXEL_PACK_BUFFER,De.byteLength,w.STREAM_READ),w.readPixels(ee,fe,ae,se,Ce.convert(nt),Ce.convert(st),0);const Mt=X!==null?S.get(X).__webglFramebuffer:null;te.bindFramebuffer(w.FRAMEBUFFER,Mt);const Bt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await lS(w,Bt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,qe),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,De),w.deleteBuffer(qe),w.deleteSync(Bt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(F,ee=null,fe=0){const ae=Math.pow(2,-fe),se=Math.floor(F.image.width*ae),De=Math.floor(F.image.height*ae),Be=ee!==null?ee.x:0,Le=ee!==null?ee.y:0;W.setTexture2D(F,0),w.copyTexSubImage2D(w.TEXTURE_2D,fe,0,0,Be,Le,se,De),te.unbindTexture()};const Z_=w.createFramebuffer(),j_=w.createFramebuffer();this.copyTextureToTexture=function(F,ee,fe=null,ae=null,se=0,De=0){let Be,Le,$e,Ye,nt,st,qe,Mt,Bt;const Ut=F.isCompressedTexture?F.mipmaps[De]:F.image;if(fe!==null)Be=fe.max.x-fe.min.x,Le=fe.max.y-fe.min.y,$e=fe.isBox3?fe.max.z-fe.min.z:1,Ye=fe.min.x,nt=fe.min.y,st=fe.isBox3?fe.min.z:0;else{const Zt=Math.pow(2,-se);Be=Math.floor(Ut.width*Zt),Le=Math.floor(Ut.height*Zt),F.isDataArrayTexture?$e=Ut.depth:F.isData3DTexture?$e=Math.floor(Ut.depth*Zt):$e=1,Ye=0,nt=0,st=0}ae!==null?(qe=ae.x,Mt=ae.y,Bt=ae.z):(qe=0,Mt=0,Bt=0);const Et=Ce.convert(ee.format),tn=Ce.convert(ee.type);let Xe;ee.isData3DTexture?(W.setTexture3D(ee,0),Xe=w.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(W.setTexture2DArray(ee,0),Xe=w.TEXTURE_2D_ARRAY):(W.setTexture2D(ee,0),Xe=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,ee.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,ee.unpackAlignment);const bn=w.getParameter(w.UNPACK_ROW_LENGTH),pt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Fn=w.getParameter(w.UNPACK_SKIP_PIXELS),Jn=w.getParameter(w.UNPACK_SKIP_ROWS),Nr=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ut.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ut.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ye),w.pixelStorei(w.UNPACK_SKIP_ROWS,nt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,st);const ho=F.isDataArrayTexture||F.isData3DTexture,Ct=ee.isDataArrayTexture||ee.isData3DTexture;if(F.isDepthTexture){const Zt=S.get(F),rr=S.get(ee),qt=S.get(Zt.__renderTarget),or=S.get(rr.__renderTarget);te.bindFramebuffer(w.READ_FRAMEBUFFER,qt.__webglFramebuffer),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let po=0;po<$e;po++)ho&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,S.get(F).__webglTexture,se,st+po),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,S.get(ee).__webglTexture,De,Bt+po)),w.blitFramebuffer(Ye,nt,Be,Le,qe,Mt,Be,Le,w.DEPTH_BUFFER_BIT,w.NEAREST);te.bindFramebuffer(w.READ_FRAMEBUFFER,null),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(se!==0||F.isRenderTargetTexture||S.has(F)){const Zt=S.get(F),rr=S.get(ee);te.bindFramebuffer(w.READ_FRAMEBUFFER,Z_),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,j_);for(let qt=0;qt<$e;qt++)ho?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Zt.__webglTexture,se,st+qt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Zt.__webglTexture,se),Ct?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,rr.__webglTexture,De,Bt+qt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,rr.__webglTexture,De),se!==0?w.blitFramebuffer(Ye,nt,Be,Le,qe,Mt,Be,Le,w.COLOR_BUFFER_BIT,w.NEAREST):Ct?w.copyTexSubImage3D(Xe,De,qe,Mt,Bt+qt,Ye,nt,Be,Le):w.copyTexSubImage2D(Xe,De,qe,Mt,Ye,nt,Be,Le);te.bindFramebuffer(w.READ_FRAMEBUFFER,null),te.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Ct?F.isDataTexture||F.isData3DTexture?w.texSubImage3D(Xe,De,qe,Mt,Bt,Be,Le,$e,Et,tn,Ut.data):ee.isCompressedArrayTexture?w.compressedTexSubImage3D(Xe,De,qe,Mt,Bt,Be,Le,$e,Et,Ut.data):w.texSubImage3D(Xe,De,qe,Mt,Bt,Be,Le,$e,Et,tn,Ut):F.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,De,qe,Mt,Be,Le,Et,tn,Ut.data):F.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,De,qe,Mt,Ut.width,Ut.height,Et,Ut.data):w.texSubImage2D(w.TEXTURE_2D,De,qe,Mt,Be,Le,Et,tn,Ut);w.pixelStorei(w.UNPACK_ROW_LENGTH,bn),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,pt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Fn),w.pixelStorei(w.UNPACK_SKIP_ROWS,Jn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Nr),De===0&&ee.generateMipmaps&&w.generateMipmap(Xe),te.unbindTexture()},this.initRenderTarget=function(F){S.get(F).__webglFramebuffer===void 0&&W.setupRenderTarget(F)},this.initTexture=function(F){F.isCubeTexture?W.setTextureCube(F,0):F.isData3DTexture?W.setTexture3D(F,0):F.isDataArrayTexture||F.isCompressedArrayTexture?W.setTexture2DArray(F,0):W.setTexture2D(F,0),te.unbindTexture()},this.resetState=function(){I=0,C=0,X=null,te.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),n.unpackColorSpace=ht._getUnpackColorSpace()}}const zT=""+new URL("../mangleditor-icon.png",import.meta.url).href,VT={class:"top-bar"},HT=["value"],GT=["title"],$T={class:"top-bar__status"},WT={__name:"TopBar",props:{isRendering:{type:Boolean,default:!0},previewMode:{type:String,default:"panel"},projectTitle:{type:String,default:"Untitled Project"}},emits:["save","load","download","import","reset","toggleRender","togglePreview","updateTitle"],setup(t,{emit:e}){const n=e,i=Ke(null);function r(){i.value?.click()}function o(s){const a=s.target.files?.[0];if(!a)return;const l=new FileReader;l.onload=()=>{n("import",l.result)},l.readAsText(a),s.target.value=""}return(s,a)=>(ye(),Te("div",VT,[a[8]||(a[8]=ve("div",{class:"top-bar__logo-container"},[ve("img",{src:zT,class:"top-bar__logo-icon",alt:"mangleditor"}),ve("span",{class:"top-bar__logo-text"},"mangleditor"),ve("span",{class:"top-bar__coded-by"},"coded with love and haste")],-1)),ve("input",{class:"top-bar__title-input",type:"text",value:t.projectTitle,onInput:a[0]||(a[0]=l=>s.$emit("updateTitle",l.target.value)),onBlur:a[1]||(a[1]=l=>s.$emit("updateTitle",l.target.value)),placeholder:"Untitled Project",title:"Project title — used for save/export filenames"},null,40,HT),a[9]||(a[9]=ve("div",{class:"top-bar__divider"},null,-1)),ve("button",{class:"top-bar__btn",onClick:a[2]||(a[2]=l=>s.$emit("save")),title:"Save to browser"}," 💾 Save "),ve("button",{class:"top-bar__btn",onClick:a[3]||(a[3]=l=>s.$emit("load")),title:"Load from browser"}," 📂 Load "),ve("button",{class:"top-bar__btn",onClick:a[4]||(a[4]=l=>s.$emit("download")),title:"Download graph as JSON"}," ⬇ Download "),ve("button",{class:"top-bar__btn",onClick:r,title:"Import graph JSON"}," ⬆ Import "),ve("input",{ref_key:"importInput",ref:i,type:"file",accept:".json",class:"file-input-hidden",onChange:o},null,544),a[10]||(a[10]=ve("div",{class:"top-bar__divider"},null,-1)),ve("button",{class:"top-bar__btn top-bar__btn--danger",onClick:a[5]||(a[5]=l=>s.$emit("reset")),title:"Clear all nodes"}," 🗑 Reset "),a[11]||(a[11]=ve("div",{class:"top-bar__divider"},null,-1)),ve("button",{class:zt(["top-bar__btn",t.isRendering?"top-bar__btn--running":"top-bar__btn--stop"]),onClick:a[6]||(a[6]=l=>s.$emit("toggleRender")),title:t.isRendering?"Stop rendering":"Resume rendering"},Ze(t.isRendering?"⏸ Stop":"▶ Resume"),11,GT),ve("button",{class:"top-bar__btn",onClick:a[7]||(a[7]=l=>s.$emit("togglePreview")),title:"Toggle preview mode"},Ze(t.previewMode==="panel"?"🖥 Panel":"🌌 Background"),1),ve("div",$T,[ve("div",{class:zt(["top-bar__status-dot",{"top-bar__status-dot--stopped":!t.isRendering}])},null,2),ve("span",null,Ze(t.isRendering?"RENDERING":"STOPPED"),1)])]))}},_e={IMAGE:"image",FLOAT:"float",INT:"int",VEC2:"vec2",BOOL:"bool",TRIGGER:"trigger"},XT={[_e.IMAGE]:"#00d4ff",[_e.FLOAT]:"#ff9a2e",[_e.INT]:"#ffe14d",[_e.VEC2]:"#ff6eb4",[_e.BOOL]:"#ff4444",[_e.TRIGGER]:"#ffffff"},YT={[_e.IMAGE]:[_e.IMAGE],[_e.FLOAT]:[_e.FLOAT],[_e.INT]:[_e.INT,_e.FLOAT],[_e.VEC2]:[_e.VEC2],[_e.BOOL]:[_e.BOOL],[_e.TRIGGER]:[_e.TRIGGER]};function qT(t,e){const n=YT[t];return n?n.includes(e):!1}function Iu(t){return XT[t]||"#888888"}const Qd={imageInput:{type:"imageInput",label:"Image Input",category:"image",inputs:[],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{},shaderKey:null},uiImageSlot:{type:"uiImageSlot",label:"UI Image Slot",category:"image",inputs:[],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{},shaderKey:null},webcamInput:{type:"webcamInput",label:"Webcam",category:"image",inputs:[],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{},shaderKey:null},imageOutput:{type:"imageOutput",label:"Image Output",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[],params:{format:{type:"select",default:"png",options:["png","tiff","bmp"],label:"Format"},filename:{type:"string",default:"output",label:"Filename"}},shaderKey:null},pixelSort:{type:"pixelSort",label:"Pixel Sort",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{direction:{type:"select",default:"horizontal",options:["horizontal","vertical"],label:"Direction"},sortBy:{type:"select",default:"brightness",options:["brightness","hue","saturation"],label:"Sort By"},threshold:{type:"float",default:.5,min:0,max:1,step:.01,label:"Threshold"},upperThreshold:{type:"float",default:.8,min:0,max:1,step:.01,label:"Upper Threshold"},reverse:{type:"bool",default:!1,label:"Reverse"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"pixelSort"},reededGlass:{type:"reededGlass",label:"Reeded Glass",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE},{id:"texture",label:"Texture",type:_e.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{scale:{type:"float",default:20,min:1,max:200,step:.5,label:"Scale"},intensity:{type:"float",default:.05,min:0,max:.5,step:.001,label:"Intensity"},angle:{type:"float",default:0,min:0,max:360,step:1,label:"Angle"},blur:{type:"float",default:.5,min:0,max:5,step:.1,label:"Blur"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"reededGlass"},chromaticAberration:{type:"chromaticAberration",label:"Chromatic Aberration",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{intensity:{type:"float",default:5,min:0,max:50,step:.5,label:"Intensity"},direction:{type:"select",default:"radial",options:["radial","horizontal","vertical"],label:"Direction"},centerX:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center X"},centerY:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center Y"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"chromaticAberration"},displacement:{type:"displacement",label:"Heightmap Displacement",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE},{id:"heightmap",label:"Heightmap",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{strength:{type:"float",default:.05,min:0,max:.5,step:.001,label:"Strength"},channel:{type:"select",default:"luminance",options:["luminance","r","g","b"],label:"Channel"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"displacement"},levels:{type:"levels",label:"Levels",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE},{id:"inputBlack",label:"In Black",type:_e.INT,optional:!0},{id:"inputWhite",label:"In White",type:_e.INT,optional:!0},{id:"gamma",label:"Gamma",type:_e.FLOAT,optional:!0}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{inputBlack:{type:"int",default:0,min:0,max:255,step:1,label:"Input Black"},inputWhite:{type:"int",default:255,min:0,max:255,step:1,label:"Input White"},gamma:{type:"float",default:1,min:.1,max:10,step:.01,label:"Gamma"},outputBlack:{type:"int",default:0,min:0,max:255,step:1,label:"Output Black"},outputWhite:{type:"int",default:255,min:0,max:255,step:1,label:"Output White"},channel:{type:"select",default:"master",options:["master","r","g","b"],label:"Channel"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"levels"},surfaceBlur:{type:"surfaceBlur",label:"Surface Blur",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{radius:{type:"int",default:5,min:1,max:20,step:1,label:"Radius"},threshold:{type:"float",default:.1,min:0,max:1,step:.01,label:"Threshold"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"surfaceBlur"},feedbackLoop:{type:"feedbackLoop",label:"Feedback Loop",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{decay:{type:"float",default:.9,min:0,max:1,step:.01,label:"Decay"},iterations:{type:"int",default:1,min:1,max:100,step:1,label:"Iterations"},blendMode:{type:"select",default:"normal",options:["normal","add","multiply"],label:"Blend Mode"}},shaderKey:"feedback"},blend:{type:"blend",label:"Blend",category:"image",inputs:[{id:"base",label:"Base",type:_e.IMAGE},{id:"overlay",label:"Overlay",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{mode:{type:"select",default:"normal",options:["normal","multiply","screen","overlay","softLight","hardLight","difference","exclusion","add","subtract"],label:"Mode"},opacity:{type:"float",default:1,min:0,max:1,step:.01,label:"Opacity"}},shaderKey:"blend"},diffusion:{type:"diffusion",label:"Diffusion Reaction",category:"image",inputs:[{id:"in",label:"Init State",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{dA:{type:"float",default:1,min:0,max:2,step:.01,label:"Diff A"},dB:{type:"float",default:.5,min:0,max:2,step:.01,label:"Diff B"},feed:{type:"float",default:.055,min:0,max:.1,step:.001,label:"Feed Rate"},kill:{type:"float",default:.062,min:0,max:.1,step:.001,label:"Kill Rate"},dt:{type:"float",default:1,min:0,max:2,step:.01,label:"Delta Time"}},shaderKey:"diffusion"},xerox:{type:"xerox",label:"Xerox Photocopy",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{threshold:{type:"float",default:.5,min:0,max:1,step:.01,label:"Threshold"},noiseAmount:{type:"float",default:.1,min:0,max:1,step:.01,label:"Noise"},contrast:{type:"float",default:2,min:0,max:5,step:.1,label:"Contrast"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"xerox"},crt:{type:"crt",label:"CRT Display",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{curvature:{type:"float",default:.5,min:0,max:1,step:.01,label:"Curvature"},scanLines:{type:"float",default:.5,min:0,max:1,step:.01,label:"Scanlines"},rgbShift:{type:"float",default:.2,min:0,max:1,step:.01,label:"RGB Shift"},brightness:{type:"float",default:1.2,min:0,max:3,step:.1,label:"Brightness"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"crt"},motionBlur:{type:"motionBlur",label:"Motion Blur",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{angle:{type:"float",default:0,min:0,max:3.1415,step:.01,label:"Angle (rad)"},strength:{type:"float",default:5,min:0,max:50,step:.1,label:"Strength"},samples:{type:"int",default:15,min:1,max:50,step:1,label:"Samples"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"motionBlur"},dithering:{type:"dithering",label:"Dithering (4x4)",category:"image",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{colors:{type:"float",default:2,min:1,max:32,step:1,label:"Colors"},spread:{type:"float",default:.5,min:0,max:2,step:.01,label:"Spread"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"dithering"},lfo:{type:"lfo",label:"LFO",category:"animation",compact:!0,inlineParams:["waveform","frequency","amplitude"],inputs:[],outputs:[{id:"out",label:"Value",type:_e.FLOAT}],params:{waveform:{type:"select",default:"sine",options:["sine","saw","square","triangle"],label:"Waveform"},frequency:{type:"float",default:1,min:.01,max:60,step:.01,label:"Frequency (Hz)"},amplitude:{type:"float",default:1,min:0,max:100,step:.01,label:"Amplitude"},offset:{type:"float",default:0,min:-100,max:100,step:.01,label:"Offset"},phase:{type:"float",default:0,min:0,max:360,step:1,label:"Phase (°)"}},shaderKey:null,isAnimated:!0},timer:{type:"timer",label:"Timer",category:"animation",inputs:[{id:"reset",label:"Reset",type:_e.TRIGGER,optional:!0}],outputs:[{id:"out",label:"Time",type:_e.FLOAT}],params:{speed:{type:"float",default:1,min:.01,max:10,step:.01,label:"Speed"},loop:{type:"bool",default:!1,label:"Loop"},loopDuration:{type:"float",default:5,min:.1,max:300,step:.1,label:"Loop Duration (s)"}},shaderKey:null,isAnimated:!0},random:{type:"random",label:"Random",category:"animation",inputs:[{id:"reseed",label:"Reseed",type:_e.TRIGGER,optional:!0}],outputs:[{id:"out",label:"Value",type:_e.FLOAT}],params:{min:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Max"},mode:{type:"select",default:"continuous",options:["continuous","onTrigger"],label:"Mode"},seed:{type:"int",default:42,min:0,max:99999,step:1,label:"Seed"}},shaderKey:null,isAnimated:!0},damper:{type:"damper",label:"Damper",category:"animation",inputs:[{id:"target",label:"Target",type:_e.FLOAT}],outputs:[{id:"out",label:"Value",type:_e.FLOAT}],params:{smoothing:{type:"float",default:.9,min:0,max:.999,step:.001,label:"Smoothing"}},shaderKey:null,isAnimated:!0},fft:{type:"fft",label:"Audio FFT",category:"animation",compact:!0,inputs:[],outputs:[{id:"bass",label:"Bass",type:_e.FLOAT},{id:"lowMid",label:"Low Mid",type:_e.FLOAT},{id:"mid",label:"Mid",type:_e.FLOAT},{id:"high",label:"High",type:_e.FLOAT}],params:{smoothing:{type:"float",default:.8,min:0,max:.99,step:.01,label:"Smoothing"},gain:{type:"float",default:1,min:0,max:10,step:.1,label:"Gain"}},shaderKey:null,isAnimated:!0},button:{type:"button",label:"Button",category:"trigger",inputs:[],outputs:[{id:"out",label:"Trigger",type:_e.TRIGGER}],params:{label:{type:"string",default:"Press",label:"Label"}},shaderKey:null},slider:{type:"slider",label:"Slider",category:"trigger",inputs:[],outputs:[{id:"out",label:"Value",type:_e.FLOAT}],params:{value:{type:"float",default:.5,min:0,max:1,step:.01,label:"Value"},min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"},step:{type:"float",default:.01,min:.001,max:100,step:.001,label:"Step"},outputType:{type:"select",default:"float",options:["float","int"],label:"Output Type"}},shaderKey:null},knob:{type:"knob",label:"Knob",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"Value",type:_e.FLOAT}],params:{value:{type:"float",default:.5,min:0,max:1,step:.01,label:"Value"},min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"},step:{type:"float",default:.01,min:.001,max:100,step:.001,label:"Step"}},shaderKey:null},bang:{type:"bang",label:"Bang",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"Trigger",type:_e.TRIGGER}],params:{label:{type:"string",default:"Bang!",label:"Label"}},shaderKey:null},toggle:{type:"toggle",label:"Toggle (Bool)",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"State",type:_e.BOOL}],params:{state:{type:"bool",default:!1,label:"State"}},shaderKey:null},edgeTrigger:{type:"edgeTrigger",label:"Edge -> Bang",category:"trigger",compact:!0,inputs:[{id:"in",label:"Bool",type:_e.BOOL}],outputs:[{id:"out",label:"Trigger",type:_e.TRIGGER}],params:{mode:{type:"select",default:"rising",options:["rising","falling","both"],label:"Edge"}},shaderKey:null},compare:{type:"compare",label:"Compare",category:"math",inputs:[{id:"a",label:"A",type:_e.FLOAT},{id:"b",label:"B",type:_e.FLOAT}],outputs:[{id:"out",label:"Bool",type:_e.BOOL}],params:{op:{type:"select",default:">",options:[">","<",">=","<=","==","!="],label:"Operator"}},shaderKey:null},valueCondition:{type:"valueCondition",label:"If / Else",category:"math",inputs:[{id:"cond",label:"Condition",type:_e.BOOL},{id:"trueVal",label:"True",type:_e.FLOAT,optional:!0},{id:"falseVal",label:"False",type:_e.FLOAT,optional:!0}],outputs:[{id:"out",label:"Result",type:_e.FLOAT}],params:{defaultTrue:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Def True"},defaultFalse:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Def False"}},shaderKey:null},mathAdd:{type:"mathAdd",label:"Add",category:"math",inputs:[{id:"a",label:"A",type:_e.FLOAT},{id:"b",label:"B",type:_e.FLOAT}],outputs:[{id:"out",label:"Result",type:_e.FLOAT}],params:{},shaderKey:null},mathMultiply:{type:"mathMultiply",label:"Multiply",category:"math",inputs:[{id:"a",label:"A",type:_e.FLOAT},{id:"b",label:"B",type:_e.FLOAT}],outputs:[{id:"out",label:"Result",type:_e.FLOAT}],params:{},shaderKey:null},mathDivide:{type:"mathDivide",label:"Divide",category:"math",inputs:[{id:"a",label:"A",type:_e.FLOAT},{id:"b",label:"B",type:_e.FLOAT}],outputs:[{id:"out",label:"Result",type:_e.FLOAT}],params:{},shaderKey:null},mathSqrt:{type:"mathSqrt",label:"Sqrt",category:"math",inputs:[{id:"a",label:"Value",type:_e.FLOAT}],outputs:[{id:"out",label:"Result",type:_e.FLOAT}],params:{},shaderKey:null},mathMap:{type:"mathMap",label:"Map",category:"math",inputs:[{id:"value",label:"Value",type:_e.FLOAT}],outputs:[{id:"out",label:"Result",type:_e.FLOAT}],params:{inMin:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"In Min"},inMax:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"In Max"},outMin:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Out Min"},outMax:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Out Max"}},shaderKey:null},mathClamp:{type:"mathClamp",label:"Clamp",category:"math",inputs:[{id:"value",label:"Value",type:_e.FLOAT}],outputs:[{id:"out",label:"Result",type:_e.FLOAT}],params:{min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"}},shaderKey:null},mathWrap:{type:"mathWrap",label:"Wrap",category:"math",inputs:[{id:"value",label:"Value",type:_e.FLOAT}],outputs:[{id:"out",label:"Result",type:_e.FLOAT}],params:{min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"}},shaderKey:null},floatToInt:{type:"floatToInt",label:"Float → Int",category:"math",compact:!0,inputs:[{id:"in",label:"Float",type:_e.FLOAT}],outputs:[{id:"out",label:"Int",type:_e.INT}],params:{mode:{type:"select",default:"round",options:["round","floor","ceil","truncate"],label:"Mode"},clampMin:{type:"int",default:-2147483648,min:-2147483648,max:2147483647,step:1,label:"Clamp Min"},clampMax:{type:"int",default:2147483647,min:-2147483648,max:2147483647,step:1,label:"Clamp Max"}},shaderKey:null},intToFloat:{type:"intToFloat",label:"Int → Float",category:"math",inputs:[{id:"in",label:"Int",type:_e.INT}],outputs:[{id:"out",label:"Float",type:_e.FLOAT}],params:{},shaderKey:null},uvGenerator:{type:"uvGenerator",label:"UV Generator",category:"uv",inputs:[],outputs:[{id:"out",label:"UV",type:_e.IMAGE}],params:{},shaderKey:"uvGenerator"},uvTransform:{type:"uvTransform",label:"UV Transform",category:"uv",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{scaleX:{type:"float",default:1,min:.01,max:10,step:.01,label:"Scale X"},scaleY:{type:"float",default:1,min:.01,max:10,step:.01,label:"Scale Y"},rotation:{type:"float",default:0,min:0,max:360,step:1,label:"Rotation (°)"},translateX:{type:"float",default:0,min:-2,max:2,step:.01,label:"Translate X"},translateY:{type:"float",default:0,min:-2,max:2,step:.01,label:"Translate Y"}},shaderKey:"uvTransform"},uvRepeat:{type:"uvRepeat",label:"UV Repeat",category:"uv",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{repeatX:{type:"float",default:2,min:.1,max:50,step:.1,label:"Repeat X"},repeatY:{type:"float",default:2,min:.1,max:50,step:.1,label:"Repeat Y"},mirror:{type:"bool",default:!1,label:"Mirror"},offsetX:{type:"float",default:0,min:0,max:1,step:.01,label:"Offset X"},offsetY:{type:"float",default:0,min:0,max:1,step:.01,label:"Offset Y"}},shaderKey:"uvRepeat"},uvGlitch:{type:"uvGlitch",label:"UV Glitch",category:"uv",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{blockSize:{type:"int",default:8,min:1,max:128,step:1,label:"Block Size"},intensity:{type:"float",default:.1,min:0,max:1,step:.01,label:"Intensity"},seed:{type:"float",default:0,min:0,max:1e3,step:.1,label:"Seed"},direction:{type:"select",default:"horizontal",options:["horizontal","vertical","both"],label:"Direction"}},shaderKey:"uvGlitch"},uvPolar:{type:"uvPolar",label:"UV Polar",category:"uv",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{mode:{type:"select",default:"toPolar",options:["toPolar","fromPolar"],label:"Mode"},centerX:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center X"},centerY:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center Y"}},shaderKey:"uvPolar"},numberMonitor:{type:"numberMonitor",label:"Number Monitor",category:"utility",inputs:[{id:"in",label:"Value",type:_e.FLOAT}],outputs:[{id:"out",label:"Value",type:_e.FLOAT}],params:{decimals:{type:"int",default:3,min:0,max:10,step:1,label:"Decimals"},showGraph:{type:"bool",default:!0,label:"Show Graph"}},shaderKey:null,isPassthrough:!0},preview:{type:"preview",label:"Preview",category:"utility",inputs:[{id:"in",label:"Image",type:_e.IMAGE}],outputs:[{id:"out",label:"Image",type:_e.IMAGE}],params:{},shaderKey:"passthrough",isPassthrough:!0}},zl={image:{label:"Image",icon:"🖼️",color:"#00d4ff"},animation:{label:"Animation",icon:"⏱️",color:"#9b59b6"},trigger:{label:"Controls",icon:"🎛️",color:"#2ecc71"},math:{label:"Math",icon:"🔢",color:"#ff9a2e"},uv:{label:"UV / Texture",icon:"🌀",color:"#ff6eb4"},utility:{label:"Utility",icon:"🔍",color:"#a0a0b0"}};function si(t){return Qd[t]||null}function KT(){return{...Qd}}function ZT(t){return Object.values(Qd).filter(e=>e.category===t)}const jT={class:"node-palette"},JT=["onClick"],QT={class:"node-palette__category-icon"},eA={class:"node-palette__category-label"},tA={style:{"font-size":"10px",color:"var(--text-muted)"}},nA=["onDragstart","onClick"],iA={__name:"NodePalette",emits:["addNode"],setup(t,{emit:e}){const n=zl,i=wr(Object.fromEntries(Object.keys(zl).map(a=>[a,!0])));function r(a){i[a]=!i[a]}function o(a){return ZT(a)}function s(a,l){a.dataTransfer.setData("application/node-type",l),a.dataTransfer.effectAllowed="move"}return(a,l)=>(ye(),Te("div",jT,[l[0]||(l[0]=ve("div",{class:"node-palette__header"},"Node Library",-1)),(ye(!0),Te(dt,null,wn(pe(n),(c,u)=>(ye(),Te("div",{key:u,class:"node-palette__category"},[ve("div",{class:"node-palette__category-header",onClick:f=>r(u)},[ve("span",QT,Ze(c.icon),1),ve("span",eA,Ze(c.label),1),ve("span",tA,Ze(i[u]?"▾":"▸"),1)],8,JT),i[u]?(ye(!0),Te(dt,{key:0},wn(o(u),f=>(ye(),Te("div",{key:f.type,class:"node-palette__item",draggable:"true",onDragstart:d=>s(d,f.type),onClick:d=>a.$emit("addNode",f.type)},[ve("div",{class:"node-palette__item-dot",style:Nt({background:c.color})},null,4),kd(" "+Ze(f.label),1)],40,nA))),128)):ct("",!0)]))),128))]))}};function Ks(t){return cc()?(Ps(t),!0):!1}function Ui(t){return typeof t=="function"?t():pe(t)}const rA=typeof window<"u"&&typeof document<"u",oA=t=>typeof t<"u",sA=Object.prototype.toString,aA=t=>sA.call(t)==="[object Object]",lA=()=>{};function cA(t,e){function n(...i){return new Promise((r,o)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(o)})}return n}const f0=t=>t();function uA(t=f0){const e=Ke(!0);function n(){e.value=!1}function i(){e.value=!0}return{isActive:Al(e),pause:n,resume:i,eventFilter:(...o)=>{e.value&&t(...o)}}}function im(t,e=!1,n="Timeout"){return new Promise((i,r)=>{setTimeout(e?()=>r(n):i,t)})}function fA(t,e,n={}){const{eventFilter:i=f0,...r}=n;return ft(t,cA(i,e),r)}function Io(t,e,n={}){const{eventFilter:i,...r}=n,{eventFilter:o,pause:s,resume:a,isActive:l}=uA(i);return{stop:fA(t,e,{...r,eventFilter:o}),pause:s,resume:a,isActive:l}}function dA(t,e={}){if(!Dt(t))return Og(t);const n=Array.isArray(t.value)?Array.from({length:t.value.length}):{};for(const i in t.value)n[i]=Lx(()=>({get(){return t.value[i]},set(r){var o;if((o=Ui(e.replaceRef))!=null?o:!0)if(Array.isArray(t.value)){const a=[...t.value];a[i]=r,t.value=a}else{const a={...t.value,[i]:r};Object.setPrototypeOf(a,Object.getPrototypeOf(t.value)),t.value=a}else t.value[i]=r}}));return n}function Zf(t,e=!1){function n(f,{flush:d="sync",deep:h=!1,timeout:g,throwOnTimeout:x}={}){let m=null;const M=[new Promise(y=>{m=ft(t,b=>{f(b)!==e&&(m?.(),y(b))},{flush:d,deep:h,immediate:!0})})];return g!=null&&M.push(im(g,x).then(()=>Ui(t)).finally(()=>m?.())),Promise.race(M)}function i(f,d){if(!Dt(f))return n(b=>b===f,d);const{flush:h="sync",deep:g=!1,timeout:x,throwOnTimeout:m}=d??{};let p=null;const y=[new Promise(b=>{p=ft([t,f],([L,B])=>{e!==(L===B)&&(p?.(),b(L))},{flush:h,deep:g,immediate:!0})})];return x!=null&&y.push(im(x,m).then(()=>Ui(t)).finally(()=>(p?.(),Ui(t)))),Promise.race(y)}function r(f){return n(d=>!!d,f)}function o(f){return i(null,f)}function s(f){return i(void 0,f)}function a(f){return n(Number.isNaN,f)}function l(f,d){return n(h=>{const g=Array.from(h);return g.includes(f)||g.includes(Ui(f))},d)}function c(f){return u(1,f)}function u(f=1,d){let h=-1;return n(()=>(h+=1,h>=f),d)}return Array.isArray(Ui(t))?{toMatch:n,toContains:l,changed:c,changedTimes:u,get not(){return Zf(t,!e)}}:{toMatch:n,toBe:i,toBeTruthy:r,toBeNull:o,toBeNaN:a,toBeUndefined:s,changed:c,changedTimes:u,get not(){return Zf(t,!e)}}}function jf(t){return Zf(t)}function hA(t){var e;const n=Ui(t);return(e=n?.$el)!=null?e:n}const d0=rA?window:void 0;function h0(...t){let e,n,i,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,i,r]=t,e=d0):[e,n,i,r]=t,!e)return lA;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const o=[],s=()=>{o.forEach(u=>u()),o.length=0},a=(u,f,d,h)=>(u.addEventListener(f,d,h),()=>u.removeEventListener(f,d,h)),l=ft(()=>[hA(e),Ui(r)],([u,f])=>{if(s(),!u)return;const d=aA(f)?{...f}:f;o.push(...n.flatMap(h=>i.map(g=>a(u,h,g,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),s()};return Ks(c),c}function pA(t){return typeof t=="function"?t:typeof t=="string"?e=>e.key===t:Array.isArray(t)?e=>t.includes(e.key):()=>!0}function rm(...t){let e,n,i={};t.length===3?(e=t[0],n=t[1],i=t[2]):t.length===2?typeof t[1]=="object"?(e=!0,n=t[0],i=t[1]):(e=t[0],n=t[1]):(e=!0,n=t[0]);const{target:r=d0,eventName:o="keydown",passive:s=!1,dedupe:a=!1}=i,l=pA(e);return h0(r,o,u=>{u.repeat&&Ui(a)||l(u)&&n(u)},s)}function mA(t){return JSON.parse(JSON.stringify(t))}function Nu(t,e,n,i={}){var r,o,s;const{clone:a=!1,passive:l=!1,eventName:c,deep:u=!1,defaultValue:f,shouldEmit:d}=i,h=nr(),g=n||h?.emit||((r=h?.$emit)==null?void 0:r.bind(h))||((s=(o=h?.proxy)==null?void 0:o.$emit)==null?void 0:s.bind(h?.proxy));let x=c;e||(e="modelValue"),x=x||`update:${e.toString()}`;const m=y=>a?typeof a=="function"?a(y):mA(y):y,p=()=>oA(t[e])?m(t[e]):f,M=y=>{d?d(y)&&g(x,y):g(x,y)};if(l){const y=p(),b=Ke(y);let L=!1;return ft(()=>t[e],B=>{L||(L=!0,b.value=m(B),Nn(()=>L=!1))}),ft(b,B=>{!L&&(B!==t[e]||u)&&M(B)},{deep:u}),b}else return He({get(){return p()},set(y){M(y)}})}var gA={value:()=>{}};function Mc(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new gl(n)}function gl(t){this._=t}function vA(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}gl.prototype=Mc.prototype={constructor:gl,on:function(t,e){var n=this._,i=vA(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=_A(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=om(n[r],t.name,e);else if(e==null)for(r in n)n[r]=om(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new gl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function _A(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function om(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=gA,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var Jf="http://www.w3.org/1999/xhtml";const sm={svg:"http://www.w3.org/2000/svg",xhtml:Jf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ec(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),sm.hasOwnProperty(e)?{space:sm[e],local:t}:t}function xA(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===Jf&&e.documentElement.namespaceURI===Jf?e.createElement(t):e.createElementNS(n,t)}}function yA(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function p0(t){var e=Ec(t);return(e.local?yA:xA)(e)}function bA(){}function eh(t){return t==null?bA:function(){return this.querySelector(t)}}function SA(t){typeof t!="function"&&(t=eh(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,c,u=0;u<s;++u)(l=o[u])&&(c=t.call(l,l.__data__,u,o))&&("__data__"in l&&(c.__data__=l.__data__),a[u]=c);return new Cn(i,this._parents)}function MA(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function EA(){return[]}function m0(t){return t==null?EA:function(){return this.querySelectorAll(t)}}function wA(t){return function(){return MA(t.apply(this,arguments))}}function TA(t){typeof t=="function"?t=wA(t):t=m0(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,c=0;c<a;++c)(l=s[c])&&(i.push(t.call(l,l.__data__,c,s)),r.push(l));return new Cn(i,r)}function g0(t){return function(){return this.matches(t)}}function v0(t){return function(e){return e.matches(t)}}var AA=Array.prototype.find;function CA(t){return function(){return AA.call(this.children,t)}}function RA(){return this.firstElementChild}function PA(t){return this.select(t==null?RA:CA(typeof t=="function"?t:v0(t)))}var IA=Array.prototype.filter;function NA(){return Array.from(this.children)}function DA(t){return function(){return IA.call(this.children,t)}}function LA(t){return this.selectAll(t==null?NA:DA(typeof t=="function"?t:v0(t)))}function FA(t){typeof t!="function"&&(t=g0(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,c=0;c<s;++c)(l=o[c])&&t.call(l,l.__data__,c,o)&&a.push(l);return new Cn(i,this._parents)}function _0(t){return new Array(t.length)}function UA(){return new Cn(this._enter||this._groups.map(_0),this._parents)}function Vl(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}Vl.prototype={constructor:Vl,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function OA(t){return function(){return t}}function BA(t,e,n,i,r,o){for(var s=0,a,l=e.length,c=o.length;s<c;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new Vl(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function kA(t,e,n,i,r,o,s){var a,l,c=new Map,u=e.length,f=o.length,d=new Array(u),h;for(a=0;a<u;++a)(l=e[a])&&(d[a]=h=s.call(l,l.__data__,a,e)+"",c.has(h)?r[a]=l:c.set(h,l));for(a=0;a<f;++a)h=s.call(t,o[a],a,o)+"",(l=c.get(h))?(i[a]=l,l.__data__=o[a],c.delete(h)):n[a]=new Vl(t,o[a]);for(a=0;a<u;++a)(l=e[a])&&c.get(d[a])===l&&(r[a]=l)}function zA(t){return t.__data__}function VA(t,e){if(!arguments.length)return Array.from(this,zA);var n=e?kA:BA,i=this._parents,r=this._groups;typeof t!="function"&&(t=OA(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),c=0;c<o;++c){var u=i[c],f=r[c],d=f.length,h=HA(t.call(u,u&&u.__data__,c,i)),g=h.length,x=a[c]=new Array(g),m=s[c]=new Array(g),p=l[c]=new Array(d);n(u,f,x,m,p,h,e);for(var M=0,y=0,b,L;M<g;++M)if(b=x[M]){for(M>=y&&(y=M+1);!(L=m[y])&&++y<g;);b._next=L||null}}return s=new Cn(s,i),s._enter=a,s._exit=l,s}function HA(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function GA(){return new Cn(this._exit||this._groups.map(_0),this._parents)}function $A(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function WA(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var c=n[l],u=i[l],f=c.length,d=a[l]=new Array(f),h,g=0;g<f;++g)(h=c[g]||u[g])&&(d[g]=h);for(;l<r;++l)a[l]=n[l];return new Cn(a,this._parents)}function XA(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function YA(t){t||(t=qA);function e(f,d){return f&&d?t(f.__data__,d.__data__):!f-!d}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),c,u=0;u<a;++u)(c=s[u])&&(l[u]=c);l.sort(e)}return new Cn(r,this._parents).order()}function qA(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function KA(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function ZA(){return Array.from(this)}function jA(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function JA(){let t=0;for(const e of this)++t;return t}function QA(){return!this.node()}function eC(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function tC(t){return function(){this.removeAttribute(t)}}function nC(t){return function(){this.removeAttributeNS(t.space,t.local)}}function iC(t,e){return function(){this.setAttribute(t,e)}}function rC(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function oC(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function sC(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function aC(t,e){var n=Ec(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?nC:tC:typeof e=="function"?n.local?sC:oC:n.local?rC:iC)(n,e))}function x0(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function lC(t){return function(){this.style.removeProperty(t)}}function cC(t,e,n){return function(){this.style.setProperty(t,e,n)}}function uC(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function fC(t,e,n){return arguments.length>1?this.each((e==null?lC:typeof e=="function"?uC:cC)(t,e,n??"")):jo(this.node(),t)}function jo(t,e){return t.style.getPropertyValue(e)||x0(t).getComputedStyle(t,null).getPropertyValue(e)}function dC(t){return function(){delete this[t]}}function hC(t,e){return function(){this[t]=e}}function pC(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function mC(t,e){return arguments.length>1?this.each((e==null?dC:typeof e=="function"?pC:hC)(t,e)):this.node()[t]}function y0(t){return t.trim().split(/^|\s+/)}function th(t){return t.classList||new b0(t)}function b0(t){this._node=t,this._names=y0(t.getAttribute("class")||"")}b0.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function S0(t,e){for(var n=th(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function M0(t,e){for(var n=th(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function gC(t){return function(){S0(this,t)}}function vC(t){return function(){M0(this,t)}}function _C(t,e){return function(){(e.apply(this,arguments)?S0:M0)(this,t)}}function xC(t,e){var n=y0(t+"");if(arguments.length<2){for(var i=th(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?_C:e?gC:vC)(n,e))}function yC(){this.textContent=""}function bC(t){return function(){this.textContent=t}}function SC(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function MC(t){return arguments.length?this.each(t==null?yC:(typeof t=="function"?SC:bC)(t)):this.node().textContent}function EC(){this.innerHTML=""}function wC(t){return function(){this.innerHTML=t}}function TC(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function AC(t){return arguments.length?this.each(t==null?EC:(typeof t=="function"?TC:wC)(t)):this.node().innerHTML}function CC(){this.nextSibling&&this.parentNode.appendChild(this)}function RC(){return this.each(CC)}function PC(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function IC(){return this.each(PC)}function NC(t){var e=typeof t=="function"?t:p0(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function DC(){return null}function LC(t,e){var n=typeof t=="function"?t:p0(t),i=e==null?DC:typeof e=="function"?e:eh(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function FC(){var t=this.parentNode;t&&t.removeChild(this)}function UC(){return this.each(FC)}function OC(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function BC(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function kC(t){return this.select(t?BC:OC)}function zC(t){return arguments.length?this.property("__data__",t):this.node().__data__}function VC(t){return function(e){t.call(this,e,this.__data__)}}function HC(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function GC(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function $C(t,e,n){return function(){var i=this.__on,r,o=VC(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function WC(t,e,n){var i=HC(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,u;l<c;++l)for(r=0,u=a[l];r<o;++r)if((s=i[r]).type===u.type&&s.name===u.name)return u.value}return}for(a=e?$C:GC,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function E0(t,e,n){var i=x0(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function XC(t,e){return function(){return E0(this,t,e)}}function YC(t,e){return function(){return E0(this,t,e.apply(this,arguments))}}function qC(t,e){return this.each((typeof e=="function"?YC:XC)(t,e))}function*KC(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var w0=[null];function Cn(t,e){this._groups=t,this._parents=e}function ma(){return new Cn([[document.documentElement]],w0)}function ZC(){return this}Cn.prototype=ma.prototype={constructor:Cn,select:SA,selectAll:TA,selectChild:PA,selectChildren:LA,filter:FA,data:VA,enter:UA,exit:GA,join:$A,merge:WA,selection:ZC,order:XA,sort:YA,call:KA,nodes:ZA,node:jA,size:JA,empty:QA,each:eC,attr:aC,style:fC,property:mC,classed:xC,text:MC,html:AC,raise:RC,lower:IC,append:NC,insert:LC,remove:UC,clone:kC,datum:zC,on:WC,dispatch:qC,[Symbol.iterator]:KC};function Vn(t){return typeof t=="string"?new Cn([[document.querySelector(t)]],[document.documentElement]):new Cn([[t]],w0)}function jC(t){let e;for(;e=t.sourceEvent;)t=e;return t}function ii(t,e){if(t=jC(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[t.clientX-r.left-e.clientLeft,t.clientY-r.top-e.clientTop]}}return[t.pageX,t.pageY]}const JC={passive:!1},Zs={capture:!0,passive:!1};function Du(t){t.stopImmediatePropagation()}function zo(t){t.preventDefault(),t.stopImmediatePropagation()}function T0(t){var e=t.document.documentElement,n=Vn(t).on("dragstart.drag",zo,Zs);"onselectstart"in e?n.on("selectstart.drag",zo,Zs):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function A0(t,e){var n=t.document.documentElement,i=Vn(t).on("dragstart.drag",null);e&&(i.on("click.drag",zo,Zs),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const qa=t=>()=>t;function Qf(t,{sourceEvent:e,subject:n,target:i,identifier:r,active:o,x:s,y:a,dx:l,dy:c,dispatch:u}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:c,enumerable:!0,configurable:!0},_:{value:u}})}Qf.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function QC(t){return!t.ctrlKey&&!t.button}function eR(){return this.parentNode}function tR(t,e){return e??{x:t.x,y:t.y}}function nR(){return navigator.maxTouchPoints||"ontouchstart"in this}function iR(){var t=QC,e=eR,n=tR,i=nR,r={},o=Mc("start","drag","end"),s=0,a,l,c,u,f=0;function d(b){b.on("mousedown.drag",h).filter(i).on("touchstart.drag",m).on("touchmove.drag",p,JC).on("touchend.drag touchcancel.drag",M).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(b,L){if(!(u||!t.call(this,b,L))){var B=y(this,e.call(this,b,L),b,L,"mouse");B&&(Vn(b.view).on("mousemove.drag",g,Zs).on("mouseup.drag",x,Zs),T0(b.view),Du(b),c=!1,a=b.clientX,l=b.clientY,B("start",b))}}function g(b){if(zo(b),!c){var L=b.clientX-a,B=b.clientY-l;c=L*L+B*B>f}r.mouse("drag",b)}function x(b){Vn(b.view).on("mousemove.drag mouseup.drag",null),A0(b.view,c),zo(b),r.mouse("end",b)}function m(b,L){if(t.call(this,b,L)){var B=b.changedTouches,z=e.call(this,b,L),v=B.length,_,D;for(_=0;_<v;++_)(D=y(this,z,b,L,B[_].identifier,B[_]))&&(Du(b),D("start",b,B[_]))}}function p(b){var L=b.changedTouches,B=L.length,z,v;for(z=0;z<B;++z)(v=r[L[z].identifier])&&(zo(b),v("drag",b,L[z]))}function M(b){var L=b.changedTouches,B=L.length,z,v;for(u&&clearTimeout(u),u=setTimeout(function(){u=null},500),z=0;z<B;++z)(v=r[L[z].identifier])&&(Du(b),v("end",b,L[z]))}function y(b,L,B,z,v,_){var D=o.copy(),I=ii(_||B,L),C,X,E;if((E=n.call(b,new Qf("beforestart",{sourceEvent:B,target:d,identifier:v,active:s,x:I[0],y:I[1],dx:0,dy:0,dispatch:D}),z))!=null)return C=E.x-I[0]||0,X=E.y-I[1]||0,function U(T,P,k){var Y=I,q;switch(T){case"start":r[v]=U,q=s++;break;case"end":delete r[v],--s;case"drag":I=ii(k||P,L),q=s;break}D.call(T,b,new Qf(T,{sourceEvent:P,subject:E,target:d,identifier:v,active:q,x:I[0]+C,y:I[1]+X,dx:I[0]-Y[0],dy:I[1]-Y[1],dispatch:D}),z)}}return d.filter=function(b){return arguments.length?(t=typeof b=="function"?b:qa(!!b),d):t},d.container=function(b){return arguments.length?(e=typeof b=="function"?b:qa(b),d):e},d.subject=function(b){return arguments.length?(n=typeof b=="function"?b:qa(b),d):n},d.touchable=function(b){return arguments.length?(i=typeof b=="function"?b:qa(!!b),d):i},d.on=function(){var b=o.on.apply(o,arguments);return b===o?d:b},d.clickDistance=function(b){return arguments.length?(f=(b=+b)*b,d):Math.sqrt(f)},d}function nh(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function C0(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function ga(){}var js=.7,Hl=1/js,Vo="\\s*([+-]?\\d+)\\s*",Js="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",pi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",rR=/^#([0-9a-f]{3,8})$/,oR=new RegExp(`^rgb\\(${Vo},${Vo},${Vo}\\)$`),sR=new RegExp(`^rgb\\(${pi},${pi},${pi}\\)$`),aR=new RegExp(`^rgba\\(${Vo},${Vo},${Vo},${Js}\\)$`),lR=new RegExp(`^rgba\\(${pi},${pi},${pi},${Js}\\)$`),cR=new RegExp(`^hsl\\(${Js},${pi},${pi}\\)$`),uR=new RegExp(`^hsla\\(${Js},${pi},${pi},${Js}\\)$`),am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};nh(ga,ao,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:lm,formatHex:lm,formatHex8:fR,formatHsl:dR,formatRgb:cm,toString:cm});function lm(){return this.rgb().formatHex()}function fR(){return this.rgb().formatHex8()}function dR(){return R0(this).formatHsl()}function cm(){return this.rgb().formatRgb()}function ao(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=rR.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?um(e):n===3?new vn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?Ka(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?Ka(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=oR.exec(t))?new vn(e[1],e[2],e[3],1):(e=sR.exec(t))?new vn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=aR.exec(t))?Ka(e[1],e[2],e[3],e[4]):(e=lR.exec(t))?Ka(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=cR.exec(t))?hm(e[1],e[2]/100,e[3]/100,1):(e=uR.exec(t))?hm(e[1],e[2]/100,e[3]/100,e[4]):am.hasOwnProperty(t)?um(am[t]):t==="transparent"?new vn(NaN,NaN,NaN,0):null}function um(t){return new vn(t>>16&255,t>>8&255,t&255,1)}function Ka(t,e,n,i){return i<=0&&(t=e=n=NaN),new vn(t,e,n,i)}function hR(t){return t instanceof ga||(t=ao(t)),t?(t=t.rgb(),new vn(t.r,t.g,t.b,t.opacity)):new vn}function ed(t,e,n,i){return arguments.length===1?hR(t):new vn(t,e,n,i??1)}function vn(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}nh(vn,ed,C0(ga,{brighter(t){return t=t==null?Hl:Math.pow(Hl,t),new vn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?js:Math.pow(js,t),new vn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new vn(no(this.r),no(this.g),no(this.b),Gl(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:fm,formatHex:fm,formatHex8:pR,formatRgb:dm,toString:dm}));function fm(){return`#${jr(this.r)}${jr(this.g)}${jr(this.b)}`}function pR(){return`#${jr(this.r)}${jr(this.g)}${jr(this.b)}${jr((isNaN(this.opacity)?1:this.opacity)*255)}`}function dm(){const t=Gl(this.opacity);return`${t===1?"rgb(":"rgba("}${no(this.r)}, ${no(this.g)}, ${no(this.b)}${t===1?")":`, ${t})`}`}function Gl(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function no(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function jr(t){return t=no(t),(t<16?"0":"")+t.toString(16)}function hm(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Hn(t,e,n,i)}function R0(t){if(t instanceof Hn)return new Hn(t.h,t.s,t.l,t.opacity);if(t instanceof ga||(t=ao(t)),!t)return new Hn;if(t instanceof Hn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),o=Math.max(e,n,i),s=NaN,a=o-r,l=(o+r)/2;return a?(e===o?s=(n-i)/a+(n<i)*6:n===o?s=(i-e)/a+2:s=(e-n)/a+4,a/=l<.5?o+r:2-o-r,s*=60):a=l>0&&l<1?0:s,new Hn(s,a,l,t.opacity)}function mR(t,e,n,i){return arguments.length===1?R0(t):new Hn(t,e,n,i??1)}function Hn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}nh(Hn,mR,C0(ga,{brighter(t){return t=t==null?Hl:Math.pow(Hl,t),new Hn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?js:Math.pow(js,t),new Hn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new vn(Lu(t>=240?t-240:t+120,r,i),Lu(t,r,i),Lu(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new Hn(pm(this.h),Za(this.s),Za(this.l),Gl(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Gl(this.opacity);return`${t===1?"hsl(":"hsla("}${pm(this.h)}, ${Za(this.s)*100}%, ${Za(this.l)*100}%${t===1?")":`, ${t})`}`}}));function pm(t){return t=(t||0)%360,t<0?t+360:t}function Za(t){return Math.max(0,Math.min(1,t||0))}function Lu(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const ih=t=>()=>t;function gR(t,e){return function(n){return t+n*e}}function vR(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function _R(t){return(t=+t)==1?P0:function(e,n){return n-e?vR(e,n,t):ih(isNaN(e)?n:e)}}function P0(t,e){var n=e-t;return n?gR(t,n):ih(isNaN(t)?e:t)}const $l=(function t(e){var n=_R(e);function i(r,o){var s=n((r=ed(r)).r,(o=ed(o)).r),a=n(r.g,o.g),l=n(r.b,o.b),c=P0(r.opacity,o.opacity);return function(u){return r.r=s(u),r.g=a(u),r.b=l(u),r.opacity=c(u),r+""}}return i.gamma=t,i})(1);function xR(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,i=e.slice(),r;return function(o){for(r=0;r<n;++r)i[r]=t[r]*(1-o)+e[r]*o;return i}}function yR(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function bR(t,e){var n=e?e.length:0,i=t?Math.min(n,t.length):0,r=new Array(i),o=new Array(n),s;for(s=0;s<i;++s)r[s]=Os(t[s],e[s]);for(;s<n;++s)o[s]=e[s];return function(a){for(s=0;s<i;++s)o[s]=r[s](a);return o}}function SR(t,e){var n=new Date;return t=+t,e=+e,function(i){return n.setTime(t*(1-i)+e*i),n}}function ai(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function MR(t,e){var n={},i={},r;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in t?n[r]=Os(t[r],e[r]):i[r]=e[r];return function(o){for(r in n)i[r]=n[r](o);return i}}var td=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Fu=new RegExp(td.source,"g");function ER(t){return function(){return t}}function wR(t){return function(e){return t(e)+""}}function I0(t,e){var n=td.lastIndex=Fu.lastIndex=0,i,r,o,s=-1,a=[],l=[];for(t=t+"",e=e+"";(i=td.exec(t))&&(r=Fu.exec(e));)(o=r.index)>n&&(o=e.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(i=i[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,l.push({i:s,x:ai(i,r)})),n=Fu.lastIndex;return n<e.length&&(o=e.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?wR(l[0].x):ER(e):(e=l.length,function(c){for(var u=0,f;u<e;++u)a[(f=l[u]).i]=f.x(c);return a.join("")})}function Os(t,e){var n=typeof e,i;return e==null||n==="boolean"?ih(e):(n==="number"?ai:n==="string"?(i=ao(e))?(e=i,$l):I0:e instanceof ao?$l:e instanceof Date?SR:yR(e)?xR:Array.isArray(e)?bR:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?MR:ai)(t,e)}var mm=180/Math.PI,nd={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function N0(t,e,n,i,r,o){var s,a,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,s=-s),{translateX:r,translateY:o,rotate:Math.atan2(e,t)*mm,skewX:Math.atan(l)*mm,scaleX:s,scaleY:a}}var ja;function TR(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?nd:N0(e.a,e.b,e.c,e.d,e.e,e.f)}function AR(t){return t==null||(ja||(ja=document.createElementNS("http://www.w3.org/2000/svg","g")),ja.setAttribute("transform",t),!(t=ja.transform.baseVal.consolidate()))?nd:(t=t.matrix,N0(t.a,t.b,t.c,t.d,t.e,t.f))}function D0(t,e,n,i){function r(c){return c.length?c.pop()+" ":""}function o(c,u,f,d,h,g){if(c!==f||u!==d){var x=h.push("translate(",null,e,null,n);g.push({i:x-4,x:ai(c,f)},{i:x-2,x:ai(u,d)})}else(f||d)&&h.push("translate("+f+e+d+n)}function s(c,u,f,d){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),d.push({i:f.push(r(f)+"rotate(",null,i)-2,x:ai(c,u)})):u&&f.push(r(f)+"rotate("+u+i)}function a(c,u,f,d){c!==u?d.push({i:f.push(r(f)+"skewX(",null,i)-2,x:ai(c,u)}):u&&f.push(r(f)+"skewX("+u+i)}function l(c,u,f,d,h,g){if(c!==f||u!==d){var x=h.push(r(h)+"scale(",null,",",null,")");g.push({i:x-4,x:ai(c,f)},{i:x-2,x:ai(u,d)})}else(f!==1||d!==1)&&h.push(r(h)+"scale("+f+","+d+")")}return function(c,u){var f=[],d=[];return c=t(c),u=t(u),o(c.translateX,c.translateY,u.translateX,u.translateY,f,d),s(c.rotate,u.rotate,f,d),a(c.skewX,u.skewX,f,d),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,f,d),c=u=null,function(h){for(var g=-1,x=d.length,m;++g<x;)f[(m=d[g]).i]=m.x(h);return f.join("")}}}var CR=D0(TR,"px, ","px)","deg)"),RR=D0(AR,", ",")",")"),PR=1e-12;function gm(t){return((t=Math.exp(t))+1/t)/2}function IR(t){return((t=Math.exp(t))-1/t)/2}function NR(t){return((t=Math.exp(2*t))-1)/(t+1)}const vl=(function t(e,n,i){function r(o,s){var a=o[0],l=o[1],c=o[2],u=s[0],f=s[1],d=s[2],h=u-a,g=f-l,x=h*h+g*g,m,p;if(x<PR)p=Math.log(d/c)/e,m=function(z){return[a+z*h,l+z*g,c*Math.exp(e*z*p)]};else{var M=Math.sqrt(x),y=(d*d-c*c+i*x)/(2*c*n*M),b=(d*d-c*c-i*x)/(2*d*n*M),L=Math.log(Math.sqrt(y*y+1)-y),B=Math.log(Math.sqrt(b*b+1)-b);p=(B-L)/e,m=function(z){var v=z*p,_=gm(L),D=c/(n*M)*(_*NR(e*v+L)-IR(L));return[a+D*h,l+D*g,c*_/gm(e*v+L)]}}return m.duration=p*1e3*e/Math.SQRT2,m}return r.rho=function(o){var s=Math.max(.001,+o),a=s*s,l=a*a;return t(s,a,l)},r})(Math.SQRT2,2,4);var Jo=0,Es=0,vs=0,L0=1e3,Wl,ws,Xl=0,lo=0,wc=0,Qs=typeof performance=="object"&&performance.now?performance:Date,F0=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function rh(){return lo||(F0(DR),lo=Qs.now()+wc)}function DR(){lo=0}function Yl(){this._call=this._time=this._next=null}Yl.prototype=U0.prototype={constructor:Yl,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?rh():+n)+(e==null?0:+e),!this._next&&ws!==this&&(ws?ws._next=this:Wl=this,ws=this),this._call=t,this._time=n,id()},stop:function(){this._call&&(this._call=null,this._time=1/0,id())}};function U0(t,e,n){var i=new Yl;return i.restart(t,e,n),i}function LR(){rh(),++Jo;for(var t=Wl,e;t;)(e=lo-t._time)>=0&&t._call.call(void 0,e),t=t._next;--Jo}function vm(){lo=(Xl=Qs.now())+wc,Jo=Es=0;try{LR()}finally{Jo=0,UR(),lo=0}}function FR(){var t=Qs.now(),e=t-Xl;e>L0&&(wc-=e,Xl=t)}function UR(){for(var t,e=Wl,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:Wl=n);ws=t,id(i)}function id(t){if(!Jo){Es&&(Es=clearTimeout(Es));var e=t-lo;e>24?(t<1/0&&(Es=setTimeout(vm,t-Qs.now()-wc)),vs&&(vs=clearInterval(vs))):(vs||(Xl=Qs.now(),vs=setInterval(FR,L0)),Jo=1,F0(vm))}}function _m(t,e,n){var i=new Yl;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var OR=Mc("start","end","cancel","interrupt"),BR=[],O0=0,xm=1,rd=2,_l=3,ym=4,od=5,xl=6;function Tc(t,e,n,i,r,o){var s=t.__transition;if(!s)t.__transition={};else if(n in s)return;kR(t,n,{name:e,index:i,group:r,on:OR,tween:BR,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:O0})}function oh(t,e){var n=Zn(t,e);if(n.state>O0)throw new Error("too late; already scheduled");return n}function xi(t,e){var n=Zn(t,e);if(n.state>_l)throw new Error("too late; already running");return n}function Zn(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function kR(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=U0(o,0,n.time);function o(c){n.state=xm,n.timer.restart(s,n.delay,n.time),n.delay<=c&&s(c-n.delay)}function s(c){var u,f,d,h;if(n.state!==xm)return l();for(u in i)if(h=i[u],h.name===n.name){if(h.state===_l)return _m(s);h.state===ym?(h.state=xl,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[u]):+u<e&&(h.state=xl,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[u])}if(_m(function(){n.state===_l&&(n.state=ym,n.timer.restart(a,n.delay,n.time),a(c))}),n.state=rd,n.on.call("start",t,t.__data__,n.index,n.group),n.state===rd){for(n.state=_l,r=new Array(d=n.tween.length),u=0,f=-1;u<d;++u)(h=n.tween[u].value.call(t,t.__data__,n.index,n.group))&&(r[++f]=h);r.length=f+1}}function a(c){for(var u=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=od,1),f=-1,d=r.length;++f<d;)r[f].call(t,u);n.state===od&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=xl,n.timer.stop(),delete i[e];for(var c in i)return;delete t.__transition}}function yl(t,e){var n=t.__transition,i,r,o=!0,s;if(n){e=e==null?null:e+"";for(s in n){if((i=n[s]).name!==e){o=!1;continue}r=i.state>rd&&i.state<od,i.state=xl,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[s]}o&&delete t.__transition}}function zR(t){return this.each(function(){yl(this,t)})}function VR(t,e){var n,i;return function(){var r=xi(this,t),o=r.tween;if(o!==n){i=n=o;for(var s=0,a=i.length;s<a;++s)if(i[s].name===e){i=i.slice(),i.splice(s,1);break}}r.tween=i}}function HR(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var o=xi(this,t),s=o.tween;if(s!==i){r=(i=s).slice();for(var a={name:e,value:n},l=0,c=r.length;l<c;++l)if(r[l].name===e){r[l]=a;break}l===c&&r.push(a)}o.tween=r}}function GR(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=Zn(this.node(),n).tween,r=0,o=i.length,s;r<o;++r)if((s=i[r]).name===t)return s.value;return null}return this.each((e==null?VR:HR)(n,t,e))}function sh(t,e,n){var i=t._id;return t.each(function(){var r=xi(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return Zn(r,i).value[e]}}function B0(t,e){var n;return(typeof e=="number"?ai:e instanceof ao?$l:(n=ao(e))?(e=n,$l):I0)(t,e)}function $R(t){return function(){this.removeAttribute(t)}}function WR(t){return function(){this.removeAttributeNS(t.space,t.local)}}function XR(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttribute(t);return s===r?null:s===i?o:o=e(i=s,n)}}function YR(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===r?null:s===i?o:o=e(i=s,n)}}function qR(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function KR(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function ZR(t,e){var n=Ec(t),i=n==="transform"?RR:B0;return this.attrTween(t,typeof e=="function"?(n.local?KR:qR)(n,i,sh(this,"attr."+t,e)):e==null?(n.local?WR:$R)(n):(n.local?YR:XR)(n,i,e))}function jR(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function JR(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function QR(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&JR(t,o)),n}return r._value=e,r}function e2(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&jR(t,o)),n}return r._value=e,r}function t2(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=Ec(t);return this.tween(n,(i.local?QR:e2)(i,e))}function n2(t,e){return function(){oh(this,t).delay=+e.apply(this,arguments)}}function i2(t,e){return e=+e,function(){oh(this,t).delay=e}}function r2(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?n2:i2)(e,t)):Zn(this.node(),e).delay}function o2(t,e){return function(){xi(this,t).duration=+e.apply(this,arguments)}}function s2(t,e){return e=+e,function(){xi(this,t).duration=e}}function a2(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?o2:s2)(e,t)):Zn(this.node(),e).duration}function l2(t,e){if(typeof e!="function")throw new Error;return function(){xi(this,t).ease=e}}function c2(t){var e=this._id;return arguments.length?this.each(l2(e,t)):Zn(this.node(),e).ease}function u2(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;xi(this,t).ease=n}}function f2(t){if(typeof t!="function")throw new Error;return this.each(u2(this._id,t))}function d2(t){typeof t!="function"&&(t=g0(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,c=0;c<s;++c)(l=o[c])&&t.call(l,l.__data__,c,o)&&a.push(l);return new Qi(i,this._parents,this._name,this._id)}function h2(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,o=Math.min(i,r),s=new Array(i),a=0;a<o;++a)for(var l=e[a],c=n[a],u=l.length,f=s[a]=new Array(u),d,h=0;h<u;++h)(d=l[h]||c[h])&&(f[h]=d);for(;a<i;++a)s[a]=e[a];return new Qi(s,this._parents,this._name,this._id)}function p2(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function m2(t,e,n){var i,r,o=p2(e)?oh:xi;return function(){var s=o(this,t),a=s.on;a!==i&&(r=(i=a).copy()).on(e,n),s.on=r}}function g2(t,e){var n=this._id;return arguments.length<2?Zn(this.node(),n).on.on(t):this.each(m2(n,t,e))}function v2(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function _2(){return this.on("end.remove",v2(this._id))}function x2(t){var e=this._name,n=this._id;typeof t!="function"&&(t=eh(t));for(var i=this._groups,r=i.length,o=new Array(r),s=0;s<r;++s)for(var a=i[s],l=a.length,c=o[s]=new Array(l),u,f,d=0;d<l;++d)(u=a[d])&&(f=t.call(u,u.__data__,d,a))&&("__data__"in u&&(f.__data__=u.__data__),c[d]=f,Tc(c[d],e,n,d,c,Zn(u,n)));return new Qi(o,this._parents,e,n)}function y2(t){var e=this._name,n=this._id;typeof t!="function"&&(t=m0(t));for(var i=this._groups,r=i.length,o=[],s=[],a=0;a<r;++a)for(var l=i[a],c=l.length,u,f=0;f<c;++f)if(u=l[f]){for(var d=t.call(u,u.__data__,f,l),h,g=Zn(u,n),x=0,m=d.length;x<m;++x)(h=d[x])&&Tc(h,e,n,x,d,g);o.push(d),s.push(u)}return new Qi(o,s,e,n)}var b2=ma.prototype.constructor;function S2(){return new b2(this._groups,this._parents)}function M2(t,e){var n,i,r;return function(){var o=jo(this,t),s=(this.style.removeProperty(t),jo(this,t));return o===s?null:o===n&&s===i?r:r=e(n=o,i=s)}}function k0(t){return function(){this.style.removeProperty(t)}}function E2(t,e,n){var i,r=n+"",o;return function(){var s=jo(this,t);return s===r?null:s===i?o:o=e(i=s,n)}}function w2(t,e,n){var i,r,o;return function(){var s=jo(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),jo(this,t))),s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a))}}function T2(t,e){var n,i,r,o="style."+e,s="end."+o,a;return function(){var l=xi(this,t),c=l.on,u=l.value[o]==null?a||(a=k0(e)):void 0;(c!==n||r!==u)&&(i=(n=c).copy()).on(s,r=u),l.on=i}}function A2(t,e,n){var i=(t+="")=="transform"?CR:B0;return e==null?this.styleTween(t,M2(t,i)).on("end.style."+t,k0(t)):typeof e=="function"?this.styleTween(t,w2(t,i,sh(this,"style."+t,e))).each(T2(this._id,t)):this.styleTween(t,E2(t,i,e),n).on("end.style."+t,null)}function C2(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function R2(t,e,n){var i,r;function o(){var s=e.apply(this,arguments);return s!==r&&(i=(r=s)&&C2(t,s,n)),i}return o._value=e,o}function P2(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,R2(t,e,n??""))}function I2(t){return function(){this.textContent=t}}function N2(t){return function(){var e=t(this);this.textContent=e??""}}function D2(t){return this.tween("text",typeof t=="function"?N2(sh(this,"text",t)):I2(t==null?"":t+""))}function L2(t){return function(e){this.textContent=t.call(this,e)}}function F2(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&L2(r)),e}return i._value=t,i}function U2(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,F2(t))}function O2(){for(var t=this._name,e=this._id,n=z0(),i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,c=0;c<a;++c)if(l=s[c]){var u=Zn(l,e);Tc(l,t,n,c,s,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Qi(i,this._parents,t,n)}function B2(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--r===0&&o()}};n.each(function(){var c=xi(this,i),u=c.on;u!==t&&(e=(t=u).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),c.on=e}),r===0&&o()})}var k2=0;function Qi(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function z0(){return++k2}var Ri=ma.prototype;Qi.prototype={constructor:Qi,select:x2,selectAll:y2,selectChild:Ri.selectChild,selectChildren:Ri.selectChildren,filter:d2,merge:h2,selection:S2,transition:O2,call:Ri.call,nodes:Ri.nodes,node:Ri.node,size:Ri.size,empty:Ri.empty,each:Ri.each,on:g2,attr:ZR,attrTween:t2,style:A2,styleTween:P2,text:D2,textTween:U2,remove:_2,tween:GR,delay:r2,duration:a2,ease:c2,easeVarying:f2,end:B2,[Symbol.iterator]:Ri[Symbol.iterator]};function z2(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var V2={time:null,delay:0,duration:250,ease:z2};function H2(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function G2(t){var e,n;t instanceof Qi?(e=t._id,t=t._name):(e=z0(),(n=V2).time=rh(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,c=0;c<a;++c)(l=s[c])&&Tc(l,t,e,c,s,n||H2(l,e));return new Qi(i,this._parents,t,e)}ma.prototype.interrupt=zR;ma.prototype.transition=G2;const Ja=t=>()=>t;function $2(t,{sourceEvent:e,target:n,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function Bi(t,e,n){this.k=t,this.x=e,this.y=n}Bi.prototype={constructor:Bi,scale:function(t){return t===1?this:new Bi(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Bi(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Qo=new Bi(1,0,0);Bi.prototype;function Uu(t){t.stopImmediatePropagation()}function _s(t){t.preventDefault(),t.stopImmediatePropagation()}function W2(t){return(!t.ctrlKey||t.type==="wheel")&&!t.button}function X2(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t,t.hasAttribute("viewBox")?(t=t.viewBox.baseVal,[[t.x,t.y],[t.x+t.width,t.y+t.height]]):[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]):[[0,0],[t.clientWidth,t.clientHeight]]}function bm(){return this.__zoom||Qo}function Y2(t){return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function q2(){return navigator.maxTouchPoints||"ontouchstart"in this}function K2(t,e,n){var i=t.invertX(e[0][0])-n[0][0],r=t.invertX(e[1][0])-n[1][0],o=t.invertY(e[0][1])-n[0][1],s=t.invertY(e[1][1])-n[1][1];return t.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),s>o?(o+s)/2:Math.min(0,o)||Math.max(0,s))}function Z2(){var t=W2,e=X2,n=K2,i=Y2,r=q2,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,l=vl,c=Mc("start","zoom","end"),u,f,d,h=500,g=150,x=0,m=10;function p(E){E.property("__zoom",bm).on("wheel.zoom",v,{passive:!1}).on("mousedown.zoom",_).on("dblclick.zoom",D).filter(r).on("touchstart.zoom",I).on("touchmove.zoom",C).on("touchend.zoom touchcancel.zoom",X).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(E,U,T,P){var k=E.selection?E.selection():E;k.property("__zoom",bm),E!==k?L(E,U,T,P):k.interrupt().each(function(){B(this,arguments).event(P).start().zoom(null,typeof U=="function"?U.apply(this,arguments):U).end()})},p.scaleBy=function(E,U,T,P){p.scaleTo(E,function(){var k=this.__zoom.k,Y=typeof U=="function"?U.apply(this,arguments):U;return k*Y},T,P)},p.scaleTo=function(E,U,T,P){p.transform(E,function(){var k=e.apply(this,arguments),Y=this.__zoom,q=T==null?b(k):typeof T=="function"?T.apply(this,arguments):T,H=Y.invert(q),K=typeof U=="function"?U.apply(this,arguments):U;return n(y(M(Y,K),q,H),k,s)},T,P)},p.translateBy=function(E,U,T,P){p.transform(E,function(){return n(this.__zoom.translate(typeof U=="function"?U.apply(this,arguments):U,typeof T=="function"?T.apply(this,arguments):T),e.apply(this,arguments),s)},null,P)},p.translateTo=function(E,U,T,P,k){p.transform(E,function(){var Y=e.apply(this,arguments),q=this.__zoom,H=P==null?b(Y):typeof P=="function"?P.apply(this,arguments):P;return n(Qo.translate(H[0],H[1]).scale(q.k).translate(typeof U=="function"?-U.apply(this,arguments):-U,typeof T=="function"?-T.apply(this,arguments):-T),Y,s)},P,k)};function M(E,U){return U=Math.max(o[0],Math.min(o[1],U)),U===E.k?E:new Bi(U,E.x,E.y)}function y(E,U,T){var P=U[0]-T[0]*E.k,k=U[1]-T[1]*E.k;return P===E.x&&k===E.y?E:new Bi(E.k,P,k)}function b(E){return[(+E[0][0]+ +E[1][0])/2,(+E[0][1]+ +E[1][1])/2]}function L(E,U,T,P){E.on("start.zoom",function(){B(this,arguments).event(P).start()}).on("interrupt.zoom end.zoom",function(){B(this,arguments).event(P).end()}).tween("zoom",function(){var k=this,Y=arguments,q=B(k,Y).event(P),H=e.apply(k,Y),K=T==null?b(H):typeof T=="function"?T.apply(k,Y):T,le=Math.max(H[1][0]-H[0][0],H[1][1]-H[0][1]),ge=k.__zoom,he=typeof U=="function"?U.apply(k,Y):U,Z=l(ge.invert(K).concat(le/ge.k),he.invert(K).concat(le/he.k));return function(ne){if(ne===1)ne=he;else{var de=Z(ne),Me=le/de[2];ne=new Bi(Me,K[0]-de[0]*Me,K[1]-de[1]*Me)}q.zoom(null,ne)}})}function B(E,U,T){return!T&&E.__zooming||new z(E,U)}function z(E,U){this.that=E,this.args=U,this.active=0,this.sourceEvent=null,this.extent=e.apply(E,U),this.taps=0}z.prototype={event:function(E){return E&&(this.sourceEvent=E),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(E,U){return this.mouse&&E!=="mouse"&&(this.mouse[1]=U.invert(this.mouse[0])),this.touch0&&E!=="touch"&&(this.touch0[1]=U.invert(this.touch0[0])),this.touch1&&E!=="touch"&&(this.touch1[1]=U.invert(this.touch1[0])),this.that.__zoom=U,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(E){var U=Vn(this.that).datum();c.call(E,this.that,new $2(E,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:c}),U)}};function v(E,...U){if(!t.apply(this,arguments))return;var T=B(this,U).event(E),P=this.__zoom,k=Math.max(o[0],Math.min(o[1],P.k*Math.pow(2,i.apply(this,arguments)))),Y=ii(E);if(T.wheel)(T.mouse[0][0]!==Y[0]||T.mouse[0][1]!==Y[1])&&(T.mouse[1]=P.invert(T.mouse[0]=Y)),clearTimeout(T.wheel);else{if(P.k===k)return;T.mouse=[Y,P.invert(Y)],yl(this),T.start()}_s(E),T.wheel=setTimeout(q,g),T.zoom("mouse",n(y(M(P,k),T.mouse[0],T.mouse[1]),T.extent,s));function q(){T.wheel=null,T.end()}}function _(E,...U){if(d||!t.apply(this,arguments))return;var T=E.currentTarget,P=B(this,U,!0).event(E),k=Vn(E.view).on("mousemove.zoom",K,!0).on("mouseup.zoom",le,!0),Y=ii(E,T),q=E.clientX,H=E.clientY;T0(E.view),Uu(E),P.mouse=[Y,this.__zoom.invert(Y)],yl(this),P.start();function K(ge){if(_s(ge),!P.moved){var he=ge.clientX-q,Z=ge.clientY-H;P.moved=he*he+Z*Z>x}P.event(ge).zoom("mouse",n(y(P.that.__zoom,P.mouse[0]=ii(ge,T),P.mouse[1]),P.extent,s))}function le(ge){k.on("mousemove.zoom mouseup.zoom",null),A0(ge.view,P.moved),_s(ge),P.event(ge).end()}}function D(E,...U){if(t.apply(this,arguments)){var T=this.__zoom,P=ii(E.changedTouches?E.changedTouches[0]:E,this),k=T.invert(P),Y=T.k*(E.shiftKey?.5:2),q=n(y(M(T,Y),P,k),e.apply(this,U),s);_s(E),a>0?Vn(this).transition().duration(a).call(L,q,P,E):Vn(this).call(p.transform,q,P,E)}}function I(E,...U){if(t.apply(this,arguments)){var T=E.touches,P=T.length,k=B(this,U,E.changedTouches.length===P).event(E),Y,q,H,K;for(Uu(E),q=0;q<P;++q)H=T[q],K=ii(H,this),K=[K,this.__zoom.invert(K),H.identifier],k.touch0?!k.touch1&&k.touch0[2]!==K[2]&&(k.touch1=K,k.taps=0):(k.touch0=K,Y=!0,k.taps=1+!!u);u&&(u=clearTimeout(u)),Y&&(k.taps<2&&(f=K[0],u=setTimeout(function(){u=null},h)),yl(this),k.start())}}function C(E,...U){if(this.__zooming){var T=B(this,U).event(E),P=E.changedTouches,k=P.length,Y,q,H,K;for(_s(E),Y=0;Y<k;++Y)q=P[Y],H=ii(q,this),T.touch0&&T.touch0[2]===q.identifier?T.touch0[0]=H:T.touch1&&T.touch1[2]===q.identifier&&(T.touch1[0]=H);if(q=T.that.__zoom,T.touch1){var le=T.touch0[0],ge=T.touch0[1],he=T.touch1[0],Z=T.touch1[1],ne=(ne=he[0]-le[0])*ne+(ne=he[1]-le[1])*ne,de=(de=Z[0]-ge[0])*de+(de=Z[1]-ge[1])*de;q=M(q,Math.sqrt(ne/de)),H=[(le[0]+he[0])/2,(le[1]+he[1])/2],K=[(ge[0]+Z[0])/2,(ge[1]+Z[1])/2]}else if(T.touch0)H=T.touch0[0],K=T.touch0[1];else return;T.zoom("touch",n(y(q,H,K),T.extent,s))}}function X(E,...U){if(this.__zooming){var T=B(this,U).event(E),P=E.changedTouches,k=P.length,Y,q;for(Uu(E),d&&clearTimeout(d),d=setTimeout(function(){d=null},h),Y=0;Y<k;++Y)q=P[Y],T.touch0&&T.touch0[2]===q.identifier?delete T.touch0:T.touch1&&T.touch1[2]===q.identifier&&delete T.touch1;if(T.touch1&&!T.touch0&&(T.touch0=T.touch1,delete T.touch1),T.touch0)T.touch0[1]=this.__zoom.invert(T.touch0[0]);else if(T.end(),T.taps===2&&(q=ii(q,this),Math.hypot(f[0]-q[0],f[1]-q[1])<m)){var H=Vn(this).on("dblclick.zoom");H&&H.apply(this,arguments)}}}return p.wheelDelta=function(E){return arguments.length?(i=typeof E=="function"?E:Ja(+E),p):i},p.filter=function(E){return arguments.length?(t=typeof E=="function"?E:Ja(!!E),p):t},p.touchable=function(E){return arguments.length?(r=typeof E=="function"?E:Ja(!!E),p):r},p.extent=function(E){return arguments.length?(e=typeof E=="function"?E:Ja([[+E[0][0],+E[0][1]],[+E[1][0],+E[1][1]]]),p):e},p.scaleExtent=function(E){return arguments.length?(o[0]=+E[0],o[1]=+E[1],p):[o[0],o[1]]},p.translateExtent=function(E){return arguments.length?(s[0][0]=+E[0][0],s[1][0]=+E[1][0],s[0][1]=+E[0][1],s[1][1]=+E[1][1],p):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},p.constrain=function(E){return arguments.length?(n=E,p):n},p.duration=function(E){return arguments.length?(a=+E,p):a},p.interpolate=function(E){return arguments.length?(l=E,p):l},p.on=function(){var E=c.on.apply(c,arguments);return E===c?p:E},p.clickDistance=function(E){return arguments.length?(x=(E=+E)*E,p):Math.sqrt(x)},p.tapDistance=function(E){return arguments.length?(m=+E,p):m},p}var Ve=(t=>(t.Left="left",t.Top="top",t.Right="right",t.Bottom="bottom",t))(Ve||{}),ah=(t=>(t.Partial="partial",t.Full="full",t))(ah||{}),Xr=(t=>(t.Bezier="default",t.SimpleBezier="simple-bezier",t.Straight="straight",t.Step="step",t.SmoothStep="smoothstep",t))(Xr||{}),Rr=(t=>(t.Strict="strict",t.Loose="loose",t))(Rr||{}),sd=(t=>(t.Arrow="arrow",t.ArrowClosed="arrowclosed",t))(sd||{}),Bs=(t=>(t.Free="free",t.Vertical="vertical",t.Horizontal="horizontal",t))(Bs||{});const j2=["INPUT","SELECT","TEXTAREA"],J2=typeof document<"u"?document:null;function ad(t){var e,n;const i=((n=(e=t.composedPath)==null?void 0:e.call(t))==null?void 0:n[0])||t.target,r=typeof i?.hasAttribute=="function"?i.hasAttribute("contenteditable"):!1,o=typeof i?.closest=="function"?i.closest(".nokey"):null;return j2.includes(i?.nodeName)||r||!!o}function Q2(t){return t.ctrlKey||t.metaKey||t.shiftKey||t.altKey}function Sm(t,e,n,i){const r=e.replace("+",`
`).replace(`

`,`
+`).split(`
`).map(s=>s.trim().toLowerCase());if(r.length===1)return t.toLowerCase()===e.toLowerCase();i||n.add(t.toLowerCase());const o=r.every((s,a)=>n.has(s)&&Array.from(n.values())[a]===r[a]);return i&&n.delete(t.toLowerCase()),o}function eP(t,e){return n=>{if(!n.code&&!n.key)return!1;const i=tP(n.code,t);return Array.isArray(t)?t.some(r=>Sm(n[i],r,e,n.type==="keyup")):Sm(n[i],t,e,n.type==="keyup")}}function tP(t,e){return e.includes(t)?"code":"key"}function ks(t,e){const n=He(()=>lt(e?.target)??J2),i=Mr(lt(t)===!0);let r=!1;const o=new Set;let s=l(lt(t));ft(()=>lt(t),(c,u)=>{typeof u=="boolean"&&typeof c!="boolean"&&a(),s=l(c)},{immediate:!0}),h0(["blur","contextmenu"],a),rm((...c)=>s(...c),c=>{var u,f;const d=lt(e?.actInsideInputWithModifier)??!0,h=lt(e?.preventDefault)??!1;if(r=Q2(c),(!r||r&&!d)&&ad(c))return;const x=((f=(u=c.composedPath)==null?void 0:u.call(c))==null?void 0:f[0])||c.target,m=x?.nodeName==="BUTTON"||x?.nodeName==="A";!h&&(r||!m)&&c.preventDefault(),i.value=!0},{eventName:"keydown",target:n}),rm((...c)=>s(...c),c=>{const u=lt(e?.actInsideInputWithModifier)??!0;if(i.value){if((!r||r&&!u)&&ad(c))return;r=!1,i.value=!1}},{eventName:"keyup",target:n});function a(){r=!1,o.clear(),i.value=lt(t)===!0}function l(c){return c===null?(a(),()=>!1):typeof c=="boolean"?(a(),i.value=c,()=>!1):Array.isArray(c)||typeof c=="string"?eP(c,o):c}return i}const V0="vue-flow__node-desc",H0="vue-flow__edge-desc",nP="vue-flow__aria-live",G0=["Enter"," ","Escape"],Ho={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}};function ql(t){return{...t.computedPosition||{x:0,y:0},width:t.dimensions.width||0,height:t.dimensions.height||0}}function Kl(t,e){const n=Math.max(0,Math.min(t.x+t.width,e.x+e.width)-Math.max(t.x,e.x)),i=Math.max(0,Math.min(t.y+t.height,e.y+e.height)-Math.max(t.y,e.y));return Math.ceil(n*i)}function Ac(t){return{width:t.offsetWidth,height:t.offsetHeight}}function co(t,e=0,n=1){return Math.min(Math.max(t,e),n)}function $0(t,e){return{x:co(t.x,e[0][0],e[1][0]),y:co(t.y,e[0][1],e[1][1])}}function Mm(t){const e=t.getRootNode();return"elementFromPoint"in e?e:window.document}function Pr(t){return t&&typeof t=="object"&&"id"in t&&"source"in t&&"target"in t}function io(t){return t&&typeof t=="object"&&"id"in t&&"position"in t&&!Pr(t)}function Ts(t){return io(t)&&"computedPosition"in t}function Qa(t){return!Number.isNaN(t)&&Number.isFinite(t)}function iP(t){return Qa(t.width)&&Qa(t.height)&&Qa(t.x)&&Qa(t.y)}function rP(t,e,n){const i={id:t.id.toString(),type:t.type??"default",dimensions:eo({width:0,height:0}),computedPosition:eo({z:0,...t.position}),handleBounds:{source:[],target:[]},draggable:void 0,selectable:void 0,connectable:void 0,focusable:void 0,selected:!1,dragging:!1,resizing:!1,initialized:!1,isParent:!1,position:{x:0,y:0},data:Ht(t.data)?t.data:{},events:eo(Ht(t.events)?t.events:{})};return Object.assign(e??i,t,{id:t.id.toString(),parentNode:n})}function W0(t,e,n){var i,r;const o={id:t.id.toString(),type:t.type??e?.type??"default",source:t.source.toString(),target:t.target.toString(),sourceHandle:(i=t.sourceHandle)==null?void 0:i.toString(),targetHandle:(r=t.targetHandle)==null?void 0:r.toString(),updatable:t.updatable??n?.updatable,selectable:t.selectable??n?.selectable,focusable:t.focusable??n?.focusable,data:Ht(t.data)?t.data:{},events:eo(Ht(t.events)?t.events:{}),label:t.label??"",interactionWidth:t.interactionWidth??n?.interactionWidth,...n??{}};return Object.assign(e??o,t,{id:t.id.toString()})}function X0(t,e,n,i){const r=typeof t=="string"?t:t.id,o=new Set,s=i==="source"?"target":"source";for(const a of n)a[s]===r&&o.add(a[i]);return e.filter(a=>o.has(a.id))}function oP(...t){if(t.length===3){const[o,s,a]=t;return X0(o,s,a,"target")}const[e,n]=t,i=typeof e=="string"?e:e.id;return n.filter(o=>Pr(o)&&o.source===i).map(o=>n.find(s=>io(s)&&s.id===o.target))}function sP(...t){if(t.length===3){const[o,s,a]=t;return X0(o,s,a,"source")}const[e,n]=t,i=typeof e=="string"?e:e.id;return n.filter(o=>Pr(o)&&o.target===i).map(o=>n.find(s=>io(s)&&s.id===o.source))}function Y0({source:t,sourceHandle:e,target:n,targetHandle:i}){return`vueflow__edge-${t}${e??""}-${n}${i??""}`}function aP(t,e){return e.some(n=>Pr(n)&&n.source===t.source&&n.target===t.target&&(n.sourceHandle===t.sourceHandle||!n.sourceHandle&&!t.sourceHandle)&&(n.targetHandle===t.targetHandle||!n.targetHandle&&!t.targetHandle))}function ea({x:t,y:e},{x:n,y:i,zoom:r}){return{x:t*r+n,y:e*r+i}}function ta({x:t,y:e},{x:n,y:i,zoom:r},o=!1,s=[1,1]){const a={x:(t-n)/r,y:(e-i)/r};return o?Cc(a,s):a}function q0(t,e){return{x:Math.min(t.x,e.x),y:Math.min(t.y,e.y),x2:Math.max(t.x2,e.x2),y2:Math.max(t.y2,e.y2)}}function Zl({x:t,y:e,width:n,height:i}){return{x:t,y:e,x2:t+n,y2:e+i}}function K0({x:t,y:e,x2:n,y2:i}){return{x:t,y:e,width:n-t,height:i-e}}function lP(t,e){return K0(q0(Zl(t),Zl(e)))}function lh(t){let e={x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY,x2:Number.NEGATIVE_INFINITY,y2:Number.NEGATIVE_INFINITY};for(let n=0;n<t.length;n++){const i=t[n];e=q0(e,Zl({...i.computedPosition,...i.dimensions}))}return K0(e)}function Z0(t,e,n={x:0,y:0,zoom:1},i=!1,r=!1){const o={...ta(e,n),width:e.width/n.zoom,height:e.height/n.zoom},s=[];for(const a of t){const{dimensions:l,selectable:c=!0,hidden:u=!1}=a,f=l.width??a.width??null,d=l.height??a.height??null;if(r&&!c||u)continue;const h=Kl(o,ql(a)),g=f===null||d===null,x=i&&h>0,m=(f??0)*(d??0);(g||x||h>=m||a.dragging)&&s.push(a)}return s}function Yr(t,e){const n=new Set;if(typeof t=="string")n.add(t);else if(t.length>=1)for(const i of t)n.add(i.id);return e.filter(i=>n.has(i.source)||n.has(i.target))}function No(t,e){if(typeof t=="number")return Math.floor((e-e/(1+t))*.5);if(typeof t=="string"&&t.endsWith("px")){const n=Number.parseFloat(t);if(!Number.isNaN(n))return Math.floor(n)}if(typeof t=="string"&&t.endsWith("%")){const n=Number.parseFloat(t);if(!Number.isNaN(n))return Math.floor(e*n*.01)}return va(`The padding value "${t}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function cP(t,e,n){if(typeof t=="string"||typeof t=="number"){const i=No(t,n),r=No(t,e);return{top:i,right:r,bottom:i,left:r,x:r*2,y:i*2}}if(typeof t=="object"){const i=No(t.top??t.y??0,n),r=No(t.bottom??t.y??0,n),o=No(t.left??t.x??0,e),s=No(t.right??t.x??0,e);return{top:i,right:s,bottom:r,left:o,x:o+s,y:i+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function uP(t,e,n,i,r,o){const{x:s,y:a}=ea(t,{x:e,y:n,zoom:i}),{x:l,y:c}=ea({x:t.x+t.width,y:t.y+t.height},{x:e,y:n,zoom:i}),u=r-l,f=o-c;return{left:Math.floor(s),top:Math.floor(a),right:Math.floor(u),bottom:Math.floor(f)}}function Em(t,e,n,i,r,o=.1){const s=cP(o,e,n),a=(e-s.x)/t.width,l=(n-s.y)/t.height,c=Math.min(a,l),u=co(c,i,r),f=t.x+t.width/2,d=t.y+t.height/2,h=e/2-f*u,g=n/2-d*u,x=uP(t,h,g,u,e,n),m={left:Math.min(x.left-s.left,0),top:Math.min(x.top-s.top,0),right:Math.min(x.right-s.right,0),bottom:Math.min(x.bottom-s.bottom,0)};return{x:h-m.left+m.right,y:g-m.top+m.bottom,zoom:u}}function fP(t,e){return{x:e.x+t.x,y:e.y+t.y,z:(t.z>e.z?t.z:e.z)+1}}function j0(t,e){if(!t.parentNode)return!1;const n=e.get(t.parentNode);return n?n.selected?!0:j0(n,e):!1}function na(t,e){return typeof t>"u"?"":typeof t=="string"?t:`${e?`${e}__`:""}${Object.keys(t).sort().map(i=>`${i}=${t[i]}`).join("&")}`}function ld(t){const e=t.ctrlKey&&ia()?10:1;return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*e}function wm(t,e,n){return t<e?co(Math.abs(t-e),1,e)/e:t>n?-co(Math.abs(t-n),1,e)/e:0}function J0(t,e,n=15,i=40){const r=wm(t.x,i,e.width-i)*n,o=wm(t.y,i,e.height-i)*n;return[r,o]}function Ou(t,e){if(e){const n=t.position.x+t.dimensions.width-e.dimensions.width,i=t.position.y+t.dimensions.height-e.dimensions.height;if(n>0||i>0||t.position.x<0||t.position.y<0){let r={};if(typeof e.style=="function"?r={...e.style(e)}:e.style&&(r={...e.style}),r.width=r.width??`${e.dimensions.width}px`,r.height=r.height??`${e.dimensions.height}px`,n>0)if(typeof r.width=="string"){const o=Number(r.width.replace("px",""));r.width=`${o+n}px`}else r.width+=n;if(i>0)if(typeof r.height=="string"){const o=Number(r.height.replace("px",""));r.height=`${o+i}px`}else r.height+=i;if(t.position.x<0){const o=Math.abs(t.position.x);if(e.position.x=e.position.x-o,typeof r.width=="string"){const s=Number(r.width.replace("px",""));r.width=`${s+o}px`}else r.width+=o;t.position.x=0}if(t.position.y<0){const o=Math.abs(t.position.y);if(e.position.y=e.position.y-o,typeof r.height=="string"){const s=Number(r.height.replace("px",""));r.height=`${s+o}px`}else r.height+=o;t.position.y=0}e.dimensions.width=Number(r.width.toString().replace("px","")),e.dimensions.height=Number(r.height.toString().replace("px","")),typeof e.style=="function"?e.style=o=>{const s=e.style;return{...s(o),...r}}:e.style={...e.style,...r}}}}function Tm(t,e){var n,i;const r=t.filter(s=>s.type==="add"||s.type==="remove");for(const s of r)if(s.type==="add")e.findIndex(l=>l.id===s.item.id)===-1&&e.push(s.item);else if(s.type==="remove"){const a=e.findIndex(l=>l.id===s.id);a!==-1&&e.splice(a,1)}const o=e.map(s=>s.id);for(const s of e)for(const a of t)if(a.id===s.id)switch(a.type){case"select":s.selected=a.selected;break;case"position":if(Ts(s)&&(typeof a.position<"u"&&(s.position=a.position),typeof a.dragging<"u"&&(s.dragging=a.dragging),s.expandParent&&s.parentNode)){const l=e[o.indexOf(s.parentNode)];l&&Ts(l)&&Ou(s,l)}break;case"dimensions":if(Ts(s)&&(typeof a.dimensions<"u"&&(s.dimensions=a.dimensions),typeof a.updateStyle<"u"&&a.updateStyle&&(s.style={...s.style||{},width:`${(n=a.dimensions)==null?void 0:n.width}px`,height:`${(i=a.dimensions)==null?void 0:i.height}px`}),typeof a.resizing<"u"&&(s.resizing=a.resizing),s.expandParent&&s.parentNode)){const l=e[o.indexOf(s.parentNode)];l&&Ts(l)&&(!!l.dimensions.width&&!!l.dimensions.height?Ou(s,l):Nn(()=>{Ou(s,l)}))}break}return e}function pr(t,e){return{id:t,type:"select",selected:e}}function Am(t){return{item:t,type:"add"}}function Cm(t){return{id:t,type:"remove"}}function Rm(t,e,n,i,r){return{id:t,source:e,target:n,sourceHandle:i||null,targetHandle:r||null,type:"remove"}}function _r(t,e=new Set,n=!1){const i=[];for(const[r,o]of t){const s=e.has(r);!(o.selected===void 0&&!s)&&o.selected!==s&&(n&&(o.selected=s),i.push(pr(o.id,s)))}return i}const Pm=()=>{};function Oe(t){const e=new Set;let n=Pm,i=()=>!1;const r=()=>e.size>0||i(),o=d=>{n=d},s=()=>{n=Pm},a=d=>{i=d},l=()=>{i=()=>!1},c=d=>{e.delete(d)};return{on:d=>{e.add(d);const h=()=>c(d);return Ks(h),{off:h}},off:c,trigger:d=>{const h=[n];return r()?h.push(...e):t&&h.push(t),Promise.allSettled(h.map(g=>g(d)))},hasListeners:r,listeners:e,setEmitter:o,removeEmitter:s,setHasEmitListeners:a,removeHasEmitListeners:l}}function Im(t,e,n){let i=t;do{if(i&&i.matches(e))return!0;if(i===n)return!1;i=i.parentElement}while(i);return!1}function dP(t,e,n,i){var r,o;const s=new Map;for(const[a,l]of t)(l.selected||l.id===i)&&(!l.parentNode||!j0(l,t))&&(l.draggable||e&&typeof l.draggable>"u")&&t.get(a)&&s.set(a,{id:l.id,position:l.position||{x:0,y:0},distance:{x:n.x-((r=l.computedPosition)==null?void 0:r.x)||0,y:n.y-((o=l.computedPosition)==null?void 0:o.y)||0},from:{x:l.computedPosition.x,y:l.computedPosition.y},extent:l.extent,parentNode:l.parentNode,dimensions:{...l.dimensions},expandParent:l.expandParent});return Array.from(s.values())}function Bu({id:t,dragItems:e,findNode:n}){const i=[];for(const r of e){const o=n(r.id);o&&i.push(o)}return[t?i.find(r=>r.id===t):i[0],i]}function Q0(t){if(Array.isArray(t))switch(t.length){case 1:return[t[0],t[0],t[0],t[0]];case 2:return[t[0],t[1],t[0],t[1]];case 3:return[t[0],t[1],t[2],t[1]];case 4:return t;default:return[0,0,0,0]}return[t,t,t,t]}function hP(t,e,n){const[i,r,o,s]=typeof t!="string"?Q0(t.padding):[0,0,0,0];return n&&typeof n.computedPosition.x<"u"&&typeof n.computedPosition.y<"u"&&typeof n.dimensions.width<"u"&&typeof n.dimensions.height<"u"?[[n.computedPosition.x+s,n.computedPosition.y+i],[n.computedPosition.x+n.dimensions.width-r,n.computedPosition.y+n.dimensions.height-o]]:!1}function pP(t,e,n,i){let r=t.extent||n;if((r==="parent"||!Array.isArray(r)&&r?.range==="parent")&&!t.expandParent)if(t.parentNode&&i&&t.dimensions.width&&t.dimensions.height){const o=hP(r,t,i);o&&(r=o)}else e(new Wt(Gt.NODE_EXTENT_INVALID,t.id)),r=n;else if(Array.isArray(r)){const o=i?.computedPosition.x||0,s=i?.computedPosition.y||0;r=[[r[0][0]+o,r[0][1]+s],[r[1][0]+o,r[1][1]+s]]}else if(r!=="parent"&&r?.range&&Array.isArray(r.range)){const[o,s,a,l]=Q0(r.padding),c=i?.computedPosition.x||0,u=i?.computedPosition.y||0;r=[[r.range[0][0]+c+l,r.range[0][1]+u+o],[r.range[1][0]+c-s,r.range[1][1]+u-a]]}return r==="parent"?[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]]:r}function mP({width:t,height:e},n){return[n[0],[n[1][0]-(t||0),n[1][1]-(e||0)]]}function ch(t,e,n,i,r){const o=mP(t.dimensions,pP(t,n,i,r)),s=$0(e,o);return{position:{x:s.x-(r?.computedPosition.x||0),y:s.y-(r?.computedPosition.y||0)},computedPosition:s}}function es(t,e,n=Ve.Left,i=!1){const r=(e?.x??0)+t.computedPosition.x,o=(e?.y??0)+t.computedPosition.y,{width:s,height:a}=e??xP(t);if(i)return{x:r+s/2,y:o+a/2};switch(e?.position??n){case Ve.Top:return{x:r+s/2,y:o};case Ve.Right:return{x:r+s,y:o+a/2};case Ve.Bottom:return{x:r+s/2,y:o+a};case Ve.Left:return{x:r,y:o+a/2}}}function Nm(t,e){return t&&(e?t.find(n=>n.id===e):t[0])||null}function gP({sourcePos:t,targetPos:e,sourceWidth:n,sourceHeight:i,targetWidth:r,targetHeight:o,width:s,height:a,viewport:l}){const c={x:Math.min(t.x,e.x),y:Math.min(t.y,e.y),x2:Math.max(t.x+n,e.x+r),y2:Math.max(t.y+i,e.y+o)};c.x===c.x2&&(c.x2+=1),c.y===c.y2&&(c.y2+=1);const u=Zl({x:(0-l.x)/l.zoom,y:(0-l.y)/l.zoom,width:s/l.zoom,height:a/l.zoom}),f=Math.max(0,Math.min(u.x2,c.x2)-Math.max(u.x,c.x)),d=Math.max(0,Math.min(u.y2,c.y2)-Math.max(u.y,c.y));return Math.ceil(f*d)>0}function vP(t,e,n=!1){const i=typeof t.zIndex=="number";let r=i?t.zIndex:0;const o=e(t.source),s=e(t.target);return!o||!s?0:(n&&(r=i?t.zIndex:Math.max(o.computedPosition.z||0,s.computedPosition.z||0)),r)}var Gt=(t=>(t.MISSING_STYLES="MISSING_STYLES",t.MISSING_VIEWPORT_DIMENSIONS="MISSING_VIEWPORT_DIMENSIONS",t.NODE_INVALID="NODE_INVALID",t.NODE_NOT_FOUND="NODE_NOT_FOUND",t.NODE_MISSING_PARENT="NODE_MISSING_PARENT",t.NODE_TYPE_MISSING="NODE_TYPE_MISSING",t.NODE_EXTENT_INVALID="NODE_EXTENT_INVALID",t.EDGE_INVALID="EDGE_INVALID",t.EDGE_NOT_FOUND="EDGE_NOT_FOUND",t.EDGE_SOURCE_MISSING="EDGE_SOURCE_MISSING",t.EDGE_TARGET_MISSING="EDGE_TARGET_MISSING",t.EDGE_TYPE_MISSING="EDGE_TYPE_MISSING",t.EDGE_SOURCE_TARGET_SAME="EDGE_SOURCE_TARGET_SAME",t.EDGE_SOURCE_TARGET_MISSING="EDGE_SOURCE_TARGET_MISSING",t.EDGE_ORPHANED="EDGE_ORPHANED",t.USEVUEFLOW_OPTIONS="USEVUEFLOW_OPTIONS",t))(Gt||{});const Dm={MISSING_STYLES:()=>"It seems that you haven't loaded the necessary styles. Please import '@vue-flow/core/dist/style.css' to ensure that the graph is rendered correctly",MISSING_VIEWPORT_DIMENSIONS:()=>"The Vue Flow parent container needs a width and a height to render the graph",NODE_INVALID:t=>`Node is invalid
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
Edge: ${t}`,USEVUEFLOW_OPTIONS:()=>"The options parameter is deprecated and will be removed in the next major version. Please use the id parameter instead"};class Wt extends Error{constructor(e,...n){var i;super((i=Dm[e])==null?void 0:i.call(Dm,...n)),this.name="VueFlowError",this.code=e,this.args=n}}function uh(t){return"clientX"in t}function _P(t){return"sourceEvent"in t}function li(t,e){const n=uh(t);let i,r;return n?(i=t.clientX,r=t.clientY):"touches"in t&&t.touches.length>0?(i=t.touches[0].clientX,r=t.touches[0].clientY):"changedTouches"in t&&t.changedTouches.length>0?(i=t.changedTouches[0].clientX,r=t.changedTouches[0].clientY):(i=0,r=0),{x:i-(e?.left??0),y:r-(e?.top??0)}}const ia=()=>{var t;return typeof navigator<"u"&&((t=navigator?.userAgent)==null?void 0:t.indexOf("Mac"))>=0};function xP(t){var e,n;return{width:((e=t.dimensions)==null?void 0:e.width)??t.width??0,height:((n=t.dimensions)==null?void 0:n.height)??t.height??0}}function Cc(t,e=[1,1]){return{x:e[0]*Math.round(t.x/e[0]),y:e[1]*Math.round(t.y/e[1])}}const yP=()=>!0;function ku(t){t?.classList.remove("valid","connecting","vue-flow__handle-valid","vue-flow__handle-connecting")}function bP(t,e,n){const i=[],r={x:t.x-n,y:t.y-n,width:n*2,height:n*2};for(const o of e.values())Kl(r,ql(o))>0&&i.push(o);return i}const SP=250;function MP(t,e,n,i){var r,o;let s=[],a=Number.POSITIVE_INFINITY;const l=bP(t,n,e+SP);for(const c of l){const u=[...((r=c.handleBounds)==null?void 0:r.source)??[],...((o=c.handleBounds)==null?void 0:o.target)??[]];for(const f of u){if(i.nodeId===f.nodeId&&i.type===f.type&&i.id===f.id)continue;const{x:d,y:h}=es(c,f,f.position,!0),g=Math.sqrt((d-t.x)**2+(h-t.y)**2);g>e||(g<a?(s=[{...f,x:d,y:h}],a=g):g===a&&s.push({...f,x:d,y:h}))}}if(!s.length)return null;if(s.length>1){const c=i.type==="source"?"target":"source";return s.find(u=>u.type===c)??s[0]}return s[0]}function Lm(t,{handle:e,connectionMode:n,fromNodeId:i,fromHandleId:r,fromType:o,doc:s,lib:a,flowId:l,isValidConnection:c=yP},u,f,d,h){const g=o==="target",x=e?s.querySelector(`.${a}-flow__handle[data-id="${l}-${e?.nodeId}-${e?.id}-${e?.type}"]`):null,{x:m,y:p}=li(t),M=s.elementFromPoint(m,p),y=M?.classList.contains(`${a}-flow__handle`)?M:x,b={handleDomNode:y,isValid:!1,connection:null,toHandle:null};if(y){const L=e_(void 0,y),B=y.getAttribute("data-nodeid"),z=y.getAttribute("data-handleid"),v=y.classList.contains("connectable"),_=y.classList.contains("connectableend");if(!B||!L)return b;const D={source:g?B:i,sourceHandle:g?z:r,target:g?i:B,targetHandle:g?r:z};b.connection=D;const C=v&&_&&(n===Rr.Strict?g&&L==="source"||!g&&L==="target":B!==i||z!==r);b.isValid=C&&c(D,{nodes:f,edges:u,sourceNode:d(D.source),targetNode:d(D.target)}),b.toHandle=t_(B,L,z,h,n,!0)}return b}function e_(t,e){return t||(e?.classList.contains("target")?"target":e?.classList.contains("source")?"source":null)}function EP(t,e){let n=null;return e?n="valid":t&&!e&&(n="invalid"),n}function wP(t,e){let n=null;return e?n=!0:t&&!e&&(n=!1),n}function t_(t,e,n,i,r,o=!1){var s,a,l;const c=i.get(t);if(!c)return null;const u=r===Rr.Strict?(s=c.handleBounds)==null?void 0:s[e]:[...((a=c.handleBounds)==null?void 0:a.source)??[],...((l=c.handleBounds)==null?void 0:l.target)??[]],f=(n?u?.find(d=>d.id===n):u?.[0])??null;return f&&o?{...f,...es(c,f,f.position,!0)}:f}const cd={[Ve.Left]:Ve.Right,[Ve.Right]:Ve.Left,[Ve.Top]:Ve.Bottom,[Ve.Bottom]:Ve.Top},TP=["production","prod"];function va(t,...e){n_()&&console.warn(`[Vue Flow]: ${t}`,...e)}function n_(){return!TP.includes("production")}function Fm(t,e,n,i,r){const o=e.querySelectorAll(`.vue-flow__handle.${t}`);return o?.length?Array.from(o).map(s=>{const a=s.getBoundingClientRect();return{id:s.getAttribute("data-handleid"),type:t,nodeId:r,position:s.getAttribute("data-handlepos"),x:(a.left-n.left)/i,y:(a.top-n.top)/i,...Ac(s)}}):null}function ud(t,e,n,i,r,o=!1,s){r.value=!1,t.selected?(o||t.selected&&e)&&(i([t]),Nn(()=>{s.blur()})):n([t])}function Ht(t){return typeof pe(t)<"u"}function AP(t,e,n,i){if(!t||!t.source||!t.target)return n(new Wt(Gt.EDGE_INVALID,t?.id??"[ID UNKNOWN]")),!1;let r;return Pr(t)?r=t:r={...t,id:Y0(t)},r=W0(r,void 0,i),aP(r,e)?!1:r}function CP(t,e,n,i,r){if(!e.source||!e.target)return r(new Wt(Gt.EDGE_INVALID,t.id)),!1;if(!n)return r(new Wt(Gt.EDGE_NOT_FOUND,t.id)),!1;const{id:o,...s}=t;return{...s,id:i?Y0(e):o,source:e.source,target:e.target,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle}}function Um(t,e,n){const i={},r=[];for(let o=0;o<t.length;++o){const s=t[o];if(!io(s)){n(new Wt(Gt.NODE_INVALID,s?.id)||`[ID UNKNOWN|INDEX ${o}]`);continue}const a=rP(s,e(s.id),s.parentNode);s.parentNode&&(i[s.parentNode]=!0),r[o]=a}for(const o of r){const s=e(o.parentNode)||r.find(a=>a.id===o.parentNode);o.parentNode&&!s&&n(new Wt(Gt.NODE_MISSING_PARENT,o.id,o.parentNode)),(o.parentNode||i[o.id])&&(i[o.id]&&(o.isParent=!0),s&&(s.isParent=!0))}return r}function Om(t,e,n,i,r,o){let s=r;const a=i.get(s)||new Map;i.set(s,a.set(n,e)),s=`${r}-${t}`;const l=i.get(s)||new Map;if(i.set(s,l.set(n,e)),o){s=`${r}-${t}-${o}`;const c=i.get(s)||new Map;i.set(s,c.set(n,e))}}function zu(t,e,n){t.clear();for(const i of n){const{source:r,target:o,sourceHandle:s=null,targetHandle:a=null}=i,l={edgeId:i.id,source:r,target:o,sourceHandle:s,targetHandle:a},c=`${r}-${s}--${o}-${a}`,u=`${o}-${a}--${r}-${s}`;Om("source",l,u,t,r,s),Om("target",l,c,t,o,a)}}function Bm(t,e){if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0}function Vu(t,e,n,i,r,o,s,a){const l=[];for(const c of t){const u=Pr(c)?c:AP(c,a,r,o);if(!u)continue;const f=n(u.source),d=n(u.target);if(!f||!d){r(new Wt(Gt.EDGE_SOURCE_TARGET_MISSING,u.id,u.source,u.target));continue}if(!f){r(new Wt(Gt.EDGE_SOURCE_MISSING,u.id,u.source));continue}if(!d){r(new Wt(Gt.EDGE_TARGET_MISSING,u.id,u.target));continue}if(e&&!e(u,{edges:a,nodes:s,sourceNode:f,targetNode:d})){r(new Wt(Gt.EDGE_INVALID,u.id));continue}const h=i(u.id);l.push({...W0(u,h,o),sourceNode:f,targetNode:d})}return l}const km=Symbol("vueFlow"),i_=Symbol("nodeId"),r_=Symbol("nodeRef"),RP=Symbol("edgeId"),PP=Symbol("edgeRef"),Rc=Symbol("slots");function o_(t){const{vueFlowRef:e,snapToGrid:n,snapGrid:i,noDragClassName:r,nodeLookup:o,nodeExtent:s,nodeDragThreshold:a,viewport:l,autoPanOnNodeDrag:c,autoPanSpeed:u,nodesDraggable:f,panBy:d,findNode:h,multiSelectionActive:g,nodesSelectionActive:x,selectNodesOnDrag:m,removeSelectedElements:p,addSelectedNodes:M,updateNodePositions:y,emits:b}=Ft(),{onStart:L,onDrag:B,onStop:z,onClick:v,el:_,disabled:D,id:I,selectable:C,dragHandle:X}=t,E=Mr(!1);let U=[],T,P=null,k={x:void 0,y:void 0},Y={x:0,y:0},q=null,H=!1,K=!1,le=0,ge=!1;const he=DP(),Z=({x:V,y:$})=>{k={x:V,y:$};let R=!1;if(U=U.map(N=>{const O={x:V-N.distance.x,y:$-N.distance.y},{computedPosition:G}=ch(N,n.value?Cc(O,i.value):O,b.error,s.value,N.parentNode?h(N.parentNode):void 0);return R=R||N.position.x!==G.x||N.position.y!==G.y,N.position=G,N}),K=K||R,!!R&&(y(U,!0,!0),E.value=!0,q)){const[N,O]=Bu({id:I,dragItems:U,findNode:h});B({event:q,node:N,nodes:O})}},ne=()=>{if(!P)return;const[V,$]=J0(Y,P,u.value);if(V!==0||$!==0){const R={x:(k.x??0)-V/l.value.zoom,y:(k.y??0)-$/l.value.zoom};d({x:V,y:$})&&Z(R)}le=requestAnimationFrame(ne)},de=(V,$)=>{H=!0;const R=h(I);!m.value&&!g.value&&R&&(R.selected||p()),R&&lt(C)&&m.value&&ud(R,g.value,M,p,x,!1,$);const N=he(V.sourceEvent);if(k=N,U=dP(o.value,f.value,N,I),U.length){const[O,G]=Bu({id:I,dragItems:U,findNode:h});L({event:V.sourceEvent,node:O,nodes:G})}},Me=(V,$)=>{var R;V.sourceEvent.type==="touchmove"&&V.sourceEvent.touches.length>1||(K=!1,a.value===0&&de(V,$),k=he(V.sourceEvent),P=((R=e.value)==null?void 0:R.getBoundingClientRect())||null,Y=li(V.sourceEvent,P))},xe=(V,$)=>{const R=he(V.sourceEvent);if(!ge&&H&&c.value&&(ge=!0,ne()),!H){const N=R.xSnapped-(k.x??0),O=R.ySnapped-(k.y??0);Math.sqrt(N*N+O*O)>a.value&&de(V,$)}(k.x!==R.xSnapped||k.y!==R.ySnapped)&&U.length&&H&&(q=V.sourceEvent,Y=li(V.sourceEvent,P),Z(R))},Re=V=>{let $=!1;if(!H&&!E.value&&!g.value){const R=V.sourceEvent,N=he(R),O=N.xSnapped-(k.x??0),G=N.ySnapped-(k.y??0),w=Math.sqrt(O*O+G*G);w!==0&&w<=a.value&&(v?.(R),$=!0)}if(U.length&&!$){K&&(y(U,!1,!1),K=!1);const[R,N]=Bu({id:I,dragItems:U,findNode:h});z({event:V.sourceEvent,node:R,nodes:N})}U=[],E.value=!1,ge=!1,H=!1,k={x:void 0,y:void 0},cancelAnimationFrame(le)};return ft([()=>lt(D),_],([V,$],R,N)=>{if($){const O=Vn($);V||(T=iR().on("start",G=>Me(G,$)).on("drag",G=>xe(G,$)).on("end",G=>Re(G)).filter(G=>{const w=G.target,ie=lt(X);return!G.button&&(!r.value||!Im(w,`.${r.value}`,$)&&(!ie||Im(w,ie,$)))}),O.call(T)),N(()=>{O.on(".drag",null),T&&(T.on("start",null),T.on("drag",null),T.on("end",null))})}}),E}function IP(){return{doubleClick:Oe(),click:Oe(),mouseEnter:Oe(),mouseMove:Oe(),mouseLeave:Oe(),contextMenu:Oe(),updateStart:Oe(),update:Oe(),updateEnd:Oe()}}function NP(t,e){const n=IP();return n.doubleClick.on(i=>{var r,o;e.edgeDoubleClick(i),(o=(r=t.events)==null?void 0:r.doubleClick)==null||o.call(r,i)}),n.click.on(i=>{var r,o;e.edgeClick(i),(o=(r=t.events)==null?void 0:r.click)==null||o.call(r,i)}),n.mouseEnter.on(i=>{var r,o;e.edgeMouseEnter(i),(o=(r=t.events)==null?void 0:r.mouseEnter)==null||o.call(r,i)}),n.mouseMove.on(i=>{var r,o;e.edgeMouseMove(i),(o=(r=t.events)==null?void 0:r.mouseMove)==null||o.call(r,i)}),n.mouseLeave.on(i=>{var r,o;e.edgeMouseLeave(i),(o=(r=t.events)==null?void 0:r.mouseLeave)==null||o.call(r,i)}),n.contextMenu.on(i=>{var r,o;e.edgeContextMenu(i),(o=(r=t.events)==null?void 0:r.contextMenu)==null||o.call(r,i)}),n.updateStart.on(i=>{var r,o;e.edgeUpdateStart(i),(o=(r=t.events)==null?void 0:r.updateStart)==null||o.call(r,i)}),n.update.on(i=>{var r,o;e.edgeUpdate(i),(o=(r=t.events)==null?void 0:r.update)==null||o.call(r,i)}),n.updateEnd.on(i=>{var r,o;e.edgeUpdateEnd(i),(o=(r=t.events)==null?void 0:r.updateEnd)==null||o.call(r,i)}),Object.entries(n).reduce((i,[r,o])=>(i.emit[r]=o.trigger,i.on[r]=o.on,i),{emit:{},on:{}})}function DP(){const{viewport:t,snapGrid:e,snapToGrid:n,vueFlowRef:i}=Ft();return r=>{var o;const s=((o=i.value)==null?void 0:o.getBoundingClientRect())??{left:0,top:0},a=_P(r)?r.sourceEvent:r,{x:l,y:c}=li(a,s),u=ta({x:l,y:c},t.value),{x:f,y:d}=n.value?Cc(u,e.value):u;return{xSnapped:f,ySnapped:d,...u}}}function el(){return!0}function s_({handleId:t,nodeId:e,type:n,isValidConnection:i,edgeUpdaterType:r,onEdgeUpdate:o,onEdgeUpdateEnd:s}){const{id:a,vueFlowRef:l,connectionMode:c,connectionRadius:u,connectOnClick:f,connectionClickStartHandle:d,nodesConnectable:h,autoPanOnConnect:g,autoPanSpeed:x,findNode:m,panBy:p,startConnection:M,updateConnection:y,endConnection:b,emits:L,viewport:B,edges:z,nodes:v,isValidConnection:_,nodeLookup:D}=Ft();let I=null,C=!1,X=null;function E(T){var P;const k=lt(n)==="target",Y=uh(T),q=Mm(T.target),H=T.currentTarget;if(H&&(Y&&T.button===0||!Y)){let K=function(te){R=li(te,Re),Z=MP(ta(R,B.value,!1,[1,1]),u.value,D.value,G),N||(O(),N=!0);const A=Lm(te,{handle:Z,connectionMode:c.value,fromNodeId:lt(e),fromHandleId:lt(t),fromType:k?"target":"source",isValidConnection:he,doc:q,lib:"vue",flowId:a,nodeLookup:D.value},z.value,v.value,m,D.value);X=A.handleDomNode,I=A.connection,C=wP(!!Z,A.isValid);const S={...J,isValid:C,to:A.toHandle&&C?ea({x:A.toHandle.x,y:A.toHandle.y},B.value):R,toHandle:A.toHandle,toPosition:C&&A.toHandle?A.toHandle.position:cd[G.position],toNode:A.toHandle?D.value.get(A.toHandle.nodeId):null};if(C&&Z&&J?.toHandle&&S.toHandle&&J.toHandle.type===S.toHandle.type&&J.toHandle.nodeId===S.toHandle.nodeId&&J.toHandle.id===S.toHandle.id&&J.to.x===S.to.x&&J.to.y===S.to.y)return;const W=Z??A.toHandle;if(y(W&&C?ea({x:W.x,y:W.y},B.value):R,W,EP(!!W,C)),J=S,!Z&&!C&&!X)return ku($);I&&I.source!==I.target&&X&&(ku($),$=X,X.classList.add("connecting","vue-flow__handle-connecting"),X.classList.toggle("valid",!!C),X.classList.toggle("vue-flow__handle-valid",!!C))},le=function(te){"touches"in te&&te.touches.length>0||((Z||X)&&I&&C&&(o?o(te,I):L.connect(I)),L.connectEnd(te),r&&s?.(te),ku($),cancelAnimationFrame(ne),b(te),N=!1,C=!1,I=null,X=null,q.removeEventListener("mousemove",K),q.removeEventListener("mouseup",le),q.removeEventListener("touchmove",K),q.removeEventListener("touchend",le))};const ge=m(lt(e));let he=lt(i)||_.value||el;!he&&ge&&(he=(k?ge.isValidSourcePos:ge.isValidTargetPos)||el);let Z,ne=0;const{x:de,y:Me}=li(T),xe=e_(lt(r),H),Re=(P=l.value)==null?void 0:P.getBoundingClientRect();if(!Re||!xe)return;const V=t_(lt(e),xe,lt(t),D.value,c.value);if(!V)return;let $,R=li(T,Re),N=!1;const O=()=>{if(!g.value)return;const[te,A]=J0(R,Re,x.value);p({x:te,y:A}),ne=requestAnimationFrame(O)},G={...V,nodeId:lt(e),type:xe,position:V.position},w=D.value.get(lt(e)),Q={inProgress:!0,isValid:null,from:es(w,G,Ve.Left,!0),fromHandle:G,fromPosition:G.position,fromNode:w,to:R,toHandle:null,toPosition:cd[G.position],toNode:null};M({nodeId:lt(e),id:lt(t),type:xe,position:H?.getAttribute("data-handlepos")||Ve.Top,...R},{x:de-Re.left,y:Me-Re.top}),L.connectStart({event:T,nodeId:lt(e),handleId:lt(t),handleType:xe});let J=Q;q.addEventListener("mousemove",K),q.addEventListener("mouseup",le),q.addEventListener("touchmove",K),q.addEventListener("touchend",le)}}function U(T){var P,k;if(!f.value)return;const Y=lt(n)==="target";if(!d.value){L.clickConnectStart({event:T,nodeId:lt(e),handleId:lt(t)}),M({nodeId:lt(e),type:lt(n),id:lt(t),position:Ve.Top,...li(T)},void 0,!0);return}let q=lt(i)||_.value||el;const H=m(lt(e));if(!q&&H&&(q=(Y?H.isValidSourcePos:H.isValidTargetPos)||el),H&&(typeof H.connectable>"u"?h.value:H.connectable)===!1)return;const K=Mm(T.target),le=Lm(T,{handle:{nodeId:lt(e),id:lt(t),type:lt(n),position:Ve.Top,...li(T)},connectionMode:c.value,fromNodeId:d.value.nodeId,fromHandleId:d.value.id??null,fromType:d.value.type,isValidConnection:q,doc:K,lib:"vue",flowId:a,nodeLookup:D.value},z.value,v.value,m,D.value),ge=((P=le.connection)==null?void 0:P.source)===((k=le.connection)==null?void 0:k.target);le.isValid&&le.connection&&!ge&&L.connect(le.connection),L.clickConnectEnd(T),b(T,!0)}return{handlePointerDown:E,handleClick:U}}function LP(){return Dn(i_,"")}function a_(t){const e=t??LP()??"",n=Dn(r_,Ke(null)),{findNode:i,edges:r,emits:o}=Ft(),s=i(e);return s||o.error(new Wt(Gt.NODE_NOT_FOUND,e)),{id:e,nodeEl:n,node:s,parentNode:He(()=>i(s.parentNode)),connectedEdges:He(()=>Yr([s],r.value))}}function FP(){return{doubleClick:Oe(),click:Oe(),mouseEnter:Oe(),mouseMove:Oe(),mouseLeave:Oe(),contextMenu:Oe(),dragStart:Oe(),drag:Oe(),dragStop:Oe()}}function UP(t,e){const n=FP();return n.doubleClick.on(i=>{var r,o;e.nodeDoubleClick(i),(o=(r=t.events)==null?void 0:r.doubleClick)==null||o.call(r,i)}),n.click.on(i=>{var r,o;e.nodeClick(i),(o=(r=t.events)==null?void 0:r.click)==null||o.call(r,i)}),n.mouseEnter.on(i=>{var r,o;e.nodeMouseEnter(i),(o=(r=t.events)==null?void 0:r.mouseEnter)==null||o.call(r,i)}),n.mouseMove.on(i=>{var r,o;e.nodeMouseMove(i),(o=(r=t.events)==null?void 0:r.mouseMove)==null||o.call(r,i)}),n.mouseLeave.on(i=>{var r,o;e.nodeMouseLeave(i),(o=(r=t.events)==null?void 0:r.mouseLeave)==null||o.call(r,i)}),n.contextMenu.on(i=>{var r,o;e.nodeContextMenu(i),(o=(r=t.events)==null?void 0:r.contextMenu)==null||o.call(r,i)}),n.dragStart.on(i=>{var r,o;e.nodeDragStart(i),(o=(r=t.events)==null?void 0:r.dragStart)==null||o.call(r,i)}),n.drag.on(i=>{var r,o;e.nodeDrag(i),(o=(r=t.events)==null?void 0:r.drag)==null||o.call(r,i)}),n.dragStop.on(i=>{var r,o;e.nodeDragStop(i),(o=(r=t.events)==null?void 0:r.dragStop)==null||o.call(r,i)}),Object.entries(n).reduce((i,[r,o])=>(i.emit[r]=o.trigger,i.on[r]=o.on,i),{emit:{},on:{}})}function l_(){const{getSelectedNodes:t,nodeExtent:e,updateNodePositions:n,findNode:i,snapGrid:r,snapToGrid:o,nodesDraggable:s,emits:a}=Ft();return(l,c=!1)=>{const u=o.value?r.value[0]:5,f=o.value?r.value[1]:5,d=c?4:1,h=l.x*u*d,g=l.y*f*d,x=[];for(const m of t.value)if(m.draggable||s&&typeof m.draggable>"u"){const p={x:m.computedPosition.x+h,y:m.computedPosition.y+g},{position:M}=ch(m,p,a.error,e.value,m.parentNode?i(m.parentNode):void 0);x.push({id:m.id,position:M,from:m.position,distance:{x:l.x,y:l.y},dimensions:m.dimensions})}n(x,!0,!1)}}const tl=.1,OP=t=>((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2;function dr(){return va("Viewport not initialized yet."),Promise.resolve(!1)}const BP={zoomIn:dr,zoomOut:dr,zoomTo:dr,fitView:dr,setCenter:dr,fitBounds:dr,project:t=>t,screenToFlowCoordinate:t=>t,flowToScreenCoordinate:t=>t,setViewport:dr,setTransform:dr,getViewport:()=>({x:0,y:0,zoom:1}),getTransform:()=>({x:0,y:0,zoom:1}),viewportInitialized:!1};function kP(t){function e(i,r){return new Promise(o=>{t.d3Selection&&t.d3Zoom?t.d3Zoom.interpolate(r?.interpolate==="linear"?Os:vl).scaleBy(Hu(t.d3Selection,r?.duration,r?.ease,()=>{o(!0)}),i):o(!1)})}function n(i,r,o,s){return new Promise(a=>{var l;const{x:c,y:u}=$0({x:-i,y:-r},t.translateExtent),f=Qo.translate(-c,-u).scale(o);t.d3Selection&&t.d3Zoom?(l=t.d3Zoom)==null||l.interpolate(s?.interpolate==="linear"?Os:vl).transform(Hu(t.d3Selection,s?.duration,s?.ease,()=>{a(!0)}),f):a(!1)})}return He(()=>t.d3Zoom&&t.d3Selection&&t.dimensions.width&&t.dimensions.height?{viewportInitialized:!0,zoomIn:r=>e(1.2,r),zoomOut:r=>e(1/1.2,r),zoomTo:(r,o)=>new Promise(s=>{t.d3Selection&&t.d3Zoom?t.d3Zoom.interpolate(o?.interpolate==="linear"?Os:vl).scaleTo(Hu(t.d3Selection,o?.duration,o?.ease,()=>{s(!0)}),r):s(!1)}),setViewport:(r,o)=>n(r.x,r.y,r.zoom,o),setTransform:(r,o)=>n(r.x,r.y,r.zoom,o),getViewport:()=>({x:t.viewport.x,y:t.viewport.y,zoom:t.viewport.zoom}),getTransform:()=>({x:t.viewport.x,y:t.viewport.y,zoom:t.viewport.zoom}),fitView:(r={padding:tl,includeHiddenNodes:!1,duration:0})=>{var o,s;const a=[];for(const d of t.nodes)d.dimensions.width&&d.dimensions.height&&(r?.includeHiddenNodes||!d.hidden)&&(!((o=r.nodes)!=null&&o.length)||(s=r.nodes)!=null&&s.length&&r.nodes.includes(d.id))&&a.push(d);if(!a.length)return Promise.resolve(!1);const l=lh(a),{x:c,y:u,zoom:f}=Em(l,t.dimensions.width,t.dimensions.height,r.minZoom??t.minZoom,r.maxZoom??t.maxZoom,r.padding??tl);return n(c,u,f,r)},setCenter:(r,o,s)=>{const a=typeof s?.zoom<"u"?s.zoom:t.maxZoom,l=t.dimensions.width/2-r*a,c=t.dimensions.height/2-o*a;return n(l,c,a,s)},fitBounds:(r,o={padding:tl})=>{const{x:s,y:a,zoom:l}=Em(r,t.dimensions.width,t.dimensions.height,t.minZoom,t.maxZoom,o.padding??tl);return n(s,a,l,o)},project:r=>ta(r,t.viewport,t.snapToGrid,t.snapGrid),screenToFlowCoordinate:r=>{if(t.vueFlowRef){const{x:o,y:s}=t.vueFlowRef.getBoundingClientRect(),a={x:r.x-o,y:r.y-s};return ta(a,t.viewport,t.snapToGrid,t.snapGrid)}return{x:0,y:0}},flowToScreenCoordinate:r=>{if(t.vueFlowRef){const{x:o,y:s}=t.vueFlowRef.getBoundingClientRect(),a={x:r.x+o,y:r.y+s};return ea(a,t.viewport)}return{x:0,y:0}}}:BP)}function Hu(t,e=0,n=OP,i=()=>{}){const r=typeof e=="number"&&e>0;return r||i(),r?t.transition().duration(e).ease(n).on("end",i):t}function zP(t,e,n){const i=lc(!0);return i.run(()=>{const r=()=>{i.run(()=>{let x,m,p=!!(n.nodes.value.length||n.edges.value.length);x=Io([t.modelValue,()=>{var M,y;return(y=(M=t.modelValue)==null?void 0:M.value)==null?void 0:y.length}],([M])=>{M&&Array.isArray(M)&&(m?.pause(),n.setElements(M),!m&&!p&&M.length?p=!0:m?.resume())}),m=Io([n.nodes,n.edges,()=>n.edges.value.length,()=>n.nodes.value.length],([M,y])=>{var b;(b=t.modelValue)!=null&&b.value&&Array.isArray(t.modelValue.value)&&(x?.pause(),t.modelValue.value=[...M,...y],Nn(()=>{x?.resume()}))},{immediate:p}),Ps(()=>{x?.stop(),m?.stop()})})},o=()=>{i.run(()=>{let x,m,p=!!n.nodes.value.length;x=Io([t.nodes,()=>{var M,y;return(y=(M=t.nodes)==null?void 0:M.value)==null?void 0:y.length}],([M])=>{M&&Array.isArray(M)&&(m?.pause(),n.setNodes(M),!m&&!p&&M.length?p=!0:m?.resume())}),m=Io([n.nodes,()=>n.nodes.value.length],([M])=>{var y;(y=t.nodes)!=null&&y.value&&Array.isArray(t.nodes.value)&&(x?.pause(),t.nodes.value=[...M],Nn(()=>{x?.resume()}))},{immediate:p}),Ps(()=>{x?.stop(),m?.stop()})})},s=()=>{i.run(()=>{let x,m,p=!!n.edges.value.length;x=Io([t.edges,()=>{var M,y;return(y=(M=t.edges)==null?void 0:M.value)==null?void 0:y.length}],([M])=>{M&&Array.isArray(M)&&(m?.pause(),n.setEdges(M),!m&&!p&&M.length?p=!0:m?.resume())}),m=Io([n.edges,()=>n.edges.value.length],([M])=>{var y;(y=t.edges)!=null&&y.value&&Array.isArray(t.edges.value)&&(x?.pause(),t.edges.value=[...M],Nn(()=>{x?.resume()}))},{immediate:p}),Ps(()=>{x?.stop(),m?.stop()})})},a=()=>{i.run(()=>{ft(()=>e.maxZoom,()=>{e.maxZoom&&Ht(e.maxZoom)&&n.setMaxZoom(e.maxZoom)},{immediate:!0})})},l=()=>{i.run(()=>{ft(()=>e.minZoom,()=>{e.minZoom&&Ht(e.minZoom)&&n.setMinZoom(e.minZoom)},{immediate:!0})})},c=()=>{i.run(()=>{ft(()=>e.translateExtent,()=>{e.translateExtent&&Ht(e.translateExtent)&&n.setTranslateExtent(e.translateExtent)},{immediate:!0})})},u=()=>{i.run(()=>{ft(()=>e.nodeExtent,()=>{e.nodeExtent&&Ht(e.nodeExtent)&&n.setNodeExtent(e.nodeExtent)},{immediate:!0})})},f=()=>{i.run(()=>{ft(()=>e.applyDefault,()=>{Ht(e.applyDefault)&&(n.applyDefault.value=e.applyDefault)},{immediate:!0})})},d=()=>{i.run(()=>{const x=async m=>{let p=m;typeof e.autoConnect=="function"&&(p=await e.autoConnect(m)),p!==!1&&n.addEdges([p])};ft(()=>e.autoConnect,()=>{Ht(e.autoConnect)&&(n.autoConnect.value=e.autoConnect)},{immediate:!0}),ft(n.autoConnect,(m,p,M)=>{m?n.onConnect(x):n.hooks.value.connect.off(x),M(()=>{n.hooks.value.connect.off(x)})},{immediate:!0})})},h=()=>{const x=["id","modelValue","translateExtent","nodeExtent","edges","nodes","maxZoom","minZoom","applyDefault","autoConnect"];for(const m of Object.keys(e)){const p=m;if(!x.includes(p)){const M=Tt(()=>e[p]),y=n[p];Dt(y)&&i.run(()=>{ft(M,b=>{Ht(b)&&(y.value=b)},{immediate:!0})})}}};r(),o(),s(),l(),a(),c(),u(),f(),d(),h()}),()=>i.stop()}function VP(){return{edgesChange:Oe(),nodesChange:Oe(),nodeDoubleClick:Oe(),nodeClick:Oe(),nodeMouseEnter:Oe(),nodeMouseMove:Oe(),nodeMouseLeave:Oe(),nodeContextMenu:Oe(),nodeDragStart:Oe(),nodeDrag:Oe(),nodeDragStop:Oe(),nodesInitialized:Oe(),miniMapNodeClick:Oe(),miniMapNodeDoubleClick:Oe(),miniMapNodeMouseEnter:Oe(),miniMapNodeMouseMove:Oe(),miniMapNodeMouseLeave:Oe(),connect:Oe(),connectStart:Oe(),connectEnd:Oe(),clickConnectStart:Oe(),clickConnectEnd:Oe(),paneReady:Oe(),init:Oe(),move:Oe(),moveStart:Oe(),moveEnd:Oe(),selectionDragStart:Oe(),selectionDrag:Oe(),selectionDragStop:Oe(),selectionContextMenu:Oe(),selectionStart:Oe(),selectionEnd:Oe(),viewportChangeStart:Oe(),viewportChange:Oe(),viewportChangeEnd:Oe(),paneScroll:Oe(),paneClick:Oe(),paneContextMenu:Oe(),paneMouseEnter:Oe(),paneMouseMove:Oe(),paneMouseLeave:Oe(),edgeContextMenu:Oe(),edgeMouseEnter:Oe(),edgeMouseMove:Oe(),edgeMouseLeave:Oe(),edgeDoubleClick:Oe(),edgeClick:Oe(),edgeUpdateStart:Oe(),edgeUpdate:Oe(),edgeUpdateEnd:Oe(),updateNodeInternals:Oe(),error:Oe(t=>va(t.message))}}function HP(t,e){const n=nr();qg(()=>{for(const[r,o]of Object.entries(e.value)){const s=a=>{t(r,a)};o.setEmitter(s),Ks(o.removeEmitter),o.setHasEmitListeners(()=>i(r)),Ks(o.removeHasEmitListeners)}});function i(r){var o;const s=GP(r);return!!((o=n?.vnode.props)==null?void 0:o[s])}}function GP(t){const[e,...n]=t.split(":");return`on${e.replace(/(?:^|-)(\w)/g,(r,o)=>o.toUpperCase())}${n.length?`:${n.join(":")}`:""}`}function c_(){return{vueFlowRef:null,viewportRef:null,nodes:[],edges:[],connectionLookup:new Map,nodeTypes:{},edgeTypes:{},initialized:!1,dimensions:{width:0,height:0},viewport:{x:0,y:0,zoom:1},d3Zoom:null,d3Selection:null,d3ZoomHandler:null,minZoom:.5,maxZoom:2,translateExtent:[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],nodeExtent:[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],selectionMode:ah.Full,paneDragging:!1,preventScrolling:!0,zoomOnScroll:!0,zoomOnPinch:!0,zoomOnDoubleClick:!0,panOnScroll:!1,panOnScrollSpeed:.5,panOnScrollMode:Bs.Free,paneClickDistance:0,panOnDrag:!0,edgeUpdaterRadius:10,onlyRenderVisibleElements:!1,defaultViewport:{x:0,y:0,zoom:1},nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,defaultMarkerColor:"#b1b1b7",connectionLineStyle:{},connectionLineType:null,connectionLineOptions:{type:Xr.Bezier,style:{}},connectionMode:Rr.Loose,connectionStartHandle:null,connectionEndHandle:null,connectionClickStartHandle:null,connectionPosition:{x:Number.NaN,y:Number.NaN},connectionRadius:20,connectOnClick:!0,connectionStatus:null,isValidConnection:null,snapGrid:[15,15],snapToGrid:!1,edgesUpdatable:!1,edgesFocusable:!0,nodesFocusable:!0,nodesConnectable:!0,nodesDraggable:!0,nodeDragThreshold:1,elementsSelectable:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,selectionKeyCode:"Shift",multiSelectionKeyCode:ia()?"Meta":"Control",zoomActivationKeyCode:ia()?"Meta":"Control",deleteKeyCode:"Backspace",panActivationKeyCode:"Space",hooks:VP(),applyDefault:!0,autoConnect:!1,fitViewOnInit:!1,fitViewOnInitDone:!1,noDragClassName:"nodrag",noWheelClassName:"nowheel",noPanClassName:"nopan",defaultEdgeOptions:void 0,elevateEdgesOnSelect:!1,elevateNodesOnSelect:!0,autoPanOnNodeDrag:!0,autoPanOnConnect:!0,autoPanSpeed:15,disableKeyboardA11y:!1,ariaLiveMessage:""}}const $P=["id","vueFlowRef","viewportRef","initialized","modelValue","nodes","edges","maxZoom","minZoom","translateExtent","hooks","defaultEdgeOptions"];function WP(t,e,n){const i=kP(t),r=R=>{const N=R??[];t.hooks.updateNodeInternals.trigger(N)},o=R=>sP(R,t.nodes,t.edges),s=R=>oP(R,t.nodes,t.edges),a=R=>Yr(R,t.edges),l=({id:R,type:N,nodeId:O})=>{var G;const w=R?`-${N}-${R}`:`-${N}`;return Array.from(((G=t.connectionLookup.get(`${O}${w}`))==null?void 0:G.values())??[])},c=R=>{if(R)return e.value.get(R)},u=R=>{if(R)return n.value.get(R)},f=(R,N,O)=>{var G,w;const ie=[];for(const Q of R){const J={id:Q.id,type:"position",dragging:O,from:Q.from};if(N&&(J.position=Q.position,Q.parentNode)){const te=c(Q.parentNode);J.position={x:J.position.x-(((G=te?.computedPosition)==null?void 0:G.x)??0),y:J.position.y-(((w=te?.computedPosition)==null?void 0:w.y)??0)}}ie.push(J)}ie?.length&&t.hooks.nodesChange.trigger(ie)},d=R=>{if(!t.vueFlowRef)return;const N=t.vueFlowRef.querySelector(".vue-flow__transformationpane");if(!N)return;const O=window.getComputedStyle(N),{m22:G}=new window.DOMMatrixReadOnly(O.transform),w=[];for(const ie of R){const Q=ie,J=c(Q.id);if(J){const te=Ac(Q.nodeElement);if(!!(te.width&&te.height&&(J.dimensions.width!==te.width||J.dimensions.height!==te.height||Q.forceUpdate))){const S=Q.nodeElement.getBoundingClientRect();J.dimensions=te,J.handleBounds.source=Fm("source",Q.nodeElement,S,G,J.id),J.handleBounds.target=Fm("target",Q.nodeElement,S,G,J.id),w.push({id:J.id,type:"dimensions",dimensions:te})}}}!t.fitViewOnInitDone&&t.fitViewOnInit&&i.value.fitView().then(()=>{t.fitViewOnInitDone=!0}),w.length&&t.hooks.nodesChange.trigger(w)},h=(R,N)=>{const O=new Set,G=new Set;for(const Q of R)io(Q)?O.add(Q.id):Pr(Q)&&G.add(Q.id);const w=_r(e.value,O,!0),ie=_r(n.value,G);if(t.multiSelectionActive){for(const Q of O)w.push(pr(Q,N));for(const Q of G)ie.push(pr(Q,N))}w.length&&t.hooks.nodesChange.trigger(w),ie.length&&t.hooks.edgesChange.trigger(ie)},g=R=>{if(t.multiSelectionActive){const N=R.map(O=>pr(O.id,!0));t.hooks.nodesChange.trigger(N);return}t.hooks.nodesChange.trigger(_r(e.value,new Set(R.map(N=>N.id)),!0)),t.hooks.edgesChange.trigger(_r(n.value))},x=R=>{if(t.multiSelectionActive){const N=R.map(O=>pr(O.id,!0));t.hooks.edgesChange.trigger(N);return}t.hooks.edgesChange.trigger(_r(n.value,new Set(R.map(N=>N.id)))),t.hooks.nodesChange.trigger(_r(e.value,new Set,!0))},m=R=>{h(R,!0)},p=R=>{const O=(R||t.nodes).map(G=>(G.selected=!1,pr(G.id,!1)));t.hooks.nodesChange.trigger(O)},M=R=>{const O=(R||t.edges).map(G=>(G.selected=!1,pr(G.id,!1)));t.hooks.edgesChange.trigger(O)},y=R=>{if(!R||!R.length)return h([],!1);const N=R.reduce((O,G)=>{const w=pr(G.id,!1);return io(G)?O.nodes.push(w):O.edges.push(w),O},{nodes:[],edges:[]});N.nodes.length&&t.hooks.nodesChange.trigger(N.nodes),N.edges.length&&t.hooks.edgesChange.trigger(N.edges)},b=R=>{var N;(N=t.d3Zoom)==null||N.scaleExtent([R,t.maxZoom]),t.minZoom=R},L=R=>{var N;(N=t.d3Zoom)==null||N.scaleExtent([t.minZoom,R]),t.maxZoom=R},B=R=>{var N;(N=t.d3Zoom)==null||N.translateExtent(R),t.translateExtent=R},z=R=>{t.nodeExtent=R,r()},v=R=>{var N;(N=t.d3Zoom)==null||N.clickDistance(R)},_=R=>{t.nodesDraggable=R,t.nodesConnectable=R,t.elementsSelectable=R},D=R=>{const N=R instanceof Function?R(t.nodes):R;!t.initialized&&!N.length||(t.nodes=Um(N,c,t.hooks.error.trigger))},I=R=>{const N=R instanceof Function?R(t.edges):R;if(!t.initialized&&!N.length)return;const O=Vu(N,t.isValidConnection,c,u,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges);zu(t.connectionLookup,n.value,O),t.edges=O},C=R=>{const N=R instanceof Function?R([...t.nodes,...t.edges]):R;!t.initialized&&!N.length||(D(N.filter(io)),I(N.filter(Pr)))},X=R=>{let N=R instanceof Function?R(t.nodes):R;N=Array.isArray(N)?N:[N];const O=Um(N,c,t.hooks.error.trigger),G=[];for(const w of O)G.push(Am(w));G.length&&t.hooks.nodesChange.trigger(G)},E=R=>{let N=R instanceof Function?R(t.edges):R;N=Array.isArray(N)?N:[N];const O=Vu(N,t.isValidConnection,c,u,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges),G=[];for(const w of O)G.push(Am(w));G.length&&t.hooks.edgesChange.trigger(G)},U=(R,N=!0,O=!1)=>{const G=R instanceof Function?R(t.nodes):R,w=Array.isArray(G)?G:[G],ie=[],Q=[];function J(A){const S=a(A);for(const W of S)(!Ht(W.deletable)||W.deletable)&&Q.push(Rm(W.id,W.source,W.target,W.sourceHandle,W.targetHandle))}function te(A){const S=[];for(const W of t.nodes)W.parentNode===A&&S.push(W);if(S.length){for(const W of S)ie.push(Cm(W.id));N&&J(S);for(const W of S)te(W.id)}}for(const A of w){const S=typeof A=="string"?c(A):A;S&&(Ht(S.deletable)&&!S.deletable||(ie.push(Cm(S.id)),N&&J([S]),O&&te(S.id)))}Q.length&&t.hooks.edgesChange.trigger(Q),ie.length&&t.hooks.nodesChange.trigger(ie)},T=R=>{const N=R instanceof Function?R(t.edges):R,O=Array.isArray(N)?N:[N],G=[];for(const w of O){const ie=typeof w=="string"?u(w):w;ie&&(Ht(ie.deletable)&&!ie.deletable||G.push(Rm(typeof w=="string"?w:w.id,ie.source,ie.target,ie.sourceHandle,ie.targetHandle)))}t.hooks.edgesChange.trigger(G)},P=(R,N,O=!0)=>{const G=u(R.id);if(!G)return!1;const w=t.edges.indexOf(G),ie=CP(R,N,G,O,t.hooks.error.trigger);if(ie){const[Q]=Vu([ie],t.isValidConnection,c,u,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges);return t.edges=t.edges.map((J,te)=>te===w?Q:J),zu(t.connectionLookup,n.value,[Q]),Q}return!1},k=(R,N,O={replace:!1})=>{const G=u(R);if(!G)return;const w=typeof N=="function"?N(G):N;G.data=O.replace?w:{...G.data,...w}},Y=R=>Tm(R,t.nodes),q=R=>{const N=Tm(R,t.edges);return zu(t.connectionLookup,n.value,N),N},H=(R,N,O={replace:!1})=>{const G=c(R);if(!G)return;const w=typeof N=="function"?N(G):N;O.replace?t.nodes.splice(t.nodes.indexOf(G),1,w):Object.assign(G,w)},K=(R,N,O={replace:!1})=>{const G=c(R);if(!G)return;const w=typeof N=="function"?N(G):N;G.data=O.replace?w:{...G.data,...w}},le=(R,N,O=!1)=>{O?t.connectionClickStartHandle=R:t.connectionStartHandle=R,t.connectionEndHandle=null,t.connectionStatus=null,N&&(t.connectionPosition=N)},ge=(R,N=null,O=null)=>{t.connectionStartHandle&&(t.connectionPosition=R,t.connectionEndHandle=N,t.connectionStatus=O)},he=(R,N)=>{t.connectionPosition={x:Number.NaN,y:Number.NaN},t.connectionEndHandle=null,t.connectionStatus=null,N?t.connectionClickStartHandle=null:t.connectionStartHandle=null},Z=R=>{const N=iP(R),O=N?null:Ts(R)?R:c(R.id);return!N&&!O?[null,null,N]:[N?R:ql(O),O,N]},ne=(R,N=!0,O=t.nodes)=>{const[G,w,ie]=Z(R);if(!G)return[];const Q=[];for(const J of O||t.nodes){if(!ie&&(J.id===w.id||!J.computedPosition))continue;const te=ql(J),A=Kl(te,G);(N&&A>0||A>=te.width*te.height||A>=Number(G.width)*Number(G.height))&&Q.push(J)}return Q},de=(R,N,O=!0)=>{const[G]=Z(R);if(!G)return!1;const w=Kl(G,N);return O&&w>0||w>=Number(G.width)*Number(G.height)},Me=R=>{const{viewport:N,dimensions:O,d3Zoom:G,d3Selection:w,translateExtent:ie}=t;if(!G||!w||!R.x&&!R.y)return!1;const Q=Qo.translate(N.x+R.x,N.y+R.y).scale(N.zoom),J=[[0,0],[O.width,O.height]],te=G.constrain()(Q,J,ie),A=t.viewport.x!==te.x||t.viewport.y!==te.y||t.viewport.zoom!==te.k;return G.transform(w,te),A},xe=R=>{const N=R instanceof Function?R(t):R,O=["d3Zoom","d3Selection","d3ZoomHandler","viewportRef","vueFlowRef","dimensions","hooks"];Ht(N.defaultEdgeOptions)&&(t.defaultEdgeOptions=N.defaultEdgeOptions);const G=N.modelValue||N.nodes||N.edges?[]:void 0;G&&(N.modelValue&&G.push(...N.modelValue),N.nodes&&G.push(...N.nodes),N.edges&&G.push(...N.edges),C(G));const w=()=>{Ht(N.maxZoom)&&L(N.maxZoom),Ht(N.minZoom)&&b(N.minZoom),Ht(N.translateExtent)&&B(N.translateExtent)};for(const ie of Object.keys(N)){const Q=ie,J=N[Q];![...$P,...O].includes(Q)&&Ht(J)&&(t[Q]=J)}jf(()=>t.d3Zoom).not.toBeNull().then(w),t.initialized||(t.initialized=!0)};return{updateNodePositions:f,updateNodeDimensions:d,setElements:C,setNodes:D,setEdges:I,addNodes:X,addEdges:E,removeNodes:U,removeEdges:T,findNode:c,findEdge:u,updateEdge:P,updateEdgeData:k,updateNode:H,updateNodeData:K,applyEdgeChanges:q,applyNodeChanges:Y,addSelectedElements:m,addSelectedNodes:g,addSelectedEdges:x,setMinZoom:b,setMaxZoom:L,setTranslateExtent:B,setNodeExtent:z,setPaneClickDistance:v,removeSelectedElements:y,removeSelectedNodes:p,removeSelectedEdges:M,startConnection:le,updateConnection:ge,endConnection:he,setInteractive:_,setState:xe,getIntersectingNodes:ne,getIncomers:o,getOutgoers:s,getConnectedEdges:a,getHandleConnections:l,isNodeIntersecting:de,panBy:Me,fitView:R=>i.value.fitView(R),zoomIn:R=>i.value.zoomIn(R),zoomOut:R=>i.value.zoomOut(R),zoomTo:(R,N)=>i.value.zoomTo(R,N),setViewport:(R,N)=>i.value.setViewport(R,N),setTransform:(R,N)=>i.value.setTransform(R,N),getViewport:()=>i.value.getViewport(),getTransform:()=>i.value.getTransform(),setCenter:(R,N,O)=>i.value.setCenter(R,N,O),fitBounds:(R,N)=>i.value.fitBounds(R,N),project:R=>i.value.project(R),screenToFlowCoordinate:R=>i.value.screenToFlowCoordinate(R),flowToScreenCoordinate:R=>i.value.flowToScreenCoordinate(R),toObject:()=>{const R=[],N=[];for(const O of t.nodes){const{computedPosition:G,handleBounds:w,selected:ie,dimensions:Q,isParent:J,resizing:te,dragging:A,events:S,...W}=O;R.push(W)}for(const O of t.edges){const{selected:G,sourceNode:w,targetNode:ie,events:Q,...J}=O;N.push(J)}return JSON.parse(JSON.stringify({nodes:R,edges:N,position:[t.viewport.x,t.viewport.y],zoom:t.viewport.zoom,viewport:t.viewport}))},fromObject:R=>new Promise(N=>{const{nodes:O,edges:G,position:w,zoom:ie,viewport:Q}=R;O&&D(O),G&&I(G);const[J,te]=Q?.x&&Q?.y?[Q.x,Q.y]:w??[null,null];if(J&&te){const A=Q?.zoom||ie||t.viewport.zoom;return jf(()=>i.value.viewportInitialized).toBe(!0).then(()=>{i.value.setViewport({x:J,y:te,zoom:A}).then(()=>{N(!0)})})}else N(!0)}),updateNodeInternals:r,viewportHelper:i,$reset:()=>{const R=c_();if(t.edges=[],t.nodes=[],t.d3Zoom&&t.d3Selection){const N=Qo.translate(R.defaultViewport.x??0,R.defaultViewport.y??0).scale(co(R.defaultViewport.zoom??1,R.minZoom,R.maxZoom)),O=t.viewportRef.getBoundingClientRect(),G=[[0,0],[O.width,O.height]],w=t.d3Zoom.constrain()(N,G,R.translateExtent);t.d3Zoom.transform(t.d3Selection,w)}xe(R)},$destroy:()=>{}}}const XP=["data-id","data-handleid","data-nodeid","data-handlepos"],YP={name:"Handle",compatConfig:{MODE:3}},ro=Lt({...YP,props:{id:{default:null},type:{},position:{default:()=>Ve.Top},isValidConnection:{type:Function},connectable:{type:[Boolean,Number,String,Function],default:void 0},connectableStart:{type:Boolean,default:!0},connectableEnd:{type:Boolean,default:!0}},setup(t,{expose:e}){const n=cy(t,["position","connectable","connectableStart","connectableEnd","id"]),i=Tt(()=>n.type??"source"),r=Tt(()=>n.isValidConnection??null),{id:o,connectionStartHandle:s,connectionClickStartHandle:a,connectionEndHandle:l,vueFlowRef:c,nodesConnectable:u,noDragClassName:f,noPanClassName:d}=Ft(),{id:h,node:g,nodeEl:x,connectedEdges:m}=a_(),p=Ke(),M=Tt(()=>typeof t.connectableStart<"u"?t.connectableStart:!0),y=Tt(()=>typeof t.connectableEnd<"u"?t.connectableEnd:!0),b=Tt(()=>{var I,C,X,E,U,T;return((I=s.value)==null?void 0:I.nodeId)===h&&((C=s.value)==null?void 0:C.id)===t.id&&((X=s.value)==null?void 0:X.type)===i.value||((E=l.value)==null?void 0:E.nodeId)===h&&((U=l.value)==null?void 0:U.id)===t.id&&((T=l.value)==null?void 0:T.type)===i.value}),L=Tt(()=>{var I,C,X;return((I=a.value)==null?void 0:I.nodeId)===h&&((C=a.value)==null?void 0:C.id)===t.id&&((X=a.value)==null?void 0:X.type)===i.value}),{handlePointerDown:B,handleClick:z}=s_({nodeId:h,handleId:t.id,isValidConnection:r,type:i}),v=He(()=>typeof t.connectable=="string"&&t.connectable==="single"?!m.value.some(I=>{const C=I[`${i.value}Handle`];return I[i.value]!==h?!1:C?C===t.id:!0}):typeof t.connectable=="number"?m.value.filter(I=>{const C=I[`${i.value}Handle`];return I[i.value]!==h?!1:C?C===t.id:!0}).length<t.connectable:typeof t.connectable=="function"?t.connectable(g,m.value):Ht(t.connectable)?t.connectable:u.value);Kn(()=>{var I;if(!g.dimensions.width||!g.dimensions.height)return;const C=(I=g.handleBounds[i.value])==null?void 0:I.find(Y=>Y.id===t.id);if(!c.value||C)return;const X=c.value.querySelector(".vue-flow__transformationpane");if(!x.value||!p.value||!X||!t.id)return;const E=x.value.getBoundingClientRect(),U=p.value.getBoundingClientRect(),T=window.getComputedStyle(X),{m22:P}=new window.DOMMatrixReadOnly(T.transform),k={id:t.id,position:t.position,x:(U.left-E.left)/P,y:(U.top-E.top)/P,type:i.value,nodeId:h,...Ac(p.value)};g.handleBounds[i.value]=[...g.handleBounds[i.value]??[],k]});function _(I){const C=uh(I);v.value&&M.value&&(C&&I.button===0||!C)&&B(I)}function D(I){!h||!a.value&&!M.value||v.value&&z(I)}return e({handleClick:z,handlePointerDown:B,onClick:D,onPointerDown:_}),(I,C)=>(ye(),Te("div",{ref_key:"handle",ref:p,"data-id":`${pe(o)}-${pe(h)}-${t.id}-${i.value}`,"data-handleid":t.id,"data-nodeid":pe(h),"data-handlepos":I.position,class:zt(["vue-flow__handle",[`vue-flow__handle-${I.position}`,`vue-flow__handle-${t.id}`,pe(f),pe(d),i.value,{connectable:v.value,connecting:L.value,connectablestart:M.value,connectableend:y.value,connectionindicator:v.value&&(M.value&&!b.value||y.value&&b.value)}]]),onMousedown:_,onTouchstartPassive:_,onClick:D},[Wn(I.$slots,"default",{id:I.id})],42,XP))}}),Pc=function({sourcePosition:t=Ve.Bottom,targetPosition:e=Ve.Top,label:n,connectable:i=!0,isValidTargetPos:r,isValidSourcePos:o,data:s}){const a=s.label??n;return[_t(ro,{type:"target",position:e,connectable:i,isValidConnection:r}),typeof a!="string"&&a?_t(a):_t(dt,[a]),_t(ro,{type:"source",position:t,connectable:i,isValidConnection:o})]};Pc.props=["sourcePosition","targetPosition","label","isValidTargetPos","isValidSourcePos","connectable","data"];Pc.inheritAttrs=!1;Pc.compatConfig={MODE:3};const qP=Pc,Ic=function({targetPosition:t=Ve.Top,label:e,connectable:n=!0,isValidTargetPos:i,data:r}){const o=r.label??e;return[_t(ro,{type:"target",position:t,connectable:n,isValidConnection:i}),typeof o!="string"&&o?_t(o):_t(dt,[o])]};Ic.props=["targetPosition","label","isValidTargetPos","connectable","data"];Ic.inheritAttrs=!1;Ic.compatConfig={MODE:3};const KP=Ic,Nc=function({sourcePosition:t=Ve.Bottom,label:e,connectable:n=!0,isValidSourcePos:i,data:r}){const o=r.label??e;return[typeof o!="string"&&o?_t(o):_t(dt,[o]),_t(ro,{type:"source",position:t,connectable:n,isValidConnection:i})]};Nc.props=["sourcePosition","label","isValidSourcePos","connectable","data"];Nc.inheritAttrs=!1;Nc.compatConfig={MODE:3};const ZP=Nc,jP=["transform"],JP=["width","height","x","y","rx","ry"],QP=["y"],eI={name:"EdgeText",compatConfig:{MODE:3}},tI=Lt({...eI,props:{x:{},y:{},label:{},labelStyle:{default:()=>({})},labelShowBg:{type:Boolean,default:!0},labelBgStyle:{default:()=>({})},labelBgPadding:{default:()=>[2,4]},labelBgBorderRadius:{default:2}},setup(t){const e=Ke({x:0,y:0,width:0,height:0}),n=Ke(null),i=He(()=>`translate(${t.x-e.value.width/2} ${t.y-e.value.height/2})`);Kn(r),ft([()=>t.x,()=>t.y,n,()=>t.label],r);function r(){if(!n.value)return;const o=n.value.getBBox();(o.width!==e.value.width||o.height!==e.value.height)&&(e.value=o)}return(o,s)=>(ye(),Te("g",{transform:i.value,class:"vue-flow__edge-textwrapper"},[o.labelShowBg?(ye(),Te("rect",{key:0,class:"vue-flow__edge-textbg",width:`${e.value.width+2*o.labelBgPadding[0]}px`,height:`${e.value.height+2*o.labelBgPadding[1]}px`,x:-o.labelBgPadding[0],y:-o.labelBgPadding[1],style:Nt(o.labelBgStyle),rx:o.labelBgBorderRadius,ry:o.labelBgBorderRadius},null,12,JP)):ct("",!0),ve("text",$s(o.$attrs,{ref_key:"el",ref:n,class:"vue-flow__edge-text",y:e.value.height/2,dy:"0.3em",style:o.labelStyle}),[Wn(o.$slots,"default",{},()=>[typeof o.label!="string"?(ye(),yn(Jg(o.label),{key:0})):(ye(),Te(dt,{key:1},[kd(Ze(o.label),1)],64))])],16,QP)],8,jP))}}),nI=["id","d","marker-end","marker-start"],iI=["d","stroke-width"],rI={name:"BaseEdge",inheritAttrs:!1,compatConfig:{MODE:3}},Dc=Lt({...rI,props:{id:{},labelX:{},labelY:{},path:{},label:{},markerStart:{},markerEnd:{},interactionWidth:{default:20},labelStyle:{},labelShowBg:{type:Boolean},labelBgStyle:{},labelBgPadding:{},labelBgBorderRadius:{}},setup(t,{expose:e}){const n=Ke(null),i=Ke(null),r=Ke(null),o=Ud();return e({pathEl:n,interactionEl:i,labelEl:r}),(s,a)=>(ye(),Te(dt,null,[ve("path",$s(pe(o),{id:s.id,ref_key:"pathEl",ref:n,d:s.path,class:"vue-flow__edge-path","marker-end":s.markerEnd,"marker-start":s.markerStart}),null,16,nI),s.interactionWidth?(ye(),Te("path",{key:0,ref_key:"interactionEl",ref:i,fill:"none",d:s.path,"stroke-width":s.interactionWidth,"stroke-opacity":0,class:"vue-flow__edge-interaction"},null,8,iI)):ct("",!0),s.label&&s.labelX&&s.labelY?(ye(),yn(tI,{key:1,ref_key:"labelEl",ref:r,x:s.labelX,y:s.labelY,label:s.label,"label-show-bg":s.labelShowBg,"label-bg-style":s.labelBgStyle,"label-bg-padding":s.labelBgPadding,"label-bg-border-radius":s.labelBgBorderRadius,"label-style":s.labelStyle},null,8,["x","y","label","label-show-bg","label-bg-style","label-bg-padding","label-bg-border-radius","label-style"])):ct("",!0)],64))}});function u_({sourceX:t,sourceY:e,targetX:n,targetY:i}){const r=Math.abs(n-t)/2,o=n<t?n+r:n-r,s=Math.abs(i-e)/2,a=i<e?i+s:i-s;return[o,a,r,s]}function f_({sourceX:t,sourceY:e,targetX:n,targetY:i,sourceControlX:r,sourceControlY:o,targetControlX:s,targetControlY:a}){const l=t*.125+r*.375+s*.375+n*.125,c=e*.125+o*.375+a*.375+i*.125,u=Math.abs(l-t),f=Math.abs(c-e);return[l,c,u,f]}function nl(t,e){return t>=0?.5*t:e*25*Math.sqrt(-t)}function zm({pos:t,x1:e,y1:n,x2:i,y2:r,c:o}){let s,a;switch(t){case Ve.Left:s=e-nl(e-i,o),a=n;break;case Ve.Right:s=e+nl(i-e,o),a=n;break;case Ve.Top:s=e,a=n-nl(n-r,o);break;case Ve.Bottom:s=e,a=n+nl(r-n,o);break}return[s,a]}function d_(t){const{sourceX:e,sourceY:n,sourcePosition:i=Ve.Bottom,targetX:r,targetY:o,targetPosition:s=Ve.Top,curvature:a=.25}=t,[l,c]=zm({pos:i,x1:e,y1:n,x2:r,y2:o,c:a}),[u,f]=zm({pos:s,x1:r,y1:o,x2:e,y2:n,c:a}),[d,h,g,x]=f_({sourceX:e,sourceY:n,targetX:r,targetY:o,sourceControlX:l,sourceControlY:c,targetControlX:u,targetControlY:f});return[`M${e},${n} C${l},${c} ${u},${f} ${r},${o}`,d,h,g,x]}function Vm({pos:t,x1:e,y1:n,x2:i,y2:r}){let o,s;switch(t){case Ve.Left:case Ve.Right:o=.5*(e+i),s=n;break;case Ve.Top:case Ve.Bottom:o=e,s=.5*(n+r);break}return[o,s]}function h_(t){const{sourceX:e,sourceY:n,sourcePosition:i=Ve.Bottom,targetX:r,targetY:o,targetPosition:s=Ve.Top}=t,[a,l]=Vm({pos:i,x1:e,y1:n,x2:r,y2:o}),[c,u]=Vm({pos:s,x1:r,y1:o,x2:e,y2:n}),[f,d,h,g]=f_({sourceX:e,sourceY:n,targetX:r,targetY:o,sourceControlX:a,sourceControlY:l,targetControlX:c,targetControlY:u});return[`M${e},${n} C${a},${l} ${c},${u} ${r},${o}`,f,d,h,g]}const Hm={[Ve.Left]:{x:-1,y:0},[Ve.Right]:{x:1,y:0},[Ve.Top]:{x:0,y:-1},[Ve.Bottom]:{x:0,y:1}};function oI({source:t,sourcePosition:e=Ve.Bottom,target:n}){return e===Ve.Left||e===Ve.Right?t.x<n.x?{x:1,y:0}:{x:-1,y:0}:t.y<n.y?{x:0,y:1}:{x:0,y:-1}}function Gm(t,e){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function sI({source:t,sourcePosition:e=Ve.Bottom,target:n,targetPosition:i=Ve.Top,center:r,offset:o}){const s=Hm[e],a=Hm[i],l={x:t.x+s.x*o,y:t.y+s.y*o},c={x:n.x+a.x*o,y:n.y+a.y*o},u=oI({source:l,sourcePosition:e,target:c}),f=u.x!==0?"x":"y",d=u[f];let h,g,x;const m={x:0,y:0},p={x:0,y:0},[M,y,b,L]=u_({sourceX:t.x,sourceY:t.y,targetX:n.x,targetY:n.y});if(s[f]*a[f]===-1){g=r.x??M,x=r.y??y;const z=[{x:g,y:l.y},{x:g,y:c.y}],v=[{x:l.x,y:x},{x:c.x,y:x}];s[f]===d?h=f==="x"?z:v:h=f==="x"?v:z}else{const z=[{x:l.x,y:c.y}],v=[{x:c.x,y:l.y}];if(f==="x"?h=s.x===d?v:z:h=s.y===d?z:v,e===i){const X=Math.abs(t[f]-n[f]);if(X<=o){const E=Math.min(o-1,o-X);s[f]===d?m[f]=(l[f]>t[f]?-1:1)*E:p[f]=(c[f]>n[f]?-1:1)*E}}if(e!==i){const X=f==="x"?"y":"x",E=s[f]===a[X],U=l[X]>c[X],T=l[X]<c[X];(s[f]===1&&(!E&&U||E&&T)||s[f]!==1&&(!E&&T||E&&U))&&(h=f==="x"?z:v)}const _={x:l.x+m.x,y:l.y+m.y},D={x:c.x+p.x,y:c.y+p.y},I=Math.max(Math.abs(_.x-h[0].x),Math.abs(D.x-h[0].x)),C=Math.max(Math.abs(_.y-h[0].y),Math.abs(D.y-h[0].y));I>=C?(g=(_.x+D.x)/2,x=h[0].y):(g=h[0].x,x=(_.y+D.y)/2)}return[[t,{x:l.x+m.x,y:l.y+m.y},...h,{x:c.x+p.x,y:c.y+p.y},n],g,x,b,L]}function aI(t,e,n,i){const r=Math.min(Gm(t,e)/2,Gm(e,n)/2,i),{x:o,y:s}=e;if(t.x===o&&o===n.x||t.y===s&&s===n.y)return`L${o} ${s}`;if(t.y===s){const c=t.x<n.x?-1:1,u=t.y<n.y?1:-1;return`L ${o+r*c},${s}Q ${o},${s} ${o},${s+r*u}`}const a=t.x<n.x?1:-1,l=t.y<n.y?-1:1;return`L ${o},${s+r*l}Q ${o},${s} ${o+r*a},${s}`}function fd(t){const{sourceX:e,sourceY:n,sourcePosition:i=Ve.Bottom,targetX:r,targetY:o,targetPosition:s=Ve.Top,borderRadius:a=5,centerX:l,centerY:c,offset:u=20}=t,[f,d,h,g,x]=sI({source:{x:e,y:n},sourcePosition:i,target:{x:r,y:o},targetPosition:s,center:{x:l,y:c},offset:u});return[f.reduce((p,M,y)=>{let b;return y>0&&y<f.length-1?b=aI(f[y-1],M,f[y+1],a):b=`${y===0?"M":"L"}${M.x} ${M.y}`,p+=b,p},""),d,h,g,x]}function lI(t){const{sourceX:e,sourceY:n,targetX:i,targetY:r}=t,[o,s,a,l]=u_({sourceX:e,sourceY:n,targetX:i,targetY:r});return[`M ${e},${n}L ${i},${r}`,o,s,a,l]}const cI=Lt({name:"StraightEdge",props:["label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=lI(t);return _t(Dc,{path:n,labelX:i,labelY:r,...e,...t})}}}),uI=cI,fI=Lt({name:"SmoothStepEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","borderRadius","markerEnd","markerStart","interactionWidth","offset"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=fd({...t,sourcePosition:t.sourcePosition??Ve.Bottom,targetPosition:t.targetPosition??Ve.Top});return _t(Dc,{path:n,labelX:i,labelY:r,...e,...t})}}}),p_=fI,dI=Lt({name:"StepEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],setup(t,{attrs:e}){return()=>_t(p_,{...t,...e,borderRadius:0})}}),hI=dI,pI=Lt({name:"BezierEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","curvature","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=d_({...t,sourcePosition:t.sourcePosition??Ve.Bottom,targetPosition:t.targetPosition??Ve.Top});return _t(Dc,{path:n,labelX:i,labelY:r,...e,...t})}}}),mI=pI,gI=Lt({name:"SimpleBezierEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=h_({...t,sourcePosition:t.sourcePosition??Ve.Bottom,targetPosition:t.targetPosition??Ve.Top});return _t(Dc,{path:n,labelX:i,labelY:r,...e,...t})}}}),vI=gI,_I={input:ZP,default:qP,output:KP},xI={default:mI,straight:uI,step:hI,smoothstep:p_,simplebezier:vI};function yI(t,e,n){const i=He(()=>x=>e.value.get(x)),r=He(()=>x=>n.value.get(x)),o=He(()=>{const x={...xI,...t.edgeTypes},m=Object.keys(x);for(const p of t.edges)p.type&&!m.includes(p.type)&&(x[p.type]=p.type);return x}),s=He(()=>{const x={..._I,...t.nodeTypes},m=Object.keys(x);for(const p of t.nodes)p.type&&!m.includes(p.type)&&(x[p.type]=p.type);return x}),a=He(()=>t.onlyRenderVisibleElements?Z0(t.nodes,{x:0,y:0,width:t.dimensions.width,height:t.dimensions.height},t.viewport,!0):t.nodes),l=He(()=>{if(t.onlyRenderVisibleElements){const x=[];for(const m of t.edges){const p=e.value.get(m.source),M=e.value.get(m.target);gP({sourcePos:p.computedPosition||{x:0,y:0},targetPos:M.computedPosition||{x:0,y:0},sourceWidth:p.dimensions.width,sourceHeight:p.dimensions.height,targetWidth:M.dimensions.width,targetHeight:M.dimensions.height,width:t.dimensions.width,height:t.dimensions.height,viewport:t.viewport})&&x.push(m)}return x}return t.edges}),c=He(()=>[...a.value,...l.value]),u=He(()=>{const x=[];for(const m of t.nodes)m.selected&&x.push(m);return x}),f=He(()=>{const x=[];for(const m of t.edges)m.selected&&x.push(m);return x}),d=He(()=>[...u.value,...f.value]),h=He(()=>{const x=[];for(const m of t.nodes)m.dimensions.width&&m.dimensions.height&&m.handleBounds!==void 0&&x.push(m);return x}),g=He(()=>a.value.length>0&&h.value.length===a.value.length);return{getNode:i,getEdge:r,getElements:c,getEdgeTypes:o,getNodeTypes:s,getEdges:l,getNodes:a,getSelectedElements:d,getSelectedNodes:u,getSelectedEdges:f,getNodesInitialized:h,areNodesInitialized:g}}class qr{constructor(){this.currentId=0,this.flows=new Map}static getInstance(){var e;const n=(e=nr())==null?void 0:e.appContext.app,i=n?.config.globalProperties.$vueFlowStorage??qr.instance;return qr.instance=i??new qr,n&&(n.config.globalProperties.$vueFlowStorage=qr.instance),qr.instance}set(e,n){return this.flows.set(e,n)}get(e){return this.flows.get(e)}remove(e){return this.flows.delete(e)}create(e,n){const i=c_(),r=wr(i),o={};for(const[d,h]of Object.entries(r.hooks)){const g=`on${d.charAt(0).toUpperCase()+d.slice(1)}`;o[g]=h.on}const s={};for(const[d,h]of Object.entries(r.hooks))s[d]=h.trigger;const a=He(()=>{const d=new Map;for(const h of r.nodes)d.set(h.id,h);return d}),l=He(()=>{const d=new Map;for(const h of r.edges)d.set(h.id,h);return d}),c=yI(r,a,l),u=WP(r,a,l);u.setState({...r,...n});const f={...o,...c,...u,...dA(r),nodeLookup:a,edgeLookup:l,emits:s,id:e,vueFlowVersion:"1.48.2",$destroy:()=>{this.remove(e)}};return this.set(e,f),f}getId(){return`vue-flow-${this.currentId++}`}}function Ft(t){const e=qr.getInstance(),n=cc(),i=typeof t=="object",r=i?t:{id:t},o=r.id,s=o??n?.vueFlowId;let a;if(n){const l=Dn(km,null);typeof l<"u"&&l!==null&&(!s||l.id===s)&&(a=l)}if(a||s&&(a=e.get(s)),!a||s&&a.id!==s){const l=o??e.getId(),c=e.create(l,r);a=c,(n??lc(!0)).run(()=>{ft(c.applyDefault,(f,d,h)=>{const g=m=>{c.applyNodeChanges(m)},x=m=>{c.applyEdgeChanges(m)};f?(c.onNodesChange(g),c.onEdgesChange(x)):(c.hooks.value.nodesChange.off(g),c.hooks.value.edgesChange.off(x)),h(()=>{c.hooks.value.nodesChange.off(g),c.hooks.value.edgesChange.off(x)})},{immediate:!0}),Ks(()=>{if(a){const f=e.get(a.id);f?f.$destroy():va(`No store instance found for id ${a.id} in storage.`)}})})}else i&&a.setState(r);if(n&&(Tr(km,a),n.vueFlowId=a.id),i){const l=nr();l?.type.name!=="VueFlow"&&a.emits.error(new Wt(Gt.USEVUEFLOW_OPTIONS))}return a}function bI(t){const{emits:e,dimensions:n}=Ft();let i;Kn(()=>{const r=()=>{var o,s;if(!t.value||!(((s=(o=t.value).checkVisibility)==null?void 0:s.call(o))??!0))return;const a=Ac(t.value);(a.width===0||a.height===0)&&e.error(new Wt(Gt.MISSING_VIEWPORT_DIMENSIONS)),n.value={width:a.width||500,height:a.height||500}};r(),window.addEventListener("resize",r),t.value&&(i=new ResizeObserver(()=>r()),i.observe(t.value)),is(()=>{window.removeEventListener("resize",r),i&&t.value&&i.unobserve(t.value)})})}const SI={name:"UserSelection",compatConfig:{MODE:3}},MI=Lt({...SI,props:{userSelectionRect:{}},setup(t){return(e,n)=>(ye(),Te("div",{class:"vue-flow__selection vue-flow__container",style:Nt({width:`${e.userSelectionRect.width}px`,height:`${e.userSelectionRect.height}px`,transform:`translate(${e.userSelectionRect.x}px, ${e.userSelectionRect.y}px)`})},null,4))}}),EI=["tabIndex"],wI={name:"NodesSelection",compatConfig:{MODE:3}},TI=Lt({...wI,setup(t){const{emits:e,viewport:n,getSelectedNodes:i,noPanClassName:r,disableKeyboardA11y:o,userSelectionActive:s}=Ft(),a=l_(),l=Ke(null),c=o_({el:l,onStart(g){e.selectionDragStart(g),e.nodeDragStart(g)},onDrag(g){e.selectionDrag(g),e.nodeDrag(g)},onStop(g){e.selectionDragStop(g),e.nodeDragStop(g)}});Kn(()=>{var g;o.value||(g=l.value)==null||g.focus({preventScroll:!0})});const u=He(()=>lh(i.value)),f=He(()=>({width:`${u.value.width}px`,height:`${u.value.height}px`,top:`${u.value.y}px`,left:`${u.value.x}px`}));function d(g){e.selectionContextMenu({event:g,nodes:i.value})}function h(g){o.value||Ho[g.key]&&(g.preventDefault(),a({x:Ho[g.key].x,y:Ho[g.key].y},g.shiftKey))}return(g,x)=>!pe(s)&&u.value.width&&u.value.height?(ye(),Te("div",{key:0,class:zt(["vue-flow__nodesselection vue-flow__container",pe(r)]),style:Nt({transform:`translate(${pe(n).x}px,${pe(n).y}px) scale(${pe(n).zoom})`})},[ve("div",{ref_key:"el",ref:l,class:zt([{dragging:pe(c)},"vue-flow__nodesselection-rect"]),style:Nt(f.value),tabIndex:pe(o)?void 0:-1,onContextmenu:d,onKeydown:h},null,46,EI)],6)):ct("",!0)}});function AI(t,e){return{x:t.clientX-e.left,y:t.clientY-e.top}}const CI={name:"Pane",compatConfig:{MODE:3}},RI=Lt({...CI,props:{isSelecting:{type:Boolean},selectionKeyPressed:{type:Boolean}},setup(t){const{vueFlowRef:e,nodes:n,viewport:i,emits:r,userSelectionActive:o,removeSelectedElements:s,userSelectionRect:a,elementsSelectable:l,nodesSelectionActive:c,getSelectedEdges:u,getSelectedNodes:f,removeNodes:d,removeEdges:h,selectionMode:g,deleteKeyCode:x,multiSelectionKeyCode:m,multiSelectionActive:p,edgeLookup:M,nodeLookup:y,connectionLookup:b,defaultEdgeOptions:L,connectionStartHandle:B,panOnDrag:z}=Ft(),v=Mr(null),_=Mr(new Set),D=Mr(new Set),I=Mr(null),C=Tt(()=>l.value&&(t.isSelecting||o.value)),X=Tt(()=>B.value!==null);let E=!1,U=!1;const T=ks(x,{actInsideInputWithModifier:!1}),P=ks(m);ft(T,he=>{he&&(d(f.value),h(u.value),c.value=!1)}),ft(P,he=>{p.value=he});function k(he,Z){return ne=>{ne.target===Z&&he?.(ne)}}function Y(he){if(E||X.value){E=!1;return}r.paneClick(he),s(),c.value=!1}function q(he){var Z;if(Array.isArray(z.value)&&((Z=z.value)!=null&&Z.includes(2))){he.preventDefault();return}r.paneContextMenu(he)}function H(he){r.paneScroll(he)}function K(he){var Z,ne,de;if(I.value=((Z=e.value)==null?void 0:Z.getBoundingClientRect())??null,!l.value||!t.isSelecting||he.button!==0||he.target!==v.value||!I.value)return;(de=(ne=he.target)==null?void 0:ne.setPointerCapture)==null||de.call(ne,he.pointerId);const{x:Me,y:xe}=AI(he,I.value);U=!0,E=!1,s(),a.value={width:0,height:0,startX:Me,startY:xe,x:Me,y:xe},r.selectionStart(he)}function le(he){var Z;if(!I.value||!a.value)return;E=!0;const{x:ne,y:de}=li(he,I.value),{startX:Me=0,startY:xe=0}=a.value,Re={startX:Me,startY:xe,x:ne<Me?ne:Me,y:de<xe?de:xe,width:Math.abs(ne-Me),height:Math.abs(de-xe)},V=_.value,$=D.value;_.value=new Set(Z0(n.value,Re,i.value,g.value===ah.Partial,!0).map(N=>N.id)),D.value=new Set;const R=((Z=L.value)==null?void 0:Z.selectable)??!0;for(const N of _.value){const O=b.value.get(N);if(O)for(const{edgeId:G}of O.values()){const w=M.value.get(G);w&&(w.selectable??R)&&D.value.add(G)}}if(!Bm(V,_.value)){const N=_r(y.value,_.value,!0);r.nodesChange(N)}if(!Bm($,D.value)){const N=_r(M.value,D.value);r.edgesChange(N)}a.value=Re,o.value=!0,c.value=!1}function ge(he){var Z;he.button!==0||!U||((Z=he.target)==null||Z.releasePointerCapture(he.pointerId),!o.value&&a.value&&he.target===v.value&&Y(he),o.value=!1,a.value=null,c.value=_.value.size>0,r.selectionEnd(he),t.selectionKeyPressed&&(E=!1),U=!1)}return(he,Z)=>(ye(),Te("div",{ref_key:"container",ref:v,class:zt(["vue-flow__pane vue-flow__container",{selection:he.isSelecting}]),onClick:Z[0]||(Z[0]=ne=>C.value?void 0:k(Y,v.value)(ne)),onContextmenu:Z[1]||(Z[1]=ne=>k(q,v.value)(ne)),onWheelPassive:Z[2]||(Z[2]=ne=>k(H,v.value)(ne)),onPointerenter:Z[3]||(Z[3]=ne=>C.value?void 0:pe(r).paneMouseEnter(ne)),onPointerdown:Z[4]||(Z[4]=ne=>C.value?K(ne):pe(r).paneMouseMove(ne)),onPointermove:Z[5]||(Z[5]=ne=>C.value?le(ne):pe(r).paneMouseMove(ne)),onPointerup:Z[6]||(Z[6]=ne=>C.value?ge(ne):void 0),onPointerleave:Z[7]||(Z[7]=ne=>pe(r).paneMouseLeave(ne))},[Wn(he.$slots,"default"),pe(o)&&pe(a)?(ye(),yn(MI,{key:0,"user-selection-rect":pe(a)},null,8,["user-selection-rect"])):ct("",!0),pe(c)&&pe(f).length?(ye(),yn(TI,{key:1})):ct("",!0)],34))}}),PI={name:"Transform",compatConfig:{MODE:3}},II=Lt({...PI,setup(t){const{viewport:e,fitViewOnInit:n,fitViewOnInitDone:i}=Ft(),r=He(()=>n.value?!i.value:!1),o=He(()=>`translate(${e.value.x}px,${e.value.y}px) scale(${e.value.zoom})`);return(s,a)=>(ye(),Te("div",{class:"vue-flow__transformationpane vue-flow__container",style:Nt({transform:o.value,opacity:r.value?0:void 0})},[Wn(s.$slots,"default")],4))}}),NI={name:"Viewport",compatConfig:{MODE:3}},DI=Lt({...NI,setup(t){const{minZoom:e,maxZoom:n,defaultViewport:i,translateExtent:r,zoomActivationKeyCode:o,selectionKeyCode:s,panActivationKeyCode:a,panOnScroll:l,panOnScrollMode:c,panOnScrollSpeed:u,panOnDrag:f,zoomOnDoubleClick:d,zoomOnPinch:h,zoomOnScroll:g,preventScrolling:x,noWheelClassName:m,noPanClassName:p,emits:M,connectionStartHandle:y,userSelectionActive:b,paneDragging:L,d3Zoom:B,d3Selection:z,d3ZoomHandler:v,viewport:_,viewportRef:D,paneClickDistance:I}=Ft();bI(D);const C=Mr(!1),X=Mr(!1);let E=null,U=!1,T=0,P={x:0,y:0,zoom:0};const k=ks(a),Y=ks(s),q=ks(o),H=Tt(()=>(!Y.value||Y.value&&s.value===!0)&&(k.value||f.value)),K=Tt(()=>k.value||l.value),le=Tt(()=>s.value===!0&&H.value!==!0),ge=Tt(()=>Y.value&&s.value!==!0||b.value||le.value),he=Tt(()=>y.value!==null);Kn(()=>{if(!D.value){va("Viewport element is missing");return}const xe=D.value,Re=xe.getBoundingClientRect(),V=Z2().clickDistance(I.value).scaleExtent([e.value,n.value]).translateExtent(r.value),$=Vn(xe).call(V),R=$.on("wheel.zoom"),N=Qo.translate(i.value.x??0,i.value.y??0).scale(co(i.value.zoom??1,e.value,n.value)),O=[[0,0],[Re.width,Re.height]],G=V.constrain()(N,O,r.value);V.transform($,G),V.wheelDelta(ld),B.value=V,z.value=$,v.value=R,_.value={x:G.x,y:G.y,zoom:G.k},V.on("start",w=>{var ie;if(!w.sourceEvent)return null;T=w.sourceEvent.button,C.value=!0;const Q=de(w.transform);((ie=w.sourceEvent)==null?void 0:ie.type)==="mousedown"&&(L.value=!0),P=Q,M.viewportChangeStart(Q),M.moveStart({event:w,flowTransform:Q})}),V.on("end",w=>{if(!w.sourceEvent)return null;if(C.value=!1,L.value=!1,Z(H.value,T??0)&&!U&&M.paneContextMenu(w.sourceEvent),U=!1,ne(P,w.transform)){const ie=de(w.transform);P=ie,M.viewportChangeEnd(ie),M.moveEnd({event:w,flowTransform:ie})}}),V.filter(w=>{var ie;const Q=q.value||g.value,J=h.value&&w.ctrlKey,te=w.button,A=w.type==="wheel";if(te===1&&w.type==="mousedown"&&(Me(w,"vue-flow__node")||Me(w,"vue-flow__edge")))return!0;if(!H.value&&!Q&&!K.value&&!d.value&&!h.value||b.value||he.value&&!A||!d.value&&w.type==="dblclick"||Me(w,m.value)&&A||Me(w,p.value)&&(!A||K.value&&A&&!q.value)||!h.value&&w.ctrlKey&&A||!Q&&!K.value&&!J&&A)return!1;if(!h&&w.type==="touchstart"&&((ie=w.touches)==null?void 0:ie.length)>1)return w.preventDefault(),!1;if(!H.value&&(w.type==="mousedown"||w.type==="touchstart")||le.value&&Array.isArray(f.value)&&f.value.includes(0)&&te===0||Array.isArray(f.value)&&!f.value.includes(te)&&(w.type==="mousedown"||w.type==="touchstart"))return!1;const S=Array.isArray(f.value)&&f.value.includes(te)||s.value===!0&&Array.isArray(f.value)&&!f.value.includes(0)||!te||te<=1;return(!w.ctrlKey||k.value||A)&&S}),ft([b,H],()=>{b.value&&!C.value?V.on("zoom",null):b.value||V.on("zoom",w=>{_.value={x:w.transform.x,y:w.transform.y,zoom:w.transform.k};const ie=de(w.transform);U=Z(H.value,T??0),M.viewportChange(ie),M.move({event:w,flowTransform:ie})})},{immediate:!0}),ft([b,K,c,q,h,x,m],()=>{K.value&&!q.value&&!b.value?$.on("wheel.zoom",w=>{if(Me(w,m.value))return!1;const ie=q.value||g.value,Q=h.value&&w.ctrlKey;if(!(!x.value||K.value||ie||Q))return!1;w.preventDefault(),w.stopImmediatePropagation();const te=$.property("__zoom").k||1,A=ia();if(!k.value&&w.ctrlKey&&h.value&&A){const oe=ii(w),Pe=ld(w),be=te*2**Pe;V.scaleTo($,be,oe,w);return}const S=w.deltaMode===1?20:1;let W=c.value===Bs.Vertical?0:w.deltaX*S,re=c.value===Bs.Horizontal?0:w.deltaY*S;!A&&w.shiftKey&&c.value!==Bs.Vertical&&!W&&re&&(W=re,re=0),V.translateBy($,-(W/te)*u.value,-(re/te)*u.value);const ue=de($.property("__zoom"));E&&clearTimeout(E),X.value?(M.move({event:w,flowTransform:ue}),M.viewportChange(ue),E=setTimeout(()=>{M.moveEnd({event:w,flowTransform:ue}),M.viewportChangeEnd(ue),X.value=!1},150)):(X.value=!0,M.moveStart({event:w,flowTransform:ue}),M.viewportChangeStart(ue))},{passive:!1}):typeof R<"u"&&$.on("wheel.zoom",function(w,ie){const Q=!x.value&&w.type==="wheel"&&!w.ctrlKey,J=q.value||g.value,te=h.value&&w.ctrlKey;if(!J&&!l.value&&!te&&w.type==="wheel"||Q||Me(w,m.value))return null;w.preventDefault(),R.call(this,w,ie)},{passive:!1})},{immediate:!0})});function Z(xe,Re){return Re===2&&Array.isArray(xe)&&xe.includes(2)}function ne(xe,Re){return xe.x!==Re.x&&!Number.isNaN(Re.x)||xe.y!==Re.y&&!Number.isNaN(Re.y)||xe.zoom!==Re.k&&!Number.isNaN(Re.k)}function de(xe){return{x:xe.x,y:xe.y,zoom:xe.k}}function Me(xe,Re){return xe.target.closest(`.${Re}`)}return(xe,Re)=>(ye(),Te("div",{ref_key:"viewportRef",ref:D,class:"vue-flow__viewport vue-flow__container"},[rt(RI,{"is-selecting":ge.value,"selection-key-pressed":pe(Y),class:zt({connecting:he.value,dragging:pe(L),draggable:pe(f)===!0||Array.isArray(pe(f))&&pe(f).includes(0)})},{default:En(()=>[rt(II,null,{default:En(()=>[Wn(xe.$slots,"default")]),_:3})]),_:3},8,["is-selecting","selection-key-pressed","class"])],512))}}),LI=["id"],FI=["id"],UI=["id"],OI={name:"A11yDescriptions",compatConfig:{MODE:3}},BI=Lt({...OI,setup(t){const{id:e,disableKeyboardA11y:n,ariaLiveMessage:i}=Ft();return(r,o)=>(ye(),Te(dt,null,[ve("div",{id:`${pe(V0)}-${pe(e)}`,style:{display:"none"}}," Press enter or space to select a node. "+Ze(pe(n)?"":"You can then use the arrow keys to move the node around.")+" You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ",9,LI),ve("div",{id:`${pe(H0)}-${pe(e)}`,style:{display:"none"}}," Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ",8,FI),pe(n)?ct("",!0):(ye(),Te("div",{key:0,id:`${pe(nP)}-${pe(e)}`,"aria-live":"assertive","aria-atomic":"true",style:{position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)","clip-path":"inset(100%)"}},Ze(pe(i)),9,UI))],64))}});function kI(){const t=Ft();ft(()=>t.viewportHelper.value.viewportInitialized,e=>{e&&setTimeout(()=>{t.emits.init(t),t.emits.paneReady(t)},1)})}function zI(t,e,n){return n===Ve.Left?t-e:n===Ve.Right?t+e:t}function VI(t,e,n){return n===Ve.Top?t-e:n===Ve.Bottom?t+e:t}const fh=function({radius:t=10,centerX:e=0,centerY:n=0,position:i=Ve.Top,type:r}){return _t("circle",{class:`vue-flow__edgeupdater vue-flow__edgeupdater-${r}`,cx:zI(e,t,i),cy:VI(n,t,i),r:t,stroke:"transparent",fill:"transparent"})};fh.props=["radius","centerX","centerY","position","type"];fh.compatConfig={MODE:3};const $m=fh,HI=Lt({name:"Edge",compatConfig:{MODE:3},props:["id"],setup(t){const{id:e,addSelectedEdges:n,connectionMode:i,edgeUpdaterRadius:r,emits:o,nodesSelectionActive:s,noPanClassName:a,getEdgeTypes:l,removeSelectedEdges:c,findEdge:u,findNode:f,isValidConnection:d,multiSelectionActive:h,disableKeyboardA11y:g,elementsSelectable:x,edgesUpdatable:m,edgesFocusable:p,hooks:M}=Ft(),y=He(()=>u(t.id)),{emit:b,on:L}=NP(y.value,o),B=Dn(Rc),z=nr(),v=Ke(!1),_=Ke(!1),D=Ke(""),I=Ke(null),C=Ke("source"),X=Ke(null),E=Tt(()=>typeof y.value.selectable>"u"?x.value:y.value.selectable),U=Tt(()=>typeof y.value.updatable>"u"?m.value:y.value.updatable),T=Tt(()=>typeof y.value.focusable>"u"?p.value:y.value.focusable);Tr(RP,t.id),Tr(PP,X);const P=He(()=>y.value.class instanceof Function?y.value.class(y.value):y.value.class),k=He(()=>y.value.style instanceof Function?y.value.style(y.value):y.value.style),Y=He(()=>{const N=y.value.type||"default",O=B?.[`edge-${N}`];if(O)return O;let G=y.value.template??l.value[N];if(typeof G=="string"&&z){const w=Object.keys(z.appContext.components);w&&w.includes(N)&&(G=Zg(N,!1))}return G&&typeof G!="string"?G:(o.error(new Wt(Gt.EDGE_TYPE_MISSING,G)),!1)}),{handlePointerDown:q}=s_({nodeId:D,handleId:I,type:C,isValidConnection:d,edgeUpdaterType:C,onEdgeUpdate:le,onEdgeUpdateEnd:ge});return()=>{const N=f(y.value.source),O=f(y.value.target),G="pathOptions"in y.value?y.value.pathOptions:{};if(!N&&!O)return o.error(new Wt(Gt.EDGE_SOURCE_TARGET_MISSING,y.value.id,y.value.source,y.value.target)),null;if(!N)return o.error(new Wt(Gt.EDGE_SOURCE_MISSING,y.value.id,y.value.source)),null;if(!O)return o.error(new Wt(Gt.EDGE_TARGET_MISSING,y.value.id,y.value.target)),null;if(!y.value||y.value.hidden||N.hidden||O.hidden)return null;let w;i.value===Rr.Strict?w=N.handleBounds.source:w=[...N.handleBounds.source||[],...N.handleBounds.target||[]];const ie=Nm(w,y.value.sourceHandle);let Q;i.value===Rr.Strict?Q=O.handleBounds.target:Q=[...O.handleBounds.target||[],...O.handleBounds.source||[]];const J=Nm(Q,y.value.targetHandle),te=ie?.position||Ve.Bottom,A=J?.position||Ve.Top,{x:S,y:W}=es(N,ie,te),{x:re,y:ue}=es(O,J,A);return y.value.sourceX=S,y.value.sourceY=W,y.value.targetX=re,y.value.targetY=ue,_t("g",{ref:X,key:t.id,"data-id":t.id,class:["vue-flow__edge",`vue-flow__edge-${Y.value===!1?"default":y.value.type||"default"}`,a.value,P.value,{updating:v.value,selected:y.value.selected,animated:y.value.animated,inactive:!E.value&&!M.value.edgeClick.hasListeners()}],tabIndex:T.value?0:void 0,"aria-label":y.value.ariaLabel===null?void 0:y.value.ariaLabel??`Edge from ${y.value.source} to ${y.value.target}`,"aria-describedby":T.value?`${H0}-${e}`:void 0,"aria-roledescription":"edge",role:T.value?"group":"img",...y.value.domAttributes,onClick:Z,onContextmenu:ne,onDblclick:de,onMouseenter:Me,onMousemove:xe,onMouseleave:Re,onKeyDown:T.value?R:void 0},[_.value?null:_t(Y.value===!1?l.value.default:Y.value,{id:t.id,sourceNode:N,targetNode:O,source:y.value.source,target:y.value.target,type:y.value.type,updatable:U.value,selected:y.value.selected,animated:y.value.animated,label:y.value.label,labelStyle:y.value.labelStyle,labelShowBg:y.value.labelShowBg,labelBgStyle:y.value.labelBgStyle,labelBgPadding:y.value.labelBgPadding,labelBgBorderRadius:y.value.labelBgBorderRadius,data:y.value.data,events:{...y.value.events,...L},style:k.value,markerStart:`url('#${na(y.value.markerStart,e)}')`,markerEnd:`url('#${na(y.value.markerEnd,e)}')`,sourcePosition:te,targetPosition:A,sourceX:S,sourceY:W,targetX:re,targetY:ue,sourceHandleId:y.value.sourceHandle,targetHandleId:y.value.targetHandle,interactionWidth:y.value.interactionWidth,...G}),[U.value==="source"||U.value===!0?[_t("g",{onMousedown:V,onMouseenter:H,onMouseout:K},_t($m,{position:te,centerX:S,centerY:W,radius:r.value,type:"source","data-type":"source"}))]:null,U.value==="target"||U.value===!0?[_t("g",{onMousedown:$,onMouseenter:H,onMouseout:K},_t($m,{position:A,centerX:re,centerY:ue,radius:r.value,type:"target","data-type":"target"}))]:null]])};function H(){v.value=!0}function K(){v.value=!1}function le(N,O){b.update({event:N,edge:y.value,connection:O})}function ge(N){b.updateEnd({event:N,edge:y.value}),_.value=!1}function he(N,O){N.button===0&&(_.value=!0,D.value=O?y.value.target:y.value.source,I.value=(O?y.value.targetHandle:y.value.sourceHandle)??null,C.value=O?"target":"source",b.updateStart({event:N,edge:y.value}),q(N))}function Z(N){var O;const G={event:N,edge:y.value};E.value&&(s.value=!1,y.value.selected&&h.value?(c([y.value]),(O=X.value)==null||O.blur()):n([y.value])),b.click(G)}function ne(N){b.contextMenu({event:N,edge:y.value})}function de(N){b.doubleClick({event:N,edge:y.value})}function Me(N){b.mouseEnter({event:N,edge:y.value})}function xe(N){b.mouseMove({event:N,edge:y.value})}function Re(N){b.mouseLeave({event:N,edge:y.value})}function V(N){he(N,!0)}function $(N){he(N,!1)}function R(N){var O;!g.value&&G0.includes(N.key)&&E.value&&(N.key==="Escape"?((O=X.value)==null||O.blur(),c([u(t.id)])):n([u(t.id)]))}}}),GI=HI,$I=Lt({name:"ConnectionLine",compatConfig:{MODE:3},setup(){var t;const{id:e,connectionMode:n,connectionStartHandle:i,connectionEndHandle:r,connectionPosition:o,connectionLineType:s,connectionLineStyle:a,connectionLineOptions:l,connectionStatus:c,viewport:u,findNode:f}=Ft(),d=(t=Dn(Rc))==null?void 0:t["connection-line"],h=He(()=>{var M;return f((M=i.value)==null?void 0:M.nodeId)}),g=He(()=>{var M;return f((M=r.value)==null?void 0:M.nodeId)??null}),x=He(()=>({x:(o.value.x-u.value.x)/u.value.zoom,y:(o.value.y-u.value.y)/u.value.zoom})),m=He(()=>l.value.markerStart?`url(#${na(l.value.markerStart,e)})`:""),p=He(()=>l.value.markerEnd?`url(#${na(l.value.markerEnd,e)})`:"");return()=>{var M,y,b;if(!h.value||!i.value)return null;const L=i.value.id,B=i.value.type,z=h.value.handleBounds;let v=z?.[B]??[];if(n.value===Rr.Loose){const k=z?.[B==="source"?"target":"source"]??[];v=[...v,...k]}if(!v)return null;const _=(L?v.find(k=>k.id===L):v[0])??null,D=_?.position??Ve.Top,{x:I,y:C}=es(h.value,_,D);let X=null;g.value&&(n.value===Rr.Strict?X=((M=g.value.handleBounds[B==="source"?"target":"source"])==null?void 0:M.find(k=>{var Y;return k.id===((Y=r.value)==null?void 0:Y.id)}))||null:X=((y=[...g.value.handleBounds.source??[],...g.value.handleBounds.target??[]])==null?void 0:y.find(k=>{var Y;return k.id===((Y=r.value)==null?void 0:Y.id)}))||null);const E=((b=r.value)==null?void 0:b.position)??(D?cd[D]:null);if(!D||!E)return null;const U=s.value??l.value.type??Xr.Bezier;let T="";const P={sourceX:I,sourceY:C,sourcePosition:D,targetX:x.value.x,targetY:x.value.y,targetPosition:E};return U===Xr.Bezier?[T]=d_(P):U===Xr.Step?[T]=fd({...P,borderRadius:0}):U===Xr.SmoothStep?[T]=fd(P):U===Xr.SimpleBezier?[T]=h_(P):T=`M${I},${C} ${x.value.x},${x.value.y}`,_t("svg",{class:"vue-flow__edges vue-flow__connectionline vue-flow__container"},_t("g",{class:"vue-flow__connection"},d?_t(d,{sourceX:I,sourceY:C,sourcePosition:D,targetX:x.value.x,targetY:x.value.y,targetPosition:E,sourceNode:h.value,sourceHandle:_,targetNode:g.value,targetHandle:X,markerEnd:p.value,markerStart:m.value,connectionStatus:c.value}):_t("path",{d:T,class:[l.value.class,c.value,"vue-flow__connection-path"],style:{...a.value,...l.value.style},"marker-end":p.value,"marker-start":m.value})))}}}),WI=$I,XI=["id","markerWidth","markerHeight","markerUnits","orient"],YI={name:"MarkerType",compatConfig:{MODE:3}},qI=Lt({...YI,props:{id:{},type:{},color:{default:"none"},width:{default:12.5},height:{default:12.5},markerUnits:{default:"strokeWidth"},orient:{default:"auto-start-reverse"},strokeWidth:{default:1}},setup(t){return(e,n)=>(ye(),Te("marker",{id:e.id,class:"vue-flow__arrowhead",viewBox:"-10 -10 20 20",refX:"0",refY:"0",markerWidth:`${e.width}`,markerHeight:`${e.height}`,markerUnits:e.markerUnits,orient:e.orient},[e.type===pe(sd).ArrowClosed?(ye(),Te("polyline",{key:0,style:Nt({stroke:e.color,fill:e.color,strokeWidth:e.strokeWidth}),"stroke-linecap":"round","stroke-linejoin":"round",points:"-5,-4 0,0 -5,4 -5,-4"},null,4)):ct("",!0),e.type===pe(sd).Arrow?(ye(),Te("polyline",{key:1,style:Nt({stroke:e.color,strokeWidth:e.strokeWidth}),"stroke-linecap":"round","stroke-linejoin":"round",fill:"none",points:"-5,-4 0,0 -5,4"},null,4)):ct("",!0)],8,XI))}}),KI={class:"vue-flow__marker vue-flow__container","aria-hidden":"true"},ZI={name:"MarkerDefinitions",compatConfig:{MODE:3}},jI=Lt({...ZI,setup(t){const{id:e,edges:n,connectionLineOptions:i,defaultMarkerColor:r}=Ft(),o=He(()=>{const s=new Set,a=[],l=c=>{if(c){const u=na(c,e);s.has(u)||(typeof c=="object"?a.push({...c,id:u,color:c.color||r.value}):a.push({id:u,color:r.value,type:c}),s.add(u))}};for(const c of[i.value.markerEnd,i.value.markerStart])l(c);for(const c of n.value)for(const u of[c.markerStart,c.markerEnd])l(u);return a.sort((c,u)=>c.id.localeCompare(u.id))});return(s,a)=>(ye(),Te("svg",KI,[ve("defs",null,[(ye(!0),Te(dt,null,wn(o.value,l=>(ye(),yn(qI,{id:l.id,key:l.id,type:l.type,color:l.color,width:l.width,height:l.height,markerUnits:l.markerUnits,"stroke-width":l.strokeWidth,orient:l.orient},null,8,["id","type","color","width","height","markerUnits","stroke-width","orient"]))),128))])]))}}),JI={name:"Edges",compatConfig:{MODE:3}},QI=Lt({...JI,setup(t){const{findNode:e,getEdges:n,elevateEdgesOnSelect:i}=Ft();return(r,o)=>(ye(),Te(dt,null,[rt(jI),(ye(!0),Te(dt,null,wn(pe(n),s=>(ye(),Te("svg",{key:s.id,class:"vue-flow__edges vue-flow__container",style:Nt({zIndex:pe(vP)(s,pe(e),pe(i))})},[rt(pe(GI),{id:s.id},null,8,["id"])],4))),128)),rt(pe(WI))],64))}}),e3=Lt({name:"Node",compatConfig:{MODE:3},props:["id","resizeObserver"],setup(t){const{id:e,noPanClassName:n,selectNodesOnDrag:i,nodesSelectionActive:r,multiSelectionActive:o,emits:s,removeSelectedNodes:a,addSelectedNodes:l,updateNodeDimensions:c,onUpdateNodeInternals:u,getNodeTypes:f,nodeExtent:d,elevateNodesOnSelect:h,disableKeyboardA11y:g,ariaLiveMessage:x,snapToGrid:m,snapGrid:p,nodeDragThreshold:M,nodesDraggable:y,elementsSelectable:b,nodesConnectable:L,nodesFocusable:B,hooks:z}=Ft(),v=Ke(null);Tr(r_,v),Tr(i_,t.id);const _=Dn(Rc),D=nr(),I=l_(),{node:C,parentNode:X}=a_(t.id),{emit:E,on:U}=UP(C,s),T=Tt(()=>typeof C.draggable>"u"?y.value:C.draggable),P=Tt(()=>typeof C.selectable>"u"?b.value:C.selectable),k=Tt(()=>typeof C.connectable>"u"?L.value:C.connectable),Y=Tt(()=>typeof C.focusable>"u"?B.value:C.focusable),q=He(()=>P.value||T.value||z.value.nodeClick.hasListeners()||z.value.nodeDoubleClick.hasListeners()||z.value.nodeMouseEnter.hasListeners()||z.value.nodeMouseMove.hasListeners()||z.value.nodeMouseLeave.hasListeners()),H=Tt(()=>!!C.dimensions.width&&!!C.dimensions.height),K=He(()=>{const O=C.type||"default",G=_?.[`node-${O}`];if(G)return G;let w=C.template||f.value[O];if(typeof w=="string"&&D){const ie=Object.keys(D.appContext.components);ie&&ie.includes(O)&&(w=Zg(O,!1))}return w&&typeof w!="string"?w:(s.error(new Wt(Gt.NODE_TYPE_MISSING,w)),!1)}),le=o_({id:t.id,el:v,disabled:()=>!T.value,selectable:P,dragHandle:()=>C.dragHandle,onStart(O){E.dragStart(O)},onDrag(O){E.drag(O)},onStop(O){E.dragStop(O)},onClick(O){R(O)}}),ge=He(()=>C.class instanceof Function?C.class(C):C.class),he=He(()=>{const O=(C.style instanceof Function?C.style(C):C.style)||{},G=C.width instanceof Function?C.width(C):C.width,w=C.height instanceof Function?C.height(C):C.height;return!O.width&&G&&(O.width=typeof G=="string"?G:`${G}px`),!O.height&&w&&(O.height=typeof w=="string"?w:`${w}px`),O}),Z=Tt(()=>Number(C.zIndex??he.value.zIndex??0));return u(O=>{(O.includes(t.id)||!O.length)&&de()}),Kn(()=>{ft(()=>C.hidden,(O=!1,G,w)=>{!O&&v.value&&(t.resizeObserver.observe(v.value),w(()=>{v.value&&t.resizeObserver.unobserve(v.value)}))},{immediate:!0,flush:"post"})}),ft([()=>C.type,()=>C.sourcePosition,()=>C.targetPosition],()=>{Nn(()=>{c([{id:t.id,nodeElement:v.value,forceUpdate:!0}])})}),ft([()=>C.position.x,()=>C.position.y,()=>{var O;return(O=X.value)==null?void 0:O.computedPosition.x},()=>{var O;return(O=X.value)==null?void 0:O.computedPosition.y},()=>{var O;return(O=X.value)==null?void 0:O.computedPosition.z},Z,()=>C.selected,()=>C.dimensions.height,()=>C.dimensions.width,()=>{var O;return(O=X.value)==null?void 0:O.dimensions.height},()=>{var O;return(O=X.value)==null?void 0:O.dimensions.width}],([O,G,w,ie,Q,J])=>{const te={x:O,y:G,z:J+(h.value&&C.selected?1e3:0)};typeof w<"u"&&typeof ie<"u"?C.computedPosition=fP({x:w,y:ie,z:Q},te):C.computedPosition=te},{flush:"post",immediate:!0}),ft([()=>C.extent,d],([O,G],[w,ie])=>{(O!==w||G!==ie)&&ne()}),C.extent==="parent"||typeof C.extent=="object"&&"range"in C.extent&&C.extent.range==="parent"?jf(()=>H).toBe(!0).then(ne):ne(),()=>C.hidden?null:_t("div",{ref:v,"data-id":C.id,class:["vue-flow__node",`vue-flow__node-${K.value===!1?"default":C.type||"default"}`,{[n.value]:T.value,dragging:le?.value,draggable:T.value,selected:C.selected,selectable:P.value,parent:C.isParent},ge.value],style:{visibility:H.value?"visible":"hidden",zIndex:C.computedPosition.z??Z.value,transform:`translate(${C.computedPosition.x}px,${C.computedPosition.y}px)`,pointerEvents:q.value?"all":"none",...he.value},tabIndex:Y.value?0:void 0,role:Y.value?"group":void 0,"aria-describedby":g.value?void 0:`${V0}-${e}`,"aria-label":C.ariaLabel,"aria-roledescription":"node",...C.domAttributes,onMouseenter:Me,onMousemove:xe,onMouseleave:Re,onContextmenu:V,onClick:R,onDblclick:$,onKeydown:N},[_t(K.value===!1?f.value.default:K.value,{id:C.id,type:C.type,data:C.data,events:{...C.events,...U},selected:C.selected,resizing:C.resizing,dragging:le.value,connectable:k.value,position:C.computedPosition,dimensions:C.dimensions,isValidTargetPos:C.isValidTargetPos,isValidSourcePos:C.isValidSourcePos,parent:C.parentNode,parentNodeId:C.parentNode,zIndex:C.computedPosition.z??Z.value,targetPosition:C.targetPosition,sourcePosition:C.sourcePosition,label:C.label,dragHandle:C.dragHandle,onUpdateNodeInternals:de})]);function ne(){const O=C.computedPosition,{computedPosition:G,position:w}=ch(C,m.value?Cc(O,p.value):O,s.error,d.value,X.value);(C.computedPosition.x!==G.x||C.computedPosition.y!==G.y)&&(C.computedPosition={...C.computedPosition,...G}),(C.position.x!==w.x||C.position.y!==w.y)&&(C.position=w)}function de(){v.value&&c([{id:t.id,nodeElement:v.value,forceUpdate:!0}])}function Me(O){le?.value||E.mouseEnter({event:O,node:C})}function xe(O){le?.value||E.mouseMove({event:O,node:C})}function Re(O){le?.value||E.mouseLeave({event:O,node:C})}function V(O){return E.contextMenu({event:O,node:C})}function $(O){return E.doubleClick({event:O,node:C})}function R(O){P.value&&(!i.value||!T.value||M.value>0)&&ud(C,o.value,l,a,r,!1,v.value),E.click({event:O,node:C})}function N(O){if(!(ad(O)||g.value))if(G0.includes(O.key)&&P.value){const G=O.key==="Escape";ud(C,o.value,l,a,r,G,v.value)}else T.value&&C.selected&&Ho[O.key]&&(O.preventDefault(),x.value=`Moved selected node ${O.key.replace("Arrow","").toLowerCase()}. New position, x: ${~~C.position.x}, y: ${~~C.position.y}`,I({x:Ho[O.key].x,y:Ho[O.key].y},O.shiftKey))}}}),t3=e3;function n3(t={includeHiddenNodes:!1}){const{nodes:e}=Ft();return He(()=>{if(e.value.length===0)return!1;for(const n of e.value)if((t.includeHiddenNodes||!n.hidden)&&(n?.handleBounds===void 0||n.dimensions.width===0||n.dimensions.height===0))return!1;return!0})}const i3={class:"vue-flow__nodes vue-flow__container"},r3={name:"Nodes",compatConfig:{MODE:3}},o3=Lt({...r3,setup(t){const{getNodes:e,updateNodeDimensions:n,emits:i}=Ft(),r=n3(),o=Ke();return ft(r,s=>{s&&Nn(()=>{i.nodesInitialized(e.value)})},{immediate:!0}),Kn(()=>{o.value=new ResizeObserver(s=>{const a=s.map(l=>({id:l.target.getAttribute("data-id"),nodeElement:l.target,forceUpdate:!0}));Nn(()=>n(a))})}),is(()=>{var s;return(s=o.value)==null?void 0:s.disconnect()}),(s,a)=>(ye(),Te("div",i3,[o.value?(ye(!0),Te(dt,{key:0},wn(pe(e),(l,c,u,f)=>{const d=[l.id];if(f&&f.key===l.id&&Xy(f,d))return f;const h=(ye(),yn(pe(t3),{id:l.id,key:l.id,"resize-observer":o.value},null,8,["id","resize-observer"]));return h.memo=d,h},a,0),128)):ct("",!0)]))}});function s3(){const{emits:t}=Ft();Kn(()=>{if(n_()){const e=document.querySelector(".vue-flow__pane");e&&window.getComputedStyle(e).zIndex!=="1"&&t.error(new Wt(Gt.MISSING_STYLES))}})}const a3=ve("div",{class:"vue-flow__edge-labels"},null,-1),l3={name:"VueFlow",compatConfig:{MODE:3}},c3=Lt({...l3,props:{id:{},modelValue:{},nodes:{},edges:{},edgeTypes:{},nodeTypes:{},connectionMode:{},connectionLineType:{},connectionLineStyle:{default:void 0},connectionLineOptions:{default:void 0},connectionRadius:{},isValidConnection:{type:[Function,null],default:void 0},deleteKeyCode:{default:void 0},selectionKeyCode:{type:[Boolean,null],default:void 0},multiSelectionKeyCode:{default:void 0},zoomActivationKeyCode:{default:void 0},panActivationKeyCode:{default:void 0},snapToGrid:{type:Boolean,default:void 0},snapGrid:{},onlyRenderVisibleElements:{type:Boolean,default:void 0},edgesUpdatable:{type:[Boolean,String],default:void 0},nodesDraggable:{type:Boolean,default:void 0},nodesConnectable:{type:Boolean,default:void 0},nodeDragThreshold:{},elementsSelectable:{type:Boolean,default:void 0},selectNodesOnDrag:{type:Boolean,default:void 0},panOnDrag:{type:[Boolean,Array],default:void 0},minZoom:{},maxZoom:{},defaultViewport:{},translateExtent:{},nodeExtent:{},defaultMarkerColor:{},zoomOnScroll:{type:Boolean,default:void 0},zoomOnPinch:{type:Boolean,default:void 0},panOnScroll:{type:Boolean,default:void 0},panOnScrollSpeed:{},panOnScrollMode:{},paneClickDistance:{},zoomOnDoubleClick:{type:Boolean,default:void 0},preventScrolling:{type:Boolean,default:void 0},selectionMode:{},edgeUpdaterRadius:{},fitViewOnInit:{type:Boolean,default:void 0},connectOnClick:{type:Boolean,default:void 0},applyDefault:{type:Boolean,default:void 0},autoConnect:{type:[Boolean,Function],default:void 0},noDragClassName:{},noWheelClassName:{},noPanClassName:{},defaultEdgeOptions:{},elevateEdgesOnSelect:{type:Boolean,default:void 0},elevateNodesOnSelect:{type:Boolean,default:void 0},disableKeyboardA11y:{type:Boolean,default:void 0},edgesFocusable:{type:Boolean,default:void 0},nodesFocusable:{type:Boolean,default:void 0},autoPanOnConnect:{type:Boolean,default:void 0},autoPanOnNodeDrag:{type:Boolean,default:void 0},autoPanSpeed:{}},emits:["nodesChange","edgesChange","nodesInitialized","paneReady","init","updateNodeInternals","error","connect","connectStart","connectEnd","clickConnectStart","clickConnectEnd","moveStart","move","moveEnd","selectionDragStart","selectionDrag","selectionDragStop","selectionContextMenu","selectionStart","selectionEnd","viewportChangeStart","viewportChange","viewportChangeEnd","paneScroll","paneClick","paneContextMenu","paneMouseEnter","paneMouseMove","paneMouseLeave","edgeUpdate","edgeContextMenu","edgeMouseEnter","edgeMouseMove","edgeMouseLeave","edgeDoubleClick","edgeClick","edgeUpdateStart","edgeUpdateEnd","nodeContextMenu","nodeMouseEnter","nodeMouseMove","nodeMouseLeave","nodeDoubleClick","nodeClick","nodeDragStart","nodeDrag","nodeDragStop","miniMapNodeClick","miniMapNodeDoubleClick","miniMapNodeMouseEnter","miniMapNodeMouseMove","miniMapNodeMouseLeave","update:modelValue","update:nodes","update:edges"],setup(t,{expose:e,emit:n}){const i=t,r=tv(),o=Nu(i,"modelValue",n),s=Nu(i,"nodes",n),a=Nu(i,"edges",n),l=Ft(i),c=zP({modelValue:o,nodes:s,edges:a},i,l);return HP(n,l.hooks),kI(),s3(),Tr(Rc,r),Fd(c),e(l),(u,f)=>(ye(),Te("div",{ref:pe(l).vueFlowRef,class:"vue-flow"},[rt(DI,null,{default:En(()=>[rt(QI),a3,rt(o3),Wn(u.$slots,"zoom-pane")]),_:3}),Wn(u.$slots,"default"),rt(BI)],512))}}),u3={name:"Panel",compatConfig:{MODE:3}},f3=Lt({...u3,props:{position:{}},setup(t){const e=t,{userSelectionActive:n}=Ft(),i=He(()=>`${e.position}`.split("-"));return(r,o)=>(ye(),Te("div",{class:zt(["vue-flow__panel",i.value]),style:Nt({pointerEvents:pe(n)?"none":"all"})},[Wn(r.$slots,"default")],6))}});var ki=(t=>(t.Lines="lines",t.Dots="dots",t))(ki||{});const m_=function({dimensions:t,size:e,color:n}){return _t("path",{stroke:n,"stroke-width":e,d:`M${t[0]/2} 0 V${t[1]} M0 ${t[1]/2} H${t[0]}`})},g_=function({radius:t,color:e}){return _t("circle",{cx:t,cy:t,r:t,fill:e})};ki.Lines+"",ki.Dots+"";const d3={[ki.Dots]:"#81818a",[ki.Lines]:"#eee"},h3=["id","x","y","width","height","patternTransform"],p3={key:2,height:"100",width:"100"},m3=["fill"],g3=["x","y","fill"],v3={name:"Background",compatConfig:{MODE:3}},_3=Lt({...v3,props:{id:{},variant:{default:()=>ki.Dots},gap:{default:20},size:{default:1},lineWidth:{default:1},patternColor:{},color:{},bgColor:{},height:{default:100},width:{default:100},x:{default:0},y:{default:0},offset:{default:0}},setup(t){const{id:e,viewport:n}=Ft(),i=He(()=>{const s=n.value.zoom,[a,l]=Array.isArray(t.gap)?t.gap:[t.gap,t.gap],c=[a*s||1,l*s||1],u=t.size*s,[f,d]=Array.isArray(t.offset)?t.offset:[t.offset,t.offset],h=[f*s||1+c[0]/2,d*s||1+c[1]/2];return{scaledGap:c,offset:h,size:u}}),r=Tt(()=>`pattern-${e}${t.id?`-${t.id}`:""}`),o=Tt(()=>t.color||t.patternColor||d3[t.variant||ki.Dots]);return(s,a)=>(ye(),Te("svg",{class:"vue-flow__background vue-flow__container",style:Nt({height:`${s.height>100?100:s.height}%`,width:`${s.width>100?100:s.width}%`})},[Wn(s.$slots,"pattern-container",{id:r.value},()=>[ve("pattern",{id:r.value,x:pe(n).x%i.value.scaledGap[0],y:pe(n).y%i.value.scaledGap[1],width:i.value.scaledGap[0],height:i.value.scaledGap[1],patternTransform:`translate(-${i.value.offset[0]},-${i.value.offset[1]})`,patternUnits:"userSpaceOnUse"},[Wn(s.$slots,"pattern",{},()=>[s.variant===pe(ki).Lines?(ye(),yn(pe(m_),{key:0,size:s.lineWidth,color:o.value,dimensions:i.value.scaledGap},null,8,["size","color","dimensions"])):s.variant===pe(ki).Dots?(ye(),yn(pe(g_),{key:1,color:o.value,radius:i.value.size/2},null,8,["color","radius"])):ct("",!0),s.bgColor?(ye(),Te("svg",p3,[ve("rect",{width:"100%",height:"100%",fill:s.bgColor},null,8,m3)])):ct("",!0)])],8,h3)]),ve("rect",{x:s.x,y:s.y,width:"100%",height:"100%",fill:`url(#${r.value})`},null,8,g3),Wn(s.$slots,"default",{id:r.value})],4))}});var x3={value:()=>{}};function dh(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new bl(n)}function bl(t){this._=t}function y3(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}bl.prototype=dh.prototype={constructor:bl,on:function(t,e){var n=this._,i=y3(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=b3(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=Wm(n[r],t.name,e);else if(e==null)for(r in n)n[r]=Wm(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new bl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function b3(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function Wm(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=x3,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var dd="http://www.w3.org/1999/xhtml";const Xm={svg:"http://www.w3.org/2000/svg",xhtml:dd,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Lc(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),Xm.hasOwnProperty(e)?{space:Xm[e],local:t}:t}function S3(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===dd&&e.documentElement.namespaceURI===dd?e.createElement(t):e.createElementNS(n,t)}}function M3(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function v_(t){var e=Lc(t);return(e.local?M3:S3)(e)}function E3(){}function hh(t){return t==null?E3:function(){return this.querySelector(t)}}function w3(t){typeof t!="function"&&(t=hh(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,c,u=0;u<s;++u)(l=o[u])&&(c=t.call(l,l.__data__,u,o))&&("__data__"in l&&(c.__data__=l.__data__),a[u]=c);return new Rn(i,this._parents)}function T3(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function A3(){return[]}function __(t){return t==null?A3:function(){return this.querySelectorAll(t)}}function C3(t){return function(){return T3(t.apply(this,arguments))}}function R3(t){typeof t=="function"?t=C3(t):t=__(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,c=0;c<a;++c)(l=s[c])&&(i.push(t.call(l,l.__data__,c,s)),r.push(l));return new Rn(i,r)}function x_(t){return function(){return this.matches(t)}}function y_(t){return function(e){return e.matches(t)}}var P3=Array.prototype.find;function I3(t){return function(){return P3.call(this.children,t)}}function N3(){return this.firstElementChild}function D3(t){return this.select(t==null?N3:I3(typeof t=="function"?t:y_(t)))}var L3=Array.prototype.filter;function F3(){return Array.from(this.children)}function U3(t){return function(){return L3.call(this.children,t)}}function O3(t){return this.selectAll(t==null?F3:U3(typeof t=="function"?t:y_(t)))}function B3(t){typeof t!="function"&&(t=x_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,c=0;c<s;++c)(l=o[c])&&t.call(l,l.__data__,c,o)&&a.push(l);return new Rn(i,this._parents)}function b_(t){return new Array(t.length)}function k3(){return new Rn(this._enter||this._groups.map(b_),this._parents)}function jl(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}jl.prototype={constructor:jl,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function z3(t){return function(){return t}}function V3(t,e,n,i,r,o){for(var s=0,a,l=e.length,c=o.length;s<c;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new jl(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function H3(t,e,n,i,r,o,s){var a,l,c=new Map,u=e.length,f=o.length,d=new Array(u),h;for(a=0;a<u;++a)(l=e[a])&&(d[a]=h=s.call(l,l.__data__,a,e)+"",c.has(h)?r[a]=l:c.set(h,l));for(a=0;a<f;++a)h=s.call(t,o[a],a,o)+"",(l=c.get(h))?(i[a]=l,l.__data__=o[a],c.delete(h)):n[a]=new jl(t,o[a]);for(a=0;a<u;++a)(l=e[a])&&c.get(d[a])===l&&(r[a]=l)}function G3(t){return t.__data__}function $3(t,e){if(!arguments.length)return Array.from(this,G3);var n=e?H3:V3,i=this._parents,r=this._groups;typeof t!="function"&&(t=z3(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),c=0;c<o;++c){var u=i[c],f=r[c],d=f.length,h=W3(t.call(u,u&&u.__data__,c,i)),g=h.length,x=a[c]=new Array(g),m=s[c]=new Array(g),p=l[c]=new Array(d);n(u,f,x,m,p,h,e);for(var M=0,y=0,b,L;M<g;++M)if(b=x[M]){for(M>=y&&(y=M+1);!(L=m[y])&&++y<g;);b._next=L||null}}return s=new Rn(s,i),s._enter=a,s._exit=l,s}function W3(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function X3(){return new Rn(this._exit||this._groups.map(b_),this._parents)}function Y3(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function q3(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var c=n[l],u=i[l],f=c.length,d=a[l]=new Array(f),h,g=0;g<f;++g)(h=c[g]||u[g])&&(d[g]=h);for(;l<r;++l)a[l]=n[l];return new Rn(a,this._parents)}function K3(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function Z3(t){t||(t=j3);function e(f,d){return f&&d?t(f.__data__,d.__data__):!f-!d}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),c,u=0;u<a;++u)(c=s[u])&&(l[u]=c);l.sort(e)}return new Rn(r,this._parents).order()}function j3(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function J3(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function Q3(){return Array.from(this)}function eN(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function tN(){let t=0;for(const e of this)++t;return t}function nN(){return!this.node()}function iN(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function rN(t){return function(){this.removeAttribute(t)}}function oN(t){return function(){this.removeAttributeNS(t.space,t.local)}}function sN(t,e){return function(){this.setAttribute(t,e)}}function aN(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function lN(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function cN(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function uN(t,e){var n=Lc(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?oN:rN:typeof e=="function"?n.local?cN:lN:n.local?aN:sN)(n,e))}function S_(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function fN(t){return function(){this.style.removeProperty(t)}}function dN(t,e,n){return function(){this.style.setProperty(t,e,n)}}function hN(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function pN(t,e,n){return arguments.length>1?this.each((e==null?fN:typeof e=="function"?hN:dN)(t,e,n??"")):ts(this.node(),t)}function ts(t,e){return t.style.getPropertyValue(e)||S_(t).getComputedStyle(t,null).getPropertyValue(e)}function mN(t){return function(){delete this[t]}}function gN(t,e){return function(){this[t]=e}}function vN(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function _N(t,e){return arguments.length>1?this.each((e==null?mN:typeof e=="function"?vN:gN)(t,e)):this.node()[t]}function M_(t){return t.trim().split(/^|\s+/)}function ph(t){return t.classList||new E_(t)}function E_(t){this._node=t,this._names=M_(t.getAttribute("class")||"")}E_.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function w_(t,e){for(var n=ph(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function T_(t,e){for(var n=ph(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function xN(t){return function(){w_(this,t)}}function yN(t){return function(){T_(this,t)}}function bN(t,e){return function(){(e.apply(this,arguments)?w_:T_)(this,t)}}function SN(t,e){var n=M_(t+"");if(arguments.length<2){for(var i=ph(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?bN:e?xN:yN)(n,e))}function MN(){this.textContent=""}function EN(t){return function(){this.textContent=t}}function wN(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function TN(t){return arguments.length?this.each(t==null?MN:(typeof t=="function"?wN:EN)(t)):this.node().textContent}function AN(){this.innerHTML=""}function CN(t){return function(){this.innerHTML=t}}function RN(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function PN(t){return arguments.length?this.each(t==null?AN:(typeof t=="function"?RN:CN)(t)):this.node().innerHTML}function IN(){this.nextSibling&&this.parentNode.appendChild(this)}function NN(){return this.each(IN)}function DN(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function LN(){return this.each(DN)}function FN(t){var e=typeof t=="function"?t:v_(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function UN(){return null}function ON(t,e){var n=typeof t=="function"?t:v_(t),i=e==null?UN:typeof e=="function"?e:hh(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function BN(){var t=this.parentNode;t&&t.removeChild(this)}function kN(){return this.each(BN)}function zN(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function VN(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function HN(t){return this.select(t?VN:zN)}function GN(t){return arguments.length?this.property("__data__",t):this.node().__data__}function $N(t){return function(e){t.call(this,e,this.__data__)}}function WN(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function XN(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function YN(t,e,n){return function(){var i=this.__on,r,o=$N(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function qN(t,e,n){var i=WN(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,c=a.length,u;l<c;++l)for(r=0,u=a[l];r<o;++r)if((s=i[r]).type===u.type&&s.name===u.name)return u.value}return}for(a=e?YN:XN,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function A_(t,e,n){var i=S_(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function KN(t,e){return function(){return A_(this,t,e)}}function ZN(t,e){return function(){return A_(this,t,e.apply(this,arguments))}}function jN(t,e){return this.each((typeof e=="function"?ZN:KN)(t,e))}function*JN(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var C_=[null];function Rn(t,e){this._groups=t,this._parents=e}function _a(){return new Rn([[document.documentElement]],C_)}function QN(){return this}Rn.prototype=_a.prototype={constructor:Rn,select:w3,selectAll:R3,selectChild:D3,selectChildren:O3,filter:B3,data:$3,enter:k3,exit:X3,join:Y3,merge:q3,selection:QN,order:K3,sort:Z3,call:J3,nodes:Q3,node:eN,size:tN,empty:nN,each:iN,attr:uN,style:pN,property:_N,classed:SN,text:TN,html:PN,raise:NN,lower:LN,append:FN,insert:ON,remove:kN,clone:HN,datum:GN,on:qN,dispatch:jN,[Symbol.iterator]:JN};function br(t){return typeof t=="string"?new Rn([[document.querySelector(t)]],[document.documentElement]):new Rn([[t]],C_)}function eD(t){let e;for(;e=t.sourceEvent;)t=e;return t}function mr(t,e){if(t=eD(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[t.clientX-r.left-e.clientLeft,t.clientY-r.top-e.clientTop]}}return[t.pageX,t.pageY]}const hd={capture:!0,passive:!1};function pd(t){t.preventDefault(),t.stopImmediatePropagation()}function tD(t){var e=t.document.documentElement,n=br(t).on("dragstart.drag",pd,hd);"onselectstart"in e?n.on("selectstart.drag",pd,hd):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function nD(t,e){var n=t.document.documentElement,i=br(t).on("dragstart.drag",null);e&&(i.on("click.drag",pd,hd),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}function mh(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function R_(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function xa(){}var ra=.7,Jl=1/ra,Go="\\s*([+-]?\\d+)\\s*",oa="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",mi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",iD=/^#([0-9a-f]{3,8})$/,rD=new RegExp(`^rgb\\(${Go},${Go},${Go}\\)$`),oD=new RegExp(`^rgb\\(${mi},${mi},${mi}\\)$`),sD=new RegExp(`^rgba\\(${Go},${Go},${Go},${oa}\\)$`),aD=new RegExp(`^rgba\\(${mi},${mi},${mi},${oa}\\)$`),lD=new RegExp(`^hsl\\(${oa},${mi},${mi}\\)$`),cD=new RegExp(`^hsla\\(${oa},${mi},${mi},${oa}\\)$`),Ym={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};mh(xa,sa,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:qm,formatHex:qm,formatHex8:uD,formatHsl:fD,formatRgb:Km,toString:Km});function qm(){return this.rgb().formatHex()}function uD(){return this.rgb().formatHex8()}function fD(){return P_(this).formatHsl()}function Km(){return this.rgb().formatRgb()}function sa(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=iD.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?Zm(e):n===3?new _n(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?il(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?il(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=rD.exec(t))?new _n(e[1],e[2],e[3],1):(e=oD.exec(t))?new _n(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=sD.exec(t))?il(e[1],e[2],e[3],e[4]):(e=aD.exec(t))?il(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=lD.exec(t))?Qm(e[1],e[2]/100,e[3]/100,1):(e=cD.exec(t))?Qm(e[1],e[2]/100,e[3]/100,e[4]):Ym.hasOwnProperty(t)?Zm(Ym[t]):t==="transparent"?new _n(NaN,NaN,NaN,0):null}function Zm(t){return new _n(t>>16&255,t>>8&255,t&255,1)}function il(t,e,n,i){return i<=0&&(t=e=n=NaN),new _n(t,e,n,i)}function dD(t){return t instanceof xa||(t=sa(t)),t?(t=t.rgb(),new _n(t.r,t.g,t.b,t.opacity)):new _n}function md(t,e,n,i){return arguments.length===1?dD(t):new _n(t,e,n,i??1)}function _n(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}mh(_n,md,R_(xa,{brighter(t){return t=t==null?Jl:Math.pow(Jl,t),new _n(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?ra:Math.pow(ra,t),new _n(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new _n(oo(this.r),oo(this.g),oo(this.b),Ql(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:jm,formatHex:jm,formatHex8:hD,formatRgb:Jm,toString:Jm}));function jm(){return`#${Jr(this.r)}${Jr(this.g)}${Jr(this.b)}`}function hD(){return`#${Jr(this.r)}${Jr(this.g)}${Jr(this.b)}${Jr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Jm(){const t=Ql(this.opacity);return`${t===1?"rgb(":"rgba("}${oo(this.r)}, ${oo(this.g)}, ${oo(this.b)}${t===1?")":`, ${t})`}`}function Ql(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function oo(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function Jr(t){return t=oo(t),(t<16?"0":"")+t.toString(16)}function Qm(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Gn(t,e,n,i)}function P_(t){if(t instanceof Gn)return new Gn(t.h,t.s,t.l,t.opacity);if(t instanceof xa||(t=sa(t)),!t)return new Gn;if(t instanceof Gn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),o=Math.max(e,n,i),s=NaN,a=o-r,l=(o+r)/2;return a?(e===o?s=(n-i)/a+(n<i)*6:n===o?s=(i-e)/a+2:s=(e-n)/a+4,a/=l<.5?o+r:2-o-r,s*=60):a=l>0&&l<1?0:s,new Gn(s,a,l,t.opacity)}function pD(t,e,n,i){return arguments.length===1?P_(t):new Gn(t,e,n,i??1)}function Gn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}mh(Gn,pD,R_(xa,{brighter(t){return t=t==null?Jl:Math.pow(Jl,t),new Gn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?ra:Math.pow(ra,t),new Gn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new _n(Gu(t>=240?t-240:t+120,r,i),Gu(t,r,i),Gu(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new Gn(eg(this.h),rl(this.s),rl(this.l),Ql(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=Ql(this.opacity);return`${t===1?"hsl(":"hsla("}${eg(this.h)}, ${rl(this.s)*100}%, ${rl(this.l)*100}%${t===1?")":`, ${t})`}`}}));function eg(t){return t=(t||0)%360,t<0?t+360:t}function rl(t){return Math.max(0,Math.min(1,t||0))}function Gu(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const I_=t=>()=>t;function mD(t,e){return function(n){return t+n*e}}function gD(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function vD(t){return(t=+t)==1?N_:function(e,n){return n-e?gD(e,n,t):I_(isNaN(e)?n:e)}}function N_(t,e){var n=e-t;return n?mD(t,n):I_(isNaN(t)?e:t)}const tg=(function t(e){var n=vD(e);function i(r,o){var s=n((r=md(r)).r,(o=md(o)).r),a=n(r.g,o.g),l=n(r.b,o.b),c=N_(r.opacity,o.opacity);return function(u){return r.r=s(u),r.g=a(u),r.b=l(u),r.opacity=c(u),r+""}}return i.gamma=t,i})(1);function xr(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var gd=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,$u=new RegExp(gd.source,"g");function _D(t){return function(){return t}}function xD(t){return function(e){return t(e)+""}}function yD(t,e){var n=gd.lastIndex=$u.lastIndex=0,i,r,o,s=-1,a=[],l=[];for(t=t+"",e=e+"";(i=gd.exec(t))&&(r=$u.exec(e));)(o=r.index)>n&&(o=e.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(i=i[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,l.push({i:s,x:xr(i,r)})),n=$u.lastIndex;return n<e.length&&(o=e.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?xD(l[0].x):_D(e):(e=l.length,function(c){for(var u=0,f;u<e;++u)a[(f=l[u]).i]=f.x(c);return a.join("")})}var ng=180/Math.PI,vd={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function D_(t,e,n,i,r,o){var s,a,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,s=-s),{translateX:r,translateY:o,rotate:Math.atan2(e,t)*ng,skewX:Math.atan(l)*ng,scaleX:s,scaleY:a}}var ol;function bD(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?vd:D_(e.a,e.b,e.c,e.d,e.e,e.f)}function SD(t){return t==null||(ol||(ol=document.createElementNS("http://www.w3.org/2000/svg","g")),ol.setAttribute("transform",t),!(t=ol.transform.baseVal.consolidate()))?vd:(t=t.matrix,D_(t.a,t.b,t.c,t.d,t.e,t.f))}function L_(t,e,n,i){function r(c){return c.length?c.pop()+" ":""}function o(c,u,f,d,h,g){if(c!==f||u!==d){var x=h.push("translate(",null,e,null,n);g.push({i:x-4,x:xr(c,f)},{i:x-2,x:xr(u,d)})}else(f||d)&&h.push("translate("+f+e+d+n)}function s(c,u,f,d){c!==u?(c-u>180?u+=360:u-c>180&&(c+=360),d.push({i:f.push(r(f)+"rotate(",null,i)-2,x:xr(c,u)})):u&&f.push(r(f)+"rotate("+u+i)}function a(c,u,f,d){c!==u?d.push({i:f.push(r(f)+"skewX(",null,i)-2,x:xr(c,u)}):u&&f.push(r(f)+"skewX("+u+i)}function l(c,u,f,d,h,g){if(c!==f||u!==d){var x=h.push(r(h)+"scale(",null,",",null,")");g.push({i:x-4,x:xr(c,f)},{i:x-2,x:xr(u,d)})}else(f!==1||d!==1)&&h.push(r(h)+"scale("+f+","+d+")")}return function(c,u){var f=[],d=[];return c=t(c),u=t(u),o(c.translateX,c.translateY,u.translateX,u.translateY,f,d),s(c.rotate,u.rotate,f,d),a(c.skewX,u.skewX,f,d),l(c.scaleX,c.scaleY,u.scaleX,u.scaleY,f,d),c=u=null,function(h){for(var g=-1,x=d.length,m;++g<x;)f[(m=d[g]).i]=m.x(h);return f.join("")}}}var MD=L_(bD,"px, ","px)","deg)"),ED=L_(SD,", ",")",")"),wD=1e-12;function ig(t){return((t=Math.exp(t))+1/t)/2}function TD(t){return((t=Math.exp(t))-1/t)/2}function AD(t){return((t=Math.exp(2*t))-1)/(t+1)}const CD=(function t(e,n,i){function r(o,s){var a=o[0],l=o[1],c=o[2],u=s[0],f=s[1],d=s[2],h=u-a,g=f-l,x=h*h+g*g,m,p;if(x<wD)p=Math.log(d/c)/e,m=function(z){return[a+z*h,l+z*g,c*Math.exp(e*z*p)]};else{var M=Math.sqrt(x),y=(d*d-c*c+i*x)/(2*c*n*M),b=(d*d-c*c-i*x)/(2*d*n*M),L=Math.log(Math.sqrt(y*y+1)-y),B=Math.log(Math.sqrt(b*b+1)-b);p=(B-L)/e,m=function(z){var v=z*p,_=ig(L),D=c/(n*M)*(_*AD(e*v+L)-TD(L));return[a+D*h,l+D*g,c*_/ig(e*v+L)]}}return m.duration=p*1e3*e/Math.SQRT2,m}return r.rho=function(o){var s=Math.max(.001,+o),a=s*s,l=a*a;return t(s,a,l)},r})(Math.SQRT2,2,4);var ns=0,As=0,xs=0,F_=1e3,ec,Cs,tc=0,uo=0,Fc=0,aa=typeof performance=="object"&&performance.now?performance:Date,U_=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function gh(){return uo||(U_(RD),uo=aa.now()+Fc)}function RD(){uo=0}function nc(){this._call=this._time=this._next=null}nc.prototype=O_.prototype={constructor:nc,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?gh():+n)+(e==null?0:+e),!this._next&&Cs!==this&&(Cs?Cs._next=this:ec=this,Cs=this),this._call=t,this._time=n,_d()},stop:function(){this._call&&(this._call=null,this._time=1/0,_d())}};function O_(t,e,n){var i=new nc;return i.restart(t,e,n),i}function PD(){gh(),++ns;for(var t=ec,e;t;)(e=uo-t._time)>=0&&t._call.call(void 0,e),t=t._next;--ns}function rg(){uo=(tc=aa.now())+Fc,ns=As=0;try{PD()}finally{ns=0,ND(),uo=0}}function ID(){var t=aa.now(),e=t-tc;e>F_&&(Fc-=e,tc=t)}function ND(){for(var t,e=ec,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:ec=n);Cs=t,_d(i)}function _d(t){if(!ns){As&&(As=clearTimeout(As));var e=t-uo;e>24?(t<1/0&&(As=setTimeout(rg,t-aa.now()-Fc)),xs&&(xs=clearInterval(xs))):(xs||(tc=aa.now(),xs=setInterval(ID,F_)),ns=1,U_(rg))}}function og(t,e,n){var i=new nc;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var DD=dh("start","end","cancel","interrupt"),LD=[],B_=0,sg=1,xd=2,Sl=3,ag=4,yd=5,Ml=6;function Uc(t,e,n,i,r,o){var s=t.__transition;if(!s)t.__transition={};else if(n in s)return;FD(t,n,{name:e,index:i,group:r,on:DD,tween:LD,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:B_})}function vh(t,e){var n=jn(t,e);if(n.state>B_)throw new Error("too late; already scheduled");return n}function yi(t,e){var n=jn(t,e);if(n.state>Sl)throw new Error("too late; already running");return n}function jn(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function FD(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=O_(o,0,n.time);function o(c){n.state=sg,n.timer.restart(s,n.delay,n.time),n.delay<=c&&s(c-n.delay)}function s(c){var u,f,d,h;if(n.state!==sg)return l();for(u in i)if(h=i[u],h.name===n.name){if(h.state===Sl)return og(s);h.state===ag?(h.state=Ml,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[u]):+u<e&&(h.state=Ml,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[u])}if(og(function(){n.state===Sl&&(n.state=ag,n.timer.restart(a,n.delay,n.time),a(c))}),n.state=xd,n.on.call("start",t,t.__data__,n.index,n.group),n.state===xd){for(n.state=Sl,r=new Array(d=n.tween.length),u=0,f=-1;u<d;++u)(h=n.tween[u].value.call(t,t.__data__,n.index,n.group))&&(r[++f]=h);r.length=f+1}}function a(c){for(var u=c<n.duration?n.ease.call(null,c/n.duration):(n.timer.restart(l),n.state=yd,1),f=-1,d=r.length;++f<d;)r[f].call(t,u);n.state===yd&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=Ml,n.timer.stop(),delete i[e];for(var c in i)return;delete t.__transition}}function El(t,e){var n=t.__transition,i,r,o=!0,s;if(n){e=e==null?null:e+"";for(s in n){if((i=n[s]).name!==e){o=!1;continue}r=i.state>xd&&i.state<yd,i.state=Ml,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[s]}o&&delete t.__transition}}function UD(t){return this.each(function(){El(this,t)})}function OD(t,e){var n,i;return function(){var r=yi(this,t),o=r.tween;if(o!==n){i=n=o;for(var s=0,a=i.length;s<a;++s)if(i[s].name===e){i=i.slice(),i.splice(s,1);break}}r.tween=i}}function BD(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var o=yi(this,t),s=o.tween;if(s!==i){r=(i=s).slice();for(var a={name:e,value:n},l=0,c=r.length;l<c;++l)if(r[l].name===e){r[l]=a;break}l===c&&r.push(a)}o.tween=r}}function kD(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=jn(this.node(),n).tween,r=0,o=i.length,s;r<o;++r)if((s=i[r]).name===t)return s.value;return null}return this.each((e==null?OD:BD)(n,t,e))}function _h(t,e,n){var i=t._id;return t.each(function(){var r=yi(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return jn(r,i).value[e]}}function k_(t,e){var n;return(typeof e=="number"?xr:e instanceof sa?tg:(n=sa(e))?(e=n,tg):yD)(t,e)}function zD(t){return function(){this.removeAttribute(t)}}function VD(t){return function(){this.removeAttributeNS(t.space,t.local)}}function HD(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttribute(t);return s===r?null:s===i?o:o=e(i=s,n)}}function GD(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===r?null:s===i?o:o=e(i=s,n)}}function $D(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function WD(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function XD(t,e){var n=Lc(t),i=n==="transform"?ED:k_;return this.attrTween(t,typeof e=="function"?(n.local?WD:$D)(n,i,_h(this,"attr."+t,e)):e==null?(n.local?VD:zD)(n):(n.local?GD:HD)(n,i,e))}function YD(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function qD(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function KD(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&qD(t,o)),n}return r._value=e,r}function ZD(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&YD(t,o)),n}return r._value=e,r}function jD(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=Lc(t);return this.tween(n,(i.local?KD:ZD)(i,e))}function JD(t,e){return function(){vh(this,t).delay=+e.apply(this,arguments)}}function QD(t,e){return e=+e,function(){vh(this,t).delay=e}}function eL(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?JD:QD)(e,t)):jn(this.node(),e).delay}function tL(t,e){return function(){yi(this,t).duration=+e.apply(this,arguments)}}function nL(t,e){return e=+e,function(){yi(this,t).duration=e}}function iL(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?tL:nL)(e,t)):jn(this.node(),e).duration}function rL(t,e){if(typeof e!="function")throw new Error;return function(){yi(this,t).ease=e}}function oL(t){var e=this._id;return arguments.length?this.each(rL(e,t)):jn(this.node(),e).ease}function sL(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;yi(this,t).ease=n}}function aL(t){if(typeof t!="function")throw new Error;return this.each(sL(this._id,t))}function lL(t){typeof t!="function"&&(t=x_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,c=0;c<s;++c)(l=o[c])&&t.call(l,l.__data__,c,o)&&a.push(l);return new er(i,this._parents,this._name,this._id)}function cL(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,o=Math.min(i,r),s=new Array(i),a=0;a<o;++a)for(var l=e[a],c=n[a],u=l.length,f=s[a]=new Array(u),d,h=0;h<u;++h)(d=l[h]||c[h])&&(f[h]=d);for(;a<i;++a)s[a]=e[a];return new er(s,this._parents,this._name,this._id)}function uL(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function fL(t,e,n){var i,r,o=uL(e)?vh:yi;return function(){var s=o(this,t),a=s.on;a!==i&&(r=(i=a).copy()).on(e,n),s.on=r}}function dL(t,e){var n=this._id;return arguments.length<2?jn(this.node(),n).on.on(t):this.each(fL(n,t,e))}function hL(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function pL(){return this.on("end.remove",hL(this._id))}function mL(t){var e=this._name,n=this._id;typeof t!="function"&&(t=hh(t));for(var i=this._groups,r=i.length,o=new Array(r),s=0;s<r;++s)for(var a=i[s],l=a.length,c=o[s]=new Array(l),u,f,d=0;d<l;++d)(u=a[d])&&(f=t.call(u,u.__data__,d,a))&&("__data__"in u&&(f.__data__=u.__data__),c[d]=f,Uc(c[d],e,n,d,c,jn(u,n)));return new er(o,this._parents,e,n)}function gL(t){var e=this._name,n=this._id;typeof t!="function"&&(t=__(t));for(var i=this._groups,r=i.length,o=[],s=[],a=0;a<r;++a)for(var l=i[a],c=l.length,u,f=0;f<c;++f)if(u=l[f]){for(var d=t.call(u,u.__data__,f,l),h,g=jn(u,n),x=0,m=d.length;x<m;++x)(h=d[x])&&Uc(h,e,n,x,d,g);o.push(d),s.push(u)}return new er(o,s,e,n)}var vL=_a.prototype.constructor;function _L(){return new vL(this._groups,this._parents)}function xL(t,e){var n,i,r;return function(){var o=ts(this,t),s=(this.style.removeProperty(t),ts(this,t));return o===s?null:o===n&&s===i?r:r=e(n=o,i=s)}}function z_(t){return function(){this.style.removeProperty(t)}}function yL(t,e,n){var i,r=n+"",o;return function(){var s=ts(this,t);return s===r?null:s===i?o:o=e(i=s,n)}}function bL(t,e,n){var i,r,o;return function(){var s=ts(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),ts(this,t))),s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a))}}function SL(t,e){var n,i,r,o="style."+e,s="end."+o,a;return function(){var l=yi(this,t),c=l.on,u=l.value[o]==null?a||(a=z_(e)):void 0;(c!==n||r!==u)&&(i=(n=c).copy()).on(s,r=u),l.on=i}}function ML(t,e,n){var i=(t+="")=="transform"?MD:k_;return e==null?this.styleTween(t,xL(t,i)).on("end.style."+t,z_(t)):typeof e=="function"?this.styleTween(t,bL(t,i,_h(this,"style."+t,e))).each(SL(this._id,t)):this.styleTween(t,yL(t,i,e),n).on("end.style."+t,null)}function EL(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function wL(t,e,n){var i,r;function o(){var s=e.apply(this,arguments);return s!==r&&(i=(r=s)&&EL(t,s,n)),i}return o._value=e,o}function TL(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,wL(t,e,n??""))}function AL(t){return function(){this.textContent=t}}function CL(t){return function(){var e=t(this);this.textContent=e??""}}function RL(t){return this.tween("text",typeof t=="function"?CL(_h(this,"text",t)):AL(t==null?"":t+""))}function PL(t){return function(e){this.textContent=t.call(this,e)}}function IL(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&PL(r)),e}return i._value=t,i}function NL(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,IL(t))}function DL(){for(var t=this._name,e=this._id,n=V_(),i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,c=0;c<a;++c)if(l=s[c]){var u=jn(l,e);Uc(l,t,n,c,s,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new er(i,this._parents,t,n)}function LL(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--r===0&&o()}};n.each(function(){var c=yi(this,i),u=c.on;u!==t&&(e=(t=u).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),c.on=e}),r===0&&o()})}var FL=0;function er(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function V_(){return++FL}var Pi=_a.prototype;er.prototype={constructor:er,select:mL,selectAll:gL,selectChild:Pi.selectChild,selectChildren:Pi.selectChildren,filter:lL,merge:cL,selection:_L,transition:DL,call:Pi.call,nodes:Pi.nodes,node:Pi.node,size:Pi.size,empty:Pi.empty,each:Pi.each,on:dL,attr:XD,attrTween:jD,style:ML,styleTween:TL,text:RL,textTween:NL,remove:pL,tween:kD,delay:eL,duration:iL,ease:oL,easeVarying:aL,end:LL,[Symbol.iterator]:Pi[Symbol.iterator]};function UL(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var OL={time:null,delay:0,duration:250,ease:UL};function BL(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function kL(t){var e,n;t instanceof er?(e=t._id,t=t._name):(e=V_(),(n=OL).time=gh(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,c=0;c<a;++c)(l=s[c])&&Uc(l,t,e,c,s,n||BL(l,e));return new er(i,this._parents,t,e)}_a.prototype.interrupt=UD;_a.prototype.transition=kL;const sl=t=>()=>t;function zL(t,{sourceEvent:e,target:n,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function zi(t,e,n){this.k=t,this.x=e,this.y=n}zi.prototype={constructor:zi,scale:function(t){return t===1?this:new zi(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new zi(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var xh=new zi(1,0,0);zi.prototype;function Wu(t){t.stopImmediatePropagation()}function ys(t){t.preventDefault(),t.stopImmediatePropagation()}function VL(t){return(!t.ctrlKey||t.type==="wheel")&&!t.button}function HL(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t,t.hasAttribute("viewBox")?(t=t.viewBox.baseVal,[[t.x,t.y],[t.x+t.width,t.y+t.height]]):[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]):[[0,0],[t.clientWidth,t.clientHeight]]}function lg(){return this.__zoom||xh}function GL(t){return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function $L(){return navigator.maxTouchPoints||"ontouchstart"in this}function WL(t,e,n){var i=t.invertX(e[0][0])-n[0][0],r=t.invertX(e[1][0])-n[1][0],o=t.invertY(e[0][1])-n[0][1],s=t.invertY(e[1][1])-n[1][1];return t.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),s>o?(o+s)/2:Math.min(0,o)||Math.max(0,s))}function XL(){var t=VL,e=HL,n=WL,i=GL,r=$L,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,l=CD,c=dh("start","zoom","end"),u,f,d,h=500,g=150,x=0,m=10;function p(E){E.property("__zoom",lg).on("wheel.zoom",v,{passive:!1}).on("mousedown.zoom",_).on("dblclick.zoom",D).filter(r).on("touchstart.zoom",I).on("touchmove.zoom",C).on("touchend.zoom touchcancel.zoom",X).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(E,U,T,P){var k=E.selection?E.selection():E;k.property("__zoom",lg),E!==k?L(E,U,T,P):k.interrupt().each(function(){B(this,arguments).event(P).start().zoom(null,typeof U=="function"?U.apply(this,arguments):U).end()})},p.scaleBy=function(E,U,T,P){p.scaleTo(E,function(){var k=this.__zoom.k,Y=typeof U=="function"?U.apply(this,arguments):U;return k*Y},T,P)},p.scaleTo=function(E,U,T,P){p.transform(E,function(){var k=e.apply(this,arguments),Y=this.__zoom,q=T==null?b(k):typeof T=="function"?T.apply(this,arguments):T,H=Y.invert(q),K=typeof U=="function"?U.apply(this,arguments):U;return n(y(M(Y,K),q,H),k,s)},T,P)},p.translateBy=function(E,U,T,P){p.transform(E,function(){return n(this.__zoom.translate(typeof U=="function"?U.apply(this,arguments):U,typeof T=="function"?T.apply(this,arguments):T),e.apply(this,arguments),s)},null,P)},p.translateTo=function(E,U,T,P,k){p.transform(E,function(){var Y=e.apply(this,arguments),q=this.__zoom,H=P==null?b(Y):typeof P=="function"?P.apply(this,arguments):P;return n(xh.translate(H[0],H[1]).scale(q.k).translate(typeof U=="function"?-U.apply(this,arguments):-U,typeof T=="function"?-T.apply(this,arguments):-T),Y,s)},P,k)};function M(E,U){return U=Math.max(o[0],Math.min(o[1],U)),U===E.k?E:new zi(U,E.x,E.y)}function y(E,U,T){var P=U[0]-T[0]*E.k,k=U[1]-T[1]*E.k;return P===E.x&&k===E.y?E:new zi(E.k,P,k)}function b(E){return[(+E[0][0]+ +E[1][0])/2,(+E[0][1]+ +E[1][1])/2]}function L(E,U,T,P){E.on("start.zoom",function(){B(this,arguments).event(P).start()}).on("interrupt.zoom end.zoom",function(){B(this,arguments).event(P).end()}).tween("zoom",function(){var k=this,Y=arguments,q=B(k,Y).event(P),H=e.apply(k,Y),K=T==null?b(H):typeof T=="function"?T.apply(k,Y):T,le=Math.max(H[1][0]-H[0][0],H[1][1]-H[0][1]),ge=k.__zoom,he=typeof U=="function"?U.apply(k,Y):U,Z=l(ge.invert(K).concat(le/ge.k),he.invert(K).concat(le/he.k));return function(ne){if(ne===1)ne=he;else{var de=Z(ne),Me=le/de[2];ne=new zi(Me,K[0]-de[0]*Me,K[1]-de[1]*Me)}q.zoom(null,ne)}})}function B(E,U,T){return!T&&E.__zooming||new z(E,U)}function z(E,U){this.that=E,this.args=U,this.active=0,this.sourceEvent=null,this.extent=e.apply(E,U),this.taps=0}z.prototype={event:function(E){return E&&(this.sourceEvent=E),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(E,U){return this.mouse&&E!=="mouse"&&(this.mouse[1]=U.invert(this.mouse[0])),this.touch0&&E!=="touch"&&(this.touch0[1]=U.invert(this.touch0[0])),this.touch1&&E!=="touch"&&(this.touch1[1]=U.invert(this.touch1[0])),this.that.__zoom=U,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(E){var U=br(this.that).datum();c.call(E,this.that,new zL(E,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:c}),U)}};function v(E,...U){if(!t.apply(this,arguments))return;var T=B(this,U).event(E),P=this.__zoom,k=Math.max(o[0],Math.min(o[1],P.k*Math.pow(2,i.apply(this,arguments)))),Y=mr(E);if(T.wheel)(T.mouse[0][0]!==Y[0]||T.mouse[0][1]!==Y[1])&&(T.mouse[1]=P.invert(T.mouse[0]=Y)),clearTimeout(T.wheel);else{if(P.k===k)return;T.mouse=[Y,P.invert(Y)],El(this),T.start()}ys(E),T.wheel=setTimeout(q,g),T.zoom("mouse",n(y(M(P,k),T.mouse[0],T.mouse[1]),T.extent,s));function q(){T.wheel=null,T.end()}}function _(E,...U){if(d||!t.apply(this,arguments))return;var T=E.currentTarget,P=B(this,U,!0).event(E),k=br(E.view).on("mousemove.zoom",K,!0).on("mouseup.zoom",le,!0),Y=mr(E,T),q=E.clientX,H=E.clientY;tD(E.view),Wu(E),P.mouse=[Y,this.__zoom.invert(Y)],El(this),P.start();function K(ge){if(ys(ge),!P.moved){var he=ge.clientX-q,Z=ge.clientY-H;P.moved=he*he+Z*Z>x}P.event(ge).zoom("mouse",n(y(P.that.__zoom,P.mouse[0]=mr(ge,T),P.mouse[1]),P.extent,s))}function le(ge){k.on("mousemove.zoom mouseup.zoom",null),nD(ge.view,P.moved),ys(ge),P.event(ge).end()}}function D(E,...U){if(t.apply(this,arguments)){var T=this.__zoom,P=mr(E.changedTouches?E.changedTouches[0]:E,this),k=T.invert(P),Y=T.k*(E.shiftKey?.5:2),q=n(y(M(T,Y),P,k),e.apply(this,U),s);ys(E),a>0?br(this).transition().duration(a).call(L,q,P,E):br(this).call(p.transform,q,P,E)}}function I(E,...U){if(t.apply(this,arguments)){var T=E.touches,P=T.length,k=B(this,U,E.changedTouches.length===P).event(E),Y,q,H,K;for(Wu(E),q=0;q<P;++q)H=T[q],K=mr(H,this),K=[K,this.__zoom.invert(K),H.identifier],k.touch0?!k.touch1&&k.touch0[2]!==K[2]&&(k.touch1=K,k.taps=0):(k.touch0=K,Y=!0,k.taps=1+!!u);u&&(u=clearTimeout(u)),Y&&(k.taps<2&&(f=K[0],u=setTimeout(function(){u=null},h)),El(this),k.start())}}function C(E,...U){if(this.__zooming){var T=B(this,U).event(E),P=E.changedTouches,k=P.length,Y,q,H,K;for(ys(E),Y=0;Y<k;++Y)q=P[Y],H=mr(q,this),T.touch0&&T.touch0[2]===q.identifier?T.touch0[0]=H:T.touch1&&T.touch1[2]===q.identifier&&(T.touch1[0]=H);if(q=T.that.__zoom,T.touch1){var le=T.touch0[0],ge=T.touch0[1],he=T.touch1[0],Z=T.touch1[1],ne=(ne=he[0]-le[0])*ne+(ne=he[1]-le[1])*ne,de=(de=Z[0]-ge[0])*de+(de=Z[1]-ge[1])*de;q=M(q,Math.sqrt(ne/de)),H=[(le[0]+he[0])/2,(le[1]+he[1])/2],K=[(ge[0]+Z[0])/2,(ge[1]+Z[1])/2]}else if(T.touch0)H=T.touch0[0],K=T.touch0[1];else return;T.zoom("touch",n(y(q,H,K),T.extent,s))}}function X(E,...U){if(this.__zooming){var T=B(this,U).event(E),P=E.changedTouches,k=P.length,Y,q;for(Wu(E),d&&clearTimeout(d),d=setTimeout(function(){d=null},h),Y=0;Y<k;++Y)q=P[Y],T.touch0&&T.touch0[2]===q.identifier?delete T.touch0:T.touch1&&T.touch1[2]===q.identifier&&delete T.touch1;if(T.touch1&&!T.touch0&&(T.touch0=T.touch1,delete T.touch1),T.touch0)T.touch0[1]=this.__zoom.invert(T.touch0[0]);else if(T.end(),T.taps===2&&(q=mr(q,this),Math.hypot(f[0]-q[0],f[1]-q[1])<m)){var H=br(this).on("dblclick.zoom");H&&H.apply(this,arguments)}}}return p.wheelDelta=function(E){return arguments.length?(i=typeof E=="function"?E:sl(+E),p):i},p.filter=function(E){return arguments.length?(t=typeof E=="function"?E:sl(!!E),p):t},p.touchable=function(E){return arguments.length?(r=typeof E=="function"?E:sl(!!E),p):r},p.extent=function(E){return arguments.length?(e=typeof E=="function"?E:sl([[+E[0][0],+E[0][1]],[+E[1][0],+E[1][1]]]),p):e},p.scaleExtent=function(E){return arguments.length?(o[0]=+E[0],o[1]=+E[1],p):[o[0],o[1]]},p.translateExtent=function(E){return arguments.length?(s[0][0]=+E[0][0],s[1][0]=+E[1][0],s[0][1]=+E[0][1],s[1][1]=+E[1][1],p):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},p.constrain=function(E){return arguments.length?(n=E,p):n},p.duration=function(E){return arguments.length?(a=+E,p):a},p.interpolate=function(E){return arguments.length?(l=E,p):l},p.on=function(){var E=c.on.apply(c,arguments);return E===c?p:E},p.clickDistance=function(E){return arguments.length?(x=(E=+E)*E,p):Math.sqrt(x)},p.tapDistance=function(E){return arguments.length?(m=+E,p):m},p}const H_=Symbol("MiniMapSlots"),YL=["id","x","y","rx","ry","width","height","fill","stroke","stroke-width","shape-rendering"],qL={name:"MiniMapNode",compatConfig:{MODE:3},inheritAttrs:!1},KL=Lt({...qL,props:{id:{},type:{},selected:{type:Boolean},dragging:{type:Boolean},position:{},dimensions:{},borderRadius:{},color:{},shapeRendering:{},strokeColor:{},strokeWidth:{},hidden:{type:Boolean}},emits:["click","dblclick","mouseenter","mousemove","mouseleave"],setup(t,{emit:e}){const n=t,i=Dn(H_),r=Ud(),o=Tt(()=>r.style??{});function s(f){e("click",f)}function a(f){e("dblclick",f)}function l(f){e("mouseenter",f)}function c(f){e("mousemove",f)}function u(f){e("mouseleave",f)}return(f,d)=>!f.hidden&&f.dimensions.width!==0&&f.dimensions.height!==0?(ye(),Te(dt,{key:0},[pe(i)[`node-${n.type}`]?(ye(),yn(Jg(pe(i)[`node-${n.type}`]),ax($s({key:0},{...n,...f.$attrs})),null,16)):(ye(),Te("rect",$s({key:1,id:f.id},f.$attrs,{class:["vue-flow__minimap-node",{selected:f.selected,dragging:f.dragging}],x:f.position.x,y:f.position.y,rx:f.borderRadius,ry:f.borderRadius,width:f.dimensions.width,height:f.dimensions.height,fill:f.color||o.value.background||o.value.backgroundColor,stroke:f.strokeColor,"stroke-width":f.strokeWidth,"shape-rendering":f.shapeRendering,onClick:s,onDblclick:a,onMouseenter:l,onMousemove:c,onMouseleave:u}),null,16,YL))],64)):ct("",!0)}}),ZL=["width","height","viewBox","aria-labelledby"],jL=["id"],JL=["d","fill","stroke","stroke-width"],QL={name:"MiniMap",compatConfig:{MODE:3}},eF=Lt({...QL,props:{nodeColor:{type:[String,Function],default:"#e2e2e2"},nodeStrokeColor:{type:[String,Function],default:"transparent"},nodeClassName:{type:[String,Function]},nodeBorderRadius:{default:5},nodeStrokeWidth:{default:2},maskColor:{default:"rgb(240, 240, 240, 0.6)"},maskStrokeColor:{default:"none"},maskStrokeWidth:{default:1},position:{default:"bottom-right"},pannable:{type:Boolean,default:!1},zoomable:{type:Boolean,default:!1},width:{},height:{},ariaLabel:{default:"Vue Flow mini map"},inversePan:{type:Boolean,default:!1},zoomStep:{default:1},offsetScale:{default:5},maskBorderRadius:{default:0}},emits:["click","nodeClick","nodeDblclick","nodeMouseenter","nodeMousemove","nodeMouseleave"],setup(t,{emit:e}){const n=tv(),i=Ud(),r=200,o=150,{id:s,edges:a,viewport:l,translateExtent:c,dimensions:u,emits:f,d3Selection:d,d3Zoom:h,getNodesInitialized:g}=Ft(),x=Ke();Tr(H_,n);const m=Tt(()=>{var k;return t.width??((k=i.style)==null?void 0:k.width)??r}),p=Tt(()=>{var k;return t.height??((k=i.style)==null?void 0:k.height)??o}),M=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision",y=He(()=>typeof t.nodeColor=="string"?()=>t.nodeColor:t.nodeColor),b=He(()=>typeof t.nodeStrokeColor=="string"?()=>t.nodeStrokeColor:t.nodeStrokeColor),L=He(()=>typeof t.nodeClassName=="string"?()=>t.nodeClassName:typeof t.nodeClassName=="function"?t.nodeClassName:()=>""),B=He(()=>lh(g.value.filter(k=>!k.hidden))),z=He(()=>({x:-l.value.x/l.value.zoom,y:-l.value.y/l.value.zoom,width:u.value.width/l.value.zoom,height:u.value.height/l.value.zoom})),v=He(()=>g.value&&g.value.length?lP(B.value,z.value):z.value),_=He(()=>{const k=v.value.width/m.value,Y=v.value.height/p.value;return Math.max(k,Y)}),D=He(()=>{const k=_.value*m.value,Y=_.value*p.value,q=t.offsetScale*_.value;return{offset:q,x:v.value.x-(k-v.value.width)/2-q,y:v.value.y-(Y-v.value.height)/2-q,width:k+q*2,height:Y+q*2}}),I=He(()=>!D.value.x||!D.value.y?"":`
    M${D.value.x-D.value.offset},${D.value.y-D.value.offset}
    h${D.value.width+D.value.offset*2}
    v${D.value.height+D.value.offset*2}
    h${-D.value.width-D.value.offset*2}z
    M${z.value.x+t.maskBorderRadius},${z.value.y}
    h${z.value.width-2*t.maskBorderRadius}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 ${t.maskBorderRadius},${t.maskBorderRadius}
    v${z.value.height-2*t.maskBorderRadius}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 -${t.maskBorderRadius},${t.maskBorderRadius}
    h${-(z.value.width-2*t.maskBorderRadius)}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 -${t.maskBorderRadius},-${t.maskBorderRadius}
    v${-(z.value.height-2*t.maskBorderRadius)}
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 ${t.maskBorderRadius},-${t.maskBorderRadius}z`);Yx(k=>{if(x.value){const Y=br(x.value),q=le=>{if(le.sourceEvent.type!=="wheel"||!d.value||!h.value)return;const ge=le.sourceEvent.ctrlKey&&ia()?10:1,he=-le.sourceEvent.deltaY*(le.sourceEvent.deltaMode===1?.05:le.sourceEvent.deltaMode?1:.002)*t.zoomStep,Z=l.value.zoom*2**(he*ge);h.value.scaleTo(d.value,Z)},H=le=>{if(le.sourceEvent.type!=="mousemove"||!d.value||!h.value)return;const ge=_.value*Math.max(1,l.value.zoom)*(t.inversePan?-1:1),he={x:l.value.x-le.sourceEvent.movementX*ge,y:l.value.y-le.sourceEvent.movementY*ge},Z=[[0,0],[u.value.width,u.value.height]],ne=xh.translate(he.x,he.y).scale(l.value.zoom),de=h.value.constrain()(ne,Z,c.value);h.value.transform(d.value,de)},K=XL().wheelDelta(le=>ld(le)*(t.zoomStep/10)).on("zoom",t.pannable?H:()=>{}).on("zoom.wheel",t.zoomable?q:()=>{});Y.call(K),k(()=>{Y.on("zoom",null)})}},{flush:"post"});function C(k){const[Y,q]=mr(k);e("click",{event:k,position:{x:Y,y:q}})}function X(k,Y){const q={event:k,node:Y,connectedEdges:Yr([Y],a.value)};f.miniMapNodeClick(q),e("nodeClick",q)}function E(k,Y){const q={event:k,node:Y,connectedEdges:Yr([Y],a.value)};f.miniMapNodeDoubleClick(q),e("nodeDblclick",q)}function U(k,Y){const q={event:k,node:Y,connectedEdges:Yr([Y],a.value)};f.miniMapNodeMouseEnter(q),e("nodeMouseenter",q)}function T(k,Y){const q={event:k,node:Y,connectedEdges:Yr([Y],a.value)};f.miniMapNodeMouseMove(q),e("nodeMousemove",q)}function P(k,Y){const q={event:k,node:Y,connectedEdges:Yr([Y],a.value)};f.miniMapNodeMouseLeave(q),e("nodeMouseleave",q)}return(k,Y)=>(ye(),yn(pe(f3),{position:k.position,class:zt(["vue-flow__minimap",{pannable:k.pannable,zoomable:k.zoomable}])},{default:En(()=>[(ye(),Te("svg",{ref_key:"el",ref:x,width:m.value,height:p.value,viewBox:[D.value.x,D.value.y,D.value.width,D.value.height].join(" "),role:"img","aria-labelledby":`vue-flow__minimap-${pe(s)}`,onClick:C},[k.ariaLabel?(ye(),Te("title",{key:0,id:`vue-flow__minimap-${pe(s)}`},Ze(k.ariaLabel),9,jL)):ct("",!0),(ye(!0),Te(dt,null,wn(pe(g),q=>(ye(),yn(KL,{id:q.id,key:q.id,f:"",position:q.computedPosition,dimensions:q.dimensions,selected:q.selected,dragging:q.dragging,style:Nt(q.style),class:zt(L.value(q)),color:y.value(q),"border-radius":k.nodeBorderRadius,"stroke-color":b.value(q),"stroke-width":k.nodeStrokeWidth,"shape-rendering":pe(M),type:q.type,hidden:q.hidden,onClick:H=>X(H,q),onDblclick:H=>E(H,q),onMouseenter:H=>U(H,q),onMousemove:H=>T(H,q),onMouseleave:H=>P(H,q)},null,8,["id","position","dimensions","selected","dragging","style","class","color","border-radius","stroke-color","stroke-width","shape-rendering","type","hidden","onClick","onDblclick","onMouseenter","onMousemove","onMouseleave"]))),128)),ve("path",{class:"vue-flow__minimap-mask",d:I.value,fill:k.maskColor,stroke:k.maskStrokeColor,"stroke-width":k.maskStrokeWidth,"fill-rule":"evenodd"},null,8,JL)],8,ZL))]),_:1},8,["position","class"]))}});let bd=0;function tF(){return`node_${++bd}_${Date.now().toString(36)}`}const Oc=Tb("graph",()=>{const t=Ke([]),e=Ke([]),n=wr({}),i=Ke(null),r=Ke(!0),o=Ke("panel"),s=Ke(null),a=Ke("Untitled Project"),l=Ke({}),c=Ke({}),u=Ke({});let f=null;const d=wr({}),h=He(()=>i.value&&t.value.find(H=>H.id===i.value)||null),g=He(()=>h.value?si(h.value.type):null),x=He(()=>i.value?n[i.value]||{}:{});function m(H){f=H}function p(H,K={x:200,y:200}){const le=si(H);if(!le)return console.warn(`Unknown node type: ${H}`),null;const ge=tF(),he={};for(const[ne,de]of Object.entries(le.params))he[ne]=de.default;n[ge]=he;const Z={id:ge,type:H,position:K,data:{label:le.label,category:le.category,def:le}};return t.value=[...t.value,Z],ge}function M(H){f&&f(H),t.value=t.value.filter(K=>K.id!==H),e.value=e.value.filter(K=>K.source!==H&&K.target!==H),delete n[H],delete d[H],i.value===H&&(i.value=null),s.value===H&&(s.value=null)}function y(H){const K=t.value.find(Me=>Me.id===H.source),le=t.value.find(Me=>Me.id===H.target);if(!K||!le)return!1;const ge=si(K.type),he=si(le.type);if(!ge||!he)return!1;const Z=ge.outputs.find(Me=>Me.id===H.sourceHandle);let ne=he.inputs.find(Me=>Me.id===H.targetHandle);if(!ne){const Me=d[le.id];if(Me&&Me[H.targetHandle]){const xe=he.params[H.targetHandle];if(xe){const Re=xe.type==="int"?_e.INT:(xe.type==="float",_e.FLOAT);ne={id:H.targetHandle,type:Re}}}}if(!Z||!ne)return!1;if(!qT(Z.type,ne.type))return console.warn(`Type mismatch: ${Z.type} → ${ne.type}`),!1;e.value=e.value.filter(Me=>!(Me.target===H.target&&Me.targetHandle===H.targetHandle));const de={id:`e_${H.source}_${H.sourceHandle}-${H.target}_${H.targetHandle}`,source:H.source,sourceHandle:H.sourceHandle,target:H.target,targetHandle:H.targetHandle};return e.value=[...e.value,de],!0}function b(H){e.value=e.value.filter(K=>K.id!==H)}function L(H,K,le){n[H]||(n[H]={}),n[H][K]=le}function B(H,K){d[H]||(d[H]={}),d[H][K]=!d[H][K],d[H][K]||(e.value=e.value.filter(le=>!(le.target===H&&le.targetHandle===K)))}function z(H,K){return!!d[H]?.[K]}function v(H){const K=t.value.find(he=>he.id===H);if(!K)return[];const le=si(K.type);if(!le)return[];const ge=d[H]||{};return Object.entries(ge).filter(([he,Z])=>Z).map(([he])=>{const Z=le.params[he];if(!Z)return null;const ne=Z.type==="int"?_e.INT:(Z.type==="float",_e.FLOAT);return{id:he,label:Z.label,type:ne}}).filter(Boolean)}function _(H){i.value=H}function D(){r.value=!r.value}function I(){r.value=!1}function C(){r.value=!0}function X(){o.value=o.value==="panel"?"background":"panel"}function E(){for(const H of t.value)f&&f(H.id);t.value=[],e.value=[],Object.keys(n).forEach(H=>delete n[H]),Object.keys(d).forEach(H=>delete d[H]),i.value=null,s.value=null,bd=0}function U(){const H={version:1,title:a.value,timestamp:Date.now(),nodes:t.value.map(K=>({id:K.id,type:K.type,position:K.position})),edges:e.value.map(K=>({id:K.id,source:K.source,sourceHandle:K.sourceHandle,target:K.target,targetHandle:K.targetHandle})),params:{...n},exposedParams:{...d},settings:{previewMode:o.value}};return JSON.stringify(H,null,2)}function T(H){try{const K=JSON.parse(H);K.version!==1&&console.warn("Unknown graph version:",K.version),E(),a.value=K.title||"Untitled Project";for(const ge of K.nodes){const he=si(ge.type);if(!he){console.warn(`Skipping unknown node type: ${ge.type}`);continue}const Z={id:ge.id,type:ge.type,position:ge.position,data:{label:he.label,category:he.category,def:he}};t.value.push(Z);const ne={};for(const[de,Me]of Object.entries(he.params))ne[de]=K.params?.[ge.id]?.[de]??Me.default;n[ge.id]=ne}if(K.exposedParams)for(const[ge,he]of Object.entries(K.exposedParams))d[ge]={...he};for(const ge of K.edges)e.value.push(ge);return K.settings&&(o.value=K.settings.previewMode||"panel"),bd=K.nodes.reduce((ge,he)=>{const Z=he.id.match(/node_(\d+)_/);return Z?Math.max(ge,parseInt(Z[1])):ge},0),!0}catch(K){return console.error("Failed to load graph:",K),!1}}function P(){const H=U(),K=`mangleditor-graph-${a.value||"default"}`;return localStorage.setItem(K,H),!0}async function k(H=null){try{const K=H?`mangleditor-graph-${H}`:`mangleditor-graph-${a.value||"default"}`,le=localStorage.getItem(K);if(le)return T(le);if(!H){console.log("No local save found. Loading StarterTemplate by default...");try{const ge=await fetch("./StarterTemplate.json");if(ge.ok){const he=await ge.text();return T(he)}}catch(ge){console.error("Failed to auto-load StarterTemplate:",ge)}}return!1}catch(K){return console.error("Failed to load from localStorage:",K),!1}}function Y(){const H=U(),K=new Blob([H],{type:"application/json"}),le=URL.createObjectURL(K),ge=document.createElement("a");ge.href=le;const he=(a.value||"mangleditor").replace(/[^a-zA-Z0-9_-]/g,"_");ge.download=`${he}.json`,ge.click(),URL.revokeObjectURL(le)}function q(H){const K=t.value.find(le=>le.id===H);K&&K.type==="button"&&(K._triggered=!0)}return{nodes:t,edges:e,nodeParams:n,selectedNodeId:i,isRendering:r,previewMode:o,previewNodeId:s,projectTitle:a,exposedParams:d,selectedNode:h,selectedNodeDef:g,selectedNodeParams:x,dataOutputs:l,perfTimings:c,previewImages:u,getDataOutput(H,K){return l.value[H]?.[K]},addNode:p,removeNode:M,addEdge:y,removeEdge:b,setParam:L,selectNode:_,toggleRendering:D,stopRendering:I,startRendering:C,togglePreviewMode:X,resetGraph:E,saveGraph:U,saveToLocalStorage:P,loadGraph:T,loadFromLocalStorage:k,downloadGraph:Y,triggerButton:q,onNodeRemoved:m,toggleExposeParam:B,isParamExposed:z,getExposedHandles:v}}),nF=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},iF={class:"flow-node__header"},rF={class:"flow-node__title"},oF=["title"],sF=["title"],aF={class:"flow-node__body"},lF={class:"flow-node__handles"},cF={class:"flow-node__handle-label"},uF={class:"flow-node__handle-type"},fF=["title"],dF={class:"flow-node__handle-label flow-node__handle-label--exposed"},hF={class:"flow-node__handle-type"},pF={key:1,class:"flow-node__image-preview-container"},mF=["src"],gF={key:1,class:"flow-node__slot-label",style:{"text-align":"center",color:"var(--accent-success)",padding:"8px 0","font-size":"11px"}},vF={key:1,class:"flow-node__image-preview-container"},_F=["min","max","step","value"],xF={class:"flow-node__slider-value"},yF={class:"flow-node__inline-param-row"},bF=["value"],SF=["value"],MF={class:"flow-node__inline-param-row"},EF=["value"],wF={class:"flow-node__inline-param-val"},TF={class:"flow-node__inline-param-row"},AF=["value"],CF={class:"flow-node__inline-param-val"},RF={key:7,class:"flow-node__monitor"},PF=["title"],IF={key:8,class:"flow-node__preview-inline"},NF={class:"flow-node__handles"},DF={class:"flow-node__handle-type"},LF={class:"flow-node__handle-label"},FF=["title"],cg=100,UF={__name:"FlowNode",props:{nodeId:{type:String,required:!0},nodeType:{type:String,required:!0},def:{type:Object,required:!0},params:{type:Object,default:()=>({})},selected:{type:Boolean,default:!1},inputValues:{type:Object,default:()=>({})},outputValues:{type:Object,default:()=>({})},monitorValue:{type:Number,default:null},exposedHandles:{type:Array,default:()=>[]},perfMs:{type:Number,default:null}},emits:["select","imageLoaded","export","trigger","paramChange"],setup(t,{emit:e}){const n=t,i=e,r=Oc(),o=He(()=>zl[n.def.category]?.color||"#888"),s=Ke(null),a=Ke(!1),l=Ke(null),c=He(()=>!!l.value);Kn(()=>{if((n.nodeType==="imageInput"||n.nodeType==="uiImageSlot")&&!l.value){const v="/default_img.jpg";l.value=v;const _=new Image;_.crossOrigin="anonymous",_.src=v,_.onload=()=>{i("imageLoaded",{url:v,width:_.naturalWidth,height:_.naturalHeight,img:_})}}});const u=Ke(null),f=Ke([]),d=Ke(null);ft(()=>r.previewImages[n.nodeId],v=>{if(n.nodeType!=="preview"||!v||!d.value)return;const _=d.value,D=_.getContext("2d");(_.width!==v.width||_.height!==v.height)&&(_.width=v.width,_.height=v.height);const I=document.createElement("canvas");I.width=v.width,I.height=v.height;const C=I.getContext("2d"),X=new ImageData(new Uint8ClampedArray(v.pixels.buffer),v.width,v.height);C.putImageData(X,0,0),D.save(),D.scale(1,-1),D.drawImage(I,0,-v.height),D.restore()});const h=Ke(!1),g=Ke(null);let x=null;async function m(){try{x=await navigator.mediaDevices.getUserMedia({video:{width:1280,height:720},audio:!1}),h.value=!0,setTimeout(()=>{g.value&&(g.value.srcObject=x,g.value.onloadedmetadata=()=>{g.value.play(),i("imageLoaded",{url:"webcam",width:g.value.videoWidth,height:g.value.videoHeight,img:g.value,isVideo:!0})})},50)}catch(v){console.error("Failed to access webcam:",v),alert("Could not access webcam. Please check permissions.")}}function p(){x&&(x.getTracks().forEach(v=>v.stop()),x=null),h.value=!1,i("imageLoaded",{url:"webcam",width:1,height:1,img:null,isVideo:!1})}is(()=>{p()});function M(){s.value?.click()}function y(v){const _=v.target.files?.[0];_&&L(_)}function b(v){a.value=!1;const _=v.dataTransfer.files?.[0];_&&_.type.startsWith("image/")&&L(_)}function L(v){const _=URL.createObjectURL(v);l.value=_;const D=new Image;D.onload=()=>{i("imageLoaded",{url:_,width:D.naturalWidth,height:D.naturalHeight,img:D})},D.src=_}function B(v){return v==null?"":typeof v=="number"?v.toFixed(2):String(v)}ft(()=>n.monitorValue,v=>{v!=null&&(f.value.push(v),f.value.length>cg&&f.value.shift(),z())});function z(){const v=u.value;if(!v)return;const _=v.getContext("2d"),D=v.width,I=v.height,C=f.value;if(_.clearRect(0,0,D,I),C.length<2)return;const X=Math.min(...C),E=Math.max(...C),U=E-X||1;_.strokeStyle="#00d4ff",_.lineWidth=1.5,_.beginPath();for(let T=0;T<C.length;T++){const P=T/(cg-1)*D,k=I-(C[T]-X)/U*(I-4)-2;T===0?_.moveTo(P,k):_.lineTo(P,k)}if(_.stroke(),X<=0&&E>=0){const T=I-(0-X)/U*(I-4)-2;_.strokeStyle="#ffffff30",_.lineWidth=.5,_.beginPath(),_.moveTo(0,T),_.lineTo(D,T),_.stroke()}}return(v,_)=>(ye(),Te("div",{class:zt(["flow-node",{"flow-node--selected":t.selected},{"flow-node--compact":t.def.compact},{"flow-node--bypassed":t.params._bypass}]),onClick:_[31]||(_[31]=D=>v.$emit("select"))},[ve("div",iF,[ve("div",{class:"flow-node__category-dot",style:Nt({background:o.value})},null,4),ve("div",rF,Ze(t.def.label),1),t.def.shaderKey||t.def.category==="image"||t.def.category==="uv"?(ye(),Te("button",{key:0,class:zt(["flow-node__bypass-btn",{"flow-node__bypass-btn--active":t.params._bypass}]),onClick:_[0]||(_[0]=at(D=>v.$emit("paramChange","_bypass",!t.params._bypass),["stop"])),title:t.params._bypass?"Enable (bypassed)":"Bypass"},Ze(t.params._bypass?"⊘":"⏵"),11,oF)):ct("",!0),t.perfMs!==null?(ye(),Te("span",{key:1,class:"flow-node__perf-badge",title:t.perfMs+"ms"},Ze(t.perfMs<1?"<1":t.perfMs.toFixed(1))+"ms ",9,sF)):ct("",!0)]),ve("div",aF,[ve("div",lF,[(ye(!0),Te(dt,null,wn(t.def.inputs,D=>(ye(),Te("div",{key:"in-"+D.id,class:"flow-node__handle-row flow-node__handle-row--input"},[rt(pe(ro),{type:"target",id:D.id,position:pe(Ve).Left,style:Nt({background:pe(Iu)(D.type)})},null,8,["id","position","style"]),ve("span",cF,Ze(D.label),1),ve("span",uF,Ze(D.type),1),t.inputValues[D.id]!==void 0?(ye(),Te("span",{key:0,class:"flow-node__handle-value",title:"Value: "+t.inputValues[D.id]},Ze(B(t.inputValues[D.id])),9,fF)):ct("",!0)]))),128)),(ye(!0),Te(dt,null,wn(t.exposedHandles,D=>(ye(),Te("div",{key:"exp-"+D.id,class:"flow-node__handle-row flow-node__handle-row--input flow-node__handle-row--exposed"},[rt(pe(ro),{type:"target",id:D.id,position:pe(Ve).Left,style:Nt({background:pe(Iu)(D.type)})},null,8,["id","position","style"]),ve("span",dF,"⊕ "+Ze(D.label),1),ve("span",hF,Ze(D.type),1)]))),128))]),t.nodeType==="imageInput"||t.nodeType==="uiImageSlot"?(ye(),Te("div",{key:0,class:"flow-node__controls",onPointerdown:_[3]||(_[3]=at(()=>{},["stop"])),onMousedown:_[4]||(_[4]=at(()=>{},["stop"]))},[ve("input",{ref_key:"fileInput",ref:s,type:"file",accept:"image/*",class:"file-input-hidden",onChange:y},null,544),c.value?(ye(),Te("div",pF,[ve("button",{class:"flow-node__inline-btn flow-node__inline-btn--sm",onClick:at(M,["stop"]),style:{"margin-bottom":"4px",width:"100%"}}," 📷 Replace Image "),t.nodeType==="imageInput"?(ye(),Te("img",{key:0,src:l.value,class:"flow-node__image-preview"},null,8,mF)):(ye(),Te("div",gF," Image Loaded ✓ "))])):(ye(),Te("div",{key:0,class:zt(["flow-node__drop-zone",{"flow-node__drop-zone--active":a.value}]),onClick:at(M,["stop"]),onDragover:_[1]||(_[1]=at(D=>a.value=!0,["prevent"])),onDragleave:_[2]||(_[2]=D=>a.value=!1),onDrop:at(b,["prevent"])}," 📷 Drop image or click to browse ",34))],32)):ct("",!0),t.nodeType==="webcamInput"?(ye(),Te("div",{key:1,class:"flow-node__controls",onPointerdown:_[5]||(_[5]=at(()=>{},["stop"])),onMousedown:_[6]||(_[6]=at(()=>{},["stop"]))},[h.value?(ye(),Te("div",vF,[ve("button",{class:"flow-node__inline-btn flow-node__inline-btn--sm",onClick:at(p,["stop"]),style:{"margin-bottom":"4px",width:"100%",background:"var(--bg-red-dim)","border-color":"var(--accent-danger)"}}," Stop Webcam "),ve("video",{ref_key:"webcamVideo",ref:g,class:"flow-node__image-preview",autoplay:"",playsinline:"",muted:""},null,512)])):(ye(),Te("div",{key:0,class:"flow-node__drop-zone",onClick:at(m,["stop"])}," 🎥 Start Webcam "))],32)):ct("",!0),t.nodeType==="imageOutput"?(ye(),Te("div",{key:2,class:"flow-node__controls",onPointerdown:_[8]||(_[8]=at(()=>{},["stop"])),onMousedown:_[9]||(_[9]=at(()=>{},["stop"]))},[ve("button",{class:"flow-node__inline-btn",onClick:_[7]||(_[7]=at(D=>v.$emit("export"),["stop"]))}," ⬇ Export "+Ze(t.params.format||"PNG"),1)],32)):ct("",!0),t.nodeType==="button"?(ye(),Te("div",{key:3,class:"flow-node__controls",onPointerdown:_[11]||(_[11]=at(()=>{},["stop"])),onMousedown:_[12]||(_[12]=at(()=>{},["stop"]))},[ve("button",{class:"flow-node__inline-btn",onClick:_[10]||(_[10]=at(D=>v.$emit("trigger"),["stop"]))},Ze(t.params.label||"Press"),1)],32)):ct("",!0),t.nodeType==="slider"?(ye(),Te("div",{key:4,class:"flow-node__slider-container",onPointerdown:_[16]||(_[16]=at(()=>{},["stop"])),onMousedown:_[17]||(_[17]=at(()=>{},["stop"]))},[ve("input",{type:"range",class:"flow-node__inline-slider",min:t.params.min??0,max:t.params.max??1,step:t.params.step??.01,value:t.params.value??.5,onInput:_[13]||(_[13]=at(D=>v.$emit("paramChange","value",Number(D.target.value)),["stop"])),onPointerdown:_[14]||(_[14]=at(()=>{},["stop"])),onMousedown:_[15]||(_[15]=at(()=>{},["stop"]))},null,40,_F),ve("div",xF,Ze((t.params.value??.5).toFixed(3)),1)],32)):ct("",!0),t.nodeType==="lfo"?(ye(),Te("div",{key:5,class:"flow-node__inline-params",onPointerdown:_[27]||(_[27]=at(()=>{},["stop"])),onMousedown:_[28]||(_[28]=at(()=>{},["stop"]))},[ve("div",yF,[_[32]||(_[32]=ve("span",{class:"flow-node__inline-param-label"},"wave",-1)),ve("select",{class:"flow-node__inline-select",value:t.params.waveform??"sine",onChange:_[18]||(_[18]=at(D=>v.$emit("paramChange","waveform",D.target.value),["stop"])),onPointerdown:_[19]||(_[19]=at(()=>{},["stop"])),onMousedown:_[20]||(_[20]=at(()=>{},["stop"]))},[(ye(),Te(dt,null,wn(["sine","saw","square","triangle"],D=>ve("option",{key:D,value:D},Ze(D),9,SF)),64))],40,bF)]),ve("div",MF,[_[33]||(_[33]=ve("span",{class:"flow-node__inline-param-label"},"freq",-1)),ve("input",{type:"range",class:"flow-node__inline-slider-sm",min:"0.01",max:"20",step:"0.01",value:t.params.frequency??1,onInput:_[21]||(_[21]=at(D=>v.$emit("paramChange","frequency",Number(D.target.value)),["stop"])),onPointerdown:_[22]||(_[22]=at(()=>{},["stop"])),onMousedown:_[23]||(_[23]=at(()=>{},["stop"]))},null,40,EF),ve("span",wF,Ze((t.params.frequency??1).toFixed(2)),1)]),ve("div",TF,[_[34]||(_[34]=ve("span",{class:"flow-node__inline-param-label"},"amp",-1)),ve("input",{type:"range",class:"flow-node__inline-slider-sm",min:"0",max:"10",step:"0.01",value:t.params.amplitude??1,onInput:_[24]||(_[24]=at(D=>v.$emit("paramChange","amplitude",Number(D.target.value)),["stop"])),onPointerdown:_[25]||(_[25]=at(()=>{},["stop"])),onMousedown:_[26]||(_[26]=at(()=>{},["stop"]))},null,40,AF),ve("span",CF,Ze((t.params.amplitude??1).toFixed(2)),1)])],32)):ct("",!0),t.nodeType==="fft"?(ye(),Te("div",{key:6,class:"flow-node__fft-container",onPointerdown:_[29]||(_[29]=at(()=>{},["stop"])),onMousedown:_[30]||(_[30]=at(()=>{},["stop"]))},[ve("div",{class:"flow-node__fft-bar flow-node__fft-bar--bass",style:Nt({height:Math.max(2,(t.outputValues.bass||0)*40)+"px"})},null,4),ve("div",{class:"flow-node__fft-bar flow-node__fft-bar--low-mid",style:Nt({height:Math.max(2,(t.outputValues.lowMid||0)*40)+"px"})},null,4),ve("div",{class:"flow-node__fft-bar flow-node__fft-bar--mid",style:Nt({height:Math.max(2,(t.outputValues.mid||0)*40)+"px"})},null,4),ve("div",{class:"flow-node__fft-bar flow-node__fft-bar--high",style:Nt({height:Math.max(2,(t.outputValues.high||0)*40)+"px"})},null,4)],32)):ct("",!0),t.nodeType==="numberMonitor"?(ye(),Te("div",RF,[ve("div",{class:"flow-node__monitor-value",title:"Value: "+(t.monitorValue??0)},Ze(t.monitorValue!==null&&t.monitorValue!==void 0?t.monitorValue.toFixed(t.params.decimals??3):"—"),9,PF),t.params.showGraph!==!1?(ye(),Te("canvas",{key:0,ref_key:"monitorCanvas",ref:u,class:"flow-node__monitor-graph",width:"176",height:"40"},null,512)):ct("",!0)])):ct("",!0),t.nodeType==="preview"?(ye(),Te("div",IF,[ve("canvas",{ref_key:"previewCanvas",ref:d,class:"flow-node__preview-canvas",width:"176",height:"100"},null,512),_[35]||(_[35]=ve("div",{class:"flow-node__preview-label"},"Preview Node",-1))])):ct("",!0),ve("div",NF,[(ye(!0),Te(dt,null,wn(t.def.outputs,D=>(ye(),Te("div",{key:"out-"+D.id,class:"flow-node__handle-row flow-node__handle-row--output"},[ve("span",DF,Ze(D.type),1),ve("span",LF,Ze(D.label),1),t.outputValues[D.id]!==void 0?(ye(),Te("span",{key:0,class:"flow-node__handle-value",title:"Value: "+t.outputValues[D.id]},Ze(B(t.outputValues[D.id])),9,FF)):ct("",!0),rt(pe(ro),{type:"source",id:D.id,position:pe(Ve).Right,style:Nt({background:pe(Iu)(D.type)})},null,8,["id","position","style"])]))),128))])])],2))}},Vr=nF(UF,[["__scopeId","data-v-13d128bd"]]),OF={__name:"EditorCanvas",emits:["imageLoaded","exportImage"],setup(t,{expose:e,emit:n}){const i=Oc(),{viewport:r,dimensions:o,project:s}=Ft();function a(p){const{x:M,y,zoom:b}=r.value,{width:L,height:B}=o.value,z=L||800,v=B||600,_=(z/2-M)/b,D=(v/2-y)/b;i.addNode(p,{x:_+(Math.random()-.5)*60,y:D+(Math.random()-.5)*60})}e({addNodeAtCenter:a});const l=["imageInput","uiImageSlot","webcamInput","imageOutput","button","slider"],c=He(()=>Object.keys(KT()).filter(p=>!l.includes(p)));function u(p){for(const M of p)if(M.type==="position"&&M.position){const y=i.nodes.find(b=>b.id===M.id);y&&(y.position=M.position)}else M.type==="remove"&&i.removeNode(M.id)}function f(p){for(const M of p)M.type==="remove"&&i.removeEdge(M.id)}function d(p){i.addEdge(p)}function h({node:p}){i.selectNode(p.id)}function g(){i.selectNode(null)}function x({edge:p}){}function m(p){const M=p.dataTransfer.getData("application/node-type");if(!M)return;const y=p.currentTarget.getBoundingClientRect(),{x:b,y:L,zoom:B}=r.value,z=(p.clientX-y.left-b)/B,v=(p.clientY-y.top-L)/B;i.addNode(M,{x:z,y:v})}return(p,M)=>(ye(),Te("div",{class:"editor-canvas",onDrop:at(m,["prevent"]),onDragover:M[0]||(M[0]=at(()=>{},["prevent"]))},[rt(pe(c3),{nodes:pe(i).nodes,edges:pe(i).edges,"default-viewport":{zoom:1,x:0,y:0},"min-zoom":.2,"max-zoom":3,"fit-view-on-init":"",onNodesChange:u,onEdgesChange:f,onConnect:d,onNodeClick:h,onPaneClick:g,onEdgeClick:x},ay({"node-imageInput":En(y=>[rt(Vr,{"node-id":y.id,"node-type":y.type,def:y.data.def,params:pe(i).nodeParams[y.id]||{},selected:pe(i).selectedNodeId===y.id,onSelect:b=>pe(i).selectNode(y.id),onImageLoaded:b=>p.$emit("imageLoaded",y.id,b)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded"])]),"node-uiImageSlot":En(y=>[rt(Vr,{"node-id":y.id,"node-type":y.type,def:y.data.def,params:pe(i).nodeParams[y.id]||{},selected:pe(i).selectedNodeId===y.id,onSelect:b=>pe(i).selectNode(y.id),onImageLoaded:b=>p.$emit("imageLoaded",y.id,b)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded"])]),"node-webcamInput":En(y=>[rt(Vr,{"node-id":y.id,"node-type":y.type,def:y.data.def,params:pe(i).nodeParams[y.id]||{},selected:pe(i).selectedNodeId===y.id,onSelect:b=>pe(i).selectNode(y.id),onImageLoaded:b=>p.$emit("imageLoaded",y.id,b)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded"])]),"node-imageOutput":En(y=>[rt(Vr,{"node-type":y.type,def:y.data.def,params:pe(i).nodeParams[y.id]||{},selected:pe(i).selectedNodeId===y.id,onSelect:b=>pe(i).selectNode(y.id),onExport:b=>p.$emit("exportImage",y.id)},null,8,["node-type","def","params","selected","onSelect","onExport"])]),"node-button":En(y=>[rt(Vr,{"node-type":y.type,def:y.data.def,params:pe(i).nodeParams[y.id]||{},selected:pe(i).selectedNodeId===y.id,onSelect:b=>pe(i).selectNode(y.id),onTrigger:b=>pe(i).triggerButton(y.id)},null,8,["node-type","def","params","selected","onSelect","onTrigger"])]),"node-slider":En(y=>[rt(Vr,{"node-type":y.type,def:y.data.def,params:pe(i).nodeParams[y.id]||{},selected:pe(i).selectedNodeId===y.id,onSelect:b=>pe(i).selectNode(y.id),onParamChange:(b,L)=>pe(i).setParam(y.id,b,L)},null,8,["node-type","def","params","selected","onSelect","onParamChange"])]),default:En(()=>[rt(pe(_3),{variant:"dots",gap:20,size:2,"pattern-color":"#2a2a40"}),rt(pe(eF),{pannable:"",zoomable:"",position:"bottom-right"})]),_:2},[wn(c.value,y=>({name:`node-${y}`,fn:En(b=>[rt(Vr,{"node-id":b.id,"node-type":b.type,def:b.data.def,params:pe(i).nodeParams[b.id]||{},selected:pe(i).selectedNodeId===b.id,"exposed-handles":pe(i).getExposedHandles(b.id),"monitor-value":b.type==="numberMonitor"?pe(i).getDataOutput(b.id,"out"):null,"perf-ms":pe(i).perfTimings[b.id]??null,onSelect:L=>pe(i).selectNode(b.id),onParamChange:(L,B)=>pe(i).setParam(b.id,L,B)},null,8,["node-id","node-type","def","params","selected","exposed-handles","monitor-value","perf-ms","onSelect","onParamChange"])])}))]),1032,["nodes","edges"])],32))}},BF={class:"preview-panel__toolbar"},kF={class:"preview-panel__zoom-level"},zF={class:"preview-panel__overlay"},VF={class:"preview-panel__badge"},HF={key:0,class:"preview-panel__badge",style:{color:"var(--accent-primary)"}},GF={key:1,class:"preview-panel__badge",style:{color:"var(--accent-danger)"}},$F={key:0,class:"preview-panel__histogram"},WF={class:"preview-panel__info-row"},XF={key:0},YF={__name:"PreviewPanel",props:{hidden:{type:Boolean,default:!1},isRendering:{type:Boolean,default:!0},pipeline:{type:Object,default:null},fps:{type:Number,default:0}},setup(t,{expose:e}){const n=Ke(null),i=Ke(null),r=Ke(null),o=Ke(512),s=Ke(512),a=Ke(1),l=Ke(0),c=Ke(0),u=Ke(!1),f=Ke({x:0,y:0}),d=Ke(!1);let h=null;function g(){return n.value}e({canvasRef:n,width:o,height:s,getCanvas:g}),ft(d,_=>{_?(z(),h=setInterval(z,500)):(h&&clearInterval(h),h=null)}),is(()=>{h&&clearInterval(h)});function x(){a.value=Math.min(a.value*1.25,10)}function m(){a.value=Math.max(a.value/1.25,.1)}function p(){a.value=1,l.value=0,c.value=0}function M(){if(!r.value)return;const _=r.value.clientWidth,D=r.value.clientHeight,I=_/o.value,C=D/s.value;a.value=Math.min(I,C,1)*.95,l.value=(_-o.value*a.value)/2,c.value=(D-s.value*a.value)/2}function y(_){const D=_.deltaY>0?.9:1.1,I=Math.max(.1,Math.min(10,a.value*D)),C=r.value.getBoundingClientRect(),X=_.clientX-C.left,E=_.clientY-C.top;l.value=X-(X-l.value)*(I/a.value),c.value=E-(E-c.value)*(I/a.value),a.value=I}function b(_){(_.button===0||_.button===1)&&(u.value=!0,f.value={x:_.clientX,y:_.clientY},r.value?.setPointerCapture(_.pointerId))}function L(_){if(!u.value)return;const D=_.clientX-f.value.x,I=_.clientY-f.value.y;l.value+=D,c.value+=I,f.value={x:_.clientX,y:_.clientY}}function B(_){u.value=!1,r.value?.releasePointerCapture(_.pointerId)}function z(){if(!d.value||!i.value)return;const _=n.value;if(!_)return;const D=_.getContext("webgl2",{preserveDrawingBuffer:!0})||_.getContext("webgl",{preserveDrawingBuffer:!0});if(!D)return;const I=_.width,C=_.height;if(I===0||C===0)return;const X=new Uint8Array(I*C*4);D.readPixels(0,0,I,C,D.RGBA,D.UNSIGNED_BYTE,X);const E=new Uint32Array(256),U=new Uint32Array(256),T=new Uint32Array(256);for(let H=0;H<X.length;H+=4)E[X[H]]++,U[X[H+1]]++,T[X[H+2]]++;const P=i.value.getContext("2d"),k=256,Y=80;P.clearRect(0,0,k,Y);const q=Math.max(...E.slice(1,255),...U.slice(1,255),...T.slice(1,255),1);v(P,E,q,k,Y,"rgba(255,80,80,0.5)"),v(P,U,q,k,Y,"rgba(80,255,80,0.5)"),v(P,T,q,k,Y,"rgba(80,80,255,0.5)")}function v(_,D,I,C,X,E){_.fillStyle=E,_.beginPath(),_.moveTo(0,X);for(let U=0;U<256;U++){const T=D[U]/I*(X-2);_.lineTo(U,X-T)}_.lineTo(255,X),_.closePath(),_.fill()}return(_,D)=>(ye(),Te("div",{class:zt(["preview-panel",{hidden:t.hidden}])},[ve("div",BF,[ve("button",{class:"preview-panel__tool-btn",onClick:x,title:"Zoom In"},"+"),ve("button",{class:"preview-panel__tool-btn",onClick:m,title:"Zoom Out"},"−"),ve("button",{class:"preview-panel__tool-btn",onClick:M,title:"Fit"},"⊡"),ve("button",{class:"preview-panel__tool-btn",onClick:p,title:"Reset Zoom"},"1:1"),ve("span",kF,Ze(Math.round(a.value*100))+"%",1),ve("button",{class:zt(["preview-panel__tool-btn",{active:d.value}]),onClick:D[0]||(D[0]=I=>d.value=!d.value),title:"Toggle Histogram"},"📊",2)]),ve("div",{class:"preview-panel__viewport",ref_key:"viewportRef",ref:r,onWheel:at(y,["prevent"]),onPointerdown:b,onPointermove:L,onPointerup:B},[ve("div",{class:"preview-panel__canvas-wrap",style:Nt({transform:`translate(${l.value}px, ${c.value}px) scale(${a.value})`,transformOrigin:"0 0"})},[ve("canvas",{ref_key:"canvasRef",ref:n,class:"preview-panel__canvas"},null,512)],4)],544),ve("div",zF,[ve("span",VF,Ze(o.value)+"×"+Ze(s.value),1),t.fps&&t.isRendering?(ye(),Te("span",HF,Ze(t.fps)+" FPS ",1)):ct("",!0),t.isRendering?ct("",!0):(ye(),Te("span",GF," STOPPED "))]),d.value?(ye(),Te("div",$F,[ve("canvas",{ref_key:"histCanvas",ref:i,class:"preview-panel__hist-canvas",width:"256",height:"80"},null,512),ve("div",WF,[ve("span",null,"Resolution: "+Ze(o.value)+"×"+Ze(s.value),1),t.fps?(ye(),Te("span",XF,Ze(t.fps)+" FPS",1)):ct("",!0)])])):ct("",!0)],2))}},qF={class:"param-panel"},KF={class:"param-panel__header"},ZF={class:"param-panel__title"},jF={class:"param-panel__type"},JF={key:0,class:"param-panel__section"},QF={class:"param-field__header"},eU={class:"param-field__label"},tU=["onClick","title"],nU=["min","max","step","value","onInput"],iU={class:"param-field__range-info"},rU=["step","value","onChange"],oU=["value","onChange"],sU=["value"],aU={key:2,class:"param-field__checkbox"},lU=["checked","onChange"],cU=["value","onInput"],uU={class:"param-panel__section"},fU={class:"param-field"},dU={class:"mono",style:{"font-size":"10px",color:"var(--text-muted)"}},hU={class:"param-field"},pU={style:{"font-size":"11px"}},mU={class:"param-field"},gU={style:{"font-size":"11px"}},vU={class:"param-field"},_U={style:{"font-size":"11px"}},xU={key:1,class:"param-panel__empty"},yU={__name:"ParameterPanel",setup(t){const e=Oc(),n=He(()=>e.selectedNodeDef||{label:"",type:"",params:{},inputs:[],outputs:[],category:""}),i=He(()=>e.selectedNodeParams),r=He(()=>zl[n.value.category]?.color||"#888");function o(a,l){e.selectedNodeId&&e.setParam(e.selectedNodeId,a,l)}function s(a,l){return l==="int"?Math.round(a).toString():typeof a=="number"?a.toFixed(3):String(a)}return(a,l)=>(ye(),Te("div",qF,[pe(e).selectedNode?(ye(),Te(dt,{key:0},[ve("div",KF,[ve("div",{class:"flow-node__category-dot",style:Nt({background:r.value})},null,4),ve("span",ZF,Ze(n.value.label),1),ve("span",jF,Ze(n.value.type),1)]),Object.keys(n.value.params).length>0?(ye(),Te("div",JF,[l[0]||(l[0]=ve("div",{class:"param-panel__section-title"},"Parameters",-1)),(ye(!0),Te(dt,null,wn(n.value.params,(c,u)=>(ye(),Te("div",{key:u,class:"param-field"},[ve("div",QF,[ve("label",eU,Ze(c.label),1),c.type==="float"||c.type==="int"?(ye(),Te("button",{key:0,class:zt(["param-field__expose-btn",{"param-field__expose-btn--active":pe(e).isParamExposed(pe(e).selectedNodeId,u)}]),onClick:f=>pe(e).toggleExposeParam(pe(e).selectedNodeId,u),title:pe(e).isParamExposed(pe(e).selectedNodeId,u)?"Unexpose input":"Expose as input handle"},Ze(pe(e).isParamExposed(pe(e).selectedNodeId,u)?"🔗":"⊕"),11,tU)):ct("",!0)]),c.type==="float"||c.type==="int"?(ye(),Te(dt,{key:0},[ve("input",{type:"range",class:"param-field__input",min:c.min,max:c.max,step:c.step,value:i.value[u]??c.default,onInput:f=>o(u,c.type==="int"?parseInt(f.target.value):parseFloat(f.target.value))},null,40,nU),ve("div",iU,[ve("span",null,Ze(c.min),1),ve("input",{type:"number",class:"param-field__number-input mono",step:c.step,value:s(i.value[u]??c.default,c.type),onChange:f=>o(u,c.type==="int"?parseInt(f.target.value):parseFloat(f.target.value))},null,40,rU),ve("span",null,Ze(c.max),1)])],64)):c.type==="select"?(ye(),Te("select",{key:1,class:"param-field__input",value:i.value[u]??c.default,onChange:f=>o(u,f.target.value)},[(ye(!0),Te(dt,null,wn(c.options,f=>(ye(),Te("option",{key:f,value:f},Ze(f),9,sU))),128))],40,oU)):c.type==="bool"?(ye(),Te("label",aU,[ve("input",{type:"checkbox",checked:i.value[u]??c.default,onChange:f=>o(u,f.target.checked)},null,40,lU),ve("span",null,Ze(c.label),1)])):c.type==="string"?(ye(),Te("input",{key:3,type:"text",class:"param-field__input",value:i.value[u]??c.default,onInput:f=>o(u,f.target.value)},null,40,cU)):ct("",!0)]))),128))])):ct("",!0),ve("div",uU,[l[5]||(l[5]=ve("div",{class:"param-panel__section-title"},"Info",-1)),ve("div",fU,[l[1]||(l[1]=ve("span",{class:"param-field__label"},"ID",-1)),ve("span",dU,Ze(pe(e).selectedNodeId),1)]),ve("div",hU,[l[2]||(l[2]=ve("span",{class:"param-field__label"},"Category",-1)),ve("span",pU,Ze(n.value.category),1)]),ve("div",mU,[l[3]||(l[3]=ve("span",{class:"param-field__label"},"Inputs",-1)),ve("span",gU,Ze(n.value.inputs.length),1)]),ve("div",vU,[l[4]||(l[4]=ve("span",{class:"param-field__label"},"Outputs",-1)),ve("span",_U,Ze(n.value.outputs.length),1)])])],64)):(ye(),Te("div",xU," Select a node to edit its parameters "))]))}},bU=`// Passthrough — renders texture as-is\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uTexture;\r
\r
void main() {\r
  gl_FragColor = texture2D(uTexture, vUv);\r
}\r
`,SU=`// Reeded Glass — ribbed/fluted glass refraction\r
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
`,MU=`// Chromatic Aberration — RGB channel offset\r
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
`,EU=`// Heightmap Displacement — displace pixels using a heightmap image\r
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
`,wU=`// Levels — shadows/midtones/highlights per-channel adjustment\r
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
`,TU=`// Surface Blur — edge-preserving bilateral filter approximation\r
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
`,AU=`// Blend — combine two images with blend modes\r
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
`,CU=`// Feedback Loop — blend current frame with previous frame\r
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
`,RU=`// UV Generator — outputs UV coordinates as color (R=U, G=V)\r
precision highp float;\r
varying vec2 vUv;\r
\r
void main() {\r
  gl_FragColor = vec4(vUv.x, vUv.y, 0.0, 1.0);\r
}\r
`,PU=`// UV Transform — scale, rotate, translate UVs\r
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
`,IU=`// UV Repeat — tile image with mirror/offset options\r
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
`,NU=`// UV Glitch — random block displacement of UV coordinates\r
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
`,DU=`// UV Polar — cartesian to polar and polar to cartesian conversion\r
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
`,LU=`varying vec2 vUv;\r
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
`,FU=`varying vec2 vUv;\r
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
`,UU=`varying vec2 vUv;\r
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
`,OU=`varying vec2 vUv;\r
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
`,BU=`varying vec2 vUv;\r
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
`,kU=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,zU={passthrough:bU,reededGlass:SU,chromaticAberration:MU,displacement:EU,levels:wU,surfaceBlur:TU,blend:AU,feedback:CU,uvGenerator:RU,uvTransform:PU,uvRepeat:IU,uvGlitch:NU,uvPolar:DU,diffusion:LU,xerox:FU,crt:UU,motionBlur:OU,dithering:BU},ug=20;class VU{constructor(){this.renderer=null,this.scene=null,this.camera=null,this.quad=null,this.fbos={},this.materials={},this.textures={},this.feedbackFBOs={},this.width=512,this.height=512,this.isInitialized=!1}init(e,n,i){this.width=n||512,this.height=i||512,this.renderer=new kT({canvas:e,alpha:!0,preserveDrawingBuffer:!0,antialias:!1}),this.renderer.setSize(this.width,this.height),this.renderer.autoClear=!1,this.camera=new Jd(-1,1,1,-1,0,1);const r=new pa(2,2);this.scene=new ES,this.quad=new _i(r,null),this.scene.add(this.quad),this.isInitialized=!0}resize(e,n){this.width=e,this.height=n,this.renderer&&this.renderer.setSize(e,n);for(const[i,r]of Object.entries(this.fbos))r.setSize(e,n);for(const[i,r]of Object.entries(this.feedbackFBOs))r.current.setSize(e,n),r.previous.setSize(e,n)}setInputTexture(e,n){n.colorSpace=Cr,n.minFilter=wt,n.magFilter=wt,this.textures[e]=n}getOrCreateFBO(e){if(this.fbos[e])return this.fbos[e];if(Object.keys(this.fbos).length>=ug)return console.warn(`Max FBO count (${ug}) reached. Cannot create FBO for node ${e}`),null;const n=new gn(this.width,this.height,{minFilter:wt,magFilter:wt,format:hn,type:fn,colorSpace:Cr});return this.fbos[e]=n,n}getOrCreateFeedbackFBOs(e){if(this.feedbackFBOs[e])return this.feedbackFBOs[e];const n={minFilter:wt,magFilter:wt,format:hn,type:fn};return this.feedbackFBOs[e]={current:new gn(this.width,this.height,n),previous:new gn(this.width,this.height,n)},this.feedbackFBOs[e]}getOrCreateMaterial(e,n,i){let r=zU[n];if(!r)return this.getOrCreateMaterial(e,"passthrough",i);if(n!=="passthrough"&&n!=="feedback"){const a=r.includes("uniform sampler2D uIn;"),l=r.includes("uniform sampler2D uTexture;");if(a||l){const c=a?"uIn":"uTexture";r=r.replace("void main()",`uniform float uBlendAmount;
void main()`),r=r.replace(/gl_FragColor\s*=\s*([^;]+);([^;]*)$/,`vec4 effectColor = $1;
  vec4 originalColor = texture2D(${c}, vUv);
  gl_FragColor = mix(originalColor, effectColor, uBlendAmount);$2`)}}if(this.materials[e]&&this.materials[e]._shaderKey===n){const a=this.materials[e];let l=!1;for(const[c,u]of Object.entries(i))a.uniforms[c]?a.uniforms[c].value=u:(a.uniforms[c]={value:u},l=!0);return l&&(a.needsUpdate=!0),a}this.materials[e]&&this.materials[e].dispose();const o={};for(const[a,l]of Object.entries(i))o[a]={value:l};const s=new qn({vertexShader:kU,fragmentShader:r,uniforms:o,depthTest:!1,depthWrite:!1});return s._shaderKey=n,this.materials[e]=s,s}renderNode(e,n,i){this.quad.material=n,i?this.renderer.setRenderTarget(i):this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.scene,this.camera)}removeNodeResources(e){this.fbos[e]&&(this.fbos[e].dispose(),delete this.fbos[e]),this.materials[e]&&(this.materials[e].dispose(),delete this.materials[e]),this.textures[e]&&(this.textures[e].dispose(),delete this.textures[e]),this.feedbackFBOs[e]&&(this.feedbackFBOs[e].current.dispose(),this.feedbackFBOs[e].previous.dispose(),delete this.feedbackFBOs[e])}execute(e,n,i,r,o,s,a){if(!this.isInitialized||!this.renderer)return;const l={};for(const h of n)l[h.id]=h;const c={};for(const h of i)c[h.target]||(c[h.target]=[]),c[h.target].push({sourceNodeId:h.source,sourceHandle:h.sourceHandle,targetHandle:h.targetHandle});let u=null;const f={};for(const h of e){const g=l[h];if(!g)continue;const x=si(g.type);if(!x)continue;const m=r[h]||{};if(g.type==="imageInput"||g.type==="imageOutput"||g.type==="pixelSort")continue;if(m._bypass){const v=c[h]||[];for(const _ of v){const D=l[_.sourceNodeId];if(!D)continue;let I=null;if(D.type==="imageInput"?I=this.textures[_.sourceNodeId]||null:this.fbos[_.sourceNodeId]&&(I=this.fbos[_.sourceNodeId].texture),I){const C=this.getOrCreateFBO(h);if(C){const X=this.getOrCreateMaterial(h,"passthrough",{uTexture:I});this.renderNode(h,X,C),u=C}break}}f[h]=0;continue}const p=c[h]||[],M={uTime:a,uResolution:new St(this.width,this.height)};for(const v of x.inputs)if(v.type==="image"){const _="u"+v.id.charAt(0).toUpperCase()+v.id.slice(1);M[_+"Connected"]=!1,M[_]=null}let y=!1;for(const v of p){const _=l[v.sourceNodeId];if(!_||!si(_.type))continue;let I=null;if(_.type==="imageInput"||_.type==="uiImageSlot"||_.type==="webcamInput"?I=this.textures[v.sourceNodeId]||null:this.fbos[v.sourceNodeId]&&(I=this.fbos[v.sourceNodeId].texture),I&&(y=!0,x.inputs.find(X=>X.id===v.targetHandle))){const X="u"+v.targetHandle.charAt(0).toUpperCase()+v.targetHandle.slice(1);M[X]=I,M[X+"Connected"]=!0}if(o[v.sourceNodeId]){const C=o[v.sourceNodeId][v.sourceHandle];if(C!==void 0){const X=x.inputs.find(U=>U.id===v.targetHandle),E=!X&&x.params[v.targetHandle];(X||E)&&(m[v.targetHandle]=C)}}}if(!y&&x.inputs.some(v=>v.type==="image"))continue;for(const[v,_]of Object.entries(m)){const D=x.params[v];if(!D)continue;const I="u"+v.charAt(0).toUpperCase()+v.slice(1);if(D.type==="float"||D.type==="int")M[I]=Number(_);else if(D.type==="bool")M[I]=_?1:0;else if(D.type==="select"){const C=D.options||[];M[I]=C.indexOf(_)}}if(g.type==="feedbackLoop"){const v=this.getOrCreateFeedbackFBOs(h);M.uPreviousFrame=v.previous.texture,M.uDecay=m.decay??.9,M.uBlendMode=["normal","add","multiply"].indexOf(m.blendMode??"normal");const _=this.getOrCreateMaterial(h,"feedback",M),D=Math.min(m.iterations??1,100);for(let I=0;I<D;I++){this.renderNode(h,_,v.current);const C=v.previous;v.previous=v.current,v.current=C,_.uniforms.uPreviousFrame.value=v.previous.texture}this.fbos[h]=v.previous,u=v.previous;continue}const b=x.shaderKey;if(!b)continue;const L=this.getOrCreateFBO(h);if(!L)continue;const B=performance.now(),z=this.getOrCreateMaterial(h,b,M);this.renderNode(h,z,L),f[h]=performance.now()-B,u=L}const d=s&&this.fbos[s]?this.fbos[s]:u;if(d){this.materials.__preview__&&(this.materials.__preview__.uniforms.uTexture.value=d.texture);const h=this.getOrCreateMaterial("__preview__","passthrough",{uTexture:d.texture});this.renderNode("__preview__",h,null)}return this.perfTimings=f,f}readPixels(e){const n=this.fbos[e];if(!n||!this.renderer)return null;const i=new Uint8Array(this.width*this.height*4);return this.renderer.readRenderTargetPixels(n,0,0,this.width,this.height,i),{pixels:i,width:this.width,height:this.height}}getScaledPixels(e,n,i){const r=this.getNodeTexture(e);if(!r||!this.renderer)return null;(!this._previewFBO||this._previewFBO.width!==n||this._previewFBO.height!==i)&&(this._previewFBO&&this._previewFBO.dispose(),this._previewFBO=new gn(n,i,{minFilter:wt,magFilter:wt,format:hn,type:fn}));const o=this.getOrCreateMaterial("__preview_scale__","passthrough",{uTexture:r});this.renderNode("__preview_scale__",o,this._previewFBO);const s=new Uint8Array(n*i*4);return this.renderer.readRenderTargetPixels(this._previewFBO,0,0,n,i,s),{pixels:s,width:n,height:i}}getNodeTexture(e){return this.textures[e]?this.textures[e]:this.fbos[e]?this.fbos[e].texture:null}removeNode(e){this.fbos[e]&&(this.fbos[e].dispose(),delete this.fbos[e]),this.materials[e]&&(this.materials[e].dispose(),delete this.materials[e]),this.textures[e]&&(this.textures[e].dispose(),delete this.textures[e]),this.feedbackFBOs[e]&&(this.feedbackFBOs[e].current.dispose(),this.feedbackFBOs[e].previous.dispose(),delete this.feedbackFBOs[e])}dispose(){for(const e of Object.values(this.fbos))e.dispose();for(const e of Object.values(this.materials))e.dispose();for(const e of Object.values(this.textures))e.dispose();for(const e of Object.values(this.feedbackFBOs))e.current.dispose(),e.previous.dispose();this.fbos={},this.materials={},this.textures={},this.feedbackFBOs={},this.renderer&&this.renderer.dispose()}}class HU{constructor(){this.isRunning=!1,this.startTime=0,this.lastTime=0,this.time=0,this.deltaTime=0,this.frameId=null,this.callbacks=[]}onFrame(e){return this.callbacks.push(e),()=>{this.callbacks=this.callbacks.filter(n=>n!==e)}}start(){this.isRunning||(this.isRunning=!0,this.startTime=performance.now()/1e3,this.lastTime=this.startTime,this._tick())}stop(){this.isRunning=!1,this.frameId!==null&&(cancelAnimationFrame(this.frameId),this.frameId=null)}reset(){this.startTime=performance.now()/1e3,this.time=0,this.deltaTime=0}_tick(){if(!this.isRunning)return;const e=performance.now()/1e3;this.deltaTime=e-this.lastTime,this.time=e-this.startTime,this.lastTime=e;for(const n of this.callbacks)n(this.time,this.deltaTime);this.frameId=requestAnimationFrame(()=>this._tick())}}let al=null,Sr=null,wl=null,Sd=!1;function G_(){if(!al)try{const t=window.AudioContext||window.webkitAudioContext;al=new t,Sr=al.createAnalyser(),Sr.fftSize=512,Sr.smoothingTimeConstant=.8,wl=new Uint8Array(Sr.frequencyBinCount),navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(e=>{al.createMediaStreamSource(e).connect(Sr),Sd=!0}).catch(e=>console.warn("Audio FFT access denied or error:",e))}catch(t){console.warn("Audio context not supported",t)}}function GU(t,e){const n={},i={};for(const s of t)n[s.id]=0,i[s.id]=[];for(const s of e)i[s.source]&&(i[s.source].push(s.target),n[s.target]=(n[s.target]||0)+1);const r=[];for(const s of t)n[s.id]===0&&r.push(s.id);const o=[];for(;r.length>0;){const s=r.shift();o.push(s);for(const a of i[s]||[])n[a]--,n[a]===0&&r.push(a)}return o.length!==t.length&&console.warn("Cycle detected in graph — some nodes skipped"),o}function $U(t,e,n){const i={};for(const r of e)if(r.target===t){const o=n[r.source];o&&(i[r.targetHandle]={sourceNodeId:r.source,sourceHandleId:r.sourceHandle,value:o[r.sourceHandle]})}return i}function WU(t,e,n,i,r,o){const s={};for(const l of e)s[l.id]=l;const a={};for(const l of t){const c=s[l];if(!c)continue;const u=si(c.type);if(!u||u.category==="image"||u.category==="uv"||c.type==="preview")continue;const f=i[l]||{},d=$U(l,n,a),h={};switch(c.type){case"lfo":{const g=f.frequency??1,x=f.amplitude??1,m=f.offset??0,p=(f.phase??0)*Math.PI/180,M=r*g*Math.PI*2+p,y=f.waveform??"sine";let b=0;y==="sine"?b=Math.sin(M):y==="saw"?b=2*(M/(Math.PI*2)%1)-1:y==="square"?b=Math.sin(M)>=0?1:-1:y==="triangle"&&(b=2*Math.abs(2*(M/(Math.PI*2)%1)-1)-1),h.out=b*x+m;break}case"timer":{const g=f.speed??1,x=f.loop??!1,m=f.loopDuration??5;let p=r*g;x&&m>0&&(p=p%m),h.out=p;break}case"random":{const g=f.min??0,x=f.max??1,m=f.seed??42,p=Math.sin(m+r*100)*43758.5453,M=p-Math.floor(p);h.out=g+M*(x-g);break}case"damper":{const g=d.target?.value??0,x=f.smoothing??.9,m=c._damperValue??g,p=m+(g-m)*(1-x);c._damperValue=p,h.out=p;break}case"fft":{Sd||G_();const g=f.smoothing??.8,x=f.gain??1;if(Sd&&Sr&&wl){Sr.smoothingTimeConstant=g,Sr.getByteFrequencyData(wl);let m=0,p=0,M=0,y=0;for(let b=0;b<256;b++){const L=wl[b]/255;b<=10?m+=L:b<=50?p+=L:b<=120?M+=L:y+=L}h.bass=Math.min(m/11*x,1),h.lowMid=Math.min(p/40*x,1),h.mid=Math.min(M/70*x,1),h.high=Math.min(y/135*x,1)}else h.bass=0,h.lowMid=0,h.mid=0,h.high=0;break}case"button":case"bang":{h.out=c._triggered?1:0,c._triggered=!1;break}case"toggle":{h.out=f.state?1:0;break}case"edgeTrigger":{const g=d.in?.value??!1,x=c._prevEdgeVal??!1,m=f.mode??"rising";let p=!1;m==="rising"&&!x&&g&&(p=!0),m==="falling"&&x&&!g&&(p=!0),m==="both"&&x!==g&&(p=!0),h.out=p?1:0,c._prevEdgeVal=g;break}case"slider":case"knob":{const g=f.value??.5,x=f.outputType??"float";h.out=x==="int"?Math.round(g):g;break}case"compare":{const g=d.a?.value??0,x=d.b?.value??0,m=f.op??">";let p=!1;switch(m){case">":p=g>x;break;case"<":p=g<x;break;case">=":p=g>=x;break;case"<=":p=g<=x;break;case"==":p=g===x;break;case"!=":p=g!==x;break}h.out=p;break}case"valueCondition":{const g=d.cond?.value??!1,x=d.trueVal?.value??f.defaultTrue??1,m=d.falseVal?.value??f.defaultFalse??0;h.out=g?x:m;break}case"mathAdd":{const g=d.a?.value??0,x=d.b?.value??0;h.out=g+x;break}case"mathMultiply":{const g=d.a?.value??0,x=d.b?.value??1;h.out=g*x;break}case"mathDivide":{const g=d.a?.value??0,x=d.b?.value??1;h.out=x!==0?g/x:0;break}case"mathSqrt":{const g=d.a?.value??0;h.out=Math.sqrt(Math.abs(g));break}case"mathMap":{const g=d.value?.value??0,x=f.inMin??0,m=f.inMax??1,p=f.outMin??0,M=f.outMax??1,y=m!==x?(g-x)/(m-x):0;h.out=p+y*(M-p);break}case"mathClamp":{const g=d.value?.value??0,x=f.min??0,m=f.max??1;h.out=Math.min(Math.max(g,x),m);break}case"mathWrap":{const g=d.value?.value??0,x=f.min??0,p=(f.max??1)-x;if(p<=0){h.out=x;break}h.out=x+((g-x)%p+p)%p;break}case"floatToInt":{const g=d.in?.value??0,x=f.mode??"round";let m;x==="floor"?m=Math.floor(g):x==="ceil"?m=Math.ceil(g):x==="truncate"?m=Math.trunc(g):m=Math.round(g);const p=f.clampMin??-2147483648,M=f.clampMax??2147483647;h.out=Math.min(Math.max(m,p),M);break}case"intToFloat":{h.out=Number(d.in?.value??0);break}case"numberMonitor":{h.out=d.in?.value??0;break}}a[l]=h}return a}function XU(t,e){const n={};for(const i of e)n[i.id]=i;return t.filter(i=>{const r=n[i];if(!r)return!1;const o=si(r.type);return o?o.category==="image"||o.category==="uv":!1})}const YU={id:"app"},qU={class:"main-layout"},KU={class:"preview-background"},ZU={__name:"App",setup(t){const e=Oc(),n=Ke(null),i=Ke(null),r=Ke(null);function o(){G_(),window.removeEventListener("click",o),window.removeEventListener("keydown",o)}let s=null,a=null,l=null;const c=Ke(0);let u=0,f=0;const d={};let h=null;Kn(async()=>{await Nn(),window.addEventListener("click",o),window.addEventListener("keydown",o);const v=i.value?.getCanvas?.();v&&(s=new VU,s.init(v,512,512)),r.value&&(h=r.value.getContext("2d")),e.onNodeRemoved(_=>{s&&s.removeNodeResources(_),delete d[_]}),f=performance.now(),a=new HU,l=a.onFrame((_,D)=>{if(!e.isRendering)return;u++;const I=performance.now();I-f>=500&&(c.value=Math.round(u/(I-f)*1e3),u=0,f=I),x(_)}),a.start(),await e.loadFromLocalStorage()}),is(()=>{l&&l(),a&&a.stop(),s&&s.dispose()});let g=0;function x(v,_){if(!s?.isInitialized)return;const D=e.nodes,I=e.edges,C=e.nodeParams;if(D.length===0){h&&r.value&&h.clearRect(0,0,r.value.width,r.value.height);return}const X=GU(D,I),E=WU(X,D,I,C,v);e.dataOutputs=E;const U=XU(X,D),T=s.execute(U,D,I,C,E,e.previewNodeId,v);if(e.perfTimings=T||{},e.previewMode==="background"&&h&&r.value){const P=i.value?.getCanvas?.();P&&P.width>0&&P.height>0&&(r.value.width=P.width,r.value.height=P.height,h.drawImage(P,0,0))}if(g%4===0){const P=D.filter(k=>k.type==="preview");for(const k of P){const Y=I.find(q=>q.target===k.id&&q.targetHandle==="in");if(Y){const q=s.getScaledPixels(Y.source,176,100);q&&(e.previewImages[k.id]=q)}}}g++}function m(v){if(n.value&&n.value.addNodeAtCenter)n.value.addNodeAtCenter(v);else{const _=300+Math.random()*200,D=200+Math.random()*200;e.addNode(v,{x:_,y:D})}}function p(v,_){if(!s)return;d[v]=_;let D;_.isVideo?(D=new FS(_.img),D.minFilter=wt,D.magFilter=wt,D.format=hn):(D=new Qt(_.img),D.needsUpdate=!0),s.setInputTexture(v,D),M(v),s.resize(_.width,_.height),i.value&&(i.value.width=_.width,i.value.height=_.height)}function M(v){if(!s)return;const _=new Set,D=[v];for(;D.length;){const I=D.shift();if(!_.has(I)){_.add(I);for(const C of e.edges)C.source===I&&!_.has(C.target)&&(s.fbos[C.target]&&(s.fbos[C.target].dispose(),delete s.fbos[C.target]),s.materials[C.target]&&(s.materials[C.target].dispose(),delete s.materials[C.target]),D.push(C.target))}}}function y(v){if(!s)return;const _=e.edges.filter(H=>H.target===v);let D=null;for(const H of _)if(H.targetHandle==="in"){D=H.source;break}if(!D){alert("No image connected to output node");return}const I=s.readPixels(D);if(!I){alert("Could not read pixels — make sure an image is connected and the pipeline has run");return}const{pixels:C,width:X,height:E}=I,T=(e.nodeParams[v]||{}).filename||e.projectTitle||"output",P=document.createElement("canvas");P.width=X,P.height=E;const k=P.getContext("2d"),Y=k.createImageData(X,E);for(let H=0;H<E;H++)for(let K=0;K<X;K++){const le=((E-1-H)*X+K)*4,ge=(H*X+K)*4;Y.data[ge]=C[le],Y.data[ge+1]=C[le+1],Y.data[ge+2]=C[le+2],Y.data[ge+3]=C[le+3]}k.putImageData(Y,0,0);const q=T.replace(/[^a-zA-Z0-9_-]/g,"_");P.toBlob(H=>{if(!H)return;const K=URL.createObjectURL(H),le=document.createElement("a");le.href=K,le.download=`${q}.png`,le.click(),URL.revokeObjectURL(K)},"image/png")}function b(){e.saveToLocalStorage()}async function L(){await e.loadFromLocalStorage()||alert("No saved graph found")}function B(v){e.loadGraph(v)||alert("Failed to import graph — invalid JSON")}function z(){confirm("Clear entire graph? This cannot be undone.")&&(e.resetGraph(),Object.keys(d).forEach(v=>delete d[v]))}return(v,_)=>(ye(),Te("div",YU,[rt(WT,{"is-rendering":pe(e).isRendering,"preview-mode":pe(e).previewMode,"project-title":pe(e).projectTitle,onSave:b,onLoad:L,onDownload:_[0]||(_[0]=D=>pe(e).downloadGraph()),onImport:B,onReset:z,onToggleRender:_[1]||(_[1]=D=>pe(e).toggleRendering()),onTogglePreview:_[2]||(_[2]=D=>pe(e).togglePreviewMode()),onUpdateTitle:_[3]||(_[3]=D=>pe(e).projectTitle=D)},null,8,["is-rendering","preview-mode","project-title"]),ve("div",qU,[rt(iA,{onAddNode:m}),ve("div",{class:zt(["editor-area",{"editor-area--bg-mode":pe(e).previewMode==="background"}])},[Lh(ve("div",KU,[ve("canvas",{ref_key:"bgCanvasRef",ref:r},null,512)],512),[[Zh,pe(e).previewMode==="background"]]),rt(OF,{ref_key:"editorRef",ref:n,onImageLoaded:p,onExportImage:y},null,512),Lh(rt(YF,{ref_key:"previewRef",ref:i,"is-rendering":pe(e).isRendering,fps:c.value},null,8,["is-rendering","fps"]),[[Zh,pe(e).previewMode==="panel"]])],2),rt(yU)])]))}},$_=vb(ZU);$_.use(yb());$_.mount("#app");
