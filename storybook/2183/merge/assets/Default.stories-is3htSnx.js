import{j as o}from"./iframe-pNOm8Wja.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as l}from"./PropsContextProvider-BWF9EjWJ.js";import{B as g}from"./Button-CgV_q1F1.js";import"./IconApp-BiE0s1PO.js";import{I as f}from"./IconNotification-R2NpEnqN.js";import"./preload-helper-PPVm8Dsz.js";import"./mergeRefs-v_WstrVO.js";import"./index-CfSUEUFJ.js";import"./IconX-CwELzZYK.js";import"./IconCheck-DoYeu8FX.js";import"./Text-_46BQ-Z5.js";import"./browser-CBsMsG9c.js";import"./utils-BknOSkFt.js";import"./EmulatedBoldText-C8Hc8u3o.js";import"./LoadingSpinner-Db8dHYJY.js";import"./ariaLive-C7DipXM8.js";import"./Button-D9P8PHTw.js";import"./ProgressBar-D3icCtAB.js";import"./Hidden-BfleQL3O.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CMdVhRJ1.js";import"./useFocusRing-Cca4ZdHO.js";import"./useFocusable-DOa46CdT.js";import"./useLocalizedStringFormatter-CRfFxVeP.js";import"./remote-DYOOxdg2.js";const B="flow--counter-badge",h={counterBadge:B},n=l("CounterBadge",r=>{const{className:c,count:i,ref:m,...p}=r,u=d(h.counterBadge,c);return o.jsx("span",{className:u,...p,"aria-hidden":!0,ref:m,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const L={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(g,{"aria-label":"Notifications: 7",children:[o.jsx(f,{}),o.jsx(n,{...r,count:7})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
