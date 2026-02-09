import{j as e}from"./iframe-CcNHCKoB.js";import{C as s}from"./CheckboxGroup-BAWfToPD.js";import{L as a}from"./Label-F2VOWZsZ.js";import{F as u}from"./FieldError-BlodrZIq.js";import{C as r}from"./Checkbox-7QlRkZ_S.js";import{C as m}from"./CheckboxButton-MXAIaE5W.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-BJTjCXOG.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dkj1vsN8.js";import"./index-CYttZVHR.js";import"./index-C0Ga1GvX.js";import"./utils-NnqZ9ZBK.js";import"./useMakeFocusable-DQdx0uvp.js";import"./useFieldComponent-DFvJ9Vd5.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-COg8E6Vc.js";import"./context-LfQwLpL0.js";import"./Label-BWg6WlKG.js";import"./Hidden-B3wID84r.js";import"./FieldError--IyvMZRA.js";import"./Text-BCtKE9i4.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CklP5D4q.js";import"./AlertIcon-DM6j3Z28.js";import"./IconWarning-DmrAmEd1.js";import"./remote-CVy042JL.js";import"./RSPContexts-DYw5y0O9.js";import"./Form-DRLF_vg9.js";import"./useLabel-CyCYkDRj.js";import"./useFormValidation-PdvsTzHy.js";import"./useFocus-SYOVVSYu.js";import"./useFocusRing-C53Oh36V.js";import"./useControlledState-TVt6Qf5c.js";import"./usePress-eyc-LVl-.js";import"./useToggleState-DMv-HDsl.js";import"./useFormReset-CUbMVBNo.js";import"./useFocusable-Dm2HHW3t.js";import"./VisuallyHidden-FLGfwvrv.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
