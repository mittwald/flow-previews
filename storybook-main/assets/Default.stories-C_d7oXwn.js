import{j as e}from"./iframe-BzN-GDSV.js";import{S as t,a as r}from"./Segment-B98YM8vN.js";import{L as l}from"./Label-aAQCtXm8.js";import{F as d}from"./FieldError-C55-OsIs.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-D-AbKxQ-.js";import"./index-B3p9ddxp.js";import"./clsx-B-dksMZM.js";import"./index-jqMu6fsr.js";import"./useFieldComponent-DWIvkE7m.js";import"./utils-DZiSZNRH.js";import"./useMakeFocusable-B1uOoKnt.js";import"./RadioGroup-DehbiROT.js";import"./FieldError-DErqUxVb.js";import"./Text-9Slz249r.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-BzSZff5w.js";import"./useLabel-D4-tvGJV.js";import"./Label-CAj1yFiM.js";import"./Hidden-D9QDiB2Q.js";import"./SelectionIndicator-Clnr_8iz.js";import"./useFormValidation-Bm80HquG.js";import"./useFocus-CD9nXzJ_.js";import"./useFocusRing-DeK7XLS9.js";import"./useControlledState-VicJRSad.js";import"./FocusScope-BMhRfsbp.js";import"./context-CV01TaOS.js";import"./useFormReset-C_nKv_ku.js";import"./usePress-CKBw2syN.js";import"./useFocusable-CZxxukff.js";import"./VisuallyHidden-DwmcGrU0.js";import"./IconWarning-Dq5gBH8b.js";import"./remote-DmyBa_Y3.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-yVJP6Ie4.js";import"./AlertText-_Zms_FAC.js";import"./AlertIcon-CN2JBdj6.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
