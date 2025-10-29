import{j as e}from"./iframe-9LT5pwxo.js";import{A as n}from"./Alert-Cp1x8pnT.js";import{H as i}from"./Heading-CsMeNISd.js";import{C as d}from"./Content-B3h9p_Zt.js";import p from"./Default.stories-DDO-YQkB.js";import"./index-nuYtCEEu.js";import"./AlertIcon-B-xh6-5s.js";import"./IconWarning-BGmK8I3p.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmrMiIfZ.js";import"./index-CJEFfs1t.js";import"./index-B4OxUaac.js";import"./useLocalizedStringFormatter-Ay0utv6w.js";import"./context-CZZdPtMN.js";import"./dynamic-Dp02ioFc.js";import"./Heading-BdTxNxt3.js";import"./RSPContexts-D4jozd1E.js";import"./utils-C12iYS2x.js";import"./Button-DgX4Ha9j.js";import"./Text-FZjxGLxv.js";import"./browser-Be7wxfSs.js";import"./EmulatedBoldText-z8AdBhol.js";import"./Text-cT0V7Crl.js";import"./LoadingSpinner-7jpPXpdG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BRQOtLOr.js";import"./ProgressBar-DUkmnmeC.js";import"./Label-B9A8CQ6N.js";import"./Hidden-Dc5yMvqI.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D0_ysNiP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CYkWbbQS.js";import"./useFocus-CGIGFm0L.js";import"./useFocusRing-BpS4vJuf.js";import"./useFocusable-6Pd0pdJi.js";import"./ActionGroup-DkE81dC5.js";import"./getActionGroupSlot-BSebOatG.js";import"./useStatic-C20s3RtG.js";const Q={...p,title:"Status/Alert/Status"},s={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(d,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},t={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(d,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},o={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(d,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(d,{children:"Your app has been updated to the current version."})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
      </Content>
    </Alert>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Alert {...props}>
      <Heading>Your app is up to date</Heading>
      <Content>Your app has been updated to the current version.</Content>
    </Alert>
}`,...a.parameters?.docs?.source}}};const U=["Info","Warning","Danger","Success"];export{o as Danger,s as Info,a as Success,t as Warning,U as __namedExportsOrder,Q as default};
