(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{46608:function(e,t,n){Promise.resolve().then(n.bind(n,87433)),Promise.resolve().then(n.bind(n,63075)),Promise.resolve().then(n.bind(n,59577)),Promise.resolve().then(n.bind(n,84005)),Promise.resolve().then(n.bind(n,26119)),Promise.resolve().then(n.bind(n,9801)),Promise.resolve().then(n.bind(n,98653)),Promise.resolve().then(n.bind(n,16611)),Promise.resolve().then(n.bind(n,78600)),Promise.resolve().then(n.bind(n,73278)),Promise.resolve().then(n.t.bind(n,17762,23)),Promise.resolve().then(n.bind(n,34259)),Promise.resolve().then(n.bind(n,55615)),Promise.resolve().then(n.t.bind(n,34322,23)),Promise.resolve().then(n.t.bind(n,2265,23))},66348:function(e,t,n){"use strict";var a=n(20391);n.o(a,"usePathname")&&n.d(t,{usePathname:function(){return a.usePathname}})},34259:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(76883);n(29010);var r=n(59577),i=n(58341),o=n(10469),l=(e,t)=>{let n={};for(let[a,r]of e.entries()){let i=t(r,a,e);if(void 0!==i){let{[i]:e}=n;void 0===e&&(e=[],n[i]=e),e.push(r)}}return n},s=n(15678),u=n(66348),h=n(9801),d=e=>{let t=function(...e){return(0,o.a)(l,e)}(e.docs.map(i.R.deserialize),e=>e.pathname.split("/")[1]),n=(0,u.usePathname)(),d=Object.entries(t).map(e=>{let[t,r]=e;return(0,a.jsx)(h.Link,{href:r[0].pathname,"aria-current":n.includes(t)?"page":void 0,children:(0,a.jsx)(s.h,{children:t})},r[0].pathname)});return(0,a.jsx)(r.HeaderNavigation,{className:e.className,"aria-label":"Header navigation",children:d})}},55615:function(e,t,n){"use strict";n.d(t,{default:function(){return x}});var a=n(76883),r=n(29010),i=n(34469),o=n(84005),l=n(58341),s=n(15678);let u=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n={},a=e.filter(e=>e.pathname.startsWith(t));for(let e of a){let r=e.pathname.slice(t.length).split("/"),i=r[0];i&&(1===r.length?n[i]=e:n[i]=u(a,t+i+"/"))}return n};var h=n(66348),d=n(9801),c=n(91292),m=n(73278),_=n(12315);n(91452);var v=n(37754),f=n(22300),b=n(2265),p=n.n(b),g=n(90312);let P=e=>{let{treeItem:t}=e,n=(0,h.usePathname)(),r=(0,_.p)("Modal");return(0,v.u)(n,()=>{r.close()},[r]),(0,a.jsx)(d.Link,{href:t.pathname,"aria-current":t.pathname===n?"page":void 0,children:t.getNavTitle()})},j=(e,t)=>{let[,n]=t;return""===e||!(n instanceof l.R)||n.getNavTitle().toLowerCase().includes(e)},y=e=>{let{tree:t,group:n,searchValue:r}=e,o=Object.entries(t).filter(e=>j(r,e)).map(e=>{let[t,n]=e;return n instanceof l.R?(0,a.jsx)(P,{treeItem:n},t):(0,a.jsx)(y,{tree:n,group:t,searchValue:r},t)});return 0===o.length?null:(0,a.jsxs)(i.KB,{collapsable:!0,children:[(0,a.jsx)(c._,{children:(0,a.jsx)(s.h,{children:n})}),o]})};var x=e=>{let t=e.docs.map(l.R.deserialize),n=(0,r.useMemo)(()=>u(t),[t]),d=(0,h.usePathname)().split("/")[1],[c,_]=(0,r.useState)(""),v=(0,r.useId)();if(void 0===d)return null;let b=n[d];return!b||b instanceof l.R?null:(0,a.jsx)(g.LayoutCard,{className:p().mainNavigation,children:(0,a.jsxs)(m.Section,{children:[(0,a.jsx)(o.default,{id:v,children:(0,a.jsx)(s.h,{children:d})}),(0,a.jsx)(f.U,{onChange:e=>_(e.toLowerCase().trim())}),(0,a.jsx)(i.ZP,{"aria-labelledby":v,children:Object.entries(b).filter(e=>j(c,e)).map(e=>{let[t,n]=e;return n instanceof l.R?(0,a.jsx)(P,{treeItem:n},t):(0,a.jsx)(y,{tree:n,group:t,searchValue:c},t)})})]})})}},15678:function(e,t,n){"use strict";n.d(t,{h:function(){return i}});var a=n(76883);n(29010);var r=n(21681);let i=e=>{let{children:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,r.Z)(t.replaceAll(/^[0-9]+/g,""))})}},17762:function(){},34322:function(){},2265:function(e){e.exports={body:"layout_body__oiEIT",center:"layout_center__e1uqg",mainNavigation:"layout_mainNavigation__zVTd_",header:"layout_header__ttTk7",homeLink:"layout_homeLink__HdnFq",logo:"layout_logo__PcxmI",mobileNavigation:"layout_mobileNavigation__1XY9K",mobileNavigationOffCanvas:"layout_mobileNavigationOffCanvas__coBZM",main:"layout_main__30FUz",tabContent:"layout_tabContent__XP2n_",headerNavigation:"layout_headerNavigation__SNRbw",homeTopLayoutCard:"layout_homeTopLayoutCard__wd_2k",homeImage:"layout_homeImage__BIZsA",homeTopContent:"layout_homeTopContent__vVyX6"}}},function(e){e.O(0,[868,532,188,298,116,737,333,224,292,744],function(){return e(e.s=46608)}),_N_E=e.O()}]);