import{j as e}from"./iframe-BcqfzoOA.js";import{L as o}from"./Label-CQjtN3Gn.js";import{F as l}from"./FieldDescription-BAMY7EMv.js";import{F as d}from"./FieldError-COredAmn.js";import{T as i}from"./TimeField-C9XRWsFv.js";import{L as n}from"./DateInput-CJ3TBHPi.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./index-AZuRIocR.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./Label-B-eADV2d.js";import"./utils-Bwp7PlhH.js";import"./Hidden-BSnUj9OE.js";import"./Text-1XRmWCfn.js";import"./browser-CFz57TUe.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./Text-CALsrB3x.js";import"./FieldError-BECkkLSz.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BT22HNok.js";import"./AlertIcon-DTPBfeU8.js";import"./IconWarning-Bupv8NYZ.js";import"./remote-x3smQXnv.js";import"./useFieldComponent-CSNqGKWj.js";import"./Form-CTjpA6Q_.js";import"./useLabel-QCIml9BE.js";import"./Group-CA7st2Jb.js";import"./useFocusRing-CK0lr4fW.js";import"./useFocus-BgTDZkkG.js";import"./Input-Bku180kF.js";import"./usePress-Lauho74f.js";import"./FocusScope-CPNafWEX.js";import"./useCollator-B74toyi9.js";import"./useFormReset-neBkOLPK.js";import"./useFormValidation-BMgNFXni.js";import"./useSpinButton-Cc2xdZDW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useFilter-BCT5iaSQ.js";import"./useControlledState-DVjnE-U4.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,oe={title:"Form Controls/TimeField",component:i,args:{isDisabled:!1,isReadOnly:!1,isRequired:!1},argTypes:{granularity:{control:"inline-radio",options:["hour","minute","second"]}},render:r=>e.jsx(i,{onChange:c("onChange"),...r,children:e.jsx(o,{children:"Time"})})},t={},s={render:r=>e.jsxs(i,{...r,children:[e.jsx(o,{children:"Time"}),e.jsx(l,{children:"Enter a time"})]})},m={render:r=>e.jsx(i,{...r,defaultValue:new n(11,45),children:e.jsx(o,{children:"Time"})})},a={render:r=>e.jsxs(i,{...r,isInvalid:!0,isRequired:!0,children:[e.jsx(o,{children:"Time"}),e.jsx(d,{children:"Time is required"})]})},p={render:r=>e.jsx(i,{minValue:new n(8,0),maxValue:new n(16,0),...r,children:e.jsx(o,{children:"Time"})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
