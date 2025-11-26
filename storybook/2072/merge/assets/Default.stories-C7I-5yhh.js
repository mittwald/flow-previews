import{j as r}from"./iframe-BZ309vyP.js";import{L as d}from"./Label-DaB9u04W.js";import{ar as i,as as l,v as u,g as T}from"./TimeField-XG7fVuks.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-P_wGPXL3.js";import"./mergeRefs-DOKtgXIl.js";import"./index-D_qUUaJn.js";import"./useLocalizedStringFormatter-D2Npicej.js";import"./context-B2ssQm4M.js";import"./ProgressBar-BUFkxRcJ.js";import"./utils-JyFk5TTa.js";import"./Hidden-Dy-Kvk-F.js";import"./filterDOMProps-i7L6S0l1.js";import"./Accordion-DBJYoG6f.js";import"./dynamic-BlbD8p9A.js";import"./Button-D_IowAzf.js";import"./IconWarning-DvQ_83sT.js";import"./Text-C4LG1QU9.js";import"./browser-6QOIIU7n.js";import"./EmulatedBoldText-BN5KbGVs.js";import"./LoadingSpinner-CP4vAouS.js";import"./Button-CF0FSAUf.js";import"./useFocusRing-BtfZpnq2.js";import"./useFocusable-CnzH4q2c.js";import"./Section-8HxUyc4l.js";import"./context-DqVMPo4j.js";import"./RSPContexts-CvJVTBp5.js";import"./Collection-Jfb5Oz2B.js";import"./CollectionBuilder-BxUVDWC-.js";import"./SelectionIndicator-B3TjwCoM.js";import"./Separator-Dgou7g2f.js";import"./useStatic-5dWEA-L1.js";import"./ActionGroup-DcCFpoHe.js";import"./Alert-DPsJkmhp.js";import"./AlertIcon-B-mY0RH1.js";import"./AlertBadge-R-mVKmEC.js";import"./Align-DS4_04QJ.js";import"./Popover-X1T8rxjL.js";import"./OverlayTrigger-D_yTwUd7.js";import"./TableFooterRow-CiOqHLtA.js";import"./SkeletonText-DFDkwTxU.js";import"./Avatar-B3lmaioZ.js";import"./AvatarStack-BG3RCwzr.js";import"./Badge--3MWN732.js";import"./BigNumber-BkKE9hXG.js";import"./Breadcrumb-B7PRg9RF.js";import"./Link-m-wa_u5M.js";import"./Heading-BsbQC_AI.js";import"./Legend-C53VbU31.js";import"./FileCardList-Uss-bJOP.js";import"./Image-K3vcbe26.js";import"./Color-DAFsRmWC.js";import"./Content-BkJWB-QG.js";import"./ContextualHelpTrigger-CvFvqIHG.js";import"./CounterBadge-FgsOg61J.js";import"./DonutChart-Cgkf9wPz.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DQqFYPly.js";import"./Header-_hwWlC9P.js";import"./Initials-CtNkodNC.js";import"./InlineCode-Dinyx0TJ.js";import"./PopoverTrigger-fvbDiyfk.js";import"./Separator-n_z7rKib.js";import"./Message-D2YQcln4.js";import"./MessageSeparator-DajKPYBq.js";import"./NavigationGroup-DO1RxFBf.js";import"./Notification-B0QimcaP.js";import"./NotificationProvider-CEg6afiq.js";import"./ProgressBar-DGfkaPcD.js";import"./Rating-BTXRmieV.js";import"./Skeleton-WCVj9B_-.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,yr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:g("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
