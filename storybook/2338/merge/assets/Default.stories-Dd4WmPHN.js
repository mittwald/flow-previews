import{j as e}from"./iframe-CBpAxFwW.js";import{C as s}from"./CheckboxGroup-BkZIKDOF.js";import{L as i}from"./Label-D9Ki8i5H.js";import{F as d}from"./FieldError-0XXNPrVk.js";import{C as r}from"./Checkbox-DrrfEgp7.js";import{C as l}from"./CheckboxButton-IyrwoN2q.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-CH0RCE87.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZOc4zxt.js";import"./index-Dap5aG_0.js";import"./index-RPWHkLuG.js";import"./utils-DlBHsIHw.js";import"./useMakeFocusable-QBFUqWJs.js";import"./useFieldComponent-PtL7ZYGA.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-WnnJ-Qx8.js";import"./context-BCPYrVw6.js";import"./Label-D79gfyvC.js";import"./Hidden-CJdIoNgI.js";import"./FieldError-Bok8s5mY.js";import"./Text-CVgfjhJb.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CKVeXFp2.js";import"./AlertIcon-DpBhbRLN.js";import"./IconWarning-gYJb7yiz.js";import"./remote-Bqh6MTep.js";import"./RSPContexts-C97_Ku7o.js";import"./Form-AlqHr7_t.js";import"./useLabel-VON6CJHg.js";import"./useFormValidation-D1j-Spao.js";import"./useFocus-DWD5MHlE.js";import"./useFocusRing-DhcP44Or.js";import"./useControlledState-cot2auG7.js";import"./usePress-IARhWfJB.js";import"./useToggleState-C2wamhi2.js";import"./useFormReset-DcIaZXr3.js";import"./useFocusable-YEU6YEqR.js";import"./VisuallyHidden-BLMNvyRL.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:m("onChange"),isDisabled:!1,isReadOnly:!1},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},n={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},a={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(l,{value:"read",children:"Read"}),e.jsx(l,{value:"write",children:"Write"})]})},c={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(d,{children:"Select at least one to continue"})]})},p={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <Checkbox value="read" isDisabled>
        Read
      </Checkbox>
      <Checkbox value="write">Write</Checkbox>
    </CheckboxGroup>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <CheckboxButton value="read">Read</CheckboxButton>
      <CheckboxButton value="write">Write</CheckboxButton>
    </CheckboxGroup>
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props} isInvalid isRequired>
      <Label>Permissions</Label>
      <Checkbox value="read">Read</Checkbox>
      <Checkbox value="write">Write</Checkbox>
      <FieldError>Select at least one to continue</FieldError>
    </CheckboxGroup>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
      <Label>Options</Label>
      <Checkbox value="1">Option 1</Checkbox>
      <Checkbox value="2">Option 2</Checkbox>
      <Checkbox value="3">Option 3</Checkbox>
      <Checkbox value="4">Option 4</Checkbox>
      <Checkbox value="5">Option 5</Checkbox>
      <Checkbox value="6">Option 6</Checkbox>
    </CheckboxGroup>
}`,...p.parameters?.docs?.source}}};const $=["Default","CheckboxDisabled","CheckboxButtons","WithFieldError","ColumnLayout"];export{a as CheckboxButtons,n as CheckboxDisabled,p as ColumnLayout,t as Default,c as WithFieldError,$ as __namedExportsOrder,Z as default};
