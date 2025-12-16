import{j as r}from"./iframe-C3qryY9m.js";import{N as o}from"./NumberField-CsaFkMmJ.js";import{L as t}from"./Label-C-0JfuKv.js";import{F as c}from"./FieldDescription-fqGYoTDI.js";import{F as g}from"./FieldError-2lUipCQG.js";import{C as x,a as b}from"./ContextualHelpTrigger-7Y4yxSdb.js";import{B as h}from"./Button-DjS8Y37J.js";import{T as F}from"./Text-D-8m5QW2.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BCb9qeqT.js";import"./flowComponent-ClNYvV1o.js";import"./index-DAAYeveQ.js";import"./clsx-B-dksMZM.js";import"./index-BCGSECUV.js";import"./IconApp-CHP_d6TO.js";import"./remote-C56XpJ0V.js";import"./IconChevronDown-DCTVH4oO.js";import"./IconChevronUp-B_iX1R2d.js";import"./IconMinus-Dp0f7OBF.js";import"./IconPlus-BC6KfZ4p.js";import"./useControlledHostValueProps-RAl4dK1J.js";import"./Button-DXnGr114.js";import"./utils-DpUn2o29.js";import"./ProgressBar-D4KqjXjU.js";import"./Label-CyYSEd83.js";import"./Hidden-ft2VLnDU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CQT2EQei.js";import"./context-Dn-XBzeE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-gRpVWz6L.js";import"./useFocus-BlyEGXer.js";import"./useFocusRing-GVTVCbky.js";import"./useFocusable-B6lNdGau.js";import"./FieldError-Bjrpvc0X.js";import"./Text-ugyEWZ3z.js";import"./Form-3X5C6e4Q.js";import"./Group-BEZrTaXd.js";import"./Input-BWLNXNeV.js";import"./useControlledState-D6tzoGpH.js";import"./useFormValidation-DvJkknbD.js";import"./useSpinButton-BzorPDQL.js";import"./useLocalizedStringFormatter-Dr8Z1pGx.js";import"./useFormReset-CU22rOa5.js";import"./useEvent-DVkloeR1.js";import"./useTextField-CfZJHhZI.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-CnINUXvw.js";import"./Popover-DdsS2BWk.js";import"./OverlayContextProvider-VRFY-eRQ.js";import"./context-BBcvZ-pJ.js";import"./useStatic-CxeJCkNi.js";import"./Dialog-eOuJy3Tw.js";import"./RSPContexts-DdcVv8cM.js";import"./OverlayArrow-CC04FrS6.js";import"./Collection-CWTLjfsE.js";import"./CollectionBuilder-1df9N_mD.js";import"./SelectionIndicator-Cnczr7tl.js";import"./Separator-Ccf3ET9r.js";import"./SelectionManager-BRiRdz2V.js";import"./useCollator-WS3ME5vT.js";import"./FocusScope-DBhIZEy-.js";import"./VisuallyHidden-CRCUMBi1.js";import"./useOverlayController-DqQbDVt2.js";import"./OverlayTrigger-IQRhRthi.js";import"./IconInfo-DqIIvtum.js";import"./IconX-BtmXIBsH.js";import"./IconCheck-DRxnKso5.js";import"./LoadingSpinner-D_zbcCDn.js";import"./ariaLive-DbWlUYfw.js";import"./browser-7Ut6r0Ca.js";import"./EmulatedBoldText-BhqmPl42.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ur={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const vr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,p as Required,u as WithContextualHelp,n as WithDefaultValue,m as WithFieldDescription,l as WithFieldError,d as WithUnit,vr as __namedExportsOrder,Ur as default};
