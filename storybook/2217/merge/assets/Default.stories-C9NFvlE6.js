import{j as e}from"./iframe-D3NxpU8u.js";import{C as s}from"./CheckboxGroup-DgZZllaJ.js";import{L as a}from"./Label-DxphAsDG.js";import{F as u}from"./FieldError-CpaS6eds.js";import{C as r}from"./Checkbox-Cszf_z96.js";import{C as m}from"./CheckboxButton-Ce-17dBr.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-BaFneyJX.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CiUf0vQo.js";import"./index-OgwKEPCl.js";import"./index-A0HM7_1k.js";import"./utils-C5WN15Gt.js";import"./useMakeFocusable-s41lVNwz.js";import"./useFieldComponent-BWjf97vE.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Dr59zSqF.js";import"./context-CgVi_M53.js";import"./Label-Dn1Y_s7S.js";import"./Hidden-CJU5gFpe.js";import"./FieldError-C5ECIufL.js";import"./Text-ChwArYoy.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CbcK8G8M.js";import"./remote-Cz3kT78_.js";import"./RSPContexts-ClgHsKPZ.js";import"./Form-CjVHpqWM.js";import"./useLabel-DrWOXoHd.js";import"./useFormValidation-sS7ClLRw.js";import"./useFocus-C0SaCLF4.js";import"./useControlledState-CQ4qwdX_.js";import"./useFocusRing-EPMGJgfm.js";import"./usePress-Byc6DAfn.js";import"./useToggleState-CNTmI9U3.js";import"./useFormReset-LpCZRAmu.js";import"./useFocusable-C5GnurYQ.js";import"./VisuallyHidden-CbY3TGrn.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const $=["Default","CheckboxGroupDisabled","ReadOnly","CheckboxDisabled","CheckboxButtons","WithFieldError","ColumnLayout"];export{p as CheckboxButtons,c as CheckboxDisabled,i as CheckboxGroupDisabled,d as ColumnLayout,t as Default,n as ReadOnly,l as WithFieldError,$ as __namedExportsOrder,Z as default};
