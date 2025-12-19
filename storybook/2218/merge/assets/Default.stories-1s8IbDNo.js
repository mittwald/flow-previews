import{j as e}from"./iframe-BVdPrJ3b.js";import{S as t,a as r}from"./Segment-VyUYFJyN.js";import{L as l}from"./Label-CzweG7Yl.js";import{F as d}from"./FieldError-BeQ9X37c.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-od4I0R-N.js";import"./index-i9F-e6Sd.js";import"./clsx-B-dksMZM.js";import"./index-BWMeLKrj.js";import"./useFieldComponent-Pua8aj4t.js";import"./utils-BEq1Wr11.js";import"./useMakeFocusable-Du4vyJos.js";import"./RadioGroup-BFuLjZrq.js";import"./FieldError-BhKmMJaW.js";import"./Text-CmXVeCCc.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BeiuGm7T.js";import"./useLabel-CZZK6Myr.js";import"./Label-kfmO3nvk.js";import"./Hidden-Dqh1ls-B.js";import"./SelectionIndicator-BRRaId4S.js";import"./useFormValidation-BHFBjW_A.js";import"./useFocus-DKH0A8r5.js";import"./useControlledState-CgIeep-j.js";import"./FocusScope-Bh-KjmdJ.js";import"./useFocusRing-D6WsekYV.js";import"./context-D026yTy_.js";import"./useFormReset-DipgmSs2.js";import"./usePress-DUwPxRbX.js";import"./useFocusable-CP0kX89o.js";import"./VisuallyHidden-BtVtJU_V.js";import"./IconWarning-YADbbYCH.js";import"./remote-CTgJkn4z.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CWJICem7.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
