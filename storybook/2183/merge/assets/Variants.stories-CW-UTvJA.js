import{j as e}from"./iframe-CN4G8qqm.js";import{A as n}from"./Alert-CPSG8j55.js";import{H as i}from"./Heading-DbxU3Nde.js";import{C as p}from"./Content-CVWt400t.js";import d from"./Default.stories-DxcBsziw.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-Dohq3djV.js";import"./IconChevronDown-oGa76fM6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-4OAE62jj.js";import"./mergeRefs-B9PoHYFQ.js";import"./index-I0Qj-Cdl.js";import"./remote-DWrodQTa.js";import"./IconDanger-BS5-adBO.js";import"./IconInfo-BhF6VzKQ.js";import"./IconCircleCheck-C7IJvtcp.js";import"./useLocalizedStringFormatter-B9Hz40nN.js";import"./context-CcGGjrZQ.js";import"./dynamic-D9oGWwUs.js";import"./Heading-BTWrK-KI.js";import"./RSPContexts-DE5X9chL.js";import"./utils-DbmEdXKf.js";import"./Text-0Ubm83r2.js";import"./browser-TeUtxSTm.js";import"./EmulatedBoldText-moUjmeps.js";import"./Button-Bq80dFyw.js";import"./IconX-BxRR1JIX.js";import"./IconCheck-DqC7rWu2.js";import"./LoadingSpinner-D2A4fUcq.js";import"./ariaLive-BjvyJtUO.js";import"./Button-DbVJWx45.js";import"./ProgressBar-DMLVl3vw.js";import"./Hidden-BofwJMZa.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CERaDmlf.js";import"./useFocusable-BkpoXrB2.js";import"./ActionGroup-CwhBesa8.js";import"./getActionGroupSlot-DpgtZJxd.js";import"./useStatic-CM9-VZa7.js";import"./LayoutCard-CKyMkRcv.js";import"./Section-BzFgBFFU.js";import"./ContextMenuSection-D61kPd_y.js";import"./lib-90ocxLs-.js";import"./Action-Cfr2BBp2.js";import"./context-CQHW5bQg.js";import"./Collection-CpgGjn50.js";import"./CollectionBuilder-RP78OhS8.js";import"./SelectionIndicator-D0PPGfWn.js";import"./Separator-BYdiAAyF.js";import"./dummyText-CX_I_Wpl.js";const ne={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
