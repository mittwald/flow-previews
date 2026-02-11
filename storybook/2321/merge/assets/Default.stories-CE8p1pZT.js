import{j as e}from"./iframe-BfVXcSwu.js";import{S as t,a as r}from"./Segment-C58jSkmb.js";import{L as l}from"./Label-Bd8l-oGM.js";import{F as d}from"./FieldError-DHMqnFf9.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CjS79BQ2.js";import"./index-NVTM04Bh.js";import"./clsx-B-dksMZM.js";import"./index-CeMFBQ52.js";import"./useFieldComponent-CiLN9FTD.js";import"./utils-fXq1spu5.js";import"./useMakeFocusable-BvXkep4g.js";import"./RadioGroup-CDn9UQX_.js";import"./FieldError-DwfvyaXU.js";import"./Text-DLMHe2l_.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BvL7gPGk.js";import"./useLabel-_iuRLI1y.js";import"./Label-CAf_YUDZ.js";import"./Hidden-B9jAGDqb.js";import"./SelectionIndicator-DdESkGsw.js";import"./useFormValidation-BRgTVkeU.js";import"./useFocus-YiRiyJqJ.js";import"./useFocusRing-2MdBuBce.js";import"./useControlledState-DrmC-rK0.js";import"./FocusScope-DYj4AULV.js";import"./context-BIORzbvt.js";import"./useFormReset-bqmCiwf6.js";import"./usePress-CZJvw_K-.js";import"./useFocusable-Ct-dNppG.js";import"./VisuallyHidden-CW_0epyS.js";import"./IconWarning-DP3Jd3bc.js";import"./remote-cx7SRDrO.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-B7z2a2Dc.js";import"./AlertText-DCHQhIzQ.js";import"./AlertIcon-DMbcP_TF.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
