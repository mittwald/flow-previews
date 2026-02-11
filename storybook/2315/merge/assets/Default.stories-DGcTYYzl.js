import{j as e}from"./iframe-DFKQ2QsC.js";import{S as t,a as r}from"./Segment-BnMdRIps.js";import{L as l}from"./Label-DluzxSj2.js";import{F as d}from"./FieldError-DdERfCze.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BmrvfVYW.js";import"./index-BqwthJp6.js";import"./clsx-B-dksMZM.js";import"./index-BLTW5Tcp.js";import"./useFieldComponent-R5E6D8Ic.js";import"./utils-BJXdD5he.js";import"./useMakeFocusable-C2WUydZC.js";import"./RadioGroup-DXfoxxvZ.js";import"./FieldError-Bmf3SAas.js";import"./Text-D27_pVCF.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-DKz1zkHn.js";import"./useLabel-CurstbwI.js";import"./Label-ClB4vZMJ.js";import"./Hidden-RLwivX-P.js";import"./SelectionIndicator-BFMZIIpU.js";import"./useFormValidation-BX6OQ_jJ.js";import"./useFocus-BuPH9-PX.js";import"./useFocusRing-Dltr6KPm.js";import"./useControlledState-DUrZ8j4h.js";import"./FocusScope-B8-7lMpW.js";import"./context-m8OE0ddO.js";import"./useFormReset-DwR8gwPw.js";import"./usePress-CE-sEEB4.js";import"./useFocusable-C6PlbLtm.js";import"./VisuallyHidden-CKDTSDk1.js";import"./IconWarning-BuA9AHid.js";import"./remote-BP8uJVcU.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Dbflc2pw.js";import"./AlertText-BC9iPezU.js";import"./AlertIcon-D5_dS1m5.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
