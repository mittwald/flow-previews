import{j as e}from"./iframe-DE_VUmzH.js";import{A as n}from"./Alert-C679M_f5.js";import{H as i}from"./Heading-BHZJpH19.js";import{C as d}from"./Content-B9D2oEGm.js";import v from"./Default.stories-KZl0nT8d.js";import"./index-Cun1SEai.js";import"./AlertIcon-BoKbx114.js";import"./IconWarning-Lvj7TBfh.js";import"./clsx-B-dksMZM.js";import"./flowComponent-VgVMv0eN.js";import"./index-DsYeEkNB.js";import"./index-C0xI9_WX.js";import"./useLocalizedStringFormatter-CetpI1LZ.js";import"./context-Ki1OMBAj.js";import"./dynamic-LCnuwqI9.js";import"./Heading-C4_OUEWY.js";import"./RSPContexts-C9-aSZWC.js";import"./utils-D3dUv10b.js";import"./Button-DbOovzUR.js";import"./Text-CuCsgm5W.js";import"./browser-BDXGgXpt.js";import"./EmulatedBoldText-RoWFJZi8.js";import"./Text-BVPFWEoO.js";import"./LoadingSpinner-cO76IOgL.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BBiOSwoI.js";import"./ProgressBar-Byi_x-zn.js";import"./Label-C28iUhCz.js";import"./Hidden-NzD2YlQI.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C4uXeX2F.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CUyQx-Vz.js";import"./useFocus-DNFgJiAK.js";import"./useFocusRing-Cc9ULfoH.js";import"./useFocusable-DpHFaro7.js";const oe={...v,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};var p,m,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
