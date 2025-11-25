import{j as e}from"./iframe-CRHerQcT.js";import{A as n}from"./Alert-pe0uKkFF.js";import{H as i}from"./Heading-PN47vIIN.js";import{C as d}from"./Content-ozSr22eC.js";import p from"./Default.stories-C7R85zUc.js";import"./index-nuYtCEEu.js";import"./AlertIcon-BgWetiy7.js";import"./IconWarning-S9zVz1Ke.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Po2jQ9NZ.js";import"./index-BbKg1nkj.js";import"./index-DOvz_Dla.js";import"./useLocalizedStringFormatter-B1bSBhnk.js";import"./context-C5gXDLZB.js";import"./dynamic-JzWN_IYl.js";import"./RSPContexts-DxbMYf-Z.js";import"./utils-B8O46aeb.js";import"./Text-sklVEIT5.js";import"./browser-C1kPNy51.js";import"./EmulatedBoldText-CArsfrvv.js";import"./Button-DOdtzIa_.js";import"./LoadingSpinner-DjcUww4s.js";import"./Button-DPVH9eDh.js";import"./ProgressBar-NMXq-w2-.js";import"./Hidden-BcqgQAy4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DdX5Sdo5.js";import"./useFocusable-O8acuieM.js";import"./ActionGroup-bop6Cb2x.js";import"./Section-DCbopNVT.js";import"./context-C4Lb4VEy.js";import"./Collection-BkWkcg8z.js";import"./CollectionBuilder-CTEpaBir.js";import"./SelectionIndicator-BJEbb9Gg.js";import"./Separator-CIAUU7Mv.js";import"./useStatic-CvvgeXIU.js";import"./LayoutCard-0IlyXBle.js";import"./dummyText-CX_I_Wpl.js";const M={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
