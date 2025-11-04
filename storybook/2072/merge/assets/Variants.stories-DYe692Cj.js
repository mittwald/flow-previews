import{j as e}from"./iframe-BGjIo6hw.js";import{A as n}from"./Alert-CouJG9of.js";import{H as i}from"./Heading-QJXZDrut.js";import{C as d}from"./Content-Dsk5yoIX.js";import p from"./Default.stories-DeXcTRaT.js";import"./index-nuYtCEEu.js";import"./AlertIcon-Dbvw5J6E.js";import"./IconWarning-OiQYEbgz.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CKy74ieT.js";import"./index-RB0ZeMWq.js";import"./index-D8hDUSyP.js";import"./useLocalizedStringFormatter-DMlB1stV.js";import"./context-DQ8Yy5yO.js";import"./dynamic-CxgTiQUL.js";import"./RSPContexts-BLZAUi5X.js";import"./utils-FWUTa6bA.js";import"./Button-72uC3Xxd.js";import"./Text-Bc8wJjtt.js";import"./browser-i6k0HuHn.js";import"./EmulatedBoldText-DcmHRAc9.js";import"./LoadingSpinner-DW7FO3ji.js";import"./Button-DVeyWZob.js";import"./ProgressBar-IcJtTGAe.js";import"./Hidden-YgttGYZu.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-B268tRT3.js";import"./useFocusable-Cp5mQ5Rc.js";import"./ActionGroup-hiZS26La.js";import"./getActionGroupSlot-BbMDqkbD.js";import"./useStatic-B2rVxKR2.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
