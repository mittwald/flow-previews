import{j as e}from"./iframe-DQCyQvTg.js";import{C as s}from"./CheckboxGroup-BOWWTRF0.js";import{L as a}from"./Label-Bpn5fam4.js";import{F as u}from"./FieldError-Db3KB_ND.js";import{C as r}from"./Checkbox-C8VUlcDP.js";import{C as m}from"./CheckboxButton-C2-yMsvu.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-CkLJexV6.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DZtWzeOa.js";import"./index-D_Y20Bq5.js";import"./index-vqo-_XTj.js";import"./utils-B-47qEzM.js";import"./useMakeFocusable-bqVs19OG.js";import"./useFieldComponent-BQB8jFXR.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DAmk2Bcz.js";import"./context-BVR1xsiE.js";import"./Label-CVwZ8mvh.js";import"./Hidden-B1onkdes.js";import"./FieldError-BsUvM9FZ.js";import"./Text-dCr4PfuU.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-D-ZVlg04.js";import"./AlertIcon-BB94ofCu.js";import"./IconWarning-BsBEN2i7.js";import"./remote-DwYKdEj8.js";import"./RSPContexts-CbSXEXlJ.js";import"./Form-Ca14id66.js";import"./useLabel-CgNKGrTG.js";import"./useFormValidation-DWTcfSBl.js";import"./useFocus-MHK9Bgmz.js";import"./useFocusRing-H28TAT4s.js";import"./useControlledState-CSGe32xq.js";import"./usePress-BDNCZxcv.js";import"./useToggleState-Driw9LeX.js";import"./useFormReset-3qpl4kR-.js";import"./useFocusable-Bi17AcBv.js";import"./VisuallyHidden-DTZCmZoD.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
