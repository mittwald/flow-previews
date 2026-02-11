import{j as e}from"./iframe-CNIcTJYh.js";import{A as a}from"./Alert-PH9dHe6x.js";import{H as n}from"./Heading-CSBDI-d5.js";import{C as p}from"./Content-CQKC6vCa.js";import d from"./Default.stories-BxcV9uhz.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-CQAKF3sa.js";import"./IconWarning-DfNRCo5R.js";import"./clsx-B-dksMZM.js";import"./flowComponent-60nesrge.js";import"./index-D3p32_5k.js";import"./index-UhPRO7XN.js";import"./remote-yIvwWX6j.js";import"./useLocalizedStringFormatter-Rr_25XDQ.js";import"./context-C-_0n7Mf.js";import"./dynamic-CfddFL0U.js";import"./Heading-DegGgrrB.js";import"./RSPContexts-BRYZfydm.js";import"./utils-BMrW0rs-.js";import"./Text-6t0QtAeQ.js";import"./browser-e5gpn1Ib.js";import"./EmulatedBoldText-Cp_XieAh.js";import"./Text-D2vn8IUC.js";import"./Button-DAjUCwya.js";import"./LoadingSpinner-D1M8B3tV.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BxwMmJez.js";import"./ProgressBar-2k-c3px2.js";import"./Label-T_N4SAco.js";import"./Hidden-CRwhep7p.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-OR8aG57O.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-YapnYrtx.js";import"./useFocus-Z0zsAUPg.js";import"./useFocusRing-DW-rJUC8.js";import"./useFocusable-pw23kKVy.js";import"./ActionGroup-DwraTk7X.js";import"./getActionGroupSlot-BroJtED_.js";import"./useStatic-J4GDP0vf.js";import"./LayoutCard-B6b27vNX.js";import"./Section-CUzAZq5T.js";import"./ContextMenuSection-B2n1IDtN.js";import"./Action-CB-yo4he.js";import"./context-CHGIk6I_.js";import"./Dialog-C8--keRD.js";import"./OverlayArrow-CaHszdLs.js";import"./useControlledState-aVbBpOCK.js";import"./Collection-6jPaJgDf.js";import"./CollectionBuilder-CrJHEyTa.js";import"./SelectionIndicator-DvRn40OS.js";import"./Separator-YE45c4qp.js";import"./SelectionManager-DzzIj92U.js";import"./useEvent-BbgFwTon.js";import"./useCollator-BvOIfxes.js";import"./FocusScope-BYGRF7Vw.js";import"./VisuallyHidden-BJLw9ne3.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
