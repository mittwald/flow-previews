import{j as e}from"./iframe-Cs0JkT9Q.js";import{S as o}from"./SearchField-B_EGuvVg.js";import{L as n}from"./Label-CHxievOH.js";import{F as c}from"./FieldDescription-DnGZgPAY.js";import{F as d}from"./FieldError-BZN8rJUk.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BGOnrhQA.js";import"./flowComponent-DnhH9c8U.js";import"./index-CF0rrQKO.js";import"./clsx-B-dksMZM.js";import"./index-BDmaB34G.js";import"./Button-BS2N-oft.js";import"./IconWarning-wVjX2Q6D.js";import"./remote-bYaNzVPL.js";import"./Text-l9LtklMs.js";import"./browser-Cphwy2_f.js";import"./EmulatedBoldText-C1XQaUUR.js";import"./Text-Dd1xy9_M.js";import"./utils-BvIIGzqK.js";import"./LoadingSpinner-FnXgTY4T.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CQ-MJvxZ.js";import"./context-CtFpEE6p.js";import"./Button-CoGTRo7z.js";import"./ProgressBar-CG2kSUer.js";import"./Label-CQSgfv4f.js";import"./Hidden-BvtrxWwl.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CfslMsP4.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-y02TS-RC.js";import"./useFocus-DNqIDWYA.js";import"./useFocusRing-Cldy4Slr.js";import"./useFocusable-Cn5DQ2tI.js";import"./useControlledHostValueProps-3OTJgyz7.js";import"./FieldError-zGZXG0KM.js";import"./RSPContexts-BDhxiX2p.js";import"./Form-D-8VlTBZ.js";import"./Group-BV5xd3-K.js";import"./Input-B1hEkaq5.js";import"./useControlledState-DrKGwN1m.js";import"./useTextField-BQp_mORd.js";import"./useFormReset-5IC1Q0ld.js";import"./useFormValidation-CaaIEsuY.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BA7qstOH.js";import"./AlertIcon-Dko-1oCR.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
