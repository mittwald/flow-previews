import{j as e}from"./iframe-CcNHCKoB.js";import{A as a}from"./Alert-f0gpQzhL.js";import{H as n}from"./Heading-BmMG8Nl6.js";import{C as p}from"./Content-1twFUXOj.js";import d from"./Default.stories-Bne_56Ir.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-DM6j3Z28.js";import"./IconWarning-DmrAmEd1.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dkj1vsN8.js";import"./index-CYttZVHR.js";import"./index-C0Ga1GvX.js";import"./remote-CVy042JL.js";import"./useLocalizedStringFormatter-COg8E6Vc.js";import"./context-LfQwLpL0.js";import"./dynamic-nNoo79J6.js";import"./Heading-CN6CrwNC.js";import"./RSPContexts-DYw5y0O9.js";import"./utils-NnqZ9ZBK.js";import"./Text-BmtlE-88.js";import"./browser-C0P1LItQ.js";import"./EmulatedBoldText-BunH9Anl.js";import"./Text-BCtKE9i4.js";import"./Button-DTuLbClr.js";import"./LoadingSpinner-B5nlxM1K.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-D33T_EGm.js";import"./ProgressBar-B-cW6vCD.js";import"./Label-BWg6WlKG.js";import"./Hidden-B3wID84r.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyCYkDRj.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-eyc-LVl-.js";import"./useFocus-SYOVVSYu.js";import"./useFocusRing-C53Oh36V.js";import"./useFocusable-Dm2HHW3t.js";import"./ActionGroup-C0eUcCYO.js";import"./getActionGroupSlot-BqdIRyOr.js";import"./useStatic-BA9Xyuh5.js";import"./LayoutCard-CXLsYj7s.js";import"./Section-C7V_cxBu.js";import"./ContextMenuSection-mqwvvgq0.js";import"./Action-XHgAr--T.js";import"./context-QFR9DY6D.js";import"./Dialog-DlflAgwc.js";import"./OverlayArrow-BhIInrDo.js";import"./useControlledState-TVt6Qf5c.js";import"./Collection-B_UfiUp2.js";import"./CollectionBuilder-ClUBiV0v.js";import"./SelectionIndicator-CQiEQ8QD.js";import"./Separator-CJZ-PY1K.js";import"./SelectionManager-CMW6n3Mg.js";import"./useEvent-DmaMUS07.js";import"./useCollator-lY1OBRiY.js";import"./FocusScope-_ikiXfPV.js";import"./VisuallyHidden-FLGfwvrv.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
