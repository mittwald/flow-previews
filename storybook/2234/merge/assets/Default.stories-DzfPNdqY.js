import{j as e}from"./iframe-Cz8_C8zY.js";import{S as t,a as r}from"./Segment-Bu-ephsd.js";import{L as l}from"./Label-gR0Y05hv.js";import{F as d}from"./FieldError-CEw8HJGt.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BcPJG4Ua.js";import"./index-Cdfsiuxw.js";import"./clsx-B-dksMZM.js";import"./index-SrORw6vN.js";import"./useFieldComponent--MNREdev.js";import"./utils-BAKlH2Lm.js";import"./useMakeFocusable-BAQFPRRR.js";import"./RadioGroup-Dol0ftpM.js";import"./FieldError-B254xHCi.js";import"./Text-Cr087Rh_.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-Bv3CSU0e.js";import"./useLabel-BFm9pXXT.js";import"./Label-2kcHPH94.js";import"./Hidden-CWAqagDm.js";import"./SelectionIndicator-DD4cK7So.js";import"./useFormValidation-DBiWbYgf.js";import"./useFocus-DFbFm1Xx.js";import"./useControlledState-C0o23ioH.js";import"./FocusScope-DR3pULV0.js";import"./useFocusRing-BDmU1dd9.js";import"./context-VkDhZA-x.js";import"./useFormReset-CSPeTQLr.js";import"./usePress-DcZz-lB5.js";import"./useFocusable-CJ-4fYj7.js";import"./VisuallyHidden-7uh1Rm92.js";import"./IconWarning-DLbRRuK1.js";import"./remote-D3nX27fk.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Bo3Sbs5c.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
