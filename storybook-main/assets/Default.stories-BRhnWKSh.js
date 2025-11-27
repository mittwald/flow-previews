import{j as r}from"./iframe-CkyxEoEZ.js";import{N as t,v as c,g}from"./TimeField-BZTAf1Rn.js";import{L as o}from"./Label-BFGYnKsP.js";import{C as x,a as b}from"./ContextualHelpTrigger-DPjIfJLZ.js";import{B as h}from"./Button-Ctvf1H7U.js";import{T as F}from"./Text-Ct1nYKdY.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-C-fhLM-T.js";import"./mergeRefs-p12aeMPz.js";import"./index-tj7lgiAm.js";import"./clsx-B-dksMZM.js";import"./Accordion-BxonB-uS.js";import"./dynamic-ly6SdvXD.js";import"./IconWarning-dMO6L9mh.js";import"./Section-0QWuRp4X.js";import"./context-CmpACB2b.js";import"./Button-wjFvY1UY.js";import"./utils-BtOaQozS.js";import"./ProgressBar-x24Uteep.js";import"./Hidden-BZU7hI3a.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-F9TznhPu.js";import"./useFocusRing-BGGtyEFa.js";import"./useFocusable-6nBl_79g.js";import"./RSPContexts-BIZJIOxy.js";import"./Collection-TWw2CUBu.js";import"./CollectionBuilder-DhRqM4RI.js";import"./SelectionIndicator-B6Bj9As3.js";import"./Separator-Bj8gDUdP.js";import"./browser-DbkHv7Lt.js";import"./useLocalizedStringFormatter-BjZwhmR3.js";import"./useStatic-tbDjUfBM.js";import"./ActionGroup-B7JelnG6.js";import"./Alert-BUzEngmi.js";import"./AlertIcon-D6QGpe3w.js";import"./AlertBadge-BNvXKuRH.js";import"./Align-BO6DQgEO.js";import"./Popover-Dfldgewc.js";import"./OverlayTrigger-D6oe3s8K.js";import"./TableFooterRow-CNbuKkPS.js";import"./SkeletonText-CEVIX2-T.js";import"./Avatar-D0H2dmKO.js";import"./AvatarStack-CtSwjrsk.js";import"./Badge-BK2EStVc.js";import"./BigNumber-BYTo6-GR.js";import"./Breadcrumb-DhR3tYVA.js";import"./Link-Dw6e5tPv.js";import"./Heading-D13PuJy-.js";import"./Legend-BKnZAiJI.js";import"./FileCardList-XsPGsz9I.js";import"./Image-B2EurRhj.js";import"./Color-CPPo5i2D.js";import"./Content-BIHewrI8.js";import"./CounterBadge-BMYaxa9e.js";import"./DonutChart-NNGcOW5o.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-JYMlcMjm.js";import"./Header-DtTME8RG.js";import"./Initials-BTdrWQ8b.js";import"./InlineCode-BVXmyQuU.js";import"./PopoverTrigger-2QwCKC6i.js";import"./LoadingSpinner-Bjw5E-ZO.js";import"./Separator-CxqFRfwx.js";import"./Message-uh7LYwXZ.js";import"./MessageSeparator-DL9xrhQ0.js";import"./NavigationGroup-CtgReka-.js";import"./Notification-BatIqCje.js";import"./NotificationProvider-hfk6oSKV.js";import"./ProgressBar-gS-eWxDl.js";import"./Rating-Cnt-ukGO.js";import"./Skeleton-Bc0LedwX.js";import"./EmulatedBoldText-DT8aLwWG.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,vr={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
