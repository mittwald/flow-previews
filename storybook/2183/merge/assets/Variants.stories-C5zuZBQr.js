import{j as e}from"./iframe-pNOm8Wja.js";import{A as n}from"./Alert-C8TwlP9l.js";import{H as i}from"./Heading-mhDH31L5.js";import{C as p}from"./Content-BA1HGJEN.js";import d from"./Default.stories-BoLB_BZK.js";import"./preload-helper-PPVm8Dsz.js";import"./AlertIcon-DhrYOJcg.js";import"./IconApp-BiE0s1PO.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BWF9EjWJ.js";import"./mergeRefs-v_WstrVO.js";import"./index-CfSUEUFJ.js";import"./remote-DYOOxdg2.js";import"./IconDanger-DCkcPuhV.js";import"./IconInfo-CPi1obw3.js";import"./IconCircleCheck-B-uJhcRx.js";import"./useLocalizedStringFormatter-CRfFxVeP.js";import"./context-CMdVhRJ1.js";import"./dynamic-CkcNveyu.js";import"./Heading-YerowFDN.js";import"./RSPContexts-CPamdU7s.js";import"./utils-BknOSkFt.js";import"./Text-_46BQ-Z5.js";import"./browser-CBsMsG9c.js";import"./EmulatedBoldText-C8Hc8u3o.js";import"./Button-CgV_q1F1.js";import"./IconX-CwELzZYK.js";import"./IconCheck-DoYeu8FX.js";import"./LoadingSpinner-Db8dHYJY.js";import"./ariaLive-C7DipXM8.js";import"./Button-D9P8PHTw.js";import"./ProgressBar-D3icCtAB.js";import"./Hidden-BfleQL3O.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Cca4ZdHO.js";import"./useFocusable-DOa46CdT.js";import"./ActionGroup-CDv4nney.js";import"./getActionGroupSlot-C-2PJFSw.js";import"./useStatic-GeHsFKqm.js";import"./LayoutCard-C2rS42p8.js";import"./Section-C6kZyOP7.js";import"./ContextMenuSection-LjM8joNZ.js";import"./lib-90ocxLs-.js";import"./Action-DvGTA_vq.js";import"./context-Chylvkq0.js";import"./Collection-DsfTdLuW.js";import"./CollectionBuilder-CKordMi2.js";import"./SelectionIndicator-DYQzBrWb.js";import"./Separator-ti_7fu_1.js";import"./dummyText-CX_I_Wpl.js";const ne={...d,title:"Status/Alert/Status"},t={render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Email address has been archived"}),e.jsx(p,{children:"As your domain has been deleted, this email address has been archived. To be able to send and receive emails, you must rename the address."})]})},o={args:{status:"warning"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Storage is almost exceeded"}),e.jsx(p,{children:"Your storage space is over 80% utilized. We recommend that you upgrade the storage space to avoid disruptions during backups."})]})},s={args:{status:"danger"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"No SSL certificate could be issued"}),e.jsx(p,{children:"No SSL certificate could be issued for this domain because the domain IP does not point to your server IP."})]})},a={args:{status:"success"},render:r=>e.jsxs(n,{...r,children:[e.jsx(i,{children:"Your app is up to date"}),e.jsx(p,{children:"Your app has been updated to the current version."})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
