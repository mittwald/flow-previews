import{j as o}from"./iframe-BsCnutBU.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as l}from"./flowComponent-DoLxyVDl.js";import{B as g}from"./Button-PMfVxp4L.js";import"./IconChevronDown-C43PU1K-.js";import{I as f}from"./IconNotification-CHJzcDvo.js";import"./preload-helper-PPVm8Dsz.js";import"./index-xZbZEtqW.js";import"./index-PlwcbQcr.js";import"./IconX-BpqNIxw6.js";import"./IconCheck-C2zwGnIP.js";import"./Text-CNxpKe1i.js";import"./browser-b7DWXv2S.js";import"./EmulatedBoldText-DyWG-htd.js";import"./Text-BOWjpC0c.js";import"./utils-Dcbzlj6n.js";import"./LoadingSpinner-C-Vur43u.js";import"./ariaLive-CXcB5l43.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Bo0x_WGr.js";import"./context-DzQn9XcF.js";import"./remote-LwvHvQd9.js";import"./Button-YTgHheMP.js";import"./ProgressBar-BvRvte-F.js";import"./Label-B_59qcJ5.js";import"./Hidden-gYrC-ftW.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CiTBxdfM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CHCx2MC1.js";import"./useFocus-zRbhNQvs.js";import"./useFocusRing-eAFZ6BYE.js";import"./useFocusable-Czch9xtI.js";const B="flow--counter-badge",h={counterBadge:B},n=l("CounterBadge",r=>{const{className:m,count:i,ref:c,...p}=r,u=d(h.counterBadge,m);return o.jsx("span",{className:u,...p,"aria-hidden":!0,ref:c,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const Y={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(g,{"aria-label":"Notifications: 7",children:[o.jsx(f,{}),o.jsx(n,{...r,count:7})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
