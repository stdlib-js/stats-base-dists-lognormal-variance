// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";function t(t){return t!=t}var r=Math.floor,n=Math.ceil;function e(t){return t<0?n(t):r(t)}var o=Number.NEGATIVE_INFINITY,i=Number.POSITIVE_INFINITY;function a(t){return t===i||t===o}var u,f="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),c=Object.prototype.toString,l=Object.prototype.hasOwnProperty,y="function"==typeof Symbol?Symbol.toStringTag:"";u=f&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e,o,i;if(null==t)return c.call(t);n=t[y],i=y,r=null!=(o=t)&&l.call(o,i);try{t[y]=void 0}catch(r){return c.call(t)}return e=c.call(t),r?t[y]=n:delete t[y],e}:function(t){return c.call(t)};var p,v=u,b="function"==typeof Uint32Array,d="function"==typeof Uint32Array?Uint32Array:null,A="function"==typeof Uint32Array?Uint32Array:void 0;p=function(){var t,r,n;if("function"!=typeof d)return!1;try{r=new d(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(b&&n instanceof Uint32Array||"[object Uint32Array]"===v(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?A:function(){throw new Error("not implemented")};var _,s=p,w="function"==typeof Float64Array,m="function"==typeof Float64Array?Float64Array:null,h="function"==typeof Float64Array?Float64Array:void 0;_=function(){var t,r,n;if("function"!=typeof m)return!1;try{r=new m([1,3.14,-3.14,NaN]),n=r,t=(w&&n instanceof Float64Array||"[object Float64Array]"===v(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?h:function(){throw new Error("not implemented")};var U,g=_,j="function"==typeof Uint8Array,I="function"==typeof Uint8Array?Uint8Array:null,O="function"==typeof Uint8Array?Uint8Array:void 0;U=function(){var t,r,n;if("function"!=typeof I)return!1;try{r=new I(r=[1,3.14,-3.14,256,257]),n=r,t=(j&&n instanceof Uint8Array||"[object Uint8Array]"===v(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?O:function(){throw new Error("not implemented")};var S,N=U,E="function"==typeof Uint16Array,F="function"==typeof Uint16Array?Uint16Array:null,T="function"==typeof Uint16Array?Uint16Array:void 0;S=function(){var t,r,n;if("function"!=typeof F)return!1;try{r=new F(r=[1,3.14,-3.14,65536,65537]),n=r,t=(E&&n instanceof Uint16Array||"[object Uint16Array]"===v(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?T:function(){throw new Error("not implemented")};var H,G={uint16:S,uint8:N};(H=new G.uint16(1))[0]=4660;var P,L,V=52===new G.uint8(H.buffer)[0];!0===V?(P=1,L=0):(P=0,L=1);var W={HIGH:P,LOW:L},x=new g(1),M=new s(x.buffer),k=W.HIGH,Y=W.LOW;function C(t,r){return x[0]=r,t[0]=M[k],t[1]=M[Y],t}function q(t,r){return 1===arguments.length?C([0,0],t):C(t,r)}var z,B,D=!0===V?1:0,J=new g(1),K=new s(J.buffer);function Q(t){return J[0]=t,K[D]}!0===V?(z=1,B=0):(z=0,B=1);var R={HIGH:z,LOW:B},X=new g(1),Z=new s(X.buffer),$=R.HIGH,tt=R.LOW;function rt(t,r){return Z[$]=t,Z[tt]=r,X[0]}var nt,et=[0,0],ot="function"==typeof Object.defineProperty?Object.defineProperty:null,it=Object.defineProperty,at=Object.prototype,ut=at.toString,ft=at.__defineGetter__,ct=at.__defineSetter__,lt=at.__lookupGetter__,yt=at.__lookupSetter__;function pt(r,n,e,o){return t(r)||a(r)?(n[o]=r,n[o+e]=0,n):0!==r&&function(t){return Math.abs(t)}(r)<22250738585072014e-324?(n[o]=4503599627370496*r,n[o+e]=-52,n):(n[o]=r,n[o+e]=0,n)}nt=function(){try{return ot({},"x",{}),!0}catch(t){return!1}}()?it:function(t,r,n){var e,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===ut.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===ut.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(lt.call(t,r)||yt.call(t,r)?(e=t.__proto__,t.__proto__=at,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),i="get"in n,a="set"in n,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&ft&&ft.call(t,r,n.get),a&&ct&&ct.call(t,r,n.set),t},nt((function(t){return pt(t,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:pt});var vt=[0,0],bt=[0,0];function dt(r,n){var e,u,f,c,l;return 0===n||0===r||t(r)||a(r)?r:(pt(r,vt,1,0),n+=vt[1],n+=function(t){var r=Q(t);return(r=(2146435072&r)>>>20)-1023|0}(r=vt[0]),n<-1074?(f=r,q(et,0),c=et[0],c&=2147483647,l=Q(f),rt(c|=l&=2147483648,et[1])):n>1023?r<0?o:i:(n<=-1023?(n+=52,u=2220446049250313e-31):u=1,q(bt,r),e=bt[0],e&=2148532223,u*rt(e|=n+1023<<20,bt[1])))}var At=1.4426950408889634,_t=1/(1<<28);function st(r){var n;return t(r)||r===i?r:r===o?0:r>709.782712893384?i:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<_t?1+r:function(t,r,n){var e,o,i,a;return dt(1-(r-(e=t-r)*(i=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-i)-t),n)}(r-.6931471803691238*(n=e(r<0?At*r-.5:At*r+.5)),1.9082149292705877e-10*n,n)}return function(r,n){var e;return t(r)||t(n)||n<=0?NaN:(st(e=n*n)-1)*st(2*r+e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).variance=r();
//# sourceMappingURL=index.js.map
