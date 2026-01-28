import{j as e}from"./iframe-BbsOAs33.js";import{S as o}from"./SearchField-CQdPxyzB.js";import{L as n}from"./Label-DjvR0JzL.js";import{F as c}from"./FieldDescription-CI9EcbbK.js";import{F as d}from"./FieldError-DSzt6ekN.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-c0I5eEtM.js";import"./flowComponent-CnY6R6y_.js";import"./index-hsH483Jp.js";import"./clsx-B-dksMZM.js";import"./index-32jMpZgo.js";import"./Button-CAGXh9YY.js";import"./IconWarning-BG17vbyg.js";import"./remote-DIEpRnMd.js";import"./Text-BYxWYBBY.js";import"./browser-6_CJeJSO.js";import"./EmulatedBoldText-Bt8Ku6uY.js";import"./Text-C1_k2kAR.js";import"./utils-d4vW56Wr.js";import"./LoadingSpinner-CNcanuZc.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Cn9pdCjE.js";import"./context-DDHwgpv7.js";import"./Button-tZHGwxXU.js";import"./ProgressBar-GthXoJbW.js";import"./Label-jCbgdnWR.js";import"./Hidden-C9ZrqSun.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BZoz0BQC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CuEkD-Mt.js";import"./useFocus-8sJeBC00.js";import"./useFocusRing-B8FmEpoX.js";import"./useFocusable-CRykt1O9.js";import"./useControlledHostValueProps-DsfhA03o.js";import"./FieldError-3tWBh0vH.js";import"./RSPContexts-DfamIfkg.js";import"./Form-BubIOB2-.js";import"./Group-PAKgl2U5.js";import"./Input-47UPOEwv.js";import"./useControlledState-QxMMjnNS.js";import"./useTextField-DCPrMHRH.js";import"./useFormReset-eAh5gylf.js";import"./useFormValidation-DyJaMlWv.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-xz7LDcmS.js";import"./AlertIcon-B34gK9Vj.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
