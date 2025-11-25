import{j as e}from"./iframe-DjQX0xu7.js";import{A as n}from"./Alert-DEAo5TA3.js";import{H as i}from"./Heading-Ek-NbzZ5.js";import{C as d}from"./Content-C8r-jMKP.js";import p from"./Default.stories-D23ZSG1s.js";import"./index-nuYtCEEu.js";import"./AlertIcon-BUEZz4zv.js";import"./IconWarning-BuswXrVR.js";import"./clsx-B-dksMZM.js";import"./flowComponent-JYU8T0At.js";import"./index-Cs3FvKNT.js";import"./index-C69E--h5.js";import"./useLocalizedStringFormatter-DeqRUlGI.js";import"./context-D5QUCTp7.js";import"./dynamic-22J8cjb3.js";import"./RSPContexts-DSRMecLI.js";import"./utils-C30iJzW5.js";import"./Text-CBF9Mq5x.js";import"./browser-BHlZuLqI.js";import"./EmulatedBoldText-C8hbjTYh.js";import"./Button-BzgEBlcG.js";import"./LoadingSpinner-CySWmfRx.js";import"./Button-BjLxB9ET.js";import"./ProgressBar-CCJkQYvg.js";import"./Hidden-DiDVenMv.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-UFpAQC1c.js";import"./useFocusable-DfpRXFuB.js";import"./ActionGroup-BSKw1FYv.js";import"./Section-Cz82PiQz.js";import"./context-B6Z8BqUC.js";import"./Collection-9mWjKSNJ.js";import"./CollectionBuilder-DGVbcN1s.js";import"./SelectionIndicator-BCys4Qq1.js";import"./Separator-B8K4J-Om.js";import"./useStatic-QbJcOryG.js";import"./LayoutCard-F3d117j-.js";import"./dummyText-CX_I_Wpl.js";const M={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const Q=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,a as Success,t as Warning,Q as __namedExportsOrder,M as default};
