import{j as r}from"./iframe-jaoHr1AV.js";import{L as d}from"./Label-Kdaxftsp.js";import{F as u}from"./FieldDescription-i3dtwlr1.js";import{F as T}from"./FieldError-SYu40l7i.js";import{T as i}from"./TimeField-CvWtsTq2.js";import{L as l}from"./DateInput-_5rOUO-8.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CrOXvTqi.js";import"./index-CR-YYcjl.js";import"./index-BFCtAlHX.js";import"./useLocalizedStringFormatter-B75Dx9X1.js";import"./context-CW7DVTht.js";import"./Label-Dvi8c8U4.js";import"./utils-CQw042JL.js";import"./Hidden-BCtaYkH3.js";import"./Text-Cs3EhNpG.js";import"./browser-gEDtR-OK.js";import"./EmulatedBoldText-DDNOwYGP.js";import"./Text-DE-JOko8.js";import"./FieldError-D7CvISHf.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-C4ghe_z5.js";import"./AlertIcon-BkGbvGvC.js";import"./IconWarning-DyIA4Uof.js";import"./remote-CF-AY8I2.js";import"./useFieldComponent-D-iYVveA.js";import"./Form-B8e0R8nB.js";import"./useLabel-XwramTU6.js";import"./Group-7_zwoJgV.js";import"./useFocusRing-CA-tHgfv.js";import"./useFocus-GROhvItb.js";import"./Input-eh_683Iq.js";import"./usePress-WaW8O6jQ.js";import"./FocusScope-B5Ctyl2K.js";import"./useCollator-CCOGTm23.js";import"./useFormReset-B3LvCMGn.js";import"./useFormValidation-B1svUyZM.js";import"./useEvent-NPetVyFU.js";import"./useSpinButton-DiWTo43F.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-iFvTbk8Z.js";import"./useControlledState-H8E68uKK.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
