import{j as e}from"./iframe-BE2KIrNP.js";import{S as t,a as r}from"./Segment-CoiD4yqm.js";import{L as l}from"./Label-BBYAWH-Z.js";import{F as d}from"./FieldError-DLWZre89.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-DqHsBCp0.js";import"./index-C9kIH1f3.js";import"./clsx-B-dksMZM.js";import"./index-BeVui2PP.js";import"./useFieldComponent-8fOA-m-u.js";import"./utils-CetDBScY.js";import"./useMakeFocusable-C9mVrmgt.js";import"./RadioGroup-Bb3uEHL1.js";import"./FieldError-CYuYbE_Y.js";import"./Text-D-kvbByn.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-7VWdSJkH.js";import"./useLabel-DlCzrbVx.js";import"./Label-BTkJrjJz.js";import"./Hidden-DdzvMSsl.js";import"./SelectionIndicator-B0iQvxUu.js";import"./useFormValidation-BVWNV9RZ.js";import"./useFocus-D19rPtJ7.js";import"./useFocusRing-CXSA7vN6.js";import"./useControlledState-O9ITVI5k.js";import"./FocusScope-BDfy_Mz6.js";import"./context-Cl9Jg8XT.js";import"./useFormReset-DGFO0EL0.js";import"./usePress-wlnUrUkL.js";import"./useFocusable-PS7GdwKW.js";import"./VisuallyHidden-KypC6JrD.js";import"./IconWarning-pheKtU5F.js";import"./remote-BDPI1xTN.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Djj1Dsk8.js";import"./AlertText-34tBbtSq.js";import"./AlertIcon-BSS6Y7Aa.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
