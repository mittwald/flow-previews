import{j as e}from"./iframe-BpfR1GYm.js";import{S as o}from"./SearchField-VmesMoTV.js";import{L as n}from"./Label-DS3YgAXJ.js";import{F as c}from"./FieldDescription-BIvCG2uM.js";import{F as d}from"./FieldError-CXRDkScB.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-DI1dsoTY.js";import"./flowComponent-qov8JTe3.js";import"./index-SWV2Jto_.js";import"./clsx-B-dksMZM.js";import"./index-BNT5TWiv.js";import"./Button-C4OB0yac.js";import"./IconWarning-BOf1a1NO.js";import"./remote-Cr2dkfGH.js";import"./Text-jE0jlBS1.js";import"./browser-CJuVe1n5.js";import"./EmulatedBoldText-Ba7yrIZA.js";import"./Text-DujklUHl.js";import"./utils-z0hzRCNL.js";import"./LoadingSpinner-C50Cnz5-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BHDvTpyt.js";import"./context-BQnsf3fS.js";import"./Button-Dq2UVXBx.js";import"./ProgressBar-C8HL_nLQ.js";import"./Label-TUuaFaku.js";import"./Hidden-DWXiMutX.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-oNP935J_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-VEcsoWoE.js";import"./useFocus-ZHbPEGRJ.js";import"./useFocusRing-lHZkZ90J.js";import"./useFocusable-CybXUwCv.js";import"./useControlledHostValueProps-RQKiDY30.js";import"./FieldError-DbjIiGK3.js";import"./RSPContexts-DDsKHTka.js";import"./Form-Dn5OdnSf.js";import"./Group-Id9jy-Co.js";import"./Input-By9tEQCu.js";import"./useControlledState-Bs2ReOE0.js";import"./useTextField-EtH9XVMV.js";import"./useFormReset-LNCZiIDy.js";import"./useFormValidation-DJqpOl9D.js";import"./Label.module-CUYTf9Jc.js";import"./InlineAlert-Dumml4W9.js";import"./AlertIcon-BPm48GUQ.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const pr=["Default","Disabled","ReadOnly","WithFieldDescription","WithLabel","WithFieldError"];export{t as Default,i as Disabled,s as ReadOnly,a as WithFieldDescription,m as WithFieldError,p as WithLabel,pr as __namedExportsOrder,ar as default};
