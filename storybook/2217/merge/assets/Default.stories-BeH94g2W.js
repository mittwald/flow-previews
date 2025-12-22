import{j as e}from"./iframe-Du65Ph_c.js";import{S as t,a as r}from"./Segment-DGdDImA2.js";import{L as l}from"./Label-BClS0qAd.js";import{F as d}from"./FieldError-VBXyMAIR.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CYbHZhXg.js";import"./index-XI88kJrR.js";import"./clsx-B-dksMZM.js";import"./index-c0t27COx.js";import"./useFieldComponent-XbdbUfvB.js";import"./utils-xIJEb5Gc.js";import"./useMakeFocusable-BEkPhqDc.js";import"./RadioGroup-CKUjiS_Q.js";import"./FieldError-cRzcLKxU.js";import"./Text-Cl831mKA.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-CLANTGFM.js";import"./useLabel-BdNff0XI.js";import"./Label-D_GXaE34.js";import"./Hidden-BV9iY75y.js";import"./SelectionIndicator-Cb43LM7W.js";import"./useFormValidation-DAWFGl74.js";import"./useFocus-mAbeDdRN.js";import"./useControlledState-Cdt3oZ6_.js";import"./FocusScope-DUOtKQcD.js";import"./useFocusRing-B7cLewIC.js";import"./context-BMDcuGwa.js";import"./useFormReset-D830YkJ7.js";import"./usePress-CyOin5iy.js";import"./useFocusable-RoNPbAVl.js";import"./VisuallyHidden-rhukFLga.js";import"./IconWarning-CGSd0Gik.js";import"./remote-D3fYDNUY.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Dhvhyrh1.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
