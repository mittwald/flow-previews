import{j as e}from"./iframe-Bj8CIgLy.js";import{C as s}from"./CheckboxGroup-DE2KZzeS.js";import{L as a}from"./Label-DCfOJgVU.js";import{F as u}from"./FieldError-Dbjs-A5K.js";import{C as r}from"./Checkbox-DEskWRV1.js";import{C as m}from"./CheckboxButton-DFYsN-EY.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-C2Om1Els.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./index-DYakERwo.js";import"./utils-D41FTHpf.js";import"./useMakeFocusable-D2WqMYFi.js";import"./useFieldComponent-DFS7CEov.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./context-RK9vgtK2.js";import"./Label-BAoc3jdD.js";import"./Hidden-DWJk28Vx.js";import"./FieldError-cTj-tlV1.js";import"./Text-CVMu3Bei.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Bt0Daj0V.js";import"./AlertIcon-Bub-4wJk.js";import"./IconWarning-KvO0562x.js";import"./remote-ChNLl0N8.js";import"./RSPContexts-C3RQOwqv.js";import"./Form-CdHdNrpC.js";import"./useLabel-j5JIlG5u.js";import"./useFormValidation-CuYWsRMr.js";import"./useFocus-BJLP4kuV.js";import"./useFocusRing-0HtVE4-I.js";import"./useControlledState-C0IHmt74.js";import"./usePress-BLrqdZMB.js";import"./useToggleState-BcXaMmc-.js";import"./useFormReset-DPVe5t_C.js";import"./useFocusable-DNf9Dm0r.js";import"./VisuallyHidden-D10Fyvvv.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <Checkbox value="read" isDisabled>
        Read
      </Checkbox>
      <Checkbox value="write">Write</Checkbox>
    </CheckboxGroup>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <CheckboxButton value="read">Read</CheckboxButton>
      <CheckboxButton value="write">Write</CheckboxButton>
    </CheckboxGroup>
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props} isInvalid isRequired>
      <Label>Permissions</Label>
      <Checkbox value="read">Read</Checkbox>
      <Checkbox value="write">Write</Checkbox>
      <FieldError>Select at least one to continue</FieldError>
    </CheckboxGroup>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
      <Label>Options</Label>
      <Checkbox value="1">Option 1</Checkbox>
      <Checkbox value="2">Option 2</Checkbox>
      <Checkbox value="3">Option 3</Checkbox>
      <Checkbox value="4">Option 4</Checkbox>
      <Checkbox value="5">Option 5</Checkbox>
      <Checkbox value="6">Option 6</Checkbox>
    </CheckboxGroup>
}`,...d.parameters?.docs?.source}}};const re=["Default","CheckboxGroupDisabled","ReadOnly","CheckboxDisabled","CheckboxButtons","WithFieldError","ColumnLayout"];export{p as CheckboxButtons,c as CheckboxDisabled,i as CheckboxGroupDisabled,d as ColumnLayout,t as Default,n as ReadOnly,l as WithFieldError,re as __namedExportsOrder,ee as default};
