"use strict";var i=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var a=i(function(F,n){
var u=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-expm1/dist'),N=require('@stdlib/math-base-special-log1p/dist');function c(r,e){return u(e)||u(r)||e<=0||r<0||r>1?NaN:f(r*N(e))/e}n.exports=c
});var q=i(function(O,s){
var l=require('@stdlib/utils-constant-function/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-expm1/dist'),y=require('@stdlib/math-base-special-log1p/dist');function m(r){if(o(r)||r<=0)return l(NaN);return e;function e(t){return o(t)||t<0||t>1?NaN:x(t*y(r))/r}}s.exports=m
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=a(),d=q();g(v,"factory",d);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
