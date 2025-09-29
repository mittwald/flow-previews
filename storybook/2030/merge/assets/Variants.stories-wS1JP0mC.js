import{j as e}from"./iframe-BEnK-FWT.js";import{A as n}from"./Alert-Dtismkj9.js";import{H as i}from"./Heading-CM2cHxtn.js";import{C as d}from"./Content-5jmfeXet.js";import v from"./Default.stories-DZe_79bD.js";import"./index-Cun1SEai.js";import"./AlertIcon-BkAMeecS.js";import"./IconWarning-Du8jrWof.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DvB_ZVBE.js";import"./index-BPBs0lX7.js";import"./index-DmntYai2.js";import"./useLocalizedStringFormatter-DxstFItm.js";import"./context-B1E8CUSR.js";import"./dynamic-DjJiwxiO.js";import"./Heading-BLcTsrbo.js";import"./RSPContexts-BUhaye_C.js";import"./utils-HuzRHECM.js";import"./Button-Du_IXIsC.js";import"./Text-DfapAs8s.js";import"./browser-CXszXSov.js";import"./EmulatedBoldText-DzLnbGXm.js";import"./Text-pg5s_iHF.js";import"./LoadingSpinner-BRr-XCzk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CDOmUSXw.js";import"./ProgressBar-VOq4RT67.js";import"./Label-DpqaIvZR.js";import"./Hidden-B8h_3GWf.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DH4gBFQn.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BT-0Cvdy.js";import"./useFocus-DNN1vAkK.js";import"./useFocusRing-Bx80huIr.js";import"./useFocusable-B7vzQveK.js";const oe={...v,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,m,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
      </Content>
    </Alert>
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,l,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(j=(f=a.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const ae=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,a as Success,t as Warning,ae as __namedExportsOrder,oe as default};
