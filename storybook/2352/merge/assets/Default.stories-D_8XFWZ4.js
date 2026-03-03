import{j as e}from"./iframe-DhXHhh1w.js";import{S as t,a as r}from"./Segment-DHbCy5bb.js";import{L as l}from"./Label-B97zndYQ.js";import{F as d}from"./FieldError-NwdeaE8Z.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-KRA3PXE8.js";import"./index-DnLu1uFy.js";import"./clsx-B-dksMZM.js";import"./index-B6ijkuYI.js";import"./useFieldComponent-CXGCADuw.js";import"./utils--GApMcJ9.js";import"./useMakeFocusable-Cgcvntmb.js";import"./RadioGroup-DogFEeDG.js";import"./FieldError-DoyTFare.js";import"./Text-BhHd18lu.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Cr93Lgju.js";import"./useLabel-B7imI5Js.js";import"./Label-B5DsgLYE.js";import"./Hidden-0q4YVuok.js";import"./SelectionIndicator-p-DrZhoI.js";import"./useFormValidation-Bi2teCon.js";import"./useFocus-CCcmXvuL.js";import"./useFocusRing-C0Ptw1X0.js";import"./useControlledState-BAaAMcGs.js";import"./FocusScope-DTOX4bjf.js";import"./context-C0JBe_V4.js";import"./useFormReset-BhTKQiKR.js";import"./usePress-DuFsm5YE.js";import"./useFocusable-DaonITQz.js";import"./VisuallyHidden-B52Q2-iE.js";import"./IconWarning-Cq0bATFd.js";import"./remote-3lBAaKOS.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-r_L1XqdG.js";import"./AlertText-CTc_944s.js";import"./AlertIcon-CowGyQyl.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
