(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{14694:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,40540,23)),Promise.resolve().then(r.bind(r,57502)),Promise.resolve().then(r.bind(r,58907)),Promise.resolve().then(r.bind(r,3373)),Promise.resolve().then(r.bind(r,91916)),Promise.resolve().then(r.bind(r,18420)),Promise.resolve().then(r.bind(r,35963)),Promise.resolve().then(r.bind(r,80634)),Promise.resolve().then(r.bind(r,80647)),Promise.resolve().then(r.bind(r,65092)),Promise.resolve().then(r.bind(r,13980)),Promise.resolve().then(r.bind(r,1161)),Promise.resolve().then(r.bind(r,45714)),Promise.resolve().then(r.bind(r,56968)),Promise.resolve().then(r.bind(r,57703)),Promise.resolve().then(r.bind(r,96211)),Promise.resolve().then(r.t.bind(r,67804,23)),Promise.resolve().then(r.t.bind(r,58827,23))},70200:(e,t,r)=>{"use strict";var a=r(55464);r.o(a,"usePathname")&&r.d(t,{usePathname:function(){return a.usePathname}})},56968:(e,t,r)=>{"use strict";r.d(t,{default:()=>b});var a=r(68909);r(58233);var i=r(89950),n=r(77198),s=r(1161),o=r(91916),l=r(61035),d=r(80634),c=r(65661),h=r.n(c),m=r(35963);let u={src:"/flow-previews/docs/update-more-tokens/_next/static/media/Styleguide-Footer_Feedback.8fc04fe7.svg"},v={src:"/flow-previews/docs/update-more-tokens/_next/static/media/mittwald-logo-footer.99c0eef1.svg"};var _=r(97668);let b=()=>(0,a.jsxs)(i.LayoutCard,{elementType:"footer",className:h().footer,children:[(0,a.jsxs)(n.ColumnLayout,{m:[1,1,2],l:[1,1,2,1],children:[(0,a.jsxs)(s.Section,{children:[(0,a.jsx)(l.Y,{children:(0,a.jsx)(o.Heading,{level:3,children:"Contributoren-Seiten"})}),(0,a.jsx)(d.Link,{color:"dark",href:"https://github.com/mittwald/flow",children:"GitHub Repo"}),(0,a.jsx)(d.Link,{color:"dark",href:"https://developer.mittwald.de/",children:"Developer-Portal"})]}),(0,a.jsxs)(s.Section,{children:[(0,a.jsx)(l.Y,{children:(0,a.jsx)(o.Heading,{level:3,children:"Rechtliches"})}),(0,a.jsx)(d.Link,{color:"dark",href:"https://www.mittwald.de/impressum",children:"Impressum"}),(0,a.jsx)(d.Link,{color:"dark",href:"https://www.mittwald.de/datenschutz",children:"Datenschutz"})]}),(0,a.jsxs)(s.Section,{children:[(0,a.jsx)(o.Heading,{level:3,children:"Hilf uns, Flow noch besser zu machen!"}),"Fehlt dir eine bestimmte Component oder etwas Anderes? Hast du Feedback? Dann teile es uns gerne auf GitHub mit.",(0,a.jsx)(d.Link,{color:"dark",href:"https://github.com/mittwald/flow/issues/new?template=general-style-guide-feedback.md",children:"Feedback zu Flow geben"})]}),(0,a.jsx)(m.Image,{src:u.src,alt:"Styleguide Feedback",className:(0,_.A)(h().feedbackPicture)})]}),(0,a.jsx)("br",{}),(0,a.jsxs)("small",{children:[(0,a.jsx)(m.Image,{src:v.src,alt:"mittwald Logo"}),"\xa9 2024 Mittwald CM Service GmbH & Co. KG"]})]})},57703:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var a=r(68909);r(58233);var i=r(3373),n=r(89567),s=r(46400),o=(e,t)=>{let r={};for(let[a,i]of e.entries()){let n=t(i,a,e);if(void 0!==n){let{[n]:e}=r;void 0===e&&(e=[],r[n]=e),e.push(i)}}return r},l=r(74248),d=r(70200),c=r(80634);let h=e=>{let t=function(...e){return(0,s.a)(o,e)}(e.docs.map(n.m.deserialize),e=>e.pathname.split("/")[1]),r=(0,d.usePathname)(),h=Object.entries(t).map(e=>{let[t,i]=e;return(0,a.jsx)(c.Link,{href:i[0].pathname,"aria-current":r.includes(t)?"page":void 0,children:(0,a.jsx)(l.$,{children:t})},i[0].pathname)});return(0,a.jsx)(i.HeaderNavigation,{className:e.className,"aria-label":"Header navigation",children:h})}},96211:(e,t,r)=>{"use strict";r.d(t,{default:()=>P});var a=r(68909),i=r(58233),n=r(10800),s=r(91916),o=r(89567),l=r(74248);let d=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",r={},a=e.filter(e=>e.pathname.startsWith(t));for(let e of a){let i=e.pathname.slice(t.length).split("/"),n=i[0];n&&(1===i.length?r[n]=e:r[n]=d(a,t+n+"/"))}return r};var c=r(70200),h=r(80634),m=r(4468),u=r(1161),v=r(43338),_=r(55694),b=r(48122),f=r(58827),p=r.n(f),g=r(89950),x=r(15742);let j=e=>{let{treeItem:t}=e,r=(0,c.usePathname)(),i=(0,v.m)("Modal");return(0,_.T7)(r,()=>{i.close()},[i]),(0,a.jsx)(h.Link,{href:t.pathname,"aria-current":t.pathname===r?"page":void 0,children:t.getNavTitle()})},w=(e,t)=>{let[,r]=t;return""===e||!(r instanceof o.m)||r.getNavTitle().toLowerCase().includes(e)},k=e=>{let{tree:t,group:r,searchValue:i}=e,s=Object.entries(t).filter(e=>w(i,e)).map(e=>{let[t,r]=e;return r instanceof o.m?(0,a.jsx)(j,{treeItem:r},t):(0,a.jsx)(k,{tree:r,group:t,searchValue:i},t)});return 0===s.length?null:(0,a.jsxs)(n.Me,{collapsable:!0,children:[(0,a.jsx)(m.J,{children:(0,a.jsx)(l.$,{children:r})}),s]})},P=e=>{let t=e.docs.map(o.m.deserialize),r=(0,i.useMemo)(()=>d(t),[t]),h=(0,c.usePathname)().split("/")[1],[m,v]=(0,i.useState)(""),_=(0,i.useId)();if(void 0===h)return null;let f=r[h];return!f||f instanceof o.m?null:(0,a.jsx)(x.W,{if:!e.mobileNavigation,children:(0,a.jsx)(g.LayoutCard,{className:p().mainNavigation,children:(0,a.jsxs)(u.Section,{children:[(0,a.jsx)(s.default,{id:_,children:(0,a.jsx)(l.$,{children:h})}),(0,a.jsx)(b.L,{onChange:e=>v(e.toLowerCase().trim())}),(0,a.jsx)(n.Ay,{"aria-labelledby":_,children:Object.entries(f).filter(e=>w(m,e)).map(e=>{let[t,r]=e;return r instanceof o.m?(0,a.jsx)(j,{treeItem:r},t):(0,a.jsx)(k,{tree:r,group:t,searchValue:m},t)})})]})})})}},74248:(e,t,r)=>{"use strict";r.d(t,{$:()=>n});var a=r(68909);r(58233);var i=r(19135);let n=e=>{let{children:t}=e;return(0,a.jsx)(a.Fragment,{children:(0,i.A)(t.replaceAll(/^[0-9]+/g,""))})}},40540:()=>{},67804:()=>{},65661:e=>{e.exports={footer:"footer_footer__PccBU",feedbackPicture:"footer_feedbackPicture__FvbDd"}},58827:e=>{e.exports={body:"layout_body__oiEIT",center:"layout_center__e1uqg",mainNavigation:"layout_mainNavigation__zVTd_",header:"layout_header__ttTk7",homeLink:"layout_homeLink__HdnFq",mobileNavigation:"layout_mobileNavigation__1XY9K",mobileNavigationOffCanvas:"layout_mobileNavigationOffCanvas__coBZM",main:"layout_main__30FUz",tabContent:"layout_tabContent__XP2n_",headerNavigation:"layout_headerNavigation__SNRbw",homeTopLayoutCard:"layout_homeTopLayoutCard__wd_2k",homeImage:"layout_homeImage__BIZsA",homeTopContent:"layout_homeTopContent__vVyX6"}},45714:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});let a={src:"/flow-previews/docs/update-more-tokens/_next/static/media/m-flow_logo.5d297ae4.svg",height:40,width:144,blurWidth:0,blurHeight:0}}},e=>{var t=t=>e(e.s=t);e.O(0,[669,495,94,990,18,91,602,923,937,358],()=>t(14694)),_N_E=e.O()}]);