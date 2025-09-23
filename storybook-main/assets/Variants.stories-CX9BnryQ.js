import{j as e}from"./iframe-PPscN4tr.js";import{A as n}from"./Alert-D06HR8Fs.js";import{H as i}from"./Heading-BOw_RV8p.js";import{C as d}from"./Content-k_GJXKSd.js";import v from"./Default.stories-Bs7Df9W1.js";import"./AlertIcon-DscLT5-Z.js";import"./IconWarning-DCjExedU.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-cBval16A.js";import"./mergeRefs-DnJs-uwA.js";import"./index-DZCrbm-c.js";import"./useLocalizedStringFormatter-DxKsOw5A.js";import"./context-BC4DP49M.js";import"./dynamic-DLKBnFH6.js";import"./Heading-__tDMM6f.js";import"./RSPContexts-CmKI408-.js";import"./utils-DsPiQVUE.js";import"./Button-DOt7fXGF.js";import"./Text-Cr4g403k.js";import"./browser-BBEx8dXu.js";import"./EmulatedBoldText-2c05oBpj.js";import"./Text-DOZF1D9Q.js";import"./LoadingSpinner-BmIM-aij.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-Dq2iCs8C.js";import"./ProgressBar-jJ6XsPfz.js";import"./Label-CdjKXy54.js";import"./Hidden-BSzw0V8U.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BehMUX7z.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BKGHEFGx.js";import"./useFocus-C4zNlByO.js";import"./useFocusRing-gcrQa-4U.js";import"./useFocusable-BzFu29N-.js";const te={...v,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
      </Content>
    </Alert>
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,l,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(l=t.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var g,b,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var S,f,j;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Alert {...props}>
      <Heading>Your app is up to date</Heading>
      <Content>Your app has been updated to the current version.</Content>
    </Alert>
}`,...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const oe=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,a as Success,t as Warning,oe as __namedExportsOrder,te as default};
