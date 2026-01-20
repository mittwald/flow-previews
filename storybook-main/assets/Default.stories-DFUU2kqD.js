import{j as e}from"./iframe-C5hcdLE6.js";import{C as s}from"./CheckboxGroup-Bie1ifat.js";import{L as a}from"./Label-KhBIX57N.js";import{F as u}from"./FieldError-CRlQMLVN.js";import{C as r}from"./Checkbox-BpanE4or.js";import{C as m}from"./CheckboxButton-DRieukoa.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-DB0ermnn.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DfDzLOdb.js";import"./index-CrcBTJfi.js";import"./index-ClIq6yug.js";import"./utils-B3GIFt3C.js";import"./useMakeFocusable-4hk7peMl.js";import"./useFieldComponent-t_EOnv-a.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DggJiG-V.js";import"./context-E1uxYtQv.js";import"./Label-Cdw77YDw.js";import"./Hidden-CzLEuVYW.js";import"./FieldError-CqTmSUdd.js";import"./Text-79_FySwa.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-Dgs9QBLV.js";import"./AlertIcon-DM3zFbIf.js";import"./IconWarning-BGpxRwU-.js";import"./remote-DfH19er1.js";import"./RSPContexts-BMj0h4_3.js";import"./Form-Dgtv3yvc.js";import"./useLabel-DIyDpHH2.js";import"./useFormValidation-BJOScXHE.js";import"./useFocus-Fr_BfSOs.js";import"./useControlledState-C9jQ4AxE.js";import"./useFocusRing-B86g4qKF.js";import"./usePress-CyQlFp9g.js";import"./useToggleState-ZZPmhJzz.js";import"./useFormReset-BnJ7w8Tn.js";import"./useFocusable-xzWj-wm9.js";import"./VisuallyHidden-n5FPXG3E.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
