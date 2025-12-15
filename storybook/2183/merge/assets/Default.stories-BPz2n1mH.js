import{j as r}from"./iframe-AfMfDnul.js";import{L as d}from"./Label-CEgt2ST5.js";import{at as i,au as l,v as u,g as T}from"./TimeField-BK14odaB.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D0YtrswE.js";import"./mergeRefs-hRGJQS5p.js";import"./index-Cse-H3Oz.js";import"./useLocalizedStringFormatter-ZYKyDhtN.js";import"./context-ESdZ7ZET.js";import"./ProgressBar-BHyKVsx8.js";import"./utils-wHWs8Mhj.js";import"./Hidden-3-cgxJ5L.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-NekwP7Iq.js";import"./dynamic-B22nf4Sq.js";import"./Button-Dz-J0BZY.js";import"./IconWarning-BHjxQDF5.js";import"./remote-BbVCA53p.js";import"./Text-XXGzm8bZ.js";import"./browser-D3b8NrdU.js";import"./EmulatedBoldText-pgpRP3jm.js";import"./LoadingSpinner-C1jt85JD.js";import"./Button-CnuzJqL8.js";import"./useFocusRing-BCI7vGPi.js";import"./useFocusable-CBVaElx9.js";import"./Section-ebqGZRf9.js";import"./context-WpTHPnjK.js";import"./RSPContexts-C5kaCkGg.js";import"./Collection-B07e3AhT.js";import"./CollectionBuilder-cwz4h6ef.js";import"./SelectionIndicator-DvSIX2eN.js";import"./Separator-Cu7L9zFQ.js";import"./useStatic-oE3CUH2s.js";import"./ActionGroup-CiNT698X.js";import"./Alert-DLVLnSp7.js";import"./AlertIcon-q77oMlDX.js";import"./AlertBadge-urZauIAv.js";import"./Align-DO08DH9M.js";import"./Popover-CmYxShpW.js";import"./OverlayTrigger-CzOjAy2I.js";import"./TableFooterRow-CqtqWf9U.js";import"./SkeletonText-C4RPLkJL.js";import"./Avatar-DhGvbDQ6.js";import"./AvatarStack-Cnvkf5dH.js";import"./Badge-eDxwdHYA.js";import"./BigNumber-Ci9DRIHe.js";import"./Breadcrumb-DYWPteCH.js";import"./Link-hXv3E1Ra.js";import"./Heading-Cl5UGWqj.js";import"./Legend-DQqywowg.js";import"./FileCardList-YajtycxG.js";import"./Image-B-iX1Sov.js";import"./Color-CJBrdfrQ.js";import"./Content-B3NPYowa.js";import"./ContextualHelpTrigger-BGD0J07C.js";import"./CounterBadge-CnjwmzpL.js";import"./DonutChart-K7DPpc3R.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BiQjAIjj.js";import"./Header-BaKdY0Y9.js";import"./Initials-C1l4vziN.js";import"./InlineCode-C6DAsZkJ.js";import"./PopoverTrigger-CMgONCmT.js";import"./Separator-DJ5CH4NB.js";import"./Message-BJab1gPB.js";import"./MessageSeparator-CqsC5kSU.js";import"./NavigationGroup-Ifu-QKtv.js";import"./Notification-Dq4SIvAb.js";import"./NotificationProvider-C4tBKUz-.js";import"./ProgressBar-DWcH6LPN.js";import"./Rating-Dfpy_BL0.js";import"./Skeleton-WYwe29HQ.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,Cr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:g("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},m={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},s={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props}>
      <Label>Time</Label>
      <FieldDescription>Enter a time</FieldDescription>
    </TimeField>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props} defaultValue={new Time(11, 45)}>
      <Label>Time</Label>
    </TimeField>
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const vr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,t as Disabled,n as Granularity,c as MinMaxValue,a as Required,s as WithDefaultValue,m as WithFieldDescription,p as WithFieldError,vr as __namedExportsOrder,Cr as default};
