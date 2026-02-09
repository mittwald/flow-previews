import{j as e}from"./iframe-BwTc9KkQ.js";import{S as t,a as r}from"./Segment-BPQbWQga.js";import{L as l}from"./Label-BbbV6hPu.js";import{F as d}from"./FieldError-BhKB-hqh.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CVbdUxz2.js";import"./index-CGQkNtsL.js";import"./clsx-B-dksMZM.js";import"./index-C6-tpPRF.js";import"./useFieldComponent-D1bp3yFp.js";import"./utils-CBQcEIVx.js";import"./useMakeFocusable-DEwr5FBt.js";import"./RadioGroup-CJmYWAzi.js";import"./FieldError-B40__s1G.js";import"./Text-DngMYAZH.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CXxVDbS0.js";import"./useLabel-BSSuBv8C.js";import"./Label-123M7w93.js";import"./Hidden-DzSpzd_A.js";import"./SelectionIndicator-CWwUcpBG.js";import"./useFormValidation-BAeTIVc2.js";import"./useFocus-BpPHYutm.js";import"./useFocusRing-DolIE8eq.js";import"./useControlledState-DJoARPq6.js";import"./FocusScope-D13mvD2r.js";import"./context-BwyA9HG-.js";import"./useFormReset-38634gnl.js";import"./usePress-CJeMKVhz.js";import"./useFocusable-B00zaX18.js";import"./VisuallyHidden-BgOZVVaM.js";import"./IconWarning-CuEgZ9GS.js";import"./remote-B0txjFXx.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-INCxkZRf.js";import"./AlertText-tZCm05zF.js";import"./AlertIcon-B9dP4NVD.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
