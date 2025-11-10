import{j as e}from"./iframe-BFS0V-7K.js";import{A as n}from"./Alert-CkAVzfTa.js";import{H as i}from"./Heading-DljESEje.js";import{C as d}from"./Content-CWdQm9SB.js";import p from"./Default.stories-DLtORaED.js";import"./index-nuYtCEEu.js";import"./AlertIcon-BSK9BpjA.js";import"./IconWarning-BzBGzmgt.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DYDr2Yry.js";import"./index-BLI0rWKp.js";import"./index-Cd8SiJSJ.js";import"./useLocalizedStringFormatter-Bsp3ptWs.js";import"./context-CL-MWO-e.js";import"./dynamic-D6nHDIyd.js";import"./RSPContexts-vmNR8Bdo.js";import"./utils-pBfQtTJP.js";import"./Button-C69BF7uv.js";import"./Text-Cg-PlNpB.js";import"./browser-DkyXecm8.js";import"./EmulatedBoldText-DZMpoDwy.js";import"./LoadingSpinner-Bnd8iTGA.js";import"./Button-C0SUbguZ.js";import"./ProgressBar-DZnnPhpU.js";import"./Hidden-459sOV2x.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CM3Y5p4v.js";import"./useFocusable-DIP3xdGA.js";import"./ActionGroup-DX0lhxHa.js";import"./getActionGroupSlot-B8sKJhlM.js";import"./useStatic-5zK4mpNm.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
