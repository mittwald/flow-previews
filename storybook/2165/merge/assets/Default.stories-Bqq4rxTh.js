import{j as r}from"./iframe-Clmt7jYU.js";import{L as d}from"./Label-D60DkhLa.js";import{ar as i,as as l,v as u,g as T}from"./TimeField-C0di3Y5z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cmcxz_BG.js";import"./mergeRefs-BVqKkfsA.js";import"./index-DiVEBKFG.js";import"./useLocalizedStringFormatter--ByhM2n4.js";import"./context-J-yaWB4J.js";import"./ProgressBar-D_4BHyIX.js";import"./utils-BaIVInUf.js";import"./Hidden-BZve3Xik.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-2-mRDe9S.js";import"./dynamic-ByO6kVlP.js";import"./Button-Cpx-qVCp.js";import"./IconWarning-CMDAZJGy.js";import"./Text-BQs7jhBI.js";import"./browser-BVazs59Q.js";import"./EmulatedBoldText-D5ywUyQZ.js";import"./LoadingSpinner-CenMvatO.js";import"./Button-MP-U6i_K.js";import"./useFocusRing-SBYuaUD7.js";import"./useFocusable-BgBMU_CS.js";import"./Section-D-4V5L53.js";import"./context-BbRYzAs6.js";import"./RSPContexts-BNhmdufL.js";import"./Collection-xRwg1v5k.js";import"./CollectionBuilder-kvAQOu82.js";import"./SelectionIndicator-Wyz_1aA8.js";import"./Separator-Cl_cENZa.js";import"./useStatic-Bnfhfmst.js";import"./ActionGroup-3f2mOrmo.js";import"./Alert-BgyTes7-.js";import"./AlertIcon-BuWV4Npm.js";import"./AlertBadge-B-cIikZ6.js";import"./Align-kP2wQykA.js";import"./Popover--yCHfjbQ.js";import"./OverlayTrigger-Ce8vZdG2.js";import"./TableFooterRow-Dn-FDhfn.js";import"./SkeletonText-Ox4-vvjw.js";import"./Avatar-Cap9qVE3.js";import"./AvatarStack-CyBZbnmd.js";import"./Badge-DSWTM4Cn.js";import"./BigNumber-K7d08C_A.js";import"./Breadcrumb-CW32JSiJ.js";import"./Link-Cdb-IjP9.js";import"./Heading-DOf1Gbjg.js";import"./Legend-DpHbpxDT.js";import"./FileCardList-C6knu-Gv.js";import"./Image-mYPdxUVA.js";import"./Color-C3WK5Ehq.js";import"./Content-BaHGf9op.js";import"./ContextualHelpTrigger-Dzc-OR_f.js";import"./CounterBadge-DOY94Zrr.js";import"./DonutChart-B4Pw1gDt.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-fPCU1kmj.js";import"./Header-geqBE9py.js";import"./Initials-C8rRxGXt.js";import"./InlineCode-DsrKBfEK.js";import"./PopoverTrigger-Bac14MEQ.js";import"./Separator-C0rYsohv.js";import"./Message-_byUr7fM.js";import"./MessageSeparator-aISn9Nk9.js";import"./NavigationGroup-DCJQpVuq.js";import"./Notification-jgdKyHAO.js";import"./NotificationProvider-DV-TZjHG.js";import"./ProgressBar-CKu71Xlr.js";import"./Rating-D3r7O8dK.js";import"./Skeleton-K56s_bs8.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,yr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:g("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
