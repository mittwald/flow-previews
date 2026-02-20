import{j as e}from"./iframe-BXGfha1q.js";import{L as o}from"./Label-DmvSuQEb.js";import{F as l}from"./FieldDescription-B2zafCFx.js";import{F as d}from"./FieldError-B0wR5GbE.js";import{T as i}from"./TimeField-CkoGAOk4.js";import{L as n}from"./DateInput-DmWEdctL.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./index-D0PS_Jbm.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./context-C9BhwF0E.js";import"./Label-B_ylra4b.js";import"./utils-DDzB-hS3.js";import"./Hidden-CY2KAX5F.js";import"./Text-BbFupL_Y.js";import"./browser-P6njm6Fr.js";import"./EmulatedBoldText-CFo8qKvb.js";import"./Text-B1oZgTuN.js";import"./FieldError-B-_MD7Je.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-D4bpqMRF.js";import"./AlertIcon-DqNX7jjv.js";import"./IconWarning-1Z1PxSqQ.js";import"./remote-DEIhwdad.js";import"./useFieldComponent-BBRXs3en.js";import"./Form-C11JLohN.js";import"./useLabel-DPznQWXv.js";import"./Group-C9lE8UeE.js";import"./useFocusRing-DmfdXYcF.js";import"./useFocus-WJp8rgri.js";import"./Input-DlEaT4nu.js";import"./usePress-DFEm-gMh.js";import"./FocusScope-DorKcprJ.js";import"./useCollator-CF4rrgc2.js";import"./useFormReset-9RWtv4Ar.js";import"./useFormValidation-51U-qV9x.js";import"./useSpinButton-CWSdPqMD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CLtB70fk.js";import"./useControlledState-Wh-cgAjH.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,oe={title:"Form Controls/TimeField",component:i,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},argTypes:{granularity:{control:"inline-radio",options:["hour","minute","second"]}},render:r=>e.jsx(i,{onChange:c("onChange"),...r,children:e.jsx(o,{children:"Time"})})},t={},s={render:r=>e.jsxs(i,{...r,children:[e.jsx(o,{children:"Time"}),e.jsx(l,{children:"Enter a time"})]})},m={render:r=>e.jsx(i,{...r,defaultValue:new n(11,45),children:e.jsx(o,{children:"Time"})})},a={render:r=>e.jsxs(i,{...r,isInvalid:!0,isRequired:!0,children:[e.jsx(o,{children:"Time"}),e.jsx(d,{children:"Time is required"})]})},p={render:r=>e.jsx(i,{minValue:new n(8,0),maxValue:new n(16,0),...r,children:e.jsx(o,{children:"Time"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
