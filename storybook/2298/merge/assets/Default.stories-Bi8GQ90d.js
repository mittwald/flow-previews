import{j as r}from"./iframe-CJFOFCad.js";import{N as o}from"./NumberField-COaDfkyM.js";import{L as t}from"./Label-DpG9gbVN.js";import{F as c}from"./FieldDescription-8OICn3TI.js";import{F as g}from"./FieldError-Dc2Z54jn.js";import{C as x,a as b}from"./ContextualHelpTrigger-DPZeT7jF.js";import{B as h}from"./Button-D5kumnA4.js";import{T as F}from"./Text-CI7VZqhd.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CVIwC-Yy.js";import"./flowComponent-CJG1rMDz.js";import"./index-BSRN0wm6.js";import"./clsx-B-dksMZM.js";import"./index-Cu9s0VFH.js";import"./IconWarning-1TKJLzWG.js";import"./remote-BxHvJS68.js";import"./useControlledHostValueProps-B-yVA_IL.js";import"./Button-BaNQUerH.js";import"./utils-CsQ8IQtm.js";import"./ProgressBar-D1JMQZ2r.js";import"./Label-Ce0MMouV.js";import"./Hidden-DmbQVkh7.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cb3KoAb3.js";import"./context-CMyux8LD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-NyliDXf7.js";import"./useFocus-Cgy8euA9.js";import"./useFocusRing-wbIo7ugc.js";import"./useFocusable-13L7602I.js";import"./FieldError-B3-rgjm7.js";import"./Text-8vym_gVd.js";import"./Form-B3lCmY-S.js";import"./Group-DiioWKhA.js";import"./Input-BgsLbNjC.js";import"./useControlledState-DvHOpAD3.js";import"./useFormValidation-DcThlYcg.js";import"./useSpinButton-CpTmgsGV.js";import"./useLocalizedStringFormatter-cHnXWnWa.js";import"./useFormReset-DXleDB5s.js";import"./useEvent-Bx7Hxhw9.js";import"./useTextField-DDOj-p7O.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BB2MdEuH.js";import"./AlertIcon-BfQxSvrI.js";import"./Popover-Bd7FtJNb.js";import"./useOverlayController-BwJW5xew.js";import"./context-DTASnmZz.js";import"./useStatic-C0hf5llT.js";import"./OverlayContextProvider-DL2zELSv.js";import"./Dialog-YkcYiA7q.js";import"./RSPContexts-CNS2UWja.js";import"./OverlayArrow-DEHMSq9h.js";import"./Collection-B9y5YoW-.js";import"./CollectionBuilder-Dz6WVvJx.js";import"./SelectionIndicator-BI4debiO.js";import"./Separator-CS0DDWqc.js";import"./SelectionManager-DYEiw_sj.js";import"./useCollator-DYyzym3S.js";import"./FocusScope-BYRCsx--.js";import"./VisuallyHidden-CZLhXAB_.js";import"./OverlayTrigger-ByPpL00z.js";import"./LoadingSpinner-CM8bIOhN.js";import"./browser-C8kWAWSZ.js";import"./EmulatedBoldText-BF5DLBnT.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Wr={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},n={args:{isRequired:!0}},p={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
