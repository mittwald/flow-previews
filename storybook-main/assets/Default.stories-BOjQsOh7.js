import{j as r}from"./iframe-CMcq8v1f.js";import{L as d}from"./Label-BIfXBQMD.js";import{F as u}from"./FieldDescription-CUyjOtFz.js";import{F as T}from"./useFieldComponent-B7IsP0qp.js";import{T as i}from"./TimeField-acCUQ3Q6.js";import{M as l}from"./DateField-DdlQDbA-.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DAEI1NYm.js";import"./index-UsNUevoW.js";import"./index-Tcjlyiep.js";import"./useLocalizedStringFormatter-BoDSEWEG.js";import"./context-Bckjq63R.js";import"./Label-CtMkNZ5K.js";import"./utils-B4_KO4f3.js";import"./Hidden-BSe2pCrZ.js";import"./Text-DOkc_YZA.js";import"./browser-BnbqEoZX.js";import"./EmulatedBoldText-DAg28Pal.js";import"./Text-CkmSClwy.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-pzLTBmMV.js";import"./react-children-utilities-CDk9z-7u.js";import"./ClearPropsContext-CU9ecYMv.js";import"./useMakeFocusable-B2ENdPIj.js";import"./Form-BA9ATDJW.js";import"./useLabel-MLAtSIJy.js";import"./Group-Cj4tB1lx.js";import"./useFocusRing-CoJ5esee.js";import"./useFocus-B0Qlm3zv.js";import"./Input-D43W09OA.js";import"./usePress-Bqdsvk60.js";import"./useFormValidation-C01Q1Aoq.js";import"./useControlledState-C8UmWEhe.js";import"./FocusScope-BZyWBR-T.js";import"./useCollator-DTERHYIY.js";import"./useFormReset-DUTu2q8R.js";import"./useEvent-DWTRHc2N.js";import"./useSpinButton-IoOLZmd-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BaeRwan8.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
