(function(e){function t(t){for(var r,o,u=t[0],i=t[1],d=t[2],s=0,l=[];s<u.length;s++)o=u[s],a[o]&&l.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-09d07df8":"1b7c359d","chunk-2d0ab46c":"a3a6b21e","chunk-2d0c8bf7":"f1c5b23c","chunk-2d0cfaef":"a60ddaae","chunk-2d0cfb1f":"8db079bb","chunk-2d0e4e1f":"969c8e79","chunk-2d0e5f9e":"9f0cd8ae","chunk-2d0e944c":"371a14c6","chunk-2d2104c6":"02656332","chunk-2d21a3d2":"e7d9ba9f","chunk-2d21e56a":"6105e9af","chunk-2d226cab":"3159dacd","chunk-2d226cfb":"044d6dab","chunk-2d229205":"021a61fe","chunk-360cb930":"fca894fd","chunk-53d57b14":"d41de7a5","chunk-f3294738":"02ee0e7c"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-09d07df8":1,"chunk-360cb930":1,"chunk-53d57b14":1,"chunk-f3294738":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-09d07df8":"9ae4b9e6","chunk-2d0ab46c":"31d6cfe0","chunk-2d0c8bf7":"31d6cfe0","chunk-2d0cfaef":"31d6cfe0","chunk-2d0cfb1f":"31d6cfe0","chunk-2d0e4e1f":"31d6cfe0","chunk-2d0e5f9e":"31d6cfe0","chunk-2d0e944c":"31d6cfe0","chunk-2d2104c6":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-2d21e56a":"31d6cfe0","chunk-2d226cab":"31d6cfe0","chunk-2d226cfb":"31d6cfe0","chunk-2d229205":"31d6cfe0","chunk-360cb930":"85795038","chunk-53d57b14":"30210c18","chunk-f3294738":"ce05c6b7"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var d=c[u],s=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(s===r||s===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){d=l[u],s=d.getAttribute("data-href");if(s===r||s===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=c);var d,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e),d=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}a[e]=void 0}};var l=setTimeout(function(){d({type:"timeout",target:s})},12e4);s.onerror=s.onload=d,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/dynamic-Router-master2/dist/",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],s=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var f=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3bea":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],c=n("0c7c"),u={},i=Object(c["a"])(u,o,a,!1,null,null,null),d=i.exports,s=n("8c4f"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrapper",class:e.classObj},[n("sidebar",{staticClass:"sidebar-container"}),n("div",{staticClass:"main-container"},[n("my-header"),n("router-view")],1)],1)},f=[],h=n("cebc"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-menu",{attrs:{"default-active":e.$route.path,"background-color":e.variables.menuBg,"text-color":e.variables.menuText,"active-text-color":e.variables.menuActiveText,mode:"vertical",router:"",collapse:e.isCollapse,"unique-opened":!1,"collapse-transition":!1}},[n("sidebar-item",{attrs:{menu:e.getrouters}})],1)],1)},p=[],b=n("2f62"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-wrapper"},[e._l(e.menu,function(t){return[t.children||t.hidden?e._e():n("el-menu-item",{key:t.path,attrs:{index:e.parent?e.parent+"/"+t.path:t.path}},[n("i",{class:t.meta.icon}),n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.meta.title))])]),t.children&&!t.hidden?n("el-submenu",{key:t.path,attrs:{index:e.parent?e.parent+"/"+t.path:t.path}},[n("template",{slot:"title"},[n("i",{class:t.meta.icon}),n("span",[e._v(e._s(t.meta.title))])]),n("sidebar-item",{attrs:{menu:t.children,parent:e.parent?e.parent+"/"+t.path:t.path}})],2):e._e()]})],2)},v=[],k={name:"SidebarItem",props:["menu","parent"],data:function(){return{}}},w=k,E=(n("c8a2"),Object(c["a"])(w,g,v,!1,null,"820fa05c",null)),O=E.exports,T=n("cf1e"),y=n.n(T),S={components:{SidebarItem:O},computed:Object(h["a"])({},Object(b["b"])(["getrouters","getsidebar"]),{isCollapse:function(){return!this.getsidebar.opened},variables:function(){return y.a}})},_=S,j=Object(c["a"])(_,m,p,!1,null,null,null),x=j.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{attrs:{id:"header-sidebar-open-close"}},[n("i",{class:[e.getsidebar.opened?"el-icon-caret-right":"el-icon-caret-left","icon"],on:{click:e.toggleSideBar}})]),n("el-dropdown",{staticClass:"avatar-container",attrs:{id:"header-right"}},[n("span",[n("img",{staticClass:"user-avatar",attrs:{src:e.getavatar+"?imageView2/1/w/40/h/40"}})]),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{attrs:{to:"/"}},[n("el-dropdown-item",[e._v("Home")])],1),n("el-dropdown-item",{attrs:{divided:""},nativeOn:{click:function(t){return e.logout(t)}}},[e._v("退出登录")])],1)],1)],1)},R=[],A=(n("96cf"),n("3b8d")),B={methods:{toggleSideBar:function(){this.$store.dispatch("ToggleSideBar")},logout:function(){var e=Object(A["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("LogOut");case 2:this.$router.push("/login");case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},computed:Object(h["a"])({},Object(b["b"])(["getsidebar","getavatar"]))},I=B,N=(n("e5da"),Object(c["a"])(I,M,R,!1,null,"05b1cc86",null)),C=N.exports,L={components:{sidebar:x,MyHeader:C},computed:Object(h["a"])({},Object(b["b"])(["getsidebar"]),{classObj:function(){return{hideSidebar:!this.getsidebar.opened,openSidebar:this.getsidebar.opened}}}),methods:{}},$=L,P=(n("b575"),Object(c["a"])($,l,f,!1,null,"4302f4be",null)),G=P.exports;r["default"].use(s["a"]);var H=[{path:"/login",hidden:!0,component:function(){return n.e("chunk-09d07df8").then(n.bind(null,"9ed6"))}},{path:"/",component:G,redirect:"/home",name:"Home",hidden:!0,children:[{path:"home",component:function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))}}]}],q=[{path:"/home",component:G,meta:{title:"Home",icon:"el-icon-menu"}},{path:"/userpower1",component:G,redirect:"/userpower1/1-1",name:"userpower1",meta:{title:"权限测试1",icon:"el-icon-tickets",role:["0","1","2"]},children:[{path:"1-1",name:"1-1",component:function(){return n.e("chunk-2d0cfb1f").then(n.bind(null,"658b"))},meta:{title:"1-1",role:["0"]}},{path:"1-2",name:"1-2",component:function(){return n.e("chunk-2d226cfb").then(n.bind(null,"e9f7"))},hidden:["0"],meta:{title:"1-2",role:["0","1","2"]}},{path:"1-3",name:"1-3",component:function(){return n.e("chunk-2d21e56a").then(n.bind(null,"d4ae"))},hidden:!0,meta:{title:"1-3",role:["0","1","2"]}}]},{path:"/userpower2",component:G,redirect:"/userpower2/tree",name:"userpower2",meta:{title:"权限测试2",icon:"el-icon-tickets",role:["0","1"]},children:[{path:"2-1",name:"2-1",component:function(){return n.e("chunk-2d0e5f9e").then(n.bind(null,"977a"))},meta:{title:"2-1",role:["0"]}},{path:"2-2",name:"2-2",component:function(){return n.e("chunk-2d0ab46c").then(n.bind(null,"151c"))},hidden:["0"],meta:{title:"2-2",role:["0","1"]}}]},{path:"/nested",component:G,redirect:"/nested/menu1",name:"Nested",meta:{title:"多级菜单",icon:"el-icon-news"},children:[{path:"menu1",component:function(){return n.e("chunk-2d226cab").then(n.bind(null,"e9bc"))},name:"Menu1",meta:{title:"Menu1"},children:[{path:"menu1-1",component:function(){return n.e("chunk-2d0e4e1f").then(n.bind(null,"91b3"))},name:"Menu1-1",meta:{title:"Menu1-1"}},{path:"menu1-2",component:function(){return n.e("chunk-2d0c8bf7").then(n.bind(null,"55cd"))},name:"Menu1-2",meta:{title:"Menu1-2"},children:[{path:"menu1-2-1",component:function(){return n.e("chunk-2d0cfaef").then(n.bind(null,"6582"))},name:"Menu1-2-1",meta:{title:"Menu1-2-1"}},{path:"menu1-2-2",component:function(){return n.e("chunk-2d2104c6").then(n.bind(null,"b6fb"))},name:"Menu1-2-2",meta:{title:"Menu1-2-2"}}]},{path:"menu1-3",component:function(){return n.e("chunk-2d0e944c").then(n.bind(null,"8d8b"))},name:"Menu1-3",meta:{title:"Menu1-3"}}]},{path:"menu2",component:function(){return n.e("chunk-2d229205").then(n.bind(null,"dbb3"))},meta:{title:"menu2"}}]}],F=[{path:"/*",name:"error-404",hidden:!0,meta:{title:"404-页面不存在"},component:function(){return n.e("chunk-53d57b14").then(n.bind(null,"1db4"))}},{path:"/403",name:"error-403",hidden:!0,meta:{title:"403-权限不足"},component:function(){return n.e("chunk-360cb930").then(n.bind(null,"5140"))}},{path:"/500",name:"error-500",hidden:!0,meta:{title:"500-服务端错误"},component:function(){return n.e("chunk-f3294738").then(n.bind(null,"721c"))}}],J=function(){return new s["a"]({scrollBehavior:function(){return{y:0}},routes:H})},K=J();function U(){var e=J();K.matcher=e.matcher}var V=K,D=(n("7f7f"),n("795b")),W=n.n(D),z=n("d225"),Q=n("b0b4"),X=n("bc3a"),Y=n.n(X),Z=n("5c96"),ee=n.n(Z),te=Y.a.create({timeout:5e3});te.interceptors.request.use(function(e){return console.log("添加请求拦截器",e),e},function(e){return W.a.reject(e)}),te.interceptors.response.use(function(e){var t=e.data;if(console.log("添加响应拦截器",e),200===t.code)return e.data;Object(Z["Message"])({type:"error",message:t.message,duration:5e3})},function(e){return W.a.reject(e)});var ne=te,re=function(){function e(){Object(z["a"])(this,e)}return Object(Q["a"])(e,[{key:"login",value:function(e,t){return new W.a(function(n,r){return ne.post("/user/login",{username:e,password:t}).then(function(e){n(e)}).catch(function(e){r(e)})})}},{key:"getInfo",value:function(e){return new W.a(function(t,n){return ne({url:"/user/getInfo",method:"get",params:{token:e}}).then(function(e){t(e)}).catch(function(e){n(e)})})}},{key:"logout",value:function(e){return new W.a(function(e,t){return ne({url:"/user/logout",method:"post"}).then(function(t){e(t)}).catch(function(e){t(e)})})}}]),e}(),oe=new re,ae=n("a78e"),ce=n.n(ae),ue="my-vue-admin",ie={state:{token:ce.a.get(ue),name:"",avatar:"",roles:""},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_NAME:function(e,t){e.name=t},SET_AVATAR:function(e,t){e.avatar=t},SET_ROLES:function(e,t){e.roles=t}},getters:{gettoken:function(e){return e.token},getroles:function(e){return e.roles},getavatar:function(e){return e.avatar}},actions:{Login:function(e,t){var n=e.commit,r=t.username.trim();return new W.a(function(e,o){oe.login(r,t.password).then(function(t){t?(ce.a.set(ue,t.result),n("SET_TOKEN",t.result),e(t)):o(t)})})},GetInfo:function(e){var t=e.commit,n=e.state;return new W.a(function(e,r){oe.getInfo(n.token).then(function(n){if(n){var o=n.result;t("SET_ROLES",o.roles),t("SET_NAME",o.name),t("SET_AVATAR",o.avatar),e(n)}else r(n)})})},LogOut:function(e){var t=e.commit,n=e.state;return new W.a(function(e,r){oe.logout(n.token).then(function(){t("SET_TOKEN",""),t("SET_ROLES",""),ce.a.remove(ue),U(),e()}).catch(function(e){r(e)})})},resetToken:function(e){var t=e.commit;return new W.a(function(e){t("SET_TOKEN",""),t("SET_ROLES",""),ce.a.remove(ue),e()})}}},de=ie,se=(n("6762"),n("2fdb"),n("ac6a"),{state:{routers:Object(h["a"])({},H),addRouters:[]},getters:{getaddRouters:function(e){return e.addRouters},getrouters:function(e){return e.routers}},mutations:{SET_ROUTERS:function(e,t){e.addRouters=t.concat(F),e.routers=H.concat(e.addRouters)}},actions:{GenerateRoutes:function(e,t){var n=e.commit;return new W.a(function(e){var r=t.roles,o=le(q,r);n("SET_ROUTERS",o),e()})}}});function le(e,t){var n=[];return e.forEach(function(e){var r=Object(h["a"])({},e);fe(t,r)&&(r.children&&(r.children=le(r.children,t)),r.hidden&&"boolean"!==typeof r.hidden&&(r.hidden=!!r.hidden.includes(t)),n.push(r))}),n}function fe(e,t){return!t.meta||!t.meta.role||t.meta.role.includes(e)}var he=se,me={state:{sidebar:{opened:!0,withoutAnimation:!1}},mutations:{TOGGLE_SIDEBAR:function(e){e.sidebar.opened=!e.sidebar.opened,e.sidebar.withoutAnimation=!1}},getters:{getsidebar:function(e){return e.sidebar}},actions:{ToggleSideBar:function(e){var t=e.commit;t("TOGGLE_SIDEBAR")}}},pe=me;r["default"].use(b["a"]);var be=new b["a"].Store({modules:{user:de,router:he,app:pe}}),ge=(n("0fae"),n("f825")),ve=n.n(ge),ke=(n("f8ce"),n("f5df"),n("b20f"),["/login"]);V.beforeEach(function(e,t,n){console.log("路由拦截",e.path),console.log("store.getters.gettoken",be.getters.gettoken),be.getters.gettoken?(console.log("有token"),"/login"===e.path?(console.log("有token , 将要去登录页,转到后台首页"),n({path:"/"})):(console.log("有token , 不是去登录页,"),0===be.getters.getroles.length?(console.log("没有用户角色信息，动态路由未注入过，重新拉取用户角色信息，根据角色信息添加动态路由后再跳转访问的路由"),be.dispatch("GetInfo").then(function(t){var r=t.result.roles;be.dispatch("GenerateRoutes",{roles:r}).then(function(){var t=be.getters.getaddRouters;V.addRoutes(t),n(Object(h["a"])({},e,{replace:!0}))})}).catch(function(e){console.log(e)})):(console.log("有用户角色信息，动态路由已经注入过，不需要拉取用户信息直接让访问的路由通过"),n()))):(console.log("无token"),-1!==ke.indexOf(e.path)?(console.log("--111"),n()):(console.log("--222"),n("/login")))});var we=n("96eb"),Ee=n.n(we);n("a481"),n("28a5");function Oe(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"')+'"}'):{}}var Te={admin:{pas:"admin",token:"admin-token"},editor:{pas:"editor",token:"editor-token"},reader:{pas:"reader",token:"reader-token"}},ye={"admin-token":{roles:"0",introduction:"I am a super administrator",avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",name:"Super Admin"},"editor-token":{roles:"1",introduction:"I am an editor",avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",name:"Normal Editor"},"reader-token":{roles:"2",introduction:"I am an reader",avatar:"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",name:"Normal reader"}},Se={login:function(e){var t=JSON.parse(e.body),n=t.username,r=t.password;return n in Te&&Te[n].pas==r?{code:200,result:Te[n].token}:{code:90001,message:"账户或密码错误."}},getInfo:function(e){var t=Oe(e.url),n=t.token,r=ye[n];return r?{code:200,result:r}:{code:50008,message:"登陆失败，无法获取用户信息"}},logout:function(){return{code:200,data:"success"}}};Ee.a.mock("/user/login","post",Se.login),Ee.a.mock(/\/user\/getInfo\.*/,"get",Se.getInfo),Ee.a.mock("/user/logout","post",Se.logout);Ee.a;r["default"].use(ee.a),r["default"].use(ve.a),r["default"].config.productionTip=!1,r["default"].prototype.$serviceManger=oe,new r["default"]({router:V,store:be,render:function(e){return e(d)}}).$mount("#app")},a679:function(e,t,n){},b20f:function(e,t,n){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},b575:function(e,t,n){"use strict";var r=n("3bea"),o=n.n(r);o.a},c8a2:function(e,t,n){"use strict";var r=n("cde0"),o=n.n(r);o.a},cde0:function(e,t,n){},cf1e:function(e,t,n){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},e5da:function(e,t,n){"use strict";var r=n("a679"),o=n.n(r);o.a}});
//# sourceMappingURL=app.cd9e2303.js.map