import{j as r}from"./iframe-B9O3ZODG.js";import{L as d}from"./Label-B_yUo08w.js";import{F as u}from"./FieldDescription-Ch5HP30p.js";import{F as T}from"./FieldError-Kcym6Pi9.js";import{T as i}from"./TimeField-D0QJjjf8.js";import{K as l}from"./DateInput-646iK8Hk.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dx9-gQDY.js";import"./index-Bk8h6op_.js";import"./index-CtGMuppQ.js";import"./useLocalizedStringFormatter-B-FlnnN8.js";import"./context-Dx2UXtP2.js";import"./Label-CUW7vXaw.js";import"./utils-B6bG5pl_.js";import"./Hidden-1Y6zqjHd.js";import"./Text-BRHICk1_.js";import"./browser-B4_YLigQ.js";import"./EmulatedBoldText-Dpkb15Ba.js";import"./Text-Bex48AEt.js";import"./FieldError-BrC6eHcT.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconApp-Bd3S2boz.js";import"./remote-BreErbqH.js";import"./IconDanger-Aj7LdC1h.js";import"./useFieldComponent-CRvrWckq.js";import"./Form-BpuzTWI4.js";import"./useLabel-BXmDULV_.js";import"./Group-Ds4785A_.js";import"./useFocusRing-DApHxXgU.js";import"./useFocus-CgajmM1R.js";import"./Input-DL2ocd8r.js";import"./usePress-CefnHgfW.js";import"./useFormValidation-Dlo1bwd1.js";import"./useControlledState-C-iuwE9o.js";import"./FocusScope-kRkt8xnH.js";import"./useCollator-KSJVzoQQ.js";import"./useFormReset-Cc2EXXxK.js";import"./useEvent-BwQwG_n8.js";import"./useSpinButton-BkykOb6_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DIxawIn8.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props}>
      <Label>Time</Label>
      <FieldDescription>Enter a time</FieldDescription>
    </TimeField>
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props} defaultValue={new Time(11, 45)}>
      <Label>Time</Label>
    </TimeField>
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props} isInvalid isRequired>
      <Label>Time</Label>
      <FieldError>Time is required</FieldError>
    </TimeField>
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    granularity: "hour"
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    minValue: new Time(8, 0),
    maxValue: new Time(16, 0)
  }
}`,...c.parameters?.docs?.source}}};const mr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,mr as __namedExportsOrder,tr as default};
