import{j as e}from"./iframe-kjkHkmuG.js";import{A as n}from"./Alert-LMEN0RsN.js";import{H as i}from"./Heading-C6qiLJW3.js";import{C as d}from"./Content-DOMtlypw.js";import p from"./Default.stories-7azQxkks.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CX0jvCdY.js";import"./IconWarning-CMakOX5C.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CipIzjpW.js";import"./index-CkW5Yidx.js";import"./index-Ce5Nlxxb.js";import"./useLocalizedStringFormatter-CWdDsDMk.js";import"./context-DKZTM6pY.js";import"./dynamic-BmAGjafL.js";import"./RSPContexts-1NZhJNvl.js";import"./utils-uJ4-NNRC.js";import"./Text-D4QcDsPt.js";import"./browser-i7jAx1Fh.js";import"./EmulatedBoldText-CsxaKUEU.js";import"./Button-B7VtDimI.js";import"./LoadingSpinner-CCMWfn-z.js";import"./Button-CPb8XJRj.js";import"./ProgressBar-SgmdiFAI.js";import"./Hidden-C9LFy0Lp.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CunmVmWl.js";import"./useFocusable-DMxxipCc.js";import"./ActionGroup-B72bwf7M.js";import"./Section-Di6ereWQ.js";import"./context-DelhS3-G.js";import"./Collection-BGAg5cVl.js";import"./CollectionBuilder-C24jMLh-.js";import"./SelectionIndicator-2ey5txuw.js";import"./Separator-_AMhP75A.js";import"./useStatic-BQelcXwM.js";import"./LayoutCard-BdOAhJjJ.js";import"./dummyText-CX_I_Wpl.js";const M={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
