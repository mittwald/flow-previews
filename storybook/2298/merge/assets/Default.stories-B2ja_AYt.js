import{j as e}from"./iframe-DITN2CQJ.js";import{S as o}from"./SearchField--KNyTKXM.js";import{L as n}from"./Label-DJUexJHI.js";import{F as c}from"./FieldDescription-juZacfyE.js";import{F as d}from"./FieldError-B_BzuzIl.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-CFjzq3ou.js";import"./flowComponent-dTWTX0ol.js";import"./index-DMvUg0Ng.js";import"./clsx-B-dksMZM.js";import"./index-CwMYtruy.js";import"./Button-CLzuKoaU.js";import"./IconWarning-CkCNWluG.js";import"./remote-C6sL0hfk.js";import"./Text-CADg3_Hr.js";import"./browser-BAwbicjx.js";import"./EmulatedBoldText-BtAVmnSC.js";import"./Text-C3mpKQD6.js";import"./utils-BKdkt1x6.js";import"./LoadingSpinner-BNTqIab3.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Bu36a-Wr.js";import"./context-DSmvJi-9.js";import"./Button-9nZEjgFJ.js";import"./ProgressBar-DwMRU30B.js";import"./Label-B4MEtlDn.js";import"./Hidden-C_aQw1AA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DxgBaz-V.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Bo3aLfgI.js";import"./useFocus-jV9bksDI.js";import"./useFocusRing-DGbEI6JP.js";import"./useFocusable-DLFLzCMb.js";import"./useControlledHostValueProps-BVETPqVy.js";import"./FieldError-DyUcL9VR.js";import"./RSPContexts-1XCmuogP.js";import"./Form-CKWsALrB.js";import"./Group-pLm-fq-m.js";import"./Input-Ct_cW2oz.js";import"./useControlledState-CEL2ngQO.js";import"./useTextField-DLL3Z67c.js";import"./useFormReset-DRsSvhwB.js";import"./useFormValidation-PWdhcFqO.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Kmcv7hqN.js";import"./AlertIcon-C5wCr6jC.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
