import{j as e}from"./iframe-Bas3a7fO.js";import{S as o}from"./SearchField-DgtlXDS2.js";import{L as n}from"./Label-QWyaEZ02.js";import{F as c}from"./FieldDescription-BqudxJ-b.js";import{F as d}from"./FieldError-B_qklWB_.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CHbV_zSr.js";import"./flowComponent-DM0zlvyg.js";import"./index-BsE7CccI.js";import"./clsx-B-dksMZM.js";import"./index-CuTcGtc9.js";import"./Button-CCev3q47.js";import"./IconWarning-9FMOeqa7.js";import"./remote-CQRN9i7s.js";import"./Text-D06q46lu.js";import"./browser-CI0OqVn7.js";import"./EmulatedBoldText-DWlWNctj.js";import"./Text-Di9JAG-3.js";import"./utils-eswKxOcw.js";import"./LoadingSpinner-CaJGFcVk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DWSvb_Dh.js";import"./context-C6ovHfpS.js";import"./Button-cgxxNusA.js";import"./ProgressBar-C3VsHXts.js";import"./Label-CAS-GA4h.js";import"./Hidden-JsWJU2dF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-AX-jpDlX.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BXALpkIT.js";import"./useFocus-BpOhXbga.js";import"./useFocusRing--4ecJhRH.js";import"./useFocusable-Dz64TW3s.js";import"./useControlledHostValueProps-BxfqBB9J.js";import"./FieldError-CYd-7Lc_.js";import"./RSPContexts-BxdWTHUz.js";import"./Form-C6AVvH4S.js";import"./Group-CjauqOEv.js";import"./Input-CDjrJnAd.js";import"./useControlledState-DnKF_srQ.js";import"./useTextField-DKwOo1j6.js";import"./useFormReset-C6M9OYlp.js";import"./useFormValidation-nso2YHkv.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-5S7f5h6L.js";import"./AlertIcon-CfXFBmoz.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
