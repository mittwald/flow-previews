import{A as n}from"./Alert-Dawdijgy.js";import{R as e}from"./index-BbMBc-iG.js";import{H as i}from"./Heading-CHAikoJ1.js";import{C as d}from"./Content-BbJKCc-f.js";import A from"./Default.stories-BcN-s9rC.js";import"./PropsContextProvider-BgoMLKZk.js";import"./index-CPTjWdH1.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./AlertIcon-DS_AuS91.js";import"./IconApp-B_zPpa1A.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./flowComponent-CaEd1ouJ.js";import"./index-U7Evrs-N.js";import"./react-children-utilities-BBO5HXrA.js";import"./IconWarning-CceziLlX.js";import"./useLocalizedStringFormatter-DYdTqA_9.js";import"./Heading-B6bd_0m7.js";import"./RSPContexts-CBHfX6hb.js";import"./utils-D4Vol65q.js";import"./Wrap-DQq6jo70.js";import"./Button-1rw05oyV.js";import"./Text-D6naXSDy.js";import"./browser-DXl7VCm2.js";import"./EmulatedBoldText-ZO8wNulR.js";import"./Text-oWh285ma.js";import"./LoadingSpinner-y4xqeSCe.js";import"./Button-8ZRRpxMH.js";import"./ProgressBar-tRLoFn7O.js";import"./Label-BybFgH_Q.js";import"./Hidden-BN0YEbzJ.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-C5NcpKQ2.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-BA3lYSOI.js";import"./useFocusRing-DA2rHHrb.js";import"./usePress-DotMbixf.js";const ne={...A,title:"Status/Alert/Status"},t={render:r=>e.createElement(n,{...r},e.createElement(i,null,"Email address has been archived"),e.createElement(d,null,"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."))},o={args:{status:"warning"},render:r=>e.createElement(n,{...r},e.createElement(i,null,"Storage is almost exceeded"),e.createElement(d,null,"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."))},a={args:{status:"danger"},render:r=>e.createElement(n,{...r},e.createElement(i,null,"No SSL certificate could be issued"),e.createElement(d,null,"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."))},s={args:{status:"success"},render:r=>e.createElement(n,{...r},e.createElement(i,null,"Your app is up to date"),e.createElement(d,null,"Your app has been updated to the current version."))};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ie=["Info","Warning","Danger","Success"];export{a as Danger,t as Info,s as Success,o as Warning,ie as __namedExportsOrder,ne as default};
