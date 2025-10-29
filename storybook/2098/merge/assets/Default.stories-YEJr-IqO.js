import{j as e}from"./iframe-BQyHcTNh.js";import{S as t,a as r}from"./Segment-DNfu7cSQ.js";import{L as l}from"./Label-JK740Dk1.js";import{F as d}from"./FieldError-AQx_Co0q.js";import"./index-nuYtCEEu.js";import"./flowComponent-n43oODHt.js";import"./index-BkXVqc6U.js";import"./clsx-B-dksMZM.js";import"./index-D5h5WobT.js";import"./useFieldComponent-Cyrlnow6.js";import"./utils-CdCPWCHO.js";import"./Text-C9BF5CjQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./ClearPropsContext-CD4xLCoc.js";import"./useMakeFocusable-QwAUUrkX.js";import"./RadioGroup-BZjAm-ZF.js";import"./Form-CjlO_WmK.js";import"./useLabel-DeM_oEx1.js";import"./Label-D_Hg-3H4.js";import"./Hidden-c61kZDYL.js";import"./SelectionIndicator-BnroM9vv.js";import"./useFormValidation-Dr6xiKJA.js";import"./useFocus-COF7nP05.js";import"./useControlledState-TEYDAVm8.js";import"./FocusScope-DELlCJxb.js";import"./useFocusRing-gNgZcCH8.js";import"./context-BymCJUNL.js";import"./useFormReset-DB-Y7LtK.js";import"./usePress-qWGUTJsN.js";import"./useFocusable-DJd2VQkc.js";import"./VisuallyHidden-rd1eTAwo.js";import"./IconWarning-D8COeLpG.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter--7zmdW8B.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,G={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const H=["Default","ReadOnly","CustomContainerBreakpoint","WithFieldError","DisabledSegments"];export{m as CustomContainerBreakpoint,o as Default,s as DisabledSegments,a as ReadOnly,i as WithFieldError,H as __namedExportsOrder,G as default};
