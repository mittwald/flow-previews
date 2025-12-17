import{j as o}from"./iframe-CQakcPxy.js";import{c as d}from"./clsx-B-dksMZM.js";import{f as l}from"./flowComponent-CGl7t6Dn.js";import{B as g}from"./Button-BgdUtfaQ.js";import"./IconChevronDown-DRX1rHio.js";import{I as f}from"./IconNotification-iXwKHAmQ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-p-QrdfBe.js";import"./index-Cea8xGLH.js";import"./IconX-BoJQTJmc.js";import"./IconCheck-BnOPUo-b.js";import"./Text-BtxvTgzr.js";import"./browser-n5THB09p.js";import"./EmulatedBoldText-BugEiGRa.js";import"./Text-C-10tsQv.js";import"./utils-kpK_hrRV.js";import"./LoadingSpinner-DSvn_mnc.js";import"./ariaLive-CRk_T6YS.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BjsiUt0Q.js";import"./context-CTwP8X6y.js";import"./remote-DEFV7i-V.js";import"./Button-CodSfk9S.js";import"./ProgressBar-Dp4X-EbZ.js";import"./Label-CTPlNXVy.js";import"./Hidden-BPFiveoH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bql10b_o.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CTHZkDu6.js";import"./useFocus-DdJNefAV.js";import"./useFocusRing-DLxPKRwM.js";import"./useFocusable-Da5l0bUG.js";const B="flow--counter-badge",h={counterBadge:B},n=l("CounterBadge",r=>{const{className:m,count:i,ref:c,...p}=r,u=d(h.counterBadge,m);return o.jsx("span",{className:u,...p,"aria-hidden":!0,ref:c,children:i&&i>99?"99+":i})});n.__docgenInfo={description:"@flr-generate all",methods:[],displayName:"CounterBadge"};const Y={title:"Status/CounterBadge",component:n,args:{count:5},parameters:{controls:{exclude:["elementType","tunnelId","render"]}},render:r=>o.jsx(n,{...r})},t={},e={args:{count:void 0}},a={args:{count:120}},s={render:r=>o.jsxs(g,{"aria-label":"Notifications: 7",children:[o.jsx(f,{}),o.jsx(n,{...r,count:7})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
