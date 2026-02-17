import{j as e}from"./iframe-jaoHr1AV.js";import{A as a}from"./Alert-ClWItyyq.js";import{H as n}from"./Heading-BypYnbKw.js";import{C as p}from"./Content-CP7dqr2s.js";import d from"./Default.stories-DlLef5X3.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-BkGbvGvC.js";import"./IconWarning-DyIA4Uof.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CrOXvTqi.js";import"./index-CR-YYcjl.js";import"./index-BFCtAlHX.js";import"./remote-CF-AY8I2.js";import"./useLocalizedStringFormatter-B75Dx9X1.js";import"./context-CW7DVTht.js";import"./dynamic-BZQIArQs.js";import"./Heading-CGZUJUiQ.js";import"./RSPContexts-CUx4KoIL.js";import"./utils-CQw042JL.js";import"./Text-Cs3EhNpG.js";import"./browser-gEDtR-OK.js";import"./EmulatedBoldText-DDNOwYGP.js";import"./Text-DE-JOko8.js";import"./Button-DsyAZnvz.js";import"./LoadingSpinner-DQaYydFO.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DhLHtzSw.js";import"./ProgressBar-D0TA1OyO.js";import"./Label-Dvi8c8U4.js";import"./Hidden-BCtaYkH3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-XwramTU6.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-WaW8O6jQ.js";import"./useFocus-GROhvItb.js";import"./useFocusRing-CA-tHgfv.js";import"./useFocusable-Bnc4O4Ay.js";import"./ActionGroup-BMyaLsc1.js";import"./getActionGroupSlot-BJH_a8Yi.js";import"./useStatic-CMyMNZPZ.js";import"./LayoutCard-DbDJq3d1.js";import"./Section-D5fyzIcp.js";import"./ContextMenuSection-BSB41Hhw.js";import"./ActionBatch-Dl5Fmp7w.js";import"./useOverlayController-CzdtfrCF.js";import"./Dialog-COvhX_CP.js";import"./OverlayArrow-BDs_imrE.js";import"./useControlledState-H8E68uKK.js";import"./Collection-CODju4Fo.js";import"./CollectionBuilder-CN9LptsI.js";import"./SelectionIndicator-CFfIf2cB.js";import"./Separator-BHV6nvqI.js";import"./SelectionManager-C8TGpPIB.js";import"./useEvent-NPetVyFU.js";import"./useCollator-CCOGTm23.js";import"./FocusScope-B5Ctyl2K.js";import"./VisuallyHidden-DhIewZ3I.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
