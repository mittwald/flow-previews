import{j as e}from"./iframe-BgKMnsqP.js";import{S as t,a as r}from"./Segment-DSYaPXYz.js";import{L as l}from"./Label-8eLvO5Vl.js";import{F as d}from"./FieldError-C-lZWEzn.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-K5lY2cwd.js";import"./index-BfRfH9Zo.js";import"./clsx-B-dksMZM.js";import"./index-Cjd0WNlk.js";import"./useFieldComponent-BrPuybAK.js";import"./utils-DF7rIzyn.js";import"./useMakeFocusable-DrNDEFBk.js";import"./RadioGroup-BrY6XBh1.js";import"./FieldError-DrPRBP1_.js";import"./Text-DxRa_Q_m.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BeISznmy.js";import"./useLabel-cKqQKm7D.js";import"./Label-DB6i0Far.js";import"./Hidden-DjEbUam7.js";import"./SelectionIndicator-Uu23SvC3.js";import"./useFormValidation-BuWufY-j.js";import"./useFocus-rZbUMOOr.js";import"./useFocusRing-Do_SyrKm.js";import"./useControlledState-CIyJs2jp.js";import"./FocusScope-CnP7IT5L.js";import"./context-bU_PoVUz.js";import"./useFormReset-BD4Q_TlS.js";import"./usePress-BRD_gMdl.js";import"./useFocusable-D4mYKpyk.js";import"./VisuallyHidden-CtgyRlvv.js";import"./IconWarning-LAZRyVR3.js";import"./remote-BqVO6mjn.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-lbar_Hun.js";import"./AlertText-bVfxlZAe.js";import"./AlertIcon-CcDG2G1r.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
