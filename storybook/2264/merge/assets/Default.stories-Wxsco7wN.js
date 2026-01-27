import{j as r}from"./iframe-BBX1MRm7.js";import{L as d}from"./Label-rzq6PBW8.js";import{F as u}from"./FieldDescription-D0h9kvob.js";import{F as T}from"./FieldError-DhG2ZYTr.js";import{T as i}from"./TimeField-g_4lx1BL.js";import{L as l}from"./DateInput-CRcakx-o.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-79ppapas.js";import"./index-BNLEYWOE.js";import"./index-CaVys9ny.js";import"./useLocalizedStringFormatter-BVVru5D3.js";import"./context-CZSumH6g.js";import"./Label-dmshrR3q.js";import"./utils-BavrKavc.js";import"./Hidden-BWx-3ZWW.js";import"./Text-bZjB6G95.js";import"./browser-94--rh0I.js";import"./EmulatedBoldText-B_ZrZeLf.js";import"./Text-Dx1GcOD_.js";import"./FieldError-C_UdMObt.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BesKIlLk.js";import"./AlertIcon-Bzw_XkQ4.js";import"./IconWarning-D1rdipwB.js";import"./remote-DQSNjr8v.js";import"./useFieldComponent-B_qWTKJx.js";import"./Form-CFIny17O.js";import"./useLabel-CwE3wslu.js";import"./Group-C1xuy7HP.js";import"./useFocusRing-Bm9tRP_O.js";import"./useFocus-CEW7w8cP.js";import"./Input-DVyLg-xr.js";import"./usePress-C19iJYYn.js";import"./useFormValidation-CjGCqCfM.js";import"./useControlledState-hVcOsExM.js";import"./FocusScope-geYyY5OG.js";import"./useCollator-BBRvdoV2.js";import"./useFormReset--Sx8IrxJ.js";import"./useEvent-9YiOq-bW.js";import"./useSpinButton-DoXlYfJ6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DAn95UZH.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
