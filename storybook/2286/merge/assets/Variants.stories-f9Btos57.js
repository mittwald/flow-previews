import{j as e}from"./iframe-CgeYxcj8.js";import{A as a}from"./Alert-56RuOaSw.js";import{H as n}from"./Heading-ze7wSVUJ.js";import{C as p}from"./Content-CCJfbBVV.js";import d from"./Default.stories-D0AulwK5.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-BVEvo4xP.js";import"./IconWarning-CNkUjla4.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dnk3jDHh.js";import"./index-DGuDz7oW.js";import"./index-SS9EXt6e.js";import"./remote-CtdlUY7L.js";import"./useLocalizedStringFormatter-C8PcX-p4.js";import"./context-CYaZBhkg.js";import"./dynamic-CbTKsx_B.js";import"./Heading-CYGvuqGo.js";import"./RSPContexts-D3svuC0u.js";import"./utils-BH6Z59zo.js";import"./Text-fEw-hlGn.js";import"./browser-DJjrqqpQ.js";import"./EmulatedBoldText-B9jRyhwt.js";import"./Text-D1ETBO0D.js";import"./Button-DR_1qYQ2.js";import"./LoadingSpinner-Czq10wCK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-x-eiCRcG.js";import"./ProgressBar-FiBC1zNG.js";import"./Label-DsJ6qzWh.js";import"./Hidden-kX7iUH63.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CNkOKuMy.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DX014ZyL.js";import"./useFocus-BDu45Ayq.js";import"./useFocusRing-BNw3vzKJ.js";import"./useFocusable-UxYwgi7z.js";import"./ActionGroup-SAvPHs6u.js";import"./getActionGroupSlot-Bx9RQO4h.js";import"./useStatic-BH0JS_W8.js";import"./LayoutCard-CZuCpnmc.js";import"./Section-C3AA-XhZ.js";import"./ContextMenuSection-CBMk4BqO.js";import"./Action-DlDUTAjM.js";import"./context-x8law5mp.js";import"./Dialog-LUBljj5i.js";import"./OverlayArrow-1gQSfgj3.js";import"./useControlledState-CjPSf5xo.js";import"./Collection-D2EAa2oZ.js";import"./CollectionBuilder-C9W5aaEP.js";import"./SelectionIndicator-BaQZNiQ3.js";import"./Separator-CcrRe_Zj.js";import"./SelectionManager-BP1ghRLo.js";import"./useEvent-DvVlPNbe.js";import"./useCollator-Jdxh6jfg.js";import"./FocusScope-CGvyVacv.js";import"./VisuallyHidden-ty8jLyKB.js";import"./dummyText-CX_I_Wpl.js";const he={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},i={args:{status:"success"},render:r=>e.jsxs(a,{...r,children:[e.jsx(n,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
