import{j as e}from"./iframe-a9513Vq6.js";import{S as t,a as r}from"./Segment-DgG0zrLW.js";import{L as l}from"./Label-BZ3qOvYQ.js";import{F as d}from"./FieldError-WoUSVR_n.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-ClX3KjCn.js";import"./index-BqXFMVtG.js";import"./clsx-B-dksMZM.js";import"./index-CgKgRbSB.js";import"./useFieldComponent-DoOT3wm0.js";import"./utils-Q60aVnZq.js";import"./useMakeFocusable-DlfEKBd5.js";import"./RadioGroup-B1nSlIak.js";import"./FieldError-C3zvz5gI.js";import"./Text-KDVUHE9w.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DpSLYLL6.js";import"./useLabel-nB2pk6qM.js";import"./Label-THT_xKrE.js";import"./Hidden-CBXUgXzH.js";import"./SelectionIndicator-ZvhngIUd.js";import"./useFormValidation-vP3SVKb2.js";import"./useFocus-CH_x6C_j.js";import"./useControlledState-CemUvUps.js";import"./FocusScope-BnHRmLRH.js";import"./useFocusRing-CmMhl12v.js";import"./context-CGjHIvvu.js";import"./useFormReset-CYu_Lr-z.js";import"./usePress-CyOdCqvu.js";import"./useFocusable-lL6lq36R.js";import"./VisuallyHidden-C2yGzMiQ.js";import"./IconWarning-BPr7HnMX.js";import"./remote-CGHUze9I.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-CqunH7JG.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,H={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const J=["Default","ReadOnly","CustomContainerBreakpoint","WithFieldError","DisabledSegments"];export{m as CustomContainerBreakpoint,o as Default,s as DisabledSegments,a as ReadOnly,i as WithFieldError,J as __namedExportsOrder,H as default};
