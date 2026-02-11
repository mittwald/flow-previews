import{j as e}from"./iframe-BYq2oLvG.js";import{C as s}from"./CheckboxGroup-BgDOCp5D.js";import{L as a}from"./Label-xDxAxXdC.js";import{F as u}from"./FieldError-Cq2wz6X1.js";import{C as r}from"./Checkbox-DCV6J7gD.js";import{C as m}from"./CheckboxButton-Bb-cTIWB.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-HwzCr8jk.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DHneW8T1.js";import"./index-pVjII2WU.js";import"./index-BCX3_YU5.js";import"./utils-Da-bhZeG.js";import"./useMakeFocusable-Rr4YSJCQ.js";import"./useFieldComponent-C42pk4aC.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DFbS966t.js";import"./context-WfyLsYOo.js";import"./Label-onG8m68o.js";import"./Hidden-BEATyBSB.js";import"./FieldError-3pauqY5q.js";import"./Text-BsD4qVoX.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BLnni9j6.js";import"./AlertIcon-DHHmiMC7.js";import"./IconWarning-l8NPf1u4.js";import"./remote-SGC31yDV.js";import"./RSPContexts-DDzq82Ri.js";import"./Form-BjhhXbaP.js";import"./useLabel-BBF67Bfk.js";import"./useFormValidation-DIPf7gSr.js";import"./useFocus-BosBzJqA.js";import"./useFocusRing-DoNt3T3i.js";import"./useControlledState-B-JkoIYX.js";import"./usePress-CABccGP2.js";import"./useToggleState-DOj64LJq.js";import"./useFormReset-COvJ3vzl.js";import"./useFocusable-eOfLyRoH.js";import"./VisuallyHidden-4k4K_3kv.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
