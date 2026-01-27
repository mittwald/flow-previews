import{j as e}from"./iframe-COrLnxQ5.js";import{C as s}from"./CheckboxGroup-BmKL-Yq2.js";import{L as a}from"./Label-D_znJf4n.js";import{F as u}from"./FieldError-CF8bH68v.js";import{C as r}from"./Checkbox-B3P-eMdx.js";import{C as m}from"./CheckboxButton-CAKqDSrC.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-D-DgWvpX.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Whsy6gdm.js";import"./index-B8mhWUvU.js";import"./index-C_Qn4vD5.js";import"./utils-VsjjISTT.js";import"./useMakeFocusable--RoBu-o0.js";import"./useFieldComponent-CTuZy_pY.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CnLjSwJ3.js";import"./context-BGD9bWhq.js";import"./Label-B0iAgBS9.js";import"./Hidden-JddfwHBV.js";import"./FieldError-Ed5Dpq4f.js";import"./Text-DGq4TjGO.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CPhKjMMj.js";import"./AlertIcon-DPoTsBR0.js";import"./IconWarning-CG-OJrgb.js";import"./remote-DmDOnO_p.js";import"./RSPContexts-Ds5AG3kQ.js";import"./Form-nqQow0mS.js";import"./useLabel-Dc-mlO3X.js";import"./useFormValidation-Cve5G398.js";import"./useFocus-D07Nw9k2.js";import"./useFocusRing-DLXXvYqO.js";import"./useControlledState-B-eslxlj.js";import"./usePress-BYo5WNMt.js";import"./useToggleState-BTXjDrIs.js";import"./useFormReset-CUYGlILL.js";import"./useFocusable-BKqCzfQc.js";import"./VisuallyHidden-DMXfMtnF.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
