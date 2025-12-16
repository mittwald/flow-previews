import{j as e}from"./iframe-xTeLnFvu.js";import{A as n}from"./Alert-CWKA2Pzb.js";import{H as i}from"./Heading-cElDoL_q.js";import{C as p}from"./Content-BzWg7sN8.js";import d from"./Default.stories-9bQtH_Sc.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-DqbdA5zC.js";import"./IconApp-B1jeSMHX.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B-9yYF9r.js";import"./mergeRefs-CL4-4jLa.js";import"./index-D8cXiV4r.js";import"./remote-DmruOiXe.js";import"./IconDanger-DpVgPae0.js";import"./IconInfo-C432apET.js";import"./IconCircleCheck-DTnVc5u6.js";import"./useLocalizedStringFormatter-CRzuFQ02.js";import"./context-7tIPXbfR.js";import"./dynamic-ndn1boAo.js";import"./Heading-Dpj368kt.js";import"./RSPContexts-BbeCs0tS.js";import"./utils-DAXmWa5w.js";import"./Text-CX0dnSU4.js";import"./browser-RW8IAkpU.js";import"./EmulatedBoldText-st1IlPV2.js";import"./Button-BA5_aaZE.js";import"./IconX-D7i-QR82.js";import"./IconCheck-Cc3xyZRg.js";import"./LoadingSpinner-DhmoM-Yl.js";import"./ariaLive-DoOsJYhU.js";import"./Button-6mLbsxm5.js";import"./ProgressBar-Du2Olg6q.js";import"./Hidden-CaRuxXNN.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DkBPZ0-v.js";import"./useFocusable-BaZ7v7IW.js";import"./ActionGroup-TgHXsP3h.js";import"./getActionGroupSlot-NSsr3wC7.js";import"./useStatic-DiiqycDM.js";import"./LayoutCard-Bw6k05tb.js";import"./Section-o_jduYUp.js";import"./ContextMenuSection-NFDNiNZp.js";import"./lib-90ocxLs-.js";import"./Action-GyTbi50D.js";import"./context-B3gmiBCA.js";import"./Collection-Bncr_TUN.js";import"./CollectionBuilder-CWex8B7o.js";import"./SelectionIndicator-vxn3ib0k.js";import"./Separator-CCxpf_MJ.js";import"./dummyText-CX_I_Wpl.js";const ne={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    status: "success"
  },
  render: props => <Alert {...props}>
      <Heading>Your app is up to date</Heading>
      <Content>Your app has been updated to the current version.</Content>
    </Alert>
}`,...a.parameters?.docs?.source}}};const ie=["Info","Warning","Danger","Success"];export{s as Danger,t as Info,a as Success,o as Warning,ie as __namedExportsOrder,ne as default};
