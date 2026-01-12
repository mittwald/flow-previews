import{j as e}from"./iframe-Ca6Y6Qbd.js";import{S as t,a as r}from"./Segment-B1g_84D3.js";import{L as l}from"./Label-BiOSulbp.js";import{F as d}from"./FieldError-Btuc_7Om.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-D9fMwVbm.js";import"./index-Dtyg9OU-.js";import"./clsx-B-dksMZM.js";import"./index-dqS1_mS3.js";import"./useFieldComponent-Drxg4ucu.js";import"./utils-CgPiupY7.js";import"./useMakeFocusable-563tR2pS.js";import"./RadioGroup-6CdKqKa1.js";import"./FieldError-DTh-affr.js";import"./Text-XI5tIYL5.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DvyEl8-X.js";import"./useLabel-DSKkVaVQ.js";import"./Label-oMJsQOKa.js";import"./Hidden-B5n9q6va.js";import"./SelectionIndicator-Cqdhise0.js";import"./useFormValidation-CFRjiWi1.js";import"./useFocus-YlOppDM-.js";import"./useControlledState-CsFJYMR6.js";import"./FocusScope-g3u6sbgU.js";import"./useFocusRing-DB26dgIQ.js";import"./context-BSVjMcq9.js";import"./useFormReset-QXLzcWbc.js";import"./usePress-7njUzVdk.js";import"./useFocusable-DsA9Nlin.js";import"./VisuallyHidden-DA0DNDbd.js";import"./IconWarning-DE1Emhrq.js";import"./remote-B__m5VQE.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DPFID8Bg.js";import"./AlertText-PH5mi2hk.js";import"./AlertIcon-CE0IjQiw.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
