import{j as e}from"./iframe-8Gn-cQAI.js";import{A as n}from"./Alert-DiZCXRrZ.js";import{H as i}from"./Heading-hkF7brSR.js";import{C as d}from"./Content-CapX42MI.js";import v from"./Default.stories-Bxqm6wr6.js";import"./index-Cun1SEai.js";import"./AlertIcon-BzAZToZL.js";import"./IconWarning-D4orWaCC.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DkmU8bZi.js";import"./index-AzFL6bUY.js";import"./index-UEc6MpK_.js";import"./useLocalizedStringFormatter-Bkj0giXD.js";import"./context-BNiVp3am.js";import"./dynamic-rXbOiSCg.js";import"./Heading-CLQt8OMj.js";import"./RSPContexts-BLLLZDxH.js";import"./utils-GVjct8zS.js";import"./Button-BYLyJZ8T.js";import"./Text-CaltWpnJ.js";import"./browser-BcQIid3c.js";import"./EmulatedBoldText-BFjU3iq0.js";import"./Text-YtT3E9ZO.js";import"./LoadingSpinner-DLXLBid4.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-3o-n2ltV.js";import"./ProgressBar-Cd_i9EHd.js";import"./Label-BTym8jb9.js";import"./Hidden-ClnO7J5u.js";import"./filterDOMProps-CghfNOdR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ITUQCIPr.js";import"./useFocus-B0X0Lu9Z.js";import"./useFocusRing-CitWdiPC.js";import"./useFocusable-D0eqHiUC.js";const te={...v,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
