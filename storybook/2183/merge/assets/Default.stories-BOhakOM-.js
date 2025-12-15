import{j as o}from"./iframe-CN4G8qqm.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as l}from"./PropsContextProvider-4OAE62jj.js";import{B as g}from"./Button-Bq80dFyw.js";import"./IconChevronDown-oGa76fM6.js";import{I as f}from"./IconNotification-D-bmWIvw.js";import"./preload-helper-PPVm8Dsz.js";import"./mergeRefs-B9PoHYFQ.js";import"./index-I0Qj-Cdl.js";import"./IconX-BxRR1JIX.js";import"./IconCheck-DqC7rWu2.js";import"./Text-0Ubm83r2.js";import"./browser-TeUtxSTm.js";import"./utils-DbmEdXKf.js";import"./EmulatedBoldText-moUjmeps.js";import"./LoadingSpinner-D2A4fUcq.js";import"./ariaLive-BjvyJtUO.js";import"./Button-DbVJWx45.js";import"./ProgressBar-DMLVl3vw.js";import"./Hidden-BofwJMZa.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CcGGjrZQ.js";import"./useFocusRing-CERaDmlf.js";import"./useFocusable-BkpoXrB2.js";import"./useLocalizedStringFormatter-B9Hz40nN.js";import"./remote-DWrodQTa.js";const B="flow--counter-badge",h={counterBadge:B},n=l("CounterBadge",r=>{const{className:c,count:i,ref:m,...p}=r,u=d(h.counterBadge,c);return o.jsx("span",{className:u,...p,"aria-hidden":!0,ref:m,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const L={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(g,{"aria-label":"Notifications: 7",children:[o.jsx(f,{}),o.jsx(n,{...r,count:7})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
