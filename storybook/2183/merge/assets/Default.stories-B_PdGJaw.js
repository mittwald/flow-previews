import{j as e}from"./iframe-DlUIOFNy.js";import{S as o}from"./SearchField-Duj8ApM0.js";import{L as n}from"./Label-CGwVPH1O.js";import{F as c}from"./FieldDescription-DPdg4_M-.js";import{F as d}from"./FieldError-C8EsLVOD.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BCd2OtQE.js";import"./flowComponent-Bt8pQ7Bg.js";import"./index-C6Pwmg9M.js";import"./clsx-B-dksMZM.js";import"./index-DAMde4kY.js";import"./Button-Dl6JLVXM.js";import"./IconChevronDown-Bvah6r8d.js";import"./remote-CtPiqESW.js";import"./IconX-CssUSVwN.js";import"./IconCheck-DD5ifM6w.js";import"./Text-D41gwIdF.js";import"./browser-CY6W5xXv.js";import"./EmulatedBoldText-rrVMavtE.js";import"./Text-Cu4A8Hxa.js";import"./utils-D5WuX1D5.js";import"./LoadingSpinner-BNBlqI88.js";import"./ariaLive-DLFUkGCP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BeLocyRD.js";import"./context-Bx9FvdTc.js";import"./Button-Dr7P9UDM.js";import"./ProgressBar-D4eaRwno.js";import"./Label-BWWfC27r.js";import"./Hidden-DbzQNSr6.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DOyuB-7Y.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BB8__CsB.js";import"./useFocus-CcXgUcDf.js";import"./useFocusRing-DgmnIfdz.js";import"./useFocusable-D3gWX53-.js";import"./IconClose-3AFdREu1.js";import"./IconSearch-CXAuRLB2.js";import"./useControlledHostValueProps-DysohucN.js";import"./FieldError-D3SsQY4t.js";import"./RSPContexts-C5mxBSfV.js";import"./Form-BRPBFW97.js";import"./Group-CJxedSyo.js";import"./Input-lQWi8Z-8.js";import"./useControlledState-UrSorjA0.js";import"./useTextField-OgNJ0RzM.js";import"./useFormReset-Bdg2NgY2.js";import"./useFormValidation-DSe2mHjT.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-BLbNCJeo.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <SearchField {...props}>
      <FieldDescription>Press enter to search</FieldDescription>
    </SearchField>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <SearchField {...props}>
      <Label>Suche</Label>
    </SearchField>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <SearchField {...props} defaultValue="test" isInvalid>
      <FieldError>Invalid search value</FieldError>
    </SearchField>
}`,...m.parameters?.docs?.source}}};const dr=["Default","Disabled","ReadOnly","WithFieldDescription","WithLabel","WithFieldError"];export{t as Default,i as Disabled,s as ReadOnly,a as WithFieldDescription,m as WithFieldError,p as WithLabel,dr as __namedExportsOrder,cr as default};
