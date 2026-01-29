import{j as r}from"./iframe-CV15FJMl.js";import{L as d}from"./Label-BYiN1vfD.js";import{F as u}from"./FieldDescription-BbUtqeWX.js";import{F as T}from"./FieldError-e14SOUTJ.js";import{T as i}from"./TimeField-Ctmq6ZRq.js";import{L as l}from"./DateInput-BPgwtaeb.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-zkKbLiwJ.js";import"./index-BdI4bZr-.js";import"./index-DgyS9CYh.js";import"./useLocalizedStringFormatter-DhOUTddD.js";import"./context-Is67_JkX.js";import"./Label-DnBvsshm.js";import"./utils-B45PgFGd.js";import"./Hidden-DbKTPC62.js";import"./Text-DO3jYkuR.js";import"./browser-8BNXX35r.js";import"./EmulatedBoldText-CKJb5Byw.js";import"./Text-Bk0CAvR5.js";import"./FieldError-CDBleeuN.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Dryg6b6V.js";import"./AlertIcon-BZ2qa2OA.js";import"./IconWarning-CS7d0V5Y.js";import"./remote-BYNvJzFU.js";import"./useFieldComponent-4syZJMEs.js";import"./Form-B5_Ftb3l.js";import"./useLabel-DgTpLYXb.js";import"./Group-Oc33WXVS.js";import"./useFocusRing-CoS5ESqQ.js";import"./useFocus-C3kMSW21.js";import"./Input-Wuyb26cC.js";import"./usePress-C9ebI84m.js";import"./useFormValidation-rdndu8q5.js";import"./useControlledState-Br5i43rk.js";import"./FocusScope-Da56m84L.js";import"./useCollator-C223TjTn.js";import"./useFormReset-DQt01LcM.js";import"./useEvent-CGsPBawQ.js";import"./useSpinButton-dYlzXGLa.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CyZ9v00x.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
