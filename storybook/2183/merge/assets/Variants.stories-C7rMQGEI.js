import{j as e}from"./iframe-BaRURXeF.js";import{A as n}from"./Alert-RHiIiWHO.js";import{H as i}from"./Heading-BwlLLsXH.js";import{C as d}from"./Content-XdBLbNrv.js";import p from"./Default.stories-etndTOZl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CKQsAkKj.js";import"./mergeRefs-CGRzoa_B.js";import"./index-BhlYqO80.js";import"./AlertIcon-C9siGvOC.js";import"./IconWarning-G7PHo1OD.js";import"./remote-EuXJkqzN.js";import"./useLocalizedStringFormatter-yUHQIKaT.js";import"./context-CYqmZhth.js";import"./dynamic-LiyYElAE.js";import"./RSPContexts-DmKb4WxY.js";import"./utils-DLb-qyNT.js";import"./Text-BMdRX-ix.js";import"./browser-CM47kAFn.js";import"./EmulatedBoldText-DsXTzWmB.js";import"./Button-BjAgJLRT.js";import"./LoadingSpinner-BDiYNwtM.js";import"./Button-DbzxAUZp.js";import"./ProgressBar-CbCQbUzb.js";import"./Hidden-4QxVQfrM.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Yd8LsoRn.js";import"./useFocusable-Dn7zfyGG.js";import"./ActionGroup-BqTo77Ty.js";import"./Section-CfuTaxA1.js";import"./context-CODOobiJ.js";import"./Collection-43nLtjEw.js";import"./CollectionBuilder-Dy7CTaNG.js";import"./SelectionIndicator-BZ3vqlEj.js";import"./Separator-cqbaw05v.js";import"./useStatic-CNK9zRwr.js";import"./dummyText-CX_I_Wpl.js";const M={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
