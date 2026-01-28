import{j as e}from"./iframe-B-26223i.js";import{S as t,a as r}from"./Segment-DbjZe7Vi.js";import{L as l}from"./Label-htHf1MZ3.js";import{F as d}from"./FieldError-DKJxt2u7.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-Cm2ULMwR.js";import"./index-C96xSvbi.js";import"./clsx-B-dksMZM.js";import"./index-CMj-JRml.js";import"./useFieldComponent-eul3OsXk.js";import"./utils-CprJ_klo.js";import"./useMakeFocusable-_R8ioeyt.js";import"./RadioGroup-CFEsVfXT.js";import"./FieldError-B1RwUwkr.js";import"./Text-CrdzXlCc.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Vtk-UJSV.js";import"./useLabel-DUREvcwl.js";import"./Label-Ddb5Z1yf.js";import"./Hidden-BAuAU20u.js";import"./SelectionIndicator-DrGDjKtL.js";import"./useFormValidation-CodwuA9r.js";import"./useFocus-DYSsUR82.js";import"./useFocusRing-DATGHg9y.js";import"./useControlledState-CCY4nzRh.js";import"./FocusScope-BG92zKg5.js";import"./context-B9n95xcZ.js";import"./useFormReset-BQreYCpE.js";import"./usePress-BlwAXRn7.js";import"./useFocusable-CRgLtiVg.js";import"./VisuallyHidden-DpBOnOEH.js";import"./IconWarning-CfZm6euj.js";import"./remote-CUr3PG4h.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CHKosLk9.js";import"./AlertText-SDytihrL.js";import"./AlertIcon-Bi7YC7dH.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
