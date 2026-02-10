import{j as e}from"./iframe-1XlmVqd5.js";import{A as a}from"./Alert-QpRlHwyk.js";import{H as n}from"./Heading-BHa3WEIV.js";import{C as p}from"./Content-DoggiYsd.js";import d from"./Default.stories-BifTxM71.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-B1ETMix0.js";import"./IconWarning-B1VVAKEh.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Uz-OX7bY.js";import"./index-Ba7AqYg5.js";import"./index-TUds5Kez.js";import"./remote-BMRYc7VB.js";import"./useLocalizedStringFormatter--9VaGy1Y.js";import"./context-cVtndIAK.js";import"./dynamic-pa5Mho8z.js";import"./Heading-CLPLrGSK.js";import"./RSPContexts-Dq529x8m.js";import"./utils-DcI_f0WL.js";import"./Text-DoMRIGKc.js";import"./browser-BzXr98QP.js";import"./EmulatedBoldText-BjX1lTTJ.js";import"./Text-DC6xHoyY.js";import"./Button-QkNnHSXc.js";import"./LoadingSpinner-BDWb_Uug.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DLO0tbpP.js";import"./ProgressBar-DD_sZ9Wb.js";import"./Label-Dzg72Lo7.js";import"./Hidden-D2eIjlR0.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWL3lRor.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CBxBnL8r.js";import"./useFocus-B3hq9TNr.js";import"./useFocusRing-nXz5Fj6s.js";import"./useFocusable-BsD1LxMy.js";import"./ActionGroup-B6_ECWJg.js";import"./getActionGroupSlot-DkGLvBLQ.js";import"./useStatic-BBkG9kKa.js";import"./LayoutCard-_8uQH_8W.js";import"./Section-D0cW5Q8y.js";import"./ContextMenuSection-5WkAJf8V.js";import"./Action-edoqU8Tu.js";import"./context-DAZ5ICmo.js";import"./Dialog-RsR3YLab.js";import"./OverlayArrow-DrpYygg_.js";import"./useControlledState-DjEU-0mZ.js";import"./Collection-BIbHEmyb.js";import"./CollectionBuilder-D7UVwhHW.js";import"./SelectionIndicator-qE_U9bCq.js";import"./Separator-CgzWDgSR.js";import"./SelectionManager-_Sb55NGi.js";import"./useEvent-pApi9dyH.js";import"./useCollator-CY9Dy9g3.js";import"./FocusScope-cwCTJx2V.js";import"./VisuallyHidden-Dm6nphJv.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
