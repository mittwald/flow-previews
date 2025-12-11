import{j as e}from"./iframe-Bo-CC4om.js";import{A as n}from"./Alert-Dt_4j8QW.js";import{H as i}from"./Heading-BHjCTnZi.js";import{C as d}from"./Content-DkmAOWWJ.js";import p from"./Default.stories-CcwL4G93.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-JVmwHNwK.js";import"./mergeRefs-BCVLU5t5.js";import"./index-Cq4e0PeD.js";import"./AlertIcon-mGxxCUjy.js";import"./IconWarning-B7qIXHf5.js";import"./remote-B4cOsRJO.js";import"./useLocalizedStringFormatter-C8gMVCfn.js";import"./context-DUzMMmSG.js";import"./dynamic-DI9mkNr1.js";import"./RSPContexts-BIpJdst2.js";import"./utils-BE4vzmGc.js";import"./Text-FWtYFqa_.js";import"./browser-CQUdwXOL.js";import"./EmulatedBoldText-DaZX5sg6.js";import"./Button-DsbAYxy6.js";import"./LoadingSpinner-U2Qf3euF.js";import"./Button-DEzwtm5X.js";import"./ProgressBar-1VAtpU2v.js";import"./Hidden-DO4405Os.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-ChCBtORy.js";import"./useFocusable-B-PGRSDZ.js";import"./ActionGroup-DmuV-_zy.js";import"./Section-BSzb61PI.js";import"./context-Dp75aXTI.js";import"./Collection-D6MbkC5o.js";import"./CollectionBuilder-B0V3ZRNt.js";import"./SelectionIndicator-BLd_vFKr.js";import"./Separator-BoV_7H5z.js";import"./useStatic-CUzdYRpB.js";import"./dummyText-CX_I_Wpl.js";const M={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
