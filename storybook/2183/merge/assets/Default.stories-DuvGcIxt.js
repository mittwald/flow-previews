import{j as o}from"./iframe-UtMdsYXa.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as l}from"./flowComponent-CF2d_4jg.js";import{B as g}from"./Button-pSxy78IN.js";import"./IconChevronDown-DitnVNWB.js";import{I as f}from"./IconNotification-BCJNNgX3.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CpvR74kY.js";import"./index-BrcrHHEG.js";import"./IconX-DVdUYCtj.js";import"./IconCheck-Bw85iPm6.js";import"./Text-TG940Z8h.js";import"./browser-DFxdAZBn.js";import"./EmulatedBoldText-CWBgkHDb.js";import"./Text-3HTz8ZLb.js";import"./utils-43m9YPYy.js";import"./LoadingSpinner-AaC_xRXA.js";import"./ariaLive-K_SPQRtg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BRizf_XS.js";import"./context-BpPaGDcf.js";import"./remote-YAokn8An.js";import"./Button-DZZrikYU.js";import"./ProgressBar-BxQgVB3L.js";import"./Label-GMp5wGdV.js";import"./Hidden-Bs3uTZuz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CtsciHmS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-NZb7prl9.js";import"./useFocus-BaPf3vXr.js";import"./useFocusRing-C5G5IFoS.js";import"./useFocusable-DoTzQtzG.js";const B="flow--counter-badge",h={counterBadge:B},n=l("CounterBadge",r=>{const{className:m,count:i,ref:c,...p}=r,u=d(h.counterBadge,m);return o.jsx("span",{className:u,...p,"aria-hidden":!0,ref:c,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const Y={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(g,{"aria-label":"Notifications: 7",children:[o.jsx(f,{}),o.jsx(n,{...r,count:7})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
