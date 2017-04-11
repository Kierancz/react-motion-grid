!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("styled-components"),require("react-motion"),require("react-waypoint"),require("react-measure")):"function"==typeof define&&define.amd?define(["react","styled-components","react-motion","react-waypoint","react-measure"],t):"object"==typeof exports?exports.ReactMotionGrid=t(require("react"),require("styled-components"),require("react-motion"),require("react-waypoint"),require("react-measure")):e.ReactMotionGrid=t(e.React,e.ReactStyled,e.ReactMotion,e.ReactWaypoint,e.ReactMeasure)}(this,function(e,t,n,r,o){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="dist/",t(t.s=20)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){function r(e){return null==e?void 0===e?c:u:l&&l in Object(e)?i(e):a(e)}var o=n(8),i=n(27),a=n(32),u="[object Null]",c="[object Undefined]",l=o?o.toStringTag:void 0;e.exports=r},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function r(e,t,n,r,i,a,u,c){if(o(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,i,a,u,c],f=0;l=new Error(t.replace(/%s/g,function(){return s[f++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";var r=n(5),o=r;e.exports=o},function(e,t,n){var r=n(10),o=r.Symbol;e.exports=o},function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,n(44))},function(e,t,n){var r=n(9),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},function(e,t){function n(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}var r=9007199254740991;e.exports=n},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  opacity: ",";\n  transform: translateY(","px);\n"],["\n  opacity: ",";\n  transform: translateY(","px);\n"]),u=n(0),c=r(u),l=n(2),s=n(1),f=r(s),p=f.default.div(a,function(e){return e.opacity},function(e){return e.translateY}),d=function(){function e(){var t=this;o(this,e),this.calculateNextFrame=function(e){var n=e.startAnimate,r=e.springOptions,o=e.prevFrameStyles;return n?o.map(function(e,t){return 0===t?{opacity:(0,l.spring)(1,r),translateY:(0,l.spring)(0,r)}:o[t-1].opacity<.4?o[t]:{opacity:(0,l.spring)(o[t-1].opacity,r),translateY:(0,l.spring)(o[t-1].translateY,r)}}):t.getInitialStyles(o)}}return i(e,[{key:"getWrapper",value:function(e,t){var n=t.opacity,r=t.translateY;return c.default.createElement(p,{opacity:n,translateY:r},e)}},{key:"getInitialStyles",value:function(e){return e.map(function(){return{opacity:0,translateY:40}})}}]),e}();t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  opacity: ",";\n"],["\n  opacity: ",";\n"]),u=n(0),c=r(u),l=n(2),s=n(1),f=r(s),p=f.default.div(a,function(e){return e.opacity}),d=function(){function e(){var t=this;o(this,e),this.calculateNextFrame=function(e){var n=e.startAnimate,r=e.springOptions,o=e.prevFrameStyles;return n?o.map(function(e,t){return 0===t?{opacity:(0,l.spring)(1,r)}:o[t-1].opacity<.4?o[t]:{opacity:(0,l.spring)(o[t-1].opacity,r)}}):t.getInitialStyles(o)}}return i(e,[{key:"getWrapper",value:function(e,t){var n=t.opacity;return c.default.createElement(p,{opacity:n},e)}},{key:"getInitialStyles",value:function(e){return e.map(function(){return{opacity:0}})}}]),e}();t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  height: ","px;\n"],["\n  height: ","px;\n"]),u=n(0),c=r(u),l=n(45),s=r(l),f=n(1),p=r(f),d=p.default.div(a,function(e){return e.height});t.default=function(e){var t=e.heightRatio,n=void 0===t?1:t,r=o(e,["heightRatio"]);return c.default.createElement(s.default,{whitelist:["width"],includeMargin:!1},function(e){var t=e.width;return c.default.createElement(d,i({height:t*n},r))})}},function(e,t,n){function r(e){return a(e)?o(e):i(e)}var o=n(21),i=n(24),a=n(36);e.exports=r},function(e,t,n){function r(e){return"object"==typeof e&&null!==e&&e.$$typeof===i}var o=n(43),i="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;e.exports=o(r)},function(e,t){e.exports=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=l(["\n  display: flex;\n  flex-flow: row nowrap;\n  box-sizing: content-box;\n"],["\n  display: flex;\n  flex-flow: row nowrap;\n  box-sizing: content-box;\n"]),d=l(["\n  width: ","%;\n  margin-top: ","px;\n  margin-bottom: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  box-sizing: border-box;\n  flex-shrink: 0;\n"],["\n  width: ","%;\n  margin-top: ","px;\n  margin-bottom: ","px;\n  padding-left: ","px;\n  padding-right: ","px;\n  box-sizing: border-box;\n  flex-shrink: 0;\n"]),y=l(["\n"],["\n"]),h=l(["\n  margin-top: -","px;\n  margin-bottom: -","px;\n  width: 100%;\n"],["\n  margin-top: -","px;\n  margin-bottom: -","px;\n  width: 100%;\n"]),g=l(["\n  background: #EEE;\n"],["\n  background: #EEE;\n"]),b=l(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n"],["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 20px;\n"]),m=n(0),v=r(m),O=n(18),j=r(O),x=n(19),w=r(x),P=n(2),A=n(1),R=r(A),k=n(16),E=r(k),S=n(17),_=r(S),T=n(14),I=r(T),M=n(15),F=r(M),z={bottomFadeIn:I.default,fadeIn:F.default},L=function(e){return isNaN(e.horizontal)?e||0:e.horizontal},q=function(e){return isNaN(e.vertical)?e||0:e.vertical},B=R.default.div(p),C=R.default.div(d,function(e){return 100*e.width/12},function(e){return e.padding.top||0},function(e){return e.padding.bottom||0},function(e){return e.padding.left||0},function(e){return e.padding.right||0}),W=R.default.button(y),N=R.default.div(h,function(e){return q(e.innerPadding)/2},function(e){return q(e.innerPadding)/2}),Y=(0,R.default)(E.default)(g),U=R.default.div(b),D=R.default.div(b),G=[1,2,3,4,5,6,7,8,9,10,11,12],V=function(e){function t(){return a(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),f(t,[{key:"componentWillUnmount",value:function(){this.unmounted=!0}},{key:"componentWillMount",value:function(){this.setState({animationOnRest:!1,isLoadBtnClicked:!1,patches:this.props.children.length>0?[this.props.children]:[]})}},{key:"componentWillReceiveProps",value:function(e){e.children.length>this.props.children.length?this.setState({patches:[].concat(i(this.state.patches),[e.children.slice(this.props.children.length)])}):e.children.length<this.props.children.length&&this.setState({patches:[e.children]})}},{key:"getRows",value:function(e,t){for(var n=[],r=0,o=t.length||e.length,i=0;i<o;i++){var a=t[i]||t;r<=0&&(r=12,n.push([])),n[n.length-1].push({element:e[i],width:a}),r-=a}return n}},{key:"isVisible",value:function(e){return e.opacity>.1}},{key:"renderRows",value:function(e){var t=this,n=e.rows,r=e.animation,o=e.innerPadding,i=e.styles,a=e.isAppShell,u=0;return void 0!==a&&a||i.some(function(e){return e.opacity<1})||this.animationOnRest||(this.animationOnRest=!0,setTimeout(function(){return t.setState({animationOnRest:!0})},100)),n.map(function(e,t,n){var a=L(o),c=q(o);return v.default.createElement("div",{key:t,style:{overflow:"hidden"}},v.default.createElement(B,{style:{marginLeft:-a/2,marginRight:-a/2}},e.map(function(e,t){var n=i[u++]||{},o=(e.width,a/2),l=a/2,s=c/2,f=c/2;return v.default.createElement(C,{padding:{top:s,bottom:f,left:o,right:l},width:e.width,key:t},r?r.getWrapper(e.element,n):e.element)})))})}},{key:"renderPatch",value:function(e,t){var n=this,r=e.patch,o=e.animation,i=e.columns,a=e.startAnimate,u=(e.springOptions,e.innerPadding),c=this.getRows(r,i);return 0==c.length?v.default.createElement("div",null):this.props.disableAnimation?v.default.createElement(N,{key:t,innerPadding:u},this.renderRows({rows:c,innerPadding:u,styles:new Array(r.length).fill({opacity:1,translateX:0})})):v.default.createElement(P.StaggeredMotion,{key:t,defaultStyles:o.getInitialStyles(r),styles:function(e){return o.calculateNextFrame({startAnimate:a,prevFrameStyles:e})}},function(e){return v.default.createElement(N,{innerPadding:u},n.renderRows({rows:c,innerPadding:u,styles:e,animation:o}))})}},{key:"renderPatches",value:function(e){var t=this,n=e.patches,r=o(e,["patches"]);return n.map(function(e,n){return t.renderPatch(s({patch:e},r),n)})}},{key:"renderAppShell",value:function(e){var t=e.columns,n=e.shellItemsRows,r=e.innerPadding,o=t.length||Math.floor(12/t*n),i=new Array(o).fill(v.default.createElement(Y,null)),a=this.getRows(i,t);return v.default.createElement(N,{innerPadding:r},this.renderRows({rows:a,innerPadding:r,styles:new Array(i.length).fill({opacity:1,translateX:0}),isAppShell:!0}))}},{key:"renderWaypoint",value:function(e){var t=e.pagingOptions;return t.loadMoreItems?t.isLoading?v.default.createElement(U,null,"Loading more items..."):v.default.createElement(w.default,{onEnter:function(){t.isLoading||t.loadMoreItems()}}):null}},{key:"renderPagingBehaviour",value:function(e){var t=this,n=e.enablePaging,r=e.pagingOptions,o=e.isLoadBtnClicked,i=e.animationOnRest;if(n&&!r.isFetchedAll&&i)return!o&&r.loadMoreItems?v.default.createElement(D,null,v.default.createElement(W,{onClick:function(){r.loadMoreItems(),t.setState({isLoadBtnClicked:!0})},disabled:r.isLoading},"Load more")):this.renderWaypoint({pagingOptions:r})}},{key:"render",value:function(){var e=this.props,t=e.columns,n=e.innerPadding,r=e.startAnimate,i=e.springOptions,a=e.enablePaging,u=e.pagingOptions,c=e.enableAppShell,l=e.shellItemsRows,s=e.animationType,f=e.children,p=o(e,["columns","innerPadding","startAnimate","springOptions","enablePaging","pagingOptions","enableAppShell","shellItemsRows","animationType","children"]),d=this.state,y=d.patches,h=d.isLoadBtnClicked,g=d.animationOnRest;if(c&&0===f.length)return this.renderAppShell({columns:t,innerPadding:n,shellItemsRows:l});var b=new z[s];return v.default.createElement("div",p,this.renderPatches({patches:y,animation:b,columns:t,startAnimate:r,springOptions:i,innerPadding:n}),this.renderPagingBehaviour({enablePaging:a,pagingOptions:u,isLoadBtnClicked:h,animationOnRest:g}))}}]),t}(v.default.Component);V.propTypes={disableAnimation:j.default.bool,columns:j.default.oneOfType([j.default.oneOf(G),j.default.arrayOf(j.default.oneOf(G))]),innerPadding:j.default.oneOfType([j.default.number,j.default.string,j.default.shape({vertical:j.default.oneOfType([j.default.number,j.default.string]),horizontal:j.default.oneOfType([j.default.number,j.default.string])})]),startAnimate:j.default.bool,enablePaging:j.default.bool,pagingOptions:j.default.shape({isFetchedAll:j.default.bool,isLoading:j.default.bool,loadMoreItems:j.default.func}),children:j.default.arrayOf(j.default.element).isRequired,springOptions:j.default.shape({stiffness:j.default.number,damping:j.default.number}),shellItemsRows:j.default.number,animationType:j.default.oneOf((0,_.default)(z))},V.defaultProps={columns:12,innerPadding:0,startAnimate:!0,enablePaging:!1,pagingOptions:{},springOptions:P.presets.noWobble,shellItemsRows:3,animationType:"fadeIn"},t.default=V},function(e,t,n){function r(e,t){var n=a(e),r=!n&&i(e),s=!n&&!r&&u(e),p=!n&&!r&&!s&&l(e),d=n||r||s||p,y=d?o(e.length,String):[],h=y.length;for(var g in e)!t&&!f.call(e,g)||d&&("length"==g||s&&("offset"==g||"parent"==g)||p&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||c(g,h))||y.push(g);return y}var o=n(25),i=n(34),a=n(35),u=n(37),c=n(28),l=n(40),s=Object.prototype,f=s.hasOwnProperty;e.exports=r},function(e,t,n){function r(e){return i(e)&&o(e)==a}var o=n(3),i=n(4),a="[object Arguments]";e.exports=r},function(e,t,n){function r(e){return a(e)&&i(e.length)&&!!u[o(e)]}var o=n(3),i=n(11),a=n(4),u={};u["[object Float32Array]"]=u["[object Float64Array]"]=u["[object Int8Array]"]=u["[object Int16Array]"]=u["[object Int32Array]"]=u["[object Uint8Array]"]=u["[object Uint8ClampedArray]"]=u["[object Uint16Array]"]=u["[object Uint32Array]"]=!0,u["[object Arguments]"]=u["[object Array]"]=u["[object ArrayBuffer]"]=u["[object Boolean]"]=u["[object DataView]"]=u["[object Date]"]=u["[object Error]"]=u["[object Function]"]=u["[object Map]"]=u["[object Number]"]=u["[object Object]"]=u["[object RegExp]"]=u["[object Set]"]=u["[object String]"]=u["[object WeakMap]"]=!1,e.exports=r},function(e,t,n){function r(e){if(!o(e))return i(e);var t=[];for(var n in Object(e))u.call(e,n)&&"constructor"!=n&&t.push(n);return t}var o=n(29),i=n(30),a=Object.prototype,u=a.hasOwnProperty;e.exports=r},function(e,t){function n(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}e.exports=n},function(e,t){function n(e){return function(t){return e(t)}}e.exports=n},function(e,t,n){function r(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0}catch(e){}var r=u.call(e);return t?e[c]=n:delete e[c],r}var o=n(8),i=Object.prototype,a=i.hasOwnProperty,u=i.toString,c=o?o.toStringTag:void 0;e.exports=r},function(e,t){function n(e,t){return!!(t=null==t?r:t)&&("number"==typeof e||o.test(e))&&e>-1&&e%1==0&&e<t}var r=9007199254740991,o=/^(?:0|[1-9]\d*)$/;e.exports=n},function(e,t){function n(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||r)}var r=Object.prototype;e.exports=n},function(e,t,n){var r=n(33),o=r(Object.keys,Object);e.exports=o},function(e,t,n){(function(e){var r=n(9),o="object"==typeof t&&t&&!t.nodeType&&t,i=o&&"object"==typeof e&&e&&!e.nodeType&&e,a=i&&i.exports===o,u=a&&r.process,c=function(){try{return u&&u.binding&&u.binding("util")}catch(e){}}();e.exports=c}).call(t,n(13)(e))},function(e,t){function n(e){return o.call(e)}var r=Object.prototype,o=r.toString;e.exports=n},function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},function(e,t,n){var r=n(22),o=n(4),i=Object.prototype,a=i.hasOwnProperty,u=i.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(e){return o(e)&&a.call(e,"callee")&&!u.call(e,"callee")};e.exports=c},function(e,t){var n=Array.isArray;e.exports=n},function(e,t,n){function r(e){return null!=e&&i(e.length)&&!o(e)}var o=n(38),i=n(11);e.exports=r},function(e,t,n){(function(e){var r=n(10),o=n(41),i="object"==typeof t&&t&&!t.nodeType&&t,a=i&&"object"==typeof e&&e&&!e.nodeType&&e,u=a&&a.exports===i,c=u?r.Buffer:void 0,l=c?c.isBuffer:void 0,s=l||o;e.exports=s}).call(t,n(13)(e))},function(e,t,n){function r(e){if(!i(e))return!1;var t=o(e);return t==u||t==c||t==a||t==l}var o=n(3),i=n(39),a="[object AsyncFunction]",u="[object Function]",c="[object GeneratorFunction]",l="[object Proxy]";e.exports=r},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){var r=n(23),o=n(26),i=n(31),a=i&&i.isTypedArray,u=a?o(a):r;e.exports=u},function(e,t){function n(){return!1}e.exports=n},function(e,t,n){"use strict";function r(e,t,n,r,o){}n(6),n(7),n(12);e.exports=r},function(e,t,n){"use strict";var r=(n(5),n(6)),o=(n(7),n(12),n(42));e.exports=function(e){function t(e){this.message=e,this.stack=""}var n,i=("function"==typeof Symbol&&Symbol.iterator,function(){r(!1,"React.PropTypes type checking code is stripped in production.")});i.isRequired=i;var a=function(){return i};return n={array:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:a,element:i,instanceOf:a,node:i,objectOf:a,oneOf:a,oneOfType:a,shape:a},t.prototype=Error.prototype,n.checkPropTypes=o,n.PropTypes=n,n}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=o}])});