import{j as e}from"./iframe-kP2HEfFS.js";import{C as s}from"./CheckboxGroup-BgDj-Sb9.js";import{L as a}from"./Label-o-9raADe.js";import{F as u}from"./FieldError-CJUuAB6W.js";import{C as r}from"./Checkbox-Bn4xcsjk.js";import{C as m}from"./CheckboxButton-BErW7Cf7.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-B0WfyxdI.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cn3sZuxr.js";import"./index-Bh9kNCDS.js";import"./index-Gr0VxzdI.js";import"./utils-C12UPk0k.js";import"./useMakeFocusable-DTcEo_iv.js";import"./useFieldComponent-D28HcwQQ.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C8FP4Fke.js";import"./context-C1J5EAXU.js";import"./Label-B6lEhZqq.js";import"./Hidden-6OIrW1CO.js";import"./FieldError-BL6ZnBFp.js";import"./Text-Bt0sFzeR.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-Dm8o5yyE.js";import"./AlertIcon-BKaF02an.js";import"./IconWarning-3wMfkhbI.js";import"./remote-7RhInu5H.js";import"./RSPContexts-BgFmjUDe.js";import"./Form-D51h5Mwy.js";import"./useLabel-07phmwB_.js";import"./useFormValidation-CKIaBDhF.js";import"./useFocus-C5lTzrJh.js";import"./useControlledState-K2EmMrc1.js";import"./useFocusRing-CKDLKfs4.js";import"./usePress-Zu3olfM4.js";import"./useToggleState-CQEaldhR.js";import"./useFormReset-BTQYEics.js";import"./useFocusable-B7yvIBUC.js";import"./VisuallyHidden-BxKC931y.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
