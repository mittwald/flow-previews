import{j as e}from"./iframe-gtGtPSGX.js";import{S as t,a as r}from"./Segment-CqRJKLWM.js";import{L as l}from"./Label-ezDYxAqR.js";import{F as d}from"./FieldError-co03Ctd_.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BXctKB_l.js";import"./index-D4jcCax4.js";import"./clsx-B-dksMZM.js";import"./index-CkPgzcm3.js";import"./useFieldComponent-BaX-M8wV.js";import"./utils-1b_KoCGs.js";import"./useMakeFocusable-SxNAN9f1.js";import"./RadioGroup-CWmqPKFV.js";import"./FieldError-DenhE7nb.js";import"./Text-B8kBB-Il.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BRxvySUZ.js";import"./useLabel-BqGs6HWh.js";import"./Label-Ca_2SnGY.js";import"./Hidden-DP7zwehU.js";import"./SelectionIndicator-DuOMWJ4l.js";import"./useFormValidation-BQy4AKy0.js";import"./useFocus-BGYZap87.js";import"./useFocusRing-jJpNIKKF.js";import"./useControlledState-a_M_Sxv2.js";import"./FocusScope-d04sRaMv.js";import"./context-B_6Y7rB4.js";import"./useFormReset-TvJ_gIa-.js";import"./usePress-ub7fcIm5.js";import"./useFocusable-uEYYPBvA.js";import"./VisuallyHidden-D8bGSG_p.js";import"./IconWarning-BtUUciVj.js";import"./remote-DGcAtBID.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BxxPIcIh.js";import"./AlertText-BWmstvFc.js";import"./AlertIcon-BrLsNTwF.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
