(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18af4396"],{8418:function(t,e,a){"use strict";var o=a("c04e"),n=a("9bf2"),i=a("5c6c");t.exports=function(t,e,a){var s=o(e);s in t?n.f(t,s,i(0,a)):t[s]=a}},"99af":function(t,e,a){"use strict";var o=a("23e7"),n=a("d039"),i=a("e8b5"),s=a("861d"),r=a("7b0b"),l=a("50c4"),c=a("8418"),p=a("65f0"),u=a("1dde"),d=a("b622"),m=a("2d00"),v=d("isConcatSpreadable"),C=9007199254740991,f="Maximum allowed index exceeded",g=m>=51||!n((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),h=u("concat"),_=function(t){if(!s(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},b=!g||!h;o({target:"Array",proto:!0,forced:b},{concat:function(t){var e,a,o,n,i,s=r(this),u=p(s,0),d=0;for(e=-1,o=arguments.length;e<o;e++)if(i=-1===e?s:arguments[e],_(i)){if(n=l(i.length),d+n>C)throw TypeError(f);for(a=0;a<n;a++,d++)a in i&&c(u,d,i[a])}else{if(d>=C)throw TypeError(f);c(u,d++,i)}return u.length=d,u}})},d0a3:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"text-right mt-4"},[a("button",{staticClass:"btn btn-primary",attrs:{"data-toggle":"modal"},on:{click:function(e){return t.openCouponModal(!0)}}},[t._v("建立新的優惠卷")])]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",{},t._l(t.coupons,(function(e,o){return a("tr",{key:o},[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(e.percent))]),a("td",[t._v(t._s(e.due_date))]),a("td",[1==e.is_enabled?a("span",{staticClass:"text-success"},[t._v("已啟用")]):a("span",[t._v("未啟用")])]),a("td",[a("button",{staticClass:"btn btn-outline-primary btn-sm",on:{click:function(a){return t.openCouponModal(!1,e)}}},[t._v("編輯")]),a("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(a){return t.removeCoupon(e)}}},[t._v("刪除")])])])})),0)]),a("div",[a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_pre}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.getCoupon(t.pagination.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pagination.total_pages,(function(e){return a("li",{key:e,staticClass:"page-item",class:{active:t.pagination.current_page===e}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.getCoupon(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item",class:{disabled:!t.pagination.has_next}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.getCoupon(t.pagination.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])]),a("div",{staticClass:"modal fade",attrs:{id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-md",attrs:{role:"document"}},[a("div",{staticClass:"modal-content border-0"},[a("div",{staticClass:"modal-header bg-dark text-white"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[1==t.modalTitle?a("span",[t._v("新增優惠卷")]):a("span",[t._v("編輯優惠卷")])]),t._m(1)]),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.title,expression:"tempCoupon.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入標題"},domProps:{value:t.tempCoupon.title},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"title",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"code"}},[t._v("優惠碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.code,expression:"tempCoupon.code"}],staticClass:"form-control",attrs:{type:"text",id:"code",placeholder:"請輸入優惠碼"},domProps:{value:t.tempCoupon.code},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"code",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"due_date"}},[t._v("到期日")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.due_date,expression:"tempCoupon.due_date"}],staticClass:"form-control",attrs:{type:"date",id:"due_date",placeholder:"請輸入截止日"},domProps:{value:t.tempCoupon.due_date},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"due_date",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"percent"}},[t._v("折扣百分比")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.percent,expression:"tempCoupon.percent"}],staticClass:"form-control",attrs:{type:"number",id:"percent",placeholder:"請輸入折扣"},domProps:{value:t.tempCoupon.percent},on:{input:function(e){e.target.composing||t.$set(t.tempCoupon,"percent",e.target.value)}}})]),a("hr"),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempCoupon.is_enabled,expression:"tempCoupon.is_enabled"}],staticClass:"form-check-input",attrs:{type:"checkbox","true-value":1,"false-value":0,id:"is_enabled"},domProps:{checked:Array.isArray(t.tempCoupon.is_enabled)?t._i(t.tempCoupon.is_enabled,null)>-1:t._q(t.tempCoupon.is_enabled,1)},on:{change:function(e){var a=t.tempCoupon.is_enabled,o=e.target,n=o.checked?1:0;if(Array.isArray(a)){var i=null,s=t._i(a,i);o.checked?s<0&&t.$set(t.tempCoupon,"is_enabled",a.concat([i])):s>-1&&t.$set(t.tempCoupon,"is_enabled",a.slice(0,s).concat(a.slice(s+1)))}else t.$set(t.tempCoupon,"is_enabled",n)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否啟用")])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.updateCoupon}},[t._v("確認")])])])])])],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("名稱")]),a("th",[t._v("折扣百分比")]),a("th",[t._v("到期日")]),a("th",[t._v("是否啟用")]),a("th",[t._v("編輯")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],i=(a("99af"),a("a881")),s=a.n(i),r={data:function(){return{pagination:"",modalTitle:"",isLoading:!1,coupons:{},tempCoupon:{title:"",is_enabled:"",percent:"",due_date:"",code:""},isNew:!1}},methods:{openCouponModal:function(t,e){var a=this;s()("#couponModal").modal("show"),a.isNew=t,t?(a.modalTitle=!0,a.tempCoupon={}):(a.modalTitle=!1,a.tempCoupon=Object.assign({},e))},updateCoupon:function(){var t,e=this;e.isLoading=!0,e.isNew?(t="".concat("https://vue-course-api.hexschool.io","/api/").concat("lovfee","/admin/coupon"),e.$http.post(t,{data:e.tempCoupon}).then((function(t){e.getCoupon()}))):(t="".concat("https://vue-course-api.hexschool.io","/api/").concat("lovfee","/admin/coupon/").concat(e.tempCoupon.id),e.$http.put(t,{data:e.tempCoupon}).then((function(t){e.getCoupon()}))),e.isLoading=!1,s()("#couponModal").modal("hide")},removeCoupon:function(t){var e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("lovfee","/admin/coupon/").concat(t.id);e.isLoading=!0,e.$http.delete(a).then((function(t){e.coupons=t.data.coupons,e.getCoupon(),e.isLoading=!1}))},getCoupon:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("lovfee","/admin/coupons?page=").concat(t);e.isLoading=!0,e.$http.get(a,e.tempProduct).then((function(t){e.coupons=t.data.coupons,e.pagination=t.data.pagination,e.isLoading=!1}))}},created:function(){var t=this;t.getCoupon()}},l=r,c=a("2877"),p=Object(c["a"])(l,o,n,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-18af4396.a2d87a40.js.map