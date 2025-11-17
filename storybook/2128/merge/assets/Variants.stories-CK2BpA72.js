import{j as e}from"./iframe-Dxj0SZQz.js";import{A as n}from"./Alert-CfoEhuU6.js";import{H as i}from"./Heading-DOS_NISo.js";import{C as d}from"./Content-BKdb7Kra.js";import p from"./Default.stories-KwxZxzFU.js";import"./index-nuYtCEEu.js";import"./AlertIcon-EqhFZIQA.js";import"./IconWarning-S0UXp0fg.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D6iV2DzL.js";import"./index-Bd2Xf5pv.js";import"./index-BWjFPLHz.js";import"./useLocalizedStringFormatter-eZsG_k2F.js";import"./context-C6-P6koC.js";import"./dynamic-BgiT-tjm.js";import"./RSPContexts-jyJS88rd.js";import"./utils-Cfq8faXc.js";import"./Button-BkQ_NRiX.js";import"./Text-nz3YKbDr.js";import"./browser-KBC6jiXy.js";import"./EmulatedBoldText-CgLGHcPw.js";import"./LoadingSpinner-D4zskspE.js";import"./Button-CXPXZjsM.js";import"./ProgressBar-LRI5m-um.js";import"./Hidden-Bwn6RBKf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DoLOI9UU.js";import"./useFocusable-DJxE8QS3.js";import"./ActionGroup-WjAvs-BH.js";import"./getActionGroupSlot-Di5FkjTO.js";import"./useStatic-CdzpEGHk.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
