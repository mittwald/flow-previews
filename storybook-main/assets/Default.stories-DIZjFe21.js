import{j as e}from"./iframe-D6IogGzN.js";import{C as s}from"./CheckboxGroup-DhdEbnz1.js";import{L as a}from"./Label-CevfIrA7.js";import{F as u}from"./FieldError-s9c2Hgmm.js";import{C as r}from"./Checkbox-DSpJK1iK.js";import{C as m}from"./CheckboxButton-Da_jgMvj.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-BXqAfec-.js";import"./clsx-B-dksMZM.js";import"./flowComponent-0X1Pg4gT.js";import"./index-dqlI56sj.js";import"./index-D5OmXbhN.js";import"./utils-DGVDGTqS.js";import"./useMakeFocusable-Cptiifns.js";import"./useFieldComponent-DWOteHG6.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-HdnRlfeB.js";import"./context-D_0iO3JE.js";import"./Label-DV4nkt-Z.js";import"./Hidden-Btv7BawI.js";import"./FieldError-CQOrVEPx.js";import"./Text-CSz0hkcR.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-u5jFPjew.js";import"./AlertIcon-BzliTC0_.js";import"./IconWarning-CDNOZZaQ.js";import"./remote-ByQLcsaA.js";import"./RSPContexts-Y8HBeOxz.js";import"./Form-DHrkWV8M.js";import"./useLabel--9PNzusi.js";import"./useFormValidation-CGjfwGDf.js";import"./useFocus-JSiA5HpL.js";import"./useFocusRing-DeVFSene.js";import"./useControlledState-DoPmGGFu.js";import"./usePress-OPUq1uX5.js";import"./useToggleState-AllAErbL.js";import"./useFormReset-zYUel0fa.js";import"./useFocusable-CqeTIxtx.js";import"./VisuallyHidden-CtfXU_Om.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,ee={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},i={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},c={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},p={render:o=>e.jsxs(s,{...o,children:[e.jsx(a,{children:"Permissions"}),e.jsx(m,{value:"read",children:"Read"}),e.jsx(m,{value:"write",children:"Write"})]})},l={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(a,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},d={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(a,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
