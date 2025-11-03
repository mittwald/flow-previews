import{j as r}from"./iframe-C__sNFq5.js";import{L as d}from"./Label-DR9idq0T.js";import{ah as i,ai as l,p as u,F as T}from"./Modal-CVYufIfq.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-0GXkR_Ju.js";import"./index-DiaLXgZW.js";import"./index-BmGDZeJ3.js";import"./useLocalizedStringFormatter-BUptx6fZ.js";import"./context-CMi9l8Yg.js";import"./ProgressBar-DtGgBXAS.js";import"./utils-Dqy6LFYQ.js";import"./Hidden-BiQxXG9U.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-Bb5SDKXs.js";import"./Popover-CT_v-Oh-.js";import"./context-BsIjwuj0.js";import"./useStatic-DMsmAY9f.js";import"./OverlayTrigger-AiOoKC_G.js";import"./Dialog-CzLU07Qv.js";import"./Button-B_7NxfoI.js";import"./useFocusRing-BuunXMoE.js";import"./useFocusable-Dse99QZ8.js";import"./RSPContexts-BMxPkdv6.js";import"./OverlayArrow-DhgMASFr.js";import"./useControlledState-2e7yt8gr.js";import"./Collection-Dh0ESm_f.js";import"./CollectionBuilder-ukVkSTyS.js";import"./SelectionIndicator-Cki_l3jq.js";import"./Separator-D0XClCWV.js";import"./browser-iGgi6T92.js";import"./ControlledNotification-BlGPMSZv.js";import"./ClearPropsContextView-COiHjqok.js";import"./LoadingSpinner-B1HBgs-9.js";import"./IconWarning-BuzGzrbs.js";import"./Button-BDJI0X8N.js";import"./Text--GxX46L7.js";import"./EmulatedBoldText-Bh8SXQjk.js";import"./LayoutCard-B7t6mB7x.js";import"./Accordion-DR_OJ6pu.js";import"./Action-Df161gDF.js";import"./getActionGroupSlot-BDjKjWbN.js";import"./ActionGroup-BWUqf9tM.js";import"./Alert-CJasCYlq.js";import"./AlertIcon-w10mi-p6.js";import"./AlertBadge-D7vd76yD.js";import"./Align-DvvbrgAg.js";import"./TableFooterRow-Cam8SBFP.js";import"./SkeletonText-1eA6SUsS.js";import"./Avatar-BkbL9sxv.js";import"./AvatarStack-DBHsyjKm.js";import"./Badge-B6qVV2lP.js";import"./BigNumber-BInmMnEz.js";import"./Breadcrumb-BxuxEs4j.js";import"./Link-cdZD4X3X.js";import"./Heading-Cn6OX0c5.js";import"./Legend-DMNYYUF7.js";import"./FileCardList-v2rqfv4w.js";import"./Image-DmU9vLsf.js";import"./CodeBlock-CbuVyytm.js";import"./CopyButton-w1aIFwyN.js";import"./Tooltip-QyrtVdEX.js";import"./react-children-utilities-k_yO7uGU.js";import"./Color-D1Dr3OHg.js";import"./Content-DpPWD-Cp.js";import"./Section-DnBUHG3h.js";import"./ContextualHelpTrigger-vUCASUlH.js";import"./CounterBadge-XDXXDWA7.js";import"./DonutChart-DiBE5F-C.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CZRqwcLx.js";import"./Header-BPnKGcIM.js";import"./Initials-BXM7Ff8o.js";import"./InlineCode-lIDroPmY.js";import"./LabeledValue-C0ZDjUhX.js";import"./PopoverTrigger-COcD_xjf.js";import"./Markdown-BbO5I6sS.js";import"./Separator-BbWjorNE.js";import"./Message-DpVEFVCo.js";import"./MessageSeparator-RW6cIBlZ.js";import"./NavigationGroup-yfAk-3tQ.js";import"./Notification-CZmN3Sfg.js";import"./NotificationProvider-DH0treXt.js";import"./ProgressBar-DI6Na1m9.js";import"./Rating-B5RSuqz4.js";import"./Skeleton-UTn3OGNP.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:h("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},a={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},s={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props}>
      <Label>Time</Label>
      <FieldDescription>Enter a time</FieldDescription>
    </TimeField>
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props} defaultValue={new Time(11, 45)}>
      <Label>Time</Label>
    </TimeField>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props} isInvalid isRequired>
      <Label>Time</Label>
      <FieldError>Time is required</FieldError>
    </TimeField>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    granularity: "hour"
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    minValue: new Time(8, 0),
    maxValue: new Time(16, 0)
  }
}`,...c.parameters?.docs?.source}}};const Jr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,t as Disabled,n as Granularity,c as MinMaxValue,m as Required,a as WithDefaultValue,p as WithFieldDescription,s as WithFieldError,Jr as __namedExportsOrder,Hr as default};
