import{j as e}from"./iframe-CIFTXvjr.js";import{A as n}from"./Alert-CAUY8Yey.js";import{H as i}from"./Heading-U69dEP-U.js";import{C as d}from"./Content-BdbG_nwr.js";import v from"./Default.stories-B7qS8S-g.js";import"./AlertIcon-COeLTDgS.js";import"./IconWarning-DOS6fKaS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D8FrEhfs.js";import"./mergeRefs-DjWFnZ8i.js";import"./index-Dlo5KsFa.js";import"./useLocalizedStringFormatter-D9xMhbzt.js";import"./context-CJ6VsYI4.js";import"./dynamic-CQYecVWB.js";import"./Heading-C7p3IIcE.js";import"./RSPContexts-BLper1Pa.js";import"./utils-B5Zvs6iw.js";import"./Button-mCzyv81-.js";import"./Text-B8fPWk55.js";import"./browser-DnisE1zj.js";import"./EmulatedBoldText-DkBtsyA4.js";import"./Text-BPQdMqSt.js";import"./LoadingSpinner-DoTPzDls.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-4h-pZrvY.js";import"./ProgressBar-CDKMY4TF.js";import"./Label-TO4TYfDU.js";import"./Hidden-e3oWxUP9.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cf99fLdV.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-8HeaTLIH.js";import"./useFocus-D52c6dYL.js";import"./useFocusRing-aMk3Od29.js";import"./useFocusable-CisfjoMT.js";const te={...v,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
