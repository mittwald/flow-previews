import{j as e}from"./iframe-CDsKaBRg.js";import{S as t,a as r}from"./Segment-BN3e1Uc0.js";import{L as l}from"./Label-D5EyKl2G.js";import{F as d}from"./FieldError-CR7kl2wA.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CuU7ZQj2.js";import"./index-C6JQHEhq.js";import"./clsx-B-dksMZM.js";import"./index-RjKRi-BV.js";import"./useFieldComponent-CC8SHRwT.js";import"./utils-D_LVRUjq.js";import"./useMakeFocusable-CMgfR4Fo.js";import"./RadioGroup-DPUzm_zz.js";import"./FieldError-CoNTUoG6.js";import"./Text-Ara-YSvE.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CsNQY4H6.js";import"./useLabel-CIho-35Z.js";import"./Label-PkZPP5nP.js";import"./Hidden-kPYjxK5s.js";import"./SelectionIndicator-Dg52EWqk.js";import"./useFormValidation-B4cT2hyf.js";import"./useFocus-DLB8Ejx4.js";import"./useFocusRing-BBPUeOqt.js";import"./useControlledState-daUq4f0n.js";import"./FocusScope-BDZMZ6lz.js";import"./context-BPMj9VV_.js";import"./useFormReset-CxPQXG_K.js";import"./usePress-Dan0bPtD.js";import"./useFocusable-C6i2fSTk.js";import"./VisuallyHidden-BzY4kZPn.js";import"./IconWarning-BO7Rp0Xm.js";import"./remote-CceIEVln.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-lsSx1U8y.js";import"./AlertText-BdJT91v6.js";import"./AlertIcon-BRHbbzl7.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
