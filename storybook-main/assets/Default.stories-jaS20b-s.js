import{j as e}from"./iframe-DCk1dltx.js";import{S as t,a as r}from"./Segment-UyEr6X7g.js";import{L as l}from"./Label-CoyrnT1D.js";import{F as d}from"./FieldError-CH94tTsu.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-T1oQuQvq.js";import"./index-Cq8zlQrR.js";import"./clsx-B-dksMZM.js";import"./index-CPFdYWIc.js";import"./useFieldComponent-DRONwAvB.js";import"./utils-dLBbTpD9.js";import"./useMakeFocusable-2sTaiVrN.js";import"./RadioGroup-CUPYk5tY.js";import"./FieldError-BprKDa8q.js";import"./Text-PmoJdoY5.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DaC80i58.js";import"./useLabel-DUKklMlK.js";import"./Label-D8gqX69D.js";import"./Hidden-DtfyHh-u.js";import"./SelectionIndicator-kCh5PEOZ.js";import"./useFormValidation-BQhs4ME7.js";import"./useFocus-Dg1ABCcr.js";import"./useFocusRing-CTkZzC5s.js";import"./useControlledState-8RsR_43b.js";import"./FocusScope-5MRFtdj_.js";import"./context-Dv1e9MPf.js";import"./useFormReset-BYlFqKoc.js";import"./usePress-BwKHWgOu.js";import"./useFocusable-CjQRw48Z.js";import"./VisuallyHidden-DsX3-BDW.js";import"./IconWarning-Dty0OPVS.js";import"./remote-DvlevvD7.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-leVAnmF6.js";import"./AlertText-YVWNWcKU.js";import"./AlertIcon-fe496zUR.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
