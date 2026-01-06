import{j as e}from"./iframe-Dnm846PF.js";import{S as t,a as r}from"./Segment-hBHMnhcr.js";import{L as l}from"./Label-CfPB20lW.js";import{F as d}from"./FieldError-Ze0pQjLj.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-S63Cq1sy.js";import"./index-Db1dbbsL.js";import"./clsx-B-dksMZM.js";import"./index-sBHKlQZD.js";import"./useFieldComponent-CW3QYPg0.js";import"./utils-VDIU0BnD.js";import"./useMakeFocusable-BbEQC8YI.js";import"./RadioGroup-DvgCw-uU.js";import"./FieldError-BJ4Wbc9z.js";import"./Text-1v5GZWlz.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DyzgNsfN.js";import"./useLabel-pLNL7Cvk.js";import"./Label-B2apKb0w.js";import"./Hidden-1UUWpuD7.js";import"./SelectionIndicator-B7sCGTL_.js";import"./useFormValidation-CGpO-wMA.js";import"./useFocus-D-7SE4fF.js";import"./useControlledState-CkFAdRGn.js";import"./FocusScope-DH4o0wc_.js";import"./useFocusRing-CANRw9LC.js";import"./context-CoOH5oCy.js";import"./useFormReset-BiFYZY7a.js";import"./usePress-CU4gAXU4.js";import"./useFocusable-DgTTkttD.js";import"./VisuallyHidden-C6zUvnKf.js";import"./IconWarning-CExbEpDP.js";import"./remote-XcyFsW5Q.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BqtI09-_.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
