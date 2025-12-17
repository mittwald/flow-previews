import{j as r}from"./iframe-BzW-9mMD.js";import{N as o}from"./NumberField-E05Fuc6M.js";import{L as t}from"./Label-BuckRFL6.js";import{F as c}from"./FieldDescription-DOg-G1iQ.js";import{F as g}from"./FieldError-CEOf2ovw.js";import{C as x,a as b}from"./ContextualHelpTrigger-Bzz_8Yob.js";import{B as h}from"./Button-kdt8pR0M.js";import{T as F}from"./Text-V56jcQh9.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CbusyouS.js";import"./flowComponent-tWRCe5l6.js";import"./index-XmU95KIL.js";import"./clsx-B-dksMZM.js";import"./index-DBI39Uex.js";import"./IconApp-BdfgmDZu.js";import"./remote-BEBWGiXy.js";import"./IconChevronDown-CCxSOO60.js";import"./IconChevronUp-BfLAel_f.js";import"./IconMinus-BNYJeKfC.js";import"./IconPlus-Ch-pWo2Y.js";import"./useControlledHostValueProps-Drs0uCj9.js";import"./Button-DgUosL-f.js";import"./utils-BrWwMsiw.js";import"./ProgressBar-o-cVdTXN.js";import"./Label-CGJ_PWGO.js";import"./Hidden-Dd9I5XIl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Fj4NeiZR.js";import"./context-42ert5Ah.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DuLlpULp.js";import"./useFocus-dCAgOHv-.js";import"./useFocusRing-g2ZbegJf.js";import"./useFocusable-CVjqM_08.js";import"./FieldError-YIyLtRkF.js";import"./Text-lCB5Bcpt.js";import"./Form-DVsU3UIy.js";import"./Group-DlZIxVzc.js";import"./Input-DnvETqzY.js";import"./useControlledState-Bv03b0O5.js";import"./useFormValidation-CVoSAArr.js";import"./useSpinButton-BoSoNkTK.js";import"./useLocalizedStringFormatter-CwmxuNTv.js";import"./useFormReset-DSNp4f3d.js";import"./useEvent-B5jRbMBF.js";import"./useTextField-DejpfAEP.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-BcSmAgIr.js";import"./Popover-9e6SMGW8.js";import"./OverlayContextProvider-DkaFHDgz.js";import"./context-CzkXJT4I.js";import"./useStatic-CTmF8sLz.js";import"./Dialog-Djk-se_O.js";import"./RSPContexts-B2m0CCTC.js";import"./OverlayArrow-CmaTRoo4.js";import"./Collection-B6Gyca40.js";import"./CollectionBuilder-C5j0Sae3.js";import"./SelectionIndicator-C_2dk6EH.js";import"./Separator-DiQ9hKYu.js";import"./SelectionManager-X9WkTlTu.js";import"./useCollator-DwX94Vm0.js";import"./FocusScope-CKC8wRja.js";import"./VisuallyHidden-BEoWdW55.js";import"./useOverlayController-D-du17tQ.js";import"./OverlayTrigger-CpP3uoqI.js";import"./IconInfo-BMahyVNn.js";import"./IconX-w5RRSC5U.js";import"./IconCheck-ORikD9Q4.js";import"./LoadingSpinner-D5sbFVGI.js";import"./ariaLive-CVrDG-JG.js";import"./browser-C2fMNT9-.js";import"./EmulatedBoldText-xlY4BdXR.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Ur={title:"Form Controls/NumberField",component:o,render:e=>r.jsx(o,{onChange:j("onChange"),...e,children:r.jsx(t,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},m={render:e=>r.jsxs(o,{...e,minValue:5,maxValue:10,children:[r.jsx(t,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},n={render:e=>r.jsx(o,{...e,defaultValue:34,children:r.jsx(t,{children:"Age"})})},l={render:e=>r.jsxs(o,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(t,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(o,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(t,{children:"Storage"})})},u={render:e=>r.jsx(o,{...e,minValue:5,maxValue:10,children:r.jsxs(t,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
