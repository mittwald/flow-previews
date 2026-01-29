import{j as e}from"./iframe-DBKYLzDC.js";import{C as s}from"./CheckboxGroup-FazGbg0X.js";import{L as a}from"./Label-Dsk_CpOI.js";import{F as u}from"./FieldError-BpFJPqyd.js";import{C as r}from"./Checkbox-0fpXgy7m.js";import{C as m}from"./CheckboxButton-CpnDAbYf.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-7EHoS4QU.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-1S5Ra8.js";import"./index-CYdVJgGQ.js";import"./index-Dr37f313.js";import"./utils-BUG9eo0Q.js";import"./useMakeFocusable-Bj0ez47p.js";import"./useFieldComponent-DRt8IUS_.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DY0sD44g.js";import"./context-DJBj5fN2.js";import"./Label-B1DR540-.js";import"./Hidden-D_QywUVZ.js";import"./FieldError-DtV1i0Hc.js";import"./Text-D7rD6BG6.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-DJvQ3Kk8.js";import"./AlertIcon-BOzLdeCm.js";import"./IconWarning-BvGiLcXk.js";import"./remote-CY71mNcv.js";import"./RSPContexts-Dx0AtfwO.js";import"./Form-CPSCXeOA.js";import"./useLabel-BGvoAl80.js";import"./useFormValidation-DNSyvwAg.js";import"./useFocus-TYDADYlM.js";import"./useFocusRing-BksqeYWz.js";import"./useControlledState-CAANpQPW.js";import"./usePress-BZ5qqTtf.js";import"./useToggleState-D4OQfVOW.js";import"./useFormReset-BczjDhHV.js";import"./useFocusable-C-cRLAom.js";import"./VisuallyHidden-BW797Lc5.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
