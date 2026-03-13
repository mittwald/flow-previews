import{j as e}from"./iframe-CtEjVB66.js";import{L as o}from"./Label-CvAjEv-1.js";import{F as l}from"./FieldDescription-DOW1EL7Z.js";import{F as d}from"./FieldError-BzQCv4a3.js";import{T as i}from"./TimeField-DzJdsH1v.js";import{L as n}from"./DateInput--vlyF4Vw.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./index-it1EKrY8.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./context-DXMIHXTO.js";import"./Label-XCLRl25L.js";import"./utils-BuEQZICT.js";import"./Hidden-BjEfMFZ5.js";import"./Text-QCKh6xRo.js";import"./browser-CLHYf5YF.js";import"./EmulatedBoldText-B5kV7YCs.js";import"./Text-1qNOxJF7.js";import"./FieldError-DJZxrTcD.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DqjTg_vO.js";import"./AlertIcon-BaGtIfyD.js";import"./IconWarning-1CkAUSYF.js";import"./remote-4O72-jdB.js";import"./useFieldComponent-B7HNchXP.js";import"./Form-Bs4UrYBw.js";import"./useLabel-Cn5QMcKF.js";import"./Group-BKGRpIrc.js";import"./useFocusRing-B5ekdd71.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./Input-ByYkDHMz.js";import"./usePress-Cre2k4PJ.js";import"./FocusScope-SeuSo2RO.js";import"./useCollator-OQsKm26_.js";import"./useFormReset-2RZyXaKm.js";import"./useFormValidation-ClIfwgLl.js";import"./useSpinButton-D2elMItD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-CK_wnS0C.js";import"./useControlledState-D0kLTbtR.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,te={title:"Form Controls/TimeField",component:i,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},argTypes:{granularity:{control:"inline-radio",options:["hour","minute","second"]}},render:r=>e.jsx(i,{onChange:c("onChange"),...r,children:e.jsx(o,{children:"Time"})})},t={},s={render:r=>e.jsxs(i,{...r,children:[e.jsx(o,{children:"Time"}),e.jsx(l,{children:"Enter a time"})]})},m={render:r=>e.jsx(i,{...r,defaultValue:new n(11,45),children:e.jsx(o,{children:"Time"})})},a={render:r=>e.jsxs(i,{...r,isInvalid:!0,isRequired:!0,children:[e.jsx(o,{children:"Time"}),e.jsx(d,{children:"Time is required"})]})},p={render:r=>e.jsx(i,{minValue:new n(8,0),maxValue:new n(16,0),...r,children:e.jsx(o,{children:"Time"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const se=["Default","WithFieldDescription","WithDefaultValue","WithFieldError","MinMaxValue"];export{t as Default,p as MinMaxValue,m as WithDefaultValue,s as WithFieldDescription,a as WithFieldError,se as __namedExportsOrder,te as default};
