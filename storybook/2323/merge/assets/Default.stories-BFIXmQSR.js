import{j as e}from"./iframe-Bq_dTdDz.js";import{S as t,a as r}from"./Segment-CJb_RGwH.js";import{L as l}from"./Label-DlbZYBs5.js";import{F as d}from"./FieldError-ClLnELEE.js";import"./preload-helper-PPVm8Dsz.js";import"./flowComponent-BeJ1jrGf.js";import"./index-Dif5dzDL.js";import"./clsx-B-dksMZM.js";import"./index-C2qM6Ecb.js";import"./useFieldComponent-C92nVZms.js";import"./utils-Dc83Zc3S.js";import"./useMakeFocusable-BdLOadfH.js";import"./RadioGroup-87QnrdZD.js";import"./FieldError-CB3_Y2qo.js";import"./Text-RESw6iu2.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Bm3_NoD-.js";import"./useLabel-BL_xrhrx.js";import"./Label-CPBWbyCv.js";import"./Hidden-CYUCWFXf.js";import"./SelectionIndicator-B0He5XEj.js";import"./useFormValidation-ofgJ0bTW.js";import"./useFocus-zY2zj5L9.js";import"./useFocusRing-C2_YEmjA.js";import"./useControlledState-DvV_L9jP.js";import"./FocusScope-jjJ71B2a.js";import"./context-DasT5rkr.js";import"./useFormReset-BNYkLVEo.js";import"./usePress-CxmEVb--.js";import"./useFocusable-B7WP4__g.js";import"./VisuallyHidden-6gUpRQYP.js";import"./IconWarning-AvRveFf8.js";import"./remote-BGgAcFUF.js";import"./Label.module-CUYTf9Jc.js";import"./useLocalizedStringFormatter-jkyob1yB.js";import"./AlertText-DLrJVcTW.js";import"./AlertIcon-DR4HtAzR.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,P={title:"Form Controls/SegmentedControl",component:t,args:{onChange:c("onChange")},parameters:{controls:{exclude:["onChange"]}},render:n=>e.jsxs(t,{...n,defaultValue:"admin",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})},o={},a={args:{isReadOnly:!0}},m={render:n=>e.jsxs(t,{...n,defaultValue:"admin",containerBreakpointSize:"xs",children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"})]}),parameters:{viewport:{defaultViewport:"mobile1"}}},i={render:n=>e.jsxs(t,{...n,isInvalid:!0,isRequired:!0,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"}),e.jsx(d,{children:"Select a role to continue"})]})},s={render:n=>e.jsxs(t,{...n,children:[e.jsx(l,{children:"Role"}),e.jsx(r,{value:"admin",children:"Admin"}),e.jsx(r,{value:"member",isDisabled:!0,children:"Member"}),e.jsx(r,{value:"accountant",children:"Accountant"})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
