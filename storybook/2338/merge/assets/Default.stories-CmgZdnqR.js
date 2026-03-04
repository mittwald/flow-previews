import{j as e}from"./iframe-CBpAxFwW.js";import{L as o}from"./Label-D9Ki8i5H.js";import{F as l}from"./FieldDescription-cbN0tmKj.js";import{F as d}from"./FieldError-0XXNPrVk.js";import{T as i}from"./TimeField-DoVhtIca.js";import{L as n}from"./DateInput-DThqx0xn.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./index-RPWHkLuG.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./context-BCPYrVw6.js";import"./Label-D79gfyvC.js";import"./utils-DlBHsIHw.js";import"./Hidden-CJdIoNgI.js";import"./Text-DmIlada7.js";import"./browser-Bc0l3UGu.js";import"./EmulatedBoldText-CvSlY-lg.js";import"./Text-CVgfjhJb.js";import"./FieldError-Bok8s5mY.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CKVeXFp2.js";import"./AlertIcon-DpBhbRLN.js";import"./IconWarning-gYJb7yiz.js";import"./remote-Bqh6MTep.js";import"./useFieldComponent-PtL7ZYGA.js";import"./Form-AlqHr7_t.js";import"./useLabel-VON6CJHg.js";import"./Group-gQkRnR_I.js";import"./useFocusRing-DhcP44Or.js";import"./useFocus-DWD5MHlE.js";import"./Input-lDcabwyv.js";import"./usePress-IARhWfJB.js";import"./FocusScope-cF8Pb5h6.js";import"./useCollator-bX69lL-k.js";import"./useFormReset-DcIaZXr3.js";import"./useFormValidation-D1j-Spao.js";import"./useSpinButton-D6KrnP9n.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Cou16l0M.js";import"./useControlledState-cot2auG7.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,oe={title:"Form Controls/TimeField",component:i,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},argTypes:{granularity:{control:"inline-radio",options:["hour","minute","second"]}},render:r=>e.jsx(i,{onChange:c("onChange"),...r,children:e.jsx(o,{children:"Time"})})},t={},s={render:r=>e.jsxs(i,{...r,children:[e.jsx(o,{children:"Time"}),e.jsx(l,{children:"Enter a time"})]})},m={render:r=>e.jsx(i,{...r,defaultValue:new n(11,45),children:e.jsx(o,{children:"Time"})})},a={render:r=>e.jsxs(i,{...r,isInvalid:!0,isRequired:!0,children:[e.jsx(o,{children:"Time"}),e.jsx(d,{children:"Time is required"})]})},p={render:r=>e.jsx(i,{minValue:new n(8,0),maxValue:new n(16,0),...r,children:e.jsx(o,{children:"Time"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props}>
      <Label>Time</Label>
      <FieldDescription>Enter a time</FieldDescription>
    </TimeField>
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props} defaultValue={new Time(11, 45)}>
      <Label>Time</Label>
    </TimeField>
}`,...m.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField {...props} isInvalid isRequired>
      <Label>Time</Label>
      <FieldError>Time is required</FieldError>
    </TimeField>
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <TimeField minValue={new Time(8, 0)} maxValue={new Time(16, 0)} {...props}>
      <Label>Time</Label>
    </TimeField>
}`,...p.parameters?.docs?.source}}};const te=["Default","WithFieldDescription","WithDefaultValue","WithFieldError","MinMaxValue"];export{t as Default,p as MinMaxValue,m as WithDefaultValue,s as WithFieldDescription,a as WithFieldError,te as __namedExportsOrder,oe as default};
