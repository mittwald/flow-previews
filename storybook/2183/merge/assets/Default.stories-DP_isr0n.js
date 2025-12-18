import{j as r}from"./iframe-BmKAGSU1.js";import{L as d}from"./Label-8kdX7ehW.js";import{F as u}from"./FieldDescription-C007Rd_u.js";import{F as T}from"./FieldError-DTx5qYoC.js";import{T as i}from"./TimeField-BxK3hfnG.js";import{L as l}from"./DateInput-wauQFsKK.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-GoF2pcsM.js";import"./index-Dy22JExn.js";import"./index-D3Sif_iZ.js";import"./useLocalizedStringFormatter-wjV9WHNF.js";import"./context-CxuOL-5x.js";import"./Label-CQLEPw36.js";import"./utils-g5fx1pEf.js";import"./Hidden-tXnJ8R5f.js";import"./Text-C9Y-BRqi.js";import"./browser-SWtWUPW6.js";import"./EmulatedBoldText-DkbId6Zn.js";import"./Text-CWVum_CA.js";import"./FieldError-DtXh5FLR.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-imbji-Kz.js";import"./remote-DfYMV5Tv.js";import"./useFieldComponent-DWe8fYc4.js";import"./Form-B3BOXvjK.js";import"./useLabel-gR0_832q.js";import"./Group-zAJTMebT.js";import"./useFocusRing-DBug8spT.js";import"./useFocus-BW6_4Fc3.js";import"./Input-aV6cWdAR.js";import"./usePress-JhlebSO6.js";import"./useFormValidation-BWMCHu6j.js";import"./useControlledState-TVCSEq66.js";import"./FocusScope-ByKxlNca.js";import"./useCollator-3U7lxjuh.js";import"./useFormReset-DXCfJDY-.js";import"./useEvent-B00NxYME.js";import"./useSpinButton-Isy5a7J9.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BGFGSaWJ.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
