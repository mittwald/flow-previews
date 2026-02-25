import{j as e}from"./iframe-CFTqgbub.js";import{C as s}from"./CheckboxGroup-Bsd3f3kp.js";import{L as a}from"./Label-GwGXhrLq.js";import{F as u}from"./FieldError-CYjuAiBI.js";import{C as r}from"./Checkbox-4VYpHFnM.js";import{C as m}from"./CheckboxButton-CUnP-HSj.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-CbQqBLvR.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CsvuKB41.js";import"./index-CCt8Te2G.js";import"./index-B_-FfeBA.js";import"./utils-B4tY5r2S.js";import"./useMakeFocusable-BC3RzzjG.js";import"./useFieldComponent-CbaMz5aY.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DeSq1KSa.js";import"./context-DrUKb0cF.js";import"./Label-zjHNWfOJ.js";import"./Hidden-0AMuGqxl.js";import"./FieldError-DNv3qA2U.js";import"./Text-Djzy7Vo0.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-CTc4Vkoh.js";import"./AlertIcon-DR1EaW6b.js";import"./IconWarning-BmBcYBZE.js";import"./remote-BlniWp0j.js";import"./RSPContexts-CFURB7yy.js";import"./Form-XRNm8_rd.js";import"./useLabel-BdtjZifw.js";import"./useFormValidation-BPzjnfej.js";import"./useFocus-BOeBkWuf.js";import"./useFocusRing-Ck0KvK0z.js";import"./useControlledState-SUsbXgrM.js";import"./usePress-DIXZ9Ppe.js";import"./useToggleState-CSmxVOAE.js";import"./useFormReset-BbhAN2Ls.js";import"./useFocusable-Dm8xzBfk.js";import"./VisuallyHidden-CB7azLHp.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
