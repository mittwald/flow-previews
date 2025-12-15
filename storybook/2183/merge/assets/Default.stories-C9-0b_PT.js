import{j as o}from"./iframe-CH_aTfEL.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as l}from"./PropsContextProvider-DjBCrPYH.js";import{B as g}from"./Button-D53gB1eO.js";import"./IconApp-B8Pdxs7V.js";import{I as f}from"./IconNotification-BOEcvKQr.js";import"./preload-helper-PPVm8Dsz.js";import"./mergeRefs-BzpEnNcV.js";import"./index-XPJW_oiy.js";import"./IconX-DC29rh3t.js";import"./IconCheck-D02mUZL5.js";import"./Text-BRh_x9bF.js";import"./browser-CjAUGP0i.js";import"./utils-C8srcrY8.js";import"./EmulatedBoldText-D1x6Y0F_.js";import"./LoadingSpinner-Cfaoz3gV.js";import"./ariaLive-Cw13p-6Q.js";import"./Button-B1aqxMhV.js";import"./ProgressBar-i73KRfPj.js";import"./Hidden-xsM_Dwee.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dl7i2EFq.js";import"./useFocusRing-AHO8ppps.js";import"./useFocusable-BEFnslrO.js";import"./useLocalizedStringFormatter-DVjHg6pM.js";import"./remote-ZsoG4C7l.js";const B="flow--counter-badge",h={counterBadge:B},n=l("CounterBadge",r=>{const{className:c,count:i,ref:m,...p}=r,u=d(h.counterBadge,c);return o.jsx("span",{className:u,...p,"aria-hidden":!0,ref:m,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const L={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(g,{"aria-label":"Notifications: 7",children:[o.jsx(f,{}),o.jsx(n,{...r,count:7})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
