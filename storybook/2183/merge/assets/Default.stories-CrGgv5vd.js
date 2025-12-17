import{j as o}from"./iframe-D0TBPZEN.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as l}from"./flowComponent-BJZeh5dT.js";import{B as g}from"./Button-KdCw7j9H.js";import"./IconChevronDown-Bbj4kj6E.js";import{I as f}from"./IconNotification-CDB7eNp4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDPp8Owz.js";import"./index-Cimb1y_J.js";import"./IconX-CN6PeFmZ.js";import"./IconCheck-BEy8YdgR.js";import"./Text-eR7t4eab.js";import"./browser-BxCdUhN6.js";import"./EmulatedBoldText-D0EAgwUh.js";import"./Text-CculVWnY.js";import"./utils-D99Vyo1b.js";import"./LoadingSpinner-DmqGaBhS.js";import"./ariaLive-BIzH68Db.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-PXbfbnRK.js";import"./context-qsxormAC.js";import"./remote-Dx3xetcp.js";import"./Button-DCdA3b5l.js";import"./ProgressBar-NoiT46hC.js";import"./Label-B3MDDK1W.js";import"./Hidden-BgnID2na.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BXxZPVNQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Ccmkzzzz.js";import"./useFocus-DX98yPkU.js";import"./useFocusRing-BVlc85iC.js";import"./useFocusable-BcHjS_A6.js";const B="flow--counter-badge",h={counterBadge:B},n=l("CounterBadge",r=>{const{className:m,count:i,ref:c,...p}=r,u=d(h.counterBadge,m);return o.jsx("span",{className:u,...p,"aria-hidden":!0,ref:c,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const Y={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(g,{"aria-label":"Notifications: 7",children:[o.jsx(f,{}),o.jsx(n,{...r,count:7})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
