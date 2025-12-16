import{j as o}from"./iframe-C0Xzz6Xl.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as l}from"./flowComponent-Ds2Zpckn.js";import{B as g}from"./Button-D6SK2KLv.js";import"./IconChevronDown-CArgk7t7.js";import{I as f}from"./IconNotification-DmqAox1l.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvD-rn0f.js";import"./index-BkQRYDSQ.js";import"./IconX-CHnO5RjF.js";import"./IconCheck-ScVw6CHm.js";import"./Text-BUGgmeAk.js";import"./browser-GRuvXKoj.js";import"./EmulatedBoldText-Bu7fFWiW.js";import"./Text-DHURGNQD.js";import"./utils-DFqauJju.js";import"./LoadingSpinner-BQ76BTg3.js";import"./ariaLive-QI1POo56.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-JxxzEpeY.js";import"./context-D7OeR9su.js";import"./remote-Dsm2RjO6.js";import"./Button-6QRSCQME.js";import"./ProgressBar-CO9uG_4l.js";import"./Label-CKDZcwiZ.js";import"./Hidden-C5gaELfT.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Zu9XfwEA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-5FukuHow.js";import"./useFocus-B1cKxXv-.js";import"./useFocusRing-Bftxxd_V.js";import"./useFocusable-RbNM5_qn.js";const B="flow--counter-badge",h={counterBadge:B},n=l("CounterBadge",r=>{const{className:m,count:i,ref:c,...p}=r,u=d(h.counterBadge,m);return o.jsx("span",{className:u,...p,"aria-hidden":!0,ref:c,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const Y={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(g,{"aria-label":"Notifications: 7",children:[o.jsx(f,{}),o.jsx(n,{...r,count:7})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
