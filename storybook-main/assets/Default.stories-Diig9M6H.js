import{j as e}from"./iframe-DQCyQvTg.js";import{S as t,a as r}from"./Segment-D0umX8nq.js";import{L as l}from"./Label-Bpn5fam4.js";import{F as d}from"./FieldError-Db3KB_ND.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DZtWzeOa.js";import"./index-D_Y20Bq5.js";import"./clsx-B-dksMZM.js";import"./index-vqo-_XTj.js";import"./useFieldComponent-BQB8jFXR.js";import"./utils-B-47qEzM.js";import"./useMakeFocusable-bqVs19OG.js";import"./RadioGroup-Ciy9xEq3.js";import"./FieldError-BsUvM9FZ.js";import"./Text-dCr4PfuU.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Ca14id66.js";import"./useLabel-CgNKGrTG.js";import"./Label-CVwZ8mvh.js";import"./Hidden-B1onkdes.js";import"./SelectionIndicator-BqvLdNe9.js";import"./useFormValidation-DWTcfSBl.js";import"./useFocus-MHK9Bgmz.js";import"./useFocusRing-H28TAT4s.js";import"./useControlledState-CSGe32xq.js";import"./FocusScope-DgjO-P_8.js";import"./context-BVR1xsiE.js";import"./useFormReset-3qpl4kR-.js";import"./usePress-BDNCZxcv.js";import"./useFocusable-Bi17AcBv.js";import"./VisuallyHidden-DTZCmZoD.js";import"./IconWarning-BsBEN2i7.js";import"./remote-DwYKdEj8.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DAmk2Bcz.js";import"./AlertText-D-ZVlg04.js";import"./AlertIcon-BB94ofCu.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
