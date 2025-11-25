import{j as r}from"./iframe-CVdzphmp.js";import{L as d}from"./Label-BcwsyfCE.js";import{av as i,aw as l,x as u,F as T}from"./Modal-dLKFywtU.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CzVecZL_.js";import"./index-DhI8Ssxe.js";import"./index-XbyfyjmF.js";import"./useLocalizedStringFormatter-DSC0kUTs.js";import"./context-BRBaLiQc.js";import"./ProgressBar-1X1fHZT0.js";import"./utils-CFM6TLUG.js";import"./Hidden-Dt0LCI07.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-D15r1Yxg.js";import"./context-B-mwp0vS.js";import"./Button-CTZeRvkz.js";import"./useFocusRing-BvvALaA3.js";import"./useFocusable-By55uwCe.js";import"./RSPContexts-DDuv6DrT.js";import"./Collection-D1raa_37.js";import"./CollectionBuilder-D0Q13mlX.js";import"./SelectionIndicator-wxrHnCmJ.js";import"./Separator-DMedQabI.js";import"./browser-NAvxjlqe.js";import"./useStatic-CTNvYRV_.js";import"./FileCardList-CelLg_wh.js";import"./IconWarning-Dqi9ABql.js";import"./Avatar-5by9MeQI.js";import"./AlertIcon-Xp4f2JBr.js";import"./Image-C129SSb1.js";import"./Text-Bkok2Uad.js";import"./EmulatedBoldText-Buf1io-r.js";import"./Link-DafBlrAX.js";import"./Button-Cy2rd34B.js";import"./LoadingSpinner-DTzlaVu1.js";import"./ControlledNotification-Cxvk1MBM.js";import"./Flex-CXweaQA0.js";import"./Accordion-CII8tjDR.js";import"./Section-DtrIGiG-.js";import"./ActionGroup-CWQpjp5Z.js";import"./Alert-CxRF3ICH.js";import"./AlertBadge-g5AIFmAM.js";import"./Align-D1ekpy-F.js";import"./AvatarStack-gtLPvBlC.js";import"./BigNumber-DDAMaBcj.js";import"./Breadcrumb-D6jlLVdK.js";import"./Heading-DzvfYRfV.js";import"./Legend-Ch6lQmnj.js";import"./Color-bOvY6mSn.js";import"./TableFooterRow-BNbzk5NJ.js";import"./SkeletonText-CyW34AgL.js";import"./Content-DxRrX9zb.js";import"./CounterBadge-CKtsFS1H.js";import"./DonutChart-BqUMdaQw.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Y2YDUvsA.js";import"./Header-cd3ubJu7.js";import"./Initials-8P49ASMZ.js";import"./InlineCode-ClEEVqRB.js";import"./LayoutCard-DFxi45F0.js";import"./Separator-BfdYcmQH.js";import"./MessageSeparator-CuotSqOA.js";import"./NavigationGroup-CEF9lIWg.js";import"./Notification-3G2vZj4A.js";import"./NotificationProvider-BuTudFPl.js";import"./ProgressBar-Cb_NqQgZ.js";import"./Rating-D1vk6HX_.js";import"./Skeleton-DCmfrDd3.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:g("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
