import{j as e}from"./iframe-DqAMh1gn.js";import{C as s}from"./CheckboxGroup-SZXbQ3kG.js";import{L as t}from"./Label-CvBjm4aX.js";import{F as u}from"./FieldError-DFC5bA5N.js";import{C as r}from"./Checkbox-5C8u81A0.js";import{C as m}from"./CheckboxButton-IvRX7bU-.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-C13WXOtQ.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BNeqdfjc.js";import"./index-BXU2S61h.js";import"./index-By9mRA0t.js";import"./utils-WhkxUCK6.js";import"./useMakeFocusable-DPrLqbQ7.js";import"./useFieldComponent-CgfE5MLg.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CZ172l8h.js";import"./context-DRhwbml9.js";import"./Label-iT_mUFNC.js";import"./Hidden-BzHkL3wJ.js";import"./FieldError-Cat2GNj4.js";import"./Text-DmUxfOW-.js";import"./filterDOMProps-i7L6S0l1.js";import"./InlineAlert-DL5f4hl1.js";import"./AlertIcon-C7t-BIgM.js";import"./IconWarning-BV3xGinn.js";import"./remote-BXLOBgAx.js";import"./Text-1p9r91sB.js";import"./browser-CSMWWW9k.js";import"./EmulatedBoldText-CnA8uKsC.js";import"./RSPContexts-A1MHH_Cz.js";import"./Form-y2x5EeW4.js";import"./useLabel-BKYm2rJO.js";import"./useFormValidation-Bmx8yPSj.js";import"./useFocus-Cr8fiyXD.js";import"./useControlledState-ChPR7hzM.js";import"./useFocusRing-BN14JWVs.js";import"./usePress-ClkvTl3z.js";import"./useToggleState-CDuP3UHJ.js";import"./useFormReset-CllrYVFd.js";import"./useFocusable-DO1mJmot.js";import"./VisuallyHidden-B3gyx1tV.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,se={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(t,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},i={},a={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(t,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(t,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(t,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(t,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
