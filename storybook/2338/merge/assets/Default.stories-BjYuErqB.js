import{j as e}from"./iframe-BFddea_x.js";import{L as o}from"./Label-Cyz25dCh.js";import{F as l}from"./FieldDescription-DqsHbSnc.js";import{F as d}from"./FieldError-BfmusLP_.js";import{T as i}from"./TimeField-DmPceow4.js";import{L as n}from"./DateInput-z-gPZ-jZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./index-CcOYdQtn.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./Label-DEW42_UF.js";import"./utils-D-aZUMcZ.js";import"./Hidden-CWxwpwFD.js";import"./Text-B70YymId.js";import"./browser-PH3BUHM2.js";import"./EmulatedBoldText-C15EfUg3.js";import"./Text-DndMRLn5.js";import"./FieldError-Dj7b6ixT.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Cz5tkg5a.js";import"./AlertIcon-Bx7C3Aee.js";import"./IconWarning-Cwahpn-Q.js";import"./remote-DmjGOFpp.js";import"./useFieldComponent-DrOhnKye.js";import"./Form-Cmx7zRsN.js";import"./useLabel-C__elmJN.js";import"./Group-ChkAGHz_.js";import"./useFocusRing-Bo7DYhXU.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./Input-DbK2aUtO.js";import"./usePress-DZQSLH7U.js";import"./FocusScope-QY6lrLAj.js";import"./useCollator-CHE9npsz.js";import"./useFormReset-C1U9nA2s.js";import"./useFormValidation-CYvJLeFF.js";import"./useSpinButton-1pG5mt9H.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BuHxzijw.js";import"./useControlledState-lfI_swTV.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,te={title:"Form Controls/TimeField",component:i,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},argTypes:{granularity:{control:"inline-radio",options:["hour","minute","second"]}},render:r=>e.jsx(i,{onChange:c("onChange"),...r,children:e.jsx(o,{children:"Time"})})},t={},s={render:r=>e.jsxs(i,{...r,children:[e.jsx(o,{children:"Time"}),e.jsx(l,{children:"Enter a time"})]})},m={render:r=>e.jsx(i,{...r,defaultValue:new n(11,45),children:e.jsx(o,{children:"Time"})})},a={render:r=>e.jsxs(i,{...r,isInvalid:!0,isRequired:!0,children:[e.jsx(o,{children:"Time"}),e.jsx(d,{children:"Time is required"})]})},p={render:r=>e.jsx(i,{minValue:new n(8,0),maxValue:new n(16,0),...r,children:e.jsx(o,{children:"Time"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
