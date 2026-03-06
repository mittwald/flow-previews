import{j as e}from"./iframe-CCG9iH9q.js";import{S as t,a as r}from"./Segment-C7qn78Xf.js";import{L as l}from"./Label-ZsZ9_LuX.js";import{F as d}from"./FieldError-C6WCZxmP.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DtMp-09u.js";import"./index-rcZGBqb0.js";import"./clsx-B-dksMZM.js";import"./index-DO8RY2JU.js";import"./useFieldComponent-BO1aRG8J.js";import"./utils-BqjYSsY0.js";import"./useMakeFocusable-aEs1MUdl.js";import"./RadioGroup-Bg2znveO.js";import"./FieldError-IbwLA4qq.js";import"./Text-CsZp0s5y.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CaeCkx3f.js";import"./useLabel-CWkbOtE9.js";import"./Label-Bqehi3yR.js";import"./Hidden-DP_c1-uJ.js";import"./SelectionIndicator-CG-R7p16.js";import"./useFormValidation-Jbp24I-0.js";import"./useFocus-DQtiJNjW.js";import"./useFocusRing-DEew3vp8.js";import"./useControlledState-DQCduMNG.js";import"./FocusScope-CGp51FRM.js";import"./context-BOE3Zx9s.js";import"./useFormReset-DOloisqU.js";import"./usePress-C9nCYq1D.js";import"./useFocusable-C9iBP5e4.js";import"./VisuallyHidden-B8BDvwZm.js";import"./IconWarning-CKuAFgzi.js";import"./remote-BNVNDlip.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BayblNF2.js";import"./AlertText-BBv4eV07.js";import"./AlertIcon-BWG972Pn.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
