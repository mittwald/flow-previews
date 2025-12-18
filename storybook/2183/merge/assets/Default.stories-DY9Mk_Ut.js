import{j as o}from"./iframe-BTx5vfX7.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as l}from"./flowComponent-BQbG36RI.js";import{B as g}from"./Button-D0j5fRAE.js";import"./IconChevronDown-Bn-1yhHQ.js";import{I as f}from"./IconNotification-BiScsCYv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CD1bc2Uf.js";import"./index-Cy86CRop.js";import"./IconX-DrrrdYIY.js";import"./IconCheck-C5Vwpnc3.js";import"./Text-DtYTBG7c.js";import"./browser-D9-bvGMx.js";import"./EmulatedBoldText-B89XKop2.js";import"./Text-LwG1QgpY.js";import"./utils-Rd_MYUg3.js";import"./LoadingSpinner-Dr6BVqO2.js";import"./ariaLive-BGIgGOOV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BiBfXFe3.js";import"./context-B8-2fWdM.js";import"./remote-CDkUNGK4.js";import"./Button-D8R90X95.js";import"./ProgressBar-DnkhtDlt.js";import"./Label-nt-Mf4T_.js";import"./Hidden-B6Npv2sL.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CAHdnPVW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-g9jBnoDE.js";import"./useFocus-DM7IXQDx.js";import"./useFocusRing-DjSlkPuN.js";import"./useFocusable-_zqulMQl.js";const B="flow--counter-badge",h={counterBadge:B},n=l("CounterBadge",r=>{const{className:m,count:i,ref:c,...p}=r,u=d(h.counterBadge,m);return o.jsx("span",{className:u,...p,"aria-hidden":!0,ref:c,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const Y={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(g,{"aria-label":"Notifications: 7",children:[o.jsx(f,{}),o.jsx(n,{...r,count:7})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
