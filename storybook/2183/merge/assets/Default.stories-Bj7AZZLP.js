import{j as e}from"./iframe-B9O3ZODG.js";import{S as t,a as r}from"./Segment-CQaopXF2.js";import{L as l}from"./Label-B_yUo08w.js";import{F as d}from"./FieldError-Kcym6Pi9.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-Dx9-gQDY.js";import"./index-Bk8h6op_.js";import"./clsx-B-dksMZM.js";import"./index-CtGMuppQ.js";import"./useFieldComponent-CRvrWckq.js";import"./utils-B6bG5pl_.js";import"./useMakeFocusable-DQXJft12.js";import"./RadioGroup-W0BEtPcO.js";import"./FieldError-BrC6eHcT.js";import"./Text-Bex48AEt.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-BpuzTWI4.js";import"./useLabel-BXmDULV_.js";import"./Label-CUW7vXaw.js";import"./Hidden-1Y6zqjHd.js";import"./SelectionIndicator-DTYkM1Yz.js";import"./useFormValidation-Dlo1bwd1.js";import"./useFocus-CgajmM1R.js";import"./useControlledState-C-iuwE9o.js";import"./FocusScope-kRkt8xnH.js";import"./useFocusRing-DApHxXgU.js";import"./context-Dx2UXtP2.js";import"./useFormReset-Cc2EXXxK.js";import"./usePress-CefnHgfW.js";import"./useFocusable-x8wHKSzm.js";import"./VisuallyHidden-C9d_MZuH.js";import"./IconApp-Bd3S2boz.js";import"./remote-BreErbqH.js";import"./IconCheck-B-pbHyJO.js";import"./IconCheck-DJGWCBoR.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-B-FlnnN8.js";import"./IconDanger-Aj7LdC1h.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,Q={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const X=["Default","ReadOnly","CustomContainerBreakpoint","WithFieldError","DisabledSegments"];export{m as CustomContainerBreakpoint,o as Default,s as DisabledSegments,a as ReadOnly,i as WithFieldError,X as __namedExportsOrder,Q as default};
