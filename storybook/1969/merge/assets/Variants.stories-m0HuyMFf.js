import{j as e}from"./iframe-BpdxrwIb.js";import{A as n}from"./Alert-4OOBfTkI.js";import{H as i}from"./Heading-oG-P3IEC.js";import{C as d}from"./Content-q8bkAQFZ.js";import v from"./Default.stories-BUFWEASy.js";import"./AlertIcon-BQwhegr5.js";import"./IconWarning-DfpVuNuz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DQxbhqBM.js";import"./mergeRefs-DF-I3_2K.js";import"./index-C0Vgww7F.js";import"./useLocalizedStringFormatter-B3Ezl97M.js";import"./context-CefFUzIe.js";import"./dynamic-DKDa4OpU.js";import"./Heading-xcfdV1Zm.js";import"./RSPContexts-COprRsvg.js";import"./utils-60PhQC-u.js";import"./Button-CwyQ24Il.js";import"./Text-DE4Q9wlE.js";import"./browser-CjlkZb14.js";import"./EmulatedBoldText-BK7BqSsu.js";import"./Text-s-uJNCfK.js";import"./LoadingSpinner-CTxNA6YP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-0E_exH3L.js";import"./ProgressBar-2VJ7xBq6.js";import"./Label-CccUO69Q.js";import"./Hidden-DpRx3EBx.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BwWD19Pf.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CXS9utKX.js";import"./useFocus-C0zYbozs.js";import"./useFocusRing-s_pNlp3q.js";import"./useFocusable-DOYJV0v_.js";const te={...v,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
