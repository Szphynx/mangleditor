(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Yf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Pt={},zo=[],di=()=>{},Hg=()=>!1,xu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),qf=t=>t.startsWith("onUpdate:"),rn=Object.assign,Kf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Hy=Object.prototype.hasOwnProperty,yt=(t,e)=>Hy.call(t,e),et=Array.isArray,Vo=t=>_a(t)==="[object Map]",Gg=t=>_a(t)==="[object Set]",tp=t=>_a(t)==="[object Date]",it=t=>typeof t=="function",Ot=t=>typeof t=="string",qn=t=>typeof t=="symbol",bt=t=>t!==null&&typeof t=="object",Wg=t=>(bt(t)||it(t))&&it(t.then)&&it(t.catch),Xg=Object.prototype.toString,_a=t=>Xg.call(t),Gy=t=>_a(t).slice(8,-1),Yg=t=>_a(t)==="[object Object]",bu=t=>Ot(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Us=Yf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Su=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Wy=/-\w/g,Un=Su(t=>t.replace(Wy,e=>e.slice(1).toUpperCase())),Xy=/\B([A-Z])/g,Lr=Su(t=>t.replace(Xy,"-$1").toLowerCase()),Mu=Su(t=>t.charAt(0).toUpperCase()+t.slice(1)),ic=Su(t=>t?`on${Mu(t)}`:""),zi=(t,e)=>!Object.is(t,e),rc=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},qg=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Yy=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let np;const wu=()=>np||(np=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nt(t){if(et(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ot(i)?jy(i):nt(i);if(r)for(const o in r)e[o]=r[o]}return e}else if(Ot(t)||bt(t))return t}const qy=/;(?![^(]*\))/g,Ky=/:([^]+)/,Zy=/\/\*[^]*?\*\//g;function jy(t){const e={};return t.replace(Zy,"").split(qy).forEach(n=>{if(n){const i=n.split(Ky);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function dt(t){let e="";if(Ot(t))e=t;else if(et(t))for(let n=0;n<t.length;n++){const i=dt(t[n]);i&&(e+=i+" ")}else if(bt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function Jy(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ot(e)&&(t.class=dt(e)),n&&(t.style=nt(n)),t}const Qy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ex=Yf(Qy);function Kg(t){return!!t||t===""}function tx(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Zf(t[i],e[i]);return n}function Zf(t,e){if(t===e)return!0;let n=tp(t),i=tp(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=qn(t),i=qn(e),n||i)return t===e;if(n=et(t),i=et(e),n||i)return n&&i?tx(t,e):!1;if(n=bt(t),i=bt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,o=Object.keys(e).length;if(r!==o)return!1;for(const s in t){const a=t.hasOwnProperty(s),l=e.hasOwnProperty(s);if(a&&!l||!a&&l||!Zf(t[s],e[s]))return!1}}return String(t)===String(e)}const Zg=t=>!!(t&&t.__v_isRef===!0),Te=t=>Ot(t)?t:t==null?"":et(t)||bt(t)&&(t.toString===Xg||!it(t.toString))?Zg(t)?Te(t.value):JSON.stringify(t,jg,2):String(t),jg=(t,e)=>Zg(e)?jg(t,e.value):Vo(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],o)=>(n[oc(i,o)+" =>"]=r,n),{})}:Gg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>oc(n))}:qn(e)?oc(e):bt(e)&&!et(e)&&!Yg(e)?String(e):e,oc=(t,e="")=>{var n;return qn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let un;class Jg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=un,!e&&un&&(this.index=(un.scopes||(un.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=un;try{return un=this,e()}finally{un=n}}}on(){++this._on===1&&(this.prevScope=un,un=this)}off(){this._on>0&&--this._on===0&&(un=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Eu(t){return new Jg(t)}function Tu(){return un}function Os(t,e=!1){un&&un.cleanups.push(t)}let Ft;const sc=new WeakSet;class Qg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,un&&un.active&&un.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,sc.has(this)&&(sc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||tv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ip(this),nv(this);const e=Ft,n=Yn;Ft=this,Yn=!0;try{return this.fn()}finally{iv(this),Ft=e,Yn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Qf(e);this.deps=this.depsTail=void 0,ip(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?sc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){fd(this)&&this.run()}get dirty(){return fd(this)}}let ev=0,Bs,ks;function tv(t,e=!1){if(t.flags|=8,e){t.next=ks,ks=t;return}t.next=Bs,Bs=t}function jf(){ev++}function Jf(){if(--ev>0)return;if(ks){let e=ks;for(ks=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Bs;){let e=Bs;for(Bs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function nv(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function iv(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Qf(i),nx(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function fd(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(rv(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function rv(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===qs)||(t.globalVersion=qs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!fd(t))))return;t.flags|=2;const e=t.dep,n=Ft,i=Yn;Ft=t,Yn=!0;try{nv(t);const r=t.fn(t._value);(e.version===0||zi(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Ft=n,Yn=i,iv(t),t.flags&=-3}}function Qf(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)Qf(o,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function nx(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Yn=!0;const ov=[];function Wi(){ov.push(Yn),Yn=!1}function Xi(){const t=ov.pop();Yn=t===void 0?!0:t}function ip(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ft;Ft=void 0;try{e()}finally{Ft=n}}}let qs=0;class ix{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Au{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ft||!Yn||Ft===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ft)n=this.activeLink=new ix(Ft,this),Ft.deps?(n.prevDep=Ft.depsTail,Ft.depsTail.nextDep=n,Ft.depsTail=n):Ft.deps=Ft.depsTail=n,sv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Ft.depsTail,n.nextDep=void 0,Ft.depsTail.nextDep=n,Ft.depsTail=n,Ft.deps===n&&(Ft.deps=i)}return n}trigger(e){this.version++,qs++,this.notify(e)}notify(e){jf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Jf()}}}function sv(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)sv(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const $l=new WeakMap,no=Symbol(""),hd=Symbol(""),Ks=Symbol("");function cn(t,e,n){if(Yn&&Ft){let i=$l.get(t);i||$l.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Au),r.map=i,r.key=n),r.track()}}function Di(t,e,n,i,r,o){const s=$l.get(t);if(!s){qs++;return}const a=l=>{l&&l.trigger()};if(jf(),e==="clear")s.forEach(a);else{const l=et(t),u=l&&bu(n);if(l&&n==="length"){const c=Number(i);s.forEach((d,f)=>{(f==="length"||f===Ks||!qn(f)&&f>=c)&&a(d)})}else switch((n!==void 0||s.has(void 0))&&a(s.get(n)),u&&a(s.get(Ks)),e){case"add":l?u&&a(s.get("length")):(a(s.get(no)),Vo(t)&&a(s.get(hd)));break;case"delete":l||(a(s.get(no)),Vo(t)&&a(s.get(hd)));break;case"set":Vo(t)&&a(s.get(no));break}}Jf()}function rx(t,e){const n=$l.get(t);return n&&n.get(e)}function yo(t){const e=vt(t);return e===t?e:(cn(e,"iterate",Ks),Rn(t)?e:e.map(Kn))}function Cu(t){return cn(t=vt(t),"iterate",Ks),t}function yr(t,e){return Yi(t)?Jo(Vi(t)?Kn(e):e):Kn(e)}const ox={__proto__:null,[Symbol.iterator](){return ac(this,Symbol.iterator,t=>yr(this,t))},concat(...t){return yo(this).concat(...t.map(e=>et(e)?yo(e):e))},entries(){return ac(this,"entries",t=>(t[1]=yr(this,t[1]),t))},every(t,e){return Mi(this,"every",t,e,void 0,arguments)},filter(t,e){return Mi(this,"filter",t,e,n=>n.map(i=>yr(this,i)),arguments)},find(t,e){return Mi(this,"find",t,e,n=>yr(this,n),arguments)},findIndex(t,e){return Mi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Mi(this,"findLast",t,e,n=>yr(this,n),arguments)},findLastIndex(t,e){return Mi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Mi(this,"forEach",t,e,void 0,arguments)},includes(...t){return lc(this,"includes",t)},indexOf(...t){return lc(this,"indexOf",t)},join(t){return yo(this).join(t)},lastIndexOf(...t){return lc(this,"lastIndexOf",t)},map(t,e){return Mi(this,"map",t,e,void 0,arguments)},pop(){return ps(this,"pop")},push(...t){return ps(this,"push",t)},reduce(t,...e){return rp(this,"reduce",t,e)},reduceRight(t,...e){return rp(this,"reduceRight",t,e)},shift(){return ps(this,"shift")},some(t,e){return Mi(this,"some",t,e,void 0,arguments)},splice(...t){return ps(this,"splice",t)},toReversed(){return yo(this).toReversed()},toSorted(t){return yo(this).toSorted(t)},toSpliced(...t){return yo(this).toSpliced(...t)},unshift(...t){return ps(this,"unshift",t)},values(){return ac(this,"values",t=>yr(this,t))}};function ac(t,e,n){const i=Cu(t),r=i[e]();return i!==t&&!Rn(t)&&(r._next=r.next,r.next=()=>{const o=r._next();return o.done||(o.value=n(o.value)),o}),r}const sx=Array.prototype;function Mi(t,e,n,i,r,o){const s=Cu(t),a=s!==t&&!Rn(t),l=s[e];if(l!==sx[e]){const d=l.apply(t,o);return a?Kn(d):d}let u=n;s!==t&&(a?u=function(d,f){return n.call(this,yr(t,d),f,t)}:n.length>2&&(u=function(d,f){return n.call(this,d,f,t)}));const c=l.call(s,u,i);return a&&r?r(c):c}function rp(t,e,n,i){const r=Cu(t);let o=n;return r!==t&&(Rn(t)?n.length>3&&(o=function(s,a,l){return n.call(this,s,a,l,t)}):o=function(s,a,l){return n.call(this,s,yr(t,a),l,t)}),r[e](o,...i)}function lc(t,e,n){const i=vt(t);cn(i,"iterate",Ks);const r=i[e](...n);return(r===-1||r===!1)&&Ru(n[0])?(n[0]=vt(n[0]),i[e](...n)):r}function ps(t,e,n=[]){Wi(),jf();const i=vt(t)[e].apply(t,n);return Jf(),Xi(),i}const ax=Yf("__proto__,__v_isRef,__isVue"),av=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(qn));function lx(t){qn(t)||(t=String(t));const e=vt(this);return cn(e,"has",t),e.hasOwnProperty(t)}class lv{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return o;if(n==="__v_raw")return i===(r?o?_x:fv:o?dv:cv).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const s=et(e);if(!r){let l;if(s&&(l=ox[n]))return l;if(n==="hasOwnProperty")return lx}const a=Reflect.get(e,n,Ut(e)?e:i);if((qn(n)?av.has(n):ax(n))||(r||cn(e,"get",n),o))return a;if(Ut(a)){const l=s&&bu(n)?a:a.value;return r&&bt(l)?Hl(l):l}return bt(a)?r?Hl(a):Cr(a):a}}class uv extends lv{constructor(e=!1){super(!1,e)}set(e,n,i,r){let o=e[n];const s=et(e)&&bu(n);if(!this._isShallow){const u=Yi(o);if(!Rn(i)&&!Yi(i)&&(o=vt(o),i=vt(i)),!s&&Ut(o)&&!Ut(i))return u||(o.value=i),!0}const a=s?Number(n)<e.length:yt(e,n),l=Reflect.set(e,n,i,Ut(e)?e:r);return e===vt(r)&&(a?zi(i,o)&&Di(e,"set",n,i):Di(e,"add",n,i)),l}deleteProperty(e,n){const i=yt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Di(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!qn(n)||!av.has(n))&&cn(e,"has",n),i}ownKeys(e){return cn(e,"iterate",et(e)?"length":no),Reflect.ownKeys(e)}}class ux extends lv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const cx=new uv,dx=new ux,fx=new uv(!0);const pd=t=>t,Na=t=>Reflect.getPrototypeOf(t);function hx(t,e,n){return function(...i){const r=this.__v_raw,o=vt(r),s=Vo(o),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,u=r[t](...i),c=n?pd:e?Jo:Kn;return!e&&cn(o,"iterate",l?hd:no),rn(Object.create(u),{next(){const{value:d,done:f}=u.next();return f?{value:d,done:f}:{value:a?[c(d[0]),c(d[1])]:c(d),done:f}}})}}function Da(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function px(t,e){const n={get(r){const o=this.__v_raw,s=vt(o),a=vt(r);t||(zi(r,a)&&cn(s,"get",r),cn(s,"get",a));const{has:l}=Na(s),u=e?pd:t?Jo:Kn;if(l.call(s,r))return u(o.get(r));if(l.call(s,a))return u(o.get(a));o!==s&&o.get(r)},get size(){const r=this.__v_raw;return!t&&cn(vt(r),"iterate",no),r.size},has(r){const o=this.__v_raw,s=vt(o),a=vt(r);return t||(zi(r,a)&&cn(s,"has",r),cn(s,"has",a)),r===a?o.has(r):o.has(r)||o.has(a)},forEach(r,o){const s=this,a=s.__v_raw,l=vt(a),u=e?pd:t?Jo:Kn;return!t&&cn(l,"iterate",no),a.forEach((c,d)=>r.call(o,u(c),u(d),s))}};return rn(n,t?{add:Da("add"),set:Da("set"),delete:Da("delete"),clear:Da("clear")}:{add(r){!e&&!Rn(r)&&!Yi(r)&&(r=vt(r));const o=vt(this);return Na(o).has.call(o,r)||(o.add(r),Di(o,"add",r,r)),this},set(r,o){!e&&!Rn(o)&&!Yi(o)&&(o=vt(o));const s=vt(this),{has:a,get:l}=Na(s);let u=a.call(s,r);u||(r=vt(r),u=a.call(s,r));const c=l.call(s,r);return s.set(r,o),u?zi(o,c)&&Di(s,"set",r,o):Di(s,"add",r,o),this},delete(r){const o=vt(this),{has:s,get:a}=Na(o);let l=s.call(o,r);l||(r=vt(r),l=s.call(o,r)),a&&a.call(o,r);const u=o.delete(r);return l&&Di(o,"delete",r,void 0),u},clear(){const r=vt(this),o=r.size!==0,s=r.clear();return o&&Di(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=hx(r,t,e)}),n}function eh(t,e){const n=px(t,e);return(i,r,o)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(yt(n,r)&&r in i?n:i,r,o)}const mx={get:eh(!1,!1)},gx={get:eh(!1,!0)},vx={get:eh(!0,!1)};const cv=new WeakMap,dv=new WeakMap,fv=new WeakMap,_x=new WeakMap;function yx(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xx(t){return t.__v_skip||!Object.isExtensible(t)?0:yx(Gy(t))}function Cr(t){return Yi(t)?t:th(t,!1,cx,mx,cv)}function bx(t){return th(t,!1,fx,gx,dv)}function Hl(t){return th(t,!0,dx,vx,fv)}function th(t,e,n,i,r){if(!bt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=xx(t);if(o===0)return t;const s=r.get(t);if(s)return s;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function Vi(t){return Yi(t)?Vi(t.__v_raw):!!(t&&t.__v_isReactive)}function Yi(t){return!!(t&&t.__v_isReadonly)}function Rn(t){return!!(t&&t.__v_isShallow)}function Ru(t){return t?!!t.__v_raw:!1}function vt(t){const e=t&&t.__v_raw;return e?vt(e):t}function io(t){return!yt(t,"__v_skip")&&Object.isExtensible(t)&&qg(t,"__v_skip",!0),t}const Kn=t=>bt(t)?Cr(t):t,Jo=t=>bt(t)?Hl(t):t;function Ut(t){return t?t.__v_isRef===!0:!1}function Ce(t){return hv(t,!1)}function Tr(t){return hv(t,!0)}function hv(t,e){return Ut(t)?t:new Sx(t,e)}class Sx{constructor(e,n){this.dep=new Au,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:vt(e),this._value=n?e:Kn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Rn(e)||Yi(e);e=i?e:vt(e),zi(e,n)&&(this._rawValue=e,this._value=i?e:Kn(e),this.dep.trigger())}}function he(t){return Ut(t)?t.value:t}function ht(t){return it(t)?t():he(t)}const Mx={get:(t,e,n)=>e==="__v_raw"?t:he(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ut(r)&&!Ut(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function pv(t){return Vi(t)?t:new Proxy(t,Mx)}class wx{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Au,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function Ex(t){return new wx(t)}function mv(t){const e=et(t)?new Array(t.length):{};for(const n in t)e[n]=gv(t,n);return e}class Tx{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=vt(e);let r=!0,o=e;if(!et(e)||!bu(String(n)))do r=!Ru(o)||Rn(o);while(r&&(o=o.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=he(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Ut(this._raw[this._key])){const n=this._object[this._key];if(Ut(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return rx(this._raw,this._key)}}class Ax{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function xt(t,e,n){return Ut(t)?t:it(t)?new Ax(t):bt(t)&&arguments.length>1?gv(t,e,n):Ce(t)}function gv(t,e,n){return new Tx(t,e,n)}class Cx{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Au(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Ft!==this)return tv(this,!0),!0}get value(){const e=this.dep.track();return rv(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Rx(t,e,n=!1){let i,r;return it(t)?i=t:(i=t.get,r=t.set),new Cx(i,r,n)}const La={},Gl=new WeakMap;let Wr;function Ix(t,e=!1,n=Wr){if(n){let i=Gl.get(n);i||Gl.set(n,i=[]),i.push(t)}}function Px(t,e,n=Pt){const{immediate:i,deep:r,once:o,scheduler:s,augmentJob:a,call:l}=n,u=y=>r?y:Rn(y)||r===!1||r===0?Li(y,1):Li(y);let c,d,f,h,g=!1,v=!1;if(Ut(t)?(d=()=>t.value,g=Rn(t)):Vi(t)?(d=()=>u(t),g=!0):et(t)?(v=!0,g=t.some(y=>Vi(y)||Rn(y)),d=()=>t.map(y=>{if(Ut(y))return y.value;if(Vi(y))return u(y);if(it(y))return l?l(y,2):y()})):it(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){Wi();try{f()}finally{Xi()}}const y=Wr;Wr=c;try{return l?l(t,3,[h]):t(h)}finally{Wr=y}}:d=di,e&&r){const y=d,P=r===!0?1/0:r;d=()=>Li(y(),P)}const m=Tu(),p=()=>{c.stop(),m&&m.active&&Kf(m.effects,c)};if(o&&e){const y=e;e=(...P)=>{y(...P),p()}}let x=v?new Array(t.length).fill(La):La;const M=y=>{if(!(!(c.flags&1)||!c.dirty&&!y))if(e){const P=c.run();if(r||g||(v?P.some((L,B)=>zi(L,x[B])):zi(P,x))){f&&f();const L=Wr;Wr=c;try{const B=[P,x===La?void 0:v&&x[0]===La?[]:x,h];x=P,l?l(e,3,B):e(...B)}finally{Wr=L}}}else c.run()};return a&&a(M),c=new Qg(d),c.scheduler=s?()=>s(M,!1):M,h=y=>Ix(y,!1,c),f=c.onStop=()=>{const y=Gl.get(c);if(y){if(l)l(y,4);else for(const P of y)P();Gl.delete(c)}},e?i?M(!0):x=c.run():s?s(M.bind(null,!0),!0):c.run(),p.pause=c.pause.bind(c),p.resume=c.resume.bind(c),p.stop=p,p}function Li(t,e=1/0,n){if(e<=0||!bt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ut(t))Li(t.value,e,n);else if(et(t))for(let i=0;i<t.length;i++)Li(t[i],e,n);else if(Gg(t)||Vo(t))t.forEach(i=>{Li(i,e,n)});else if(Yg(t)){for(const i in t)Li(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&Li(t[i],e,n)}return t}function ya(t,e,n,i){try{return i?t(...i):t()}catch(r){Iu(r,e,n)}}function gi(t,e,n,i){if(it(t)){const r=ya(t,e,n,i);return r&&Wg(r)&&r.catch(o=>{Iu(o,e,n)}),r}if(et(t)){const r=[];for(let o=0;o<t.length;o++)r.push(gi(t[o],e,n,i));return r}}function Iu(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:s}=e&&e.appContext.config||Pt;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,l,u)===!1)return}a=a.parent}if(o){Wi(),ya(o,null,10,[t,l,u]),Xi();return}}Nx(t,n,r,i,s)}function Nx(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const mn=[];let ii=-1;const $o=[];let xr=null,Oo=0;const vv=Promise.resolve();let Wl=null;function fn(t){const e=Wl||vv;return t?e.then(this?t.bind(this):t):e}function Dx(t){let e=ii+1,n=mn.length;for(;e<n;){const i=e+n>>>1,r=mn[i],o=Zs(r);o<t||o===t&&r.flags&2?e=i+1:n=i}return e}function nh(t){if(!(t.flags&1)){const e=Zs(t),n=mn[mn.length-1];!n||!(t.flags&2)&&e>=Zs(n)?mn.push(t):mn.splice(Dx(e),0,t),t.flags|=1,_v()}}function _v(){Wl||(Wl=vv.then(xv))}function Lx(t){et(t)?$o.push(...t):xr&&t.id===-1?xr.splice(Oo+1,0,t):t.flags&1||($o.push(t),t.flags|=1),_v()}function op(t,e,n=ii+1){for(;n<mn.length;n++){const i=mn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;mn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function yv(t){if($o.length){const e=[...new Set($o)].sort((n,i)=>Zs(n)-Zs(i));if($o.length=0,xr){xr.push(...e);return}for(xr=e,Oo=0;Oo<xr.length;Oo++){const n=xr[Oo];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}xr=null,Oo=0}}const Zs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function xv(t){try{for(ii=0;ii<mn.length;ii++){const e=mn[ii];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ya(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ii<mn.length;ii++){const e=mn[ii];e&&(e.flags&=-2)}ii=-1,mn.length=0,yv(),Wl=null,(mn.length||$o.length)&&xv()}}let en=null,bv=null;function Xl(t){const e=en;return en=t,bv=t&&t.type.__scopeId||null,e}function xn(t,e=en,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Kl(-1);const o=Xl(e);let s;try{s=t(...r)}finally{Xl(o),i._d&&Kl(1)}return s};return i._n=!0,i._c=!0,i._d=!0,i}function Bo(t,e){if(en===null)return t;const n=Fu(en),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,s,a,l=Pt]=e[r];o&&(it(o)&&(o={mounted:o,updated:o}),o.deep&&Li(s),i.push({dir:o,instance:n,value:s,oldValue:void 0,arg:a,modifiers:l}))}return t}function Or(t,e,n,i){const r=t.dirs,o=e&&e.dirs;for(let s=0;s<r.length;s++){const a=r[s];o&&(a.oldValue=o[s].value);let l=a.dir[i];l&&(Wi(),gi(l,n,8,[t.el,a,t,e]),Xi())}}function Rr(t,e){if(dn){let n=dn.provides;const i=dn.parent&&dn.parent.provides;i===n&&(n=dn.provides=Object.create(i)),n[t]=e}}function In(t,e,n=!1){const i=ir();if(i||ro){let r=ro?ro._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&it(e)?e.call(i&&i.proxy):e}}function Fx(){return!!(ir()||ro)}const Ux=Symbol.for("v-scx"),Ox=()=>In(Ux);function Sv(t,e){return ih(t,null,e)}function ut(t,e,n){return ih(t,e,n)}function ih(t,e,n=Pt){const{immediate:i,deep:r,flush:o,once:s}=n,a=rn({},n),l=e&&i||!e&&o!=="post";let u;if(Qs){if(o==="sync"){const h=Ox();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=di,h.resume=di,h.pause=di,h}}const c=dn;a.call=(h,g,v)=>gi(h,c,g,v);let d=!1;o==="post"?a.scheduler=h=>{ln(h,c&&c.suspense)}:o!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():nh(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const f=Px(t,e,a);return Qs&&(u?u.push(f):l&&f()),f}function Bx(t,e,n){const i=this.proxy,r=Ot(t)?t.includes(".")?Mv(i,t):()=>i[t]:t.bind(i,i);let o;it(e)?o=e:(o=e.handler,n=e);const s=xa(this),a=ih(r,o.bind(i),n);return s(),a}function Mv(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const wv=Symbol("_vte"),kx=t=>t.__isTeleport,zs=t=>t&&(t.disabled||t.disabled===""),sp=t=>t&&(t.defer||t.defer===""),ap=t=>typeof SVGElement<"u"&&t instanceof SVGElement,lp=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,md=(t,e)=>{const n=t&&t.to;return Ot(n)?e?e(n):null:n},Ev={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,o,s,a,l,u){const{mc:c,pc:d,pbc:f,o:{insert:h,querySelector:g,createText:v,createComment:m}}=u,p=zs(e.props);let{shapeFlag:x,children:M,dynamicChildren:y}=e;if(t==null){const P=e.el=v(""),L=e.anchor=v("");h(P,n,i),h(L,n,i);const B=(S,R)=>{x&16&&c(M,S,R,r,o,s,a,l)},_=()=>{const S=e.target=md(e.props,g),R=gd(S,e,v,h);S&&(s!=="svg"&&ap(S)?s="svg":s!=="mathml"&&lp(S)&&(s="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(S),p||(B(S,R),Sl(e,!1)))};p&&(B(n,L),Sl(e,!0)),sp(e.props)?(e.el.__isMounted=!1,ln(()=>{_(),delete e.el.__isMounted},o)):_()}else{if(sp(e.props)&&t.el.__isMounted===!1){ln(()=>{Ev.process(t,e,n,i,r,o,s,a,l,u)},o);return}e.el=t.el,e.targetStart=t.targetStart;const P=e.anchor=t.anchor,L=e.target=t.target,B=e.targetAnchor=t.targetAnchor,_=zs(t.props),S=_?n:L,R=_?P:B;if(s==="svg"||ap(L)?s="svg":(s==="mathml"||lp(L))&&(s="mathml"),y?(f(t.dynamicChildren,y,S,r,o,s,a),uh(t,e,!0)):l||d(t,e,S,R,r,o,s,a,!1),p)_?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Fa(e,n,P,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const A=e.target=md(e.props,g);A&&Fa(e,A,null,u,0)}else _&&Fa(e,L,B,u,1);Sl(e,p)}},remove(t,e,n,{um:i,o:{remove:r}},o){const{shapeFlag:s,children:a,anchor:l,targetStart:u,targetAnchor:c,target:d,props:f}=t;if(d&&(r(u),r(c)),o&&r(l),s&16){const h=o||!zs(f);for(let g=0;g<a.length;g++){const v=a[g];i(v,e,n,h,!!v.dynamicChildren)}}},move:Fa,hydrate:zx};function Fa(t,e,n,{o:{insert:i},m:r},o=2){o===0&&i(t.targetAnchor,e,n);const{el:s,anchor:a,shapeFlag:l,children:u,props:c}=t,d=o===2;if(d&&i(s,e,n),(!d||zs(c))&&l&16)for(let f=0;f<u.length;f++)r(u[f],e,n,2);d&&i(a,e,n)}function zx(t,e,n,i,r,o,{o:{nextSibling:s,parentNode:a,querySelector:l,insert:u,createText:c}},d){function f(m,p){let x=p;for(;x;){if(x&&x.nodeType===8){if(x.data==="teleport start anchor")e.targetStart=x;else if(x.data==="teleport anchor"){e.targetAnchor=x,m._lpa=e.targetAnchor&&s(e.targetAnchor);break}}x=s(x)}}function h(m,p){p.anchor=d(s(m),p,a(m),n,i,r,o)}const g=e.target=md(e.props,l),v=zs(e.props);if(g){const m=g._lpa||g.firstChild;e.shapeFlag&16&&(v?(h(t,e),f(g,m),e.targetAnchor||gd(g,e,c,u,a(t)===g?t:null)):(e.anchor=s(t),f(g,m),e.targetAnchor||gd(g,e,c,u),d(m&&s(m),e,g,n,i,r,o))),Sl(e,v)}else v&&e.shapeFlag&16&&(h(t,e),e.targetStart=t,e.targetAnchor=s(t));return e.anchor&&s(e.anchor)}const rh=Ev;function Sl(t,e){const n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function gd(t,e,n,i,r=null){const o=e.targetStart=n(""),s=e.targetAnchor=n("");return o[wv]=s,t&&(i(o,t,r),i(s,t,r)),s}const Vx=Symbol("_leaveCb");function oh(t,e){t.shapeFlag&6&&t.component?(t.transition=e,oh(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Nt(t,e){return it(t)?rn({name:t.name},e,{setup:t}):t}function Tv(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function up(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Yl=new WeakMap;function Vs(t,e,n,i,r=!1){if(et(t)){t.forEach((v,m)=>Vs(v,e&&(et(e)?e[m]:e),n,i,r));return}if(Ho(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Vs(t,e,n,i.component.subTree);return}const o=i.shapeFlag&4?Fu(i.component):i.el,s=r?null:o,{i:a,r:l}=t,u=e&&e.r,c=a.refs===Pt?a.refs={}:a.refs,d=a.setupState,f=vt(d),h=d===Pt?Hg:v=>up(c,v)?!1:yt(f,v),g=(v,m)=>!(m&&up(c,m));if(u!=null&&u!==l){if(cp(e),Ot(u))c[u]=null,h(u)&&(d[u]=null);else if(Ut(u)){const v=e;g(u,v.k)&&(u.value=null),v.k&&(c[v.k]=null)}}if(it(l))ya(l,a,12,[s,c]);else{const v=Ot(l),m=Ut(l);if(v||m){const p=()=>{if(t.f){const x=v?h(l)?d[l]:c[l]:g()||!t.k?l.value:c[t.k];if(r)et(x)&&Kf(x,o);else if(et(x))x.includes(o)||x.push(o);else if(v)c[l]=[o],h(l)&&(d[l]=c[l]);else{const M=[o];g(l,t.k)&&(l.value=M),t.k&&(c[t.k]=M)}}else v?(c[l]=s,h(l)&&(d[l]=s)):m&&(g(l,t.k)&&(l.value=s),t.k&&(c[t.k]=s))};if(s){const x=()=>{p(),Yl.delete(t)};x.id=-1,Yl.set(t,x),ln(x,n)}else cp(t),p()}}}function cp(t){const e=Yl.get(t);e&&(e.flags|=8,Yl.delete(t))}wu().requestIdleCallback;wu().cancelIdleCallback;const Ho=t=>!!t.type.__asyncLoader,Av=t=>t.type.__isKeepAlive;function $x(t,e){Cv(t,"a",e)}function Hx(t,e){Cv(t,"da",e)}function Cv(t,e,n=dn){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Pu(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Av(r.parent.vnode)&&Gx(i,e,n,r),r=r.parent}}function Gx(t,e,n,i){const r=Pu(e,t,i,!0);Nu(()=>{Kf(i[e],r)},n)}function Pu(t,e,n=dn,i=!1){if(n){const r=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...s)=>{Wi();const a=xa(n),l=gi(e,n,t,s);return a(),Xi(),l});return i?r.unshift(o):r.push(o),o}}const nr=t=>(e,n=dn)=>{(!Qs||t==="sp")&&Pu(t,(...i)=>e(...i),n)},Rv=nr("bm"),En=nr("m"),Wx=nr("bu"),Xx=nr("u"),mo=nr("bum"),Nu=nr("um"),Yx=nr("sp"),qx=nr("rtg"),Kx=nr("rtc");function Zx(t,e=dn){Pu("ec",t,e)}const Iv="components";function Pv(t,e){return Lv(Iv,t,!0,e)||t}const Nv=Symbol.for("v-ndc");function Dv(t){return Ot(t)?Lv(Iv,t,!1)||t:t||Nv}function Lv(t,e,n=!0,i=!1){const r=en||dn;if(r){const o=r.type;{const a=Lb(o,!1);if(a&&(a===e||a===Un(e)||a===Mu(Un(e))))return o}const s=dp(r[t]||o[t],e)||dp(r.appContext[t],e);return!s&&i?o:s}}function dp(t,e){return t&&(t[e]||t[Un(e)]||t[Mu(Un(e))])}function Ht(t,e,n,i){let r;const o=n&&n[i],s=et(t);if(s||Ot(t)){const a=s&&Vi(t);let l=!1,u=!1;a&&(l=!Rn(t),u=Yi(t),t=Cu(t)),r=new Array(t.length);for(let c=0,d=t.length;c<d;c++)r[c]=e(l?u?Jo(Kn(t[c])):Kn(t[c]):t[c],c,void 0,o&&o[c])}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,o&&o[a])}else if(bt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,o&&o[l]));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(t[c],c,l,o&&o[l])}}else r=[];return n&&(n[i]=r),r}function jx(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(et(i))for(let r=0;r<i.length;r++)t[i[r].name]=i[r].fn;else i&&(t[i.name]=i.key?(...r)=>{const o=i.fn(...r);return o&&(o.key=i.key),o}:i.fn)}return t}function qi(t,e,n={},i,r){if(en.ce||en.parent&&Ho(en.parent)&&en.parent.ce){const u=Object.keys(n).length>0;return e!=="default"&&(n.name=e),ce(),jt(st,null,[tt("slot",n,i&&i())],u?-2:64)}let o=t[e];o&&o._c&&(o._d=!1),ce();const s=o&&Fv(o(n)),a=n.key||s&&s.key,l=jt(st,{key:(a&&!qn(a)?a:`_${e}`)+(!s&&i?"_fb":"")},s||(i?i():[]),s&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),o&&o._c&&(o._d=!0),l}function Fv(t){return t.some(e=>js(e)?!(e.type===Ki||e.type===st&&!Fv(e.children)):!0)?t:null}const vd=t=>t?n0(t)?Fu(t):vd(t.parent):null,$s=rn(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vd(t.parent),$root:t=>vd(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>kv(t),$forceUpdate:t=>t.f||(t.f=()=>{nh(t.update)}),$nextTick:t=>t.n||(t.n=fn.bind(t.proxy)),$watch:t=>Bx.bind(t)}),uc=(t,e)=>t!==Pt&&!t.__isScriptSetup&&yt(t,e),Jx={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:o,accessCache:s,type:a,appContext:l}=t;if(e[0]!=="$"){const f=s[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return o[e]}else{if(uc(i,e))return s[e]=1,i[e];if(r!==Pt&&yt(r,e))return s[e]=2,r[e];if(yt(o,e))return s[e]=3,o[e];if(n!==Pt&&yt(n,e))return s[e]=4,n[e];_d&&(s[e]=0)}}const u=$s[e];let c,d;if(u)return e==="$attrs"&&cn(t.attrs,"get",""),u(t);if((c=a.__cssModules)&&(c=c[e]))return c;if(n!==Pt&&yt(n,e))return s[e]=4,n[e];if(d=l.config.globalProperties,yt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:o}=t;return uc(r,e)?(r[e]=n,!0):i!==Pt&&yt(i,e)?(i[e]=n,!0):yt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:o,type:s}},a){let l;return!!(n[a]||t!==Pt&&a[0]!=="$"&&yt(t,a)||uc(e,a)||yt(o,a)||yt(i,a)||yt($s,a)||yt(r.config.globalProperties,a)||(l=s.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:yt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Uv(){return Ov().slots}function sh(){return Ov().attrs}function Ov(t){const e=ir();return e.setupContext||(e.setupContext=r0(e))}function fp(t){return et(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function Qx(t,e){const n={};for(const i in t)e.includes(i)||Object.defineProperty(n,i,{enumerable:!0,get:()=>t[i]});return n}let _d=!0;function eb(t){const e=kv(t),n=t.proxy,i=t.ctx;_d=!1,e.beforeCreate&&hp(e.beforeCreate,t,"bc");const{data:r,computed:o,methods:s,watch:a,provide:l,inject:u,created:c,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:x,destroyed:M,unmounted:y,render:P,renderTracked:L,renderTriggered:B,errorCaptured:_,serverPrefetch:S,expose:R,inheritAttrs:A,components:C,directives:H,filters:w}=e;if(u&&tb(u,i,null),s)for(const N in s){const z=s[N];it(z)&&(i[N]=z.bind(n))}if(r){const N=r.call(n,n);bt(N)&&(t.data=Cr(N))}if(_d=!0,o)for(const N in o){const z=o[N],X=it(z)?z.bind(n,n):it(z.get)?z.get.bind(n,n):di,Z=!it(z)&&it(z.set)?z.set.bind(n):di,ne=Ae({get:X,set:Z});Object.defineProperty(i,N,{enumerable:!0,configurable:!0,get:()=>ne.value,set:Q=>ne.value=Q})}if(a)for(const N in a)Bv(a[N],i,n,N);if(l){const N=it(l)?l.call(n):l;Reflect.ownKeys(N).forEach(z=>{Rr(z,N[z])})}c&&hp(c,t,"c");function T(N,z){et(z)?z.forEach(X=>N(X.bind(n))):z&&N(z.bind(n))}if(T(Rv,d),T(En,f),T(Wx,h),T(Xx,g),T($x,v),T(Hx,m),T(Zx,_),T(Kx,L),T(qx,B),T(mo,x),T(Nu,y),T(Yx,S),et(R))if(R.length){const N=t.exposed||(t.exposed={});R.forEach(z=>{Object.defineProperty(N,z,{get:()=>n[z],set:X=>n[z]=X,enumerable:!0})})}else t.exposed||(t.exposed={});P&&t.render===di&&(t.render=P),A!=null&&(t.inheritAttrs=A),C&&(t.components=C),H&&(t.directives=H),S&&Tv(t)}function tb(t,e,n=di){et(t)&&(t=yd(t));for(const i in t){const r=t[i];let o;bt(r)?"default"in r?o=In(r.from||i,r.default,!0):o=In(r.from||i):o=In(r),Ut(o)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[i]=o}}function hp(t,e,n){gi(et(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Bv(t,e,n,i){let r=i.includes(".")?Mv(n,i):()=>n[i];if(Ot(t)){const o=e[t];it(o)&&ut(r,o)}else if(it(t))ut(r,t.bind(n));else if(bt(t))if(et(t))t.forEach(o=>Bv(o,e,n,i));else{const o=it(t.handler)?t.handler.bind(n):e[t.handler];it(o)&&ut(r,o,t)}}function kv(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(u=>ql(l,u,s,!0)),ql(l,e,s)),bt(e)&&o.set(e,l),l}function ql(t,e,n,i=!1){const{mixins:r,extends:o}=e;o&&ql(t,o,n,!0),r&&r.forEach(s=>ql(t,s,n,!0));for(const s in e)if(!(i&&s==="expose")){const a=nb[s]||n&&n[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const nb={data:pp,props:mp,emits:mp,methods:Cs,computed:Cs,beforeCreate:hn,created:hn,beforeMount:hn,mounted:hn,beforeUpdate:hn,updated:hn,beforeDestroy:hn,beforeUnmount:hn,destroyed:hn,unmounted:hn,activated:hn,deactivated:hn,errorCaptured:hn,serverPrefetch:hn,components:Cs,directives:Cs,watch:rb,provide:pp,inject:ib};function pp(t,e){return e?t?function(){return rn(it(t)?t.call(this,this):t,it(e)?e.call(this,this):e)}:e:t}function ib(t,e){return Cs(yd(t),yd(e))}function yd(t){if(et(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function hn(t,e){return t?[...new Set([].concat(t,e))]:e}function Cs(t,e){return t?rn(Object.create(null),t,e):e}function mp(t,e){return t?et(t)&&et(e)?[...new Set([...t,...e])]:rn(Object.create(null),fp(t),fp(e??{})):e}function rb(t,e){if(!t)return e;if(!e)return t;const n=rn(Object.create(null),t);for(const i in e)n[i]=hn(t[i],e[i]);return n}function zv(){return{app:null,config:{isNativeTag:Hg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ob=0;function sb(t,e){return function(i,r=null){it(i)||(i=rn({},i)),r!=null&&!bt(r)&&(r=null);const o=zv(),s=new WeakSet,a=[];let l=!1;const u=o.app={_uid:ob++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:Ob,get config(){return o.config},set config(c){},use(c,...d){return s.has(c)||(c&&it(c.install)?(s.add(c),c.install(u,...d)):it(c)&&(s.add(c),c(u,...d))),u},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),u},component(c,d){return d?(o.components[c]=d,u):o.components[c]},directive(c,d){return d?(o.directives[c]=d,u):o.directives[c]},mount(c,d,f){if(!l){const h=u._ceVNode||tt(i,r);return h.appContext=o,f===!0?f="svg":f===!1&&(f=void 0),t(h,c,f),l=!0,u._container=c,c.__vue_app__=u,Fu(h.component)}},onUnmount(c){a.push(c)},unmount(){l&&(gi(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,d){return o.provides[c]=d,u},runWithContext(c){const d=ro;ro=u;try{return c()}finally{ro=d}}};return u}}let ro=null;const ab=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Un(e)}Modifiers`]||t[`${Lr(e)}Modifiers`];function lb(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Pt;let r=n;const o=e.startsWith("update:"),s=o&&ab(i,e.slice(7));s&&(s.trim&&(r=n.map(c=>Ot(c)?c.trim():c)),s.number&&(r=n.map(Yy)));let a,l=i[a=ic(e)]||i[a=ic(Un(e))];!l&&o&&(l=i[a=ic(Lr(e))]),l&&gi(l,t,6,r);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gi(u,t,6,r)}}const ub=new WeakMap;function Vv(t,e,n=!1){const i=n?ub:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const o=t.emits;let s={},a=!1;if(!it(t)){const l=u=>{const c=Vv(u,e,!0);c&&(a=!0,rn(s,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(bt(t)&&i.set(t,null),null):(et(o)?o.forEach(l=>s[l]=null):rn(s,o),bt(t)&&i.set(t,s),s)}function Du(t,e){return!t||!xu(e)?!1:(e=e.slice(2).replace(/Once$/,""),yt(t,e[0].toLowerCase()+e.slice(1))||yt(t,Lr(e))||yt(t,e))}function gp(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[o],slots:s,attrs:a,emit:l,render:u,renderCache:c,props:d,data:f,setupState:h,ctx:g,inheritAttrs:v}=t,m=Xl(t);let p,x;try{if(n.shapeFlag&4){const y=r||i,P=y;p=oi(u.call(P,y,c,d,h,f,g)),x=a}else{const y=e;p=oi(y.length>1?y(d,{attrs:a,slots:s,emit:l}):y(d,null)),x=e.props?a:cb(a)}}catch(y){Hs.length=0,Iu(y,t,1),p=tt(Ki)}let M=p;if(x&&v!==!1){const y=Object.keys(x),{shapeFlag:P}=M;y.length&&P&7&&(o&&y.some(qf)&&(x=db(x,o)),M=es(M,x,!1,!0))}return n.dirs&&(M=es(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&oh(M,n.transition),p=M,Xl(m),p}const cb=t=>{let e;for(const n in t)(n==="class"||n==="style"||xu(n))&&((e||(e={}))[n]=t[n]);return e},db=(t,e)=>{const n={};for(const i in t)(!qf(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function fb(t,e,n){const{props:i,children:r,component:o}=t,{props:s,children:a,patchFlag:l}=e,u=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?vp(i,s,u):!!s;if(l&8){const c=e.dynamicProps;for(let d=0;d<c.length;d++){const f=c[d];if($v(s,i,f)&&!Du(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===s?!1:i?s?vp(i,s,u):!0:!!s;return!1}function vp(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if($v(e,t,o)&&!Du(n,o))return!0}return!1}function $v(t,e,n){const i=t[n],r=e[n];return n==="style"&&bt(i)&&bt(r)?!Zf(i,r):i!==r}function hb({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Hv={},Gv=()=>Object.create(Hv),Wv=t=>Object.getPrototypeOf(t)===Hv;function pb(t,e,n,i=!1){const r={},o=Gv();t.propsDefaults=Object.create(null),Xv(t,e,r,o);for(const s in t.propsOptions[0])s in r||(r[s]=void 0);n?t.props=i?r:bx(r):t.type.props?t.props=r:t.props=o,t.attrs=o}function mb(t,e,n,i){const{props:r,attrs:o,vnode:{patchFlag:s}}=t,a=vt(r),[l]=t.propsOptions;let u=!1;if((i||s>0)&&!(s&16)){if(s&8){const c=t.vnode.dynamicProps;for(let d=0;d<c.length;d++){let f=c[d];if(Du(t.emitsOptions,f))continue;const h=e[f];if(l)if(yt(o,f))h!==o[f]&&(o[f]=h,u=!0);else{const g=Un(f);r[g]=xd(l,a,g,h,t,!1)}else h!==o[f]&&(o[f]=h,u=!0)}}}else{Xv(t,e,r,o)&&(u=!0);let c;for(const d in a)(!e||!yt(e,d)&&((c=Lr(d))===d||!yt(e,c)))&&(l?n&&(n[d]!==void 0||n[c]!==void 0)&&(r[d]=xd(l,a,d,void 0,t,!0)):delete r[d]);if(o!==a)for(const d in o)(!e||!yt(e,d))&&(delete o[d],u=!0)}u&&Di(t.attrs,"set","")}function Xv(t,e,n,i){const[r,o]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(Us(l))continue;const u=e[l];let c;r&&yt(r,c=Un(l))?!o||!o.includes(c)?n[c]=u:(a||(a={}))[c]=u:Du(t.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,s=!0)}if(o){const l=vt(n),u=a||Pt;for(let c=0;c<o.length;c++){const d=o[c];n[d]=xd(r,l,d,u[d],t,!yt(u,d))}}return s}function xd(t,e,n,i,r,o){const s=t[n];if(s!=null){const a=yt(s,"default");if(a&&i===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&it(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=xa(r);i=u[n]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(n,i)}s[0]&&(o&&!a?i=!1:s[1]&&(i===""||i===Lr(n))&&(i=!0))}return i}const gb=new WeakMap;function Yv(t,e,n=!1){const i=n?gb:e.propsCache,r=i.get(t);if(r)return r;const o=t.props,s={},a=[];let l=!1;if(!it(t)){const c=d=>{l=!0;const[f,h]=Yv(d,e,!0);rn(s,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!o&&!l)return bt(t)&&i.set(t,zo),zo;if(et(o))for(let c=0;c<o.length;c++){const d=Un(o[c]);_p(d)&&(s[d]=Pt)}else if(o)for(const c in o){const d=Un(c);if(_p(d)){const f=o[c],h=s[d]=et(f)||it(f)?{type:f}:rn({},f),g=h.type;let v=!1,m=!0;if(et(g))for(let p=0;p<g.length;++p){const x=g[p],M=it(x)&&x.name;if(M==="Boolean"){v=!0;break}else M==="String"&&(m=!1)}else v=it(g)&&g.name==="Boolean";h[0]=v,h[1]=m,(v||yt(h,"default"))&&a.push(d)}}const u=[s,a];return bt(t)&&i.set(t,u),u}function _p(t){return t[0]!=="$"&&!Us(t)}const ah=t=>t==="_"||t==="_ctx"||t==="$stable",lh=t=>et(t)?t.map(oi):[oi(t)],vb=(t,e,n)=>{if(e._n)return e;const i=xn((...r)=>lh(e(...r)),n);return i._c=!1,i},qv=(t,e,n)=>{const i=t._ctx;for(const r in t){if(ah(r))continue;const o=t[r];if(it(o))e[r]=vb(r,o,i);else if(o!=null){const s=lh(o);e[r]=()=>s}}},Kv=(t,e)=>{const n=lh(e);t.slots.default=()=>n},Zv=(t,e,n)=>{for(const i in e)(n||!ah(i))&&(t[i]=e[i])},_b=(t,e,n)=>{const i=t.slots=Gv();if(t.vnode.shapeFlag&32){const r=e._;r?(Zv(i,e,n),n&&qg(i,"_",r,!0)):qv(e,i)}else e&&Kv(t,e)},yb=(t,e,n)=>{const{vnode:i,slots:r}=t;let o=!0,s=Pt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?o=!1:Zv(r,e,n):(o=!e.$stable,qv(e,r)),s=e}else e&&(Kv(t,e),s={default:1});if(o)for(const a in r)!ah(a)&&s[a]==null&&delete r[a]},ln=wb;function xb(t){return bb(t)}function bb(t,e){const n=wu();n.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:s,createText:a,createComment:l,setText:u,setElementText:c,parentNode:d,nextSibling:f,setScopeId:h=di,insertStaticContent:g}=t,v=($,G,F,U=null,k=null,W=null,b=void 0,q=null,J=!!G.dynamicChildren)=>{if($===G)return;$&&!ms($,G)&&(U=K($),Q($,k,W,!0),$=null),G.patchFlag===-2&&(J=!1,G.dynamicChildren=null);const{type:ee,ref:ie,shapeFlag:I}=G;switch(ee){case Lu:m($,G,F,U);break;case Ki:p($,G,F,U);break;case dc:$==null&&x(G,F,U,b);break;case st:C($,G,F,U,k,W,b,q,J);break;default:I&1?P($,G,F,U,k,W,b,q,J):I&6?H($,G,F,U,k,W,b,q,J):(I&64||I&128)&&ee.process($,G,F,U,k,W,b,q,J,Se)}ie!=null&&k?Vs(ie,$&&$.ref,W,G||$,!G):ie==null&&$&&$.ref!=null&&Vs($.ref,null,W,$,!0)},m=($,G,F,U)=>{if($==null)i(G.el=a(G.children),F,U);else{const k=G.el=$.el;G.children!==$.children&&u(k,G.children)}},p=($,G,F,U)=>{$==null?i(G.el=l(G.children||""),F,U):G.el=$.el},x=($,G,F,U)=>{[$.el,$.anchor]=g($.children,G,F,U,$.el,$.anchor)},M=({el:$,anchor:G},F,U)=>{let k;for(;$&&$!==G;)k=f($),i($,F,U),$=k;i(G,F,U)},y=({el:$,anchor:G})=>{let F;for(;$&&$!==G;)F=f($),r($),$=F;r(G)},P=($,G,F,U,k,W,b,q,J)=>{if(G.type==="svg"?b="svg":G.type==="math"&&(b="mathml"),$==null)L(G,F,U,k,W,b,q,J);else{const ee=$.el&&$.el._isVueCE?$.el:null;try{ee&&ee._beginPatch(),S($,G,k,W,b,q,J)}finally{ee&&ee._endPatch()}}},L=($,G,F,U,k,W,b,q)=>{let J,ee;const{props:ie,shapeFlag:I,transition:E,dirs:Y}=$;if(J=$.el=s($.type,W,ie&&ie.is,ie),I&8?c(J,$.children):I&16&&_($.children,J,null,U,k,cc($,W),b,q),Y&&Or($,null,U,"created"),B(J,$,$.scopeId,b,U),ie){for(const me in ie)me!=="value"&&!Us(me)&&o(J,me,null,ie[me],W,U);"value"in ie&&o(J,"value",null,ie.value,W),(ee=ie.onVnodeBeforeMount)&&ei(ee,U,$)}Y&&Or($,null,U,"beforeMount");const ae=Sb(k,E);ae&&E.beforeEnter(J),i(J,G,F),((ee=ie&&ie.onVnodeMounted)||ae||Y)&&ln(()=>{ee&&ei(ee,U,$),ae&&E.enter(J),Y&&Or($,null,U,"mounted")},k)},B=($,G,F,U,k)=>{if(F&&h($,F),U)for(let W=0;W<U.length;W++)h($,U[W]);if(k){let W=k.subTree;if(G===W||Qv(W.type)&&(W.ssContent===G||W.ssFallback===G)){const b=k.vnode;B($,b,b.scopeId,b.slotScopeIds,k.parent)}}},_=($,G,F,U,k,W,b,q,J=0)=>{for(let ee=J;ee<$.length;ee++){const ie=$[ee]=q?Ni($[ee]):oi($[ee]);v(null,ie,G,F,U,k,W,b,q)}},S=($,G,F,U,k,W,b)=>{const q=G.el=$.el;let{patchFlag:J,dynamicChildren:ee,dirs:ie}=G;J|=$.patchFlag&16;const I=$.props||Pt,E=G.props||Pt;let Y;if(F&&Br(F,!1),(Y=E.onVnodeBeforeUpdate)&&ei(Y,F,G,$),ie&&Or(G,$,F,"beforeUpdate"),F&&Br(F,!0),(I.innerHTML&&E.innerHTML==null||I.textContent&&E.textContent==null)&&c(q,""),ee?R($.dynamicChildren,ee,q,F,U,cc(G,k),W):b||z($,G,q,null,F,U,cc(G,k),W,!1),J>0){if(J&16)A(q,I,E,F,k);else if(J&2&&I.class!==E.class&&o(q,"class",null,E.class,k),J&4&&o(q,"style",I.style,E.style,k),J&8){const ae=G.dynamicProps;for(let me=0;me<ae.length;me++){const fe=ae[me],Ue=I[fe],Ie=E[fe];(Ie!==Ue||fe==="value")&&o(q,fe,Ue,Ie,k,F)}}J&1&&$.children!==G.children&&c(q,G.children)}else!b&&ee==null&&A(q,I,E,F,k);((Y=E.onVnodeUpdated)||ie)&&ln(()=>{Y&&ei(Y,F,G,$),ie&&Or(G,$,F,"updated")},U)},R=($,G,F,U,k,W,b)=>{for(let q=0;q<G.length;q++){const J=$[q],ee=G[q],ie=J.el&&(J.type===st||!ms(J,ee)||J.shapeFlag&198)?d(J.el):F;v(J,ee,ie,null,U,k,W,b,!0)}},A=($,G,F,U,k)=>{if(G!==F){if(G!==Pt)for(const W in G)!Us(W)&&!(W in F)&&o($,W,G[W],null,k,U);for(const W in F){if(Us(W))continue;const b=F[W],q=G[W];b!==q&&W!=="value"&&o($,W,q,b,k,U)}"value"in F&&o($,"value",G.value,F.value,k)}},C=($,G,F,U,k,W,b,q,J)=>{const ee=G.el=$?$.el:a(""),ie=G.anchor=$?$.anchor:a("");let{patchFlag:I,dynamicChildren:E,slotScopeIds:Y}=G;Y&&(q=q?q.concat(Y):Y),$==null?(i(ee,F,U),i(ie,F,U),_(G.children||[],F,ie,k,W,b,q,J)):I>0&&I&64&&E&&$.dynamicChildren&&$.dynamicChildren.length===E.length?(R($.dynamicChildren,E,F,k,W,b,q),(G.key!=null||k&&G===k.subTree)&&uh($,G,!0)):z($,G,F,ie,k,W,b,q,J)},H=($,G,F,U,k,W,b,q,J)=>{G.slotScopeIds=q,$==null?G.shapeFlag&512?k.ctx.activate(G,F,U,b,J):w(G,F,U,k,W,b,J):O($,G,J)},w=($,G,F,U,k,W,b)=>{const q=$.component=Ib($,U,k);if(Av($)&&(q.ctx.renderer=Se),Pb(q,!1,b),q.asyncDep){if(k&&k.registerDep(q,T,b),!$.el){const J=q.subTree=tt(Ki);p(null,J,G,F),$.placeholder=J.el}}else T(q,$,G,F,k,W,b)},O=($,G,F)=>{const U=G.component=$.component;if(fb($,G,F))if(U.asyncDep&&!U.asyncResolved){N(U,G,F);return}else U.next=G,U.update();else G.el=$.el,U.vnode=G},T=($,G,F,U,k,W,b)=>{const q=()=>{if($.isMounted){let{next:I,bu:E,u:Y,parent:ae,vnode:me}=$;{const Ye=jv($);if(Ye){I&&(I.el=me.el,N($,I,b)),Ye.asyncDep.then(()=>{ln(()=>{$.isUnmounted||ee()},k)});return}}let fe=I,Ue;Br($,!1),I?(I.el=me.el,N($,I,b)):I=me,E&&rc(E),(Ue=I.props&&I.props.onVnodeBeforeUpdate)&&ei(Ue,ae,I,me),Br($,!0);const Ie=gp($),He=$.subTree;$.subTree=Ie,v(He,Ie,d(He.el),K(He),$,k,W),I.el=Ie.el,fe===null&&hb($,Ie.el),Y&&ln(Y,k),(Ue=I.props&&I.props.onVnodeUpdated)&&ln(()=>ei(Ue,ae,I,me),k)}else{let I;const{el:E,props:Y}=G,{bm:ae,m:me,parent:fe,root:Ue,type:Ie}=$,He=Ho(G);Br($,!1),ae&&rc(ae),!He&&(I=Y&&Y.onVnodeBeforeMount)&&ei(I,fe,G),Br($,!0);{Ue.ce&&Ue.ce._hasShadowRoot()&&Ue.ce._injectChildStyle(Ie);const Ye=$.subTree=gp($);v(null,Ye,F,U,$,k,W),G.el=Ye.el}if(me&&ln(me,k),!He&&(I=Y&&Y.onVnodeMounted)){const Ye=G;ln(()=>ei(I,fe,Ye),k)}(G.shapeFlag&256||fe&&Ho(fe.vnode)&&fe.vnode.shapeFlag&256)&&$.a&&ln($.a,k),$.isMounted=!0,G=F=U=null}};$.scope.on();const J=$.effect=new Qg(q);$.scope.off();const ee=$.update=J.run.bind(J),ie=$.job=J.runIfDirty.bind(J);ie.i=$,ie.id=$.uid,J.scheduler=()=>nh(ie),Br($,!0),ee()},N=($,G,F)=>{G.component=$;const U=$.vnode.props;$.vnode=G,$.next=null,mb($,G.props,U,F),yb($,G.children,F),Wi(),op($),Xi()},z=($,G,F,U,k,W,b,q,J=!1)=>{const ee=$&&$.children,ie=$?$.shapeFlag:0,I=G.children,{patchFlag:E,shapeFlag:Y}=G;if(E>0){if(E&128){Z(ee,I,F,U,k,W,b,q,J);return}else if(E&256){X(ee,I,F,U,k,W,b,q,J);return}}Y&8?(ie&16&&D(ee,k,W),I!==ee&&c(F,I)):ie&16?Y&16?Z(ee,I,F,U,k,W,b,q,J):D(ee,k,W,!0):(ie&8&&c(F,""),Y&16&&_(I,F,U,k,W,b,q,J))},X=($,G,F,U,k,W,b,q,J)=>{$=$||zo,G=G||zo;const ee=$.length,ie=G.length,I=Math.min(ee,ie);let E;for(E=0;E<I;E++){const Y=G[E]=J?Ni(G[E]):oi(G[E]);v($[E],Y,F,null,k,W,b,q,J)}ee>ie?D($,k,W,!0,!1,I):_(G,F,U,k,W,b,q,J,I)},Z=($,G,F,U,k,W,b,q,J)=>{let ee=0;const ie=G.length;let I=$.length-1,E=ie-1;for(;ee<=I&&ee<=E;){const Y=$[ee],ae=G[ee]=J?Ni(G[ee]):oi(G[ee]);if(ms(Y,ae))v(Y,ae,F,null,k,W,b,q,J);else break;ee++}for(;ee<=I&&ee<=E;){const Y=$[I],ae=G[E]=J?Ni(G[E]):oi(G[E]);if(ms(Y,ae))v(Y,ae,F,null,k,W,b,q,J);else break;I--,E--}if(ee>I){if(ee<=E){const Y=E+1,ae=Y<ie?G[Y].el:U;for(;ee<=E;)v(null,G[ee]=J?Ni(G[ee]):oi(G[ee]),F,ae,k,W,b,q,J),ee++}}else if(ee>E)for(;ee<=I;)Q($[ee],k,W,!0),ee++;else{const Y=ee,ae=ee,me=new Map;for(ee=ae;ee<=E;ee++){const oe=G[ee]=J?Ni(G[ee]):oi(G[ee]);oe.key!=null&&me.set(oe.key,ee)}let fe,Ue=0;const Ie=E-ae+1;let He=!1,Ye=0;const Pe=new Array(Ie);for(ee=0;ee<Ie;ee++)Pe[ee]=0;for(ee=Y;ee<=I;ee++){const oe=$[ee];if(Ue>=Ie){Q(oe,k,W,!0);continue}let Ee;if(oe.key!=null)Ee=me.get(oe.key);else for(fe=ae;fe<=E;fe++)if(Pe[fe-ae]===0&&ms(oe,G[fe])){Ee=fe;break}Ee===void 0?Q(oe,k,W,!0):(Pe[Ee-ae]=ee+1,Ee>=Ye?Ye=Ee:He=!0,v(oe,G[Ee],F,null,k,W,b,q,J),Ue++)}const ue=He?Mb(Pe):zo;for(fe=ue.length-1,ee=Ie-1;ee>=0;ee--){const oe=ae+ee,Ee=G[oe],De=G[oe+1],Qe=oe+1<ie?De.el||Jv(De):U;Pe[ee]===0?v(null,Ee,F,Qe,k,W,b,q,J):He&&(fe<0||ee!==ue[fe]?ne(Ee,F,Qe,2):fe--)}}},ne=($,G,F,U,k=null)=>{const{el:W,type:b,transition:q,children:J,shapeFlag:ee}=$;if(ee&6){ne($.component.subTree,G,F,U);return}if(ee&128){$.suspense.move(G,F,U);return}if(ee&64){b.move($,G,F,Se);return}if(b===st){i(W,G,F);for(let I=0;I<J.length;I++)ne(J[I],G,F,U);i($.anchor,G,F);return}if(b===dc){M($,G,F);return}if(U!==2&&ee&1&&q)if(U===0)q.beforeEnter(W),i(W,G,F),ln(()=>q.enter(W),k);else{const{leave:I,delayLeave:E,afterLeave:Y}=q,ae=()=>{$.ctx.isUnmounted?r(W):i(W,G,F)},me=()=>{W._isLeaving&&W[Vx](!0),I(W,()=>{ae(),Y&&Y()})};E?E(W,ae,me):me()}else i(W,G,F)},Q=($,G,F,U=!1,k=!1)=>{const{type:W,props:b,ref:q,children:J,dynamicChildren:ee,shapeFlag:ie,patchFlag:I,dirs:E,cacheIndex:Y}=$;if(I===-2&&(k=!1),q!=null&&(Wi(),Vs(q,null,F,$,!0),Xi()),Y!=null&&(G.renderCache[Y]=void 0),ie&256){G.ctx.deactivate($);return}const ae=ie&1&&E,me=!Ho($);let fe;if(me&&(fe=b&&b.onVnodeBeforeUnmount)&&ei(fe,G,$),ie&6)te($.component,F,U);else{if(ie&128){$.suspense.unmount(F,U);return}ae&&Or($,null,G,"beforeUnmount"),ie&64?$.type.remove($,G,F,Se,U):ee&&!ee.hasOnce&&(W!==st||I>0&&I&64)?D(ee,G,F,!1,!0):(W===st&&I&384||!k&&ie&16)&&D(J,G,F),U&&de($)}(me&&(fe=b&&b.onVnodeUnmounted)||ae)&&ln(()=>{fe&&ei(fe,G,$),ae&&Or($,null,G,"unmounted")},F)},de=$=>{const{type:G,el:F,anchor:U,transition:k}=$;if(G===st){we(F,U);return}if(G===dc){y($);return}const W=()=>{r(F),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if($.shapeFlag&1&&k&&!k.persisted){const{leave:b,delayLeave:q}=k,J=()=>b(F,W);q?q($.el,W,J):J()}else W()},we=($,G)=>{let F;for(;$!==G;)F=f($),r($),$=F;r(G)},te=($,G,F)=>{const{bum:U,scope:k,job:W,subTree:b,um:q,m:J,a:ee}=$;yp(J),yp(ee),U&&rc(U),k.stop(),W&&(W.flags|=8,Q(b,$,G,F)),q&&ln(q,G),ln(()=>{$.isUnmounted=!0},G)},D=($,G,F,U=!1,k=!1,W=0)=>{for(let b=W;b<$.length;b++)Q($[b],G,F,U,k)},K=$=>{if($.shapeFlag&6)return K($.component.subTree);if($.shapeFlag&128)return $.suspense.next();const G=f($.anchor||$.el),F=G&&G[wv];return F?f(F):G};let se=!1;const be=($,G,F)=>{let U;$==null?G._vnode&&(Q(G._vnode,null,null,!0),U=G._vnode.component):v(G._vnode||null,$,G,null,null,null,F),G._vnode=$,se||(se=!0,op(U),yv(),se=!1)},Se={p:v,um:Q,m:ne,r:de,mt:w,mc:_,pc:z,pbc:R,n:K,o:t};return{render:be,hydrate:void 0,createApp:sb(be)}}function cc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Br({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Sb(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function uh(t,e,n=!1){const i=t.children,r=e.children;if(et(i)&&et(r))for(let o=0;o<i.length;o++){const s=i[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=Ni(r[o]),a.el=s.el),!n&&a.patchFlag!==-2&&uh(s,a)),a.type===Lu&&(a.patchFlag===-1&&(a=r[o]=Ni(a)),a.el=s.el),a.type===Ki&&!a.el&&(a.el=s.el)}}function Mb(t){const e=t.slice(),n=[0];let i,r,o,s,a;const l=t.length;for(i=0;i<l;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,t[n[a]]<u?o=a+1:s=a;u<t[n[o]]&&(o>0&&(e[i]=n[o-1]),n[o]=i)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=e[s];return n}function jv(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:jv(e)}function yp(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Jv(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Jv(e.subTree):null}const Qv=t=>t.__isSuspense;function wb(t,e){e&&e.pendingBranch?et(t)?e.effects.push(...t):e.effects.push(t):Lx(t)}const st=Symbol.for("v-fgt"),Lu=Symbol.for("v-txt"),Ki=Symbol.for("v-cmt"),dc=Symbol.for("v-stc"),Hs=[];let vn=null;function ce(t=!1){Hs.push(vn=t?null:[])}function Eb(){Hs.pop(),vn=Hs[Hs.length-1]||null}let Qo=1;function Kl(t,e=!1){Qo+=t,t<0&&vn&&e&&(vn.hasOnce=!0)}function e0(t){return t.dynamicChildren=Qo>0?vn||zo:null,Eb(),Qo>0&&vn&&vn.push(t),t}function ve(t,e,n,i,r,o){return e0(j(t,e,n,i,r,o,!0))}function jt(t,e,n,i,r){return e0(tt(t,e,n,i,r,!0))}function js(t){return t?t.__v_isVNode===!0:!1}function ms(t,e){return t.type===e.type&&t.key===e.key}const t0=({key:t})=>t??null,Ml=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ot(t)||Ut(t)||it(t)?{i:en,r:t,k:e,f:!!n}:t:null);function j(t,e=null,n=null,i=0,r=null,o=t===st?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&t0(e),ref:e&&Ml(e),scopeId:bv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:en};return a?(ch(l,n),o&128&&t.normalize(l)):n&&(l.shapeFlag|=Ot(n)?8:16),Qo>0&&!s&&vn&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&vn.push(l),l}const tt=Tb;function Tb(t,e=null,n=null,i=0,r=null,o=!1){if((!t||t===Nv)&&(t=Ki),js(t)){const a=es(t,e,!0);return n&&ch(a,n),Qo>0&&!o&&vn&&(a.shapeFlag&6?vn[vn.indexOf(t)]=a:vn.push(a)),a.patchFlag=-2,a}if(Fb(t)&&(t=t.__vccOpts),e){e=Ab(e);let{class:a,style:l}=e;a&&!Ot(a)&&(e.class=dt(a)),bt(l)&&(Ru(l)&&!et(l)&&(l=rn({},l)),e.style=nt(l))}const s=Ot(t)?1:Qv(t)?128:kx(t)?64:bt(t)?4:it(t)?2:0;return j(t,e,n,i,r,s,o,!0)}function Ab(t){return t?Ru(t)||Wv(t)?rn({},t):t:null}function es(t,e,n=!1,i=!1){const{props:r,ref:o,patchFlag:s,children:a,transition:l}=t,u=e?Js(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&t0(u),ref:e&&e.ref?n&&o?et(o)?o.concat(Ml(e)):[o,Ml(e)]:Ml(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==st?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&es(t.ssContent),ssFallback:t.ssFallback&&es(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&oh(c,l.clone(c)),c}function Go(t=" ",e=0){return tt(Lu,null,t,e)}function We(t="",e=!1){return e?(ce(),jt(Ki,null,t)):tt(Ki,null,t)}function oi(t){return t==null||typeof t=="boolean"?tt(Ki):et(t)?tt(st,null,t.slice()):js(t)?Ni(t):tt(Lu,null,String(t))}function Ni(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:es(t)}function ch(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(et(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ch(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Wv(e)?e._ctx=en:r===3&&en&&(en.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else it(e)?(e={default:e,_ctx:en},n=32):(e=String(e),i&64?(n=16,e=[Go(e)]):n=8);t.children=e,t.shapeFlag|=n}function Js(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=dt([e.class,i.class]));else if(r==="style")e.style=nt([e.style,i.style]);else if(xu(r)){const o=e[r],s=i[r];s&&o!==s&&!(et(o)&&o.includes(s))&&(e[r]=o?[].concat(o,s):s)}else r!==""&&(e[r]=i[r])}return e}function ei(t,e,n,i=null){gi(t,e,7,[n,i])}const Cb=zv();let Rb=0;function Ib(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Cb,o={uid:Rb++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yv(i,r),emitsOptions:Vv(i,r),emit:null,emitted:null,propsDefaults:Pt,inheritAttrs:i.inheritAttrs,ctx:Pt,data:Pt,props:Pt,attrs:Pt,slots:Pt,refs:Pt,setupState:Pt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=lb.bind(null,o),t.ce&&t.ce(o),o}let dn=null;const ir=()=>dn||en;let Zl,bd;{const t=wu(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),o=>{r.length>1?r.forEach(s=>s(o)):r[0](o)}};Zl=e("__VUE_INSTANCE_SETTERS__",n=>dn=n),bd=e("__VUE_SSR_SETTERS__",n=>Qs=n)}const xa=t=>{const e=dn;return Zl(t),t.scope.on(),()=>{t.scope.off(),Zl(e)}},xp=()=>{dn&&dn.scope.off(),Zl(null)};function n0(t){return t.vnode.shapeFlag&4}let Qs=!1;function Pb(t,e=!1,n=!1){e&&bd(e);const{props:i,children:r}=t.vnode,o=n0(t);pb(t,i,o,e),_b(t,r,n||e);const s=o?Nb(t,e):void 0;return e&&bd(!1),s}function Nb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Jx);const{setup:i}=n;if(i){Wi();const r=t.setupContext=i.length>1?r0(t):null,o=xa(t),s=ya(i,t,0,[t.props,r]),a=Wg(s);if(Xi(),o(),(a||t.sp)&&!Ho(t)&&Tv(t),a){if(s.then(xp,xp),e)return s.then(l=>{bp(t,l)}).catch(l=>{Iu(l,t,0)});t.asyncDep=s}else bp(t,s)}else i0(t)}function bp(t,e,n){it(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:bt(e)&&(t.setupState=pv(e)),i0(t)}function i0(t,e,n){const i=t.type;t.render||(t.render=i.render||di);{const r=xa(t);Wi();try{eb(t)}finally{Xi(),r()}}}const Db={get(t,e){return cn(t,"get",""),t[e]}};function r0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Db),slots:t.slots,emit:t.emit,expose:e}}function Fu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(pv(io(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in $s)return $s[n](t)},has(e,n){return n in e||n in $s}})):t.proxy}function Lb(t,e=!0){return it(t)?t.displayName||t.name:t.name||e&&t.__name}function Fb(t){return it(t)&&"__vccOpts"in t}const Ae=(t,e)=>Rx(t,e,Qs);function Rt(t,e,n){try{Kl(-1);const i=arguments.length;return i===2?bt(e)&&!et(e)?js(e)?tt(t,null,[e]):tt(t,e):tt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&js(n)&&(n=[n]),tt(t,e,n))}finally{Kl(1)}}function Ub(t,e){const n=t.memo;if(n.length!=e.length)return!1;for(let i=0;i<n.length;i++)if(zi(n[i],e[i]))return!1;return Qo>0&&vn&&vn.push(t),!0}const Ob="3.5.29";let Sd;const Sp=typeof window<"u"&&window.trustedTypes;if(Sp)try{Sd=Sp.createPolicy("vue",{createHTML:t=>t})}catch{}const o0=Sd?t=>Sd.createHTML(t):t=>t,Bb="http://www.w3.org/2000/svg",kb="http://www.w3.org/1998/Math/MathML",Pi=typeof document<"u"?document:null,Mp=Pi&&Pi.createElement("template"),zb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Pi.createElementNS(Bb,t):e==="mathml"?Pi.createElementNS(kb,t):n?Pi.createElement(t,{is:n}):Pi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Pi.createTextNode(t),createComment:t=>Pi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Pi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,o){const s=n?n.previousSibling:e.lastChild;if(r&&(r===o||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===o||!(r=r.nextSibling)););else{Mp.innerHTML=o0(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Mp.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Vb=Symbol("_vtc");function $b(t,e,n){const i=t[Vb];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jl=Symbol("_vod"),s0=Symbol("_vsh"),ko={name:"show",beforeMount(t,{value:e},{transition:n}){t[jl]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):gs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),gs(t,!0),i.enter(t)):i.leave(t,()=>{gs(t,!1)}):gs(t,e))},beforeUnmount(t,{value:e}){gs(t,e)}};function gs(t,e){t.style.display=e?t[jl]:"none",t[s0]=!e}const Hb=Symbol(""),Gb=/(?:^|;)\s*display\s*:/;function Wb(t,e,n){const i=t.style,r=Ot(n);let o=!1;if(n&&!r){if(e)if(Ot(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();n[a]==null&&wl(i,a,"")}else for(const s in e)n[s]==null&&wl(i,s,"");for(const s in n)s==="display"&&(o=!0),wl(i,s,n[s])}else if(r){if(e!==n){const s=i[Hb];s&&(n+=";"+s),i.cssText=n,o=Gb.test(n)}}else e&&t.removeAttribute("style");jl in t&&(t[jl]=o?i.display:"",t[s0]&&(i.display="none"))}const wp=/\s*!important$/;function wl(t,e,n){if(et(n))n.forEach(i=>wl(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Xb(t,e);wp.test(n)?t.setProperty(Lr(i),n.replace(wp,""),"important"):t[i]=n}}const Ep=["Webkit","Moz","ms"],fc={};function Xb(t,e){const n=fc[e];if(n)return n;let i=Un(e);if(i!=="filter"&&i in t)return fc[e]=i;i=Mu(i);for(let r=0;r<Ep.length;r++){const o=Ep[r]+i;if(o in t)return fc[e]=o}return e}const Tp="http://www.w3.org/1999/xlink";function Ap(t,e,n,i,r,o=ex(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Tp,e.slice(6,e.length)):t.setAttributeNS(Tp,e,n):n==null||o&&!Kg(n)?t.removeAttribute(e):t.setAttribute(e,o?"":qn(n)?String(n):n)}function Cp(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?o0(n):n);return}const o=t.tagName;if(e==="value"&&o!=="PROGRESS"&&!o.includes("-")){const a=o==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let s=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Kg(n):n==null&&a==="string"?(n="",s=!0):a==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(r||e)}function Yb(t,e,n,i){t.addEventListener(e,n,i)}function qb(t,e,n,i){t.removeEventListener(e,n,i)}const Rp=Symbol("_vei");function Kb(t,e,n,i,r=null){const o=t[Rp]||(t[Rp]={}),s=o[e];if(i&&s)s.value=i;else{const[a,l]=Zb(e);if(i){const u=o[e]=Qb(i,r);Yb(t,a,u,l)}else s&&(qb(t,a,s,l),o[e]=void 0)}}const Ip=/(?:Once|Passive|Capture)$/;function Zb(t){let e;if(Ip.test(t)){e={};let i;for(;i=t.match(Ip);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Lr(t.slice(2)),e]}let hc=0;const jb=Promise.resolve(),Jb=()=>hc||(jb.then(()=>hc=0),hc=Date.now());function Qb(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;gi(e1(i,n.value),e,5,[i])};return n.value=t,n.attached=Jb(),n}function e1(t,e){if(et(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Pp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,t1=(t,e,n,i,r,o)=>{const s=r==="svg";e==="class"?$b(t,i,s):e==="style"?Wb(t,n,i):xu(e)?qf(e)||Kb(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):n1(t,e,i,s))?(Cp(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ap(t,e,i,s,o,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ot(i))?Cp(t,Un(e),i,o,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Ap(t,e,i,s))};function n1(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pp(e)&&it(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Pp(e)&&Ot(n)?!1:e in t}const i1=["ctrl","shift","alt","meta"],r1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>i1.some(n=>t[`${n}Key`]&&!e.includes(n))},Oe=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...o)=>{for(let s=0;s<e.length;s++){const a=r1[e[s]];if(a&&a(r,e))return}return t(r,...o)}))},o1={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},s1=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=(r=>{if(!("key"in r))return;const o=Lr(r.key);if(e.some(s=>s===o||o1[s]===o))return t(r)}))},a1=rn({patchProp:t1},zb);let Np;function l1(){return Np||(Np=xb(a1))}const u1=((...t)=>{const e=l1().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=d1(i);if(!r)return;const o=e._component;!it(o)&&!o.render&&!o.template&&(o.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=n(r,!1,c1(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},e});function c1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function d1(t){return Ot(t)?document.querySelector(t):t}let a0;const Uu=t=>a0=t,l0=Symbol();function Md(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Gs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Gs||(Gs={}));function f1(){const t=Eu(!0),e=t.run(()=>Ce({}));let n=[],i=[];const r=io({install(o){Uu(r),r._a=o,o.provide(l0,r),o.config.globalProperties.$pinia=r,i.forEach(s=>n.push(s)),i=[]},use(o){return this._a?n.push(o):i.push(o),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const u0=()=>{};function Dp(t,e,n,i=u0){t.add(e);const r=()=>{t.delete(e)&&i()};return!n&&Tu()&&Os(r),r}function xo(t,...e){t.forEach(n=>{n(...e)})}const h1=t=>t(),Lp=Symbol(),pc=Symbol();function wd(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Md(r)&&Md(i)&&t.hasOwnProperty(n)&&!Ut(i)&&!Vi(i)?t[n]=wd(r,i):t[n]=i}return t}const p1=Symbol();function m1(t){return!Md(t)||!Object.prototype.hasOwnProperty.call(t,p1)}const{assign:gr}=Object;function g1(t){return!!(Ut(t)&&t.effect)}function v1(t,e,n,i){const{state:r,actions:o,getters:s}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=r?r():{});const c=mv(n.state.value[t]);return gr(c,o,Object.keys(s||{}).reduce((d,f)=>(d[f]=io(Ae(()=>{Uu(n);const h=n._s.get(t);return s[f].call(h,h)})),d),{}))}return l=c0(t,u,e,n,i,!0),l}function c0(t,e,n={},i,r,o){let s;const a=gr({actions:{}},n),l={deep:!0};let u,c,d=new Set,f=new Set,h;const g=i.state.value[t];!o&&!g&&(i.state.value[t]={});let v;function m(_){let S;u=c=!1,typeof _=="function"?(_(i.state.value[t]),S={type:Gs.patchFunction,storeId:t,events:h}):(wd(i.state.value[t],_),S={type:Gs.patchObject,payload:_,storeId:t,events:h});const R=v=Symbol();fn().then(()=>{v===R&&(u=!0)}),c=!0,xo(d,S,i.state.value[t])}const p=o?function(){const{state:S}=n,R=S?S():{};this.$patch(A=>{gr(A,R)})}:u0;function x(){s.stop(),d.clear(),f.clear(),i._s.delete(t)}const M=(_,S="")=>{if(Lp in _)return _[pc]=S,_;const R=function(){Uu(i);const A=Array.from(arguments),C=new Set,H=new Set;function w(N){C.add(N)}function O(N){H.add(N)}xo(f,{args:A,name:R[pc],store:P,after:w,onError:O});let T;try{T=_.apply(this&&this.$id===t?this:P,A)}catch(N){throw xo(H,N),N}return T instanceof Promise?T.then(N=>(xo(C,N),N)).catch(N=>(xo(H,N),Promise.reject(N))):(xo(C,T),T)};return R[Lp]=!0,R[pc]=S,R},y={_p:i,$id:t,$onAction:Dp.bind(null,f),$patch:m,$reset:p,$subscribe(_,S={}){const R=Dp(d,_,S.detached,()=>A()),A=s.run(()=>ut(()=>i.state.value[t],C=>{(S.flush==="sync"?c:u)&&_({storeId:t,type:Gs.direct,events:h},C)},gr({},l,S)));return R},$dispose:x},P=Cr(y);i._s.set(t,P);const B=(i._a&&i._a.runWithContext||h1)(()=>i._e.run(()=>(s=Eu()).run(()=>e({action:M}))));for(const _ in B){const S=B[_];if(Ut(S)&&!g1(S)||Vi(S))o||(g&&m1(S)&&(Ut(S)?S.value=g[_]:wd(S,g[_])),i.state.value[t][_]=S);else if(typeof S=="function"){const R=M(S,_);B[_]=R,a.actions[_]=S}}return gr(P,B),gr(vt(P),B),Object.defineProperty(P,"$state",{get:()=>i.state.value[t],set:_=>{m(S=>{gr(S,_)})}}),i._p.forEach(_=>{gr(P,s.run(()=>_({store:P,app:i._a,pinia:i,options:a})))}),g&&o&&n.hydrate&&n.hydrate(P.$state,g),u=!0,c=!0,P}function _1(t,e,n){let i;const r=typeof e=="function";i=r?n:e;function o(s,a){const l=Fx();return s=s||(l?In(l0,null):null),s&&Uu(s),s=a0,s._s.has(t)||(r?c0(t,e,i,s):v1(t,i,s)),s._s.get(t)}return o.$id=t,o}const dh="183",y1=0,Fp=1,x1=2,El=1,b1=2,Rs=3,Ir=0,wn=1,Fi=2,$i=0,Wo=1,Up=2,Op=3,Bp=4,S1=5,Yr=100,M1=101,w1=102,E1=103,T1=104,A1=200,C1=201,R1=202,I1=203,Ed=204,Td=205,P1=206,N1=207,D1=208,L1=209,F1=210,U1=211,O1=212,B1=213,k1=214,Ad=0,Cd=1,Rd=2,ts=3,Id=4,Pd=5,Nd=6,Dd=7,d0=0,z1=1,V1=2,fi=0,f0=1,h0=2,p0=3,m0=4,g0=5,v0=6,_0=7,y0=300,uo=301,ns=302,mc=303,gc=304,Ou=306,Ld=1e3,Oi=1001,Fd=1002,tn=1003,$1=1004,Ua=1005,Ct=1006,vc=1007,Jr=1008,gn=1009,x0=1010,b0=1011,ea=1012,fh=1013,vi=1014,ui=1015,Zi=1016,hh=1017,ph=1018,ta=1020,S0=35902,M0=35899,w0=1021,E0=1022,_n=1023,ji=1026,Qr=1027,T0=1028,mh=1029,is=1030,gh=1031,vh=1033,Tl=33776,Al=33777,Cl=33778,Rl=33779,Ud=35840,Od=35841,Bd=35842,kd=35843,zd=36196,Vd=37492,$d=37496,Hd=37488,Gd=37489,Wd=37490,Xd=37491,Yd=37808,qd=37809,Kd=37810,Zd=37811,jd=37812,Jd=37813,Qd=37814,ef=37815,tf=37816,nf=37817,rf=37818,of=37819,sf=37820,af=37821,lf=36492,uf=36494,cf=36495,df=36283,ff=36284,hf=36285,pf=36286,H1=3200,G1=0,W1=1,Mr="",Fn="srgb",Pr="srgb-linear",Jl="linear",Mt="srgb",bo=7680,kp=519,X1=512,Y1=513,q1=514,_h=515,K1=516,Z1=517,yh=518,j1=519,zp=35044,Vp="300 es",ci=2e3,Ql=2001;function J1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function eu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Q1(){const t=eu("canvas");return t.style.display="block",t}const $p={};function Hp(...t){const e="THREE."+t.shift();console.log(e,...t)}function A0(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ot(...t){t=A0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function _t(...t){t=A0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function tu(...t){const e=t.join(" ");e in $p||($p[e]=!0,ot(...t))}function eS(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const tS={[Ad]:Cd,[Rd]:Nd,[Id]:Dd,[ts]:Pd,[Cd]:Ad,[Nd]:Rd,[Dd]:Id,[Pd]:ts};class ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=Math.PI/180,mf=180/Math.PI;function ba(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[t&255]+sn[t>>8&255]+sn[t>>16&255]+sn[t>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[n&63|128]+sn[n>>8&255]+"-"+sn[n>>16&255]+sn[n>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function pt(t,e,n){return Math.max(e,Math.min(n,t))}function nS(t,e){return(t%e+e)%e}function yc(t,e,n){return(1-n)*t+n*e}function vs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function yn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Et{constructor(e=0,n=0){Et.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=o[s+0],h=o[s+1],g=o[s+2],v=o[s+3];if(d!==v||l!==f||u!==h||c!==g){let m=l*f+u*h+c*g+d*v;m<0&&(f=-f,h=-h,g=-g,v=-v,m=-m);let p=1-a;if(m<.9995){const x=Math.acos(m),M=Math.sin(x);p=Math.sin(p*x)/M,a=Math.sin(a*x)/M,l=l*p+f*a,u=u*p+h*a,c=c*p+g*a,d=d*p+v*a}else{l=l*p+f*a,u=u*p+h*a,c=c*p+g*a,d=d*p+v*a;const x=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=x,u*=x,c*=x,d*=x}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=o[s],f=o[s+1],h=o[s+2],g=o[s+3];return e[n]=a*g+c*d+l*h-u*f,e[n+1]=l*g+c*f+u*d-a*h,e[n+2]=u*g+c*h+a*f-l*d,e[n+3]=c*g-a*d-l*f-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(o/2),f=l(i/2),h=l(r/2),g=l(o/2);switch(s){case"XYZ":this._x=f*c*d+u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d-f*h*g;break;case"YXZ":this._x=f*c*d+u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d+f*h*g;break;case"ZXY":this._x=f*c*d-u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d-f*h*g;break;case"ZYX":this._x=f*c*d-u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d+f*h*g;break;case"YZX":this._x=f*c*d+u*h*g,this._y=u*h*d+f*c*g,this._z=u*c*g-f*h*d,this._w=u*c*d-f*h*g;break;case"XZY":this._x=f*c*d-u*h*g,this._y=u*h*d-f*c*g,this._z=u*c*g+f*h*d,this._w=u*c*d+f*h*g;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(c-l)*h,this._y=(o-u)*h,this._z=(s-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(c-l)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(o+u)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(o-u)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(s-r)/h,this._x=(o+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+s*a+r*u-o*l,this._y=r*c+s*l+o*a-i*u,this._z=o*c+s*u+i*l-r*a,this._w=s*c-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,o=e._z,s=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,o=-o,s=-s,a=-a);let l=1-n;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+o*n,this._w=this._w*l+s*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+o*n,this._w=this._w*l+s*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class _e{constructor(e=0,n=0,i=0){_e.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Gp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Gp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),c=2*(a*n-o*r),d=2*(o*i-s*n);return this.x=n+l*u+s*d-a*c,this.y=i+l*c+a*u-o*d,this.z=r+l*d+o*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return xc.copy(this).projectOnVector(e),this.sub(xc)}reflect(e){return this.sub(xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xc=new _e,Gp=new fs;class lt{constructor(e,n,i,r,o,s,a,l,u){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],h=i[5],g=i[8],v=r[0],m=r[3],p=r[6],x=r[1],M=r[4],y=r[7],P=r[2],L=r[5],B=r[8];return o[0]=s*v+a*x+l*P,o[3]=s*m+a*M+l*L,o[6]=s*p+a*y+l*B,o[1]=u*v+c*x+d*P,o[4]=u*m+c*M+d*L,o[7]=u*p+c*y+d*B,o[2]=f*v+h*x+g*P,o[5]=f*m+h*M+g*L,o[8]=f*p+h*y+g*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*s*c-n*a*u-i*o*c+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*s-a*u,f=a*l-c*o,h=u*o-s*l,g=n*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*u-c*i)*v,e[2]=(a*i-r*s)*v,e[3]=f*v,e[4]=(c*n-r*l)*v,e[5]=(r*o-a*n)*v,e[6]=h*v,e[7]=(i*l-u*n)*v,e[8]=(s*n-i*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(bc.makeScale(e,n)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new lt,Wp=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xp=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iS(){const t={enabled:!0,workingColorSpace:Pr,spaces:{},convert:function(r,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Mt&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[o].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Mt&&(r.r=Xo(r.r),r.g=Xo(r.g),r.b=Xo(r.b))),r},workingToColorSpace:function(r,o){return this.convert(r,this.workingColorSpace,o)},colorSpaceToWorking:function(r,o){return this.convert(r,o,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mr?Jl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,o=this.workingColorSpace){return r.fromArray(this.spaces[o].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,o,s){return r.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,o){return tu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,o)},toWorkingColorSpace:function(r,o){return tu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,o)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Pr]:{primaries:e,whitePoint:i,transfer:Jl,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Fn},outputColorSpaceConfig:{drawingBufferColorSpace:Fn}},[Fn]:{primaries:e,whitePoint:i,transfer:Mt,toXYZ:Wp,fromXYZ:Xp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Fn}}}),t}const mt=iS();function Hi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let So;class rS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{So===void 0&&(So=eu("canvas")),So.width=e.width,So.height=e.height;const r=So.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=So}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=eu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=Hi(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hi(n[i]/255)*255):n[i]=Hi(n[i]);return{data:n,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oS=0;class xh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=ba(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(Sc(r[s].image)):o.push(Sc(r[s]))}else o=Sc(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function Sc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?rS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let sS=0;const Mc=new _e;class nn extends ds{constructor(e=nn.DEFAULT_IMAGE,n=nn.DEFAULT_MAPPING,i=Oi,r=Oi,o=Ct,s=Jr,a=_n,l=gn,u=nn.DEFAULT_ANISOTROPY,c=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sS++}),this.uuid=ba(),this.name="",this.source=new xh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Mc).x}get height(){return this.source.getSize(Mc).y}get depth(){return this.source.getSize(Mc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ot(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ot(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ld:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ld:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=y0;nn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(u+1)/2,y=(h+1)/2,P=(p+1)/2,L=(c+f)/4,B=(d+v)/4,_=(g+m)/4;return M>y&&M>P?M<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(M),r=L/i,o=B/i):y>P?y<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(y),i=L/r,o=_/r):P<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(P),i=B/o,r=_/o),this.set(i,r,o,n),this}let x=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-c)*(f-c));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(d-v)/x,this.z=(f-c)/x,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=pt(this.x,e.x,n.x),this.y=pt(this.y,e.y,n.y),this.z=pt(this.z,e.z,n.z),this.w=pt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=pt(this.x,e,n),this.y=pt(this.y,e,n),this.z=pt(this.z,e,n),this.w=pt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(pt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aS extends ds{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},o=new nn(r),s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new xh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bn extends aS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class C0 extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lS extends nn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wt{constructor(e,n,i,r,o,s,a,l,u,c,d,f,h,g,v,m){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,c,d,f,h,g,v,m)}set(e,n,i,r,o,s,a,l,u,c,d,f,h,g,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=o,p[5]=s,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Mo.setFromMatrixColumn(e,0).length(),o=1/Mo.setFromMatrixColumn(e,1).length(),s=1/Mo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const f=s*c,h=s*d,g=a*c,v=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=h+g*u,n[5]=f-v*u,n[9]=-a*l,n[2]=v-f*u,n[6]=g+h*u,n[10]=s*l}else if(e.order==="YXZ"){const f=l*c,h=l*d,g=u*c,v=u*d;n[0]=f+v*a,n[4]=g*a-h,n[8]=s*u,n[1]=s*d,n[5]=s*c,n[9]=-a,n[2]=h*a-g,n[6]=v+f*a,n[10]=s*l}else if(e.order==="ZXY"){const f=l*c,h=l*d,g=u*c,v=u*d;n[0]=f-v*a,n[4]=-s*d,n[8]=g+h*a,n[1]=h+g*a,n[5]=s*c,n[9]=v-f*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const f=s*c,h=s*d,g=a*c,v=a*d;n[0]=l*c,n[4]=g*u-h,n[8]=f*u+v,n[1]=l*d,n[5]=v*u+f,n[9]=h*u-g,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const f=s*l,h=s*u,g=a*l,v=a*u;n[0]=l*c,n[4]=v-f*d,n[8]=g*d+h,n[1]=d,n[5]=s*c,n[9]=-a*c,n[2]=-u*c,n[6]=h*d+g,n[10]=f-v*d}else if(e.order==="XZY"){const f=s*l,h=s*u,g=a*l,v=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+v,n[5]=s*c,n[9]=h*d-g,n[2]=g*d-h,n[6]=a*c,n[10]=v*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uS,e,cS)}lookAt(e,n,i){const r=this.elements;return An.subVectors(e,n),An.lengthSq()===0&&(An.z=1),An.normalize(),lr.crossVectors(i,An),lr.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),lr.crossVectors(i,An)),lr.normalize(),Oa.crossVectors(An,lr),r[0]=lr.x,r[4]=Oa.x,r[8]=An.x,r[1]=lr.y,r[5]=Oa.y,r[9]=An.y,r[2]=lr.z,r[6]=Oa.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],x=i[3],M=i[7],y=i[11],P=i[15],L=r[0],B=r[4],_=r[8],S=r[12],R=r[1],A=r[5],C=r[9],H=r[13],w=r[2],O=r[6],T=r[10],N=r[14],z=r[3],X=r[7],Z=r[11],ne=r[15];return o[0]=s*L+a*R+l*w+u*z,o[4]=s*B+a*A+l*O+u*X,o[8]=s*_+a*C+l*T+u*Z,o[12]=s*S+a*H+l*N+u*ne,o[1]=c*L+d*R+f*w+h*z,o[5]=c*B+d*A+f*O+h*X,o[9]=c*_+d*C+f*T+h*Z,o[13]=c*S+d*H+f*N+h*ne,o[2]=g*L+v*R+m*w+p*z,o[6]=g*B+v*A+m*O+p*X,o[10]=g*_+v*C+m*T+p*Z,o[14]=g*S+v*H+m*N+p*ne,o[3]=x*L+M*R+y*w+P*z,o[7]=x*B+M*A+y*O+P*X,o[11]=x*_+M*C+y*T+P*Z,o[15]=x*S+M*H+y*N+P*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15],x=l*h-u*f,M=a*h-u*d,y=a*f-l*d,P=s*h-u*c,L=s*f-l*c,B=s*d-a*c;return n*(v*x-m*M+p*y)-i*(g*x-m*P+p*L)+r*(g*M-v*P+p*B)-o*(g*y-v*L+m*B)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],x=n*a-i*s,M=n*l-r*s,y=n*u-o*s,P=i*l-r*a,L=i*u-o*a,B=r*u-o*l,_=c*v-d*g,S=c*m-f*g,R=c*p-h*g,A=d*m-f*v,C=d*p-h*v,H=f*p-h*m,w=x*H-M*C+y*A+P*R-L*S+B*_;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/w;return e[0]=(a*H-l*C+u*A)*O,e[1]=(r*C-i*H-o*A)*O,e[2]=(v*B-m*L+p*P)*O,e[3]=(f*L-d*B-h*P)*O,e[4]=(l*R-s*H-u*S)*O,e[5]=(n*H-r*R+o*S)*O,e[6]=(m*y-g*B-p*M)*O,e[7]=(c*B-f*y+h*M)*O,e[8]=(s*C-a*R+u*_)*O,e[9]=(i*R-n*C-o*_)*O,e[10]=(g*L-v*y+p*x)*O,e[11]=(d*y-c*L-h*x)*O,e[12]=(a*S-s*A-l*_)*O,e[13]=(n*A-i*S+r*_)*O,e[14]=(v*M-g*P-m*x)*O,e[15]=(c*P-d*M+f*x)*O,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,c=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*s,0,u*l-r*a,c*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,c=s+s,d=a+a,f=o*u,h=o*c,g=o*d,v=s*c,m=s*d,p=a*d,x=l*u,M=l*c,y=l*d,P=i.x,L=i.y,B=i.z;return r[0]=(1-(v+p))*P,r[1]=(h+y)*P,r[2]=(g-M)*P,r[3]=0,r[4]=(h-y)*L,r[5]=(1-(f+p))*L,r[6]=(m+x)*L,r[7]=0,r[8]=(g+M)*B,r[9]=(m-x)*B,r[10]=(1-(f+v))*B,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const o=this.determinant();if(o===0)return i.set(1,1,1),n.identity(),this;let s=Mo.set(r[0],r[1],r[2]).length();const a=Mo.set(r[4],r[5],r[6]).length(),l=Mo.set(r[8],r[9],r[10]).length();o<0&&(s=-s),kn.copy(this);const u=1/s,c=1/a,d=1/l;return kn.elements[0]*=u,kn.elements[1]*=u,kn.elements[2]*=u,kn.elements[4]*=c,kn.elements[5]*=c,kn.elements[6]*=c,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,n.setFromRotationMatrix(kn),i.x=s,i.y=a,i.z=l,this}makePerspective(e,n,i,r,o,s,a=ci,l=!1){const u=this.elements,c=2*o/(n-e),d=2*o/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,v;if(l)g=o/(s-o),v=s*o/(s-o);else if(a===ci)g=-(s+o)/(s-o),v=-2*s*o/(s-o);else if(a===Ql)g=-s/(s-o),v=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=ci,l=!1){const u=this.elements,c=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),h=-(i+r)/(i-r);let g,v;if(l)g=1/(s-o),v=s/(s-o);else if(a===ci)g=-2/(s-o),v=-(s+o)/(s-o);else if(a===Ql)g=-1/(s-o),v=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=g,u[14]=v,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Mo=new _e,kn=new Wt,uS=new _e(0,0,0),cS=new _e(1,1,1),lr=new _e,Oa=new _e,An=new _e,Yp=new Wt,qp=new fs;class Ji{constructor(e=0,n=0,i=0,r=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-pt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-c,h),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qp.setFromEuler(this),this.setFromQuaternion(qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class R0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dS=0;const Kp=new _e,wo=new fs,wi=new Wt,Ba=new _e,_s=new _e,fS=new _e,hS=new fs,Zp=new _e(1,0,0),jp=new _e(0,1,0),Jp=new _e(0,0,1),Qp={type:"added"},pS={type:"removed"},Eo={type:"childadded",child:null},wc={type:"childremoved",child:null};class Pn extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=ba(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new _e,n=new Ji,i=new fs,r=new _e(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Wt},normalMatrix:{value:new lt}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return wo.setFromAxisAngle(e,n),this.quaternion.multiply(wo),this}rotateOnWorldAxis(e,n){return wo.setFromAxisAngle(e,n),this.quaternion.premultiply(wo),this}rotateX(e){return this.rotateOnAxis(Zp,e)}rotateY(e){return this.rotateOnAxis(jp,e)}rotateZ(e){return this.rotateOnAxis(Jp,e)}translateOnAxis(e,n){return Kp.copy(e).applyQuaternion(this.quaternion),this.position.add(Kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zp,e)}translateY(e){return this.translateOnAxis(jp,e)}translateZ(e){return this.translateOnAxis(Jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ba.copy(e):Ba.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(_s,Ba,this.up):wi.lookAt(Ba,_s,this.up),this.quaternion.setFromRotationMatrix(wi),r&&(wi.extractRotation(r.matrixWorld),wo.setFromRotationMatrix(wi),this.quaternion.premultiply(wo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qp),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(pS),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qp),Eo.child=e,this.dispatchEvent(Eo),Eo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,fS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,hS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,o=this.matrix.elements;o[12]+=n-o[0]*n-o[4]*i-o[8]*r,o[13]+=i-o[1]*n-o[5]*i-o[9]*r,o[14]+=r-o[2]*n-o[6]*i-o[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),d=s(e.shapes),f=s(e.skeletons),h=s(e.animations),g=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pn.DEFAULT_UP=new _e(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ka extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mS={type:"move"};class Ec{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new _e,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new _e),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new _e,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new _e),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(u,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),h=.02,g=.005;u.inputState.pinching&&f>h+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=h-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ka;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const I0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},za={h:0,s:0,l:0};function Tc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}let wt=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Fn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=mt.workingColorSpace){return this.r=e,this.g=n,this.b=i,mt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=mt.workingColorSpace){if(e=nS(e,1),n=pt(n,0,1),i=pt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=Tc(s,o,e+1/3),this.g=Tc(s,o,e),this.b=Tc(s,o,e-1/3)}return mt.colorSpaceToWorking(this,r),this}setStyle(e,n=Fn){function i(o){o!==void 0&&parseFloat(o)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:ot("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Fn){const i=I0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=Xo(e.r),this.g=Xo(e.g),this.b=Xo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fn){return mt.workingToColorSpace(an.copy(this),e),Math.round(pt(an.r*255,0,255))*65536+Math.round(pt(an.g*255,0,255))*256+Math.round(pt(an.b*255,0,255))}getHexString(e=Fn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=mt.workingColorSpace){mt.workingToColorSpace(an.copy(this),n);const i=an.r,r=an.g,o=an.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const c=(a+s)/2;if(a===s)l=0,u=0;else{const d=s-a;switch(u=c<=.5?d/(s+a):d/(2-s-a),s){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=mt.workingColorSpace){return mt.workingToColorSpace(an.copy(this),n),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Fn){mt.workingToColorSpace(an.copy(this),e);const n=an.r,i=an.g,r=an.b;return e!==Fn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+n,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ur),e.getHSL(za);const i=yc(ur.h,za.h,n),r=yc(ur.s,za.s,n),o=yc(ur.l,za.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const an=new wt;wt.NAMES=I0;class gS extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const zn=new _e,Ei=new _e,Ac=new _e,Ti=new _e,To=new _e,Ao=new _e,em=new _e,Cc=new _e,Rc=new _e,Ic=new _e,Pc=new zt,Nc=new zt,Dc=new zt;class Hn{constructor(e=new _e,n=new _e,i=new _e){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),zn.subVectors(e,n),r.cross(zn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){zn.subVectors(r,n),Ei.subVectors(i,n),Ac.subVectors(e,n);const s=zn.dot(zn),a=zn.dot(Ei),l=zn.dot(Ac),u=Ei.dot(Ei),c=Ei.dot(Ac),d=s*u-a*a;if(d===0)return o.set(0,0,0),null;const f=1/d,h=(u*l-a*c)*f,g=(s*c-a*l)*f;return o.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ti.x),l.addScaledVector(s,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,n,i,r,o,s){return Pc.setScalar(0),Nc.setScalar(0),Dc.setScalar(0),Pc.fromBufferAttribute(e,n),Nc.fromBufferAttribute(e,i),Dc.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Pc,o.x),s.addScaledVector(Nc,o.y),s.addScaledVector(Dc,o.z),s}static isFrontFacing(e,n,i,r){return zn.subVectors(i,n),Ei.subVectors(e,n),zn.cross(Ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),zn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;To.subVectors(r,i),Ao.subVectors(o,i),Cc.subVectors(e,i);const l=To.dot(Cc),u=Ao.dot(Cc);if(l<=0&&u<=0)return n.copy(i);Rc.subVectors(e,r);const c=To.dot(Rc),d=Ao.dot(Rc);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return s=l/(l-c),n.copy(i).addScaledVector(To,s);Ic.subVectors(e,o);const h=To.dot(Ic),g=Ao.dot(Ic);if(g>=0&&h<=g)return n.copy(o);const v=h*u-l*g;if(v<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(Ao,a);const m=c*g-h*d;if(m<=0&&d-c>=0&&h-g>=0)return em.subVectors(o,r),a=(d-c)/(d-c+(h-g)),n.copy(r).addScaledVector(em,a);const p=1/(m+v+f);return s=v*p,a=f*p,n.copy(i).addScaledVector(To,s).addScaledVector(Ao,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Sa{constructor(e=new _e(1/0,1/0,1/0),n=new _e(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,Vn):Vn.fromBufferAttribute(o,s),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Va.copy(i.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),$a.subVectors(this.max,ys),Co.subVectors(e.a,ys),Ro.subVectors(e.b,ys),Io.subVectors(e.c,ys),cr.subVectors(Ro,Co),dr.subVectors(Io,Ro),kr.subVectors(Co,Io);let n=[0,-cr.z,cr.y,0,-dr.z,dr.y,0,-kr.z,kr.y,cr.z,0,-cr.x,dr.z,0,-dr.x,kr.z,0,-kr.x,-cr.y,cr.x,0,-dr.y,dr.x,0,-kr.y,kr.x,0];return!Lc(n,Co,Ro,Io,$a)||(n=[1,0,0,0,1,0,0,0,1],!Lc(n,Co,Ro,Io,$a))?!1:(Ha.crossVectors(cr,dr),n=[Ha.x,Ha.y,Ha.z],Lc(n,Co,Ro,Io,$a))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ai=[new _e,new _e,new _e,new _e,new _e,new _e,new _e,new _e],Vn=new _e,Va=new Sa,Co=new _e,Ro=new _e,Io=new _e,cr=new _e,dr=new _e,kr=new _e,ys=new _e,$a=new _e,Ha=new _e,zr=new _e;function Lc(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){zr.fromArray(t,o);const a=r.x*Math.abs(zr.x)+r.y*Math.abs(zr.y)+r.z*Math.abs(zr.z),l=e.dot(zr),u=n.dot(zr),c=i.dot(zr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Vt=new _e,Ga=new Et;let vS=0;class hi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=zp,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ga.fromBufferAttribute(this,n),Ga.applyMatrix3(e),this.setXY(n,Ga.x,Ga.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=vs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=yn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=vs(n,this.array)),n}setX(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=vs(n,this.array)),n}setY(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=vs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=vs(n,this.array)),n}setW(e,n){return this.normalized&&(n=yn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=yn(n,this.array),i=yn(i,this.array),r=yn(r,this.array),o=yn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zp&&(e.usage=this.usage),e}}class P0 extends hi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class N0 extends hi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Gi extends hi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const _S=new Sa,xs=new _e,Fc=new _e;class bh{constructor(e=new _e,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):_S.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xs.subVectors(e,this.center);const n=xs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(xs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xs.copy(e.center).add(Fc)),this.expandByPoint(xs.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yS=0;const Ln=new Wt,Uc=new Pn,Po=new _e,Cn=new Sa,bs=new Sa,Zt=new _e;class rr extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=ba(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(J1(e)?N0:P0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new lt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return Uc.lookAt(e),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Po).negate(),this.translate(Po.x,Po.y,Po.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,o=e.length;r<o;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Gi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const o=e[r];n.setXYZ(r,o.x,o.y,o.z||0)}e.length>n.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new _e(-1/0,-1/0,-1/0),new _e(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];Cn.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new _e,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(Zt.addVectors(Cn.min,bs.min),Cn.expandByPoint(Zt),Zt.addVectors(Cn.max,bs.max),Cn.expandByPoint(Zt)):(Cn.expandByPoint(bs.min),Cn.expandByPoint(bs.max))}Cn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Zt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Zt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Zt.fromBufferAttribute(a,u),l&&(Po.fromBufferAttribute(e,u),Zt.add(Po)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new _e,l[_]=new _e;const u=new _e,c=new _e,d=new _e,f=new Et,h=new Et,g=new Et,v=new _e,m=new _e;function p(_,S,R){u.fromBufferAttribute(i,_),c.fromBufferAttribute(i,S),d.fromBufferAttribute(i,R),f.fromBufferAttribute(o,_),h.fromBufferAttribute(o,S),g.fromBufferAttribute(o,R),c.sub(u),d.sub(u),h.sub(f),g.sub(f);const A=1/(h.x*g.y-g.x*h.y);isFinite(A)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(A),m.copy(d).multiplyScalar(h.x).addScaledVector(c,-g.x).multiplyScalar(A),a[_].add(v),a[S].add(v),a[R].add(v),l[_].add(m),l[S].add(m),l[R].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let _=0,S=x.length;_<S;++_){const R=x[_],A=R.start,C=R.count;for(let H=A,w=A+C;H<w;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const M=new _e,y=new _e,P=new _e,L=new _e;function B(_){P.fromBufferAttribute(r,_),L.copy(P);const S=a[_];M.copy(S),M.sub(P.multiplyScalar(P.dot(S))).normalize(),y.crossVectors(L,S);const A=y.dot(l[_])<0?-1:1;s.setXYZW(_,M.x,M.y,M.z,A)}for(let _=0,S=x.length;_<S;++_){const R=x[_],A=R.start,C=R.count;for(let H=A,w=A+C;H<w;H+=3)B(e.getX(H+0)),B(e.getX(H+1)),B(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new _e,o=new _e,s=new _e,a=new _e,l=new _e,u=new _e,c=new _e,d=new _e;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,v),s.fromBufferAttribute(n,m),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,h=n.count;f<h;f+=3)r.fromBufferAttribute(n,f+0),o.fromBufferAttribute(n,f+1),s.fromBufferAttribute(n,f+2),c.subVectors(s,o),d.subVectors(r,o),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Zt.fromBufferAttribute(e,n),Zt.normalize(),e.setXYZ(n,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*c;for(let p=0;p<c;p++)f[g++]=u[h++]}return new hi(f,c,d)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const h=u[d];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],d=o[u];for(let f=0,h=d.length;f<h;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const d=s[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let xS=0;class Bu extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=ba(),this.name="",this.type="Material",this.blending=Wo,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ed,this.blendDst=Td,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bo,this.stencilZFail=bo,this.stencilZPass=bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ot(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ot(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wo&&(i.blending=this.blending),this.side!==Ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ed&&(i.blendSrc=this.blendSrc),this.blendDst!==Td&&(i.blendDst=this.blendDst),this.blendEquation!==Yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ci=new _e,Oc=new _e,Wa=new _e,fr=new _e,Bc=new _e,Xa=new _e,kc=new _e;class bS{constructor(e=new _e,n=new _e(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,n),Ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Oc.copy(e).add(n).multiplyScalar(.5),Wa.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(Oc);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Wa),a=fr.dot(this.direction),l=-fr.dot(Wa),u=fr.lengthSq(),c=Math.abs(1-s*s);let d,f,h,g;if(c>0)if(d=s*l-a,f=s*a-l,g=o*c,d>=0)if(f>=-g)if(f<=g){const v=1/c;d*=v,f*=v,h=d*(d+s*f+2*a)+f*(s*d+f+2*l)+u}else f=o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+u;else f=-o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+u;else f<=-g?(d=Math.max(0,-(-s*o+a)),f=d>0?-o:Math.min(Math.max(-o,-l),o),h=-d*d+f*(f+2*l)+u):f<=g?(d=0,f=Math.min(Math.max(-o,-l),o),h=f*(f+2*l)+u):(d=Math.max(0,-(s*o+a)),f=d>0?o:Math.min(Math.max(-o,-l),o),h=-d*d+f*(f+2*l)+u);else f=s>0?-o:o,d=Math.max(0,-(s*f+a)),h=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Oc).addScaledVector(Wa,f),h}intersectSphere(e,n){Ci.subVectors(e.center,this.origin);const i=Ci.dot(this.direction),r=Ci.dot(Ci)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(o=(e.min.y-f.y)*c,s=(e.max.y-f.y)*c):(o=(e.max.y-f.y)*c,s=(e.min.y-f.y)*c),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,n,i,r,o){Bc.subVectors(n,e),Xa.subVectors(i,e),kc.crossVectors(Bc,Xa);let s=this.direction.dot(kc),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;fr.subVectors(this.origin,e);const l=a*this.direction.dot(Xa.crossVectors(fr,Xa));if(l<0)return null;const u=a*this.direction.dot(Bc.cross(fr));if(u<0||l+u>s)return null;const c=-a*fr.dot(kc);return c<0?null:this.at(c/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class D0 extends Bu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=d0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tm=new Wt,Vr=new bS,Ya=new bh,nm=new _e,qa=new _e,Ka=new _e,Za=new _e,zc=new _e,ja=new _e,im=new _e,Ja=new _e;class _i extends Pn{constructor(e=new rr,n=new D0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){ja.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=a[l],d=o[l];c!==0&&(zc.fromBufferAttribute(d,e),s?ja.addScaledVector(zc,c):ja.addScaledVector(zc.sub(n),c))}n.add(ja)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(o),Vr.copy(e.ray).recast(e.near),!(Ya.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Ya,nm)===null||Vr.origin.distanceToSquared(nm)>(e.far-e.near)**2))&&(tm.copy(o).invert(),Vr.copy(e.ray).applyMatrix4(tm),!(i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Vr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,d=o.attributes.normal,f=o.groups,h=o.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=s[m.materialIndex],x=Math.max(m.start,h.start),M=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=x,P=M;y<P;y+=3){const L=a.getX(y),B=a.getX(y+1),_=a.getX(y+2);r=Qa(this,p,e,i,u,c,d,L,B,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const x=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);r=Qa(this,s,e,i,u,c,d,x,M,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,v=f.length;g<v;g++){const m=f[g],p=s[m.materialIndex],x=Math.max(m.start,h.start),M=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=x,P=M;y<P;y+=3){const L=y,B=y+1,_=y+2;r=Qa(this,p,e,i,u,c,d,L,B,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const x=m,M=m+1,y=m+2;r=Qa(this,s,e,i,u,c,d,x,M,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function SS(t,e,n,i,r,o,s,a){let l;if(e.side===wn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===Ir,a),l===null)return null;Ja.copy(a),Ja.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ja);return u<n.near||u>n.far?null:{distance:u,point:Ja.clone(),object:t}}function Qa(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,qa),t.getVertexPosition(l,Ka),t.getVertexPosition(u,Za);const c=SS(t,e,n,i,qa,Ka,Za,im);if(c){const d=new _e;Hn.getBarycoord(im,qa,Ka,Za,d),r&&(c.uv=Hn.getInterpolatedAttribute(r,a,l,u,d,new Et)),o&&(c.uv1=Hn.getInterpolatedAttribute(o,a,l,u,d,new Et)),s&&(c.normal=Hn.getInterpolatedAttribute(s,a,l,u,d,new _e),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new _e,materialIndex:0};Hn.getNormal(qa,Ka,Za,f.normal),c.face=f,c.barycoord=d}return c}class MS extends nn{constructor(e=null,n=1,i=1,r,o,s,a,l,u=tn,c=tn,d,f){super(null,s,a,l,u,c,r,o,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vc=new _e,wS=new _e,ES=new lt;class Xr{constructor(e=new _e(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Vc.subVectors(i,n).cross(wS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Vc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||ES.getNormalMatrix(e),r=this.coplanarPoint(Vc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new bh,TS=new Et(.5,.5),el=new _e;class L0{constructor(e=new Xr,n=new Xr,i=new Xr,r=new Xr,o=new Xr,s=new Xr){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ci,i=!1){const r=this.planes,o=e.elements,s=o[0],a=o[1],l=o[2],u=o[3],c=o[4],d=o[5],f=o[6],h=o[7],g=o[8],v=o[9],m=o[10],p=o[11],x=o[12],M=o[13],y=o[14],P=o[15];if(r[0].setComponents(u-s,h-c,p-g,P-x).normalize(),r[1].setComponents(u+s,h+c,p+g,P+x).normalize(),r[2].setComponents(u+a,h+d,p+v,P+M).normalize(),r[3].setComponents(u-a,h-d,p-v,P-M).normalize(),i)r[4].setComponents(l,f,m,y).normalize(),r[5].setComponents(u-l,h-f,p-m,P-y).normalize();else if(r[4].setComponents(u-l,h-f,p-m,P-y).normalize(),n===ci)r[5].setComponents(u+l,h+f,p+m,P+y).normalize();else if(n===Ql)r[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){$r.center.set(0,0,0);const n=TS.distanceTo(e.center);return $r.radius=.7071067811865476+n,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(el.x=r.normal.x>0?e.max.x:e.min.x,el.y=r.normal.y>0?e.max.y:e.min.y,el.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(el)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class AS extends nn{constructor(e,n,i,r,o=Ct,s=Ct,a,l,u){super(e,n,i,r,o,s,a,l,u),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const c=this;function d(){c.needsUpdate=!0,c._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(d))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class F0 extends nn{constructor(e=[],n=uo,i,r,o,s,a,l,u,c){super(e,n,i,r,o,s,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class na extends nn{constructor(e,n,i=vi,r,o,s,a=tn,l=tn,u,c=ji,d=1){if(c!==ji&&c!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,o,s,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new xh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class CS extends na{constructor(e,n=vi,i=uo,r,o,s=tn,a=tn,l,u=ji){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,n,i,r,o,s,a,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class U0 extends nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ma extends rr{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],c=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,n,e,s,o,0),g("z","y","x",1,-1,i,n,-e,s,o,1),g("x","z","y",1,1,e,i,n,r,s,2),g("x","z","y",1,-1,e,i,-n,r,s,3),g("x","y","z",1,-1,e,n,i,r,o,4),g("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Gi(u,3)),this.setAttribute("normal",new Gi(c,3)),this.setAttribute("uv",new Gi(d,2));function g(v,m,p,x,M,y,P,L,B,_,S){const R=y/B,A=P/_,C=y/2,H=P/2,w=L/2,O=B+1,T=_+1;let N=0,z=0;const X=new _e;for(let Z=0;Z<T;Z++){const ne=Z*A-H;for(let Q=0;Q<O;Q++){const de=Q*R-C;X[v]=de*x,X[m]=ne*M,X[p]=w,u.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=L>0?1:-1,c.push(X.x,X.y,X.z),d.push(Q/B),d.push(1-Z/_),N+=1}}for(let Z=0;Z<_;Z++)for(let ne=0;ne<B;ne++){const Q=f+ne+O*Z,de=f+ne+O*(Z+1),we=f+(ne+1)+O*(Z+1),te=f+(ne+1)+O*Z;l.push(Q,de,te),l.push(de,we,te),z+=6}a.addGroup(h,z,S),h+=z,f+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wa extends rr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,h=[],g=[],v=[],m=[];for(let p=0;p<c;p++){const x=p*f-s;for(let M=0;M<u;M++){const y=M*d-o;g.push(y,-x,0),v.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const M=x+u*p,y=x+u*(p+1),P=x+1+u*(p+1),L=x+1+u*p;h.push(M,y,L),h.push(y,P,L)}this.setIndex(h),this.setAttribute("position",new Gi(g,3)),this.setAttribute("normal",new Gi(v,3)),this.setAttribute("uv",new Gi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.width,e.height,e.widthSegments,e.heightSegments)}}function rs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function pn(t){const e={};for(let n=0;n<t.length;n++){const i=rs(t[n]);for(const r in i)e[r]=i[r]}return e}function RS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function O0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const IS={clone:rs,merge:pn};var PS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zn extends Bu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PS,this.fragmentShader=NS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=rs(e.uniforms),this.uniformsGroups=RS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class DS extends Zn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class LS extends Bu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class FS extends Bu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tl=new _e,nl=new fs,ti=new _e;class B0 extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt,this.coordinateSystem=ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(tl,nl,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,ti.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(tl,nl,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tl,nl,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const hr=new _e,rm=new Et,om=new Et;class $n extends B0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=mf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mf*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,rm,om),n.subVectors(om,rm)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_c*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Sh extends B0{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const No=-90,Do=1;class US extends Pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new $n(No,Do,e,n);r.layers=this.layers,this.add(r);const o=new $n(No,Do,e,n);o.layers=this.layers,this.add(o);const s=new $n(No,Do,e,n);s.layers=this.layers,this.add(s);const a=new $n(No,Do,e,n);a.layers=this.layers,this.add(a);const l=new $n(No,Do,e,n);l.layers=this.layers,this.add(l);const u=new $n(No,Do,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ql)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class OS extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function sm(t,e,n,i){const r=BS(i);switch(n){case w0:return t*e;case T0:return t*e/r.components*r.byteLength;case mh:return t*e/r.components*r.byteLength;case is:return t*e*2/r.components*r.byteLength;case gh:return t*e*2/r.components*r.byteLength;case E0:return t*e*3/r.components*r.byteLength;case _n:return t*e*4/r.components*r.byteLength;case vh:return t*e*4/r.components*r.byteLength;case Tl:case Al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Cl:case Rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Od:case kd:return Math.max(t,16)*Math.max(e,8)/4;case Ud:case Bd:return Math.max(t,8)*Math.max(e,8)/2;case zd:case Vd:case Hd:case Gd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $d:case Wd:case Xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case jd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ef:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case tf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case nf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case rf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case of:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case sf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case af:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case lf:case uf:case cf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case df:case ff:return Math.ceil(t/4)*Math.ceil(e/4)*8;case hf:case pf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function BS(t){switch(t){case gn:case x0:return{byteLength:1,components:1};case ea:case b0:case Zi:return{byteLength:2,components:1};case hh:case ph:return{byteLength:2,components:4};case vi:case fh:case ui:return{byteLength:4,components:1};case S0:case M0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dh}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dh);function k0(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function kS(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(t.bindBuffer(u,a),d.length===0)t.bufferSubData(u,0,c);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const v=d[h];t.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}var zS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VS=`#ifdef USE_ALPHAHASH
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
#endif`,$S=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XS=`#ifdef USE_AOMAP
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
#endif`,YS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qS=`#ifdef USE_BATCHING
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
#endif`,KS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,QS=`#ifdef USE_IRIDESCENCE
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
#endif`,eM=`#ifdef USE_BUMPMAP
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,aM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,uM=`#define PI 3.141592653589793
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
} // validated`,cM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dM=`vec3 transformedNormal = objectNormal;
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
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gM="gl_FragColor = linearToOutputTexel( gl_FragColor );",vM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_M=`#ifdef USE_ENVMAP
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
#endif`,yM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AM=`#ifdef USE_GRADIENTMAP
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
}`,CM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PM=`uniform bool receiveShadow;
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
#endif`,NM=`#ifdef USE_ENVMAP
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
#endif`,DM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OM=`PhysicalMaterial material;
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
#endif`,BM=`uniform sampler2D dfgLUT;
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
}`,kM=`
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
#endif`,zM=`#if defined( RE_IndirectDiffuse )
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
#endif`,VM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KM=`#if defined( USE_POINTS_UV )
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
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ew=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tw=`#ifdef USE_MORPHTARGETS
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
#endif`,nw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lw=`#ifdef USE_NORMALMAP
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
#endif`,uw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_w=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ww=`float getShadowMask() {
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
}`,Ew=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tw=`#ifdef USE_SKINNING
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
#endif`,Aw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cw=`#ifdef USE_SKINNING
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
#endif`,Rw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Iw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Dw=`#ifdef USE_TRANSMISSION
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
#endif`,Lw=`#ifdef USE_TRANSMISSION
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
#endif`,Fw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zw=`uniform sampler2D t2D;
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
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$w=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ww=`#include <common>
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
}`,Xw=`#if DEPTH_PACKING == 3200
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
}`,Yw=`#define DISTANCE
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
}`,qw=`#define DISTANCE
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
}`,Kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jw=`uniform float scale;
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
}`,Jw=`uniform vec3 diffuse;
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
}`,Qw=`#include <common>
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
}`,eE=`uniform vec3 diffuse;
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
}`,tE=`#define LAMBERT
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
}`,nE=`#define LAMBERT
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
}`,iE=`#define MATCAP
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
}`,rE=`#define MATCAP
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
}`,oE=`#define NORMAL
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
}`,sE=`#define NORMAL
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
}`,aE=`#define PHONG
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
}`,lE=`#define PHONG
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
}`,uE=`#define STANDARD
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
}`,cE=`#define STANDARD
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
}`,dE=`#define TOON
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
}`,fE=`#define TOON
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
}`,hE=`uniform float size;
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
}`,pE=`uniform vec3 diffuse;
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
}`,mE=`#include <common>
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
}`,gE=`uniform vec3 color;
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
}`,vE=`uniform float rotation;
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
}`,_E=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:zS,alphahash_pars_fragment:VS,alphamap_fragment:$S,alphamap_pars_fragment:HS,alphatest_fragment:GS,alphatest_pars_fragment:WS,aomap_fragment:XS,aomap_pars_fragment:YS,batching_pars_vertex:qS,batching_vertex:KS,begin_vertex:ZS,beginnormal_vertex:jS,bsdfs:JS,iridescence_fragment:QS,bumpmap_pars_fragment:eM,clipping_planes_fragment:tM,clipping_planes_pars_fragment:nM,clipping_planes_pars_vertex:iM,clipping_planes_vertex:rM,color_fragment:oM,color_pars_fragment:sM,color_pars_vertex:aM,color_vertex:lM,common:uM,cube_uv_reflection_fragment:cM,defaultnormal_vertex:dM,displacementmap_pars_vertex:fM,displacementmap_vertex:hM,emissivemap_fragment:pM,emissivemap_pars_fragment:mM,colorspace_fragment:gM,colorspace_pars_fragment:vM,envmap_fragment:_M,envmap_common_pars_fragment:yM,envmap_pars_fragment:xM,envmap_pars_vertex:bM,envmap_physical_pars_fragment:NM,envmap_vertex:SM,fog_vertex:MM,fog_pars_vertex:wM,fog_fragment:EM,fog_pars_fragment:TM,gradientmap_pars_fragment:AM,lightmap_pars_fragment:CM,lights_lambert_fragment:RM,lights_lambert_pars_fragment:IM,lights_pars_begin:PM,lights_toon_fragment:DM,lights_toon_pars_fragment:LM,lights_phong_fragment:FM,lights_phong_pars_fragment:UM,lights_physical_fragment:OM,lights_physical_pars_fragment:BM,lights_fragment_begin:kM,lights_fragment_maps:zM,lights_fragment_end:VM,logdepthbuf_fragment:$M,logdepthbuf_pars_fragment:HM,logdepthbuf_pars_vertex:GM,logdepthbuf_vertex:WM,map_fragment:XM,map_pars_fragment:YM,map_particle_fragment:qM,map_particle_pars_fragment:KM,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:jM,morphinstance_vertex:JM,morphcolor_vertex:QM,morphnormal_vertex:ew,morphtarget_pars_vertex:tw,morphtarget_vertex:nw,normal_fragment_begin:iw,normal_fragment_maps:rw,normal_pars_fragment:ow,normal_pars_vertex:sw,normal_vertex:aw,normalmap_pars_fragment:lw,clearcoat_normal_fragment_begin:uw,clearcoat_normal_fragment_maps:cw,clearcoat_pars_fragment:dw,iridescence_pars_fragment:fw,opaque_fragment:hw,packing:pw,premultiplied_alpha_fragment:mw,project_vertex:gw,dithering_fragment:vw,dithering_pars_fragment:_w,roughnessmap_fragment:yw,roughnessmap_pars_fragment:xw,shadowmap_pars_fragment:bw,shadowmap_pars_vertex:Sw,shadowmap_vertex:Mw,shadowmask_pars_fragment:ww,skinbase_vertex:Ew,skinning_pars_vertex:Tw,skinning_vertex:Aw,skinnormal_vertex:Cw,specularmap_fragment:Rw,specularmap_pars_fragment:Iw,tonemapping_fragment:Pw,tonemapping_pars_fragment:Nw,transmission_fragment:Dw,transmission_pars_fragment:Lw,uv_pars_fragment:Fw,uv_pars_vertex:Uw,uv_vertex:Ow,worldpos_vertex:Bw,background_vert:kw,background_frag:zw,backgroundCube_vert:Vw,backgroundCube_frag:$w,cube_vert:Hw,cube_frag:Gw,depth_vert:Ww,depth_frag:Xw,distance_vert:Yw,distance_frag:qw,equirect_vert:Kw,equirect_frag:Zw,linedashed_vert:jw,linedashed_frag:Jw,meshbasic_vert:Qw,meshbasic_frag:eE,meshlambert_vert:tE,meshlambert_frag:nE,meshmatcap_vert:iE,meshmatcap_frag:rE,meshnormal_vert:oE,meshnormal_frag:sE,meshphong_vert:aE,meshphong_frag:lE,meshphysical_vert:uE,meshphysical_frag:cE,meshtoon_vert:dE,meshtoon_frag:fE,points_vert:hE,points_frag:pE,shadow_vert:mE,shadow_frag:gE,sprite_vert:vE,sprite_frag:_E},ke={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},si={basic:{uniforms:pn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:pn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:pn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:pn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:pn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new wt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:pn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:pn([ke.points,ke.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:pn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:pn([ke.common,ke.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:pn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:pn([ke.sprite,ke.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:pn([ke.common,ke.displacementmap,{referencePosition:{value:new _e},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:pn([ke.lights,ke.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};si.physical={uniforms:pn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const il={r:0,b:0,g:0},Hr=new Ji,yE=new Wt;function xE(t,e,n,i,r,o){const s=new wt(0);let a=r===!0?0:1,l,u,c=null,d=0,f=null;function h(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){const y=x.backgroundBlurriness>0;M=e.get(M,y)}return M}function g(x){let M=!1;const y=h(x);y===null?m(s,a):y&&y.isColor&&(m(y,1),M=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(x,M){const y=h(M);y&&(y.isCubeTexture||y.mapping===Ou)?(u===void 0&&(u=new _i(new Ma(1,1,1),new Zn({name:"BackgroundCubeMaterial",uniforms:rs(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,L,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Hr.copy(M.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yE.makeRotationFromEuler(Hr)),u.material.toneMapped=mt.getTransfer(y.colorSpace)!==Mt,(c!==y||d!==y.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,c=y,d=y.version,f=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new _i(new wa(2,2),new Zn({name:"BackgroundMaterial",uniforms:rs(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=mt.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||d!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,c=y,d=y.version,f=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,M){x.getRGB(il,O0(t)),n.buffers.color.setClear(il.r,il.g,il.b,M,o)}function p(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(x,M=1){s.set(x),a=M,m(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(s,a)},render:g,addToRenderList:v,dispose:p}}function bE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let o=r,s=!1;function a(A,C,H,w,O){let T=!1;const N=d(A,w,H,C);o!==N&&(o=N,u(o.object)),T=h(A,w,H,O),T&&g(A,w,H,O),O!==null&&e.update(O,t.ELEMENT_ARRAY_BUFFER),(T||s)&&(s=!1,y(A,C,H,w),O!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return t.createVertexArray()}function u(A){return t.bindVertexArray(A)}function c(A){return t.deleteVertexArray(A)}function d(A,C,H,w){const O=w.wireframe===!0;let T=i[C.id];T===void 0&&(T={},i[C.id]=T);const N=A.isInstancedMesh===!0?A.id:0;let z=T[N];z===void 0&&(z={},T[N]=z);let X=z[H.id];X===void 0&&(X={},z[H.id]=X);let Z=X[O];return Z===void 0&&(Z=f(l()),X[O]=Z),Z}function f(A){const C=[],H=[],w=[];for(let O=0;O<n;O++)C[O]=0,H[O]=0,w[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:w,object:A,attributes:{},index:null}}function h(A,C,H,w){const O=o.attributes,T=C.attributes;let N=0;const z=H.getAttributes();for(const X in z)if(z[X].location>=0){const ne=O[X];let Q=T[X];if(Q===void 0&&(X==="instanceMatrix"&&A.instanceMatrix&&(Q=A.instanceMatrix),X==="instanceColor"&&A.instanceColor&&(Q=A.instanceColor)),ne===void 0||ne.attribute!==Q||Q&&ne.data!==Q.data)return!0;N++}return o.attributesNum!==N||o.index!==w}function g(A,C,H,w){const O={},T=C.attributes;let N=0;const z=H.getAttributes();for(const X in z)if(z[X].location>=0){let ne=T[X];ne===void 0&&(X==="instanceMatrix"&&A.instanceMatrix&&(ne=A.instanceMatrix),X==="instanceColor"&&A.instanceColor&&(ne=A.instanceColor));const Q={};Q.attribute=ne,ne&&ne.data&&(Q.data=ne.data),O[X]=Q,N++}o.attributes=O,o.attributesNum=N,o.index=w}function v(){const A=o.newAttributes;for(let C=0,H=A.length;C<H;C++)A[C]=0}function m(A){p(A,0)}function p(A,C){const H=o.newAttributes,w=o.enabledAttributes,O=o.attributeDivisors;H[A]=1,w[A]===0&&(t.enableVertexAttribArray(A),w[A]=1),O[A]!==C&&(t.vertexAttribDivisor(A,C),O[A]=C)}function x(){const A=o.newAttributes,C=o.enabledAttributes;for(let H=0,w=C.length;H<w;H++)C[H]!==A[H]&&(t.disableVertexAttribArray(H),C[H]=0)}function M(A,C,H,w,O,T,N){N===!0?t.vertexAttribIPointer(A,C,H,O,T):t.vertexAttribPointer(A,C,H,w,O,T)}function y(A,C,H,w){v();const O=w.attributes,T=H.getAttributes(),N=C.defaultAttributeValues;for(const z in T){const X=T[z];if(X.location>=0){let Z=O[z];if(Z===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(Z=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(Z=A.instanceColor)),Z!==void 0){const ne=Z.normalized,Q=Z.itemSize,de=e.get(Z);if(de===void 0)continue;const we=de.buffer,te=de.type,D=de.bytesPerElement,K=te===t.INT||te===t.UNSIGNED_INT||Z.gpuType===fh;if(Z.isInterleavedBufferAttribute){const se=Z.data,be=se.stride,Se=Z.offset;if(se.isInstancedInterleavedBuffer){for(let Re=0;Re<X.locationSize;Re++)p(X.location+Re,se.meshPerAttribute);A.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Re=0;Re<X.locationSize;Re++)m(X.location+Re);t.bindBuffer(t.ARRAY_BUFFER,we);for(let Re=0;Re<X.locationSize;Re++)M(X.location+Re,Q/X.locationSize,te,ne,be*D,(Se+Q/X.locationSize*Re)*D,K)}else{if(Z.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)p(X.location+se,Z.meshPerAttribute);A.isInstancedMesh!==!0&&w._maxInstanceCount===void 0&&(w._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let se=0;se<X.locationSize;se++)m(X.location+se);t.bindBuffer(t.ARRAY_BUFFER,we);for(let se=0;se<X.locationSize;se++)M(X.location+se,Q/X.locationSize,te,ne,Q*D,Q/X.locationSize*se*D,K)}}else if(N!==void 0){const ne=N[z];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(X.location,ne);break;case 3:t.vertexAttrib3fv(X.location,ne);break;case 4:t.vertexAttrib4fv(X.location,ne);break;default:t.vertexAttrib1fv(X.location,ne)}}}}x()}function P(){S();for(const A in i){const C=i[A];for(const H in C){const w=C[H];for(const O in w){const T=w[O];for(const N in T)c(T[N].object),delete T[N];delete w[O]}}delete i[A]}}function L(A){if(i[A.id]===void 0)return;const C=i[A.id];for(const H in C){const w=C[H];for(const O in w){const T=w[O];for(const N in T)c(T[N].object),delete T[N];delete w[O]}}delete i[A.id]}function B(A){for(const C in i){const H=i[C];for(const w in H){const O=H[w];if(O[A.id]===void 0)continue;const T=O[A.id];for(const N in T)c(T[N].object),delete T[N];delete O[A.id]}}}function _(A){for(const C in i){const H=i[C],w=A.isInstancedMesh===!0?A.id:0,O=H[w];if(O!==void 0){for(const T in O){const N=O[T];for(const z in N)c(N[z].object),delete N[z];delete O[T]}delete H[w],Object.keys(H).length===0&&delete i[C]}}}function S(){R(),s=!0,o!==r&&(o=r,u(o.object))}function R(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:R,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfObject:_,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:m,disableUnusedAttributes:x}}function SE(t,e,n){let i;function r(u){i=u}function o(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function s(u,c,d){d!==0&&(t.drawArraysInstanced(i,u,c,d),n.update(c,i,d))}function a(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let h=0;for(let g=0;g<d;g++)h+=c[g];n.update(h,i,1)}function l(u,c,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<u.length;g++)s(u[g],c[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=c[v]*f[v];n.update(g,i,1)}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ME(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(B){return!(B!==_n&&i.convert(B)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(B){const _=B===Zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==gn&&i.convert(B)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ui&&!_)}function l(B){if(B==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(ot("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=t.getParameter(t.MAX_SAMPLES),L=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:y,maxSamples:P,samples:L}}function wE(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new Xr,a=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!r||g===null||g.length===0||o&&!m)o?c(null):u();else{const x=o?0:i,M=x*4;let y=p.clippingState||null;l.value=y,y=c(g,f,M,h);for(let P=0;P!==M;++P)y[P]=n[P];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,h,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=h+v*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=h;M!==v;++M,y+=4)s.copy(d[M]).applyMatrix4(x,a),s.normal.toArray(m,y),m[y+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}const Ar=4,am=[.125,.215,.35,.446,.526,.582],qr=20,EE=256,Ss=new Sh,lm=new wt;let $c=null,Hc=0,Gc=0,Wc=!1;const TE=new _e;class um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,o={}){const{size:s=256,position:a=TE}=o;$c=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget($c,Hc,Gc),this._renderer.xr.enabled=Wc,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===uo||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),Hc=this._renderer.getActiveCubeFace(),Gc=this._renderer.getActiveMipmapLevel(),Wc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Zi,format:_n,colorSpace:Pr,depthBuffer:!1},r=cm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cm(e,n,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=AE(o)),this._blurMaterial=RE(o,e,n),this._ggxMaterial=CE(o,e,n)}return r}_compileMaterial(e){const n=new _i(new rr,e);this._renderer.compile(n,Ss)}_sceneToCubeUV(e,n,i,r,o){const l=new $n(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(lm),d.toneMapping=fi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _i(new Ma,new D0({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,m=v.material;let p=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,p=!0):(m.color.copy(lm),p=!0);for(let M=0;M<6;M++){const y=M%3;y===0?(l.up.set(0,u[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+c[M],o.y,o.z)):y===1?(l.up.set(0,0,u[M]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+c[M],o.z)):(l.up.set(0,u[M],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+c[M]));const P=this._cubeSize;Lo(r,y*P,M>2?P:0,P,P),d.setRenderTarget(r),p&&d.render(v,l),d.render(e,l)}d.toneMapping=h,d.autoClear=f,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===uo||e.mapping===ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dm());const o=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=o;const a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Lo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,Ss)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let o=1;o<r;o++)this._applyGGXFilter(e,o-1,o);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,o=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;const l=s.uniforms,u=i/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,h=d*f,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Ar?i-g+Ar:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-n,Lo(o,m,p,3*v,2*v),r.setRenderTarget(o),r.render(a,Ss),l.envMap.value=o.texture,l.roughness.value=0,l.mipInt.value=g-i,Lo(e,m,p,3*v,2*v),r.setRenderTarget(e),r.render(a,Ss)}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&_t("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,h=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*qr-1),v=o/g,m=isFinite(o)?1+Math.floor(c*v):qr;m>qr&&ot(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qr}`);const p=[];let x=0;for(let B=0;B<qr;++B){const _=B/v,S=Math.exp(-_*_/2);p.push(S),B===0?x+=S:B<m&&(x+=2*S)}for(let B=0;B<p.length;B++)p[B]=p[B]/x;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-i;const y=this._sizeLods[r],P=3*y*(r>M-Ar?r-M+Ar:0),L=4*(this._cubeSize-y);Lo(n,P,L,3*y,2*y),l.setRenderTarget(n),l.render(d,Ss)}}function AE(t){const e=[],n=[],i=[];let r=t;const o=t-Ar+1+am.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);e.push(a);let l=1/a;s>t-Ar?l=am[s-t+Ar-1]:s===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],h=6,g=6,v=3,m=2,p=1,x=new Float32Array(v*g*h),M=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let L=0;L<h;L++){const B=L%3*2/3-1,_=L>2?0:-1,S=[B,_,0,B+2/3,_,0,B+2/3,_+1,0,B,_,0,B+2/3,_+1,0,B,_+1,0];x.set(S,v*g*L),M.set(f,m*g*L);const R=[L,L,L,L,L,L];y.set(R,p*g*L)}const P=new rr;P.setAttribute("position",new hi(x,v)),P.setAttribute("uv",new hi(M,m)),P.setAttribute("faceIndex",new hi(y,p)),i.push(new _i(P,null)),r>Ar&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function cm(t,e,n){const i=new bn(t,e,n);return i.texture.mapping=Ou,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function CE(t,e,n){return new Zn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:EE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ku(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function RE(t,e,n){const i=new Float32Array(qr),r=new _e(0,1,0);return new Zn({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ku(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function dm(){return new Zn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ku(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function fm(){return new Zn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ku(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function ku(){return`

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
	`}class z0 extends bn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new F0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ma(5,5,5),o=new Zn({name:"CubemapFromEquirect",uniforms:rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:$i});o.uniforms.tEquirect.value=n;const s=new _i(r,o),a=n.minFilter;return n.minFilter===Jr&&(n.minFilter=Ct),new US(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}function IE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?s(f):o(f)}function o(f){if(f&&f.isTexture){const h=f.mapping;if(h===mc||h===gc)if(e.has(f)){const g=e.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const v=new z0(g.height);return v.fromEquirectangularTexture(t,f),e.set(f,v),f.addEventListener("dispose",u),a(v.texture,f.mapping)}else return null}}return f}function s(f){if(f&&f.isTexture){const h=f.mapping,g=h===mc||h===gc,v=h===uo||h===ns;if(g||v){let m=n.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new um(t)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const x=f.image;return g&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new um(t)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",c),m.texture):null}}}return f}function a(f,h){return h===mc?f.mapping=uo:h===gc&&(f.mapping=ns),f}function l(f){let h=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&h++;return h===g}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function c(f){const h=f.target;h.removeEventListener("dispose",c);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function PE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&tu("WebGLRenderer: "+i+" extension not supported."),r}}}function NE(t,e,n,i){const r={},o=new WeakMap;function s(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete r[f.id];const h=o.get(f);h&&(e.remove(h),o.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",s),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function u(d){const f=[],h=d.index,g=d.attributes.position;let v=0;if(g===void 0)return;if(h!==null){const x=h.array;v=h.version;for(let M=0,y=x.length;M<y;M+=3){const P=x[M+0],L=x[M+1],B=x[M+2];f.push(P,L,L,B,B,P)}}else{const x=g.array;v=g.version;for(let M=0,y=x.length/3-1;M<y;M+=3){const P=M+0,L=M+1,B=M+2;f.push(P,L,L,B,B,P)}}const m=new(g.count>=65535?N0:P0)(f,1);m.version=v;const p=o.get(d);p&&e.remove(p),o.set(d,m)}function c(d){const f=o.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&u(d)}else u(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function DE(t,e,n){let i;function r(f){i=f}let o,s;function a(f){o=f.type,s=f.bytesPerElement}function l(f,h){t.drawElements(i,h,o,f*s),n.update(h,i,1)}function u(f,h,g){g!==0&&(t.drawElementsInstanced(i,h,o,f*s,g),n.update(h,i,g))}function c(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,o,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function d(f,h,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)u(f[p]/s,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,o,f,0,v,0,g);let p=0;for(let x=0;x<g;x++)p+=h[x]*v[x];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function LE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:_t("WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function FE(t,e,n){const i=new WeakMap,r=new zt;function o(s,a,l){const u=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let S=function(){B.dispose(),i.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let M=0;h===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let y=a.attributes.position.count*M,P=1;y>e.maxTextureSize&&(P=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const L=new Float32Array(y*P*4*d),B=new C0(L,y,P,d);B.type=ui,B.needsUpdate=!0;const _=M*4;for(let R=0;R<d;R++){const A=m[R],C=p[R],H=x[R],w=y*P*4*R;for(let O=0;O<A.count;O++){const T=O*_;h===!0&&(r.fromBufferAttribute(A,O),L[w+T+0]=r.x,L[w+T+1]=r.y,L[w+T+2]=r.z,L[w+T+3]=0),g===!0&&(r.fromBufferAttribute(C,O),L[w+T+4]=r.x,L[w+T+5]=r.y,L[w+T+6]=r.z,L[w+T+7]=0),v===!0&&(r.fromBufferAttribute(H,O),L[w+T+8]=r.x,L[w+T+9]=r.y,L[w+T+10]=r.z,L[w+T+11]=H.itemSize===4?r.w:1)}}f={count:d,texture:B,size:new Et(y,P)},i.set(a,f),a.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let h=0;for(let v=0;v<u.length;v++)h+=u[v];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:o}}function UE(t,e,n,i,r){let o=new WeakMap;function s(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(o.get(f)!==c&&(e.update(f),o.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),o.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),o.set(u,c))),u.isSkinnedMesh){const h=u.skeleton;o.get(h)!==c&&(h.update(),o.set(h,c))}return f}function a(){o=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const OE={[f0]:"LINEAR_TONE_MAPPING",[h0]:"REINHARD_TONE_MAPPING",[p0]:"CINEON_TONE_MAPPING",[m0]:"ACES_FILMIC_TONE_MAPPING",[v0]:"AGX_TONE_MAPPING",[_0]:"NEUTRAL_TONE_MAPPING",[g0]:"CUSTOM_TONE_MAPPING"};function BE(t,e,n,i,r){const o=new bn(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),s=new bn(e,n,{type:Zi,depthBuffer:!1,stencilBuffer:!1}),a=new rr;a.setAttribute("position",new Gi([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Gi([0,2,0,0,2,0],2));const l=new DS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new _i(a,l),c=new Sh(-1,1,1,-1,0,1);let d=null,f=null,h=!1,g,v=null,m=[],p=!1;this.setSize=function(x,M){o.setSize(x,M),s.setSize(x,M);for(let y=0;y<m.length;y++){const P=m[y];P.setSize&&P.setSize(x,M)}},this.setEffects=function(x){m=x,p=m.length>0&&m[0].isRenderPass===!0;const M=o.width,y=o.height;for(let P=0;P<m.length;P++){const L=m[P];L.setSize&&L.setSize(M,y)}},this.begin=function(x,M){if(h||x.toneMapping===fi&&m.length===0)return!1;if(v=M,M!==null){const y=M.width,P=M.height;(o.width!==y||o.height!==P)&&this.setSize(y,P)}return p===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=fi,!0},this.hasRenderPass=function(){return p},this.end=function(x,M){x.toneMapping=g,h=!0;let y=o,P=s;for(let L=0;L<m.length;L++){const B=m[L];if(B.enabled!==!1&&(B.render(x,P,y,M),B.needsSwap!==!1)){const _=y;y=P,P=_}}if(d!==x.outputColorSpace||f!==x.toneMapping){d=x.outputColorSpace,f=x.toneMapping,l.defines={},mt.getTransfer(d)===Mt&&(l.defines.SRGB_TRANSFER="");const L=OE[f];L&&(l.defines[L]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(v),x.render(u,c),v=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){o.dispose(),s.dispose(),a.dispose(),l.dispose()}}const V0=new nn,gf=new na(1,1),$0=new C0,H0=new lS,G0=new F0,hm=[],pm=[],mm=new Float32Array(16),gm=new Float32Array(9),vm=new Float32Array(4);function hs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=hm[r];if(o===void 0&&(o=new Float32Array(r),hm[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function Yt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function qt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function zu(t,e){let n=pm[e];n===void 0&&(n=new Int32Array(e),pm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function kE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2fv(this.addr,e),qt(n,e)}}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Yt(n,e))return;t.uniform3fv(this.addr,e),qt(n,e)}}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4fv(this.addr,e),qt(n,e)}}function HE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,i))return;vm.set(i),t.uniformMatrix2fv(this.addr,!1,vm),qt(n,i)}}function GE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,i))return;gm.set(i),t.uniformMatrix3fv(this.addr,!1,gm),qt(n,i)}}function WE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Yt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),qt(n,e)}else{if(Yt(n,i))return;mm.set(i),t.uniformMatrix4fv(this.addr,!1,mm),qt(n,i)}}function XE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2iv(this.addr,e),qt(n,e)}}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3iv(this.addr,e),qt(n,e)}}function KE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4iv(this.addr,e),qt(n,e)}}function ZE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Yt(n,e))return;t.uniform2uiv(this.addr,e),qt(n,e)}}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Yt(n,e))return;t.uniform3uiv(this.addr,e),qt(n,e)}}function QE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Yt(n,e))return;t.uniform4uiv(this.addr,e),qt(n,e)}}function eT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(gf.compareFunction=n.isReversedDepthBuffer()?yh:_h,o=gf):o=V0,n.setTexture2D(e||o,r)}function tT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||H0,r)}function nT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||G0,r)}function iT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$0,r)}function rT(t){switch(t){case 5126:return kE;case 35664:return zE;case 35665:return VE;case 35666:return $E;case 35674:return HE;case 35675:return GE;case 35676:return WE;case 5124:case 35670:return XE;case 35667:case 35671:return YE;case 35668:case 35672:return qE;case 35669:case 35673:return KE;case 5125:return ZE;case 36294:return jE;case 36295:return JE;case 36296:return QE;case 35678:case 36198:case 36298:case 36306:case 35682:return eT;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return nT;case 36289:case 36303:case 36311:case 36292:return iT}}function oT(t,e){t.uniform1fv(this.addr,e)}function sT(t,e){const n=hs(e,this.size,2);t.uniform2fv(this.addr,n)}function aT(t,e){const n=hs(e,this.size,3);t.uniform3fv(this.addr,n)}function lT(t,e){const n=hs(e,this.size,4);t.uniform4fv(this.addr,n)}function uT(t,e){const n=hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function cT(t,e){const n=hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function dT(t,e){const n=hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function fT(t,e){t.uniform1iv(this.addr,e)}function hT(t,e){t.uniform2iv(this.addr,e)}function pT(t,e){t.uniform3iv(this.addr,e)}function mT(t,e){t.uniform4iv(this.addr,e)}function gT(t,e){t.uniform1uiv(this.addr,e)}function vT(t,e){t.uniform2uiv(this.addr,e)}function _T(t,e){t.uniform3uiv(this.addr,e)}function yT(t,e){t.uniform4uiv(this.addr,e)}function xT(t,e,n){const i=this.cache,r=e.length,o=zu(n,r);Yt(i,o)||(t.uniform1iv(this.addr,o),qt(i,o));let s;this.type===t.SAMPLER_2D_SHADOW?s=gf:s=V0;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||s,o[a])}function bT(t,e,n){const i=this.cache,r=e.length,o=zu(n,r);Yt(i,o)||(t.uniform1iv(this.addr,o),qt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||H0,o[s])}function ST(t,e,n){const i=this.cache,r=e.length,o=zu(n,r);Yt(i,o)||(t.uniform1iv(this.addr,o),qt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||G0,o[s])}function MT(t,e,n){const i=this.cache,r=e.length,o=zu(n,r);Yt(i,o)||(t.uniform1iv(this.addr,o),qt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||$0,o[s])}function wT(t){switch(t){case 5126:return oT;case 35664:return sT;case 35665:return aT;case 35666:return lT;case 35674:return uT;case 35675:return cT;case 35676:return dT;case 5124:case 35670:return fT;case 35667:case 35671:return hT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return vT;case 36295:return _T;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return xT;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return ST;case 36289:case 36303:case 36311:case 36292:return MT}}class ET{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=rT(n.type)}}class TT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=wT(n.type)}}class AT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Xc=/(\w+)(\])?(\[|\.)?/g;function _m(t,e){t.seq.push(e),t.map[e.id]=e}function CT(t,e,n){const i=t.name,r=i.length;for(Xc.lastIndex=0;;){const o=Xc.exec(i),s=Xc.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){_m(n,u===void 0?new ET(a,t,e):new TT(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new AT(a),_m(n,d)),n=d}}}class Il{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(n,s),l=e.getUniformLocation(n,a.name);CT(a,l,this)}const r=[],o=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(s):o.push(s);r.length>0&&(this.seq=r.concat(o))}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function ym(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const RT=37297;let IT=0;function PT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}const xm=new lt;function NT(t){mt._getMatrix(xm,mt.workingColorSpace,t);const e=`mat3( ${xm.elements.map(n=>n.toFixed(4))} )`;switch(mt.getTransfer(t)){case Jl:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function bm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),o=(t.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+o+`

`+PT(t.getShaderSource(e),a)}else return o}function DT(t,e){const n=NT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const LT={[f0]:"Linear",[h0]:"Reinhard",[p0]:"Cineon",[m0]:"ACESFilmic",[v0]:"AgX",[_0]:"Neutral",[g0]:"Custom"};function FT(t,e){const n=LT[e];return n===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const rl=new _e;function UT(){mt.getLuminanceCoefficients(rl);const t=rl.x.toFixed(4),e=rl.y.toFixed(4),n=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Is).join(`
`)}function BT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function kT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function Is(t){return t!==""}function Sm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const zT=/^[ \t]*#include +<([\w\d./]+)>/gm;function vf(t){return t.replace(zT,$T)}const VT=new Map;function $T(t,e){let n=ct[e];if(n===void 0){const i=VT.get(e);if(i!==void 0)n=ct[i],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return vf(n)}const HT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wm(t){return t.replace(HT,GT)}function GT(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Em(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const WT={[El]:"SHADOWMAP_TYPE_PCF",[Rs]:"SHADOWMAP_TYPE_VSM"};function XT(t){return WT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const YT={[uo]:"ENVMAP_TYPE_CUBE",[ns]:"ENVMAP_TYPE_CUBE",[Ou]:"ENVMAP_TYPE_CUBE_UV"};function qT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":YT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const KT={[ns]:"ENVMAP_MODE_REFRACTION"};function ZT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":KT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const jT={[d0]:"ENVMAP_BLENDING_MULTIPLY",[z1]:"ENVMAP_BLENDING_MIX",[V1]:"ENVMAP_BLENDING_ADD"};function JT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":jT[t.combine]||"ENVMAP_BLENDING_NONE"}function QT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function eA(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=XT(n),u=qT(n),c=ZT(n),d=JT(n),f=QT(n),h=OT(n),g=BT(o),v=r.createProgram();let m,p,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Is).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Is).join(`
`),p.length>0&&(p+=`
`)):(m=[Em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),p=[Em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==fi?"#define TONE_MAPPING":"",n.toneMapping!==fi?ct.tonemapping_pars_fragment:"",n.toneMapping!==fi?FT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,DT("linearToOutputTexel",n.outputColorSpace),UT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Is).join(`
`)),s=vf(s),s=Sm(s,n),s=Mm(s,n),a=vf(a),a=Sm(a,n),a=Mm(a,n),s=wm(s),a=wm(a),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Vp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=x+m+s,y=x+p+a,P=ym(r,r.VERTEX_SHADER,M),L=ym(r,r.FRAGMENT_SHADER,y);r.attachShader(v,P),r.attachShader(v,L),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function B(A){if(t.debug.checkShaderErrors){const C=r.getProgramInfoLog(v)||"",H=r.getShaderInfoLog(P)||"",w=r.getShaderInfoLog(L)||"",O=C.trim(),T=H.trim(),N=w.trim();let z=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,P,L);else{const Z=bm(r,P,"vertex"),ne=bm(r,L,"fragment");_t("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+Z+`
`+ne)}else O!==""?ot("WebGLProgram: Program Info Log:",O):(T===""||N==="")&&(X=!1);X&&(A.diagnostics={runnable:z,programLog:O,vertexShader:{log:T,prefix:m},fragmentShader:{log:N,prefix:p}})}r.deleteShader(P),r.deleteShader(L),_=new Il(r,v),S=kT(r,v)}let _;this.getUniforms=function(){return _===void 0&&B(this),_};let S;this.getAttributes=function(){return S===void 0&&B(this),S};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(v,RT)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IT++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=L,this}let tA=0;class nA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new iA(e),n.set(e,i)),i}}class iA{constructor(e){this.id=tA++,this.code=e,this.usedTimes=0}}function rA(t,e,n,i,r,o){const s=new R0,a=new nA,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function v(_,S,R,A,C){const H=A.fog,w=C.geometry,O=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?A.environment:null,T=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,N=e.get(_.envMap||O,T),z=N&&N.mapping===Ou?N.image.height:null,X=h[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&ot("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const Z=w.morphAttributes.position||w.morphAttributes.normal||w.morphAttributes.color,ne=Z!==void 0?Z.length:0;let Q=0;w.morphAttributes.position!==void 0&&(Q=1),w.morphAttributes.normal!==void 0&&(Q=2),w.morphAttributes.color!==void 0&&(Q=3);let de,we,te,D;if(X){const St=si[X];de=St.vertexShader,we=St.fragmentShader}else de=_.vertexShader,we=_.fragmentShader,a.update(_),te=a.getVertexShaderID(_),D=a.getFragmentShaderID(_);const K=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),be=C.isInstancedMesh===!0,Se=C.isBatchedMesh===!0,Re=!!_.map,$=!!_.matcap,G=!!N,F=!!_.aoMap,U=!!_.lightMap,k=!!_.bumpMap,W=!!_.normalMap,b=!!_.displacementMap,q=!!_.emissiveMap,J=!!_.metalnessMap,ee=!!_.roughnessMap,ie=_.anisotropy>0,I=_.clearcoat>0,E=_.dispersion>0,Y=_.iridescence>0,ae=_.sheen>0,me=_.transmission>0,fe=ie&&!!_.anisotropyMap,Ue=I&&!!_.clearcoatMap,Ie=I&&!!_.clearcoatNormalMap,He=I&&!!_.clearcoatRoughnessMap,Ye=Y&&!!_.iridescenceMap,Pe=Y&&!!_.iridescenceThicknessMap,ue=ae&&!!_.sheenColorMap,oe=ae&&!!_.sheenRoughnessMap,Ee=!!_.specularMap,De=!!_.specularColorMap,Qe=!!_.specularIntensityMap,re=me&&!!_.transmissionMap,Le=me&&!!_.thicknessMap,Fe=!!_.gradientMap,Be=!!_.alphaMap,Ne=_.alphaTest>0,Me=!!_.alphaHash,qe=!!_.extensions;let rt=fi;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(rt=t.toneMapping);const Lt={shaderID:X,shaderType:_.type,shaderName:_.name,vertexShader:de,fragmentShader:we,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:D,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Se,batchingColor:Se&&C._colorsTexture!==null,instancing:be,instancingColor:be&&C.instanceColor!==null,instancingMorph:be&&C.morphTexture!==null,outputColorSpace:K===null?t.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Pr,alphaToCoverage:!!_.alphaToCoverage,map:Re,matcap:$,envMap:G,envMapMode:G&&N.mapping,envMapCubeUVHeight:z,aoMap:F,lightMap:U,bumpMap:k,normalMap:W,displacementMap:b,emissiveMap:q,normalMapObjectSpace:W&&_.normalMapType===W1,normalMapTangentSpace:W&&_.normalMapType===G1,metalnessMap:J,roughnessMap:ee,anisotropy:ie,anisotropyMap:fe,clearcoat:I,clearcoatMap:Ue,clearcoatNormalMap:Ie,clearcoatRoughnessMap:He,dispersion:E,iridescence:Y,iridescenceMap:Ye,iridescenceThicknessMap:Pe,sheen:ae,sheenColorMap:ue,sheenRoughnessMap:oe,specularMap:Ee,specularColorMap:De,specularIntensityMap:Qe,transmission:me,transmissionMap:re,thicknessMap:Le,gradientMap:Fe,opaque:_.transparent===!1&&_.blending===Wo&&_.alphaToCoverage===!1,alphaMap:Be,alphaTest:Ne,alphaHash:Me,combine:_.combine,mapUv:Re&&g(_.map.channel),aoMapUv:F&&g(_.aoMap.channel),lightMapUv:U&&g(_.lightMap.channel),bumpMapUv:k&&g(_.bumpMap.channel),normalMapUv:W&&g(_.normalMap.channel),displacementMapUv:b&&g(_.displacementMap.channel),emissiveMapUv:q&&g(_.emissiveMap.channel),metalnessMapUv:J&&g(_.metalnessMap.channel),roughnessMapUv:ee&&g(_.roughnessMap.channel),anisotropyMapUv:fe&&g(_.anisotropyMap.channel),clearcoatMapUv:Ue&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:oe&&g(_.sheenRoughnessMap.channel),specularMapUv:Ee&&g(_.specularMap.channel),specularColorMapUv:De&&g(_.specularColorMap.channel),specularIntensityMapUv:Qe&&g(_.specularIntensityMap.channel),transmissionMapUv:re&&g(_.transmissionMap.channel),thicknessMapUv:Le&&g(_.thicknessMap.channel),alphaMapUv:Be&&g(_.alphaMap.channel),vertexTangents:!!w.attributes.tangent&&(W||ie),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!w.attributes.color&&w.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!w.attributes.uv&&(Re||Be),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||w.attributes.normal===void 0&&W===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:se,skinning:C.isSkinnedMesh===!0,morphTargets:w.morphAttributes.position!==void 0,morphNormals:w.morphAttributes.normal!==void 0,morphColors:w.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:Q,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:rt,decodeVideoTexture:Re&&_.map.isVideoTexture===!0&&mt.getTransfer(_.map.colorSpace)===Mt,decodeVideoTextureEmissive:q&&_.emissiveMap.isVideoTexture===!0&&mt.getTransfer(_.emissiveMap.colorSpace)===Mt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Fi,flipSided:_.side===wn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:qe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&_.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function m(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const R in _.defines)S.push(R),S.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(p(S,_),x(S,_),S.push(t.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function x(_,S){s.disableAll(),S.instancing&&s.enable(0),S.instancingColor&&s.enable(1),S.instancingMorph&&s.enable(2),S.matcap&&s.enable(3),S.envMap&&s.enable(4),S.normalMapObjectSpace&&s.enable(5),S.normalMapTangentSpace&&s.enable(6),S.clearcoat&&s.enable(7),S.iridescence&&s.enable(8),S.alphaTest&&s.enable(9),S.vertexColors&&s.enable(10),S.vertexAlphas&&s.enable(11),S.vertexUv1s&&s.enable(12),S.vertexUv2s&&s.enable(13),S.vertexUv3s&&s.enable(14),S.vertexTangents&&s.enable(15),S.anisotropy&&s.enable(16),S.alphaHash&&s.enable(17),S.batching&&s.enable(18),S.dispersion&&s.enable(19),S.batchingColor&&s.enable(20),S.gradientMap&&s.enable(21),_.push(s.mask),s.disableAll(),S.fog&&s.enable(0),S.useFog&&s.enable(1),S.flatShading&&s.enable(2),S.logarithmicDepthBuffer&&s.enable(3),S.reversedDepthBuffer&&s.enable(4),S.skinning&&s.enable(5),S.morphTargets&&s.enable(6),S.morphNormals&&s.enable(7),S.morphColors&&s.enable(8),S.premultipliedAlpha&&s.enable(9),S.shadowMapEnabled&&s.enable(10),S.doubleSided&&s.enable(11),S.flipSided&&s.enable(12),S.useDepthPacking&&s.enable(13),S.dithering&&s.enable(14),S.transmission&&s.enable(15),S.sheen&&s.enable(16),S.opaque&&s.enable(17),S.pointsUvs&&s.enable(18),S.decodeVideoTexture&&s.enable(19),S.decodeVideoTextureEmissive&&s.enable(20),S.alphaToCoverage&&s.enable(21),_.push(s.mask)}function M(_){const S=h[_.type];let R;if(S){const A=si[S];R=IS.clone(A.uniforms)}else R=_.uniforms;return R}function y(_,S){let R=c.get(S);return R!==void 0?++R.usedTimes:(R=new eA(t,S,_,r),u.push(R),c.set(S,R)),R}function P(_){if(--_.usedTimes===0){const S=u.indexOf(_);u[S]=u[u.length-1],u.pop(),c.delete(_.cacheKey),_.destroy()}}function L(_){a.remove(_)}function B(){a.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:P,releaseShaderCache:L,programs:u,dispose:B}}function oA(){let t=new WeakMap;function e(s){return t.has(s)}function n(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function i(s){t.delete(s)}function r(s,a,l){t.get(s)[a]=l}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:o}}function sA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Tm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Am(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function a(f,h,g,v,m,p){let x=t[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:g,materialVariant:s(f),groupOrder:v,renderOrder:f.renderOrder,z:m,group:p},t[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=g,x.materialVariant=s(f),x.groupOrder=v,x.renderOrder=f.renderOrder,x.z=m,x.group=p),e++,x}function l(f,h,g,v,m,p){const x=a(f,h,g,v,m,p);g.transmission>0?i.push(x):g.transparent===!0?r.push(x):n.push(x)}function u(f,h,g,v,m,p){const x=a(f,h,g,v,m,p);g.transmission>0?i.unshift(x):g.transparent===!0?r.unshift(x):n.unshift(x)}function c(f,h){n.length>1&&n.sort(f||sA),i.length>1&&i.sort(h||Tm),r.length>1&&r.sort(h||Tm)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:l,unshift:u,finish:d,sort:c}}function aA(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Am,t.set(i,[s])):r>=o.length?(s=new Am,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function lA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new _e,color:new wt};break;case"SpotLight":n={position:new _e,direction:new _e,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new _e,color:new wt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new _e,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":n={color:new wt,position:new _e,halfWidth:new _e,halfHeight:new _e};break}return t[e.id]=n,n}}}function uA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let cA=0;function dA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function fA(t){const e=new lA,n=uA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new _e);const r=new _e,o=new Wt,s=new Wt;function a(u){let c=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,x=0,M=0,y=0,P=0,L=0,B=0;u.sort(dA);for(let S=0,R=u.length;S<R;S++){const A=u[S],C=A.color,H=A.intensity,w=A.distance;let O=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===is?O=A.shadow.map.texture:O=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)c+=C.r*H,d+=C.g*H,f+=C.b*H;else if(A.isLightProbe){for(let T=0;T<9;T++)i.probe[T].addScaledVector(A.sh.coefficients[T],H);B++}else if(A.isDirectionalLight){const T=e.get(A);if(T.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){const N=A.shadow,z=n.get(A);z.shadowIntensity=N.intensity,z.shadowBias=N.bias,z.shadowNormalBias=N.normalBias,z.shadowRadius=N.radius,z.shadowMapSize=N.mapSize,i.directionalShadow[h]=z,i.directionalShadowMap[h]=O,i.directionalShadowMatrix[h]=A.shadow.matrix,x++}i.directional[h]=T,h++}else if(A.isSpotLight){const T=e.get(A);T.position.setFromMatrixPosition(A.matrixWorld),T.color.copy(C).multiplyScalar(H),T.distance=w,T.coneCos=Math.cos(A.angle),T.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),T.decay=A.decay,i.spot[v]=T;const N=A.shadow;if(A.map&&(i.spotLightMap[P]=A.map,P++,N.updateMatrices(A),A.castShadow&&L++),i.spotLightMatrix[v]=N.matrix,A.castShadow){const z=n.get(A);z.shadowIntensity=N.intensity,z.shadowBias=N.bias,z.shadowNormalBias=N.normalBias,z.shadowRadius=N.radius,z.shadowMapSize=N.mapSize,i.spotShadow[v]=z,i.spotShadowMap[v]=O,y++}v++}else if(A.isRectAreaLight){const T=e.get(A);T.color.copy(C).multiplyScalar(H),T.halfWidth.set(A.width*.5,0,0),T.halfHeight.set(0,A.height*.5,0),i.rectArea[m]=T,m++}else if(A.isPointLight){const T=e.get(A);if(T.color.copy(A.color).multiplyScalar(A.intensity),T.distance=A.distance,T.decay=A.decay,A.castShadow){const N=A.shadow,z=n.get(A);z.shadowIntensity=N.intensity,z.shadowBias=N.bias,z.shadowNormalBias=N.normalBias,z.shadowRadius=N.radius,z.shadowMapSize=N.mapSize,z.shadowCameraNear=N.camera.near,z.shadowCameraFar=N.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=A.shadow.matrix,M++}i.point[g]=T,g++}else if(A.isHemisphereLight){const T=e.get(A);T.skyColor.copy(A.color).multiplyScalar(H),T.groundColor.copy(A.groundColor).multiplyScalar(H),i.hemi[p]=T,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const _=i.hash;(_.directionalLength!==h||_.pointLength!==g||_.spotLength!==v||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==x||_.numPointShadows!==M||_.numSpotShadows!==y||_.numSpotMaps!==P||_.numLightProbes!==B)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+P-L,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=B,_.directionalLength=h,_.pointLength=g,_.spotLength=v,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=x,_.numPointShadows=M,_.numSpotShadows=y,_.numSpotMaps=P,_.numLightProbes=B,i.version=cA++)}function l(u,c){let d=0,f=0,h=0,g=0,v=0;const m=c.matrixWorldInverse;for(let p=0,x=u.length;p<x;p++){const M=u[p];if(M.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(M.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(M.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),s.identity(),o.copy(M.matrixWorld),o.premultiply(m),s.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(s),y.halfHeight.applyMatrix4(s),g++}else if(M.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Cm(t){const e=new fA(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function o(c){n.push(c)}function s(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function hA(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Cm(t),e.set(r,[a])):o>=s.length?(a=new Cm(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const pA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mA=`uniform sampler2D shadow_pass;
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
}`,gA=[new _e(1,0,0),new _e(-1,0,0),new _e(0,1,0),new _e(0,-1,0),new _e(0,0,1),new _e(0,0,-1)],vA=[new _e(0,-1,0),new _e(0,-1,0),new _e(0,0,1),new _e(0,0,-1),new _e(0,-1,0),new _e(0,-1,0)],Rm=new Wt,Ms=new _e,Yc=new _e;function _A(t,e,n){let i=new L0;const r=new Et,o=new Et,s=new zt,a=new LS,l=new FS,u={},c=n.maxTextureSize,d={[Ir]:wn,[wn]:Ir,[Fi]:Fi},f=new Zn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:pA,fragmentShader:mA}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new rr;g.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _i(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El;let p=this.type;this.render=function(L,B,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;this.type===b1&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=El);const S=t.getRenderTarget(),R=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),C=t.state;C.setBlending($i),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const H=p!==this.type;H&&B.traverse(function(w){w.material&&(Array.isArray(w.material)?w.material.forEach(O=>O.needsUpdate=!0):w.material.needsUpdate=!0)});for(let w=0,O=L.length;w<O;w++){const T=L[w],N=T.shadow;if(N===void 0){ot("WebGLShadowMap:",T,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const z=N.getFrameExtents();r.multiply(z),o.copy(N.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/z.x),r.x=o.x*z.x,N.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/z.y),r.y=o.y*z.y,N.mapSize.y=o.y));const X=t.state.buffers.depth.getReversed();if(N.camera._reversedDepth=X,N.map===null||H===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===Rs){if(T.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new bn(r.x,r.y,{format:is,type:Zi,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),N.map.texture.name=T.name+".shadowMap",N.map.depthTexture=new na(r.x,r.y,ui),N.map.depthTexture.name=T.name+".shadowMapDepth",N.map.depthTexture.format=ji,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=tn,N.map.depthTexture.magFilter=tn}else T.isPointLight?(N.map=new z0(r.x),N.map.depthTexture=new CS(r.x,vi)):(N.map=new bn(r.x,r.y),N.map.depthTexture=new na(r.x,r.y,vi)),N.map.depthTexture.name=T.name+".shadowMap",N.map.depthTexture.format=ji,this.type===El?(N.map.depthTexture.compareFunction=X?yh:_h,N.map.depthTexture.minFilter=Ct,N.map.depthTexture.magFilter=Ct):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=tn,N.map.depthTexture.magFilter=tn);N.camera.updateProjectionMatrix()}const Z=N.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<Z;ne++){if(N.map.isWebGLCubeRenderTarget)t.setRenderTarget(N.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(N.map),t.clear());const Q=N.getViewport(ne);s.set(o.x*Q.x,o.y*Q.y,o.x*Q.z,o.y*Q.w),C.viewport(s)}if(T.isPointLight){const Q=N.camera,de=N.matrix,we=T.distance||Q.far;we!==Q.far&&(Q.far=we,Q.updateProjectionMatrix()),Ms.setFromMatrixPosition(T.matrixWorld),Q.position.copy(Ms),Yc.copy(Q.position),Yc.add(gA[ne]),Q.up.copy(vA[ne]),Q.lookAt(Yc),Q.updateMatrixWorld(),de.makeTranslation(-Ms.x,-Ms.y,-Ms.z),Rm.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Rm,Q.coordinateSystem,Q.reversedDepth)}else N.updateMatrices(T);i=N.getFrustum(),y(B,_,N.camera,T,this.type)}N.isPointLightShadow!==!0&&this.type===Rs&&x(N,_),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(S,R,A)};function x(L,B){const _=e.update(v);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,h.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new bn(r.x,r.y,{format:is,type:Zi})),f.uniforms.shadow_pass.value=L.map.depthTexture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(B,null,_,f,v,null),h.uniforms.shadow_pass.value=L.mapPass.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(B,null,_,h,v,null)}function M(L,B,_,S){let R=null;const A=_.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(A!==void 0)R=A;else if(R=_.isPointLight===!0?l:a,t.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const C=R.uuid,H=B.uuid;let w=u[C];w===void 0&&(w={},u[C]=w);let O=w[H];O===void 0&&(O=R.clone(),w[H]=O,B.addEventListener("dispose",P)),R=O}if(R.visible=B.visible,R.wireframe=B.wireframe,S===Rs?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:d[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,_.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const C=t.properties.get(R);C.light=_}return R}function y(L,B,_,S,R){if(L.visible===!1)return;if(L.layers.test(B.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===Rs)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,L.matrixWorld);const H=e.update(L),w=L.material;if(Array.isArray(w)){const O=H.groups;for(let T=0,N=O.length;T<N;T++){const z=O[T],X=w[z.materialIndex];if(X&&X.visible){const Z=M(L,X,S,R);L.onBeforeShadow(t,L,B,_,H,Z,z),t.renderBufferDirect(_,null,H,Z,L,z),L.onAfterShadow(t,L,B,_,H,Z,z)}}}else if(w.visible){const O=M(L,w,S,R);L.onBeforeShadow(t,L,B,_,H,O,null),t.renderBufferDirect(_,null,H,O,L,null),L.onAfterShadow(t,L,B,_,H,O,null)}}const C=L.children;for(let H=0,w=C.length;H<w;H++)y(C[H],B,_,S,R)}function P(L){L.target.removeEventListener("dispose",P);for(const _ in u){const S=u[_],R=L.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function yA(t,e){function n(){let re=!1;const Le=new zt;let Fe=null;const Be=new zt(0,0,0,0);return{setMask:function(Ne){Fe!==Ne&&!re&&(t.colorMask(Ne,Ne,Ne,Ne),Fe=Ne)},setLocked:function(Ne){re=Ne},setClear:function(Ne,Me,qe,rt,Lt){Lt===!0&&(Ne*=rt,Me*=rt,qe*=rt),Le.set(Ne,Me,qe,rt),Be.equals(Le)===!1&&(t.clearColor(Ne,Me,qe,rt),Be.copy(Le))},reset:function(){re=!1,Fe=null,Be.set(-1,0,0,0)}}}function i(){let re=!1,Le=!1,Fe=null,Be=null,Ne=null;return{setReversed:function(Me){if(Le!==Me){const qe=e.get("EXT_clip_control");Me?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Le=Me;const rt=Ne;Ne=null,this.setClear(rt)}},getReversed:function(){return Le},setTest:function(Me){Me?K(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(Me){Fe!==Me&&!re&&(t.depthMask(Me),Fe=Me)},setFunc:function(Me){if(Le&&(Me=tS[Me]),Be!==Me){switch(Me){case Ad:t.depthFunc(t.NEVER);break;case Cd:t.depthFunc(t.ALWAYS);break;case Rd:t.depthFunc(t.LESS);break;case ts:t.depthFunc(t.LEQUAL);break;case Id:t.depthFunc(t.EQUAL);break;case Pd:t.depthFunc(t.GEQUAL);break;case Nd:t.depthFunc(t.GREATER);break;case Dd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Be=Me}},setLocked:function(Me){re=Me},setClear:function(Me){Ne!==Me&&(Ne=Me,Le&&(Me=1-Me),t.clearDepth(Me))},reset:function(){re=!1,Fe=null,Be=null,Ne=null,Le=!1}}}function r(){let re=!1,Le=null,Fe=null,Be=null,Ne=null,Me=null,qe=null,rt=null,Lt=null;return{setTest:function(St){re||(St?K(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(St){Le!==St&&!re&&(t.stencilMask(St),Le=St)},setFunc:function(St,bi,Si){(Fe!==St||Be!==bi||Ne!==Si)&&(t.stencilFunc(St,bi,Si),Fe=St,Be=bi,Ne=Si)},setOp:function(St,bi,Si){(Me!==St||qe!==bi||rt!==Si)&&(t.stencilOp(St,bi,Si),Me=St,qe=bi,rt=Si)},setLocked:function(St){re=St},setClear:function(St){Lt!==St&&(t.clearStencil(St),Lt=St)},reset:function(){re=!1,Le=null,Fe=null,Be=null,Ne=null,Me=null,qe=null,rt=null,Lt=null}}}const o=new n,s=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,x=null,M=null,y=null,P=null,L=null,B=new wt(0,0,0),_=0,S=!1,R=null,A=null,C=null,H=null,w=null;const O=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let T=!1,N=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(z)[1]),T=N>=1):z.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),T=N>=2);let X=null,Z={};const ne=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),de=new zt().fromArray(ne),we=new zt().fromArray(Q);function te(re,Le,Fe,Be){const Ne=new Uint8Array(4),Me=t.createTexture();t.bindTexture(re,Me),t.texParameteri(re,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(re,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<Fe;qe++)re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?t.texImage3D(Le,0,t.RGBA,1,1,Be,0,t.RGBA,t.UNSIGNED_BYTE,Ne):t.texImage2D(Le+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ne);return Me}const D={};D[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),D[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),D[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),D[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),a.setClear(0),K(t.DEPTH_TEST),s.setFunc(ts),k(!1),W(Fp),K(t.CULL_FACE),F($i);function K(re){c[re]!==!0&&(t.enable(re),c[re]=!0)}function se(re){c[re]!==!1&&(t.disable(re),c[re]=!1)}function be(re,Le){return d[re]!==Le?(t.bindFramebuffer(re,Le),d[re]=Le,re===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Le),re===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Le),!0):!1}function Se(re,Le){let Fe=h,Be=!1;if(re){Fe=f.get(Le),Fe===void 0&&(Fe=[],f.set(Le,Fe));const Ne=re.textures;if(Fe.length!==Ne.length||Fe[0]!==t.COLOR_ATTACHMENT0){for(let Me=0,qe=Ne.length;Me<qe;Me++)Fe[Me]=t.COLOR_ATTACHMENT0+Me;Fe.length=Ne.length,Be=!0}}else Fe[0]!==t.BACK&&(Fe[0]=t.BACK,Be=!0);Be&&t.drawBuffers(Fe)}function Re(re){return g!==re?(t.useProgram(re),g=re,!0):!1}const $={[Yr]:t.FUNC_ADD,[M1]:t.FUNC_SUBTRACT,[w1]:t.FUNC_REVERSE_SUBTRACT};$[E1]=t.MIN,$[T1]=t.MAX;const G={[A1]:t.ZERO,[C1]:t.ONE,[R1]:t.SRC_COLOR,[Ed]:t.SRC_ALPHA,[F1]:t.SRC_ALPHA_SATURATE,[D1]:t.DST_COLOR,[P1]:t.DST_ALPHA,[I1]:t.ONE_MINUS_SRC_COLOR,[Td]:t.ONE_MINUS_SRC_ALPHA,[L1]:t.ONE_MINUS_DST_COLOR,[N1]:t.ONE_MINUS_DST_ALPHA,[U1]:t.CONSTANT_COLOR,[O1]:t.ONE_MINUS_CONSTANT_COLOR,[B1]:t.CONSTANT_ALPHA,[k1]:t.ONE_MINUS_CONSTANT_ALPHA};function F(re,Le,Fe,Be,Ne,Me,qe,rt,Lt,St){if(re===$i){v===!0&&(se(t.BLEND),v=!1);return}if(v===!1&&(K(t.BLEND),v=!0),re!==S1){if(re!==m||St!==S){if((p!==Yr||y!==Yr)&&(t.blendEquation(t.FUNC_ADD),p=Yr,y=Yr),St)switch(re){case Wo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Up:t.blendFunc(t.ONE,t.ONE);break;case Op:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:_t("WebGLState: Invalid blending: ",re);break}else switch(re){case Wo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Up:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Op:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bp:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",re);break}x=null,M=null,P=null,L=null,B.set(0,0,0),_=0,m=re,S=St}return}Ne=Ne||Le,Me=Me||Fe,qe=qe||Be,(Le!==p||Ne!==y)&&(t.blendEquationSeparate($[Le],$[Ne]),p=Le,y=Ne),(Fe!==x||Be!==M||Me!==P||qe!==L)&&(t.blendFuncSeparate(G[Fe],G[Be],G[Me],G[qe]),x=Fe,M=Be,P=Me,L=qe),(rt.equals(B)===!1||Lt!==_)&&(t.blendColor(rt.r,rt.g,rt.b,Lt),B.copy(rt),_=Lt),m=re,S=!1}function U(re,Le){re.side===Fi?se(t.CULL_FACE):K(t.CULL_FACE);let Fe=re.side===wn;Le&&(Fe=!Fe),k(Fe),re.blending===Wo&&re.transparent===!1?F($i):F(re.blending,re.blendEquation,re.blendSrc,re.blendDst,re.blendEquationAlpha,re.blendSrcAlpha,re.blendDstAlpha,re.blendColor,re.blendAlpha,re.premultipliedAlpha),s.setFunc(re.depthFunc),s.setTest(re.depthTest),s.setMask(re.depthWrite),o.setMask(re.colorWrite);const Be=re.stencilWrite;a.setTest(Be),Be&&(a.setMask(re.stencilWriteMask),a.setFunc(re.stencilFunc,re.stencilRef,re.stencilFuncMask),a.setOp(re.stencilFail,re.stencilZFail,re.stencilZPass)),q(re.polygonOffset,re.polygonOffsetFactor,re.polygonOffsetUnits),re.alphaToCoverage===!0?K(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function k(re){R!==re&&(re?t.frontFace(t.CW):t.frontFace(t.CCW),R=re)}function W(re){re!==y1?(K(t.CULL_FACE),re!==A&&(re===Fp?t.cullFace(t.BACK):re===x1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),A=re}function b(re){re!==C&&(T&&t.lineWidth(re),C=re)}function q(re,Le,Fe){re?(K(t.POLYGON_OFFSET_FILL),(H!==Le||w!==Fe)&&(H=Le,w=Fe,s.getReversed()&&(Le=-Le),t.polygonOffset(Le,Fe))):se(t.POLYGON_OFFSET_FILL)}function J(re){re?K(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function ee(re){re===void 0&&(re=t.TEXTURE0+O-1),X!==re&&(t.activeTexture(re),X=re)}function ie(re,Le,Fe){Fe===void 0&&(X===null?Fe=t.TEXTURE0+O-1:Fe=X);let Be=Z[Fe];Be===void 0&&(Be={type:void 0,texture:void 0},Z[Fe]=Be),(Be.type!==re||Be.texture!==Le)&&(X!==Fe&&(t.activeTexture(Fe),X=Fe),t.bindTexture(re,Le||D[re]),Be.type=re,Be.texture=Le)}function I(){const re=Z[X];re!==void 0&&re.type!==void 0&&(t.bindTexture(re.type,null),re.type=void 0,re.texture=void 0)}function E(){try{t.compressedTexImage2D(...arguments)}catch(re){_t("WebGLState:",re)}}function Y(){try{t.compressedTexImage3D(...arguments)}catch(re){_t("WebGLState:",re)}}function ae(){try{t.texSubImage2D(...arguments)}catch(re){_t("WebGLState:",re)}}function me(){try{t.texSubImage3D(...arguments)}catch(re){_t("WebGLState:",re)}}function fe(){try{t.compressedTexSubImage2D(...arguments)}catch(re){_t("WebGLState:",re)}}function Ue(){try{t.compressedTexSubImage3D(...arguments)}catch(re){_t("WebGLState:",re)}}function Ie(){try{t.texStorage2D(...arguments)}catch(re){_t("WebGLState:",re)}}function He(){try{t.texStorage3D(...arguments)}catch(re){_t("WebGLState:",re)}}function Ye(){try{t.texImage2D(...arguments)}catch(re){_t("WebGLState:",re)}}function Pe(){try{t.texImage3D(...arguments)}catch(re){_t("WebGLState:",re)}}function ue(re){de.equals(re)===!1&&(t.scissor(re.x,re.y,re.z,re.w),de.copy(re))}function oe(re){we.equals(re)===!1&&(t.viewport(re.x,re.y,re.z,re.w),we.copy(re))}function Ee(re,Le){let Fe=u.get(Le);Fe===void 0&&(Fe=new WeakMap,u.set(Le,Fe));let Be=Fe.get(re);Be===void 0&&(Be=t.getUniformBlockIndex(Le,re.name),Fe.set(re,Be))}function De(re,Le){const Be=u.get(Le).get(re);l.get(Le)!==Be&&(t.uniformBlockBinding(Le,Be,re.__bindingPointIndex),l.set(Le,Be))}function Qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),s.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},X=null,Z={},d={},f=new WeakMap,h=[],g=null,v=!1,m=null,p=null,x=null,M=null,y=null,P=null,L=null,B=new wt(0,0,0),_=0,S=!1,R=null,A=null,C=null,H=null,w=null,de.set(0,0,t.canvas.width,t.canvas.height),we.set(0,0,t.canvas.width,t.canvas.height),o.reset(),s.reset(),a.reset()}return{buffers:{color:o,depth:s,stencil:a},enable:K,disable:se,bindFramebuffer:be,drawBuffers:Se,useProgram:Re,setBlending:F,setMaterial:U,setFlipSided:k,setCullFace:W,setLineWidth:b,setPolygonOffset:q,setScissorTest:J,activeTexture:ee,bindTexture:ie,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:Ye,texImage3D:Pe,updateUBOMapping:Ee,uniformBlockBinding:De,texStorage2D:Ie,texStorage3D:He,texSubImage2D:ae,texSubImage3D:me,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ue,scissor:ue,viewport:oe,reset:Qe}}function xA(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Et,c=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,E){return h?new OffscreenCanvas(I,E):eu("canvas")}function v(I,E,Y){let ae=1;const me=ie(I);if((me.width>Y||me.height>Y)&&(ae=Y/Math.max(me.width,me.height)),ae<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const fe=Math.floor(ae*me.width),Ue=Math.floor(ae*me.height);d===void 0&&(d=g(fe,Ue));const Ie=E?g(fe,Ue):d;return Ie.width=fe,Ie.height=Ue,Ie.getContext("2d").drawImage(I,0,0,fe,Ue),ot("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+fe+"x"+Ue+")."),Ie}else return"data"in I&&ot("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),I;return I}function m(I){return I.generateMipmaps}function p(I){t.generateMipmap(I)}function x(I){return I.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?t.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(I,E,Y,ae,me=!1){if(I!==null){if(t[I]!==void 0)return t[I];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let fe=E;if(E===t.RED&&(Y===t.FLOAT&&(fe=t.R32F),Y===t.HALF_FLOAT&&(fe=t.R16F),Y===t.UNSIGNED_BYTE&&(fe=t.R8)),E===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(fe=t.R8UI),Y===t.UNSIGNED_SHORT&&(fe=t.R16UI),Y===t.UNSIGNED_INT&&(fe=t.R32UI),Y===t.BYTE&&(fe=t.R8I),Y===t.SHORT&&(fe=t.R16I),Y===t.INT&&(fe=t.R32I)),E===t.RG&&(Y===t.FLOAT&&(fe=t.RG32F),Y===t.HALF_FLOAT&&(fe=t.RG16F),Y===t.UNSIGNED_BYTE&&(fe=t.RG8)),E===t.RG_INTEGER&&(Y===t.UNSIGNED_BYTE&&(fe=t.RG8UI),Y===t.UNSIGNED_SHORT&&(fe=t.RG16UI),Y===t.UNSIGNED_INT&&(fe=t.RG32UI),Y===t.BYTE&&(fe=t.RG8I),Y===t.SHORT&&(fe=t.RG16I),Y===t.INT&&(fe=t.RG32I)),E===t.RGB_INTEGER&&(Y===t.UNSIGNED_BYTE&&(fe=t.RGB8UI),Y===t.UNSIGNED_SHORT&&(fe=t.RGB16UI),Y===t.UNSIGNED_INT&&(fe=t.RGB32UI),Y===t.BYTE&&(fe=t.RGB8I),Y===t.SHORT&&(fe=t.RGB16I),Y===t.INT&&(fe=t.RGB32I)),E===t.RGBA_INTEGER&&(Y===t.UNSIGNED_BYTE&&(fe=t.RGBA8UI),Y===t.UNSIGNED_SHORT&&(fe=t.RGBA16UI),Y===t.UNSIGNED_INT&&(fe=t.RGBA32UI),Y===t.BYTE&&(fe=t.RGBA8I),Y===t.SHORT&&(fe=t.RGBA16I),Y===t.INT&&(fe=t.RGBA32I)),E===t.RGB&&(Y===t.UNSIGNED_INT_5_9_9_9_REV&&(fe=t.RGB9_E5),Y===t.UNSIGNED_INT_10F_11F_11F_REV&&(fe=t.R11F_G11F_B10F)),E===t.RGBA){const Ue=me?Jl:mt.getTransfer(ae);Y===t.FLOAT&&(fe=t.RGBA32F),Y===t.HALF_FLOAT&&(fe=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(fe=Ue===Mt?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(fe=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(fe=t.RGB5_A1)}return(fe===t.R16F||fe===t.R32F||fe===t.RG16F||fe===t.RG32F||fe===t.RGBA16F||fe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function y(I,E){let Y;return I?E===null||E===vi||E===ta?Y=t.DEPTH24_STENCIL8:E===ui?Y=t.DEPTH32F_STENCIL8:E===ea&&(Y=t.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===vi||E===ta?Y=t.DEPTH_COMPONENT24:E===ui?Y=t.DEPTH_COMPONENT32F:E===ea&&(Y=t.DEPTH_COMPONENT16),Y}function P(I,E){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==tn&&I.minFilter!==Ct?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function L(I){const E=I.target;E.removeEventListener("dispose",L),_(E),E.isVideoTexture&&c.delete(E)}function B(I){const E=I.target;E.removeEventListener("dispose",B),R(E)}function _(I){const E=i.get(I);if(E.__webglInit===void 0)return;const Y=I.source,ae=f.get(Y);if(ae){const me=ae[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&S(I),Object.keys(ae).length===0&&f.delete(Y)}i.remove(I)}function S(I){const E=i.get(I);t.deleteTexture(E.__webglTexture);const Y=I.source,ae=f.get(Y);delete ae[E.__cacheKey],s.memory.textures--}function R(I){const E=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(E.__webglFramebuffer[ae]))for(let me=0;me<E.__webglFramebuffer[ae].length;me++)t.deleteFramebuffer(E.__webglFramebuffer[ae][me]);else t.deleteFramebuffer(E.__webglFramebuffer[ae]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[ae])}else{if(Array.isArray(E.__webglFramebuffer))for(let ae=0;ae<E.__webglFramebuffer.length;ae++)t.deleteFramebuffer(E.__webglFramebuffer[ae]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ae=0;ae<E.__webglColorRenderbuffer.length;ae++)E.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[ae]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=I.textures;for(let ae=0,me=Y.length;ae<me;ae++){const fe=i.get(Y[ae]);fe.__webglTexture&&(t.deleteTexture(fe.__webglTexture),s.memory.textures--),i.remove(Y[ae])}i.remove(I)}let A=0;function C(){A=0}function H(){const I=A;return I>=r.maxTextures&&ot("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),A+=1,I}function w(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function O(I,E){const Y=i.get(I);if(I.isVideoTexture&&J(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Y.__version!==I.version){const ae=I.image;if(ae===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{D(Y,I,E);return}}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+E)}function T(I,E){const Y=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){D(Y,I,E);return}else I.isExternalTexture&&(Y.__webglTexture=I.sourceTexture?I.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+E)}function N(I,E){const Y=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Y.__version!==I.version){D(Y,I,E);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+E)}function z(I,E){const Y=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Y.__version!==I.version){K(Y,I,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+E)}const X={[Ld]:t.REPEAT,[Oi]:t.CLAMP_TO_EDGE,[Fd]:t.MIRRORED_REPEAT},Z={[tn]:t.NEAREST,[$1]:t.NEAREST_MIPMAP_NEAREST,[Ua]:t.NEAREST_MIPMAP_LINEAR,[Ct]:t.LINEAR,[vc]:t.LINEAR_MIPMAP_NEAREST,[Jr]:t.LINEAR_MIPMAP_LINEAR},ne={[X1]:t.NEVER,[j1]:t.ALWAYS,[Y1]:t.LESS,[_h]:t.LEQUAL,[q1]:t.EQUAL,[yh]:t.GEQUAL,[K1]:t.GREATER,[Z1]:t.NOTEQUAL};function Q(I,E){if(E.type===ui&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ct||E.magFilter===vc||E.magFilter===Ua||E.magFilter===Jr||E.minFilter===Ct||E.minFilter===vc||E.minFilter===Ua||E.minFilter===Jr)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(I,t.TEXTURE_WRAP_S,X[E.wrapS]),t.texParameteri(I,t.TEXTURE_WRAP_T,X[E.wrapT]),(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)&&t.texParameteri(I,t.TEXTURE_WRAP_R,X[E.wrapR]),t.texParameteri(I,t.TEXTURE_MAG_FILTER,Z[E.magFilter]),t.texParameteri(I,t.TEXTURE_MIN_FILTER,Z[E.minFilter]),E.compareFunction&&(t.texParameteri(I,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(I,t.TEXTURE_COMPARE_FUNC,ne[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===tn||E.minFilter!==Ua&&E.minFilter!==Jr||E.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");t.texParameterf(I,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function de(I,E){let Y=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",L));const ae=E.source;let me=f.get(ae);me===void 0&&(me={},f.set(ae,me));const fe=w(E);if(fe!==I.__cacheKey){me[fe]===void 0&&(me[fe]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,Y=!0),me[fe].usedTimes++;const Ue=me[I.__cacheKey];Ue!==void 0&&(me[I.__cacheKey].usedTimes--,Ue.usedTimes===0&&S(E)),I.__cacheKey=fe,I.__webglTexture=me[fe].texture}return Y}function we(I,E,Y){return Math.floor(Math.floor(I/Y)/E)}function te(I,E,Y,ae){const fe=I.updateRanges;if(fe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,Y,ae,E.data);else{fe.sort((Pe,ue)=>Pe.start-ue.start);let Ue=0;for(let Pe=1;Pe<fe.length;Pe++){const ue=fe[Ue],oe=fe[Pe],Ee=ue.start+ue.count,De=we(oe.start,E.width,4),Qe=we(ue.start,E.width,4);oe.start<=Ee+1&&De===Qe&&we(oe.start+oe.count-1,E.width,4)===De?ue.count=Math.max(ue.count,oe.start+oe.count-ue.start):(++Ue,fe[Ue]=oe)}fe.length=Ue+1;const Ie=t.getParameter(t.UNPACK_ROW_LENGTH),He=t.getParameter(t.UNPACK_SKIP_PIXELS),Ye=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let Pe=0,ue=fe.length;Pe<ue;Pe++){const oe=fe[Pe],Ee=Math.floor(oe.start/4),De=Math.ceil(oe.count/4),Qe=Ee%E.width,re=Math.floor(Ee/E.width),Le=De,Fe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,re),n.texSubImage2D(t.TEXTURE_2D,0,Qe,re,Le,Fe,Y,ae,E.data)}I.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,Ie),t.pixelStorei(t.UNPACK_SKIP_PIXELS,He),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ye)}}function D(I,E,Y){let ae=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ae=t.TEXTURE_3D);const me=de(I,E),fe=E.source;n.bindTexture(ae,I.__webglTexture,t.TEXTURE0+Y);const Ue=i.get(fe);if(fe.version!==Ue.__version||me===!0){n.activeTexture(t.TEXTURE0+Y);const Ie=mt.getPrimaries(mt.workingColorSpace),He=E.colorSpace===Mr?null:mt.getPrimaries(E.colorSpace),Ye=E.colorSpace===Mr||Ie===He?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Pe=v(E.image,!1,r.maxTextureSize);Pe=ee(E,Pe);const ue=o.convert(E.format,E.colorSpace),oe=o.convert(E.type);let Ee=M(E.internalFormat,ue,oe,E.colorSpace,E.isVideoTexture);Q(ae,E);let De;const Qe=E.mipmaps,re=E.isVideoTexture!==!0,Le=Ue.__version===void 0||me===!0,Fe=fe.dataReady,Be=P(E,Pe);if(E.isDepthTexture)Ee=y(E.format===Qr,E.type),Le&&(re?n.texStorage2D(t.TEXTURE_2D,1,Ee,Pe.width,Pe.height):n.texImage2D(t.TEXTURE_2D,0,Ee,Pe.width,Pe.height,0,ue,oe,null));else if(E.isDataTexture)if(Qe.length>0){re&&Le&&n.texStorage2D(t.TEXTURE_2D,Be,Ee,Qe[0].width,Qe[0].height);for(let Ne=0,Me=Qe.length;Ne<Me;Ne++)De=Qe[Ne],re?Fe&&n.texSubImage2D(t.TEXTURE_2D,Ne,0,0,De.width,De.height,ue,oe,De.data):n.texImage2D(t.TEXTURE_2D,Ne,Ee,De.width,De.height,0,ue,oe,De.data);E.generateMipmaps=!1}else re?(Le&&n.texStorage2D(t.TEXTURE_2D,Be,Ee,Pe.width,Pe.height),Fe&&te(E,Pe,ue,oe)):n.texImage2D(t.TEXTURE_2D,0,Ee,Pe.width,Pe.height,0,ue,oe,Pe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){re&&Le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,Ee,Qe[0].width,Qe[0].height,Pe.depth);for(let Ne=0,Me=Qe.length;Ne<Me;Ne++)if(De=Qe[Ne],E.format!==_n)if(ue!==null)if(re){if(Fe)if(E.layerUpdates.size>0){const qe=sm(De.width,De.height,E.format,E.type);for(const rt of E.layerUpdates){const Lt=De.data.subarray(rt*qe/De.data.BYTES_PER_ELEMENT,(rt+1)*qe/De.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Ne,0,0,rt,De.width,De.height,1,ue,Lt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Ne,0,0,0,De.width,De.height,Pe.depth,ue,De.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Ne,Ee,De.width,De.height,Pe.depth,0,De.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Fe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Ne,0,0,0,De.width,De.height,Pe.depth,ue,oe,De.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Ne,Ee,De.width,De.height,Pe.depth,0,ue,oe,De.data)}else{re&&Le&&n.texStorage2D(t.TEXTURE_2D,Be,Ee,Qe[0].width,Qe[0].height);for(let Ne=0,Me=Qe.length;Ne<Me;Ne++)De=Qe[Ne],E.format!==_n?ue!==null?re?Fe&&n.compressedTexSubImage2D(t.TEXTURE_2D,Ne,0,0,De.width,De.height,ue,De.data):n.compressedTexImage2D(t.TEXTURE_2D,Ne,Ee,De.width,De.height,0,De.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Fe&&n.texSubImage2D(t.TEXTURE_2D,Ne,0,0,De.width,De.height,ue,oe,De.data):n.texImage2D(t.TEXTURE_2D,Ne,Ee,De.width,De.height,0,ue,oe,De.data)}else if(E.isDataArrayTexture)if(re){if(Le&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,Ee,Pe.width,Pe.height,Pe.depth),Fe)if(E.layerUpdates.size>0){const Ne=sm(Pe.width,Pe.height,E.format,E.type);for(const Me of E.layerUpdates){const qe=Pe.data.subarray(Me*Ne/Pe.data.BYTES_PER_ELEMENT,(Me+1)*Ne/Pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Me,Pe.width,Pe.height,1,ue,oe,qe)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Pe.width,Pe.height,Pe.depth,ue,oe,Pe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,Pe.width,Pe.height,Pe.depth,0,ue,oe,Pe.data);else if(E.isData3DTexture)re?(Le&&n.texStorage3D(t.TEXTURE_3D,Be,Ee,Pe.width,Pe.height,Pe.depth),Fe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Pe.width,Pe.height,Pe.depth,ue,oe,Pe.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,Pe.width,Pe.height,Pe.depth,0,ue,oe,Pe.data);else if(E.isFramebufferTexture){if(Le)if(re)n.texStorage2D(t.TEXTURE_2D,Be,Ee,Pe.width,Pe.height);else{let Ne=Pe.width,Me=Pe.height;for(let qe=0;qe<Be;qe++)n.texImage2D(t.TEXTURE_2D,qe,Ee,Ne,Me,0,ue,oe,null),Ne>>=1,Me>>=1}}else if(Qe.length>0){if(re&&Le){const Ne=ie(Qe[0]);n.texStorage2D(t.TEXTURE_2D,Be,Ee,Ne.width,Ne.height)}for(let Ne=0,Me=Qe.length;Ne<Me;Ne++)De=Qe[Ne],re?Fe&&n.texSubImage2D(t.TEXTURE_2D,Ne,0,0,ue,oe,De):n.texImage2D(t.TEXTURE_2D,Ne,Ee,ue,oe,De);E.generateMipmaps=!1}else if(re){if(Le){const Ne=ie(Pe);n.texStorage2D(t.TEXTURE_2D,Be,Ee,Ne.width,Ne.height)}Fe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,oe,Pe)}else n.texImage2D(t.TEXTURE_2D,0,Ee,ue,oe,Pe);m(E)&&p(ae),Ue.__version=fe.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function K(I,E,Y){if(E.image.length!==6)return;const ae=de(I,E),me=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+Y);const fe=i.get(me);if(me.version!==fe.__version||ae===!0){n.activeTexture(t.TEXTURE0+Y);const Ue=mt.getPrimaries(mt.workingColorSpace),Ie=E.colorSpace===Mr?null:mt.getPrimaries(E.colorSpace),He=E.colorSpace===Mr||Ue===Ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const Ye=E.isCompressedTexture||E.image[0].isCompressedTexture,Pe=E.image[0]&&E.image[0].isDataTexture,ue=[];for(let Me=0;Me<6;Me++)!Ye&&!Pe?ue[Me]=v(E.image[Me],!0,r.maxCubemapSize):ue[Me]=Pe?E.image[Me].image:E.image[Me],ue[Me]=ee(E,ue[Me]);const oe=ue[0],Ee=o.convert(E.format,E.colorSpace),De=o.convert(E.type),Qe=M(E.internalFormat,Ee,De,E.colorSpace),re=E.isVideoTexture!==!0,Le=fe.__version===void 0||ae===!0,Fe=me.dataReady;let Be=P(E,oe);Q(t.TEXTURE_CUBE_MAP,E);let Ne;if(Ye){re&&Le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Be,Qe,oe.width,oe.height);for(let Me=0;Me<6;Me++){Ne=ue[Me].mipmaps;for(let qe=0;qe<Ne.length;qe++){const rt=Ne[qe];E.format!==_n?Ee!==null?re?Fe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,rt.width,rt.height,Ee,rt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,Qe,rt.width,rt.height,0,rt.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):re?Fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,0,0,rt.width,rt.height,Ee,De,rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe,Qe,rt.width,rt.height,0,Ee,De,rt.data)}}}else{if(Ne=E.mipmaps,re&&Le){Ne.length>0&&Be++;const Me=ie(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Be,Qe,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Pe){re?Fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,ue[Me].width,ue[Me].height,Ee,De,ue[Me].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Qe,ue[Me].width,ue[Me].height,0,Ee,De,ue[Me].data);for(let qe=0;qe<Ne.length;qe++){const Lt=Ne[qe].image[Me].image;re?Fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,Lt.width,Lt.height,Ee,De,Lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,Qe,Lt.width,Lt.height,0,Ee,De,Lt.data)}}else{re?Fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Ee,De,ue[Me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,Qe,Ee,De,ue[Me]);for(let qe=0;qe<Ne.length;qe++){const rt=Ne[qe];re?Fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,0,0,Ee,De,rt.image[Me]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Me,qe+1,Qe,Ee,De,rt.image[Me])}}}m(E)&&p(t.TEXTURE_CUBE_MAP),fe.__version=me.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function se(I,E,Y,ae,me,fe){const Ue=o.convert(Y.format,Y.colorSpace),Ie=o.convert(Y.type),He=M(Y.internalFormat,Ue,Ie,Y.colorSpace),Ye=i.get(E),Pe=i.get(Y);if(Pe.__renderTarget=E,!Ye.__hasExternalTextures){const ue=Math.max(1,E.width>>fe),oe=Math.max(1,E.height>>fe);me===t.TEXTURE_3D||me===t.TEXTURE_2D_ARRAY?n.texImage3D(me,fe,He,ue,oe,E.depth,0,Ue,Ie,null):n.texImage2D(me,fe,He,ue,oe,0,Ue,Ie,null)}n.bindFramebuffer(t.FRAMEBUFFER,I),q(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,me,Pe.__webglTexture,0,b(E)):(me===t.TEXTURE_2D||me>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,me,Pe.__webglTexture,fe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(I,E,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,I),E.depthBuffer){const ae=E.depthTexture,me=ae&&ae.isDepthTexture?ae.type:null,fe=y(E.stencilBuffer,me),Ue=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;q(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,b(E),fe,E.width,E.height):Y?t.renderbufferStorageMultisample(t.RENDERBUFFER,b(E),fe,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,fe,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ue,t.RENDERBUFFER,I)}else{const ae=E.textures;for(let me=0;me<ae.length;me++){const fe=ae[me],Ue=o.convert(fe.format,fe.colorSpace),Ie=o.convert(fe.type),He=M(fe.internalFormat,Ue,Ie,fe.colorSpace);q(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,b(E),He,E.width,E.height):Y?t.renderbufferStorageMultisample(t.RENDERBUFFER,b(E),He,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,He,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Se(I,E,Y){const ae=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=i.get(E.depthTexture);if(me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ae){if(me.__webglInit===void 0&&(me.__webglInit=!0,E.depthTexture.addEventListener("dispose",L)),me.__webglTexture===void 0){me.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,me.__webglTexture),Q(t.TEXTURE_CUBE_MAP,E.depthTexture);const Ye=o.convert(E.depthTexture.format),Pe=o.convert(E.depthTexture.type);let ue;E.depthTexture.format===ji?ue=t.DEPTH_COMPONENT24:E.depthTexture.format===Qr&&(ue=t.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ue,E.width,E.height,0,Ye,Pe,null)}}else O(E.depthTexture,0);const fe=me.__webglTexture,Ue=b(E),Ie=ae?t.TEXTURE_CUBE_MAP_POSITIVE_X+Y:t.TEXTURE_2D,He=E.depthTexture.format===Qr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===ji)q(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,He,Ie,fe,0,Ue):t.framebufferTexture2D(t.FRAMEBUFFER,He,Ie,fe,0);else if(E.depthTexture.format===Qr)q(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,He,Ie,fe,0,Ue):t.framebufferTexture2D(t.FRAMEBUFFER,He,Ie,fe,0);else throw new Error("Unknown depthTexture format")}function Re(I){const E=i.get(I),Y=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const ae=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ae){const me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ae.removeEventListener("dispose",me)};ae.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=ae}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let ae=0;ae<6;ae++)Se(E.__webglFramebuffer[ae],I,ae);else{const ae=I.texture.mipmaps;ae&&ae.length>0?Se(E.__webglFramebuffer[0],I,0):Se(E.__webglFramebuffer,I,0)}else if(Y){E.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ae]),E.__webglDepthbuffer[ae]===void 0)E.__webglDepthbuffer[ae]=t.createRenderbuffer(),be(E.__webglDepthbuffer[ae],I,!1);else{const me=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[ae];t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,fe)}}else{const ae=I.texture.mipmaps;if(ae&&ae.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),be(E.__webglDepthbuffer,I,!1);else{const me=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,fe),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,fe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function $(I,E,Y){const ae=i.get(I);E!==void 0&&se(ae.__webglFramebuffer,I,I.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&Re(I)}function G(I){const E=I.texture,Y=i.get(I),ae=i.get(E);I.addEventListener("dispose",B);const me=I.textures,fe=I.isWebGLCubeRenderTarget===!0,Ue=me.length>1;if(Ue||(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=E.version,s.memory.textures++),fe){Y.__webglFramebuffer=[];for(let Ie=0;Ie<6;Ie++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Ie]=[];for(let He=0;He<E.mipmaps.length;He++)Y.__webglFramebuffer[Ie][He]=t.createFramebuffer()}else Y.__webglFramebuffer[Ie]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ie=0;Ie<E.mipmaps.length;Ie++)Y.__webglFramebuffer[Ie]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(Ue)for(let Ie=0,He=me.length;Ie<He;Ie++){const Ye=i.get(me[Ie]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=t.createTexture(),s.memory.textures++)}if(I.samples>0&&q(I)===!1){Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ie=0;Ie<me.length;Ie++){const He=me[Ie];Y.__webglColorRenderbuffer[Ie]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[Ie]);const Ye=o.convert(He.format,He.colorSpace),Pe=o.convert(He.type),ue=M(He.internalFormat,Ye,Pe,He.colorSpace,I.isXRRenderTarget===!0),oe=b(I);t.renderbufferStorageMultisample(t.RENDERBUFFER,oe,ue,I.width,I.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.RENDERBUFFER,Y.__webglColorRenderbuffer[Ie])}t.bindRenderbuffer(t.RENDERBUFFER,null),I.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),be(Y.__webglDepthRenderbuffer,I,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(fe){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),Q(t.TEXTURE_CUBE_MAP,E);for(let Ie=0;Ie<6;Ie++)if(E.mipmaps&&E.mipmaps.length>0)for(let He=0;He<E.mipmaps.length;He++)se(Y.__webglFramebuffer[Ie][He],I,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,He);else se(Y.__webglFramebuffer[Ie],I,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0);m(E)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ue){for(let Ie=0,He=me.length;Ie<He;Ie++){const Ye=me[Ie],Pe=i.get(Ye);let ue=t.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ue=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,Pe.__webglTexture),Q(ue,Ye),se(Y.__webglFramebuffer,I,Ye,t.COLOR_ATTACHMENT0+Ie,ue,0),m(Ye)&&p(ue)}n.unbindTexture()}else{let Ie=t.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ie=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ie,ae.__webglTexture),Q(Ie,E),E.mipmaps&&E.mipmaps.length>0)for(let He=0;He<E.mipmaps.length;He++)se(Y.__webglFramebuffer[He],I,E,t.COLOR_ATTACHMENT0,Ie,He);else se(Y.__webglFramebuffer,I,E,t.COLOR_ATTACHMENT0,Ie,0);m(E)&&p(Ie),n.unbindTexture()}I.depthBuffer&&Re(I)}function F(I){const E=I.textures;for(let Y=0,ae=E.length;Y<ae;Y++){const me=E[Y];if(m(me)){const fe=x(I),Ue=i.get(me).__webglTexture;n.bindTexture(fe,Ue),p(fe),n.unbindTexture()}}}const U=[],k=[];function W(I){if(I.samples>0){if(q(I)===!1){const E=I.textures,Y=I.width,ae=I.height;let me=t.COLOR_BUFFER_BIT;const fe=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ue=i.get(I),Ie=E.length>1;if(Ie)for(let Ye=0;Ye<E.length;Ye++)n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const He=I.texture.mipmaps;He&&He.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ye=0;Ye<E.length;Ye++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(me|=t.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(me|=t.STENCIL_BUFFER_BIT)),Ie){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ye]);const Pe=i.get(E[Ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Pe,0)}t.blitFramebuffer(0,0,Y,ae,0,0,Y,ae,me,t.NEAREST),l===!0&&(U.length=0,k.length=0,U.push(t.COLOR_ATTACHMENT0+Ye),I.depthBuffer&&I.resolveDepthBuffer===!1&&(U.push(fe),k.push(fe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,k)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,U))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ie)for(let Ye=0;Ye<E.length;Ye++){n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ye]);const Pe=i.get(E[Ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ye,t.TEXTURE_2D,Pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const E=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function b(I){return Math.min(r.maxSamples,I.samples)}function q(I){const E=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function J(I){const E=s.render.frame;c.get(I)!==E&&(c.set(I,E),I.update())}function ee(I,E){const Y=I.colorSpace,ae=I.format,me=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Y!==Pr&&Y!==Mr&&(mt.getTransfer(Y)===Mt?(ae!==_n||me!==gn)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",Y)),E}function ie(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(u.width=I.naturalWidth||I.width,u.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(u.width=I.displayWidth,u.height=I.displayHeight):(u.width=I.width,u.height=I.height),u}this.allocateTextureUnit=H,this.resetTextureUnits=C,this.setTexture2D=O,this.setTexture2DArray=T,this.setTexture3D=N,this.setTextureCube=z,this.rebindTextures=$,this.setupRenderTarget=G,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=se,this.useMultisampledRTT=q,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function bA(t,e){function n(i,r=Mr){let o;const s=mt.getTransfer(r);if(i===gn)return t.UNSIGNED_BYTE;if(i===hh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ph)return t.UNSIGNED_SHORT_5_5_5_1;if(i===S0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===M0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===x0)return t.BYTE;if(i===b0)return t.SHORT;if(i===ea)return t.UNSIGNED_SHORT;if(i===fh)return t.INT;if(i===vi)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===Zi)return t.HALF_FLOAT;if(i===w0)return t.ALPHA;if(i===E0)return t.RGB;if(i===_n)return t.RGBA;if(i===ji)return t.DEPTH_COMPONENT;if(i===Qr)return t.DEPTH_STENCIL;if(i===T0)return t.RED;if(i===mh)return t.RED_INTEGER;if(i===is)return t.RG;if(i===gh)return t.RG_INTEGER;if(i===vh)return t.RGBA_INTEGER;if(i===Tl||i===Al||i===Cl||i===Rl)if(s===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Tl)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Al)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Cl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Rl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Tl)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Al)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Cl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Rl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ud||i===Od||i===Bd||i===kd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ud)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Od)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zd||i===Vd||i===$d||i===Hd||i===Gd||i===Wd||i===Xd)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===zd||i===Vd)return s===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===$d)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hd)return o.COMPRESSED_R11_EAC;if(i===Gd)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Wd)return o.COMPRESSED_RG11_EAC;if(i===Xd)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yd||i===qd||i===Kd||i===Zd||i===jd||i===Jd||i===Qd||i===ef||i===tf||i===nf||i===rf||i===of||i===sf||i===af)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Yd)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qd)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Kd)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zd)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jd)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jd)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qd)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ef)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===of)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sf)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===af)return s===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lf||i===uf||i===cf)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===lf)return s===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uf)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cf)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===df||i===ff||i===hf||i===pf)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===df)return o.COMPRESSED_RED_RGTC1_EXT;if(i===ff)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hf)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pf)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ta?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const SA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MA=`
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

}`;class wA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new U0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Zn({vertexShader:SA,fragmentShader:MA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _i(new wa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EA extends ds{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,h=null,g=null;const v=typeof XRWebGLBinding<"u",m=new wA,p={},x=n.getContextAttributes();let M=null,y=null;const P=[],L=[],B=new Et;let _=null;const S=new $n;S.viewport=new zt;const R=new $n;R.viewport=new zt;const A=[S,R],C=new OS;let H=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let K=P[D];return K===void 0&&(K=new Ec,P[D]=K),K.getTargetRaySpace()},this.getControllerGrip=function(D){let K=P[D];return K===void 0&&(K=new Ec,P[D]=K),K.getGripSpace()},this.getHand=function(D){let K=P[D];return K===void 0&&(K=new Ec,P[D]=K),K.getHandSpace()};function O(D){const K=L.indexOf(D.inputSource);if(K===-1)return;const se=P[K];se!==void 0&&(se.update(D.inputSource,D.frame,u||s),se.dispatchEvent({type:D.type,data:D.inputSource}))}function T(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",T),r.removeEventListener("inputsourceschange",N);for(let D=0;D<P.length;D++){const K=L[D];K!==null&&(L[D]=null,P[D].disconnect(K))}H=null,w=null,m.reset();for(const D in p)delete p[D];e.setRenderTarget(M),h=null,f=null,d=null,r=null,y=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(B.width,B.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){o=D,i.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,i.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(D){u=D},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(D){if(r=D,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",T),r.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(B),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,be=null,Se=null;x.depth&&(Se=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,se=x.stencil?Qr:ji,be=x.stencil?ta:vi);const Re={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:o};d=this.getBinding(),f=d.createProjectionLayer(Re),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new bn(f.textureWidth,f.textureHeight,{format:_n,type:gn,depthTexture:new na(f.textureWidth,f.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(r,n,se),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new bn(h.framebufferWidth,h.framebufferHeight,{format:_n,type:gn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function N(D){for(let K=0;K<D.removed.length;K++){const se=D.removed[K],be=L.indexOf(se);be>=0&&(L[be]=null,P[be].disconnect(se))}for(let K=0;K<D.added.length;K++){const se=D.added[K];let be=L.indexOf(se);if(be===-1){for(let Re=0;Re<P.length;Re++)if(Re>=L.length){L.push(se),be=Re;break}else if(L[Re]===null){L[Re]=se,be=Re;break}if(be===-1)break}const Se=P[be];Se&&Se.connect(se)}}const z=new _e,X=new _e;function Z(D,K,se){z.setFromMatrixPosition(K.matrixWorld),X.setFromMatrixPosition(se.matrixWorld);const be=z.distanceTo(X),Se=K.projectionMatrix.elements,Re=se.projectionMatrix.elements,$=Se[14]/(Se[10]-1),G=Se[14]/(Se[10]+1),F=(Se[9]+1)/Se[5],U=(Se[9]-1)/Se[5],k=(Se[8]-1)/Se[0],W=(Re[8]+1)/Re[0],b=$*k,q=$*W,J=be/(-k+W),ee=J*-k;if(K.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(ee),D.translateZ(J),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert(),Se[10]===-1)D.projectionMatrix.copy(K.projectionMatrix),D.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const ie=$+J,I=G+J,E=b-ee,Y=q+(be-ee),ae=F*G/I*ie,me=U*G/I*ie;D.projectionMatrix.makePerspective(E,Y,ae,me,ie,I),D.projectionMatrixInverse.copy(D.projectionMatrix).invert()}}function ne(D,K){K===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(K.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(r===null)return;let K=D.near,se=D.far;m.texture!==null&&(m.depthNear>0&&(K=m.depthNear),m.depthFar>0&&(se=m.depthFar)),C.near=R.near=S.near=K,C.far=R.far=S.far=se,(H!==C.near||w!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,w=C.far),C.layers.mask=D.layers.mask|6,S.layers.mask=C.layers.mask&-5,R.layers.mask=C.layers.mask&-3;const be=D.parent,Se=C.cameras;ne(C,be);for(let Re=0;Re<Se.length;Re++)ne(Se[Re],be);Se.length===2?Z(C,S,R):C.projectionMatrix.copy(S.projectionMatrix),Q(D,C,be)};function Q(D,K,se){se===null?D.matrix.copy(K.matrixWorld):(D.matrix.copy(se.matrixWorld),D.matrix.invert(),D.matrix.multiply(K.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(K.projectionMatrix),D.projectionMatrixInverse.copy(K.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=mf*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(D){l=D,f!==null&&(f.fixedFoveation=D),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=D)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(D){return p[D]};let de=null;function we(D,K){if(c=K.getViewerPose(u||s),g=K,c!==null){const se=c.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let be=!1;se.length!==C.cameras.length&&(C.cameras.length=0,be=!0);for(let G=0;G<se.length;G++){const F=se[G];let U=null;if(h!==null)U=h.getViewport(F);else{const W=d.getViewSubImage(f,F);U=W.viewport,G===0&&(e.setRenderTargetTextures(y,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(y))}let k=A[G];k===void 0&&(k=new $n,k.layers.enable(G),k.viewport=new zt,A[G]=k),k.matrix.fromArray(F.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(F.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(U.x,U.y,U.width,U.height),G===0&&(C.matrix.copy(k.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),be===!0&&C.cameras.push(k)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const G=d.getDepthInformation(se[0]);G&&G.isValid&&G.texture&&m.init(G,r.renderState)}if(Se&&Se.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let G=0;G<se.length;G++){const F=se[G].camera;if(F){let U=p[F];U||(U=new U0,p[F]=U);const k=d.getCameraImage(F);U.sourceTexture=k}}}}for(let se=0;se<P.length;se++){const be=L[se],Se=P[se];be!==null&&Se!==void 0&&Se.update(be,K,u||s)}de&&de(D,K),K.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:K}),g=null}const te=new k0;te.setAnimationLoop(we),this.setAnimationLoop=function(D){de=D},this.dispose=function(){}}}const Gr=new Ji,TA=new Wt;function AA(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,O0(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,x,M,y){p.isMeshBasicMaterial?o(m,p):p.isMeshLambertMaterial?(o(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(o(m,p),d(m,p)):p.isMeshPhongMaterial?(o(m,p),c(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(o(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),v(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,M):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===wn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===wn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),M=x.envMap,y=x.envMapRotation;M&&(m.envMap.value=M,Gr.copy(y),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),m.envMapRotation.value.setFromMatrix4(TA.makeRotationFromEuler(Gr)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=M*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===wn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function CA(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){const y=M.program;i.uniformBlockBinding(x,y)}function u(x,M){let y=r[x.id];y===void 0&&(g(x),y=c(x),r[x.id]=y,x.addEventListener("dispose",m));const P=M.program;i.updateUBOMapping(x,P);const L=e.render.frame;o[x.id]!==L&&(f(x),o[x.id]=L)}function c(x){const M=d();x.__bindingPointIndex=M;const y=t.createBuffer(),P=x.__size,L=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,P,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,y),y}function d(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const M=r[x.id],y=x.uniforms,P=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let L=0,B=y.length;L<B;L++){const _=Array.isArray(y[L])?y[L]:[y[L]];for(let S=0,R=_.length;S<R;S++){const A=_[S];if(h(A,L,S,P)===!0){const C=A.__offset,H=Array.isArray(A.value)?A.value:[A.value];let w=0;for(let O=0;O<H.length;O++){const T=H[O],N=v(T);typeof T=="number"||typeof T=="boolean"?(A.__data[0]=T,t.bufferSubData(t.UNIFORM_BUFFER,C+w,A.__data)):T.isMatrix3?(A.__data[0]=T.elements[0],A.__data[1]=T.elements[1],A.__data[2]=T.elements[2],A.__data[3]=0,A.__data[4]=T.elements[3],A.__data[5]=T.elements[4],A.__data[6]=T.elements[5],A.__data[7]=0,A.__data[8]=T.elements[6],A.__data[9]=T.elements[7],A.__data[10]=T.elements[8],A.__data[11]=0):(T.toArray(A.__data,w),w+=N.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,C,A.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(x,M,y,P){const L=x.value,B=M+"_"+y;if(P[B]===void 0)return typeof L=="number"||typeof L=="boolean"?P[B]=L:P[B]=L.clone(),!0;{const _=P[B];if(typeof L=="number"||typeof L=="boolean"){if(_!==L)return P[B]=L,!0}else if(_.equals(L)===!1)return _.copy(L),!0}return!1}function g(x){const M=x.uniforms;let y=0;const P=16;for(let B=0,_=M.length;B<_;B++){const S=Array.isArray(M[B])?M[B]:[M[B]];for(let R=0,A=S.length;R<A;R++){const C=S[R],H=Array.isArray(C.value)?C.value:[C.value];for(let w=0,O=H.length;w<O;w++){const T=H[w],N=v(T),z=y%P,X=z%N.boundary,Z=z+X;y+=X,Z!==0&&P-Z<N.storage&&(y+=P-Z),C.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,y+=N.storage}}}const L=y%P;return L>0&&(y+=P-L),x.__size=y,x.__cache={},this}function v(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){const M=x.target;M.removeEventListener("dispose",m);const y=s.indexOf(M.__bindingPointIndex);s.splice(y,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete o[M.id]}function p(){for(const x in r)t.deleteBuffer(r[x]);s=[],r={},o={}}return{bind:l,update:u,dispose:p}}const RA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ni=null;function IA(){return ni===null&&(ni=new MS(RA,16,16,is,Zi),ni.name="DFG_LUT",ni.minFilter=Ct,ni.magFilter=Ct,ni.wrapS=Oi,ni.wrapT=Oi,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class PA{constructor(e={}){const{canvas:n=Q1(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=gn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=s;const v=h,m=new Set([vh,gh,mh]),p=new Set([gn,vi,ea,ta,hh,ph]),x=new Uint32Array(4),M=new Int32Array(4);let y=null,P=null;const L=[],B=[];let _=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let R=!1;this._outputColorSpace=Fn;let A=0,C=0,H=null,w=-1,O=null;const T=new zt,N=new zt;let z=null;const X=new wt(0);let Z=0,ne=n.width,Q=n.height,de=1,we=null,te=null;const D=new zt(0,0,ne,Q),K=new zt(0,0,ne,Q);let se=!1;const be=new L0;let Se=!1,Re=!1;const $=new Wt,G=new _e,F=new zt,U={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let k=!1;function W(){return H===null?de:1}let b=i;function q(V,le){return n.getContext(V,le)}try{const V={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${dh}`),n.addEventListener("webglcontextlost",qe,!1),n.addEventListener("webglcontextrestored",rt,!1),n.addEventListener("webglcontextcreationerror",Lt,!1),b===null){const le="webgl2";if(b=q(le,V),b===null)throw q(le)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(V){throw _t("WebGLRenderer: "+V.message),V}let J,ee,ie,I,E,Y,ae,me,fe,Ue,Ie,He,Ye,Pe,ue,oe,Ee,De,Qe,re,Le,Fe,Be;function Ne(){J=new PE(b),J.init(),Le=new bA(b,J),ee=new ME(b,J,e,Le),ie=new yA(b,J),ee.reversedDepthBuffer&&f&&ie.buffers.depth.setReversed(!0),I=new LE(b),E=new oA,Y=new xA(b,J,ie,E,ee,Le,I),ae=new IE(S),me=new kS(b),Fe=new bE(b,me),fe=new NE(b,me,I,Fe),Ue=new UE(b,fe,me,Fe,I),De=new FE(b,ee,Y),ue=new wE(E),Ie=new rA(S,ae,J,ee,Fe,ue),He=new AA(S,E),Ye=new aA,Pe=new hA(J),Ee=new xE(S,ae,ie,Ue,g,l),oe=new _A(S,Ue,ee),Be=new CA(b,I,ee,ie),Qe=new SE(b,J,I),re=new DE(b,J,I),I.programs=Ie.programs,S.capabilities=ee,S.extensions=J,S.properties=E,S.renderLists=Ye,S.shadowMap=oe,S.state=ie,S.info=I}Ne(),v!==gn&&(_=new BE(v,n.width,n.height,r,o));const Me=new EA(S,b);this.xr=Me,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const V=J.get("WEBGL_lose_context");V&&V.loseContext()},this.forceContextRestore=function(){const V=J.get("WEBGL_lose_context");V&&V.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(V){V!==void 0&&(de=V,this.setSize(ne,Q,!1))},this.getSize=function(V){return V.set(ne,Q)},this.setSize=function(V,le,xe=!0){if(Me.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=V,Q=le,n.width=Math.floor(V*de),n.height=Math.floor(le*de),xe===!0&&(n.style.width=V+"px",n.style.height=le+"px"),_!==null&&_.setSize(n.width,n.height),this.setViewport(0,0,V,le)},this.getDrawingBufferSize=function(V){return V.set(ne*de,Q*de).floor()},this.setDrawingBufferSize=function(V,le,xe){ne=V,Q=le,de=xe,n.width=Math.floor(V*xe),n.height=Math.floor(le*xe),this.setViewport(0,0,V,le)},this.setEffects=function(V){if(v===gn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(V){for(let le=0;le<V.length;le++)if(V[le].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(V||[])},this.getCurrentViewport=function(V){return V.copy(T)},this.getViewport=function(V){return V.copy(D)},this.setViewport=function(V,le,xe,ge){V.isVector4?D.set(V.x,V.y,V.z,V.w):D.set(V,le,xe,ge),ie.viewport(T.copy(D).multiplyScalar(de).round())},this.getScissor=function(V){return V.copy(K)},this.setScissor=function(V,le,xe,ge){V.isVector4?K.set(V.x,V.y,V.z,V.w):K.set(V,le,xe,ge),ie.scissor(N.copy(K).multiplyScalar(de).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(V){ie.setScissorTest(se=V)},this.setOpaqueSort=function(V){we=V},this.setTransparentSort=function(V){te=V},this.getClearColor=function(V){return V.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(V=!0,le=!0,xe=!0){let ge=0;if(V){let pe=!1;if(H!==null){const ze=H.texture.format;pe=m.has(ze)}if(pe){const ze=H.texture.type,Ge=p.has(ze),Ve=Ee.getClearColor(),Ke=Ee.getClearAlpha(),je=Ve.r,at=Ve.g,ft=Ve.b;Ge?(x[0]=je,x[1]=at,x[2]=ft,x[3]=Ke,b.clearBufferuiv(b.COLOR,0,x)):(M[0]=je,M[1]=at,M[2]=ft,M[3]=Ke,b.clearBufferiv(b.COLOR,0,M))}else ge|=b.COLOR_BUFFER_BIT}le&&(ge|=b.DEPTH_BUFFER_BIT),xe&&(ge|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ge!==0&&b.clear(ge)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",qe,!1),n.removeEventListener("webglcontextrestored",rt,!1),n.removeEventListener("webglcontextcreationerror",Lt,!1),Ee.dispose(),Ye.dispose(),Pe.dispose(),E.dispose(),ae.dispose(),Ue.dispose(),Fe.dispose(),Be.dispose(),Ie.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Yh),Me.removeEventListener("sessionend",qh),Fr.stop()};function qe(V){V.preventDefault(),Hp("WebGLRenderer: Context Lost."),R=!0}function rt(){Hp("WebGLRenderer: Context Restored."),R=!1;const V=I.autoReset,le=oe.enabled,xe=oe.autoUpdate,ge=oe.needsUpdate,pe=oe.type;Ne(),I.autoReset=V,oe.enabled=le,oe.autoUpdate=xe,oe.needsUpdate=ge,oe.type=pe}function Lt(V){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",V.statusMessage)}function St(V){const le=V.target;le.removeEventListener("dispose",St),bi(le)}function bi(V){Si(V),E.remove(V)}function Si(V){const le=E.get(V).programs;le!==void 0&&(le.forEach(function(xe){Ie.releaseProgram(xe)}),V.isShaderMaterial&&Ie.releaseShaderCache(V))}this.renderBufferDirect=function(V,le,xe,ge,pe,ze){le===null&&(le=U);const Ge=pe.isMesh&&pe.matrixWorld.determinant()<0,Ve=Oy(V,le,xe,ge,pe);ie.setMaterial(ge,Ge);let Ke=xe.index,je=1;if(ge.wireframe===!0){if(Ke=fe.getWireframeAttribute(xe),Ke===void 0)return;je=2}const at=xe.drawRange,ft=xe.attributes.position;let Je=at.start*je,Tt=(at.start+at.count)*je;ze!==null&&(Je=Math.max(Je,ze.start*je),Tt=Math.min(Tt,(ze.start+ze.count)*je)),Ke!==null?(Je=Math.max(Je,0),Tt=Math.min(Tt,Ke.count)):ft!=null&&(Je=Math.max(Je,0),Tt=Math.min(Tt,ft.count));const kt=Tt-Je;if(kt<0||kt===1/0)return;Fe.setup(pe,ge,Ve,xe,Ke);let Bt,At=Qe;if(Ke!==null&&(Bt=me.get(Ke),At=re,At.setIndex(Bt)),pe.isMesh)ge.wireframe===!0?(ie.setLineWidth(ge.wireframeLinewidth*W()),At.setMode(b.LINES)):At.setMode(b.TRIANGLES);else if(pe.isLine){let on=ge.linewidth;on===void 0&&(on=1),ie.setLineWidth(on*W()),pe.isLineSegments?At.setMode(b.LINES):pe.isLineLoop?At.setMode(b.LINE_LOOP):At.setMode(b.LINE_STRIP)}else pe.isPoints?At.setMode(b.POINTS):pe.isSprite&&At.setMode(b.TRIANGLES);if(pe.isBatchedMesh)if(pe._multiDrawInstances!==null)tu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount,pe._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))At.renderMultiDraw(pe._multiDrawStarts,pe._multiDrawCounts,pe._multiDrawCount);else{const on=pe._multiDrawStarts,Ze=pe._multiDrawCounts,Tn=pe._multiDrawCount,gt=Ke?me.get(Ke).bytesPerElement:1,Bn=E.get(ge).currentProgram.getUniforms();for(let Qn=0;Qn<Tn;Qn++)Bn.setValue(b,"_gl_DrawID",Qn),At.render(on[Qn]/gt,Ze[Qn])}else if(pe.isInstancedMesh)At.renderInstances(Je,kt,pe.count);else if(xe.isInstancedBufferGeometry){const on=xe._maxInstanceCount!==void 0?xe._maxInstanceCount:1/0,Ze=Math.min(xe.instanceCount,on);At.renderInstances(Je,kt,Ze)}else At.render(Je,kt)};function Xh(V,le,xe){V.transparent===!0&&V.side===Fi&&V.forceSinglePass===!1?(V.side=wn,V.needsUpdate=!0,Pa(V,le,xe),V.side=Ir,V.needsUpdate=!0,Pa(V,le,xe),V.side=Fi):Pa(V,le,xe)}this.compile=function(V,le,xe=null){xe===null&&(xe=V),P=Pe.get(xe),P.init(le),B.push(P),xe.traverseVisible(function(pe){pe.isLight&&pe.layers.test(le.layers)&&(P.pushLight(pe),pe.castShadow&&P.pushShadow(pe))}),V!==xe&&V.traverseVisible(function(pe){pe.isLight&&pe.layers.test(le.layers)&&(P.pushLight(pe),pe.castShadow&&P.pushShadow(pe))}),P.setupLights();const ge=new Set;return V.traverse(function(pe){if(!(pe.isMesh||pe.isPoints||pe.isLine||pe.isSprite))return;const ze=pe.material;if(ze)if(Array.isArray(ze))for(let Ge=0;Ge<ze.length;Ge++){const Ve=ze[Ge];Xh(Ve,xe,pe),ge.add(Ve)}else Xh(ze,xe,pe),ge.add(ze)}),P=B.pop(),ge},this.compileAsync=function(V,le,xe=null){const ge=this.compile(V,le,xe);return new Promise(pe=>{function ze(){if(ge.forEach(function(Ge){E.get(Ge).currentProgram.isReady()&&ge.delete(Ge)}),ge.size===0){pe(V);return}setTimeout(ze,10)}J.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let tc=null;function Uy(V){tc&&tc(V)}function Yh(){Fr.stop()}function qh(){Fr.start()}const Fr=new k0;Fr.setAnimationLoop(Uy),typeof self<"u"&&Fr.setContext(self),this.setAnimationLoop=function(V){tc=V,Me.setAnimationLoop(V),V===null?Fr.stop():Fr.start()},Me.addEventListener("sessionstart",Yh),Me.addEventListener("sessionend",qh),this.render=function(V,le){if(le!==void 0&&le.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const xe=Me.enabled===!0&&Me.isPresenting===!0,ge=_!==null&&(H===null||xe)&&_.begin(S,H);if(V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),le.parent===null&&le.matrixWorldAutoUpdate===!0&&le.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(le),le=Me.getCamera()),V.isScene===!0&&V.onBeforeRender(S,V,le,H),P=Pe.get(V,B.length),P.init(le),B.push(P),$.multiplyMatrices(le.projectionMatrix,le.matrixWorldInverse),be.setFromProjectionMatrix($,ci,le.reversedDepth),Re=this.localClippingEnabled,Se=ue.init(this.clippingPlanes,Re),y=Ye.get(V,L.length),y.init(),L.push(y),Me.enabled===!0&&Me.isPresenting===!0){const Ge=S.xr.getDepthSensingMesh();Ge!==null&&nc(Ge,le,-1/0,S.sortObjects)}nc(V,le,0,S.sortObjects),y.finish(),S.sortObjects===!0&&y.sort(we,te),k=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,k&&Ee.addToRenderList(y,V),this.info.render.frame++,Se===!0&&ue.beginShadows();const pe=P.state.shadowsArray;if(oe.render(pe,V,le),Se===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ge&&_.hasRenderPass())===!1){const Ge=y.opaque,Ve=y.transmissive;if(P.setupLights(),le.isArrayCamera){const Ke=le.cameras;if(Ve.length>0)for(let je=0,at=Ke.length;je<at;je++){const ft=Ke[je];Zh(Ge,Ve,V,ft)}k&&Ee.render(V);for(let je=0,at=Ke.length;je<at;je++){const ft=Ke[je];Kh(y,V,ft,ft.viewport)}}else Ve.length>0&&Zh(Ge,Ve,V,le),k&&Ee.render(V),Kh(y,V,le)}H!==null&&C===0&&(Y.updateMultisampleRenderTarget(H),Y.updateRenderTargetMipmap(H)),ge&&_.end(S),V.isScene===!0&&V.onAfterRender(S,V,le),Fe.resetDefaultState(),w=-1,O=null,B.pop(),B.length>0?(P=B[B.length-1],Se===!0&&ue.setGlobalState(S.clippingPlanes,P.state.camera)):P=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function nc(V,le,xe,ge){if(V.visible===!1)return;if(V.layers.test(le.layers)){if(V.isGroup)xe=V.renderOrder;else if(V.isLOD)V.autoUpdate===!0&&V.update(le);else if(V.isLight)P.pushLight(V),V.castShadow&&P.pushShadow(V);else if(V.isSprite){if(!V.frustumCulled||be.intersectsSprite(V)){ge&&F.setFromMatrixPosition(V.matrixWorld).applyMatrix4($);const Ge=Ue.update(V),Ve=V.material;Ve.visible&&y.push(V,Ge,Ve,xe,F.z,null)}}else if((V.isMesh||V.isLine||V.isPoints)&&(!V.frustumCulled||be.intersectsObject(V))){const Ge=Ue.update(V),Ve=V.material;if(ge&&(V.boundingSphere!==void 0?(V.boundingSphere===null&&V.computeBoundingSphere(),F.copy(V.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),F.copy(Ge.boundingSphere.center)),F.applyMatrix4(V.matrixWorld).applyMatrix4($)),Array.isArray(Ve)){const Ke=Ge.groups;for(let je=0,at=Ke.length;je<at;je++){const ft=Ke[je],Je=Ve[ft.materialIndex];Je&&Je.visible&&y.push(V,Ge,Je,xe,F.z,ft)}}else Ve.visible&&y.push(V,Ge,Ve,xe,F.z,null)}}const ze=V.children;for(let Ge=0,Ve=ze.length;Ge<Ve;Ge++)nc(ze[Ge],le,xe,ge)}function Kh(V,le,xe,ge){const{opaque:pe,transmissive:ze,transparent:Ge}=V;P.setupLightsView(xe),Se===!0&&ue.setGlobalState(S.clippingPlanes,xe),ge&&ie.viewport(T.copy(ge)),pe.length>0&&Ia(pe,le,xe),ze.length>0&&Ia(ze,le,xe),Ge.length>0&&Ia(Ge,le,xe),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Zh(V,le,xe,ge){if((xe.isScene===!0?xe.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ge.id]===void 0){const Je=J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ge.id]=new bn(1,1,{generateMipmaps:!0,type:Je?Zi:gn,minFilter:Jr,samples:Math.max(4,ee.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace})}const ze=P.state.transmissionRenderTarget[ge.id],Ge=ge.viewport||T;ze.setSize(Ge.z*S.transmissionResolutionScale,Ge.w*S.transmissionResolutionScale);const Ve=S.getRenderTarget(),Ke=S.getActiveCubeFace(),je=S.getActiveMipmapLevel();S.setRenderTarget(ze),S.getClearColor(X),Z=S.getClearAlpha(),Z<1&&S.setClearColor(16777215,.5),S.clear(),k&&Ee.render(xe);const at=S.toneMapping;S.toneMapping=fi;const ft=ge.viewport;if(ge.viewport!==void 0&&(ge.viewport=void 0),P.setupLightsView(ge),Se===!0&&ue.setGlobalState(S.clippingPlanes,ge),Ia(V,xe,ge),Y.updateMultisampleRenderTarget(ze),Y.updateRenderTargetMipmap(ze),J.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Tt=0,kt=le.length;Tt<kt;Tt++){const Bt=le[Tt],{object:At,geometry:on,material:Ze,group:Tn}=Bt;if(Ze.side===Fi&&At.layers.test(ge.layers)){const gt=Ze.side;Ze.side=wn,Ze.needsUpdate=!0,jh(At,xe,ge,on,Ze,Tn),Ze.side=gt,Ze.needsUpdate=!0,Je=!0}}Je===!0&&(Y.updateMultisampleRenderTarget(ze),Y.updateRenderTargetMipmap(ze))}S.setRenderTarget(Ve,Ke,je),S.setClearColor(X,Z),ft!==void 0&&(ge.viewport=ft),S.toneMapping=at}function Ia(V,le,xe){const ge=le.isScene===!0?le.overrideMaterial:null;for(let pe=0,ze=V.length;pe<ze;pe++){const Ge=V[pe],{object:Ve,geometry:Ke,group:je}=Ge;let at=Ge.material;at.allowOverride===!0&&ge!==null&&(at=ge),Ve.layers.test(xe.layers)&&jh(Ve,le,xe,Ke,at,je)}}function jh(V,le,xe,ge,pe,ze){V.onBeforeRender(S,le,xe,ge,pe,ze),V.modelViewMatrix.multiplyMatrices(xe.matrixWorldInverse,V.matrixWorld),V.normalMatrix.getNormalMatrix(V.modelViewMatrix),pe.onBeforeRender(S,le,xe,ge,V,ze),pe.transparent===!0&&pe.side===Fi&&pe.forceSinglePass===!1?(pe.side=wn,pe.needsUpdate=!0,S.renderBufferDirect(xe,le,ge,pe,V,ze),pe.side=Ir,pe.needsUpdate=!0,S.renderBufferDirect(xe,le,ge,pe,V,ze),pe.side=Fi):S.renderBufferDirect(xe,le,ge,pe,V,ze),V.onAfterRender(S,le,xe,ge,pe,ze)}function Pa(V,le,xe){le.isScene!==!0&&(le=U);const ge=E.get(V),pe=P.state.lights,ze=P.state.shadowsArray,Ge=pe.state.version,Ve=Ie.getParameters(V,pe.state,ze,le,xe),Ke=Ie.getProgramCacheKey(Ve);let je=ge.programs;ge.environment=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?le.environment:null,ge.fog=le.fog;const at=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap;ge.envMap=ae.get(V.envMap||ge.environment,at),ge.envMapRotation=ge.environment!==null&&V.envMap===null?le.environmentRotation:V.envMapRotation,je===void 0&&(V.addEventListener("dispose",St),je=new Map,ge.programs=je);let ft=je.get(Ke);if(ft!==void 0){if(ge.currentProgram===ft&&ge.lightsStateVersion===Ge)return Qh(V,Ve),ft}else Ve.uniforms=Ie.getUniforms(V),V.onBeforeCompile(Ve,S),ft=Ie.acquireProgram(Ve,Ke),je.set(Ke,ft),ge.uniforms=Ve.uniforms;const Je=ge.uniforms;return(!V.isShaderMaterial&&!V.isRawShaderMaterial||V.clipping===!0)&&(Je.clippingPlanes=ue.uniform),Qh(V,Ve),ge.needsLights=ky(V),ge.lightsStateVersion=Ge,ge.needsLights&&(Je.ambientLightColor.value=pe.state.ambient,Je.lightProbe.value=pe.state.probe,Je.directionalLights.value=pe.state.directional,Je.directionalLightShadows.value=pe.state.directionalShadow,Je.spotLights.value=pe.state.spot,Je.spotLightShadows.value=pe.state.spotShadow,Je.rectAreaLights.value=pe.state.rectArea,Je.ltc_1.value=pe.state.rectAreaLTC1,Je.ltc_2.value=pe.state.rectAreaLTC2,Je.pointLights.value=pe.state.point,Je.pointLightShadows.value=pe.state.pointShadow,Je.hemisphereLights.value=pe.state.hemi,Je.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,Je.spotLightMatrix.value=pe.state.spotLightMatrix,Je.spotLightMap.value=pe.state.spotLightMap,Je.pointShadowMatrix.value=pe.state.pointShadowMatrix),ge.currentProgram=ft,ge.uniformsList=null,ft}function Jh(V){if(V.uniformsList===null){const le=V.currentProgram.getUniforms();V.uniformsList=Il.seqWithValue(le.seq,V.uniforms)}return V.uniformsList}function Qh(V,le){const xe=E.get(V);xe.outputColorSpace=le.outputColorSpace,xe.batching=le.batching,xe.batchingColor=le.batchingColor,xe.instancing=le.instancing,xe.instancingColor=le.instancingColor,xe.instancingMorph=le.instancingMorph,xe.skinning=le.skinning,xe.morphTargets=le.morphTargets,xe.morphNormals=le.morphNormals,xe.morphColors=le.morphColors,xe.morphTargetsCount=le.morphTargetsCount,xe.numClippingPlanes=le.numClippingPlanes,xe.numIntersection=le.numClipIntersection,xe.vertexAlphas=le.vertexAlphas,xe.vertexTangents=le.vertexTangents,xe.toneMapping=le.toneMapping}function Oy(V,le,xe,ge,pe){le.isScene!==!0&&(le=U),Y.resetTextureUnits();const ze=le.fog,Ge=ge.isMeshStandardMaterial||ge.isMeshLambertMaterial||ge.isMeshPhongMaterial?le.environment:null,Ve=H===null?S.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Pr,Ke=ge.isMeshStandardMaterial||ge.isMeshLambertMaterial&&!ge.envMap||ge.isMeshPhongMaterial&&!ge.envMap,je=ae.get(ge.envMap||Ge,Ke),at=ge.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,ft=!!xe.attributes.tangent&&(!!ge.normalMap||ge.anisotropy>0),Je=!!xe.morphAttributes.position,Tt=!!xe.morphAttributes.normal,kt=!!xe.morphAttributes.color;let Bt=fi;ge.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Bt=S.toneMapping);const At=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,on=At!==void 0?At.length:0,Ze=E.get(ge),Tn=P.state.lights;if(Se===!0&&(Re===!0||V!==O)){const Kt=V===O&&ge.id===w;ue.setState(ge,V,Kt)}let gt=!1;ge.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Tn.state.version||Ze.outputColorSpace!==Ve||pe.isBatchedMesh&&Ze.batching===!1||!pe.isBatchedMesh&&Ze.batching===!0||pe.isBatchedMesh&&Ze.batchingColor===!0&&pe.colorTexture===null||pe.isBatchedMesh&&Ze.batchingColor===!1&&pe.colorTexture!==null||pe.isInstancedMesh&&Ze.instancing===!1||!pe.isInstancedMesh&&Ze.instancing===!0||pe.isSkinnedMesh&&Ze.skinning===!1||!pe.isSkinnedMesh&&Ze.skinning===!0||pe.isInstancedMesh&&Ze.instancingColor===!0&&pe.instanceColor===null||pe.isInstancedMesh&&Ze.instancingColor===!1&&pe.instanceColor!==null||pe.isInstancedMesh&&Ze.instancingMorph===!0&&pe.morphTexture===null||pe.isInstancedMesh&&Ze.instancingMorph===!1&&pe.morphTexture!==null||Ze.envMap!==je||ge.fog===!0&&Ze.fog!==ze||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ue.numPlanes||Ze.numIntersection!==ue.numIntersection)||Ze.vertexAlphas!==at||Ze.vertexTangents!==ft||Ze.morphTargets!==Je||Ze.morphNormals!==Tt||Ze.morphColors!==kt||Ze.toneMapping!==Bt||Ze.morphTargetsCount!==on)&&(gt=!0):(gt=!0,Ze.__version=ge.version);let Bn=Ze.currentProgram;gt===!0&&(Bn=Pa(ge,le,pe));let Qn=!1,Ur=!1,vo=!1;const It=Bn.getUniforms(),Jt=Ze.uniforms;if(ie.useProgram(Bn.program)&&(Qn=!0,Ur=!0,vo=!0),ge.id!==w&&(w=ge.id,Ur=!0),Qn||O!==V){ie.buffers.depth.getReversed()&&V.reversedDepth!==!0&&(V._reversedDepth=!0,V.updateProjectionMatrix()),It.setValue(b,"projectionMatrix",V.projectionMatrix),It.setValue(b,"viewMatrix",V.matrixWorldInverse);const ar=It.map.cameraPosition;ar!==void 0&&ar.setValue(b,G.setFromMatrixPosition(V.matrixWorld)),ee.logarithmicDepthBuffer&&It.setValue(b,"logDepthBufFC",2/(Math.log(V.far+1)/Math.LN2)),(ge.isMeshPhongMaterial||ge.isMeshToonMaterial||ge.isMeshLambertMaterial||ge.isMeshBasicMaterial||ge.isMeshStandardMaterial||ge.isShaderMaterial)&&It.setValue(b,"isOrthographic",V.isOrthographicCamera===!0),O!==V&&(O=V,Ur=!0,vo=!0)}if(Ze.needsLights&&(Tn.state.directionalShadowMap.length>0&&It.setValue(b,"directionalShadowMap",Tn.state.directionalShadowMap,Y),Tn.state.spotShadowMap.length>0&&It.setValue(b,"spotShadowMap",Tn.state.spotShadowMap,Y),Tn.state.pointShadowMap.length>0&&It.setValue(b,"pointShadowMap",Tn.state.pointShadowMap,Y)),pe.isSkinnedMesh){It.setOptional(b,pe,"bindMatrix"),It.setOptional(b,pe,"bindMatrixInverse");const Kt=pe.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),It.setValue(b,"boneTexture",Kt.boneTexture,Y))}pe.isBatchedMesh&&(It.setOptional(b,pe,"batchingTexture"),It.setValue(b,"batchingTexture",pe._matricesTexture,Y),It.setOptional(b,pe,"batchingIdTexture"),It.setValue(b,"batchingIdTexture",pe._indirectTexture,Y),It.setOptional(b,pe,"batchingColorTexture"),pe._colorsTexture!==null&&It.setValue(b,"batchingColorTexture",pe._colorsTexture,Y));const sr=xe.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&De.update(pe,xe,Bn),(Ur||Ze.receiveShadow!==pe.receiveShadow)&&(Ze.receiveShadow=pe.receiveShadow,It.setValue(b,"receiveShadow",pe.receiveShadow)),(ge.isMeshStandardMaterial||ge.isMeshLambertMaterial||ge.isMeshPhongMaterial)&&ge.envMap===null&&le.environment!==null&&(Jt.envMapIntensity.value=le.environmentIntensity),Jt.dfgLUT!==void 0&&(Jt.dfgLUT.value=IA()),Ur&&(It.setValue(b,"toneMappingExposure",S.toneMappingExposure),Ze.needsLights&&By(Jt,vo),ze&&ge.fog===!0&&He.refreshFogUniforms(Jt,ze),He.refreshMaterialUniforms(Jt,ge,de,Q,P.state.transmissionRenderTarget[V.id]),Il.upload(b,Jh(Ze),Jt,Y)),ge.isShaderMaterial&&ge.uniformsNeedUpdate===!0&&(Il.upload(b,Jh(Ze),Jt,Y),ge.uniformsNeedUpdate=!1),ge.isSpriteMaterial&&It.setValue(b,"center",pe.center),It.setValue(b,"modelViewMatrix",pe.modelViewMatrix),It.setValue(b,"normalMatrix",pe.normalMatrix),It.setValue(b,"modelMatrix",pe.matrixWorld),ge.isShaderMaterial||ge.isRawShaderMaterial){const Kt=ge.uniformsGroups;for(let ar=0,_o=Kt.length;ar<_o;ar++){const ep=Kt[ar];Be.update(ep,Bn),Be.bind(ep,Bn)}}return Bn}function By(V,le){V.ambientLightColor.needsUpdate=le,V.lightProbe.needsUpdate=le,V.directionalLights.needsUpdate=le,V.directionalLightShadows.needsUpdate=le,V.pointLights.needsUpdate=le,V.pointLightShadows.needsUpdate=le,V.spotLights.needsUpdate=le,V.spotLightShadows.needsUpdate=le,V.rectAreaLights.needsUpdate=le,V.hemisphereLights.needsUpdate=le}function ky(V){return V.isMeshLambertMaterial||V.isMeshToonMaterial||V.isMeshPhongMaterial||V.isMeshStandardMaterial||V.isShadowMaterial||V.isShaderMaterial&&V.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(V,le,xe){const ge=E.get(V);ge.__autoAllocateDepthBuffer=V.resolveDepthBuffer===!1,ge.__autoAllocateDepthBuffer===!1&&(ge.__useRenderToTexture=!1),E.get(V.texture).__webglTexture=le,E.get(V.depthTexture).__webglTexture=ge.__autoAllocateDepthBuffer?void 0:xe,ge.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(V,le){const xe=E.get(V);xe.__webglFramebuffer=le,xe.__useDefaultFramebuffer=le===void 0};const zy=b.createFramebuffer();this.setRenderTarget=function(V,le=0,xe=0){H=V,A=le,C=xe;let ge=null,pe=!1,ze=!1;if(V){const Ve=E.get(V);if(Ve.__useDefaultFramebuffer!==void 0){ie.bindFramebuffer(b.FRAMEBUFFER,Ve.__webglFramebuffer),T.copy(V.viewport),N.copy(V.scissor),z=V.scissorTest,ie.viewport(T),ie.scissor(N),ie.setScissorTest(z),w=-1;return}else if(Ve.__webglFramebuffer===void 0)Y.setupRenderTarget(V);else if(Ve.__hasExternalTextures)Y.rebindTextures(V,E.get(V.texture).__webglTexture,E.get(V.depthTexture).__webglTexture);else if(V.depthBuffer){const at=V.depthTexture;if(Ve.__boundDepthTexture!==at){if(at!==null&&E.has(at)&&(V.width!==at.image.width||V.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(V)}}const Ke=V.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(ze=!0);const je=E.get(V).__webglFramebuffer;V.isWebGLCubeRenderTarget?(Array.isArray(je[le])?ge=je[le][xe]:ge=je[le],pe=!0):V.samples>0&&Y.useMultisampledRTT(V)===!1?ge=E.get(V).__webglMultisampledFramebuffer:Array.isArray(je)?ge=je[xe]:ge=je,T.copy(V.viewport),N.copy(V.scissor),z=V.scissorTest}else T.copy(D).multiplyScalar(de).floor(),N.copy(K).multiplyScalar(de).floor(),z=se;if(xe!==0&&(ge=zy),ie.bindFramebuffer(b.FRAMEBUFFER,ge)&&ie.drawBuffers(V,ge),ie.viewport(T),ie.scissor(N),ie.setScissorTest(z),pe){const Ve=E.get(V.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve.__webglTexture,xe)}else if(ze){const Ve=le;for(let Ke=0;Ke<V.textures.length;Ke++){const je=E.get(V.textures[Ke]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Ke,je.__webglTexture,xe,Ve)}}else if(V!==null&&xe!==0){const Ve=E.get(V.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ve.__webglTexture,xe)}w=-1},this.readRenderTargetPixels=function(V,le,xe,ge,pe,ze,Ge,Ve=0){if(!(V&&V.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=E.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ke=Ke[Ge]),Ke){ie.bindFramebuffer(b.FRAMEBUFFER,Ke);try{const je=V.textures[Ve],at=je.format,ft=je.type;if(V.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ve),!ee.textureFormatReadable(at)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(ft)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}le>=0&&le<=V.width-ge&&xe>=0&&xe<=V.height-pe&&b.readPixels(le,xe,ge,pe,Le.convert(at),Le.convert(ft),ze)}finally{const je=H!==null?E.get(H).__webglFramebuffer:null;ie.bindFramebuffer(b.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(V,le,xe,ge,pe,ze,Ge,Ve=0){if(!(V&&V.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=E.get(V).__webglFramebuffer;if(V.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ke=Ke[Ge]),Ke)if(le>=0&&le<=V.width-ge&&xe>=0&&xe<=V.height-pe){ie.bindFramebuffer(b.FRAMEBUFFER,Ke);const je=V.textures[Ve],at=je.format,ft=je.type;if(V.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ve),!ee.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Je),b.bufferData(b.PIXEL_PACK_BUFFER,ze.byteLength,b.STREAM_READ),b.readPixels(le,xe,ge,pe,Le.convert(at),Le.convert(ft),0);const Tt=H!==null?E.get(H).__webglFramebuffer:null;ie.bindFramebuffer(b.FRAMEBUFFER,Tt);const kt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await eS(b,kt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Je),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ze),b.deleteBuffer(Je),b.deleteSync(kt),ze}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(V,le=null,xe=0){const ge=Math.pow(2,-xe),pe=Math.floor(V.image.width*ge),ze=Math.floor(V.image.height*ge),Ge=le!==null?le.x:0,Ve=le!==null?le.y:0;Y.setTexture2D(V,0),b.copyTexSubImage2D(b.TEXTURE_2D,xe,0,0,Ge,Ve,pe,ze),ie.unbindTexture()};const Vy=b.createFramebuffer(),$y=b.createFramebuffer();this.copyTextureToTexture=function(V,le,xe=null,ge=null,pe=0,ze=0){let Ge,Ve,Ke,je,at,ft,Je,Tt,kt;const Bt=V.isCompressedTexture?V.mipmaps[ze]:V.image;if(xe!==null)Ge=xe.max.x-xe.min.x,Ve=xe.max.y-xe.min.y,Ke=xe.isBox3?xe.max.z-xe.min.z:1,je=xe.min.x,at=xe.min.y,ft=xe.isBox3?xe.min.z:0;else{const Jt=Math.pow(2,-pe);Ge=Math.floor(Bt.width*Jt),Ve=Math.floor(Bt.height*Jt),V.isDataArrayTexture?Ke=Bt.depth:V.isData3DTexture?Ke=Math.floor(Bt.depth*Jt):Ke=1,je=0,at=0,ft=0}ge!==null?(Je=ge.x,Tt=ge.y,kt=ge.z):(Je=0,Tt=0,kt=0);const At=Le.convert(le.format),on=Le.convert(le.type);let Ze;le.isData3DTexture?(Y.setTexture3D(le,0),Ze=b.TEXTURE_3D):le.isDataArrayTexture||le.isCompressedArrayTexture?(Y.setTexture2DArray(le,0),Ze=b.TEXTURE_2D_ARRAY):(Y.setTexture2D(le,0),Ze=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,le.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,le.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,le.unpackAlignment);const Tn=b.getParameter(b.UNPACK_ROW_LENGTH),gt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Bn=b.getParameter(b.UNPACK_SKIP_PIXELS),Qn=b.getParameter(b.UNPACK_SKIP_ROWS),Ur=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Bt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Bt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,je),b.pixelStorei(b.UNPACK_SKIP_ROWS,at),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ft);const vo=V.isDataArrayTexture||V.isData3DTexture,It=le.isDataArrayTexture||le.isData3DTexture;if(V.isDepthTexture){const Jt=E.get(V),sr=E.get(le),Kt=E.get(Jt.__renderTarget),ar=E.get(sr.__renderTarget);ie.bindFramebuffer(b.READ_FRAMEBUFFER,Kt.__webglFramebuffer),ie.bindFramebuffer(b.DRAW_FRAMEBUFFER,ar.__webglFramebuffer);for(let _o=0;_o<Ke;_o++)vo&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,E.get(V).__webglTexture,pe,ft+_o),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,E.get(le).__webglTexture,ze,kt+_o)),b.blitFramebuffer(je,at,Ge,Ve,Je,Tt,Ge,Ve,b.DEPTH_BUFFER_BIT,b.NEAREST);ie.bindFramebuffer(b.READ_FRAMEBUFFER,null),ie.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(pe!==0||V.isRenderTargetTexture||E.has(V)){const Jt=E.get(V),sr=E.get(le);ie.bindFramebuffer(b.READ_FRAMEBUFFER,Vy),ie.bindFramebuffer(b.DRAW_FRAMEBUFFER,$y);for(let Kt=0;Kt<Ke;Kt++)vo?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Jt.__webglTexture,pe,ft+Kt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Jt.__webglTexture,pe),It?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,sr.__webglTexture,ze,kt+Kt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,sr.__webglTexture,ze),pe!==0?b.blitFramebuffer(je,at,Ge,Ve,Je,Tt,Ge,Ve,b.COLOR_BUFFER_BIT,b.NEAREST):It?b.copyTexSubImage3D(Ze,ze,Je,Tt,kt+Kt,je,at,Ge,Ve):b.copyTexSubImage2D(Ze,ze,Je,Tt,je,at,Ge,Ve);ie.bindFramebuffer(b.READ_FRAMEBUFFER,null),ie.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else It?V.isDataTexture||V.isData3DTexture?b.texSubImage3D(Ze,ze,Je,Tt,kt,Ge,Ve,Ke,At,on,Bt.data):le.isCompressedArrayTexture?b.compressedTexSubImage3D(Ze,ze,Je,Tt,kt,Ge,Ve,Ke,At,Bt.data):b.texSubImage3D(Ze,ze,Je,Tt,kt,Ge,Ve,Ke,At,on,Bt):V.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,ze,Je,Tt,Ge,Ve,At,on,Bt.data):V.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,ze,Je,Tt,Bt.width,Bt.height,At,Bt.data):b.texSubImage2D(b.TEXTURE_2D,ze,Je,Tt,Ge,Ve,At,on,Bt);b.pixelStorei(b.UNPACK_ROW_LENGTH,Tn),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,gt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Bn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Qn),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ur),ze===0&&le.generateMipmaps&&b.generateMipmap(Ze),ie.unbindTexture()},this.initRenderTarget=function(V){E.get(V).__webglFramebuffer===void 0&&Y.setupRenderTarget(V)},this.initTexture=function(V){V.isCubeTexture?Y.setTextureCube(V,0):V.isData3DTexture?Y.setTexture3D(V,0):V.isDataArrayTexture||V.isCompressedArrayTexture?Y.setTexture2DArray(V,0):Y.setTexture2D(V,0),ie.unbindTexture()},this.resetState=function(){A=0,C=0,H=null,ie.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=mt._getUnpackColorSpace()}}const NA=""+new URL("../mangleditor-icon.png",import.meta.url).href,or=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},DA={class:"top-bar"},LA=["value"],FA=["title"],UA={key:0,class:"top-bar__slider-group",title:"Workspace Darkness"},OA=["value"],BA={class:"top-bar__status"},kA={__name:"TopBar",props:{isRendering:{type:Boolean,default:!0},previewMode:{type:String,default:"panel"},projectTitle:{type:String,default:"Untitled Project"},bgOpacity:{type:Number,default:.4},showShadows:{type:Boolean,default:!0},isPerformanceMode:{type:Boolean,default:!1}},emits:["save","load","download","import","reset","toggleRender","togglePreview","updateTitle","updateBgOpacity","toggleShadows","openPopup","togglePerformance"],setup(t,{emit:e}){const n=e,i=Ce(null);function r(){i.value?.click()}function o(s){const a=s.target.files?.[0];if(!a)return;const l=new FileReader;l.onload=()=>{n("import",l.result)},l.readAsText(a),s.target.value=""}return(s,a)=>(ce(),ve("div",DA,[a[13]||(a[13]=j("div",{class:"top-bar__logo-container"},[j("img",{src:NA,class:"top-bar__logo-icon",alt:"mangleditor"}),j("span",{class:"top-bar__logo-text"},"mangleditor"),j("span",{class:"top-bar__coded-by"},"coded with love and haste")],-1)),j("input",{class:"top-bar__title-input",type:"text",value:t.projectTitle,onInput:a[0]||(a[0]=l=>s.$emit("updateTitle",l.target.value)),onBlur:a[1]||(a[1]=l=>s.$emit("updateTitle",l.target.value)),placeholder:"Untitled Project",title:"Project title — used for save/export filenames"},null,40,LA),a[14]||(a[14]=j("div",{class:"top-bar__divider"},null,-1)),j("button",{class:"top-bar__btn",onClick:a[2]||(a[2]=l=>s.$emit("save")),title:"Save to browser"}," 💾 Save "),j("button",{class:"top-bar__btn",onClick:a[3]||(a[3]=l=>s.$emit("load")),title:"Load from browser"}," 📂 Load "),j("button",{class:"top-bar__btn",onClick:a[4]||(a[4]=l=>s.$emit("download")),title:"Download graph as JSON"}," ⬇ Download "),j("button",{class:"top-bar__btn",onClick:r,title:"Import graph JSON"}," ⬆ Import "),j("input",{ref_key:"importInput",ref:i,type:"file",accept:".json",class:"file-input-hidden",onChange:o},null,544),a[15]||(a[15]=j("div",{class:"top-bar__divider"},null,-1)),j("button",{class:"top-bar__btn top-bar__btn--danger",onClick:a[5]||(a[5]=l=>s.$emit("reset")),title:"Clear all nodes"}," 🗑 Reset "),a[16]||(a[16]=j("div",{class:"top-bar__divider"},null,-1)),j("button",{class:dt(["top-bar__btn",t.isRendering?"top-bar__btn--running":"top-bar__btn--stop"]),onClick:a[6]||(a[6]=l=>s.$emit("toggleRender")),title:t.isRendering?"Stop rendering":"Resume rendering"},Te(t.isRendering?"⏸ Stop":"▶ Resume"),11,FA),j("button",{class:"top-bar__btn",onClick:a[7]||(a[7]=l=>s.$emit("togglePreview")),title:"Toggle preview mode"},Te(t.previewMode==="anchored"?"🖥 Anchored":t.previewMode==="floating"?"🪟 Floating":"🌌 Background"),1),j("button",{class:"top-bar__btn",onClick:a[8]||(a[8]=l=>s.$emit("openPopup")),title:"Open renderer in a separate pop-up window"}," ↗ Popout "),j("button",{class:dt(["top-bar__btn",{"top-bar__btn--active":t.isPerformanceMode}]),onClick:a[9]||(a[9]=l=>s.$emit("togglePerformance")),title:"Toggle Performance Mode (P)"}," ⚡ Performance ",2),a[17]||(a[17]=j("div",{class:"top-bar__divider"},null,-1)),j("button",{class:dt(["top-bar__btn",{"top-bar__btn--active":t.showShadows}]),onClick:a[10]||(a[10]=l=>s.$emit("toggleShadows")),title:"Toggle CSS drop shadows on nodes and cables"}," ☁ Shadows ",2),t.previewMode==="background"?(ce(),ve("div",UA,[a[12]||(a[12]=j("span",{class:"top-bar__slider-label"},"Dim",-1)),j("input",{type:"range",min:"0",max:"1",step:"0.05",class:"top-bar__range",value:t.bgOpacity,onInput:a[11]||(a[11]=l=>s.$emit("updateBgOpacity",parseFloat(l.target.value)))},null,40,OA)])):We("",!0),j("div",BA,[j("div",{class:dt(["top-bar__status-dot",{"top-bar__status-dot--stopped":!t.isRendering}])},null,2),j("span",null,Te(t.isRendering?"RENDERING":"STOPPED"),1)])]))}},zA=or(kA,[["__scopeId","data-v-eb7c31fc"]]),ye={IMAGE:"image",FLOAT:"float",INT:"int",VEC2:"vec2",BOOL:"bool",TRIGGER:"trigger"},VA={[ye.IMAGE]:"#00d4ff",[ye.FLOAT]:"#ff9a2e",[ye.INT]:"#ffe14d",[ye.VEC2]:"#ff6eb4",[ye.BOOL]:"#ff4444",[ye.TRIGGER]:"#ffffff"},$A={[ye.IMAGE]:[ye.IMAGE],[ye.FLOAT]:[ye.FLOAT],[ye.INT]:[ye.INT,ye.FLOAT],[ye.VEC2]:[ye.VEC2],[ye.BOOL]:[ye.BOOL],[ye.TRIGGER]:[ye.TRIGGER]};function HA(t,e){const n=$A[t];return n?n.includes(e):!1}function qc(t){return VA[t]||"#888888"}const Mh={imageInput:{type:"imageInput",label:"Image Input",category:"image",inputs:[],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{},shaderKey:null},uiImageSlot:{type:"uiImageSlot",label:"UI Image Slot",category:"image",inputs:[],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{},shaderKey:null},webcamInput:{type:"webcamInput",label:"Webcam",category:"image",inputs:[{id:"trigger",label:"Enable/Trigger",type:ye.FLOAT,optional:!0}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{enable:{type:"bool",ui:"button",default:!1,label:"Enable Webcam"}},shaderKey:null},imageOutput:{type:"imageOutput",label:"Image Output",category:"image",inputs:[{id:"in",label:"Image",type:ye.IMAGE}],outputs:[],params:{format:{type:"select",default:"png",options:["png","tiff","bmp"],label:"Format"},filename:{type:"string",default:"output",label:"Filename"}},shaderKey:null},pixelSort:{type:"pixelSort",label:"Pixel Sort",category:"image",inputs:[{id:"in",label:"Image",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{direction:{type:"select",default:"horizontal",options:["horizontal","vertical"],label:"Direction"},sortBy:{type:"select",default:"brightness",options:["brightness","hue","saturation"],label:"Sort By"},threshold:{type:"float",default:.5,min:0,max:1,step:.01,label:"Threshold"},upperThreshold:{type:"float",default:.8,min:0,max:1,step:.01,label:"Upper Threshold"},reverse:{type:"bool",default:!1,label:"Reverse"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"pixelSort"},reededGlass:{type:"reededGlass",label:"Reeded Glass",category:"image",inputs:[{id:"in",label:"Image",type:ye.IMAGE},{id:"texture",label:"Texture",type:ye.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{scale:{type:"float",default:20,min:1,max:200,step:.5,label:"Scale"},intensity:{type:"float",default:.05,min:0,max:.5,step:.001,label:"Intensity"},angle:{type:"float",default:0,min:0,max:360,step:1,label:"Angle"},blur:{type:"float",default:.5,min:0,max:5,step:.1,label:"Blur"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"reededGlass"},chromaticAberration:{type:"chromaticAberration",label:"Chromatic Aberration",category:"image",inputs:[{id:"in",label:"Image",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{intensity:{type:"float",default:5,min:0,max:50,step:.5,label:"Intensity"},direction:{type:"select",default:"radial",options:["radial","horizontal","vertical"],label:"Direction"},centerX:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center X"},centerY:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center Y"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"chromaticAberration"},displacement:{type:"displacement",label:"Heightmap Displacement",category:"image",inputs:[{id:"in",label:"Image",type:ye.IMAGE},{id:"heightmap",label:"Heightmap",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{strength:{type:"float",default:.05,min:0,max:.5,step:.001,label:"Strength"},channel:{type:"select",default:"luminance",options:["luminance","r","g","b"],label:"Channel"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"displacement"},levels:{type:"levels",label:"Levels",category:"image",inputs:[{id:"in",label:"Image",type:ye.IMAGE},{id:"inputBlack",label:"In Black",type:ye.INT,optional:!0},{id:"inputWhite",label:"In White",type:ye.INT,optional:!0},{id:"gamma",label:"Gamma",type:ye.FLOAT,optional:!0}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{inputBlack:{type:"int",default:0,min:0,max:255,step:1,label:"Input Black"},inputWhite:{type:"int",default:255,min:0,max:255,step:1,label:"Input White"},gamma:{type:"float",default:1,min:.1,max:10,step:.01,label:"Gamma"},outputBlack:{type:"int",default:0,min:0,max:255,step:1,label:"Output Black"},outputWhite:{type:"int",default:255,min:0,max:255,step:1,label:"Output White"},channel:{type:"select",default:"master",options:["master","r","g","b"],label:"Channel"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"levels"},surfaceBlur:{type:"surfaceBlur",label:"Surface Blur",category:"image",inputs:[{id:"in",label:"Image",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{radius:{type:"int",default:5,min:1,max:20,step:1,label:"Radius"},threshold:{type:"float",default:.1,min:0,max:1,step:.01,label:"Threshold"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"surfaceBlur"},feedbackLoop:{type:"feedbackLoop",label:"Feedback Loop",category:"image",inputs:[{id:"in",label:"Image",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{decay:{type:"float",default:.9,min:0,max:1,step:.01,label:"Decay"},iterations:{type:"int",default:1,min:1,max:100,step:1,label:"Iterations"},blendMode:{type:"select",default:"normal",options:["normal","add","multiply"],label:"Blend Mode"}},shaderKey:"feedback"},blend:{type:"blend",label:"Blend",category:"image",inputs:[{id:"base",label:"Base",type:ye.IMAGE},{id:"overlay",label:"Overlay",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{mode:{type:"select",default:"normal",options:["normal","multiply","screen","overlay","softLight","hardLight","difference","exclusion","add","subtract"],label:"Mode"},opacity:{type:"float",default:1,min:0,max:1,step:.01,label:"Opacity"}},shaderKey:"blend"},diffusion:{type:"diffusion",label:"Diffusion Reaction",category:"image",inputs:[{id:"in",label:"Init State",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{dA:{type:"float",default:1,min:0,max:2,step:.01,label:"Diff A"},dB:{type:"float",default:.5,min:0,max:2,step:.01,label:"Diff B"},feed:{type:"float",default:.055,min:0,max:.1,step:.001,label:"Feed Rate"},kill:{type:"float",default:.062,min:0,max:.1,step:.001,label:"Kill Rate"},dt:{type:"float",default:1,min:0,max:2,step:.01,label:"Delta Time"}},shaderKey:"diffusion"},xerox:{type:"xerox",label:"Xerox Photocopy",category:"image",inputs:[{id:"in",label:"Image",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{threshold:{type:"float",default:.5,min:0,max:1,step:.01,label:"Threshold"},noiseAmount:{type:"float",default:.1,min:0,max:1,step:.01,label:"Noise"},contrast:{type:"float",default:2,min:0,max:5,step:.1,label:"Contrast"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"xerox"},liquidDeform:{type:"liquidDeform",label:"Liquid Deform",category:"uv",inputs:[{id:"in",label:"Image",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{scale:{type:"float",default:1,min:.1,max:10,step:.01,label:"Zoom/Scale"},intensity:{type:"float",default:1,min:0,max:5,step:.01,label:"Swirl Int."},speed:{type:"float",default:1,min:0,max:5,step:.01,label:"Swirl Spd"},samples:{type:"float",default:20,min:1,max:20,step:1,label:"Samples"},gammaLift:{type:"float",default:1,min:.1,max:5,step:.01,label:"GammaLift"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix/Blend"}},shaderKey:"liquidDeform"},noiseContours:{type:"noiseContours",label:"Noise Contours",category:"image",inputs:[{id:"in",label:"Image",type:ye.IMAGE},{id:"texture",label:"Overlay Tex",type:ye.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{speed:{type:"float",default:1,min:0,max:5,step:.01,label:"Speed"},scale:{type:"float",default:1,min:.1,max:4,step:.01,label:"Scale"},palNum:{type:"float",default:9,min:2,max:20,step:1,label:"Contour Bands"},edgeStrength:{type:"float",default:5,min:0,max:20,step:.1,label:"Edge Strength"},highlight:{type:"float",default:10,min:0,max:30,step:.1,label:"Highlight"},hueShift:{type:"float",default:-.25,min:-3.14,max:3.14,step:.01,label:"Hue Shift"},hueRadius:{type:"float",default:.4,min:0,max:2,step:.01,label:"Hue Radius"},imageBlend:{type:"float",default:0,min:0,max:1,step:.01,label:"Image Color"},taper:{type:"float",default:1,min:0,max:3,step:.01,label:"Taper"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Blend"}},shaderKey:"noiseContours"},fisheye:{type:"fisheye",label:"Fisheye",category:"image",inputs:[{id:"in",label:"Image",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{power:{type:"float",default:1,min:-3,max:3,step:.01,label:"Power"},centerX:{type:"float",default:.5,min:.1,max:.9,step:.01,label:"Center X"},centerY:{type:"float",default:.5,min:.1,max:.9,step:.01,label:"Center Y"},zoom:{type:"float",default:1,min:.1,max:4,step:.01,label:"Zoom"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Blend"}},shaderKey:"fisheye"},crt:{type:"crt",label:"CRT Display",category:"image",inputs:[{id:"in",label:"Image",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{curvature:{type:"float",default:.5,min:0,max:1,step:.01,label:"Curvature"},scanLines:{type:"float",default:.5,min:0,max:1,step:.01,label:"Scanlines"},rgbShift:{type:"float",default:.2,min:0,max:1,step:.01,label:"RGB Shift"},brightness:{type:"float",default:1.2,min:0,max:3,step:.1,label:"Brightness"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"crt"},ascii:{type:"ascii",label:"ASCII Art",category:"image",inputs:[{id:"in",label:"Image",type:ye.IMAGE},{id:"texture",label:"Overlay Tex",type:ye.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{cellSize:{type:"float",default:12,min:4,max:48,step:1,label:"Cell Size"},brightness:{type:"float",default:0,min:-1,max:1,step:.01,label:"Threshold Shift"},colorMode:{type:"float",default:0,min:0,max:1,step:1,label:"Color Mode (Orig/Flat)"},fgColor:{type:"color",default:"#00ff66",label:"FG Color"},bgColor:{type:"color",default:"#000000",label:"BG Color"},intensity:{type:"float",default:1,min:0,max:1,step:.01,label:"Effect Mix"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"ascii"},asciiV2:{type:"asciiV2",label:"ASCII v2",category:"image",inputs:[{id:"in",label:"Image",type:ye.IMAGE},{id:"texture",label:"Overlay Tex",type:ye.IMAGE,optional:!0}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{cellSize:{type:"float",default:12,min:4,max:64,step:1,label:"Cell Size"},brightness:{type:"float",default:0,min:-.5,max:.5,step:.01,label:"Brightness"},colorMode:{type:"select",default:"Palette",options:["Palette","Original","Flat"],label:"Color Mode"},fgColor:{type:"color",default:"#00ff66",label:"FG Color"},bgColor:{type:"color",default:"#000000",label:"BG Color"},extendedPalette:{type:"bool",default:!1,label:"Extended Chars"},intensity:{type:"float",default:1,min:0,max:1,step:.01,label:"Intensity"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Blend"}},shaderKey:"asciiV2"},motionBlur:{type:"motionBlur",label:"Motion Blur",category:"image",inputs:[{id:"in",label:"Image",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{angle:{type:"float",default:0,min:0,max:3.1415,step:.01,label:"Angle (rad)"},strength:{type:"float",default:5,min:0,max:50,step:.1,label:"Strength"},samples:{type:"int",default:15,min:1,max:50,step:1,label:"Samples"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"motionBlur"},dithering:{type:"dithering",label:"Dithering (4x4)",category:"image",inputs:[{id:"in",label:"Image",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{colors:{type:"float",default:2,min:1,max:32,step:1,label:"Colors"},spread:{type:"float",default:.5,min:0,max:2,step:.01,label:"Spread"},blendAmount:{type:"float",default:1,min:0,max:1,step:.01,label:"Mix / Blend"}},shaderKey:"dithering"},lfo:{type:"lfo",label:"LFO",category:"animation",compact:!0,inlineParams:["waveform","frequency","amplitude"],inputs:[],outputs:[{id:"out",label:"Value",type:ye.FLOAT}],params:{waveform:{type:"select",default:"sine",options:["sine","saw","square","triangle"],label:"Waveform"},frequency:{type:"float",default:1,min:.01,max:60,step:.01,label:"Frequency (Hz)"},amplitude:{type:"float",default:1,min:0,max:100,step:.01,label:"Amplitude"},offset:{type:"float",default:0,min:-100,max:100,step:.01,label:"Offset"},phase:{type:"float",default:0,min:0,max:360,step:1,label:"Phase (°)"}},shaderKey:null,isAnimated:!0},timer:{type:"timer",label:"Timer",category:"animation",inputs:[{id:"reset",label:"Reset",type:ye.TRIGGER,optional:!0}],outputs:[{id:"out",label:"Time",type:ye.FLOAT}],params:{speed:{type:"float",default:1,min:.01,max:10,step:.01,label:"Speed"},loop:{type:"bool",default:!1,label:"Loop"},loopDuration:{type:"float",default:5,min:.1,max:300,step:.1,label:"Loop Duration (s)"}},shaderKey:null,isAnimated:!0},random:{type:"random",label:"Random",category:"animation",inputs:[{id:"trigger",label:"Trigger",type:ye.TRIGGER,optional:!0}],outputs:[{id:"out",label:"Value",type:ye.FLOAT}],params:{min:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Max"},triggerInterval:{type:"float",default:.5,min:.01,max:30,step:.01,label:"Self-Trigger (s)"},damping:{type:"float",default:0,min:0,max:.999,step:.001,label:"Damping"},seed:{type:"int",default:42,min:0,max:99999,step:1,label:"Seed"}},shaderKey:null,isAnimated:!0},damper:{type:"damper",label:"Damper",category:"animation",inputs:[{id:"target",label:"Target",type:ye.FLOAT}],outputs:[{id:"out",label:"Value",type:ye.FLOAT}],params:{smoothing:{type:"float",default:.9,min:0,max:.999,step:.001,label:"Smoothing"}},shaderKey:null,isAnimated:!0},fft:{type:"fft",label:"Audio FFT",category:"animation",compact:!0,inputs:[],outputs:[{id:"bass",label:"Bass",type:ye.FLOAT},{id:"lowMid",label:"Low Mid",type:ye.FLOAT},{id:"mid",label:"Mid",type:ye.FLOAT},{id:"high",label:"High",type:ye.FLOAT}],params:{smoothing:{type:"float",default:.8,min:0,max:.99,step:.01,label:"Smoothing"},gain:{type:"float",default:1,min:0,max:10,step:.1,label:"Gain"}},shaderKey:null,isAnimated:!0},button:{type:"button",label:"Button",category:"trigger",inputs:[],outputs:[{id:"out",label:"Trigger",type:ye.TRIGGER}],params:{label:{type:"string",default:"Press",label:"Label"}},shaderKey:null},slider:{type:"slider",label:"Slider",category:"trigger",inputs:[],outputs:[{id:"out",label:"Value",type:ye.FLOAT}],params:{value:{type:"float",default:.5,min:0,max:1,step:.01,label:"Value"},min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"},step:{type:"float",default:.01,min:.001,max:100,step:.001,label:"Step"},outputType:{type:"select",default:"float",options:["float","int"],label:"Output Type"}},shaderKey:null},knob:{type:"knob",label:"Knob",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"Value",type:ye.FLOAT}],params:{value:{type:"float",default:.5,min:0,max:1,step:.01,label:"Value"},min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"},step:{type:"float",default:.01,min:.001,max:100,step:.001,label:"Step"}},shaderKey:null},onStart:{type:"onStart",label:"On Start (Init)",category:"logic",inputs:[],outputs:[{id:"out",label:"Trigger",type:ye.FLOAT}],params:{}},bang:{type:"bang",label:"Bang",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"Trigger",type:ye.FLOAT}],params:{label:{type:"string",default:"Bang!",label:"Label"}},shaderKey:null},toggle:{type:"toggle",label:"Toggle (Bool)",category:"trigger",compact:!0,inputs:[],outputs:[{id:"out",label:"State",type:ye.BOOL}],params:{state:{type:"bool",default:!1,label:"State"}},shaderKey:null},edgeTrigger:{type:"edgeTrigger",label:"Edge -> Bang",category:"trigger",compact:!0,inputs:[{id:"in",label:"Bool",type:ye.BOOL}],outputs:[{id:"out",label:"Trigger",type:ye.TRIGGER}],params:{mode:{type:"select",default:"rising",options:["rising","falling","both"],label:"Edge"}},shaderKey:null},changeTrigger:{type:"changeTrigger",label:"Change -> Bang",category:"trigger",compact:!0,inputs:[{id:"in",label:"Value",type:ye.FLOAT}],outputs:[{id:"out",label:"Trigger",type:ye.TRIGGER}],params:{threshold:{type:"float",default:.1,min:.001,max:100,step:.001,label:"Threshold"}},shaderKey:null},compare:{type:"compare",label:"Compare",category:"math",inputs:[{id:"a",label:"A",type:ye.FLOAT},{id:"b",label:"B",type:ye.FLOAT}],outputs:[{id:"out",label:"Bool",type:ye.BOOL}],params:{op:{type:"select",default:">",options:[">","<",">=","<=","==","!="],label:"Operator"}},shaderKey:null},valueCondition:{type:"valueCondition",label:"If / Else",category:"math",inputs:[{id:"cond",label:"Condition",type:ye.BOOL},{id:"trueVal",label:"True",type:ye.FLOAT,optional:!0},{id:"falseVal",label:"False",type:ye.FLOAT,optional:!0}],outputs:[{id:"out",label:"Result",type:ye.FLOAT}],params:{defaultTrue:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Def True"},defaultFalse:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Def False"}},shaderKey:null},mathAdd:{type:"mathAdd",label:"Add",category:"math",inputs:[{id:"a",label:"A",type:ye.FLOAT},{id:"b",label:"B",type:ye.FLOAT}],outputs:[{id:"out",label:"Result",type:ye.FLOAT}],params:{},shaderKey:null},mathMultiply:{type:"mathMultiply",label:"Multiply",category:"math",inputs:[{id:"a",label:"A",type:ye.FLOAT},{id:"b",label:"B",type:ye.FLOAT}],outputs:[{id:"out",label:"Result",type:ye.FLOAT}],params:{},shaderKey:null},mathDivide:{type:"mathDivide",label:"Divide",category:"math",inputs:[{id:"a",label:"A",type:ye.FLOAT},{id:"b",label:"B",type:ye.FLOAT}],outputs:[{id:"out",label:"Result",type:ye.FLOAT}],params:{},shaderKey:null},mathSqrt:{type:"mathSqrt",label:"Sqrt",category:"math",inputs:[{id:"a",label:"Value",type:ye.FLOAT}],outputs:[{id:"out",label:"Result",type:ye.FLOAT}],params:{},shaderKey:null},mathMap:{type:"mathMap",label:"Map",category:"math",inputs:[{id:"value",label:"Value",type:ye.FLOAT}],outputs:[{id:"out",label:"Result",type:ye.FLOAT}],params:{inMin:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"In Min"},inMax:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"In Max"},outMin:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Out Min"},outMax:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Out Max"}},shaderKey:null},mathClamp:{type:"mathClamp",label:"Clamp",category:"math",inputs:[{id:"value",label:"Value",type:ye.FLOAT}],outputs:[{id:"out",label:"Result",type:ye.FLOAT}],params:{min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"}},shaderKey:null},mathWrap:{type:"mathWrap",label:"Wrap",category:"math",inputs:[{id:"value",label:"Value",type:ye.FLOAT}],outputs:[{id:"out",label:"Result",type:ye.FLOAT}],params:{min:{type:"float",default:0,min:-1e4,max:1e4,step:.01,label:"Min"},max:{type:"float",default:1,min:-1e4,max:1e4,step:.01,label:"Max"}},shaderKey:null},floatToInt:{type:"floatToInt",label:"Float → Int",category:"math",compact:!0,inputs:[{id:"in",label:"Float",type:ye.FLOAT}],outputs:[{id:"out",label:"Int",type:ye.INT}],params:{mode:{type:"select",default:"round",options:["round","floor","ceil","truncate"],label:"Mode"},clampMin:{type:"int",default:-2147483648,min:-2147483648,max:2147483647,step:1,label:"Clamp Min"},clampMax:{type:"int",default:2147483647,min:-2147483648,max:2147483647,step:1,label:"Clamp Max"}},shaderKey:null},intToFloat:{type:"intToFloat",label:"Int → Float",category:"math",inputs:[{id:"in",label:"Int",type:ye.INT}],outputs:[{id:"out",label:"Float",type:ye.FLOAT}],params:{},shaderKey:null},uvGenerator:{type:"uvGenerator",label:"UV Generator",category:"uv",inputs:[],outputs:[{id:"out",label:"UV",type:ye.IMAGE}],params:{},shaderKey:"uvGenerator"},uvTransform:{type:"uvTransform",label:"UV Transform",category:"uv",inputs:[{id:"in",label:"Image",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{scaleX:{type:"float",default:1,min:.01,max:10,step:.01,label:"Scale X"},scaleY:{type:"float",default:1,min:.01,max:10,step:.01,label:"Scale Y"},rotation:{type:"float",default:0,min:0,max:360,step:1,label:"Rotation (°)"},translateX:{type:"float",default:0,min:-2,max:2,step:.01,label:"Translate X"},translateY:{type:"float",default:0,min:-2,max:2,step:.01,label:"Translate Y"}},shaderKey:"uvTransform"},uvRepeat:{type:"uvRepeat",label:"UV Repeat",category:"uv",inputs:[{id:"in",label:"Image",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{repeatX:{type:"float",default:2,min:.1,max:50,step:.1,label:"Repeat X"},repeatY:{type:"float",default:2,min:.1,max:50,step:.1,label:"Repeat Y"},mirror:{type:"bool",default:!1,label:"Mirror"},offsetX:{type:"float",default:0,min:0,max:1,step:.01,label:"Offset X"},offsetY:{type:"float",default:0,min:0,max:1,step:.01,label:"Offset Y"}},shaderKey:"uvRepeat"},uvGlitch:{type:"uvGlitch",label:"UV Glitch",category:"uv",inputs:[{id:"in",label:"Image",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{blockSize:{type:"int",default:8,min:1,max:128,step:1,label:"Block Size"},intensity:{type:"float",default:.1,min:0,max:1,step:.01,label:"Intensity"},seed:{type:"float",default:0,min:0,max:1e3,step:.1,label:"Seed"},direction:{type:"select",default:"horizontal",options:["horizontal","vertical","both"],label:"Direction"}},shaderKey:"uvGlitch"},uvPolar:{type:"uvPolar",label:"UV Polar",category:"uv",inputs:[{id:"in",label:"Image",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{mode:{type:"select",default:"toPolar",options:["toPolar","fromPolar"],label:"Mode"},centerX:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center X"},centerY:{type:"float",default:.5,min:0,max:1,step:.01,label:"Center Y"}},shaderKey:"uvPolar"},numberMonitor:{type:"numberMonitor",label:"Number Monitor",category:"utility",inputs:[{id:"in",label:"Value",type:ye.FLOAT}],outputs:[{id:"out",label:"Value",type:ye.FLOAT}],params:{decimals:{type:"int",default:3,min:0,max:10,step:1,label:"Decimals"},showGraph:{type:"bool",default:!0,label:"Show Graph"}},shaderKey:null,isPassthrough:!0},preview:{type:"preview",label:"Preview",category:"utility",inputs:[{id:"in",label:"Image",type:ye.IMAGE}],outputs:[{id:"out",label:"Image",type:ye.IMAGE}],params:{},shaderKey:"passthrough",isPassthrough:!0},accelerometer:{type:"accelerometer",label:"Accelerometer",category:"trigger",compact:!0,inputs:[],outputs:[{id:"x",label:"X",type:ye.FLOAT},{id:"y",label:"Y",type:ye.FLOAT},{id:"z",label:"Z",type:ye.FLOAT}],params:{sensitivity:{type:"float",default:1,min:.01,max:10,step:.01,label:"Sensitivity"},smoothing:{type:"float",default:.5,min:0,max:.99,step:.01,label:"Smoothing"}},shaderKey:null,isAnimated:!0},xyPad:{type:"xyPad",label:"XY Pad",category:"trigger",inputs:[],outputs:[{id:"x",label:"X",type:ye.FLOAT},{id:"y",label:"Y",type:ye.FLOAT}],params:{x:{type:"float",default:.5,min:0,max:1,step:.001,label:"X"},y:{type:"float",default:.5,min:0,max:1,step:.001,label:"Y"},minX:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Min X"},maxX:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Max X"},minY:{type:"float",default:0,min:-1e3,max:1e3,step:.01,label:"Min Y"},maxY:{type:"float",default:1,min:-1e3,max:1e3,step:.01,label:"Max Y"}},shaderKey:null}},nu={image:{label:"Image",icon:"🖼️",color:"#00d4ff"},animation:{label:"Animation",icon:"⏱️",color:"#9b59b6"},trigger:{label:"Controls",icon:"🎛️",color:"#2ecc71"},logic:{label:"Logic",icon:"🧠",color:"#f39c12"},math:{label:"Math",icon:"🔢",color:"#ff9a2e"},uv:{label:"UV / Texture",icon:"🌀",color:"#ff6eb4"},utility:{label:"Utility",icon:"🔍",color:"#a0a0b0"}};function Qt(t){return Mh[t]||null}function GA(){return{...Mh}}function WA(t){return Object.values(Mh).filter(e=>e.category===t)}const XA={class:"node-palette"},YA=["onClick"],qA={class:"node-palette__category-icon"},KA={class:"node-palette__category-label"},ZA={style:{"font-size":"10px",color:"var(--text-muted)"}},jA=["onDragstart","onClick"],JA={__name:"NodePalette",emits:["addNode"],setup(t,{emit:e}){const n=nu,i=Cr(Object.fromEntries(Object.keys(nu).map(a=>[a,!0])));function r(a){i[a]=!i[a]}function o(a){return WA(a)}function s(a,l){a.dataTransfer.setData("application/node-type",l),a.dataTransfer.effectAllowed="move"}return(a,l)=>(ce(),ve("div",XA,[l[0]||(l[0]=j("div",{class:"node-palette__header"},"Node Library",-1)),(ce(!0),ve(st,null,Ht(he(n),(u,c)=>(ce(),ve("div",{key:c,class:"node-palette__category"},[j("div",{class:"node-palette__category-header",onClick:d=>r(c)},[j("span",qA,Te(u.icon),1),j("span",KA,Te(u.label),1),j("span",ZA,Te(i[c]?"▾":"▸"),1)],8,YA),i[c]?(ce(!0),ve(st,{key:0},Ht(o(c),d=>(ce(),ve("div",{key:d.type,class:"node-palette__item",draggable:"true",onDragstart:f=>s(f,d.type),onClick:f=>a.$emit("addNode",d.type)},[j("div",{class:"node-palette__item-dot",style:nt({background:u.color})},null,4),Go(" "+Te(d.label),1)],40,jA))),128)):We("",!0)]))),128))]))}};function ia(t){return Tu()?(Os(t),!0):!1}function Ui(t){return typeof t=="function"?t():he(t)}const QA=typeof window<"u"&&typeof document<"u",eC=t=>typeof t<"u",tC=Object.prototype.toString,nC=t=>tC.call(t)==="[object Object]",iC=()=>{};function rC(t,e){function n(...i){return new Promise((r,o)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(o)})}return n}const W0=t=>t();function oC(t=W0){const e=Ce(!0);function n(){e.value=!1}function i(){e.value=!0}return{isActive:Hl(e),pause:n,resume:i,eventFilter:(...o)=>{e.value&&t(...o)}}}function Im(t,e=!1,n="Timeout"){return new Promise((i,r)=>{setTimeout(e?()=>r(n):i,t)})}function sC(t,e,n={}){const{eventFilter:i=W0,...r}=n;return ut(t,rC(i,e),r)}function Fo(t,e,n={}){const{eventFilter:i,...r}=n,{eventFilter:o,pause:s,resume:a,isActive:l}=oC(i);return{stop:sC(t,e,{...r,eventFilter:o}),pause:s,resume:a,isActive:l}}function aC(t,e={}){if(!Ut(t))return mv(t);const n=Array.isArray(t.value)?Array.from({length:t.value.length}):{};for(const i in t.value)n[i]=Ex(()=>({get(){return t.value[i]},set(r){var o;if((o=Ui(e.replaceRef))!=null?o:!0)if(Array.isArray(t.value)){const a=[...t.value];a[i]=r,t.value=a}else{const a={...t.value,[i]:r};Object.setPrototypeOf(a,Object.getPrototypeOf(t.value)),t.value=a}else t.value[i]=r}}));return n}function _f(t,e=!1){function n(d,{flush:f="sync",deep:h=!1,timeout:g,throwOnTimeout:v}={}){let m=null;const x=[new Promise(M=>{m=ut(t,y=>{d(y)!==e&&(m?.(),M(y))},{flush:f,deep:h,immediate:!0})})];return g!=null&&x.push(Im(g,v).then(()=>Ui(t)).finally(()=>m?.())),Promise.race(x)}function i(d,f){if(!Ut(d))return n(y=>y===d,f);const{flush:h="sync",deep:g=!1,timeout:v,throwOnTimeout:m}=f??{};let p=null;const M=[new Promise(y=>{p=ut([t,d],([P,L])=>{e!==(P===L)&&(p?.(),y(P))},{flush:h,deep:g,immediate:!0})})];return v!=null&&M.push(Im(v,m).then(()=>Ui(t)).finally(()=>(p?.(),Ui(t)))),Promise.race(M)}function r(d){return n(f=>!!f,d)}function o(d){return i(null,d)}function s(d){return i(void 0,d)}function a(d){return n(Number.isNaN,d)}function l(d,f){return n(h=>{const g=Array.from(h);return g.includes(d)||g.includes(Ui(d))},f)}function u(d){return c(1,d)}function c(d=1,f){let h=-1;return n(()=>(h+=1,h>=d),f)}return Array.isArray(Ui(t))?{toMatch:n,toContains:l,changed:u,changedTimes:c,get not(){return _f(t,!e)}}:{toMatch:n,toBe:i,toBeTruthy:r,toBeNull:o,toBeNaN:a,toBeUndefined:s,changed:u,changedTimes:c,get not(){return _f(t,!e)}}}function yf(t){return _f(t)}function lC(t){var e;const n=Ui(t);return(e=n?.$el)!=null?e:n}const X0=QA?window:void 0;function Y0(...t){let e,n,i,r;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,i,r]=t,e=X0):[e,n,i,r]=t,!e)return iC;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const o=[],s=()=>{o.forEach(c=>c()),o.length=0},a=(c,d,f,h)=>(c.addEventListener(d,f,h),()=>c.removeEventListener(d,f,h)),l=ut(()=>[lC(e),Ui(r)],([c,d])=>{if(s(),!c)return;const f=nC(d)?{...d}:d;o.push(...n.flatMap(h=>i.map(g=>a(c,h,g,f))))},{immediate:!0,flush:"post"}),u=()=>{l(),s()};return ia(u),u}function uC(t){return typeof t=="function"?t:typeof t=="string"?e=>e.key===t:Array.isArray(t)?e=>t.includes(e.key):()=>!0}function Pm(...t){let e,n,i={};t.length===3?(e=t[0],n=t[1],i=t[2]):t.length===2?typeof t[1]=="object"?(e=!0,n=t[0],i=t[1]):(e=t[0],n=t[1]):(e=!0,n=t[0]);const{target:r=X0,eventName:o="keydown",passive:s=!1,dedupe:a=!1}=i,l=uC(e);return Y0(r,o,c=>{c.repeat&&Ui(a)||l(c)&&n(c)},s)}function cC(t){return JSON.parse(JSON.stringify(t))}function Kc(t,e,n,i={}){var r,o,s;const{clone:a=!1,passive:l=!1,eventName:u,deep:c=!1,defaultValue:d,shouldEmit:f}=i,h=ir(),g=n||h?.emit||((r=h?.$emit)==null?void 0:r.bind(h))||((s=(o=h?.proxy)==null?void 0:o.$emit)==null?void 0:s.bind(h?.proxy));let v=u;e||(e="modelValue"),v=v||`update:${e.toString()}`;const m=M=>a?typeof a=="function"?a(M):cC(M):M,p=()=>eC(t[e])?m(t[e]):d,x=M=>{f?f(M)&&g(v,M):g(v,M)};if(l){const M=p(),y=Ce(M);let P=!1;return ut(()=>t[e],L=>{P||(P=!0,y.value=m(L),fn(()=>P=!1))}),ut(y,L=>{!P&&(L!==t[e]||c)&&x(L)},{deep:c}),y}else return Ae({get(){return p()},set(M){x(M)}})}var dC={value:()=>{}};function Vu(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Pl(n)}function Pl(t){this._=t}function fC(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Pl.prototype=Vu.prototype={constructor:Pl,on:function(t,e){var n=this._,i=fC(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=hC(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=Nm(n[r],t.name,e);else if(e==null)for(r in n)n[r]=Nm(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Pl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function hC(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function Nm(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=dC,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var xf="http://www.w3.org/1999/xhtml";const Dm={svg:"http://www.w3.org/2000/svg",xhtml:xf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function $u(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),Dm.hasOwnProperty(e)?{space:Dm[e],local:t}:t}function pC(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===xf&&e.documentElement.namespaceURI===xf?e.createElement(t):e.createElementNS(n,t)}}function mC(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function q0(t){var e=$u(t);return(e.local?mC:pC)(e)}function gC(){}function wh(t){return t==null?gC:function(){return this.querySelector(t)}}function vC(t){typeof t!="function"&&(t=wh(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,u,c=0;c<s;++c)(l=o[c])&&(u=t.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new Nn(i,this._parents)}function _C(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function yC(){return[]}function K0(t){return t==null?yC:function(){return this.querySelectorAll(t)}}function xC(t){return function(){return _C(t.apply(this,arguments))}}function bC(t){typeof t=="function"?t=xC(t):t=K0(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&(i.push(t.call(l,l.__data__,u,s)),r.push(l));return new Nn(i,r)}function Z0(t){return function(){return this.matches(t)}}function j0(t){return function(e){return e.matches(t)}}var SC=Array.prototype.find;function MC(t){return function(){return SC.call(this.children,t)}}function wC(){return this.firstElementChild}function EC(t){return this.select(t==null?wC:MC(typeof t=="function"?t:j0(t)))}var TC=Array.prototype.filter;function AC(){return Array.from(this.children)}function CC(t){return function(){return TC.call(this.children,t)}}function RC(t){return this.selectAll(t==null?AC:CC(typeof t=="function"?t:j0(t)))}function IC(t){typeof t!="function"&&(t=Z0(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new Nn(i,this._parents)}function J0(t){return new Array(t.length)}function PC(){return new Nn(this._enter||this._groups.map(J0),this._parents)}function iu(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}iu.prototype={constructor:iu,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function NC(t){return function(){return t}}function DC(t,e,n,i,r,o){for(var s=0,a,l=e.length,u=o.length;s<u;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new iu(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function LC(t,e,n,i,r,o,s){var a,l,u=new Map,c=e.length,d=o.length,f=new Array(c),h;for(a=0;a<c;++a)(l=e[a])&&(f[a]=h=s.call(l,l.__data__,a,e)+"",u.has(h)?r[a]=l:u.set(h,l));for(a=0;a<d;++a)h=s.call(t,o[a],a,o)+"",(l=u.get(h))?(i[a]=l,l.__data__=o[a],u.delete(h)):n[a]=new iu(t,o[a]);for(a=0;a<c;++a)(l=e[a])&&u.get(f[a])===l&&(r[a]=l)}function FC(t){return t.__data__}function UC(t,e){if(!arguments.length)return Array.from(this,FC);var n=e?LC:DC,i=this._parents,r=this._groups;typeof t!="function"&&(t=NC(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=i[u],d=r[u],f=d.length,h=OC(t.call(c,c&&c.__data__,u,i)),g=h.length,v=a[u]=new Array(g),m=s[u]=new Array(g),p=l[u]=new Array(f);n(c,d,v,m,p,h,e);for(var x=0,M=0,y,P;x<g;++x)if(y=v[x]){for(x>=M&&(M=x+1);!(P=m[M])&&++M<g;);y._next=P||null}}return s=new Nn(s,i),s._enter=a,s._exit=l,s}function OC(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function BC(){return new Nn(this._exit||this._groups.map(J0),this._parents)}function kC(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function zC(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var u=n[l],c=i[l],d=u.length,f=a[l]=new Array(d),h,g=0;g<d;++g)(h=u[g]||c[g])&&(f[g]=h);for(;l<r;++l)a[l]=n[l];return new Nn(a,this._parents)}function VC(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function $C(t){t||(t=HC);function e(d,f){return d&&f?t(d.__data__,f.__data__):!d-!f}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),u,c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(e)}return new Nn(r,this._parents).order()}function HC(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function GC(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function WC(){return Array.from(this)}function XC(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function YC(){let t=0;for(const e of this)++t;return t}function qC(){return!this.node()}function KC(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function ZC(t){return function(){this.removeAttribute(t)}}function jC(t){return function(){this.removeAttributeNS(t.space,t.local)}}function JC(t,e){return function(){this.setAttribute(t,e)}}function QC(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function e2(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function t2(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function n2(t,e){var n=$u(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?jC:ZC:typeof e=="function"?n.local?t2:e2:n.local?QC:JC)(n,e))}function Q0(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function i2(t){return function(){this.style.removeProperty(t)}}function r2(t,e,n){return function(){this.style.setProperty(t,e,n)}}function o2(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function s2(t,e,n){return arguments.length>1?this.each((e==null?i2:typeof e=="function"?o2:r2)(t,e,n??"")):os(this.node(),t)}function os(t,e){return t.style.getPropertyValue(e)||Q0(t).getComputedStyle(t,null).getPropertyValue(e)}function a2(t){return function(){delete this[t]}}function l2(t,e){return function(){this[t]=e}}function u2(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function c2(t,e){return arguments.length>1?this.each((e==null?a2:typeof e=="function"?u2:l2)(t,e)):this.node()[t]}function e_(t){return t.trim().split(/^|\s+/)}function Eh(t){return t.classList||new t_(t)}function t_(t){this._node=t,this._names=e_(t.getAttribute("class")||"")}t_.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function n_(t,e){for(var n=Eh(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function i_(t,e){for(var n=Eh(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function d2(t){return function(){n_(this,t)}}function f2(t){return function(){i_(this,t)}}function h2(t,e){return function(){(e.apply(this,arguments)?n_:i_)(this,t)}}function p2(t,e){var n=e_(t+"");if(arguments.length<2){for(var i=Eh(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?h2:e?d2:f2)(n,e))}function m2(){this.textContent=""}function g2(t){return function(){this.textContent=t}}function v2(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function _2(t){return arguments.length?this.each(t==null?m2:(typeof t=="function"?v2:g2)(t)):this.node().textContent}function y2(){this.innerHTML=""}function x2(t){return function(){this.innerHTML=t}}function b2(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function S2(t){return arguments.length?this.each(t==null?y2:(typeof t=="function"?b2:x2)(t)):this.node().innerHTML}function M2(){this.nextSibling&&this.parentNode.appendChild(this)}function w2(){return this.each(M2)}function E2(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function T2(){return this.each(E2)}function A2(t){var e=typeof t=="function"?t:q0(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function C2(){return null}function R2(t,e){var n=typeof t=="function"?t:q0(t),i=e==null?C2:typeof e=="function"?e:wh(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function I2(){var t=this.parentNode;t&&t.removeChild(this)}function P2(){return this.each(I2)}function N2(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function D2(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function L2(t){return this.select(t?D2:N2)}function F2(t){return arguments.length?this.property("__data__",t):this.node().__data__}function U2(t){return function(e){t.call(this,e,this.__data__)}}function O2(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function B2(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function k2(t,e,n){return function(){var i=this.__on,r,o=U2(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function z2(t,e,n){var i=O2(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(r=0,c=a[l];r<o;++r)if((s=i[r]).type===c.type&&s.name===c.name)return c.value}return}for(a=e?k2:B2,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function r_(t,e,n){var i=Q0(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function V2(t,e){return function(){return r_(this,t,e)}}function $2(t,e){return function(){return r_(this,t,e.apply(this,arguments))}}function H2(t,e){return this.each((typeof e=="function"?$2:V2)(t,e))}function*G2(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var o_=[null];function Nn(t,e){this._groups=t,this._parents=e}function Ea(){return new Nn([[document.documentElement]],o_)}function W2(){return this}Nn.prototype=Ea.prototype={constructor:Nn,select:vC,selectAll:bC,selectChild:EC,selectChildren:RC,filter:IC,data:UC,enter:PC,exit:BC,join:kC,merge:zC,selection:W2,order:VC,sort:$C,call:GC,nodes:WC,node:XC,size:YC,empty:qC,each:KC,attr:n2,style:s2,property:c2,classed:p2,text:_2,html:S2,raise:w2,lower:T2,append:A2,insert:R2,remove:P2,clone:L2,datum:F2,on:z2,dispatch:H2,[Symbol.iterator]:G2};function Gn(t){return typeof t=="string"?new Nn([[document.querySelector(t)]],[document.documentElement]):new Nn([[t]],o_)}function X2(t){let e;for(;e=t.sourceEvent;)t=e;return t}function ri(t,e){if(t=X2(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[t.clientX-r.left-e.clientLeft,t.clientY-r.top-e.clientTop]}}return[t.pageX,t.pageY]}const Y2={passive:!1},ra={capture:!0,passive:!1};function Zc(t){t.stopImmediatePropagation()}function Yo(t){t.preventDefault(),t.stopImmediatePropagation()}function s_(t){var e=t.document.documentElement,n=Gn(t).on("dragstart.drag",Yo,ra);"onselectstart"in e?n.on("selectstart.drag",Yo,ra):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function a_(t,e){var n=t.document.documentElement,i=Gn(t).on("dragstart.drag",null);e&&(i.on("click.drag",Yo,ra),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const ol=t=>()=>t;function bf(t,{sourceEvent:e,subject:n,target:i,identifier:r,active:o,x:s,y:a,dx:l,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}bf.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function q2(t){return!t.ctrlKey&&!t.button}function K2(){return this.parentNode}function Z2(t,e){return e??{x:t.x,y:t.y}}function j2(){return navigator.maxTouchPoints||"ontouchstart"in this}function J2(){var t=q2,e=K2,n=Z2,i=j2,r={},o=Vu("start","drag","end"),s=0,a,l,u,c,d=0;function f(y){y.on("mousedown.drag",h).filter(i).on("touchstart.drag",m).on("touchmove.drag",p,Y2).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(y,P){if(!(c||!t.call(this,y,P))){var L=M(this,e.call(this,y,P),y,P,"mouse");L&&(Gn(y.view).on("mousemove.drag",g,ra).on("mouseup.drag",v,ra),s_(y.view),Zc(y),u=!1,a=y.clientX,l=y.clientY,L("start",y))}}function g(y){if(Yo(y),!u){var P=y.clientX-a,L=y.clientY-l;u=P*P+L*L>d}r.mouse("drag",y)}function v(y){Gn(y.view).on("mousemove.drag mouseup.drag",null),a_(y.view,u),Yo(y),r.mouse("end",y)}function m(y,P){if(t.call(this,y,P)){var L=y.changedTouches,B=e.call(this,y,P),_=L.length,S,R;for(S=0;S<_;++S)(R=M(this,B,y,P,L[S].identifier,L[S]))&&(Zc(y),R("start",y,L[S]))}}function p(y){var P=y.changedTouches,L=P.length,B,_;for(B=0;B<L;++B)(_=r[P[B].identifier])&&(Yo(y),_("drag",y,P[B]))}function x(y){var P=y.changedTouches,L=P.length,B,_;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),B=0;B<L;++B)(_=r[P[B].identifier])&&(Zc(y),_("end",y,P[B]))}function M(y,P,L,B,_,S){var R=o.copy(),A=ri(S||L,P),C,H,w;if((w=n.call(y,new bf("beforestart",{sourceEvent:L,target:f,identifier:_,active:s,x:A[0],y:A[1],dx:0,dy:0,dispatch:R}),B))!=null)return C=w.x-A[0]||0,H=w.y-A[1]||0,function O(T,N,z){var X=A,Z;switch(T){case"start":r[_]=O,Z=s++;break;case"end":delete r[_],--s;case"drag":A=ri(z||N,P),Z=s;break}R.call(T,y,new bf(T,{sourceEvent:N,subject:w,target:f,identifier:_,active:Z,x:A[0]+C,y:A[1]+H,dx:A[0]-X[0],dy:A[1]-X[1],dispatch:R}),B)}}return f.filter=function(y){return arguments.length?(t=typeof y=="function"?y:ol(!!y),f):t},f.container=function(y){return arguments.length?(e=typeof y=="function"?y:ol(y),f):e},f.subject=function(y){return arguments.length?(n=typeof y=="function"?y:ol(y),f):n},f.touchable=function(y){return arguments.length?(i=typeof y=="function"?y:ol(!!y),f):i},f.on=function(){var y=o.on.apply(o,arguments);return y===o?f:y},f.clickDistance=function(y){return arguments.length?(d=(y=+y)*y,f):Math.sqrt(d)},f}function Th(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function l_(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function Ta(){}var oa=.7,ru=1/oa,qo="\\s*([+-]?\\d+)\\s*",sa="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",pi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Q2=/^#([0-9a-f]{3,8})$/,eR=new RegExp(`^rgb\\(${qo},${qo},${qo}\\)$`),tR=new RegExp(`^rgb\\(${pi},${pi},${pi}\\)$`),nR=new RegExp(`^rgba\\(${qo},${qo},${qo},${sa}\\)$`),iR=new RegExp(`^rgba\\(${pi},${pi},${pi},${sa}\\)$`),rR=new RegExp(`^hsl\\(${sa},${pi},${pi}\\)$`),oR=new RegExp(`^hsla\\(${sa},${pi},${pi},${sa}\\)$`),Lm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Th(Ta,co,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Fm,formatHex:Fm,formatHex8:sR,formatHsl:aR,formatRgb:Um,toString:Um});function Fm(){return this.rgb().formatHex()}function sR(){return this.rgb().formatHex8()}function aR(){return u_(this).formatHsl()}function Um(){return this.rgb().formatRgb()}function co(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=Q2.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?Om(e):n===3?new Sn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?sl(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?sl(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=eR.exec(t))?new Sn(e[1],e[2],e[3],1):(e=tR.exec(t))?new Sn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=nR.exec(t))?sl(e[1],e[2],e[3],e[4]):(e=iR.exec(t))?sl(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=rR.exec(t))?zm(e[1],e[2]/100,e[3]/100,1):(e=oR.exec(t))?zm(e[1],e[2]/100,e[3]/100,e[4]):Lm.hasOwnProperty(t)?Om(Lm[t]):t==="transparent"?new Sn(NaN,NaN,NaN,0):null}function Om(t){return new Sn(t>>16&255,t>>8&255,t&255,1)}function sl(t,e,n,i){return i<=0&&(t=e=n=NaN),new Sn(t,e,n,i)}function lR(t){return t instanceof Ta||(t=co(t)),t?(t=t.rgb(),new Sn(t.r,t.g,t.b,t.opacity)):new Sn}function Sf(t,e,n,i){return arguments.length===1?lR(t):new Sn(t,e,n,i??1)}function Sn(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}Th(Sn,Sf,l_(Ta,{brighter(t){return t=t==null?ru:Math.pow(ru,t),new Sn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?oa:Math.pow(oa,t),new Sn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new Sn(oo(this.r),oo(this.g),oo(this.b),ou(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Bm,formatHex:Bm,formatHex8:uR,formatRgb:km,toString:km}));function Bm(){return`#${eo(this.r)}${eo(this.g)}${eo(this.b)}`}function uR(){return`#${eo(this.r)}${eo(this.g)}${eo(this.b)}${eo((isNaN(this.opacity)?1:this.opacity)*255)}`}function km(){const t=ou(this.opacity);return`${t===1?"rgb(":"rgba("}${oo(this.r)}, ${oo(this.g)}, ${oo(this.b)}${t===1?")":`, ${t})`}`}function ou(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function oo(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function eo(t){return t=oo(t),(t<16?"0":"")+t.toString(16)}function zm(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Wn(t,e,n,i)}function u_(t){if(t instanceof Wn)return new Wn(t.h,t.s,t.l,t.opacity);if(t instanceof Ta||(t=co(t)),!t)return new Wn;if(t instanceof Wn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),o=Math.max(e,n,i),s=NaN,a=o-r,l=(o+r)/2;return a?(e===o?s=(n-i)/a+(n<i)*6:n===o?s=(i-e)/a+2:s=(e-n)/a+4,a/=l<.5?o+r:2-o-r,s*=60):a=l>0&&l<1?0:s,new Wn(s,a,l,t.opacity)}function cR(t,e,n,i){return arguments.length===1?u_(t):new Wn(t,e,n,i??1)}function Wn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}Th(Wn,cR,l_(Ta,{brighter(t){return t=t==null?ru:Math.pow(ru,t),new Wn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?oa:Math.pow(oa,t),new Wn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new Sn(jc(t>=240?t-240:t+120,r,i),jc(t,r,i),jc(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new Wn(Vm(this.h),al(this.s),al(this.l),ou(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=ou(this.opacity);return`${t===1?"hsl(":"hsla("}${Vm(this.h)}, ${al(this.s)*100}%, ${al(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Vm(t){return t=(t||0)%360,t<0?t+360:t}function al(t){return Math.max(0,Math.min(1,t||0))}function jc(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const Ah=t=>()=>t;function dR(t,e){return function(n){return t+n*e}}function fR(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function hR(t){return(t=+t)==1?c_:function(e,n){return n-e?fR(e,n,t):Ah(isNaN(e)?n:e)}}function c_(t,e){var n=e-t;return n?dR(t,n):Ah(isNaN(t)?e:t)}const su=(function t(e){var n=hR(e);function i(r,o){var s=n((r=Sf(r)).r,(o=Sf(o)).r),a=n(r.g,o.g),l=n(r.b,o.b),u=c_(r.opacity,o.opacity);return function(c){return r.r=s(c),r.g=a(c),r.b=l(c),r.opacity=u(c),r+""}}return i.gamma=t,i})(1);function pR(t,e){e||(e=[]);var n=t?Math.min(e.length,t.length):0,i=e.slice(),r;return function(o){for(r=0;r<n;++r)i[r]=t[r]*(1-o)+e[r]*o;return i}}function mR(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function gR(t,e){var n=e?e.length:0,i=t?Math.min(n,t.length):0,r=new Array(i),o=new Array(n),s;for(s=0;s<i;++s)r[s]=Ws(t[s],e[s]);for(;s<n;++s)o[s]=e[s];return function(a){for(s=0;s<i;++s)o[s]=r[s](a);return o}}function vR(t,e){var n=new Date;return t=+t,e=+e,function(i){return n.setTime(t*(1-i)+e*i),n}}function ai(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}function _R(t,e){var n={},i={},r;(t===null||typeof t!="object")&&(t={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in t?n[r]=Ws(t[r],e[r]):i[r]=e[r];return function(o){for(r in n)i[r]=n[r](o);return i}}var Mf=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Jc=new RegExp(Mf.source,"g");function yR(t){return function(){return t}}function xR(t){return function(e){return t(e)+""}}function d_(t,e){var n=Mf.lastIndex=Jc.lastIndex=0,i,r,o,s=-1,a=[],l=[];for(t=t+"",e=e+"";(i=Mf.exec(t))&&(r=Jc.exec(e));)(o=r.index)>n&&(o=e.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(i=i[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,l.push({i:s,x:ai(i,r)})),n=Jc.lastIndex;return n<e.length&&(o=e.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?xR(l[0].x):yR(e):(e=l.length,function(u){for(var c=0,d;c<e;++c)a[(d=l[c]).i]=d.x(u);return a.join("")})}function Ws(t,e){var n=typeof e,i;return e==null||n==="boolean"?Ah(e):(n==="number"?ai:n==="string"?(i=co(e))?(e=i,su):d_:e instanceof co?su:e instanceof Date?vR:mR(e)?pR:Array.isArray(e)?gR:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?_R:ai)(t,e)}var $m=180/Math.PI,wf={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function f_(t,e,n,i,r,o){var s,a,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,s=-s),{translateX:r,translateY:o,rotate:Math.atan2(e,t)*$m,skewX:Math.atan(l)*$m,scaleX:s,scaleY:a}}var ll;function bR(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?wf:f_(e.a,e.b,e.c,e.d,e.e,e.f)}function SR(t){return t==null||(ll||(ll=document.createElementNS("http://www.w3.org/2000/svg","g")),ll.setAttribute("transform",t),!(t=ll.transform.baseVal.consolidate()))?wf:(t=t.matrix,f_(t.a,t.b,t.c,t.d,t.e,t.f))}function h_(t,e,n,i){function r(u){return u.length?u.pop()+" ":""}function o(u,c,d,f,h,g){if(u!==d||c!==f){var v=h.push("translate(",null,e,null,n);g.push({i:v-4,x:ai(u,d)},{i:v-2,x:ai(c,f)})}else(d||f)&&h.push("translate("+d+e+f+n)}function s(u,c,d,f){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),f.push({i:d.push(r(d)+"rotate(",null,i)-2,x:ai(u,c)})):c&&d.push(r(d)+"rotate("+c+i)}function a(u,c,d,f){u!==c?f.push({i:d.push(r(d)+"skewX(",null,i)-2,x:ai(u,c)}):c&&d.push(r(d)+"skewX("+c+i)}function l(u,c,d,f,h,g){if(u!==d||c!==f){var v=h.push(r(h)+"scale(",null,",",null,")");g.push({i:v-4,x:ai(u,d)},{i:v-2,x:ai(c,f)})}else(d!==1||f!==1)&&h.push(r(h)+"scale("+d+","+f+")")}return function(u,c){var d=[],f=[];return u=t(u),c=t(c),o(u.translateX,u.translateY,c.translateX,c.translateY,d,f),s(u.rotate,c.rotate,d,f),a(u.skewX,c.skewX,d,f),l(u.scaleX,u.scaleY,c.scaleX,c.scaleY,d,f),u=c=null,function(h){for(var g=-1,v=f.length,m;++g<v;)d[(m=f[g]).i]=m.x(h);return d.join("")}}}var MR=h_(bR,"px, ","px)","deg)"),wR=h_(SR,", ",")",")"),ER=1e-12;function Hm(t){return((t=Math.exp(t))+1/t)/2}function TR(t){return((t=Math.exp(t))-1/t)/2}function AR(t){return((t=Math.exp(2*t))-1)/(t+1)}const Nl=(function t(e,n,i){function r(o,s){var a=o[0],l=o[1],u=o[2],c=s[0],d=s[1],f=s[2],h=c-a,g=d-l,v=h*h+g*g,m,p;if(v<ER)p=Math.log(f/u)/e,m=function(B){return[a+B*h,l+B*g,u*Math.exp(e*B*p)]};else{var x=Math.sqrt(v),M=(f*f-u*u+i*v)/(2*u*n*x),y=(f*f-u*u-i*v)/(2*f*n*x),P=Math.log(Math.sqrt(M*M+1)-M),L=Math.log(Math.sqrt(y*y+1)-y);p=(L-P)/e,m=function(B){var _=B*p,S=Hm(P),R=u/(n*x)*(S*AR(e*_+P)-TR(P));return[a+R*h,l+R*g,u*S/Hm(e*_+P)]}}return m.duration=p*1e3*e/Math.SQRT2,m}return r.rho=function(o){var s=Math.max(.001,+o),a=s*s,l=a*a;return t(s,a,l)},r})(Math.SQRT2,2,4);var ss=0,Ps=0,ws=0,p_=1e3,au,Ns,lu=0,fo=0,Hu=0,aa=typeof performance=="object"&&performance.now?performance:Date,m_=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Ch(){return fo||(m_(CR),fo=aa.now()+Hu)}function CR(){fo=0}function uu(){this._call=this._time=this._next=null}uu.prototype=g_.prototype={constructor:uu,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?Ch():+n)+(e==null?0:+e),!this._next&&Ns!==this&&(Ns?Ns._next=this:au=this,Ns=this),this._call=t,this._time=n,Ef()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ef())}};function g_(t,e,n){var i=new uu;return i.restart(t,e,n),i}function RR(){Ch(),++ss;for(var t=au,e;t;)(e=fo-t._time)>=0&&t._call.call(void 0,e),t=t._next;--ss}function Gm(){fo=(lu=aa.now())+Hu,ss=Ps=0;try{RR()}finally{ss=0,PR(),fo=0}}function IR(){var t=aa.now(),e=t-lu;e>p_&&(Hu-=e,lu=t)}function PR(){for(var t,e=au,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:au=n);Ns=t,Ef(i)}function Ef(t){if(!ss){Ps&&(Ps=clearTimeout(Ps));var e=t-fo;e>24?(t<1/0&&(Ps=setTimeout(Gm,t-aa.now()-Hu)),ws&&(ws=clearInterval(ws))):(ws||(lu=aa.now(),ws=setInterval(IR,p_)),ss=1,m_(Gm))}}function Wm(t,e,n){var i=new uu;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var NR=Vu("start","end","cancel","interrupt"),DR=[],v_=0,Xm=1,Tf=2,Dl=3,Ym=4,Af=5,Ll=6;function Gu(t,e,n,i,r,o){var s=t.__transition;if(!s)t.__transition={};else if(n in s)return;LR(t,n,{name:e,index:i,group:r,on:NR,tween:DR,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:v_})}function Rh(t,e){var n=jn(t,e);if(n.state>v_)throw new Error("too late; already scheduled");return n}function yi(t,e){var n=jn(t,e);if(n.state>Dl)throw new Error("too late; already running");return n}function jn(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function LR(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=g_(o,0,n.time);function o(u){n.state=Xm,n.timer.restart(s,n.delay,n.time),n.delay<=u&&s(u-n.delay)}function s(u){var c,d,f,h;if(n.state!==Xm)return l();for(c in i)if(h=i[c],h.name===n.name){if(h.state===Dl)return Wm(s);h.state===Ym?(h.state=Ll,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[c]):+c<e&&(h.state=Ll,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[c])}if(Wm(function(){n.state===Dl&&(n.state=Ym,n.timer.restart(a,n.delay,n.time),a(u))}),n.state=Tf,n.on.call("start",t,t.__data__,n.index,n.group),n.state===Tf){for(n.state=Dl,r=new Array(f=n.tween.length),c=0,d=-1;c<f;++c)(h=n.tween[c].value.call(t,t.__data__,n.index,n.group))&&(r[++d]=h);r.length=d+1}}function a(u){for(var c=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(l),n.state=Af,1),d=-1,f=r.length;++d<f;)r[d].call(t,c);n.state===Af&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=Ll,n.timer.stop(),delete i[e];for(var u in i)return;delete t.__transition}}function Fl(t,e){var n=t.__transition,i,r,o=!0,s;if(n){e=e==null?null:e+"";for(s in n){if((i=n[s]).name!==e){o=!1;continue}r=i.state>Tf&&i.state<Af,i.state=Ll,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[s]}o&&delete t.__transition}}function FR(t){return this.each(function(){Fl(this,t)})}function UR(t,e){var n,i;return function(){var r=yi(this,t),o=r.tween;if(o!==n){i=n=o;for(var s=0,a=i.length;s<a;++s)if(i[s].name===e){i=i.slice(),i.splice(s,1);break}}r.tween=i}}function OR(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var o=yi(this,t),s=o.tween;if(s!==i){r=(i=s).slice();for(var a={name:e,value:n},l=0,u=r.length;l<u;++l)if(r[l].name===e){r[l]=a;break}l===u&&r.push(a)}o.tween=r}}function BR(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=jn(this.node(),n).tween,r=0,o=i.length,s;r<o;++r)if((s=i[r]).name===t)return s.value;return null}return this.each((e==null?UR:OR)(n,t,e))}function Ih(t,e,n){var i=t._id;return t.each(function(){var r=yi(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return jn(r,i).value[e]}}function __(t,e){var n;return(typeof e=="number"?ai:e instanceof co?su:(n=co(e))?(e=n,su):d_)(t,e)}function kR(t){return function(){this.removeAttribute(t)}}function zR(t){return function(){this.removeAttributeNS(t.space,t.local)}}function VR(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttribute(t);return s===r?null:s===i?o:o=e(i=s,n)}}function $R(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===r?null:s===i?o:o=e(i=s,n)}}function HR(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function GR(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function WR(t,e){var n=$u(t),i=n==="transform"?wR:__;return this.attrTween(t,typeof e=="function"?(n.local?GR:HR)(n,i,Ih(this,"attr."+t,e)):e==null?(n.local?zR:kR)(n):(n.local?$R:VR)(n,i,e))}function XR(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function YR(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function qR(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&YR(t,o)),n}return r._value=e,r}function KR(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&XR(t,o)),n}return r._value=e,r}function ZR(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=$u(t);return this.tween(n,(i.local?qR:KR)(i,e))}function jR(t,e){return function(){Rh(this,t).delay=+e.apply(this,arguments)}}function JR(t,e){return e=+e,function(){Rh(this,t).delay=e}}function QR(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?jR:JR)(e,t)):jn(this.node(),e).delay}function eI(t,e){return function(){yi(this,t).duration=+e.apply(this,arguments)}}function tI(t,e){return e=+e,function(){yi(this,t).duration=e}}function nI(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?eI:tI)(e,t)):jn(this.node(),e).duration}function iI(t,e){if(typeof e!="function")throw new Error;return function(){yi(this,t).ease=e}}function rI(t){var e=this._id;return arguments.length?this.each(iI(e,t)):jn(this.node(),e).ease}function oI(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;yi(this,t).ease=n}}function sI(t){if(typeof t!="function")throw new Error;return this.each(oI(this._id,t))}function aI(t){typeof t!="function"&&(t=Z0(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new Qi(i,this._parents,this._name,this._id)}function lI(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,o=Math.min(i,r),s=new Array(i),a=0;a<o;++a)for(var l=e[a],u=n[a],c=l.length,d=s[a]=new Array(c),f,h=0;h<c;++h)(f=l[h]||u[h])&&(d[h]=f);for(;a<i;++a)s[a]=e[a];return new Qi(s,this._parents,this._name,this._id)}function uI(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function cI(t,e,n){var i,r,o=uI(e)?Rh:yi;return function(){var s=o(this,t),a=s.on;a!==i&&(r=(i=a).copy()).on(e,n),s.on=r}}function dI(t,e){var n=this._id;return arguments.length<2?jn(this.node(),n).on.on(t):this.each(cI(n,t,e))}function fI(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function hI(){return this.on("end.remove",fI(this._id))}function pI(t){var e=this._name,n=this._id;typeof t!="function"&&(t=wh(t));for(var i=this._groups,r=i.length,o=new Array(r),s=0;s<r;++s)for(var a=i[s],l=a.length,u=o[s]=new Array(l),c,d,f=0;f<l;++f)(c=a[f])&&(d=t.call(c,c.__data__,f,a))&&("__data__"in c&&(d.__data__=c.__data__),u[f]=d,Gu(u[f],e,n,f,u,jn(c,n)));return new Qi(o,this._parents,e,n)}function mI(t){var e=this._name,n=this._id;typeof t!="function"&&(t=K0(t));for(var i=this._groups,r=i.length,o=[],s=[],a=0;a<r;++a)for(var l=i[a],u=l.length,c,d=0;d<u;++d)if(c=l[d]){for(var f=t.call(c,c.__data__,d,l),h,g=jn(c,n),v=0,m=f.length;v<m;++v)(h=f[v])&&Gu(h,e,n,v,f,g);o.push(f),s.push(c)}return new Qi(o,s,e,n)}var gI=Ea.prototype.constructor;function vI(){return new gI(this._groups,this._parents)}function _I(t,e){var n,i,r;return function(){var o=os(this,t),s=(this.style.removeProperty(t),os(this,t));return o===s?null:o===n&&s===i?r:r=e(n=o,i=s)}}function y_(t){return function(){this.style.removeProperty(t)}}function yI(t,e,n){var i,r=n+"",o;return function(){var s=os(this,t);return s===r?null:s===i?o:o=e(i=s,n)}}function xI(t,e,n){var i,r,o;return function(){var s=os(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),os(this,t))),s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a))}}function bI(t,e){var n,i,r,o="style."+e,s="end."+o,a;return function(){var l=yi(this,t),u=l.on,c=l.value[o]==null?a||(a=y_(e)):void 0;(u!==n||r!==c)&&(i=(n=u).copy()).on(s,r=c),l.on=i}}function SI(t,e,n){var i=(t+="")=="transform"?MR:__;return e==null?this.styleTween(t,_I(t,i)).on("end.style."+t,y_(t)):typeof e=="function"?this.styleTween(t,xI(t,i,Ih(this,"style."+t,e))).each(bI(this._id,t)):this.styleTween(t,yI(t,i,e),n).on("end.style."+t,null)}function MI(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function wI(t,e,n){var i,r;function o(){var s=e.apply(this,arguments);return s!==r&&(i=(r=s)&&MI(t,s,n)),i}return o._value=e,o}function EI(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,wI(t,e,n??""))}function TI(t){return function(){this.textContent=t}}function AI(t){return function(){var e=t(this);this.textContent=e??""}}function CI(t){return this.tween("text",typeof t=="function"?AI(Ih(this,"text",t)):TI(t==null?"":t+""))}function RI(t){return function(e){this.textContent=t.call(this,e)}}function II(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&RI(r)),e}return i._value=t,i}function PI(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,II(t))}function NI(){for(var t=this._name,e=this._id,n=x_(),i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)if(l=s[u]){var c=jn(l,e);Gu(l,t,n,u,s,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new Qi(i,this._parents,t,n)}function DI(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--r===0&&o()}};n.each(function(){var u=yi(this,i),c=u.on;c!==t&&(e=(t=c).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),u.on=e}),r===0&&o()})}var LI=0;function Qi(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function x_(){return++LI}var Ri=Ea.prototype;Qi.prototype={constructor:Qi,select:pI,selectAll:mI,selectChild:Ri.selectChild,selectChildren:Ri.selectChildren,filter:aI,merge:lI,selection:vI,transition:NI,call:Ri.call,nodes:Ri.nodes,node:Ri.node,size:Ri.size,empty:Ri.empty,each:Ri.each,on:dI,attr:WR,attrTween:ZR,style:SI,styleTween:EI,text:CI,textTween:PI,remove:hI,tween:BR,delay:QR,duration:nI,ease:rI,easeVarying:sI,end:DI,[Symbol.iterator]:Ri[Symbol.iterator]};function FI(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var UI={time:null,delay:0,duration:250,ease:FI};function OI(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function BI(t){var e,n;t instanceof Qi?(e=t._id,t=t._name):(e=x_(),(n=UI).time=Ch(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&Gu(l,t,e,u,s,n||OI(l,e));return new Qi(i,this._parents,t,e)}Ea.prototype.interrupt=FR;Ea.prototype.transition=BI;const ul=t=>()=>t;function kI(t,{sourceEvent:e,target:n,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function Bi(t,e,n){this.k=t,this.x=e,this.y=n}Bi.prototype={constructor:Bi,scale:function(t){return t===1?this:new Bi(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new Bi(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var as=new Bi(1,0,0);Bi.prototype;function Qc(t){t.stopImmediatePropagation()}function Es(t){t.preventDefault(),t.stopImmediatePropagation()}function zI(t){return(!t.ctrlKey||t.type==="wheel")&&!t.button}function VI(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t,t.hasAttribute("viewBox")?(t=t.viewBox.baseVal,[[t.x,t.y],[t.x+t.width,t.y+t.height]]):[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]):[[0,0],[t.clientWidth,t.clientHeight]]}function qm(){return this.__zoom||as}function $I(t){return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function HI(){return navigator.maxTouchPoints||"ontouchstart"in this}function GI(t,e,n){var i=t.invertX(e[0][0])-n[0][0],r=t.invertX(e[1][0])-n[1][0],o=t.invertY(e[0][1])-n[0][1],s=t.invertY(e[1][1])-n[1][1];return t.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),s>o?(o+s)/2:Math.min(0,o)||Math.max(0,s))}function WI(){var t=zI,e=VI,n=GI,i=$I,r=HI,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,l=Nl,u=Vu("start","zoom","end"),c,d,f,h=500,g=150,v=0,m=10;function p(w){w.property("__zoom",qm).on("wheel.zoom",_,{passive:!1}).on("mousedown.zoom",S).on("dblclick.zoom",R).filter(r).on("touchstart.zoom",A).on("touchmove.zoom",C).on("touchend.zoom touchcancel.zoom",H).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(w,O,T,N){var z=w.selection?w.selection():w;z.property("__zoom",qm),w!==z?P(w,O,T,N):z.interrupt().each(function(){L(this,arguments).event(N).start().zoom(null,typeof O=="function"?O.apply(this,arguments):O).end()})},p.scaleBy=function(w,O,T,N){p.scaleTo(w,function(){var z=this.__zoom.k,X=typeof O=="function"?O.apply(this,arguments):O;return z*X},T,N)},p.scaleTo=function(w,O,T,N){p.transform(w,function(){var z=e.apply(this,arguments),X=this.__zoom,Z=T==null?y(z):typeof T=="function"?T.apply(this,arguments):T,ne=X.invert(Z),Q=typeof O=="function"?O.apply(this,arguments):O;return n(M(x(X,Q),Z,ne),z,s)},T,N)},p.translateBy=function(w,O,T,N){p.transform(w,function(){return n(this.__zoom.translate(typeof O=="function"?O.apply(this,arguments):O,typeof T=="function"?T.apply(this,arguments):T),e.apply(this,arguments),s)},null,N)},p.translateTo=function(w,O,T,N,z){p.transform(w,function(){var X=e.apply(this,arguments),Z=this.__zoom,ne=N==null?y(X):typeof N=="function"?N.apply(this,arguments):N;return n(as.translate(ne[0],ne[1]).scale(Z.k).translate(typeof O=="function"?-O.apply(this,arguments):-O,typeof T=="function"?-T.apply(this,arguments):-T),X,s)},N,z)};function x(w,O){return O=Math.max(o[0],Math.min(o[1],O)),O===w.k?w:new Bi(O,w.x,w.y)}function M(w,O,T){var N=O[0]-T[0]*w.k,z=O[1]-T[1]*w.k;return N===w.x&&z===w.y?w:new Bi(w.k,N,z)}function y(w){return[(+w[0][0]+ +w[1][0])/2,(+w[0][1]+ +w[1][1])/2]}function P(w,O,T,N){w.on("start.zoom",function(){L(this,arguments).event(N).start()}).on("interrupt.zoom end.zoom",function(){L(this,arguments).event(N).end()}).tween("zoom",function(){var z=this,X=arguments,Z=L(z,X).event(N),ne=e.apply(z,X),Q=T==null?y(ne):typeof T=="function"?T.apply(z,X):T,de=Math.max(ne[1][0]-ne[0][0],ne[1][1]-ne[0][1]),we=z.__zoom,te=typeof O=="function"?O.apply(z,X):O,D=l(we.invert(Q).concat(de/we.k),te.invert(Q).concat(de/te.k));return function(K){if(K===1)K=te;else{var se=D(K),be=de/se[2];K=new Bi(be,Q[0]-se[0]*be,Q[1]-se[1]*be)}Z.zoom(null,K)}})}function L(w,O,T){return!T&&w.__zooming||new B(w,O)}function B(w,O){this.that=w,this.args=O,this.active=0,this.sourceEvent=null,this.extent=e.apply(w,O),this.taps=0}B.prototype={event:function(w){return w&&(this.sourceEvent=w),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(w,O){return this.mouse&&w!=="mouse"&&(this.mouse[1]=O.invert(this.mouse[0])),this.touch0&&w!=="touch"&&(this.touch0[1]=O.invert(this.touch0[0])),this.touch1&&w!=="touch"&&(this.touch1[1]=O.invert(this.touch1[0])),this.that.__zoom=O,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(w){var O=Gn(this.that).datum();u.call(w,this.that,new kI(w,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:u}),O)}};function _(w,...O){if(!t.apply(this,arguments))return;var T=L(this,O).event(w),N=this.__zoom,z=Math.max(o[0],Math.min(o[1],N.k*Math.pow(2,i.apply(this,arguments)))),X=ri(w);if(T.wheel)(T.mouse[0][0]!==X[0]||T.mouse[0][1]!==X[1])&&(T.mouse[1]=N.invert(T.mouse[0]=X)),clearTimeout(T.wheel);else{if(N.k===z)return;T.mouse=[X,N.invert(X)],Fl(this),T.start()}Es(w),T.wheel=setTimeout(Z,g),T.zoom("mouse",n(M(x(N,z),T.mouse[0],T.mouse[1]),T.extent,s));function Z(){T.wheel=null,T.end()}}function S(w,...O){if(f||!t.apply(this,arguments))return;var T=w.currentTarget,N=L(this,O,!0).event(w),z=Gn(w.view).on("mousemove.zoom",Q,!0).on("mouseup.zoom",de,!0),X=ri(w,T),Z=w.clientX,ne=w.clientY;s_(w.view),Qc(w),N.mouse=[X,this.__zoom.invert(X)],Fl(this),N.start();function Q(we){if(Es(we),!N.moved){var te=we.clientX-Z,D=we.clientY-ne;N.moved=te*te+D*D>v}N.event(we).zoom("mouse",n(M(N.that.__zoom,N.mouse[0]=ri(we,T),N.mouse[1]),N.extent,s))}function de(we){z.on("mousemove.zoom mouseup.zoom",null),a_(we.view,N.moved),Es(we),N.event(we).end()}}function R(w,...O){if(t.apply(this,arguments)){var T=this.__zoom,N=ri(w.changedTouches?w.changedTouches[0]:w,this),z=T.invert(N),X=T.k*(w.shiftKey?.5:2),Z=n(M(x(T,X),N,z),e.apply(this,O),s);Es(w),a>0?Gn(this).transition().duration(a).call(P,Z,N,w):Gn(this).call(p.transform,Z,N,w)}}function A(w,...O){if(t.apply(this,arguments)){var T=w.touches,N=T.length,z=L(this,O,w.changedTouches.length===N).event(w),X,Z,ne,Q;for(Qc(w),Z=0;Z<N;++Z)ne=T[Z],Q=ri(ne,this),Q=[Q,this.__zoom.invert(Q),ne.identifier],z.touch0?!z.touch1&&z.touch0[2]!==Q[2]&&(z.touch1=Q,z.taps=0):(z.touch0=Q,X=!0,z.taps=1+!!c);c&&(c=clearTimeout(c)),X&&(z.taps<2&&(d=Q[0],c=setTimeout(function(){c=null},h)),Fl(this),z.start())}}function C(w,...O){if(this.__zooming){var T=L(this,O).event(w),N=w.changedTouches,z=N.length,X,Z,ne,Q;for(Es(w),X=0;X<z;++X)Z=N[X],ne=ri(Z,this),T.touch0&&T.touch0[2]===Z.identifier?T.touch0[0]=ne:T.touch1&&T.touch1[2]===Z.identifier&&(T.touch1[0]=ne);if(Z=T.that.__zoom,T.touch1){var de=T.touch0[0],we=T.touch0[1],te=T.touch1[0],D=T.touch1[1],K=(K=te[0]-de[0])*K+(K=te[1]-de[1])*K,se=(se=D[0]-we[0])*se+(se=D[1]-we[1])*se;Z=x(Z,Math.sqrt(K/se)),ne=[(de[0]+te[0])/2,(de[1]+te[1])/2],Q=[(we[0]+D[0])/2,(we[1]+D[1])/2]}else if(T.touch0)ne=T.touch0[0],Q=T.touch0[1];else return;T.zoom("touch",n(M(Z,ne,Q),T.extent,s))}}function H(w,...O){if(this.__zooming){var T=L(this,O).event(w),N=w.changedTouches,z=N.length,X,Z;for(Qc(w),f&&clearTimeout(f),f=setTimeout(function(){f=null},h),X=0;X<z;++X)Z=N[X],T.touch0&&T.touch0[2]===Z.identifier?delete T.touch0:T.touch1&&T.touch1[2]===Z.identifier&&delete T.touch1;if(T.touch1&&!T.touch0&&(T.touch0=T.touch1,delete T.touch1),T.touch0)T.touch0[1]=this.__zoom.invert(T.touch0[0]);else if(T.end(),T.taps===2&&(Z=ri(Z,this),Math.hypot(d[0]-Z[0],d[1]-Z[1])<m)){var ne=Gn(this).on("dblclick.zoom");ne&&ne.apply(this,arguments)}}}return p.wheelDelta=function(w){return arguments.length?(i=typeof w=="function"?w:ul(+w),p):i},p.filter=function(w){return arguments.length?(t=typeof w=="function"?w:ul(!!w),p):t},p.touchable=function(w){return arguments.length?(r=typeof w=="function"?w:ul(!!w),p):r},p.extent=function(w){return arguments.length?(e=typeof w=="function"?w:ul([[+w[0][0],+w[0][1]],[+w[1][0],+w[1][1]]]),p):e},p.scaleExtent=function(w){return arguments.length?(o[0]=+w[0],o[1]=+w[1],p):[o[0],o[1]]},p.translateExtent=function(w){return arguments.length?(s[0][0]=+w[0][0],s[1][0]=+w[1][0],s[0][1]=+w[0][1],s[1][1]=+w[1][1],p):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},p.constrain=function(w){return arguments.length?(n=w,p):n},p.duration=function(w){return arguments.length?(a=+w,p):a},p.interpolate=function(w){return arguments.length?(l=w,p):l},p.on=function(){var w=u.on.apply(u,arguments);return w===u?p:w},p.clickDistance=function(w){return arguments.length?(v=(w=+w)*w,p):Math.sqrt(v)},p.tapDistance=function(w){return arguments.length?(m=+w,p):m},p}var Xe=(t=>(t.Left="left",t.Top="top",t.Right="right",t.Bottom="bottom",t))(Xe||{}),Ph=(t=>(t.Partial="partial",t.Full="full",t))(Ph||{}),Kr=(t=>(t.Bezier="default",t.SimpleBezier="simple-bezier",t.Straight="straight",t.Step="step",t.SmoothStep="smoothstep",t))(Kr||{}),Nr=(t=>(t.Strict="strict",t.Loose="loose",t))(Nr||{}),Cf=(t=>(t.Arrow="arrow",t.ArrowClosed="arrowclosed",t))(Cf||{}),Xs=(t=>(t.Free="free",t.Vertical="vertical",t.Horizontal="horizontal",t))(Xs||{});const XI=["INPUT","SELECT","TEXTAREA"],YI=typeof document<"u"?document:null;function Rf(t){var e,n;const i=((n=(e=t.composedPath)==null?void 0:e.call(t))==null?void 0:n[0])||t.target,r=typeof i?.hasAttribute=="function"?i.hasAttribute("contenteditable"):!1,o=typeof i?.closest=="function"?i.closest(".nokey"):null;return XI.includes(i?.nodeName)||r||!!o}function qI(t){return t.ctrlKey||t.metaKey||t.shiftKey||t.altKey}function Km(t,e,n,i){const r=e.replace("+",`
`).replace(`

`,`
+`).split(`
`).map(s=>s.trim().toLowerCase());if(r.length===1)return t.toLowerCase()===e.toLowerCase();i||n.add(t.toLowerCase());const o=r.every((s,a)=>n.has(s)&&Array.from(n.values())[a]===r[a]);return i&&n.delete(t.toLowerCase()),o}function KI(t,e){return n=>{if(!n.code&&!n.key)return!1;const i=ZI(n.code,t);return Array.isArray(t)?t.some(r=>Km(n[i],r,e,n.type==="keyup")):Km(n[i],t,e,n.type==="keyup")}}function ZI(t,e){return e.includes(t)?"code":"key"}function Ys(t,e){const n=Ae(()=>ht(e?.target)??YI),i=Tr(ht(t)===!0);let r=!1;const o=new Set;let s=l(ht(t));ut(()=>ht(t),(u,c)=>{typeof c=="boolean"&&typeof u!="boolean"&&a(),s=l(u)},{immediate:!0}),Y0(["blur","contextmenu"],a),Pm((...u)=>s(...u),u=>{var c,d;const f=ht(e?.actInsideInputWithModifier)??!0,h=ht(e?.preventDefault)??!1;if(r=qI(u),(!r||r&&!f)&&Rf(u))return;const v=((d=(c=u.composedPath)==null?void 0:c.call(u))==null?void 0:d[0])||u.target,m=v?.nodeName==="BUTTON"||v?.nodeName==="A";!h&&(r||!m)&&u.preventDefault(),i.value=!0},{eventName:"keydown",target:n}),Pm((...u)=>s(...u),u=>{const c=ht(e?.actInsideInputWithModifier)??!0;if(i.value){if((!r||r&&!c)&&Rf(u))return;r=!1,i.value=!1}},{eventName:"keyup",target:n});function a(){r=!1,o.clear(),i.value=ht(t)===!0}function l(u){return u===null?(a(),()=>!1):typeof u=="boolean"?(a(),i.value=u,()=>!1):Array.isArray(u)||typeof u=="string"?KI(u,o):u}return i}const b_="vue-flow__node-desc",S_="vue-flow__edge-desc",jI="vue-flow__aria-live",M_=["Enter"," ","Escape"],Ko={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}};function cu(t){return{...t.computedPosition||{x:0,y:0},width:t.dimensions.width||0,height:t.dimensions.height||0}}function du(t,e){const n=Math.max(0,Math.min(t.x+t.width,e.x+e.width)-Math.max(t.x,e.x)),i=Math.max(0,Math.min(t.y+t.height,e.y+e.height)-Math.max(t.y,e.y));return Math.ceil(n*i)}function Wu(t){return{width:t.offsetWidth,height:t.offsetHeight}}function er(t,e=0,n=1){return Math.min(Math.max(t,e),n)}function w_(t,e){return{x:er(t.x,e[0][0],e[1][0]),y:er(t.y,e[0][1],e[1][1])}}function Zm(t){const e=t.getRootNode();return"elementFromPoint"in e?e:window.document}function Dr(t){return t&&typeof t=="object"&&"id"in t&&"source"in t&&"target"in t}function so(t){return t&&typeof t=="object"&&"id"in t&&"position"in t&&!Dr(t)}function Ds(t){return so(t)&&"computedPosition"in t}function cl(t){return!Number.isNaN(t)&&Number.isFinite(t)}function JI(t){return cl(t.width)&&cl(t.height)&&cl(t.x)&&cl(t.y)}function QI(t,e,n){const i={id:t.id.toString(),type:t.type??"default",dimensions:io({width:0,height:0}),computedPosition:io({z:0,...t.position}),handleBounds:{source:[],target:[]},draggable:void 0,selectable:void 0,connectable:void 0,focusable:void 0,selected:!1,dragging:!1,resizing:!1,initialized:!1,isParent:!1,position:{x:0,y:0},data:$t(t.data)?t.data:{},events:io($t(t.events)?t.events:{})};return Object.assign(e??i,t,{id:t.id.toString(),parentNode:n})}function E_(t,e,n){var i,r;const o={id:t.id.toString(),type:t.type??e?.type??"default",source:t.source.toString(),target:t.target.toString(),sourceHandle:(i=t.sourceHandle)==null?void 0:i.toString(),targetHandle:(r=t.targetHandle)==null?void 0:r.toString(),updatable:t.updatable??n?.updatable,selectable:t.selectable??n?.selectable,focusable:t.focusable??n?.focusable,data:$t(t.data)?t.data:{},events:io($t(t.events)?t.events:{}),label:t.label??"",interactionWidth:t.interactionWidth??n?.interactionWidth,...n??{}};return Object.assign(e??o,t,{id:t.id.toString()})}function T_(t,e,n,i){const r=typeof t=="string"?t:t.id,o=new Set,s=i==="source"?"target":"source";for(const a of n)a[s]===r&&o.add(a[i]);return e.filter(a=>o.has(a.id))}function eP(...t){if(t.length===3){const[o,s,a]=t;return T_(o,s,a,"target")}const[e,n]=t,i=typeof e=="string"?e:e.id;return n.filter(o=>Dr(o)&&o.source===i).map(o=>n.find(s=>so(s)&&s.id===o.target))}function tP(...t){if(t.length===3){const[o,s,a]=t;return T_(o,s,a,"source")}const[e,n]=t,i=typeof e=="string"?e:e.id;return n.filter(o=>Dr(o)&&o.target===i).map(o=>n.find(s=>so(s)&&s.id===o.source))}function A_({source:t,sourceHandle:e,target:n,targetHandle:i}){return`vueflow__edge-${t}${e??""}-${n}${i??""}`}function nP(t,e){return e.some(n=>Dr(n)&&n.source===t.source&&n.target===t.target&&(n.sourceHandle===t.sourceHandle||!n.sourceHandle&&!t.sourceHandle)&&(n.targetHandle===t.targetHandle||!n.targetHandle&&!t.targetHandle))}function la({x:t,y:e},{x:n,y:i,zoom:r}){return{x:t*r+n,y:e*r+i}}function ua({x:t,y:e},{x:n,y:i,zoom:r},o=!1,s=[1,1]){const a={x:(t-n)/r,y:(e-i)/r};return o?Xu(a,s):a}function C_(t,e){return{x:Math.min(t.x,e.x),y:Math.min(t.y,e.y),x2:Math.max(t.x2,e.x2),y2:Math.max(t.y2,e.y2)}}function fu({x:t,y:e,width:n,height:i}){return{x:t,y:e,x2:t+n,y2:e+i}}function R_({x:t,y:e,x2:n,y2:i}){return{x:t,y:e,width:n-t,height:i-e}}function iP(t,e){return R_(C_(fu(t),fu(e)))}function Nh(t){let e={x:Number.POSITIVE_INFINITY,y:Number.POSITIVE_INFINITY,x2:Number.NEGATIVE_INFINITY,y2:Number.NEGATIVE_INFINITY};for(let n=0;n<t.length;n++){const i=t[n];e=C_(e,fu({...i.computedPosition,...i.dimensions}))}return R_(e)}function I_(t,e,n={x:0,y:0,zoom:1},i=!1,r=!1){const o={...ua(e,n),width:e.width/n.zoom,height:e.height/n.zoom},s=[];for(const a of t){const{dimensions:l,selectable:u=!0,hidden:c=!1}=a,d=l.width??a.width??null,f=l.height??a.height??null;if(r&&!u||c)continue;const h=du(o,cu(a)),g=d===null||f===null,v=i&&h>0,m=(d??0)*(f??0);(g||v||h>=m||a.dragging)&&s.push(a)}return s}function Zr(t,e){const n=new Set;if(typeof t=="string")n.add(t);else if(t.length>=1)for(const i of t)n.add(i.id);return e.filter(i=>n.has(i.source)||n.has(i.target))}function Uo(t,e){if(typeof t=="number")return Math.floor((e-e/(1+t))*.5);if(typeof t=="string"&&t.endsWith("px")){const n=Number.parseFloat(t);if(!Number.isNaN(n))return Math.floor(n)}if(typeof t=="string"&&t.endsWith("%")){const n=Number.parseFloat(t);if(!Number.isNaN(n))return Math.floor(e*n*.01)}return Aa(`The padding value "${t}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function rP(t,e,n){if(typeof t=="string"||typeof t=="number"){const i=Uo(t,n),r=Uo(t,e);return{top:i,right:r,bottom:i,left:r,x:r*2,y:i*2}}if(typeof t=="object"){const i=Uo(t.top??t.y??0,n),r=Uo(t.bottom??t.y??0,n),o=Uo(t.left??t.x??0,e),s=Uo(t.right??t.x??0,e);return{top:i,right:s,bottom:r,left:o,x:o+s,y:i+r}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function oP(t,e,n,i,r,o){const{x:s,y:a}=la(t,{x:e,y:n,zoom:i}),{x:l,y:u}=la({x:t.x+t.width,y:t.y+t.height},{x:e,y:n,zoom:i}),c=r-l,d=o-u;return{left:Math.floor(s),top:Math.floor(a),right:Math.floor(c),bottom:Math.floor(d)}}function jm(t,e,n,i,r,o=.1){const s=rP(o,e,n),a=(e-s.x)/t.width,l=(n-s.y)/t.height,u=Math.min(a,l),c=er(u,i,r),d=t.x+t.width/2,f=t.y+t.height/2,h=e/2-d*c,g=n/2-f*c,v=oP(t,h,g,c,e,n),m={left:Math.min(v.left-s.left,0),top:Math.min(v.top-s.top,0),right:Math.min(v.right-s.right,0),bottom:Math.min(v.bottom-s.bottom,0)};return{x:h-m.left+m.right,y:g-m.top+m.bottom,zoom:c}}function sP(t,e){return{x:e.x+t.x,y:e.y+t.y,z:(t.z>e.z?t.z:e.z)+1}}function P_(t,e){if(!t.parentNode)return!1;const n=e.get(t.parentNode);return n?n.selected?!0:P_(n,e):!1}function ca(t,e){return typeof t>"u"?"":typeof t=="string"?t:`${e?`${e}__`:""}${Object.keys(t).sort().map(i=>`${i}=${t[i]}`).join("&")}`}function If(t){const e=t.ctrlKey&&da()?10:1;return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*e}function Jm(t,e,n){return t<e?er(Math.abs(t-e),1,e)/e:t>n?-er(Math.abs(t-n),1,e)/e:0}function N_(t,e,n=15,i=40){const r=Jm(t.x,i,e.width-i)*n,o=Jm(t.y,i,e.height-i)*n;return[r,o]}function ed(t,e){if(e){const n=t.position.x+t.dimensions.width-e.dimensions.width,i=t.position.y+t.dimensions.height-e.dimensions.height;if(n>0||i>0||t.position.x<0||t.position.y<0){let r={};if(typeof e.style=="function"?r={...e.style(e)}:e.style&&(r={...e.style}),r.width=r.width??`${e.dimensions.width}px`,r.height=r.height??`${e.dimensions.height}px`,n>0)if(typeof r.width=="string"){const o=Number(r.width.replace("px",""));r.width=`${o+n}px`}else r.width+=n;if(i>0)if(typeof r.height=="string"){const o=Number(r.height.replace("px",""));r.height=`${o+i}px`}else r.height+=i;if(t.position.x<0){const o=Math.abs(t.position.x);if(e.position.x=e.position.x-o,typeof r.width=="string"){const s=Number(r.width.replace("px",""));r.width=`${s+o}px`}else r.width+=o;t.position.x=0}if(t.position.y<0){const o=Math.abs(t.position.y);if(e.position.y=e.position.y-o,typeof r.height=="string"){const s=Number(r.height.replace("px",""));r.height=`${s+o}px`}else r.height+=o;t.position.y=0}e.dimensions.width=Number(r.width.toString().replace("px","")),e.dimensions.height=Number(r.height.toString().replace("px","")),typeof e.style=="function"?e.style=o=>{const s=e.style;return{...s(o),...r}}:e.style={...e.style,...r}}}}function Qm(t,e){var n,i;const r=t.filter(s=>s.type==="add"||s.type==="remove");for(const s of r)if(s.type==="add")e.findIndex(l=>l.id===s.item.id)===-1&&e.push(s.item);else if(s.type==="remove"){const a=e.findIndex(l=>l.id===s.id);a!==-1&&e.splice(a,1)}const o=e.map(s=>s.id);for(const s of e)for(const a of t)if(a.id===s.id)switch(a.type){case"select":s.selected=a.selected;break;case"position":if(Ds(s)&&(typeof a.position<"u"&&(s.position=a.position),typeof a.dragging<"u"&&(s.dragging=a.dragging),s.expandParent&&s.parentNode)){const l=e[o.indexOf(s.parentNode)];l&&Ds(l)&&ed(s,l)}break;case"dimensions":if(Ds(s)&&(typeof a.dimensions<"u"&&(s.dimensions=a.dimensions),typeof a.updateStyle<"u"&&a.updateStyle&&(s.style={...s.style||{},width:`${(n=a.dimensions)==null?void 0:n.width}px`,height:`${(i=a.dimensions)==null?void 0:i.height}px`}),typeof a.resizing<"u"&&(s.resizing=a.resizing),s.expandParent&&s.parentNode)){const l=e[o.indexOf(s.parentNode)];l&&Ds(l)&&(!!l.dimensions.width&&!!l.dimensions.height?ed(s,l):fn(()=>{ed(s,l)}))}break}return e}function vr(t,e){return{id:t,type:"select",selected:e}}function eg(t){return{item:t,type:"add"}}function tg(t){return{id:t,type:"remove"}}function ng(t,e,n,i,r){return{id:t,source:e,target:n,sourceHandle:i||null,targetHandle:r||null,type:"remove"}}function br(t,e=new Set,n=!1){const i=[];for(const[r,o]of t){const s=e.has(r);!(o.selected===void 0&&!s)&&o.selected!==s&&(n&&(o.selected=s),i.push(vr(o.id,s)))}return i}const ig=()=>{};function $e(t){const e=new Set;let n=ig,i=()=>!1;const r=()=>e.size>0||i(),o=f=>{n=f},s=()=>{n=ig},a=f=>{i=f},l=()=>{i=()=>!1},u=f=>{e.delete(f)};return{on:f=>{e.add(f);const h=()=>u(f);return ia(h),{off:h}},off:u,trigger:f=>{const h=[n];return r()?h.push(...e):t&&h.push(t),Promise.allSettled(h.map(g=>g(f)))},hasListeners:r,listeners:e,setEmitter:o,removeEmitter:s,setHasEmitListeners:a,removeHasEmitListeners:l}}function rg(t,e,n){let i=t;do{if(i&&i.matches(e))return!0;if(i===n)return!1;i=i.parentElement}while(i);return!1}function aP(t,e,n,i){var r,o;const s=new Map;for(const[a,l]of t)(l.selected||l.id===i)&&(!l.parentNode||!P_(l,t))&&(l.draggable||e&&typeof l.draggable>"u")&&t.get(a)&&s.set(a,{id:l.id,position:l.position||{x:0,y:0},distance:{x:n.x-((r=l.computedPosition)==null?void 0:r.x)||0,y:n.y-((o=l.computedPosition)==null?void 0:o.y)||0},from:{x:l.computedPosition.x,y:l.computedPosition.y},extent:l.extent,parentNode:l.parentNode,dimensions:{...l.dimensions},expandParent:l.expandParent});return Array.from(s.values())}function td({id:t,dragItems:e,findNode:n}){const i=[];for(const r of e){const o=n(r.id);o&&i.push(o)}return[t?i.find(r=>r.id===t):i[0],i]}function D_(t){if(Array.isArray(t))switch(t.length){case 1:return[t[0],t[0],t[0],t[0]];case 2:return[t[0],t[1],t[0],t[1]];case 3:return[t[0],t[1],t[2],t[1]];case 4:return t;default:return[0,0,0,0]}return[t,t,t,t]}function lP(t,e,n){const[i,r,o,s]=typeof t!="string"?D_(t.padding):[0,0,0,0];return n&&typeof n.computedPosition.x<"u"&&typeof n.computedPosition.y<"u"&&typeof n.dimensions.width<"u"&&typeof n.dimensions.height<"u"?[[n.computedPosition.x+s,n.computedPosition.y+i],[n.computedPosition.x+n.dimensions.width-r,n.computedPosition.y+n.dimensions.height-o]]:!1}function uP(t,e,n,i){let r=t.extent||n;if((r==="parent"||!Array.isArray(r)&&r?.range==="parent")&&!t.expandParent)if(t.parentNode&&i&&t.dimensions.width&&t.dimensions.height){const o=lP(r,t,i);o&&(r=o)}else e(new Xt(Gt.NODE_EXTENT_INVALID,t.id)),r=n;else if(Array.isArray(r)){const o=i?.computedPosition.x||0,s=i?.computedPosition.y||0;r=[[r[0][0]+o,r[0][1]+s],[r[1][0]+o,r[1][1]+s]]}else if(r!=="parent"&&r?.range&&Array.isArray(r.range)){const[o,s,a,l]=D_(r.padding),u=i?.computedPosition.x||0,c=i?.computedPosition.y||0;r=[[r.range[0][0]+u+l,r.range[0][1]+c+o],[r.range[1][0]+u-s,r.range[1][1]+c-a]]}return r==="parent"?[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]]:r}function cP({width:t,height:e},n){return[n[0],[n[1][0]-(t||0),n[1][1]-(e||0)]]}function Dh(t,e,n,i,r){const o=cP(t.dimensions,uP(t,n,i,r)),s=w_(e,o);return{position:{x:s.x-(r?.computedPosition.x||0),y:s.y-(r?.computedPosition.y||0)},computedPosition:s}}function ls(t,e,n=Xe.Left,i=!1){const r=(e?.x??0)+t.computedPosition.x,o=(e?.y??0)+t.computedPosition.y,{width:s,height:a}=e??pP(t);if(i)return{x:r+s/2,y:o+a/2};switch(e?.position??n){case Xe.Top:return{x:r+s/2,y:o};case Xe.Right:return{x:r+s,y:o+a/2};case Xe.Bottom:return{x:r+s/2,y:o+a};case Xe.Left:return{x:r,y:o+a/2}}}function og(t,e){return t&&(e?t.find(n=>n.id===e):t[0])||null}function dP({sourcePos:t,targetPos:e,sourceWidth:n,sourceHeight:i,targetWidth:r,targetHeight:o,width:s,height:a,viewport:l}){const u={x:Math.min(t.x,e.x),y:Math.min(t.y,e.y),x2:Math.max(t.x+n,e.x+r),y2:Math.max(t.y+i,e.y+o)};u.x===u.x2&&(u.x2+=1),u.y===u.y2&&(u.y2+=1);const c=fu({x:(0-l.x)/l.zoom,y:(0-l.y)/l.zoom,width:s/l.zoom,height:a/l.zoom}),d=Math.max(0,Math.min(c.x2,u.x2)-Math.max(c.x,u.x)),f=Math.max(0,Math.min(c.y2,u.y2)-Math.max(c.y,u.y));return Math.ceil(d*f)>0}function fP(t,e,n=!1){const i=typeof t.zIndex=="number";let r=i?t.zIndex:0;const o=e(t.source),s=e(t.target);return!o||!s?0:(n&&(r=i?t.zIndex:Math.max(o.computedPosition.z||0,s.computedPosition.z||0)),r)}var Gt=(t=>(t.MISSING_STYLES="MISSING_STYLES",t.MISSING_VIEWPORT_DIMENSIONS="MISSING_VIEWPORT_DIMENSIONS",t.NODE_INVALID="NODE_INVALID",t.NODE_NOT_FOUND="NODE_NOT_FOUND",t.NODE_MISSING_PARENT="NODE_MISSING_PARENT",t.NODE_TYPE_MISSING="NODE_TYPE_MISSING",t.NODE_EXTENT_INVALID="NODE_EXTENT_INVALID",t.EDGE_INVALID="EDGE_INVALID",t.EDGE_NOT_FOUND="EDGE_NOT_FOUND",t.EDGE_SOURCE_MISSING="EDGE_SOURCE_MISSING",t.EDGE_TARGET_MISSING="EDGE_TARGET_MISSING",t.EDGE_TYPE_MISSING="EDGE_TYPE_MISSING",t.EDGE_SOURCE_TARGET_SAME="EDGE_SOURCE_TARGET_SAME",t.EDGE_SOURCE_TARGET_MISSING="EDGE_SOURCE_TARGET_MISSING",t.EDGE_ORPHANED="EDGE_ORPHANED",t.USEVUEFLOW_OPTIONS="USEVUEFLOW_OPTIONS",t))(Gt||{});const sg={MISSING_STYLES:()=>"It seems that you haven't loaded the necessary styles. Please import '@vue-flow/core/dist/style.css' to ensure that the graph is rendered correctly",MISSING_VIEWPORT_DIMENSIONS:()=>"The Vue Flow parent container needs a width and a height to render the graph",NODE_INVALID:t=>`Node is invalid
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
Edge: ${t}`,USEVUEFLOW_OPTIONS:()=>"The options parameter is deprecated and will be removed in the next major version. Please use the id parameter instead"};class Xt extends Error{constructor(e,...n){var i;super((i=sg[e])==null?void 0:i.call(sg,...n)),this.name="VueFlowError",this.code=e,this.args=n}}function Lh(t){return"clientX"in t}function hP(t){return"sourceEvent"in t}function li(t,e){const n=Lh(t);let i,r;return n?(i=t.clientX,r=t.clientY):"touches"in t&&t.touches.length>0?(i=t.touches[0].clientX,r=t.touches[0].clientY):"changedTouches"in t&&t.changedTouches.length>0?(i=t.changedTouches[0].clientX,r=t.changedTouches[0].clientY):(i=0,r=0),{x:i-(e?.left??0),y:r-(e?.top??0)}}const da=()=>{var t;return typeof navigator<"u"&&((t=navigator?.userAgent)==null?void 0:t.indexOf("Mac"))>=0};function pP(t){var e,n;return{width:((e=t.dimensions)==null?void 0:e.width)??t.width??0,height:((n=t.dimensions)==null?void 0:n.height)??t.height??0}}function Xu(t,e=[1,1]){return{x:e[0]*Math.round(t.x/e[0]),y:e[1]*Math.round(t.y/e[1])}}const mP=()=>!0;function nd(t){t?.classList.remove("valid","connecting","vue-flow__handle-valid","vue-flow__handle-connecting")}function gP(t,e,n){const i=[],r={x:t.x-n,y:t.y-n,width:n*2,height:n*2};for(const o of e.values())du(r,cu(o))>0&&i.push(o);return i}const vP=250;function _P(t,e,n,i){var r,o;let s=[],a=Number.POSITIVE_INFINITY;const l=gP(t,n,e+vP);for(const u of l){const c=[...((r=u.handleBounds)==null?void 0:r.source)??[],...((o=u.handleBounds)==null?void 0:o.target)??[]];for(const d of c){if(i.nodeId===d.nodeId&&i.type===d.type&&i.id===d.id)continue;const{x:f,y:h}=ls(u,d,d.position,!0),g=Math.sqrt((f-t.x)**2+(h-t.y)**2);g>e||(g<a?(s=[{...d,x:f,y:h}],a=g):g===a&&s.push({...d,x:f,y:h}))}}if(!s.length)return null;if(s.length>1){const u=i.type==="source"?"target":"source";return s.find(c=>c.type===u)??s[0]}return s[0]}function ag(t,{handle:e,connectionMode:n,fromNodeId:i,fromHandleId:r,fromType:o,doc:s,lib:a,flowId:l,isValidConnection:u=mP},c,d,f,h){const g=o==="target",v=e?s.querySelector(`.${a}-flow__handle[data-id="${l}-${e?.nodeId}-${e?.id}-${e?.type}"]`):null,{x:m,y:p}=li(t),x=s.elementFromPoint(m,p),M=x?.classList.contains(`${a}-flow__handle`)?x:v,y={handleDomNode:M,isValid:!1,connection:null,toHandle:null};if(M){const P=L_(void 0,M),L=M.getAttribute("data-nodeid"),B=M.getAttribute("data-handleid"),_=M.classList.contains("connectable"),S=M.classList.contains("connectableend");if(!L||!P)return y;const R={source:g?L:i,sourceHandle:g?B:r,target:g?i:L,targetHandle:g?r:B};y.connection=R;const C=_&&S&&(n===Nr.Strict?g&&P==="source"||!g&&P==="target":L!==i||B!==r);y.isValid=C&&u(R,{nodes:d,edges:c,sourceNode:f(R.source),targetNode:f(R.target)}),y.toHandle=F_(L,P,B,h,n,!0)}return y}function L_(t,e){return t||(e?.classList.contains("target")?"target":e?.classList.contains("source")?"source":null)}function yP(t,e){let n=null;return e?n="valid":t&&!e&&(n="invalid"),n}function xP(t,e){let n=null;return e?n=!0:t&&!e&&(n=!1),n}function F_(t,e,n,i,r,o=!1){var s,a,l;const u=i.get(t);if(!u)return null;const c=r===Nr.Strict?(s=u.handleBounds)==null?void 0:s[e]:[...((a=u.handleBounds)==null?void 0:a.source)??[],...((l=u.handleBounds)==null?void 0:l.target)??[]],d=(n?c?.find(f=>f.id===n):c?.[0])??null;return d&&o?{...d,...ls(u,d,d.position,!0)}:d}const Pf={[Xe.Left]:Xe.Right,[Xe.Right]:Xe.Left,[Xe.Top]:Xe.Bottom,[Xe.Bottom]:Xe.Top},bP=["production","prod"];function Aa(t,...e){U_()&&console.warn(`[Vue Flow]: ${t}`,...e)}function U_(){return!bP.includes("production")}function lg(t,e,n,i,r){const o=e.querySelectorAll(`.vue-flow__handle.${t}`);return o?.length?Array.from(o).map(s=>{const a=s.getBoundingClientRect();return{id:s.getAttribute("data-handleid"),type:t,nodeId:r,position:s.getAttribute("data-handlepos"),x:(a.left-n.left)/i,y:(a.top-n.top)/i,...Wu(s)}}):null}function Nf(t,e,n,i,r,o=!1,s){r.value=!1,t.selected?(o||t.selected&&e)&&(i([t]),fn(()=>{s.blur()})):n([t])}function $t(t){return typeof he(t)<"u"}function SP(t,e,n,i){if(!t||!t.source||!t.target)return n(new Xt(Gt.EDGE_INVALID,t?.id??"[ID UNKNOWN]")),!1;let r;return Dr(t)?r=t:r={...t,id:A_(t)},r=E_(r,void 0,i),nP(r,e)?!1:r}function MP(t,e,n,i,r){if(!e.source||!e.target)return r(new Xt(Gt.EDGE_INVALID,t.id)),!1;if(!n)return r(new Xt(Gt.EDGE_NOT_FOUND,t.id)),!1;const{id:o,...s}=t;return{...s,id:i?A_(e):o,source:e.source,target:e.target,sourceHandle:e.sourceHandle,targetHandle:e.targetHandle}}function ug(t,e,n){const i={},r=[];for(let o=0;o<t.length;++o){const s=t[o];if(!so(s)){n(new Xt(Gt.NODE_INVALID,s?.id)||`[ID UNKNOWN|INDEX ${o}]`);continue}const a=QI(s,e(s.id),s.parentNode);s.parentNode&&(i[s.parentNode]=!0),r[o]=a}for(const o of r){const s=e(o.parentNode)||r.find(a=>a.id===o.parentNode);o.parentNode&&!s&&n(new Xt(Gt.NODE_MISSING_PARENT,o.id,o.parentNode)),(o.parentNode||i[o.id])&&(i[o.id]&&(o.isParent=!0),s&&(s.isParent=!0))}return r}function cg(t,e,n,i,r,o){let s=r;const a=i.get(s)||new Map;i.set(s,a.set(n,e)),s=`${r}-${t}`;const l=i.get(s)||new Map;if(i.set(s,l.set(n,e)),o){s=`${r}-${t}-${o}`;const u=i.get(s)||new Map;i.set(s,u.set(n,e))}}function id(t,e,n){t.clear();for(const i of n){const{source:r,target:o,sourceHandle:s=null,targetHandle:a=null}=i,l={edgeId:i.id,source:r,target:o,sourceHandle:s,targetHandle:a},u=`${r}-${s}--${o}-${a}`,c=`${o}-${a}--${r}-${s}`;cg("source",l,c,t,r,s),cg("target",l,u,t,o,a)}}function dg(t,e){if(t.size!==e.size)return!1;for(const n of t)if(!e.has(n))return!1;return!0}function rd(t,e,n,i,r,o,s,a){const l=[];for(const u of t){const c=Dr(u)?u:SP(u,a,r,o);if(!c)continue;const d=n(c.source),f=n(c.target);if(!d||!f){r(new Xt(Gt.EDGE_SOURCE_TARGET_MISSING,c.id,c.source,c.target));continue}if(!d){r(new Xt(Gt.EDGE_SOURCE_MISSING,c.id,c.source));continue}if(!f){r(new Xt(Gt.EDGE_TARGET_MISSING,c.id,c.target));continue}if(e&&!e(c,{edges:a,nodes:s,sourceNode:d,targetNode:f})){r(new Xt(Gt.EDGE_INVALID,c.id));continue}const h=i(c.id);l.push({...E_(c,h,o),sourceNode:d,targetNode:f})}return l}const fg=Symbol("vueFlow"),Fh=Symbol("nodeId"),O_=Symbol("nodeRef"),wP=Symbol("edgeId"),EP=Symbol("edgeRef"),Yu=Symbol("slots");function B_(t){const{vueFlowRef:e,snapToGrid:n,snapGrid:i,noDragClassName:r,nodeLookup:o,nodeExtent:s,nodeDragThreshold:a,viewport:l,autoPanOnNodeDrag:u,autoPanSpeed:c,nodesDraggable:d,panBy:f,findNode:h,multiSelectionActive:g,nodesSelectionActive:v,selectNodesOnDrag:m,removeSelectedElements:p,addSelectedNodes:x,updateNodePositions:M,emits:y}=Dt(),{onStart:P,onDrag:L,onStop:B,onClick:_,el:S,disabled:R,id:A,selectable:C,dragHandle:H}=t,w=Tr(!1);let O=[],T,N=null,z={x:void 0,y:void 0},X={x:0,y:0},Z=null,ne=!1,Q=!1,de=0,we=!1;const te=k_(),D=({x:$,y:G})=>{z={x:$,y:G};let F=!1;if(O=O.map(U=>{const k={x:$-U.distance.x,y:G-U.distance.y},{computedPosition:W}=Dh(U,n.value?Xu(k,i.value):k,y.error,s.value,U.parentNode?h(U.parentNode):void 0);return F=F||U.position.x!==W.x||U.position.y!==W.y,U.position=W,U}),Q=Q||F,!!F&&(M(O,!0,!0),w.value=!0,Z)){const[U,k]=td({id:A,dragItems:O,findNode:h});L({event:Z,node:U,nodes:k})}},K=()=>{if(!N)return;const[$,G]=N_(X,N,c.value);if($!==0||G!==0){const F={x:(z.x??0)-$/l.value.zoom,y:(z.y??0)-G/l.value.zoom};f({x:$,y:G})&&D(F)}de=requestAnimationFrame(K)},se=($,G)=>{ne=!0;const F=h(A);!m.value&&!g.value&&F&&(F.selected||p()),F&&ht(C)&&m.value&&Nf(F,g.value,x,p,v,!1,G);const U=te($.sourceEvent);if(z=U,O=aP(o.value,d.value,U,A),O.length){const[k,W]=td({id:A,dragItems:O,findNode:h});P({event:$.sourceEvent,node:k,nodes:W})}},be=($,G)=>{var F;$.sourceEvent.type==="touchmove"&&$.sourceEvent.touches.length>1||(Q=!1,a.value===0&&se($,G),z=te($.sourceEvent),N=((F=e.value)==null?void 0:F.getBoundingClientRect())||null,X=li($.sourceEvent,N))},Se=($,G)=>{const F=te($.sourceEvent);if(!we&&ne&&u.value&&(we=!0,K()),!ne){const U=F.xSnapped-(z.x??0),k=F.ySnapped-(z.y??0);Math.sqrt(U*U+k*k)>a.value&&se($,G)}(z.x!==F.xSnapped||z.y!==F.ySnapped)&&O.length&&ne&&(Z=$.sourceEvent,X=li($.sourceEvent,N),D(F))},Re=$=>{let G=!1;if(!ne&&!w.value&&!g.value){const F=$.sourceEvent,U=te(F),k=U.xSnapped-(z.x??0),W=U.ySnapped-(z.y??0),b=Math.sqrt(k*k+W*W);b!==0&&b<=a.value&&(_?.(F),G=!0)}if(O.length&&!G){Q&&(M(O,!1,!1),Q=!1);const[F,U]=td({id:A,dragItems:O,findNode:h});B({event:$.sourceEvent,node:F,nodes:U})}O=[],w.value=!1,we=!1,ne=!1,z={x:void 0,y:void 0},cancelAnimationFrame(de)};return ut([()=>ht(R),S],([$,G],F,U)=>{if(G){const k=Gn(G);$||(T=J2().on("start",W=>be(W,G)).on("drag",W=>Se(W,G)).on("end",W=>Re(W)).filter(W=>{const b=W.target,q=ht(H);return!W.button&&(!r.value||!rg(b,`.${r.value}`,G)&&(!q||rg(b,q,G)))}),k.call(T)),U(()=>{k.on(".drag",null),T&&(T.on("start",null),T.on("drag",null),T.on("end",null))})}}),w}function TP(){return{doubleClick:$e(),click:$e(),mouseEnter:$e(),mouseMove:$e(),mouseLeave:$e(),contextMenu:$e(),updateStart:$e(),update:$e(),updateEnd:$e()}}function AP(t,e){const n=TP();return n.doubleClick.on(i=>{var r,o;e.edgeDoubleClick(i),(o=(r=t.events)==null?void 0:r.doubleClick)==null||o.call(r,i)}),n.click.on(i=>{var r,o;e.edgeClick(i),(o=(r=t.events)==null?void 0:r.click)==null||o.call(r,i)}),n.mouseEnter.on(i=>{var r,o;e.edgeMouseEnter(i),(o=(r=t.events)==null?void 0:r.mouseEnter)==null||o.call(r,i)}),n.mouseMove.on(i=>{var r,o;e.edgeMouseMove(i),(o=(r=t.events)==null?void 0:r.mouseMove)==null||o.call(r,i)}),n.mouseLeave.on(i=>{var r,o;e.edgeMouseLeave(i),(o=(r=t.events)==null?void 0:r.mouseLeave)==null||o.call(r,i)}),n.contextMenu.on(i=>{var r,o;e.edgeContextMenu(i),(o=(r=t.events)==null?void 0:r.contextMenu)==null||o.call(r,i)}),n.updateStart.on(i=>{var r,o;e.edgeUpdateStart(i),(o=(r=t.events)==null?void 0:r.updateStart)==null||o.call(r,i)}),n.update.on(i=>{var r,o;e.edgeUpdate(i),(o=(r=t.events)==null?void 0:r.update)==null||o.call(r,i)}),n.updateEnd.on(i=>{var r,o;e.edgeUpdateEnd(i),(o=(r=t.events)==null?void 0:r.updateEnd)==null||o.call(r,i)}),Object.entries(n).reduce((i,[r,o])=>(i.emit[r]=o.trigger,i.on[r]=o.on,i),{emit:{},on:{}})}function k_(){const{viewport:t,snapGrid:e,snapToGrid:n,vueFlowRef:i}=Dt();return r=>{var o;const s=((o=i.value)==null?void 0:o.getBoundingClientRect())??{left:0,top:0},a=hP(r)?r.sourceEvent:r,{x:l,y:u}=li(a,s),c=ua({x:l,y:u},t.value),{x:d,y:f}=n.value?Xu(c,e.value):c;return{xSnapped:d,ySnapped:f,...c}}}function dl(){return!0}function z_({handleId:t,nodeId:e,type:n,isValidConnection:i,edgeUpdaterType:r,onEdgeUpdate:o,onEdgeUpdateEnd:s}){const{id:a,vueFlowRef:l,connectionMode:u,connectionRadius:c,connectOnClick:d,connectionClickStartHandle:f,nodesConnectable:h,autoPanOnConnect:g,autoPanSpeed:v,findNode:m,panBy:p,startConnection:x,updateConnection:M,endConnection:y,emits:P,viewport:L,edges:B,nodes:_,isValidConnection:S,nodeLookup:R}=Dt();let A=null,C=!1,H=null;function w(T){var N;const z=ht(n)==="target",X=Lh(T),Z=Zm(T.target),ne=T.currentTarget;if(ne&&(X&&T.button===0||!X)){let Q=function(ie){F=li(ie,Re),D=_P(ua(F,L.value,!1,[1,1]),c.value,R.value,W),U||(k(),U=!0);const I=ag(ie,{handle:D,connectionMode:u.value,fromNodeId:ht(e),fromHandleId:ht(t),fromType:z?"target":"source",isValidConnection:te,doc:Z,lib:"vue",flowId:a,nodeLookup:R.value},B.value,_.value,m,R.value);H=I.handleDomNode,A=I.connection,C=xP(!!D,I.isValid);const E={...ee,isValid:C,to:I.toHandle&&C?la({x:I.toHandle.x,y:I.toHandle.y},L.value):F,toHandle:I.toHandle,toPosition:C&&I.toHandle?I.toHandle.position:Pf[W.position],toNode:I.toHandle?R.value.get(I.toHandle.nodeId):null};if(C&&D&&ee?.toHandle&&E.toHandle&&ee.toHandle.type===E.toHandle.type&&ee.toHandle.nodeId===E.toHandle.nodeId&&ee.toHandle.id===E.toHandle.id&&ee.to.x===E.to.x&&ee.to.y===E.to.y)return;const Y=D??I.toHandle;if(M(Y&&C?la({x:Y.x,y:Y.y},L.value):F,Y,yP(!!Y,C)),ee=E,!D&&!C&&!H)return nd(G);A&&A.source!==A.target&&H&&(nd(G),G=H,H.classList.add("connecting","vue-flow__handle-connecting"),H.classList.toggle("valid",!!C),H.classList.toggle("vue-flow__handle-valid",!!C))},de=function(ie){"touches"in ie&&ie.touches.length>0||((D||H)&&A&&C&&(o?o(ie,A):P.connect(A)),P.connectEnd(ie),r&&s?.(ie),nd(G),cancelAnimationFrame(K),y(ie),U=!1,C=!1,A=null,H=null,Z.removeEventListener("mousemove",Q),Z.removeEventListener("mouseup",de),Z.removeEventListener("touchmove",Q),Z.removeEventListener("touchend",de))};const we=m(ht(e));let te=ht(i)||S.value||dl;!te&&we&&(te=(z?we.isValidSourcePos:we.isValidTargetPos)||dl);let D,K=0;const{x:se,y:be}=li(T),Se=L_(ht(r),ne),Re=(N=l.value)==null?void 0:N.getBoundingClientRect();if(!Re||!Se)return;const $=F_(ht(e),Se,ht(t),R.value,u.value);if(!$)return;let G,F=li(T,Re),U=!1;const k=()=>{if(!g.value)return;const[ie,I]=N_(F,Re,v.value);p({x:ie,y:I}),K=requestAnimationFrame(k)},W={...$,nodeId:ht(e),type:Se,position:$.position},b=R.value.get(ht(e)),J={inProgress:!0,isValid:null,from:ls(b,W,Xe.Left,!0),fromHandle:W,fromPosition:W.position,fromNode:b,to:F,toHandle:null,toPosition:Pf[W.position],toNode:null};x({nodeId:ht(e),id:ht(t),type:Se,position:ne?.getAttribute("data-handlepos")||Xe.Top,...F},{x:se-Re.left,y:be-Re.top}),P.connectStart({event:T,nodeId:ht(e),handleId:ht(t),handleType:Se});let ee=J;Z.addEventListener("mousemove",Q),Z.addEventListener("mouseup",de),Z.addEventListener("touchmove",Q),Z.addEventListener("touchend",de)}}function O(T){var N,z;if(!d.value)return;const X=ht(n)==="target";if(!f.value){P.clickConnectStart({event:T,nodeId:ht(e),handleId:ht(t)}),x({nodeId:ht(e),type:ht(n),id:ht(t),position:Xe.Top,...li(T)},void 0,!0);return}let Z=ht(i)||S.value||dl;const ne=m(ht(e));if(!Z&&ne&&(Z=(X?ne.isValidSourcePos:ne.isValidTargetPos)||dl),ne&&(typeof ne.connectable>"u"?h.value:ne.connectable)===!1)return;const Q=Zm(T.target),de=ag(T,{handle:{nodeId:ht(e),id:ht(t),type:ht(n),position:Xe.Top,...li(T)},connectionMode:u.value,fromNodeId:f.value.nodeId,fromHandleId:f.value.id??null,fromType:f.value.type,isValidConnection:Z,doc:Q,lib:"vue",flowId:a,nodeLookup:R.value},B.value,_.value,m,R.value),we=((N=de.connection)==null?void 0:N.source)===((z=de.connection)==null?void 0:z.target);de.isValid&&de.connection&&!we&&P.connect(de.connection),P.clickConnectEnd(T),y(T,!0)}return{handlePointerDown:w,handleClick:O}}function CP(){return In(Fh,"")}function V_(t){const e=t??CP()??"",n=In(O_,Ce(null)),{findNode:i,edges:r,emits:o}=Dt(),s=i(e);return s||o.error(new Xt(Gt.NODE_NOT_FOUND,e)),{id:e,nodeEl:n,node:s,parentNode:Ae(()=>i(s.parentNode)),connectedEdges:Ae(()=>Zr([s],r.value))}}function RP(){return{doubleClick:$e(),click:$e(),mouseEnter:$e(),mouseMove:$e(),mouseLeave:$e(),contextMenu:$e(),dragStart:$e(),drag:$e(),dragStop:$e()}}function IP(t,e){const n=RP();return n.doubleClick.on(i=>{var r,o;e.nodeDoubleClick(i),(o=(r=t.events)==null?void 0:r.doubleClick)==null||o.call(r,i)}),n.click.on(i=>{var r,o;e.nodeClick(i),(o=(r=t.events)==null?void 0:r.click)==null||o.call(r,i)}),n.mouseEnter.on(i=>{var r,o;e.nodeMouseEnter(i),(o=(r=t.events)==null?void 0:r.mouseEnter)==null||o.call(r,i)}),n.mouseMove.on(i=>{var r,o;e.nodeMouseMove(i),(o=(r=t.events)==null?void 0:r.mouseMove)==null||o.call(r,i)}),n.mouseLeave.on(i=>{var r,o;e.nodeMouseLeave(i),(o=(r=t.events)==null?void 0:r.mouseLeave)==null||o.call(r,i)}),n.contextMenu.on(i=>{var r,o;e.nodeContextMenu(i),(o=(r=t.events)==null?void 0:r.contextMenu)==null||o.call(r,i)}),n.dragStart.on(i=>{var r,o;e.nodeDragStart(i),(o=(r=t.events)==null?void 0:r.dragStart)==null||o.call(r,i)}),n.drag.on(i=>{var r,o;e.nodeDrag(i),(o=(r=t.events)==null?void 0:r.drag)==null||o.call(r,i)}),n.dragStop.on(i=>{var r,o;e.nodeDragStop(i),(o=(r=t.events)==null?void 0:r.dragStop)==null||o.call(r,i)}),Object.entries(n).reduce((i,[r,o])=>(i.emit[r]=o.trigger,i.on[r]=o.on,i),{emit:{},on:{}})}function $_(){const{getSelectedNodes:t,nodeExtent:e,updateNodePositions:n,findNode:i,snapGrid:r,snapToGrid:o,nodesDraggable:s,emits:a}=Dt();return(l,u=!1)=>{const c=o.value?r.value[0]:5,d=o.value?r.value[1]:5,f=u?4:1,h=l.x*c*f,g=l.y*d*f,v=[];for(const m of t.value)if(m.draggable||s&&typeof m.draggable>"u"){const p={x:m.computedPosition.x+h,y:m.computedPosition.y+g},{position:x}=Dh(m,p,a.error,e.value,m.parentNode?i(m.parentNode):void 0);v.push({id:m.id,position:x,from:m.position,distance:{x:l.x,y:l.y},dimensions:m.dimensions})}n(v,!0,!1)}}const fl=.1,PP=t=>((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2;function pr(){return Aa("Viewport not initialized yet."),Promise.resolve(!1)}const NP={zoomIn:pr,zoomOut:pr,zoomTo:pr,fitView:pr,setCenter:pr,fitBounds:pr,project:t=>t,screenToFlowCoordinate:t=>t,flowToScreenCoordinate:t=>t,setViewport:pr,setTransform:pr,getViewport:()=>({x:0,y:0,zoom:1}),getTransform:()=>({x:0,y:0,zoom:1}),viewportInitialized:!1};function DP(t){function e(i,r){return new Promise(o=>{t.d3Selection&&t.d3Zoom?t.d3Zoom.interpolate(r?.interpolate==="linear"?Ws:Nl).scaleBy(od(t.d3Selection,r?.duration,r?.ease,()=>{o(!0)}),i):o(!1)})}function n(i,r,o,s){return new Promise(a=>{var l;const{x:u,y:c}=w_({x:-i,y:-r},t.translateExtent),d=as.translate(-u,-c).scale(o);t.d3Selection&&t.d3Zoom?(l=t.d3Zoom)==null||l.interpolate(s?.interpolate==="linear"?Ws:Nl).transform(od(t.d3Selection,s?.duration,s?.ease,()=>{a(!0)}),d):a(!1)})}return Ae(()=>t.d3Zoom&&t.d3Selection&&t.dimensions.width&&t.dimensions.height?{viewportInitialized:!0,zoomIn:r=>e(1.2,r),zoomOut:r=>e(1/1.2,r),zoomTo:(r,o)=>new Promise(s=>{t.d3Selection&&t.d3Zoom?t.d3Zoom.interpolate(o?.interpolate==="linear"?Ws:Nl).scaleTo(od(t.d3Selection,o?.duration,o?.ease,()=>{s(!0)}),r):s(!1)}),setViewport:(r,o)=>n(r.x,r.y,r.zoom,o),setTransform:(r,o)=>n(r.x,r.y,r.zoom,o),getViewport:()=>({x:t.viewport.x,y:t.viewport.y,zoom:t.viewport.zoom}),getTransform:()=>({x:t.viewport.x,y:t.viewport.y,zoom:t.viewport.zoom}),fitView:(r={padding:fl,includeHiddenNodes:!1,duration:0})=>{var o,s;const a=[];for(const f of t.nodes)f.dimensions.width&&f.dimensions.height&&(r?.includeHiddenNodes||!f.hidden)&&(!((o=r.nodes)!=null&&o.length)||(s=r.nodes)!=null&&s.length&&r.nodes.includes(f.id))&&a.push(f);if(!a.length)return Promise.resolve(!1);const l=Nh(a),{x:u,y:c,zoom:d}=jm(l,t.dimensions.width,t.dimensions.height,r.minZoom??t.minZoom,r.maxZoom??t.maxZoom,r.padding??fl);return n(u,c,d,r)},setCenter:(r,o,s)=>{const a=typeof s?.zoom<"u"?s.zoom:t.maxZoom,l=t.dimensions.width/2-r*a,u=t.dimensions.height/2-o*a;return n(l,u,a,s)},fitBounds:(r,o={padding:fl})=>{const{x:s,y:a,zoom:l}=jm(r,t.dimensions.width,t.dimensions.height,t.minZoom,t.maxZoom,o.padding??fl);return n(s,a,l,o)},project:r=>ua(r,t.viewport,t.snapToGrid,t.snapGrid),screenToFlowCoordinate:r=>{if(t.vueFlowRef){const{x:o,y:s}=t.vueFlowRef.getBoundingClientRect(),a={x:r.x-o,y:r.y-s};return ua(a,t.viewport,t.snapToGrid,t.snapGrid)}return{x:0,y:0}},flowToScreenCoordinate:r=>{if(t.vueFlowRef){const{x:o,y:s}=t.vueFlowRef.getBoundingClientRect(),a={x:r.x+o,y:r.y+s};return la(a,t.viewport)}return{x:0,y:0}}}:NP)}function od(t,e=0,n=PP,i=()=>{}){const r=typeof e=="number"&&e>0;return r||i(),r?t.transition().duration(e).ease(n).on("end",i):t}function LP(t,e,n){const i=Eu(!0);return i.run(()=>{const r=()=>{i.run(()=>{let v,m,p=!!(n.nodes.value.length||n.edges.value.length);v=Fo([t.modelValue,()=>{var x,M;return(M=(x=t.modelValue)==null?void 0:x.value)==null?void 0:M.length}],([x])=>{x&&Array.isArray(x)&&(m?.pause(),n.setElements(x),!m&&!p&&x.length?p=!0:m?.resume())}),m=Fo([n.nodes,n.edges,()=>n.edges.value.length,()=>n.nodes.value.length],([x,M])=>{var y;(y=t.modelValue)!=null&&y.value&&Array.isArray(t.modelValue.value)&&(v?.pause(),t.modelValue.value=[...x,...M],fn(()=>{v?.resume()}))},{immediate:p}),Os(()=>{v?.stop(),m?.stop()})})},o=()=>{i.run(()=>{let v,m,p=!!n.nodes.value.length;v=Fo([t.nodes,()=>{var x,M;return(M=(x=t.nodes)==null?void 0:x.value)==null?void 0:M.length}],([x])=>{x&&Array.isArray(x)&&(m?.pause(),n.setNodes(x),!m&&!p&&x.length?p=!0:m?.resume())}),m=Fo([n.nodes,()=>n.nodes.value.length],([x])=>{var M;(M=t.nodes)!=null&&M.value&&Array.isArray(t.nodes.value)&&(v?.pause(),t.nodes.value=[...x],fn(()=>{v?.resume()}))},{immediate:p}),Os(()=>{v?.stop(),m?.stop()})})},s=()=>{i.run(()=>{let v,m,p=!!n.edges.value.length;v=Fo([t.edges,()=>{var x,M;return(M=(x=t.edges)==null?void 0:x.value)==null?void 0:M.length}],([x])=>{x&&Array.isArray(x)&&(m?.pause(),n.setEdges(x),!m&&!p&&x.length?p=!0:m?.resume())}),m=Fo([n.edges,()=>n.edges.value.length],([x])=>{var M;(M=t.edges)!=null&&M.value&&Array.isArray(t.edges.value)&&(v?.pause(),t.edges.value=[...x],fn(()=>{v?.resume()}))},{immediate:p}),Os(()=>{v?.stop(),m?.stop()})})},a=()=>{i.run(()=>{ut(()=>e.maxZoom,()=>{e.maxZoom&&$t(e.maxZoom)&&n.setMaxZoom(e.maxZoom)},{immediate:!0})})},l=()=>{i.run(()=>{ut(()=>e.minZoom,()=>{e.minZoom&&$t(e.minZoom)&&n.setMinZoom(e.minZoom)},{immediate:!0})})},u=()=>{i.run(()=>{ut(()=>e.translateExtent,()=>{e.translateExtent&&$t(e.translateExtent)&&n.setTranslateExtent(e.translateExtent)},{immediate:!0})})},c=()=>{i.run(()=>{ut(()=>e.nodeExtent,()=>{e.nodeExtent&&$t(e.nodeExtent)&&n.setNodeExtent(e.nodeExtent)},{immediate:!0})})},d=()=>{i.run(()=>{ut(()=>e.applyDefault,()=>{$t(e.applyDefault)&&(n.applyDefault.value=e.applyDefault)},{immediate:!0})})},f=()=>{i.run(()=>{const v=async m=>{let p=m;typeof e.autoConnect=="function"&&(p=await e.autoConnect(m)),p!==!1&&n.addEdges([p])};ut(()=>e.autoConnect,()=>{$t(e.autoConnect)&&(n.autoConnect.value=e.autoConnect)},{immediate:!0}),ut(n.autoConnect,(m,p,x)=>{m?n.onConnect(v):n.hooks.value.connect.off(v),x(()=>{n.hooks.value.connect.off(v)})},{immediate:!0})})},h=()=>{const v=["id","modelValue","translateExtent","nodeExtent","edges","nodes","maxZoom","minZoom","applyDefault","autoConnect"];for(const m of Object.keys(e)){const p=m;if(!v.includes(p)){const x=xt(()=>e[p]),M=n[p];Ut(M)&&i.run(()=>{ut(x,y=>{$t(y)&&(M.value=y)},{immediate:!0})})}}};r(),o(),s(),l(),a(),u(),c(),d(),f(),h()}),()=>i.stop()}function FP(){return{edgesChange:$e(),nodesChange:$e(),nodeDoubleClick:$e(),nodeClick:$e(),nodeMouseEnter:$e(),nodeMouseMove:$e(),nodeMouseLeave:$e(),nodeContextMenu:$e(),nodeDragStart:$e(),nodeDrag:$e(),nodeDragStop:$e(),nodesInitialized:$e(),miniMapNodeClick:$e(),miniMapNodeDoubleClick:$e(),miniMapNodeMouseEnter:$e(),miniMapNodeMouseMove:$e(),miniMapNodeMouseLeave:$e(),connect:$e(),connectStart:$e(),connectEnd:$e(),clickConnectStart:$e(),clickConnectEnd:$e(),paneReady:$e(),init:$e(),move:$e(),moveStart:$e(),moveEnd:$e(),selectionDragStart:$e(),selectionDrag:$e(),selectionDragStop:$e(),selectionContextMenu:$e(),selectionStart:$e(),selectionEnd:$e(),viewportChangeStart:$e(),viewportChange:$e(),viewportChangeEnd:$e(),paneScroll:$e(),paneClick:$e(),paneContextMenu:$e(),paneMouseEnter:$e(),paneMouseMove:$e(),paneMouseLeave:$e(),edgeContextMenu:$e(),edgeMouseEnter:$e(),edgeMouseMove:$e(),edgeMouseLeave:$e(),edgeDoubleClick:$e(),edgeClick:$e(),edgeUpdateStart:$e(),edgeUpdate:$e(),edgeUpdateEnd:$e(),updateNodeInternals:$e(),error:$e(t=>Aa(t.message))}}function UP(t,e){const n=ir();Rv(()=>{for(const[r,o]of Object.entries(e.value)){const s=a=>{t(r,a)};o.setEmitter(s),ia(o.removeEmitter),o.setHasEmitListeners(()=>i(r)),ia(o.removeHasEmitListeners)}});function i(r){var o;const s=OP(r);return!!((o=n?.vnode.props)==null?void 0:o[s])}}function OP(t){const[e,...n]=t.split(":");return`on${e.replace(/(?:^|-)(\w)/g,(r,o)=>o.toUpperCase())}${n.length?`:${n.join(":")}`:""}`}function H_(){return{vueFlowRef:null,viewportRef:null,nodes:[],edges:[],connectionLookup:new Map,nodeTypes:{},edgeTypes:{},initialized:!1,dimensions:{width:0,height:0},viewport:{x:0,y:0,zoom:1},d3Zoom:null,d3Selection:null,d3ZoomHandler:null,minZoom:.5,maxZoom:2,translateExtent:[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],nodeExtent:[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],selectionMode:Ph.Full,paneDragging:!1,preventScrolling:!0,zoomOnScroll:!0,zoomOnPinch:!0,zoomOnDoubleClick:!0,panOnScroll:!1,panOnScrollSpeed:.5,panOnScrollMode:Xs.Free,paneClickDistance:0,panOnDrag:!0,edgeUpdaterRadius:10,onlyRenderVisibleElements:!1,defaultViewport:{x:0,y:0,zoom:1},nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,defaultMarkerColor:"#b1b1b7",connectionLineStyle:{},connectionLineType:null,connectionLineOptions:{type:Kr.Bezier,style:{}},connectionMode:Nr.Loose,connectionStartHandle:null,connectionEndHandle:null,connectionClickStartHandle:null,connectionPosition:{x:Number.NaN,y:Number.NaN},connectionRadius:20,connectOnClick:!0,connectionStatus:null,isValidConnection:null,snapGrid:[15,15],snapToGrid:!1,edgesUpdatable:!1,edgesFocusable:!0,nodesFocusable:!0,nodesConnectable:!0,nodesDraggable:!0,nodeDragThreshold:1,elementsSelectable:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,selectionKeyCode:"Shift",multiSelectionKeyCode:da()?"Meta":"Control",zoomActivationKeyCode:da()?"Meta":"Control",deleteKeyCode:"Backspace",panActivationKeyCode:"Space",hooks:FP(),applyDefault:!0,autoConnect:!1,fitViewOnInit:!1,fitViewOnInitDone:!1,noDragClassName:"nodrag",noWheelClassName:"nowheel",noPanClassName:"nopan",defaultEdgeOptions:void 0,elevateEdgesOnSelect:!1,elevateNodesOnSelect:!0,autoPanOnNodeDrag:!0,autoPanOnConnect:!0,autoPanSpeed:15,disableKeyboardA11y:!1,ariaLiveMessage:""}}const BP=["id","vueFlowRef","viewportRef","initialized","modelValue","nodes","edges","maxZoom","minZoom","translateExtent","hooks","defaultEdgeOptions"];function kP(t,e,n){const i=DP(t),r=F=>{const U=F??[];t.hooks.updateNodeInternals.trigger(U)},o=F=>tP(F,t.nodes,t.edges),s=F=>eP(F,t.nodes,t.edges),a=F=>Zr(F,t.edges),l=({id:F,type:U,nodeId:k})=>{var W;const b=F?`-${U}-${F}`:`-${U}`;return Array.from(((W=t.connectionLookup.get(`${k}${b}`))==null?void 0:W.values())??[])},u=F=>{if(F)return e.value.get(F)},c=F=>{if(F)return n.value.get(F)},d=(F,U,k)=>{var W,b;const q=[];for(const J of F){const ee={id:J.id,type:"position",dragging:k,from:J.from};if(U&&(ee.position=J.position,J.parentNode)){const ie=u(J.parentNode);ee.position={x:ee.position.x-(((W=ie?.computedPosition)==null?void 0:W.x)??0),y:ee.position.y-(((b=ie?.computedPosition)==null?void 0:b.y)??0)}}q.push(ee)}q?.length&&t.hooks.nodesChange.trigger(q)},f=F=>{if(!t.vueFlowRef)return;const U=t.vueFlowRef.querySelector(".vue-flow__transformationpane");if(!U)return;const k=window.getComputedStyle(U),{m22:W}=new window.DOMMatrixReadOnly(k.transform),b=[];for(const q of F){const J=q,ee=u(J.id);if(ee){const ie=Wu(J.nodeElement);if(!!(ie.width&&ie.height&&(ee.dimensions.width!==ie.width||ee.dimensions.height!==ie.height||J.forceUpdate))){const E=J.nodeElement.getBoundingClientRect();ee.dimensions=ie,ee.handleBounds.source=lg("source",J.nodeElement,E,W,ee.id),ee.handleBounds.target=lg("target",J.nodeElement,E,W,ee.id),b.push({id:ee.id,type:"dimensions",dimensions:ie})}}}!t.fitViewOnInitDone&&t.fitViewOnInit&&i.value.fitView().then(()=>{t.fitViewOnInitDone=!0}),b.length&&t.hooks.nodesChange.trigger(b)},h=(F,U)=>{const k=new Set,W=new Set;for(const J of F)so(J)?k.add(J.id):Dr(J)&&W.add(J.id);const b=br(e.value,k,!0),q=br(n.value,W);if(t.multiSelectionActive){for(const J of k)b.push(vr(J,U));for(const J of W)q.push(vr(J,U))}b.length&&t.hooks.nodesChange.trigger(b),q.length&&t.hooks.edgesChange.trigger(q)},g=F=>{if(t.multiSelectionActive){const U=F.map(k=>vr(k.id,!0));t.hooks.nodesChange.trigger(U);return}t.hooks.nodesChange.trigger(br(e.value,new Set(F.map(U=>U.id)),!0)),t.hooks.edgesChange.trigger(br(n.value))},v=F=>{if(t.multiSelectionActive){const U=F.map(k=>vr(k.id,!0));t.hooks.edgesChange.trigger(U);return}t.hooks.edgesChange.trigger(br(n.value,new Set(F.map(U=>U.id)))),t.hooks.nodesChange.trigger(br(e.value,new Set,!0))},m=F=>{h(F,!0)},p=F=>{const k=(F||t.nodes).map(W=>(W.selected=!1,vr(W.id,!1)));t.hooks.nodesChange.trigger(k)},x=F=>{const k=(F||t.edges).map(W=>(W.selected=!1,vr(W.id,!1)));t.hooks.edgesChange.trigger(k)},M=F=>{if(!F||!F.length)return h([],!1);const U=F.reduce((k,W)=>{const b=vr(W.id,!1);return so(W)?k.nodes.push(b):k.edges.push(b),k},{nodes:[],edges:[]});U.nodes.length&&t.hooks.nodesChange.trigger(U.nodes),U.edges.length&&t.hooks.edgesChange.trigger(U.edges)},y=F=>{var U;(U=t.d3Zoom)==null||U.scaleExtent([F,t.maxZoom]),t.minZoom=F},P=F=>{var U;(U=t.d3Zoom)==null||U.scaleExtent([t.minZoom,F]),t.maxZoom=F},L=F=>{var U;(U=t.d3Zoom)==null||U.translateExtent(F),t.translateExtent=F},B=F=>{t.nodeExtent=F,r()},_=F=>{var U;(U=t.d3Zoom)==null||U.clickDistance(F)},S=F=>{t.nodesDraggable=F,t.nodesConnectable=F,t.elementsSelectable=F},R=F=>{const U=F instanceof Function?F(t.nodes):F;!t.initialized&&!U.length||(t.nodes=ug(U,u,t.hooks.error.trigger))},A=F=>{const U=F instanceof Function?F(t.edges):F;if(!t.initialized&&!U.length)return;const k=rd(U,t.isValidConnection,u,c,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges);id(t.connectionLookup,n.value,k),t.edges=k},C=F=>{const U=F instanceof Function?F([...t.nodes,...t.edges]):F;!t.initialized&&!U.length||(R(U.filter(so)),A(U.filter(Dr)))},H=F=>{let U=F instanceof Function?F(t.nodes):F;U=Array.isArray(U)?U:[U];const k=ug(U,u,t.hooks.error.trigger),W=[];for(const b of k)W.push(eg(b));W.length&&t.hooks.nodesChange.trigger(W)},w=F=>{let U=F instanceof Function?F(t.edges):F;U=Array.isArray(U)?U:[U];const k=rd(U,t.isValidConnection,u,c,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges),W=[];for(const b of k)W.push(eg(b));W.length&&t.hooks.edgesChange.trigger(W)},O=(F,U=!0,k=!1)=>{const W=F instanceof Function?F(t.nodes):F,b=Array.isArray(W)?W:[W],q=[],J=[];function ee(I){const E=a(I);for(const Y of E)(!$t(Y.deletable)||Y.deletable)&&J.push(ng(Y.id,Y.source,Y.target,Y.sourceHandle,Y.targetHandle))}function ie(I){const E=[];for(const Y of t.nodes)Y.parentNode===I&&E.push(Y);if(E.length){for(const Y of E)q.push(tg(Y.id));U&&ee(E);for(const Y of E)ie(Y.id)}}for(const I of b){const E=typeof I=="string"?u(I):I;E&&($t(E.deletable)&&!E.deletable||(q.push(tg(E.id)),U&&ee([E]),k&&ie(E.id)))}J.length&&t.hooks.edgesChange.trigger(J),q.length&&t.hooks.nodesChange.trigger(q)},T=F=>{const U=F instanceof Function?F(t.edges):F,k=Array.isArray(U)?U:[U],W=[];for(const b of k){const q=typeof b=="string"?c(b):b;q&&($t(q.deletable)&&!q.deletable||W.push(ng(typeof b=="string"?b:b.id,q.source,q.target,q.sourceHandle,q.targetHandle)))}t.hooks.edgesChange.trigger(W)},N=(F,U,k=!0)=>{const W=c(F.id);if(!W)return!1;const b=t.edges.indexOf(W),q=MP(F,U,W,k,t.hooks.error.trigger);if(q){const[J]=rd([q],t.isValidConnection,u,c,t.hooks.error.trigger,t.defaultEdgeOptions,t.nodes,t.edges);return t.edges=t.edges.map((ee,ie)=>ie===b?J:ee),id(t.connectionLookup,n.value,[J]),J}return!1},z=(F,U,k={replace:!1})=>{const W=c(F);if(!W)return;const b=typeof U=="function"?U(W):U;W.data=k.replace?b:{...W.data,...b}},X=F=>Qm(F,t.nodes),Z=F=>{const U=Qm(F,t.edges);return id(t.connectionLookup,n.value,U),U},ne=(F,U,k={replace:!1})=>{const W=u(F);if(!W)return;const b=typeof U=="function"?U(W):U;k.replace?t.nodes.splice(t.nodes.indexOf(W),1,b):Object.assign(W,b)},Q=(F,U,k={replace:!1})=>{const W=u(F);if(!W)return;const b=typeof U=="function"?U(W):U;W.data=k.replace?b:{...W.data,...b}},de=(F,U,k=!1)=>{k?t.connectionClickStartHandle=F:t.connectionStartHandle=F,t.connectionEndHandle=null,t.connectionStatus=null,U&&(t.connectionPosition=U)},we=(F,U=null,k=null)=>{t.connectionStartHandle&&(t.connectionPosition=F,t.connectionEndHandle=U,t.connectionStatus=k)},te=(F,U)=>{t.connectionPosition={x:Number.NaN,y:Number.NaN},t.connectionEndHandle=null,t.connectionStatus=null,U?t.connectionClickStartHandle=null:t.connectionStartHandle=null},D=F=>{const U=JI(F),k=U?null:Ds(F)?F:u(F.id);return!U&&!k?[null,null,U]:[U?F:cu(k),k,U]},K=(F,U=!0,k=t.nodes)=>{const[W,b,q]=D(F);if(!W)return[];const J=[];for(const ee of k||t.nodes){if(!q&&(ee.id===b.id||!ee.computedPosition))continue;const ie=cu(ee),I=du(ie,W);(U&&I>0||I>=ie.width*ie.height||I>=Number(W.width)*Number(W.height))&&J.push(ee)}return J},se=(F,U,k=!0)=>{const[W]=D(F);if(!W)return!1;const b=du(W,U);return k&&b>0||b>=Number(W.width)*Number(W.height)},be=F=>{const{viewport:U,dimensions:k,d3Zoom:W,d3Selection:b,translateExtent:q}=t;if(!W||!b||!F.x&&!F.y)return!1;const J=as.translate(U.x+F.x,U.y+F.y).scale(U.zoom),ee=[[0,0],[k.width,k.height]],ie=W.constrain()(J,ee,q),I=t.viewport.x!==ie.x||t.viewport.y!==ie.y||t.viewport.zoom!==ie.k;return W.transform(b,ie),I},Se=F=>{const U=F instanceof Function?F(t):F,k=["d3Zoom","d3Selection","d3ZoomHandler","viewportRef","vueFlowRef","dimensions","hooks"];$t(U.defaultEdgeOptions)&&(t.defaultEdgeOptions=U.defaultEdgeOptions);const W=U.modelValue||U.nodes||U.edges?[]:void 0;W&&(U.modelValue&&W.push(...U.modelValue),U.nodes&&W.push(...U.nodes),U.edges&&W.push(...U.edges),C(W));const b=()=>{$t(U.maxZoom)&&P(U.maxZoom),$t(U.minZoom)&&y(U.minZoom),$t(U.translateExtent)&&L(U.translateExtent)};for(const q of Object.keys(U)){const J=q,ee=U[J];![...BP,...k].includes(J)&&$t(ee)&&(t[J]=ee)}yf(()=>t.d3Zoom).not.toBeNull().then(b),t.initialized||(t.initialized=!0)};return{updateNodePositions:d,updateNodeDimensions:f,setElements:C,setNodes:R,setEdges:A,addNodes:H,addEdges:w,removeNodes:O,removeEdges:T,findNode:u,findEdge:c,updateEdge:N,updateEdgeData:z,updateNode:ne,updateNodeData:Q,applyEdgeChanges:Z,applyNodeChanges:X,addSelectedElements:m,addSelectedNodes:g,addSelectedEdges:v,setMinZoom:y,setMaxZoom:P,setTranslateExtent:L,setNodeExtent:B,setPaneClickDistance:_,removeSelectedElements:M,removeSelectedNodes:p,removeSelectedEdges:x,startConnection:de,updateConnection:we,endConnection:te,setInteractive:S,setState:Se,getIntersectingNodes:K,getIncomers:o,getOutgoers:s,getConnectedEdges:a,getHandleConnections:l,isNodeIntersecting:se,panBy:be,fitView:F=>i.value.fitView(F),zoomIn:F=>i.value.zoomIn(F),zoomOut:F=>i.value.zoomOut(F),zoomTo:(F,U)=>i.value.zoomTo(F,U),setViewport:(F,U)=>i.value.setViewport(F,U),setTransform:(F,U)=>i.value.setTransform(F,U),getViewport:()=>i.value.getViewport(),getTransform:()=>i.value.getTransform(),setCenter:(F,U,k)=>i.value.setCenter(F,U,k),fitBounds:(F,U)=>i.value.fitBounds(F,U),project:F=>i.value.project(F),screenToFlowCoordinate:F=>i.value.screenToFlowCoordinate(F),flowToScreenCoordinate:F=>i.value.flowToScreenCoordinate(F),toObject:()=>{const F=[],U=[];for(const k of t.nodes){const{computedPosition:W,handleBounds:b,selected:q,dimensions:J,isParent:ee,resizing:ie,dragging:I,events:E,...Y}=k;F.push(Y)}for(const k of t.edges){const{selected:W,sourceNode:b,targetNode:q,events:J,...ee}=k;U.push(ee)}return JSON.parse(JSON.stringify({nodes:F,edges:U,position:[t.viewport.x,t.viewport.y],zoom:t.viewport.zoom,viewport:t.viewport}))},fromObject:F=>new Promise(U=>{const{nodes:k,edges:W,position:b,zoom:q,viewport:J}=F;k&&R(k),W&&A(W);const[ee,ie]=J?.x&&J?.y?[J.x,J.y]:b??[null,null];if(ee&&ie){const I=J?.zoom||q||t.viewport.zoom;return yf(()=>i.value.viewportInitialized).toBe(!0).then(()=>{i.value.setViewport({x:ee,y:ie,zoom:I}).then(()=>{U(!0)})})}else U(!0)}),updateNodeInternals:r,viewportHelper:i,$reset:()=>{const F=H_();if(t.edges=[],t.nodes=[],t.d3Zoom&&t.d3Selection){const U=as.translate(F.defaultViewport.x??0,F.defaultViewport.y??0).scale(er(F.defaultViewport.zoom??1,F.minZoom,F.maxZoom)),k=t.viewportRef.getBoundingClientRect(),W=[[0,0],[k.width,k.height]],b=t.d3Zoom.constrain()(U,W,F.translateExtent);t.d3Zoom.transform(t.d3Selection,b)}Se(F)},$destroy:()=>{}}}const zP=["data-id","data-handleid","data-nodeid","data-handlepos"],VP={name:"Handle",compatConfig:{MODE:3}},ao=Nt({...VP,props:{id:{default:null},type:{},position:{default:()=>Xe.Top},isValidConnection:{type:Function},connectable:{type:[Boolean,Number,String,Function],default:void 0},connectableStart:{type:Boolean,default:!0},connectableEnd:{type:Boolean,default:!0}},setup(t,{expose:e}){const n=Qx(t,["position","connectable","connectableStart","connectableEnd","id"]),i=xt(()=>n.type??"source"),r=xt(()=>n.isValidConnection??null),{id:o,connectionStartHandle:s,connectionClickStartHandle:a,connectionEndHandle:l,vueFlowRef:u,nodesConnectable:c,noDragClassName:d,noPanClassName:f}=Dt(),{id:h,node:g,nodeEl:v,connectedEdges:m}=V_(),p=Ce(),x=xt(()=>typeof t.connectableStart<"u"?t.connectableStart:!0),M=xt(()=>typeof t.connectableEnd<"u"?t.connectableEnd:!0),y=xt(()=>{var A,C,H,w,O,T;return((A=s.value)==null?void 0:A.nodeId)===h&&((C=s.value)==null?void 0:C.id)===t.id&&((H=s.value)==null?void 0:H.type)===i.value||((w=l.value)==null?void 0:w.nodeId)===h&&((O=l.value)==null?void 0:O.id)===t.id&&((T=l.value)==null?void 0:T.type)===i.value}),P=xt(()=>{var A,C,H;return((A=a.value)==null?void 0:A.nodeId)===h&&((C=a.value)==null?void 0:C.id)===t.id&&((H=a.value)==null?void 0:H.type)===i.value}),{handlePointerDown:L,handleClick:B}=z_({nodeId:h,handleId:t.id,isValidConnection:r,type:i}),_=Ae(()=>typeof t.connectable=="string"&&t.connectable==="single"?!m.value.some(A=>{const C=A[`${i.value}Handle`];return A[i.value]!==h?!1:C?C===t.id:!0}):typeof t.connectable=="number"?m.value.filter(A=>{const C=A[`${i.value}Handle`];return A[i.value]!==h?!1:C?C===t.id:!0}).length<t.connectable:typeof t.connectable=="function"?t.connectable(g,m.value):$t(t.connectable)?t.connectable:c.value);En(()=>{var A;if(!g.dimensions.width||!g.dimensions.height)return;const C=(A=g.handleBounds[i.value])==null?void 0:A.find(X=>X.id===t.id);if(!u.value||C)return;const H=u.value.querySelector(".vue-flow__transformationpane");if(!v.value||!p.value||!H||!t.id)return;const w=v.value.getBoundingClientRect(),O=p.value.getBoundingClientRect(),T=window.getComputedStyle(H),{m22:N}=new window.DOMMatrixReadOnly(T.transform),z={id:t.id,position:t.position,x:(O.left-w.left)/N,y:(O.top-w.top)/N,type:i.value,nodeId:h,...Wu(p.value)};g.handleBounds[i.value]=[...g.handleBounds[i.value]??[],z]});function S(A){const C=Lh(A);_.value&&x.value&&(C&&A.button===0||!C)&&L(A)}function R(A){!h||!a.value&&!x.value||_.value&&B(A)}return e({handleClick:B,handlePointerDown:L,onClick:R,onPointerDown:S}),(A,C)=>(ce(),ve("div",{ref_key:"handle",ref:p,"data-id":`${he(o)}-${he(h)}-${t.id}-${i.value}`,"data-handleid":t.id,"data-nodeid":he(h),"data-handlepos":A.position,class:dt(["vue-flow__handle",[`vue-flow__handle-${A.position}`,`vue-flow__handle-${t.id}`,he(d),he(f),i.value,{connectable:_.value,connecting:P.value,connectablestart:x.value,connectableend:M.value,connectionindicator:_.value&&(x.value&&!y.value||M.value&&y.value)}]]),onMousedown:S,onTouchstartPassive:S,onClick:R},[qi(A.$slots,"default",{id:A.id})],42,zP))}}),qu=function({sourcePosition:t=Xe.Bottom,targetPosition:e=Xe.Top,label:n,connectable:i=!0,isValidTargetPos:r,isValidSourcePos:o,data:s}){const a=s.label??n;return[Rt(ao,{type:"target",position:e,connectable:i,isValidConnection:r}),typeof a!="string"&&a?Rt(a):Rt(st,[a]),Rt(ao,{type:"source",position:t,connectable:i,isValidConnection:o})]};qu.props=["sourcePosition","targetPosition","label","isValidTargetPos","isValidSourcePos","connectable","data"];qu.inheritAttrs=!1;qu.compatConfig={MODE:3};const $P=qu,Ku=function({targetPosition:t=Xe.Top,label:e,connectable:n=!0,isValidTargetPos:i,data:r}){const o=r.label??e;return[Rt(ao,{type:"target",position:t,connectable:n,isValidConnection:i}),typeof o!="string"&&o?Rt(o):Rt(st,[o])]};Ku.props=["targetPosition","label","isValidTargetPos","connectable","data"];Ku.inheritAttrs=!1;Ku.compatConfig={MODE:3};const HP=Ku,Zu=function({sourcePosition:t=Xe.Bottom,label:e,connectable:n=!0,isValidSourcePos:i,data:r}){const o=r.label??e;return[typeof o!="string"&&o?Rt(o):Rt(st,[o]),Rt(ao,{type:"source",position:t,connectable:n,isValidConnection:i})]};Zu.props=["sourcePosition","label","isValidSourcePos","connectable","data"];Zu.inheritAttrs=!1;Zu.compatConfig={MODE:3};const GP=Zu,WP=["transform"],XP=["width","height","x","y","rx","ry"],YP=["y"],qP={name:"EdgeText",compatConfig:{MODE:3}},KP=Nt({...qP,props:{x:{},y:{},label:{},labelStyle:{default:()=>({})},labelShowBg:{type:Boolean,default:!0},labelBgStyle:{default:()=>({})},labelBgPadding:{default:()=>[2,4]},labelBgBorderRadius:{default:2}},setup(t){const e=Ce({x:0,y:0,width:0,height:0}),n=Ce(null),i=Ae(()=>`translate(${t.x-e.value.width/2} ${t.y-e.value.height/2})`);En(r),ut([()=>t.x,()=>t.y,n,()=>t.label],r);function r(){if(!n.value)return;const o=n.value.getBBox();(o.width!==e.value.width||o.height!==e.value.height)&&(e.value=o)}return(o,s)=>(ce(),ve("g",{transform:i.value,class:"vue-flow__edge-textwrapper"},[o.labelShowBg?(ce(),ve("rect",{key:0,class:"vue-flow__edge-textbg",width:`${e.value.width+2*o.labelBgPadding[0]}px`,height:`${e.value.height+2*o.labelBgPadding[1]}px`,x:-o.labelBgPadding[0],y:-o.labelBgPadding[1],style:nt(o.labelBgStyle),rx:o.labelBgBorderRadius,ry:o.labelBgBorderRadius},null,12,XP)):We("",!0),j("text",Js(o.$attrs,{ref_key:"el",ref:n,class:"vue-flow__edge-text",y:e.value.height/2,dy:"0.3em",style:o.labelStyle}),[qi(o.$slots,"default",{},()=>[typeof o.label!="string"?(ce(),jt(Dv(o.label),{key:0})):(ce(),ve(st,{key:1},[Go(Te(o.label),1)],64))])],16,YP)],8,WP))}}),ZP=["id","d","marker-end","marker-start"],jP=["d","stroke-width"],JP={name:"BaseEdge",inheritAttrs:!1,compatConfig:{MODE:3}},ju=Nt({...JP,props:{id:{},labelX:{},labelY:{},path:{},label:{},markerStart:{},markerEnd:{},interactionWidth:{default:20},labelStyle:{},labelShowBg:{type:Boolean},labelBgStyle:{},labelBgPadding:{},labelBgBorderRadius:{}},setup(t,{expose:e}){const n=Ce(null),i=Ce(null),r=Ce(null),o=sh();return e({pathEl:n,interactionEl:i,labelEl:r}),(s,a)=>(ce(),ve(st,null,[j("path",Js(he(o),{id:s.id,ref_key:"pathEl",ref:n,d:s.path,class:"vue-flow__edge-path","marker-end":s.markerEnd,"marker-start":s.markerStart}),null,16,ZP),s.interactionWidth?(ce(),ve("path",{key:0,ref_key:"interactionEl",ref:i,fill:"none",d:s.path,"stroke-width":s.interactionWidth,"stroke-opacity":0,class:"vue-flow__edge-interaction"},null,8,jP)):We("",!0),s.label&&s.labelX&&s.labelY?(ce(),jt(KP,{key:1,ref_key:"labelEl",ref:r,x:s.labelX,y:s.labelY,label:s.label,"label-show-bg":s.labelShowBg,"label-bg-style":s.labelBgStyle,"label-bg-padding":s.labelBgPadding,"label-bg-border-radius":s.labelBgBorderRadius,"label-style":s.labelStyle},null,8,["x","y","label","label-show-bg","label-bg-style","label-bg-padding","label-bg-border-radius","label-style"])):We("",!0)],64))}});function G_({sourceX:t,sourceY:e,targetX:n,targetY:i}){const r=Math.abs(n-t)/2,o=n<t?n+r:n-r,s=Math.abs(i-e)/2,a=i<e?i+s:i-s;return[o,a,r,s]}function W_({sourceX:t,sourceY:e,targetX:n,targetY:i,sourceControlX:r,sourceControlY:o,targetControlX:s,targetControlY:a}){const l=t*.125+r*.375+s*.375+n*.125,u=e*.125+o*.375+a*.375+i*.125,c=Math.abs(l-t),d=Math.abs(u-e);return[l,u,c,d]}function hl(t,e){return t>=0?.5*t:e*25*Math.sqrt(-t)}function hg({pos:t,x1:e,y1:n,x2:i,y2:r,c:o}){let s,a;switch(t){case Xe.Left:s=e-hl(e-i,o),a=n;break;case Xe.Right:s=e+hl(i-e,o),a=n;break;case Xe.Top:s=e,a=n-hl(n-r,o);break;case Xe.Bottom:s=e,a=n+hl(r-n,o);break}return[s,a]}function X_(t){const{sourceX:e,sourceY:n,sourcePosition:i=Xe.Bottom,targetX:r,targetY:o,targetPosition:s=Xe.Top,curvature:a=.25}=t,[l,u]=hg({pos:i,x1:e,y1:n,x2:r,y2:o,c:a}),[c,d]=hg({pos:s,x1:r,y1:o,x2:e,y2:n,c:a}),[f,h,g,v]=W_({sourceX:e,sourceY:n,targetX:r,targetY:o,sourceControlX:l,sourceControlY:u,targetControlX:c,targetControlY:d});return[`M${e},${n} C${l},${u} ${c},${d} ${r},${o}`,f,h,g,v]}function pg({pos:t,x1:e,y1:n,x2:i,y2:r}){let o,s;switch(t){case Xe.Left:case Xe.Right:o=.5*(e+i),s=n;break;case Xe.Top:case Xe.Bottom:o=e,s=.5*(n+r);break}return[o,s]}function Y_(t){const{sourceX:e,sourceY:n,sourcePosition:i=Xe.Bottom,targetX:r,targetY:o,targetPosition:s=Xe.Top}=t,[a,l]=pg({pos:i,x1:e,y1:n,x2:r,y2:o}),[u,c]=pg({pos:s,x1:r,y1:o,x2:e,y2:n}),[d,f,h,g]=W_({sourceX:e,sourceY:n,targetX:r,targetY:o,sourceControlX:a,sourceControlY:l,targetControlX:u,targetControlY:c});return[`M${e},${n} C${a},${l} ${u},${c} ${r},${o}`,d,f,h,g]}const mg={[Xe.Left]:{x:-1,y:0},[Xe.Right]:{x:1,y:0},[Xe.Top]:{x:0,y:-1},[Xe.Bottom]:{x:0,y:1}};function QP({source:t,sourcePosition:e=Xe.Bottom,target:n}){return e===Xe.Left||e===Xe.Right?t.x<n.x?{x:1,y:0}:{x:-1,y:0}:t.y<n.y?{x:0,y:1}:{x:0,y:-1}}function gg(t,e){return Math.sqrt((e.x-t.x)**2+(e.y-t.y)**2)}function e3({source:t,sourcePosition:e=Xe.Bottom,target:n,targetPosition:i=Xe.Top,center:r,offset:o}){const s=mg[e],a=mg[i],l={x:t.x+s.x*o,y:t.y+s.y*o},u={x:n.x+a.x*o,y:n.y+a.y*o},c=QP({source:l,sourcePosition:e,target:u}),d=c.x!==0?"x":"y",f=c[d];let h,g,v;const m={x:0,y:0},p={x:0,y:0},[x,M,y,P]=G_({sourceX:t.x,sourceY:t.y,targetX:n.x,targetY:n.y});if(s[d]*a[d]===-1){g=r.x??x,v=r.y??M;const B=[{x:g,y:l.y},{x:g,y:u.y}],_=[{x:l.x,y:v},{x:u.x,y:v}];s[d]===f?h=d==="x"?B:_:h=d==="x"?_:B}else{const B=[{x:l.x,y:u.y}],_=[{x:u.x,y:l.y}];if(d==="x"?h=s.x===f?_:B:h=s.y===f?B:_,e===i){const H=Math.abs(t[d]-n[d]);if(H<=o){const w=Math.min(o-1,o-H);s[d]===f?m[d]=(l[d]>t[d]?-1:1)*w:p[d]=(u[d]>n[d]?-1:1)*w}}if(e!==i){const H=d==="x"?"y":"x",w=s[d]===a[H],O=l[H]>u[H],T=l[H]<u[H];(s[d]===1&&(!w&&O||w&&T)||s[d]!==1&&(!w&&T||w&&O))&&(h=d==="x"?B:_)}const S={x:l.x+m.x,y:l.y+m.y},R={x:u.x+p.x,y:u.y+p.y},A=Math.max(Math.abs(S.x-h[0].x),Math.abs(R.x-h[0].x)),C=Math.max(Math.abs(S.y-h[0].y),Math.abs(R.y-h[0].y));A>=C?(g=(S.x+R.x)/2,v=h[0].y):(g=h[0].x,v=(S.y+R.y)/2)}return[[t,{x:l.x+m.x,y:l.y+m.y},...h,{x:u.x+p.x,y:u.y+p.y},n],g,v,y,P]}function t3(t,e,n,i){const r=Math.min(gg(t,e)/2,gg(e,n)/2,i),{x:o,y:s}=e;if(t.x===o&&o===n.x||t.y===s&&s===n.y)return`L${o} ${s}`;if(t.y===s){const u=t.x<n.x?-1:1,c=t.y<n.y?1:-1;return`L ${o+r*u},${s}Q ${o},${s} ${o},${s+r*c}`}const a=t.x<n.x?1:-1,l=t.y<n.y?-1:1;return`L ${o},${s+r*l}Q ${o},${s} ${o+r*a},${s}`}function Df(t){const{sourceX:e,sourceY:n,sourcePosition:i=Xe.Bottom,targetX:r,targetY:o,targetPosition:s=Xe.Top,borderRadius:a=5,centerX:l,centerY:u,offset:c=20}=t,[d,f,h,g,v]=e3({source:{x:e,y:n},sourcePosition:i,target:{x:r,y:o},targetPosition:s,center:{x:l,y:u},offset:c});return[d.reduce((p,x,M)=>{let y;return M>0&&M<d.length-1?y=t3(d[M-1],x,d[M+1],a):y=`${M===0?"M":"L"}${x.x} ${x.y}`,p+=y,p},""),f,h,g,v]}function n3(t){const{sourceX:e,sourceY:n,targetX:i,targetY:r}=t,[o,s,a,l]=G_({sourceX:e,sourceY:n,targetX:i,targetY:r});return[`M ${e},${n}L ${i},${r}`,o,s,a,l]}const i3=Nt({name:"StraightEdge",props:["label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=n3(t);return Rt(ju,{path:n,labelX:i,labelY:r,...e,...t})}}}),r3=i3,o3=Nt({name:"SmoothStepEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","borderRadius","markerEnd","markerStart","interactionWidth","offset"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=Df({...t,sourcePosition:t.sourcePosition??Xe.Bottom,targetPosition:t.targetPosition??Xe.Top});return Rt(ju,{path:n,labelX:i,labelY:r,...e,...t})}}}),q_=o3,s3=Nt({name:"StepEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],setup(t,{attrs:e}){return()=>Rt(q_,{...t,...e,borderRadius:0})}}),a3=s3,l3=Nt({name:"BezierEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","curvature","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=X_({...t,sourcePosition:t.sourcePosition??Xe.Bottom,targetPosition:t.targetPosition??Xe.Top});return Rt(ju,{path:n,labelX:i,labelY:r,...e,...t})}}}),u3=l3,c3=Nt({name:"SimpleBezierEdge",props:["sourcePosition","targetPosition","label","labelStyle","labelShowBg","labelBgStyle","labelBgPadding","labelBgBorderRadius","sourceY","sourceX","targetX","targetY","markerEnd","markerStart","interactionWidth"],compatConfig:{MODE:3},setup(t,{attrs:e}){return()=>{const[n,i,r]=Y_({...t,sourcePosition:t.sourcePosition??Xe.Bottom,targetPosition:t.targetPosition??Xe.Top});return Rt(ju,{path:n,labelX:i,labelY:r,...e,...t})}}}),d3=c3,f3={input:GP,default:$P,output:HP},h3={default:u3,straight:r3,step:a3,smoothstep:q_,simplebezier:d3};function p3(t,e,n){const i=Ae(()=>v=>e.value.get(v)),r=Ae(()=>v=>n.value.get(v)),o=Ae(()=>{const v={...h3,...t.edgeTypes},m=Object.keys(v);for(const p of t.edges)p.type&&!m.includes(p.type)&&(v[p.type]=p.type);return v}),s=Ae(()=>{const v={...f3,...t.nodeTypes},m=Object.keys(v);for(const p of t.nodes)p.type&&!m.includes(p.type)&&(v[p.type]=p.type);return v}),a=Ae(()=>t.onlyRenderVisibleElements?I_(t.nodes,{x:0,y:0,width:t.dimensions.width,height:t.dimensions.height},t.viewport,!0):t.nodes),l=Ae(()=>{if(t.onlyRenderVisibleElements){const v=[];for(const m of t.edges){const p=e.value.get(m.source),x=e.value.get(m.target);dP({sourcePos:p.computedPosition||{x:0,y:0},targetPos:x.computedPosition||{x:0,y:0},sourceWidth:p.dimensions.width,sourceHeight:p.dimensions.height,targetWidth:x.dimensions.width,targetHeight:x.dimensions.height,width:t.dimensions.width,height:t.dimensions.height,viewport:t.viewport})&&v.push(m)}return v}return t.edges}),u=Ae(()=>[...a.value,...l.value]),c=Ae(()=>{const v=[];for(const m of t.nodes)m.selected&&v.push(m);return v}),d=Ae(()=>{const v=[];for(const m of t.edges)m.selected&&v.push(m);return v}),f=Ae(()=>[...c.value,...d.value]),h=Ae(()=>{const v=[];for(const m of t.nodes)m.dimensions.width&&m.dimensions.height&&m.handleBounds!==void 0&&v.push(m);return v}),g=Ae(()=>a.value.length>0&&h.value.length===a.value.length);return{getNode:i,getEdge:r,getElements:u,getEdgeTypes:o,getNodeTypes:s,getEdges:l,getNodes:a,getSelectedElements:f,getSelectedNodes:c,getSelectedEdges:d,getNodesInitialized:h,areNodesInitialized:g}}class jr{constructor(){this.currentId=0,this.flows=new Map}static getInstance(){var e;const n=(e=ir())==null?void 0:e.appContext.app,i=n?.config.globalProperties.$vueFlowStorage??jr.instance;return jr.instance=i??new jr,n&&(n.config.globalProperties.$vueFlowStorage=jr.instance),jr.instance}set(e,n){return this.flows.set(e,n)}get(e){return this.flows.get(e)}remove(e){return this.flows.delete(e)}create(e,n){const i=H_(),r=Cr(i),o={};for(const[f,h]of Object.entries(r.hooks)){const g=`on${f.charAt(0).toUpperCase()+f.slice(1)}`;o[g]=h.on}const s={};for(const[f,h]of Object.entries(r.hooks))s[f]=h.trigger;const a=Ae(()=>{const f=new Map;for(const h of r.nodes)f.set(h.id,h);return f}),l=Ae(()=>{const f=new Map;for(const h of r.edges)f.set(h.id,h);return f}),u=p3(r,a,l),c=kP(r,a,l);c.setState({...r,...n});const d={...o,...u,...c,...aC(r),nodeLookup:a,edgeLookup:l,emits:s,id:e,vueFlowVersion:"1.48.2",$destroy:()=>{this.remove(e)}};return this.set(e,d),d}getId(){return`vue-flow-${this.currentId++}`}}function Dt(t){const e=jr.getInstance(),n=Tu(),i=typeof t=="object",r=i?t:{id:t},o=r.id,s=o??n?.vueFlowId;let a;if(n){const l=In(fg,null);typeof l<"u"&&l!==null&&(!s||l.id===s)&&(a=l)}if(a||s&&(a=e.get(s)),!a||s&&a.id!==s){const l=o??e.getId(),u=e.create(l,r);a=u,(n??Eu(!0)).run(()=>{ut(u.applyDefault,(d,f,h)=>{const g=m=>{u.applyNodeChanges(m)},v=m=>{u.applyEdgeChanges(m)};d?(u.onNodesChange(g),u.onEdgesChange(v)):(u.hooks.value.nodesChange.off(g),u.hooks.value.edgesChange.off(v)),h(()=>{u.hooks.value.nodesChange.off(g),u.hooks.value.edgesChange.off(v)})},{immediate:!0}),ia(()=>{if(a){const d=e.get(a.id);d?d.$destroy():Aa(`No store instance found for id ${a.id} in storage.`)}})})}else i&&a.setState(r);if(n&&(Rr(fg,a),n.vueFlowId=a.id),i){const l=ir();l?.type.name!=="VueFlow"&&a.emits.error(new Xt(Gt.USEVUEFLOW_OPTIONS))}return a}function m3(t){const{emits:e,dimensions:n}=Dt();let i;En(()=>{const r=()=>{var o,s;if(!t.value||!(((s=(o=t.value).checkVisibility)==null?void 0:s.call(o))??!0))return;const a=Wu(t.value);(a.width===0||a.height===0)&&e.error(new Xt(Gt.MISSING_VIEWPORT_DIMENSIONS)),n.value={width:a.width||500,height:a.height||500}};r(),window.addEventListener("resize",r),t.value&&(i=new ResizeObserver(()=>r()),i.observe(t.value)),mo(()=>{window.removeEventListener("resize",r),i&&t.value&&i.unobserve(t.value)})})}const g3={name:"UserSelection",compatConfig:{MODE:3}},v3=Nt({...g3,props:{userSelectionRect:{}},setup(t){return(e,n)=>(ce(),ve("div",{class:"vue-flow__selection vue-flow__container",style:nt({width:`${e.userSelectionRect.width}px`,height:`${e.userSelectionRect.height}px`,transform:`translate(${e.userSelectionRect.x}px, ${e.userSelectionRect.y}px)`})},null,4))}}),_3=["tabIndex"],y3={name:"NodesSelection",compatConfig:{MODE:3}},x3=Nt({...y3,setup(t){const{emits:e,viewport:n,getSelectedNodes:i,noPanClassName:r,disableKeyboardA11y:o,userSelectionActive:s}=Dt(),a=$_(),l=Ce(null),u=B_({el:l,onStart(g){e.selectionDragStart(g),e.nodeDragStart(g)},onDrag(g){e.selectionDrag(g),e.nodeDrag(g)},onStop(g){e.selectionDragStop(g),e.nodeDragStop(g)}});En(()=>{var g;o.value||(g=l.value)==null||g.focus({preventScroll:!0})});const c=Ae(()=>Nh(i.value)),d=Ae(()=>({width:`${c.value.width}px`,height:`${c.value.height}px`,top:`${c.value.y}px`,left:`${c.value.x}px`}));function f(g){e.selectionContextMenu({event:g,nodes:i.value})}function h(g){o.value||Ko[g.key]&&(g.preventDefault(),a({x:Ko[g.key].x,y:Ko[g.key].y},g.shiftKey))}return(g,v)=>!he(s)&&c.value.width&&c.value.height?(ce(),ve("div",{key:0,class:dt(["vue-flow__nodesselection vue-flow__container",he(r)]),style:nt({transform:`translate(${he(n).x}px,${he(n).y}px) scale(${he(n).zoom})`})},[j("div",{ref_key:"el",ref:l,class:dt([{dragging:he(u)},"vue-flow__nodesselection-rect"]),style:nt(d.value),tabIndex:he(o)?void 0:-1,onContextmenu:f,onKeydown:h},null,46,_3)],6)):We("",!0)}});function b3(t,e){return{x:t.clientX-e.left,y:t.clientY-e.top}}const S3={name:"Pane",compatConfig:{MODE:3}},M3=Nt({...S3,props:{isSelecting:{type:Boolean},selectionKeyPressed:{type:Boolean}},setup(t){const{vueFlowRef:e,nodes:n,viewport:i,emits:r,userSelectionActive:o,removeSelectedElements:s,userSelectionRect:a,elementsSelectable:l,nodesSelectionActive:u,getSelectedEdges:c,getSelectedNodes:d,removeNodes:f,removeEdges:h,selectionMode:g,deleteKeyCode:v,multiSelectionKeyCode:m,multiSelectionActive:p,edgeLookup:x,nodeLookup:M,connectionLookup:y,defaultEdgeOptions:P,connectionStartHandle:L,panOnDrag:B}=Dt(),_=Tr(null),S=Tr(new Set),R=Tr(new Set),A=Tr(null),C=xt(()=>l.value&&(t.isSelecting||o.value)),H=xt(()=>L.value!==null);let w=!1,O=!1;const T=Ys(v,{actInsideInputWithModifier:!1}),N=Ys(m);ut(T,te=>{te&&(f(d.value),h(c.value),u.value=!1)}),ut(N,te=>{p.value=te});function z(te,D){return K=>{K.target===D&&te?.(K)}}function X(te){if(w||H.value){w=!1;return}r.paneClick(te),s(),u.value=!1}function Z(te){var D;if(Array.isArray(B.value)&&((D=B.value)!=null&&D.includes(2))){te.preventDefault();return}r.paneContextMenu(te)}function ne(te){r.paneScroll(te)}function Q(te){var D,K,se;if(A.value=((D=e.value)==null?void 0:D.getBoundingClientRect())??null,!l.value||!t.isSelecting||te.button!==0||te.target!==_.value||!A.value)return;(se=(K=te.target)==null?void 0:K.setPointerCapture)==null||se.call(K,te.pointerId);const{x:be,y:Se}=b3(te,A.value);O=!0,w=!1,s(),a.value={width:0,height:0,startX:be,startY:Se,x:be,y:Se},r.selectionStart(te)}function de(te){var D;if(!A.value||!a.value)return;w=!0;const{x:K,y:se}=li(te,A.value),{startX:be=0,startY:Se=0}=a.value,Re={startX:be,startY:Se,x:K<be?K:be,y:se<Se?se:Se,width:Math.abs(K-be),height:Math.abs(se-Se)},$=S.value,G=R.value;S.value=new Set(I_(n.value,Re,i.value,g.value===Ph.Partial,!0).map(U=>U.id)),R.value=new Set;const F=((D=P.value)==null?void 0:D.selectable)??!0;for(const U of S.value){const k=y.value.get(U);if(k)for(const{edgeId:W}of k.values()){const b=x.value.get(W);b&&(b.selectable??F)&&R.value.add(W)}}if(!dg($,S.value)){const U=br(M.value,S.value,!0);r.nodesChange(U)}if(!dg(G,R.value)){const U=br(x.value,R.value);r.edgesChange(U)}a.value=Re,o.value=!0,u.value=!1}function we(te){var D;te.button!==0||!O||((D=te.target)==null||D.releasePointerCapture(te.pointerId),!o.value&&a.value&&te.target===_.value&&X(te),o.value=!1,a.value=null,u.value=S.value.size>0,r.selectionEnd(te),t.selectionKeyPressed&&(w=!1),O=!1)}return(te,D)=>(ce(),ve("div",{ref_key:"container",ref:_,class:dt(["vue-flow__pane vue-flow__container",{selection:te.isSelecting}]),onClick:D[0]||(D[0]=K=>C.value?void 0:z(X,_.value)(K)),onContextmenu:D[1]||(D[1]=K=>z(Z,_.value)(K)),onWheelPassive:D[2]||(D[2]=K=>z(ne,_.value)(K)),onPointerenter:D[3]||(D[3]=K=>C.value?void 0:he(r).paneMouseEnter(K)),onPointerdown:D[4]||(D[4]=K=>C.value?Q(K):he(r).paneMouseMove(K)),onPointermove:D[5]||(D[5]=K=>C.value?de(K):he(r).paneMouseMove(K)),onPointerup:D[6]||(D[6]=K=>C.value?we(K):void 0),onPointerleave:D[7]||(D[7]=K=>he(r).paneMouseLeave(K))},[qi(te.$slots,"default"),he(o)&&he(a)?(ce(),jt(v3,{key:0,"user-selection-rect":he(a)},null,8,["user-selection-rect"])):We("",!0),he(u)&&he(d).length?(ce(),jt(x3,{key:1})):We("",!0)],34))}}),w3={name:"Transform",compatConfig:{MODE:3}},E3=Nt({...w3,setup(t){const{viewport:e,fitViewOnInit:n,fitViewOnInitDone:i}=Dt(),r=Ae(()=>n.value?!i.value:!1),o=Ae(()=>`translate(${e.value.x}px,${e.value.y}px) scale(${e.value.zoom})`);return(s,a)=>(ce(),ve("div",{class:"vue-flow__transformationpane vue-flow__container",style:nt({transform:o.value,opacity:r.value?0:void 0})},[qi(s.$slots,"default")],4))}}),T3={name:"Viewport",compatConfig:{MODE:3}},A3=Nt({...T3,setup(t){const{minZoom:e,maxZoom:n,defaultViewport:i,translateExtent:r,zoomActivationKeyCode:o,selectionKeyCode:s,panActivationKeyCode:a,panOnScroll:l,panOnScrollMode:u,panOnScrollSpeed:c,panOnDrag:d,zoomOnDoubleClick:f,zoomOnPinch:h,zoomOnScroll:g,preventScrolling:v,noWheelClassName:m,noPanClassName:p,emits:x,connectionStartHandle:M,userSelectionActive:y,paneDragging:P,d3Zoom:L,d3Selection:B,d3ZoomHandler:_,viewport:S,viewportRef:R,paneClickDistance:A}=Dt();m3(R);const C=Tr(!1),H=Tr(!1);let w=null,O=!1,T=0,N={x:0,y:0,zoom:0};const z=Ys(a),X=Ys(s),Z=Ys(o),ne=xt(()=>(!X.value||X.value&&s.value===!0)&&(z.value||d.value)),Q=xt(()=>z.value||l.value),de=xt(()=>s.value===!0&&ne.value!==!0),we=xt(()=>X.value&&s.value!==!0||y.value||de.value),te=xt(()=>M.value!==null);En(()=>{if(!R.value){Aa("Viewport element is missing");return}const Se=R.value,Re=Se.getBoundingClientRect(),$=WI().clickDistance(A.value).scaleExtent([e.value,n.value]).translateExtent(r.value),G=Gn(Se).call($),F=G.on("wheel.zoom"),U=as.translate(i.value.x??0,i.value.y??0).scale(er(i.value.zoom??1,e.value,n.value)),k=[[0,0],[Re.width,Re.height]],W=$.constrain()(U,k,r.value);$.transform(G,W),$.wheelDelta(If),L.value=$,B.value=G,_.value=F,S.value={x:W.x,y:W.y,zoom:W.k},$.on("start",b=>{var q;if(!b.sourceEvent)return null;T=b.sourceEvent.button,C.value=!0;const J=se(b.transform);((q=b.sourceEvent)==null?void 0:q.type)==="mousedown"&&(P.value=!0),N=J,x.viewportChangeStart(J),x.moveStart({event:b,flowTransform:J})}),$.on("end",b=>{if(!b.sourceEvent)return null;if(C.value=!1,P.value=!1,D(ne.value,T??0)&&!O&&x.paneContextMenu(b.sourceEvent),O=!1,K(N,b.transform)){const q=se(b.transform);N=q,x.viewportChangeEnd(q),x.moveEnd({event:b,flowTransform:q})}}),$.filter(b=>{var q;const J=Z.value||g.value,ee=h.value&&b.ctrlKey,ie=b.button,I=b.type==="wheel";if(ie===1&&b.type==="mousedown"&&(be(b,"vue-flow__node")||be(b,"vue-flow__edge")))return!0;if(!ne.value&&!J&&!Q.value&&!f.value&&!h.value||y.value||te.value&&!I||!f.value&&b.type==="dblclick"||be(b,m.value)&&I||be(b,p.value)&&(!I||Q.value&&I&&!Z.value)||!h.value&&b.ctrlKey&&I||!J&&!Q.value&&!ee&&I)return!1;if(!h&&b.type==="touchstart"&&((q=b.touches)==null?void 0:q.length)>1)return b.preventDefault(),!1;if(!ne.value&&(b.type==="mousedown"||b.type==="touchstart")||de.value&&Array.isArray(d.value)&&d.value.includes(0)&&ie===0||Array.isArray(d.value)&&!d.value.includes(ie)&&(b.type==="mousedown"||b.type==="touchstart"))return!1;const E=Array.isArray(d.value)&&d.value.includes(ie)||s.value===!0&&Array.isArray(d.value)&&!d.value.includes(0)||!ie||ie<=1;return(!b.ctrlKey||z.value||I)&&E}),ut([y,ne],()=>{y.value&&!C.value?$.on("zoom",null):y.value||$.on("zoom",b=>{S.value={x:b.transform.x,y:b.transform.y,zoom:b.transform.k};const q=se(b.transform);O=D(ne.value,T??0),x.viewportChange(q),x.move({event:b,flowTransform:q})})},{immediate:!0}),ut([y,Q,u,Z,h,v,m],()=>{Q.value&&!Z.value&&!y.value?G.on("wheel.zoom",b=>{if(be(b,m.value))return!1;const q=Z.value||g.value,J=h.value&&b.ctrlKey;if(!(!v.value||Q.value||q||J))return!1;b.preventDefault(),b.stopImmediatePropagation();const ie=G.property("__zoom").k||1,I=da();if(!z.value&&b.ctrlKey&&h.value&&I){const fe=ri(b),Ue=If(b),Ie=ie*2**Ue;$.scaleTo(G,Ie,fe,b);return}const E=b.deltaMode===1?20:1;let Y=u.value===Xs.Vertical?0:b.deltaX*E,ae=u.value===Xs.Horizontal?0:b.deltaY*E;!I&&b.shiftKey&&u.value!==Xs.Vertical&&!Y&&ae&&(Y=ae,ae=0),$.translateBy(G,-(Y/ie)*c.value,-(ae/ie)*c.value);const me=se(G.property("__zoom"));w&&clearTimeout(w),H.value?(x.move({event:b,flowTransform:me}),x.viewportChange(me),w=setTimeout(()=>{x.moveEnd({event:b,flowTransform:me}),x.viewportChangeEnd(me),H.value=!1},150)):(H.value=!0,x.moveStart({event:b,flowTransform:me}),x.viewportChangeStart(me))},{passive:!1}):typeof F<"u"&&G.on("wheel.zoom",function(b,q){const J=!v.value&&b.type==="wheel"&&!b.ctrlKey,ee=Z.value||g.value,ie=h.value&&b.ctrlKey;if(!ee&&!l.value&&!ie&&b.type==="wheel"||J||be(b,m.value))return null;b.preventDefault(),F.call(this,b,q)},{passive:!1})},{immediate:!0})});function D(Se,Re){return Re===2&&Array.isArray(Se)&&Se.includes(2)}function K(Se,Re){return Se.x!==Re.x&&!Number.isNaN(Re.x)||Se.y!==Re.y&&!Number.isNaN(Re.y)||Se.zoom!==Re.k&&!Number.isNaN(Re.k)}function se(Se){return{x:Se.x,y:Se.y,zoom:Se.k}}function be(Se,Re){return Se.target.closest(`.${Re}`)}return(Se,Re)=>(ce(),ve("div",{ref_key:"viewportRef",ref:R,class:"vue-flow__viewport vue-flow__container"},[tt(M3,{"is-selecting":we.value,"selection-key-pressed":he(X),class:dt({connecting:te.value,dragging:he(P),draggable:he(d)===!0||Array.isArray(he(d))&&he(d).includes(0)})},{default:xn(()=>[tt(E3,null,{default:xn(()=>[qi(Se.$slots,"default")]),_:3})]),_:3},8,["is-selecting","selection-key-pressed","class"])],512))}}),C3=["id"],R3=["id"],I3=["id"],P3={name:"A11yDescriptions",compatConfig:{MODE:3}},N3=Nt({...P3,setup(t){const{id:e,disableKeyboardA11y:n,ariaLiveMessage:i}=Dt();return(r,o)=>(ce(),ve(st,null,[j("div",{id:`${he(b_)}-${he(e)}`,style:{display:"none"}}," Press enter or space to select a node. "+Te(he(n)?"":"You can then use the arrow keys to move the node around.")+" You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ",9,C3),j("div",{id:`${he(S_)}-${he(e)}`,style:{display:"none"}}," Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ",8,R3),he(n)?We("",!0):(ce(),ve("div",{key:0,id:`${he(jI)}-${he(e)}`,"aria-live":"assertive","aria-atomic":"true",style:{position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)","clip-path":"inset(100%)"}},Te(he(i)),9,I3))],64))}});function D3(){const t=Dt();ut(()=>t.viewportHelper.value.viewportInitialized,e=>{e&&setTimeout(()=>{t.emits.init(t),t.emits.paneReady(t)},1)})}function L3(t,e,n){return n===Xe.Left?t-e:n===Xe.Right?t+e:t}function F3(t,e,n){return n===Xe.Top?t-e:n===Xe.Bottom?t+e:t}const Uh=function({radius:t=10,centerX:e=0,centerY:n=0,position:i=Xe.Top,type:r}){return Rt("circle",{class:`vue-flow__edgeupdater vue-flow__edgeupdater-${r}`,cx:L3(e,t,i),cy:F3(n,t,i),r:t,stroke:"transparent",fill:"transparent"})};Uh.props=["radius","centerX","centerY","position","type"];Uh.compatConfig={MODE:3};const vg=Uh,U3=Nt({name:"Edge",compatConfig:{MODE:3},props:["id"],setup(t){const{id:e,addSelectedEdges:n,connectionMode:i,edgeUpdaterRadius:r,emits:o,nodesSelectionActive:s,noPanClassName:a,getEdgeTypes:l,removeSelectedEdges:u,findEdge:c,findNode:d,isValidConnection:f,multiSelectionActive:h,disableKeyboardA11y:g,elementsSelectable:v,edgesUpdatable:m,edgesFocusable:p,hooks:x}=Dt(),M=Ae(()=>c(t.id)),{emit:y,on:P}=AP(M.value,o),L=In(Yu),B=ir(),_=Ce(!1),S=Ce(!1),R=Ce(""),A=Ce(null),C=Ce("source"),H=Ce(null),w=xt(()=>typeof M.value.selectable>"u"?v.value:M.value.selectable),O=xt(()=>typeof M.value.updatable>"u"?m.value:M.value.updatable),T=xt(()=>typeof M.value.focusable>"u"?p.value:M.value.focusable);Rr(wP,t.id),Rr(EP,H);const N=Ae(()=>M.value.class instanceof Function?M.value.class(M.value):M.value.class),z=Ae(()=>M.value.style instanceof Function?M.value.style(M.value):M.value.style),X=Ae(()=>{const U=M.value.type||"default",k=L?.[`edge-${U}`];if(k)return k;let W=M.value.template??l.value[U];if(typeof W=="string"&&B){const b=Object.keys(B.appContext.components);b&&b.includes(U)&&(W=Pv(U,!1))}return W&&typeof W!="string"?W:(o.error(new Xt(Gt.EDGE_TYPE_MISSING,W)),!1)}),{handlePointerDown:Z}=z_({nodeId:R,handleId:A,type:C,isValidConnection:f,edgeUpdaterType:C,onEdgeUpdate:de,onEdgeUpdateEnd:we});return()=>{const U=d(M.value.source),k=d(M.value.target),W="pathOptions"in M.value?M.value.pathOptions:{};if(!U&&!k)return o.error(new Xt(Gt.EDGE_SOURCE_TARGET_MISSING,M.value.id,M.value.source,M.value.target)),null;if(!U)return o.error(new Xt(Gt.EDGE_SOURCE_MISSING,M.value.id,M.value.source)),null;if(!k)return o.error(new Xt(Gt.EDGE_TARGET_MISSING,M.value.id,M.value.target)),null;if(!M.value||M.value.hidden||U.hidden||k.hidden)return null;let b;i.value===Nr.Strict?b=U.handleBounds.source:b=[...U.handleBounds.source||[],...U.handleBounds.target||[]];const q=og(b,M.value.sourceHandle);let J;i.value===Nr.Strict?J=k.handleBounds.target:J=[...k.handleBounds.target||[],...k.handleBounds.source||[]];const ee=og(J,M.value.targetHandle),ie=q?.position||Xe.Bottom,I=ee?.position||Xe.Top,{x:E,y:Y}=ls(U,q,ie),{x:ae,y:me}=ls(k,ee,I);return M.value.sourceX=E,M.value.sourceY=Y,M.value.targetX=ae,M.value.targetY=me,Rt("g",{ref:H,key:t.id,"data-id":t.id,class:["vue-flow__edge",`vue-flow__edge-${X.value===!1?"default":M.value.type||"default"}`,a.value,N.value,{updating:_.value,selected:M.value.selected,animated:M.value.animated,inactive:!w.value&&!x.value.edgeClick.hasListeners()}],tabIndex:T.value?0:void 0,"aria-label":M.value.ariaLabel===null?void 0:M.value.ariaLabel??`Edge from ${M.value.source} to ${M.value.target}`,"aria-describedby":T.value?`${S_}-${e}`:void 0,"aria-roledescription":"edge",role:T.value?"group":"img",...M.value.domAttributes,onClick:D,onContextmenu:K,onDblclick:se,onMouseenter:be,onMousemove:Se,onMouseleave:Re,onKeyDown:T.value?F:void 0},[S.value?null:Rt(X.value===!1?l.value.default:X.value,{id:t.id,sourceNode:U,targetNode:k,source:M.value.source,target:M.value.target,type:M.value.type,updatable:O.value,selected:M.value.selected,animated:M.value.animated,label:M.value.label,labelStyle:M.value.labelStyle,labelShowBg:M.value.labelShowBg,labelBgStyle:M.value.labelBgStyle,labelBgPadding:M.value.labelBgPadding,labelBgBorderRadius:M.value.labelBgBorderRadius,data:M.value.data,events:{...M.value.events,...P},style:z.value,markerStart:`url('#${ca(M.value.markerStart,e)}')`,markerEnd:`url('#${ca(M.value.markerEnd,e)}')`,sourcePosition:ie,targetPosition:I,sourceX:E,sourceY:Y,targetX:ae,targetY:me,sourceHandleId:M.value.sourceHandle,targetHandleId:M.value.targetHandle,interactionWidth:M.value.interactionWidth,...W}),[O.value==="source"||O.value===!0?[Rt("g",{onMousedown:$,onMouseenter:ne,onMouseout:Q},Rt(vg,{position:ie,centerX:E,centerY:Y,radius:r.value,type:"source","data-type":"source"}))]:null,O.value==="target"||O.value===!0?[Rt("g",{onMousedown:G,onMouseenter:ne,onMouseout:Q},Rt(vg,{position:I,centerX:ae,centerY:me,radius:r.value,type:"target","data-type":"target"}))]:null]])};function ne(){_.value=!0}function Q(){_.value=!1}function de(U,k){y.update({event:U,edge:M.value,connection:k})}function we(U){y.updateEnd({event:U,edge:M.value}),S.value=!1}function te(U,k){U.button===0&&(S.value=!0,R.value=k?M.value.target:M.value.source,A.value=(k?M.value.targetHandle:M.value.sourceHandle)??null,C.value=k?"target":"source",y.updateStart({event:U,edge:M.value}),Z(U))}function D(U){var k;const W={event:U,edge:M.value};w.value&&(s.value=!1,M.value.selected&&h.value?(u([M.value]),(k=H.value)==null||k.blur()):n([M.value])),y.click(W)}function K(U){y.contextMenu({event:U,edge:M.value})}function se(U){y.doubleClick({event:U,edge:M.value})}function be(U){y.mouseEnter({event:U,edge:M.value})}function Se(U){y.mouseMove({event:U,edge:M.value})}function Re(U){y.mouseLeave({event:U,edge:M.value})}function $(U){te(U,!0)}function G(U){te(U,!1)}function F(U){var k;!g.value&&M_.includes(U.key)&&w.value&&(U.key==="Escape"?((k=H.value)==null||k.blur(),u([c(t.id)])):n([c(t.id)]))}}}),O3=U3,B3=Nt({name:"ConnectionLine",compatConfig:{MODE:3},setup(){var t;const{id:e,connectionMode:n,connectionStartHandle:i,connectionEndHandle:r,connectionPosition:o,connectionLineType:s,connectionLineStyle:a,connectionLineOptions:l,connectionStatus:u,viewport:c,findNode:d}=Dt(),f=(t=In(Yu))==null?void 0:t["connection-line"],h=Ae(()=>{var x;return d((x=i.value)==null?void 0:x.nodeId)}),g=Ae(()=>{var x;return d((x=r.value)==null?void 0:x.nodeId)??null}),v=Ae(()=>({x:(o.value.x-c.value.x)/c.value.zoom,y:(o.value.y-c.value.y)/c.value.zoom})),m=Ae(()=>l.value.markerStart?`url(#${ca(l.value.markerStart,e)})`:""),p=Ae(()=>l.value.markerEnd?`url(#${ca(l.value.markerEnd,e)})`:"");return()=>{var x,M,y;if(!h.value||!i.value)return null;const P=i.value.id,L=i.value.type,B=h.value.handleBounds;let _=B?.[L]??[];if(n.value===Nr.Loose){const z=B?.[L==="source"?"target":"source"]??[];_=[..._,...z]}if(!_)return null;const S=(P?_.find(z=>z.id===P):_[0])??null,R=S?.position??Xe.Top,{x:A,y:C}=ls(h.value,S,R);let H=null;g.value&&(n.value===Nr.Strict?H=((x=g.value.handleBounds[L==="source"?"target":"source"])==null?void 0:x.find(z=>{var X;return z.id===((X=r.value)==null?void 0:X.id)}))||null:H=((M=[...g.value.handleBounds.source??[],...g.value.handleBounds.target??[]])==null?void 0:M.find(z=>{var X;return z.id===((X=r.value)==null?void 0:X.id)}))||null);const w=((y=r.value)==null?void 0:y.position)??(R?Pf[R]:null);if(!R||!w)return null;const O=s.value??l.value.type??Kr.Bezier;let T="";const N={sourceX:A,sourceY:C,sourcePosition:R,targetX:v.value.x,targetY:v.value.y,targetPosition:w};return O===Kr.Bezier?[T]=X_(N):O===Kr.Step?[T]=Df({...N,borderRadius:0}):O===Kr.SmoothStep?[T]=Df(N):O===Kr.SimpleBezier?[T]=Y_(N):T=`M${A},${C} ${v.value.x},${v.value.y}`,Rt("svg",{class:"vue-flow__edges vue-flow__connectionline vue-flow__container"},Rt("g",{class:"vue-flow__connection"},f?Rt(f,{sourceX:A,sourceY:C,sourcePosition:R,targetX:v.value.x,targetY:v.value.y,targetPosition:w,sourceNode:h.value,sourceHandle:S,targetNode:g.value,targetHandle:H,markerEnd:p.value,markerStart:m.value,connectionStatus:u.value}):Rt("path",{d:T,class:[l.value.class,u.value,"vue-flow__connection-path"],style:{...a.value,...l.value.style},"marker-end":p.value,"marker-start":m.value})))}}}),k3=B3,z3=["id","markerWidth","markerHeight","markerUnits","orient"],V3={name:"MarkerType",compatConfig:{MODE:3}},$3=Nt({...V3,props:{id:{},type:{},color:{default:"none"},width:{default:12.5},height:{default:12.5},markerUnits:{default:"strokeWidth"},orient:{default:"auto-start-reverse"},strokeWidth:{default:1}},setup(t){return(e,n)=>(ce(),ve("marker",{id:e.id,class:"vue-flow__arrowhead",viewBox:"-10 -10 20 20",refX:"0",refY:"0",markerWidth:`${e.width}`,markerHeight:`${e.height}`,markerUnits:e.markerUnits,orient:e.orient},[e.type===he(Cf).ArrowClosed?(ce(),ve("polyline",{key:0,style:nt({stroke:e.color,fill:e.color,strokeWidth:e.strokeWidth}),"stroke-linecap":"round","stroke-linejoin":"round",points:"-5,-4 0,0 -5,4 -5,-4"},null,4)):We("",!0),e.type===he(Cf).Arrow?(ce(),ve("polyline",{key:1,style:nt({stroke:e.color,strokeWidth:e.strokeWidth}),"stroke-linecap":"round","stroke-linejoin":"round",fill:"none",points:"-5,-4 0,0 -5,4"},null,4)):We("",!0)],8,z3))}}),H3={class:"vue-flow__marker vue-flow__container","aria-hidden":"true"},G3={name:"MarkerDefinitions",compatConfig:{MODE:3}},W3=Nt({...G3,setup(t){const{id:e,edges:n,connectionLineOptions:i,defaultMarkerColor:r}=Dt(),o=Ae(()=>{const s=new Set,a=[],l=u=>{if(u){const c=ca(u,e);s.has(c)||(typeof u=="object"?a.push({...u,id:c,color:u.color||r.value}):a.push({id:c,color:r.value,type:u}),s.add(c))}};for(const u of[i.value.markerEnd,i.value.markerStart])l(u);for(const u of n.value)for(const c of[u.markerStart,u.markerEnd])l(c);return a.sort((u,c)=>u.id.localeCompare(c.id))});return(s,a)=>(ce(),ve("svg",H3,[j("defs",null,[(ce(!0),ve(st,null,Ht(o.value,l=>(ce(),jt($3,{id:l.id,key:l.id,type:l.type,color:l.color,width:l.width,height:l.height,markerUnits:l.markerUnits,"stroke-width":l.strokeWidth,orient:l.orient},null,8,["id","type","color","width","height","markerUnits","stroke-width","orient"]))),128))])]))}}),X3={name:"Edges",compatConfig:{MODE:3}},Y3=Nt({...X3,setup(t){const{findNode:e,getEdges:n,elevateEdgesOnSelect:i}=Dt();return(r,o)=>(ce(),ve(st,null,[tt(W3),(ce(!0),ve(st,null,Ht(he(n),s=>(ce(),ve("svg",{key:s.id,class:"vue-flow__edges vue-flow__container",style:nt({zIndex:he(fP)(s,he(e),he(i))})},[tt(he(O3),{id:s.id},null,8,["id"])],4))),128)),tt(he(k3))],64))}}),q3=Nt({name:"Node",compatConfig:{MODE:3},props:["id","resizeObserver"],setup(t){const{id:e,noPanClassName:n,selectNodesOnDrag:i,nodesSelectionActive:r,multiSelectionActive:o,emits:s,removeSelectedNodes:a,addSelectedNodes:l,updateNodeDimensions:u,onUpdateNodeInternals:c,getNodeTypes:d,nodeExtent:f,elevateNodesOnSelect:h,disableKeyboardA11y:g,ariaLiveMessage:v,snapToGrid:m,snapGrid:p,nodeDragThreshold:x,nodesDraggable:M,elementsSelectable:y,nodesConnectable:P,nodesFocusable:L,hooks:B}=Dt(),_=Ce(null);Rr(O_,_),Rr(Fh,t.id);const S=In(Yu),R=ir(),A=$_(),{node:C,parentNode:H}=V_(t.id),{emit:w,on:O}=IP(C,s),T=xt(()=>typeof C.draggable>"u"?M.value:C.draggable),N=xt(()=>typeof C.selectable>"u"?y.value:C.selectable),z=xt(()=>typeof C.connectable>"u"?P.value:C.connectable),X=xt(()=>typeof C.focusable>"u"?L.value:C.focusable),Z=Ae(()=>N.value||T.value||B.value.nodeClick.hasListeners()||B.value.nodeDoubleClick.hasListeners()||B.value.nodeMouseEnter.hasListeners()||B.value.nodeMouseMove.hasListeners()||B.value.nodeMouseLeave.hasListeners()),ne=xt(()=>!!C.dimensions.width&&!!C.dimensions.height),Q=Ae(()=>{const k=C.type||"default",W=S?.[`node-${k}`];if(W)return W;let b=C.template||d.value[k];if(typeof b=="string"&&R){const q=Object.keys(R.appContext.components);q&&q.includes(k)&&(b=Pv(k,!1))}return b&&typeof b!="string"?b:(s.error(new Xt(Gt.NODE_TYPE_MISSING,b)),!1)}),de=B_({id:t.id,el:_,disabled:()=>!T.value,selectable:N,dragHandle:()=>C.dragHandle,onStart(k){w.dragStart(k)},onDrag(k){w.drag(k)},onStop(k){w.dragStop(k)},onClick(k){F(k)}}),we=Ae(()=>C.class instanceof Function?C.class(C):C.class),te=Ae(()=>{const k=(C.style instanceof Function?C.style(C):C.style)||{},W=C.width instanceof Function?C.width(C):C.width,b=C.height instanceof Function?C.height(C):C.height;return!k.width&&W&&(k.width=typeof W=="string"?W:`${W}px`),!k.height&&b&&(k.height=typeof b=="string"?b:`${b}px`),k}),D=xt(()=>Number(C.zIndex??te.value.zIndex??0));return c(k=>{(k.includes(t.id)||!k.length)&&se()}),En(()=>{ut(()=>C.hidden,(k=!1,W,b)=>{!k&&_.value&&(t.resizeObserver.observe(_.value),b(()=>{_.value&&t.resizeObserver.unobserve(_.value)}))},{immediate:!0,flush:"post"})}),ut([()=>C.type,()=>C.sourcePosition,()=>C.targetPosition],()=>{fn(()=>{u([{id:t.id,nodeElement:_.value,forceUpdate:!0}])})}),ut([()=>C.position.x,()=>C.position.y,()=>{var k;return(k=H.value)==null?void 0:k.computedPosition.x},()=>{var k;return(k=H.value)==null?void 0:k.computedPosition.y},()=>{var k;return(k=H.value)==null?void 0:k.computedPosition.z},D,()=>C.selected,()=>C.dimensions.height,()=>C.dimensions.width,()=>{var k;return(k=H.value)==null?void 0:k.dimensions.height},()=>{var k;return(k=H.value)==null?void 0:k.dimensions.width}],([k,W,b,q,J,ee])=>{const ie={x:k,y:W,z:ee+(h.value&&C.selected?1e3:0)};typeof b<"u"&&typeof q<"u"?C.computedPosition=sP({x:b,y:q,z:J},ie):C.computedPosition=ie},{flush:"post",immediate:!0}),ut([()=>C.extent,f],([k,W],[b,q])=>{(k!==b||W!==q)&&K()}),C.extent==="parent"||typeof C.extent=="object"&&"range"in C.extent&&C.extent.range==="parent"?yf(()=>ne).toBe(!0).then(K):K(),()=>C.hidden?null:Rt("div",{ref:_,"data-id":C.id,class:["vue-flow__node",`vue-flow__node-${Q.value===!1?"default":C.type||"default"}`,{[n.value]:T.value,dragging:de?.value,draggable:T.value,selected:C.selected,selectable:N.value,parent:C.isParent},we.value],style:{visibility:ne.value?"visible":"hidden",zIndex:C.computedPosition.z??D.value,transform:`translate(${C.computedPosition.x}px,${C.computedPosition.y}px)`,pointerEvents:Z.value?"all":"none",...te.value},tabIndex:X.value?0:void 0,role:X.value?"group":void 0,"aria-describedby":g.value?void 0:`${b_}-${e}`,"aria-label":C.ariaLabel,"aria-roledescription":"node",...C.domAttributes,onMouseenter:be,onMousemove:Se,onMouseleave:Re,onContextmenu:$,onClick:F,onDblclick:G,onKeydown:U},[Rt(Q.value===!1?d.value.default:Q.value,{id:C.id,type:C.type,data:C.data,events:{...C.events,...O},selected:C.selected,resizing:C.resizing,dragging:de.value,connectable:z.value,position:C.computedPosition,dimensions:C.dimensions,isValidTargetPos:C.isValidTargetPos,isValidSourcePos:C.isValidSourcePos,parent:C.parentNode,parentNodeId:C.parentNode,zIndex:C.computedPosition.z??D.value,targetPosition:C.targetPosition,sourcePosition:C.sourcePosition,label:C.label,dragHandle:C.dragHandle,onUpdateNodeInternals:se})]);function K(){const k=C.computedPosition,{computedPosition:W,position:b}=Dh(C,m.value?Xu(k,p.value):k,s.error,f.value,H.value);(C.computedPosition.x!==W.x||C.computedPosition.y!==W.y)&&(C.computedPosition={...C.computedPosition,...W}),(C.position.x!==b.x||C.position.y!==b.y)&&(C.position=b)}function se(){_.value&&u([{id:t.id,nodeElement:_.value,forceUpdate:!0}])}function be(k){de?.value||w.mouseEnter({event:k,node:C})}function Se(k){de?.value||w.mouseMove({event:k,node:C})}function Re(k){de?.value||w.mouseLeave({event:k,node:C})}function $(k){return w.contextMenu({event:k,node:C})}function G(k){return w.doubleClick({event:k,node:C})}function F(k){N.value&&(!i.value||!T.value||x.value>0)&&Nf(C,o.value,l,a,r,!1,_.value),w.click({event:k,node:C})}function U(k){if(!(Rf(k)||g.value))if(M_.includes(k.key)&&N.value){const W=k.key==="Escape";Nf(C,o.value,l,a,r,W,_.value)}else T.value&&C.selected&&Ko[k.key]&&(k.preventDefault(),v.value=`Moved selected node ${k.key.replace("Arrow","").toLowerCase()}. New position, x: ${~~C.position.x}, y: ${~~C.position.y}`,A({x:Ko[k.key].x,y:Ko[k.key].y},k.shiftKey))}}}),K3=q3;function Z3(t={includeHiddenNodes:!1}){const{nodes:e}=Dt();return Ae(()=>{if(e.value.length===0)return!1;for(const n of e.value)if((t.includeHiddenNodes||!n.hidden)&&(n?.handleBounds===void 0||n.dimensions.width===0||n.dimensions.height===0))return!1;return!0})}const j3={class:"vue-flow__nodes vue-flow__container"},J3={name:"Nodes",compatConfig:{MODE:3}},Q3=Nt({...J3,setup(t){const{getNodes:e,updateNodeDimensions:n,emits:i}=Dt(),r=Z3(),o=Ce();return ut(r,s=>{s&&fn(()=>{i.nodesInitialized(e.value)})},{immediate:!0}),En(()=>{o.value=new ResizeObserver(s=>{const a=s.map(l=>({id:l.target.getAttribute("data-id"),nodeElement:l.target,forceUpdate:!0}));fn(()=>n(a))})}),mo(()=>{var s;return(s=o.value)==null?void 0:s.disconnect()}),(s,a)=>(ce(),ve("div",j3,[o.value?(ce(!0),ve(st,{key:0},Ht(he(e),(l,u,c,d)=>{const f=[l.id];if(d&&d.key===l.id&&Ub(d,f))return d;const h=(ce(),jt(he(K3),{id:l.id,key:l.id,"resize-observer":o.value},null,8,["id","resize-observer"]));return h.memo=f,h},a,0),128)):We("",!0)]))}});function eN(){const{emits:t}=Dt();En(()=>{if(U_()){const e=document.querySelector(".vue-flow__pane");e&&window.getComputedStyle(e).zIndex!=="1"&&t.error(new Xt(Gt.MISSING_STYLES))}})}const tN=j("div",{class:"vue-flow__edge-labels"},null,-1),nN={name:"VueFlow",compatConfig:{MODE:3}},iN=Nt({...nN,props:{id:{},modelValue:{},nodes:{},edges:{},edgeTypes:{},nodeTypes:{},connectionMode:{},connectionLineType:{},connectionLineStyle:{default:void 0},connectionLineOptions:{default:void 0},connectionRadius:{},isValidConnection:{type:[Function,null],default:void 0},deleteKeyCode:{default:void 0},selectionKeyCode:{type:[Boolean,null],default:void 0},multiSelectionKeyCode:{default:void 0},zoomActivationKeyCode:{default:void 0},panActivationKeyCode:{default:void 0},snapToGrid:{type:Boolean,default:void 0},snapGrid:{},onlyRenderVisibleElements:{type:Boolean,default:void 0},edgesUpdatable:{type:[Boolean,String],default:void 0},nodesDraggable:{type:Boolean,default:void 0},nodesConnectable:{type:Boolean,default:void 0},nodeDragThreshold:{},elementsSelectable:{type:Boolean,default:void 0},selectNodesOnDrag:{type:Boolean,default:void 0},panOnDrag:{type:[Boolean,Array],default:void 0},minZoom:{},maxZoom:{},defaultViewport:{},translateExtent:{},nodeExtent:{},defaultMarkerColor:{},zoomOnScroll:{type:Boolean,default:void 0},zoomOnPinch:{type:Boolean,default:void 0},panOnScroll:{type:Boolean,default:void 0},panOnScrollSpeed:{},panOnScrollMode:{},paneClickDistance:{},zoomOnDoubleClick:{type:Boolean,default:void 0},preventScrolling:{type:Boolean,default:void 0},selectionMode:{},edgeUpdaterRadius:{},fitViewOnInit:{type:Boolean,default:void 0},connectOnClick:{type:Boolean,default:void 0},applyDefault:{type:Boolean,default:void 0},autoConnect:{type:[Boolean,Function],default:void 0},noDragClassName:{},noWheelClassName:{},noPanClassName:{},defaultEdgeOptions:{},elevateEdgesOnSelect:{type:Boolean,default:void 0},elevateNodesOnSelect:{type:Boolean,default:void 0},disableKeyboardA11y:{type:Boolean,default:void 0},edgesFocusable:{type:Boolean,default:void 0},nodesFocusable:{type:Boolean,default:void 0},autoPanOnConnect:{type:Boolean,default:void 0},autoPanOnNodeDrag:{type:Boolean,default:void 0},autoPanSpeed:{}},emits:["nodesChange","edgesChange","nodesInitialized","paneReady","init","updateNodeInternals","error","connect","connectStart","connectEnd","clickConnectStart","clickConnectEnd","moveStart","move","moveEnd","selectionDragStart","selectionDrag","selectionDragStop","selectionContextMenu","selectionStart","selectionEnd","viewportChangeStart","viewportChange","viewportChangeEnd","paneScroll","paneClick","paneContextMenu","paneMouseEnter","paneMouseMove","paneMouseLeave","edgeUpdate","edgeContextMenu","edgeMouseEnter","edgeMouseMove","edgeMouseLeave","edgeDoubleClick","edgeClick","edgeUpdateStart","edgeUpdateEnd","nodeContextMenu","nodeMouseEnter","nodeMouseMove","nodeMouseLeave","nodeDoubleClick","nodeClick","nodeDragStart","nodeDrag","nodeDragStop","miniMapNodeClick","miniMapNodeDoubleClick","miniMapNodeMouseEnter","miniMapNodeMouseMove","miniMapNodeMouseLeave","update:modelValue","update:nodes","update:edges"],setup(t,{expose:e,emit:n}){const i=t,r=Uv(),o=Kc(i,"modelValue",n),s=Kc(i,"nodes",n),a=Kc(i,"edges",n),l=Dt(i),u=LP({modelValue:o,nodes:s,edges:a},i,l);return UP(n,l.hooks),D3(),eN(),Rr(Yu,r),Nu(u),e(l),(c,d)=>(ce(),ve("div",{ref:he(l).vueFlowRef,class:"vue-flow"},[tt(A3,null,{default:xn(()=>[tt(Y3),tN,tt(Q3),qi(c.$slots,"zoom-pane")]),_:3}),qi(c.$slots,"default"),tt(N3)],512))}}),rN={name:"Panel",compatConfig:{MODE:3}},oN=Nt({...rN,props:{position:{}},setup(t){const e=t,{userSelectionActive:n}=Dt(),i=Ae(()=>`${e.position}`.split("-"));return(r,o)=>(ce(),ve("div",{class:dt(["vue-flow__panel",i.value]),style:nt({pointerEvents:he(n)?"none":"all"})},[qi(r.$slots,"default")],6))}});var sN={value:()=>{}};function Oh(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new Ul(n)}function Ul(t){this._=t}function aN(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}Ul.prototype=Oh.prototype={constructor:Ul,on:function(t,e){var n=this._,i=aN(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=lN(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=_g(n[r],t.name,e);else if(e==null)for(r in n)n[r]=_g(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Ul(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function lN(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function _g(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=sN,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var Lf="http://www.w3.org/1999/xhtml";const yg={svg:"http://www.w3.org/2000/svg",xhtml:Lf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ju(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),yg.hasOwnProperty(e)?{space:yg[e],local:t}:t}function uN(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===Lf&&e.documentElement.namespaceURI===Lf?e.createElement(t):e.createElementNS(n,t)}}function cN(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function K_(t){var e=Ju(t);return(e.local?cN:uN)(e)}function dN(){}function Bh(t){return t==null?dN:function(){return this.querySelector(t)}}function fN(t){typeof t!="function"&&(t=Bh(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,u,c=0;c<s;++c)(l=o[c])&&(u=t.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new Dn(i,this._parents)}function hN(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function pN(){return[]}function Z_(t){return t==null?pN:function(){return this.querySelectorAll(t)}}function mN(t){return function(){return hN(t.apply(this,arguments))}}function gN(t){typeof t=="function"?t=mN(t):t=Z_(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&(i.push(t.call(l,l.__data__,u,s)),r.push(l));return new Dn(i,r)}function j_(t){return function(){return this.matches(t)}}function J_(t){return function(e){return e.matches(t)}}var vN=Array.prototype.find;function _N(t){return function(){return vN.call(this.children,t)}}function yN(){return this.firstElementChild}function xN(t){return this.select(t==null?yN:_N(typeof t=="function"?t:J_(t)))}var bN=Array.prototype.filter;function SN(){return Array.from(this.children)}function MN(t){return function(){return bN.call(this.children,t)}}function wN(t){return this.selectAll(t==null?SN:MN(typeof t=="function"?t:J_(t)))}function EN(t){typeof t!="function"&&(t=j_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new Dn(i,this._parents)}function Q_(t){return new Array(t.length)}function TN(){return new Dn(this._enter||this._groups.map(Q_),this._parents)}function hu(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}hu.prototype={constructor:hu,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function AN(t){return function(){return t}}function CN(t,e,n,i,r,o){for(var s=0,a,l=e.length,u=o.length;s<u;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new hu(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function RN(t,e,n,i,r,o,s){var a,l,u=new Map,c=e.length,d=o.length,f=new Array(c),h;for(a=0;a<c;++a)(l=e[a])&&(f[a]=h=s.call(l,l.__data__,a,e)+"",u.has(h)?r[a]=l:u.set(h,l));for(a=0;a<d;++a)h=s.call(t,o[a],a,o)+"",(l=u.get(h))?(i[a]=l,l.__data__=o[a],u.delete(h)):n[a]=new hu(t,o[a]);for(a=0;a<c;++a)(l=e[a])&&u.get(f[a])===l&&(r[a]=l)}function IN(t){return t.__data__}function PN(t,e){if(!arguments.length)return Array.from(this,IN);var n=e?RN:CN,i=this._parents,r=this._groups;typeof t!="function"&&(t=AN(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=i[u],d=r[u],f=d.length,h=NN(t.call(c,c&&c.__data__,u,i)),g=h.length,v=a[u]=new Array(g),m=s[u]=new Array(g),p=l[u]=new Array(f);n(c,d,v,m,p,h,e);for(var x=0,M=0,y,P;x<g;++x)if(y=v[x]){for(x>=M&&(M=x+1);!(P=m[M])&&++M<g;);y._next=P||null}}return s=new Dn(s,i),s._enter=a,s._exit=l,s}function NN(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function DN(){return new Dn(this._exit||this._groups.map(Q_),this._parents)}function LN(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function FN(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var u=n[l],c=i[l],d=u.length,f=a[l]=new Array(d),h,g=0;g<d;++g)(h=u[g]||c[g])&&(f[g]=h);for(;l<r;++l)a[l]=n[l];return new Dn(a,this._parents)}function UN(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function ON(t){t||(t=BN);function e(d,f){return d&&f?t(d.__data__,f.__data__):!d-!f}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),u,c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(e)}return new Dn(r,this._parents).order()}function BN(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function kN(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function zN(){return Array.from(this)}function VN(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function $N(){let t=0;for(const e of this)++t;return t}function HN(){return!this.node()}function GN(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function WN(t){return function(){this.removeAttribute(t)}}function XN(t){return function(){this.removeAttributeNS(t.space,t.local)}}function YN(t,e){return function(){this.setAttribute(t,e)}}function qN(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function KN(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function ZN(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function jN(t,e){var n=Ju(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?XN:WN:typeof e=="function"?n.local?ZN:KN:n.local?qN:YN)(n,e))}function ey(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function JN(t){return function(){this.style.removeProperty(t)}}function QN(t,e,n){return function(){this.style.setProperty(t,e,n)}}function eD(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function tD(t,e,n){return arguments.length>1?this.each((e==null?JN:typeof e=="function"?eD:QN)(t,e,n??"")):us(this.node(),t)}function us(t,e){return t.style.getPropertyValue(e)||ey(t).getComputedStyle(t,null).getPropertyValue(e)}function nD(t){return function(){delete this[t]}}function iD(t,e){return function(){this[t]=e}}function rD(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function oD(t,e){return arguments.length>1?this.each((e==null?nD:typeof e=="function"?rD:iD)(t,e)):this.node()[t]}function ty(t){return t.trim().split(/^|\s+/)}function kh(t){return t.classList||new ny(t)}function ny(t){this._node=t,this._names=ty(t.getAttribute("class")||"")}ny.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function iy(t,e){for(var n=kh(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function ry(t,e){for(var n=kh(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function sD(t){return function(){iy(this,t)}}function aD(t){return function(){ry(this,t)}}function lD(t,e){return function(){(e.apply(this,arguments)?iy:ry)(this,t)}}function uD(t,e){var n=ty(t+"");if(arguments.length<2){for(var i=kh(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?lD:e?sD:aD)(n,e))}function cD(){this.textContent=""}function dD(t){return function(){this.textContent=t}}function fD(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function hD(t){return arguments.length?this.each(t==null?cD:(typeof t=="function"?fD:dD)(t)):this.node().textContent}function pD(){this.innerHTML=""}function mD(t){return function(){this.innerHTML=t}}function gD(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function vD(t){return arguments.length?this.each(t==null?pD:(typeof t=="function"?gD:mD)(t)):this.node().innerHTML}function _D(){this.nextSibling&&this.parentNode.appendChild(this)}function yD(){return this.each(_D)}function xD(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function bD(){return this.each(xD)}function SD(t){var e=typeof t=="function"?t:K_(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function MD(){return null}function wD(t,e){var n=typeof t=="function"?t:K_(t),i=e==null?MD:typeof e=="function"?e:Bh(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function ED(){var t=this.parentNode;t&&t.removeChild(this)}function TD(){return this.each(ED)}function AD(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function CD(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function RD(t){return this.select(t?CD:AD)}function ID(t){return arguments.length?this.property("__data__",t):this.node().__data__}function PD(t){return function(e){t.call(this,e,this.__data__)}}function ND(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function DD(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function LD(t,e,n){return function(){var i=this.__on,r,o=PD(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function FD(t,e,n){var i=ND(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(r=0,c=a[l];r<o;++r)if((s=i[r]).type===c.type&&s.name===c.name)return c.value}return}for(a=e?LD:DD,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function oy(t,e,n){var i=ey(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function UD(t,e){return function(){return oy(this,t,e)}}function OD(t,e){return function(){return oy(this,t,e.apply(this,arguments))}}function BD(t,e){return this.each((typeof e=="function"?OD:UD)(t,e))}function*kD(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var sy=[null];function Dn(t,e){this._groups=t,this._parents=e}function Ca(){return new Dn([[document.documentElement]],sy)}function zD(){return this}Dn.prototype=Ca.prototype={constructor:Dn,select:fN,selectAll:gN,selectChild:xN,selectChildren:wN,filter:EN,data:PN,enter:TN,exit:DN,join:LN,merge:FN,selection:zD,order:UN,sort:ON,call:kN,nodes:zN,node:VN,size:$N,empty:HN,each:GN,attr:jN,style:tD,property:oD,classed:uD,text:hD,html:vD,raise:yD,lower:bD,append:SD,insert:wD,remove:TD,clone:RD,datum:ID,on:FD,dispatch:BD,[Symbol.iterator]:kD};function wr(t){return typeof t=="string"?new Dn([[document.querySelector(t)]],[document.documentElement]):new Dn([[t]],sy)}function VD(t){let e;for(;e=t.sourceEvent;)t=e;return t}function _r(t,e){if(t=VD(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[t.clientX-r.left-e.clientLeft,t.clientY-r.top-e.clientTop]}}return[t.pageX,t.pageY]}const Ff={capture:!0,passive:!1};function Uf(t){t.preventDefault(),t.stopImmediatePropagation()}function $D(t){var e=t.document.documentElement,n=wr(t).on("dragstart.drag",Uf,Ff);"onselectstart"in e?n.on("selectstart.drag",Uf,Ff):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function HD(t,e){var n=t.document.documentElement,i=wr(t).on("dragstart.drag",null);e&&(i.on("click.drag",Uf,Ff),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}function zh(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function ay(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function Ra(){}var fa=.7,pu=1/fa,Zo="\\s*([+-]?\\d+)\\s*",ha="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",mi="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",GD=/^#([0-9a-f]{3,8})$/,WD=new RegExp(`^rgb\\(${Zo},${Zo},${Zo}\\)$`),XD=new RegExp(`^rgb\\(${mi},${mi},${mi}\\)$`),YD=new RegExp(`^rgba\\(${Zo},${Zo},${Zo},${ha}\\)$`),qD=new RegExp(`^rgba\\(${mi},${mi},${mi},${ha}\\)$`),KD=new RegExp(`^hsl\\(${ha},${mi},${mi}\\)$`),ZD=new RegExp(`^hsla\\(${ha},${mi},${mi},${ha}\\)$`),xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};zh(Ra,pa,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:bg,formatHex:bg,formatHex8:jD,formatHsl:JD,formatRgb:Sg,toString:Sg});function bg(){return this.rgb().formatHex()}function jD(){return this.rgb().formatHex8()}function JD(){return ly(this).formatHsl()}function Sg(){return this.rgb().formatRgb()}function pa(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=GD.exec(t))?(n=e[1].length,e=parseInt(e[1],16),n===6?Mg(e):n===3?new Mn(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):n===8?pl(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):n===4?pl(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=WD.exec(t))?new Mn(e[1],e[2],e[3],1):(e=XD.exec(t))?new Mn(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=YD.exec(t))?pl(e[1],e[2],e[3],e[4]):(e=qD.exec(t))?pl(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=KD.exec(t))?Tg(e[1],e[2]/100,e[3]/100,1):(e=ZD.exec(t))?Tg(e[1],e[2]/100,e[3]/100,e[4]):xg.hasOwnProperty(t)?Mg(xg[t]):t==="transparent"?new Mn(NaN,NaN,NaN,0):null}function Mg(t){return new Mn(t>>16&255,t>>8&255,t&255,1)}function pl(t,e,n,i){return i<=0&&(t=e=n=NaN),new Mn(t,e,n,i)}function QD(t){return t instanceof Ra||(t=pa(t)),t?(t=t.rgb(),new Mn(t.r,t.g,t.b,t.opacity)):new Mn}function Of(t,e,n,i){return arguments.length===1?QD(t):new Mn(t,e,n,i??1)}function Mn(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}zh(Mn,Of,ay(Ra,{brighter(t){return t=t==null?pu:Math.pow(pu,t),new Mn(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?fa:Math.pow(fa,t),new Mn(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new Mn(lo(this.r),lo(this.g),lo(this.b),mu(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:wg,formatHex:wg,formatHex8:eL,formatRgb:Eg,toString:Eg}));function wg(){return`#${to(this.r)}${to(this.g)}${to(this.b)}`}function eL(){return`#${to(this.r)}${to(this.g)}${to(this.b)}${to((isNaN(this.opacity)?1:this.opacity)*255)}`}function Eg(){const t=mu(this.opacity);return`${t===1?"rgb(":"rgba("}${lo(this.r)}, ${lo(this.g)}, ${lo(this.b)}${t===1?")":`, ${t})`}`}function mu(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function lo(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function to(t){return t=lo(t),(t<16?"0":"")+t.toString(16)}function Tg(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Xn(t,e,n,i)}function ly(t){if(t instanceof Xn)return new Xn(t.h,t.s,t.l,t.opacity);if(t instanceof Ra||(t=pa(t)),!t)return new Xn;if(t instanceof Xn)return t;t=t.rgb();var e=t.r/255,n=t.g/255,i=t.b/255,r=Math.min(e,n,i),o=Math.max(e,n,i),s=NaN,a=o-r,l=(o+r)/2;return a?(e===o?s=(n-i)/a+(n<i)*6:n===o?s=(i-e)/a+2:s=(e-n)/a+4,a/=l<.5?o+r:2-o-r,s*=60):a=l>0&&l<1?0:s,new Xn(s,a,l,t.opacity)}function tL(t,e,n,i){return arguments.length===1?ly(t):new Xn(t,e,n,i??1)}function Xn(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}zh(Xn,tL,ay(Ra,{brighter(t){return t=t==null?pu:Math.pow(pu,t),new Xn(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?fa:Math.pow(fa,t),new Xn(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,r=2*n-i;return new Mn(sd(t>=240?t-240:t+120,r,i),sd(t,r,i),sd(t<120?t+240:t-120,r,i),this.opacity)},clamp(){return new Xn(Ag(this.h),ml(this.s),ml(this.l),mu(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=mu(this.opacity);return`${t===1?"hsl(":"hsla("}${Ag(this.h)}, ${ml(this.s)*100}%, ${ml(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Ag(t){return t=(t||0)%360,t<0?t+360:t}function ml(t){return Math.max(0,Math.min(1,t||0))}function sd(t,e,n){return(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)*255}const uy=t=>()=>t;function nL(t,e){return function(n){return t+n*e}}function iL(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}function rL(t){return(t=+t)==1?cy:function(e,n){return n-e?iL(e,n,t):uy(isNaN(e)?n:e)}}function cy(t,e){var n=e-t;return n?nL(t,n):uy(isNaN(t)?e:t)}const Cg=(function t(e){var n=rL(e);function i(r,o){var s=n((r=Of(r)).r,(o=Of(o)).r),a=n(r.g,o.g),l=n(r.b,o.b),u=cy(r.opacity,o.opacity);return function(c){return r.r=s(c),r.g=a(c),r.b=l(c),r.opacity=u(c),r+""}}return i.gamma=t,i})(1);function Sr(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var Bf=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ad=new RegExp(Bf.source,"g");function oL(t){return function(){return t}}function sL(t){return function(e){return t(e)+""}}function aL(t,e){var n=Bf.lastIndex=ad.lastIndex=0,i,r,o,s=-1,a=[],l=[];for(t=t+"",e=e+"";(i=Bf.exec(t))&&(r=ad.exec(e));)(o=r.index)>n&&(o=e.slice(n,o),a[s]?a[s]+=o:a[++s]=o),(i=i[0])===(r=r[0])?a[s]?a[s]+=r:a[++s]=r:(a[++s]=null,l.push({i:s,x:Sr(i,r)})),n=ad.lastIndex;return n<e.length&&(o=e.slice(n),a[s]?a[s]+=o:a[++s]=o),a.length<2?l[0]?sL(l[0].x):oL(e):(e=l.length,function(u){for(var c=0,d;c<e;++c)a[(d=l[c]).i]=d.x(u);return a.join("")})}var Rg=180/Math.PI,kf={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function dy(t,e,n,i,r,o){var s,a,l;return(s=Math.sqrt(t*t+e*e))&&(t/=s,e/=s),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,s=-s),{translateX:r,translateY:o,rotate:Math.atan2(e,t)*Rg,skewX:Math.atan(l)*Rg,scaleX:s,scaleY:a}}var gl;function lL(t){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?kf:dy(e.a,e.b,e.c,e.d,e.e,e.f)}function uL(t){return t==null||(gl||(gl=document.createElementNS("http://www.w3.org/2000/svg","g")),gl.setAttribute("transform",t),!(t=gl.transform.baseVal.consolidate()))?kf:(t=t.matrix,dy(t.a,t.b,t.c,t.d,t.e,t.f))}function fy(t,e,n,i){function r(u){return u.length?u.pop()+" ":""}function o(u,c,d,f,h,g){if(u!==d||c!==f){var v=h.push("translate(",null,e,null,n);g.push({i:v-4,x:Sr(u,d)},{i:v-2,x:Sr(c,f)})}else(d||f)&&h.push("translate("+d+e+f+n)}function s(u,c,d,f){u!==c?(u-c>180?c+=360:c-u>180&&(u+=360),f.push({i:d.push(r(d)+"rotate(",null,i)-2,x:Sr(u,c)})):c&&d.push(r(d)+"rotate("+c+i)}function a(u,c,d,f){u!==c?f.push({i:d.push(r(d)+"skewX(",null,i)-2,x:Sr(u,c)}):c&&d.push(r(d)+"skewX("+c+i)}function l(u,c,d,f,h,g){if(u!==d||c!==f){var v=h.push(r(h)+"scale(",null,",",null,")");g.push({i:v-4,x:Sr(u,d)},{i:v-2,x:Sr(c,f)})}else(d!==1||f!==1)&&h.push(r(h)+"scale("+d+","+f+")")}return function(u,c){var d=[],f=[];return u=t(u),c=t(c),o(u.translateX,u.translateY,c.translateX,c.translateY,d,f),s(u.rotate,c.rotate,d,f),a(u.skewX,c.skewX,d,f),l(u.scaleX,u.scaleY,c.scaleX,c.scaleY,d,f),u=c=null,function(h){for(var g=-1,v=f.length,m;++g<v;)d[(m=f[g]).i]=m.x(h);return d.join("")}}}var cL=fy(lL,"px, ","px)","deg)"),dL=fy(uL,", ",")",")"),fL=1e-12;function Ig(t){return((t=Math.exp(t))+1/t)/2}function hL(t){return((t=Math.exp(t))-1/t)/2}function pL(t){return((t=Math.exp(2*t))-1)/(t+1)}const mL=(function t(e,n,i){function r(o,s){var a=o[0],l=o[1],u=o[2],c=s[0],d=s[1],f=s[2],h=c-a,g=d-l,v=h*h+g*g,m,p;if(v<fL)p=Math.log(f/u)/e,m=function(B){return[a+B*h,l+B*g,u*Math.exp(e*B*p)]};else{var x=Math.sqrt(v),M=(f*f-u*u+i*v)/(2*u*n*x),y=(f*f-u*u-i*v)/(2*f*n*x),P=Math.log(Math.sqrt(M*M+1)-M),L=Math.log(Math.sqrt(y*y+1)-y);p=(L-P)/e,m=function(B){var _=B*p,S=Ig(P),R=u/(n*x)*(S*pL(e*_+P)-hL(P));return[a+R*h,l+R*g,u*S/Ig(e*_+P)]}}return m.duration=p*1e3*e/Math.SQRT2,m}return r.rho=function(o){var s=Math.max(.001,+o),a=s*s,l=a*a;return t(s,a,l)},r})(Math.SQRT2,2,4);var cs=0,Ls=0,Ts=0,hy=1e3,gu,Fs,vu=0,ho=0,Qu=0,ma=typeof performance=="object"&&performance.now?performance:Date,py=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Vh(){return ho||(py(gL),ho=ma.now()+Qu)}function gL(){ho=0}function _u(){this._call=this._time=this._next=null}_u.prototype=my.prototype={constructor:_u,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?Vh():+n)+(e==null?0:+e),!this._next&&Fs!==this&&(Fs?Fs._next=this:gu=this,Fs=this),this._call=t,this._time=n,zf()},stop:function(){this._call&&(this._call=null,this._time=1/0,zf())}};function my(t,e,n){var i=new _u;return i.restart(t,e,n),i}function vL(){Vh(),++cs;for(var t=gu,e;t;)(e=ho-t._time)>=0&&t._call.call(void 0,e),t=t._next;--cs}function Pg(){ho=(vu=ma.now())+Qu,cs=Ls=0;try{vL()}finally{cs=0,yL(),ho=0}}function _L(){var t=ma.now(),e=t-vu;e>hy&&(Qu-=e,vu=t)}function yL(){for(var t,e=gu,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:gu=n);Fs=t,zf(i)}function zf(t){if(!cs){Ls&&(Ls=clearTimeout(Ls));var e=t-ho;e>24?(t<1/0&&(Ls=setTimeout(Pg,t-ma.now()-Qu)),Ts&&(Ts=clearInterval(Ts))):(Ts||(vu=ma.now(),Ts=setInterval(_L,hy)),cs=1,py(Pg))}}function Ng(t,e,n){var i=new _u;return e=e==null?0:+e,i.restart(r=>{i.stop(),t(r+e)},e,n),i}var xL=Oh("start","end","cancel","interrupt"),bL=[],gy=0,Dg=1,Vf=2,Ol=3,Lg=4,$f=5,Bl=6;function ec(t,e,n,i,r,o){var s=t.__transition;if(!s)t.__transition={};else if(n in s)return;SL(t,n,{name:e,index:i,group:r,on:xL,tween:bL,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:gy})}function $h(t,e){var n=Jn(t,e);if(n.state>gy)throw new Error("too late; already scheduled");return n}function xi(t,e){var n=Jn(t,e);if(n.state>Ol)throw new Error("too late; already running");return n}function Jn(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function SL(t,e,n){var i=t.__transition,r;i[e]=n,n.timer=my(o,0,n.time);function o(u){n.state=Dg,n.timer.restart(s,n.delay,n.time),n.delay<=u&&s(u-n.delay)}function s(u){var c,d,f,h;if(n.state!==Dg)return l();for(c in i)if(h=i[c],h.name===n.name){if(h.state===Ol)return Ng(s);h.state===Lg?(h.state=Bl,h.timer.stop(),h.on.call("interrupt",t,t.__data__,h.index,h.group),delete i[c]):+c<e&&(h.state=Bl,h.timer.stop(),h.on.call("cancel",t,t.__data__,h.index,h.group),delete i[c])}if(Ng(function(){n.state===Ol&&(n.state=Lg,n.timer.restart(a,n.delay,n.time),a(u))}),n.state=Vf,n.on.call("start",t,t.__data__,n.index,n.group),n.state===Vf){for(n.state=Ol,r=new Array(f=n.tween.length),c=0,d=-1;c<f;++c)(h=n.tween[c].value.call(t,t.__data__,n.index,n.group))&&(r[++d]=h);r.length=d+1}}function a(u){for(var c=u<n.duration?n.ease.call(null,u/n.duration):(n.timer.restart(l),n.state=$f,1),d=-1,f=r.length;++d<f;)r[d].call(t,c);n.state===$f&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){n.state=Bl,n.timer.stop(),delete i[e];for(var u in i)return;delete t.__transition}}function kl(t,e){var n=t.__transition,i,r,o=!0,s;if(n){e=e==null?null:e+"";for(s in n){if((i=n[s]).name!==e){o=!1;continue}r=i.state>Vf&&i.state<$f,i.state=Bl,i.timer.stop(),i.on.call(r?"interrupt":"cancel",t,t.__data__,i.index,i.group),delete n[s]}o&&delete t.__transition}}function ML(t){return this.each(function(){kl(this,t)})}function wL(t,e){var n,i;return function(){var r=xi(this,t),o=r.tween;if(o!==n){i=n=o;for(var s=0,a=i.length;s<a;++s)if(i[s].name===e){i=i.slice(),i.splice(s,1);break}}r.tween=i}}function EL(t,e,n){var i,r;if(typeof n!="function")throw new Error;return function(){var o=xi(this,t),s=o.tween;if(s!==i){r=(i=s).slice();for(var a={name:e,value:n},l=0,u=r.length;l<u;++l)if(r[l].name===e){r[l]=a;break}l===u&&r.push(a)}o.tween=r}}function TL(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i=Jn(this.node(),n).tween,r=0,o=i.length,s;r<o;++r)if((s=i[r]).name===t)return s.value;return null}return this.each((e==null?wL:EL)(n,t,e))}function Hh(t,e,n){var i=t._id;return t.each(function(){var r=xi(this,i);(r.value||(r.value={}))[e]=n.apply(this,arguments)}),function(r){return Jn(r,i).value[e]}}function vy(t,e){var n;return(typeof e=="number"?Sr:e instanceof pa?Cg:(n=pa(e))?(e=n,Cg):aL)(t,e)}function AL(t){return function(){this.removeAttribute(t)}}function CL(t){return function(){this.removeAttributeNS(t.space,t.local)}}function RL(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttribute(t);return s===r?null:s===i?o:o=e(i=s,n)}}function IL(t,e,n){var i,r=n+"",o;return function(){var s=this.getAttributeNS(t.space,t.local);return s===r?null:s===i?o:o=e(i=s,n)}}function PL(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttribute(t):(s=this.getAttribute(t),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function NL(t,e,n){var i,r,o;return function(){var s,a=n(this),l;return a==null?void this.removeAttributeNS(t.space,t.local):(s=this.getAttributeNS(t.space,t.local),l=a+"",s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a)))}}function DL(t,e){var n=Ju(t),i=n==="transform"?dL:vy;return this.attrTween(t,typeof e=="function"?(n.local?NL:PL)(n,i,Hh(this,"attr."+t,e)):e==null?(n.local?CL:AL)(n):(n.local?IL:RL)(n,i,e))}function LL(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}function FL(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}function UL(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&FL(t,o)),n}return r._value=e,r}function OL(t,e){var n,i;function r(){var o=e.apply(this,arguments);return o!==i&&(n=(i=o)&&LL(t,o)),n}return r._value=e,r}function BL(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(e==null)return this.tween(n,null);if(typeof e!="function")throw new Error;var i=Ju(t);return this.tween(n,(i.local?UL:OL)(i,e))}function kL(t,e){return function(){$h(this,t).delay=+e.apply(this,arguments)}}function zL(t,e){return e=+e,function(){$h(this,t).delay=e}}function VL(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?kL:zL)(e,t)):Jn(this.node(),e).delay}function $L(t,e){return function(){xi(this,t).duration=+e.apply(this,arguments)}}function HL(t,e){return e=+e,function(){xi(this,t).duration=e}}function GL(t){var e=this._id;return arguments.length?this.each((typeof t=="function"?$L:HL)(e,t)):Jn(this.node(),e).duration}function WL(t,e){if(typeof e!="function")throw new Error;return function(){xi(this,t).ease=e}}function XL(t){var e=this._id;return arguments.length?this.each(WL(e,t)):Jn(this.node(),e).ease}function YL(t,e){return function(){var n=e.apply(this,arguments);if(typeof n!="function")throw new Error;xi(this,t).ease=n}}function qL(t){if(typeof t!="function")throw new Error;return this.each(YL(this._id,t))}function KL(t){typeof t!="function"&&(t=j_(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new tr(i,this._parents,this._name,this._id)}function ZL(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,r=n.length,o=Math.min(i,r),s=new Array(i),a=0;a<o;++a)for(var l=e[a],u=n[a],c=l.length,d=s[a]=new Array(c),f,h=0;h<c;++h)(f=l[h]||u[h])&&(d[h]=f);for(;a<i;++a)s[a]=e[a];return new tr(s,this._parents,this._name,this._id)}function jL(t){return(t+"").trim().split(/^|\s+/).every(function(e){var n=e.indexOf(".");return n>=0&&(e=e.slice(0,n)),!e||e==="start"})}function JL(t,e,n){var i,r,o=jL(e)?$h:xi;return function(){var s=o(this,t),a=s.on;a!==i&&(r=(i=a).copy()).on(e,n),s.on=r}}function QL(t,e){var n=this._id;return arguments.length<2?Jn(this.node(),n).on.on(t):this.each(JL(n,t,e))}function eF(t){return function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}}function tF(){return this.on("end.remove",eF(this._id))}function nF(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Bh(t));for(var i=this._groups,r=i.length,o=new Array(r),s=0;s<r;++s)for(var a=i[s],l=a.length,u=o[s]=new Array(l),c,d,f=0;f<l;++f)(c=a[f])&&(d=t.call(c,c.__data__,f,a))&&("__data__"in c&&(d.__data__=c.__data__),u[f]=d,ec(u[f],e,n,f,u,Jn(c,n)));return new tr(o,this._parents,e,n)}function iF(t){var e=this._name,n=this._id;typeof t!="function"&&(t=Z_(t));for(var i=this._groups,r=i.length,o=[],s=[],a=0;a<r;++a)for(var l=i[a],u=l.length,c,d=0;d<u;++d)if(c=l[d]){for(var f=t.call(c,c.__data__,d,l),h,g=Jn(c,n),v=0,m=f.length;v<m;++v)(h=f[v])&&ec(h,e,n,v,f,g);o.push(f),s.push(c)}return new tr(o,s,e,n)}var rF=Ca.prototype.constructor;function oF(){return new rF(this._groups,this._parents)}function sF(t,e){var n,i,r;return function(){var o=us(this,t),s=(this.style.removeProperty(t),us(this,t));return o===s?null:o===n&&s===i?r:r=e(n=o,i=s)}}function _y(t){return function(){this.style.removeProperty(t)}}function aF(t,e,n){var i,r=n+"",o;return function(){var s=us(this,t);return s===r?null:s===i?o:o=e(i=s,n)}}function lF(t,e,n){var i,r,o;return function(){var s=us(this,t),a=n(this),l=a+"";return a==null&&(l=a=(this.style.removeProperty(t),us(this,t))),s===l?null:s===i&&l===r?o:(r=l,o=e(i=s,a))}}function uF(t,e){var n,i,r,o="style."+e,s="end."+o,a;return function(){var l=xi(this,t),u=l.on,c=l.value[o]==null?a||(a=_y(e)):void 0;(u!==n||r!==c)&&(i=(n=u).copy()).on(s,r=c),l.on=i}}function cF(t,e,n){var i=(t+="")=="transform"?cL:vy;return e==null?this.styleTween(t,sF(t,i)).on("end.style."+t,_y(t)):typeof e=="function"?this.styleTween(t,lF(t,i,Hh(this,"style."+t,e))).each(uF(this._id,t)):this.styleTween(t,aF(t,i,e),n).on("end.style."+t,null)}function dF(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}function fF(t,e,n){var i,r;function o(){var s=e.apply(this,arguments);return s!==r&&(i=(r=s)&&dF(t,s,n)),i}return o._value=e,o}function hF(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,fF(t,e,n??""))}function pF(t){return function(){this.textContent=t}}function mF(t){return function(){var e=t(this);this.textContent=e??""}}function gF(t){return this.tween("text",typeof t=="function"?mF(Hh(this,"text",t)):pF(t==null?"":t+""))}function vF(t){return function(e){this.textContent=t.call(this,e)}}function _F(t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&vF(r)),e}return i._value=t,i}function yF(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;return this.tween(e,_F(t))}function xF(){for(var t=this._name,e=this._id,n=yy(),i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)if(l=s[u]){var c=Jn(l,e);ec(l,t,n,u,s,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new tr(i,this._parents,t,n)}function bF(){var t,e,n=this,i=n._id,r=n.size();return new Promise(function(o,s){var a={value:s},l={value:function(){--r===0&&o()}};n.each(function(){var u=xi(this,i),c=u.on;c!==t&&(e=(t=c).copy(),e._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),u.on=e}),r===0&&o()})}var SF=0;function tr(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function yy(){return++SF}var Ii=Ca.prototype;tr.prototype={constructor:tr,select:nF,selectAll:iF,selectChild:Ii.selectChild,selectChildren:Ii.selectChildren,filter:KL,merge:ZL,selection:oF,transition:xF,call:Ii.call,nodes:Ii.nodes,node:Ii.node,size:Ii.size,empty:Ii.empty,each:Ii.each,on:QL,attr:DL,attrTween:BL,style:cF,styleTween:hF,text:gF,textTween:yF,remove:tF,tween:TL,delay:VL,duration:GL,ease:XL,easeVarying:qL,end:bF,[Symbol.iterator]:Ii[Symbol.iterator]};function MF(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var wF={time:null,delay:0,duration:250,ease:MF};function EF(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}function TF(t){var e,n;t instanceof tr?(e=t._id,t=t._name):(e=yy(),(n=wF).time=Vh(),t=t==null?null:t+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var s=i[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&ec(l,t,e,u,s,n||EF(l,e));return new tr(i,this._parents,t,e)}Ca.prototype.interrupt=ML;Ca.prototype.transition=TF;const vl=t=>()=>t;function AF(t,{sourceEvent:e,target:n,transform:i,dispatch:r}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},target:{value:n,enumerable:!0,configurable:!0},transform:{value:i,enumerable:!0,configurable:!0},_:{value:r}})}function ki(t,e,n){this.k=t,this.x=e,this.y=n}ki.prototype={constructor:ki,scale:function(t){return t===1?this:new ki(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new ki(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var Gh=new ki(1,0,0);ki.prototype;function ld(t){t.stopImmediatePropagation()}function As(t){t.preventDefault(),t.stopImmediatePropagation()}function CF(t){return(!t.ctrlKey||t.type==="wheel")&&!t.button}function RF(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t,t.hasAttribute("viewBox")?(t=t.viewBox.baseVal,[[t.x,t.y],[t.x+t.width,t.y+t.height]]):[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]):[[0,0],[t.clientWidth,t.clientHeight]]}function Fg(){return this.__zoom||Gh}function IF(t){return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function PF(){return navigator.maxTouchPoints||"ontouchstart"in this}function NF(t,e,n){var i=t.invertX(e[0][0])-n[0][0],r=t.invertX(e[1][0])-n[1][0],o=t.invertY(e[0][1])-n[0][1],s=t.invertY(e[1][1])-n[1][1];return t.translate(r>i?(i+r)/2:Math.min(0,i)||Math.max(0,r),s>o?(o+s)/2:Math.min(0,o)||Math.max(0,s))}function DF(){var t=CF,e=RF,n=NF,i=IF,r=PF,o=[0,1/0],s=[[-1/0,-1/0],[1/0,1/0]],a=250,l=mL,u=Oh("start","zoom","end"),c,d,f,h=500,g=150,v=0,m=10;function p(w){w.property("__zoom",Fg).on("wheel.zoom",_,{passive:!1}).on("mousedown.zoom",S).on("dblclick.zoom",R).filter(r).on("touchstart.zoom",A).on("touchmove.zoom",C).on("touchend.zoom touchcancel.zoom",H).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}p.transform=function(w,O,T,N){var z=w.selection?w.selection():w;z.property("__zoom",Fg),w!==z?P(w,O,T,N):z.interrupt().each(function(){L(this,arguments).event(N).start().zoom(null,typeof O=="function"?O.apply(this,arguments):O).end()})},p.scaleBy=function(w,O,T,N){p.scaleTo(w,function(){var z=this.__zoom.k,X=typeof O=="function"?O.apply(this,arguments):O;return z*X},T,N)},p.scaleTo=function(w,O,T,N){p.transform(w,function(){var z=e.apply(this,arguments),X=this.__zoom,Z=T==null?y(z):typeof T=="function"?T.apply(this,arguments):T,ne=X.invert(Z),Q=typeof O=="function"?O.apply(this,arguments):O;return n(M(x(X,Q),Z,ne),z,s)},T,N)},p.translateBy=function(w,O,T,N){p.transform(w,function(){return n(this.__zoom.translate(typeof O=="function"?O.apply(this,arguments):O,typeof T=="function"?T.apply(this,arguments):T),e.apply(this,arguments),s)},null,N)},p.translateTo=function(w,O,T,N,z){p.transform(w,function(){var X=e.apply(this,arguments),Z=this.__zoom,ne=N==null?y(X):typeof N=="function"?N.apply(this,arguments):N;return n(Gh.translate(ne[0],ne[1]).scale(Z.k).translate(typeof O=="function"?-O.apply(this,arguments):-O,typeof T=="function"?-T.apply(this,arguments):-T),X,s)},N,z)};function x(w,O){return O=Math.max(o[0],Math.min(o[1],O)),O===w.k?w:new ki(O,w.x,w.y)}function M(w,O,T){var N=O[0]-T[0]*w.k,z=O[1]-T[1]*w.k;return N===w.x&&z===w.y?w:new ki(w.k,N,z)}function y(w){return[(+w[0][0]+ +w[1][0])/2,(+w[0][1]+ +w[1][1])/2]}function P(w,O,T,N){w.on("start.zoom",function(){L(this,arguments).event(N).start()}).on("interrupt.zoom end.zoom",function(){L(this,arguments).event(N).end()}).tween("zoom",function(){var z=this,X=arguments,Z=L(z,X).event(N),ne=e.apply(z,X),Q=T==null?y(ne):typeof T=="function"?T.apply(z,X):T,de=Math.max(ne[1][0]-ne[0][0],ne[1][1]-ne[0][1]),we=z.__zoom,te=typeof O=="function"?O.apply(z,X):O,D=l(we.invert(Q).concat(de/we.k),te.invert(Q).concat(de/te.k));return function(K){if(K===1)K=te;else{var se=D(K),be=de/se[2];K=new ki(be,Q[0]-se[0]*be,Q[1]-se[1]*be)}Z.zoom(null,K)}})}function L(w,O,T){return!T&&w.__zooming||new B(w,O)}function B(w,O){this.that=w,this.args=O,this.active=0,this.sourceEvent=null,this.extent=e.apply(w,O),this.taps=0}B.prototype={event:function(w){return w&&(this.sourceEvent=w),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(w,O){return this.mouse&&w!=="mouse"&&(this.mouse[1]=O.invert(this.mouse[0])),this.touch0&&w!=="touch"&&(this.touch0[1]=O.invert(this.touch0[0])),this.touch1&&w!=="touch"&&(this.touch1[1]=O.invert(this.touch1[0])),this.that.__zoom=O,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(w){var O=wr(this.that).datum();u.call(w,this.that,new AF(w,{sourceEvent:this.sourceEvent,target:p,transform:this.that.__zoom,dispatch:u}),O)}};function _(w,...O){if(!t.apply(this,arguments))return;var T=L(this,O).event(w),N=this.__zoom,z=Math.max(o[0],Math.min(o[1],N.k*Math.pow(2,i.apply(this,arguments)))),X=_r(w);if(T.wheel)(T.mouse[0][0]!==X[0]||T.mouse[0][1]!==X[1])&&(T.mouse[1]=N.invert(T.mouse[0]=X)),clearTimeout(T.wheel);else{if(N.k===z)return;T.mouse=[X,N.invert(X)],kl(this),T.start()}As(w),T.wheel=setTimeout(Z,g),T.zoom("mouse",n(M(x(N,z),T.mouse[0],T.mouse[1]),T.extent,s));function Z(){T.wheel=null,T.end()}}function S(w,...O){if(f||!t.apply(this,arguments))return;var T=w.currentTarget,N=L(this,O,!0).event(w),z=wr(w.view).on("mousemove.zoom",Q,!0).on("mouseup.zoom",de,!0),X=_r(w,T),Z=w.clientX,ne=w.clientY;$D(w.view),ld(w),N.mouse=[X,this.__zoom.invert(X)],kl(this),N.start();function Q(we){if(As(we),!N.moved){var te=we.clientX-Z,D=we.clientY-ne;N.moved=te*te+D*D>v}N.event(we).zoom("mouse",n(M(N.that.__zoom,N.mouse[0]=_r(we,T),N.mouse[1]),N.extent,s))}function de(we){z.on("mousemove.zoom mouseup.zoom",null),HD(we.view,N.moved),As(we),N.event(we).end()}}function R(w,...O){if(t.apply(this,arguments)){var T=this.__zoom,N=_r(w.changedTouches?w.changedTouches[0]:w,this),z=T.invert(N),X=T.k*(w.shiftKey?.5:2),Z=n(M(x(T,X),N,z),e.apply(this,O),s);As(w),a>0?wr(this).transition().duration(a).call(P,Z,N,w):wr(this).call(p.transform,Z,N,w)}}function A(w,...O){if(t.apply(this,arguments)){var T=w.touches,N=T.length,z=L(this,O,w.changedTouches.length===N).event(w),X,Z,ne,Q;for(ld(w),Z=0;Z<N;++Z)ne=T[Z],Q=_r(ne,this),Q=[Q,this.__zoom.invert(Q),ne.identifier],z.touch0?!z.touch1&&z.touch0[2]!==Q[2]&&(z.touch1=Q,z.taps=0):(z.touch0=Q,X=!0,z.taps=1+!!c);c&&(c=clearTimeout(c)),X&&(z.taps<2&&(d=Q[0],c=setTimeout(function(){c=null},h)),kl(this),z.start())}}function C(w,...O){if(this.__zooming){var T=L(this,O).event(w),N=w.changedTouches,z=N.length,X,Z,ne,Q;for(As(w),X=0;X<z;++X)Z=N[X],ne=_r(Z,this),T.touch0&&T.touch0[2]===Z.identifier?T.touch0[0]=ne:T.touch1&&T.touch1[2]===Z.identifier&&(T.touch1[0]=ne);if(Z=T.that.__zoom,T.touch1){var de=T.touch0[0],we=T.touch0[1],te=T.touch1[0],D=T.touch1[1],K=(K=te[0]-de[0])*K+(K=te[1]-de[1])*K,se=(se=D[0]-we[0])*se+(se=D[1]-we[1])*se;Z=x(Z,Math.sqrt(K/se)),ne=[(de[0]+te[0])/2,(de[1]+te[1])/2],Q=[(we[0]+D[0])/2,(we[1]+D[1])/2]}else if(T.touch0)ne=T.touch0[0],Q=T.touch0[1];else return;T.zoom("touch",n(M(Z,ne,Q),T.extent,s))}}function H(w,...O){if(this.__zooming){var T=L(this,O).event(w),N=w.changedTouches,z=N.length,X,Z;for(ld(w),f&&clearTimeout(f),f=setTimeout(function(){f=null},h),X=0;X<z;++X)Z=N[X],T.touch0&&T.touch0[2]===Z.identifier?delete T.touch0:T.touch1&&T.touch1[2]===Z.identifier&&delete T.touch1;if(T.touch1&&!T.touch0&&(T.touch0=T.touch1,delete T.touch1),T.touch0)T.touch0[1]=this.__zoom.invert(T.touch0[0]);else if(T.end(),T.taps===2&&(Z=_r(Z,this),Math.hypot(d[0]-Z[0],d[1]-Z[1])<m)){var ne=wr(this).on("dblclick.zoom");ne&&ne.apply(this,arguments)}}}return p.wheelDelta=function(w){return arguments.length?(i=typeof w=="function"?w:vl(+w),p):i},p.filter=function(w){return arguments.length?(t=typeof w=="function"?w:vl(!!w),p):t},p.touchable=function(w){return arguments.length?(r=typeof w=="function"?w:vl(!!w),p):r},p.extent=function(w){return arguments.length?(e=typeof w=="function"?w:vl([[+w[0][0],+w[0][1]],[+w[1][0],+w[1][1]]]),p):e},p.scaleExtent=function(w){return arguments.length?(o[0]=+w[0],o[1]=+w[1],p):[o[0],o[1]]},p.translateExtent=function(w){return arguments.length?(s[0][0]=+w[0][0],s[1][0]=+w[1][0],s[0][1]=+w[0][1],s[1][1]=+w[1][1],p):[[s[0][0],s[0][1]],[s[1][0],s[1][1]]]},p.constrain=function(w){return arguments.length?(n=w,p):n},p.duration=function(w){return arguments.length?(a=+w,p):a},p.interpolate=function(w){return arguments.length?(l=w,p):l},p.on=function(){var w=u.on.apply(u,arguments);return w===u?p:w},p.clickDistance=function(w){return arguments.length?(v=(w=+w)*w,p):Math.sqrt(v)},p.tapDistance=function(w){return arguments.length?(m=+w,p):m},p}const xy=Symbol("MiniMapSlots"),LF=["id","x","y","rx","ry","width","height","fill","stroke","stroke-width","shape-rendering"],FF={name:"MiniMapNode",compatConfig:{MODE:3},inheritAttrs:!1},UF=Nt({...FF,props:{id:{},type:{},selected:{type:Boolean},dragging:{type:Boolean},position:{},dimensions:{},borderRadius:{},color:{},shapeRendering:{},strokeColor:{},strokeWidth:{},hidden:{type:Boolean}},emits:["click","dblclick","mouseenter","mousemove","mouseleave"],setup(t,{emit:e}){const n=t,i=In(xy),r=sh(),o=xt(()=>r.style??{});function s(d){e("click",d)}function a(d){e("dblclick",d)}function l(d){e("mouseenter",d)}function u(d){e("mousemove",d)}function c(d){e("mouseleave",d)}return(d,f)=>!d.hidden&&d.dimensions.width!==0&&d.dimensions.height!==0?(ce(),ve(st,{key:0},[he(i)[`node-${n.type}`]?(ce(),jt(Dv(he(i)[`node-${n.type}`]),Jy(Js({key:0},{...n,...d.$attrs})),null,16)):(ce(),ve("rect",Js({key:1,id:d.id},d.$attrs,{class:["vue-flow__minimap-node",{selected:d.selected,dragging:d.dragging}],x:d.position.x,y:d.position.y,rx:d.borderRadius,ry:d.borderRadius,width:d.dimensions.width,height:d.dimensions.height,fill:d.color||o.value.background||o.value.backgroundColor,stroke:d.strokeColor,"stroke-width":d.strokeWidth,"shape-rendering":d.shapeRendering,onClick:s,onDblclick:a,onMouseenter:l,onMousemove:u,onMouseleave:c}),null,16,LF))],64)):We("",!0)}}),OF=["width","height","viewBox","aria-labelledby"],BF=["id"],kF=["d","fill","stroke","stroke-width"],zF={name:"MiniMap",compatConfig:{MODE:3}},VF=Nt({...zF,props:{nodeColor:{type:[String,Function],default:"#e2e2e2"},nodeStrokeColor:{type:[String,Function],default:"transparent"},nodeClassName:{type:[String,Function]},nodeBorderRadius:{default:5},nodeStrokeWidth:{default:2},maskColor:{default:"rgb(240, 240, 240, 0.6)"},maskStrokeColor:{default:"none"},maskStrokeWidth:{default:1},position:{default:"bottom-right"},pannable:{type:Boolean,default:!1},zoomable:{type:Boolean,default:!1},width:{},height:{},ariaLabel:{default:"Vue Flow mini map"},inversePan:{type:Boolean,default:!1},zoomStep:{default:1},offsetScale:{default:5},maskBorderRadius:{default:0}},emits:["click","nodeClick","nodeDblclick","nodeMouseenter","nodeMousemove","nodeMouseleave"],setup(t,{emit:e}){const n=Uv(),i=sh(),r=200,o=150,{id:s,edges:a,viewport:l,translateExtent:u,dimensions:c,emits:d,d3Selection:f,d3Zoom:h,getNodesInitialized:g}=Dt(),v=Ce();Rr(xy,n);const m=xt(()=>{var z;return t.width??((z=i.style)==null?void 0:z.width)??r}),p=xt(()=>{var z;return t.height??((z=i.style)==null?void 0:z.height)??o}),x=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision",M=Ae(()=>typeof t.nodeColor=="string"?()=>t.nodeColor:t.nodeColor),y=Ae(()=>typeof t.nodeStrokeColor=="string"?()=>t.nodeStrokeColor:t.nodeStrokeColor),P=Ae(()=>typeof t.nodeClassName=="string"?()=>t.nodeClassName:typeof t.nodeClassName=="function"?t.nodeClassName:()=>""),L=Ae(()=>Nh(g.value.filter(z=>!z.hidden))),B=Ae(()=>({x:-l.value.x/l.value.zoom,y:-l.value.y/l.value.zoom,width:c.value.width/l.value.zoom,height:c.value.height/l.value.zoom})),_=Ae(()=>g.value&&g.value.length?iP(L.value,B.value):B.value),S=Ae(()=>{const z=_.value.width/m.value,X=_.value.height/p.value;return Math.max(z,X)}),R=Ae(()=>{const z=S.value*m.value,X=S.value*p.value,Z=t.offsetScale*S.value;return{offset:Z,x:_.value.x-(z-_.value.width)/2-Z,y:_.value.y-(X-_.value.height)/2-Z,width:z+Z*2,height:X+Z*2}}),A=Ae(()=>!R.value.x||!R.value.y?"":`
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
    a${t.maskBorderRadius},${t.maskBorderRadius} 0 0 1 ${t.maskBorderRadius},-${t.maskBorderRadius}z`);Sv(z=>{if(v.value){const X=wr(v.value),Z=de=>{if(de.sourceEvent.type!=="wheel"||!f.value||!h.value)return;const we=de.sourceEvent.ctrlKey&&da()?10:1,te=-de.sourceEvent.deltaY*(de.sourceEvent.deltaMode===1?.05:de.sourceEvent.deltaMode?1:.002)*t.zoomStep,D=l.value.zoom*2**(te*we);h.value.scaleTo(f.value,D)},ne=de=>{if(de.sourceEvent.type!=="mousemove"||!f.value||!h.value)return;const we=S.value*Math.max(1,l.value.zoom)*(t.inversePan?-1:1),te={x:l.value.x-de.sourceEvent.movementX*we,y:l.value.y-de.sourceEvent.movementY*we},D=[[0,0],[c.value.width,c.value.height]],K=Gh.translate(te.x,te.y).scale(l.value.zoom),se=h.value.constrain()(K,D,u.value);h.value.transform(f.value,se)},Q=DF().wheelDelta(de=>If(de)*(t.zoomStep/10)).on("zoom",t.pannable?ne:()=>{}).on("zoom.wheel",t.zoomable?Z:()=>{});X.call(Q),z(()=>{X.on("zoom",null)})}},{flush:"post"});function C(z){const[X,Z]=_r(z);e("click",{event:z,position:{x:X,y:Z}})}function H(z,X){const Z={event:z,node:X,connectedEdges:Zr([X],a.value)};d.miniMapNodeClick(Z),e("nodeClick",Z)}function w(z,X){const Z={event:z,node:X,connectedEdges:Zr([X],a.value)};d.miniMapNodeDoubleClick(Z),e("nodeDblclick",Z)}function O(z,X){const Z={event:z,node:X,connectedEdges:Zr([X],a.value)};d.miniMapNodeMouseEnter(Z),e("nodeMouseenter",Z)}function T(z,X){const Z={event:z,node:X,connectedEdges:Zr([X],a.value)};d.miniMapNodeMouseMove(Z),e("nodeMousemove",Z)}function N(z,X){const Z={event:z,node:X,connectedEdges:Zr([X],a.value)};d.miniMapNodeMouseLeave(Z),e("nodeMouseleave",Z)}return(z,X)=>(ce(),jt(he(oN),{position:z.position,class:dt(["vue-flow__minimap",{pannable:z.pannable,zoomable:z.zoomable}])},{default:xn(()=>[(ce(),ve("svg",{ref_key:"el",ref:v,width:m.value,height:p.value,viewBox:[R.value.x,R.value.y,R.value.width,R.value.height].join(" "),role:"img","aria-labelledby":`vue-flow__minimap-${he(s)}`,onClick:C},[z.ariaLabel?(ce(),ve("title",{key:0,id:`vue-flow__minimap-${he(s)}`},Te(z.ariaLabel),9,BF)):We("",!0),(ce(!0),ve(st,null,Ht(he(g),Z=>(ce(),jt(UF,{id:Z.id,key:Z.id,f:"",position:Z.computedPosition,dimensions:Z.dimensions,selected:Z.selected,dragging:Z.dragging,style:nt(Z.style),class:dt(P.value(Z)),color:M.value(Z),"border-radius":z.nodeBorderRadius,"stroke-color":y.value(Z),"stroke-width":z.nodeStrokeWidth,"shape-rendering":he(x),type:Z.type,hidden:Z.hidden,onClick:ne=>H(ne,Z),onDblclick:ne=>w(ne,Z),onMouseenter:ne=>O(ne,Z),onMousemove:ne=>T(ne,Z),onMouseleave:ne=>N(ne,Z)},null,8,["id","position","dimensions","selected","dragging","style","class","color","border-radius","stroke-color","stroke-width","shape-rendering","type","hidden","onClick","onDblclick","onMouseenter","onMousemove","onMouseleave"]))),128)),j("path",{class:"vue-flow__minimap-mask",d:A.value,fill:z.maskColor,stroke:z.maskStrokeColor,"stroke-width":z.maskStrokeWidth,"fill-rule":"evenodd"},null,8,kF)],8,OF))]),_:1},8,["position","class"]))}});var Hf="http://www.w3.org/1999/xhtml";const Ug={svg:"http://www.w3.org/2000/svg",xhtml:Hf,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function by(t){var e=t+="",n=e.indexOf(":");return n>=0&&(e=t.slice(0,n))!=="xmlns"&&(t=t.slice(n+1)),Ug.hasOwnProperty(e)?{space:Ug[e],local:t}:t}function $F(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===Hf&&e.documentElement.namespaceURI===Hf?e.createElement(t):e.createElementNS(n,t)}}function HF(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Sy(t){var e=by(t);return(e.local?HF:$F)(e)}function GF(){}function My(t){return t==null?GF:function(){return this.querySelector(t)}}function WF(t){typeof t!="function"&&(t=My(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=new Array(s),l,u,c=0;c<s;++c)(l=o[c])&&(u=t.call(l,l.__data__,c,o))&&("__data__"in l&&(u.__data__=l.__data__),a[c]=u);return new On(i,this._parents)}function XF(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function YF(){return[]}function qF(t){return t==null?YF:function(){return this.querySelectorAll(t)}}function KF(t){return function(){return XF(t.apply(this,arguments))}}function ZF(t){typeof t=="function"?t=KF(t):t=qF(t);for(var e=this._groups,n=e.length,i=[],r=[],o=0;o<n;++o)for(var s=e[o],a=s.length,l,u=0;u<a;++u)(l=s[u])&&(i.push(t.call(l,l.__data__,u,s)),r.push(l));return new On(i,r)}function jF(t){return function(){return this.matches(t)}}function wy(t){return function(e){return e.matches(t)}}var JF=Array.prototype.find;function QF(t){return function(){return JF.call(this.children,t)}}function eU(){return this.firstElementChild}function tU(t){return this.select(t==null?eU:QF(typeof t=="function"?t:wy(t)))}var nU=Array.prototype.filter;function iU(){return Array.from(this.children)}function rU(t){return function(){return nU.call(this.children,t)}}function oU(t){return this.selectAll(t==null?iU:rU(typeof t=="function"?t:wy(t)))}function sU(t){typeof t!="function"&&(t=jF(t));for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r)for(var o=e[r],s=o.length,a=i[r]=[],l,u=0;u<s;++u)(l=o[u])&&t.call(l,l.__data__,u,o)&&a.push(l);return new On(i,this._parents)}function Ey(t){return new Array(t.length)}function aU(){return new On(this._enter||this._groups.map(Ey),this._parents)}function yu(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}yu.prototype={constructor:yu,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function lU(t){return function(){return t}}function uU(t,e,n,i,r,o){for(var s=0,a,l=e.length,u=o.length;s<u;++s)(a=e[s])?(a.__data__=o[s],i[s]=a):n[s]=new yu(t,o[s]);for(;s<l;++s)(a=e[s])&&(r[s]=a)}function cU(t,e,n,i,r,o,s){var a,l,u=new Map,c=e.length,d=o.length,f=new Array(c),h;for(a=0;a<c;++a)(l=e[a])&&(f[a]=h=s.call(l,l.__data__,a,e)+"",u.has(h)?r[a]=l:u.set(h,l));for(a=0;a<d;++a)h=s.call(t,o[a],a,o)+"",(l=u.get(h))?(i[a]=l,l.__data__=o[a],u.delete(h)):n[a]=new yu(t,o[a]);for(a=0;a<c;++a)(l=e[a])&&u.get(f[a])===l&&(r[a]=l)}function dU(t){return t.__data__}function fU(t,e){if(!arguments.length)return Array.from(this,dU);var n=e?cU:uU,i=this._parents,r=this._groups;typeof t!="function"&&(t=lU(t));for(var o=r.length,s=new Array(o),a=new Array(o),l=new Array(o),u=0;u<o;++u){var c=i[u],d=r[u],f=d.length,h=hU(t.call(c,c&&c.__data__,u,i)),g=h.length,v=a[u]=new Array(g),m=s[u]=new Array(g),p=l[u]=new Array(f);n(c,d,v,m,p,h,e);for(var x=0,M=0,y,P;x<g;++x)if(y=v[x]){for(x>=M&&(M=x+1);!(P=m[M])&&++M<g;);y._next=P||null}}return s=new On(s,i),s._enter=a,s._exit=l,s}function hU(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function pU(){return new On(this._exit||this._groups.map(Ey),this._parents)}function mU(t,e,n){var i=this.enter(),r=this,o=this.exit();return typeof t=="function"?(i=t(i),i&&(i=i.selection())):i=i.append(t+""),e!=null&&(r=e(r),r&&(r=r.selection())),n==null?o.remove():n(o),i&&r?i.merge(r).order():r}function gU(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,r=n.length,o=i.length,s=Math.min(r,o),a=new Array(r),l=0;l<s;++l)for(var u=n[l],c=i[l],d=u.length,f=a[l]=new Array(d),h,g=0;g<d;++g)(h=u[g]||c[g])&&(f[g]=h);for(;l<r;++l)a[l]=n[l];return new On(a,this._parents)}function vU(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i=t[e],r=i.length-1,o=i[r],s;--r>=0;)(s=i[r])&&(o&&s.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(s,o),o=s);return this}function _U(t){t||(t=yU);function e(d,f){return d&&f?t(d.__data__,f.__data__):!d-!f}for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o){for(var s=n[o],a=s.length,l=r[o]=new Array(a),u,c=0;c<a;++c)(u=s[c])&&(l[c]=u);l.sort(e)}return new On(r,this._parents).order()}function yU(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function xU(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function bU(){return Array.from(this)}function SU(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length;r<o;++r){var s=i[r];if(s)return s}return null}function MU(){let t=0;for(const e of this)++t;return t}function wU(){return!this.node()}function EU(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var r=e[n],o=0,s=r.length,a;o<s;++o)(a=r[o])&&t.call(a,a.__data__,o,r);return this}function TU(t){return function(){this.removeAttribute(t)}}function AU(t){return function(){this.removeAttributeNS(t.space,t.local)}}function CU(t,e){return function(){this.setAttribute(t,e)}}function RU(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function IU(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttribute(t):this.setAttribute(t,n)}}function PU(t,e){return function(){var n=e.apply(this,arguments);n==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function NU(t,e){var n=by(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((e==null?n.local?AU:TU:typeof e=="function"?n.local?PU:IU:n.local?RU:CU)(n,e))}function Ty(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function DU(t){return function(){this.style.removeProperty(t)}}function LU(t,e,n){return function(){this.style.setProperty(t,e,n)}}function FU(t,e,n){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function UU(t,e,n){return arguments.length>1?this.each((e==null?DU:typeof e=="function"?FU:LU)(t,e,n??"")):OU(this.node(),t)}function OU(t,e){return t.style.getPropertyValue(e)||Ty(t).getComputedStyle(t,null).getPropertyValue(e)}function BU(t){return function(){delete this[t]}}function kU(t,e){return function(){this[t]=e}}function zU(t,e){return function(){var n=e.apply(this,arguments);n==null?delete this[t]:this[t]=n}}function VU(t,e){return arguments.length>1?this.each((e==null?BU:typeof e=="function"?zU:kU)(t,e)):this.node()[t]}function Ay(t){return t.trim().split(/^|\s+/)}function Wh(t){return t.classList||new Cy(t)}function Cy(t){this._node=t,this._names=Ay(t.getAttribute("class")||"")}Cy.prototype={add:function(t){var e=this._names.indexOf(t);e<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function Ry(t,e){for(var n=Wh(t),i=-1,r=e.length;++i<r;)n.add(e[i])}function Iy(t,e){for(var n=Wh(t),i=-1,r=e.length;++i<r;)n.remove(e[i])}function $U(t){return function(){Ry(this,t)}}function HU(t){return function(){Iy(this,t)}}function GU(t,e){return function(){(e.apply(this,arguments)?Ry:Iy)(this,t)}}function WU(t,e){var n=Ay(t+"");if(arguments.length<2){for(var i=Wh(this.node()),r=-1,o=n.length;++r<o;)if(!i.contains(n[r]))return!1;return!0}return this.each((typeof e=="function"?GU:e?$U:HU)(n,e))}function XU(){this.textContent=""}function YU(t){return function(){this.textContent=t}}function qU(t){return function(){var e=t.apply(this,arguments);this.textContent=e??""}}function KU(t){return arguments.length?this.each(t==null?XU:(typeof t=="function"?qU:YU)(t)):this.node().textContent}function ZU(){this.innerHTML=""}function jU(t){return function(){this.innerHTML=t}}function JU(t){return function(){var e=t.apply(this,arguments);this.innerHTML=e??""}}function QU(t){return arguments.length?this.each(t==null?ZU:(typeof t=="function"?JU:jU)(t)):this.node().innerHTML}function eO(){this.nextSibling&&this.parentNode.appendChild(this)}function tO(){return this.each(eO)}function nO(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function iO(){return this.each(nO)}function rO(t){var e=typeof t=="function"?t:Sy(t);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function oO(){return null}function sO(t,e){var n=typeof t=="function"?t:Sy(t),i=e==null?oO:typeof e=="function"?e:My(e);return this.select(function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)})}function aO(){var t=this.parentNode;t&&t.removeChild(this)}function lO(){return this.each(aO)}function uO(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function cO(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function dO(t){return this.select(t?cO:uO)}function fO(t){return arguments.length?this.property("__data__",t):this.node().__data__}function hO(t){return function(e){t.call(this,e,this.__data__)}}function pO(t){return t.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");return i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),{type:e,name:n}})}function mO(t){return function(){var e=this.__on;if(e){for(var n=0,i=-1,r=e.length,o;n<r;++n)o=e[n],(!t.type||o.type===t.type)&&o.name===t.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function gO(t,e,n){return function(){var i=this.__on,r,o=hO(e);if(i){for(var s=0,a=i.length;s<a;++s)if((r=i[s]).type===t.type&&r.name===t.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),r.value=e;return}}this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function vO(t,e,n){var i=pO(t+""),r,o=i.length,s;if(arguments.length<2){var a=this.node().__on;if(a){for(var l=0,u=a.length,c;l<u;++l)for(r=0,c=a[l];r<o;++r)if((s=i[r]).type===c.type&&s.name===c.name)return c.value}return}for(a=e?gO:mO,r=0;r<o;++r)this.each(a(i[r],e,n));return this}function Py(t,e,n){var i=Ty(t),r=i.CustomEvent;typeof r=="function"?r=new r(e,n):(r=i.document.createEvent("Event"),n?(r.initEvent(e,n.bubbles,n.cancelable),r.detail=n.detail):r.initEvent(e,!1,!1)),t.dispatchEvent(r)}function _O(t,e){return function(){return Py(this,t,e)}}function yO(t,e){return function(){return Py(this,t,e.apply(this,arguments))}}function xO(t,e){return this.each((typeof e=="function"?yO:_O)(t,e))}function*bO(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,s;r<o;++r)(s=i[r])&&(yield s)}var SO=[null];function On(t,e){this._groups=t,this._parents=e}function MO(){return this}On.prototype={constructor:On,select:WF,selectAll:ZF,selectChild:tU,selectChildren:oU,filter:sU,data:fU,enter:aU,exit:pU,join:mU,merge:gU,selection:MO,order:vU,sort:_U,call:xU,nodes:bU,node:SU,size:MU,empty:wU,each:EU,attr:NU,style:UU,property:VU,classed:WU,text:KU,html:QU,raise:tO,lower:iO,append:rO,insert:sO,remove:lO,clone:dO,datum:fO,on:vO,dispatch:xO,[Symbol.iterator]:bO};function ga(t){return typeof t=="string"?new On([[document.querySelector(t)]],[document.documentElement]):new On([[t]],SO)}function wO(t){let e;for(;e=t.sourceEvent;)t=e;return t}function Og(t,e){if(t=wO(t),e===void 0&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var i=n.createSVGPoint();return i.x=t.clientX,i.y=t.clientY,i=i.matrixTransform(e.getScreenCTM().inverse()),[i.x,i.y]}if(e.getBoundingClientRect){var r=e.getBoundingClientRect();return[t.clientX-r.left-e.clientLeft,t.clientY-r.top-e.clientTop]}}return[t.pageX,t.pageY]}var EO={value:()=>{}};function Ny(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new zl(n)}function zl(t){this._=t}function TO(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}zl.prototype=Ny.prototype={constructor:zl,on:function(t,e){var n=this._,i=TO(t+"",n),r,o=-1,s=i.length;if(arguments.length<2){for(;++o<s;)if((r=(t=i[o]).type)&&(r=AO(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<s;)if(r=(t=i[o]).type)n[r]=Bg(n[r],t.name,e);else if(e==null)for(r in n)n[r]=Bg(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new zl(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function AO(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function Bg(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=EO,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}const CO={passive:!1},va={capture:!0,passive:!1};function ud(t){t.stopImmediatePropagation()}function jo(t){t.preventDefault(),t.stopImmediatePropagation()}function RO(t){var e=t.document.documentElement,n=ga(t).on("dragstart.drag",jo,va);"onselectstart"in e?n.on("selectstart.drag",jo,va):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")}function IO(t,e){var n=t.document.documentElement,i=ga(t).on("dragstart.drag",null);e&&(i.on("click.drag",jo,va),setTimeout(function(){i.on("click.drag",null)},0)),"onselectstart"in n?i.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}const _l=t=>()=>t;function Gf(t,{sourceEvent:e,subject:n,target:i,identifier:r,active:o,x:s,y:a,dx:l,dy:u,dispatch:c}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:i,enumerable:!0,configurable:!0},identifier:{value:r,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:s,enumerable:!0,configurable:!0},y:{value:a,enumerable:!0,configurable:!0},dx:{value:l,enumerable:!0,configurable:!0},dy:{value:u,enumerable:!0,configurable:!0},_:{value:c}})}Gf.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function PO(t){return!t.ctrlKey&&!t.button}function NO(){return this.parentNode}function DO(t,e){return e??{x:t.x,y:t.y}}function LO(){return navigator.maxTouchPoints||"ontouchstart"in this}function FO(){var t=PO,e=NO,n=DO,i=LO,r={},o=Ny("start","drag","end"),s=0,a,l,u,c,d=0;function f(y){y.on("mousedown.drag",h).filter(i).on("touchstart.drag",m).on("touchmove.drag",p,CO).on("touchend.drag touchcancel.drag",x).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function h(y,P){if(!(c||!t.call(this,y,P))){var L=M(this,e.call(this,y,P),y,P,"mouse");L&&(ga(y.view).on("mousemove.drag",g,va).on("mouseup.drag",v,va),RO(y.view),ud(y),u=!1,a=y.clientX,l=y.clientY,L("start",y))}}function g(y){if(jo(y),!u){var P=y.clientX-a,L=y.clientY-l;u=P*P+L*L>d}r.mouse("drag",y)}function v(y){ga(y.view).on("mousemove.drag mouseup.drag",null),IO(y.view,u),jo(y),r.mouse("end",y)}function m(y,P){if(t.call(this,y,P)){var L=y.changedTouches,B=e.call(this,y,P),_=L.length,S,R;for(S=0;S<_;++S)(R=M(this,B,y,P,L[S].identifier,L[S]))&&(ud(y),R("start",y,L[S]))}}function p(y){var P=y.changedTouches,L=P.length,B,_;for(B=0;B<L;++B)(_=r[P[B].identifier])&&(jo(y),_("drag",y,P[B]))}function x(y){var P=y.changedTouches,L=P.length,B,_;for(c&&clearTimeout(c),c=setTimeout(function(){c=null},500),B=0;B<L;++B)(_=r[P[B].identifier])&&(ud(y),_("end",y,P[B]))}function M(y,P,L,B,_,S){var R=o.copy(),A=Og(S||L,P),C,H,w;if((w=n.call(y,new Gf("beforestart",{sourceEvent:L,target:f,identifier:_,active:s,x:A[0],y:A[1],dx:0,dy:0,dispatch:R}),B))!=null)return C=w.x-A[0]||0,H=w.y-A[1]||0,function O(T,N,z){var X=A,Z;switch(T){case"start":r[_]=O,Z=s++;break;case"end":delete r[_],--s;case"drag":A=Og(z||N,P),Z=s;break}R.call(T,y,new Gf(T,{sourceEvent:N,subject:w,target:f,identifier:_,active:Z,x:A[0]+C,y:A[1]+H,dx:A[0]-X[0],dy:A[1]-X[1],dispatch:R}),B)}}return f.filter=function(y){return arguments.length?(t=typeof y=="function"?y:_l(!!y),f):t},f.container=function(y){return arguments.length?(e=typeof y=="function"?y:_l(y),f):e},f.subject=function(y){return arguments.length?(n=typeof y=="function"?y:_l(y),f):n},f.touchable=function(y){return arguments.length?(i=typeof y=="function"?y:_l(!!y),f):i},f.on=function(){var y=o.on.apply(o,arguments);return y===o?f:y},f.clickDistance=function(y){return arguments.length?(d=(y=+y)*y,f):Math.sqrt(d)},f}var po=(t=>(t.Line="line",t.Handle="handle",t))(po||{});function UO({width:t,prevWidth:e,height:n,prevHeight:i,invertX:r,invertY:o}){const s=t-e,a=n-i,l=[s>0?1:s<0?-1:0,a>0?1:a<0?-1:0];return s&&r&&(l[0]=l[0]*-1),a&&o&&(l[1]=l[1]*-1),l}const OO={[po.Line]:"right",[po.Handle]:"bottom-right"},BO={[po.Line]:"borderColor",[po.Handle]:"backgroundColor"},kO={name:"ResizeControl",compatConfig:{MODE:3}},kg=Nt({...kO,props:{nodeId:{},color:{},minWidth:{default:10},minHeight:{default:10},maxWidth:{default:Number.MAX_VALUE},maxHeight:{default:Number.MAX_VALUE},position:{},variant:{default:"handle"},shouldResize:{},keepAspectRatio:{type:[Boolean,Number],default:!1},autoScale:{type:Boolean,default:!0},handleClassName:{},handleStyle:{},lineClassName:{},lineStyle:{},isVisible:{type:Boolean}},emits:["resizeStart","resize","resizeEnd"],setup(t,{emit:e}){const n=t,i={width:0,height:0,x:0,y:0},r={...i,pointerX:0,pointerY:0,aspectRatio:1},{findNode:o,emits:s,viewport:a,noDragClassName:l}=Dt(),u=k_(),c=Ce();let d=r,f=i;const h=xt(()=>n.position??OO[n.variant]),g=Ae(()=>h.value.split("-")),v=xt(()=>n.color?{[BO[n.variant]]:n.color}:{}),m=xt(()=>n.variant===po.Handle),p=Ae(()=>m.value&&n.autoScale?`${Math.max(1/a.value.zoom,1)}`:void 0);return Sv(x=>{if(!c.value||!n.nodeId)return;const M=ga(c.value),y=h.value.includes("right")||h.value.includes("left"),P=h.value.includes("bottom")||h.value.includes("top"),L=h.value.includes("left"),B=h.value.includes("top"),_=FO().on("start",S=>{const R=o(n.nodeId),{xSnapped:A,ySnapped:C}=u(S);f={width:R?.dimensions.width??0,height:R?.dimensions.height??0,x:R?.position.x??0,y:R?.position.y??0},d={...f,pointerX:A,pointerY:C,aspectRatio:f.width/f.height},e("resizeStart",{event:S,params:f})}).on("drag",S=>{var R;const{xSnapped:A,ySnapped:C}=u(S),H=o(n.nodeId);if(H){const w=[],{pointerX:O,pointerY:T,width:N,height:z,x:X,y:Z,aspectRatio:ne}=d,{x:Q,y:de,width:we,height:te}=f,D=Math.floor(y?A-O:0),K=Math.floor(P?C-T:0);let se=er(N+(L?-D:D),n.minWidth,n.maxWidth),be=er(z+(B?-K:K),n.minHeight,n.maxHeight);if(n.keepAspectRatio){const U=se/be;let k=ne;typeof n.keepAspectRatio=="number"&&U!==n.keepAspectRatio&&(k=n.keepAspectRatio);const W=y&&P,b=y&&!P,q=P&&!y;se=U<=k&&W||q?be*k:se,be=U>k&&W||b?se/k:be,se>=n.maxWidth?(se=n.maxWidth,be=n.maxWidth/k):se<=n.minWidth&&(se=n.minWidth,be=n.minWidth/k),be>=n.maxHeight?(be=n.maxHeight,se=n.maxHeight*k):be<=n.minHeight&&(be=n.minHeight,se=n.minHeight*k)}const Se=se!==we,Re=be!==te;if(L||B){const U=L?X-(se-N):X,k=B?Z-(be-z):Z,W=U!==Q&&Se,b=k!==de&&Re;if(W||b){const q={id:H.id,type:"position",from:H.position,position:{x:W?U:Q,y:b?k:de}};w.push(q),f.x=q.position.x,f.y=q.position.y}}if(n.nodeId&&(Se||Re)){const U={id:n.nodeId,type:"dimensions",updateStyle:!0,resizing:!0,dimensions:{width:se,height:be}};w.push(U),f.width=se,f.height=be}if(w.length===0)return;const $=UO({width:f.width,prevWidth:we,height:f.height,prevHeight:te,invertX:L,invertY:B}),G={...f,direction:$};if(((R=n.shouldResize)==null?void 0:R.call(n,S,G))===!1)return;e("resize",{event:S,params:G}),s.nodesChange(w)}}).on("end",S=>{if(n.nodeId){const R={id:n.nodeId,type:"dimensions",resizing:!1};e("resizeEnd",{event:S,params:f}),s.nodesChange([R])}});M.call(_),x(()=>{M.on(".drag",null)})}),(x,M)=>(ce(),ve("div",{ref_key:"resizeControlRef",ref:c,class:dt(["vue-flow__resize-control",[...g.value,x.variant,he(l)]]),style:nt({...v.value,scale:p.value})},[qi(x.$slots,"default")],6))}}),zO={name:"NodeResizer",compatConfig:{MODE:3},inheritAttrs:!1},VO=Nt({...zO,props:{nodeId:{},color:{},handleClassName:{},handleStyle:{},lineClassName:{},lineStyle:{},isVisible:{type:Boolean,default:!0},minWidth:{},minHeight:{},maxWidth:{},maxHeight:{},shouldResize:{},keepAspectRatio:{type:[Boolean,Number]},autoScale:{type:Boolean,default:!0}},emits:["resizeStart","resize","resizeEnd"],setup(t,{emit:e}){const n=t,{findNode:i,emits:r}=Dt(),o=["top-left","top-right","bottom-left","bottom-right"],s=["top","right","bottom","left"],a=In(Fh,null),l=xt(()=>typeof n.nodeId=="string"?n.nodeId:a),u=Ae(()=>i(l.value));return ut([()=>n.minWidth,()=>n.minHeight,()=>n.maxWidth,()=>n.maxHeight,()=>{var c;return!!((c=u.value)!=null&&c.dimensions.width)&&!!u.value.dimensions.height}],([c,d,f,h,g])=>{const v=u.value;if(v&&g){const m={id:v.id,type:"dimensions",updateStyle:!0,dimensions:{width:v.dimensions.width,height:v.dimensions.height}};c&&v.dimensions.width<c&&(m.dimensions.width=c),d&&v.dimensions.height<d&&(m.dimensions.height=d),f&&v.dimensions.width>f&&(m.dimensions.width=f),h&&v.dimensions.height>h&&(m.dimensions.height=h),(m.dimensions.width!==v.dimensions.width||m.dimensions.height!==v.dimensions.height)&&r.nodesChange([m])}},{flush:"post",immediate:!0}),(c,d)=>c.isVisible?(ce(),ve(st,{key:0},[(ce(),ve(st,null,Ht(s,f=>tt(kg,{key:f,class:dt(c.lineClassName),style:nt(c.lineStyle),"node-id":l.value,position:f,variant:he(po).Line,color:c.color,"min-width":c.minWidth,"min-height":c.minHeight,"max-width":c.maxWidth,"max-height":c.maxHeight,"should-resize":c.shouldResize,"keep-aspect-ratio":c.keepAspectRatio,"auto-scale":c.autoScale,onResizeStart:d[0]||(d[0]=h=>e("resizeStart",h)),onResize:d[1]||(d[1]=h=>e("resize",h)),onResizeEnd:d[2]||(d[2]=h=>e("resizeEnd",h))},null,8,["class","style","node-id","position","variant","color","min-width","min-height","max-width","max-height","should-resize","keep-aspect-ratio","auto-scale"])),64)),(ce(),ve(st,null,Ht(o,f=>tt(kg,{key:f,class:dt(c.handleClassName),style:nt(c.handleStyle),"node-id":l.value,position:f,color:c.color,"min-width":c.minWidth,"min-height":c.minHeight,"max-width":c.maxWidth,"max-height":c.maxHeight,"should-resize":c.shouldResize,"keep-aspect-ratio":c.keepAspectRatio,"auto-scale":c.autoScale,onResizeStart:d[3]||(d[3]=h=>e("resizeStart",h)),onResize:d[4]||(d[4]=h=>e("resize",h)),onResizeEnd:d[5]||(d[5]=h=>e("resizeEnd",h))},null,8,["class","style","node-id","position","color","min-width","min-height","max-width","max-height","should-resize","keep-aspect-ratio","auto-scale"])),64))],64)):We("",!0)}});let Wf=0;function $O(){return`node_${++Wf}_${Date.now().toString(36)}`}const go=_1("graph",()=>{const t=Ce([]),e=Ce([]),n=Cr({}),i=Ce(null),r=Ce(!0),o=Ce("anchored"),s=Ce(null),a=Ce("Untitled Project"),l=Ce(0),u=Ce(!0),c=Ce(!1),d=Ce(!1),f=Ce([]);let h=0;const g=Ce({}),v=Ce({}),m=Ce({});let p=null;const x=Cr({}),M=Ae(()=>i.value&&t.value.find(b=>b.id===i.value)||null),y=Ae(()=>M.value?Qt(M.value.type):null),P=Ae(()=>i.value?n[i.value]||{}:{});function L(b){p=b}function B(b,q={x:200,y:200}){const J=Qt(b);if(!J)return console.warn(`Unknown node type: ${b}`),null;const ee=$O(),ie={};for(const[E,Y]of Object.entries(J.params))ie[E]=Y.default;n[ee]=ie;const I={id:ee,type:b,position:q,data:{label:J.label,category:J.category,def:J}};return t.value=[...t.value,I],ee}function _(b){p&&p(b),t.value=t.value.filter(q=>q.id!==b),e.value=e.value.filter(q=>q.source!==b&&q.target!==b),delete n[b],delete x[b],i.value===b&&(i.value=null),s.value===b&&(s.value=null)}function S(b){const q=t.value.find(ae=>ae.id===b.source),J=t.value.find(ae=>ae.id===b.target);if(!q||!J)return!1;const ee=Qt(q.type),ie=Qt(J.type);if(!ee||!ie)return!1;const I=ee.outputs.find(ae=>ae.id===b.sourceHandle);let E=ie.inputs.find(ae=>ae.id===b.targetHandle);if(!E){const ae=x[J.id];if(ae&&ae[b.targetHandle]){const me=ie.params[b.targetHandle];if(me){const fe=me.type==="int"?ye.INT:(me.type==="float",ye.FLOAT);E={id:b.targetHandle,type:fe}}}}if(!I||!E)return!1;if(!HA(I.type,E.type))return console.warn(`Type mismatch: ${I.type} → ${E.type}`),!1;e.value=e.value.filter(ae=>!(ae.target===b.target&&ae.targetHandle===b.targetHandle));const Y={id:`e_${b.source}_${b.sourceHandle}-${b.target}_${b.targetHandle}`,source:b.source,sourceHandle:b.sourceHandle,target:b.target,targetHandle:b.targetHandle};return e.value=[...e.value,Y],!0}function R(b){e.value=e.value.filter(q=>q.id!==b)}function A(b,q,J){n[b]||(n[b]={}),n[b][q]=J}function C(b,q){x[b]||(x[b]={}),x[b][q]=!x[b][q],x[b][q]||(e.value=e.value.filter(J=>!(J.target===b&&J.targetHandle===q)))}function H(b,q){return!!x[b]?.[q]}function w(b){const q=t.value.find(ie=>ie.id===b);if(!q)return[];const J=Qt(q.type);if(!J)return[];const ee=x[b]||{};return Object.entries(ee).filter(([ie,I])=>I).map(([ie])=>{const I=J.params[ie];if(!I)return null;const E=I.type==="int"?ye.INT:(I.type==="float",ye.FLOAT);return{id:ie,label:I.label,type:E}}).filter(Boolean)}function O(b){i.value=b}function T(){r.value=!r.value}function N(){r.value=!1}function z(){r.value=!0}function X(){o.value==="anchored"?o.value="floating":o.value==="floating"?o.value="background":o.value="anchored"}function Z(){for(const b of t.value)p&&p(b.id);t.value=[],e.value=[],Object.keys(n).forEach(b=>delete n[b]),Object.keys(x).forEach(b=>delete x[b]),i.value=null,s.value=null,Wf=0}function ne(){const b={version:1,title:a.value,timestamp:Date.now(),nodes:t.value.map(q=>({id:q.id,type:q.type,position:q.position})),edges:e.value.map(q=>({id:q.id,source:q.source,sourceHandle:q.sourceHandle,target:q.target,targetHandle:q.targetHandle})),params:{...n},exposedParams:{...x},settings:{previewMode:o.value}};return JSON.stringify(b,null,2)}function Q(b){try{const q=JSON.parse(b);q.version!==1&&console.warn("Unknown graph version:",q.version),Z(),a.value=q.title||"Untitled Project";for(const ee of q.nodes){const ie=Qt(ee.type);if(!ie){console.warn(`Skipping unknown node type: ${ee.type}`);continue}const I={id:ee.id,type:ee.type,position:ee.position,data:{label:ie.label,category:ie.category,def:ie}};t.value.push(I);const E={};for(const[Y,ae]of Object.entries(ie.params))E[Y]=q.params?.[ee.id]?.[Y]??ae.default;n[ee.id]=E}if(q.exposedParams)for(const[ee,ie]of Object.entries(q.exposedParams))x[ee]={...ie};for(const ee of q.edges)e.value.push(ee);return q.settings&&(o.value="anchored"),Wf=q.nodes.reduce((ee,ie)=>{const I=ie.id.match(/node_(\d+)_/);return I?Math.max(ee,parseInt(I[1])):ee},0),!0}catch(q){return console.error("Failed to load graph:",q),!1}}function de(){const b=ne(),q=`mangleditor-graph-${a.value||"default"}`;return localStorage.setItem(q,b),!0}async function we(b=null){try{const q=b?`mangleditor-graph-${b}`:`mangleditor-graph-${a.value||"default"}`,J=localStorage.getItem(q);if(J)return Q(J);if(!b){console.log("No local save found. Loading StarterTemplate by default...");try{const ee=await fetch("./StarterTemplate.json");if(ee.ok){const ie=await ee.text();return Q(ie)}}catch(ee){console.error("Failed to auto-load StarterTemplate:",ee)}}return!1}catch(q){return console.error("Failed to load from localStorage:",q),!1}}function te(){const b=ne(),q=new Blob([b],{type:"application/json"}),J=URL.createObjectURL(q),ee=document.createElement("a");ee.href=J;const ie=(a.value||"mangleditor").replace(/[^a-zA-Z0-9_-]/g,"_");ee.download=`${ie}.json`,ee.click(),URL.revokeObjectURL(J)}function D(b){const q=t.value.find(J=>J.id===b);q&&(q.type==="button"||q.type==="bang")&&(q._triggered=!0)}function K(){c.value=!c.value,c.value||(d.value=!1)}function se(){d.value=!d.value}function be(b){const q=`perf_${++h}_${Date.now().toString(36)}`;return f.value=[...f.value,{id:q,controlType:b,boundNodeId:null,boundParamKey:null,boundTargetNodeId:null,boundParamKeyY:null,boundTargetNodeIdY:null,nickname:"",gridOrder:f.value.length}],q}function Se(b){const q=f.value.find(J=>J.id===b);q&&["lfo","timer","damper","fft","accelerometer","xypad"].includes(q.controlType)&&q.boundNodeId&&_(q.boundNodeId),f.value=f.value.filter(J=>J.id!==b)}function Re(b,q,J){const ee=f.value.find(ie=>ie.id===b);ee&&(ee.boundNodeId=q,ee.boundParamKey=J)}function $(b,q,J){const ee=f.value.find(ie=>ie.id===b);ee&&(ee.boundTargetNodeId=q,ee.boundParamKey=J)}function G(b,q,J){const ee=f.value.find(ie=>ie.id===b);ee&&(ee.boundTargetNodeIdY=q,ee.boundParamKeyY=J)}function F(b,q){const J=f.value.find(ee=>ee.id===b);J&&(J.nickname=q)}function U(b,q){const J=[...f.value],[ee]=J.splice(b,1);J.splice(q,0,ee),f.value=J}function k(){const b=new Set;for(const J of f.value)J.boundNodeId&&J.boundParamKey&&!J.boundTargetNodeId&&b.add(`${J.boundNodeId}::${J.boundParamKey}`),J.boundTargetNodeId&&J.boundParamKey&&b.add(`${J.boundTargetNodeId}::${J.boundParamKey}`),J.boundTargetNodeIdY&&J.boundParamKeyY&&b.add(`${J.boundTargetNodeIdY}::${J.boundParamKeyY}`);const q=[];for(const[J,ee]of Object.entries(x))for(const[ie,I]of Object.entries(ee))if(I&&!b.has(`${J}::${ie}`)){const E=t.value.find(me=>me.id===J),Y=E?Qt(E.type):null,ae=Y?.params?.[ie];q.push({nodeId:J,paramKey:ie,nodeLabel:Y?.label||E?.type||J,paramLabel:ae?.label||ie})}return q}function W(){const b=["knob","slider","bang","button","toggle"];return t.value.filter(q=>b.includes(q.type))}return{nodes:t,edges:e,nodeParams:n,selectedNodeId:i,isRendering:r,previewMode:o,previewNodeId:s,projectTitle:a,exposedParams:x,selectedNode:M,selectedNodeDef:y,selectedNodeParams:P,dataOutputs:g,perfTimings:v,previewImages:m,getDataOutput(b,q){return g.value[b]?.[q]},addNode:B,removeNode:_,addEdge:S,removeEdge:R,setParam:A,selectNode:O,toggleRendering:T,stopRendering:N,startRendering:z,togglePreviewMode:X,resetGraph:Z,saveGraph:ne,saveToLocalStorage:de,loadGraph:Q,loadFromLocalStorage:we,downloadGraph:te,triggerButton:D,onNodeRemoved:L,toggleExposeParam:C,isParamExposed:H,getExposedHandles:w,isPerformanceMode:c,isPerfEditMode:d,perfGridCells:f,togglePerformanceMode:K,togglePerfEditMode:se,addPerfCell:be,removePerfCell:Se,bindPerfCell:Re,bindPerfCellTarget:$,bindPerfCellTargetY:G,setPerfCellNickname:F,reorderPerfCells:U,getUnboundExposedParams:k,getControlNodes:W,bgOpacity:l,showShadows:u}}),HO={width:"100%",height:"100%",viewBox:"0 0 100 100"},GO=["d"],WO=["x2","y2"],XO={key:0,class:"knob-value"},YO=270,yl=-135,qO={__name:"KnobControl",props:{modelValue:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:1},step:{type:Number,default:.01},size:{type:Number,default:60},showValue:{type:Boolean,default:!0}},emits:["update:modelValue"],setup(t,{emit:e}){const n=t,i=e,r=Ae(()=>{const P=n.min!==void 0?n.min:0,L=n.max!==void 0?n.max:1;return P===L?0:Math.max(0,Math.min(1,(n.modelValue-P)/(L-P)))}),o=Ae(()=>yl+r.value*YO);function s(P,L,B,_){const S=(_-90)*Math.PI/180;return{x:P+B*Math.cos(S),y:L+B*Math.sin(S)}}const a=Ae(()=>{const P=s(50,50,40,yl),L=s(50,50,40,o.value),B=o.value-yl<=180?"0":"1";return["M",P.x,P.y,"A",40,40,0,B,1,L.x,L.y].join(" ")}),l=Ae(()=>s(50,50,24,o.value).x),u=Ae(()=>s(50,50,24,o.value).y);let c=0,d=0;function f(P,L){const B=c-P,_=n.min!==void 0?n.min:0,S=n.max!==void 0?n.max:1;let A=(S-_||1)/150;L&&(A*=.1);let C=d+B*A;C=Math.max(_,Math.min(S,C)),n.step&&(C=Math.round(C/n.step)*n.step);const H=n.step.toString().split(".")[1]?.length||0;C=Number(C.toFixed(H)),i("update:modelValue",C)}function h(P){c=P.clientY,d=n.modelValue,document.addEventListener("mousemove",g),document.addEventListener("mouseup",v)}function g(P){f(P.clientY,P.shiftKey)}function v(){document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",v)}function m(P){c=P.touches[0].clientY,d=n.modelValue,document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",x),document.addEventListener("touchcancel",x)}function p(P){P.preventDefault();const L=P.touches[0];f(L.clientY,!1)}function x(){document.removeEventListener("touchmove",p),document.removeEventListener("touchend",x),document.removeEventListener("touchcancel",x)}function M(){const P=n.min!==void 0?n.min:0,B=((n.max!==void 0?n.max:1)+P)/2;i("update:modelValue",B)}const y=Ae(()=>Number(n.modelValue).toFixed(Math.min(3,n.step.toString().split(".")[1]?.length||3)));return(P,L)=>(ce(),ve("div",{class:"knob-control",onMousedown:Oe(h,["stop","prevent"]),onTouchstart:Oe(m,["stop","prevent"]),onDblclick:Oe(M,["stop"]),style:nt({width:t.size?t.size+"px":"100%",height:t.size?t.size+"px":"100%"})},[(ce(),ve("svg",HO,[L[0]||(L[0]=j("path",{class:"knob-track",d:"M 21.716 78.284 A 40 40 0 1 1 78.284 78.284",fill:"none",stroke:"rgba(255, 255, 255, 0.1)","stroke-width":"12","stroke-linecap":"round"},null,-1)),o.value>yl?(ce(),ve("path",{key:0,class:"knob-arc",d:a.value,fill:"none",stroke:"var(--accent-primary, #00d4ff)","stroke-width":"12","stroke-linecap":"round"},null,8,GO)):We("",!0),L[1]||(L[1]=j("circle",{cx:"50",cy:"50",r:"26",fill:"var(--bg-light, #333)",stroke:"var(--border-color, #444)","stroke-width":"2"},null,-1)),j("line",{x1:50,y1:50,x2:l.value,y2:u.value,stroke:"var(--text-color, #fff)","stroke-width":"4","stroke-linecap":"round"},null,8,WO)])),t.showValue?(ce(),ve("div",XO,Te(y.value),1)):We("",!0)],36))}},Dy=or(qO,[["__scopeId","data-v-06e9e2ee"]]),KO=["title"],ZO={key:0,class:"flow-node__collapsed-badge flow-node__collapsed-badge--in"},jO={class:"flow-node__title"},JO={key:1,class:"flow-node__collapsed-badge flow-node__collapsed-badge--out"},QO=["title"],eB=["title"],tB=["title"],nB=["title"],iB={class:"flow-node__body"},rB={class:"flow-node__handles"},oB={class:"flow-node__handle-label"},sB={class:"flow-node__handle-type"},aB=["title"],lB={class:"flow-node__handle-label flow-node__handle-label--exposed"},uB={class:"flow-node__handle-type"},cB={key:1,class:"flow-node__image-preview-container"},dB=["src"],fB={key:1,class:"flow-node__slot-label",style:{"text-align":"center",color:"var(--accent-success)",padding:"8px 0","font-size":"11px"}},hB={key:1,class:"flow-node__image-preview-container"},pB=["min","max","step","value"],mB={class:"flow-node__slider-value"},gB={class:"flow-node__inline-param-row"},vB=["value"],_B=["value"],yB={class:"flow-node__inline-param-row"},xB=["value"],bB={class:"flow-node__inline-param-val"},SB={class:"flow-node__inline-param-row"},MB=["value"],wB={class:"flow-node__inline-param-val"},EB={class:"flow-node__xypad-readout"},TB={class:"flow-node__inline-param-val"},AB={class:"flow-node__inline-param-val"},CB={key:9,class:"flow-node__monitor"},RB=["title"],IB={key:10,class:"flow-node__preview-inline"},PB={class:"flow-node__handles"},NB={class:"flow-node__handle-type"},DB={class:"flow-node__handle-label"},LB=["title"],zg=100,cd=60,FB={__name:"FlowNode",props:{nodeId:{type:String,required:!0},nodeType:{type:String,required:!0},def:{type:Object,required:!0},params:{type:Object,default:()=>({})},selected:{type:Boolean,default:!1},inputValues:{type:Object,default:()=>({})},outputValues:{type:Object,default:()=>({})},monitorValue:{type:Number,default:null},exposedHandles:{type:Array,default:()=>[]},perfMs:{type:Number,default:null}},emits:["select","imageLoaded","export","trigger","paramChange"],setup(t,{emit:e}){const n=t,i=e,r=go(),o=Ae(()=>{const te=r.edges.filter(D=>D.target===n.nodeId);return[...new Set(te.map(D=>D.targetHandle))]}),s=Ae(()=>{const te=r.edges.filter(D=>D.source===n.nodeId);return[...new Set(te.map(D=>D.sourceHandle))]}),a=Ae(()=>{if(!n.params._collapsed)return"";let te=`INPUTS
`;if(o.value.length===0)te+=`  (none)
`;else for(const D of o.value){const K=n.def.inputs.find(Se=>Se.id===D),se=K?K.label:D,be=n.inputValues[D];te+=`• ${se}: ${be!==void 0?Q(be):"—"}
`}if(te+=`
OUTPUTS
`,s.value.length===0)te+=`  (none)
`;else for(const D of s.value){const K=n.def.outputs.find(Se=>Se.id===D),se=K?K.label:D,be=n.outputValues[D];te+=`• ${se}: ${be!==void 0?Q(be):"—"}
`}return te}),l=Ae(()=>nu[n.def.category]?.color||"#888"),u=Ae(()=>n.def.params?Object.values(n.def.params).some(te=>te.type==="float"||te.type==="int"):!1);function c(){if(n.def.params){for(const[te,D]of Object.entries(n.def.params))if(D.type==="float"||D.type==="int"){const K=te==="value"&&n.params.min!==void 0?n.params.min:D.min!==void 0?D.min:0,se=te==="value"&&n.params.max!==void 0?n.params.max:D.max!==void 0?D.max:1,be=n.params[`_randMin_${te}`]??K,Se=n.params[`_randMax_${te}`]??se;let Re=be+Math.random()*(Se-be);D.type==="int"?Re=Math.floor(Re):D.step&&(Re=Math.round(Re/D.step)*D.step),i("paramChange",te,Re)}}}const d=Ce(null),f=Ce(!1),h=Ce(null),g=Ae(()=>!!h.value);En(()=>{if((n.nodeType==="imageInput"||n.nodeType==="uiImageSlot")&&!h.value){const te="/default_img.jpg";h.value=te;const D=new Image;D.crossOrigin="anonymous",D.src=te,D.onload=()=>{i("imageLoaded",{url:te,width:D.naturalWidth,height:D.naturalHeight,img:D})}}});const v=Ce(null),m=Ce([]),p=Ce(null);ut(()=>r.previewImages[n.nodeId],te=>{if(n.nodeType!=="preview"||!te||!p.value)return;const D=p.value,K=D.getContext("2d");(D.width!==te.width||D.height!==te.height)&&(D.width=te.width,D.height=te.height);const se=document.createElement("canvas");se.width=te.width,se.height=te.height;const be=se.getContext("2d"),Se=new ImageData(new Uint8ClampedArray(te.pixels.buffer),te.width,te.height);be.putImageData(Se,0,0),K.save(),K.scale(1,-1),K.drawImage(se,0,-te.height),K.restore()});const x=Ce(!1),M=Ce(null);let y=null;async function P(){try{y=await navigator.mediaDevices.getUserMedia({video:{width:1280,height:720},audio:!1}),x.value=!0,setTimeout(()=>{M.value&&(M.value.srcObject=y,M.value.onloadedmetadata=()=>{M.value.play(),i("imageLoaded",{url:"webcam",width:M.value.videoWidth,height:M.value.videoHeight,img:M.value,isVideo:!0})})},50)}catch(te){console.error("Failed to access webcam:",te),alert("Could not access webcam. Please check permissions.")}}function L(){y&&(y.getTracks().forEach(te=>te.stop()),y=null),x.value=!1,i("imageLoaded",{url:"webcam",width:1,height:1,img:null,isVideo:!1})}const B=Ce(null),_=Ae(()=>({left:(n.params.x??.5)*100+"%",top:(1-(n.params.y??.5))*100+"%"}));let S=!1;function R(te){S=!0,H(te),window.addEventListener("pointermove",A),window.addEventListener("pointerup",C)}function A(te){S&&H(te)}function C(){S=!1,window.removeEventListener("pointermove",A),window.removeEventListener("pointerup",C)}function H(te){const D=B.value;if(!D)return;const K=D.getBoundingClientRect(),se=Math.max(0,Math.min(1,(te.clientX-K.left)/K.width)),be=Math.max(0,Math.min(1,1-(te.clientY-K.top)/K.height));i("paramChange","x",se),i("paramChange","y",be)}const w=Ce(null),O=[];let T=null;n.nodeType==="lfo"&&En(()=>{T=setInterval(()=>{const te=n.outputValues?.out??0;O.push(te),O.length>cd&&O.shift(),N()},50)});function N(){const te=w.value;if(!te||O.length<2)return;const D=te.getContext("2d"),K=te.width,se=te.height;D.clearRect(0,0,K,se);let be=1/0,Se=-1/0;for(const $ of O)$<be&&(be=$),$>Se&&(Se=$);Se===be&&(be-=.5,Se+=.5);const Re=Se-be;D.strokeStyle="#00d4ff",D.lineWidth=1.5,D.lineJoin="round",D.beginPath();for(let $=0;$<O.length;$++){const G=$/(cd-1)*K,F=se-(O[$]-be)/Re*se;$===0?D.moveTo(G,F):D.lineTo(G,F)}D.stroke(),D.lineTo((O.length-1)/(cd-1)*K,se),D.lineTo(0,se),D.closePath(),D.fillStyle="rgba(0, 212, 255, 0.08)",D.fill()}mo(()=>{L(),clearInterval(T)});function z(){d.value?.click()}function X(te){const D=te.target.files?.[0];D&&ne(D)}function Z(te){f.value=!1;const D=te.dataTransfer.files?.[0];D&&D.type.startsWith("image/")&&ne(D)}function ne(te){const D=URL.createObjectURL(te);h.value=D;const K=new Image;K.onload=()=>{i("imageLoaded",{url:D,width:K.naturalWidth,height:K.naturalHeight,img:K})},K.src=D}function Q(te){return te==null?"":typeof te=="number"?te.toFixed(2):String(te)}ut(()=>n.monitorValue,te=>{te!=null&&(m.value.push(te),m.value.length>zg&&m.value.shift(),de())});function de(){const te=v.value;if(!te)return;const D=te.getContext("2d"),K=te.width,se=te.height,be=m.value;if(D.clearRect(0,0,K,se),be.length<2)return;const Se=Math.min(...be),Re=Math.max(...be),$=Re-Se||1;D.strokeStyle="#00d4ff",D.lineWidth=1.5,D.beginPath();for(let G=0;G<be.length;G++){const F=G/(zg-1)*K,U=se-(be[G]-Se)/$*(se-4)-2;G===0?D.moveTo(F,U):D.lineTo(F,U)}if(D.stroke(),Se<=0&&Re>=0){const G=se-(0-Se)/$*(se-4)-2;D.strokeStyle="#ffffff30",D.lineWidth=.5,D.beginPath(),D.moveTo(0,G),D.lineTo(K,G),D.stroke()}}const we=Ae(()=>{if(n.nodeType!=="webcamInput")return!1;const te=n.params?.enable===!0,D=r.dataOutputs[n.nodeId]?.trigger??0;return te||D>.5});return ut(we,te=>{te&&!x.value?P():!te&&x.value&&L()},{immediate:!0}),(te,D)=>(ce(),ve("div",{class:dt(["flow-node",{"flow-node--selected":t.selected},{"flow-node--compact":t.def.compact},{"flow-node--bypassed":t.params._bypass},{"flow-node--collapsed":t.params._collapsed},{"flow-node--resizable":!t.params._collapsed&&["preview","knob","imageInput","webcamInput"].includes(t.nodeType)&&t.params._resizable}]),onClick:D[40]||(D[40]=K=>te.$emit("select")),onDblclick:D[41]||(D[41]=Oe(K=>te.$emit("paramChange","_collapsed",!t.params._collapsed),["stop"]))},[["preview","knob","imageInput","webcamInput"].includes(t.nodeType)&&t.params._resizable?(ce(),jt(he(VO),{key:0,"min-width":60,"min-height":60,"max-width":540,"max-height":540,"keep-aspect-ratio":!0,"is-visible":t.selected,class:"nodrag"},null,8,["is-visible"])):We("",!0),j("div",{class:"flow-node__header",title:a.value},[t.params._collapsed&&o.value.length>0?(ce(),ve("span",ZO," ["+Te(o.value.length)+"] ",1)):We("",!0),j("div",{class:"flow-node__category-dot",style:nt({background:l.value})},null,4),j("div",jO,Te(t.def.label),1),t.params._collapsed&&s.value.length>0?(ce(),ve("span",JO," ["+Te(s.value.length)+"] ",1)):We("",!0),u.value?(ce(),ve("button",{key:2,class:"flow-node__bypass-btn",style:{"margin-right":"4px"},onClick:Oe(c,["stop"]),title:"Randomize Parameters"}," 🎲 ")):We("",!0),j("button",{class:dt(["flow-node__bypass-btn",{"flow-node__bypass-btn--active":t.params._collapsed}]),style:{"margin-right":"4px"},onClick:D[0]||(D[0]=Oe(K=>te.$emit("paramChange","_collapsed",!t.params._collapsed),["stop"])),title:t.params._collapsed?"Expand Node":"Collapse Node"},Te(t.params._collapsed?"▼":"▬"),11,QO),!t.params._collapsed&&["preview","knob","imageInput","webcamInput"].includes(t.nodeType)?(ce(),ve("button",{key:3,class:dt(["flow-node__bypass-btn",{"flow-node__bypass-btn--active":t.params._resizable}]),style:{"margin-right":"4px"},onClick:D[1]||(D[1]=Oe(K=>te.$emit("paramChange","_resizable",!t.params._resizable),["stop"])),title:t.params._resizable?"Disable Resizing":"Enable Resizing"}," ⤢ ",10,eB)):We("",!0),t.def.shaderKey||t.def.category==="image"||t.def.category==="uv"?(ce(),ve("button",{key:4,class:dt(["flow-node__bypass-btn",{"flow-node__bypass-btn--active":t.params._bypass}]),onClick:D[2]||(D[2]=Oe(K=>te.$emit("paramChange","_bypass",!t.params._bypass),["stop"])),title:t.params._bypass?"Enable (bypassed)":"Bypass"},Te(t.params._bypass?"⊘":"⏵"),11,tB)):We("",!0),t.perfMs!==null?(ce(),ve("span",{key:5,class:"flow-node__perf-badge",title:t.perfMs+"ms"},Te(t.perfMs<1?"<1":t.perfMs.toFixed(1))+"ms ",9,nB)):We("",!0)],8,KO),j("div",iB,[j("div",rB,[(ce(!0),ve(st,null,Ht(t.def.inputs,K=>(ce(),ve("div",{key:"in-"+K.id,class:"flow-node__handle-row flow-node__handle-row--input"},[tt(he(ao),{type:"target",id:K.id,position:he(Xe).Left,style:nt({background:he(qc)(K.type)})},null,8,["id","position","style"]),j("span",oB,Te(K.label),1),j("span",sB,Te(K.type),1),t.inputValues[K.id]!==void 0?(ce(),ve("span",{key:0,class:"flow-node__handle-value",title:"Value: "+t.inputValues[K.id]},Te(Q(t.inputValues[K.id])),9,aB)):We("",!0)]))),128)),(ce(!0),ve(st,null,Ht(t.exposedHandles,K=>(ce(),ve("div",{key:"exp-"+K.id,class:"flow-node__handle-row flow-node__handle-row--input flow-node__handle-row--exposed"},[tt(he(ao),{type:"target",id:K.id,position:he(Xe).Left,style:nt({background:he(qc)(K.type)})},null,8,["id","position","style"]),j("span",lB,"⊕ "+Te(K.label),1),j("span",uB,Te(K.type),1)]))),128))]),t.params._collapsed?We("",!0):(ce(),ve(st,{key:0},[t.nodeType==="imageInput"||t.nodeType==="uiImageSlot"?(ce(),ve("div",{key:0,class:"flow-node__controls",onPointerdown:D[5]||(D[5]=Oe(()=>{},["stop"])),onMousedown:D[6]||(D[6]=Oe(()=>{},["stop"]))},[j("input",{ref_key:"fileInput",ref:d,type:"file",accept:"image/*",class:"file-input-hidden",onChange:X},null,544),g.value?(ce(),ve("div",cB,[j("button",{class:"flow-node__inline-btn flow-node__inline-btn--sm",onClick:Oe(z,["stop"]),style:{"margin-bottom":"4px",width:"100%"}}," 📷 Replace Image "),t.nodeType==="imageInput"?(ce(),ve("img",{key:0,src:h.value,class:"flow-node__image-preview"},null,8,dB)):(ce(),ve("div",fB," Image Loaded ✓ "))])):(ce(),ve("div",{key:0,class:dt(["flow-node__drop-zone",{"flow-node__drop-zone--active":f.value}]),onClick:Oe(z,["stop"]),onDragover:D[3]||(D[3]=Oe(K=>f.value=!0,["prevent"])),onDragleave:D[4]||(D[4]=K=>f.value=!1),onDrop:Oe(Z,["prevent"])}," 📷 Drop image or click to browse ",34))],32)):We("",!0),t.nodeType==="webcamInput"?(ce(),ve("div",{key:1,class:"flow-node__controls",onPointerdown:D[9]||(D[9]=Oe(()=>{},["stop"])),onMousedown:D[10]||(D[10]=Oe(()=>{},["stop"]))},[x.value?(ce(),ve("div",hB,[j("button",{class:"flow-node__inline-btn flow-node__inline-btn--sm",onClick:D[8]||(D[8]=Oe(K=>te.$emit("paramChange","enable",!1),["stop"])),style:{"margin-bottom":"4px",width:"100%",background:"var(--bg-red-dim)","border-color":"var(--accent-danger)"}}," Stop Webcam "),j("video",{ref_key:"webcamVideo",ref:M,class:"flow-node__image-preview",autoplay:"",playsinline:"",muted:""},null,512)])):(ce(),ve("button",{key:0,class:"flow-node__inline-btn flow-node__inline-btn--sm",onClick:D[7]||(D[7]=Oe(K=>te.$emit("paramChange","enable",!0),["stop"])),style:{width:"100%"}}," 🎥 Start Webcam "))],32)):We("",!0),t.nodeType==="imageOutput"?(ce(),ve("div",{key:2,class:"flow-node__controls",onPointerdown:D[12]||(D[12]=Oe(()=>{},["stop"])),onMousedown:D[13]||(D[13]=Oe(()=>{},["stop"]))},[j("button",{class:"flow-node__inline-btn",onClick:D[11]||(D[11]=Oe(K=>te.$emit("export"),["stop"]))}," ⬇ Export "+Te(t.params.format||"PNG"),1)],32)):We("",!0),t.nodeType==="button"||t.nodeType==="bang"?(ce(),ve("div",{key:3,class:"flow-node__controls",onPointerdown:D[15]||(D[15]=Oe(()=>{},["stop"])),onMousedown:D[16]||(D[16]=Oe(()=>{},["stop"]))},[j("button",{class:"flow-node__inline-btn",onClick:D[14]||(D[14]=Oe(K=>te.$emit("trigger"),["stop"]))},Te(t.params.label||"Bang!"),1)],32)):We("",!0),t.nodeType==="slider"?(ce(),ve("div",{key:4,class:"flow-node__slider-container",onPointerdown:D[20]||(D[20]=Oe(()=>{},["stop"])),onMousedown:D[21]||(D[21]=Oe(()=>{},["stop"]))},[j("input",{type:"range",class:"flow-node__inline-slider",min:t.params.min??0,max:t.params.max??1,step:t.params.step??.01,value:t.params.value??.5,onInput:D[17]||(D[17]=Oe(K=>te.$emit("paramChange","value",Number(K.target.value)),["stop"])),onPointerdown:D[18]||(D[18]=Oe(()=>{},["stop"])),onMousedown:D[19]||(D[19]=Oe(()=>{},["stop"]))},null,40,pB),j("div",mB,Te((t.params.value??.5).toFixed(3)),1)],32)):We("",!0),t.nodeType==="knob"?(ce(),ve("div",{key:5,class:"flow-node__knob-container",onPointerdown:D[23]||(D[23]=Oe(()=>{},["stop"])),onMousedown:D[24]||(D[24]=Oe(()=>{},["stop"]))},[tt(Dy,{modelValue:t.params.value??(t.def.params.value?t.def.params.value.default:.5),min:t.params.min??(t.def.params.min?t.def.params.min.default:0),max:t.params.max??(t.def.params.max?t.def.params.max.default:1),step:t.params.step??(t.def.params.step?t.def.params.step.default:.01),size:null,"onUpdate:modelValue":D[22]||(D[22]=K=>te.$emit("paramChange","value",K))},null,8,["modelValue","min","max","step"])],32)):We("",!0),t.nodeType==="lfo"?(ce(),ve("div",{key:6,class:"flow-node__inline-params",onPointerdown:D[34]||(D[34]=Oe(()=>{},["stop"])),onMousedown:D[35]||(D[35]=Oe(()=>{},["stop"]))},[j("canvas",{ref_key:"lfoCanvasRef",ref:w,class:"flow-node__lfo-graph",width:"176",height:"40"},null,512),j("div",gB,[D[42]||(D[42]=j("span",{class:"flow-node__inline-param-label"},"wave",-1)),j("select",{class:"flow-node__inline-select",value:t.params.waveform??"sine",onChange:D[25]||(D[25]=Oe(K=>te.$emit("paramChange","waveform",K.target.value),["stop"])),onPointerdown:D[26]||(D[26]=Oe(()=>{},["stop"])),onMousedown:D[27]||(D[27]=Oe(()=>{},["stop"]))},[(ce(),ve(st,null,Ht(["sine","saw","square","triangle"],K=>j("option",{key:K,value:K},Te(K),9,_B)),64))],40,vB)]),j("div",yB,[D[43]||(D[43]=j("span",{class:"flow-node__inline-param-label"},"freq",-1)),j("input",{type:"range",class:"flow-node__inline-slider-sm",min:"0.01",max:"20",step:"0.01",value:t.params.frequency??1,onInput:D[28]||(D[28]=Oe(K=>te.$emit("paramChange","frequency",Number(K.target.value)),["stop"])),onPointerdown:D[29]||(D[29]=Oe(()=>{},["stop"])),onMousedown:D[30]||(D[30]=Oe(()=>{},["stop"]))},null,40,xB),j("span",bB,Te((t.params.frequency??1).toFixed(2)),1)]),j("div",SB,[D[44]||(D[44]=j("span",{class:"flow-node__inline-param-label"},"amp",-1)),j("input",{type:"range",class:"flow-node__inline-slider-sm",min:"0",max:"10",step:"0.01",value:t.params.amplitude??1,onInput:D[31]||(D[31]=Oe(K=>te.$emit("paramChange","amplitude",Number(K.target.value)),["stop"])),onPointerdown:D[32]||(D[32]=Oe(()=>{},["stop"])),onMousedown:D[33]||(D[33]=Oe(()=>{},["stop"]))},null,40,MB),j("span",wB,Te((t.params.amplitude??1).toFixed(2)),1)])],32)):We("",!0),t.nodeType==="xyPad"?(ce(),ve("div",{key:7,class:"flow-node__xypad-wrapper",onPointerdown:D[36]||(D[36]=Oe(()=>{},["stop"])),onMousedown:D[37]||(D[37]=Oe(()=>{},["stop"]))},[j("div",{class:"flow-node__xypad",ref_key:"xyPadNodeRef",ref:B,onPointerdown:R},[j("div",{class:"flow-node__xypad-crosshair",style:nt(_.value)},null,4)],544),j("div",EB,[j("span",TB,"X: "+Te((t.params.x??.5).toFixed(2)),1),j("span",AB,"Y: "+Te((t.params.y??.5).toFixed(2)),1)])],32)):We("",!0),t.nodeType==="fft"?(ce(),ve("div",{key:8,class:"flow-node__fft-container",onPointerdown:D[38]||(D[38]=Oe(()=>{},["stop"])),onMousedown:D[39]||(D[39]=Oe(()=>{},["stop"]))},[j("div",{class:"flow-node__fft-bar flow-node__fft-bar--bass",style:nt({height:Math.max(2,(t.outputValues.bass||0)*40)+"px"})},null,4),j("div",{class:"flow-node__fft-bar flow-node__fft-bar--low-mid",style:nt({height:Math.max(2,(t.outputValues.lowMid||0)*40)+"px"})},null,4),j("div",{class:"flow-node__fft-bar flow-node__fft-bar--mid",style:nt({height:Math.max(2,(t.outputValues.mid||0)*40)+"px"})},null,4),j("div",{class:"flow-node__fft-bar flow-node__fft-bar--high",style:nt({height:Math.max(2,(t.outputValues.high||0)*40)+"px"})},null,4)],32)):We("",!0),t.nodeType==="numberMonitor"?(ce(),ve("div",CB,[j("div",{class:"flow-node__monitor-value",title:"Value: "+(t.monitorValue??0)},Te(t.monitorValue!==null&&t.monitorValue!==void 0?t.monitorValue.toFixed(t.params.decimals??3):"—"),9,RB),t.params.showGraph!==!1?(ce(),ve("canvas",{key:0,ref_key:"monitorCanvas",ref:v,class:"flow-node__monitor-graph",width:"176",height:"40"},null,512)):We("",!0)])):We("",!0),t.nodeType==="preview"?(ce(),ve("div",IB,[j("canvas",{ref_key:"previewCanvas",ref:p,class:"flow-node__preview-canvas",width:"176",height:"100"},null,512),D[45]||(D[45]=j("div",{class:"flow-node__preview-label"},"Preview Node",-1))])):We("",!0)],64)),j("div",PB,[(ce(!0),ve(st,null,Ht(t.def.outputs,K=>(ce(),ve("div",{key:"out-"+K.id,class:"flow-node__handle-row flow-node__handle-row--output"},[j("span",NB,Te(K.type),1),j("span",DB,Te(K.label),1),t.outputValues[K.id]!==void 0?(ce(),ve("span",{key:0,class:"flow-node__handle-value",title:"Value: "+t.outputValues[K.id]},Te(Q(t.outputValues[K.id])),9,LB)):We("",!0),tt(he(ao),{type:"source",id:K.id,position:he(Xe).Right,style:nt({background:he(qc)(K.type)})},null,8,["id","position","style"])]))),128))])])],34))}},mr=or(FB,[["__scopeId","data-v-3ed60a2c"]]),UB={class:"editor-controls"},OB={__name:"EditorCanvas",emits:["imageLoaded","exportImage"],setup(t,{expose:e,emit:n}){const i=go(),{viewport:r,dimensions:o,project:s,zoomIn:a,zoomOut:l,setViewport:u,fitView:c}=Dt();function d(){const{x:_,y:S}=r.value;u({x:_,y:S,zoom:1},{duration:600})}function f(){c({padding:.1,duration:600})}function h(_){["INPUT","TEXTAREA"].includes(_.target.tagName)||(_.key==="f"||_.key==="F")&&(i.selectedNodeId?c({nodes:[i.selectedNodeId],padding:.2,duration:600}):c({padding:.1,duration:600}))}En(()=>{window.addEventListener("keydown",h)}),Nu(()=>{window.removeEventListener("keydown",h)});function g(_){const{x:S,y:R,zoom:A}=r.value,{width:C,height:H}=o.value,w=C||800,O=H||600,T=(w/2-S)/A,N=(O/2-R)/A;i.addNode(_,{x:T+(Math.random()-.5)*60,y:N+(Math.random()-.5)*60})}e({addNodeAtCenter:g});const v=["imageInput","uiImageSlot","webcamInput","imageOutput","button","slider"],m=Ae(()=>Object.keys(GA()).filter(_=>!v.includes(_)));function p(_){for(const S of _)if(S.type==="position"&&S.position){const R=i.nodes.find(A=>A.id===S.id);R&&(R.position=S.position)}else S.type==="remove"&&i.removeNode(S.id)}function x(_){for(const S of _)S.type==="remove"&&i.removeEdge(S.id)}function M(_){i.addEdge(_)}function y({node:_}){i.selectNode(_.id)}function P(){i.selectNode(null)}function L({edge:_}){}function B(_){const S=_.dataTransfer.getData("application/node-type");if(!S)return;const R=_.currentTarget.getBoundingClientRect(),{x:A,y:C,zoom:H}=r.value,w=(_.clientX-R.left-A)/H,O=(_.clientY-R.top-C)/H;i.addNode(S,{x:w,y:O})}return(_,S)=>(ce(),ve("div",{class:"editor-canvas",onDrop:Oe(B,["prevent"]),onDragover:S[2]||(S[2]=Oe(()=>{},["prevent"]))},[tt(he(iN),{nodes:he(i).nodes,edges:he(i).edges,"default-viewport":{zoom:1,x:0,y:0},"min-zoom":.2,"max-zoom":3,"fit-view-on-init":"",onNodesChange:p,onEdgesChange:x,onConnect:M,onNodeClick:y,onPaneClick:P,onEdgeClick:L},jx({"node-imageInput":xn(R=>[tt(mr,{"node-id":R.id,"node-type":R.type,def:R.data.def,params:he(i).nodeParams[R.id]||{},selected:he(i).selectedNodeId===R.id,onSelect:A=>he(i).selectNode(R.id),onImageLoaded:A=>_.$emit("imageLoaded",R.id,A)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded"])]),"node-uiImageSlot":xn(R=>[tt(mr,{"node-id":R.id,"node-type":R.type,def:R.data.def,params:he(i).nodeParams[R.id]||{},selected:he(i).selectedNodeId===R.id,onSelect:A=>he(i).selectNode(R.id),onImageLoaded:A=>_.$emit("imageLoaded",R.id,A)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded"])]),"node-webcamInput":xn(R=>[tt(mr,{"node-id":R.id,"node-type":R.type,def:R.data.def,params:he(i).nodeParams[R.id]||{},selected:he(i).selectedNodeId===R.id,onSelect:A=>he(i).selectNode(R.id),onImageLoaded:A=>_.$emit("imageLoaded",R.id,A),onParamChange:(A,C)=>he(i).setParam(R.id,A,C)},null,8,["node-id","node-type","def","params","selected","onSelect","onImageLoaded","onParamChange"])]),"node-imageOutput":xn(R=>[tt(mr,{"node-type":R.type,def:R.data.def,params:he(i).nodeParams[R.id]||{},selected:he(i).selectedNodeId===R.id,onSelect:A=>he(i).selectNode(R.id),onExport:A=>_.$emit("exportImage",R.id)},null,8,["node-type","def","params","selected","onSelect","onExport"])]),"node-button":xn(R=>[tt(mr,{"node-type":R.type,def:R.data.def,params:he(i).nodeParams[R.id]||{},selected:he(i).selectedNodeId===R.id,onSelect:A=>he(i).selectNode(R.id),onTrigger:A=>he(i).triggerButton(R.id)},null,8,["node-type","def","params","selected","onSelect","onTrigger"])]),"node-bang":xn(R=>[tt(mr,{"node-id":R.id,"node-type":R.type,def:R.data.def,params:he(i).nodeParams[R.id]||{},selected:he(i).selectedNodeId===R.id,onSelect:A=>he(i).selectNode(R.id),onTrigger:A=>he(i).triggerButton(R.id),onParamChange:(A,C)=>he(i).setParam(R.id,A,C)},null,8,["node-id","node-type","def","params","selected","onSelect","onTrigger","onParamChange"])]),"node-slider":xn(R=>[tt(mr,{"node-type":R.type,def:R.data.def,params:he(i).nodeParams[R.id]||{},selected:he(i).selectedNodeId===R.id,onSelect:A=>he(i).selectNode(R.id),onParamChange:(A,C)=>he(i).setParam(R.id,A,C)},null,8,["node-type","def","params","selected","onSelect","onParamChange"])]),default:xn(()=>[j("div",UB,[j("button",{onClick:S[0]||(S[0]=R=>he(a)({duration:300})),title:"Zoom In (+)"},"+"),j("button",{onClick:S[1]||(S[1]=R=>he(l)({duration:300})),title:"Zoom Out (-)"},"−"),j("button",{onClick:d,title:"Zoom to 100% (1:1)"},"1:1"),j("button",{onClick:f,title:"Fit View to All"},"[ ]")]),tt(he(VF),{pannable:"",zoomable:"",position:"bottom-right"})]),_:2},[Ht(m.value,R=>({name:`node-${R}`,fn:xn(A=>[tt(mr,{"node-id":A.id,"node-type":A.type,def:A.data.def,params:he(i).nodeParams[A.id]||{},selected:he(i).selectedNodeId===A.id,"exposed-handles":he(i).getExposedHandles(A.id),"monitor-value":A.type==="numberMonitor"?he(i).getDataOutput(A.id,"out"):null,"perf-ms":he(i).perfTimings[A.id]??null,onSelect:C=>he(i).selectNode(A.id),onParamChange:(C,H)=>he(i).setParam(A.id,C,H)},null,8,["node-id","node-type","def","params","selected","exposed-handles","monitor-value","perf-ms","onSelect","onParamChange"])])}))]),1032,["nodes","edges"])],32))}},BB=or(OB,[["__scopeId","data-v-84e59669"]]),kB={class:"preview-panel__toolbar"},zB={class:"preview-panel__badge"},VB={key:0,class:"preview-panel__badge",style:{color:"var(--accent-primary)"}},$B={key:1,class:"preview-panel__badge",style:{color:"var(--accent-danger)"}},HB={class:"preview-panel__zoom-level"},GB={key:2,class:"preview-panel__histogram"},WB={class:"preview-panel__info-row"},XB={key:0},YB={__name:"PreviewPanel",props:{hidden:{type:Boolean,default:!1},isRendering:{type:Boolean,default:!0},pipeline:{type:Object,default:null},fps:{type:Number,default:0},previewMode:{type:String,default:"anchored"}},setup(t,{expose:e}){const n=Ce(400),i=Ce(40),r=Ce(!1),o=Ce({x:0,y:0});function s(N){N.button===0&&(r.value=!0,o.value={x:N.clientX-n.value,y:N.clientY-i.value},window.addEventListener("pointermove",a),window.addEventListener("pointerup",l))}function a(N){r.value&&(n.value=N.clientX-o.value.x,i.value=N.clientY-o.value.y)}function l(){r.value=!1,window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",l)}const u=Ce(300),c=Ce(!1);function d(N){if(N.button!==0)return;c.value=!0;const z=N.clientY,X=u.value;function Z(Q){if(!c.value)return;const de=z-Q.clientY;u.value=Math.max(100,Math.min(window.innerHeight*.8,X+de))}function ne(){c.value=!1,window.removeEventListener("pointermove",Z),window.removeEventListener("pointerup",ne)}window.addEventListener("pointermove",Z),window.addEventListener("pointerup",ne)}const f=Ce(null),h=Ce(null),g=Ce(null),v=Ce(512),m=Ce(512),p=Ce(1),x=Ce(0),M=Ce(0),y=Ce(!1),P=Ce({x:0,y:0}),L=Ce(!1);let B=null;function _(){return f.value}e({canvasRef:f,width:v,height:m,getCanvas:_}),ut(L,N=>{N?(O(),B=setInterval(O,500)):(B&&clearInterval(B),B=null)}),mo(()=>{B&&clearInterval(B)});function S(){p.value=1,x.value=0,M.value=0}function R(){if(!g.value)return;const N=g.value.clientWidth,z=g.value.clientHeight,X=N/v.value,Z=z/m.value;p.value=Math.min(X,Z,1)*.95,x.value=(N-v.value*p.value)/2,M.value=(z-m.value*p.value)/2}function A(N){const z=N.deltaY>0?.9:1.1,X=Math.max(.1,Math.min(10,p.value*z)),Z=g.value.getBoundingClientRect(),ne=N.clientX-Z.left,Q=N.clientY-Z.top;x.value=ne-(ne-x.value)*(X/p.value),M.value=Q-(Q-M.value)*(X/p.value),p.value=X}function C(N){(N.button===0||N.button===1)&&(y.value=!0,P.value={x:N.clientX,y:N.clientY},g.value?.setPointerCapture(N.pointerId))}function H(N){if(!y.value)return;const z=N.clientX-P.value.x,X=N.clientY-P.value.y;x.value+=z,M.value+=X,P.value={x:N.clientX,y:N.clientY}}function w(N){y.value=!1,g.value?.releasePointerCapture(N.pointerId)}function O(){if(!L.value||!h.value)return;const N=f.value;if(!N)return;const z=N.getContext("webgl2",{preserveDrawingBuffer:!0})||N.getContext("webgl",{preserveDrawingBuffer:!0});if(!z)return;const X=N.width,Z=N.height;if(X===0||Z===0)return;const ne=new Uint8Array(X*Z*4);z.readPixels(0,0,X,Z,z.RGBA,z.UNSIGNED_BYTE,ne);const Q=new Uint32Array(256),de=new Uint32Array(256),we=new Uint32Array(256);for(let be=0;be<ne.length;be+=4)Q[ne[be]]++,de[ne[be+1]]++,we[ne[be+2]]++;const te=h.value.getContext("2d"),D=256,K=80;te.clearRect(0,0,D,K);const se=Math.max(...Q.slice(1,255),...de.slice(1,255),...we.slice(1,255),1);T(te,Q,se,D,K,"rgba(255,80,80,0.5)"),T(te,de,se,D,K,"rgba(80,255,80,0.5)"),T(te,we,se,D,K,"rgba(80,80,255,0.5)")}function T(N,z,X,Z,ne,Q){N.fillStyle=Q,N.beginPath(),N.moveTo(0,ne);for(let de=0;de<256;de++){const we=z[de]/X*(ne-2);N.lineTo(de,ne-we)}N.lineTo(255,ne),N.closePath(),N.fill()}return(N,z)=>(ce(),ve("div",{class:dt(["preview-panel",`preview-panel--${t.previewMode}`,{hidden:t.hidden}]),style:nt(t.previewMode==="floating"?{top:`${i.value}px`,left:`${n.value}px`}:t.previewMode==="anchored"?{height:`${u.value}px`}:{})},[t.previewMode==="anchored"?(ce(),ve("div",{key:0,class:"preview-panel__resize-handle",onPointerdown:d},null,32)):We("",!0),t.previewMode==="floating"?(ce(),ve("div",{key:1,class:"preview-panel__header",onPointerdown:s},[...z[1]||(z[1]=[j("span",{class:"preview-panel__header-title"},"Live Preview",-1)])],32)):We("",!0),j("div",kB,[j("span",zB,Te(v.value)+"×"+Te(m.value),1),t.fps&&t.isRendering?(ce(),ve("span",VB,Te(t.fps)+" FPS",1)):We("",!0),t.isRendering?We("",!0):(ce(),ve("span",$B,"STOPPED")),z[2]||(z[2]=j("div",{style:{flex:"1"}},null,-1)),j("span",HB,Te(Math.round(p.value*100))+"%",1),j("button",{class:"preview-panel__tool-btn",onClick:R,title:"Fit"},"⊡"),j("button",{class:"preview-panel__tool-btn",onClick:S,title:"Reset Zoom"},"1:1"),j("button",{class:dt(["preview-panel__tool-btn",{active:L.value}]),onClick:z[0]||(z[0]=X=>L.value=!L.value),title:"Toggle Histogram"},"📊",2)]),j("div",{class:"preview-panel__viewport",ref_key:"viewportRef",ref:g,onWheel:Oe(A,["prevent"]),onPointerdown:C,onPointermove:H,onPointerup:w},[j("div",{class:"preview-panel__canvas-wrap",style:nt({transform:`translate(${x.value}px, ${M.value}px) scale(${p.value})`,transformOrigin:"0 0"})},[j("canvas",{ref_key:"canvasRef",ref:f,class:"preview-panel__canvas"},null,512)],4)],544),L.value?(ce(),ve("div",GB,[j("canvas",{ref_key:"histCanvas",ref:h,class:"preview-panel__hist-canvas",width:"256",height:"80"},null,512),j("div",WB,[j("span",null,"Resolution: "+Te(v.value)+"×"+Te(m.value),1),t.fps?(ce(),ve("span",XB,Te(t.fps)+" FPS",1)):We("",!0)])])):We("",!0)],6))}},qB={class:"param-panel"},KB={class:"param-panel__header"},ZB={class:"param-panel__title"},jB={class:"param-panel__type"},JB={key:0,class:"param-panel__nickname-row"},QB=["value"],ek={key:1,class:"param-panel__section"},tk={class:"param-field__header"},nk={class:"param-field__label"},ik={style:{display:"flex",gap:"4px"}},rk=["onClick"],ok=["onClick","title"],sk=["min","max","step","value","onInput"],ak={class:"param-field__range-info"},lk=["step","value","onChange"],uk={class:"param-field__random-bounds-card"},ck={class:"param-field__random-bounds-inputs"},dk={style:{display:"flex","flex-direction":"column",gap:"2px"}},fk=["step","value","onChange"],hk={style:{display:"flex","flex-direction":"column",gap:"2px"}},pk=["step","value","onChange"],mk=["value","onChange"],gk=["value"],vk=["onClick"],_k={key:1,class:"param-field__checkbox"},yk=["checked","onChange"],xk=["value","onInput"],bk={class:"param-panel__section"},Sk={class:"param-field"},Mk={class:"mono",style:{"font-size":"10px",color:"var(--text-muted)"}},wk={class:"param-field"},Ek={style:{"font-size":"11px"}},Tk={class:"param-field"},Ak={style:{"font-size":"11px"}},Ck={class:"param-field"},Rk={style:{"font-size":"11px"}},Ik={key:1,class:"param-panel__empty"},Pk={__name:"ParameterPanel",setup(t){const e=go(),n=Ce({}),i=Ae(()=>e.selectedNodeDef||{label:"",type:"",params:{},inputs:[],outputs:[],category:""}),r=Ae(()=>e.selectedNodeParams),o=Ae(()=>nu[i.value.category]?.color||"#888"),s=Ae(()=>e.selectedNodeId&&e.perfGridCells.find(u=>u.boundNodeId===e.selectedNodeId||u.boundTargetNodeId===e.selectedNodeId)||null);function a(u,c){e.selectedNodeId&&e.setParam(e.selectedNodeId,u,c)}function l(u,c){return c==="int"?Math.round(u).toString():typeof u=="number"?u.toFixed(3):String(u)}return(u,c)=>(ce(),ve("div",qB,[he(e).selectedNode?(ce(),ve(st,{key:0},[j("div",KB,[j("div",{class:"flow-node__category-dot",style:nt({background:o.value})},null,4),j("span",ZB,Te(i.value.label),1),j("span",jB,Te(i.value.type),1)]),s.value?(ce(),ve("div",JB,[c[1]||(c[1]=j("label",{class:"param-panel__nickname-label"},"Nickname",-1)),j("input",{class:"param-panel__nickname-input",type:"text",value:s.value.nickname||"",placeholder:"Display name in Performance Mode",onInput:c[0]||(c[0]=d=>he(e).setPerfCellNickname(s.value.id,d.target.value))},null,40,QB)])):We("",!0),Object.keys(i.value.params).length>0?(ce(),ve("div",ek,[c[6]||(c[6]=j("div",{class:"param-panel__section-title"},"Parameters",-1)),(ce(!0),ve(st,null,Ht(i.value.params,(d,f)=>(ce(),ve("div",{key:f,class:"param-field"},[j("div",tk,[j("label",nk,Te(d.label),1),j("div",ik,[d.type==="float"||d.type==="int"?(ce(),ve("button",{key:0,class:dt(["param-field__expose-btn",{"param-field__expose-btn--active":n.value[f]}]),onClick:h=>n.value[f]=!n.value[f],title:"Toggle Randomizer Bounds"}," 🎲 ",10,rk)):We("",!0),d.type==="float"||d.type==="int"?(ce(),ve("button",{key:1,class:dt(["param-field__expose-btn",{"param-field__expose-btn--active":he(e).isParamExposed(he(e).selectedNodeId,f)}]),onClick:h=>he(e).toggleExposeParam(he(e).selectedNodeId,f),title:he(e).isParamExposed(he(e).selectedNodeId,f)?"Unexpose input":"Expose as input handle"},Te(he(e).isParamExposed(he(e).selectedNodeId,f)?"🔗":"⊕"),11,ok)):We("",!0)])]),d.type==="float"||d.type==="int"?(ce(),ve(st,{key:0},[j("input",{type:"range",class:"param-field__input",min:f==="value"&&r.value.min!==void 0?r.value.min:d.min,max:f==="value"&&r.value.max!==void 0?r.value.max:d.max,step:f==="value"&&r.value.step!==void 0?r.value.step:d.step,value:r.value[f]??d.default,onInput:h=>a(f,d.type==="int"?parseInt(h.target.value):parseFloat(h.target.value))},null,40,sk),j("div",ak,[j("span",null,Te(f==="value"&&r.value.min!==void 0?r.value.min:d.min),1),j("input",{type:"number",class:"param-field__number-input mono",step:f==="value"&&r.value.step!==void 0?r.value.step:d.step,value:l(r.value[f]??d.default,d.type),onChange:h=>a(f,d.type==="int"?parseInt(h.target.value):parseFloat(h.target.value))},null,40,lk),j("span",null,Te(f==="value"&&r.value.max!==void 0?r.value.max:d.max),1)]),Bo(j("div",uk,[c[5]||(c[5]=j("div",{class:"param-field__random-bounds-header"},"🎲 Randomizer Range",-1)),j("div",ck,[j("div",dk,[c[2]||(c[2]=j("span",{style:{"font-size":"9px",opacity:"0.7"}},"Min",-1)),j("input",{type:"number",class:"param-field__number-input mono",step:d.step,value:r.value[`_randMin_${f}`]??(f==="value"&&r.value.min!==void 0?r.value.min:d.min)??0,onChange:h=>a(`_randMin_${f}`,d.type==="int"?parseInt(h.target.value):parseFloat(h.target.value)),title:"Min random value"},null,40,fk)]),c[4]||(c[4]=j("span",{style:{opacity:"0.5","font-size":"10px","margin-top":"10px"}},"to",-1)),j("div",hk,[c[3]||(c[3]=j("span",{style:{"font-size":"9px",opacity:"0.7"}},"Max",-1)),j("input",{type:"number",class:"param-field__number-input mono",step:d.step,value:r.value[`_randMax_${f}`]??(f==="value"&&r.value.max!==void 0?r.value.max:d.max)??1,onChange:h=>a(`_randMax_${f}`,d.type==="int"?parseInt(h.target.value):parseFloat(h.target.value)),title:"Max random value"},null,40,pk)])])],512),[[ko,n.value[f]]])],64)):d.type==="select"?(ce(),ve("select",{key:1,class:"param-field__input",value:r.value[f]??d.default,onChange:h=>a(f,h.target.value)},[(ce(!0),ve(st,null,Ht(d.options,h=>(ce(),ve("option",{key:h,value:h},Te(h),9,gk))),128))],40,mk)):d.type==="bool"?(ce(),ve(st,{key:2},[d.ui==="button"?(ce(),ve("button",{key:0,class:"flow-node__inline-btn",style:nt([{width:"100%","margin-top":"4px",padding:"6px"},{background:r.value[f]??d.default?"var(--bg-red-dim)":"var(--bg-tertiary)",borderColor:r.value[f]??d.default?"var(--accent-danger)":"var(--border-color)"}]),onClick:h=>a(f,!(r.value[f]??d.default))},Te(r.value[f]??d.default?"Stop":"Start")+" "+Te(d.label.replace("Enable","")),13,vk)):(ce(),ve("label",_k,[j("input",{type:"checkbox",checked:r.value[f]??d.default,onChange:h=>a(f,h.target.checked)},null,40,yk),j("span",null,Te(d.label),1)]))],64)):d.type==="string"?(ce(),ve("input",{key:3,type:"text",class:"param-field__input",value:r.value[f]??d.default,onInput:h=>a(f,h.target.value)},null,40,xk)):We("",!0)]))),128))])):We("",!0),j("div",bk,[c[11]||(c[11]=j("div",{class:"param-panel__section-title"},"Info",-1)),j("div",Sk,[c[7]||(c[7]=j("span",{class:"param-field__label"},"ID",-1)),j("span",Mk,Te(he(e).selectedNodeId),1)]),j("div",wk,[c[8]||(c[8]=j("span",{class:"param-field__label"},"Category",-1)),j("span",Ek,Te(i.value.category),1)]),j("div",Tk,[c[9]||(c[9]=j("span",{class:"param-field__label"},"Inputs",-1)),j("span",Ak,Te(i.value.inputs.length),1)]),j("div",Ck,[c[10]||(c[10]=j("span",{class:"param-field__label"},"Outputs",-1)),j("span",Rk,Te(i.value.outputs.length),1)])])],64)):(ce(),ve("div",Ik," Select a node to edit its parameters "))]))}},Nk=or(Pk,[["__scopeId","data-v-f4cee8c1"]]),Dk=["draggable"],Lk={class:"control-cell__unbound-icon"},Fk={key:2,class:"control-cell__widget control-cell__anim-widget"},Uk={class:"control-cell__lfo-readout"},Ok={class:"control-cell__lfo-waveforms"},Bk=["onClick"],kk={class:"control-cell__label"},zk={key:0,class:"control-cell__target-label"},Vk={key:1,class:"control-cell__node-label"},$k={key:3,class:"control-cell__widget control-cell__anim-widget"},Hk={class:"control-cell__value mono"},Gk={class:"control-cell__label"},Wk={key:0,class:"control-cell__target-label"},Xk={key:1,class:"control-cell__node-label"},Yk={key:4,class:"control-cell__widget control-cell__anim-widget"},qk={class:"control-cell__value mono"},Kk={class:"control-cell__label"},Zk={key:0,class:"control-cell__target-label"},jk={key:1,class:"control-cell__node-label"},Jk={class:"control-cell__value mono"},Qk={class:"control-cell__label"},e4={key:0,class:"control-cell__target-label"},t4={key:1,class:"control-cell__node-label"},n4={key:2,class:"control-cell__pulse-ring"},i4={key:6,class:"control-cell__widget control-cell__anim-widget"},r4={class:"control-cell__fft-bars"},o4={class:"control-cell__node-label"},s4={class:"control-cell__label"},a4={class:"control-cell__node-label"},l4=["min","max","step","value"],u4={class:"control-cell__value mono"},c4={class:"control-cell__label"},d4={class:"control-cell__node-label"},f4={class:"control-cell__node-label"},h4={class:"control-cell__label"},p4={class:"control-cell__node-label"},m4={class:"control-cell__lfo-readout"},g4={key:0,class:"control-cell__xy-assignments"},v4={key:0,class:"control-cell__target-label"},_4={key:1,class:"control-cell__target-label"},y4={class:"control-cell__label"},x4={key:1,class:"control-cell__node-label"},b4={key:12,class:"control-cell__widget"},S4={class:"control-cell__accel-readout"},M4={class:"control-cell__accel-axis"},w4={class:"control-cell__accel-bar-track"},E4={class:"control-cell__accel-axis"},T4={class:"control-cell__accel-bar-track"},A4={class:"control-cell__node-label"},C4={class:"value-edit-popup"},R4={class:"value-edit-popup__title"},I4=["value","step"],P4={class:"value-edit-popup__actions"},dd=60,N4={__name:"ControlCell",props:{cell:{type:Object,required:!0},editMode:{type:Boolean,default:!1},index:{type:Number,default:0}},emits:["delete","assign","reorder"],setup(t,{emit:e}){const n=t,i=e,r=go(),o=Ce(!1),s=Ce(null),a=Ce(null),l=["lfo","timer","damper","fft","random"],u=Ae(()=>l.includes(n.cell.controlType)),c=Ae(()=>({knob:"🎛️",slider:"═══",bang:"💥",toggle:"⏻",lfo:"〰️",timer:"⏱️",damper:"🫧",fft:"🎵",random:"🎲",xypad:"✛",accelerometer:"📱"})[n.cell.controlType]||"?"),d=Ae(()=>{if(!n.cell.boundNodeId)return"";const ue=r.nodes.find(Ee=>Ee.id===n.cell.boundNodeId);return ue?Qt(ue.type)?.label||ue.type:""}),f=Ae(()=>n.cell.nickname?n.cell.nickname:n.cell.boundParamKey&&!n.cell.boundTargetNodeId?n.cell.boundParamKey.toUpperCase():n.cell.controlType.toUpperCase()),h=Ae(()=>{if(!n.cell.boundTargetNodeId||!n.cell.boundParamKey)return"";const ue=r.nodes.find(re=>re.id===n.cell.boundTargetNodeId);if(!ue)return"";const oe=Qt(ue.type),De=oe?.params?.[n.cell.boundParamKey]?.label||n.cell.boundParamKey;return`→ ${oe?.label||ue.type}.${De}`}),g=Ae(()=>{if(!n.cell.boundTargetNodeId||!n.cell.boundParamKey)return"";const ue=r.nodes.find(De=>De.id===n.cell.boundTargetNodeId);return ue?`X → ${Qt(ue.type)?.params?.[n.cell.boundParamKey]?.label||n.cell.boundParamKey}`:""}),v=Ae(()=>{if(!n.cell.boundTargetNodeIdY||!n.cell.boundParamKeyY)return"";const ue=r.nodes.find(De=>De.id===n.cell.boundTargetNodeIdY);return ue?`Y → ${Qt(ue.type)?.params?.[n.cell.boundParamKeyY]?.label||n.cell.boundParamKeyY}`:""}),m=Ae(()=>{if(!n.cell.boundNodeId||!n.cell.boundParamKey)return null;const ue=r.nodes.find(Ee=>Ee.id===n.cell.boundNodeId);return ue&&Qt(ue.type)?.params?.[n.cell.boundParamKey]||null}),p=Ae(()=>!n.cell.boundNodeId||!n.cell.boundParamKey?0:r.nodeParams[n.cell.boundNodeId]?.[n.cell.boundParamKey]??m.value?.default??0),x=Ae(()=>m.value?.min??0),M=Ae(()=>m.value?.max??1),y=Ae(()=>m.value?.step??.01),P=Ae(()=>n.cell.boundNodeId?r.dataOutputs[n.cell.boundNodeId]?.out??0:0),L=Ae(()=>{if(!n.cell.boundNodeId)return{bass:0,lowMid:0,mid:0,high:0};const ue=r.dataOutputs[n.cell.boundNodeId];return{bass:ue?.bass??0,lowMid:ue?.lowMid??0,mid:ue?.mid??0,high:ue?.high??0}}),B=Ce([]);let _=null;En(()=>{u.value&&n.cell.controlType!=="fft"&&(_=setInterval(S,50))}),mo(()=>{clearInterval(_)});function S(){if(!n.cell.boundNodeId)return;const ue=P.value,oe=B.value;oe.push(ue),oe.length>dd&&oe.shift(),B.value=oe,R()}function R(){const ue=s.value;if(!ue)return;const oe=ue.getContext("2d"),Ee=ue.width,De=ue.height,Qe=B.value;if(oe.clearRect(0,0,Ee,De),Qe.length<2)return;let re=1/0,Le=-1/0;for(const Be of Qe)Be<re&&(re=Be),Be>Le&&(Le=Be);Le===re&&(re-=.5,Le+=.5);const Fe=Le-re;oe.strokeStyle="#00d4ff",oe.lineWidth=1.5,oe.lineJoin="round",oe.beginPath();for(let Be=0;Be<Qe.length;Be++){const Ne=Be/(dd-1)*Ee,Me=De-(Qe[Be]-re)/Fe*De;Be===0?oe.moveTo(Ne,Me):oe.lineTo(Ne,Me)}oe.stroke(),oe.lineTo((Qe.length-1)/(dd-1)*Ee,De),oe.lineTo(0,De),oe.closePath(),oe.fillStyle="rgba(0, 212, 255, 0.1)",oe.fill()}const A=Ae(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.frequency??1:1),C=Ae(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.amplitude??1:1),H=Ae(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.waveform??"sine":"sine");function w(ue){return{sine:"∿",saw:"⩘",square:"⊓",triangle:"△"}[ue]||ue}function O(ue){n.cell.boundNodeId&&r.setParam(n.cell.boundNodeId,"waveform",ue)}let T=0,N=0,z=0,X=0,Z=!1;function ne(ue){if(n.editMode)return;Z=!0;const oe=ue.touches?ue.touches[0]:ue;T=oe.clientX,N=oe.clientY,z=A.value,X=C.value,window.addEventListener("pointermove",Q),window.addEventListener("pointerup",we),window.addEventListener("touchmove",de,{passive:!1}),window.addEventListener("touchend",we)}function Q(ue){if(!Z||!n.cell.boundNodeId)return;const oe=ue.clientX-T,Ee=-(ue.clientY-N),De=Math.max(.01,Math.min(5,z+oe*.05)),Qe=Math.max(0,Math.min(5,X+Ee*.02));r.setParam(n.cell.boundNodeId,"frequency",De),r.setParam(n.cell.boundNodeId,"amplitude",Qe)}function de(ue){ue.preventDefault();const oe=ue.touches[0];Q({clientX:oe.clientX,clientY:oe.clientY})}function we(){Z=!1,window.removeEventListener("pointermove",Q),window.removeEventListener("pointerup",we),window.removeEventListener("touchmove",de),window.removeEventListener("touchend",we)}const te=Ae(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.triggerInterval??.5:.5),D=Ae(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.damping??0:0),K=Ce(!1);let se=null;function be(ue){n.cell.boundNodeId&&(K.value=!1,Re.value=ue,$.value=ue==="triggerInterval"?"Self-Trigger Interval (s)":"Damping",G.value=r.nodeParams[n.cell.boundNodeId]?.[ue]??(ue==="triggerInterval"?.5:0),F.value=ue==="triggerInterval"?.01:.001,Se.value=!0,fn(()=>U.value?.focus?.()))}const Se=Ce(!1),Re=Ce(""),$=Ce(""),G=Ce(0),F=Ce(.01),U=Ce(null);n.cell.controlType==="random"&&ut(P,ue=>{!Se.value&&se!==null&&Math.abs(ue-se)>.005&&(K.value=!0,setTimeout(()=>{K.value=!1},300)),se=ue});function k(ue){n.cell.boundNodeId&&(Re.value=ue,$.value=ue==="frequency"?"Frequency (Hz)":"Amplitude",G.value=r.nodeParams[n.cell.boundNodeId]?.[ue]??1,F.value=.01,Se.value=!0,fn(()=>U.value?.focus?.()))}function W(ue){n.cell.boundNodeId&&Re.value&&!isNaN(ue)&&r.setParam(n.cell.boundNodeId,Re.value,ue),Se.value=!1}function b(ue){n.cell.boundNodeId&&(Re.value=ue,$.value=ue==="x"?"X Value":"Y Value",G.value=r.nodeParams[n.cell.boundNodeId]?.[ue]??.5,F.value=.001,Se.value=!0,fn(()=>U.value?.focus?.()))}const q=Ae(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.x??.5:.5),J=Ae(()=>n.cell.boundNodeId?r.nodeParams[n.cell.boundNodeId]?.y??.5:.5),ee=Ae(()=>({left:q.value*100+"%",top:(1-J.value)*100+"%"})),ie=Ae(()=>({left:q.value*100+"%",top:(1-J.value)*100+"%"}));let I=!1;function E(ue){I=!0,me(ue),window.addEventListener("pointermove",Y),window.addEventListener("pointerup",ae)}function Y(ue){I&&me(ue)}function ae(){I=!1,window.removeEventListener("pointermove",Y),window.removeEventListener("pointerup",ae)}function me(ue){const oe=a.value;if(!oe||!n.cell.boundNodeId)return;const Ee=oe.getBoundingClientRect(),De=Math.max(0,Math.min(1,(ue.clientX-Ee.left)/Ee.width)),Qe=Math.max(0,Math.min(1,1-(ue.clientY-Ee.top)/Ee.height));r.setParam(n.cell.boundNodeId,"x",De),r.setParam(n.cell.boundNodeId,"y",Qe)}function fe(ue){if(!n.cell.boundNodeId)return 50;const Ee=r.dataOutputs[n.cell.boundNodeId]?.[ue]??0;return Math.max(0,Math.min(100,(Ee+1)*50))}function Ue(ue){n.cell.boundNodeId&&n.cell.boundParamKey&&r.setParam(n.cell.boundNodeId,n.cell.boundParamKey,ue)}function Ie(){n.cell.boundNodeId&&r.triggerButton(n.cell.boundNodeId)}function He(ue){o.value=!0,ue.dataTransfer.setData("text/plain",String(n.index)),ue.dataTransfer.effectAllowed="move"}function Ye(){o.value=!1}function Pe(ue){const oe=parseInt(ue.dataTransfer.getData("text/plain"),10);!isNaN(oe)&&oe!==n.index&&i("reorder",oe,n.index)}return(ue,oe)=>(ce(),ve("div",{class:dt(["control-cell",{"control-cell--edit":t.editMode,"control-cell--unbound":!t.cell.boundNodeId&&!u.value,"control-cell--dragging":o.value}]),draggable:t.editMode,onDragstart:He,onDragend:Ye,onDragover:oe[26]||(oe[26]=Oe(()=>{},["prevent"])),onDrop:Pe},[t.editMode?(ce(),ve("button",{key:0,class:"control-cell__delete",onClick:oe[0]||(oe[0]=Oe(Ee=>ue.$emit("delete"),["stop"]))},"✕")):We("",!0),!t.cell.boundNodeId&&!u.value?(ce(),ve("div",{key:1,class:"control-cell__unbound",onClick:oe[1]||(oe[1]=Oe(Ee=>ue.$emit("assign"),["stop"]))},[j("span",Lk,Te(c.value),1),oe[27]||(oe[27]=j("span",{class:"control-cell__unbound-label"},"Tap to assign",-1))])):t.cell.controlType==="lfo"?(ce(),ve("div",Fk,[j("canvas",{ref_key:"graphCanvas",ref:s,class:"control-cell__mini-graph control-cell__mini-graph--interactive",width:"120",height:"50",onPointerdown:ne,onTouchstart:Oe(ne,["prevent"])},null,544),j("div",Uk,[j("span",{class:"control-cell__value mono",onClick:oe[2]||(oe[2]=Oe(Ee=>k("frequency"),["stop"])),title:"Tap to edit"},Te(A.value.toFixed(2))+" Hz",1),j("span",{class:"control-cell__value mono",onClick:oe[3]||(oe[3]=Oe(Ee=>k("amplitude"),["stop"])),title:"Tap to edit"},"amp "+Te(C.value.toFixed(2)),1)]),j("div",Ok,[(ce(),ve(st,null,Ht(["sine","saw","square","triangle"],Ee=>j("button",{key:Ee,class:dt(["control-cell__wf-btn",{"control-cell__wf-btn--active":H.value===Ee}]),onClick:Oe(De=>O(Ee),["stop"])},Te(w(Ee)),11,Bk)),64))]),j("div",kk,Te(f.value),1),h.value?(ce(),ve("div",zk,Te(h.value),1)):(ce(),ve("div",Vk,Te(d.value||"LFO"),1))])):t.cell.controlType==="timer"?(ce(),ve("div",$k,[j("canvas",{ref_key:"graphCanvas",ref:s,class:"control-cell__mini-graph",width:"120",height:"50"},null,512),j("div",Hk,Te(P.value?.toFixed(2)??"0.00")+" s",1),j("div",Gk,Te(f.value),1),h.value?(ce(),ve("div",Wk,Te(h.value),1)):(ce(),ve("div",Xk,Te(d.value||"Timer"),1))])):t.cell.controlType==="damper"?(ce(),ve("div",Yk,[j("canvas",{ref_key:"graphCanvas",ref:s,class:"control-cell__mini-graph",width:"120",height:"50"},null,512),j("div",qk,Te(P.value?.toFixed(3)??"0.000"),1),j("div",Kk,Te(f.value),1),h.value?(ce(),ve("div",Zk,Te(h.value),1)):(ce(),ve("div",jk,Te(d.value||"Damper"),1))])):t.cell.controlType==="random"?(ce(),ve("div",{key:5,class:dt(["control-cell__widget control-cell__anim-widget control-cell__random-widget",{"control-cell__random-widget--pulsing":K.value}])},[j("canvas",{ref_key:"graphCanvas",ref:s,class:"control-cell__mini-graph",width:"120",height:"50"},null,512),j("div",Jk,Te(P.value?.toFixed(3)??"0.000"),1),j("div",{class:"control-cell__lfo-readout",onPointerdown:oe[6]||(oe[6]=Oe(()=>{},["stop"])),onMousedown:oe[7]||(oe[7]=Oe(()=>{},["stop"]))},[j("span",{class:"control-cell__value mono control-cell__value--tappable",onClick:oe[4]||(oe[4]=Oe(Ee=>be("triggerInterval"),["stop"])),title:"Tap to edit"},"⏱ "+Te(te.value.toFixed(2))+"s",1),j("span",{class:"control-cell__value mono control-cell__value--tappable",onClick:oe[5]||(oe[5]=Oe(Ee=>be("damping"),["stop"])),title:"Tap to edit"},"◈ "+Te(D.value.toFixed(3)),1)],32),j("div",Qk,Te(f.value),1),h.value?(ce(),ve("div",e4,Te(h.value),1)):(ce(),ve("div",t4,Te(d.value||"Random"),1)),K.value?(ce(),ve("div",n4)):We("",!0)],2)):t.cell.controlType==="fft"?(ce(),ve("div",i4,[j("div",r4,[j("div",{class:"control-cell__fft-bar",style:nt({height:L.value.bass*100+"%"})},[...oe[28]||(oe[28]=[j("span",null,"B",-1)])],4),j("div",{class:"control-cell__fft-bar",style:nt({height:L.value.lowMid*100+"%"})},[...oe[29]||(oe[29]=[j("span",null,"LM",-1)])],4),j("div",{class:"control-cell__fft-bar",style:nt({height:L.value.mid*100+"%"})},[...oe[30]||(oe[30]=[j("span",null,"M",-1)])],4),j("div",{class:"control-cell__fft-bar",style:nt({height:L.value.high*100+"%"})},[...oe[31]||(oe[31]=[j("span",null,"H",-1)])],4)]),oe[32]||(oe[32]=j("div",{class:"control-cell__label"},"FFT",-1)),j("div",o4,Te(d.value||"Audio FFT"),1)])):t.cell.controlType==="knob"?(ce(),ve("div",{key:7,class:"control-cell__widget",onPointerdown:oe[8]||(oe[8]=Oe(()=>{},["stop"])),onMousedown:oe[9]||(oe[9]=Oe(()=>{},["stop"]))},[tt(Dy,{modelValue:p.value,min:x.value,max:M.value,step:y.value,size:null,"onUpdate:modelValue":Ue},null,8,["modelValue","min","max","step"]),j("div",s4,Te(f.value),1),j("div",a4,Te(d.value),1)],32)):t.cell.controlType==="slider"?(ce(),ve("div",{key:8,class:"control-cell__widget",onPointerdown:oe[11]||(oe[11]=Oe(()=>{},["stop"])),onMousedown:oe[12]||(oe[12]=Oe(()=>{},["stop"]))},[j("input",{type:"range",class:"control-cell__slider",min:x.value,max:M.value,step:y.value,value:p.value,onInput:oe[10]||(oe[10]=Ee=>Ue(Number(Ee.target.value)))},null,40,l4),j("div",u4,Te(p.value?.toFixed(2)),1),j("div",c4,Te(f.value),1),j("div",d4,Te(d.value),1)],32)):t.cell.controlType==="bang"?(ce(),ve("div",{key:9,class:"control-cell__widget",onPointerdown:oe[13]||(oe[13]=Oe(()=>{},["stop"])),onMousedown:oe[14]||(oe[14]=Oe(()=>{},["stop"]))},[j("button",{class:"control-cell__bang-btn",onClick:Oe(Ie,["stop"])},Te(f.value||"Bang!"),1),j("div",f4,Te(d.value),1)],32)):t.cell.controlType==="toggle"?(ce(),ve("div",{key:10,class:"control-cell__widget",onPointerdown:oe[16]||(oe[16]=Oe(()=>{},["stop"])),onMousedown:oe[17]||(oe[17]=Oe(()=>{},["stop"]))},[j("button",{class:dt(["control-cell__toggle-btn",{"control-cell__toggle-btn--active":!!p.value}]),onClick:oe[15]||(oe[15]=Oe(Ee=>Ue(!p.value),["stop"]))},Te(p.value?"ON":"OFF"),3),j("div",h4,Te(f.value),1),j("div",p4,Te(d.value),1)],32)):t.cell.controlType==="xypad"?(ce(),ve("div",{key:11,class:"control-cell__widget",onPointerdown:oe[20]||(oe[20]=Oe(()=>{},["stop"])),onMousedown:oe[21]||(oe[21]=Oe(()=>{},["stop"]))},[j("div",{class:"control-cell__xypad",ref_key:"xyPadRef",ref:a,onPointerdown:E},[j("div",{class:"control-cell__xypad-crosshair",style:nt(ee.value)},null,4),j("div",{class:"control-cell__xypad-glow",style:nt(ie.value)},null,4)],544),j("div",m4,[j("span",{class:"control-cell__value mono",onClick:oe[18]||(oe[18]=Oe(Ee=>b("x"),["stop"])),title:"Tap to edit"},"X: "+Te(q.value.toFixed(2)),1),j("span",{class:"control-cell__value mono",onClick:oe[19]||(oe[19]=Oe(Ee=>b("y"),["stop"])),title:"Tap to edit"},"Y: "+Te(J.value.toFixed(2)),1)]),g.value||v.value?(ce(),ve("div",g4,[g.value?(ce(),ve("div",v4,Te(g.value),1)):We("",!0),v.value?(ce(),ve("div",_4,Te(v.value),1)):We("",!0)])):We("",!0),j("div",y4,Te(f.value),1),!g.value&&!v.value?(ce(),ve("div",x4,Te(d.value),1)):We("",!0)],32)):t.cell.controlType==="accelerometer"?(ce(),ve("div",b4,[j("div",S4,[j("div",M4,[oe[33]||(oe[33]=j("span",{class:"control-cell__accel-label"},"X",-1)),j("div",w4,[j("div",{class:"control-cell__accel-bar",style:nt({width:fe("x")+"%",background:"#ff4757"})},null,4)])]),j("div",E4,[oe[34]||(oe[34]=j("span",{class:"control-cell__accel-label"},"Y",-1)),j("div",T4,[j("div",{class:"control-cell__accel-bar",style:nt({width:fe("y")+"%",background:"#2ed573"})},null,4)])])]),oe[35]||(oe[35]=j("div",{class:"control-cell__label"},"Accelerometer",-1)),j("div",A4,Te(d.value),1)])):We("",!0),(ce(),jt(rh,{to:"body"},[Se.value?(ce(),ve("div",{key:0,class:"value-edit-overlay",onClick:oe[25]||(oe[25]=Oe(Ee=>Se.value=!1,["self"]))},[j("div",C4,[j("div",R4,Te($.value),1),j("input",{ref_key:"valueEditInput",ref:U,type:"number",class:"value-edit-popup__input",value:G.value,step:F.value,onKeydown:oe[22]||(oe[22]=s1(Ee=>W(Number(Ee.target.value)),["enter"]))},null,40,I4),j("div",P4,[j("button",{class:"value-edit-popup__btn",onClick:oe[23]||(oe[23]=Ee=>Se.value=!1)},"Cancel"),j("button",{class:"value-edit-popup__btn value-edit-popup__btn--ok",onClick:oe[24]||(oe[24]=Ee=>W(Number(ue.$refs.valueEditInput?.value)))},"OK")])])])):We("",!0)]))],42,Dk))}},D4=or(N4,[["__scopeId","data-v-d1dd8399"]]),L4={class:"radial-menu__center"},F4={class:"radial-menu__segment-icon"},U4={class:"radial-menu__segment-label"},O4={class:"radial-menu__segment-icon"},B4={class:"radial-menu__segment-label"},Vg=100,xl=64,k4={__name:"RadialMenu",props:{categories:{type:Array,default:()=>[]}},emits:["select","cancel"],setup(t,{expose:e,emit:n}){const i=t,r=n,o=Ce(!1),s=Ce(0),a=Ce(0),l=Ce(null),u=Ce(null),c=Ae(()=>u.value?i.categories.find(p=>p.id===u.value)?.items||[]:[]);function d(m,p){s.value=m,a.value=p,l.value=null,u.value=null,o.value=!0}function f(){o.value=!1,l.value=null,u.value=null}function h(m,p){const x=m/p*2*Math.PI-Math.PI/2,M=Math.cos(x)*Vg,y=Math.sin(x)*Vg;return{transform:`translate(${M-xl/2}px, ${y-xl/2}px)`,width:xl+"px",height:xl+"px"}}function g(m){const p=m.clientX-s.value,x=m.clientY-a.value;if(Math.sqrt(p*p+x*x)<30){l.value=null;return}const y=Math.atan2(x,p),P=u.value?c.value:i.categories,L=P.length;if(L===0)return;const B=(y+Math.PI/2+2*Math.PI)%(2*Math.PI),_=Math.floor(B/(2*Math.PI/L))%L;l.value=P[_]?.id||null}function v(){if(!l.value){if(u.value){u.value=null,l.value=null;return}r("cancel"),f();return}if(!u.value){u.value=l.value,l.value=null;return}r("select",l.value),f()}return e({show:d,hide:f,visible:o}),(m,p)=>(ce(),jt(rh,{to:"body"},[o.value?(ce(),ve("div",{key:0,class:"radial-overlay",onPointerup:v,onPointermove:g,onTouchmove:p[0]||(p[0]=Oe(()=>{},["prevent"]))},[j("div",{class:"radial-menu",style:nt({left:s.value+"px",top:a.value+"px"})},[j("div",L4,Te(u.value?u.value:l.value||"⊕"),1),u.value?(ce(!0),ve(st,{key:1},Ht(c.value,(x,M)=>(ce(),ve("div",{key:x.id,class:dt(["radial-menu__segment",{"radial-menu__segment--active":l.value===x.id}]),style:nt(h(M,c.value.length))},[j("span",O4,Te(x.icon),1),j("span",B4,Te(x.label),1)],6))),128)):(ce(!0),ve(st,{key:0},Ht(t.categories,(x,M)=>(ce(),ve("div",{key:x.id,class:dt(["radial-menu__segment",{"radial-menu__segment--active":l.value===x.id}]),style:nt(h(M,t.categories.length))},[j("span",F4,Te(x.icon),1),j("span",U4,Te(x.label),1)],6))),128))],4)],32)):We("",!0)]))}},z4=or(k4,[["__scopeId","data-v-ffb4e9d0"]]),V4={class:"control-drawer__handle-arrow"},$4={class:"control-drawer__handle-actions"},H4=["title"],G4={class:"control-drawer__grid"},W4={class:"assign-popup"},X4={class:"assign-popup__header"},Y4={key:0,class:"assign-popup__empty"},q4=["onClick"],K4={class:"assign-popup__item-node"},Z4={class:"assign-popup__item-param"},j4={key:1,class:"assign-popup__skip-row"},J4={__name:"ControlDrawer",setup(t){const e=go(),n=Ce(!1),i=Ce(null),r=Ce(!1),o=Ce(null),s=Ce(!1),a=Ce(null),l=Ce(null);let u=null,c=!1;const d=[{id:"controls",label:"Controls",icon:"🎛️",items:[{id:"knob",label:"Knob",icon:"🎛️"},{id:"slider",label:"Slider",icon:"═══"},{id:"bang",label:"Bang",icon:"💥"},{id:"toggle",label:"Toggle",icon:"⏻"},{id:"xypad",label:"XY Pad",icon:"✛"}]},{id:"animation",label:"Animation",icon:"🌊",items:[{id:"lfo",label:"LFO",icon:"〜️"},{id:"timer",label:"Timer",icon:"⏱️"},{id:"damper",label:"Damper",icon:"🫧"},{id:"fft",label:"FFT",icon:"🎵"}]}],f=Ae(()=>e.getUnboundExposedParams()),h=Ae(()=>l.value||(s.value?"Route Output To…":"Assign Parameter"));ut(()=>e.isPerformanceMode,S=>{S&&g()},{immediate:!0});function g(){const S=e.getControlNodes(),R=new Set(e.perfGridCells.map(A=>A.boundNodeId).filter(Boolean));for(const A of S){if(R.has(A.id))continue;const H={knob:"knob",slider:"slider",bang:"bang",button:"toggle",toggle:"toggle"}[A.type];if(!H)continue;const w=e.addPerfCell(H),O=A.data?.def;if(O?.params){const T=Object.keys(O.params)[0];T&&e.bindPerfCell(w,A.id,T)}}}function v(S){c=!1;const R=S.touches?S.touches[0]:S,A=R.clientX,C=R.clientY;u=setTimeout(()=>{c=!0,i.value?.show(A,C)},400)}function m(){clearTimeout(u)}function p(){if(c)return;const S=e.addPerfCell("knob");o.value=S,r.value=!0}function x(S){const R={lfo:"lfo",timer:"timer",damper:"damper",fft:"fft",random:"random",accelerometer:"accelerometer",xypad:"xyPad"};if(R[S]){const C=R[S],H=e.addNode(C,{x:100+Math.random()*200,y:100+Math.random()*200});if(H){const w=e.addPerfCell(S);e.bindPerfCell(w,H,null),S==="accelerometer"&&B(H),o.value=w,s.value=!0,r.value=!0}return}const A=e.addPerfCell(S);o.value=A,s.value=!1,r.value=!0}function M(S){o.value=S,r.value=!0}function y(S,R,A,C){const H=e.nodes.find(z=>z.id===R);if(!H)return;const O=Qt(H.type)?.params?.[A];if(!O)return;const T=O.min??0,N=O.max??1;C==="X"?(e.setParam(S,"minX",T),e.setParam(S,"maxX",N)):(e.setParam(S,"minY",T),e.setParam(S,"maxY",N))}function P(S){if(!o.value)return;const R=e.perfGridCells.find(A=>A.id===o.value);if(!R){r.value=!1;return}if(s.value)if(R.controlType==="xypad"&&!a.value){e.bindPerfCellTarget(R.id,S.nodeId,S.paramKey),y(R.boundNodeId,S.nodeId,S.paramKey,"X"),e.addEdge({source:R.boundNodeId,sourceHandle:"x",target:S.nodeId,targetHandle:S.paramKey}),a.value="y",l.value="Assign Y Axis To…";return}else if(R.controlType==="xypad"&&a.value==="y")e.bindPerfCellTargetY(R.id,S.nodeId,S.paramKey),y(R.boundNodeId,S.nodeId,S.paramKey,"Y"),e.addEdge({source:R.boundNodeId,sourceHandle:"y",target:S.nodeId,targetHandle:S.paramKey}),a.value=null,l.value=null;else{e.bindPerfCellTarget(R.id,S.nodeId,S.paramKey);const A=R.controlType==="fft"?"bass":R.controlType==="accelerometer"?"x":"out";e.addEdge({source:R.boundNodeId,sourceHandle:A,target:S.nodeId,targetHandle:S.paramKey})}else e.bindPerfCell(R.id,S.nodeId,S.paramKey);r.value=!1,o.value=null,a.value=null,l.value=null}function L(S,R){e.reorderPerfCells(S,R)}function B(S){typeof DeviceMotionEvent<"u"&&(typeof DeviceMotionEvent.requestPermission=="function"?DeviceMotionEvent.requestPermission().then(R=>{R==="granted"&&_(S)}).catch(console.warn):_(S))}function _(S){window.addEventListener("devicemotion",R=>{const A=e.nodes.find(H=>H.id===S);if(!A)return;const C=R.accelerationIncludingGravity;C&&(A._accelX=(C.x??0)/9.81,A._accelY=(C.y??0)/9.81,A._accelZ=(C.z??0)/9.81)})}return(S,R)=>(ce(),ve("div",{class:dt(["control-drawer",{"control-drawer--collapsed":n.value}])},[j("div",{class:"control-drawer__handle",onClick:R[1]||(R[1]=A=>n.value=!n.value)},[j("span",V4,Te(n.value?"▲":"▼"),1),R[5]||(R[5]=j("span",{class:"control-drawer__handle-title"},"Controls",-1)),j("div",$4,[j("button",{class:dt(["control-drawer__lock-btn",{"control-drawer__lock-btn--unlocked":he(e).isPerfEditMode}]),onClick:R[0]||(R[0]=Oe(A=>he(e).togglePerfEditMode(),["stop"])),title:he(e).isPerfEditMode?"Lock Controls":"Unlock to Edit"},Te(he(e).isPerfEditMode?"🔓":"🔒"),11,H4)])]),Bo(j("div",G4,[(ce(!0),ve(st,null,Ht(he(e).perfGridCells,(A,C)=>(ce(),jt(D4,{key:A.id,cell:A,"edit-mode":he(e).isPerfEditMode,index:C,onDelete:H=>he(e).removePerfCell(A.id),onAssign:H=>M(A.id),onReorder:L},null,8,["cell","edit-mode","index","onDelete","onAssign"]))),128)),he(e).isPerfEditMode?(ce(),ve("div",{key:0,class:"control-drawer__add-cell",onPointerdown:v,onPointerup:m,onPointerleave:m,onTouchstart:Oe(v,["prevent"]),onClick:p},[...R[6]||(R[6]=[j("span",{class:"control-drawer__add-icon"},"➕",-1),j("span",{class:"control-drawer__add-label"},[Go("Hold for menu"),j("br"),Go("Tap to quick-add")],-1)])],32)):We("",!0)],512),[[ko,!n.value]]),tt(z4,{ref_key:"radialMenuRef",ref:i,categories:d,onSelect:x,onCancel:()=>{}},null,512),(ce(),jt(rh,{to:"body"},[r.value?(ce(),ve("div",{key:0,class:"assign-overlay",onClick:R[4]||(R[4]=Oe(A=>r.value=!1,["self"]))},[j("div",W4,[j("div",X4,Te(h.value),1),f.value.length===0?(ce(),ve("div",Y4,[R[7]||(R[7]=Go(" No unbound exposed parameters available. ",-1)),R[8]||(R[8]=j("br",null,null,-1)),R[9]||(R[9]=j("br",null,null,-1)),R[10]||(R[10]=j("span",{style:{"font-size":"11px",opacity:"0.7"}}," Expose parameters in Editor Mode first (🔗 icon in the inspector). ",-1)),R[11]||(R[11]=j("br",null,null,-1)),R[12]||(R[12]=j("br",null,null,-1)),s.value?(ce(),ve("button",{key:0,class:"assign-popup__skip-btn",onClick:R[2]||(R[2]=A=>r.value=!1)},"Skip — use standalone")):We("",!0)])):We("",!0),(ce(!0),ve(st,null,Ht(f.value,A=>(ce(),ve("div",{key:`${A.nodeId}::${A.paramKey}`,class:"assign-popup__item",onClick:C=>P(A)},[j("span",K4,Te(A.nodeLabel),1),R[13]||(R[13]=j("span",{class:"assign-popup__item-sep"},"→",-1)),j("span",Z4,Te(A.paramLabel),1)],8,q4))),128)),s.value&&f.value.length>0?(ce(),ve("div",j4,[j("button",{class:"assign-popup__skip-btn",onClick:R[3]||(R[3]=A=>r.value=!1)},"Skip — use standalone")])):We("",!0)])])):We("",!0)]))],2))}},Q4=or(J4,[["__scopeId","data-v-e9359103"]]),e5={class:"perf-view"},t5={class:"perf-view__toolbar"},n5={class:"perf-view__badge mono"},i5={class:"perf-view__zoom-level mono"},r5={key:0,class:"perf-view__histogram"},o5={__name:"PerformanceView",props:{fps:{type:Number,default:0}},setup(t,{expose:e}){const n=go(),i=Ce(null),r=Ce(null),o=Ce(null),s=Ce(!1),a=Ce(1),l=Ce(0),u=Ce(0);let c=!1,d=0,f=0,h=0,g=0;const v=Ae(()=>{const _=i.value;return _?`${_.width}×${_.height}`:"—"});function m(_){const S=_.deltaY>0?.9:1.1,R=Math.max(.1,Math.min(10,a.value*S)),A=r.value?.getBoundingClientRect();if(A){const C=_.clientX-A.left,H=_.clientY-A.top;l.value=C-(C-l.value)*(R/a.value),u.value=H-(H-u.value)*(R/a.value)}a.value=R}function p(_){(_.button===1||_.button===0)&&(c=!0,d=_.clientX,f=_.clientY,h=l.value,g=u.value,_.currentTarget?.setPointerCapture?.(_.pointerId))}function x(_){c&&(l.value=h+(_.clientX-d),u.value=g+(_.clientY-f))}function M(){c=!1}function y(){const _=r.value,S=i.value;if(!_||!S||!S.width||!S.height)return;const R=_.clientWidth,A=_.clientHeight,C=Math.min(R/S.width,A/S.height);a.value=C,l.value=(R-S.width*C)/2,u.value=(A-S.height*C)/2}function P(){a.value=1;const _=r.value,S=i.value;_&&S&&(l.value=(_.clientWidth-S.width)/2,u.value=(_.clientHeight-S.height)/2)}ut(s,async _=>{_&&(await fn(),L())});function L(){const _=i.value,S=o.value;if(!_||!S||!_.width)return;const R=document.createElement("canvas");R.width=_.width,R.height=_.height;const A=R.getContext("2d");A.drawImage(_,0,0);const H=A.getImageData(0,0,R.width,R.height).data,w=new Array(256).fill(0),O=new Array(256).fill(0),T=new Array(256).fill(0);for(let Q=0;Q<H.length;Q+=4)w[H[Q]]++,O[H[Q+1]]++,T[H[Q+2]]++;const N=Math.max(...w,...O,...T,1),z=S.getContext("2d"),X=S.width,Z=S.height;z.clearRect(0,0,X,Z);function ne(Q,de){z.strokeStyle=de,z.lineWidth=1,z.globalAlpha=.6,z.beginPath();for(let we=0;we<256;we++){const te=we/255*X,D=Z-Q[we]/N*Z;we===0?z.moveTo(te,D):z.lineTo(te,D)}z.stroke()}ne(w,"#ff4757"),ne(O,"#2ed573"),ne(T,"#1e90ff"),z.globalAlpha=1}let B=null;return ut(s,_=>{_?B=setInterval(L,500):clearInterval(B)},{immediate:!0}),e({perfCanvasRef:i}),(_,S)=>(ce(),ve("div",e5,[j("div",{class:"perf-view__renderer",ref_key:"viewportRef",ref:r,onWheel:Oe(m,["prevent"]),onPointerdown:p,onPointermove:x,onPointerup:M},[j("div",{class:"perf-view__canvas-wrap",style:nt({transform:`translate(${l.value}px, ${u.value}px) scale(${a.value})`,transformOrigin:"0 0"})},[j("canvas",{ref_key:"perfCanvasRef",ref:i,class:"perf-view__canvas"},null,512)],4)],544),j("div",t5,[j("span",n5,Te(v.value),1),j("span",{class:dt(["perf-view__badge perf-view__fps mono",{"perf-view__fps--ok":t.fps>=50}])},Te(t.fps)+" FPS",3),S[2]||(S[2]=j("div",{style:{flex:"1"}},null,-1)),j("span",i5,Te(Math.round(a.value*100))+"%",1),j("button",{class:"perf-view__tool-btn",onClick:y,title:"Fit to viewport"},"⊡"),j("button",{class:"perf-view__tool-btn",onClick:P,title:"1:1 pixel zoom"},"1:1"),j("button",{class:dt(["perf-view__tool-btn",{active:s.value}]),onClick:S[0]||(S[0]=R=>s.value=!s.value),title:"Toggle Histogram"},"📊",2),S[3]||(S[3]=j("div",{class:"perf-view__divider"},null,-1)),j("button",{class:"perf-view__exit-btn",onClick:S[1]||(S[1]=R=>he(n).togglePerformanceMode()),title:"Exit Performance Mode"}," ✕ Editor ")]),s.value?(ce(),ve("div",r5,[j("canvas",{ref_key:"histCanvas",ref:o,class:"perf-view__hist-canvas",width:"256",height:"60"},null,512)])):We("",!0),tt(Q4)]))}},s5=or(o5,[["__scopeId","data-v-d2bb927e"]]),a5=`// Passthrough — renders texture as-is\r
precision highp float;\r
varying vec2 vUv;\r
uniform sampler2D uTexture;\r
\r
void main() {\r
  gl_FragColor = texture2D(uTexture, vUv);\r
}\r
`,l5=`// Reeded Glass — ribbed/fluted glass refraction\r
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
`,u5=`// Chromatic Aberration — RGB channel offset\r
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
`,c5=`// Heightmap Displacement — displace pixels using a heightmap image\r
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
`,d5=`// Levels — shadows/midtones/highlights per-channel adjustment\r
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
`,f5=`// Surface Blur — edge-preserving bilateral filter approximation\r
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
`,h5=`// Blend — combine two images with blend modes\r
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
`,p5=`// Feedback Loop — blend current frame with previous frame\r
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
`,m5=`// UV Generator — outputs UV coordinates as color (R=U, G=V)\r
precision highp float;\r
varying vec2 vUv;\r
\r
void main() {\r
  gl_FragColor = vec4(vUv.x, vUv.y, 0.0, 1.0);\r
}\r
`,g5=`// UV Transform — scale, rotate, translate UVs\r
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
`,v5=`// UV Repeat — tile image with mirror/offset options\r
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
`,_5=`// UV Glitch — random block displacement of UV coordinates\r
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
`,y5=`// UV Polar — cartesian to polar and polar to cartesian conversion\r
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
`,x5=`varying vec2 vUv;\r
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
`,b5=`varying vec2 vUv;\r
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
`,S5=`varying vec2 vUv;\r
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
`,M5=`varying vec2 vUv;\r
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
`,w5=`varying vec2 vUv;\r
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
`,E5=`// Liquid Deform — swirling polar texture deformation\r
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
`,T5=`// ASCII Art — bitmap glyph post-processing effect\r
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
`,A5=`// ASCII Art v2 — bitmap glyphs with palette color matching\r
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
`,C5=`// Fisheye / Antifisheye — barrel and pincushion lens distortion\r
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
`,R5=`// Smooth Noise Contours — antialiased simplex noise contour lines\r
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
`,I5=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`,P5={passthrough:a5,reededGlass:l5,chromaticAberration:u5,displacement:c5,levels:d5,surfaceBlur:f5,blend:h5,feedback:p5,uvGenerator:m5,uvTransform:g5,uvRepeat:v5,uvGlitch:_5,uvPolar:y5,diffusion:x5,xerox:b5,crt:S5,motionBlur:M5,dithering:w5,liquidDeform:E5,ascii:T5,asciiV2:A5,fisheye:C5,noiseContours:R5},$g=20;class N5{constructor(){this.renderer=null,this.scene=null,this.camera=null,this.quad=null,this.fbos={},this.materials={},this.textures={},this.feedbackFBOs={},this.width=512,this.height=512,this.isInitialized=!1}init(e,n,i){this.width=n||512,this.height=i||512,this.renderer=new PA({canvas:e,alpha:!0,preserveDrawingBuffer:!0,antialias:!1}),this.renderer.setSize(this.width,this.height),this.renderer.autoClear=!1,this.camera=new Sh(-1,1,1,-1,0,1);const r=new wa(2,2);this.scene=new gS,this.quad=new _i(r,null),this.scene.add(this.quad),this.isInitialized=!0}resize(e,n){this.width=e,this.height=n,this.renderer&&this.renderer.setSize(e,n);for(const[i,r]of Object.entries(this.fbos))r.setSize(e,n);for(const[i,r]of Object.entries(this.feedbackFBOs))r.current.setSize(e,n),r.previous.setSize(e,n)}setInputTexture(e,n){n.colorSpace=Pr,n.minFilter=Ct,n.magFilter=Ct,this.textures[e]=n}getOrCreateFBO(e){if(this.fbos[e])return this.fbos[e];if(Object.keys(this.fbos).length>=$g)return console.warn(`Max FBO count (${$g}) reached. Cannot create FBO for node ${e}`),null;const n=new bn(this.width,this.height,{minFilter:Ct,magFilter:Ct,format:_n,type:gn,colorSpace:Pr});return this.fbos[e]=n,n}getOrCreateFeedbackFBOs(e){if(this.feedbackFBOs[e])return this.feedbackFBOs[e];const n={minFilter:Ct,magFilter:Ct,format:_n,type:gn};return this.feedbackFBOs[e]={current:new bn(this.width,this.height,n),previous:new bn(this.width,this.height,n)},this.feedbackFBOs[e]}getOrCreateMaterial(e,n,i){let r=P5[n];if(!r)return this.getOrCreateMaterial(e,"passthrough",i);if(n!=="passthrough"&&n!=="feedback"){const a=r.includes("uniform sampler2D uIn;"),l=r.includes("uniform sampler2D uTexture;");if(a||l){const u=a?"uIn":"uTexture";r=r.replace("void main()",`uniform float uBlendAmount;
void main()`),r=r.replace(/gl_FragColor\s*=\s*([^;]+);([^;]*)$/,`vec4 effectColor = $1;
  vec4 originalColor = texture2D(${u}, vUv);
  gl_FragColor = mix(originalColor, effectColor, uBlendAmount);$2`)}}if(this.materials[e]&&this.materials[e]._shaderKey===n){const a=this.materials[e];let l=!1;for(const[u,c]of Object.entries(i))a.uniforms[u]?a.uniforms[u].value=c:(a.uniforms[u]={value:c},l=!0);return l&&(a.needsUpdate=!0),a}this.materials[e]&&this.materials[e].dispose();const o={};for(const[a,l]of Object.entries(i))o[a]={value:l};const s=new Zn({vertexShader:I5,fragmentShader:r,uniforms:o,depthTest:!1,depthWrite:!1});return s._shaderKey=n,this.materials[e]=s,s}renderNode(e,n,i){this.quad.material=n,i?this.renderer.setRenderTarget(i):this.renderer.setRenderTarget(null),this.renderer.clear(),this.renderer.render(this.scene,this.camera)}removeNodeResources(e){this.fbos[e]&&(this.fbos[e].dispose(),delete this.fbos[e]),this.materials[e]&&(this.materials[e].dispose(),delete this.materials[e]),this.textures[e]&&(this.textures[e].dispose(),delete this.textures[e]),this.feedbackFBOs[e]&&(this.feedbackFBOs[e].current.dispose(),this.feedbackFBOs[e].previous.dispose(),delete this.feedbackFBOs[e])}execute(e,n,i,r,o,s,a){if(!this.isInitialized||!this.renderer)return;const l={};for(const h of n)l[h.id]=h;const u={};for(const h of i)u[h.target]||(u[h.target]=[]),u[h.target].push({sourceNodeId:h.source,sourceHandle:h.sourceHandle,targetHandle:h.targetHandle});let c=null;const d={};for(const h of e){const g=l[h];if(!g)continue;const v=Qt(g.type);if(!v)continue;const m=r[h]||{};if(g.type==="imageInput"||g.type==="imageOutput"||g.type==="pixelSort")continue;if(m._bypass){const _=u[h]||[];for(const S of _){const R=l[S.sourceNodeId];if(!R)continue;let A=null;if(R.type==="imageInput"?A=this.textures[S.sourceNodeId]||null:this.fbos[S.sourceNodeId]&&(A=this.fbos[S.sourceNodeId].texture),A){const C=this.getOrCreateFBO(h);if(C){const H=this.getOrCreateMaterial(h,"passthrough",{uTexture:A});this.renderNode(h,H,C),c=C}break}}d[h]=0;continue}const p=u[h]||[],x={uTime:a,uResolution:new Et(this.width,this.height)};for(const _ of v.inputs)if(_.type==="image"){const S="u"+_.id.charAt(0).toUpperCase()+_.id.slice(1);x[S+"Connected"]=!1,x[S]=null}let M=!1;for(const _ of p){const S=l[_.sourceNodeId];if(!S||!Qt(S.type))continue;let A=null;if(S.type==="imageInput"||S.type==="uiImageSlot"||S.type==="webcamInput"?A=this.textures[_.sourceNodeId]||null:this.fbos[_.sourceNodeId]&&(A=this.fbos[_.sourceNodeId].texture),A&&(M=!0,v.inputs.find(H=>H.id===_.targetHandle))){const H="u"+_.targetHandle.charAt(0).toUpperCase()+_.targetHandle.slice(1);x[H]=A,x[H+"Connected"]=!0}if(o[_.sourceNodeId]){const C=o[_.sourceNodeId][_.sourceHandle];if(C!==void 0){const H=v.inputs.find(O=>O.id===_.targetHandle),w=!H&&v.params[_.targetHandle];(H||w)&&(m[_.targetHandle]=C)}}}if(!M&&v.inputs.some(_=>_.type==="image"))continue;for(const[_,S]of Object.entries(m)){const R=v.params[_];if(!R)continue;const A="u"+_.charAt(0).toUpperCase()+_.slice(1);if(R.type==="float"||R.type==="int")x[A]=Number(S);else if(R.type==="bool")x[A]=S?1:0;else if(R.type==="select"){const C=R.options||[];x[A]=C.indexOf(S)}else R.type==="color"&&(x[A]=new wt(S))}if(g.type==="feedbackLoop"){const _=this.getOrCreateFeedbackFBOs(h);x.uPreviousFrame=_.previous.texture,x.uDecay=m.decay??.9,x.uBlendMode=["normal","add","multiply"].indexOf(m.blendMode??"normal");const S=this.getOrCreateMaterial(h,"feedback",x),R=Math.min(m.iterations??1,100);for(let A=0;A<R;A++){this.renderNode(h,S,_.current);const C=_.previous;_.previous=_.current,_.current=C,S.uniforms.uPreviousFrame.value=_.previous.texture}this.fbos[h]=_.previous,c=_.previous;continue}const y=v.shaderKey;if(!y)continue;const P=this.getOrCreateFBO(h);if(!P)continue;const L=performance.now(),B=this.getOrCreateMaterial(h,y,x);this.renderNode(h,B,P),d[h]=performance.now()-L,c=P}const f=s&&this.fbos[s]?this.fbos[s]:c;if(f){this.materials.__preview__&&(this.materials.__preview__.uniforms.uTexture.value=f.texture);const h=this.getOrCreateMaterial("__preview__","passthrough",{uTexture:f.texture});this.renderNode("__preview__",h,null)}return this.perfTimings=d,d}readPixels(e){const n=this.fbos[e];if(!n||!this.renderer)return null;const i=new Uint8Array(this.width*this.height*4);return this.renderer.readRenderTargetPixels(n,0,0,this.width,this.height,i),{pixels:i,width:this.width,height:this.height}}getScaledPixels(e,n,i){const r=this.getNodeTexture(e);if(!r||!this.renderer)return null;(!this._previewFBO||this._previewFBO.width!==n||this._previewFBO.height!==i)&&(this._previewFBO&&this._previewFBO.dispose(),this._previewFBO=new bn(n,i,{minFilter:Ct,magFilter:Ct,format:_n,type:gn}));const o=this.getOrCreateMaterial("__preview_scale__","passthrough",{uTexture:r});this.renderNode("__preview_scale__",o,this._previewFBO);const s=new Uint8Array(n*i*4);return this.renderer.readRenderTargetPixels(this._previewFBO,0,0,n,i,s),{pixels:s,width:n,height:i}}getNodeTexture(e){return this.textures[e]?this.textures[e]:this.fbos[e]?this.fbos[e].texture:null}removeNode(e){this.fbos[e]&&(this.fbos[e].dispose(),delete this.fbos[e]),this.materials[e]&&(this.materials[e].dispose(),delete this.materials[e]),this.textures[e]&&(this.textures[e].dispose(),delete this.textures[e]),this.feedbackFBOs[e]&&(this.feedbackFBOs[e].current.dispose(),this.feedbackFBOs[e].previous.dispose(),delete this.feedbackFBOs[e])}dispose(){for(const e of Object.values(this.fbos))e.dispose();for(const e of Object.values(this.materials))e.dispose();for(const e of Object.values(this.textures))e.dispose();for(const e of Object.values(this.feedbackFBOs))e.current.dispose(),e.previous.dispose();this.fbos={},this.materials={},this.textures={},this.feedbackFBOs={},this.renderer&&this.renderer.dispose()}}class D5{constructor(){this.isRunning=!1,this.startTime=0,this.lastTime=0,this.time=0,this.deltaTime=0,this.frameId=null,this.customWindow=null,this.callbacks=[]}onFrame(e){return this.callbacks.push(e),()=>{this.callbacks=this.callbacks.filter(n=>n!==e)}}start(){this.isRunning||(this.isRunning=!0,this.startTime=performance.now()/1e3,this.lastTime=this.startTime,this._tick())}stop(){this.isRunning=!1,this.frameId!==null&&(cancelAnimationFrame(this.frameId),this.frameId=null)}reset(){this.startTime=performance.now()/1e3,this.time=0,this.deltaTime=0}_tick(){if(!this.isRunning)return;const e=performance.now()/1e3;this.deltaTime=e-this.lastTime,this.time=e-this.startTime,this.lastTime=e;for(const i of this.callbacks)i(this.time,this.deltaTime);const n=this.customWindow||window;this.frameId=n.requestAnimationFrame(()=>this._tick())}}let bl=null,Er=null,Vl=null,Xf=!1;function Ly(){if(!bl)try{const t=window.AudioContext||window.webkitAudioContext;bl=new t,Er=bl.createAnalyser(),Er.fftSize=512,Er.smoothingTimeConstant=.8,Vl=new Uint8Array(Er.frequencyBinCount),navigator.mediaDevices.getUserMedia({audio:!0,video:!1}).then(e=>{bl.createMediaStreamSource(e).connect(Er),Xf=!0}).catch(e=>console.warn("Audio FFT access denied or error:",e))}catch(t){console.warn("Audio context not supported",t)}}function L5(t,e){const n={},i={};for(const s of t)n[s.id]=0,i[s.id]=[];for(const s of e)i[s.source]&&(i[s.source].push(s.target),n[s.target]=(n[s.target]||0)+1);const r=[];for(const s of t)n[s.id]===0&&r.push(s.id);const o=[];for(;r.length>0;){const s=r.shift();o.push(s);for(const a of i[s]||[])n[a]--,n[a]===0&&r.push(a)}return o.length!==t.length&&console.warn("Cycle detected in graph — some nodes skipped"),o}function F5(t,e,n){const i={};for(const r of e)if(r.target===t){const o=n[r.source];o&&(i[r.targetHandle]={sourceNodeId:r.source,sourceHandleId:r.sourceHandle,value:o[r.sourceHandle]})}return i}function U5(t,e,n,i,r,o){const s={};for(const l of e)s[l.id]=l;const a={};for(const l of t){const u=s[l];if(!u)continue;const c=Qt(u.type);if(!c||(c.category==="image"||c.category==="uv")&&u.type!=="preview"&&u.type!=="webcamInput")continue;const d=i[l]||{},f=F5(l,n,a),h={};switch(u.type){case"lfo":{const g=d.frequency??1,v=d.amplitude??1,m=d.offset??0,p=(d.phase??0)*Math.PI/180,x=r*g*Math.PI*2+p,M=d.waveform??"sine";let y=0;M==="sine"?y=Math.sin(x):M==="saw"?y=2*(x/(Math.PI*2)%1)-1:M==="square"?y=Math.sin(x)>=0?1:-1:M==="triangle"&&(y=2*Math.abs(2*(x/(Math.PI*2)%1)-1)-1),h.out=y*v+m;break}case"timer":{const g=d.speed??1,v=d.loop??!1,m=d.loopDuration??5;let p=r*g;v&&m>0&&(p=p%m),h.out=p;break}case"random":{const g=d.min??0,v=d.max??1,m=d.seed??42,p=d.triggerInterval??.5,x=Math.max(0,Math.min(.999,d.damping??0)),M=f.trigger?.value??0,y=n.some(_=>_.target===l&&_.targetHandle==="trigger"),P=u._prevRandTrigger??0;let L=!1;if(y)M>0&&P<=0&&(L=!0),u._prevRandTrigger=M;else{const _=u._lastFireTime??-p;r-_>=p&&(L=!0)}if(L||u._randTarget===void 0){u._randSeedCounter=(u._randSeedCounter??0)+1;const _=Math.sin(m+u._randSeedCounter*12.9898)*43758.5453,S=_-Math.floor(_);u._randTarget=g+S*(v-g),u._lastFireTime=r}const B=u._randCurrentValue??u._randTarget;x>0?u._randCurrentValue=B+(u._randTarget-B)*(1-x):u._randCurrentValue=u._randTarget,h.out=u._randCurrentValue;break}case"damper":{const g=f.target?.value??0,v=Math.max(0,Math.min(.999,d.smoothing??.9)),m=u._damperValue??g,p=m+(g-m)*(1-v);u._damperValue=p,h.out=p;break}case"fft":{Xf||Ly();const g=d.smoothing??.8,v=d.gain??1;if(Xf&&Er&&Vl){Er.smoothingTimeConstant=g,Er.getByteFrequencyData(Vl);let m=0,p=0,x=0,M=0;for(let y=0;y<256;y++){const P=Vl[y]/255;y<=10?m+=P:y<=50?p+=P:y<=120?x+=P:M+=P}h.bass=Math.min(m/11*v,1),h.lowMid=Math.min(p/40*v,1),h.mid=Math.min(x/70*v,1),h.high=Math.min(M/135*v,1)}else h.bass=0,h.lowMid=0,h.mid=0,h.high=0;break}case"button":case"bang":{h.out=u._triggered?1:0,u._triggered=!1;break}case"onStart":{u._hasTriggered?h.out=0:(u._hasTriggered=!0,h.out=1);break}case"toggle":{const g=f.trigger?.value??0,v=u._prevTriggerVal??0;g>=.5&&v<.5&&(d.state=!d.state),u._prevTriggerVal=g,h.out=d.state?1:0;break}case"edgeTrigger":{const g=f.in?.value??!1,v=u._prevEdgeVal??!1,m=d.mode??"rising";let p=!1;m==="rising"&&!v&&g&&(p=!0),m==="falling"&&v&&!g&&(p=!0),m==="both"&&v!==g&&(p=!0),h.out=p?1:0,u._prevEdgeVal=g;break}case"webcamInput":{h.trigger=f.trigger?.value??0;break}case"accelerometer":{const g=d.sensitivity??1,v=d.smoothing??.5,m=u._accelX??0,p=u._accelY??0,x=u._accelZ??0,M=u._smoothX??0,y=u._smoothY??0,P=u._smoothZ??0;u._smoothX=M+(m*g-M)*(1-v),u._smoothY=y+(p*g-y)*(1-v),u._smoothZ=P+(x*g-P)*(1-v),h.x=u._smoothX,h.y=u._smoothY,h.z=u._smoothZ;break}case"xyPad":{const g=d.x??.5,v=d.y??.5,m=d.minX??0,p=d.maxX??1,x=d.minY??0,M=d.maxY??1;h.x=m+g*(p-m),h.y=x+v*(M-x);break}case"changeTrigger":{const g=f.in?.value??0,v=d.threshold??.1;u._lastTriggerVal===void 0&&(u._lastTriggerVal=g);const m=u._lastTriggerVal;let p=!1;Math.abs(g-m)>=v&&(p=!0,u._lastTriggerVal=g),h.out=p?1:0;break}case"slider":case"knob":{const g=d.value??.5,v=d.outputType??"float";h.out=v==="int"?Math.round(g):g;break}case"compare":{const g=f.a?.value??0,v=f.b?.value??0,m=d.op??">";let p=!1;switch(m){case">":p=g>v;break;case"<":p=g<v;break;case">=":p=g>=v;break;case"<=":p=g<=v;break;case"==":p=g===v;break;case"!=":p=g!==v;break}h.out=p;break}case"valueCondition":{const g=f.cond?.value??!1,v=f.trueVal?.value??d.defaultTrue??1,m=f.falseVal?.value??d.defaultFalse??0;h.out=g?v:m;break}case"mathAdd":{const g=f.a?.value??0,v=f.b?.value??0;h.out=g+v;break}case"mathMultiply":{const g=f.a?.value??0,v=f.b?.value??1;h.out=g*v;break}case"mathDivide":{const g=f.a?.value??0,v=f.b?.value??1;h.out=v!==0?g/v:0;break}case"mathSqrt":{const g=f.a?.value??0;h.out=Math.sqrt(Math.abs(g));break}case"mathMap":{const g=f.value?.value??0,v=d.inMin??0,m=d.inMax??1,p=d.outMin??0,x=d.outMax??1,M=m!==v?(g-v)/(m-v):0;h.out=p+M*(x-p);break}case"mathClamp":{const g=f.value?.value??0,v=d.min??0,m=d.max??1;h.out=Math.min(Math.max(g,v),m);break}case"mathWrap":{const g=f.value?.value??0,v=d.min??0,p=(d.max??1)-v;if(p<=0){h.out=v;break}h.out=v+((g-v)%p+p)%p;break}case"floatToInt":{const g=f.in?.value??0,v=d.mode??"round";let m;v==="floor"?m=Math.floor(g):v==="ceil"?m=Math.ceil(g):v==="truncate"?m=Math.trunc(g):m=Math.round(g);const p=d.clampMin??-2147483648,x=d.clampMax??2147483647;h.out=Math.min(Math.max(m,p),x);break}case"intToFloat":{h.out=Number(f.in?.value??0);break}case"numberMonitor":{h.out=f.in?.value??0;break}}a[l]=h}return a}function O5(t,e){const n={};for(const i of e)n[i.id]=i;return t.filter(i=>{const r=n[i];if(!r)return!1;const o=Qt(r.type);return o?o.category==="image"||o.category==="uv":!1})}const B5={id:"app"},k5={class:"main-layout"},z5={class:"preview-background"},V5={__name:"App",setup(t){const e=go(),n=Ce(null),i=Ce(null),r=Ce(null),o=Ce(null);function s(){Ly(),window.removeEventListener("click",s),window.removeEventListener("keydown",s)}let a=null,l=null,u=null;const c=Ce(0);let d=0,f=0;const h={};let g=null,v=null,m=null;function p(){if(v&&!v.closed){v.focus();return}if(v=window.open("","ImageManglerPopup","width=800,height=600,menubar=no,toolbar=no,location=no,status=no"),!v){alert("Popup blocked! Please allow popups to open the external renderer.");return}v.document.write(`
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
  `),v.document.close(),setTimeout(()=>{const C=v.document.getElementById("out");C&&(m=C.getContext("2d"))},50),l&&(l.customWindow=v),v.addEventListener("beforeunload",()=>{l&&(l.customWindow=null),v=null,m=null})}En(async()=>{await fn(),window.addEventListener("click",s),window.addEventListener("keydown",s),window.addEventListener("keydown",x),(/Mobi|Android/i.test(navigator.userAgent)||window.innerWidth<768)&&(e.isPerformanceMode=!0);const C=i.value?.getCanvas?.();C&&(a=new N5,a.init(C,512,512)),r.value&&(g=r.value.getContext("2d")),e.onNodeRemoved(H=>{a&&a.removeNodeResources(H),delete h[H]}),f=performance.now(),l=new D5,u=l.onFrame((H,w)=>{if(!e.isRendering)return;d++;const O=performance.now();O-f>=500&&(c.value=Math.round(d/(O-f)*1e3),d=0,f=O),M(H)}),l.start(),await e.loadFromLocalStorage()}),mo(()=>{u&&u(),l&&l.stop(),a&&a.dispose(),window.removeEventListener("keydown",x)});function x(C){C.target.tagName==="INPUT"||C.target.tagName==="TEXTAREA"||C.target.tagName==="SELECT"||(C.key==="p"||C.key==="P")&&(C.preventDefault(),e.togglePerformanceMode())}function M(C,H){if(!a?.isInitialized)return;const w=e.nodes,O=e.edges,T=e.nodeParams;if(w.length===0){g&&r.value&&g.clearRect(0,0,r.value.width,r.value.height);return}const N=L5(w,O),z=U5(N,w,O,T,C);e.dataOutputs=z;const X=["lfo","timer","damper","fft","xypad","accelerometer"];for(const Q of e.perfGridCells){if(!Q.boundNodeId||!X.includes(Q.controlType))continue;const de=z[Q.boundNodeId];de&&(Q.controlType==="xypad"?(Q.boundParamKey&&Q.boundTargetNodeId&&e.setParam(Q.boundTargetNodeId,Q.boundParamKey,de.x??.5),Q.boundParamKeyY&&Q.boundTargetNodeIdY&&e.setParam(Q.boundTargetNodeIdY,Q.boundParamKeyY,de.y??.5)):Q.controlType==="fft"?Q.boundParamKey&&Q.boundTargetNodeId&&e.setParam(Q.boundTargetNodeId,Q.boundParamKey,de.bass??0):Q.controlType==="accelerometer"?Q.boundParamKey&&Q.boundTargetNodeId&&e.setParam(Q.boundTargetNodeId,Q.boundParamKey,de.x??0):Q.boundParamKey&&Q.boundTargetNodeId&&e.setParam(Q.boundTargetNodeId,Q.boundParamKey,de.out??0))}const Z=O5(N,w),ne=a.execute(Z,w,O,T,z,e.previewNodeId,C);if(e.perfTimings=ne||{},e.previewMode==="background"&&g&&r.value){const Q=i.value?.getCanvas?.();Q&&Q.width>0&&Q.height>0&&((r.value.width!==Q.width||r.value.height!==Q.height)&&(r.value.width=Q.width,r.value.height=Q.height),g.clearRect(0,0,r.value.width,r.value.height),g.drawImage(Q,0,0))}if(v&&!v.closed&&m){const Q=i.value?.getCanvas?.();if(Q&&Q.width>0&&Q.height>0){const de=m.canvas;(de.width!==Q.width||de.height!==Q.height)&&(de.width=Q.width,de.height=Q.height),m.clearRect(0,0,de.width,de.height),m.drawImage(Q,0,0)}}if(e.isPerformanceMode&&o.value?.perfCanvasRef){const Q=i.value?.getCanvas?.(),de=o.value.perfCanvasRef;if(Q&&Q.width>0&&Q.height>0){(de.width!==Q.width||de.height!==Q.height)&&(de.width=Q.width,de.height=Q.height);const we=de.getContext("2d");we.clearRect(0,0,de.width,de.height),we.drawImage(Q,0,0)}}}function y(C){if(n.value&&n.value.addNodeAtCenter)n.value.addNodeAtCenter(C);else{const H=300+Math.random()*200,w=200+Math.random()*200;e.addNode(C,{x:H,y:w})}}function P(C,H){if(!a)return;h[C]=H;let w;H.isVideo?(w=new AS(H.img),w.minFilter=Ct,w.magFilter=Ct,w.format=_n):(w=new nn(H.img),w.needsUpdate=!0),a.setInputTexture(C,w),L(C),a.resize(H.width,H.height),i.value&&(i.value.width=H.width,i.value.height=H.height)}function L(C){if(!a)return;const H=new Set,w=[C];for(;w.length;){const O=w.shift();if(!H.has(O)){H.add(O);for(const T of e.edges)T.source===O&&!H.has(T.target)&&(a.fbos[T.target]&&(a.fbos[T.target].dispose(),delete a.fbos[T.target]),a.materials[T.target]&&(a.materials[T.target].dispose(),delete a.materials[T.target]),w.push(T.target))}}}function B(C){if(!a)return;const H=e.edges.filter(te=>te.target===C);let w=null;for(const te of H)if(te.targetHandle==="in"){w=te.source;break}if(!w){alert("No image connected to output node");return}const O=a.readPixels(w);if(!O){alert("Could not read pixels — make sure an image is connected and the pipeline has run");return}const{pixels:T,width:N,height:z}=O,Z=(e.nodeParams[C]||{}).filename||e.projectTitle||"output",ne=document.createElement("canvas");ne.width=N,ne.height=z;const Q=ne.getContext("2d"),de=Q.createImageData(N,z);for(let te=0;te<z;te++)for(let D=0;D<N;D++){const K=((z-1-te)*N+D)*4,se=(te*N+D)*4;de.data[se]=T[K],de.data[se+1]=T[K+1],de.data[se+2]=T[K+2],de.data[se+3]=T[K+3]}Q.putImageData(de,0,0);const we=Z.replace(/[^a-zA-Z0-9_-]/g,"_");ne.toBlob(te=>{if(!te)return;const D=URL.createObjectURL(te),K=document.createElement("a");K.href=D,K.download=`${we}.png`,K.click(),URL.revokeObjectURL(D)},"image/png")}function _(){e.saveToLocalStorage()}async function S(){await e.loadFromLocalStorage()||alert("No saved graph found")}function R(C){e.loadGraph(C)||alert("Failed to import graph — invalid JSON")}function A(){confirm("Clear entire graph? This cannot be undone.")&&(e.resetGraph(),Object.keys(h).forEach(C=>delete h[C]))}return(C,H)=>(ce(),ve("div",B5,[Bo(tt(zA,{"is-rendering":he(e).isRendering,"preview-mode":he(e).previewMode,"project-title":he(e).projectTitle,"show-shadows":he(e).showShadows,"is-performance-mode":he(e).isPerformanceMode,onSave:_,onLoad:S,onDownload:H[0]||(H[0]=w=>he(e).downloadGraph()),onImport:R,onReset:A,onToggleRender:H[1]||(H[1]=w=>he(e).toggleRendering()),onTogglePreview:H[2]||(H[2]=w=>he(e).togglePreviewMode()),onToggleShadows:H[3]||(H[3]=w=>he(e).showShadows=!he(e).showShadows),onOpenPopup:p,onUpdateTitle:H[4]||(H[4]=w=>he(e).projectTitle=w),onUpdateBgOpacity:H[5]||(H[5]=w=>he(e).bgOpacity=w),onTogglePerformance:H[6]||(H[6]=w=>he(e).togglePerformanceMode())},null,8,["is-rendering","preview-mode","project-title","show-shadows","is-performance-mode"]),[[ko,!he(e).isPerformanceMode]]),he(e).isPerformanceMode?(ce(),jt(s5,{key:0,ref_key:"perfViewRef",ref:o,fps:c.value},null,8,["fps"])):We("",!0),Bo(j("div",k5,[tt(JA,{onAddNode:y}),j("div",{class:dt(["editor-area",{"editor-area--bg-mode":he(e).previewMode==="background"}])},[Bo(j("div",z5,[j("canvas",{ref_key:"bgCanvasRef",ref:r},null,512),j("div",{class:"preview-background__overlay",style:nt({opacity:he(e).bgOpacity})},null,4)],512),[[ko,he(e).previewMode==="background"]]),tt(BB,{ref_key:"editorRef",ref:n,class:dt({"editor-canvas--no-shadows":!he(e).showShadows}),onImageLoaded:P,onExportImage:B},null,8,["class"]),Bo(tt(YB,{ref_key:"previewRef",ref:i,"is-rendering":he(e).isRendering,fps:c.value,"preview-mode":he(e).previewMode},null,8,["is-rendering","fps","preview-mode"]),[[ko,he(e).previewMode==="anchored"||he(e).previewMode==="floating"]])],2),tt(Nk)],512),[[ko,!he(e).isPerformanceMode]])]))}},Fy=u1(V5);Fy.use(f1());Fy.mount("#app");
