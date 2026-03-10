import{j as e}from"./iframe-Bge_iwzq.js";import{L as o}from"./Label-DsCIDP_n.js";import{F as l}from"./FieldDescription-CKLwRnm1.js";import{F as d}from"./FieldError-D2SilRMV.js";import{T as i}from"./TimeField-CONML7fo.js";import{L as n}from"./DateInput-DlbpblW7.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./index-Dbbom8kG.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./Label-CCD88BdD.js";import"./utils-rhPAe061.js";import"./Hidden-CDcFNb6q.js";import"./Text-Bo3CKbUr.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";import"./Text-70WXc8nw.js";import"./FieldError-Cv0VAgMN.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BlzMkriF.js";import"./AlertIcon-DJ3CSUsO.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";import"./useFieldComponent-DrAtnMqi.js";import"./Form-YPyJtwoF.js";import"./useLabel-ltgoN8N_.js";import"./Group-Bwp5mwlQ.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocus-M-LntWI3.js";import"./Input-BXTXjJEE.js";import"./usePress-BXEJU3rI.js";import"./FocusScope-DsvOCLtc.js";import"./useCollator-BqBbPKoz.js";import"./useFormReset-CAOi_S_S.js";import"./useFormValidation-SyV8SqLU.js";import"./useSpinButton-enwZH7VM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-Cdd3kYxR.js";import"./useControlledState-CyAGSHwZ.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,oe={title:"Form Controls/TimeField",component:i,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},argTypes:{granularity:{control:"inline-radio",options:["hour","minute","second"]}},render:r=>e.jsx(i,{onChange:c("onChange"),...r,children:e.jsx(o,{children:"Time"})})},t={},s={render:r=>e.jsxs(i,{...r,children:[e.jsx(o,{children:"Time"}),e.jsx(l,{children:"Enter a time"})]})},m={render:r=>e.jsx(i,{...r,defaultValue:new n(11,45),children:e.jsx(o,{children:"Time"})})},a={render:r=>e.jsxs(i,{...r,isInvalid:!0,isRequired:!0,children:[e.jsx(o,{children:"Time"}),e.jsx(d,{children:"Time is required"})]})},p={render:r=>e.jsx(i,{minValue:new n(8,0),maxValue:new n(16,0),...r,children:e.jsx(o,{children:"Time"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
