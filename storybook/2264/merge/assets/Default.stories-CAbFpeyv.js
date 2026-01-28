import{j as e}from"./iframe-HHIIuBER.js";import{S as t,a as r}from"./Segment-PrF95hBD.js";import{L as l}from"./Label-CBXKH6Tn.js";import{F as d}from"./FieldError-Fy3l3DO0.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-Bj-yCW37.js";import"./index-GTbupaTN.js";import"./clsx-B-dksMZM.js";import"./index-CXDCOpiF.js";import"./useFieldComponent-DUw61_cc.js";import"./utils-Cg0Q0SJj.js";import"./useMakeFocusable-Dw3qKCJa.js";import"./RadioGroup-BUzi86eW.js";import"./FieldError-DxbTuNm9.js";import"./Text-XNblTka2.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-bxdneiGL.js";import"./useLabel-5SH0-wGx.js";import"./Label-DYUVUuL-.js";import"./Hidden-B0PUXGbF.js";import"./SelectionIndicator-D4-zI_jf.js";import"./useFormValidation-CzNeWdfJ.js";import"./useFocus--KWf2FGc.js";import"./useFocusRing-4HIuR3kq.js";import"./useControlledState-DbjjrDzt.js";import"./FocusScope-BRQqWTqz.js";import"./context-BwOS-W-N.js";import"./useFormReset-9uO05BU2.js";import"./usePress-DR7SsbUT.js";import"./useFocusable-CK9MQKQ0.js";import"./VisuallyHidden-W06uk0vU.js";import"./IconWarning-CPuUEZGY.js";import"./remote-MyOm1NIW.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BQVDI3r4.js";import"./AlertText-DlszfG1H.js";import"./AlertIcon-CK1OfGfa.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
