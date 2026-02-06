import{j as r}from"./iframe-DITN2CQJ.js";import{L as d}from"./Label-DJUexJHI.js";import{F as u}from"./FieldDescription-juZacfyE.js";import{F as T}from"./FieldError-B_BzuzIl.js";import{T as i}from"./TimeField-DSFL8L-W.js";import{L as l}from"./DateInput-CB8kF9kF.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-dTWTX0ol.js";import"./index-DMvUg0Ng.js";import"./index-CwMYtruy.js";import"./useLocalizedStringFormatter-Bu36a-Wr.js";import"./context-DSmvJi-9.js";import"./Label-B4MEtlDn.js";import"./utils-BKdkt1x6.js";import"./Hidden-C_aQw1AA.js";import"./Text-CADg3_Hr.js";import"./browser-BAwbicjx.js";import"./EmulatedBoldText-BtAVmnSC.js";import"./Text-C3mpKQD6.js";import"./FieldError-DyUcL9VR.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Kmcv7hqN.js";import"./AlertIcon-C5wCr6jC.js";import"./IconWarning-CkCNWluG.js";import"./remote-C6sL0hfk.js";import"./useFieldComponent-CFjzq3ou.js";import"./Form-CKWsALrB.js";import"./useLabel-DxgBaz-V.js";import"./Group-pLm-fq-m.js";import"./useFocusRing-DGbEI6JP.js";import"./useFocus-jV9bksDI.js";import"./Input-Ct_cW2oz.js";import"./usePress-Bo3aLfgI.js";import"./useFormValidation-PWdhcFqO.js";import"./useControlledState-CEL2ngQO.js";import"./FocusScope-1T1zyEBb.js";import"./useCollator-CnUW-4Ed.js";import"./useFormReset-DRsSvhwB.js";import"./useEvent-ByNOcoAW.js";import"./useSpinButton-jhcoRUKm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Dnu8mjJR.js";const{action:F}=__STORYBOOK_MODULE_ACTIONS__,mr={title:"Form Controls/TimeField",component:i,render:e=>r.jsx(i,{onChange:F("onChange"),...e,children:r.jsx(d,{children:"Time"})})},o={},s={args:{isDisabled:!0}},a={args:{isRequired:!0}},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(d,{children:"Time"}),r.jsx(u,{children:"Enter a time"})]})},m={render:e=>r.jsx(i,{...e,defaultValue:new l(11,45),children:r.jsx(d,{children:"Time"})})},n={render:e=>r.jsxs(i,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(d,{children:"Time"}),r.jsx(T,{children:"Time is required"})]})},p={args:{granularity:"hour"}},c={args:{minValue:new l(8,0),maxValue:new l(16,0)}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
