import{j as e}from"./iframe-DSXKf9Qs.js";import{S as t,a as r}from"./Segment-CSQnq1Ny.js";import{L as l}from"./Label-BZGX3mYQ.js";import{F as d}from"./FieldError-DyLpPvQc.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-aTnVZ28_.js";import"./index-_ST8Xdbb.js";import"./clsx-B-dksMZM.js";import"./index-xIXPquhv.js";import"./useFieldComponent-CCab4n06.js";import"./utils-BkNrSrSW.js";import"./useMakeFocusable-BAbudFdS.js";import"./RadioGroup-BL4YSt8K.js";import"./FieldError-D2u-4343.js";import"./Text-BGc7dsTw.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CmWGeahq.js";import"./useLabel-D2CXizlL.js";import"./Label-Dnlar29r.js";import"./Hidden-Bsr5uGtI.js";import"./SelectionIndicator-BtJjQV2B.js";import"./useFormValidation-CZFMPKAm.js";import"./useFocus-BkCMpCSs.js";import"./useFocusRing-9tutEJo4.js";import"./useControlledState-C8VBbj0I.js";import"./FocusScope-C1tZWIaN.js";import"./context-DU2DYbHB.js";import"./useFormReset-CY4Zdzy9.js";import"./usePress-D3-3tpV2.js";import"./useFocusable-BiabYp81.js";import"./VisuallyHidden-p8Ypb2KO.js";import"./IconWarning-CsaNdeaY.js";import"./remote-Gy-Ku51P.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-DnMeMDV0.js";import"./AlertText-ppaXibkF.js";import"./AlertIcon-Bx5_fWVD.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
