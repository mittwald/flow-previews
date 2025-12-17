import{j as r}from"./iframe-Dk60Gpin.js";import{N as t,v as c,g}from"./TimeField-4D5Nhq3P.js";import{L as o}from"./Label-DRmbs-HY.js";import{C as x,a as b}from"./ContextualHelpTrigger-3ee7SYMq.js";import{B as h}from"./Button-BaFAPk6P.js";import{T as F}from"./Text-BbMQM1DG.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-BdZs02Td.js";import"./mergeRefs-MJGqjKNq.js";import"./index-DJhA7Wui.js";import"./clsx-B-dksMZM.js";import"./Accordion--PiuPE_9.js";import"./dynamic-4gi8GiXC.js";import"./IconWarning-BTcUjjec.js";import"./Section-CoeixnSJ.js";import"./context-BthpMtM5.js";import"./Button-BnOkCogS.js";import"./utils-Ch0ZZJ4D.js";import"./ProgressBar-D9iry1uY.js";import"./Hidden-D3Wnlg7j.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-fp4w0YcD.js";import"./useFocusRing-BRWpt41V.js";import"./useFocusable-BjdDuCYq.js";import"./RSPContexts-CVMXvjX8.js";import"./Collection-BeF55kv5.js";import"./CollectionBuilder-B_txidaV.js";import"./SelectionIndicator-Dw3nAwCY.js";import"./Separator-CD2VJwjG.js";import"./browser-BvxtBXb9.js";import"./useLocalizedStringFormatter-Bc2xZT0_.js";import"./useStatic-CwfWB48x.js";import"./ActionGroup-Dtx1HegN.js";import"./Alert-eguRclW1.js";import"./AlertIcon-BvG3TXg-.js";import"./AlertBadge-Ci3q7ONa.js";import"./Align-otZVcDBU.js";import"./Popover-DUzfCkJT.js";import"./OverlayTrigger-D41F-SKL.js";import"./TableFooterRow-ZiMRcLMp.js";import"./SkeletonText-BdDEip2O.js";import"./Avatar-uhIZWmRw.js";import"./AvatarStack-Ce0OtoHB.js";import"./Badge-Ci0_YhS-.js";import"./BigNumber-D_1n_f24.js";import"./Breadcrumb-DTmlwgi3.js";import"./Link-Bk7l3Hhl.js";import"./Heading-BClLfS9l.js";import"./Legend-lyiM8tnC.js";import"./FileCardList-z1TOLFrB.js";import"./Image-BFIYVrgb.js";import"./Color-CuKRh3Mj.js";import"./Content-qRe1c-jG.js";import"./CounterBadge-DvjVQF88.js";import"./DonutChart-DxQSNKcp.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-B1AdWPYh.js";import"./Header-C1g8Z3mN.js";import"./Initials-BwxHVFlG.js";import"./InlineCode-DeaiiFf1.js";import"./PopoverTrigger-aEhJpWUL.js";import"./LoadingSpinner-BDrvrciy.js";import"./Separator-DpLqTccG.js";import"./Message-DgNLVg8a.js";import"./MessageSeparator-CqkN_4jq.js";import"./NavigationGroup-BNi9xF1W.js";import"./Notification-BYPtdgjX.js";import"./NotificationProvider-DbUFBJzc.js";import"./ProgressBar-BAxPsWQD.js";import"./Rating-CiM8MErc.js";import"./Skeleton-DAWVrv5Y.js";import"./EmulatedBoldText-BXENtjIV.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,vr={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>
        Age
        <ContextualHelpTrigger>
          <Button ariaSlot={null} />
          <ContextualHelp>
            <Text>Enter your age</Text>
          </ContextualHelp>
        </ContextualHelpTrigger>
      </Label>
    </NumberField>
}`,...u.parameters?.docs?.source}}};const Ir=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,p as Required,u as WithContextualHelp,m as WithDefaultValue,n as WithFieldDescription,l as WithFieldError,d as WithUnit,Ir as __namedExportsOrder,vr as default};
