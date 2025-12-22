import{j as r}from"./iframe-XJIuIQsX.js";import{L as d}from"./Label-CRXdwP8g.js";import{F as u}from"./FieldDescription-C4dINrt8.js";import{F as T}from"./FieldError-CSSPElPx.js";import{T as i}from"./TimeField-Lk1GfsJw.js";import{L as l}from"./DateInput-rgN0Yy7Y.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BaQJj-Fe.js";import"./index-BFrTfb9P.js";import"./index-D1QpPuaY.js";import"./useLocalizedStringFormatter-CdJGeOAf.js";import"./context-DW91oCRu.js";import"./Label-1nVOodib.js";import"./utils-OSbsBMtV.js";import"./Hidden-CYqdvOeA.js";import"./Text-CrMkSLGe.js";import"./browser-BhoN5hvb.js";import"./EmulatedBoldText-CPYC_Ehx.js";import"./Text-CQ_rpqob.js";import"./FieldError-oVAZyPGl.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Dh1UuZN-.js";import"./remote-Ep0bJUq6.js";import"./useFieldComponent-HT5XfbIG.js";import"./Form-BZYlLUUP.js";import"./useLabel-B1JuXYfT.js";import"./Group-CYE-HYpS.js";import"./useFocusRing-CeYeFZfu.js";import"./useFocus-CATpB0h3.js";import"./Input-CQdNUZHp.js";import"./usePress-DEhEh88f.js";import"./useFormValidation-DwGL1Z7V.js";import"./useControlledState-B6b60Ty3.js";import"./FocusScope-XmTgMg9O.js";import"./useCollator-pMxc4jG8.js";import"./useFormReset-_i9wmexA.js";import"./useEvent-c3AV6770.js";import"./useSpinButton-M3mKtTNM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DjO988IK.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
