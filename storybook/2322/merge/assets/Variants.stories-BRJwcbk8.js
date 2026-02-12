import{j as e}from"./iframe-jPI25t47.js";import{A as a}from"./Alert-B-WqSTPM.js";import{H as n}from"./Heading-BYBgSNBh.js";import{C as p}from"./Content-KabCAW67.js";import d from"./Default.stories-CvRqiFWk.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-HKJqs1Pu.js";import"./IconWarning-D8uDJDej.js";import"./clsx-B-dksMZM.js";import"./flowComponent-NWkTmrxz.js";import"./index-Cv1Y71KG.js";import"./index-mBlsDuvj.js";import"./remote-B_as-6Bm.js";import"./useLocalizedStringFormatter-DiGz--zc.js";import"./context-yJg27e0-.js";import"./dynamic-DcvTJJQa.js";import"./Heading-BvtnHnmW.js";import"./RSPContexts-COITpNJr.js";import"./utils-DssEHlsW.js";import"./Text-CzRKl4Rn.js";import"./browser-BKdBfXKE.js";import"./EmulatedBoldText-BPBEsAY6.js";import"./Text-BUiBuDRU.js";import"./Button-CMdL10Ys.js";import"./LoadingSpinner-DhHtGG23.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-GVmiAxmL.js";import"./ProgressBar-BB7XDz1a.js";import"./Label-gIBQebAF.js";import"./Hidden-BHJ1gGty.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJgKbpp_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bv9bKc9w.js";import"./useFocus-DZAeMhz-.js";import"./useFocusRing-PgP7-E1A.js";import"./useFocusable-YzLAhItH.js";import"./ActionGroup-19L6oHyS.js";import"./getActionGroupSlot-Dnhmurp_.js";import"./useStatic-Be080qZz.js";import"./LayoutCard-6s6Erw8m.js";import"./Section-wgX4yeQq.js";import"./ContextMenuSection-BG427zDb.js";import"./ActionBatch-DVEQdHps.js";import"./useOverlayController-Cy5LcSUF.js";import"./Dialog-C4XHiXzR.js";import"./OverlayArrow-2srpU7pW.js";import"./useControlledState-CujVadxA.js";import"./Collection-D3v-sdZg.js";import"./CollectionBuilder-AJ1JuT2m.js";import"./SelectionIndicator-SHoPDQ8G.js";import"./Separator-DfJMhgbG.js";import"./SelectionManager-C-0YEkIp.js";import"./useEvent-DZfip6aA.js";import"./useCollator-TV1MmAHK.js";import"./FocusScope-QARcb0VX.js";import"./VisuallyHidden-vrC_Lu36.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
