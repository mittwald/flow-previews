import{j as e}from"./iframe-BAGTntfB.js";import{A as n}from"./Alert-DUgI3vEe.js";import{H as i}from"./Heading-B2joHeSr.js";import{C as d}from"./Content-D8d9t2gQ.js";import v from"./Default.stories-DImziVil.js";import"./AlertIcon-MtkhnR0I.js";import"./IconWarning-SECJkQke.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BVEq68NN.js";import"./mergeRefs-Ct4YEWrU.js";import"./index-TExY8AE4.js";import"./useLocalizedStringFormatter-DdilTbMd.js";import"./context-C8vSVPtT.js";import"./dynamic-DicyFJZ2.js";import"./Heading-qcJaN4U_.js";import"./RSPContexts-u_LIQrA5.js";import"./utils-DSdQ5U5C.js";import"./Button-ClQyukEh.js";import"./Text-oSCAFhn5.js";import"./browser-D8tJ8M3I.js";import"./EmulatedBoldText-hfJfJt2X.js";import"./Text-CZggwRKM.js";import"./LoadingSpinner-DuAh__4X.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DldLr0Dh.js";import"./ProgressBar-yPlEiM2Y.js";import"./Label-CWJf374V.js";import"./Hidden-BFcGcOTS.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-jLc0StSH.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BeTrTVD4.js";import"./useFocus-kqlw9bYS.js";import"./useFocusRing-uRy9P7F2.js";import"./useFocusable-CvI8LjKe.js";const te={...v,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,c,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
