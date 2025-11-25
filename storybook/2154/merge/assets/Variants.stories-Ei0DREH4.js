import{j as e}from"./iframe-Ce1y9mDa.js";import{A as n}from"./Alert-Cxybhncd.js";import{H as i}from"./Heading-CTEdnBPn.js";import{C as d}from"./Content-DDAGDb2q.js";import p from"./Default.stories-BodGrPT1.js";import"./index-nuYtCEEu.js";import"./AlertIcon-Dp0ZIISG.js";import"./IconWarning-Cq_LhkIy.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BBC2SOgI.js";import"./index-Dg18p-Ek.js";import"./index-CQi4P5Ty.js";import"./useLocalizedStringFormatter-DJ1gfdUx.js";import"./context-Ds3IsYji.js";import"./dynamic-BLMgMZQd.js";import"./RSPContexts-Co0_PY2S.js";import"./utils-DDvzCibx.js";import"./Text-gkToWDQ-.js";import"./browser-Cq8oxhIL.js";import"./EmulatedBoldText-Dp9LuwQf.js";import"./Button-7HXgfRQm.js";import"./LoadingSpinner-B-DDCCI1.js";import"./Button-CHIFuycL.js";import"./ProgressBar-CB9towVx.js";import"./Hidden-C6qb3gI3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DXrCjRvx.js";import"./useFocusable-7LnlwHoJ.js";import"./ActionGroup-GiQVcnjT.js";import"./Section-BnpA4R0K.js";import"./context-BS3tg5wC.js";import"./Collection-Dzn6S5_i.js";import"./CollectionBuilder-DHKZo2jO.js";import"./SelectionIndicator-CEqK1ZkE.js";import"./Separator-DV4y1vPf.js";import"./useStatic-BHJIQiQW.js";import"./LayoutCard-DG1Z6Pl5.js";import"./dummyText-CX_I_Wpl.js";const M={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
