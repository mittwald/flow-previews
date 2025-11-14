import{j as e}from"./iframe-DxjJvypA.js";import{A as n}from"./Alert-B_YHHoEM.js";import{H as i}from"./Heading-BRsOw7TR.js";import{C as d}from"./Content-D4JTeq-s.js";import p from"./Default.stories-jpF_hews.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CJADbW9L.js";import"./IconWarning-BlszW1tj.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DUeX89k8.js";import"./index-183dggCm.js";import"./index-12LB0401.js";import"./useLocalizedStringFormatter-B-C4j2VW.js";import"./context-IWHzWN32.js";import"./dynamic-BdL6WG8t.js";import"./RSPContexts-BduYfYam.js";import"./utils-6KDkR0i-.js";import"./Button-CsJkXLJC.js";import"./Text-CGLUa4sd.js";import"./browser-CB6HLjfz.js";import"./EmulatedBoldText-CPQw7A1N.js";import"./LoadingSpinner-q348yrim.js";import"./Button-nEfrx5gJ.js";import"./ProgressBar-5owblEDR.js";import"./Hidden-r4JGJoQA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DXxhUawj.js";import"./useFocusable-BcokvUUD.js";import"./ActionGroup-CVcTWpTg.js";import"./getActionGroupSlot-DvyUR_ym.js";import"./useStatic-iE5J9zsV.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
