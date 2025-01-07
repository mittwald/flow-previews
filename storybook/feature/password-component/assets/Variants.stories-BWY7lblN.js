import{A as n}from"./Alert-CYt0E_Dd.js";import{R as e}from"./index-B-o1Wr-g.js";import{H as i}from"./Heading-5vVsQF4p.js";import{C as d}from"./Content-CA3Rkk5c.js";import A from"./Default.stories-DmdU5cix.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./AlertIcon-DSV46AuP.js";import"./IconApp-Dzb5vMVI.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-Cv5RgLo7.js";import"./index-DolzVqEf.js";import"./IconWarning-BzyYKcnD.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Heading-DbTcj_es.js";import"./RSPContexts-BT50PPhj.js";import"./utils-DQkeZTYT.js";import"./Wrap-DQq6jo70.js";import"./Button-DozFbJ2r.js";import"./Text-CzvJ5BXa.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Text-CFSbYzT7.js";import"./LoadingSpinner-BJ4QNKBa.js";import"./Button-CQNWHC4E.js";import"./ProgressBar-BOrlGNM-.js";import"./Label-DFSCGvPu.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-DbryJmtU.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";const se={...A,title:"Status/Alert/Status"},t={render:r=>e.createElement(n,{...r},e.createElement(i,null,"Email address has been archived"),e.createElement(d,null,"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."))},o={args:{status:"warning"},render:r=>e.createElement(n,{...r},e.createElement(i,null,"Storage is almost exceeded"),e.createElement(d,null,"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."))},a={args:{status:"danger"},render:r=>e.createElement(n,{...r},e.createElement(i,null,"No SSL certificate could be issued"),e.createElement(d,null,"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."))},s={args:{status:"success"},render:r=>e.createElement(n,{...r},e.createElement(i,null,"Your app is up to date"),e.createElement(d,null,"Your app has been updated to the current version."))};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ne=["Info","Warning","Danger","Success"];export{a as Danger,t as Info,s as Success,o as Warning,ne as __namedExportsOrder,se as default};
