import{j as r}from"./iframe-DiUxw81Q.js";import{N as o}from"./NumberField-CkGhKCOb.js";import{L as t}from"./Label-DpHnEhHE.js";import{F as c}from"./FieldDescription-CByPgqro.js";import{F as g}from"./FieldError-DH3i7Cba.js";import{C as x,a as b}from"./ContextualHelpTrigger-eWP1Xr3c.js";import{B as h}from"./Button-gnRq8NvL.js";import{T as F}from"./Text-CMit6jNZ.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BFiXxBQU.js";import"./flowComponent-Doi79f5D.js";import"./index-DoB8i5PX.js";import"./clsx-B-dksMZM.js";import"./index-2ROVwQvu.js";import"./IconWarning-DJftz4M-.js";import"./remote-dRe2-fx5.js";import"./useControlledHostValueProps-D5fxzAXf.js";import"./Button-JQtyulyF.js";import"./utils-BhADjK-H.js";import"./ProgressBar-HXLQU2Vm.js";import"./Label-Dt69EWuh.js";import"./Hidden-YWjhfZDI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-yn1VwYEU.js";import"./context-si8TSn1j.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-I-WC2YFt.js";import"./useFocus-DSwjHrh5.js";import"./useFocusRing-BpbrWv_K.js";import"./useFocusable-bbwyacvB.js";import"./FieldError-BKME6Hw5.js";import"./Text-CUd3ZjBr.js";import"./Form-kW4DkkVS.js";import"./Group-DEqw8J9L.js";import"./Input-lzxTVruz.js";import"./useControlledState-DDLUXLOw.js";import"./useFormValidation-CsqhaN7Y.js";import"./useSpinButton-Dh_2DzSL.js";import"./useLocalizedStringFormatter-CjhcHHQc.js";import"./useFormReset-Cz-LaBzR.js";import"./useEvent-D_adZsOG.js";import"./useTextField-CJ6J-TLI.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-3B66Ly-F.js";import"./AlertIcon-C_aBYmlN.js";import"./Popover-BGTnePiJ.js";import"./useOverlayController-BsSpthcM.js";import"./context-C7B1j1st.js";import"./useStatic-BoyD6q7D.js";import"./OverlayContextProvider-Bc9SHXiU.js";import"./Dialog-CJTGGTvx.js";import"./RSPContexts-D4TaMXlQ.js";import"./OverlayArrow-BBITTnz5.js";import"./Collection-BtPubrtW.js";import"./CollectionBuilder-CvFvZJ2s.js";import"./SelectionIndicator-BsyJ81fY.js";import"./Separator-CQ3T4lOo.js";import"./SelectionManager-BOTG9Axa.js";import"./useCollator-uFjTzBPf.js";import"./FocusScope-moHWWkwF.js";import"./VisuallyHidden-Bb1j3rfU.js";import"./OverlayTrigger-BHAm2bRH.js";import"./LoadingSpinner-Rpl9g6nT.js";import"./browser-DhblGL2Q.js";import"./EmulatedBoldText-WmP9Wm83.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
