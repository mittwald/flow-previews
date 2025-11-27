import{j as r}from"./iframe-7BcSOkL1.js";import{L as d}from"./Label-1f6WodcS.js";import{ar as i,as as l,v as u,g as T}from"./TimeField-CijeBcVc.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-T63dMOzs.js";import"./mergeRefs-O6Tz23YZ.js";import"./index-DFg9K6WW.js";import"./useLocalizedStringFormatter-mETPtdfy.js";import"./context-BxMgKMFE.js";import"./ProgressBar-LVm02CMO.js";import"./utils-CnXd-itf.js";import"./Hidden-BaJxX0T2.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-BgHobUJE.js";import"./dynamic-BRBd3S7h.js";import"./Button-BCb61ouP.js";import"./IconWarning-DFK7FPRm.js";import"./Text-sNy_JVUg.js";import"./browser-DkuKIMCf.js";import"./EmulatedBoldText-KFps1Djg.js";import"./LoadingSpinner-CQRWUrve.js";import"./Button-BRvXO2c0.js";import"./useFocusRing-dBoRO-LN.js";import"./useFocusable-WK7F_Oar.js";import"./Section-BM04QQ4S.js";import"./context-BY2qRpUu.js";import"./RSPContexts-VFAeT7fJ.js";import"./Collection-Nrq8gGX_.js";import"./CollectionBuilder-CIDh9Gu3.js";import"./SelectionIndicator-MGv3fhI5.js";import"./Separator-QlyzxrY4.js";import"./useStatic-DpF8IrGJ.js";import"./ActionGroup-FxuoPE1e.js";import"./Alert-BQNPh5ec.js";import"./AlertIcon-sj9HDcTQ.js";import"./AlertBadge-BLLOUyvy.js";import"./Align-aNcJd3ZC.js";import"./Popover-BpKg5fzM.js";import"./OverlayTrigger-CbmE6C3-.js";import"./TableFooterRow-C9n4XIk3.js";import"./SkeletonText-Dy0ubcCb.js";import"./Avatar-BAV3j3y8.js";import"./AvatarStack-C6ZLwmar.js";import"./Badge-CnwbPEBD.js";import"./BigNumber-BcqybdoX.js";import"./Breadcrumb-ffW0rgiH.js";import"./Link-BKHlTtzt.js";import"./Heading-B3rrQZdA.js";import"./Legend-C9JtvmWd.js";import"./FileCardList-SRvmN5kn.js";import"./Image-hgYl8lpC.js";import"./Color-DwtLdQ8R.js";import"./Content-7kAZ-hbm.js";import"./ContextualHelpTrigger-BM0OhULK.js";import"./CounterBadge-D-e_4-L-.js";import"./DonutChart-C7Yxj0ZB.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DEBLlaTe.js";import"./Header-C14rp7oJ.js";import"./Initials-DHljFpPT.js";import"./InlineCode-Cn06tSfu.js";import"./PopoverTrigger-CWou1-Xt.js";import"./Separator-BAEfiZhs.js";import"./Message-BYi7izf0.js";import"./MessageSeparator-l1p35Wzt.js";import"./NavigationGroup-C79N-DNU.js";import"./Notification-ClV3UBCJ.js";import"./NotificationProvider-CbODtqmP.js";import"./ProgressBar-BfuFFwrF.js";import"./Rating-BqxzbIze.js";import"./Skeleton-DuvA9UgZ.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,yr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:g("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
