import{j as e}from"./iframe-C2cGCWBO.js";import{S as t,a as r}from"./Segment-6_WdK4R8.js";import{L as l}from"./Label-DU1BG4Ln.js";import{F as d}from"./FieldError-DDTF9njD.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-C6jxxEVz.js";import"./index-rbmoV-yM.js";import"./clsx-B-dksMZM.js";import"./index-Du1kNfMe.js";import"./useFieldComponent-D_KC3UxI.js";import"./utils-CPzpSZL2.js";import"./useMakeFocusable-HLZm40Hd.js";import"./RadioGroup-CbvYEHE0.js";import"./FieldError-DA6JIYnG.js";import"./Text-D1LgYL-c.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C_NaUn2t.js";import"./useLabel-DicB4RC2.js";import"./Label-DeWWh5Nd.js";import"./Hidden-C_zHVHDn.js";import"./SelectionIndicator-vr7baVWi.js";import"./useFormValidation-DV5s_XV1.js";import"./useFocus-O4uYrVbU.js";import"./useFocusRing-wtbg8X8X.js";import"./useControlledState-MMDjipcl.js";import"./FocusScope-7k8F4i3d.js";import"./context-2EfdQWx2.js";import"./useFormReset-BdRaO3QH.js";import"./usePress-BrmD8Kf2.js";import"./useFocusable-DwbuT13T.js";import"./VisuallyHidden-C7EnMW_k.js";import"./IconWarning-C4LD0r9W.js";import"./remote-w8RrxnGT.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BAIjrI3d.js";import"./AlertText-DYOBaLM3.js";import"./AlertIcon-B9QySSBk.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
