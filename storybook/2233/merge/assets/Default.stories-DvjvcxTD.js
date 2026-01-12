import{j as e}from"./iframe-DkC9HeFh.js";import{S as t,a as r}from"./Segment-qf_AtIkp.js";import{L as l}from"./Label-Bmyd95n1.js";import{F as d}from"./FieldError-Dbnkzdo1.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-1oYrvkPj.js";import"./index-DvyT4dL7.js";import"./clsx-B-dksMZM.js";import"./index-84tLr-0T.js";import"./useFieldComponent-eCPWR12U.js";import"./utils-CQbe0cgS.js";import"./useMakeFocusable-DHEcDkEu.js";import"./RadioGroup-Cmw-qd-l.js";import"./FieldError-CNoEBaIo.js";import"./Text-BZKGVCR5.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-D5R2a4m8.js";import"./useLabel-Yk9h4-sj.js";import"./Label-Dz_bjD6f.js";import"./Hidden-Dt8SDEzH.js";import"./SelectionIndicator-2dj1bxWN.js";import"./useFormValidation-DmYU2vdY.js";import"./useFocus-DkNOoSBL.js";import"./useControlledState-Ul0j90Sg.js";import"./FocusScope-Bsk9Ww9W.js";import"./useFocusRing-C9ROKOON.js";import"./context-FwWFVwDs.js";import"./useFormReset-BF2XnUgU.js";import"./usePress-zXWrYZpb.js";import"./useFocusable-CeYJrI7n.js";import"./VisuallyHidden-DWtp1z23.js";import"./IconWarning-6DY0-AAa.js";import"./remote-C2KQESr1.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BMEualnj.js";import"./AlertText-DN8jvMhh.js";import"./AlertIcon-BRQK8hpu.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
