import{j as r}from"./iframe-Bdha8Dos.js";import{L as d}from"./Label-Dn2sUami.js";import{aw as i,ax as l,x as u,F as T}from"./Modal-Aj_CgExV.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B8Uju4HR.js";import"./index-D82oAODb.js";import"./index-Dy-GF6N8.js";import"./useLocalizedStringFormatter-Bnw0-aa9.js";import"./context-3OjubdPM.js";import"./ProgressBar-DPQU74BD.js";import"./utils-DRkQtTgN.js";import"./Hidden-CgXpbbtr.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-DRPW6Rpg.js";import"./context-5Dj5ASGX.js";import"./Button-BzZ_Ef_b.js";import"./useFocusRing-CBKtE_2O.js";import"./useFocusable-CPRTwPrN.js";import"./RSPContexts-CAeHzh3l.js";import"./Collection-DhVbXxy4.js";import"./CollectionBuilder-CI6cKXkO.js";import"./SelectionIndicator-zKM_RP2Q.js";import"./Separator-C0h06tUt.js";import"./browser-Dc0PT9zF.js";import"./useStatic-BN3Mf5gg.js";import"./FileCardList-DCzdLjIe.js";import"./IconWarning-BYkVHlH3.js";import"./Avatar-DCpppZC2.js";import"./AlertIcon-D8P-W6sm.js";import"./Image-DP0ZI2sD.js";import"./Text-DoSb3lbH.js";import"./EmulatedBoldText-CrNw8-Fv.js";import"./Link-Bw8zZtLF.js";import"./Button-C0-Fr6HH.js";import"./LoadingSpinner-KHyfkLfb.js";import"./ControlledNotification-CjmaONZw.js";import"./Flex-h-xfZw1g.js";import"./Accordion-DFcwElaU.js";import"./Section-Yfvm1zIN.js";import"./ActionGroup-BdiJCCv8.js";import"./Alert-Dx0A4bZf.js";import"./AlertBadge-plElskYS.js";import"./Align-CNxnU-VK.js";import"./AvatarStack-2m33Ddtx.js";import"./BigNumber-pV4cwxuQ.js";import"./Breadcrumb-Mg3slNRi.js";import"./Heading-D7df73UY.js";import"./Legend-CLh9Cweu.js";import"./Color-BvgoEP4D.js";import"./TableFooterRow-Dn4D5lV4.js";import"./SkeletonText-C3SnEUx2.js";import"./Content-Dv2IYPHI.js";import"./CounterBadge-ClteCI38.js";import"./DonutChart-LJEadiGp.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Cnrnw12O.js";import"./Header-CK0wvNYk.js";import"./Initials-hmCcaCSn.js";import"./InlineCode-nRx3MSIv.js";import"./LayoutCard-CsMFtYY4.js";import"./Separator-Cv4HYQX1.js";import"./MessageSeparator-M20ehGxL.js";import"./NavigationGroup-CKxBhPrE.js";import"./Notification-D7qFMSh0.js";import"./NotificationProvider-Bfyf-xJg.js";import"./ProgressBar-DXWjfO91.js";import"./Rating-DAeIfaa9.js";import"./Skeleton-DvR-lN_z.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:x("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props}>
      <Label>Time</Label>
      <FieldDescription>Enter a time</FieldDescription>
    </TimeField>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props} defaultValue={new Time(11, 45)}>
      <Label>Time</Label>
    </TimeField>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props} isInvalid isRequired>
      <Label>Time</Label>
      <FieldError>Time is required</FieldError>
    </TimeField>
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    granularity: "hour"
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    minValue: new Time(8, 0),
    maxValue: new Time(16, 0)
  }
}`,...c.parameters?.docs?.source}}};const Wr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,t as Disabled,n as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,s as WithFieldDescription,p as WithFieldError,Wr as __namedExportsOrder,Or as default};
