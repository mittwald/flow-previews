import{j as e}from"./iframe-DsvUdpXw.js";import{A as a}from"./Alert-Cn9Ul5Mb.js";import{H as n}from"./Heading-B52qHDza.js";import{C as p}from"./Content-BVfNBqu9.js";import d from"./Default.stories-B94sAeih.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-C2Vz7YO6.js";import"./IconWarning-DeQxeoQB.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BHKkbUKe.js";import"./index-CAxJgE7t.js";import"./index-BOZmgZtE.js";import"./remote-Bzinmuoi.js";import"./useLocalizedStringFormatter-CuRFYkX4.js";import"./context-BSJoRVhT.js";import"./dynamic-B-6cr1cE.js";import"./Heading-BVURhSI-.js";import"./RSPContexts-C2fytUZa.js";import"./utils-elFy1-Tx.js";import"./Text-DX5v3ksG.js";import"./browser-BtOTkQbR.js";import"./EmulatedBoldText-7KsmeNIZ.js";import"./Text-qH9eQPgP.js";import"./Button-Bh17vETd.js";import"./LoadingSpinner-DQcVqwZx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RLHEBlnW.js";import"./ProgressBar-iQ50i7yu.js";import"./Label-E9gf7XUf.js";import"./Hidden-CTz_rsXv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CEPtaVyT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BFT-1ljl.js";import"./useFocus-DN2AExbL.js";import"./useFocusRing-DkxfWW5E.js";import"./useFocusable-CD1pLlOX.js";import"./ActionGroup-DXsjU9YE.js";import"./getActionGroupSlot-CZI_KsgW.js";import"./useStatic-B4i3epQD.js";import"./LayoutCard-BQYJEIfK.js";import"./Section-DVr7ON9z.js";import"./ContextMenuSection-CZOOjTrg.js";import"./Action-CHQuPKKz.js";import"./context-ya2kPvzB.js";import"./Dialog-DDWgyAFS.js";import"./OverlayArrow-BaL5B_Kp.js";import"./useControlledState-HbpZAl0m.js";import"./Collection-Da99ROgL.js";import"./CollectionBuilder-CzjqfU1x.js";import"./SelectionIndicator-CDySPjGG.js";import"./Separator-BomnlaZI.js";import"./SelectionManager-Buucfd3A.js";import"./useEvent-DL_JcHww.js";import"./useCollator-DXJOSFu6.js";import"./FocusScope-eXu984DB.js";import"./VisuallyHidden-Ds80HbqR.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
