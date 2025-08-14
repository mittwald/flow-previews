import{j as e}from"./iframe-r2ISa6Vz.js";import{A as n}from"./Alert-BQgfNbGg.js";import{H as i}from"./Heading-m3kJy3BZ.js";import{C as d}from"./Content-CMhFMTR-.js";import v from"./Default.stories-DQ-C_7fM.js";import"./AlertIcon-j_JtrLPp.js";import"./IconWarning-DfNEkDa-.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CNwGty8-.js";import"./mergeRefs-D4TwGOEw.js";import"./index-CwWOZNJb.js";import"./useLocalizedStringFormatter-D6_Bns5v.js";import"./context-AXeZ-4C7.js";import"./dynamic-DKDa4OpU.js";import"./Heading-C0VZeN9E.js";import"./RSPContexts-BxS850vN.js";import"./utils-DwHpNHaD.js";import"./Button-MKxMP2k4.js";import"./Text-DXIJD_mG.js";import"./browser-vniJOv6A.js";import"./EmulatedBoldText-DORQB6U8.js";import"./Text--yGrToJ3.js";import"./LoadingSpinner-BAfbRjK8.js";import"./Button-B3sV0uoO.js";import"./ProgressBar-BIuQEpdf.js";import"./Label-D9vBeQ72.js";import"./Hidden-3Y5hF2-9.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C31-NaD3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CIA34O1p.js";import"./useFocus-De90M8h7.js";import"./useFocusRing-Dm8SMHzX.js";import"./useFocusable-BHAsUzIM.js";const te={...v,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
