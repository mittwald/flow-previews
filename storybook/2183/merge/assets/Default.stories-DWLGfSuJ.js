import{j as r}from"./iframe-Br-RCPWN.js";import{L as d}from"./Label-BJkXaCeQ.js";import{at as i,au as l,v as u,g as T}from"./TimeField-BGRSwV-o.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CSAj95jw.js";import"./mergeRefs-DP0fvyvw.js";import"./index-DO8vOkwc.js";import"./useLocalizedStringFormatter-DcURVzAt.js";import"./context-Bc5k9Bh6.js";import"./ProgressBar-DLYSkAPs.js";import"./utils-Dak_ECAp.js";import"./Hidden-BWng0Hd6.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-hQD9PfV1.js";import"./dynamic-CeRu270G.js";import"./Button-D54g6t8r.js";import"./IconWarning-C1NRfwVV.js";import"./remote-Bo4xuhzH.js";import"./Text-CIylET5F.js";import"./browser-Dyp86VHf.js";import"./EmulatedBoldText-DiJCrkGJ.js";import"./LoadingSpinner-B0xf-tui.js";import"./Button-CoaZdKpJ.js";import"./useFocusRing-kD3u5y5H.js";import"./useFocusable-B6Sg882a.js";import"./Section-DJ8xVnwh.js";import"./context-De-RWUql.js";import"./RSPContexts-CI5k95q6.js";import"./Collection-DW1fpUON.js";import"./CollectionBuilder-BjAB2jGU.js";import"./SelectionIndicator-H4UlTQ5u.js";import"./Separator-WgOMTL7q.js";import"./useStatic-eGeAE8fm.js";import"./ActionGroup-Br-HBLHh.js";import"./Alert-Bb_4C7nc.js";import"./AlertIcon-Ci_dM1ct.js";import"./AlertBadge-DZwGkMpO.js";import"./Align-DfN4ymbR.js";import"./Popover-QdAZ89s_.js";import"./OverlayTrigger-D0y2BIl1.js";import"./TableFooterRow--YVmAQJL.js";import"./SkeletonText-DH8cB97o.js";import"./Avatar-CQV4Pag9.js";import"./AvatarStack-mpuF30DC.js";import"./Badge-AGFHXSuV.js";import"./BigNumber-BKnsR0fX.js";import"./Breadcrumb-Dn0ZcgHN.js";import"./Link-Cd6zxchg.js";import"./Heading-BOVN6eFE.js";import"./Legend-m_Z_E65H.js";import"./FileCardList-Cr1bdGd9.js";import"./Image-CX8OimUo.js";import"./Color-BM0XuHzd.js";import"./Content-B9XeZb2J.js";import"./ContextualHelpTrigger-DYkgoDVG.js";import"./CounterBadge-CiNfB30V.js";import"./DonutChart-BSut2oKM.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-jxwvzdOg.js";import"./Header-q2hXiR9Q.js";import"./Initials-2ZjSAOrE.js";import"./InlineCode-vkQ-McU7.js";import"./PopoverTrigger-B_oYUYip.js";import"./Separator-DOub_aiP.js";import"./Message-DH3zGPpQ.js";import"./MessageSeparator-Bc8NECux.js";import"./NavigationGroup-Buu17kA2.js";import"./Notification-B1zm2nBo.js";import"./NotificationProvider-h_8RrIcw.js";import"./ProgressBar-Di15BDR2.js";import"./Rating-BAfMiDeC.js";import"./Skeleton-NDiigi_I.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,Cr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:g("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},m={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},s={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props}>
      <Label>Time</Label>
      <FieldDescription>Enter a time</FieldDescription>
    </TimeField>
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props} defaultValue={new Time(11, 45)}>
      <Label>Time</Label>
    </TimeField>
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const vr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,t as Disabled,n as Granularity,c as MinMaxValue,a as Required,s as WithDefaultValue,m as WithFieldDescription,p as WithFieldError,vr as __namedExportsOrder,Cr as default};
