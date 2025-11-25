import{j as r}from"./iframe-kjkHkmuG.js";import{L as d}from"./Label-Ca0botOM.js";import{av as i,aw as l,x as u,F as T}from"./Modal-0bgB5MJd.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CipIzjpW.js";import"./index-CkW5Yidx.js";import"./index-Ce5Nlxxb.js";import"./useLocalizedStringFormatter-CWdDsDMk.js";import"./context-DKZTM6pY.js";import"./ProgressBar-SgmdiFAI.js";import"./utils-uJ4-NNRC.js";import"./Hidden-C9LFy0Lp.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-BmAGjafL.js";import"./context-DelhS3-G.js";import"./Button-CPb8XJRj.js";import"./useFocusRing-CunmVmWl.js";import"./useFocusable-DMxxipCc.js";import"./RSPContexts-1NZhJNvl.js";import"./Collection-BGAg5cVl.js";import"./CollectionBuilder-C24jMLh-.js";import"./SelectionIndicator-2ey5txuw.js";import"./Separator-_AMhP75A.js";import"./browser-i7jAx1Fh.js";import"./useStatic-BQelcXwM.js";import"./FileCardList-ByOMDCHV.js";import"./IconWarning-CMakOX5C.js";import"./Avatar-C1lRJ6tW.js";import"./AlertIcon-CX0jvCdY.js";import"./Image-DvlLXzm2.js";import"./Text-D4QcDsPt.js";import"./EmulatedBoldText-CsxaKUEU.js";import"./Link-DZXgz7Xp.js";import"./Button-B7VtDimI.js";import"./LoadingSpinner-CCMWfn-z.js";import"./ControlledNotification-BqK55IK0.js";import"./Flex-CV-Pkpn9.js";import"./Accordion-BfFjMQFD.js";import"./Section-Di6ereWQ.js";import"./ActionGroup-B72bwf7M.js";import"./Alert-LMEN0RsN.js";import"./AlertBadge-2LtFU-Ml.js";import"./Align-BH2-KQDB.js";import"./AvatarStack-TOOiI3ZS.js";import"./BigNumber-DN_nWYcY.js";import"./Breadcrumb-BoOjDcq4.js";import"./Heading-C6qiLJW3.js";import"./Legend-YpQaLltb.js";import"./Color-D_EMm2-c.js";import"./TableFooterRow-Dy9Hm7Fq.js";import"./SkeletonText-C_hFxFJ1.js";import"./Content-DOMtlypw.js";import"./CounterBadge-DpRVMejc.js";import"./DonutChart-OsMTrpsW.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bso8HKFb.js";import"./Header-BMOLLcii.js";import"./Initials-IMjMZZM4.js";import"./InlineCode-DGV_Qs_a.js";import"./LayoutCard-BdOAhJjJ.js";import"./Separator-DpLhRQNb.js";import"./MessageSeparator-JWDNOqbY.js";import"./NavigationGroup-CNQzbtXt.js";import"./Notification-DusdwtWV.js";import"./NotificationProvider-D3VY9NtU.js";import"./ProgressBar-Dx3EHT7v.js";import"./Rating-hlP75Uf2.js";import"./Skeleton-C4RIhoE3.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:g("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
