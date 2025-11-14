import{j as e}from"./iframe-D4i-5dyB.js";import{A as n}from"./Alert-BxysIfVE.js";import{H as i}from"./Heading-CqgoaxDG.js";import{C as d}from"./Content-BMj6l0HC.js";import p from"./Default.stories-BoF7WiYH.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CoWnPqgJ.js";import"./IconWarning-CMFXnZAS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BnDJ-hIk.js";import"./mergeRefs-BSb0Bje6.js";import"./index-BqFsReNE.js";import"./useLocalizedStringFormatter-Csijhnwe.js";import"./context-C76p02_s.js";import"./dynamic-l-Dsj5TR.js";import"./RSPContexts-BOewTbeY.js";import"./utils-BWp3lM8P.js";import"./Button-C5iEQf44.js";import"./Text-D-HEhYG-.js";import"./browser-Cwp7r97w.js";import"./EmulatedBoldText-wsap70PU.js";import"./LoadingSpinner-DCo1rAvM.js";import"./Button-BNk2Wifn.js";import"./ProgressBar-B4smC8yo.js";import"./Hidden-MqQXQobC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BHC6C08N.js";import"./useFocusable-COObapRc.js";import"./ActionGroup-DfaF4Ihs.js";import"./getActionGroupSlot-CzwDHsH8.js";import"./useStatic-CrV_XbcB.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
      </Content>
    </Alert>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <Alert {...props}>
      <Heading>Storage is almost exceeded</Heading>
      <Content>
        Your storage space is over 80% utilized. We recommend that you upgrade
        the storage space to avoid disruptions during backups.
      </Content>
    </Alert>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <Alert {...props}>
      <Heading>No SSL certificate could be issued</Heading>
      <Content>
        No SSL certificate could be issued for this domain because the domain IP
        does not point to your server IP.
      </Content>
    </Alert>
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Alert {...props}>
      <Heading>Your app is up to date</Heading>
      <Content>Your app has been updated to the current version.</Content>
    </Alert>
}`,...a.parameters?.docs?.source}}};const q=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,a as Success,t as Warning,q as __namedExportsOrder,$ as default};
