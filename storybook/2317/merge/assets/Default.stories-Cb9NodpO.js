import{j as r}from"./iframe-DN5oj4yX.js";import{L as d}from"./Label-DdsftIej.js";import{F as u}from"./FieldDescription-BcPtYng1.js";import{F as T}from"./FieldError-CqFPhrQB.js";import{T as i}from"./TimeField-B1JPKQ1b.js";import{L as l}from"./DateInput-s24aTkOC.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D5tzpGYQ.js";import"./index-D8Wg1xo0.js";import"./index-DUndj3nA.js";import"./useLocalizedStringFormatter-Dqjs-V7P.js";import"./context-BQuP-QJJ.js";import"./Label-D5uLN87S.js";import"./utils-u73lU7bl.js";import"./Hidden-DvJV1KBO.js";import"./Text-B6wg_w_v.js";import"./browser-t02O3gv-.js";import"./EmulatedBoldText-rvhjeWKi.js";import"./Text-mAHBNKmk.js";import"./FieldError-lE_N68JV.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CB1nkD4I.js";import"./AlertIcon-DDaSQZAJ.js";import"./IconWarning-C1DuEctF.js";import"./remote-CDfMg8I2.js";import"./useFieldComponent-DVOrWc0y.js";import"./Form-Cz7a81_t.js";import"./useLabel-52-JVqkW.js";import"./Group-DgbPGgBI.js";import"./useFocusRing-Cbnk9x9v.js";import"./useFocus-CanfFAPv.js";import"./Input-Bwk10Fre.js";import"./usePress-dDK8KT2l.js";import"./FocusScope-BtxR-tB9.js";import"./useCollator-DUmbl0t5.js";import"./useFormReset-B44cc5VH.js";import"./useFormValidation-pAg62KPr.js";import"./useEvent-CkPyHfFN.js";import"./useSpinButton-dnd_Vyro.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DEKlOZWf.js";import"./useControlledState-Dl4qb5FM.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
