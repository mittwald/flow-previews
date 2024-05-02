import{I as o}from"./InlineAlert-DO8zNSe5.js";import{R as e}from"./index-BwDkhjyp.js";import"./index-DHgkOPXJ.js";import"./index-CTZVGI_L.js";import v from"./Default.stories-DkzRU48z.js";import{H as i}from"./Heading-Qvzms-BN.js";import{C as d}from"./Content-voJAjZIO.js";import"./flowComponent-Dglj5cqB.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-D5lhFMVf.js";import"./StatusIcon-CJm7QeoQ.js";import"./IconApp-_FcSWQQl.js";import"./IconWarning-DWDcGR9n.js";import"./useLocalizedStringFormatter-m5PKJKvJ.js";import"./index-I3tg1ZlH.js";import"./Button-B7Tl_OC2.js";import"./Text-CME0CjX1.js";import"./index-dhKWstfL.js";import"./Text-Ck09bxUA.js";import"./utils-DDqfTkhb.js";import"./index-ClBBAz8G.js";import"./LoadingSpinner-BD6r3owA.js";import"./Button-EahR66DC.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-DLPCeG8s.js";import"./usePress-CJfWxQWU.js";import"./RSPContexts-Bc9pl35m.js";const V={...v,title:"Status/InlineAlert/Status"},t={render:r=>e.createElement(o,{...r},e.createElement(i,null,"Email address has been archived"),e.createElement(d,null,"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."))},n={args:{status:"warning"},render:r=>e.createElement(o,{...r},e.createElement(i,null,"Storage is almost exceeded"),e.createElement(d,null,"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."))},a={args:{status:"danger"},render:r=>e.createElement(o,{...r},e.createElement(i,null,"No SSL certificate could be issued"),e.createElement(d,null,"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."))},s={args:{status:"success"},render:r=>e.createElement(o,{...r},e.createElement(i,null,"Your app is up to date"),e.createElement(d,null,"Your app has been updated to the current version."))};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(E=s.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};const X=["Info","Warning","Danger","Success"];export{a as Danger,t as Info,s as Success,n as Warning,X as __namedExportsOrder,V as default};
