import{j as r}from"./iframe-BQyHcTNh.js";import{L as d}from"./Label-JK740Dk1.js";import{F as u}from"./FieldDescription-mxWByT_L.js";import{F as T}from"./FieldError-AQx_Co0q.js";import{T as i}from"./TimeField-CG6o9dgk.js";import{M as l}from"./DateField-ax0UI_Ue.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-n43oODHt.js";import"./index-BkXVqc6U.js";import"./index-D5h5WobT.js";import"./useLocalizedStringFormatter--7zmdW8B.js";import"./context-BymCJUNL.js";import"./Label-D_Hg-3H4.js";import"./utils-CdCPWCHO.js";import"./Hidden-c61kZDYL.js";import"./Text-_hc15B6K.js";import"./browser-CktdIn7a.js";import"./EmulatedBoldText-77q4Ify-.js";import"./Text-C9BF5CjQ.js";import"./useFieldComponent-Cyrlnow6.js";import"./filterDOMProps-i7L6S0l1.js";import"./ClearPropsContext-CD4xLCoc.js";import"./IconWarning-D8COeLpG.js";import"./useMakeFocusable-QwAUUrkX.js";import"./Form-CjlO_WmK.js";import"./useLabel-DeM_oEx1.js";import"./Group-D0yjr4EW.js";import"./useFocusRing-gNgZcCH8.js";import"./useFocus-COF7nP05.js";import"./Input-POMMqA2k.js";import"./usePress-qWGUTJsN.js";import"./useFormValidation-Dr6xiKJA.js";import"./useControlledState-TEYDAVm8.js";import"./FocusScope-DELlCJxb.js";import"./useCollator-B9ukcsEW.js";import"./useFormReset-DB-Y7LtK.js";import"./useEvent-BWXlYds5.js";import"./useSpinButton-DWKBDY9w.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-_IWIymsq.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
