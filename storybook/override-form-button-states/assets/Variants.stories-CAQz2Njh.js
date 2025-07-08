import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{A as n}from"./Alert-BWpgYQxO.js";import"./index-BdpSHsi2.js";import{H as i}from"./Heading-BjNowVKe.js";import{C as d}from"./Content-CwMYKWQp.js";import v from"./Default.stories-Ce8wK3oU.js";import"./AlertIcon-C1o-NqZz.js";import"./IconWarning-VkD3xyeV.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-ChVfhMOU.js";import"./mergeRefs-COuk0-v5.js";import"./iframe-Dg69LH4F.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./useLocalizedStringFormatter-Bs3jJydz.js";import"./context-C-2WHVw-.js";import"./dynamic-DKDa4OpU.js";import"./index-BAMY2Nnw.js";import"./Heading-PKR8zMP8.js";import"./RSPContexts-Cbm9ZJUe.js";import"./utils-q_Aud5Js.js";import"./Button-OAcFOwqy.js";import"./Text-ChMCKqEp.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./Text-DtGJyZhh.js";import"./LoadingSpinner-DRSfG5k7.js";import"./Button-DnnpdS5P.js";import"./ProgressBar-Dwuqfbjf.js";import"./Label-C5gSD-Mq.js";import"./Hidden-RoZfe91Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DtWExE0a.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cx3ZvVfI.js";import"./useFocus-BK-u4cdi.js";import"./useFocusRing-DHXckIXO.js";import"./useFocusable-BeYVpnFb.js";const de={...v,title:"Status/Alert/Status"},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},s={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,m,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
      </Content>
    </Alert>
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,l,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(l=s.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var g,b,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const pe=["Info","Warning","Danger","Success"];export{o as Danger,t as Info,a as Success,s as Warning,pe as __namedExportsOrder,de as default};
