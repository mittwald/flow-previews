import{I as s}from"./InlineAlert-BjmJvN-r.js";import{R as e}from"./index-BwDkhjyp.js";import"./index-D3WyxQ4e.js";import"./index-ZSW3VHiY.js";import v from"./Default.stories-C_X41OED.js";import{H as i}from"./Heading-BxjLDyJj.js";import{C as d}from"./Content-DL78Mf50.js";import"./index-CoJk2QQB.js";import"./clsx-B-dksMZM.js";import"./index-BEfwv0cx.js";import"./StatusIcon-BBGwTo54.js";import"./IconApp-RPV2UACM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./flowComponent-syVPRVDK.js";import"./index-B8XB3FuZ.js";import"./IconWarning-D1gyLIYa.js";import"./useLocalizedStringFormatter-Cfq_zrt4.js";import"./index-ajPlF_if.js";import"./Button-D8pmMIBp.js";import"./Wrap-DQq6jo70.js";import"./index-C0raSsgL.js";import"./Text-phIOO8u9.js";import"./index-dhKWstfL.js";import"./Text-fvXBaVCt.js";import"./utils-bTb4N6hy.js";import"./LoadingSpinner-JGHWlUAu.js";import"./Button-D5gdTRso.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-C08EbcBh.js";import"./usePress-18_TO7Wj.js";import"./RSPContexts-Bc9pl35m.js";const Z={...v,title:"Status/InlineAlert/Status"},t={render:r=>e.createElement(s,{...r},e.createElement(i,null,"Email address has been archived"),e.createElement(d,null,"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."))},n={args:{status:"warning"},render:r=>e.createElement(s,{...r},e.createElement(i,null,"Storage is almost exceeded"),e.createElement(d,null,"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."))},a={args:{status:"danger"},render:r=>e.createElement(s,{...r},e.createElement(i,null,"No SSL certificate could be issued"),e.createElement(d,null,"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."))},o={args:{status:"success"},render:r=>e.createElement(s,{...r},e.createElement(i,null,"Your app is up to date"),e.createElement(d,null,"Your app has been updated to the current version."))};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
