/*! For license information please see 18.df941ff6.chunk.js.LICENSE.txt */
(this.webpackJsonpnody=this.webpackJsonpnody||[]).push([[18],{102:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(8),o=n(9),s=n(10),i=n(0),c=n.n(i),u=n(43),l=n(41),f=n(42),d=n.p+"static/media/hero-3-bottom-img.5a50a631.png",p=n(13),m=n(1),b=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(m.jsx)(c.a.Fragment,{children:Object(m.jsxs)("section",{className:"hero-3-bg position-relative bg-soft-primary",id:"home",children:[Object(m.jsx)(u.a,{children:Object(m.jsx)(l.a,{className:"justify-content-center",children:Object(m.jsx)(f.a,{lg:7,children:Object(m.jsxs)("div",{className:"text-center",children:[Object(m.jsx)("h1",{className:"hero-3-title text-dark line-height-1_4",children:"Create Amazing Landing Page With Nody Template"}),Object(m.jsx)("p",{className:"text-muted mb-4 pb-3",children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequinesciunt."}),Object(m.jsxs)(p.b,{to:"#",className:"btn btn-primary",children:["Get Started ",Object(m.jsx)("span",{className:"ml-2 right-icon",children:"\u2192"})]})]})})})}),Object(m.jsx)("div",{className:"hero-bottom-shape",children:Object(m.jsx)("img",{src:d,alt:"",className:"img-fluid d-block mx-auto"})})]})})}}]),n}(i.Component);t.default=b},38:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var s=r.apply(null,a);s&&e.push(s)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var i in a)n.call(a,i)&&a[i]&&e.push(i);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},39:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"i",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return h}));var a,r=n(12),o=n.n(r);function s(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function i(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function c(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,o={};r>0;)o[n=a[r-=1]]=e[n];return o}var u={};function l(e){u[e]||("undefined"!==typeof console&&console.error(e),u[e]=!0)}var f="object"===typeof window&&window.Element||function(){};o.a.oneOfType([o.a.string,o.a.func,function(e,t,n){if(!(e[t]instanceof f))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]);var d=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),p={Fade:150,Collapse:350,Modal:300,Carousel:600},m=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],b={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};"undefined"===typeof window||!window.document||window.document.createElement;function h(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},41:function(e,t,n){"use strict";var a=n(3),r=n(11),o=n(0),s=n.n(o),i=n(12),c=n.n(i),u=n(38),l=n.n(u),f=n(39),d=["className","cssModule","noGutters","tag","form","widths"],p=c.a.oneOfType([c.a.number,c.a.string]),m={tag:f.h,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,i=e.tag,c=e.form,u=e.widths,p=Object(r.a)(e,d),m=[];u.forEach((function(t,n){var a=e[t];if(delete p[t],a){var r=!n;m.push(r?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var b=Object(f.e)(l()(t,o?"no-gutters":null,c?"form-row":"row",m),n);return s.a.createElement(i,Object(a.a)({},p,{className:b}))};h.propTypes=m,h.defaultProps=b,t.a=h},42:function(e,t,n){"use strict";var a=n(3),r=n(11),o=n(0),s=n.n(o),i=n(12),c=n.n(i),u=n(38),l=n.n(u),f=n(39),d=["className","cssModule","widths","tag"],p=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:p,offset:p})]),b={tag:f.h,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},j=function(e){var t=e.className,n=e.cssModule,o=e.widths,i=e.tag,c=Object(r.a)(e,d),u=[];o.forEach((function(t,a){var r=e[t];if(delete c[t],r||""===r){var o=!a;if(Object(f.d)(r)){var s,i=o?"-":"-"+t+"-",d=g(o,t,r.size);u.push(Object(f.e)(l()(((s={})[d]=r.size||""===r.size,s["order"+i+r.order]=r.order||0===r.order,s["offset"+i+r.offset]=r.offset||0===r.offset,s)),n))}else{var p=g(o,t,r);u.push(p)}}})),u.length||u.push("col");var p=Object(f.e)(l()(t,u),n);return s.a.createElement(i,Object(a.a)({},c,{className:p}))};j.propTypes=b,j.defaultProps=h,t.a=j},43:function(e,t,n){"use strict";var a=n(3),r=n(11),o=n(0),s=n.n(o),i=n(12),c=n.n(i),u=n(38),l=n.n(u),f=n(39),d=["className","cssModule","fluid","tag"],p={tag:f.h,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,n=e.cssModule,o=e.fluid,i=e.tag,c=Object(r.a)(e,d),u="container";!0===o?u="container-fluid":o&&(u="container-"+o);var p=Object(f.e)(l()(t,u),n);return s.a.createElement(i,Object(a.a)({},c,{className:p}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m}}]);
//# sourceMappingURL=18.df941ff6.chunk.js.map