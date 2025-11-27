import{j as r}from"./iframe-7BcSOkL1.js";import{H as a}from"./Heading-B3rrQZdA.js";import p from"./Default.stories-DSiecVw1.js";import{N as n}from"./Notification-ClV3UBCJ.js";import{T as c}from"./Text-sNy_JVUg.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-T63dMOzs.js";import"./mergeRefs-O6Tz23YZ.js";import"./index-DFg9K6WW.js";import"./RSPContexts-VFAeT7fJ.js";import"./utils-CnXd-itf.js";import"./AlertIcon-sj9HDcTQ.js";import"./IconWarning-DFK7FPRm.js";import"./useLocalizedStringFormatter-mETPtdfy.js";import"./context-BxMgKMFE.js";import"./Button-BCb61ouP.js";import"./LoadingSpinner-CQRWUrve.js";import"./Button-BRvXO2c0.js";import"./ProgressBar-LVm02CMO.js";import"./Hidden-BaJxX0T2.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-dBoRO-LN.js";import"./useFocusable-WK7F_Oar.js";import"./Link-BKHlTtzt.js";import"./dynamic-BRBd3S7h.js";import"./browser-DkuKIMCf.js";import"./EmulatedBoldText-KFps1Djg.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <b>My Project</b> is over 80% utilized.
      </Text>
    </Notification>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <b>example.de</b>.
      </Text>
    </Notification>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <b>My WordPress</b> has been installed.
      </Text>
    </Notification>
}`,...i.parameters?.docs?.source}}};const R=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,i as Success,t as Warning,R as __namedExportsOrder,O as default};
