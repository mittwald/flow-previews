import{j as e}from"./iframe-BKOyO0tU.js";import{A as n}from"./Alert-Pl0SzhYN.js";import{H as i}from"./Heading-D4sbKPQv.js";import{C as d}from"./Content-Dg-SAmQz.js";import v from"./Default.stories-mL27pWtx.js";import"./AlertIcon-DfoV-BMD.js";import"./IconWarning-WHLX57m9.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DS9p18js.js";import"./mergeRefs-D0EZPsCM.js";import"./index-Dkj0bwU1.js";import"./useLocalizedStringFormatter-D0EJq48y.js";import"./context-wvutwpZE.js";import"./dynamic-DKDa4OpU.js";import"./Heading-CmuzmpL9.js";import"./RSPContexts-BmPvawj4.js";import"./utils-B2BekvYW.js";import"./Button-BRmnXyIg.js";import"./Text-ExzQZ1Qc.js";import"./browser-8Kbc9Tso.js";import"./EmulatedBoldText-BBGOeiRU.js";import"./Text-ACnzImZy.js";import"./LoadingSpinner-B8cx3qaz.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DqwKzt0W.js";import"./ProgressBar-w7N8Fjyu.js";import"./Label-Vv3VD8Wn.js";import"./Hidden-DB9d8bX3.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-kfVNblq3.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CfgifMFV.js";import"./useFocus-dHggTvNn.js";import"./useFocusRing-D97-YwB6.js";import"./useFocusable-C3wI1ws-.js";const te={...v,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
