import{j as e}from"./iframe-CnD5cTjE.js";import{C as s}from"./CheckboxGroup-DGgCw3ca.js";import{L as a}from"./Label-BZkRYtAq.js";import{F as u}from"./FieldError-D8deZX0S.js";import{C as r}from"./Checkbox-DPOPeKdk.js";import{C as m}from"./CheckboxButton-BNPgFE-t.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-BJ1mdLlj.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C-pFyTgk.js";import"./index-CFIaHCYn.js";import"./index-DPBNH-jw.js";import"./utils-BYl_EWK3.js";import"./useMakeFocusable-DGsR1R_2.js";import"./useFieldComponent-D1uM9aif.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C15HmRxb.js";import"./context-uSq5N7U7.js";import"./Label-DvWkQRgL.js";import"./Hidden-BqUWSjHb.js";import"./FieldError-CkgMvR4A.js";import"./Text-Bz5hHxMj.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-9D-RaPUt.js";import"./AlertIcon-DEFExzLk.js";import"./IconWarning-K8fT7_bQ.js";import"./remote-CRObq-IF.js";import"./RSPContexts-AjJzFs_t.js";import"./Form-Bj2UuDao.js";import"./useLabel-BEvZESWX.js";import"./useFormValidation-0N4lg69R.js";import"./useFocus-BZF2vaC7.js";import"./useFocusRing-a13YBJgG.js";import"./useControlledState-C-7lgoXp.js";import"./usePress-DgDG_638.js";import"./useToggleState-CtDaAYsO.js";import"./useFormReset-DzGHPNTd.js";import"./useFocusable-DUJmCsdq.js";import"./VisuallyHidden-D2K60xua.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
