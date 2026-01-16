import{j as e}from"./iframe-Dcjk2TLd.js";import{C as s}from"./CheckboxGroup-CE9GJ4iZ.js";import{L as a}from"./Label-BZxLRpn6.js";import{F as u}from"./FieldError-CGpcN3PS.js";import{C as r}from"./Checkbox-ChehdARZ.js";import{C as m}from"./CheckboxButton-BgBQbczS.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-Ch_jMXN-.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DUQvMGjf.js";import"./index-j2LaL0Dv.js";import"./index-DmOV_yi6.js";import"./utils-C4npX7la.js";import"./useMakeFocusable-D2yJH4xu.js";import"./useFieldComponent-1tG_hIZF.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DSXGmj0V.js";import"./context-pAIzfbng.js";import"./Label-BZUq_rhq.js";import"./Hidden-CKziqW6n.js";import"./FieldError-B9deYV15.js";import"./Text-zDtUk3hp.js";import"./filterDOMProps-i7L6S0l1.js";import"./AlertText-PsTvKuCL.js";import"./AlertIcon-CZw-AcP9.js";import"./IconWarning-4NWKkNon.js";import"./remote-B1sU4u7F.js";import"./RSPContexts-0k8dpTCB.js";import"./Form-C7OLtkZq.js";import"./useLabel-CKc5oqWD.js";import"./useFormValidation-ny_bco9C.js";import"./useFocus-B7gP7G3p.js";import"./useControlledState-DBXDF7mL.js";import"./useFocusRing-HFiDNYir.js";import"./usePress-CbiP5Rr9.js";import"./useToggleState-BSsXWzYc.js";import"./useFormReset-DcYsnWfg.js";import"./useFocusable-K4tA3zQn.js";import"./VisuallyHidden-D01b8Wlz.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
