import{j as e}from"./iframe-BAXQY30e.js";import{S as t,a as r}from"./Segment-BCHP5knA.js";import{L as l}from"./Label-DhF_BRrp.js";import{F as d}from"./FieldError-D1QPRlMW.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BWoWQ3Dz.js";import"./index-D8IPWXYD.js";import"./clsx-B-dksMZM.js";import"./index-BAu7LBGH.js";import"./useFieldComponent-RBMXOPsB.js";import"./utils-CPq9a2_3.js";import"./useMakeFocusable-4FeZN37B.js";import"./RadioGroup-gEmzYRSi.js";import"./FieldError-RUpMVejq.js";import"./Text-CgyRU_jx.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CMcE9GN0.js";import"./useLabel-XkQiS-6W.js";import"./Label-CoIwZGGV.js";import"./Hidden-CaIV9czF.js";import"./SelectionIndicator-m0lWLhXd.js";import"./useFormValidation-DAvMLm6e.js";import"./useFocus-Bjv2U0Px.js";import"./useFocusRing-eOVByyHK.js";import"./useControlledState-BIans2ur.js";import"./FocusScope-PoiaPb2X.js";import"./context-Ch7cvv9N.js";import"./useFormReset-CqoQKslx.js";import"./usePress-0WoXV1eK.js";import"./useFocusable-B7f7k6Nb.js";import"./VisuallyHidden-qM1rInXZ.js";import"./IconWarning-NY-vs6K4.js";import"./remote-X8ibHJNw.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D2lE0ZvY.js";import"./AlertText-Do_swE0s.js";import"./AlertIcon-C4A5rqth.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
