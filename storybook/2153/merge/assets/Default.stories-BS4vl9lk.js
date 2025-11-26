import{j as r,r as C}from"./iframe-Bdha8Dos.js";import{T as t,x as h,F as R}from"./Modal-Aj_CgExV.js";import{L as o}from"./Label-Dn2sUami.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-DRPW6Rpg.js";import"./flowComponent-B8Uju4HR.js";import"./index-D82oAODb.js";import"./index-Dy-GF6N8.js";import"./context-5Dj5ASGX.js";import"./Button-BzZ_Ef_b.js";import"./utils-DRkQtTgN.js";import"./ProgressBar-DPQU74BD.js";import"./Hidden-CgXpbbtr.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-3OjubdPM.js";import"./useFocusRing-CBKtE_2O.js";import"./useFocusable-CPRTwPrN.js";import"./RSPContexts-CAeHzh3l.js";import"./Collection-DhVbXxy4.js";import"./CollectionBuilder-CI6cKXkO.js";import"./SelectionIndicator-zKM_RP2Q.js";import"./Separator-C0h06tUt.js";import"./browser-Dc0PT9zF.js";import"./useLocalizedStringFormatter-Bnw0-aa9.js";import"./useStatic-BN3Mf5gg.js";import"./FileCardList-DCzdLjIe.js";import"./IconWarning-BYkVHlH3.js";import"./Avatar-DCpppZC2.js";import"./AlertIcon-D8P-W6sm.js";import"./Image-DP0ZI2sD.js";import"./Text-DoSb3lbH.js";import"./EmulatedBoldText-CrNw8-Fv.js";import"./Link-Bw8zZtLF.js";import"./Button-C0-Fr6HH.js";import"./LoadingSpinner-KHyfkLfb.js";import"./ControlledNotification-CjmaONZw.js";import"./Flex-h-xfZw1g.js";import"./Accordion-DFcwElaU.js";import"./Section-Yfvm1zIN.js";import"./ActionGroup-BdiJCCv8.js";import"./Alert-Dx0A4bZf.js";import"./AlertBadge-plElskYS.js";import"./Align-CNxnU-VK.js";import"./AvatarStack-2m33Ddtx.js";import"./BigNumber-pV4cwxuQ.js";import"./Breadcrumb-Mg3slNRi.js";import"./Heading-D7df73UY.js";import"./Legend-CLh9Cweu.js";import"./Color-BvgoEP4D.js";import"./TableFooterRow-Dn4D5lV4.js";import"./SkeletonText-C3SnEUx2.js";import"./Content-Dv2IYPHI.js";import"./CounterBadge-ClteCI38.js";import"./DonutChart-LJEadiGp.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Cnrnw12O.js";import"./Header-CK0wvNYk.js";import"./Initials-hmCcaCSn.js";import"./InlineCode-nRx3MSIv.js";import"./LayoutCard-CsMFtYY4.js";import"./Separator-Cv4HYQX1.js";import"./MessageSeparator-M20ehGxL.js";import"./NavigationGroup-CKxBhPrE.js";import"./Notification-D7qFMSh0.js";import"./NotificationProvider-Bfyf-xJg.js";import"./ProgressBar-DXWjfO91.js";import"./Rating-DAeIfaa9.js";import"./Skeleton-DvR-lN_z.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,qr={title:"Form Controls/TextField",component:t,render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"First name"})})},a={},s={args:{isDisabled:!0}},i={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,children:[r.jsx(o,{children:"URL"}),r.jsx(h,{children:'Start with "https://"'})]})},l={render:e=>r.jsx(t,{...e,defaultValue:"https://mittwald.de",children:r.jsx(o,{children:"URL"})})},m={render:e=>{const[F,g]=C.useState("");return r.jsx(t,{...e,value:F,onChange:L=>g(L.toUpperCase()),children:r.jsx(o,{children:"URL"})})}},d={render:e=>r.jsx(t,{...e,placeholder:"https://",children:r.jsx(o,{children:"URL"})})},c={render:e=>r.jsxs(t,{...e,isInvalid:!0,defaultValue:"hello",children:[r.jsx(o,{children:"URL"}),r.jsx(R,{children:"Invalid input"}),r.jsx(h,{children:'Start with "https://"'})]})},u={args:{showCharacterCount:!0,maxLength:10},render:e=>r.jsx(t,{onChange:x("onChange"),...e,children:r.jsx(o,{children:"User name"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props}>
      <Label>URL</Label>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} defaultValue="https://mittwald.de">
      <Label>URL</Label>
    </TextField>
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState("");
    return <TextField {...props} value={value} onChange={val => setValue(val.toUpperCase())}>
        <Label>URL</Label>
      </TextField>;
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} placeholder="https://">
      <Label>URL</Label>
    </TextField>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <TextField {...props} isInvalid defaultValue="hello">
      <Label>URL</Label>
      <FieldError>Invalid input</FieldError>
      <FieldDescription>Start with "https://"</FieldDescription>
    </TextField>
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 10
  },
  render: props => <TextField onChange={action("onChange")} {...props}>
      <Label>User name</Label>
    </TextField>
}`,...u.parameters?.docs?.source}}};const yr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithControlledValue","WithPlaceholder","WithFieldError","ShowCharacterCount"];export{a as Default,s as Disabled,i as ReadOnly,p as Required,u as ShowCharacterCount,m as WithControlledValue,l as WithDefaultValue,n as WithFieldDescription,c as WithFieldError,d as WithPlaceholder,yr as __namedExportsOrder,qr as default};
