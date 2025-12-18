import{j as r}from"./iframe-CXtvBV5-.js";import{N as t,v as c,g}from"./TimeField-BLflHk5O.js";import{L as o}from"./Label-BsNkG_q3.js";import{C as x,a as b}from"./ContextualHelpTrigger-BC8S8E_S.js";import{B as h}from"./Button-B1zeu3c2.js";import{T as F}from"./Text-CMr19a6m.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-BygdkkPC.js";import"./mergeRefs-XVX53w-Z.js";import"./index-ChNj5jQF.js";import"./clsx-B-dksMZM.js";import"./Accordion-0Pp4Qh68.js";import"./dynamic-d7RV2m3i.js";import"./IconWarning-BhkQzOu2.js";import"./Section-Cfn-btcH.js";import"./context-BYM96aX5.js";import"./Button-Czyxm9kV.js";import"./utils-qd2QOFm2.js";import"./ProgressBar-BKXLtSPJ.js";import"./Hidden-CuDHI-By.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CAEu_mOG.js";import"./useFocusRing-B4KbP9xH.js";import"./useFocusable-Bz2ht442.js";import"./RSPContexts-CwFlS_g1.js";import"./Collection-Dzcp4a7b.js";import"./CollectionBuilder-D3qe7MnH.js";import"./SelectionIndicator-CtMNhqjQ.js";import"./Separator-B4Qn40UI.js";import"./browser-Du_NX0QX.js";import"./useLocalizedStringFormatter-CRhy_wW7.js";import"./useStatic-CaDi_bvV.js";import"./ActionGroup-76WE-uDm.js";import"./Alert-CqNDQYoG.js";import"./AlertIcon-CV1zk-Xj.js";import"./AlertBadge-uNDoePGd.js";import"./Align-BmR42nkq.js";import"./Popover-BDQF3mLq.js";import"./OverlayTrigger-EmUXyo3B.js";import"./TableFooterRow-BFXHFHbH.js";import"./SkeletonText-Bu_fUB4Q.js";import"./Avatar-B3QvG10-.js";import"./AvatarStack-Cap2B7L3.js";import"./Badge-CpmTQ8o9.js";import"./BigNumber-BjFcKf7O.js";import"./Breadcrumb-Dqt6p75N.js";import"./Link-4Q0a9Nwo.js";import"./Heading-BrBtBi-y.js";import"./Legend-DjwS0-g4.js";import"./FileCardList-DumOlmwR.js";import"./Image-CUtbNuBW.js";import"./Color-BKfHjzKa.js";import"./Content-7cfCqjj6.js";import"./CounterBadge-CtF233lE.js";import"./DonutChart-DXXMJftD.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BL-nBC4B.js";import"./Header-D_XWctB_.js";import"./Initials-CFarEfIW.js";import"./InlineCode-BqXOUe9b.js";import"./PopoverTrigger-CRfGGebp.js";import"./LoadingSpinner-8mK8rEyJ.js";import"./Separator-DLNm_QtB.js";import"./Message-BiZAGwK8.js";import"./MessageSeparator-CYDLlDnj.js";import"./NavigationGroup-2W6CdmgF.js";import"./Notification-Bvs2MP1B.js";import"./NotificationProvider-DS7rbb_m.js";import"./ProgressBar-C6BmRW-m.js";import"./Rating-vrPWheMU.js";import"./Skeleton-C1XPs7Yz.js";import"./EmulatedBoldText-BlfminYz.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,vr={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
