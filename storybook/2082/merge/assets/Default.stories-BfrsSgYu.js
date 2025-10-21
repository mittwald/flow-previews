import{j as r}from"./iframe-EtTbRQoM.js";import{N as o}from"./NumberField-GPNxPhrp.js";import{L as t}from"./Label-BHPxSoWd.js";import{F as c}from"./FieldDescription-RyyHlj0A.js";import{F as g}from"./FieldError-Bx65Dx0T.js";import{C as x,a as b}from"./ContextualHelpTrigger-DpLJnDqv.js";import{B as h}from"./Button-DxuCaQyR.js";import{T as F}from"./Text-CAO-zPwU.js";import"./index-nuYtCEEu.js";import"./FormField.module-CqWyJNQI.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CRP3amPt.js";import"./index-DwnAt2PO.js";import"./index-rMxpLDk9.js";import"./IconWarning-CO-lUcxm.js";import"./ReactAriaControlledValueFix-CYrgQbLH.js";import"./utils-C_hvyJpn.js";import"./Button-qX7xBgDX.js";import"./ProgressBar-C-f1QmIl.js";import"./Label-FPs7V2cE.js";import"./Hidden-BhWY_xu3.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-HEbrZrvP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-sAonsHdy.js";import"./useFocus-9RWBE5qv.js";import"./useFocusRing-hCmULEnE.js";import"./useFocusable-Do_2l7DI.js";import"./FieldError-Dm1dzE4u.js";import"./Text-CANjZEUs.js";import"./Form-CyJo_kk3.js";import"./Group-DeuTwRQ_.js";import"./Input-TlPGvJ5n.js";import"./useControlledState-DmCe06Ai.js";import"./useFormValidation-CisZkPpg.js";import"./useSpinButton-FsnqNS7d.js";import"./useLocalizedStringFormatter-FAUwXJff.js";import"./useFormReset-B1BZ1rNK.js";import"./useEvent-DcRgbaUL.js";import"./useTextField-Ec9tFhY1.js";import"./Popover-ByVAPhqX.js";import"./useOverlayController-BhlWBiph.js";import"./context-C1SllNhn.js";import"./useStatic-DxnBGf3l.js";import"./OverlayContextProvider-6Zh7EMbz.js";import"./Dialog-D4gVf8vR.js";import"./RSPContexts-Cv7znJuu.js";import"./OverlayArrow-CczkULsk.js";import"./Collection-CmlnhQJV.js";import"./CollectionBuilder-DTV-m0tl.js";import"./SelectionIndicator-BOzSayKJ.js";import"./Separator-CwOt3VIi.js";import"./SelectionManager-DfS84ysN.js";import"./useCollator-CjrbHKqV.js";import"./FocusScope-Dkurg4aB.js";import"./VisuallyHidden-B8Lwuqmn.js";import"./ClearPropsContextView-Bx4CA8qQ.js";import"./OverlayTrigger-fEmiW_c4.js";import"./ControlledNotification-DztR7-dO.js";import"./LoadingSpinner-QwVO93wM.js";import"./browser-Cob99Do9.js";import"./EmulatedBoldText-rZpq4XPn.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Er={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Or=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Or as __namedExportsOrder,Er as default};
