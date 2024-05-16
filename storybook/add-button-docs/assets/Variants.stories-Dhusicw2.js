import{I as s}from"./InlineAlert-Dm6u5bu4.js";import{R as e}from"./index-uCp2LrAq.js";import"./index-Dh5FajOK.js";import"./index-DH_tWg_W.js";import v from"./Default.stories-BM72IQkb.js";import{H as i}from"./Heading-DJNCJBb-.js";import{C as d}from"./Content-CEdcCKZN.js";import"./flowComponent-CvYijzQN.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BPImkm1B.js";import"./StatusIcon-TcZwWrhd.js";import"./IconApp-BMlMz8UD.js";import"./IconWarning-BWQh0yHy.js";import"./useLocalizedStringFormatter-5VR59M9e.js";import"./index-tTUbIpLW.js";import"./Button-DonSouXV.js";import"./Wrap-DQq6jo70.js";import"./index-ZGtVZsDz.js";import"./Text-CRgtz34V.js";import"./index-DePfloUh.js";import"./Text-5ecqfi7M.js";import"./utils-DWaAzItp.js";import"./LoadingSpinner-BHiCCzsu.js";import"./Button-r8qbaGYD.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DdMdjPK0.js";import"./usePress-GzZvjGFA.js";import"./RSPContexts-CJnKmcd7.js";import"./index-C1tRuZrD.js";const Z={...v,title:"Status/InlineAlert/Status"},t={render:r=>e.createElement(s,{...r},e.createElement(i,null,"Email address has been archived"),e.createElement(d,null,"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."))},n={args:{status:"warning"},render:r=>e.createElement(s,{...r},e.createElement(i,null,"Storage is almost exceeded"),e.createElement(d,null,"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."))},a={args:{status:"danger"},render:r=>e.createElement(s,{...r},e.createElement(i,null,"No SSL certificate could be issued"),e.createElement(d,null,"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."))},o={args:{status:"success"},render:r=>e.createElement(s,{...r},e.createElement(i,null,"Your app is up to date"),e.createElement(d,null,"Your app has been updated to the current version."))};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: props => <InlineAlert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
      </Content>
    </InlineAlert>
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,l,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: "warning"
  },
  render: props => <InlineAlert {...props}>
      <Heading>Storage is almost exceeded</Heading>
      <Content>
        Your storage space is over 80% utilized. We recommend that you upgrade
        the storage space to avoid disruptions during backups.
      </Content>
    </InlineAlert>
}`,...(g=(l=n.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var h,b,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    status: "danger"
  },
  render: props => <InlineAlert {...props}>
      <Heading>No SSL certificate could be issued</Heading>
      <Content>
        No SSL certificate could be issued for this domain because the domain IP
        does not point to your server IP.
      </Content>
    </InlineAlert>
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var I,E,f;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <InlineAlert {...props}>
      <Heading>Your app is up to date</Heading>
      <Content>Your app has been updated to the current version.</Content>
    </InlineAlert>
}`,...(f=(E=o.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const ee=["Info","Warning","Danger","Success"];export{a as Danger,t as Info,o as Success,n as Warning,ee as __namedExportsOrder,Z as default};
