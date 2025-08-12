import{j as e}from"./iframe-BpEavT04.js";import{A as n}from"./Alert-BT8lreQD.js";import{H as i}from"./Heading-9sAKSscM.js";import{C as d}from"./Content-BJBM2hDl.js";import p from"./Default.stories-CbFsExr2.js";import"./index-k6QiPQ3a.js";import"./AlertIcon-CnPP9zGs.js";import"./IconWarning-vA6HsYJq.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-REkcYbgF.js";import"./mergeRefs-BC_BuoXn.js";import"./index-D2hwKXUM.js";import"./useLocalizedStringFormatter-DJSuZDt4.js";import"./context-1jMNVxHt.js";import"./dynamic-DKDa4OpU.js";import"./Heading-DFRS6AVv.js";import"./RSPContexts-z3euxKCR.js";import"./utils-CpHgE-S6.js";import"./Button-CCZgVc0N.js";import"./Text-CcXeyI30.js";import"./browser-DDZLlA7g.js";import"./EmulatedBoldText-CG9Doyve.js";import"./Text-DWLjOUr2.js";import"./LoadingSpinner-CRDc6voB.js";import"./Button-CEEqH0ki.js";import"./ProgressBar-Bg2NAwr4.js";import"./Label-DpfcozJA.js";import"./Hidden-ZJTH-wDD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-6-vYiz3X.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DGfPwR5g.js";import"./useFocus-BaJLfW1J.js";import"./useFocusRing-DmvqpG-I.js";import"./useFocusable-C6ZTHalD.js";const J={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const K=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,a as Success,t as Warning,K as __namedExportsOrder,J as default};
