import{j as e}from"./iframe-DpNCYkDX.js";import{C as s}from"./CheckboxGroup-gCvRwA5J.js";import{L as a}from"./Label-DxyEdRqz.js";import{F as u}from"./FieldError-CLVEK_uH.js";import{C as r}from"./Checkbox-DX9XmgO9.js";import{C as m}from"./CheckboxButton-DrXLKFQk.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-DGJJrAcK.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DsLeaaVl.js";import"./index-C38UUpab.js";import"./index-lXFaKghW.js";import"./utils-YaT_C2bO.js";import"./useMakeFocusable-CMEHR1dt.js";import"./useFieldComponent-CtyBuaGz.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CJK7tFkI.js";import"./context-Df7wrknH.js";import"./Label-DRXP2wjN.js";import"./Hidden-AzE2Q4X1.js";import"./FieldError-DsNqYoam.js";import"./Text-B4MgbG6f.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-DNWtIllY.js";import"./AlertIcon-CnmOZB_U.js";import"./IconWarning-CcmUiij-.js";import"./remote-FHZXAXl3.js";import"./RSPContexts-_XCAh6rU.js";import"./Form-Ce-l7r4o.js";import"./useLabel-DtioSroH.js";import"./useFormValidation-Db_N1-Xt.js";import"./useFocus-CLy8_GQ0.js";import"./useControlledState-CFzFCELG.js";import"./useFocusRing-DWz_LOyJ.js";import"./usePress-OMCV4DY8.js";import"./useToggleState-CyQnmxcJ.js";import"./useFormReset-BsRaFjct.js";import"./useFocusable-BsZoANuz.js";import"./VisuallyHidden-BhiVW_d3.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
