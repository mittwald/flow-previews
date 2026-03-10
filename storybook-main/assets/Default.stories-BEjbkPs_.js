import{j as e}from"./iframe-DAdEF_a9.js";import{C as s}from"./CheckboxGroup-BdmH2BSH.js";import{L as a}from"./Label-D1h8c298.js";import{F as u}from"./FieldError-DAuD7Eqr.js";import{C as r}from"./Checkbox-Cp4I1xYt.js";import{C as m}from"./CheckboxButton-Dj8OJ8iB.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-CpNdrcS0.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CSaST_uw.js";import"./index-UhVc0W_W.js";import"./index-DqNUQeP9.js";import"./utils-B1o5BDIk.js";import"./useMakeFocusable-CgWPsGDF.js";import"./useFieldComponent-CLfspKSt.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DuO1Wowh.js";import"./context-DrtV74MG.js";import"./Label-DvwKTMzw.js";import"./Hidden-CcrF8gwt.js";import"./FieldError-Be27Lv36.js";import"./Text-ConA-l-E.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-kiIxGYqF.js";import"./AlertIcon-DxXhtuAo.js";import"./IconWarning-B_QPuDoh.js";import"./remote-BQ_isGLI.js";import"./RSPContexts-BAZVNF9B.js";import"./Form-B4U7K7S8.js";import"./useLabel-CcpSY4Um.js";import"./useFormValidation-CWgfw6QX.js";import"./useFocus-BHQGBA4R.js";import"./useFocusRing-5n4vvaIx.js";import"./useControlledState-D1JeUT3E.js";import"./usePress-AnOXMqB9.js";import"./useToggleState-D2U5XJ_A.js";import"./useFormReset-BoqlzNfE.js";import"./useFocusable-vdr5CzJ0.js";import"./VisuallyHidden-DtDztoAI.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
