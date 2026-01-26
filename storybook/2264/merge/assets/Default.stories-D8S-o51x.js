import{j as e}from"./iframe-CBKKDtut.js";import{S as o}from"./SearchField-Cge62ZN9.js";import{L as n}from"./Label-YKVXUmct.js";import{F as c}from"./FieldDescription-BY78pjgj.js";import{F as d}from"./FieldError-ncR-D_4-.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-377eOR22.js";import"./flowComponent-D-Qq6Xd6.js";import"./index-Q7U-5PA1.js";import"./clsx-B-dksMZM.js";import"./index-fGZr3eAJ.js";import"./Button-B9OQWjLR.js";import"./IconWarning-BGeLtjSH.js";import"./remote-d08GjPRF.js";import"./Text-DXycmlPy.js";import"./browser-C9q5kf03.js";import"./EmulatedBoldText-eA5g4YLr.js";import"./Text-BipkjXt2.js";import"./utils-CzD9rXMA.js";import"./LoadingSpinner-BvfPlxYK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Cg2HsiHj.js";import"./context-Bvh_z46p.js";import"./Button-DyYsKNHg.js";import"./ProgressBar-BptIcMSV.js";import"./Label-BzrfGAM1.js";import"./Hidden-BMhHdfnU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BGNrCt7d.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CCG6AvGE.js";import"./useFocus-BrZp4zBY.js";import"./useFocusRing-CCYWTYc5.js";import"./useFocusable-DQlHlYMC.js";import"./useControlledHostValueProps-BbK479M6.js";import"./FieldError-6zsCD2mI.js";import"./RSPContexts-B9p0Af0m.js";import"./Form-CoRvbdVN.js";import"./Group-CA1lCmka.js";import"./Input-DA2pnuWC.js";import"./useControlledState-1Ujh64WW.js";import"./useTextField-CZl6lYma.js";import"./useFormReset-tFiefpak.js";import"./useFormValidation-FH2NBgqd.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BqYQV5FR.js";import"./AlertIcon-R8qprUXz.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
