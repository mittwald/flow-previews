import{j as r}from"./iframe-D6fHsxXv.js";import{L as d}from"./Label-BFZcxZYB.js";import{av as i,aw as l,x as u,F as T}from"./Modal-CGXu-7BF.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CyxS6jtd.js";import"./index-a9Z31mTH.js";import"./index-BN2jmjED.js";import"./useLocalizedStringFormatter-CFiZqHkg.js";import"./context-DBHOSboP.js";import"./ProgressBar-p_vCaDV8.js";import"./utils-CX0v46bh.js";import"./Hidden-DOuWayhK.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-BLI65pIy.js";import"./context-B25Uysh-.js";import"./Button-CGoM5cNA.js";import"./useFocusRing-mSLmiDmW.js";import"./useFocusable-C5yjySsw.js";import"./RSPContexts-ot9YLsND.js";import"./Collection-C7VAUULI.js";import"./CollectionBuilder-Da2MDVhj.js";import"./SelectionIndicator-BI8Ai2Ij.js";import"./Separator-CsPA1GTq.js";import"./browser-CwuXyXeK.js";import"./useStatic-ZhhRmIwk.js";import"./FileCardList-CKOF_41c.js";import"./IconWarning-BQPhDOnw.js";import"./Avatar-BZa2aNzB.js";import"./AlertIcon-y7uDyP2w.js";import"./Image-BE61ZkEV.js";import"./Text-BlUe4lOx.js";import"./EmulatedBoldText-C3KADN9z.js";import"./Link-BXLnihOz.js";import"./Button-ByZH5IaN.js";import"./LoadingSpinner-YR9PsY9I.js";import"./ControlledNotification-DW7-c_1o.js";import"./Flex-Bnwwl7yh.js";import"./Accordion-BNspTTT6.js";import"./Section-DZa8lXDk.js";import"./ActionGroup-Bn5GGBe3.js";import"./Alert-QOLcAREl.js";import"./AlertBadge-D8pE3XVJ.js";import"./Align-jX76HIXo.js";import"./AvatarStack-D1CQ9CP4.js";import"./BigNumber-HDD6Ha1g.js";import"./Breadcrumb-C3NrF8Li.js";import"./Heading-CN7gV4ri.js";import"./Legend-g2tREy-a.js";import"./Color-Bkm_a0pP.js";import"./TableFooterRow-DGrjNW1t.js";import"./SkeletonText-3m6Qm9dA.js";import"./Content-CavwTwhy.js";import"./CounterBadge-CM2z3a4b.js";import"./DonutChart-BhFaY8J1.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DyavuTK0.js";import"./Header-OT8Q3euI.js";import"./Initials-CZzuu5uh.js";import"./InlineCode-CKBf34T8.js";import"./LayoutCard-3KlgAbCz.js";import"./Separator-DVOspp54.js";import"./MessageSeparator-CCKnTU1s.js";import"./NavigationGroup-DV-BiGeA.js";import"./Notification-C3O4RVn7.js";import"./NotificationProvider-DlGFFFM5.js";import"./ProgressBar-DAX1bvy4.js";import"./Rating-Dfz4xv42.js";import"./Skeleton-sfWcrayS.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:g("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
