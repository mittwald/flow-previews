import{j as r}from"./iframe-wn9t8CHT.js";import{N as o}from"./NumberField-DONy7Ixl.js";import{L as t}from"./Label-5bTXkWLT.js";import{F as c}from"./FieldDescription-BbTglOXg.js";import{F as g}from"./FieldError-C9AtZQjZ.js";import{C as x,a as b}from"./ContextualHelpTrigger-B54v114n.js";import{B as h}from"./Button-CkMrcy8B.js";import{T as F}from"./Text-vlZ105c0.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CuQvVX64.js";import"./flowComponent-CQL_Hol9.js";import"./index-Daog0jgF.js";import"./clsx-B-dksMZM.js";import"./index-DGBNuX5e.js";import"./IconWarning-B-Wnft1S.js";import"./remote-BKPU2Q50.js";import"./useControlledHostValueProps-Cyhqc6HR.js";import"./Button-C_8bimI7.js";import"./utils-BBqjM3mV.js";import"./ProgressBar-DYDTpv9y.js";import"./Label-vEkUlCU_.js";import"./Hidden-B0JF82fI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CfKSfnQU.js";import"./context-DUIKEoYM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-febwKXtN.js";import"./useFocus-Dfm-Pt4C.js";import"./useFocusRing-4Aw-0NUA.js";import"./useFocusable-MJ0CU3Gf.js";import"./FieldError-BriaHAsp.js";import"./Text-CigTZLQg.js";import"./Form-BpC7EEKj.js";import"./Group-uuffA9yu.js";import"./Input-VHI0T5Gg.js";import"./useControlledState-Ckzcuwb2.js";import"./useFormValidation-DyGMCXIt.js";import"./useSpinButton-CcxvfQjH.js";import"./useLocalizedStringFormatter-BW5ArTpm.js";import"./useFormReset-BfPrTbq9.js";import"./useEvent-msC5Saat.js";import"./useTextField-BdONBPSY.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-G52nApD-.js";import"./AlertIcon-CswpW_U3.js";import"./Popover-CB12jP-7.js";import"./useOverlayController-BCCPmC-G.js";import"./context-DvLe6BQ8.js";import"./useStatic-Dq0n5AIR.js";import"./OverlayContextProvider-DPqnyBOx.js";import"./Dialog-QaAGaw4t.js";import"./RSPContexts-CP6K_mUq.js";import"./OverlayArrow-Dlbb_9eh.js";import"./Collection-Dabp6tSw.js";import"./CollectionBuilder-Dc9k3CRr.js";import"./SelectionIndicator-Drl_jI2J.js";import"./Separator-D7rNCrfy.js";import"./SelectionManager-CyQywfav.js";import"./useCollator-ia3Kz-2A.js";import"./FocusScope-Cff801J_.js";import"./VisuallyHidden-Rhd9Lwfr.js";import"./OverlayTrigger-DiExDdE4.js";import"./LoadingSpinner-C5pntlan.js";import"./browser-C4GSjbSD.js";import"./EmulatedBoldText-BRurVn-6.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
