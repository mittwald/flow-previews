import{j as e}from"./iframe-tI_lG94_.js";import{C as s}from"./CheckboxGroup-CxfuoIxN.js";import{L as t}from"./Label-CdVUwStZ.js";import{F as u}from"./FieldError-DYW7UPuf.js";import{C as r}from"./Checkbox-Db9WsA5h.js";import{C as m}from"./CheckboxButton-CYWHApAt.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-CQyMv4yV.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C7r6bord.js";import"./index-Cx51kJJc.js";import"./index-CBk6rXlg.js";import"./utils-bmh-HeLH.js";import"./useMakeFocusable-D27zQnKA.js";import"./useFieldComponent-_Dyiwxtg.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BU5vto5x.js";import"./context-CBF_EHvQ.js";import"./Label-BRs8jfGQ.js";import"./Hidden-xjuSUFbD.js";import"./FieldError-CdG59lLT.js";import"./Text-Bx7ijqLX.js";import"./filterDOMProps-i7L6S0l1.js";import"./InlineAlert-DC2W_zeL.js";import"./AlertIcon-BkNTScum.js";import"./IconWarning-BFYQkdin.js";import"./remote-CmKo-bli.js";import"./Text-DDIuCQxA.js";import"./browser-DuhBvQkx.js";import"./EmulatedBoldText-CqR-YL6D.js";import"./RSPContexts-C1ceWNax.js";import"./Form-B72YgAOe.js";import"./useLabel-dT-ksHYF.js";import"./useFormValidation--MR_E_GW.js";import"./useFocus-DCHopMY8.js";import"./useControlledState-BE5RFE46.js";import"./useFocusRing-Dgbmnyxw.js";import"./usePress-C1ke7TUF.js";import"./useToggleState-BjZuw9A6.js";import"./useFormReset-LNt8buNd.js";import"./useFocusable-BnM0ssdw.js";import"./VisuallyHidden-sfQiOa3Q.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,se={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(t,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},i={},a={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(t,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(t,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(t,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(t,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
