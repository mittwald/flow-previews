import{j as e}from"./iframe-DxwcgvDR.js";import{A as n}from"./Alert-dpgOlODz.js";import{H as i}from"./Heading-DPk654Hf.js";import{C as d}from"./Content-CvN0_ss6.js";import p from"./Default.stories-Bw4_1CSU.js";import"./index-nuYtCEEu.js";import"./AlertIcon-B3A4X_sK.js";import"./IconWarning-CXkzDcrG.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9gZXDBr.js";import"./index-Hde59aEk.js";import"./index-BbnRfAJ3.js";import"./useLocalizedStringFormatter-DgjeZvep.js";import"./context-CGBA4dD2.js";import"./dynamic-BXIRoUAY.js";import"./RSPContexts-C4NdBiWw.js";import"./utils-n6_FFOiQ.js";import"./Button-DpmT-Qin.js";import"./Text-0mdbe7by.js";import"./browser-Cqe1LxfT.js";import"./EmulatedBoldText-Bkaq8qYh.js";import"./LoadingSpinner-BQdOHNHu.js";import"./Button-DnBmTQ11.js";import"./ProgressBar-BcO4kXd3.js";import"./Hidden-Dz5WTy5W.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CNIgQMUD.js";import"./useFocusable-CfD6tvJl.js";import"./ActionGroup-DAojqoGf.js";import"./getActionGroupSlot-DtMTeAyj.js";import"./useStatic-CjurL4ph.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
