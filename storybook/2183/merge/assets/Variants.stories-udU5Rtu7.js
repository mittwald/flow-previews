import{j as e}from"./iframe-ZqGKWCd-.js";import{A as a}from"./Alert-ByBRWjDT.js";import{H as n}from"./Heading-DkfgbcZo.js";import{C as p}from"./Content-C6CAt2vI.js";import m from"./Default.stories-kZQOGgb9.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-BmCtp8Ik.js";import"./IconChevronDown-DOkopHOS.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DnG4Zld_.js";import"./index-CDScJNB3.js";import"./index-BS5rk3Xg.js";import"./remote-QKtGQrQi.js";import"./IconDanger-9fNDXdlu.js";import"./IconInfo-DEicSxyO.js";import"./IconCircleCheck-DD0_tb5Y.js";import"./useLocalizedStringFormatter-B1HvX0bo.js";import"./context-zCArMZyI.js";import"./dynamic-BXzH9RDF.js";import"./Heading-Dpt15uKY.js";import"./RSPContexts-SeDUPtJk.js";import"./utils-D141Jr51.js";import"./Text-fsbk1lYn.js";import"./browser-BUvHTeNk.js";import"./EmulatedBoldText-Ro5KrcKA.js";import"./Text-Csqi7mxP.js";import"./Button-BZgO5jCY.js";import"./IconX-DatWuNo8.js";import"./IconCheck-BmGT2YRH.js";import"./LoadingSpinner-DOl2H2KY.js";import"./ariaLive-BCX06F7t.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CUB1U94R.js";import"./ProgressBar-CwXfcXUd.js";import"./Label-BUWbTNXS.js";import"./Hidden-DJANzhMQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cwc7cvIm.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-_yC0x0cS.js";import"./useFocus-DhU9eZJ-.js";import"./useFocusRing-DbADFAxV.js";import"./useFocusable-BybslKHd.js";import"./ActionGroup-XBaLTsJ-.js";import"./getActionGroupSlot-B6JbQYyf.js";import"./useStatic-CPFMlQst.js";import"./LayoutCard-C1UZY9S9.js";import"./Section-DNOHRVt7.js";import"./ContextMenuSection-CSh4hkta.js";import"./lib-90ocxLs-.js";import"./Action-DfNxqrNn.js";import"./context-C6xdvZ0U.js";import"./Dialog-CUnVff-C.js";import"./OverlayArrow-CDGB6Pw4.js";import"./useControlledState-CXUvh1Us.js";import"./Collection-CvOok_qh.js";import"./CollectionBuilder-BKjwMGq6.js";import"./SelectionIndicator-JiamtxED.js";import"./Separator-wVg1dl70.js";import"./SelectionManager-CZWi_Odb.js";import"./useEvent-U8AR1Bww.js";import"./useCollator-uzPz00g8.js";import"./FocusScope-CNoX19qM.js";import"./VisuallyHidden-Izi45t00.js";import"./dummyText-CX_I_Wpl.js";const ve={...m,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Ae=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,i as Success,o as Warning,Ae as __namedExportsOrder,ve as default};
