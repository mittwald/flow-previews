import{j as e}from"./iframe-QYf_yreC.js";import{y as t,v as r,w as d,F as u}from"./Modal-BZuSJnKZ.js";import{L as i}from"./Label-DkpOuIpZ.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-DxvJo010.js";import"./flowComponent-BlD0f313.js";import"./index-DrqlcLhB.js";import"./index-Dl4zJFgP.js";import"./context-BGZffbOF.js";import"./Button-BY7Kz_qM.js";import"./utils-9temXcui.js";import"./ProgressBar-BpNDlZ7L.js";import"./Hidden-D4BgLsni.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DoHwa-Uz.js";import"./useFocusRing-CKFComO5.js";import"./useFocusable-Bm9MC9Cg.js";import"./RSPContexts-CQ49TXVP.js";import"./Collection-DjuEe1dE.js";import"./CollectionBuilder-Ce2bTmZV.js";import"./SelectionIndicator-DHFL4Bc-.js";import"./Separator-DJyRay3v.js";import"./browser-BbcMJkiW.js";import"./useLocalizedStringFormatter-BSKtfzGO.js";import"./useStatic-CgWt-Vtk.js";import"./FileCardList-DTUmUWf5.js";import"./IconWarning-CJ0iL8xC.js";import"./Avatar-B_ln5OAs.js";import"./AlertIcon-DGipYwqO.js";import"./Image-CSQDDycD.js";import"./Text-DYo1hnMM.js";import"./EmulatedBoldText-BUtEOorO.js";import"./Link-VGOGyvf3.js";import"./Button-ClcJ4r4J.js";import"./LoadingSpinner-DyzLehc_.js";import"./ControlledNotification-CA1OLKqo.js";import"./Flex-FeaqVm2Q.js";import"./Accordion-QaDyvb9t.js";import"./Section-B2DHZKCC.js";import"./ActionGroup-CNS7lIAN.js";import"./Alert-bj_Y0zgx.js";import"./AlertBadge-ClDIorBf.js";import"./Align-B8IK4Kvb.js";import"./AvatarStack-S7hrW2Du.js";import"./BigNumber-Ct2H2kB1.js";import"./Breadcrumb-B5Ha9Tr5.js";import"./Heading-Ztp4MNID.js";import"./Legend-BN69fYiw.js";import"./Color-Bp6xg0fX.js";import"./TableFooterRow-DqL_vA4D.js";import"./SkeletonText-DntNO9xb.js";import"./Content-ysq6PY7h.js";import"./CounterBadge-CnGG8oCU.js";import"./DonutChart-Bw-cC5fd.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CrN3wwhj.js";import"./Header-NzTBG9RN.js";import"./Initials-D93mZZQg.js";import"./InlineCode-Y0cx0rl0.js";import"./LayoutCard-C6WMVQDl.js";import"./Separator-vqPdnx36.js";import"./MessageSeparator-C5w9jueb.js";import"./NavigationGroup-DrewGvf7.js";import"./Notification-Dfr21Mg6.js";import"./NotificationProvider-Cnm_GiLp.js";import"./ProgressBar-D7-_y3N0.js";import"./Rating-4NQ2FU04.js";import"./Skeleton-CnrauAdF.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Be={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},s={},a={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},p={render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},c={render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(d,{value:"read",children:"Read"}),e.jsx(d,{value:"write",children:"Write"})]})},m={render:o=>e.jsxs(t,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},l={render:o=>e.jsxs(t,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
