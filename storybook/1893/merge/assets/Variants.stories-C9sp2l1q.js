import{j as e}from"./iframe-xY198WZi.js";import{A as n}from"./Alert-Ch4UVk-D.js";import{H as i}from"./Heading-BYQW7yRQ.js";import{C as d}from"./Content-Buk5CbH5.js";import v from"./Default.stories-CA-aUKLp.js";import"./AlertIcon-rG9hqO5Q.js";import"./IconWarning-DKtpXb3v.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bcl1TdL7.js";import"./mergeRefs-C3ATilz7.js";import"./index-DUH-JGkU.js";import"./useLocalizedStringFormatter-CJ8Vq7It.js";import"./context-cbiqA6Ma.js";import"./dynamic-DKDa4OpU.js";import"./Heading-CfyHXzT7.js";import"./RSPContexts-CJJdSkVj.js";import"./utils-9eQBP1kk.js";import"./Button-Bwr0Tqpq.js";import"./Text-sCeau28A.js";import"./browser-CoruqHMI.js";import"./EmulatedBoldText-D19FH_Aq.js";import"./Text-Caf7sjAz.js";import"./LoadingSpinner-DDnO9vH9.js";import"./Button-quH8-MSh.js";import"./ProgressBar-D8GoG1d0.js";import"./Label-Dcgw9TtS.js";import"./Hidden-CtG-gAWP.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-EZ6qW8_W.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DyqoAsF-.js";import"./useFocus-Dp6Kb8w7.js";import"./useFocusRing-CNdh1loc.js";import"./useFocusable-BEMuxCdm.js";const te={...v,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
