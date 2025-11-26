import{j as r}from"./iframe-g-XFBo2M.js";import{L as d}from"./Label-C0aRk6NU.js";import{aw as i,ax as l,x as u,F as T}from"./Modal-HN7mUc_p.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BTFCKpJC.js";import"./index-Di8R43pA.js";import"./index-D0vwgSdS.js";import"./useLocalizedStringFormatter-Cyj6BGOX.js";import"./context-BmipQpJh.js";import"./ProgressBar-DLmwbc5V.js";import"./utils-BLpr0TUC.js";import"./Hidden-CbPhQWFj.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-y0BvrcCC.js";import"./context-MFH_cEi3.js";import"./Button-F2DpSCEE.js";import"./useFocusRing-0SVajdfI.js";import"./useFocusable-BhABskQh.js";import"./RSPContexts-FyZiT-dA.js";import"./Collection-wAduGIRO.js";import"./CollectionBuilder-DM14duJF.js";import"./SelectionIndicator-CoVhmIZH.js";import"./Separator-tfjl_R7-.js";import"./browser-aGtpEYpD.js";import"./useStatic-BQUJQZNk.js";import"./FileCardList-DoQkIDuX.js";import"./IconWarning-IhhFy3Bx.js";import"./Avatar-X3dATXB7.js";import"./AlertIcon-DJoeY47w.js";import"./Image-MSIXUbcy.js";import"./Text-vL1LV049.js";import"./EmulatedBoldText-weZy4b5C.js";import"./Link-CRZIDf5q.js";import"./Button-CgOKxPbj.js";import"./LoadingSpinner-hwBIUj3t.js";import"./ControlledNotification-COssbRo0.js";import"./Flex-Bsm0K3ZO.js";import"./Accordion-DgcwWYzu.js";import"./Section-BXzmDK8J.js";import"./ActionGroup-1WZPcRd7.js";import"./Alert-BdQYV_b8.js";import"./AlertBadge-K2HkqN1E.js";import"./Align-CusiQaMs.js";import"./AvatarStack-DseM1MNa.js";import"./BigNumber-CTRFWhZ2.js";import"./Breadcrumb-DygeFtpj.js";import"./Heading-D8TOp1jB.js";import"./Legend-OCWjJfVR.js";import"./Color-BlRFVK3w.js";import"./TableFooterRow-lK-uAiGD.js";import"./SkeletonText-CtpLmtNt.js";import"./Content-BwCOhlmF.js";import"./CounterBadge-C0r21egP.js";import"./DonutChart-BDWUAJsd.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-XlPrj5S3.js";import"./Header-C5E3rf3q.js";import"./Initials-B759V3Ss.js";import"./InlineCode-bJV2810L.js";import"./LayoutCard-DBrjjt1J.js";import"./Separator-KtU-Fy3c.js";import"./MessageSeparator-Dw1kKEgh.js";import"./NavigationGroup-Dgf5bfuu.js";import"./Notification-yM0bJJk7.js";import"./NotificationProvider-4So095Rx.js";import"./ProgressBar-Bj_6Z6Bp.js";import"./Rating-ci1cuaCo.js";import"./Skeleton-MXCSZONm.js";const{action:x}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:x("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
