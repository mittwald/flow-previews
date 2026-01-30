import{j as e}from"./iframe-K4Kgzs5d.js";import{S as t,a as r}from"./Segment-BquUYi77.js";import{L as l}from"./Label-BHhszR2e.js";import{F as d}from"./FieldError-BIdQs2eG.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CbChzPG9.js";import"./index-Coqdyp07.js";import"./clsx-B-dksMZM.js";import"./index-C1Cqv2DY.js";import"./useFieldComponent-XDoLqUAT.js";import"./utils--XC5cWbY.js";import"./useMakeFocusable-DsE4FH7x.js";import"./RadioGroup-BkAQkVW1.js";import"./FieldError-CDQ9nLxM.js";import"./Text-DhK76AHe.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BeqJ_QXS.js";import"./useLabel-IleSnN60.js";import"./Label-Du2Jf-3y.js";import"./Hidden-DNKD1xKj.js";import"./SelectionIndicator-LfvmrL3H.js";import"./useFormValidation-QT1HCjbB.js";import"./useFocus-CfhKlOoP.js";import"./useFocusRing-B7VfbIok.js";import"./useControlledState-UcCiEhN3.js";import"./FocusScope-A43bauPW.js";import"./context-BHsz5d3m.js";import"./useFormReset-Bu0cPn5B.js";import"./usePress-Bsv_-vru.js";import"./useFocusable-H6UpmrOx.js";import"./VisuallyHidden-DOfAC-AS.js";import"./IconWarning-BGpHZy47.js";import"./remote-DgH_DZKx.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DDBnVsYO.js";import"./AlertText-DseO20UX.js";import"./AlertIcon-Bh0Qf_48.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
