import{j as e}from"./iframe-RkNYvT67.js";import{y as t,v as r,w as d,F as u}from"./Modal-xVut-wtw.js";import{L as i}from"./Label-CSQY-O06.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-D525euPD.js";import"./flowComponent-t1J_uYA_.js";import"./index-BXAy4ZoD.js";import"./index-CYuD20gW.js";import"./context-QFyIn5AW.js";import"./Button-BaIk0AjS.js";import"./utils-Cw0V24oX.js";import"./ProgressBar-DatwHdcd.js";import"./Hidden-DglwBjTS.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DpnYhhMC.js";import"./useFocusRing-zSkRpitG.js";import"./useFocusable-Cc38Xz3k.js";import"./RSPContexts-iWdoYzW5.js";import"./Collection-Dn2VpDMj.js";import"./CollectionBuilder-G2QPbUNk.js";import"./SelectionIndicator-ygw8vgtw.js";import"./Separator-AC7DyvUW.js";import"./browser-O08qKn7T.js";import"./useLocalizedStringFormatter-CZYF-KE5.js";import"./useStatic-DSkca5nN.js";import"./FileCardList-BOij6tHP.js";import"./IconWarning-Bv_c0irh.js";import"./Avatar-D-Vh6qCe.js";import"./AlertIcon-Dfi2fKkE.js";import"./Image-Du0dM-WM.js";import"./Text-CGI13fZ7.js";import"./EmulatedBoldText-wSSRmDQ8.js";import"./Link-CcuThIFH.js";import"./Button-Cq2sGnot.js";import"./LoadingSpinner-C8ge1gn9.js";import"./ControlledNotification-Bv9UL5dV.js";import"./Flex-B3wiFoJ1.js";import"./Accordion-DmcKhtrA.js";import"./Section-C9URTgx-.js";import"./ActionGroup-U66WTNaW.js";import"./Alert-D3bKy03a.js";import"./AlertBadge-Bdr69yR6.js";import"./Align-fxln_Dgz.js";import"./AvatarStack-C0E2D8b6.js";import"./BigNumber-DNM4Asro.js";import"./Breadcrumb-BVRejx5y.js";import"./Heading-4A_9k7B7.js";import"./Legend-CfpByMiV.js";import"./Color-CF8_g_Rt.js";import"./TableFooterRow-DKyMLwZS.js";import"./SkeletonText-mgkPpEwS.js";import"./Content-CugomRfa.js";import"./CounterBadge-B73tBZKq.js";import"./DonutChart-Bi52zQsm.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-2cEex6ck.js";import"./Header-Daa8R0Vo.js";import"./Initials-BYiwEIK7.js";import"./InlineCode-vcmJPAHr.js";import"./LayoutCard-552oNMIB.js";import"./Separator-BzLOFugX.js";import"./MessageSeparator-CT9RS-8F.js";import"./NavigationGroup-bJXjtOzI.js";import"./Notification-DMDBZmDj.js";import"./NotificationProvider-Cdy3Vamk.js";import"./ProgressBar-YmHjvNRH.js";import"./Rating-B1PBw_H7.js";import"./Skeleton-DFoxDyNL.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Be={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},s={},a={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},p={render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},c={render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(d,{value:"read",children:"Read"}),e.jsx(d,{value:"write",children:"Write"})]})},m={render:o=>e.jsxs(t,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},l={render:o=>e.jsxs(t,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
