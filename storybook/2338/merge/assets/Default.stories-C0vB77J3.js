import{j as e}from"./iframe-CtEjVB66.js";import{C as s}from"./CheckboxGroup-B1xiKcv7.js";import{L as i}from"./Label-CvAjEv-1.js";import{F as m}from"./FieldError-BzQCv4a3.js";import{C as r}from"./Checkbox-DHW8CNTp.js";import{C as l}from"./CheckboxButton-BWWc4gAD.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-BJbm5gyv.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CBkS5ERE.js";import"./index-CR8L6PfO.js";import"./index-it1EKrY8.js";import"./utils-BuEQZICT.js";import"./useMakeFocusable-DWHyWnej.js";import"./useFieldComponent-B7HNchXP.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DLaPQOYW.js";import"./context-DXMIHXTO.js";import"./Label-XCLRl25L.js";import"./Hidden-BjEfMFZ5.js";import"./FieldError-DJZxrTcD.js";import"./Text-1qNOxJF7.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DqjTg_vO.js";import"./AlertIcon-BaGtIfyD.js";import"./IconWarning-1CkAUSYF.js";import"./remote-4O72-jdB.js";import"./RSPContexts-oGVR4C8S.js";import"./Form-Bs4UrYBw.js";import"./useLabel-Cn5QMcKF.js";import"./useFormValidation-ClIfwgLl.js";import"./useFocus-CAMT_X1e.js";import"./platform-UzmeURk8.js";import"./useFocusRing-B5ekdd71.js";import"./useControlledState-D0kLTbtR.js";import"./usePress-Cre2k4PJ.js";import"./useToggleState-CL5C9z_j.js";import"./useFormReset-2RZyXaKm.js";import"./useFocusable-CocGrzXD.js";import"./VisuallyHidden-B96eA0GA.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,$={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:d("onChange"),isDisabled:!1,isReadOnly:!1},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},n={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},a={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(l,{value:"read",children:"Read"}),e.jsx(l,{value:"write",children:"Write"})]})},c={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(m,{children:"Select at least one to continue"})]})},p={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ee=["Default","CheckboxDisabled","CheckboxButtons","WithFieldError","ColumnLayout"];export{a as CheckboxButtons,n as CheckboxDisabled,p as ColumnLayout,t as Default,c as WithFieldError,ee as __namedExportsOrder,$ as default};
