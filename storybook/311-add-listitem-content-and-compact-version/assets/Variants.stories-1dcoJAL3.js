import{I as s}from"./InlineAlert-D1GtI8hQ.js";import{R as e}from"./index-uCp2LrAq.js";import"./index-WuRQOomu.js";import"./index-eN4YWScM.js";import v from"./Default.stories-DgwlEgvc.js";import{H as i}from"./Heading-B96kFBTJ.js";import{C as d}from"./Content-BmqqH9bA.js";import"./flowComponent-DziSYcSt.js";import"./clsx-B-dksMZM.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CmgTyKkR.js";import"./StatusIcon-c_B7p0i5.js";import"./IconApp-C_Ee2cAg.js";import"./IconWarning-DXLSgN4Z.js";import"./useLocalizedStringFormatter-B2aKG-1k.js";import"./index-DKGoyJng.js";import"./Button-DdiMHN0-.js";import"./Wrap-DQq6jo70.js";import"./index-DPz7AJqL.js";import"./Text-BCaZeLgd.js";import"./index-DePfloUh.js";import"./Text-DnTC8Fwv.js";import"./utils-8G7INyPj.js";import"./LoadingSpinner-BP2Mc1p0.js";import"./Button-DUc748qi.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-COvHRmfY.js";import"./usePress-dpeNPdVr.js";import"./RSPContexts-CJnKmcd7.js";import"./index-DVibwfqw.js";const Z={...v,title:"Status/InlineAlert/Status"},t={render:r=>e.createElement(s,{...r},e.createElement(i,null,"Email address has been archived"),e.createElement(d,null,"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."))},n={args:{status:"warning"},render:r=>e.createElement(s,{...r},e.createElement(i,null,"Storage is almost exceeded"),e.createElement(d,null,"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."))},a={args:{status:"danger"},render:r=>e.createElement(s,{...r},e.createElement(i,null,"No SSL certificate could be issued"),e.createElement(d,null,"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."))},o={args:{status:"success"},render:r=>e.createElement(s,{...r},e.createElement(i,null,"Your app is up to date"),e.createElement(d,null,"Your app has been updated to the current version."))};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
