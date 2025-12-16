import{j as o}from"./iframe-CgbY6Bes.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as l}from"./PropsContextProvider-CTdpdvjF.js";import{B as g}from"./Button-AhSsxt5Y.js";import"./IconChevronDown-BgfzzCeX.js";import{I as f}from"./IconNotification-2tHn7VG3.js";import"./preload-helper-PPVm8Dsz.js";import"./mergeRefs-CxSmTZ1y.js";import"./index-COB0h6yR.js";import"./IconX-Bt51Q_dW.js";import"./IconCheck-Bkr0Vsq-.js";import"./Text-VVW0omSC.js";import"./browser-C7soFJnH.js";import"./utils-C1D540aj.js";import"./EmulatedBoldText-C19QTVcg.js";import"./LoadingSpinner-BWpI0HIx.js";import"./ariaLive-BHE3J_Iw.js";import"./Button-B5ZFMN0X.js";import"./ProgressBar-DU_WxInK.js";import"./Hidden-DQEm4CFa.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B7mjZSuw.js";import"./useFocusRing-d9Vd45dy.js";import"./useFocusable-C07dHpTX.js";import"./useLocalizedStringFormatter-BxyHFIOH.js";import"./remote-VFFVCOtz.js";const B="flow--counter-badge",h={counterBadge:B},n=l("CounterBadge",r=>{const{className:c,count:i,ref:m,...p}=r,u=d(h.counterBadge,c);return o.jsx("span",{className:u,...p,"aria-hidden":!0,ref:m,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const L={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(g,{"aria-label":"Notifications: 7",children:[o.jsx(f,{}),o.jsx(n,{...r,count:7})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
