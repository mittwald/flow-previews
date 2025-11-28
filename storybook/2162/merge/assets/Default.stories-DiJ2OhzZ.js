import{j as r}from"./iframe-BfrlpeCk.js";import{L as d}from"./Label-wUl7laod.js";import{ar as i,as as l,v as u,g as T}from"./TimeField-BhoCwCxW.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CPtIc9N-.js";import"./mergeRefs-B-vbhGNR.js";import"./index-r6rvd85P.js";import"./useLocalizedStringFormatter-C5Ltlkui.js";import"./context-jvNFAhRM.js";import"./ProgressBar-DuqIuA6U.js";import"./utils-CZEyphdB.js";import"./Hidden-C6jP4SMJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-BFQx9JCl.js";import"./dynamic-BUKqVZ1H.js";import"./Button-E46WDd4_.js";import"./IconWarning-DOKEq-WK.js";import"./Text-DdebjF6X.js";import"./browser-C0N36_KR.js";import"./EmulatedBoldText-eBeMz5kz.js";import"./LoadingSpinner-BwJAEpX5.js";import"./Button-Cjbcx8Zu.js";import"./useFocusRing-CWlqAuzY.js";import"./useFocusable-DfB_R8F9.js";import"./Section-Bb4j7C6a.js";import"./context-DUvcrLtv.js";import"./RSPContexts-Bw86vYvh.js";import"./Collection-BR-xLlJG.js";import"./CollectionBuilder-CmkBKKl-.js";import"./SelectionIndicator-jSUkmTlU.js";import"./Separator-D1Ouw6Ca.js";import"./useStatic-Bz7IWGfO.js";import"./ActionGroup-dgAOdJZ4.js";import"./Alert-CRvY5VYZ.js";import"./AlertIcon-CfJrkVpH.js";import"./AlertBadge-Dxv4P94g.js";import"./Align-YsnAwz9T.js";import"./Popover-C3qPsHTW.js";import"./OverlayTrigger-DKKj1P2l.js";import"./TableFooterRow-DwOitp-g.js";import"./SkeletonText-B-NyxpC1.js";import"./Avatar-B8_C9MNe.js";import"./AvatarStack-DWIfq5vn.js";import"./Badge-MeQ_8EOt.js";import"./BigNumber-BcZHvOWT.js";import"./Breadcrumb-D1tMkTMn.js";import"./Link-h05bzThL.js";import"./Heading-BzrDriRC.js";import"./Legend-CKP3pUkG.js";import"./FileCardList-BHWA4e_z.js";import"./Image-DmrVA4vT.js";import"./Color-CWKr_WHZ.js";import"./Content-BsqW8diX.js";import"./ContextualHelpTrigger-DO42vOyq.js";import"./CounterBadge-kCoMDryj.js";import"./DonutChart-Ddn2-NTo.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DBVcyvdC.js";import"./Header-3cW2glxq.js";import"./Initials-C8m56NNk.js";import"./InlineCode-C2U9lI57.js";import"./PopoverTrigger-BauBuR_D.js";import"./Separator-DPowy5kr.js";import"./Message-Cb-yd-qn.js";import"./MessageSeparator-tn0XlbcW.js";import"./NavigationGroup-Bdh44MUn.js";import"./Notification-C8AOzGHV.js";import"./NotificationProvider-Bv1lRKSn.js";import"./ProgressBar-BrBPhSDZ.js";import"./Rating-DroWCOnR.js";import"./Skeleton-BV_rDckR.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,yr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:g("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
