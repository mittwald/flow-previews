import{j as e}from"./iframe-1XlmVqd5.js";import{S as t,a as r}from"./Segment-CuXcyJm9.js";import{L as l}from"./Label-DewN6HGl.js";import{F as d}from"./FieldError-D3E1IfUM.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-Uz-OX7bY.js";import"./index-Ba7AqYg5.js";import"./clsx-B-dksMZM.js";import"./index-TUds5Kez.js";import"./useFieldComponent--2vv_KDv.js";import"./utils-DcI_f0WL.js";import"./useMakeFocusable-CtWDf-qa.js";import"./RadioGroup-CILEHgVo.js";import"./FieldError-gWTdIqt3.js";import"./Text-DC6xHoyY.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-XQS-LbjO.js";import"./useLabel-CWL3lRor.js";import"./Label-Dzg72Lo7.js";import"./Hidden-D2eIjlR0.js";import"./SelectionIndicator-qE_U9bCq.js";import"./useFormValidation-BKr0RaqD.js";import"./useFocus-B3hq9TNr.js";import"./useFocusRing-nXz5Fj6s.js";import"./useControlledState-DjEU-0mZ.js";import"./FocusScope-cwCTJx2V.js";import"./context-cVtndIAK.js";import"./useFormReset-DNo3mt-e.js";import"./usePress-CBxBnL8r.js";import"./useFocusable-BsD1LxMy.js";import"./VisuallyHidden-Dm6nphJv.js";import"./IconWarning-B1VVAKEh.js";import"./remote-BMRYc7VB.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter--9VaGy1Y.js";import"./AlertText-BeWzsZor.js";import"./AlertIcon-B1ETMix0.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
