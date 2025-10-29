import{j as r}from"./iframe-Dpfie29P.js";import{H as a}from"./Heading-eNsITwkI.js";import p from"./Default.stories-CF5ySwea.js";import{N as n}from"./Notification-D7r--aUe.js";import{T as c}from"./Text-BxUYsUAw.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cjzkqjb4.js";import"./index-__VJVmNO.js";import"./index-B8L1MmPw.js";import"./RSPContexts-Dy6WsHjT.js";import"./utils-ByCVrYF8.js";import"./AlertIcon-CjVy_3fH.js";import"./IconWarning-DahfVj-v.js";import"./useLocalizedStringFormatter-DKCw3c-I.js";import"./context-CImZbjU9.js";import"./Button-CP1CQ4aA.js";import"./LoadingSpinner-BvFhoBs5.js";import"./Button-CE70VFoQ.js";import"./ProgressBar-DBQgu7rG.js";import"./Hidden-X2etvrQI.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B3ev5CsH.js";import"./useFocusable-MRbdgJr0.js";import"./Link-CNC8R4gB.js";import"./dynamic-CxKv4_uB.js";import"./browser-SX7l3t_S.js";import"./EmulatedBoldText-DQbMaGdb.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
