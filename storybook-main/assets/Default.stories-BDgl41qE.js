import{j as r}from"./iframe-CAXopRTx.js";import{N as t,v as c,g}from"./TimeField-AvIAec-n.js";import{L as o}from"./Label-Cxhs4ZYP.js";import{C as x,a as b}from"./ContextualHelpTrigger-Dj6mrcgU.js";import{B as h}from"./Button-Ctv-dB52.js";import{T as F}from"./Text-BF5hWH0r.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-BV-EFtmJ.js";import"./mergeRefs-C_4KEy1o.js";import"./index-9z8TnNhf.js";import"./clsx-B-dksMZM.js";import"./Accordion-BN6dZ4oC.js";import"./dynamic-D21vqi9G.js";import"./IconWarning-CZAvow1a.js";import"./Section-DhxlZfa0.js";import"./context-B6djjyHK.js";import"./Button-Chz2mIUC.js";import"./utils-Dzmr5ZRW.js";import"./ProgressBar-Dw7oROZh.js";import"./Hidden-DOod4g1Z.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-NOf08-wC.js";import"./useFocusRing-DTLGJlTA.js";import"./useFocusable-CGAuhRwL.js";import"./RSPContexts-BuWbS9Uz.js";import"./Collection-Bc328CGA.js";import"./CollectionBuilder-TpkYGVLd.js";import"./SelectionIndicator-dypojMNo.js";import"./Separator-BMVIHcHI.js";import"./browser-Byp0bOe_.js";import"./useLocalizedStringFormatter-0XeO7SJn.js";import"./useStatic-B1gRKxid.js";import"./ActionGroup-DKCSrD6Z.js";import"./Alert-BmpR03pc.js";import"./AlertIcon-CPsr1mMB.js";import"./AlertBadge-DFIj-iNs.js";import"./Align-B2qDxo9l.js";import"./Popover-Tc25RGFF.js";import"./OverlayTrigger-Bjc5GfEu.js";import"./TableFooterRow-BQ4TOCow.js";import"./SkeletonText-B_tzDs56.js";import"./Avatar-DLDydU_T.js";import"./AvatarStack-DUfYWTId.js";import"./Badge-BFCmhw44.js";import"./BigNumber-Cyz0DTSh.js";import"./Breadcrumb-C1rkvIvu.js";import"./Link-D9RFi070.js";import"./Heading-kGKtBlX4.js";import"./Legend-BJ6Ck0Hy.js";import"./FileCardList-CpJRlD7z.js";import"./Image-DfNgiqKc.js";import"./Color-B5km2NmY.js";import"./Content-BXyxWnVJ.js";import"./CounterBadge-BL38auu8.js";import"./DonutChart-CcFbTUD3.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Be_vBexi.js";import"./Header-BScDeb9f.js";import"./Initials-W36NzcvX.js";import"./InlineCode-CkLg5Zr5.js";import"./PopoverTrigger-Dqa8sMRl.js";import"./LoadingSpinner-CoC4LtwE.js";import"./Separator-DxMsHozP.js";import"./Message-7lyTqTqh.js";import"./MessageSeparator-CQ1CLCTT.js";import"./NavigationGroup-C4JnuN_r.js";import"./Notification-Dq2Soo6r.js";import"./NotificationProvider-BPY70jq3.js";import"./ProgressBar-r_4SSeaH.js";import"./Rating-B9iG1IJI.js";import"./Skeleton-Dmrl1knY.js";import"./EmulatedBoldText-DePsUjt1.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,vr={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
