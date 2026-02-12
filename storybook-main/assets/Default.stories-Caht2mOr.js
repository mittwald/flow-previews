import{j as e}from"./iframe-C_XCETJ4.js";import{S as t,a as r}from"./Segment-Djv6YKvT.js";import{L as l}from"./Label-C05Lio9F.js";import{F as d}from"./FieldError-Cv_CJ9jj.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-Dc7MSmoT.js";import"./index-BDg420Zs.js";import"./clsx-B-dksMZM.js";import"./index-BzhLFU3i.js";import"./useFieldComponent-K9rhjMxn.js";import"./utils-Bso2FrGw.js";import"./useMakeFocusable-X7BVYo0o.js";import"./RadioGroup-D9jZi1Iu.js";import"./FieldError-5QFQIGqn.js";import"./Text-CpxVEUdG.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Bpra3FZF.js";import"./useLabel-DQxA1BA6.js";import"./Label-BzKkLHI6.js";import"./Hidden-D0LCwc-B.js";import"./SelectionIndicator-CpgeLwVt.js";import"./useFormValidation-CsbIfaDX.js";import"./useFocus-D-vzktAn.js";import"./useFocusRing-Dl1uWSge.js";import"./useControlledState-CeDypDyB.js";import"./FocusScope-f515rn4z.js";import"./context-CpOW4Kl4.js";import"./useFormReset-CmrFi5aC.js";import"./usePress-B-xR971w.js";import"./useFocusable-CMVXl80p.js";import"./VisuallyHidden-Bb8hL7UW.js";import"./IconWarning-D8ZYq2sU.js";import"./remote-BBIBCAlv.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BgkeYfOl.js";import"./AlertText-B-9KJ9sd.js";import"./AlertIcon-Bo1DHsRX.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
