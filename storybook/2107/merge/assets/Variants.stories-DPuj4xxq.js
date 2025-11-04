import{j as e}from"./iframe-BxshUsxH.js";import{A as n}from"./Alert-B5lIPS-K.js";import{H as i}from"./Heading-DdZYTwhD.js";import{C as d}from"./Content-BWTtEus_.js";import p from"./Default.stories-DHbrCAj4.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CAIekxtK.js";import"./IconWarning-B98y0Q8s.js";import"./clsx-B-dksMZM.js";import"./flowComponent-De-qO8FI.js";import"./index-CCtjSUo0.js";import"./index-DKGU8PvL.js";import"./useLocalizedStringFormatter-C0TDBAcX.js";import"./context-jrbRSF4x.js";import"./dynamic-DbpBUg3_.js";import"./RSPContexts-B9j1N_uk.js";import"./utils-CVs5O02N.js";import"./Button-HRLIFp2S.js";import"./Text-18K6QUAV.js";import"./browser-CjJK-aFI.js";import"./EmulatedBoldText-DJOIRjYG.js";import"./LoadingSpinner-CLA14IJX.js";import"./Button-BSW16sZi.js";import"./ProgressBar-BPkB7WeA.js";import"./Hidden-7g9wVqvD.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DAO3A_Iq.js";import"./useFocusable-BZtorROf.js";import"./ActionGroup-Dg04WDgn.js";import"./getActionGroupSlot-DSKoPTOH.js";import"./useStatic-B3TheZVH.js";const $={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
