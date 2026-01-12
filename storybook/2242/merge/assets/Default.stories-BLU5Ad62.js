import{j as e}from"./iframe-Ca6Y6Qbd.js";import{C as s}from"./CheckboxGroup-DND2jEAq.js";import{L as a}from"./Label-BiOSulbp.js";import{F as u}from"./FieldError-Btuc_7Om.js";import{C as r}from"./Checkbox-Dqpb8BeU.js";import{C as m}from"./CheckboxButton-DPjwLMcn.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-D5Q_My3I.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D9fMwVbm.js";import"./index-Dtyg9OU-.js";import"./index-dqS1_mS3.js";import"./utils-CgPiupY7.js";import"./useMakeFocusable-563tR2pS.js";import"./useFieldComponent-Drxg4ucu.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DPFID8Bg.js";import"./context-BSVjMcq9.js";import"./Label-oMJsQOKa.js";import"./Hidden-B5n9q6va.js";import"./FieldError-DTh-affr.js";import"./Text-XI5tIYL5.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-PH5mi2hk.js";import"./AlertIcon-CE0IjQiw.js";import"./IconWarning-DE1Emhrq.js";import"./remote-B__m5VQE.js";import"./RSPContexts-CuMU_eQB.js";import"./Form-DvyEl8-X.js";import"./useLabel-DSKkVaVQ.js";import"./useFormValidation-CFRjiWi1.js";import"./useFocus-YlOppDM-.js";import"./useControlledState-CsFJYMR6.js";import"./useFocusRing-DB26dgIQ.js";import"./usePress-7njUzVdk.js";import"./useToggleState-C8bfozUY.js";import"./useFormReset-QXLzcWbc.js";import"./useFocusable-DsA9Nlin.js";import"./VisuallyHidden-DA0DNDbd.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
