(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-createOrder"],{1063:function(t,e,i){"use strict";var a=i("8a80"),n=i.n(a);n.a},"3b8d":function(t,e,i){"use strict";i.r(e),i.d(e,"default",function(){return r});var a=i("795b"),n=i.n(a);function o(t,e,i,a,o,r,s){try{var c=t[r](s),l=c.value}catch(d){return void i(d)}c.done?e(l):n.a.resolve(l).then(a,o)}function r(t){return function(){var e=this,i=arguments;return new n.a(function(a,n){var r=t.apply(e,i);function s(t){o(r,a,n,s,c,"next",t)}function c(t){o(r,a,n,s,c,"throw",t)}s(void 0)})}}},"4f15":function(t,e,i){"use strict";i.r(e);var a=i("63d2"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},"63d2":function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("96cf");var n,o=a(i("3b8d")),r={data:function(){return{maskState:0,desc:"",payType:1,couponList:[{title:"新用户专享优惠券",price:5},{title:"庆五一发一波优惠券",price:10},{title:"优惠券优惠券优惠券优惠券",price:15}],addressData:{name:"许小星",mobile:"13853989563",addressName:"金九大道",address:"山东省济南市历城区",area:"149号",default:!1},cartList:[]}},onLoad:function(t){n=this,n.cartList=uni.getStorageSync("carts"),n.loadAddress()},onShow:function(){},methods:{loadAddress:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$apiRequest({url:"addresses/1"});case 2:e=t.sent,n.addressData=e.data.data;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),toggleMask:function(t){var e=this,i="show"===t?10:300,a="show"===t?1:0;this.maskState=2,setTimeout(function(){e.maskState=a},i)},numberChange:function(t){this.number=t.number},changePayType:function(t){this.payType=t},submit:function(){n.$api.msg("支付未启用!!")},stopPrevent:function(){}}};e.default=r},"6e1a":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-847a8d0a]{background:#f8f8f8;padding-bottom:%?100?%}.address-section[data-v-847a8d0a]{padding:%?30?% 0;background:#fff;position:relative}.address-section .order-content[data-v-847a8d0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-section .icon-shouhuodizhi[data-v-847a8d0a]{-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?90?%;color:#888;font-size:%?44?%}.address-section .cen[data-v-847a8d0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}.address-section .name[data-v-847a8d0a]{font-size:%?34?%;margin-right:%?24?%}.address-section .address[data-v-847a8d0a]{margin-top:%?16?%;margin-right:%?20?%;color:#909399}.address-section .icon-you[data-v-847a8d0a]{font-size:%?32?%;color:#909399;margin-right:%?30?%}.address-section .a-bg[data-v-847a8d0a]{position:absolute;left:0;bottom:0;display:block;width:100%;height:%?5?%}.goods-section[data-v-847a8d0a]{margin-top:%?16?%;background:#fff;padding-bottom:1px}.goods-section .g-header[data-v-847a8d0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?84?%;padding:0 %?30?%;position:relative}.goods-section .logo[data-v-847a8d0a]{display:block;width:%?50?%;height:%?50?%;border-radius:100px}.goods-section .name[data-v-847a8d0a]{font-size:%?30?%;color:#606266;margin-left:%?24?%}.goods-section .g-item[data-v-847a8d0a]{display:-webkit-box;display:-webkit-flex;display:flex;margin:%?20?% %?30?%}.goods-section .g-item uni-image[data-v-847a8d0a]{-webkit-flex-shrink:0;flex-shrink:0;display:block;width:%?140?%;height:%?140?%;border-radius:%?4?%}.goods-section .g-item .right[data-v-847a8d0a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:%?24?%;overflow:hidden}.goods-section .g-item .title[data-v-847a8d0a]{font-size:%?30?%;color:#303133}.goods-section .g-item .spec[data-v-847a8d0a]{font-size:%?26?%;color:#909399}.goods-section .g-item .price-box[data-v-847a8d0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;color:#303133;padding-top:%?10?%}.goods-section .g-item .price-box .price[data-v-847a8d0a]{margin-bottom:%?4?%}.goods-section .g-item .price-box .number[data-v-847a8d0a]{font-size:%?26?%;color:#606266;margin-left:%?20?%}.goods-section .g-item .step-box[data-v-847a8d0a]{position:relative}.yt-list[data-v-847a8d0a]{margin-top:%?16?%;background:#fff}.yt-list-cell[data-v-847a8d0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?10?% %?30?% %?10?% %?40?%;line-height:%?70?%;position:relative}.yt-list-cell.cell-hover[data-v-847a8d0a]{background:#fafafa}.yt-list-cell.b-b[data-v-847a8d0a]:after{left:%?30?%}.yt-list-cell .cell-icon[data-v-847a8d0a]{height:%?32?%;width:%?32?%;font-size:%?22?%;color:#fff;text-align:center;line-height:%?32?%;background:#f85e52;border-radius:%?4?%;margin-right:%?12?%}.yt-list-cell .cell-icon.hb[data-v-847a8d0a]{background:#ffaa0e}.yt-list-cell .cell-icon.lpk[data-v-847a8d0a]{background:#3ab54a}.yt-list-cell .cell-more[data-v-847a8d0a]{-webkit-align-self:center;align-self:center;font-size:%?24?%;color:#909399;margin-left:%?8?%;margin-right:%?-10?%}.yt-list-cell .cell-tit[data-v-847a8d0a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?26?%;color:#909399;margin-right:%?10?%}.yt-list-cell .cell-tip[data-v-847a8d0a]{font-size:%?26?%;color:#303133}.yt-list-cell .cell-tip.disabled[data-v-847a8d0a]{color:#909399}.yt-list-cell .cell-tip.active[data-v-847a8d0a]{color:#fa436a}.yt-list-cell .cell-tip.red[data-v-847a8d0a]{color:#fa436a}.yt-list-cell.desc-cell .cell-tit[data-v-847a8d0a]{max-width:%?90?%}.yt-list-cell .desc[data-v-847a8d0a]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;color:#303133}\n/* 支付列表 */.pay-list[data-v-847a8d0a]{padding-left:%?40?%;margin-top:%?16?%;background:#fff}.pay-list .pay-item[data-v-847a8d0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:%?20?%;line-height:1;height:%?110?%;position:relative}.pay-list .icon-weixinzhifu[data-v-847a8d0a]{width:%?80?%;font-size:%?40?%;color:#6bcc03}.pay-list .icon-alipay[data-v-847a8d0a]{width:%?80?%;font-size:%?40?%;color:#06b4fd}.pay-list .icon-xuanzhong2[data-v-847a8d0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?60?%;height:%?60?%;font-size:%?40?%;color:#fa436a}.pay-list .tit[data-v-847a8d0a]{font-size:%?32?%;color:#303133;-webkit-box-flex:1;-webkit-flex:1;flex:1}.footer[data-v-847a8d0a]{position:fixed;left:0;bottom:0;z-index:995;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:%?90?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;font-size:%?30?%;background-color:#fff;z-index:998;color:#606266;box-shadow:0 -1px 5px rgba(0,0,0,.1)}.footer .price-content[data-v-847a8d0a]{padding-left:%?30?%}.footer .price-tip[data-v-847a8d0a]{color:#fa436a;margin-left:%?8?%}.footer .price[data-v-847a8d0a]{font-size:%?36?%;color:#fa436a}.footer .submit[data-v-847a8d0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:%?280?%;height:100%;color:#fff;font-size:%?32?%;background-color:#fa436a}\n/* 优惠券面板 */.mask[data-v-847a8d0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;position:fixed;left:0;top:var(--window-top);bottom:0;width:100%;background:transparent;z-index:9995;-webkit-transition:.3s;transition:.3s}.mask .mask-content[data-v-847a8d0a]{width:100%;min-height:30vh;max-height:70vh;background:#f3f3f3;-webkit-transform:translateY(100%);transform:translateY(100%);-webkit-transition:.3s;transition:.3s;overflow-y:scroll}.mask.none[data-v-847a8d0a]{display:none}.mask.show[data-v-847a8d0a]{background:rgba(0,0,0,.4)}.mask.show .mask-content[data-v-847a8d0a]{-webkit-transform:translateY(0);transform:translateY(0)}\n/* 优惠券列表 */.coupon-item[data-v-847a8d0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin:%?20?% %?24?%;background:#fff}.coupon-item .con[data-v-847a8d0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;height:%?120?%;padding:0 %?30?%}.coupon-item .con[data-v-847a8d0a]:after{position:absolute;left:0;bottom:0;content:"";width:100%;height:0;border-bottom:1px dashed #f3f3f3;-webkit-transform:scaleY(50%);transform:scaleY(50%)}.coupon-item .left[data-v-847a8d0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;height:%?100?%}.coupon-item .title[data-v-847a8d0a]{font-size:%?32?%;color:#303133;margin-bottom:%?10?%}.coupon-item .time[data-v-847a8d0a]{font-size:%?24?%;color:#909399}.coupon-item .right[data-v-847a8d0a]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?26?%;color:#606266;height:%?100?%}.coupon-item .price[data-v-847a8d0a]{font-size:%?44?%;color:#fa436a}.coupon-item .price[data-v-847a8d0a]:before{content:"\\FFE5";font-size:%?34?%}.coupon-item .tips[data-v-847a8d0a]{font-size:%?24?%;color:#909399;line-height:%?60?%;padding-left:%?30?%}.coupon-item .circle[data-v-847a8d0a]{position:absolute;left:%?-6?%;bottom:%?-10?%;z-index:10;width:%?20?%;height:%?20?%;background:#f3f3f3;border-radius:100px}.coupon-item .circle.r[data-v-847a8d0a]{left:auto;right:%?-6?%}body.?%PAGE?%[data-v-847a8d0a]{background:#f8f8f8}',""])},"81ac":function(t,e,i){"use strict";i.r(e);var a=i("bb9e"),n=i("4f15");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("1063");var r,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"847a8d0a",null,!1,a["a"],r);e["default"]=c.exports},"8a80":function(t,e,i){var a=i("6e1a");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("715cf234",a,!0,{sourceMap:!1,shadowMode:!1})},"96cf":function(t,e){!function(e){"use strict";var i,a=Object.prototype,n=a.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag",l="object"===typeof t,d=e.regeneratorRuntime;if(d)l&&(t.exports=d);else{d=e.regeneratorRuntime=l?t.exports:{},d.wrap=y;var f="suspendedStart",u="suspendedYield",p="executing",v="completed",h={},b={};b[r]=function(){return this};var g=Object.getPrototypeOf,w=g&&g(g(T([])));w&&w!==a&&n.call(w,r)&&(b=w);var m=C.prototype=k.prototype=Object.create(b);_.prototype=m.constructor=C,C.constructor=_,C[c]=_.displayName="GeneratorFunction",d.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},d.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,C):(t.__proto__=C,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(m),t},d.awrap=function(t){return{__await:t}},z(L.prototype),L.prototype[s]=function(){return this},d.AsyncIterator=L,d.async=function(t,e,i,a){var n=new L(y(t,e,i,a));return d.isGeneratorFunction(e)?n:n.next().then(function(t){return t.done?t.value:n.next()})},z(m),m[c]="Generator",m[r]=function(){return this},m.toString=function(){return"[object Generator]"},d.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){while(e.length){var a=e.pop();if(a in t)return i.value=a,i.done=!1,i}return i.done=!0,i}},d.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=i)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(a,n){return s.type="throw",s.arg=t,e.next=a,n&&(e.method="next",e.arg=i),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],s=r.completion;if("root"===r.tryLoc)return a("end");if(r.tryLoc<=this.prev){var c=n.call(r,"catchLoc"),l=n.call(r,"finallyLoc");if(c&&l){if(this.prev<r.catchLoc)return a(r.catchLoc,!0);if(this.prev<r.finallyLoc)return a(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return a(r.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return a(r.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var r=o?o.completion:{};return r.type=t,r.arg=e,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(r)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),S(i),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var a=i.completion;if("throw"===a.type){var n=a.arg;S(i)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,a){return this.delegate={iterator:T(t),resultName:e,nextLoc:a},"next"===this.method&&(this.arg=i),h}}}function y(t,e,i,a){var n=e&&e.prototype instanceof k?e:k,o=Object.create(n.prototype),r=new P(a||[]);return o._invoke=j(t,i,r),o}function x(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(a){return{type:"throw",arg:a}}}function k(){}function _(){}function C(){}function z(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function L(t){function e(i,a,o,r){var s=x(t[i],t,a);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,o,r)},function(t){e("throw",t,o,r)}):Promise.resolve(l).then(function(t){c.value=t,o(c)},function(t){return e("throw",t,o,r)})}r(s.arg)}var i;function a(t,a){function n(){return new Promise(function(i,n){e(t,a,i,n)})}return i=i?i.then(n,n):n()}this._invoke=a}function j(t,e,i){var a=f;return function(n,o){if(a===p)throw new Error("Generator is already running");if(a===v){if("throw"===n)throw o;return F()}i.method=n,i.arg=o;while(1){var r=i.delegate;if(r){var s=E(r,i);if(s){if(s===h)continue;return s}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(a===f)throw a=v,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);a=p;var c=x(t,e,i);if("normal"===c.type){if(a=i.done?v:u,c.arg===h)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(a=v,i.method="throw",i.arg=c.arg)}}}function E(t,e){var a=t.iterator[e.method];if(a===i){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=i,E(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=x(a,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=i),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(t){if(t){var e=t[r];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function e(){while(++a<t.length)if(n.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=i,e.done=!0,e};return o.next=o}}return{next:F}}function F(){return{value:i,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},bb9e:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-navigator",{staticClass:"address-section",attrs:{url:"/pages/address/address?source=1"}},[i("v-uni-view",{staticClass:"order-content"},[i("v-uni-text",{staticClass:"yticon icon-shouhuodizhi"}),i("v-uni-view",{staticClass:"cen"},[i("v-uni-view",{staticClass:"top"},[i("v-uni-text",{staticClass:"name"},[t._v(t._s(t.addressData.consignee))]),i("v-uni-text",{staticClass:"mobile"},[t._v(t._s(t.addressData.mobile))])],1),i("v-uni-text",{staticClass:"address"},[t._v(t._s(t.addressData.address))])],1),i("v-uni-text",{staticClass:"yticon icon-you"})],1),i("v-uni-image",{staticClass:"a-bg",attrs:{src:""}})],1),i("v-uni-view",{staticClass:"goods-section"},[i("v-uni-view",{staticClass:"g-header b-b"},[i("v-uni-image",{staticClass:"logo",attrs:{src:"http://duoduo.qibukj.cn/./Upload/Images/20190321/201903211727515.png"}}),i("v-uni-text",{staticClass:"name"},[t._v("套普-打印机配件")])],1),t._l(t.cartList,function(e,a){return i("v-uni-view",{key:e.id,staticClass:"g-item"},[i("v-uni-image",{attrs:{src:e.image}}),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"title clamp"},[t._v(t._s(e.title))]),i("v-uni-text",{staticClass:"spec"}),i("v-uni-view",{staticClass:"price-box"},[i("v-uni-text",{staticClass:"price"},[t._v(t._s(e.price))]),i("v-uni-text",{staticClass:"number"},[t._v("x "+t._s(e.number))])],1)],1)],1)})],2),i("v-uni-view",{staticClass:"yt-list"},[i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("商品金额")]),i("v-uni-text",{staticClass:"cell-tip"},[t._v("￥179.88")])],1),i("v-uni-view",{staticClass:"yt-list-cell b-b"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("运费")]),i("v-uni-text",{staticClass:"cell-tip"},[t._v("免运费")])],1),i("v-uni-view",{staticClass:"yt-list-cell desc-cell"},[i("v-uni-text",{staticClass:"cell-tit clamp"},[t._v("备注")]),i("v-uni-input",{staticClass:"desc",attrs:{type:"text",placeholder:"请填写备注信息","placeholder-class":"placeholder"},model:{value:t.desc,callback:function(e){t.desc=e},expression:"desc"}})],1)],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"price-content"},[i("v-uni-text",[t._v("实付款")]),i("v-uni-text",{staticClass:"price-tip"},[t._v("￥")]),i("v-uni-text",{staticClass:"price"},[t._v("475")])],1),i("v-uni-text",{staticClass:"submit",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交订单")])],1),i("v-uni-view",{staticClass:"mask",class:0===t.maskState?"none":1===t.maskState?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggleMask.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"mask-content",on:{click:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.stopPrevent.apply(void 0,arguments)}}},t._l(t.couponList,function(e,a){return i("v-uni-view",{key:a,staticClass:"coupon-item"},[i("v-uni-view",{staticClass:"con"},[i("v-uni-view",{staticClass:"left"},[i("v-uni-text",{staticClass:"title"},[t._v(t._s(e.title))]),i("v-uni-text",{staticClass:"time"},[t._v("有效期至2019-06-30")])],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-text",{staticClass:"price"},[t._v(t._s(e.price))]),i("v-uni-text",[t._v("满30可用")])],1),i("v-uni-view",{staticClass:"circle l"}),i("v-uni-view",{staticClass:"circle r"})],1),i("v-uni-text",{staticClass:"tips"},[t._v("限新用户使用")])],1)}),1)],1)],1)},o=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return o}),i.d(e,"a",function(){return a})}}]);