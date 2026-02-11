import{j as e}from"./iframe-lFICOVMG.js";import{S as t,a as r}from"./Segment-CvKuAlkD.js";import{L as l}from"./Label-WsCexfXL.js";import{F as d}from"./FieldError-Ba2n5nZe.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-C618gI1l.js";import"./index-C8_VRp74.js";import"./clsx-B-dksMZM.js";import"./index-DUpWbeKv.js";import"./useFieldComponent-70N6l4jn.js";import"./utils-DhhSlmx9.js";import"./useMakeFocusable-crCL21XI.js";import"./RadioGroup-DTFiNMMn.js";import"./FieldError-DXs5idvC.js";import"./Text-CinvLCxd.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DIwrOEgx.js";import"./useLabel-A9ok_7_u.js";import"./Label-nxHLTLm-.js";import"./Hidden--bJJbaK3.js";import"./SelectionIndicator-CW-bKP1t.js";import"./useFormValidation-BdcfYetn.js";import"./useFocus-fqIQg8qR.js";import"./useFocusRing-DeOtkCiq.js";import"./useControlledState-BZJPMeD2.js";import"./FocusScope-CyJq-kGM.js";import"./context-Sy7BhgRt.js";import"./useFormReset-CPUmIViP.js";import"./usePress-BW_bFHXv.js";import"./useFocusable-ByJ0NNOg.js";import"./VisuallyHidden-BALX4uV5.js";import"./IconWarning-4K-DqIQK.js";import"./remote-CRPYY61Z.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-D7SPmL6j.js";import"./AlertText-D8XKoaWc.js";import"./AlertIcon-BTBT69bo.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
