import{j as e}from"./iframe-BK9Ry9wr.js";import{S as t,a as r}from"./Segment-BbsNdB3C.js";import{L as l}from"./Label-MHPgjcAC.js";import{F as d}from"./FieldError-Dlnwp2IY.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DHXq45QP.js";import"./index-DN2_BW85.js";import"./clsx-B-dksMZM.js";import"./index-DqsXJ4xp.js";import"./useFieldComponent-DnU67IFr.js";import"./utils-DO-BnPGQ.js";import"./useMakeFocusable-Bt_xvJUh.js";import"./RadioGroup-B7H09JaK.js";import"./FieldError-jtZpQJaz.js";import"./Text-Cq5Rc76r.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DgYJKMgS.js";import"./useLabel-MQsZvy4I.js";import"./Label-BzCkyqHu.js";import"./Hidden-PKJk_aj-.js";import"./SelectionIndicator-D3Pxw9N-.js";import"./useFormValidation-4onogkfY.js";import"./useFocus-C5fN754a.js";import"./useControlledState-D5gBJyZQ.js";import"./FocusScope-Lcnwzjdv.js";import"./useFocusRing-Dknf048Z.js";import"./context-DsIoSqto.js";import"./useFormReset-CaS7VrAz.js";import"./usePress-DlcvFeQS.js";import"./useFocusable-CjhkSx1Q.js";import"./VisuallyHidden-D79PysQv.js";import"./IconWarning-ClqYagFF.js";import"./remote-BKPS1KcS.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C7EPZ_KA.js";import"./AlertText-Q3UmWydJ.js";import"./AlertIcon-CZTB9fHB.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
