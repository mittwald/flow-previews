import{j as r}from"./iframe-tJv_x5rY.js";import{L as d}from"./Label-RjTzOsfv.js";import{av as i,aw as l,x as u,F as T}from"./Modal-C5nUCLYg.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BVSszHbm.js";import"./index-CMtXtWIZ.js";import"./index-zslH_nwp.js";import"./useLocalizedStringFormatter-CiAHydpr.js";import"./context-DzrJfCbv.js";import"./ProgressBar-DMZ3QrgP.js";import"./utils-CzbxkoY8.js";import"./Hidden-CHKvPT1V.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-D0IhEVDX.js";import"./context-B6V5mJe_.js";import"./Button-DANMsRvu.js";import"./useFocusRing-Dd-6aCTP.js";import"./useFocusable-Cd_sv4rm.js";import"./RSPContexts-B20KOh4s.js";import"./Collection-avSZv3ZD.js";import"./CollectionBuilder-SdndXulF.js";import"./SelectionIndicator-tJZm1Uu-.js";import"./Separator-PZWkpAPz.js";import"./browser-TdwBVE6G.js";import"./useStatic-ChHmkVJf.js";import"./FileCardList-xvc84fPF.js";import"./IconWarning-3nJf9pka.js";import"./Avatar-DCjhmqbI.js";import"./AlertIcon-BmIRgy9X.js";import"./Image-BsEx4Gyw.js";import"./Text-Dguu0ahS.js";import"./EmulatedBoldText-BtPGtFYn.js";import"./Link-CNQmH85M.js";import"./Button-BFrhyxcx.js";import"./LoadingSpinner-Bcrzivl8.js";import"./ControlledNotification-Bf-cHYr4.js";import"./LayoutCard-FaDrJ9hh.js";import"./Accordion-BkjCzJbI.js";import"./Section-C3zFkOR2.js";import"./getActionGroupSlot-Bx9-2150.js";import"./ActionGroup-ofmp5p0b.js";import"./Alert-BSKDhqn2.js";import"./AlertBadge-DwpbJvbe.js";import"./Align-CwffRYKZ.js";import"./AvatarStack-Dk_NcqSD.js";import"./BigNumber-CVotIBh9.js";import"./Breadcrumb-CqycGyzj.js";import"./Heading-DBV7hltH.js";import"./Legend-DwZKxd2C.js";import"./Color-DCrxZZxn.js";import"./TableFooterRow-CTXom9Ef.js";import"./SkeletonText-D85nAxtU.js";import"./Content-B6i-pyoJ.js";import"./CounterBadge-C7SQltDy.js";import"./DonutChart-BF3qOkbv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D5HLqNns.js";import"./Header-DsWh8L6x.js";import"./Initials-WnEx4zz5.js";import"./InlineCode-B62lvli0.js";import"./Separator-CYyKLl0S.js";import"./MessageSeparator-DELmev1y.js";import"./NavigationGroup-DtKUP1MG.js";import"./Notification-kUETDS4p.js";import"./NotificationProvider-Cl16zYR0.js";import"./ProgressBar-4Q8djMZo.js";import"./Rating-BBipw1Rp.js";import"./Skeleton-DtEBxlD8.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:g("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
