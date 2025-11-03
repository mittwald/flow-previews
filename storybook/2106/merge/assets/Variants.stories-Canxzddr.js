import{j as e}from"./iframe-C3RmV_vn.js";import{A as n}from"./Alert-D_C58G56.js";import{H as i}from"./Heading-BU4qnENK.js";import{C as d}from"./Content-DSufA99H.js";import p from"./Default.stories-C8pvvQsf.js";import"./index-nuYtCEEu.js";import"./AlertIcon-0DtXBii2.js";import"./IconWarning-BE2KSBI-.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DFlBLvPJ.js";import"./index-C-ZjcPlt.js";import"./index-hkSQrj3P.js";import"./useLocalizedStringFormatter-ChCCrZ8e.js";import"./context-DCRPXx9V.js";import"./dynamic-YRcCSNg3.js";import"./RSPContexts-BOh9wduO.js";import"./utils-D8HC0yU-.js";import"./Button-DaazfuBy.js";import"./Text-CaziZxQU.js";import"./browser-DymlHLTF.js";import"./EmulatedBoldText-CI-5ODle.js";import"./LoadingSpinner-DyOalyyw.js";import"./Button-CgyHIJsr.js";import"./ProgressBar-CDrPZwEB.js";import"./Hidden-CChVoDJ-.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BIAWuC29.js";import"./useFocusable-C2zASQXP.js";import"./ActionGroup-DaI6rKw9.js";import"./getActionGroupSlot-BgdQ1S-5.js";import"./useStatic-_h3OjEkL.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
