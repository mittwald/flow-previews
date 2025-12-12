import{j as r}from"./iframe-Cun9xEvG.js";import{L as d}from"./Label-TZZHTJSd.js";import{ar as i,as as l,v as u,g as T}from"./TimeField-BGefC99t.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cd0rcWBc.js";import"./mergeRefs-BXtjeRnl.js";import"./index-Bf8buJG0.js";import"./useLocalizedStringFormatter-BWJekubh.js";import"./context-CTkEoG47.js";import"./ProgressBar-c76aO61i.js";import"./utils-S5M_7oVk.js";import"./Hidden-BJOAuytn.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-Cdni6XcU.js";import"./dynamic-Bm0M0-O-.js";import"./Button-Be9JkCpV.js";import"./IconWarning-CPVRn4jW.js";import"./remote-BgISxXks.js";import"./Text-46CNKReN.js";import"./browser-BgnuhwhB.js";import"./EmulatedBoldText-2bJ0isTU.js";import"./LoadingSpinner-BiAtSGtu.js";import"./Button-D2k4TCQe.js";import"./useFocusRing-DD5EcUfr.js";import"./useFocusable-C8NsMmkc.js";import"./Section-DpYYQ4ld.js";import"./context-DiBM2o-y.js";import"./RSPContexts-DVf4IkrV.js";import"./Collection-Tg2L3ks0.js";import"./CollectionBuilder-CdiRFq1v.js";import"./SelectionIndicator-MYqiPo_p.js";import"./Separator-CR4CvoS_.js";import"./useStatic-fkJ5iy3g.js";import"./ActionGroup-CgFwCvu8.js";import"./Alert-4wPBFwsv.js";import"./AlertIcon-BYwbyTte.js";import"./AlertBadge-CvD56Z7r.js";import"./Align-B9GNgo2e.js";import"./Popover-5hFlpbJ0.js";import"./OverlayTrigger-DKCqdxLC.js";import"./TableFooterRow-003QdVoj.js";import"./SkeletonText-CmWS1NKM.js";import"./Avatar-JpJgtP-K.js";import"./AvatarStack-CbaO4bzk.js";import"./Badge-EPhAECZq.js";import"./BigNumber-BNm1-qZc.js";import"./Breadcrumb-DoQvOC0E.js";import"./Link-C9__0RQZ.js";import"./Heading-Bz0fxZKP.js";import"./Legend-C6YyRaO2.js";import"./FileCardList-DwvB7YNF.js";import"./Image-8vZX0aCN.js";import"./Color-BXoGRGl8.js";import"./Content-dmvs88C5.js";import"./ContextualHelpTrigger-2IHKY-I1.js";import"./CounterBadge-uqhuCsZh.js";import"./DonutChart-Cj-oFqap.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CpOeYIRy.js";import"./Header-xba_U-tz.js";import"./Initials-BQFGk1hN.js";import"./InlineCode-Cy0P-BMe.js";import"./PopoverTrigger-Cx-yVyab.js";import"./Separator-DEE4s9X8.js";import"./Message-Dm2-PPq3.js";import"./MessageSeparator-5qm7ji2U.js";import"./NavigationGroup-yrrTCNaJ.js";import"./Notification-CPdts9a5.js";import"./NotificationProvider-J10LZgU2.js";import"./ProgressBar-BnIkde9y.js";import"./Rating-Cz8jym0U.js";import"./Skeleton-D4LiAhc6.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,Cr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:g("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const vr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,t as Disabled,n as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,s as WithFieldDescription,p as WithFieldError,vr as __namedExportsOrder,Cr as default};
