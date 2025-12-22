import{j as e}from"./iframe-DITmTDde.js";import{S as t,a as r}from"./Segment-D5Jujjca.js";import{L as l}from"./Label-DcnJ5Vhi.js";import{F as d}from"./FieldError-CBw2sGOe.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BIGGpSqP.js";import"./index-m2QHiCbK.js";import"./clsx-B-dksMZM.js";import"./index-oEm39XqO.js";import"./useFieldComponent-CR_sI6nz.js";import"./utils-C40myb20.js";import"./useMakeFocusable-Be_RJHQJ.js";import"./RadioGroup-DpWQ3RdZ.js";import"./FieldError-B8qSKLtD.js";import"./Text-rw4H23NJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-C6LPNxyn.js";import"./useLabel-DZbkZQ01.js";import"./Label-DJaUceky.js";import"./Hidden-8YgQRG2G.js";import"./SelectionIndicator-711mCjj0.js";import"./useFormValidation-gmIFw0Kx.js";import"./useFocus-DrnrNdFb.js";import"./useControlledState-D6UlgZp0.js";import"./FocusScope-zqNAAOXF.js";import"./useFocusRing-DXc99t-B.js";import"./context-CEC4U_pc.js";import"./useFormReset-vbhoemIT.js";import"./usePress-Cwz_fpS2.js";import"./useFocusable-m8WXVW9y.js";import"./VisuallyHidden-CcOPNtcw.js";import"./IconWarning-FbTim4wC.js";import"./remote-BYAMMrVX.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-IPLp48A-.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
