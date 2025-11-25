import{j as r}from"./iframe-Dswl8YqW.js";import{L as d}from"./Label-CMIuj4QW.js";import{av as i,aw as l,x as u,F as T}from"./Modal-CHITtey4.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DO1FM96o.js";import"./index-BTqTpX_p.js";import"./index-DoB2isID.js";import"./useLocalizedStringFormatter-5OU1qxVX.js";import"./context-DC5A8m43.js";import"./ProgressBar-DCPiQQ-S.js";import"./utils-7BbO5OC0.js";import"./Hidden-BdIsYl6c.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-DeI_eRCJ.js";import"./context-BYCR6GGl.js";import"./Button-CdXhm7oQ.js";import"./useFocusRing-D1ZNAk-m.js";import"./useFocusable-0yY0J0Je.js";import"./RSPContexts-CB74f7ZL.js";import"./Collection-B4F75Snj.js";import"./CollectionBuilder-DGx6CCpB.js";import"./SelectionIndicator-Dtzr_iAT.js";import"./Separator-Cr7pfpci.js";import"./browser-BqLtz9Zq.js";import"./useStatic-DgEZfjHg.js";import"./FileCardList-C3qXU2FS.js";import"./IconWarning-Dt5PaZc0.js";import"./Avatar-BvulIpzL.js";import"./AlertIcon-BGEjgne8.js";import"./Image-CfXDNzs_.js";import"./Text-CuuEScv1.js";import"./EmulatedBoldText-BY5a05VQ.js";import"./Link-2_MM-8En.js";import"./Button-BlDvIS3Y.js";import"./LoadingSpinner-B_hOay2Z.js";import"./ControlledNotification-Cdu3NdkW.js";import"./Flex-gFiBBQt8.js";import"./Accordion-CBu_vh4u.js";import"./Section-B6yNflVq.js";import"./ActionGroup-DkHaLZ1F.js";import"./Alert-CNX0ngss.js";import"./AlertBadge-B2_vNTeY.js";import"./Align-BEZzEcxr.js";import"./AvatarStack-3d66Tqwb.js";import"./BigNumber-BpLWNUn0.js";import"./Breadcrumb-CnsXUeFp.js";import"./Heading-iCy8jlSp.js";import"./Legend-B16hb8ja.js";import"./Color-DDNTz8fh.js";import"./TableFooterRow-yZ5uWtqT.js";import"./SkeletonText-BgIZOvmp.js";import"./Content-Bv_VrsCP.js";import"./CounterBadge-DDPT3yFh.js";import"./DonutChart-CtVmhw8J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D_Xe6Xjh.js";import"./Header-BsG4AfeO.js";import"./Initials-DNzmwkQ0.js";import"./InlineCode-CMg57_NI.js";import"./LayoutCard-CAbUZ4z8.js";import"./Separator-sjczDa9g.js";import"./MessageSeparator-syCyyNp_.js";import"./NavigationGroup-Bhn5LtSm.js";import"./Notification-D9qeLTJG.js";import"./NotificationProvider-DdTUSSU-.js";import"./ProgressBar-D1AqnunX.js";import"./Rating-CrsgcNUp.js";import"./Skeleton-BJgfwKrL.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:g("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},a={args:{isRequired:!0}},s={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
