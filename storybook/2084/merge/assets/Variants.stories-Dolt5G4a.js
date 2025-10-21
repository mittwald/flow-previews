import{j as e}from"./iframe-CPZmCQj-.js";import{A as n}from"./Alert-wUz0lr4b.js";import{H as i}from"./Heading-CTnOUdED.js";import{C as d}from"./Content-CcPX068H.js";import p from"./Default.stories-D8QMEPhI.js";import"./index-nuYtCEEu.js";import"./AlertIcon-B7P7Rebb.js";import"./IconWarning-BHYwQlMQ.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZ7Ps0CL.js";import"./index-Ba68vLbY.js";import"./index-Dx50g0n6.js";import"./useLocalizedStringFormatter-c3k8SeMC.js";import"./context-vwBy6rn7.js";import"./dynamic-C0WBJwRj.js";import"./Heading-3nGV8T5A.js";import"./RSPContexts-gqgXzzK-.js";import"./utils-DbTuSxgD.js";import"./Button-CO0ZKbGC.js";import"./Text-cGw-MBFK.js";import"./browser-Vbuqg8Bp.js";import"./EmulatedBoldText-D8f43xv1.js";import"./Text-ev6zCoFy.js";import"./LoadingSpinner-Cx2qWY44.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BLjAzLtk.js";import"./ProgressBar-CVs_D_-w.js";import"./Label-DhGaeBi-.js";import"./Hidden-klXcLh_8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeJHfKxc.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-6Qpgo4V0.js";import"./useFocus-DSlim6kP.js";import"./useFocusRing-DtbYXXZs.js";import"./useFocusable-1MtRKrlE.js";const J={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
