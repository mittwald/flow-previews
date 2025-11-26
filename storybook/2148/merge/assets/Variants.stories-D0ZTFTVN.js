import{j as e}from"./iframe-BbaYMYQ1.js";import{A as n}from"./Alert-5Lfb6dl8.js";import{H as i}from"./Heading-lbjZQMyr.js";import{C as d}from"./Content-eRMHFgpO.js";import p from"./Default.stories-TTnUNV5Q.js";import"./index-nuYtCEEu.js";import"./AlertIcon-CRnyQnM7.js";import"./IconWarning-CkjtEKGs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C662J8_x.js";import"./index-BgowJb9k.js";import"./index-DF7s3pP8.js";import"./useLocalizedStringFormatter-CVO0oqQf.js";import"./context-DxIVJg5X.js";import"./dynamic-CvfiG9eK.js";import"./RSPContexts-vimGF_ZT.js";import"./utils-C-StNnVz.js";import"./Text-8_g1DnjB.js";import"./browser-CF0_O6rk.js";import"./EmulatedBoldText-_shc_-go.js";import"./Button-KIO5b-Hc.js";import"./LoadingSpinner-Cwm6VlGh.js";import"./Button-B8_E6hAa.js";import"./ProgressBar-Bb19OYa8.js";import"./Hidden-S-Rgpp-0.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BzYkSJhL.js";import"./useFocusable-B3SCcOBQ.js";import"./ActionGroup-QM-x3f8J.js";import"./Section-Bklfm26f.js";import"./context-CTAVigQn.js";import"./Collection-CCUE8FQE.js";import"./CollectionBuilder-3YuRca9q.js";import"./SelectionIndicator-BTGWwJK9.js";import"./Separator-xUWU1DOd.js";import"./useStatic-CvDTMdvn.js";import"./LayoutCard-DHZQzmf9.js";import"./dummyText-CX_I_Wpl.js";const M={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
