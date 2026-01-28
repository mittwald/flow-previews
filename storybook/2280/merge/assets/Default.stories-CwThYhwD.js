import{j as e}from"./iframe-Cx5kJuuA.js";import{C as s}from"./CheckboxGroup-BTsY9cr-.js";import{L as a}from"./Label-Da9GdDN8.js";import{F as u}from"./FieldError-BCxxTn6h.js";import{C as r}from"./Checkbox-1jdaJREY.js";import{C as m}from"./CheckboxButton-C1WwQj9B.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-CnDOjd85.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CLOWDrbo.js";import"./index-DK83sfEz.js";import"./index-BqoyVlZ7.js";import"./utils-Nk4paMN-.js";import"./useMakeFocusable-CUyUw7BO.js";import"./useFieldComponent-DpBpP7du.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CIuieC62.js";import"./context-CpMzWCEP.js";import"./Label-DPB2sN32.js";import"./Hidden-BIWwaIRP.js";import"./FieldError-UHRLTLut.js";import"./Text-CA_aswYo.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BwdeDomp.js";import"./AlertIcon-DvMPToF_.js";import"./IconWarning-BDhnLpaV.js";import"./remote-C9UyjJTP.js";import"./RSPContexts-CFLmy0zp.js";import"./Form-BHxxWVUu.js";import"./useLabel-B4Wunpgz.js";import"./useFormValidation-CmFpdOnE.js";import"./useFocus-DbL3EqSH.js";import"./useFocusRing-idhb0ztA.js";import"./useControlledState-D1xezhK5.js";import"./usePress-LbgF0OFY.js";import"./useToggleState-Cl2cpZed.js";import"./useFormReset-roVUmu5c.js";import"./useFocusable-BtlUXhgP.js";import"./VisuallyHidden-i8gu61hs.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
