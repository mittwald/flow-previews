import{j as e}from"./iframe-Q1VSciNm.js";import{C as s}from"./CheckboxGroup-ap5N3Qv5.js";import{L as a}from"./Label-CSNGUTYQ.js";import{F as u}from"./FieldError-RY9dMzjY.js";import{C as r}from"./Checkbox-B70c4KWt.js";import{C as m}from"./CheckboxButton-BE9A79P6.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-DuRoXoyo.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CPW7r7fk.js";import"./index-CfXDE0zj.js";import"./index-C3b6LhZY.js";import"./utils-Cfx54F97.js";import"./useMakeFocusable-DjYWrOdV.js";import"./useFieldComponent-1pDy4PKz.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CLD0dVJV.js";import"./context-BLO98TmC.js";import"./Label-DHpNBk6c.js";import"./Hidden-XjRrgtIh.js";import"./FieldError-QjdNZ-FN.js";import"./Text-FwHfWGj4.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-D1OEnaPR.js";import"./AlertIcon-C25ddq9s.js";import"./IconWarning-Bp2wXPUs.js";import"./remote-B8jFwJ6r.js";import"./RSPContexts-MtiuAHte.js";import"./Form-rX7Gw7MM.js";import"./useLabel-B4QM81Mz.js";import"./useFormValidation-DIYVKRGL.js";import"./useFocus-Dgy1zF73.js";import"./useControlledState-Cr50bzxN.js";import"./useFocusRing-oK86YNHq.js";import"./usePress-CkY15rDX.js";import"./useToggleState-Cf6vS_PZ.js";import"./useFormReset-C0YD-aRq.js";import"./useFocusable-BFiW_6Mc.js";import"./VisuallyHidden-btJzxMJm.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
