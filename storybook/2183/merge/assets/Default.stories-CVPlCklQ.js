import{j as e}from"./iframe-BsZhBXal.js";import{S as o}from"./SearchField-DBB__kHP.js";import{L as n}from"./Label-XwOnxXzc.js";import{F as c}from"./FieldDescription-DnEcRZ-N.js";import{F as d}from"./FieldError-CMRDgIJA.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-DadDOWX3.js";import"./flowComponent-DISNxOrN.js";import"./index-lT5ImJcm.js";import"./clsx-B-dksMZM.js";import"./index-Dw50_Btz.js";import"./Button-Cxmuw7nD.js";import"./IconApp-DFfFI-8B.js";import"./remote-C6zziWZe.js";import"./IconX-CWxyzjFw.js";import"./IconCheck-B4zjzfHZ.js";import"./Text-CWir5uzG.js";import"./browser-B5Kx9HDY.js";import"./EmulatedBoldText-72QMrXCW.js";import"./Text-CICvYdKp.js";import"./utils-D7f3lHNi.js";import"./LoadingSpinner-D802Ys_g.js";import"./ariaLive-BCVvTk3U.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DNPpU0EQ.js";import"./context-BsHlRP-r.js";import"./Button-DmBDFYEY.js";import"./ProgressBar-BuAY7GL-.js";import"./Label-Bdtu_aaV.js";import"./Hidden-B-7zzc6R.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DMdE4zjY.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BfmYyYbe.js";import"./useFocus-DkItBW7w.js";import"./useFocusRing-C7h1YZo7.js";import"./useFocusable-CefaVcL6.js";import"./IconClose-sASTaX21.js";import"./IconSearch-BObbIke4.js";import"./useControlledHostValueProps-B4IoLjjH.js";import"./FieldError-Dpf9fLlc.js";import"./RSPContexts-CGJG9_Ew.js";import"./Form-CmE3z4DB.js";import"./Group-D0eC1hRN.js";import"./Input-Bo9ofHsZ.js";import"./useControlledState-Bxg7VuAu.js";import"./useTextField-B7CblbpP.js";import"./useFormReset-4DpQBagB.js";import"./useFormValidation-WNRR-_5g.js";import"./Label.module-CUYTf9Jc.js";import"./IconDanger-D44A5Pyv.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,cr={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
