import{j as e}from"./iframe-BZLAsPNC.js";import{S as t,a as r}from"./Segment-DOQwLP7_.js";import{L as l}from"./Label-DKRPZs6o.js";import{F as d}from"./FieldError-D2O_dT2D.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DRacmL0k.js";import"./index-Cf3UYr17.js";import"./clsx-B-dksMZM.js";import"./index-CYjhUmDO.js";import"./useFieldComponent-C5gewvzz.js";import"./utils-GBJhPEt0.js";import"./useMakeFocusable-ubcq2xSv.js";import"./RadioGroup-BlxH0B5H.js";import"./FieldError-B9G53mk8.js";import"./Text-C0MYo1gI.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-CDvikIHs.js";import"./useLabel-DAhF5fA-.js";import"./Label-BJwSQh0g.js";import"./Hidden-C94FXqZA.js";import"./SelectionIndicator--Gts2DGf.js";import"./useFormValidation-BLPWS9Vb.js";import"./useFocus-BAbXgSuO.js";import"./useControlledState-BdOl-nfx.js";import"./FocusScope-BleEWu6g.js";import"./useFocusRing-DUiko_nB.js";import"./context-B1QKiSyt.js";import"./useFormReset-B4usOE4z.js";import"./usePress-C3AJe8l0.js";import"./useFocusable-CJlLttAU.js";import"./VisuallyHidden-B55KrhOv.js";import"./IconWarning-BRgKnpuG.js";import"./remote-DD9qKW4I.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DU9ffxga.js";import"./AlertText-DgwQ_4kg.js";import"./AlertIcon-wpFTQr76.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <SegmentedControl {...props} defaultValue="admin" containerBreakpointSize="xs">
      <Label>Role</Label>
      <Segment value="admin">Admin</Segment>
      <Segment value="member">Member</Segment>
    </SegmentedControl>,
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <SegmentedControl {...props} isInvalid isRequired>
      <Label>Role</Label>
      <Segment value="admin">Admin</Segment>
      <Segment value="member">Member</Segment>
      <Segment value="accountant">Accountant</Segment>
      <FieldError>Select a role to continue</FieldError>
    </SegmentedControl>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <SegmentedControl {...props}>
      <Label>Role</Label>
      <Segment value="admin">Admin</Segment>
      <Segment value="member" isDisabled>
        Member
      </Segment>
      <Segment value="accountant">Accountant</Segment>
    </SegmentedControl>
}`,...s.parameters?.docs?.source}}};const Q=["Default","ReadOnly","CustomContainerBreakpoint","WithFieldError","DisabledSegments"];export{m as CustomContainerBreakpoint,o as Default,s as DisabledSegments,a as ReadOnly,i as WithFieldError,Q as __namedExportsOrder,P as default};
