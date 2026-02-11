import{j as e}from"./iframe-Cq8OhOqi.js";import{C as s}from"./CheckboxGroup-DVOx9Etd.js";import{L as a}from"./Label-D-4zWGkt.js";import{F as u}from"./FieldError-2IpGOPbh.js";import{C as r}from"./Checkbox-D582kYPr.js";import{C as m}from"./CheckboxButton-UVfZch2N.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-DHjBcVOa.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPlAJrQX.js";import"./index-CDojQULy.js";import"./index-CtMt1etx.js";import"./utils-Bubk6yJw.js";import"./useMakeFocusable-DmOA8TBK.js";import"./useFieldComponent-BYb5VnRy.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-B4BWJZRT.js";import"./context-EUTE_30t.js";import"./Label-BIWw7tEO.js";import"./Hidden-BxQeKZxe.js";import"./FieldError-BGnsbaLE.js";import"./Text-BrptySpj.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-aZpP8wGh.js";import"./AlertIcon-4JwX6npd.js";import"./IconWarning-D6WB6H32.js";import"./remote-D-3bgxwF.js";import"./RSPContexts-CKy-IICl.js";import"./Form-B1CYZolU.js";import"./useLabel-Ddb4-Ews.js";import"./useFormValidation-DYnqTuxD.js";import"./useFocus-hSjeZcP9.js";import"./useFocusRing-C66f8wZh.js";import"./useControlledState-DRmDoHXV.js";import"./usePress-ChoIOqc4.js";import"./useToggleState-DVr2YOMM.js";import"./useFormReset-B4zM24P8.js";import"./useFocusable-Cka2f_Hf.js";import"./VisuallyHidden-CN_7F8uI.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
