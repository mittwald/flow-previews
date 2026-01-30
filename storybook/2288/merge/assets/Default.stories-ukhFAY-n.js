import{j as e}from"./iframe-l1bkuF5f.js";import{S as t,a as r}from"./Segment-CWfy6Wnl.js";import{L as l}from"./Label-DX1aPacI.js";import{F as d}from"./FieldError-mREW9pPY.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-CvyDVUQE.js";import"./index-BKxYFHxl.js";import"./clsx-B-dksMZM.js";import"./index-BcUcgGWs.js";import"./useFieldComponent-C26zWsIy.js";import"./utils-DCQYs-TM.js";import"./useMakeFocusable-B3NqPQRX.js";import"./RadioGroup-Cm8k3FiQ.js";import"./FieldError-DlCb0goX.js";import"./Text-CmGzUVny.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-C3oxrYxL.js";import"./useLabel-Dw5Dmo8O.js";import"./Label-tW_cqKCA.js";import"./Hidden-xK_5A_TS.js";import"./SelectionIndicator-8EnZgCgK.js";import"./useFormValidation-CUmRTDZB.js";import"./useFocus-jq5Lg4Og.js";import"./useFocusRing-DvEP7g7r.js";import"./useControlledState-BZaI1cg9.js";import"./FocusScope-CXOryEg0.js";import"./context-C-s-FPG6.js";import"./useFormReset-B-5bGtDV.js";import"./usePress-CEqZlFux.js";import"./useFocusable-D4tCxmX8.js";import"./VisuallyHidden-GyOwAGCf.js";import"./IconWarning-rcKmWr_e.js";import"./remote-DAiDHcEq.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-F2xrId0k.js";import"./AlertText-Ck8xqn1I.js";import"./AlertIcon-DudqDlux.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
