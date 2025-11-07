import{j as r}from"./iframe-C_rr3K7B.js";import{L as d}from"./Label-vkrcFW64.js";import{ai as i,aj as l,p as u,F as T}from"./Modal-BJ-aQIK6.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B_W8EGz8.js";import"./index-BuJm22LX.js";import"./index-BjYnWwux.js";import"./useLocalizedStringFormatter-D9q7PMDi.js";import"./context-CfcUR6DZ.js";import"./ProgressBar-BfFuAkhC.js";import"./utils-C4h6fUQR.js";import"./Hidden-BRyX-IhD.js";import"./filterDOMProps-i7L6S0l1.js";import"./dynamic-BFlSKedW.js";import"./Popover-C6S62YvO.js";import"./context-D3P4luPW.js";import"./useStatic-BCUpaw5v.js";import"./OverlayTrigger-Bcj7IRSG.js";import"./Dialog-YSlPVfGO.js";import"./Button-B3n1VqY_.js";import"./useFocusRing-BdtY4hiP.js";import"./useFocusable-BgYFD5eH.js";import"./RSPContexts-zcKIqYdj.js";import"./OverlayArrow-RRaewUl9.js";import"./useControlledState-D5USuG2w.js";import"./Collection-CoTlEKMj.js";import"./CollectionBuilder-DkbboSd2.js";import"./SelectionIndicator-D9WeA2Ww.js";import"./Separator-D4h-iSnJ.js";import"./browser-E0G6tvzo.js";import"./ControlledNotification-DUF7vXg5.js";import"./ClearPropsContextView-BMWVcOQ4.js";import"./LoadingSpinner-CRVrq6rR.js";import"./IconWarning-DU_TTROa.js";import"./Button-DCjyK8f2.js";import"./Text-BsSJXbbR.js";import"./EmulatedBoldText-C3mdhbnh.js";import"./LayoutCard-8_hd1wkR.js";import"./Accordion-6HjJt4r7.js";import"./Action-CIZ0694o.js";import"./getActionGroupSlot-BxvOG7b1.js";import"./ActionGroup-DsFsbzBm.js";import"./Alert-BSB-fYgU.js";import"./AlertIcon-iBCzN4pZ.js";import"./AlertBadge-DHbgVCiz.js";import"./Align-C5z7nPeq.js";import"./TableFooterRow-DXFd1_i9.js";import"./SkeletonText-DfID-jhr.js";import"./Avatar-BOkLjthK.js";import"./AvatarStack-CO_AH2VC.js";import"./Badge-C80oNvTr.js";import"./BigNumber-B_HOaw1W.js";import"./Breadcrumb-C4lBjv75.js";import"./Link-RtgN4cbU.js";import"./Heading-zxknCt_n.js";import"./Legend-Cfy0QGqD.js";import"./FileCardList-UHBGSkAH.js";import"./Image-D6oez4WD.js";import"./CodeBlock-XVb8pDFG.js";import"./CopyButton-ClrMNUuq.js";import"./Tooltip-GUcZ5Baq.js";import"./react-children-utilities-DT9uJVie.js";import"./Color-PNql-Ck2.js";import"./Content-RrSqeXWH.js";import"./Section-Bi-R-_iR.js";import"./ContextualHelpTrigger-Cf4bGUz3.js";import"./CounterBadge-CiLO3wd7.js";import"./DonutChart-BMa5iWRZ.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DCbHKh1j.js";import"./Header-BW42WVk0.js";import"./Initials-CjZUsWxi.js";import"./InlineCode-DkUomSPt.js";import"./LabeledValue-CDQ_6OLg.js";import"./PopoverTrigger-BmTXQmKy.js";import"./Markdown-BGldsMFH.js";import"./Separator-BXsRa8Lp.js";import"./Message-BzZ2-vNa.js";import"./MessageSeparator-slNvzfna.js";import"./NavigationGroup-Ch7Q2DeX.js";import"./Notification-BtUIO_Xq.js";import"./NotificationProvider-Buvl5LDa.js";import"./ProgressBar-Ck_QTNWr.js";import"./Rating-CNdcbfDe.js";import"./Skeleton-7WPy-KOc.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:g("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},t={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},a={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},s={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
