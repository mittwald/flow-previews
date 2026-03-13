import{j as e}from"./iframe-BFddea_x.js";import{C as s}from"./CheckboxGroup-B2E_SmPl.js";import{L as i}from"./Label-Cyz25dCh.js";import{F as m}from"./FieldError-BfmusLP_.js";import{C as r}from"./Checkbox-C9k4Uk68.js";import{C as l}from"./CheckboxButton-BaTlIlE_.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-D3SlZPhk.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BHBUnD7I.js";import"./index-C2Q_zaaP.js";import"./index-CcOYdQtn.js";import"./utils-D-aZUMcZ.js";import"./useMakeFocusable-8SIFOJjD.js";import"./useFieldComponent-DrOhnKye.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D26SXOVZ.js";import"./context-CaZH5px0.js";import"./Label-DEW42_UF.js";import"./Hidden-CWxwpwFD.js";import"./FieldError-Dj7b6ixT.js";import"./Text-DndMRLn5.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-Cz5tkg5a.js";import"./AlertIcon-Bx7C3Aee.js";import"./IconWarning-Cwahpn-Q.js";import"./remote-DmjGOFpp.js";import"./RSPContexts-DrvlE6Qo.js";import"./Form-Cmx7zRsN.js";import"./useLabel-C__elmJN.js";import"./useFormValidation-CYvJLeFF.js";import"./useFocus-CQ-Kgrdg.js";import"./platform-UzmeURk8.js";import"./useFocusRing-Bo7DYhXU.js";import"./useControlledState-lfI_swTV.js";import"./usePress-DZQSLH7U.js";import"./useToggleState-hE4ermpf.js";import"./useFormReset-C1U9nA2s.js";import"./useFocusable-D-17EkqH.js";import"./VisuallyHidden-Bi0J0mAL.js";const{action:d}=__STORYBOOK_MODULE_ACTIONS__,$={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:d("onChange"),isDisabled:!1,isReadOnly:!1},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},n={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},a={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(l,{value:"read",children:"Read"}),e.jsx(l,{value:"write",children:"Write"})]})},c={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(m,{children:"Select at least one to continue"})]})},p={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const ee=["Default","CheckboxDisabled","CheckboxButtons","WithFieldError","ColumnLayout"];export{a as CheckboxButtons,n as CheckboxDisabled,p as ColumnLayout,t as Default,c as WithFieldError,ee as __namedExportsOrder,$ as default};
