import{j as e}from"./iframe-CLJtUSH1.js";import{C as s}from"./CheckboxGroup-CSLGC-ft.js";import{L as a}from"./Label-CL2lxKWa.js";import{F as u}from"./FieldError-DOHJV3_t.js";import{C as r}from"./Checkbox-C1gSPy1x.js";import{C as m}from"./CheckboxButton-DDFwjLoi.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-n_Jz4fiI.js";import"./clsx-B-dksMZM.js";import"./flowComponent-ddZp4AYb.js";import"./index-CLGZrIuY.js";import"./index-C5KxKItK.js";import"./utils-DvtEjNbs.js";import"./useMakeFocusable-DnRdDxtz.js";import"./useFieldComponent-BH0Y7qa0.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DOmCW1HP.js";import"./context-DZMEEftG.js";import"./Label-zeGTIhsR.js";import"./Hidden-BOcIw6_e.js";import"./FieldError-DZmbq2tb.js";import"./Text-COsBjVJz.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Cdx49GPM.js";import"./AlertIcon-Gt2BTk8C.js";import"./IconWarning-RoA_lEUP.js";import"./remote-B_1lzL7i.js";import"./RSPContexts-CY0Qb7bk.js";import"./Form-DsvsQY6J.js";import"./useLabel-DV7QK5Z-.js";import"./useFormValidation-vO_E-FCH.js";import"./useFocus-CAJuP4TC.js";import"./useFocusRing-lsntDLZI.js";import"./useControlledState-BRozYY3l.js";import"./usePress-bTiOWaRI.js";import"./useToggleState-CEJOIwSj.js";import"./useFormReset-3JYpIfMS.js";import"./useFocusable-DsRGTtrf.js";import"./VisuallyHidden-CPqjoTjm.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
