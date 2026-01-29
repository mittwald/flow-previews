import{j as e}from"./iframe-CgeYxcj8.js";import{C as s}from"./CheckboxGroup-DWKtzJcA.js";import{L as a}from"./Label-CIGJVOdR.js";import{F as u}from"./FieldError-CDWzOCc-.js";import{C as r}from"./Checkbox-DlLyLmOQ.js";import{C as m}from"./CheckboxButton-C9EVidBS.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-Bz9VsjOe.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Dnk3jDHh.js";import"./index-DGuDz7oW.js";import"./index-SS9EXt6e.js";import"./utils-BH6Z59zo.js";import"./useMakeFocusable-SWUC0wbY.js";import"./useFieldComponent-DjF7VplI.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C8PcX-p4.js";import"./context-CYaZBhkg.js";import"./Label-DsJ6qzWh.js";import"./Hidden-kX7iUH63.js";import"./FieldError-BanRAUWl.js";import"./Text-D1ETBO0D.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BHVf3OWG.js";import"./AlertIcon-BVEvo4xP.js";import"./IconWarning-CNkUjla4.js";import"./remote-CtdlUY7L.js";import"./RSPContexts-D3svuC0u.js";import"./Form-DrrI3HBf.js";import"./useLabel-CNkOKuMy.js";import"./useFormValidation-CUbvhZHn.js";import"./useFocus-BDu45Ayq.js";import"./useFocusRing-BNw3vzKJ.js";import"./useControlledState-CjPSf5xo.js";import"./usePress-DX014ZyL.js";import"./useToggleState-D5RJaWcN.js";import"./useFormReset-CLCQkLzV.js";import"./useFocusable-UxYwgi7z.js";import"./VisuallyHidden-ty8jLyKB.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
