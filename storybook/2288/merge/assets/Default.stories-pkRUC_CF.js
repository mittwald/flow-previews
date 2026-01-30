import{j as e}from"./iframe-DnKh_q8B.js";import{S as o}from"./SearchField-BfEvqKPQ.js";import{L as n}from"./Label-_TjJj3W9.js";import{F as c}from"./FieldDescription-73O0rUMk.js";import{F as d}from"./FieldError-CQ45DqtA.js";import"./preload-helper-PPVm8Dsz.js";import"./useFieldComponent-ClvUady3.js";import"./flowComponent-NsMUrrXI.js";import"./index-DEpWzVfg.js";import"./clsx-B-dksMZM.js";import"./index-B5PweBHP.js";import"./Button-B6Zpw5yd.js";import"./IconWarning-C-jbuAIx.js";import"./remote-k0GnUd79.js";import"./Text-Drd9GdLo.js";import"./browser-BUa4T4SN.js";import"./EmulatedBoldText-C0uufS8q.js";import"./Text-DobXAK13.js";import"./utils-BZc8lNcd.js";import"./LoadingSpinner-B--bUkFv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-ClvwREm6.js";import"./context-CXoyow8k.js";import"./Button-CX9zCyN4.js";import"./ProgressBar-q35gM_9d.js";import"./Label-psEyVv54.js";import"./Hidden-qw9_5FuA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-jAJMJRpZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CFc3C1mq.js";import"./useFocus-BUIY7lOc.js";import"./useFocusRing-CZAaR2ds.js";import"./useFocusable-z3KWK7qq.js";import"./useControlledHostValueProps-Cbx4Pluy.js";import"./FieldError-ChpD0sIl.js";import"./RSPContexts-wuQtf2CN.js";import"./Form-BQHEa3Zl.js";import"./Group-BODZXCjp.js";import"./Input-mgtZ57Ff.js";import"./useControlledState-Dx9tzWN_.js";import"./useTextField-TkD79Fcw.js";import"./useFormReset-BbinXmMH.js";import"./useFormValidation-C9ppbdC-.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DFrKGWVH.js";import"./AlertIcon-3p_Y3XqS.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/SearchField",component:o,render:r=>e.jsx(o,{onChange:l("onChange"),...r})},t={},i={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},a={render:r=>e.jsx(o,{...r,children:e.jsx(c,{children:"Press enter to search"})})},p={render:r=>e.jsx(o,{...r,children:e.jsx(n,{children:"Suche"})})},m={render:r=>e.jsx(o,{...r,defaultValue:"test",isInvalid:!0,children:e.jsx(d,{children:"Invalid search value"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
