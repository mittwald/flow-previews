import{j as r}from"./iframe-DjMRZ933.js";import{N as t,w as c,g}from"./TimeField-B0eJEEhW.js";import{L as o}from"./Label-DE4OEFg-.js";import{C as x,a as b}from"./ContextualHelpTrigger-CYoOPEVY.js";import{B as h}from"./Button-DcZikGPu.js";import{T as F}from"./Text-HqedTJ3_.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-Dfc22Cns.js";import"./mergeRefs-ktNCKXcN.js";import"./index-CdoC4W9G.js";import"./clsx-B-dksMZM.js";import"./utils-ChD4yM7Z.js";import"./Accordion-BZmsZnOt.js";import"./dynamic-xmc70gpV.js";import"./IconWarning-15BQJDPi.js";import"./Section-Cfn_XoWh.js";import"./context-o3mGNPxn.js";import"./Button-CVSjku2L.js";import"./ProgressBar-B_WWkX7i.js";import"./Hidden-C2WyT6w-.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CMNm5Xu1.js";import"./useFocusRing-CsWAde4M.js";import"./useFocusable-DMUCbXde.js";import"./RSPContexts-xVWKxYWV.js";import"./Collection-N-WMj8Hm.js";import"./CollectionBuilder-B6_gBvnz.js";import"./SelectionIndicator-Be-dMYOv.js";import"./Separator-CDRx1yir.js";import"./browser-CRatz6fZ.js";import"./useLocalizedStringFormatter-D2Pb0dlM.js";import"./useStatic-CBLHZfUJ.js";import"./getActionGroupSlot-CJeZWLnB.js";import"./ActionGroup-7rrFpHFJ.js";import"./Alert-BcobEuUM.js";import"./AlertIcon-DmCm2LWR.js";import"./AlertBadge-CHwJpuCJ.js";import"./Align-BzDEdRIo.js";import"./Popover-C5QNOwBo.js";import"./OverlayTrigger-CrRJgUZu.js";import"./TableFooterRow-B6PT5pbR.js";import"./SkeletonText-CI93CBea.js";import"./Avatar-BB63liah.js";import"./AvatarStack-B8FhdVad.js";import"./Badge-BN0x96Ky.js";import"./BigNumber-BSqhFP9i.js";import"./Breadcrumb-nMuJg0z4.js";import"./Link-ejox3cBD.js";import"./Heading-BgHZ1ILD.js";import"./Legend-DF5rtCao.js";import"./FileCardList-TQMS-z_x.js";import"./Image-wUfga1_8.js";import"./Color-BWZ1Dr8p.js";import"./Content-Bcc-jBqm.js";import"./CounterBadge-CAliY95s.js";import"./DonutChart-DDKsyr_O.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CrAWYJ7k.js";import"./Header-DCu3M0y9.js";import"./Initials-TwtEiJm8.js";import"./InlineCode-CKS5wrww.js";import"./PopoverTrigger-DbAiM7NS.js";import"./LoadingSpinner-fSHKWhSv.js";import"./Separator-sHJV27kT.js";import"./Message-DoIB20zo.js";import"./MessageSeparator-l8_oHDYV.js";import"./NavigationGroup-DRmGCyXC.js";import"./Notification-DGagkD2g.js";import"./NotificationProvider-BQSRGQyP.js";import"./ProgressBar-BaViBzGB.js";import"./Rating-CYR_1TdL.js";import"./Skeleton-IgaQ_QZW.js";import"./EmulatedBoldText-B3brdLrg.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ur={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const vr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,p as Required,u as WithContextualHelp,m as WithDefaultValue,n as WithFieldDescription,l as WithFieldError,d as WithUnit,vr as __namedExportsOrder,Ur as default};
