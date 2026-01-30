import{j as e}from"./iframe-l1bkuF5f.js";import{S as o}from"./SearchField-Agzcjoua.js";import{L as n}from"./Label-DX1aPacI.js";import{F as c}from"./FieldDescription-D6vtnelM.js";import{F as d}from"./FieldError-mREW9pPY.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-C26zWsIy.js";import"./flowComponent-CvyDVUQE.js";import"./index-BKxYFHxl.js";import"./clsx-B-dksMZM.js";import"./index-BcUcgGWs.js";import"./Button-pfxdB-3A.js";import"./IconWarning-rcKmWr_e.js";import"./remote-DAiDHcEq.js";import"./Text-BKhP8tr9.js";import"./browser-BVqvvpC_.js";import"./EmulatedBoldText-Cmh7SSTW.js";import"./Text-CmGzUVny.js";import"./utils-DCQYs-TM.js";import"./LoadingSpinner-q7Sk6MlY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-F2xrId0k.js";import"./context-C-s-FPG6.js";import"./Button-DvXEMDiE.js";import"./ProgressBar-DS8uskay.js";import"./Label-tW_cqKCA.js";import"./Hidden-xK_5A_TS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dw5Dmo8O.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CEqZlFux.js";import"./useFocus-jq5Lg4Og.js";import"./useFocusRing-DvEP7g7r.js";import"./useFocusable-D4tCxmX8.js";import"./useControlledHostValueProps--S7JGTy0.js";import"./FieldError-DlCb0goX.js";import"./RSPContexts-D359D01x.js";import"./Form-C3oxrYxL.js";import"./Group-DMPrUoj7.js";import"./Input-DWCi9_rf.js";import"./useControlledState-BZaI1cg9.js";import"./useTextField-L-wLu2nH.js";import"./useFormReset-B-5bGtDV.js";import"./useFormValidation-CUmRTDZB.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Ck8xqn1I.js";import"./AlertIcon-DudqDlux.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
