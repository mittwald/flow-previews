import{j as e}from"./iframe-fiZAYE2W.js";import{A as n}from"./Alert-DBPBU0K5.js";import{H as i}from"./Heading-MqLGOtOs.js";import{C as d}from"./Content-CfaWuLjW.js";import v from"./Default.stories-C0JP1U8L.js";import"./AlertIcon-0l-2QG94.js";import"./IconWarning-CB_niWR5.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DiYt5N9g.js";import"./mergeRefs-DAMFNCwk.js";import"./index-DAzd7Laa.js";import"./useLocalizedStringFormatter-Dvod7aWF.js";import"./context-0IVozT_C.js";import"./dynamic-DKDa4OpU.js";import"./Heading-D6rS-Kxf.js";import"./RSPContexts-DEEb3C3L.js";import"./utils-sHGDZ6Zl.js";import"./Button-CPh6A0ie.js";import"./Text-BgnbdcU8.js";import"./browser-BJ9bzP1_.js";import"./EmulatedBoldText-DpM_ny8g.js";import"./Text-H6cA9zz3.js";import"./LoadingSpinner-CBRkZ3k2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DkSlR_xh.js";import"./ProgressBar-Bh9iJ1Tb.js";import"./Label-DQZrVrfW.js";import"./Hidden-l1NKNxky.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-8IHfk19G.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-j57SM-Nw.js";import"./useFocus-Bwj4tK_H.js";import"./useFocusRing-B57qzYJa.js";import"./useFocusable-DMthjPSk.js";const te={...v,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
