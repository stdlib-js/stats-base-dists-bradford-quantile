"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var a=i(function(F,n){
var u=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-expm1/dist'),N=require('@stdlib/math-base-special-log1p/dist');function c(e,r){return u(r)||u(e)||r<=0||e<0||e>1?NaN:f(e*N(r))/r}n.exports=c
});var q=i(function(O,s){
var l=require('@stdlib/utils-constant-function/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-expm1/dist'),y=require('@stdlib/math-base-special-log1p/dist');function m(e){if(o(e)||e<=0)return l(NaN);return r;function r(t){return o(t)||t<0||t>1?NaN:x(t*y(e))/e}}s.exports=m
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=a(),d=q();g(v,"factory",d);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
