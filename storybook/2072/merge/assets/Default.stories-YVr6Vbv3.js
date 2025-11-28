import{j as r}from"./iframe-C3jdvmqu.js";import{L as d}from"./Label-BPYJm5LL.js";import{ar as i,as as l,v as u,g as T}from"./TimeField-4_Mf2v55.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CbRGY8IE.js";import"./mergeRefs-2Ywf-Nb8.js";import"./index-C9vt92ef.js";import"./useLocalizedStringFormatter-C8ryTIgM.js";import"./context-KJ9X431h.js";import"./ProgressBar-BH_IM9sd.js";import"./utils-Bnm0gbPW.js";import"./Hidden-Bkp5h4tk.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-FKbZiReZ.js";import"./dynamic-D5Qg0LEH.js";import"./Button-crBjhbVY.js";import"./IconWarning-B93hkDaL.js";import"./Text-by0jRlX4.js";import"./browser-p2mffppm.js";import"./EmulatedBoldText-PDbCHW4-.js";import"./LoadingSpinner-BWjdiLAQ.js";import"./Button-BIwZHIrt.js";import"./useFocusRing-C-IiPjuI.js";import"./useFocusable-BOYJgmQp.js";import"./Section-Bx-16ZS-.js";import"./context-D0_2-R3T.js";import"./RSPContexts-n5O79WrS.js";import"./Collection-D2JualPB.js";import"./CollectionBuilder-BOCut2o5.js";import"./SelectionIndicator-DyngYSm7.js";import"./Separator-D3R6VXnX.js";import"./useStatic-BVkn_XG8.js";import"./ActionGroup-CZRMzFyT.js";import"./Alert-CkW0J4wt.js";import"./AlertIcon-DkwIeu6U.js";import"./AlertBadge-CiHrZnCZ.js";import"./Align-BjsqKpbB.js";import"./Popover-5jsA4dKH.js";import"./OverlayTrigger-BPs2PyhK.js";import"./TableFooterRow-BU8Fd1Lx.js";import"./SkeletonText-lLq3Nt65.js";import"./Avatar-BVwW1qb5.js";import"./AvatarStack-BnFAp99k.js";import"./Badge-DENltzo8.js";import"./BigNumber-DmXS7ieK.js";import"./Breadcrumb-qUZ49k0X.js";import"./Link-DBmT5h1W.js";import"./Heading-BZdy5d_w.js";import"./Legend-CKZ_UC0-.js";import"./FileCardList-D4czHQYY.js";import"./Image-Bj9hH710.js";import"./Color-DZdqnqJH.js";import"./Content-DtarLJHH.js";import"./ContextualHelpTrigger-B0sXZW5u.js";import"./CounterBadge-98HPnaLR.js";import"./DonutChart-CCSB7cQU.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-r71mMCrS.js";import"./Header-BIxUDaZT.js";import"./Initials-DZ9C76i2.js";import"./InlineCode-D49EgOnY.js";import"./PopoverTrigger-DyZPD5PV.js";import"./Separator-BI7SSrQ8.js";import"./Message-DX3VPOKF.js";import"./MessageSeparator-DKdhmfRa.js";import"./NavigationGroup-polgb4J2.js";import"./Notification-Scrbw5NS.js";import"./NotificationProvider-4ZdYgXNT.js";import"./ProgressBar-vbm8y321.js";import"./Rating-pSJ9uJqF.js";import"./Skeleton-1uRc-6la.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,yr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:g("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Cr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,t as Disabled,n as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,s as WithFieldDescription,p as WithFieldError,Cr as __namedExportsOrder,yr as default};
