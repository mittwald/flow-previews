import{j as e}from"./iframe-CMcq8v1f.js";import{C as s}from"./CheckboxGroup-Chsc6srO.js";import{L as a}from"./Label-BIfXBQMD.js";import{F as u}from"./useFieldComponent-B7IsP0qp.js";import{C as r}from"./Checkbox-BdIHaKgT.js";import{C as m}from"./CheckboxButton-aImz5DaW.js";import"./index-nuYtCEEu.js";import"./ColumnLayout-r5qjBDtD.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DAEI1NYm.js";import"./index-UsNUevoW.js";import"./index-Tcjlyiep.js";import"./utils-B4_KO4f3.js";import"./useMakeFocusable-B2ENdPIj.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BoDSEWEG.js";import"./context-Bckjq63R.js";import"./Label-CtMkNZ5K.js";import"./Hidden-BSe2pCrZ.js";import"./Text-CkmSClwy.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-pzLTBmMV.js";import"./react-children-utilities-CDk9z-7u.js";import"./ClearPropsContext-CU9ecYMv.js";import"./RSPContexts-DoqEYCaI.js";import"./Form-BA9ATDJW.js";import"./useLabel-MLAtSIJy.js";import"./useFormValidation-C01Q1Aoq.js";import"./useFocus-B0Qlm3zv.js";import"./useControlledState-C8UmWEhe.js";import"./useFocusRing-CoJ5esee.js";import"./usePress-Bqdsvk60.js";import"./useToggleState-BXf1_Gpc.js";import"./useFormReset-DUTu2q8R.js";import"./useFocusable-DlaONHPB.js";import"./VisuallyHidden-Dy6kQkYD.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,X={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const Z=["Default","CheckboxGroupDisabled","ReadOnly","CheckboxDisabled","CheckboxButtons","WithFieldError","ColumnLayout"];export{p as CheckboxButtons,c as CheckboxDisabled,i as CheckboxGroupDisabled,d as ColumnLayout,t as Default,n as ReadOnly,l as WithFieldError,Z as __namedExportsOrder,X as default};
