import{j as e}from"./iframe-BXGfha1q.js";import{C as s}from"./CheckboxGroup-nDPbJW8h.js";import{L as i}from"./Label-DmvSuQEb.js";import{F as d}from"./FieldError-B0wR5GbE.js";import{C as r}from"./Checkbox-DI6T2fe5.js";import{C as l}from"./CheckboxButton-5tpam1A6.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-Ca_zPp5k.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./index-D0PS_Jbm.js";import"./utils-DDzB-hS3.js";import"./useMakeFocusable-CYA8YNba.js";import"./useFieldComponent-BBRXs3en.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./context-C9BhwF0E.js";import"./Label-B_ylra4b.js";import"./Hidden-CY2KAX5F.js";import"./FieldError-B-_MD7Je.js";import"./Text-B1oZgTuN.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-D4bpqMRF.js";import"./AlertIcon-DqNX7jjv.js";import"./IconWarning-1Z1PxSqQ.js";import"./remote-DEIhwdad.js";import"./RSPContexts-CG0vEblW.js";import"./Form-C11JLohN.js";import"./useLabel-DPznQWXv.js";import"./useFormValidation-51U-qV9x.js";import"./useFocus-WJp8rgri.js";import"./useFocusRing-DmfdXYcF.js";import"./useControlledState-Wh-cgAjH.js";import"./usePress-DFEm-gMh.js";import"./useToggleState-BBpbo1Bk.js";import"./useFormReset-9RWtv4Ar.js";import"./useFocusable-DT8F95KZ.js";import"./VisuallyHidden-eEVd_sfi.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:m("onChange"),isDisabled:!1,isReadOnly:!1},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},n={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},a={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(l,{value:"read",children:"Read"}),e.jsx(l,{value:"write",children:"Write"})]})},c={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(d,{children:"Select at least one to continue"})]})},p={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
