import{j as e}from"./iframe-CEWg6_IX.js";import{C as s}from"./CheckboxGroup-DnyGLJ4J.js";import{L as i}from"./Label-BaJSnICs.js";import{F as d}from"./FieldError-fCgHoEMk.js";import{C as r}from"./Checkbox-Dtuzk4i8.js";import{C as l}from"./CheckboxButton-SvSIlOgj.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-Bropz71p.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./index-BYd0o8d1.js";import"./utils-VWmQzJjV.js";import"./useMakeFocusable-BxZgzpIb.js";import"./useFieldComponent-BOMK2S5G.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./context-BwTFrxK2.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./FieldError-B_BExaNJ.js";import"./Text-B3jOd0w4.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Cd8Si-3W.js";import"./AlertIcon-BQQez7us.js";import"./IconWarning-D3143lfN.js";import"./remote-BClk6GLL.js";import"./RSPContexts-ulpMISZ-.js";import"./Form-XtAuYD0I.js";import"./useLabel-B6JubenB.js";import"./useFormValidation-przZuKLk.js";import"./useFocus-BQlkvxNG.js";import"./useFocusRing-6TkqSe16.js";import"./useControlledState-DV7blYjC.js";import"./usePress-BNr3g4sC.js";import"./useToggleState-PGBw0AOX.js";import"./useFormReset-D1AT4nVs.js";import"./useFocusable-B3euEuZy.js";import"./VisuallyHidden-DHhRta61.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:m("onChange"),isDisabled:!1,isReadOnly:!1},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},n={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},a={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(l,{value:"read",children:"Read"}),e.jsx(l,{value:"write",children:"Write"})]})},c={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(d,{children:"Select at least one to continue"})]})},p={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <Checkbox value="read" isDisabled>
        Read
      </Checkbox>
      <Checkbox value="write">Write</Checkbox>
    </CheckboxGroup>
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <CheckboxButton value="read">Read</CheckboxButton>
      <CheckboxButton value="write">Write</CheckboxButton>
    </CheckboxGroup>
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props} isInvalid isRequired>
      <Label>Permissions</Label>
      <Checkbox value="read">Read</Checkbox>
      <Checkbox value="write">Write</Checkbox>
      <FieldError>Select at least one to continue</FieldError>
    </CheckboxGroup>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
      <Label>Options</Label>
      <Checkbox value="1">Option 1</Checkbox>
      <Checkbox value="2">Option 2</Checkbox>
      <Checkbox value="3">Option 3</Checkbox>
      <Checkbox value="4">Option 4</Checkbox>
      <Checkbox value="5">Option 5</Checkbox>
      <Checkbox value="6">Option 6</Checkbox>
    </CheckboxGroup>
}`,...p.parameters?.docs?.source}}};const $=["Default","CheckboxDisabled","CheckboxButtons","WithFieldError","ColumnLayout"];export{a as CheckboxButtons,n as CheckboxDisabled,p as ColumnLayout,t as Default,c as WithFieldError,$ as __namedExportsOrder,Z as default};
