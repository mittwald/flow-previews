import{j as r}from"./iframe-CzXG2_T8.js";import{N as t,v as c,g}from"./TimeField-Dl-kHVAX.js";import{L as o}from"./Label-CLEaEiAD.js";import{C as x,a as b}from"./ContextualHelpTrigger-CRKS8P0J.js";import{B as h}from"./Button-CE0-K_QR.js";import{T as F}from"./Text-pNSdlFVE.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-CBC4MB9g.js";import"./mergeRefs-BrX_XdJI.js";import"./index-CW_J_3Lm.js";import"./clsx-B-dksMZM.js";import"./Accordion-CK3CNQSd.js";import"./dynamic-D9Ldu2R_.js";import"./IconWarning-BlYr5wdx.js";import"./Section-DRzJ9hQY.js";import"./context-BYHZfe66.js";import"./Button-S7e-r_k_.js";import"./utils-CRR3kiFX.js";import"./ProgressBar-fGMPBnRY.js";import"./Hidden-QndGxZGG.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CoFMJFUW.js";import"./useFocusRing-BjdVgYEz.js";import"./useFocusable-BDJ0-yDW.js";import"./RSPContexts-EC3Gwcat.js";import"./Collection-BP43cq6b.js";import"./CollectionBuilder-BY3GrVHa.js";import"./SelectionIndicator-Bu5dS93A.js";import"./Separator-kqblG9CO.js";import"./browser-TfqyRUmT.js";import"./useLocalizedStringFormatter-BqSTbtiO.js";import"./useStatic-CSFWNuey.js";import"./ActionGroup-DdNyHVbC.js";import"./Alert-BVRdOGDJ.js";import"./AlertIcon-CKFy_SRY.js";import"./AlertBadge-Bn2Sq-O3.js";import"./Align-BrD0lUOJ.js";import"./Popover-BqNRrPxw.js";import"./OverlayTrigger-DvD8AAyr.js";import"./TableFooterRow-DxScdmh-.js";import"./SkeletonText-BajNlo4H.js";import"./Avatar-B3YtQfnh.js";import"./AvatarStack-lqTMKVs4.js";import"./Badge-DuGjQabs.js";import"./BigNumber-8SJtAMTv.js";import"./Breadcrumb-Ba5qYlLB.js";import"./Link-DfCw4YEt.js";import"./Heading-CrkkWjnL.js";import"./Legend-CeMxMq_c.js";import"./FileCardList-BM3lJHXl.js";import"./Image--2MKe1QA.js";import"./Color-BHbT5del.js";import"./Content-BiixoJVq.js";import"./CounterBadge-DnONLIGJ.js";import"./DonutChart-CPtp4Q3P.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-azF5kucF.js";import"./Header-DUaJeums.js";import"./Initials-D5xq1FWi.js";import"./InlineCode-Bl-Nmkob.js";import"./PopoverTrigger-Cw7IKzZy.js";import"./LoadingSpinner-DXLKn-V2.js";import"./Separator-Camsel6h.js";import"./Message-BmLxOVze.js";import"./MessageSeparator-DhFUPqEZ.js";import"./NavigationGroup-B0lwi3ok.js";import"./Notification-BmLGybW-.js";import"./NotificationProvider-DyGx_RoU.js";import"./ProgressBar-C-A5f-uu.js";import"./Rating-Bcobm7yB.js";import"./Skeleton-BSdRMWz_.js";import"./EmulatedBoldText-Dax89Wj8.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,vr={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
