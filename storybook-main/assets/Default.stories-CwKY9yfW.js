import{j as e}from"./iframe-CF9WEugj.js";import{C as s}from"./CheckboxGroup-hkiVjqcN.js";import{L as a}from"./Label-ZZPbbDTF.js";import{F as u}from"./FieldError-D4UoR9vC.js";import{C as r}from"./Checkbox-ByF8GGLy.js";import{C as m}from"./CheckboxButton-Ds3-Jwm5.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-D7fW2Pkt.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BxrvjkvO.js";import"./index-C69BrDNc.js";import"./index-DHfgQlLW.js";import"./utils-B4BZttt0.js";import"./useMakeFocusable-BCa8qoV5.js";import"./useFieldComponent-B3P2g6wY.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DYCIwR0v.js";import"./context-Bi2P07EN.js";import"./Label-DWGH1ubm.js";import"./Hidden-Dk3zZO8j.js";import"./FieldError-BfE9I5LY.js";import"./Text-wlSF0gym.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-BTQfuEQp.js";import"./AlertIcon-Ck6cmA9H.js";import"./IconWarning-DXWyAVP8.js";import"./remote-DKS26xip.js";import"./RSPContexts-DsXbJK4N.js";import"./Form-Dv2vFItu.js";import"./useLabel-DF6AwuO5.js";import"./useFormValidation-BLUWg_De.js";import"./useFocus-DZR1guyz.js";import"./useControlledState-C05rL349.js";import"./useFocusRing-Ddjb8e7x.js";import"./usePress-DuLNiG6M.js";import"./useToggleState-DWZRhZpT.js";import"./useFormReset-w9h9-zRZ.js";import"./useFocusable-CSB6sBEJ.js";import"./VisuallyHidden-C66z9jQL.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
