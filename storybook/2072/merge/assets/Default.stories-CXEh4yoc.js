import{j as r}from"./iframe-Bro-TRXt.js";import{L as d}from"./Label-pkq-FNbp.js";import{aw as i,ax as l,x as u,F as T}from"./Modal-BAz5qoSA.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CGhBjY7C.js";import"./index-BTAhO2ke.js";import"./index-Dv_aaVf5.js";import"./useLocalizedStringFormatter-7nMsqE9H.js";import"./context-oX2aAP76.js";import"./ProgressBar--uLuv8cx.js";import"./utils-D8amqiwx.js";import"./Hidden-B42NMqJG.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-DkblynAy.js";import"./context-DwPS9Zpq.js";import"./Button-DWgdDAXN.js";import"./useFocusRing-D0VZgEB2.js";import"./useFocusable-CZGxuR_3.js";import"./RSPContexts-Wp0EcsrM.js";import"./Collection-CYc71k62.js";import"./CollectionBuilder-CI1hg_cw.js";import"./SelectionIndicator-D-s_o7Qk.js";import"./Separator-BuskP0K-.js";import"./browser-BxJL1VR2.js";import"./useStatic-D7gqpLQ0.js";import"./FileCardList-BvhGAyCg.js";import"./IconWarning-ZXxnaCRz.js";import"./Avatar-CpIxO7l4.js";import"./AlertIcon-BdNXmUtu.js";import"./Image-Bz5j-oXf.js";import"./Text-B-OG_Rvj.js";import"./EmulatedBoldText-CJ_mmdOc.js";import"./Link-B4JntqcC.js";import"./Button-BNo0n626.js";import"./LoadingSpinner--4B2tKnD.js";import"./ControlledNotification-DXrTnOuI.js";import"./Flex-T77zVCqz.js";import"./Accordion-DhsRg8DT.js";import"./Section-CKMH18Z5.js";import"./ActionGroup-z-m9HiSR.js";import"./Alert-rw15k5_3.js";import"./AlertBadge-BSU1Y84l.js";import"./Align-CRqQdHdC.js";import"./AvatarStack-Hi6fzEFf.js";import"./BigNumber-CuSywnor.js";import"./Breadcrumb-B3OUi1q-.js";import"./Heading-Dja--NLn.js";import"./Legend-BF5dTZhq.js";import"./Color-BbW_7Fl-.js";import"./TableFooterRow-BWpGavXP.js";import"./SkeletonText-C_FVkMiy.js";import"./Content-DoFaAGQT.js";import"./CounterBadge-DnkcQuYH.js";import"./DonutChart-CGXbZnO6.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BMKLJb1J.js";import"./Header-BBPSlw9V.js";import"./Initials-DpnqvnKg.js";import"./InlineCode-Cs1b_Cap.js";import"./LayoutCard-DTXM4eOW.js";import"./Separator-CYXscYsC.js";import"./MessageSeparator-D0goDhVZ.js";import"./NavigationGroup-6he7-QRX.js";import"./Notification-C1IUJMls.js";import"./NotificationProvider-BO0E7EIH.js";import"./ProgressBar-Cn62z-v9.js";import"./Rating-DnR4ClCl.js";import"./Skeleton-NzyvVlYM.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:x("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
