import{j as r}from"./iframe-QYf_yreC.js";import{L as d}from"./Label-DkpOuIpZ.js";import{aw as i,ax as l,x as u,F as T}from"./Modal-BZuSJnKZ.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BlD0f313.js";import"./index-DrqlcLhB.js";import"./index-Dl4zJFgP.js";import"./useLocalizedStringFormatter-BSKtfzGO.js";import"./context-DoHwa-Uz.js";import"./ProgressBar-BpNDlZ7L.js";import"./utils-9temXcui.js";import"./Hidden-D4BgLsni.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-DxvJo010.js";import"./context-BGZffbOF.js";import"./Button-BY7Kz_qM.js";import"./useFocusRing-CKFComO5.js";import"./useFocusable-Bm9MC9Cg.js";import"./RSPContexts-CQ49TXVP.js";import"./Collection-DjuEe1dE.js";import"./CollectionBuilder-Ce2bTmZV.js";import"./SelectionIndicator-DHFL4Bc-.js";import"./Separator-DJyRay3v.js";import"./browser-BbcMJkiW.js";import"./useStatic-CgWt-Vtk.js";import"./FileCardList-DTUmUWf5.js";import"./IconWarning-CJ0iL8xC.js";import"./Avatar-B_ln5OAs.js";import"./AlertIcon-DGipYwqO.js";import"./Image-CSQDDycD.js";import"./Text-DYo1hnMM.js";import"./EmulatedBoldText-BUtEOorO.js";import"./Link-VGOGyvf3.js";import"./Button-ClcJ4r4J.js";import"./LoadingSpinner-DyzLehc_.js";import"./ControlledNotification-CA1OLKqo.js";import"./Flex-FeaqVm2Q.js";import"./Accordion-QaDyvb9t.js";import"./Section-B2DHZKCC.js";import"./ActionGroup-CNS7lIAN.js";import"./Alert-bj_Y0zgx.js";import"./AlertBadge-ClDIorBf.js";import"./Align-B8IK4Kvb.js";import"./AvatarStack-S7hrW2Du.js";import"./BigNumber-Ct2H2kB1.js";import"./Breadcrumb-B5Ha9Tr5.js";import"./Heading-Ztp4MNID.js";import"./Legend-BN69fYiw.js";import"./Color-Bp6xg0fX.js";import"./TableFooterRow-DqL_vA4D.js";import"./SkeletonText-DntNO9xb.js";import"./Content-ysq6PY7h.js";import"./CounterBadge-CnGG8oCU.js";import"./DonutChart-Bw-cC5fd.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CrN3wwhj.js";import"./Header-NzTBG9RN.js";import"./Initials-D93mZZQg.js";import"./InlineCode-Y0cx0rl0.js";import"./LayoutCard-C6WMVQDl.js";import"./Separator-vqPdnx36.js";import"./MessageSeparator-C5w9jueb.js";import"./NavigationGroup-DrewGvf7.js";import"./Notification-Dfr21Mg6.js";import"./NotificationProvider-Cnm_GiLp.js";import"./ProgressBar-D7-_y3N0.js";import"./Rating-4NQ2FU04.js";import"./Skeleton-CnrauAdF.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:x("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
