import{j as r}from"./iframe-DjMRZ933.js";import{L as d}from"./Label-DE4OEFg-.js";import{ar as i,as as l,w as u,g as T}from"./TimeField-B0eJEEhW.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dfc22Cns.js";import"./mergeRefs-ktNCKXcN.js";import"./index-CdoC4W9G.js";import"./useLocalizedStringFormatter-D2Pb0dlM.js";import"./context-CMNm5Xu1.js";import"./ProgressBar-B_WWkX7i.js";import"./utils-ChD4yM7Z.js";import"./Hidden-C2WyT6w-.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-BZmsZnOt.js";import"./dynamic-xmc70gpV.js";import"./Button-DcZikGPu.js";import"./IconWarning-15BQJDPi.js";import"./Text-HqedTJ3_.js";import"./browser-CRatz6fZ.js";import"./EmulatedBoldText-B3brdLrg.js";import"./LoadingSpinner-fSHKWhSv.js";import"./Button-CVSjku2L.js";import"./useFocusRing-CsWAde4M.js";import"./useFocusable-DMUCbXde.js";import"./Section-Cfn_XoWh.js";import"./context-o3mGNPxn.js";import"./RSPContexts-xVWKxYWV.js";import"./Collection-N-WMj8Hm.js";import"./CollectionBuilder-B6_gBvnz.js";import"./SelectionIndicator-Be-dMYOv.js";import"./Separator-CDRx1yir.js";import"./useStatic-CBLHZfUJ.js";import"./getActionGroupSlot-CJeZWLnB.js";import"./ActionGroup-7rrFpHFJ.js";import"./Alert-BcobEuUM.js";import"./AlertIcon-DmCm2LWR.js";import"./AlertBadge-CHwJpuCJ.js";import"./Align-BzDEdRIo.js";import"./Popover-C5QNOwBo.js";import"./OverlayTrigger-CrRJgUZu.js";import"./TableFooterRow-B6PT5pbR.js";import"./SkeletonText-CI93CBea.js";import"./Avatar-BB63liah.js";import"./AvatarStack-B8FhdVad.js";import"./Badge-BN0x96Ky.js";import"./BigNumber-BSqhFP9i.js";import"./Breadcrumb-nMuJg0z4.js";import"./Link-ejox3cBD.js";import"./Heading-BgHZ1ILD.js";import"./Legend-DF5rtCao.js";import"./FileCardList-TQMS-z_x.js";import"./Image-wUfga1_8.js";import"./Color-BWZ1Dr8p.js";import"./Content-Bcc-jBqm.js";import"./ContextualHelpTrigger-CYoOPEVY.js";import"./CounterBadge-CAliY95s.js";import"./DonutChart-DDKsyr_O.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CrAWYJ7k.js";import"./Header-DCu3M0y9.js";import"./Initials-TwtEiJm8.js";import"./InlineCode-CKS5wrww.js";import"./PopoverTrigger-DbAiM7NS.js";import"./Separator-sHJV27kT.js";import"./Message-DoIB20zo.js";import"./MessageSeparator-l8_oHDYV.js";import"./NavigationGroup-DRmGCyXC.js";import"./Notification-DGagkD2g.js";import"./NotificationProvider-BQSRGQyP.js";import"./ProgressBar-BaViBzGB.js";import"./Rating-CYR_1TdL.js";import"./Skeleton-IgaQ_QZW.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,Cr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:g("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Ir=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,t as Disabled,n as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,s as WithFieldDescription,p as WithFieldError,Ir as __namedExportsOrder,Cr as default};
