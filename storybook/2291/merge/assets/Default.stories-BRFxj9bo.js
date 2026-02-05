import{j as e}from"./iframe-BL1IY_6V.js";import{C as s}from"./CheckboxGroup-BEcJpZWP.js";import{L as a}from"./Label-8Io_X3px.js";import{F as u}from"./FieldError-D0yWaYHs.js";import{C as r}from"./Checkbox-C7C-Nc0w.js";import{C as m}from"./CheckboxButton-DNICEJZa.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-Z6rNe4Ir.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C0J7Ul52.js";import"./index-DIrmHlIA.js";import"./index-Cr6jOlTO.js";import"./utils-GyL2rjZN.js";import"./useMakeFocusable-Dv_qirCt.js";import"./useFieldComponent-oZ5IqIdY.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-QSIAvPJu.js";import"./context-BeO7KH58.js";import"./Label-StE6sPfa.js";import"./Hidden-B9Rk5_3H.js";import"./FieldError-CCCCRqJ9.js";import"./Text-B4yGITBG.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BDrbtAj0.js";import"./AlertIcon-B2R_BHtC.js";import"./IconWarning-BTI7YBWG.js";import"./remote-BuZW91cH.js";import"./RSPContexts-BsiO56QH.js";import"./Form-Ca3ASx7C.js";import"./useLabel-CyH2amP0.js";import"./useFormValidation-DCrH4OQY.js";import"./useFocus-D7_v9YO6.js";import"./useFocusRing-DEMWgzWY.js";import"./useControlledState-CA6yhcg7.js";import"./usePress-CxRwZ9-L.js";import"./useToggleState-CSM3AEzw.js";import"./useFormReset-C4J5P-lS.js";import"./useFocusable-CUtc6O_Q.js";import"./VisuallyHidden-CgqIxBlU.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
