import{j as e}from"./iframe-D9CYFPXr.js";import{A as n}from"./Alert-CyjiVY23.js";import{H as i}from"./Heading-CavYhFH8.js";import{C as d}from"./Content-2XO0f1sV.js";import p from"./Default.stories-B6GlWBBJ.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C-2riE67.js";import"./mergeRefs-vtU4phNc.js";import"./index-U9K-BUpK.js";import"./AlertIcon-8Ocv2v3H.js";import"./IconWarning-jXguM53C.js";import"./useLocalizedStringFormatter-S4nfhuc7.js";import"./context-Dx6KMOks.js";import"./dynamic-SXs7A3g7.js";import"./RSPContexts-CiawBZSO.js";import"./utils-yR_DAamg.js";import"./Text-DJSjVfmJ.js";import"./browser-D2ZJCi1x.js";import"./EmulatedBoldText-BO0x8ST2.js";import"./Button-CT-xyYfH.js";import"./LoadingSpinner-gB0VXrmM.js";import"./Button-DG6HuID3.js";import"./ProgressBar-bCwxisfs.js";import"./Hidden-CwV9BSsN.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DS6hlMbf.js";import"./useFocusable--HhDjXRb.js";import"./ActionGroup-Ccd39lHI.js";import"./Section-CA0EDsnV.js";import"./context-COeqZE1E.js";import"./Collection-D-Uil-_a.js";import"./CollectionBuilder-DI5MHw1U.js";import"./SelectionIndicator-IjsyYsuv.js";import"./Separator-Do2CJS7r.js";import"./useStatic-DvORlamL.js";import"./dummyText-CX_I_Wpl.js";const K={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
