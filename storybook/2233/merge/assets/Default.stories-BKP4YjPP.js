import{j as e}from"./iframe-BMquwUxp.js";import{S as t,a as r}from"./Segment-4VkgAWBE.js";import{L as l}from"./Label-RP2jfdXb.js";import{F as d}from"./FieldError-DmIKwRtH.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DgzAUF5h.js";import"./index-BYK8miAY.js";import"./clsx-B-dksMZM.js";import"./index-cAMRUrux.js";import"./useFieldComponent-7OMeXUSU.js";import"./utils-C54becjs.js";import"./useMakeFocusable-C532WCsY.js";import"./RadioGroup-RKa8waun.js";import"./FieldError-D0s5eFn1.js";import"./Text-CPXkgTZA.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-i5hQHr5E.js";import"./useLabel-BNLCM250.js";import"./Label-BA-uOG5q.js";import"./Hidden-DXpev5BT.js";import"./SelectionIndicator-BIlCebKJ.js";import"./useFormValidation-BU69543b.js";import"./useFocus-DaRXVXg_.js";import"./useControlledState-C-7-yrsk.js";import"./FocusScope-BR9ShKUP.js";import"./useFocusRing-CjhJ1DIN.js";import"./context-BcuHL9mG.js";import"./useFormReset-DGUxmLDL.js";import"./usePress-B-RZvczw.js";import"./useFocusable-DNP9d3st.js";import"./VisuallyHidden-D31Z6xaf.js";import"./IconWarning-wcTYZTVE.js";import"./remote-CiXlw4PI.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-C4X4wsGr.js";import"./InlineAlert-AYUYuGXv.js";import"./AlertIcon-COvVg6Bc.js";import"./Text-EG4UQ_l2.js";import"./browser-CBlt42Oy.js";import"./EmulatedBoldText-CntJSrfE.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,Z={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const $=["Default","ReadOnly","CustomContainerBreakpoint","WithFieldError","DisabledSegments"];export{m as CustomContainerBreakpoint,o as Default,s as DisabledSegments,a as ReadOnly,i as WithFieldError,$ as __namedExportsOrder,Z as default};
