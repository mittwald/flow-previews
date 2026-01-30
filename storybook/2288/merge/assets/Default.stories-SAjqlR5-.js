import{j as e}from"./iframe-BipmDVic.js";import{S as t,a as r}from"./Segment-nS8534mf.js";import{L as l}from"./Label-D7pFsU69.js";import{F as d}from"./FieldError-CHo9rwLP.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CqzOrDl2.js";import"./index-5IWmXg28.js";import"./clsx-B-dksMZM.js";import"./index-DhRV0L_D.js";import"./useFieldComponent-VycST_vs.js";import"./utils-BmvAbY6y.js";import"./useMakeFocusable-C2p-RMmT.js";import"./RadioGroup-xWDm92Xz.js";import"./FieldError-BYM5jSaa.js";import"./Text-Bx_sJIF1.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BQ1NzRsL.js";import"./useLabel-DZFs0BX7.js";import"./Label-CKCJMrcf.js";import"./Hidden-CaQYrS-R.js";import"./SelectionIndicator-DQakRxMT.js";import"./useFormValidation-DUx2L2VN.js";import"./useFocus-1VXHi-Mn.js";import"./useFocusRing-B8DUU0zm.js";import"./useControlledState-CTBxctZq.js";import"./FocusScope-BUuvBHJx.js";import"./context-Br1o_Gsv.js";import"./useFormReset-Bn-cpXjq.js";import"./usePress-BGUPUAq5.js";import"./useFocusable-CoJ_GBdx.js";import"./VisuallyHidden-CJz5Ez-_.js";import"./IconWarning-CGnZi41_.js";import"./remote-Bx5-otuG.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DMEYEfT-.js";import"./AlertText-BpI_nGHQ.js";import"./AlertIcon-Cy_cDr6j.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
