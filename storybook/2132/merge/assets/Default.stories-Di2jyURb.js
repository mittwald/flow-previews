import{j as r}from"./iframe-56IBTyTv.js";import{w as t,s as e,t as d,g as u}from"./TimeField-DFBvkPXF.js";import{L as i}from"./Label-XId0FOSA.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-Bnm9-YIt.js";import"./mergeRefs-Cyrc671G.js";import"./index-CFQkVl6N.js";import"./clsx-B-dksMZM.js";import"./utils-By6OiP0m.js";import"./Accordion-zGlAAwDO.js";import"./dynamic-CXTlw0o3.js";import"./Button-CFrxsoAe.js";import"./IconWarning-DWxFADKK.js";import"./Text-D89DiGla.js";import"./browser-DgtGg3YC.js";import"./EmulatedBoldText-BnqixNdP.js";import"./LoadingSpinner-DIFU_u_Q.js";import"./Button-Bg0OEiur.js";import"./ProgressBar-BjWRzbkF.js";import"./Hidden-BYV7a_dx.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-C94D1Tcb.js";import"./useFocusRing-CwXi6gl-.js";import"./useFocusable-Ctb1BwR8.js";import"./useLocalizedStringFormatter-CJPwUZ4n.js";import"./Section-CWOxkqLh.js";import"./context-C8voyd_c.js";import"./RSPContexts-ONk7znnk.js";import"./Collection-BYrAemKx.js";import"./CollectionBuilder-Bc4oKRVn.js";import"./SelectionIndicator-DENIl1oK.js";import"./Separator-BgOKs_kR.js";import"./useStatic-BFaumh86.js";import"./ActionGroup-J5RwwMSR.js";import"./Alert-KjDlqK_2.js";import"./AlertIcon-DXhK-bl3.js";import"./AlertBadge-CSdPQEPk.js";import"./Align-BexLs-oj.js";import"./Popover-BfnMJAl3.js";import"./OverlayTrigger-BjNrDJjP.js";import"./TableFooterRow-CKg0W8E3.js";import"./SkeletonText-D5ouES9k.js";import"./Avatar-n5CHccvP.js";import"./AvatarStack-C2OuNUTw.js";import"./Badge-BorAN_Zo.js";import"./BigNumber-BK1aV7_F.js";import"./Breadcrumb-DCvkjqRg.js";import"./Link-gAUYFHTC.js";import"./Heading-C8An-zqi.js";import"./Legend-pkpzEGV_.js";import"./FileCardList-FudbpZWY.js";import"./Image-Clsgyrfz.js";import"./Color-BHlBrJNB.js";import"./Content-fBwvLB0a.js";import"./ContextualHelpTrigger-jAzey3OP.js";import"./CounterBadge-BLzRgZI1.js";import"./DonutChart-CblbZ-Gl.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DIclsztf.js";import"./Header-BsQFcaSy.js";import"./Initials-lP5x31RC.js";import"./InlineCode-Dotm0ZC8.js";import"./PopoverTrigger-CUNBmLil.js";import"./Separator-Cc_0uyhZ.js";import"./Message-BPeVl3z6.js";import"./MessageSeparator-B8eILiD5.js";import"./NavigationGroup-_2LkB9uU.js";import"./Notification-iD7WbJZd.js";import"./NotificationProvider-cB8fVvxQ.js";import"./ProgressBar-Dh_0DhV8.js";import"./Rating-CvVeafk5.js";import"./Skeleton-S1htOct_.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Pr={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>r.jsxs(t,{...o,children:[r.jsx(i,{children:"Permissions"}),r.jsx(e,{value:"read",children:"Read"}),r.jsx(e,{value:"write",children:"Write"})]})},s={},a={args:{isDisabled:!0}},p={args:{isReadOnly:!0}},n={render:o=>r.jsxs(t,{...o,children:[r.jsx(i,{children:"Permissions"}),r.jsx(e,{value:"read",isDisabled:!0,children:"Read"}),r.jsx(e,{value:"write",children:"Write"})]})},c={render:o=>r.jsxs(t,{...o,children:[r.jsx(i,{children:"Permissions"}),r.jsx(d,{value:"read",children:"Read"}),r.jsx(d,{value:"write",children:"Write"})]})},m={render:o=>r.jsxs(t,{...o,isInvalid:!0,isRequired:!0,children:[r.jsx(i,{children:"Permissions"}),r.jsx(e,{value:"read",children:"Read"}),r.jsx(e,{value:"write",children:"Write"}),r.jsx(u,{children:"Select at least one to continue"})]})},l={render:o=>r.jsxs(t,{l:[1,1,1],m:[1,1],...o,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <CheckboxGroup {...props}>
      <Label>Permissions</Label>
      <Checkbox value="read" isDisabled>
        Read
      </Checkbox>
      <Checkbox value="write">Write</Checkbox>
    </CheckboxGroup>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const fr=["Default","CheckboxGroupDisabled","ReadOnly","CheckboxDisabled","CheckboxButtons","WithFieldError","ColumnLayout"];export{c as CheckboxButtons,n as CheckboxDisabled,a as CheckboxGroupDisabled,l as ColumnLayout,s as Default,p as ReadOnly,m as WithFieldError,fr as __namedExportsOrder,Pr as default};
