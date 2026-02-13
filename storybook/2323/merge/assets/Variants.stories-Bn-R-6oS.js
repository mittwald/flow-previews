import{j as e}from"./iframe-Bq_dTdDz.js";import{A as a}from"./Alert-CKEuMsZh.js";import{H as n}from"./Heading-C8DRlUq-.js";import{C as p}from"./Content-CIrJX21x.js";import d from"./Default.stories--l76UNmg.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-DR4HtAzR.js";import"./IconWarning-AvRveFf8.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BeJ1jrGf.js";import"./index-Dif5dzDL.js";import"./index-C2qM6Ecb.js";import"./remote-BGgAcFUF.js";import"./useLocalizedStringFormatter-jkyob1yB.js";import"./context-DasT5rkr.js";import"./dynamic-BU-d9n8a.js";import"./Heading-Cv2K6T9Y.js";import"./RSPContexts-BEGF6Rgy.js";import"./utils-Dc83Zc3S.js";import"./Text-3w39UNLL.js";import"./browser-D_Oin-6N.js";import"./EmulatedBoldText-D57I_Edz.js";import"./Text-RESw6iu2.js";import"./Button-DwhPeKe2.js";import"./LoadingSpinner-QnwB8HJT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B82FCYrG.js";import"./ProgressBar-BeilQHeM.js";import"./Label-CPBWbyCv.js";import"./Hidden-CYUCWFXf.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BL_xrhrx.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CxmEVb--.js";import"./useFocus-zY2zj5L9.js";import"./useFocusRing-C2_YEmjA.js";import"./useFocusable-B7WP4__g.js";import"./ActionGroup-CKWSskWv.js";import"./getActionGroupSlot-C-FhbO6Z.js";import"./useStatic-OW4DiFQ5.js";import"./LayoutCard-BbwXjEB1.js";import"./Section-DNG5i0i9.js";import"./ContextMenuSection-CF0FAI_C.js";import"./ActionBatch-DTgx0kqH.js";import"./useOverlayController-BN71uM-Z.js";import"./Dialog-atW1yRI0.js";import"./OverlayArrow-D8uV1uDe.js";import"./useControlledState-DvV_L9jP.js";import"./Collection-CfTInUqx.js";import"./CollectionBuilder-DXHEkZnM.js";import"./SelectionIndicator-B0He5XEj.js";import"./Separator-oRLs3WBO.js";import"./SelectionManager-DJLtj_Nc.js";import"./useEvent-Bo6NaH-t.js";import"./useCollator-CL9Njxka.js";import"./FocusScope-jjJ71B2a.js";import"./VisuallyHidden-6gUpRQYP.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
