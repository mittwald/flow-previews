import{j as e}from"./iframe-CcUuYubL.js";import{S as t,a as r}from"./Segment-B_6QL6hU.js";import{L as l}from"./Label-L2Rin-A2.js";import{F as d}from"./FieldError-BP_boiRG.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BzXwfnR4.js";import"./index-01_sGRec.js";import"./clsx-B-dksMZM.js";import"./index-C6oVqO8J.js";import"./useFieldComponent-DfHGJXnI.js";import"./utils-B3A9CwVo.js";import"./useMakeFocusable-r8lDHb0m.js";import"./RadioGroup-DMpL-dhP.js";import"./FieldError-BzVPBYcu.js";import"./Text-B0FzOrzN.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-D1MNyHLC.js";import"./useLabel-4jeMa91n.js";import"./Label-ISSVaHBY.js";import"./Hidden-JctcoGsF.js";import"./SelectionIndicator-DgBShxS7.js";import"./useFormValidation-ey4MT9ZA.js";import"./useFocus-tKANsd5T.js";import"./useControlledState-Cd7zGKC9.js";import"./FocusScope-BV2sx_oo.js";import"./useFocusRing-CorDS6JG.js";import"./context-BiAKFHSE.js";import"./useFormReset-CtXF-ibf.js";import"./usePress-BQdte7r9.js";import"./useFocusable-D38UQMpJ.js";import"./VisuallyHidden-DlLFaNIr.js";import"./IconWarning-BDjC6xOL.js";import"./remote-DfJLRaxN.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BCaxxAx_.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
