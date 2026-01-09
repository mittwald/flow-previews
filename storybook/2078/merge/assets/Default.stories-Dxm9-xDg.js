import{j as e}from"./iframe-BoA7YzYm.js";import{S as t,a as r}from"./Segment-CFda7L8v.js";import{L as l}from"./Label-Cjbbehtk.js";import{F as d}from"./FieldError-CkVfHT3s.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-rXkph_fu.js";import"./index-DXjuNE_i.js";import"./clsx-B-dksMZM.js";import"./index-C8IfwtBf.js";import"./useFieldComponent-DkEUVrE8.js";import"./utils-CbCfmbCJ.js";import"./useMakeFocusable-7sfTEwK_.js";import"./RadioGroup-e7qeBvWt.js";import"./FieldError-DIrg2qiC.js";import"./Text-DzES3Axw.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DOX3bg_5.js";import"./useLabel-BJjmJvn4.js";import"./Label-CIY5uMr1.js";import"./Hidden-COFYe48C.js";import"./SelectionIndicator-fGxLhP25.js";import"./useFormValidation-D99W395Z.js";import"./useFocus-0w8IxMP9.js";import"./useControlledState-Bptfp7LK.js";import"./FocusScope-ewaHP7Wk.js";import"./useFocusRing-QIpAUb-m.js";import"./context-Bl3IUlM5.js";import"./useFormReset-Lf5kfq5Z.js";import"./usePress-VWzB255U.js";import"./useFocusable-03sk398M.js";import"./VisuallyHidden-ulLndJxN.js";import"./IconWarning-Cm4x5FHH.js";import"./remote-W2BsjsJq.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BmdJpMCj.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
