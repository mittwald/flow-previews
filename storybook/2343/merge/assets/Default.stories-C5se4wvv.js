import{j as e}from"./iframe-BoiTaxGN.js";import{S as t,a as r}from"./Segment-C822izrL.js";import{L as l}from"./Label-DgN2b341.js";import{F as d}from"./FieldError-DjT7Sc36.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-5SfKf5nB.js";import"./index-CnTFVdv3.js";import"./clsx-B-dksMZM.js";import"./index-B9o0n-vC.js";import"./useFieldComponent-DiiGd8t3.js";import"./utils-RetFhwyR.js";import"./useMakeFocusable-CJoufYRj.js";import"./RadioGroup-C7XIbyqI.js";import"./FieldError-C1wD6V1t.js";import"./Text-DnUg5-aR.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BMda5et4.js";import"./useLabel-B8QgbILE.js";import"./Label-eoW__4rU.js";import"./Hidden-BZRUsILE.js";import"./SelectionIndicator-BQPOHDPg.js";import"./useFormValidation-CX6eZKbg.js";import"./useFocus-BSOUAoQt.js";import"./useFocusRing-VutGkHGx.js";import"./useControlledState-DJPWuI7p.js";import"./FocusScope-p908I3Or.js";import"./context-hlBZKj-7.js";import"./useFormReset-DsmV2EC6.js";import"./usePress-DoLCzapA.js";import"./useFocusable-CNuWQ5Vu.js";import"./VisuallyHidden-CML_0Z6P.js";import"./IconWarning-DctWBCm0.js";import"./remote-C4jG3DXh.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-jQztqgXA.js";import"./AlertText-aAUEFisb.js";import"./AlertIcon-B1VBridV.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
