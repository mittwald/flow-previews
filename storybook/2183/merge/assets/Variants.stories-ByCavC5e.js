import{j as e}from"./iframe-CH_aTfEL.js";import{A as n}from"./Alert-Isczd2v4.js";import{H as i}from"./Heading-YtZItkx8.js";import{C as p}from"./Content-BuDnVATG.js";import d from"./Default.stories-BznKGJWt.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-kNLxM35y.js";import"./IconApp-B8Pdxs7V.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DjBCrPYH.js";import"./mergeRefs-BzpEnNcV.js";import"./index-XPJW_oiy.js";import"./remote-ZsoG4C7l.js";import"./IconDanger-DRvJdcN_.js";import"./IconInfo-CiEpJHC7.js";import"./IconCircleCheck-DezdMVF5.js";import"./useLocalizedStringFormatter-DVjHg6pM.js";import"./context-Dl7i2EFq.js";import"./dynamic-vwb-6_Ta.js";import"./Heading-DKHBxjOZ.js";import"./RSPContexts-BB0WSv2m.js";import"./utils-C8srcrY8.js";import"./Text-BRh_x9bF.js";import"./browser-CjAUGP0i.js";import"./EmulatedBoldText-D1x6Y0F_.js";import"./Button-D53gB1eO.js";import"./IconX-DC29rh3t.js";import"./IconCheck-D02mUZL5.js";import"./LoadingSpinner-Cfaoz3gV.js";import"./ariaLive-Cw13p-6Q.js";import"./Button-B1aqxMhV.js";import"./ProgressBar-i73KRfPj.js";import"./Hidden-xsM_Dwee.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-AHO8ppps.js";import"./useFocusable-BEFnslrO.js";import"./ActionGroup-DOhwLXSI.js";import"./getActionGroupSlot-Bn8FL-S5.js";import"./useStatic-DNN3uXbB.js";import"./LayoutCard-BspRH0NJ.js";import"./Section-B-U_9AN9.js";import"./ContextMenuSection-BQYMbGGH.js";import"./lib-90ocxLs-.js";import"./Action-WNrTLAcY.js";import"./context-DeId9iUj.js";import"./Collection-B-PgrD24.js";import"./CollectionBuilder-BkOVlqH0.js";import"./SelectionIndicator-CMFVzQc5.js";import"./Separator-IFFI1hok.js";import"./dummyText-CX_I_Wpl.js";const ne={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
