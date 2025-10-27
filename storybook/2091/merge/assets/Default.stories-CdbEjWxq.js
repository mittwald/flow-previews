import{j as r}from"./iframe-CgV0BA21.js";import{L as d}from"./Label-Bxuf1S0W.js";import{F as u}from"./FieldDescription-CQY0EwbT.js";import{F as T}from"./useFieldComponent-D1IKYPO_.js";import{T as i}from"./TimeField-CqRRbVRC.js";import{M as l}from"./DateField-yaCHHNks.js";import"./index-nuYtCEEu.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C-HH3qvd.js";import"./index-DDuhgqRy.js";import"./index-LOR_5P9o.js";import"./useLocalizedStringFormatter-ByloWLWI.js";import"./context-DHnf2uKc.js";import"./Label-CttY7hce.js";import"./utils-BtxgbS4l.js";import"./Hidden-jMQa5TyR.js";import"./Text-BKw3N1Oz.js";import"./browser-BkNcCpiL.js";import"./EmulatedBoldText-DlIqC6uZ.js";import"./Text-DoKxmv7q.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-Cjg_6qhe.js";import"./react-children-utilities-D5-pLFdL.js";import"./ClearPropsContext-BLhIxcUa.js";import"./useMakeFocusable-BcUeToCB.js";import"./Form-Co57238C.js";import"./useLabel-B3KDK_sh.js";import"./Group-BkfrkqlC.js";import"./useFocusRing-D4YLibcx.js";import"./useFocus-DCA5O52l.js";import"./Input-CWgJEKQk.js";import"./usePress-Dh998neg.js";import"./useFormValidation-AnXxOg_8.js";import"./useControlledState-REzwF7fx.js";import"./FocusScope-0arVmBSz.js";import"./useCollator-vRN69CzX.js";import"./useFormReset-DmIBBfXo.js";import"./useEvent-DaVswHd3.js";import"./useSpinButton-Bb1M1iAv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-C2-nvPSk.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,ar={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
