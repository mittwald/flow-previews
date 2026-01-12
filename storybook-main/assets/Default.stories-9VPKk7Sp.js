import{j as e}from"./iframe-4vGjmvQN.js";import{S as t,a as r}from"./Segment-D5c5bH_N.js";import{L as l}from"./Label-C8vmJ-_M.js";import{F as d}from"./FieldError-ZzdG0j41.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BTnwUX2e.js";import"./index-DFF4TtWB.js";import"./clsx-B-dksMZM.js";import"./index--XKY9bK1.js";import"./useFieldComponent-diqFBc0H.js";import"./utils-Cb3SeWCs.js";import"./useMakeFocusable-Fz4aUxTJ.js";import"./RadioGroup-B1tXmyYL.js";import"./FieldError-D1JCdJnN.js";import"./Text-DO-ESRpi.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Bf7p1I1W.js";import"./useLabel-Dy2_qp8M.js";import"./Label-DRFrGBxg.js";import"./Hidden-DKOWGOBv.js";import"./SelectionIndicator-Cti1f0QF.js";import"./useFormValidation-BrUcW_b7.js";import"./useFocus-BGpJf3EA.js";import"./useControlledState-wPwtFL3G.js";import"./FocusScope-Blxz7JIY.js";import"./useFocusRing-ctZhab72.js";import"./context-Cugfl_gO.js";import"./useFormReset-BZ0fN7tZ.js";import"./usePress-SP29s-a6.js";import"./useFocusable-BvBcbeR1.js";import"./VisuallyHidden-C3YQx9t_.js";import"./IconWarning-CMo0ZXSb.js";import"./remote-BMVFgzCt.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Ci5i2g9p.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const J=["Default","ReadOnly","CustomContainerBreakpoint","WithFieldError","DisabledSegments"];export{m as CustomContainerBreakpoint,o as Default,s as DisabledSegments,a as ReadOnly,i as WithFieldError,J as __namedExportsOrder,H as default};
