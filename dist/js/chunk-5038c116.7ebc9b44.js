(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5038c116"],{2532:function(t,e,i){"use strict";var n=i("23e7"),r=i("5a34"),c=i("1d80"),a=i("ab13");n({target:"String",proto:!0,forced:!a("includes")},{includes:function(t){return!!~String(c(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},2657:function(t,e,i){},"44e7":function(t,e,i){var n=i("861d"),r=i("c6b6"),c=i("b622"),a=c("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==r(t))}},"45fc":function(t,e,i){"use strict";var n=i("23e7"),r=i("b727").some,c=i("a640"),a=i("ae40"),o=c("some"),s=a("some");n({target:"Array",proto:!0,forced:!o||!s},{some:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"5a34":function(t,e,i){var n=i("44e7");t.exports=function(t){if(n(t))throw TypeError("The method doesn't accept regular expressions");return t}},8317:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pt150",attrs:{id:"shop"}},[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),i("div",{staticClass:"row container m-auto"},[i("div",{staticClass:"menuList col-md"},[i("button",{class:{listActive:"全部商品"===t.isMenuActive},on:{click:function(e){return e.preventDefault(),t.getAll()}}},[t._v("全部商品")]),i("button",{class:{listActive:"健身護具"===t.isMenuActive},on:{click:function(e){return e.preventDefault(),t.getProtective()}}},[t._v("健身護具")]),i("button",{class:{listActive:"優質乳清"===t.isMenuActive},on:{click:function(e){return e.preventDefault(),t.getWhey()}}},[t._v("優質乳清")]),i("button",{class:{listActive:"最愛商品"===t.isMenuActive},on:{click:function(e){return e.preventDefault(),t.getLike()}}},[t._v("最愛商品")])]),i("div",{staticClass:"menuMain col-md-10"},[i("div",{staticClass:"menuBar row col-11 mx-0 mb-4 p-0"},[i("div",{staticClass:"box1 p-0 col-4",class:{active:"全部商品"===t.isMenuActive},on:{click:function(e){return e.preventDefault(),t.getAll()}}},[i("p",[t._v("全部商品")])]),i("div",{staticClass:"box2 p-0 col-4",class:{active:"健身護具"===t.isMenuActive},on:{click:function(e){return e.preventDefault(),t.getProtective()}}},[i("p",[t._v("健身護具")])]),i("div",{staticClass:"box3 p-0 col-4",class:{active:"優質乳清"===t.isMenuActive},on:{click:function(e){return e.preventDefault(),t.getWhey()}}},[i("p",[t._v("優質乳清")])]),i("div",{staticClass:"box4 p-0 col-4",class:{active:"最愛商品"===t.isMenuActive},on:{click:function(e){return e.preventDefault(),t.getLike()}}},[i("p",[t._v("最愛商品")])])]),i("div",{staticClass:"subcate mb-3"},[t._v(t._s(t.isMenuActive))]),i("div",{staticClass:"row"},t._l(t.filteredProducts,(function(e,n){return i("div",{key:n,staticClass:"col-6 col-md-4 col-lg-3 mb-4"},[i("div",{staticClass:"border-0 shadow-sm shop_info",on:{click:function(i){return i.preventDefault(),t.goInside(e.id)}}},[0!=e.origin_price?i("span",{staticClass:"sale_style",class:{soldOutStyle:0===e.in_stock}},[t._v("SALE")]):t._e(),i("img",{class:{soldOutStyle:0===e.in_stock},attrs:{src:e.imageUrl,alt:e.title}})]),i("div",{staticClass:"item_info",on:{click:function(i){return i.preventDefault(),t.goInside(e.id)}}},[i("p",{staticClass:"pdname",class:{soldOutStyle:0===e.in_stock}},[t._v(t._s(e.title))]),i("p",{staticClass:"price",class:{soldOutStyle:0===e.in_stock}},[i("span",{class:{saleFont:0!=e.origin_price}},[t._v(t._s(t._f("currency")(e.price)))]),0!=e.origin_price?i("span",{staticClass:"old"},[t._v(t._s(t._f("currency")(e.origin_price)))]):t._e()]),i("span",{staticClass:"like"},[t.getIfLocalData(e)?i("i",{staticClass:"fa fa-heart addLike",on:{click:function(i){return i.stopPropagation(),t.removeLike(e)}}}):i("i",{staticClass:"fa fa-heart-o",on:{click:function(i){return i.stopPropagation(),t.addLike(e)}}})])]),0===e.in_stock?i("div",{staticClass:"soldOut"},[i("p",[t._v("SOLD OUT")])]):t._e()])})),0)])])],1)},r=[],c=(i("99af"),i("4de4"),i("c740"),i("caad"),i("45fc"),i("a434"),i("b0c0"),i("2532"),{data:function(){return{isLoading:!1,isLike:!1,products:[],isMenuActive:"全部商品",searchId:"",likeData:[]}},methods:{getProducts:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var t=this,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("lovfee","/products/all");t.isLoading=!0,t.$http.get(e).then((function(e){t.products=e.data.products,t.isLoading=!1}))},getAll:function(){var t=this;t.$router.push("/shop/all")},getProtective:function(){var t=this;t.$router.push("/shop/protective")},getWhey:function(){var t=this;t.$router.push("/shop/whey")},getLike:function(){var t=this;t.$router.push("/shop/like")},goInside:function(t){var e=this;e.$router.push("/shop_inside/".concat(t)),window.scrollTo({top:0,behavior:"smooth"})},getLocalData:function(){var t=this;t.likeData=JSON.parse(localStorage.getItem("likeData"))||[]},getIfLocalData:function(t){var e=this;return e.likeData.some((function(e){return t.id===e.id}))},addLike:function(t){var e=this,i={title:t.title,id:t.id};e.likeData.push(i),localStorage.setItem("likeData",JSON.stringify(e.likeData))},removeLike:function(t){var e=this,i=e.likeData.findIndex((function(e){return e.id===t.id}));e.likeData.splice(i,1),localStorage.setItem("likeData",JSON.stringify(e.likeData))}},computed:{filteredProducts:function(){var t=this,e=t.$route.name,i="";if("All"===e)return t.isMenuActive="全部商品",t.products;if("Protective"===e)return t.isMenuActive="健身護具",i=t.products.filter((function(t){return"護具"===t.category})),i;if("Whey"===e)return t.isMenuActive="優質乳清",i=t.products.filter((function(t){return"乳清"===t.category})),i;if("Like"===e){var n=this;return n.isMenuActive="最愛商品",i=n.products.filter((function(t,e,i){return n.likeData.some((function(e){return t.id===e.id}))})),i}return i=t.products.filter((function(e){return e.title.includes(t.searchId)})),t.isMenuActive='查詢有關"'.concat(t.searchId,'"的結果'),i}},created:function(){var t=this;t.searchId=t.$route.params.id,t.getProducts(),t.getLocalData(),t.$bus.$on("searchId:push",(function(e){t.searchId=e}))}}),a=c,o=(i("90c3"),i("2877")),s=Object(o["a"])(a,n,r,!1,null,"24064220",null);e["default"]=s.exports},8418:function(t,e,i){"use strict";var n=i("c04e"),r=i("9bf2"),c=i("5c6c");t.exports=function(t,e,i){var a=n(e);a in t?r.f(t,a,c(0,i)):t[a]=i}},"90c3":function(t,e,i){"use strict";var n=i("2657"),r=i.n(n);r.a},"99af":function(t,e,i){"use strict";var n=i("23e7"),r=i("d039"),c=i("e8b5"),a=i("861d"),o=i("7b0b"),s=i("50c4"),u=i("8418"),l=i("65f0"),d=i("1dde"),f=i("b622"),v=i("2d00"),p=f("isConcatSpreadable"),h=9007199254740991,g="Maximum allowed index exceeded",k=v>=51||!r((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),m=d("concat"),b=function(t){if(!a(t))return!1;var e=t[p];return void 0!==e?!!e:c(t)},_=!k||!m;n({target:"Array",proto:!0,forced:_},{concat:function(t){var e,i,n,r,c,a=o(this),d=l(a,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(c=-1===e?a:arguments[e],b(c)){if(r=s(c.length),f+r>h)throw TypeError(g);for(i=0;i<r;i++,f++)i in c&&u(d,f,c[i])}else{if(f>=h)throw TypeError(g);u(d,f++,c)}return d.length=f,d}})},a434:function(t,e,i){"use strict";var n=i("23e7"),r=i("23cb"),c=i("a691"),a=i("50c4"),o=i("7b0b"),s=i("65f0"),u=i("8418"),l=i("1dde"),d=i("ae40"),f=l("splice"),v=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,h=Math.min,g=9007199254740991,k="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!f||!v},{splice:function(t,e){var i,n,l,d,f,v,m=o(this),b=a(m.length),_=r(t,b),A=arguments.length;if(0===A?i=n=0:1===A?(i=0,n=b-_):(i=A-2,n=h(p(c(e),0),b-_)),b+i-n>g)throw TypeError(k);for(l=s(m,n),d=0;d<n;d++)f=_+d,f in m&&u(l,d,m[f]);if(l.length=n,i<n){for(d=_;d<b-n;d++)f=d+n,v=d+i,f in m?m[v]=m[f]:delete m[v];for(d=b;d>b-n+i;d--)delete m[d-1]}else if(i>n)for(d=b-n;d>_;d--)f=d+n-1,v=d+i-1,f in m?m[v]=m[f]:delete m[v];for(d=0;d<i;d++)m[d+_]=arguments[d+2];return m.length=b-n+i,l}})},ab13:function(t,e,i){var n=i("b622"),r=n("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[r]=!1,"/./"[t](e)}catch(n){}}return!1}},b0c0:function(t,e,i){var n=i("83ab"),r=i("9bf2").f,c=Function.prototype,a=c.toString,o=/^\s*function ([^ (]*)/,s="name";!n||s in c||r(c,s,{configurable:!0,get:function(){try{return a.call(this).match(o)[1]}catch(t){return""}}})},c740:function(t,e,i){"use strict";var n=i("23e7"),r=i("b727").findIndex,c=i("44d2"),a=i("ae40"),o="findIndex",s=!0,u=a(o);o in[]&&Array(1)[o]((function(){s=!1})),n({target:"Array",proto:!0,forced:s||!u},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(o)},caad:function(t,e,i){"use strict";var n=i("23e7"),r=i("4d64").includes,c=i("44d2"),a=i("ae40"),o=a("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!o},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c("includes")}}]);
//# sourceMappingURL=chunk-5038c116.7ebc9b44.js.map