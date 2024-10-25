import{R as e}from"./index-Cs7sjTYM.js";import{c as x}from"./clsx-B-dksMZM.js";import{f as I}from"./flowComponent-Bg40pdZw.js";import{B as _}from"./Button-Bq7y9BIZ.js";import"./IconApp-CKfGrMYq.js";import{q as y}from"./IconWarning-DoqSRZU1.js";import"./_commonjsHelpers-BosuxZz1.js";import"./PropsContextProvider-DXo7lD_U.js";import"./index-j_f0pOtZ.js";import"./index-Cf-03bMR.js";import"./Wrap-DQq6jo70.js";import"./Text-DZmFXo-e.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-DP1y2Dk0.js";import"./utils-GKDLJ2vO.js";import"./LoadingSpinner-9k8jsvZY.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Button-CB57Q0FS.js";import"./ProgressBar-CpzbYRLN.js";import"./Label-qcDNDzhS.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BZB42ELj.js";import"./useFocusRing-Cx5sZpw_.js";import"./usePress-IYK5Xs6I.js";const w="flow--counter-badge",D={counterBadge:w},s=I("CounterBadge",t=>{const{className:E,count:c,refProp:W,...b}=t,S=x(D.counterBadge,E);return e.createElement("span",{className:S,...b,"aria-hidden":!0,ref:W},c&&c>99?"99+":c)});s.__docgenInfo={description:"",methods:[],displayName:"CounterBadge"};const at={title:"Status/CounterBadge",component:s,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:t=>e.createElement(s,{...t})},r={},o={args:{count:void 0}},a={args:{count:120}},n={render:t=>e.createElement(_,{"aria-label":"Notifications: 7"},e.createElement(y,null),e.createElement(s,{...t,count:7}))};var m,i,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,d,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
