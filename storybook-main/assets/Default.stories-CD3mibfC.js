import{j as e}from"./iframe-CnrbHwTe.js";import{S as t,a as r}from"./Segment-BFbG9iZF.js";import{L as l}from"./Label-CIbW0Z8y.js";import{F as d}from"./FieldError-BJU6XwC7.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-aR3apKPq.js";import"./index-Cg95cP60.js";import"./clsx-B-dksMZM.js";import"./index-CUZGjyPT.js";import"./useFieldComponent-DrIyQ-Oz.js";import"./utils-r4y_43wh.js";import"./useMakeFocusable-Bl-9qapR.js";import"./RadioGroup-B3B6-B62.js";import"./FieldError-DsDXGDD4.js";import"./Text-nMrjd92_.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-CpewxKmk.js";import"./useLabel-Dn56kI8F.js";import"./Label-BQw60TG0.js";import"./Hidden-kZWiQEu_.js";import"./SelectionIndicator-CTBQmwrG.js";import"./useFormValidation-C9gosTEe.js";import"./useFocus-CW3ebFsS.js";import"./useControlledState-CcfbhOaY.js";import"./FocusScope-CJbwLE5j.js";import"./useFocusRing-CRQTw2D7.js";import"./context-B7MLny9I.js";import"./useFormReset-n7eHOhOu.js";import"./usePress-DoQNUybf.js";import"./useFocusable-DrwEzR41.js";import"./VisuallyHidden-DYF5WgrZ.js";import"./IconWarning-DgLNPfaL.js";import"./remote-CmycR9zC.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CyCvm50e.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
