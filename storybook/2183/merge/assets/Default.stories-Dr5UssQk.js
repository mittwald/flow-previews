import{j as r}from"./iframe-AfMfDnul.js";import{N as t,v as c,g}from"./TimeField-BK14odaB.js";import{L as o}from"./Label-CEgt2ST5.js";import{C as x,a as b}from"./ContextualHelpTrigger-BGD0J07C.js";import{B as h}from"./Button-Dz-J0BZY.js";import{T as F}from"./Text-XXGzm8bZ.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-D0YtrswE.js";import"./mergeRefs-hRGJQS5p.js";import"./index-Cse-H3Oz.js";import"./clsx-B-dksMZM.js";import"./Accordion-NekwP7Iq.js";import"./dynamic-B22nf4Sq.js";import"./IconWarning-BHjxQDF5.js";import"./remote-BbVCA53p.js";import"./Section-ebqGZRf9.js";import"./context-WpTHPnjK.js";import"./Button-CnuzJqL8.js";import"./utils-wHWs8Mhj.js";import"./ProgressBar-BHyKVsx8.js";import"./Hidden-3-cgxJ5L.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-ESdZ7ZET.js";import"./useFocusRing-BCI7vGPi.js";import"./useFocusable-CBVaElx9.js";import"./RSPContexts-C5kaCkGg.js";import"./Collection-B07e3AhT.js";import"./CollectionBuilder-cwz4h6ef.js";import"./SelectionIndicator-DvSIX2eN.js";import"./Separator-Cu7L9zFQ.js";import"./browser-D3b8NrdU.js";import"./useLocalizedStringFormatter-ZYKyDhtN.js";import"./useStatic-oE3CUH2s.js";import"./ActionGroup-CiNT698X.js";import"./Alert-DLVLnSp7.js";import"./AlertIcon-q77oMlDX.js";import"./AlertBadge-urZauIAv.js";import"./Align-DO08DH9M.js";import"./Popover-CmYxShpW.js";import"./OverlayTrigger-CzOjAy2I.js";import"./TableFooterRow-CqtqWf9U.js";import"./SkeletonText-C4RPLkJL.js";import"./Avatar-DhGvbDQ6.js";import"./AvatarStack-Cnvkf5dH.js";import"./Badge-eDxwdHYA.js";import"./BigNumber-Ci9DRIHe.js";import"./Breadcrumb-DYWPteCH.js";import"./Link-hXv3E1Ra.js";import"./Heading-Cl5UGWqj.js";import"./Legend-DQqywowg.js";import"./FileCardList-YajtycxG.js";import"./Image-B-iX1Sov.js";import"./Color-CJBrdfrQ.js";import"./Content-B3NPYowa.js";import"./CounterBadge-CnjwmzpL.js";import"./DonutChart-K7DPpc3R.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BiQjAIjj.js";import"./Header-BaKdY0Y9.js";import"./Initials-C1l4vziN.js";import"./InlineCode-C6DAsZkJ.js";import"./PopoverTrigger-CMgONCmT.js";import"./LoadingSpinner-C1jt85JD.js";import"./Separator-DJ5CH4NB.js";import"./Message-BJab1gPB.js";import"./MessageSeparator-CqsC5kSU.js";import"./NavigationGroup-Ifu-QKtv.js";import"./Notification-Dq4SIvAb.js";import"./NotificationProvider-C4tBKUz-.js";import"./ProgressBar-DWcH6LPN.js";import"./Rating-Dfpy_BL0.js";import"./Skeleton-WYwe29HQ.js";import"./EmulatedBoldText-pgpRP3jm.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ir={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Ur=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,p as Required,u as WithContextualHelp,m as WithDefaultValue,n as WithFieldDescription,l as WithFieldError,d as WithUnit,Ur as __namedExportsOrder,Ir as default};
