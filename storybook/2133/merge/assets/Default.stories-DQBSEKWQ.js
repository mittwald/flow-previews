import{j as r}from"./iframe-C60aMdie.js";import{L as d}from"./Label-CzVOnNLd.js";import{av as i,aw as l,x as u,F as T}from"./Modal-BRLjWmcI.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-jCG2SJhp.js";import"./index-my9L9zM2.js";import"./index-CLR1PkMI.js";import"./useLocalizedStringFormatter-CwhdRj3j.js";import"./context-CbOMBxRf.js";import"./ProgressBar-B_mDm1JC.js";import"./utils-BQFwVYY5.js";import"./Hidden-BZIUhw-w.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-CVq1BkmJ.js";import"./context-DSrUG3BE.js";import"./Button-CvbHAn2i.js";import"./useFocusRing-DC3IjPh5.js";import"./useFocusable-Dew49z7P.js";import"./RSPContexts-DTGtZjZs.js";import"./Collection-BnGKbvLc.js";import"./CollectionBuilder-CwoEUOyQ.js";import"./SelectionIndicator-DueQdBHH.js";import"./Separator-y5zzyFFC.js";import"./browser-CNA-G9XW.js";import"./useStatic-vNm-dgAB.js";import"./FileCardList-CCCPEiGj.js";import"./IconWarning-B5fkZC-l.js";import"./Avatar-B7kisHtJ.js";import"./AlertIcon-C7zTMkoz.js";import"./Image-CXRwncHw.js";import"./Text-SUPQTMUT.js";import"./EmulatedBoldText-gDNBGAzw.js";import"./Link-lNOdoot_.js";import"./Button-jX--b59C.js";import"./LoadingSpinner-EerxDvmb.js";import"./ControlledNotification-DflLvVYg.js";import"./LayoutCard-BHGne7SD.js";import"./Accordion-CKOAUBtf.js";import"./Section-BTXSJ-5X.js";import"./getActionGroupSlot-CdLyQOZc.js";import"./ActionGroup-pA_bsRMT.js";import"./Alert-BJKw0QeS.js";import"./AlertBadge-CnHLq6IR.js";import"./Align-BpStHQnP.js";import"./AvatarStack-TfH6cSvv.js";import"./BigNumber-CCd4dY5q.js";import"./Breadcrumb-DsZIUq31.js";import"./Heading-DAaBZvd2.js";import"./Legend-C-QoQfEn.js";import"./Color-DYvyagNb.js";import"./TableFooterRow-Byf_2RJW.js";import"./SkeletonText-DqQ9EdbR.js";import"./Content-CEAhgMHe.js";import"./CounterBadge-BSi8dS51.js";import"./DonutChart-DE-zhDub.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BTGMNUbe.js";import"./Header-CACiotaV.js";import"./Initials-CCakY2tg.js";import"./InlineCode-Cct-b4qD.js";import"./Separator-BSnGWgyT.js";import"./MessageSeparator-BdlWKUzt.js";import"./NavigationGroup-Bvrr1zmO.js";import"./Notification-CjMVwQai.js";import"./NotificationProvider-xKOj-JZj.js";import"./ProgressBar-BQfUYYSR.js";import"./Rating-CqYV9FLO.js";import"./Skeleton-CYpMvI04.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:g("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
