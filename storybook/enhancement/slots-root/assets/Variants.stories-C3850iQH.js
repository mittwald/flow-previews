import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n}from"./Alert-CRHxZJX0.js";import"./index-CtQTiInQ.js";import{H as i}from"./Heading-DBo8I5WT.js";import{C as d}from"./Content-Ds5Gygil.js";import v from"./Default.stories-CsiJxvH2.js";import"./AlertIcon-DuSgV6qZ.js";import"./IconApp-DB6cOM9g.js";import"./clsx-B-dksMZM.js";import"./flowComponent-oN21CMYe.js";import"./index-DTllGi7h.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cdp0xV4M.js";import"./index-BKF3KYqg.js";import"./IconWarning-kCzmC3X3.js";import"./useLocalizedStringFormatter-BPF35sJD.js";import"./dynamic-DKDa4OpU.js";import"./Heading-gLVfuOEw.js";import"./RSPContexts-8O1fXkhd.js";import"./utils-DcjC1aig.js";import"./Wrap-DQq6jo70.js";import"./Button-DixTcy-g.js";import"./Text-jYIFGcvn.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./Text-UNZxgqCx.js";import"./LoadingSpinner-BTj-lsSS.js";import"./Button-PaysjOmZ.js";import"./ProgressBar-qxoNL0r_.js";import"./Label-CvscwPf9.js";import"./Hidden-Dd0lSYNZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DPCVhyCF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D57HKG0J.js";import"./useFocus-nbRcaiXq.js";import"./useFocusRing-CXNfaX1r.js";import"./useFocusable-CZzsVVWR.js";const ie={...v,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,m,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
      </Content>
    </Alert>
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,l,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const de=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,a as Success,t as Warning,de as __namedExportsOrder,ie as default};
