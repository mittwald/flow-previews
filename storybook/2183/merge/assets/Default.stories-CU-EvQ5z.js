import{j as r}from"./iframe-BFixO3jI.js";import{L as d}from"./Label-DDQhNyeb.js";import{F as u}from"./FieldDescription-2Pf141Y1.js";import{F as T}from"./FieldError-DNu2tCaK.js";import{T as i}from"./TimeField-CFSDTT9i.js";import{K as l}from"./DateInput-C_jhI5AU.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CxS2pQtr.js";import"./index-BS5E-w2o.js";import"./index-Cr8VPbn2.js";import"./useLocalizedStringFormatter-DQxUdM9Y.js";import"./context-CaTu-1Q_.js";import"./Label-dlScXtXx.js";import"./utils-DlL1jtSe.js";import"./Hidden-eVS00tin.js";import"./Text-ZinnvgDr.js";import"./browser-CbH1E9WO.js";import"./EmulatedBoldText-Bnw4mltQ.js";import"./Text-BnIAmJK7.js";import"./FieldError-CjKulGDW.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconApp-DCuSf9pl.js";import"./remote-DXDa28-R.js";import"./IconDanger--IOlURNT.js";import"./useFieldComponent-mJg7O_gG.js";import"./Form-PAQ4bQ0C.js";import"./useLabel-R7EdTXDW.js";import"./Group-CzFM72Xs.js";import"./useFocusRing-B3xEYT1Y.js";import"./useFocus-CUhSw6Xa.js";import"./Input-_A_Ox9j0.js";import"./usePress-B3RLWuiX.js";import"./useFormValidation-B69zYJzr.js";import"./useControlledState-DTavY4xM.js";import"./FocusScope-jWcc3e5S.js";import"./useCollator-YeysG0II.js";import"./useFormReset-De7QdeR1.js";import"./useEvent-BtXn_qPN.js";import"./useSpinButton-VliaxOVD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CjydDL9_.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,tr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const mr=["Default","Disabled","Required","WithFieldDescription","WithDefaultValue","WithFieldError","Granularity","MinMaxValue"];export{o as Default,s as Disabled,p as Granularity,c as MinMaxValue,a as Required,m as WithDefaultValue,t as WithFieldDescription,n as WithFieldError,mr as __namedExportsOrder,tr as default};
