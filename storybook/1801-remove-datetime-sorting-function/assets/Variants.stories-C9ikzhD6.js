import{j as e}from"./iframe-5e2kPeup.js";import{A as n}from"./Alert-DRxq9_Cn.js";import{H as i}from"./Heading-Da8IGzQL.js";import{C as d}from"./Content--SD1n-wY.js";import v from"./Default.stories-aqgfFXM9.js";import"./AlertIcon-4i-_h-D8.js";import"./IconWarning-CAYwnCqi.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DEH0t7hl.js";import"./mergeRefs-uY3blBsM.js";import"./index-lLG5KW4n.js";import"./useLocalizedStringFormatter-BSu4az1l.js";import"./context-BlWBKAs5.js";import"./dynamic-DKDa4OpU.js";import"./Heading-0mE3T3ep.js";import"./RSPContexts-DWx74BAe.js";import"./utils-Bj-e-2L9.js";import"./Button-BSAdG0Rb.js";import"./Text-CEKkIKYs.js";import"./browser-D35eJ3ID.js";import"./EmulatedBoldText-DjgxRs5N.js";import"./Text-DiRiFDT_.js";import"./LoadingSpinner-D5xWaFe2.js";import"./Button-DovRDHW7.js";import"./ProgressBar-Cw08Slz6.js";import"./Label-68vOnyUK.js";import"./Hidden-DMXZYlYz.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-uzLes6Tz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CrwMQoq0.js";import"./useFocus-CgJ_pcIH.js";import"./useFocusRing-Xasmxdld.js";import"./useFocusable-Dvdn958o.js";const te={...v,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
      </Content>
    </Alert>
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,l,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(l=t.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};var g,b,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var S,f,j;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Alert {...props}>
      <Heading>Your app is up to date</Heading>
      <Content>Your app has been updated to the current version.</Content>
    </Alert>
}`,...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const oe=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,a as Success,t as Warning,oe as __namedExportsOrder,te as default};
