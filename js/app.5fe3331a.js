(function(t){function e(e){for(var a,r,c=e[0],s=e[1],l=e[2],f=0,d=[];f<c.length;f++)r=c[f],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01ff":function(t,e,n){},"0db1":function(t,e,n){"use strict";n("01ff")},1918:function(t,e,n){"use strict";n("38aa")},"25e0":function(t,e,n){"use strict";n("bf50")},"38aa":function(t,e,n){},5414:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("bc3a"),i=n.n(o),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},c=[],s={name:"app",components:{}},l=s,u=(n("0db1"),n("2877")),f=Object(u["a"])(l,r,c,!1,null,null,null),d=f.exports,p=n("8c4f"),m=(n("7f7f"),function(){var t=this,e=t._self._c;return e("section",{staticClass:"index container"},[e("div",{staticClass:"left-bar",style:{left:t.isLeftbar?0:"-249px"}},[t._m(0),e("el-row",[e("el-col",{attrs:{span:24}},[e("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":t.active,"background-color":"#30333c","text-color":"#6b7386","active-text-color":"#fff"}},t._l(t.newDataList,(function(n,a){return e("el-submenu",{key:n.name,attrs:{index:n.name}},[e("template",{slot:"title"},[e("i",{class:n.icon}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(n.name))])]),t._l(n.data,(function(n,a){return e("el-menu-item",{key:n._id,attrs:{index:n._id}},[e("a",{attrs:{href:"#".concat(n.classify)}},[e("i",{class:n.icon}),e("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(n.classify))])])])}))],2)})),1)],1)],1)],1),e("section",{staticClass:"main"},[e("div",{attrs:{id:"mainContent"}},[e("div",{attrs:{id:"menu-box"}},[e("div",{attrs:{id:"menu"}},[e("input",{attrs:{type:"checkbox",id:"menu-form"}}),e("label",{staticClass:"menu-spin",attrs:{for:"menu-form"},on:{click:function(e){t.isLeftbar=!t.isLeftbar}}},[e("div",{staticClass:"line diagonal line-1"}),e("div",{staticClass:"line horizontal"}),e("div",{staticClass:"line diagonal line-2"})])])]),t._l(t.data,(function(n,a){return e("div",{key:a,ref:"box-".concat(a),refInFor:!0,staticClass:"box"},[e("a",{attrs:{id:"#".concat(n.classify),name:n.classify}}),e("div",{staticClass:"sub-category"},[e("div",[e("i",{staticClass:"icon",class:n.icon}),t._v("\n            "+t._s(n.classify)+"\n          ")])]),t._l(n.sites,(function(t,n){return e("NavItem",{key:"sub-"+n,attrs:{data:t}})}))],2)}))],2),t._m(1),e("back-top")],1)])}),h=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("img",{staticClass:"icon-logo",attrs:{src:"/favicon.ico"}}),e("span",[t._v("猿梦极客导航")])])},function(){var t=this,e=t._self._c;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"copyright"},[e("div",[t._v("\n          Copyright © 2019- 2050\n          "),e("a",{attrs:{href:"https://github.com/geekape/blog"}},[t._v("钟储兵博客")]),e("a",{attrs:{href:"https://github.com/geekape/geek-navigation"}},[t._v("导航源码下载")])])])])}],v=(n("6b54"),n("96cf"),n("3b8d")),b=function(){var t=this,e=t._self._c;return e("div",{staticClass:"backtop",on:{click:t.goTop}},[e("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"返回顶部",placement:"left-start"}},[e("el-button",[e("i",{staticClass:"el-icon-upload2"})])],1)],1)},g=[],y={methods:{goTop:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0}}},_=y,x=(n("6355"),Object(u["a"])(_,b,g,!1,null,"99508432",null)),w=x.exports,k=function(){var t=this,e=t._self._c;return e("a",{staticClass:"item",attrs:{target:"_blank",href:t.data.href}},[e("div",{staticClass:"logo"},[e("el-image",{attrs:{src:t.data.logo,fit:"cover",lazy:""}}),e("span",[t._v(t._s(t.data.name))])],1),e("div",{staticClass:"desc"},[t._v(t._s(t.data.desc||"这个网站什么描述也没有..."))])])},O=[],C={props:{data:Object}},S=C,T=(n("1918"),Object(u["a"])(S,k,O,!1,null,"43c30294",null)),j=T.exports,z={data:function(){return{active:"0",data:[],scroll:0,selfIndex:0,isLeftbar:!0}},components:{BackTop:w,NavItem:j},computed:{newDataList:function(){var t=[],e={},n={},a={},o={};return e.name="产品",e.icon="csz czs-circle",e.data=this.data.filter((function(t){return-1!=t.classify.indexOf("［产品］")})),t.push(e),n.name="运营",n.icon="csz czs-square",n.data=this.data.filter((function(t){return-1!=t.classify.indexOf("［运营］")})),t.push(n),a.name="设计",a.icon="csz czs-triangle",a.data=this.data.filter((function(t){return-1!=t.classify.indexOf("［设计］")})),t.push(a),o.name="前端",o.icon="csz czs-camber",o.data=this.data.filter((function(t){return-1!=t.classify.indexOf("［前端］")})),t.push(o),t}},watch:{active:function(){var t=document.querySelector(".left-bar").scrollTop,e=this.active,n=this.data.length;e>=10&&e<=n&&(document.querySelector(".left-bar").scrollTop=t+60),e<10&&e>=0&&(document.querySelector(".left-bar").scrollTop=t-60)}},methods:{jump:function(t){this.selfIndex=t;var e=document.querySelectorAll(".box"),n=e[t].offsetTop-10;window.screenWidth=document.body.clientWidth,window.screenWidth<481&&(n-=50),document.body.scrollTop=n,document.documentElement.scrollTop=n,window.pageYOffset=n},getData:function(){var t=Object(v["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("./nav.json");case 2:e=t.sent,this.data=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),dataScroll:function(){for(var t=this,e=document.documentElement.scrollTop||document.body.scrollTop,n=document.querySelectorAll(".box"),a=0;a<n.length;a++)e>=n[a].offsetTop&&(t.selfIndex=a)},handleScroll:function(){for(var t=this,e=t.data.length,n=document.querySelectorAll(".box"),a=document.body.scrollTop||document.documentElement.scrollTop,o=e-1;o>=0;o--)if(a>=n[o].offsetTop-20){t.active=o.toString();break}}},mounted:function(){},created:function(){var t=this;this.getData(),window.onresize=function(){return function(){window.screenWidth=document.body.clientWidth,window.screenWidth<481?t.isLeftbar=!1:t.isLeftbar=!0}()},window.onresize()}},I=z,L=(n("25e0"),Object(u["a"])(I,m,h,!1,null,"7eef0d90",null)),q=L.exports;a["default"].use(p["a"]);var P=[{path:"/",name:"index",component:q}],W=new p["a"]({mode:"history",routes:P}),D=W,N=n("96eb"),A=n.n(N);function E(){var t=A.a.mock({"data|10-20":[{title:"@ctitle(4)",icon:"iconfont icon-zixun","subData|2-20":[{title:"@ctitle(2,6)",href:"http://www.cndz.com",logo:"@image('100x100', @color())",des:"@cparagraph(1,2)"}]}]});return t}A.a.mock("http://text.com",E);var J=n("d225"),M=n("b0b4"),$=function(){function t(e){Object(J["a"])(this,t),this.prefix=e?"".concat(e,"_"):""}return Object(M["a"])(t,[{key:"get",value:function(t){return"undefined"!==localStorage.getItem(this.prefix+t)?JSON.parse(localStorage.getItem(this.prefix+t)):null}},{key:"set",value:function(t,e){localStorage.setItem(this.prefix+t,JSON.stringify(e))}},{key:"remove",value:function(t){localStorage.removeItem(this.prefix+t)}},{key:"clear",value:function(){localStorage.clear()}}]),t}(),R=(n("5414"),n("712d"),n("5c96")),B=n.n(R),F=(n("0fae"),new $("NAV"));a["default"].config.productionTip=!1,a["default"].use(B.a),a["default"].prototype.$storage=F,a["default"].prototype.$http=i.a,a["default"].config.productionTip=!1,new a["default"]({router:D,render:function(t){return t(d)}}).$mount("#app")},6355:function(t,e,n){"use strict";n("a962")},"712d":function(t,e,n){},a962:function(t,e,n){},bf50:function(t,e,n){}});
//# sourceMappingURL=app.5fe3331a.js.map