import{j as e}from"./iframe-B9oS1eAm.js";import{S as t,a as r}from"./Segment-CBb87qBi.js";import{L as l}from"./Label-IJFVFDuP.js";import{F as d}from"./FieldError-BkKW3wP7.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-B6AWm4S8.js";import"./index-HAVMN3jx.js";import"./clsx-B-dksMZM.js";import"./index-CYuWkd4j.js";import"./useFieldComponent-BBgwgWHq.js";import"./utils-CkbQ6lDO.js";import"./useMakeFocusable-BMS2gRtA.js";import"./RadioGroup-DBPTqVHY.js";import"./FieldError-Dfuql1HI.js";import"./Text-DSVxOKBO.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DFtxLsB8.js";import"./useLabel-CLQlKL9C.js";import"./Label-DH9184nb.js";import"./Hidden-BXVpGb-m.js";import"./SelectionIndicator-CiC6xaeC.js";import"./useFormValidation-pe71fieX.js";import"./useFocus-BUMqhqrN.js";import"./useFocusRing-CD4YKl48.js";import"./useControlledState-BhPlyXsf.js";import"./FocusScope-BifOUh1d.js";import"./context-CSGUwiAp.js";import"./useFormReset-CfNbS0Tm.js";import"./usePress-CvAqmGGe.js";import"./useFocusable-DLbArD3q.js";import"./VisuallyHidden-D5FMvG_d.js";import"./IconWarning-CbErselp.js";import"./remote-B89JZTQ6.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Bpp7Jkjf.js";import"./AlertText-D9s0hTSb.js";import"./AlertIcon-CyL6LR1b.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
