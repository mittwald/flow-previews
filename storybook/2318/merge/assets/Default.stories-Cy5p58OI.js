import{j as e}from"./iframe-CNIcTJYh.js";import{S as t,a as r}from"./Segment-DJFUaZb5.js";import{L as l}from"./Label-Dk1BsiHf.js";import{F as d}from"./FieldError-CRJL1-ZW.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-60nesrge.js";import"./index-D3p32_5k.js";import"./clsx-B-dksMZM.js";import"./index-UhPRO7XN.js";import"./useFieldComponent-BcSx3cQM.js";import"./utils-BMrW0rs-.js";import"./useMakeFocusable-CRnFMBmj.js";import"./RadioGroup-CysPN6QE.js";import"./FieldError-C-WtBUhj.js";import"./Text-D2vn8IUC.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DFzq_6cf.js";import"./useLabel-OR8aG57O.js";import"./Label-T_N4SAco.js";import"./Hidden-CRwhep7p.js";import"./SelectionIndicator-DvRn40OS.js";import"./useFormValidation-Cl_ELzYY.js";import"./useFocus-Z0zsAUPg.js";import"./useFocusRing-DW-rJUC8.js";import"./useControlledState-aVbBpOCK.js";import"./FocusScope-BYGRF7Vw.js";import"./context-C-_0n7Mf.js";import"./useFormReset-ClGEeDTe.js";import"./usePress-YapnYrtx.js";import"./useFocusable-pw23kKVy.js";import"./VisuallyHidden-BJLw9ne3.js";import"./IconWarning-DfNRCo5R.js";import"./remote-yIvwWX6j.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Rr_25XDQ.js";import"./AlertText-C0QdtU2r.js";import"./AlertIcon-CQAKF3sa.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
