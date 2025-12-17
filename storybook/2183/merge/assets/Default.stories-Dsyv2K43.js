import{j as o}from"./iframe-CxIv4jMu.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as l}from"./flowComponent-40FWo67L.js";import{B as g}from"./Button-Bv_lacgK.js";import"./IconApp-DXeuriH2.js";import{I as f}from"./IconNotification-Bl0L2Vzy.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B5A5s8TF.js";import"./index-4jtxG-aw.js";import"./IconX-VSIHB7dF.js";import"./IconCheck-BZoeQ1G_.js";import"./Text-D7X_oIFw.js";import"./browser-mUCbKcee.js";import"./EmulatedBoldText-CtDmIXSm.js";import"./Text-C4fvncMS.js";import"./utils-BWuSdLWz.js";import"./LoadingSpinner-BEv7DDuA.js";import"./ariaLive-BX5sV3Jf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-B-qTbUOV.js";import"./context-XT4iJWgw.js";import"./remote-BuINZUdg.js";import"./Button-FNhyxeGp.js";import"./ProgressBar-azejEpMz.js";import"./Label-V3_Oag-T.js";import"./Hidden-BIUsGAI2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-hxWbe3_X.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CUBbufY7.js";import"./useFocus-ng3bQXxT.js";import"./useFocusRing-DX51MXuJ.js";import"./useFocusable-BUu5DuL9.js";const B="flow--counter-badge",h={counterBadge:B},n=l("CounterBadge",r=>{const{className:m,count:i,ref:c,...p}=r,u=d(h.counterBadge,m);return o.jsx("span",{className:u,...p,"aria-hidden":!0,ref:c,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const Y={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(g,{"aria-label":"Notifications: 7",children:[o.jsx(f,{}),o.jsx(n,{...r,count:7})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
