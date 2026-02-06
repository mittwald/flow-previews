import{j as e}from"./iframe-DCk1dltx.js";import{A as a}from"./Alert-Ced8uZsN.js";import{H as n}from"./Heading-DeB9aMje.js";import{C as p}from"./Content-DQaVAFu_.js";import d from"./Default.stories-tv4hgtFO.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-fe496zUR.js";import"./IconWarning-Dty0OPVS.js";import"./clsx-B-dksMZM.js";import"./flowComponent-T1oQuQvq.js";import"./index-Cq8zlQrR.js";import"./index-CPFdYWIc.js";import"./remote-DvlevvD7.js";import"./useLocalizedStringFormatter-leVAnmF6.js";import"./context-Dv1e9MPf.js";import"./dynamic-BisWu7fc.js";import"./Heading-CMNPfOZB.js";import"./RSPContexts-DsTbr3uT.js";import"./utils-dLBbTpD9.js";import"./Text-BrHbgyhX.js";import"./browser-CviVsCbd.js";import"./EmulatedBoldText-BGXSZcaq.js";import"./Text-PmoJdoY5.js";import"./Button-DZuynozn.js";import"./LoadingSpinner-CKOTMV9B.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DjraAkXw.js";import"./ProgressBar-s8plnM_5.js";import"./Label-D8gqX69D.js";import"./Hidden-DtfyHh-u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUKklMlK.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BwKHWgOu.js";import"./useFocus-Dg1ABCcr.js";import"./useFocusRing-CTkZzC5s.js";import"./useFocusable-CjQRw48Z.js";import"./ActionGroup-BFgB1RLe.js";import"./getActionGroupSlot-Nfo-4-Bh.js";import"./useStatic-CBlVxf-j.js";import"./LayoutCard-DkFix4gt.js";import"./Section-DrurSGwC.js";import"./ContextMenuSection-DnWeaq_7.js";import"./Action-CYJGL_dI.js";import"./context-B-YNLj-l.js";import"./Dialog-Cwy0OKAE.js";import"./OverlayArrow-hOch9Zrk.js";import"./useControlledState-8RsR_43b.js";import"./Collection-X351L5bt.js";import"./CollectionBuilder-B_m-ERV7.js";import"./SelectionIndicator-kCh5PEOZ.js";import"./Separator-CBxzGoiC.js";import"./SelectionManager-Ck4wL-0T.js";import"./useEvent--hc8j0kD.js";import"./useCollator-Caa43iXB.js";import"./FocusScope-5MRFtdj_.js";import"./VisuallyHidden-DsX3-BDW.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <Alert {...props}>
      <Heading>Email address has been archived</Heading>
      <Content>
        As your domain has been deleted, this email address has been archived.
        To be able to send and receive emails, you must rename the address.
      </Content>
    </Alert>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Alert {...props}>
      <Heading>Your app is up to date</Heading>
      <Content>Your app has been updated to the current version.</Content>
    </Alert>
}`,...i.parameters?.docs?.source}}};const ge=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,ge as __namedExportsOrder,he as default};
