import{I as o}from"./InlineAlert-tjpLp0T0.js";import{R as e}from"./index-BwDkhjyp.js";import{H as i}from"./Heading-rdQzPY0C.js";import{C as d}from"./Content-BQ3ZqW64.js";import v from"./Default.stories-B6KxgeRf.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./clsx-B-dksMZM.js";import"./StatusIcon-BRn0vxtA.js";import"./IconApp-BCpbdHgg.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-CbDEtdyo.js";import"./index-B8XB3FuZ.js";import"./IconWarning-zYrPFMer.js";import"./useLocalizedStringFormatter-BNeRQeib.js";import"./RSPContexts-Bc9pl35m.js";import"./utils-B-mS0hjG.js";import"./Wrap-DQq6jo70.js";import"./Activity-Cov3f-FH.js";import"./Button-BTNOdvWu.js";import"./Text-Bxhza4fE.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Text-C_suByGF.js";import"./LoadingSpinner-CdrecLs9.js";import"./Button-BTMfZQLF.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-CKMlalor.js";import"./usePress-YR3pmEr9.js";const U={...v,title:"Status/InlineAlert/Status"},t={render:r=>e.createElement(o,{...r},e.createElement(i,null,"Email address has been archived"),e.createElement(d,null,"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."))},n={args:{status:"warning"},render:r=>e.createElement(o,{...r},e.createElement(i,null,"Storage is almost exceeded"),e.createElement(d,null,"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."))},a={args:{status:"danger"},render:r=>e.createElement(o,{...r},e.createElement(i,null,"No SSL certificate could be issued"),e.createElement(d,null,"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."))},s={args:{status:"success"},render:r=>e.createElement(o,{...r},e.createElement(i,null,"Your app is up to date"),e.createElement(d,null,"Your app has been updated to the current version."))};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var I,E,f;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <InlineAlert {...props}>
      <Heading>Your app is up to date</Heading>
      <Content>Your app has been updated to the current version.</Content>
    </InlineAlert>
}`,...(f=(E=s.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const V=["Info","Warning","Danger","Success"];export{a as Danger,t as Info,s as Success,n as Warning,V as __namedExportsOrder,U as default};
