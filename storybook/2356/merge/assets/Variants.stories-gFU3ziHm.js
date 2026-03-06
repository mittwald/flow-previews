import{j as e}from"./iframe-1Z6hWL0q.js";import{A as a}from"./Alert-BzGN7glx.js";import{H as n}from"./Heading-Dc2YOm8x.js";import{C as p}from"./Content-BI990Rgh.js";import d from"./Default.stories-BcnRvYbn.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-Blha7MMy.js";import"./IconWarning-CstRa6-6.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CQSqsFz-.js";import"./index-CPV4-njg.js";import"./index-OoNE8c9e.js";import"./remote-BXzLQ_GS.js";import"./useLocalizedStringFormatter-FfFR6yJN.js";import"./context-DCww6zBl.js";import"./dynamic-CeVErRgL.js";import"./Heading-BTDLHxEZ.js";import"./RSPContexts-BZtvqclp.js";import"./utils-B0Ub4KXD.js";import"./Text-NSg919ow.js";import"./browser-OyZXUgp8.js";import"./EmulatedBoldText-CsGTmPK_.js";import"./Text-DPhytgE2.js";import"./Button-Up8_TRdV.js";import"./LoadingSpinner-B9ElqUFv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DpyZuV_i.js";import"./ProgressBar-BV7ioShA.js";import"./Label-Berd7YBY.js";import"./Hidden-CX4T_I8z.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B8l-Wr5R.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bgz5j4W3.js";import"./useFocus-MFE9JzzM.js";import"./useFocusRing-EnMEiTgA.js";import"./useFocusable-BrwqamRV.js";import"./ActionGroup-D0Uu4uF5.js";import"./getActionGroupSlot-jkvbnKjz.js";import"./useStatic-BMrg-KZz.js";import"./LayoutCard-Cpna_2xN.js";import"./Section-DeLmOfWa.js";import"./ContextMenuSection-DH07SvAX.js";import"./ActionBatch-B4cDzNNZ.js";import"./useOverlayController-zDyCyx1O.js";import"./Dialog-BOSurAfE.js";import"./OverlayArrow-0_UUlvtG.js";import"./useControlledState-DfFBi8JJ.js";import"./Collection-5lvTrIT4.js";import"./CollectionBuilder-zke4D84b.js";import"./SelectionIndicator-CEn-3elL.js";import"./Separator-CYJUtDva.js";import"./SelectionManager-CPzu3hBL.js";import"./useEvent-B2NydoIp.js";import"./useCollator-wpyuYlTN.js";import"./FocusScope-Dlwlk6_J.js";import"./VisuallyHidden-CCJLIB7u.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
