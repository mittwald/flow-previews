import{I as o}from"./InlineAlert-DgrUoaoc.js";import{R as e}from"./index-BwDkhjyp.js";import"./index-CLBRkB73.js";import"./index-CA3ddMAU.js";import v from"./Default.stories-0RnLkKwo.js";import{H as i}from"./Heading-B7xPTjR-.js";import{C as d}from"./Content-DhhC9v3m.js";import"./flowComponent-BLFgELHw.js";import"./clsx-B-dksMZM.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DxTNGQVE.js";import"./StatusIcon-BVh3visw.js";import"./IconApp-iqYUtoxJ.js";import"./IconWarning-jqA-R3DE.js";import"./useLocalizedStringFormatter-CmZ4cjgJ.js";import"./index-Cc1SKcvR.js";import"./Button-C62AkZmc.js";import"./Text-Cl0wCOtv.js";import"./index-dhKWstfL.js";import"./Text-C9sPPhMf.js";import"./utils-XD1Mdlza.js";import"./index-DxJw5mhE.js";import"./LoadingSpinner-4VZ_XG4P.js";import"./Button-CTl9mfdD.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-D_aGyKeu.js";import"./usePress-z0VJBnEb.js";import"./RSPContexts-Bc9pl35m.js";const V={...v,title:"Status/InlineAlert/Status"},t={render:r=>e.createElement(o,{...r},e.createElement(i,null,"Email address has been archived"),e.createElement(d,null,"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."))},n={args:{status:"warning"},render:r=>e.createElement(o,{...r},e.createElement(i,null,"Storage is almost exceeded"),e.createElement(d,null,"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."))},a={args:{status:"danger"},render:r=>e.createElement(o,{...r},e.createElement(i,null,"No SSL certificate could be issued"),e.createElement(d,null,"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."))},s={args:{status:"success"},render:r=>e.createElement(o,{...r},e.createElement(i,null,"Your app is up to date"),e.createElement(d,null,"Your app has been updated to the current version."))};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
