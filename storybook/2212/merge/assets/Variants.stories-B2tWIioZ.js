import{j as e}from"./iframe-DRHo_LWV.js";import{A as n}from"./Alert-BrLW18t8.js";import{H as i}from"./Heading-DXCu3xfs.js";import{C as d}from"./Content-hq-FzB-y.js";import p from"./Default.stories-B8KM0brd.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-eT31IdA5.js";import"./mergeRefs-ClO07P9v.js";import"./index-BxEgcTyQ.js";import"./AlertIcon-Db-Zh-lA.js";import"./IconWarning-DOCSYVJb.js";import"./useLocalizedStringFormatter-DBrevv4a.js";import"./context-DFFtEKCN.js";import"./dynamic-D3Z_5L-h.js";import"./RSPContexts-CCSm4UT8.js";import"./utils-BMeX6kjI.js";import"./Text-C8Z4-t3h.js";import"./browser-BUXnAcqH.js";import"./EmulatedBoldText-B9Wwr1Zx.js";import"./Button-CoKi_833.js";import"./LoadingSpinner-Bk5B-2KR.js";import"./Button-CPvHspkD.js";import"./ProgressBar-CAz_kUXs.js";import"./Hidden-IGMaJsur.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D0-Omahw.js";import"./useFocusable-Bpejanxv.js";import"./ActionGroup-BJPHeF0U.js";import"./Section-BepYC6c-.js";import"./context-B26OnoB_.js";import"./Collection-dKICFTeR.js";import"./CollectionBuilder-BKsjvRDC.js";import"./SelectionIndicator-D9ZkMsqt.js";import"./Separator-BclQH7dY.js";import"./useStatic-DSG2Vd8Y.js";import"./dummyText-CX_I_Wpl.js";const K={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
