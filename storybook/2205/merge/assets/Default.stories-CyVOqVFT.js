import{j as r}from"./iframe-CH4VWYyw.js";import{N as t,v as c,g}from"./TimeField-dOwLdr3y.js";import{L as o}from"./Label-DamxdNaK.js";import{C as x,a as b}from"./ContextualHelpTrigger-CobzlyXE.js";import{B as h}from"./Button-CMjimR4T.js";import{T as F}from"./Text-DppnPY0e.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-RGeJUgUt.js";import"./mergeRefs--_CTko6t.js";import"./index-FoM_NaoT.js";import"./clsx-B-dksMZM.js";import"./Accordion-BejuHqQb.js";import"./dynamic-BXkfH89u.js";import"./IconWarning-CUVmf0iP.js";import"./Section-BYSnoqOE.js";import"./context-DhFeNNrI.js";import"./Button-C7FjL3VL.js";import"./utils-B0RtSKxF.js";import"./ProgressBar-BTQp98g0.js";import"./Hidden-CDEXgFqV.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-C0jF3YAi.js";import"./useFocusRing-DRFwXyGM.js";import"./useFocusable-Au-ZLUmf.js";import"./RSPContexts-COBXgLKc.js";import"./Collection-L1fG0_vq.js";import"./CollectionBuilder-DHEE--Pj.js";import"./SelectionIndicator-Cmg6-Pdp.js";import"./Separator-88La-8FT.js";import"./browser-DUOSIs8m.js";import"./useLocalizedStringFormatter-BgdA6BoT.js";import"./useStatic-rQr5blZX.js";import"./ActionGroup-DDR3DkjN.js";import"./Alert-CaRi4XO8.js";import"./AlertIcon-DXRGAj5W.js";import"./AlertBadge-DfbHta5f.js";import"./Align-Cq_IfJO_.js";import"./Popover-Ca49wibL.js";import"./OverlayTrigger-yyuSztfm.js";import"./TableFooterRow-DWNQ0T6x.js";import"./SkeletonText-fbDfrtFf.js";import"./Avatar-CDLXo50I.js";import"./AvatarStack-BQGqs3x_.js";import"./Badge-BzpkmF7E.js";import"./BigNumber-B6AfKhhh.js";import"./Breadcrumb-DUw-gA4L.js";import"./Link-CdVmxRjb.js";import"./Heading-luYK-1U3.js";import"./Legend-TD40ayv3.js";import"./FileCardList-ULRzupE2.js";import"./Image-BhQQBAtK.js";import"./Color-FPQa_iiC.js";import"./Content-BEbS3ZL_.js";import"./CounterBadge-C4x4PBwO.js";import"./DonutChart-CvMGXJVi.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-0rvFNSTI.js";import"./Header-Dzk2QCYF.js";import"./Initials-V1IfrL6u.js";import"./InlineCode-BzROjjVp.js";import"./PopoverTrigger-4JRh7pUL.js";import"./LoadingSpinner-CM0pL980.js";import"./Separator-BvGa7liQ.js";import"./Message-BuA5oc5_.js";import"./MessageSeparator-BpgxY-nM.js";import"./NavigationGroup-C51j7e7Q.js";import"./Notification-CnHkVc1m.js";import"./NotificationProvider-ByUVCGCk.js";import"./ProgressBar-oW1SLDw-.js";import"./Rating-DJkF2UYV.js";import"./Skeleton-BPlxU9Ui.js";import"./EmulatedBoldText-BLn1bvyP.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,vr={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
