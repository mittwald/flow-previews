import{R as e}from"./index-B-o1Wr-g.js";import{c as x}from"./clsx-B-dksMZM.js";import{f as I}from"./flowComponent-BM_bsdM-.js";import{B as _}from"./Button-lHNUyXCJ.js";import"./IconApp-BsMqgwqQ.js";import{s as y}from"./IconWarning-QGTmOWaT.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./PropsContextProvider-BYgAOosN.js";import"./index-CHDNsM8M.js";import"./index-DolzVqEf.js";import"./Wrap-DQq6jo70.js";import"./Text-Cj_eL-oH.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Text-CiYJIQMS.js";import"./utils-DKtCZAsl.js";import"./LoadingSpinner-BGAqxZwj.js";import"./useLocalizedStringFormatter-X6TgI_-C.js";import"./Button-i9IuKDdG.js";import"./ProgressBar-CBi1pwqX.js";import"./Label-lrV0rU61.js";import"./Hidden-_I_3hSLB.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-C4jwYeNR.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-DeAGt_gp.js";import"./useFocusRing-aZOxpy_h.js";import"./usePress-RNxp3RZQ.js";const w="flow--counter-badge",D={counterBadge:w},s=I("CounterBadge",t=>{const{className:E,count:c,refProp:W,...b}=t,S=x(D.counterBadge,E);return e.createElement("span",{className:S,...b,"aria-hidden":!0,ref:W},c&&c>99?"99+":c)});s.__docgenInfo={description:"",methods:[],displayName:"CounterBadge"};const at={title:"Status/CounterBadge",component:s,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:t=>e.createElement(s,{...t})},r={},o={args:{count:void 0}},a={args:{count:120}},n={render:t=>e.createElement(_,{"aria-label":"Notifications: 7"},e.createElement(y,null),e.createElement(s,{...t,count:7}))};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,d,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    count: undefined
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,f,B;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    count: 120
  }
}`,...(B=(f=a.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var h,C,N;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: props => <Button aria-label="Notifications: 7">
      <IconNotification />
      <CounterBadge {...props} count={7}></CounterBadge>
    </Button>
}`,...(N=(C=n.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const nt=["Default","WithoutContent","WithHighNumber","WithButton"];export{r as Default,n as WithButton,a as WithHighNumber,o as WithoutContent,nt as __namedExportsOrder,at as default};
