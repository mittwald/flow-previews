import{j as e}from"./iframe-CnD5cTjE.js";import{S as t,a as r}from"./Segment-Bu933YDL.js";import{L as l}from"./Label-BZkRYtAq.js";import{F as d}from"./FieldError-D8deZX0S.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-C-pFyTgk.js";import"./index-CFIaHCYn.js";import"./clsx-B-dksMZM.js";import"./index-DPBNH-jw.js";import"./useFieldComponent-D1uM9aif.js";import"./utils-BYl_EWK3.js";import"./useMakeFocusable-DGsR1R_2.js";import"./RadioGroup-CTjrWTRc.js";import"./FieldError-CkgMvR4A.js";import"./Text-Bz5hHxMj.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Bj2UuDao.js";import"./useLabel-BEvZESWX.js";import"./Label-DvWkQRgL.js";import"./Hidden-BqUWSjHb.js";import"./SelectionIndicator-T6p8Rrnn.js";import"./useFormValidation-0N4lg69R.js";import"./useFocus-BZF2vaC7.js";import"./useFocusRing-a13YBJgG.js";import"./useControlledState-C-7lgoXp.js";import"./FocusScope-q9RNJ1I3.js";import"./context-uSq5N7U7.js";import"./useFormReset-DzGHPNTd.js";import"./usePress-DgDG_638.js";import"./useFocusable-DUJmCsdq.js";import"./VisuallyHidden-D2K60xua.js";import"./IconWarning-K8fT7_bQ.js";import"./remote-CRObq-IF.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C15HmRxb.js";import"./AlertText-9D-RaPUt.js";import"./AlertIcon-DEFExzLk.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
