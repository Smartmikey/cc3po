/*! For license information please see 17.4bcae4ce.chunk.js.LICENSE.txt */
(this.webpackJsonpnody=this.webpackJsonpnody||[]).push([[17],{38:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)){if(a.length){var s=r.apply(null,a);s&&e.push(s)}}else if("object"===o)if(a.toString===Object.prototype.toString)for(var i in a)n.call(a,i)&&a[i]&&e.push(i);else e.push(a.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},39:function(e,t,n){"use strict";n.d(t,"e",(function(){return s})),n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return c})),n.d(t,"i",(function(){return l})),n.d(t,"h",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return h}));var a,r=n(12),o=n.n(r);function s(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function i(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function c(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,o={};r>0;)o[n=a[r-=1]]=e[n];return o}var u={};function l(e){u[e]||("undefined"!==typeof console&&console.error(e),u[e]=!0)}var d="object"===typeof window&&window.Element||function(){};o.a.oneOfType([o.a.string,o.a.func,function(e,t,n){if(!(e[t]instanceof d))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]);var f=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),p={Fade:150,Collapse:350,Modal:300,Carousel:600},m=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],b={ENTERING:"entering",ENTERED:"entered",EXITING:"exiting",EXITED:"exited"};"undefined"===typeof window||!window.document||window.document.createElement;function h(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},41:function(e,t,n){"use strict";var a=n(3),r=n(11),o=n(0),s=n.n(o),i=n(12),c=n.n(i),u=n(38),l=n.n(u),d=n(39),f=["className","cssModule","noGutters","tag","form","widths"],p=c.a.oneOfType([c.a.number,c.a.string]),m={tag:d.h,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var t=e.className,n=e.cssModule,o=e.noGutters,i=e.tag,c=e.form,u=e.widths,p=Object(r.a)(e,f),m=[];u.forEach((function(t,n){var a=e[t];if(delete p[t],a){var r=!n;m.push(r?"row-cols-"+a:"row-cols-"+t+"-"+a)}}));var b=Object(d.e)(l()(t,o?"no-gutters":null,c?"form-row":"row",m),n);return s.a.createElement(i,Object(a.a)({},p,{className:b}))};h.propTypes=m,h.defaultProps=b,t.a=h},42:function(e,t,n){"use strict";var a=n(3),r=n(11),o=n(0),s=n.n(o),i=n(12),c=n.n(i),u=n(38),l=n.n(u),d=n(39),f=["className","cssModule","widths","tag"],p=c.a.oneOfType([c.a.number,c.a.string]),m=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:p,offset:p})]),b={tag:d.h,xs:m,sm:m,md:m,lg:m,xl:m,className:c.a.string,cssModule:c.a.object,widths:c.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},j=function(e){var t=e.className,n=e.cssModule,o=e.widths,i=e.tag,c=Object(r.a)(e,f),u=[];o.forEach((function(t,a){var r=e[t];if(delete c[t],r||""===r){var o=!a;if(Object(d.d)(r)){var s,i=o?"-":"-"+t+"-",f=g(o,t,r.size);u.push(Object(d.e)(l()(((s={})[f]=r.size||""===r.size,s["order"+i+r.order]=r.order||0===r.order,s["offset"+i+r.offset]=r.offset||0===r.offset,s)),n))}else{var p=g(o,t,r);u.push(p)}}})),u.length||u.push("col");var p=Object(d.e)(l()(t,u),n);return s.a.createElement(i,Object(a.a)({},c,{className:p}))};j.propTypes=b,j.defaultProps=h,t.a=j},43:function(e,t,n){"use strict";var a=n(3),r=n(11),o=n(0),s=n.n(o),i=n(12),c=n.n(i),u=n(38),l=n.n(u),d=n(39),f=["className","cssModule","fluid","tag"],p={tag:d.h,fluid:c.a.oneOfType([c.a.bool,c.a.string]),className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,n=e.cssModule,o=e.fluid,i=e.tag,c=Object(r.a)(e,f),u="container";!0===o?u="container-fluid":o&&(u="container-"+o);var p=Object(d.e)(l()(t,u),n);return s.a.createElement(i,Object(a.a)({},c,{className:p}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},97:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(8),o=n(9),s=n(10),i=n(0),c=n.n(i),u=n(43),l=n(41),d=n(42),f=n(13),p=n.p+"static/media/hero-2-overlay.fd94d43a.png",m=n.p+"static/media/hero-2-bottom-shape.e75753a3.png",b=n(1),h=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsx)(c.a.Fragment,{children:Object(b.jsxs)("section",{className:"hero-2-bg bg-primary position-relative",id:"home",children:[Object(b.jsx)("div",{className:"hero-overlay hero-2-overlay",style:{backgroundImage:"url(".concat(p,")")}}),Object(b.jsx)(u.a,{children:Object(b.jsx)(l.a,{className:"justify-content-center",children:Object(b.jsx)(d.a,{lg:"6",children:Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("span",{className:"badge bg-soft-light text-white-70 f-15 mb-4",children:"Creative Landing Page"}),Object(b.jsx)("h1",{className:"hero-2-title mb-4 text-white",children:"Make Your Site Amazing & Unique"}),Object(b.jsx)("p",{className:"text-white-50 mb-4 pb-3",children:"Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequinesciunt."}),Object(b.jsxs)(f.b,{to:"#",className:"btn btn-light",children:["Get Started ",Object(b.jsx)("span",{className:"ml-2 right-icon",children:"\u2192"})]})]})})})}),Object(b.jsx)("div",{className:"hero-bottom-shape",children:Object(b.jsx)("img",{src:m,alt:"",className:"img-fluid d-block mx-auto"})})]})})}}]),n}(i.Component);t.default=h}}]);
//# sourceMappingURL=17.4bcae4ce.chunk.js.map