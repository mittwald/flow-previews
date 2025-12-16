import{j as o}from"./iframe-ZqGKWCd-.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as l}from"./flowComponent-DnG4Zld_.js";import{B as g}from"./Button-BZgO5jCY.js";import"./IconChevronDown-DOkopHOS.js";import{I as f}from"./IconNotification-C23IbG81.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CDScJNB3.js";import"./index-BS5rk3Xg.js";import"./IconX-DatWuNo8.js";import"./IconCheck-BmGT2YRH.js";import"./Text-fsbk1lYn.js";import"./browser-BUvHTeNk.js";import"./EmulatedBoldText-Ro5KrcKA.js";import"./Text-Csqi7mxP.js";import"./utils-D141Jr51.js";import"./LoadingSpinner-DOl2H2KY.js";import"./ariaLive-BCX06F7t.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-B1HvX0bo.js";import"./context-zCArMZyI.js";import"./remote-QKtGQrQi.js";import"./Button-CUB1U94R.js";import"./ProgressBar-CwXfcXUd.js";import"./Label-BUWbTNXS.js";import"./Hidden-DJANzhMQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cwc7cvIm.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-_yC0x0cS.js";import"./useFocus-DhU9eZJ-.js";import"./useFocusRing-DbADFAxV.js";import"./useFocusable-BybslKHd.js";const B="flow--counter-badge",h={counterBadge:B},n=l("CounterBadge",r=>{const{className:m,count:i,ref:c,...p}=r,u=d(h.counterBadge,m);return o.jsx("span",{className:u,...p,"aria-hidden":!0,ref:c,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const Y={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(g,{"aria-label":"Notifications: 7",children:[o.jsx(f,{}),o.jsx(n,{...r,count:7})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    count: undefined
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    count: 120
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Button aria-label="Notifications: 7">
      <IconNotification />
      <CounterBadge {...props} count={7}></CounterBadge>
    </Button>
}`,...s.parameters?.docs?.source}}};const Z=["Default","WithoutContent","WithHighNumber","WithButton"];export{t as Default,s as WithButton,a as WithHighNumber,e as WithoutContent,Z as __namedExportsOrder,Y as default};
