import{j as e}from"./iframe-D2Anwmct.js";import{A as n}from"./Alert-BrDbkwpn.js";import{H as i}from"./Heading-CHI9LGKg.js";import{C as d}from"./Content-ogo1gykC.js";import v from"./Default.stories-4ZaCTFgk.js";import"./index-Cun1SEai.js";import"./AlertIcon-Kmw1VxqP.js";import"./IconWarning-DnpABaws.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DKluqIHM.js";import"./index-f9td_37l.js";import"./index-Ch7RQrKi.js";import"./useLocalizedStringFormatter-BekYTjw8.js";import"./context--yho_VB2.js";import"./dynamic-Cfahilqg.js";import"./Heading-cAelsVpC.js";import"./RSPContexts-W5re5w0Z.js";import"./utils-BpjcCBEz.js";import"./Button-DzBCXdJ8.js";import"./Text-DtdPLjLU.js";import"./browser-CPuaporN.js";import"./EmulatedBoldText-C4J0xt-K.js";import"./Text-lRP8kqf1.js";import"./LoadingSpinner-Dn83SSS7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DXQ0LQy1.js";import"./ProgressBar-B5M0YtFC.js";import"./Label-CyDLPDuC.js";import"./Hidden-C6VQoCGL.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DkH4CmpU.js";import"./useFocus-CPbnM8zc.js";import"./useFocusRing-BsT1m1qa.js";import"./useFocusable-BPmxfIwz.js";const te={...v,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
