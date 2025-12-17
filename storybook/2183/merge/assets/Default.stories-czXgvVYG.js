import{j as o}from"./iframe-BsZhBXal.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as l}from"./flowComponent-DISNxOrN.js";import{B as g}from"./Button-Cxmuw7nD.js";import"./IconApp-DFfFI-8B.js";import{I as f}from"./IconNotification-Bq1EEfxT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lT5ImJcm.js";import"./index-Dw50_Btz.js";import"./IconX-CWxyzjFw.js";import"./IconCheck-B4zjzfHZ.js";import"./Text-CWir5uzG.js";import"./browser-B5Kx9HDY.js";import"./EmulatedBoldText-72QMrXCW.js";import"./Text-CICvYdKp.js";import"./utils-D7f3lHNi.js";import"./LoadingSpinner-D802Ys_g.js";import"./ariaLive-BCVvTk3U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DNPpU0EQ.js";import"./context-BsHlRP-r.js";import"./remote-C6zziWZe.js";import"./Button-DmBDFYEY.js";import"./ProgressBar-BuAY7GL-.js";import"./Label-Bdtu_aaV.js";import"./Hidden-B-7zzc6R.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMdE4zjY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BfmYyYbe.js";import"./useFocus-DkItBW7w.js";import"./useFocusRing-C7h1YZo7.js";import"./useFocusable-CefaVcL6.js";const B="flow--counter-badge",h={counterBadge:B},n=l("CounterBadge",r=>{const{className:m,count:i,ref:c,...p}=r,u=d(h.counterBadge,m);return o.jsx("span",{className:u,...p,"aria-hidden":!0,ref:c,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const Y={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(g,{"aria-label":"Notifications: 7",children:[o.jsx(f,{}),o.jsx(n,{...r,count:7})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
