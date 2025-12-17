import{j as e}from"./iframe-CxIv4jMu.js";import{S as t,a as r}from"./Segment-Do23CQ7p.js";import{L as l}from"./Label-B_OvHsx4.js";import{F as d}from"./FieldError-DD8s_Iuw.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-40FWo67L.js";import"./index-B5A5s8TF.js";import"./clsx-B-dksMZM.js";import"./index-4jtxG-aw.js";import"./useFieldComponent-gOqU5qjG.js";import"./utils-BWuSdLWz.js";import"./useMakeFocusable-Cl5TyGvP.js";import"./RadioGroup-B5rhjQeu.js";import"./FieldError-B56fKNUE.js";import"./Text-C4fvncMS.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-48q0jMI2.js";import"./useLabel-hxWbe3_X.js";import"./Label-V3_Oag-T.js";import"./Hidden-BIUsGAI2.js";import"./SelectionIndicator-BuBcSB3l.js";import"./useFormValidation-NfxZ5VuI.js";import"./useFocus-ng3bQXxT.js";import"./useControlledState-BE-Fn8Ja.js";import"./FocusScope-D8y0iQpb.js";import"./useFocusRing-DX51MXuJ.js";import"./context-XT4iJWgw.js";import"./useFormReset-BBuG3pIa.js";import"./usePress-CUBbufY7.js";import"./useFocusable-BUu5DuL9.js";import"./VisuallyHidden-UJJZphkq.js";import"./IconApp-DXeuriH2.js";import"./remote-BuINZUdg.js";import"./IconCheck-BpdJlhem.js";import"./IconCheck-BZoeQ1G_.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-B-qTbUOV.js";import"./IconDanger-WvpDQ4XT.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,Q={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const X=["Default","ReadOnly","CustomContainerBreakpoint","WithFieldError","DisabledSegments"];export{m as CustomContainerBreakpoint,o as Default,s as DisabledSegments,a as ReadOnly,i as WithFieldError,X as __namedExportsOrder,Q as default};
