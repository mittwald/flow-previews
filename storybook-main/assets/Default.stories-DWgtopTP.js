import{j as e}from"./iframe-DzjGvN4s.js";import{S as t,a as r}from"./Segment-BWy2f9-4.js";import{L as l}from"./Label-B3AoafTb.js";import{F as d}from"./FieldError-wOx9kOaR.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CmnGOp_t.js";import"./index-bYngC-Dz.js";import"./clsx-B-dksMZM.js";import"./index-CvRHkpxf.js";import"./useFieldComponent-BsZ1NoTf.js";import"./utils-CaY6-C_T.js";import"./useMakeFocusable-zz1JSJ_e.js";import"./RadioGroup-BmeyXoHw.js";import"./FieldError-Cm2eS0Qx.js";import"./Text-CsTzsUsp.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C7-6k5t9.js";import"./useLabel-7qQt_FP7.js";import"./Label-CJv7rcJv.js";import"./Hidden-CvDiJOD9.js";import"./SelectionIndicator-BO4ZIlru.js";import"./useFormValidation-CCaCqHBd.js";import"./useFocus-DFbK7vZ5.js";import"./useFocusRing-wMvVuuCP.js";import"./useControlledState-DSekeTPZ.js";import"./FocusScope-D_QyZTFZ.js";import"./context-kL1uqGsw.js";import"./useFormReset-lQZuuaDU.js";import"./usePress-D3so-j8A.js";import"./useFocusable-CvI9gOnC.js";import"./VisuallyHidden-SzhNhvGP.js";import"./IconWarning-s7NSVc-U.js";import"./remote-cWDQ0h3n.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-exeLKOxN.js";import"./AlertText-cLdL_XpT.js";import"./AlertIcon-C0w0dGgz.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
