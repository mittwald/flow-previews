import{j as e}from"./iframe-K4Kgzs5d.js";import{A as a}from"./Alert-Dj9-8j7X.js";import{H as n}from"./Heading-DvNGAwaU.js";import{C as p}from"./Content-Bke5eZdg.js";import d from"./Default.stories-8BelkEah.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-Bh0Qf_48.js";import"./IconWarning-BGpHZy47.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CbChzPG9.js";import"./index-Coqdyp07.js";import"./index-C1Cqv2DY.js";import"./remote-DgH_DZKx.js";import"./useLocalizedStringFormatter-DDBnVsYO.js";import"./context-BHsz5d3m.js";import"./dynamic-d4gvBHma.js";import"./Heading-BKtqva_S.js";import"./RSPContexts-DBQcbxf9.js";import"./utils--XC5cWbY.js";import"./Text-BPEkrilU.js";import"./browser-9MG5lDdh.js";import"./EmulatedBoldText-CJYMqRLn.js";import"./Text-DhK76AHe.js";import"./Button-CLdF1xvY.js";import"./LoadingSpinner-Dt3AVNp7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-B9p48ORM.js";import"./ProgressBar-DgQG6kyC.js";import"./Label-Du2Jf-3y.js";import"./Hidden-DNKD1xKj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-IleSnN60.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bsv_-vru.js";import"./useFocus-CfhKlOoP.js";import"./useFocusRing-B7VfbIok.js";import"./useFocusable-H6UpmrOx.js";import"./ActionGroup-By1FPS3M.js";import"./getActionGroupSlot-DDRLr0XQ.js";import"./useStatic-DUE7vdEn.js";import"./LayoutCard-2JpGewIl.js";import"./Section-DhkMhEtB.js";import"./ContextMenuSection-BbQjr4t3.js";import"./Action-D8xdI4CM.js";import"./context-Be9deJEN.js";import"./Dialog-D9y6Gm5p.js";import"./OverlayArrow-70hjzCbF.js";import"./useControlledState-UcCiEhN3.js";import"./Collection-BbxJvL2P.js";import"./CollectionBuilder-GLV80gvr.js";import"./SelectionIndicator-LfvmrL3H.js";import"./Separator-D8C38sqW.js";import"./SelectionManager-D3da5ydz.js";import"./useEvent-B-sfhBuw.js";import"./useCollator-Cz2Nd5FQ.js";import"./FocusScope-A43bauPW.js";import"./VisuallyHidden-DOfAC-AS.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
