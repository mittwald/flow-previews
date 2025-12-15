import{j as r}from"./iframe-CH_aTfEL.js";import{L as d}from"./Label-BqL_a1sm.js";import{F as u}from"./TranslationProvider-CWofhASx.js";import{F as T}from"./FieldError-DGABQFH-.js";import{T as i}from"./TimeField-DIIb_dR8.js";import{K as l}from"./DateInput-BmXcwwi_.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-lamhxTiw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DjBCrPYH.js";import"./mergeRefs-BzpEnNcV.js";import"./index-XPJW_oiy.js";import"./useLocalizedStringFormatter-DVjHg6pM.js";import"./context-Dl7i2EFq.js";import"./ProgressBar-i73KRfPj.js";import"./utils-C8srcrY8.js";import"./Hidden-xsM_Dwee.js";import"./filterDOMProps-i7L6S0l1.js";import"./OverlayContextProvider-D2TVPKxb.js";import"./context-DeId9iUj.js";import"./Button-B1aqxMhV.js";import"./useFocusRing-AHO8ppps.js";import"./useFocusable-BEFnslrO.js";import"./RSPContexts-BB0WSv2m.js";import"./Collection-B-PgrD24.js";import"./CollectionBuilder-BkOVlqH0.js";import"./SelectionIndicator-CMFVzQc5.js";import"./Separator-IFFI1hok.js";import"./browser-CjAUGP0i.js";import"./useStatic-DNN3uXbB.js";import"./LoadingSpinner-Cfaoz3gV.js";import"./IconApp-B8Pdxs7V.js";import"./remote-ZsoG4C7l.js";import"./ariaLive-Cw13p-6Q.js";import"./Activity-DkWdwXP6.js";import"./Text-BRh_x9bF.js";import"./EmulatedBoldText-D1x6Y0F_.js";import"./useOverlayController-CA1JZthw.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./FieldError-CHaTpVnh.js";import"./IconDanger-DRvJdcN_.js";import"./useFieldComponent-JY3HqOd-.js";import"./Form-BfyCREyn.js";import"./Group-DrfJRaGf.js";import"./Input-B62kev5I.js";import"./useFormValidation-qjJTrH9J.js";import"./useFormReset-P8yugG2W.js";import"./useSpinButton-DNTXEWKr.js";import"./useFilter-DhuyWMn1.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,lr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},p={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},n={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
