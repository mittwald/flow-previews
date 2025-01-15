import{j as e}from"./jsx-runtime-CLpGMVip.js";import{A as n}from"./Alert-C-xiu_3i.js";import"./index-Cf9XvIV_.js";import{H as i}from"./Heading-B6ntI1Uh.js";import{C as d}from"./Content-D-_uD6v5.js";import v from"./Default.stories-GgbP8fxc.js";import"./PropsContextProvider-CWFvCxZj.js";import"./index-CoqFY4cC.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./AlertIcon-4Snor4aq.js";import"./IconApp-DoH4uGTw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./flowComponent-CGvK_9lq.js";import"./index-Y1p7vO9S.js";import"./index-ByctJgwf.js";import"./react-children-utilities-C_p-_B4N.js";import"./IconWarning--dCRo9Au.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./Heading-TsowwGP7.js";import"./RSPContexts-BG_vMng8.js";import"./utils-DbIpkr2E.js";import"./Wrap-DQq6jo70.js";import"./Button-D4koA9OF.js";import"./Text-CISO88fp.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-y-0OLV69.js";import"./Text-DUOeOfAn.js";import"./LoadingSpinner-DuhR3UMI.js";import"./Button-Cft9vso-.js";import"./ProgressBar-Bu1Xugb0.js";import"./Label-wrbsGWF5.js";import"./Hidden-le53pkqW.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ByHVstPj.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-DSRH2vY_.js";import"./useFocusRing-Jnne1fGl.js";import"./usePress-6Arr-Ydv.js";const de={...v,title:"Status/Alert/Status"},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},s={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,m,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
