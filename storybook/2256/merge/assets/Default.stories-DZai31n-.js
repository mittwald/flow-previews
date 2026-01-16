import{j as e}from"./iframe-DjKJp4LH.js";import{S as t,a as r}from"./Segment-DclqfBRx.js";import{L as l}from"./Label-CIoe3s2x.js";import{F as d}from"./FieldError-DkeOn6Iq.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-D6qVG3rB.js";import"./index-DwtlgCJu.js";import"./clsx-B-dksMZM.js";import"./index-PXjpOTa6.js";import"./useFieldComponent-7yFtRUym.js";import"./utils-DyC1AhIW.js";import"./useMakeFocusable-C4DGD0sX.js";import"./RadioGroup-DJ97fMub.js";import"./FieldError-CRskrSrV.js";import"./Text-DDR-J2dK.js";import"./filterDOMProps-i7L6S0l1.js";import"./Form-DzoAzIf2.js";import"./useLabel--MzsjFNv.js";import"./Label-7z6Dpe4l.js";import"./Hidden-Cj7p_Cun.js";import"./SelectionIndicator-B0FAwcHG.js";import"./useFormValidation-D-rCh5i6.js";import"./useFocus-DfQL19Qh.js";import"./useControlledState-B7AKSDvs.js";import"./FocusScope-5Nl-wNMA.js";import"./useFocusRing-BGVhnkul.js";import"./context-CaWPG6rd.js";import"./useFormReset-BtBZQ9D7.js";import"./usePress-Cba7eTZL.js";import"./useFocusable-Cypk5WsB.js";import"./VisuallyHidden-BM-dzb4f.js";import"./IconWarning-6PZXNPQv.js";import"./remote-X6dXUxim.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-Dnneor8b.js";import"./AlertText-B4kskhvn.js";import"./AlertIcon-DJ6AhYBh.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
