import{A as n}from"./Alert--lgumKV7.js";import{R as e}from"./index-Cs7sjTYM.js";import{H as i}from"./Heading-CMLTAaNQ.js";import{C as d}from"./Content-CiuY8azI.js";import A from"./Default.stories-B3nEhVJr.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./AlertIcon-_cDK3B-u.js";import"./IconApp-CHbYnbLr.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-BPUkT_mI.js";import"./index-Cf-03bMR.js";import"./IconWarning-DXJUFqJH.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./Heading-BTLVh75U.js";import"./RSPContexts-BseA8goh.js";import"./utils-BFFU14Eb.js";import"./Wrap-DQq6jo70.js";import"./Button-N_hBXId1.js";import"./Text-CcFqEq5L.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-CpSy2HXY.js";import"./LoadingSpinner-VvlSDj-i.js";import"./Button-qrG_K1uY.js";import"./ProgressBar-DKheN8nI.js";import"./Label-6hm79Lf2.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-Dv7TsfPg.js";import"./useFocusRing-CqFdZJbR.js";import"./usePress-Dcn7RY69.js";const ae={...A,title:"Status/Alert/Status"},t={render:r=>e.createElement(n,{...r},e.createElement(i,null,"Email address has been archived"),e.createElement(d,null,"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."))},o={args:{status:"warning"},render:r=>e.createElement(n,{...r},e.createElement(i,null,"Storage is almost exceeded"),e.createElement(d,null,"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."))},a={args:{status:"danger"},render:r=>e.createElement(n,{...r},e.createElement(i,null,"No SSL certificate could be issued"),e.createElement(d,null,"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."))},s={args:{status:"success"},render:r=>e.createElement(n,{...r},e.createElement(i,null,"Your app is up to date"),e.createElement(d,null,"Your app has been updated to the current version."))};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
      </Content>
    </Alert>
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,l,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(l=o.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var h,b,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var E,f,v;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Alert {...props}>
      <Heading>Your app is up to date</Heading>
      <Content>Your app has been updated to the current version.</Content>
    </Alert>
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const se=["Info","Warning","Danger","Success"];export{a as Danger,t as Info,s as Success,o as Warning,se as __namedExportsOrder,ae as default};
