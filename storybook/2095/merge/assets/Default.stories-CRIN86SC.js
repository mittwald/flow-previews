import{j as r}from"./iframe-BYlM8TfH.js";import{L as d}from"./Label-CObvhZe8.js";import{F as u}from"./FieldDescription-DcQaW8xO.js";import{F as T}from"./useFieldComponent-BoJq1S9B.js";import{T as i}from"./TimeField-DoLxJ3OR.js";import{M as l}from"./DateField-FS0MTMDS.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CJQUzeBk.js";import"./index-Z9ghxMfX.js";import"./index-BpRuSIpR.js";import"./useLocalizedStringFormatter-DNjkRVig.js";import"./context-BxRqKeiD.js";import"./Label-COiWxsLa.js";import"./utils-BDqIfUE7.js";import"./Hidden-CSqzjE-Z.js";import"./Text-ZBSxG77c.js";import"./browser-D2sPcOVM.js";import"./EmulatedBoldText-bM5QDT6k.js";import"./Text-Dc8La0ek.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-WQ4wo7kP.js";import"./react-children-utilities-DxnuAJ4K.js";import"./ClearPropsContext-BpBo361K.js";import"./useMakeFocusable-BmfPg07G.js";import"./Form-CqmUY9BV.js";import"./useLabel-IFSjtkUu.js";import"./Group-Bk1pllsG.js";import"./useFocusRing-BaqqhOKG.js";import"./useFocus-B9vfYs8K.js";import"./Input-Dg1gUccH.js";import"./usePress-kOJVCjd_.js";import"./useFormValidation-wBqhYJyj.js";import"./useControlledState-Bs4hSWnz.js";import"./FocusScope-ChlmKh1V.js";import"./useCollator-BcPpPzi9.js";import"./useFormReset-Bl4vFhC1.js";import"./useEvent-DHF942Kq.js";import"./useSpinButton-oJJpBSFw.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-W_MBv7Q7.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const tr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,tr as __namedExportsOrder,ar as default};
