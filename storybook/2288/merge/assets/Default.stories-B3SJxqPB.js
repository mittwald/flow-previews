import{j as e}from"./iframe-Bj8CIgLy.js";import{S as t,a as r}from"./Segment-DDUGrnfK.js";import{L as l}from"./Label-DCfOJgVU.js";import{F as d}from"./FieldError-Dbjs-A5K.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BPltRtpV.js";import"./index-BeouMsqR.js";import"./clsx-B-dksMZM.js";import"./index-DYakERwo.js";import"./useFieldComponent-DFS7CEov.js";import"./utils-D41FTHpf.js";import"./useMakeFocusable-D2WqMYFi.js";import"./RadioGroup-COV71R1p.js";import"./FieldError-cTj-tlV1.js";import"./Text-CVMu3Bei.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CdHdNrpC.js";import"./useLabel-j5JIlG5u.js";import"./Label-BAoc3jdD.js";import"./Hidden-DWJk28Vx.js";import"./SelectionIndicator-DBsPgOzp.js";import"./useFormValidation-CuYWsRMr.js";import"./useFocus-BJLP4kuV.js";import"./useFocusRing-0HtVE4-I.js";import"./useControlledState-C0IHmt74.js";import"./FocusScope-DNVRBXI-.js";import"./context-RK9vgtK2.js";import"./useFormReset-DPVe5t_C.js";import"./usePress-BLrqdZMB.js";import"./useFocusable-DNf9Dm0r.js";import"./VisuallyHidden-D10Fyvvv.js";import"./IconWarning-KvO0562x.js";import"./remote-ChNLl0N8.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-B8a-qUY7.js";import"./AlertText-Bt0Daj0V.js";import"./AlertIcon-Bub-4wJk.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
