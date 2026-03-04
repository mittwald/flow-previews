import{j as e}from"./iframe-CEWg6_IX.js";import{L as o}from"./Label-BaJSnICs.js";import{F as l}from"./FieldDescription-BJFWlccI.js";import{F as d}from"./FieldError-fCgHoEMk.js";import{T as i}from"./TimeField-1CA6QOoW.js";import{L as n}from"./DateInput-VYI2TtOV.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./index-BYd0o8d1.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./context-BwTFrxK2.js";import"./Label-CW66CEku.js";import"./utils-VWmQzJjV.js";import"./Hidden-CWIFSP7u.js";import"./Text-Bw_cIJde.js";import"./browser-D6O_MAcc.js";import"./EmulatedBoldText-DLcv393z.js";import"./Text-B3jOd0w4.js";import"./FieldError-B_BExaNJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Cd8Si-3W.js";import"./AlertIcon-BQQez7us.js";import"./IconWarning-D3143lfN.js";import"./remote-BClk6GLL.js";import"./useFieldComponent-BOMK2S5G.js";import"./Form-XtAuYD0I.js";import"./useLabel-B6JubenB.js";import"./Group-BY2zOSJX.js";import"./useFocusRing-6TkqSe16.js";import"./useFocus-BQlkvxNG.js";import"./Input-DI2XwVnV.js";import"./usePress-BNr3g4sC.js";import"./FocusScope-BNRdhUBQ.js";import"./useCollator-bALXm-sp.js";import"./useFormReset-D1AT4nVs.js";import"./useFormValidation-przZuKLk.js";import"./useSpinButton-QzrP8-0Q.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-DwZT0Q-z.js";import"./useControlledState-DV7blYjC.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,oe={title:"Form Controls/TimeField",component:i,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},argTypes:{granularity:{control:"inline-radio",options:["hour","minute","second"]}},render:r=>e.jsx(i,{onChange:c("onChange"),...r,children:e.jsx(o,{children:"Time"})})},t={},s={render:r=>e.jsxs(i,{...r,children:[e.jsx(o,{children:"Time"}),e.jsx(l,{children:"Enter a time"})]})},m={render:r=>e.jsx(i,{...r,defaultValue:new n(11,45),children:e.jsx(o,{children:"Time"})})},a={render:r=>e.jsxs(i,{...r,isInvalid:!0,isRequired:!0,children:[e.jsx(o,{children:"Time"}),e.jsx(d,{children:"Time is required"})]})},p={render:r=>e.jsx(i,{minValue:new n(8,0),maxValue:new n(16,0),...r,children:e.jsx(o,{children:"Time"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
