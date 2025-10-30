import{j as e}from"./iframe-PDaUHho1.js";import{A as n}from"./Alert-D0YSmsoS.js";import{H as i}from"./Heading-CDhtmS_q.js";import{C as d}from"./Content-BBxZEkAS.js";import p from"./Default.stories-DqqdLQY2.js";import"./index-nuYtCEEu.js";import"./AlertIcon-VJR10kZy.js";import"./IconWarning-B0hQIuUq.js";import"./clsx-B-dksMZM.js";import"./flowComponent-pwAlxQ7Y.js";import"./index-V7XxCnlO.js";import"./index-B4HwJOZh.js";import"./useLocalizedStringFormatter-hpfCA0Xp.js";import"./context-DBDDiU0I.js";import"./dynamic-DqsoKxlb.js";import"./RSPContexts-DnH8q5jT.js";import"./utils-WYXKBT_h.js";import"./Button-C5eOeaT9.js";import"./Text-PjSitUb9.js";import"./browser-Dn1Bftrm.js";import"./EmulatedBoldText-DeDAxtsF.js";import"./LoadingSpinner-bLHLQdUH.js";import"./Button-vCn3sloq.js";import"./ProgressBar-m4wkDJ9q.js";import"./Hidden-Cu9gnBmg.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-msSK4oeu.js";import"./useFocusable-CU77Oyp_.js";import"./ActionGroup-U5_rjuL9.js";import"./getActionGroupSlot-BbmM7byy.js";import"./useStatic-UwW6yb2T.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
