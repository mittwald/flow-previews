import{j as e}from"./iframe-Bc-jwLWq.js";import{S as t,a as r}from"./Segment-Dm_GN25z.js";import{L as l}from"./Label-p4o9WkV1.js";import{F as d}from"./FieldError-Cp2fPOrN.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DGcImTRM.js";import"./index-CElyulra.js";import"./clsx-B-dksMZM.js";import"./index-Ct8kadYq.js";import"./useFieldComponent-ahSSNXad.js";import"./utils-BIv87FRG.js";import"./useMakeFocusable-BU1ogbRk.js";import"./RadioGroup-DGZTT39M.js";import"./FieldError-CGIyNVOV.js";import"./Text-DgSTzWgU.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DqUF-Ufv.js";import"./useLabel-BfZDlGh7.js";import"./Label-B3yduWiM.js";import"./Hidden-BOhzI0oW.js";import"./SelectionIndicator-BwDlTF6c.js";import"./useFormValidation-DyPlpM72.js";import"./useFocus-C6ldElRQ.js";import"./useControlledState-IlB9I5Xo.js";import"./FocusScope-Bs4WKWZW.js";import"./useFocusRing-B0jLa-Vk.js";import"./context-BDmep644.js";import"./useFormReset-DFcj21LA.js";import"./usePress-NBjG5NMF.js";import"./useFocusable-DIXmUg59.js";import"./VisuallyHidden-CmlM99K4.js";import"./IconWarning-BPpigV-o.js";import"./remote-CficONz5.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C0QVYeul.js";import"./AlertText-COarWx13.js";import"./AlertIcon-DCb6GQr1.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
