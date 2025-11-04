import{j as e}from"./iframe-DO9N3msj.js";import{A as n}from"./Alert-CmVL1g9g.js";import{H as i}from"./Heading-DFXUXxT1.js";import{C as d}from"./Content-o-E4J5v4.js";import p from"./Default.stories-BSV99vmZ.js";import"./index-nuYtCEEu.js";import"./AlertIcon-Cx9uM7rV.js";import"./IconWarning-BWr56wBK.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CBgkl_gr.js";import"./index-DPecbs7H.js";import"./index-BKd7rs_c.js";import"./useLocalizedStringFormatter-DC2cqCZD.js";import"./context-BjTRJu3f.js";import"./dynamic-DUGX_GEz.js";import"./RSPContexts-dbdihzDr.js";import"./utils-Cu-DyEOs.js";import"./Button-DK3gLuJ3.js";import"./Text-D7GNIHqq.js";import"./browser-hD6iDIbH.js";import"./EmulatedBoldText-CL2lsqyO.js";import"./LoadingSpinner-k8RqOHze.js";import"./Button-CwTEoZMR.js";import"./ProgressBar-DB2HZm0N.js";import"./Hidden-C-R9QW7n.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-8nZAdgRB.js";import"./useFocusable-ahyCDO6Q.js";import"./ActionGroup-BuBCswp0.js";import"./getActionGroupSlot-B34s0y1B.js";import"./useStatic-KZCckyWk.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
