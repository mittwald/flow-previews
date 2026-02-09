import{j as e}from"./iframe-nlVW-CPZ.js";import{C as s}from"./CheckboxGroup-BmSU01ad.js";import{L as a}from"./Label-BuWy1qrT.js";import{F as u}from"./FieldError-C-5FG0Dy.js";import{C as r}from"./Checkbox-CtaXoOTv.js";import{C as m}from"./CheckboxButton-BZjMsJI-.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-B86r7WOZ.js";import"./clsx-B-dksMZM.js";import"./flowComponent-HOniYMNn.js";import"./index-C9GmpRgu.js";import"./index-DrBjklCk.js";import"./utils-CyuEFqip.js";import"./useMakeFocusable-CxUrmYH6.js";import"./useFieldComponent-DOzg870F.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CkS4VLgI.js";import"./context-CIGB7i0H.js";import"./Label-txjD4aFE.js";import"./Hidden-B4CC7Km1.js";import"./FieldError-BpjEpOFY.js";import"./Text-sEy-KTn9.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-tAApf57I.js";import"./AlertIcon-Dr5phtoY.js";import"./IconWarning-VZ7ITFqu.js";import"./remote-D3GclicH.js";import"./RSPContexts-DlUCcPRc.js";import"./Form-DSPAlIu9.js";import"./useLabel-DUbax7la.js";import"./useFormValidation-DqSMo-uw.js";import"./useFocus-CD1ZzMvo.js";import"./useFocusRing-0Z36i33d.js";import"./useControlledState-ywoEmBU4.js";import"./usePress-BSHzPeES.js";import"./useToggleState-DZhZWEOQ.js";import"./useFormReset-J8eUPjf8.js";import"./useFocusable-DHxyzauV.js";import"./VisuallyHidden-44O2XzGD.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
