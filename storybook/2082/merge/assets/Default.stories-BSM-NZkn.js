import{j as e}from"./iframe-EtTbRQoM.js";import{C as s}from"./CheckboxGroup-BJ0nuRzy.js";import{L as a}from"./Label-BHPxSoWd.js";import{F as m}from"./FieldError-Bx65Dx0T.js";import{C as r}from"./Checkbox-DctjpxA8.js";import{C as u}from"./CheckboxButton-CI3GcE9l.js";import"./index-nuYtCEEu.js";import"./ColumnLayout-siAwTZdH.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CRP3amPt.js";import"./index-DwnAt2PO.js";import"./index-rMxpLDk9.js";import"./FormField.module-CqWyJNQI.js";import"./utils-C_hvyJpn.js";import"./useMakeFocusable-qjH8k0Qb.js";import"./useLocalizedStringFormatter-FAUwXJff.js";import"./context-HEbrZrvP.js";import"./Label-FPs7V2cE.js";import"./Hidden-BhWY_xu3.js";import"./IconWarning-CO-lUcxm.js";import"./FieldError-Dm1dzE4u.js";import"./Text-CANjZEUs.js";import"./filterDOMProps-i7L6S0l1.js";import"./RSPContexts-Cv7znJuu.js";import"./Form-CyJo_kk3.js";import"./useFormValidation-CisZkPpg.js";import"./useFocus-9RWBE5qv.js";import"./useControlledState-DmCe06Ai.js";import"./useFocusRing-hCmULEnE.js";import"./usePress-sAonsHdy.js";import"./useToggleState-DtJJbISv.js";import"./useFormReset-B1BZ1rNK.js";import"./useFocusable-Do_2l7DI.js";import"./VisuallyHidden-B8Lwuqmn.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Q={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(u,{value:"read",children:"Read"}),e.jsx(u,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(m,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const V=["Default","CheckboxGroupDisabled","ReadOnly","CheckboxDisabled","CheckboxButtons","WithFieldError","ColumnLayout"];export{p as CheckboxButtons,c as CheckboxDisabled,i as CheckboxGroupDisabled,d as ColumnLayout,t as Default,n as ReadOnly,l as WithFieldError,V as __namedExportsOrder,Q as default};
