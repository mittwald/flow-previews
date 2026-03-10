import{j as e}from"./iframe-Bge_iwzq.js";import{C as s}from"./CheckboxGroup-C-eb0IeT.js";import{L as i}from"./Label-DsCIDP_n.js";import{F as d}from"./FieldError-D2SilRMV.js";import{C as r}from"./Checkbox-BgsnojNg.js";import{C as l}from"./CheckboxButton-GB8VLuWy.js";import"./preload-helper-PPVm8Dsz.js";import"./ColumnLayout-DR49IgRS.js";import"./clsx-B-dksMZM.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./index-Dbbom8kG.js";import"./utils-rhPAe061.js";import"./useMakeFocusable-D6KSzyjC.js";import"./useFieldComponent-DrAtnMqi.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./FieldError-Cv0VAgMN.js";import"./Text-70WXc8nw.js";import"./filterDOMProps-BNnC3YgW.js";import"./AlertText-BlzMkriF.js";import"./AlertIcon-DJ3CSUsO.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";import"./RSPContexts-DPd6iTOd.js";import"./Form-YPyJtwoF.js";import"./useLabel-ltgoN8N_.js";import"./useFormValidation-SyV8SqLU.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useControlledState-CyAGSHwZ.js";import"./usePress-BXEJU3rI.js";import"./useToggleState-ClzIwFMh.js";import"./useFormReset-CAOi_S_S.js";import"./useFocusable-BPbhPIus.js";import"./VisuallyHidden-BL5eqrat.js";const{action:m}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"Form Controls/CheckboxGroup",component:s,args:{onChange:m("onChange"),isDisabled:!1,isReadOnly:!1},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},t={},n={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},a={render:o=>e.jsxs(s,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(l,{value:"read",children:"Read"}),e.jsx(l,{value:"write",children:"Write"})]})},c={render:o=>e.jsxs(s,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(d,{children:"Select at least one to continue"})]})},p={render:o=>e.jsxs(s,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
