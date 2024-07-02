import{I as o}from"./InlineAlert-DtpmTWjB.js";import{R as e}from"./index-uCp2LrAq.js";import{H as i}from"./Heading-BTmWJFHE.js";import{C as d}from"./Content-CoGVNSyN.js";import v from"./Default.stories-BiDMwUIK.js";import"./PropsContextProvider-DJl9unei.js";import"./index-CqLFpzzG.js";import"./clsx-B-dksMZM.js";import"./StatusIcon-DghZpfMW.js";import"./IconApp-08dtyhav.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-d9koHm8X.js";import"./index-BOkhicXD.js";import"./IconWarning--xZ87BQk.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./RSPContexts-CJnKmcd7.js";import"./utils-CRveUs4Q.js";import"./Wrap-DQq6jo70.js";import"./Activity-DYbiBj6P.js";import"./Button-CKjWx2QM.js";import"./Text-CzfDsx2u.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-BxG67LRB.js";import"./LoadingSpinner-DBUWTLW8.js";import"./Button-B6RNnFE-.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DIY1EfD0.js";import"./usePress-B-418flx.js";const U={...v,title:"Status/InlineAlert/Status"},t={render:r=>e.createElement(o,{...r},e.createElement(i,null,"Email address has been archived"),e.createElement(d,null,"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."))},n={args:{status:"warning"},render:r=>e.createElement(o,{...r},e.createElement(i,null,"Storage is almost exceeded"),e.createElement(d,null,"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."))},a={args:{status:"danger"},render:r=>e.createElement(o,{...r},e.createElement(i,null,"No SSL certificate could be issued"),e.createElement(d,null,"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."))},s={args:{status:"success"},render:r=>e.createElement(o,{...r},e.createElement(i,null,"Your app is up to date"),e.createElement(d,null,"Your app has been updated to the current version."))};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
