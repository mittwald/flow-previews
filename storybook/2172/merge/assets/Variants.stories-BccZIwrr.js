import{j as e}from"./iframe-HbHx0dbr.js";import{A as n}from"./Alert-CbU_YA_s.js";import{H as i}from"./Heading-DMPTZuUQ.js";import{C as d}from"./Content-C349RzEO.js";import p from"./Default.stories-BLJ1mDRy.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-qzVrzUzc.js";import"./mergeRefs-D-Oz7bso.js";import"./index-CFmzddZU.js";import"./AlertIcon-C6IAHzWi.js";import"./IconWarning-DPh3xjyu.js";import"./useLocalizedStringFormatter-D03WI-to.js";import"./context-B1asaoMu.js";import"./dynamic-CRi6gEUI.js";import"./RSPContexts-B_V-VNLp.js";import"./utils-CsDSVDn1.js";import"./Text-CkAqcx4z.js";import"./browser-CXwhmTUt.js";import"./EmulatedBoldText-Bfs6I3BJ.js";import"./Button-CJvGBAVv.js";import"./LoadingSpinner-I5GkEDRC.js";import"./Button-CId--e-F.js";import"./ProgressBar-DgngiXRE.js";import"./Hidden-DneGUX_i.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-ChjTo6T2.js";import"./useFocusable-DI6pzLi-.js";import"./ActionGroup-CSmxA-fN.js";import"./Section-qE36af1s.js";import"./context-CWzv3puv.js";import"./Collection-fVAw7-GX.js";import"./CollectionBuilder-9ah2FshN.js";import"./SelectionIndicator-CFpgfv2c.js";import"./Separator-BKx97MTe.js";import"./useStatic-BpR7MYw1.js";import"./dummyText-CX_I_Wpl.js";const K={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
