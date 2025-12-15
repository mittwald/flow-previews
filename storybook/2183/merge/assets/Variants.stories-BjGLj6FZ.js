import{j as r}from"./iframe-Br-RCPWN.js";import{H as n}from"./Heading-BOVN6eFE.js";import p from"./Default.stories-B81IFon5.js";import{N as a}from"./Notification-B1zm2nBo.js";import{T as c}from"./Text-CIylET5F.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CSAj95jw.js";import"./mergeRefs-DP0fvyvw.js";import"./index-DO8vOkwc.js";import"./RSPContexts-CI5k95q6.js";import"./utils-Dak_ECAp.js";import"./AlertIcon-Ci_dM1ct.js";import"./IconWarning-C1NRfwVV.js";import"./remote-Bo4xuhzH.js";import"./useLocalizedStringFormatter-DcURVzAt.js";import"./context-Bc5k9Bh6.js";import"./Button-D54g6t8r.js";import"./LoadingSpinner-B0xf-tui.js";import"./Button-CoaZdKpJ.js";import"./ProgressBar-DLYSkAPs.js";import"./Hidden-BWng0Hd6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-kD3u5y5H.js";import"./useFocusable-B6Sg882a.js";import"./Link-Cd6zxchg.js";import"./dynamic-CeRu270G.js";import"./browser-Dyp86VHf.js";import"./EmulatedBoldText-DiJCrkGJ.js";const R={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("strong",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("strong",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(a,{...e,children:[r.jsx(n,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("strong",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Notification {...props}>
      <Heading>Storage almost exceeded</Heading>
      <Text>
        The storage in your project <strong>My Project</strong> is over 80%
        utilized.
      </Text>
    </Notification>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Notification {...props}>
      <Heading>No SSL certificate</Heading>
      <Text>
        No SSL certificate could be issued for <strong>example.de</strong>.
      </Text>
    </Notification>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Notification {...props}>
      <Heading>App installation finished</Heading>
      <Text>
        Your app <strong>My WordPress</strong> has been installed.
      </Text>
    </Notification>
}`,...i.parameters?.docs?.source}}};const $=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,i as Success,t as Warning,$ as __namedExportsOrder,R as default};
