import{j as e}from"./iframe-DGpdmZy6.js";import{y as t,v as r,w as d,F as u}from"./Modal-k3eojm_4.js";import{L as i}from"./Label-PpyRVBZT.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-DNRDSutR.js";import"./flowComponent-BQEf5M_T.js";import"./index-De-tUa4b.js";import"./index-CrYgLF30.js";import"./context-BFV2yP4B.js";import"./Button-CcaaVk2n.js";import"./utils-CfRYmgOV.js";import"./ProgressBar-BRkbw9Mx.js";import"./Hidden-DBVn3F7o.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-GZA4a4Iz.js";import"./useFocusRing-B3OG5RkS.js";import"./useFocusable-CIlqLEIw.js";import"./RSPContexts-C3hd5u3G.js";import"./Collection-vhKnWwMf.js";import"./CollectionBuilder-B9NCAwqd.js";import"./SelectionIndicator-xePv5RSf.js";import"./Separator-F2jO3kT9.js";import"./browser-B8HytOQQ.js";import"./useLocalizedStringFormatter-Zkj79Hgs.js";import"./useStatic-BZw01sJd.js";import"./FileCardList-CKzDrmKJ.js";import"./IconWarning-D9ML-GA0.js";import"./Avatar-DVvgb2Xm.js";import"./AlertIcon-Bwvtphoy.js";import"./Image-Cn_QWKsO.js";import"./Text-BXzwFxO1.js";import"./EmulatedBoldText-CnA6n1pz.js";import"./Link-CguFfPfy.js";import"./Button--Vm3DJA2.js";import"./LoadingSpinner-D-s3tm4d.js";import"./ControlledNotification-rPJOiTKo.js";import"./Flex-FXUr_mGC.js";import"./Accordion-CLpjyq9Z.js";import"./Section-OXIXjQEc.js";import"./ActionGroup-BO_R-HXV.js";import"./Alert-DXCJPXtD.js";import"./AlertBadge-BuTdg19f.js";import"./Align-6bfVl_L9.js";import"./AvatarStack-B9hL9-8U.js";import"./BigNumber-BDnXKUew.js";import"./Breadcrumb-DERgwsy8.js";import"./Heading-D9ExrM7H.js";import"./Legend-C45L9tw3.js";import"./Color-CLgKnwGx.js";import"./TableFooterRow-D497U3pl.js";import"./SkeletonText-Ct2YzDKK.js";import"./Content-DYEeGbNd.js";import"./CounterBadge-DkSRGtKd.js";import"./DonutChart-DANJLMjV.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BJrTxMO1.js";import"./Header-D_phYTs8.js";import"./Initials-IbErwSCF.js";import"./InlineCode-DttkcdFo.js";import"./LayoutCard-BmKEOMGc.js";import"./Separator-F4fQOqnh.js";import"./MessageSeparator-ZxZNVJUN.js";import"./NavigationGroup-Ci_EZV7N.js";import"./Notification-m02SjDLR.js";import"./NotificationProvider-C2jvC1ES.js";import"./ProgressBar-CeifPY35.js";import"./Rating-DvaCapzL.js";import"./Skeleton-CQJ_ScCC.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Be={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},s={},a={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},p={render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},c={render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(d,{value:"read",children:"Read"}),e.jsx(d,{value:"write",children:"Write"})]})},m={render:o=>e.jsxs(t,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},l={render:o=>e.jsxs(t,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <Checkbox value="read" isDisabled>
        Read
      </Checkbox>
      <Checkbox value="write">Write</Checkbox>
    </CheckboxGroup>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <CheckboxButton value="read">Read</CheckboxButton>
      <CheckboxButton value="write">Write</CheckboxButton>
    </CheckboxGroup>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props} isInvalid isRequired>
      <Label>Permissions</Label>
      <Checkbox value="read">Read</Checkbox>
      <Checkbox value="write">Write</Checkbox>
      <FieldError>Select at least one to continue</FieldError>
    </CheckboxGroup>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
      <Label>Options</Label>
      <Checkbox value="1">Option 1</Checkbox>
      <Checkbox value="2">Option 2</Checkbox>
      <Checkbox value="3">Option 3</Checkbox>
      <Checkbox value="4">Option 4</Checkbox>
      <Checkbox value="5">Option 5</Checkbox>
      <Checkbox value="6">Option 6</Checkbox>
    </CheckboxGroup>
}`,...l.parameters?.docs?.source}}};const Ee=["Default","CheckboxGroupDisabled","ReadOnly","CheckboxDisabled","CheckboxButtons","WithFieldError","ColumnLayout"];export{c as CheckboxButtons,p as CheckboxDisabled,a as CheckboxGroupDisabled,l as ColumnLayout,s as Default,n as ReadOnly,m as WithFieldError,Ee as __namedExportsOrder,Be as default};
