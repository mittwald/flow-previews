import{j as o}from"./iframe-VGYf9uSR.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as l}from"./PropsContextProvider-BJkjz94f.js";import{B as g}from"./Button-C33JxfbF.js";import"./IconChevronDown-Dgoj3MhV.js";import{I as f}from"./IconNotification-HJILjx4J.js";import"./preload-helper-PPVm8Dsz.js";import"./mergeRefs-CoTJmqCf.js";import"./index-Bm_Mzlx6.js";import"./IconX-lmZxwzvL.js";import"./IconCheck-onGhd-IB.js";import"./Text-CGbJaU4z.js";import"./browser-BY7YAvyX.js";import"./utils-BB4afhje.js";import"./EmulatedBoldText-BBr3yRY7.js";import"./LoadingSpinner-ChrQQ-Zb.js";import"./ariaLive-Cyrepnod.js";import"./Button-DHkv2oj9.js";import"./ProgressBar-Bb-cXNA8.js";import"./Hidden-apt2TR_r.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CKMs_ua8.js";import"./useFocusRing-BSBcwiCP.js";import"./useFocusable-CkZtY9Qx.js";import"./useLocalizedStringFormatter-DhcIgiuG.js";import"./remote-B1HlY5fu.js";const B="flow--counter-badge",h={counterBadge:B},n=l("CounterBadge",r=>{const{className:c,count:i,ref:m,...p}=r,u=d(h.counterBadge,c);return o.jsx("span",{className:u,...p,"aria-hidden":!0,ref:m,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const L={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(g,{"aria-label":"Notifications: 7",children:[o.jsx(f,{}),o.jsx(n,{...r,count:7})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const M=["Default","WithoutContent","WithHighNumber","WithButton"];export{t as Default,s as WithButton,a as WithHighNumber,e as WithoutContent,M as __namedExportsOrder,L as default};
