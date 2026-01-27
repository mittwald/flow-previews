import{j as e}from"./iframe-BK9Ry9wr.js";import{C as s}from"./CheckboxGroup-DnuF1dmG.js";import{L as a}from"./Label-MHPgjcAC.js";import{F as u}from"./FieldError-Dlnwp2IY.js";import{C as r}from"./Checkbox-Cn6Zr5m-.js";import{C as m}from"./CheckboxButton-DK98cytH.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-BJ0tfacp.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DHXq45QP.js";import"./index-DN2_BW85.js";import"./index-DqsXJ4xp.js";import"./utils-DO-BnPGQ.js";import"./useMakeFocusable-Bt_xvJUh.js";import"./useFieldComponent-DnU67IFr.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C7EPZ_KA.js";import"./context-DsIoSqto.js";import"./Label-BzCkyqHu.js";import"./Hidden-PKJk_aj-.js";import"./FieldError-jtZpQJaz.js";import"./Text-Cq5Rc76r.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-Q3UmWydJ.js";import"./AlertIcon-CZTB9fHB.js";import"./IconWarning-ClqYagFF.js";import"./remote-BKPS1KcS.js";import"./RSPContexts--7QpwlJX.js";import"./Form-DgYJKMgS.js";import"./useLabel-MQsZvy4I.js";import"./useFormValidation-4onogkfY.js";import"./useFocus-C5fN754a.js";import"./useControlledState-D5gBJyZQ.js";import"./useFocusRing-Dknf048Z.js";import"./usePress-DlcvFeQS.js";import"./useToggleState-CeqDToFs.js";import"./useFormReset-CaS7VrAz.js";import"./useFocusable-CjhkSx1Q.js";import"./VisuallyHidden-D79PysQv.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
