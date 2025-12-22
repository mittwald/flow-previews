import{j as r}from"./iframe-D3NxpU8u.js";import{N as o}from"./NumberField-BfSyjFZy.js";import{L as t}from"./Label-DxphAsDG.js";import{F as c}from"./FieldDescription-BhgQYay2.js";import{F as g}from"./FieldError-CpaS6eds.js";import{C as x,a as b}from"./ContextualHelpTrigger-DwUPaa_K.js";import{B as h}from"./Button-edx4tjlA.js";import{T as F}from"./Text-D1hVvtRE.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BWjf97vE.js";import"./flowComponent-CiUf0vQo.js";import"./index-OgwKEPCl.js";import"./clsx-B-dksMZM.js";import"./index-A0HM7_1k.js";import"./IconWarning-CbcK8G8M.js";import"./remote-Cz3kT78_.js";import"./useControlledHostValueProps-BKvGiPad.js";import"./Button-BOXTMksI.js";import"./utils-C5WN15Gt.js";import"./ProgressBar-COGAiyei.js";import"./Label-Dn1Y_s7S.js";import"./Hidden-CJU5gFpe.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DrWOXoHd.js";import"./context-CgVi_M53.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Byc6DAfn.js";import"./useFocus-C0SaCLF4.js";import"./useFocusRing-EPMGJgfm.js";import"./useFocusable-C5GnurYQ.js";import"./FieldError-C5ECIufL.js";import"./Text-ChwArYoy.js";import"./Form-CjVHpqWM.js";import"./Group-Bt94AlX-.js";import"./Input-DsjyUW1i.js";import"./useControlledState-CQ4qwdX_.js";import"./useFormValidation-sS7ClLRw.js";import"./useSpinButton-Ci7AbaTl.js";import"./useLocalizedStringFormatter-Dr59zSqF.js";import"./useFormReset-LpCZRAmu.js";import"./useEvent-C375hDTh.js";import"./useTextField-DqUndp1N.js";import"./Label.module-CUYTf9Jc.js";import"./Popover-QtpEgILn.js";import"./useOverlayController-lbjW1yTF.js";import"./context-BviD8e-k.js";import"./useStatic-Cxgn0lDK.js";import"./OverlayContextProvider-Dq_iYQ8p.js";import"./Dialog-CvwxtaFW.js";import"./RSPContexts-ClgHsKPZ.js";import"./OverlayArrow-B3oUpodu.js";import"./Collection-PnM2Ucj1.js";import"./CollectionBuilder-Dx8JAACx.js";import"./SelectionIndicator-CMZ6aZr9.js";import"./Separator-Br82JzEe.js";import"./SelectionManager-x8dLLgK6.js";import"./useCollator-CIF19XO1.js";import"./FocusScope-0a8lKbDZ.js";import"./VisuallyHidden-CbY3TGrn.js";import"./OverlayTrigger-BzsNNahf.js";import"./LoadingSpinner-D_HEbJEf.js";import"./browser-_fqBbauj.js";import"./EmulatedBoldText-BTtwXUtX.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Or={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Rr=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,n as Required,u as WithContextualHelp,m as WithDefaultValue,p as WithFieldDescription,l as WithFieldError,d as WithUnit,Rr as __namedExportsOrder,Or as default};
