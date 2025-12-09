import{j as e}from"./iframe-CLIUsYfM.js";import{A as n}from"./Alert-BpD9EZoZ.js";import{H as i}from"./Heading-CKk-OBgv.js";import{C as d}from"./Content-DCrZtXyx.js";import p from"./Default.stories-Dp4yzkru.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BEk6n_vi.js";import"./mergeRefs-CJFCUUg6.js";import"./index-CJ3flHUa.js";import"./AlertIcon-NB0p5Yms.js";import"./IconWarning-DzQ9tJI9.js";import"./useLocalizedStringFormatter-Aw7TOpbQ.js";import"./context-CpkmeH1J.js";import"./dynamic-BTR_FaAn.js";import"./RSPContexts-DWZje-yD.js";import"./utils-Duab__sA.js";import"./Text-D2QQWQR9.js";import"./browser-D_3azSPf.js";import"./EmulatedBoldText-BUnoqqKP.js";import"./Button-C446Wk0s.js";import"./LoadingSpinner-CW57px9k.js";import"./Button-B2kdw2yg.js";import"./ProgressBar-BbmNBh-t.js";import"./Hidden-BSEskgfC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D2OmgzqR.js";import"./useFocusable-C0n6CZKF.js";import"./ActionGroup-CCnftHDn.js";import"./Section-Dkz1Z9Gc.js";import"./context-C4TkkEyw.js";import"./Collection-B_Esl1Ys.js";import"./CollectionBuilder-szrRscFH.js";import"./SelectionIndicator-CU9wCljV.js";import"./Separator-BM0WI_Oi.js";import"./useStatic-BzUzXPh5.js";import"./dummyText-CX_I_Wpl.js";const K={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const M=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,a as Success,t as Warning,M as __namedExportsOrder,K as default};
