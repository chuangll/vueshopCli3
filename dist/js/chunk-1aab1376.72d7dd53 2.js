(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1aab1376"],{"3c96":function(t,e,a){"use strict";var n=a("907b"),i=a.n(n);i.a},"5bc9":function(t,e,a){},"640d":function(t,e,a){"use strict";var n=a("ce1e"),i=a.n(n);i.a},"6b4f":function(t,e,a){},8418:function(t,e,a){"use strict";var n=a("c04e"),i=a("9bf2"),s=a("5c6c");t.exports=function(t,e,a){var o=n(e);o in t?i.f(t,o,s(0,a)):t[o]=a}},"907b":function(t,e,a){},9419:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("UserNavbar"),a("main",[a("router-view")],1),a("UserGotop"),a("UserFooter")],1)},i=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("header",{class:{bgTransparent:t.menuBgFn},attrs:{id:"header"}},[a("div",{staticClass:"inner"},[a("router-link",{staticClass:"logo",attrs:{to:"/home",alt:"首頁"}},[a("h1",[t._v("Kai ZBB")])]),a("nav",{attrs:{id:"nav"}},[a("button",{class:{menuActive:"商品列表"===t.isMenuActive,menuActiveFn:t.menuActiveFn},on:{click:function(e){return e.preventDefault(),t.goShop(e)}}},[t._v("商品列表")]),a("button",{class:{menuActive:"優惠活動"===t.isMenuActive,menuActiveFn:t.menuActiveFn},on:{click:function(e){return e.preventDefault(),t.goDiscount(e)}}},[t._v("優惠活動")]),a("button",{class:{menuActive:"健康資訊"===t.isMenuActive,menuActiveFn:t.menuActiveFn},on:{click:function(e){return e.preventDefault(),t.goNews(e)}}},[t._v("健康資訊")]),a("router-link",{attrs:{to:"/login",tag:"button"}},[t._v("會員登入")])],1),a("button",{staticClass:"mobNavIcan",on:{click:function(e){e.preventDefault(),t.isMobNav=!t.isMobNav}}},[a("span",{staticClass:"fa fa-bars"})])],1)]),a("div",{class:{zindex:!t.bagToggle}},[a("div",{class:{bagBg:!1===t.bagToggle},on:{click:function(e){e.preventDefault(),t.bagToggle=!0}}}),a("a",{staticClass:"headerBag",on:{click:function(e){e.preventDefault(),t.bagToggle=!t.bagToggle}}},[a("i",{staticClass:"fa fa-shopping-cart",class:{iconActive:!t.bagToggle}}),a("span",[t._v(t._s(t.CartNumber))])]),a("div",{class:{bagActive:t.bagToggle},attrs:{id:"headerBagInfo"}},[a("div",{staticClass:"bagBgActive"}),""==t.CartItem.carts?a("div",{staticClass:"text-center mb-3"},[t._v("您的購物車是空的")]):t._e(),t._l(t.CartItem.carts,(function(e,n){return a("div",{key:n,staticClass:"bagItem"},[a("div",[a("img",{attrs:{src:e.product.imageUrl,width:"50"}}),a("div",[a("div",{staticClass:"cartItemDelete",on:{click:function(a){return a.preventDefault(),t.cartItemDelete(e)}}},[a("i",{staticClass:"fa fa-times"})]),a("p",[t._v(t._s(e.product.title))]),a("span",{staticClass:"d-block"},[a("p",[t._v(t._s(e.size))]),a("p",[t._v("x"+t._s(e.qty))]),a("p",[t._v(t._s(t._f("currency")(e.product.price))+"/"+t._s(e.product.unit))])])])])])})),a("div",{staticClass:"bagPrice"},[a("div",[a("p",{staticClass:"d-inline-block"},[t._v("NTD.")]),a("p",{staticClass:"d-inline-block"},[t._v(t._s(t._f("currency")(t.CartItem.total)))])]),a("button",{staticClass:"d-block",on:{click:function(e){return e.preventDefault(),t.goCheckProduct(e)}}},[t._v("查看購物車")])])],2)]),a("div",{class:{zindex:t.isSearch}},[a("label",{staticClass:"headerSearch",attrs:{for:"inSearch"},on:{click:function(e){t.isSearch=!t.isSearch}}},[a("i",{staticClass:"fa fa-search",class:{iconActive:t.isSearch}})]),t.isSearch?a("div",{attrs:{id:"search"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],attrs:{id:"inSearch",type:"text",placeholder:"一鍵搜尋所有商品"},domProps:{value:t.id},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goProducts(e)},input:function(e){e.target.composing||(t.id=e.target.value)}}}),a("button",{on:{click:function(e){return e.preventDefault(),t.goProducts(e)}}},[a("i",{staticClass:"fa fa-search"})])]):t._e(),a("div",{class:{bgActive:t.isSearch},on:{click:function(e){e.preventDefault(),t.isSearch=!t.isSearch}}})]),a("div",{class:{navMobBg:t.isMobNav},on:{click:function(e){return e.preventDefault(),t.mobNavFn(e)}}}),a("nav",{class:{active:t.isMobNav},attrs:{id:"navMob"}},[t._m(0),a("div",{staticClass:"menuButton"},[a("button",{class:{menuActive:"商品列表"===t.isMenuActive,menuActiveFn:t.menuActiveFn},on:{click:function(e){return e.preventDefault(),t.goShop(e)}}},[t._v("商品列表")]),a("button",{class:{menuActive:"優惠活動"===t.isMenuActive,menuActiveFn:t.menuActiveFn},on:{click:function(e){return e.preventDefault(),t.goDiscount(e)}}},[t._v("優惠活動")]),a("button",{class:{menuActive:"健康資訊"===t.isMenuActive,menuActiveFn:t.menuActiveFn},on:{click:function(e){return e.preventDefault(),t.goNews(e)}}},[t._v("健康資訊")]),a("router-link",{attrs:{to:"/login",tag:"button"}},[t._v("會員登入")]),a("button",[t._v("其他")])],1),a("button",{staticClass:"close",on:{click:function(e){return e.preventDefault(),t.mobNavFn(e)}}},[a("i",{staticClass:"fa fa-times"})]),t._m(1)])],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("span",[t._v("KizZ BB")]),a("span")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"footer"}},[a("button",[t._v("About")]),a("button",[t._v("Event")]),a("button",[t._v("FAQs")])])}],r=(a("99af"),a("b0c0"),{name:"UserNavbar",data:function(){return{isLoading:!1,isMobNav:!1,bagToggle:!0,isAnimateOut:!1,isCheckOut:!1,isSearch:!1,isMenuActive:"",isMenuActiveMob:"",CartNumber:"",CartItem:{},id:""}},methods:{goShop:function(){var t=this;t.$router.push({path:"/shop/all"}),t.isMobNav=!1},goDiscount:function(){var t=this;t.$router.push({path:"/discount"}),t.isMobNav=!1},goNews:function(){var t=this;t.$router.push({path:"/News"}),t.isMobNav=!1},getCart:function(){var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("lovfee","/cart");t.isLoading=!0,t.$http.get(e).then((function(e){t.$bus.$emit("cartnum:push",e.data.data.carts.length),t.$bus.$emit("cartitem:push",e.data.data),t.isLoading=!1}))},getCartNum:function(t){var e=this;e.CartNumber=t},getCartItem:function(t){var e=this;e.CartItem=t},cartItemDelete:function(t){var e=this;e.isLoading=!0;var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("lovfee","/cart/").concat(t.id);e.$http.delete(a).then((function(t){e.getCart(),e.isLoading=!1}))},mobNavFn:function(){var t=this;t.isMobNav=!1},goProducts:function(){var t=this;t.$bus.$emit("searchId:push",t.id),t.$router.push({path:"/search/".concat(t.id)}),t.isSearch=!1},goCheckProduct:function(){var t=this;t.bagToggle=!0,t.$router.push({path:"/checkProduct"}),window.scrollTo({top:0,behavior:"smooth"})}},computed:{menuActiveFn:function(){var t=this,e=t.$route.name;return t.isMenuActive="All"===e||"Protective"===e||"Whey"===e||"Like"===e||"ShopSearch"===e||"ShopInside"===e?"商品列表":"Discount"===e||"Turn"===e?"優惠活動":"News"===e?"健康資訊":""},menuBgFn:function(){var t=this,e=t.$route.name;return"Home"===e}},created:function(){var t=this;t.$bus.$on("cartnum:push",(function(e){t.getCartNum(e)})),t.$bus.$on("cartitem:push",(function(e){t.getCartItem(e)})),t.$bus.$on("bagToggle:push",(function(e){t.bagToggle=e})),t.getCart()}}),c=r,u=(a("3c96"),a("2877")),l=Object(u["a"])(c,s,o,!1,null,null,null),v=l.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"gotop"},on:{click:function(e){return e.preventDefault(),t.gotopFn(e)}}},[a("i",{staticClass:"fa fa-arrow-up"})])},m=[],p={data:function(){return{}},methods:{gotopFn:function(){var t=new Date,e=document.body.scrollTop||document.documentElement.scrollTop,a=500,n=e,i=requestAnimationFrame((function s(){var o=a-Math.max(0,t-+new Date+a);document.documentElement.scrollTop=document.body.scrollTop=o*-n/a+e,i=requestAnimationFrame(s),o===a&&cancelAnimationFrame(i)}))},gotopShow:function(){window.addEventListener("scroll",(function(){var t=document.querySelector("#gotop");document.documentElement.scrollTop>100?t.style.display="block":t.style.display="none"}))}},created:function(){var t=this;t.gotopShow()}},d=p,h=(a("640d"),Object(u["a"])(d,f,m,!1,null,null,null)),g=h.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{attrs:{id:"footer"}},[t._m(0),a("div",{staticClass:"copyright text-center"},[a("font",{staticStyle:{"vertical-align":"inherit"}},[t._v("©Kaiz.BB【僅當練習作品無商業用途】")])],1)])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info row"},[a("div",{staticClass:"contact col-sm-5"},[a("span",[t._v("凱力位置")]),a("div",{attrs:{id:"map"}})]),a("div",{staticClass:"about col-sm-4 py-sm-0 py-3"},[a("span",[t._v("關於凱力")]),a("div",[a("p",[t._v("隨著健身產業的新興,全民的健身意識抬頭,到健身房報到已經成了不少人每天的必須行程,凱力健人嚴選致力於打造運動夥伴們最優質的健身護具,及品質最高的乳清蛋白,讓運動夥伴們可以專心訓練,由凱力做最強大的後盾與你們一同成長.")])])]),a("div",{staticClass:"follow col-sm-3 p-sm"},[a("span",[t._v("追蹤凱力")]),a("div",[a("a",{attrs:{href:"https://twitter.com/?lang=zh-tw"}},[a("i",{staticClass:"fa fa-twitter-square"}),t._v("Twitter ")]),a("a",{attrs:{href:"https://zh-tw.facebook.com/"}},[a("i",{staticClass:"fa fa-facebook-square"}),t._v("Facebook ")]),a("a",{attrs:{href:"https://www.instagram.com/?hl=zh-tw"}},[a("i",{staticClass:"fa fa-instagram"}),t._v("Instagram ")])])])])}],y=(a("d81d"),{name:"Restaurants",data:function(){return{map:null,lat:25.063891,lng:121.642334}},methods:{initMap:function(){var t=this;t.map=new google.maps.Map(document.getElementById("map"),{styles:[{elementType:"geometry",stylers:[{hue:"#ff4400"},{saturation:-68},{lightness:-4},{gamma:.72}]},{featureType:"road",elementType:"labels.icon"},{featureType:"landscape.man_made",elementType:"geometry",stylers:[{hue:"#0077ff"},{gamma:3.1}]},{featureType:"water",stylers:[{hue:"#00ccff"},{gamma:.44},{saturation:-33}]},{featureType:"poi.park",stylers:[{hue:"#44ff00"},{saturation:-23}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{hue:"#007fff"},{gamma:.77},{saturation:65},{lightness:99}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{gamma:.11},{weight:5.6},{saturation:99},{hue:"#0091ff"},{lightness:-86}]},{featureType:"transit.line",elementType:"geometry",stylers:[{lightness:-48},{hue:"#ff5e00"},{gamma:1.2},{saturation:-23}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{saturation:-64},{hue:"#ff9100"},{lightness:16},{gamma:.47},{weight:2.7}]}],center:{lat:t.lat,lng:t.lng},zoom:17,maxZoom:20,minZoom:3,streetViewControl:!1,mapTypeControl:!1})},setMarker:function(){var t=this;new google.maps.Marker({position:{lat:t.lat,lng:t.lng},map:t.map})}},mounted:function(){var t=this;t.initMap(),t.setMarker()}}),C=y,k=(a("9839"),Object(u["a"])(C,b,_,!1,null,"5c13d22b",null)),w=k.exports,A={components:{UserNavbar:v,UserGotop:g,UserFooter:w},data:function(){return{}}},T=A,M=(a("f451"),Object(u["a"])(T,n,i,!1,null,null,null));e["default"]=M.exports},9839:function(t,e,a){"use strict";var n=a("6b4f"),i=a.n(n);i.a},"99af":function(t,e,a){"use strict";var n=a("23e7"),i=a("d039"),s=a("e8b5"),o=a("861d"),r=a("7b0b"),c=a("50c4"),u=a("8418"),l=a("65f0"),v=a("1dde"),f=a("b622"),m=a("2d00"),p=f("isConcatSpreadable"),d=9007199254740991,h="Maximum allowed index exceeded",g=m>=51||!i((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=v("concat"),_=function(t){if(!o(t))return!1;var e=t[p];return void 0!==e?!!e:s(t)},y=!g||!b;n({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,n,i,s,o=r(this),v=l(o,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(s=-1===e?o:arguments[e],_(s)){if(i=c(s.length),f+i>d)throw TypeError(h);for(a=0;a<i;a++,f++)a in s&&u(v,f,s[a])}else{if(f>=d)throw TypeError(h);u(v,f++,s)}return v.length=f,v}})},b0c0:function(t,e,a){var n=a("83ab"),i=a("9bf2").f,s=Function.prototype,o=s.toString,r=/^\s*function ([^ (]*)/,c="name";!n||c in s||i(s,c,{configurable:!0,get:function(){try{return o.call(this).match(r)[1]}catch(t){return""}}})},ce1e:function(t,e,a){},d81d:function(t,e,a){"use strict";var n=a("23e7"),i=a("b727").map,s=a("1dde"),o=a("ae40"),r=s("map"),c=o("map");n({target:"Array",proto:!0,forced:!r||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},f451:function(t,e,a){"use strict";var n=a("5bc9"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-1aab1376.72d7dd53.js.map