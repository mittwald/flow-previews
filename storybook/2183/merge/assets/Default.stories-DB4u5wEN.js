import{j as r}from"./iframe-8dFSbqJz.js";import{L as d}from"./Label-B3-xaZya.js";import{F as u}from"./FieldDescription-DQzesUeO.js";import{F as T}from"./FieldError-olPwxTHW.js";import{T as i}from"./TimeField-DxbsOFKd.js";import{K as l}from"./DateInput-BmlXAUoS.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-K_HgwY7e.js";import"./index-DdTsJ3wf.js";import"./index-QKd42-im.js";import"./useLocalizedStringFormatter-YU3aOu6y.js";import"./context-81xqWZ8H.js";import"./Label-BbJ0t0io.js";import"./utils-CatxVoKl.js";import"./Hidden-YN9d6EVo.js";import"./Text-Bc5PmX1I.js";import"./browser-TJej2Zh2.js";import"./EmulatedBoldText-C5iTwKQF.js";import"./Text-BVGarVrb.js";import"./FieldError-CAnV5-By.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconChevronDown-BoB9X9Lx.js";import"./remote-D1_oWH-e.js";import"./IconDanger-D2WM-UH7.js";import"./useFieldComponent-Ch2X8LGy.js";import"./Form-DGUlclkV.js";import"./useLabel-CKOrsKHI.js";import"./Group-B7CCMhC-.js";import"./useFocusRing-D1LOVY8w.js";import"./useFocus-BOo9d3Bd.js";import"./Input-C3vnVfPY.js";import"./usePress-BOmL6f1-.js";import"./useFormValidation-BLhEH38g.js";import"./useControlledState-DYZXiDwW.js";import"./FocusScope-KuXCUz--.js";import"./useCollator-B3xP_FE7.js";import"./useFormReset-D0pwxFN1.js";import"./useEvent-gpwnJALn.js";import"./useSpinButton-hry20Pxa.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-NyLjzUXs.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
