(this.webpackJsonpCNAPP=this.webpackJsonpCNAPP||[]).push([[3],{105:function(t,e,n){},106:function(t,e,n){},107:function(t,e,n){},108:function(t,e,n){},109:function(t,e,n){},110:function(t,e,n){},111:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n(55),r=n(43),c=(n(76),n(46)),i=n(6),u=n(11),s=n(19),l=n(119),d=Object(s.b)("layout/getBookmarks",Object(u.a)(Object(i.a)().mark((function t(){var e;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get("/api/bookmarks/data");case 2:return e=t.sent,t.abrupt("return",{data:e.data.suggestions,bookmarks:e.data.bookmarks});case 4:case"end":return t.stop()}}),t)})))),A=Object(s.b)("layout/updateBookmarked",function(){var t=Object(u.a)(Object(i.a)().mark((function t(e){return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.post("/api/bookmarks/update",{id:e});case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),f=Object(s.c)({name:"layout",initialState:{query:"",bookmarks:[],suggestions:[]},reducers:{handleSearchQuery:function(t,e){t.query=e.payload}},extraReducers:function(t){t.addCase(d.fulfilled,(function(t,e){t.suggestions=e.payload.data,t.bookmarks=e.payload.bookmarks})).addCase(A.fulfilled,(function(t,e){var n;t.suggestions.find((function(t){t.id===e.payload&&(t.isBookmarked=!t.isBookmarked,n=t)}));var a=t.bookmarks.findIndex((function(t){return t.id===e.payload}));-1===a?t.bookmarks.push(n):t.bookmarks.splice(a,1)}))}}),b=(f.actions.handleSearchQuery,f.reducer),p=n(49),y=n(47),g={navbar:b,layout:c.a,auth:p.a,cloudRisk:y.a},h=Object(s.a)({reducer:g,middleware:function(t){return t({serializableCheck:!1})}}),m=n(44),w=n(64),j=JSON.parse(localStorage.getItem("userDataAuth")),C=j?j.ability:null,O=new w.a(C||[{action:"read",subject:"Auth"}]),v=n(50),N=n(21),L=n(7),x=n(10),T=Object(a.createContext)(),H=function(t){var e=t.children,n=Object(a.useState)({}),o=Object(L.a)(n,2),r=o[0],c=o[1];return Object(a.useEffect)((function(){if("undefined"!==window){var t=function(t){return window.getComputedStyle(document.body).getPropertyValue(t).trim()},e={primary:{light:t("--bs-primary").concat("1a"),main:t("--bs-primary")},secondary:{light:t("--bs-secondary").concat("1a"),main:t("--bs-secondary")},success:{light:t("--bs-success").concat("1a"),main:t("--bs-success")},danger:{light:t("--bs-danger").concat("1a"),main:t("--bs-danger")},warning:{light:t("--bs-warning").concat("1a"),main:t("--bs-warning")},info:{light:t("--bs-info").concat("1a"),main:t("--bs-info")},dark:{light:t("--bs-dark").concat("1a"),main:t("--bs-dark")}};c(Object(N.a)({},e))}}),[]),Object(x.jsx)(T.Provider,{value:{colors:r},children:e})},E=n(17),S=n(45),Z=function(){return Object(x.jsxs)("div",{className:"fallback-spinner app-loader",children:[Object(x.jsx)("img",{className:"fallback-logo",src:"data:image/png;base64,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",alt:"logo"}),Object(x.jsxs)("div",{className:"loading",children:[Object(x.jsx)("div",{className:"effect-1 effects"}),Object(x.jsx)("div",{className:"effect-2 effects"}),Object(x.jsx)("div",{className:"effect-3 effects"})]})]})},k=n(9),P=n(48),V=n(3),I=n.n(V),B=n(38),K=(n(98),["className","children","onClick"]);B.b.Ripple=function(t){var e=t.className,n=t.children,o=t.onClick,r=Object(P.a)(t,K),c=Object(a.useState)(!1),i=Object(L.a)(c,2),u=i[0],s=i[1],l=Object(a.useState)(!1),d=Object(L.a)(l,2),A=d[0],f=d[1],b=Object(a.useState)({x:-1,y:-1}),p=Object(L.a)(b,2),y=p[0],g=p[1];return Object(a.useEffect)((function(){return s(!0),function(){return s(!1)}}),[]),Object(a.useEffect)((function(){u&&(-1!==y.x&&-1!==y.y?(f(!0),setTimeout((function(){return f(!1)}),500)):f(!1))}),[y]),Object(a.useEffect)((function(){u&&(A||g({x:-1,y:-1}))}),[A]),Object(x.jsxs)(B.b,Object(N.a)(Object(N.a)({className:I()("waves-effect",Object(k.a)({},e,e)),onClick:function(t){var e=t.target.getBoundingClientRect();g({x:t.clientX-e.left,y:t.clientY-e.top}),o&&o(t)}},r),{},{children:[n,A?Object(x.jsx)("span",{className:"waves-ripple",style:{left:y.x,top:y.y}}):null]}))};n(101),n(102),n(103),n(104),n(105),n(106),n(107),n(108),n(109),n(110),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=Object(a.lazy)((function(){return Promise.all([n.e(6),n.e(9)]).then(n.bind(null,321))})),Y=document.getElementById("root");Object(o.createRoot)(Y).render(Object(x.jsx)(r.a,{children:Object(x.jsx)(m.a,{store:h,children:Object(x.jsx)(a.Suspense,{fallback:Object(x.jsx)(Z,{}),children:Object(x.jsx)(v.a.Provider,{value:O,children:Object(x.jsxs)(H,{children:[Object(x.jsx)(Q,{}),Object(x.jsx)(S.Toaster,{position:E.a.layout.toastPosition,toastOptions:{className:"react-hot-toast"}})]})})})})})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},17:function(t,e,n){"use strict";var a={app:{appName:"Dashboard",appLogoImage:n(77).default},layout:{isRTL:!1,skin:"light",type:"vertical",contentWidth:"boxed",menu:{isHidden:!1,isCollapsed:!1},navbar:{type:"floating",backgroundColor:"white"},footer:{type:"static"},customizer:!1,scrollTop:!0,toastPosition:"top-right"}};e.a=a},46:function(t,e,n){"use strict";n.d(e,"j",(function(){return i})),n.d(e,"k",(function(){return u})),n.d(e,"e",(function(){return s})),n.d(e,"d",(function(){return l})),n.d(e,"g",(function(){return d})),n.d(e,"i",(function(){return A})),n.d(e,"c",(function(){return f})),n.d(e,"h",(function(){return b})),n.d(e,"b",(function(){return p})),n.d(e,"f",(function(){return y}));var a=n(19),o=n(17),r=Object(a.c)({name:"layout",initialState:{skin:function(){var t=window.localStorage.getItem("skin");return t?JSON.parse(t):o.a.layout.skin}(),isRTL:function(){var t=window.localStorage.getItem("direction");return t?JSON.parse(t):o.a.layout.isRTL}(),layout:o.a.layout.type,lastLayout:o.a.layout.type,menuCollapsed:function(){var t=window.localStorage.getItem("menuCollapsed");return t?JSON.parse(t):o.a.layout.menu.isCollapsed}(),footerType:o.a.layout.footer.type,navbarType:o.a.layout.navbar.type,menuHidden:o.a.layout.menu.isHidden,contentWidth:o.a.layout.contentWidth,navbarColor:o.a.layout.navbar.backgroundColor},reducers:{handleRTL:function(t,e){t.isRTL=e.payload,window.localStorage.setItem("direction",JSON.stringify(e.payload))},handleSkin:function(t,e){t.skin=e.payload,window.localStorage.setItem("skin",JSON.stringify(e.payload))},handleLayout:function(t,e){t.layout=e.payload},handleFooterType:function(t,e){t.footerType=e.payload},handleNavbarType:function(t,e){t.navbarType=e.payload},handleMenuHidden:function(t,e){t.menuHidden=e.payload},handleLastLayout:function(t,e){t.lastLayout=e.payload},handleNavbarColor:function(t,e){t.navbarColor=e.payload},handleContentWidth:function(t,e){t.contentWidth=e.payload},handleMenuCollapsed:function(t,e){t.menuCollapsed=e.payload,window.localStorage.setItem("menuCollapsed",JSON.stringify(e.payload))}}}),c=r.actions,i=c.handleRTL,u=c.handleSkin,s=c.handleLayout,l=c.handleLastLayout,d=c.handleMenuHidden,A=c.handleNavbarType,f=c.handleFooterType,b=c.handleNavbarColor,p=c.handleContentWidth,y=c.handleMenuCollapsed;e.a=r.reducer},47:function(t,e,n){"use strict";n.d(e,"h",(function(){return c})),n.d(e,"f",(function(){return i})),n.d(e,"g",(function(){return u})),n.d(e,"i",(function(){return s})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"e",(function(){return A})),n.d(e,"d",(function(){return f}));var a=n(19),o=Object(a.c)({name:"cloudRisk",initialState:{cspmList:[],cwppList:[],registryList:[],isFreshData:!1},reducers:{setCspmList:function(t,e){t.cspmList=e.payload},setCwppList:function(t,e){t.cwppList=e.payload},setRegistryList:function(t,e){t.registryList=e.payload},setFreshList:function(t,e){t.isFreshData=e.payload}}}),r=o.actions,c=r.setFreshList,i=r.setCspmList,u=r.setCwppList,s=r.setRegistryList,l=function(t){return t.cloudRisk.cspmList},d=function(t){return t.cloudRisk.cwppList},A=function(t){return t.cloudRisk.registryList},f=function(t){return t.cloudRisk.isFreshData};e.a=o.reducer},49:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return i})),n.d(e,"b",(function(){return u}));var a=n(19),o=Object(a.c)({name:"auth",initialState:{user:{name:"Azad Akhtar"},userProfile:null,isRefresh:!1},reducers:{login:function(t,e){t.user=e.payload},logout:function(t){t.user=null},setLoginDetails:function(t,e){t.user=e.payload},setUserProfile:function(t,e){t.userProfile=e.payload},setProfileAgain:function(t,e){t.isRefresh=e.payload}}}),r=o.actions,c=(r.login,r.logout,r.setLoginDetails),i=(r.setUserProfile,r.setProfileAgain),u=(r.userProfile,function(t){return t.auth.isRefresh});e.a=o.reducer},50:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n(1),o=n(60),r=Object(a.createContext)();Object(o.a)(r.Consumer)},77:function(t,e,n){"use strict";n.r(e),e.default=n.p+"static/media/logo.f03f8d4d.svg"},98:function(t,e,n){}},[[111,4,5]]]);
//# sourceMappingURL=main.6c81a094.chunk.js.map