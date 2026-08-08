"use strict";var s=function(t,r){return function(){try{return r||t((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var a=s(function(p,u){
var n=require('@stdlib/math-base-assert-is-nan/dist'),i=require('@stdlib/math-base-special-exp/dist');function v(t,r){var e;return n(t)||n(r)||r<=0?NaN:(e=r*r,(i(e)-1)*i(2*t+e))}u.exports=v
});var c=a();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
