import{j as r}from"./iframe-ByN7k_Da.js";import{L as d}from"./Label-BBHPfwM0.js";import{F as u}from"./FieldDescription-Brq0GRUO.js";import{F as T}from"./FieldError-Dqic_FOg.js";import{T as i}from"./TimeField-UJ35wWrk.js";import{L as l}from"./DateInput-iNc4DTnk.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BgbG9tfm.js";import"./index-4o_WvcDw.js";import"./index-bUl7c0HC.js";import"./useLocalizedStringFormatter-BD0UWBkN.js";import"./context-rGL7bC8_.js";import"./Label-BgjwP7On.js";import"./utils-D8xEYOuW.js";import"./Hidden-LyHOqGkt.js";import"./Text-Cb-8LAS5.js";import"./browser-Co1wUnJx.js";import"./EmulatedBoldText-BCkrp6N6.js";import"./Text-j0nufsIB.js";import"./FieldError-JBJ_RfAm.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-BchUExTw.js";import"./AlertIcon-5K33k8fm.js";import"./IconWarning-DZTSBBmw.js";import"./remote-DfUdRpIa.js";import"./useFieldComponent-DAKvP2zf.js";import"./Form-Ccgq6KTF.js";import"./useLabel-x0Vjylpp.js";import"./Group-DdqPhRGU.js";import"./useFocusRing-BkJgNFf3.js";import"./useFocus-CetkVqMR.js";import"./Input-BhhO42Bj.js";import"./usePress-BphJYqm5.js";import"./useFormValidation-C6EqEf55.js";import"./useControlledState-kSDz6lD9.js";import"./FocusScope-gvfOB4kd.js";import"./useCollator-B3KC4V3q.js";import"./useFormReset-Bc5cKrWY.js";import"./useEvent-ByW2yFDz.js";import"./useSpinButton-CQyF4G42.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DJtcmODR.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const nr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,nr as __namedExportsOrder,mr as default};
