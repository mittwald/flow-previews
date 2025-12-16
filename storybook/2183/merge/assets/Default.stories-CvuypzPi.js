import{j as o}from"./iframe-BFixO3jI.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as l}from"./flowComponent-CxS2pQtr.js";import{B as g}from"./Button-yJ8r8LHg.js";import"./IconApp-DCuSf9pl.js";import{I as f}from"./IconNotification-BBUT-Wav.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BS5E-w2o.js";import"./index-Cr8VPbn2.js";import"./IconX-Od5S_TA6.js";import"./IconCheck-zO03gOoY.js";import"./Text-ZinnvgDr.js";import"./browser-CbH1E9WO.js";import"./EmulatedBoldText-Bnw4mltQ.js";import"./Text-BnIAmJK7.js";import"./utils-DlL1jtSe.js";import"./LoadingSpinner-BG4QqZls.js";import"./ariaLive-MQ5ckYPo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DQxUdM9Y.js";import"./context-CaTu-1Q_.js";import"./remote-DXDa28-R.js";import"./Button-BpPmVpYb.js";import"./ProgressBar-Dekjp8mr.js";import"./Label-dlScXtXx.js";import"./Hidden-eVS00tin.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-R7EdTXDW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-B3RLWuiX.js";import"./useFocus-CUhSw6Xa.js";import"./useFocusRing-B3xEYT1Y.js";import"./useFocusable-9RTPH9cd.js";const B="flow--counter-badge",h={counterBadge:B},n=l("CounterBadge",r=>{const{className:m,count:i,ref:c,...p}=r,u=d(h.counterBadge,m);return o.jsx("span",{className:u,...p,"aria-hidden":!0,ref:c,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const Y={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(g,{"aria-label":"Notifications: 7",children:[o.jsx(f,{}),o.jsx(n,{...r,count:7})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
