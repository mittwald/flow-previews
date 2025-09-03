import{j as e}from"./iframe-BPnb-8PC.js";import{A as n}from"./Alert-D0uIfpLc.js";import{H as i}from"./Heading-DZGjjTVb.js";import{C as d}from"./Content-5ZtyftWB.js";import v from"./Default.stories-8qpdReCT.js";import"./AlertIcon-JrYwTJx8.js";import"./IconWarning-j0MoznR6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cb7EFbEI.js";import"./mergeRefs-CPe5M-5f.js";import"./index-CxYrBtXy.js";import"./useLocalizedStringFormatter-CyshasSy.js";import"./context-Cvzu1MDH.js";import"./dynamic-DKDa4OpU.js";import"./Heading-BpH7y_My.js";import"./RSPContexts-2Y1bGEeq.js";import"./utils-BNZdeyCH.js";import"./Button-chDOhf6m.js";import"./Text-Ba-uZw6F.js";import"./browser-tQ-t1xxT.js";import"./EmulatedBoldText-B7r9Z-1q.js";import"./Text-KWqvWgwT.js";import"./LoadingSpinner-BUt2pcHy.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DWahSmPc.js";import"./ProgressBar-C4vCg6TA.js";import"./Label-V02MVWo9.js";import"./Hidden-Crd3-5R7.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Mae_nSQP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DbV6qfru.js";import"./useFocus-CQt3VlDx.js";import"./useFocusRing-uXaHHV-0.js";import"./useFocusable-DW9GZi2B.js";const te={...v,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
