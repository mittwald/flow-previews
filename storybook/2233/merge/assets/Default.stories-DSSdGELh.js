import{j as e}from"./iframe-BpfR1GYm.js";import{C as s}from"./CheckboxGroup-DYvEQa3l.js";import{L as t}from"./Label-DS3YgAXJ.js";import{F as u}from"./FieldError-CXRDkScB.js";import{C as r}from"./Checkbox-BrartC2v.js";import{C as m}from"./CheckboxButton-D2c9GiJr.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-e8fm_4Ce.js";import"./clsx-B-dksMZM.js";import"./flowComponent-qov8JTe3.js";import"./index-SWV2Jto_.js";import"./index-BNT5TWiv.js";import"./utils-z0hzRCNL.js";import"./useMakeFocusable-dIUaGRfR.js";import"./useFieldComponent-DI1dsoTY.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BHDvTpyt.js";import"./context-BQnsf3fS.js";import"./Label-TUuaFaku.js";import"./Hidden-DWXiMutX.js";import"./FieldError-DbjIiGK3.js";import"./Text-DujklUHl.js";import"./filterDOMProps-i7L6S0l1.js";import"./InlineAlert-Dumml4W9.js";import"./AlertIcon-BPm48GUQ.js";import"./IconWarning-BOf1a1NO.js";import"./remote-Cr2dkfGH.js";import"./Text-jE0jlBS1.js";import"./browser-CJuVe1n5.js";import"./EmulatedBoldText-Ba7yrIZA.js";import"./RSPContexts-DDsKHTka.js";import"./Form-Dn5OdnSf.js";import"./useLabel-oNP935J_.js";import"./useFormValidation-DJqpOl9D.js";import"./useFocus-ZHbPEGRJ.js";import"./useControlledState-Bs2ReOE0.js";import"./useFocusRing-lHZkZ90J.js";import"./usePress-VEcsoWoE.js";import"./useToggleState-bNqKXyCP.js";import"./useFormReset-LNCZiIDy.js";import"./useFocusable-CybXUwCv.js";import"./VisuallyHidden-Dk8KR5l4.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,se={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(t,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},i={},a={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(t,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(t,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(t,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(t,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const te=["Default","CheckboxGroupDisabled","ReadOnly","CheckboxDisabled","CheckboxButtons","WithFieldError","ColumnLayout"];export{p as CheckboxButtons,c as CheckboxDisabled,a as CheckboxGroupDisabled,d as ColumnLayout,i as Default,n as ReadOnly,l as WithFieldError,te as __namedExportsOrder,se as default};
