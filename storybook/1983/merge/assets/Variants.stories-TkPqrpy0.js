import{j as e}from"./iframe-BJ0F67WV.js";import{A as n}from"./Alert-DNh6l3_Y.js";import{H as i}from"./Heading-B9mg5LEa.js";import{C as d}from"./Content-Dmumbtey.js";import v from"./Default.stories-DP9LT2dJ.js";import"./AlertIcon-B6CXCdWd.js";import"./IconWarning-D8lhACCL.js";import"./clsx-B-dksMZM.js";import"./flowComponent-3J-YZQgx.js";import"./index-DnTgiG27.js";import"./index-C5tuckEm.js";import"./useLocalizedStringFormatter-CatcJgnD.js";import"./context-DDk-RgEI.js";import"./dynamic-D4EbkcOt.js";import"./Heading-BcZio6h0.js";import"./RSPContexts-BTU5SObx.js";import"./utils-CfdyWDg2.js";import"./Button-CnQZL08m.js";import"./Text-DvcA_djt.js";import"./browser-ENr42WFT.js";import"./EmulatedBoldText-CK3yk5uQ.js";import"./Text-DUTh34WN.js";import"./LoadingSpinner-s7oSeT27.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CJVv4977.js";import"./ProgressBar-BZfTjKSF.js";import"./Label-BZcf1Nsx.js";import"./Hidden-iBx55YDK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CE1zHuYM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C0-WYOlY.js";import"./useFocus-N8Qk0gvU.js";import"./useFocusRing-CZqmVUZk.js";import"./useFocusable-k7wU8KZy.js";const te={...v,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
