import{j as e}from"./iframe-1hZ9wzBW.js";import{A as a}from"./Alert-xYo6BSyG.js";import{H as n}from"./Heading-CHsPWFD7.js";import{C as p}from"./Content-DJmjCiDz.js";import d from"./Default.stories-B2iCh44I.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-fApV2-nR.js";import"./IconWarning-Bq_05zLs.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BAYinPoy.js";import"./index-BxkIN5dC.js";import"./index-dx0Fbu95.js";import"./remote-CnwnRZPi.js";import"./useLocalizedStringFormatter-DjDcrgZQ.js";import"./context-Dx8Lg4Ma.js";import"./dynamic-BsriuUgB.js";import"./Heading-BDZkQl9H.js";import"./RSPContexts-Da-kz4p_.js";import"./utils-CnJx27u5.js";import"./Text-BF_GklVB.js";import"./browser-jjcexMIs.js";import"./EmulatedBoldText-D3kC_v2V.js";import"./Text-B1mgaTQV.js";import"./Button-7Po4DI29.js";import"./LoadingSpinner-CBIfE8tz.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-XLqKqFxh.js";import"./ProgressBar-fkOF9esE.js";import"./Label-DD-nfl5_.js";import"./Hidden-YhZif3uI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CrikywT0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DNGT1V3C.js";import"./useFocus-iMNco4FL.js";import"./useFocusRing-DJmPDLK7.js";import"./useFocusable-CvXOfqVX.js";import"./ActionGroup-CGjwNThe.js";import"./getActionGroupSlot-BJec6nln.js";import"./useStatic-BSOtV-Rw.js";import"./LayoutCard-0N8GYQZb.js";import"./Section-Bc3YMvvr.js";import"./ContextMenuSection-CZDIsfmP.js";import"./Action-5-LJxdMW.js";import"./context-Ci4eovAp.js";import"./Dialog-DTOlRROi.js";import"./OverlayArrow-CJR0hx1K.js";import"./useControlledState-DAXJPifs.js";import"./Collection-C5nhmh42.js";import"./CollectionBuilder-CdqbO1wf.js";import"./SelectionIndicator-22830iwM.js";import"./Separator-gCfZ79Ls.js";import"./SelectionManager-C1YqHNWY.js";import"./useEvent-CxVl1HjR.js";import"./useCollator-7JXdm9sI.js";import"./FocusScope-Dxs6Wric.js";import"./VisuallyHidden-UazS1TBU.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
