import{j as e}from"./iframe-iStLwuZ7.js";import{A as n}from"./Alert-B1uLVc_c.js";import{H as i}from"./Heading-HUlQjbPG.js";import{C as d}from"./Content-D-pd4nBC.js";import p from"./Default.stories-QnxuwZtI.js";import"./index-nuYtCEEu.js";import"./AlertIcon-DkyVKzRm.js";import"./IconWarning-DFqNAy-A.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BgccJZsB.js";import"./index-BbqvJdms.js";import"./index-DcihAMJC.js";import"./useLocalizedStringFormatter-nySSu_zi.js";import"./context-abCQqTkG.js";import"./dynamic-BC0kG87y.js";import"./RSPContexts-LTaLIYp5.js";import"./utils-En5R44lx.js";import"./Button-DeYIfmY1.js";import"./Text-Bm93Qc7O.js";import"./browser-D_N9MqU0.js";import"./EmulatedBoldText-Bxo0dRe8.js";import"./LoadingSpinner-Bbl45bGl.js";import"./Button-Cm_HfJV4.js";import"./ProgressBar-BI2riqcs.js";import"./Hidden-Dy-IvjOH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-LOcsQEvn.js";import"./useFocusable-BrL0nAob.js";import"./ActionGroup-szYqUjDu.js";import"./getActionGroupSlot-Df52Fbgc.js";import"./useStatic-TN_NP4Rc.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
