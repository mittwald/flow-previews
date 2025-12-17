import{j as r}from"./iframe-BsZhBXal.js";import{N as o}from"./NumberField-9bESkjKA.js";import{L as t}from"./Label-XwOnxXzc.js";import{F as c}from"./FieldDescription-DnEcRZ-N.js";import{F as g}from"./FieldError-CMRDgIJA.js";import{C as x,a as b}from"./ContextualHelpTrigger-D34rtfaN.js";import{B as h}from"./Button-Cxmuw7nD.js";import{T as F}from"./Text-CWir5uzG.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-DadDOWX3.js";import"./flowComponent-DISNxOrN.js";import"./index-lT5ImJcm.js";import"./clsx-B-dksMZM.js";import"./index-Dw50_Btz.js";import"./IconApp-DFfFI-8B.js";import"./remote-C6zziWZe.js";import"./IconChevronDown-pBTCbBMc.js";import"./IconChevronUp-DKhv2SV7.js";import"./IconMinus-BLVvvRO8.js";import"./IconPlus-DCRYVjFT.js";import"./useControlledHostValueProps-B4IoLjjH.js";import"./Button-DmBDFYEY.js";import"./utils-D7f3lHNi.js";import"./ProgressBar-BuAY7GL-.js";import"./Label-Bdtu_aaV.js";import"./Hidden-B-7zzc6R.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMdE4zjY.js";import"./context-BsHlRP-r.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BfmYyYbe.js";import"./useFocus-DkItBW7w.js";import"./useFocusRing-C7h1YZo7.js";import"./useFocusable-CefaVcL6.js";import"./FieldError-Dpf9fLlc.js";import"./Text-CICvYdKp.js";import"./Form-CmE3z4DB.js";import"./Group-D0eC1hRN.js";import"./Input-Bo9ofHsZ.js";import"./useControlledState-Bxg7VuAu.js";import"./useFormValidation-WNRR-_5g.js";import"./useSpinButton-j9Q2QFYb.js";import"./useLocalizedStringFormatter-DNPpU0EQ.js";import"./useFormReset-4DpQBagB.js";import"./useEvent-BIGXqu2E.js";import"./useTextField-B7CblbpP.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-D44A5Pyv.js";import"./Popover-CCUk3hhl.js";import"./OverlayContextProvider-BRQ36iBA.js";import"./context-DVwGhZ9t.js";import"./useStatic-CKUwua6_.js";import"./Dialog-D9Y5GrYo.js";import"./RSPContexts-CGJG9_Ew.js";import"./OverlayArrow-CT9B4GiY.js";import"./Collection-DAkGHX-3.js";import"./CollectionBuilder-D8uuaET0.js";import"./SelectionIndicator-BYUqX36x.js";import"./Separator-Bm5TH6F1.js";import"./SelectionManager-BYlJdR-V.js";import"./useCollator-CmHstSkI.js";import"./FocusScope-qpEeXdaL.js";import"./VisuallyHidden-W4tQCM8c.js";import"./useOverlayController-CyIOKRjt.js";import"./OverlayTrigger-BJ7r5P-1.js";import"./IconInfo-Do6A0oHF.js";import"./IconX-CWxyzjFw.js";import"./IconCheck-B4zjzfHZ.js";import"./LoadingSpinner-D802Ys_g.js";import"./ariaLive-BCVvTk3U.js";import"./browser-B5Kx9HDY.js";import"./EmulatedBoldText-72QMrXCW.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ur={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
