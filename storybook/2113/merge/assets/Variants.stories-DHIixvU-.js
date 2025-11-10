import{j as e}from"./iframe-D4AGuMnx.js";import{A as n}from"./Alert-DRlhPKAM.js";import{H as i}from"./Heading-BsaQzqWp.js";import{C as d}from"./Content-CrST6Q2Z.js";import p from"./Default.stories-COfGRzT9.js";import"./index-nuYtCEEu.js";import"./AlertIcon-DIdf3aQ3.js";import"./IconWarning-BC3tK9kj.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BIyscBzo.js";import"./index-Cd_u2pV_.js";import"./index-DNvdHJqk.js";import"./useLocalizedStringFormatter-BNVQM74q.js";import"./context-Bzk-5tqO.js";import"./dynamic-oZwQWaGw.js";import"./RSPContexts-B4Pxvc-Q.js";import"./utils-CqMmhAxq.js";import"./Button-DtTeM47l.js";import"./Text-BtpbrdrH.js";import"./browser-3OZPWisM.js";import"./EmulatedBoldText-IEU2-xTn.js";import"./LoadingSpinner-u-oBwaFl.js";import"./Button-84EHC3SL.js";import"./ProgressBar-_bs3wo-c.js";import"./Hidden-BnByJu4s.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B0_rzNcg.js";import"./useFocusable-qdXI3c9W.js";import"./ActionGroup-CVIQhVAR.js";import"./getActionGroupSlot-y53Ggupv.js";import"./useStatic-CK2cw9Tx.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
