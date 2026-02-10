import{j as e}from"./iframe--WfF81Kk.js";import{S as t,a as r}from"./Segment-C7uYLM-O.js";import{L as l}from"./Label-BrCJfTYV.js";import{F as d}from"./FieldError-DwJ8vXTD.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-zBGCvlSH.js";import"./index-CYxiP9KI.js";import"./clsx-B-dksMZM.js";import"./index-C06vQZsJ.js";import"./useFieldComponent-DtaSYFu8.js";import"./utils-DjCd38Rb.js";import"./useMakeFocusable-7dl9S5H1.js";import"./RadioGroup-DGbUiTic.js";import"./FieldError-8xlfKJ8p.js";import"./Text-2H1diUJp.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-fKP9Mvs-.js";import"./useLabel-C-b3rJJe.js";import"./Label-B681fyVu.js";import"./Hidden-CjN9RU7M.js";import"./SelectionIndicator-BGWzSObI.js";import"./useFormValidation-CPuMB1ok.js";import"./useFocus-BstfIGzX.js";import"./useFocusRing-xiCVrDfg.js";import"./useControlledState-33z9BU53.js";import"./FocusScope-D57rWz_c.js";import"./context-BGH-DtkU.js";import"./useFormReset-B7XwhHp1.js";import"./usePress-CuA8A2Wl.js";import"./useFocusable-CYWdX1lX.js";import"./VisuallyHidden-BWpEL0hX.js";import"./IconWarning-BCj0akvL.js";import"./remote-BYVMC2eP.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-BAqqywtA.js";import"./AlertText-4irfy3TS.js";import"./AlertIcon-Bc0kQsAW.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
