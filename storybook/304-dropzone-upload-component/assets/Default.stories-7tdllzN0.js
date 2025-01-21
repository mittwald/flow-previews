import{R as e}from"./index-B-o1Wr-g.js";import{c as x}from"./clsx-B-dksMZM.js";import{f as I}from"./flowComponent-SXQnFwcy.js";import{B as _}from"./Button-BQTDIbec.js";import"./IconApp--rto3B0B.js";import{t as y}from"./IconWarning-CMJVXVzx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./index-DolzVqEf.js";import"./Wrap-DQq6jo70.js";import"./Text-DPEzzey4.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Text-CByKVUtS.js";import"./utils-CCebJm36.js";import"./LoadingSpinner-G7f7kTAa.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Button-C8iS27fI.js";import"./ProgressBar-C7LzY9et.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CjESOWAx.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";const w="flow--counter-badge",D={counterBadge:w},s=I("CounterBadge",t=>{const{className:E,count:c,refProp:W,...b}=t,S=x(D.counterBadge,E);return e.createElement("span",{className:S,...b,"aria-hidden":!0,ref:W},c&&c>99?"99+":c)});s.__docgenInfo={description:"",methods:[],displayName:"CounterBadge"};const nt={title:"Status/CounterBadge",component:s,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:t=>e.createElement(s,{...t})},r={},o={args:{count:void 0}},a={args:{count:120}},n={render:t=>e.createElement(_,{"aria-label":"Notifications: 7"},e.createElement(y,null),e.createElement(s,{...t,count:7}))};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,d,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(N=(C=n.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};const st=["Default","WithoutContent","WithHighNumber","WithButton"];export{r as Default,n as WithButton,a as WithHighNumber,o as WithoutContent,st as __namedExportsOrder,nt as default};
