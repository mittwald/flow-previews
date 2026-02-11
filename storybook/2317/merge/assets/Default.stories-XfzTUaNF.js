import{j as e}from"./iframe-DN5oj4yX.js";import{C as s}from"./CheckboxGroup-DLMXKtSi.js";import{L as a}from"./Label-DdsftIej.js";import{F as u}from"./FieldError-CqFPhrQB.js";import{C as r}from"./Checkbox-4lkl4RDT.js";import{C as m}from"./CheckboxButton-B3tIbpCE.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-viDS3uE0.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D5tzpGYQ.js";import"./index-D8Wg1xo0.js";import"./index-DUndj3nA.js";import"./utils-u73lU7bl.js";import"./useMakeFocusable-BaQv25Nr.js";import"./useFieldComponent-DVOrWc0y.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Dqjs-V7P.js";import"./context-BQuP-QJJ.js";import"./Label-D5uLN87S.js";import"./Hidden-DvJV1KBO.js";import"./FieldError-lE_N68JV.js";import"./Text-mAHBNKmk.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CB1nkD4I.js";import"./AlertIcon-DDaSQZAJ.js";import"./IconWarning-C1DuEctF.js";import"./remote-CDfMg8I2.js";import"./RSPContexts-CT4Rd2GX.js";import"./Form-Cz7a81_t.js";import"./useLabel-52-JVqkW.js";import"./useFormValidation-pAg62KPr.js";import"./useFocus-CanfFAPv.js";import"./useFocusRing-Cbnk9x9v.js";import"./useControlledState-Dl4qb5FM.js";import"./usePress-dDK8KT2l.js";import"./useToggleState-4PZgoKqc.js";import"./useFormReset-B44cc5VH.js";import"./useFocusable-6yyx7e1u.js";import"./VisuallyHidden-BipIpOcd.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
