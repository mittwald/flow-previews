import{j as e}from"./iframe-BgKMnsqP.js";import{S as o}from"./SearchField-C6KfdHtr.js";import{L as n}from"./Label-8eLvO5Vl.js";import{F as c}from"./FieldDescription-DSPaRw4X.js";import{F as d}from"./FieldError-C-lZWEzn.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-BrPuybAK.js";import"./flowComponent-K5lY2cwd.js";import"./index-BfRfH9Zo.js";import"./clsx-B-dksMZM.js";import"./index-Cjd0WNlk.js";import"./Button-BtfzhoC2.js";import"./IconWarning-LAZRyVR3.js";import"./remote-BqVO6mjn.js";import"./Text-C3i_8DOD.js";import"./browser-CrtXW1Io.js";import"./EmulatedBoldText-CGtkaQmh.js";import"./Text-DxRa_Q_m.js";import"./utils-DF7rIzyn.js";import"./LoadingSpinner-CVpmlYAZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-lbar_Hun.js";import"./context-bU_PoVUz.js";import"./Button-CpsY86Gq.js";import"./ProgressBar-BWgoyrrO.js";import"./Label-DB6i0Far.js";import"./Hidden-DjEbUam7.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-cKqQKm7D.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BRD_gMdl.js";import"./useFocus-rZbUMOOr.js";import"./useFocusRing-Do_SyrKm.js";import"./useFocusable-D4mYKpyk.js";import"./useControlledHostValueProps-BQEekCgN.js";import"./FieldError-DrPRBP1_.js";import"./RSPContexts-DOCQ2POG.js";import"./Form-BeISznmy.js";import"./Group-B1pnNyn-.js";import"./Input-DxGeYMpI.js";import"./useControlledState-CIyJs2jp.js";import"./useTextField-DgG9YqRb.js";import"./useFormReset-BD4Q_TlS.js";import"./useFormValidation-BuWufY-j.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-bVfxlZAe.js";import"./AlertIcon-CcDG2G1r.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
