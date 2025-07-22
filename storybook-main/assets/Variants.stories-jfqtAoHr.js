import{j as e}from"./iframe-DR0piQh8.js";import{A as n}from"./Alert-BiuE-zZ-.js";import{H as i}from"./Heading-Dl4Rh0-m.js";import{C as d}from"./Content-BnHjszQX.js";import v from"./Default.stories-WA1FeZQi.js";import"./AlertIcon-CnN5_-8U.js";import"./IconWarning-BgT_B94B.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B6cRF0tH.js";import"./mergeRefs-ZMps22uY.js";import"./index-t1lRf4w9.js";import"./useLocalizedStringFormatter-M2t-zX-G.js";import"./context-BuOVuQqB.js";import"./dynamic-DKDa4OpU.js";import"./Heading-Boa0iipQ.js";import"./RSPContexts-BmbbCtV6.js";import"./utils-B_3T_k5x.js";import"./Button-YikxumGf.js";import"./Text-6uPYoec8.js";import"./browser-BcxJfz-7.js";import"./EmulatedBoldText-bwsNBgve.js";import"./Text-Me8NF-Lu.js";import"./LoadingSpinner-D1Z7RG5x.js";import"./Button-1sXVFcCN.js";import"./ProgressBar-NTw_CuGV.js";import"./Label-DF_i3q4X.js";import"./Hidden-Ccv39zY0.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-dFBcJ0PQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B4R9EPAI.js";import"./useFocus-Drlqt-a_.js";import"./useFocusRing-DNATWZb5.js";import"./useFocusable-CKOeQoF-.js";const te={...v,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
