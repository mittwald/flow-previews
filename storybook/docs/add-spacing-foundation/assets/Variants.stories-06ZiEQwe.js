import{A as n}from"./Alert-B5x2uT5Z.js";import{R as e}from"./index-Cs7sjTYM.js";import{H as i}from"./Heading-CmdTkRZ-.js";import{C as d}from"./Content-CiWjIu6H.js";import A from"./Default.stories-DSgiCauW.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./clsx-B-dksMZM.js";import"./AlertIcon-CVukmBgy.js";import"./IconApp-OI763F0y.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-mVHdDF_7.js";import"./index-Cf-03bMR.js";import"./IconWarning-DnIf0GKe.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./Heading-D2dIVyzg.js";import"./RSPContexts-BseA8goh.js";import"./utils-BBsc42SX.js";import"./Wrap-DQq6jo70.js";import"./Button-CvsvSR1o.js";import"./Text-CTCoi9MV.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-C0gOxGaJ.js";import"./LoadingSpinner-_oREEd6i.js";import"./Button-BknGA9dM.js";import"./Hidden-DMUPAT4b.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-D6sODRzj.js";import"./useFocusRing-CRCkdtud.js";import"./usePress-Do5SRlXR.js";const X={...A,title:"Status/Alert/Status"},t={render:r=>e.createElement(n,{...r},e.createElement(i,null,"Email address has been archived"),e.createElement(d,null,"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."))},a={args:{status:"warning"},render:r=>e.createElement(n,{...r},e.createElement(i,null,"Storage is almost exceeded"),e.createElement(d,null,"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."))},o={args:{status:"danger"},render:r=>e.createElement(n,{...r},e.createElement(i,null,"No SSL certificate could be issued"),e.createElement(d,null,"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."))},s={args:{status:"success"},render:r=>e.createElement(n,{...r},e.createElement(i,null,"Your app is up to date"),e.createElement(d,null,"Your app has been updated to the current version."))};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
      </Content>
    </Alert>
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,l,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(l=a.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var h,b,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(b=o.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var E,f,v;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Alert {...props}>
      <Heading>Your app is up to date</Heading>
      <Content>Your app has been updated to the current version.</Content>
    </Alert>
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Z=["Info","Warning","Danger","Success"];export{o as Danger,t as Info,s as Success,a as Warning,Z as __namedExportsOrder,X as default};
