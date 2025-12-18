import{j as r}from"./iframe-FgJ_J-H0.js";import{H as a}from"./Heading-CtwLqgxn.js";import p from"./Default.stories-CIeFnmu4.js";import{N as n}from"./Notification-BfVd4W3J.js";import{T as c}from"./Text-DFL3SoXQ.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D4ZDxBE5.js";import"./mergeRefs-B0SFCKpc.js";import"./index-D5Q5r0EQ.js";import"./RSPContexts-BtQRbm6D.js";import"./utils-CpAt2MQ0.js";import"./AlertIcon-B3uKWtQk.js";import"./IconWarning-CTwTuPoy.js";import"./useLocalizedStringFormatter-T_wC2jpb.js";import"./context-BdkCFUfw.js";import"./Button-DAV102-b.js";import"./LoadingSpinner-D-ZvoQWA.js";import"./Button-D1iDLFQk.js";import"./ProgressBar-C9bgo184.js";import"./Hidden-fZuF_gJA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DWyZOWS1.js";import"./useFocusable-CcMdE3Gl.js";import"./Link-BTa1ooRS.js";import"./dynamic-CcSJ2V2H.js";import"./browser-DUTkZfBO.js";import"./EmulatedBoldText-B0xGhkgA.js";const O={...p,title:"Status/Notifications/Notification/Status"},s={},t={args:{status:"warning"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"Storage almost exceeded"}),r.jsxs(c,{children:["The storage in your project ",r.jsx("b",{children:"My Project"})," is over 80% utilized."]})]})},o={args:{status:"danger"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"No SSL certificate"}),r.jsxs(c,{children:["No SSL certificate could be issued for ",r.jsx("b",{children:"example.de"}),"."]})]})},i={args:{status:"success"},render:e=>r.jsxs(n,{...e,children:[r.jsx(a,{children:"App installation finished"}),r.jsxs(c,{children:["Your app ",r.jsx("b",{children:"My WordPress"})," has been installed."]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
