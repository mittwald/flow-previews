import{j as r}from"./iframe-VGYf9uSR.js";import{L as d}from"./Label--ix077tG.js";import{F as u}from"./TranslationProvider-Ck575ucT.js";import{F as T}from"./FieldError-CLzXjLUN.js";import{T as i}from"./TimeField-B8ThngTd.js";import{K as l}from"./DateInput-gk7Swpar.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-lamhxTiw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BJkjz94f.js";import"./mergeRefs-CoTJmqCf.js";import"./index-Bm_Mzlx6.js";import"./useLocalizedStringFormatter-DhcIgiuG.js";import"./context-CKMs_ua8.js";import"./ProgressBar-Bb-cXNA8.js";import"./utils-BB4afhje.js";import"./Hidden-apt2TR_r.js";import"./filterDOMProps-i7L6S0l1.js";import"./OverlayContextProvider-Tja93TmG.js";import"./context-DPoGZDoo.js";import"./Button-DHkv2oj9.js";import"./useFocusRing-BSBcwiCP.js";import"./useFocusable-CkZtY9Qx.js";import"./RSPContexts-D2Dnlu1I.js";import"./Collection-B44oh5ya.js";import"./CollectionBuilder-DsdXZBim.js";import"./SelectionIndicator-Byl_MQLN.js";import"./Separator-BZpKfwRn.js";import"./browser-BY7YAvyX.js";import"./useStatic-DRLyxIeE.js";import"./LoadingSpinner-ChrQQ-Zb.js";import"./IconChevronDown-Dgoj3MhV.js";import"./remote-B1HlY5fu.js";import"./ariaLive-Cyrepnod.js";import"./Activity-CX_biUm5.js";import"./Text-CGbJaU4z.js";import"./EmulatedBoldText-BBr3yRY7.js";import"./useOverlayController-BKXV4RSL.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./FieldError-AWx0XaHn.js";import"./IconDanger-B5Kx1O1H.js";import"./useFieldComponent-DiUYLu0s.js";import"./Form-CEBTvUmY.js";import"./Group-DDpm-w1G.js";import"./Input-DAGTqZv7.js";import"./useFormValidation-DNcRsa8m.js";import"./useFormReset-D2LFGRel.js";import"./useSpinButton-Cygacr8v.js";import"./useFilter-B-tjL8Bm.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,lr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props} isInvalid isRequired>
      <Label>Time</Label>
      <FieldError>Time is required</FieldError>
    </TimeField>
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    granularity: "hour"
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    minValue: new Time(8, 0),
    maxValue: new Time(16, 0)
  }
}`,...c.parameters?.docs?.source}}};const ur=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,n as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,p as WithFieldError,ur as __namedExportsOrder,lr as default};
