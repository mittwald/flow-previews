import{j as r}from"./iframe-CH-PGbIe.js";import{N as o}from"./NumberField-DoKkFdbG.js";import{L as t}from"./Label-BpHmIn39.js";import{F as c}from"./FieldDescription-DMXEORO1.js";import{F as g}from"./FieldError-9pLulNyY.js";import{C as x,a as b}from"./ContextualHelpTrigger-qd0S77SP.js";import{B as h}from"./Button-Dl-iCxcF.js";import{T as F}from"./Text-DUTVzyy5.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-R38s1k2Z.js";import"./flowComponent-Cx8afA-p.js";import"./index-JjjT5_3a.js";import"./clsx-B-dksMZM.js";import"./index-yvyiz2TD.js";import"./IconWarning-BrtiYPUm.js";import"./remote-NkxELaCk.js";import"./useControlledHostValueProps-BPSsIec4.js";import"./Button-BxJ7LcYT.js";import"./utils-BUbYN1U7.js";import"./ProgressBar-BvIgs7se.js";import"./Label-YvP3zR1_.js";import"./Hidden-BHNvmzaU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BBwXLpG2.js";import"./context-BEPAk1pi.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CjXzQGxt.js";import"./useFocus-C-u_ZFsP.js";import"./useFocusRing-CuUFHyYZ.js";import"./useFocusable-DX9jgPLa.js";import"./FieldError-PikikH1M.js";import"./Text-C_Kx-nbJ.js";import"./Form-BPpqOWmF.js";import"./Group-D9bGLtxm.js";import"./Input-C82ooeG7.js";import"./useControlledState-BQPo69mZ.js";import"./useFormValidation-CGeoBpxY.js";import"./useSpinButton-BP9DWN8Q.js";import"./useLocalizedStringFormatter-UQrIwX21.js";import"./useFormReset-DarrOQyz.js";import"./useEvent-DmJ5-BvT.js";import"./useTextField-DqKvfInW.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-lzhTm-Qc.js";import"./AlertIcon-Cf4_Rc8_.js";import"./Popover-E9WcTTGu.js";import"./useOverlayController-DE9i1G--.js";import"./context-BsZ7lsCx.js";import"./useStatic-DyjFLUOF.js";import"./OverlayContextProvider-C92IYoS4.js";import"./Dialog-LWxSnoH8.js";import"./RSPContexts-CFzFD81a.js";import"./OverlayArrow-BxBE_adq.js";import"./Collection-BTj5Zmqj.js";import"./CollectionBuilder-D_HWiiHS.js";import"./SelectionIndicator-DFgYB22t.js";import"./Separator-D7Dxs4fR.js";import"./SelectionManager-Cy9wSm_1.js";import"./useCollator-NRPLm61h.js";import"./FocusScope-Com4Ovel.js";import"./VisuallyHidden-BZmadp8e.js";import"./OverlayTrigger-BCj6WW1R.js";import"./LoadingSpinner-BVg6Htwb.js";import"./browser-Bk_hun62.js";import"./EmulatedBoldText-DLXz_2Ie.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Tr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Tr as __namedExportsOrder,Wr as default};
