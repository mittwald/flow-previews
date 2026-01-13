import{j as e}from"./iframe-y-Qy_Rwm.js";import{S as o}from"./SearchField-B6kVEMWe.js";import{L as n}from"./Label-DwZ1nY2p.js";import{F as c}from"./FieldDescription-CpWKNI_h.js";import{F as d}from"./FieldError-CHdxAWDK.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BPtwnKvp.js";import"./flowComponent-ChH3J7dR.js";import"./index-CyDBTnD6.js";import"./clsx-B-dksMZM.js";import"./index-DHyBIfcz.js";import"./Button-BD4RfixQ.js";import"./IconWarning-CSZkcfVi.js";import"./remote-DXSfp6Hy.js";import"./Text-Dc6HCiIC.js";import"./browser-BkGSrLgH.js";import"./EmulatedBoldText-BWRuiDih.js";import"./Text-BUjonAbB.js";import"./utils-Ek_OXClQ.js";import"./LoadingSpinner-CaEX00sr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BuF0P38W.js";import"./context-ukqkFony.js";import"./Button-CDSdTdYv.js";import"./ProgressBar-Bi5AZMSy.js";import"./Label-B71VVe9p.js";import"./Hidden-D2H3G8L4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-oIpNFQLF.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-ginTfsZX.js";import"./useFocus-L_xbSTvo.js";import"./useFocusRing-TFugmXCf.js";import"./useFocusable-BPLcErJ9.js";import"./useControlledHostValueProps-Br1cey4W.js";import"./FieldError-B0Ilb29D.js";import"./RSPContexts-D6kJ8Blw.js";import"./Form-DvQjUgdb.js";import"./Group-_NOX1hM3.js";import"./Input-YVfVzY4s.js";import"./useControlledState-BivKNDQQ.js";import"./useTextField-DGsPnemp.js";import"./useFormReset-DmoJehYX.js";import"./useFormValidation-49dCeNRi.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CnTSLXpj.js";import"./AlertIcon-B-ySDH61.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
