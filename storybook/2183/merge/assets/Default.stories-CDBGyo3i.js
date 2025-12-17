import{j as o}from"./iframe-D2Ryv2XM.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as l}from"./flowComponent-P0LvaFxL.js";import{B as g}from"./Button-0ymElbGx.js";import"./IconApp-D72ec8J0.js";import{I as f}from"./IconNotification-B8r3OsXF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQBbrLYy.js";import"./index-C63C9hiI.js";import"./IconX-DZdRXBmP.js";import"./IconCheck-Bb3WY8_H.js";import"./Text-BztGJEd5.js";import"./browser-k7JOs1GI.js";import"./EmulatedBoldText-j8ZSwmcB.js";import"./Text-D7v3tGEm.js";import"./utils-BqLZYyR8.js";import"./LoadingSpinner-BrbkAsB7.js";import"./ariaLive-CUFvfrWF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D3q43d5z.js";import"./context-nMHmB_Zz.js";import"./remote-c0PQzJc6.js";import"./Button-CBxmpU8U.js";import"./ProgressBar-Ftd9nhbH.js";import"./Label-BRB94mKh.js";import"./Hidden-BS4L5nhJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-xl5SJTPu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-oTeUo0kc.js";import"./useFocus-CHBEY2MC.js";import"./useFocusRing-Bonkbq1h.js";import"./useFocusable-DzubWnzm.js";const B="flow--counter-badge",h={counterBadge:B},n=l("CounterBadge",r=>{const{className:m,count:i,ref:c,...p}=r,u=d(h.counterBadge,m);return o.jsx("span",{className:u,...p,"aria-hidden":!0,ref:c,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const Y={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(g,{"aria-label":"Notifications: 7",children:[o.jsx(f,{}),o.jsx(n,{...r,count:7})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
