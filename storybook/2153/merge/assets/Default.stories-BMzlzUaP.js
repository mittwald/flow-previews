import{j as e}from"./iframe-tNeMQtR9.js";import{y as t,v as r,w as d,F as u}from"./Modal-BTUku4xq.js";import{L as i}from"./Label-QQ-I3K-S.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-C77k3JSm.js";import"./flowComponent-Cm6q17-o.js";import"./index-KVcqOv8o.js";import"./index-CkwyjQRx.js";import"./context-Cey1J_Al.js";import"./Button-BinTn0sL.js";import"./utils-COmC6Eka.js";import"./ProgressBar-CqKQSfDd.js";import"./Hidden-Cg7taIb1.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CPiapOtt.js";import"./useFocusRing-CrzENmB0.js";import"./useFocusable-BOEQm_aX.js";import"./RSPContexts-DY330ZPC.js";import"./Collection-BtpQxErv.js";import"./CollectionBuilder-DjYSc1J7.js";import"./SelectionIndicator-CUsz2YTu.js";import"./Separator-DgMEcD2E.js";import"./browser-tvBxR0oJ.js";import"./useLocalizedStringFormatter-BvPPnk_e.js";import"./useStatic-D2eB1aGn.js";import"./FileCardList-BMiH65Ui.js";import"./IconWarning-CQOJDPfQ.js";import"./Avatar-DDlp-vfW.js";import"./AlertIcon-Bzk-eUz1.js";import"./Image-CCt_1c0z.js";import"./Text-C2VO0De_.js";import"./EmulatedBoldText-Cjn4wbX9.js";import"./Link-D-oNPjX9.js";import"./Button-evMO-5rj.js";import"./LoadingSpinner-CNWC6196.js";import"./ControlledNotification-BwqgxSUH.js";import"./Flex-rZ8v-_CO.js";import"./Accordion-B23Ox3j7.js";import"./Section-CWr8AAoQ.js";import"./ActionGroup-BG5GPQGU.js";import"./Alert-DZNlkX8e.js";import"./AlertBadge-D7TFwUaN.js";import"./Align-DCuTz2PT.js";import"./AvatarStack-8752QnfM.js";import"./BigNumber-CjI3llLI.js";import"./Breadcrumb-BQFrdOyt.js";import"./Heading-C8p-a7zJ.js";import"./Legend-DGYMeAYO.js";import"./Color-CkZmA5bq.js";import"./TableFooterRow-C3NFPVoX.js";import"./SkeletonText-VT80yi-y.js";import"./Content-CJ0-JcWV.js";import"./CounterBadge-DMa-J370.js";import"./DonutChart-LklFYUFk.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CXJ82N6E.js";import"./Header-6aMHBv44.js";import"./Initials-DngG0C9b.js";import"./InlineCode-DyN8wBPc.js";import"./LayoutCard-CuTcuwsm.js";import"./Separator-YVCX1fHW.js";import"./MessageSeparator-CgLaydGc.js";import"./NavigationGroup-BfN1VqG1.js";import"./Notification-jWU6KLhG.js";import"./NotificationProvider-C8ET-e-A.js";import"./ProgressBar-Bcq6KtH-.js";import"./Rating-kZ5WeiDB.js";import"./Skeleton-kxM3gt-s.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Be={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},s={},a={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},p={render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},c={render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(d,{value:"read",children:"Read"}),e.jsx(d,{value:"write",children:"Write"})]})},m={render:o=>e.jsxs(t,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},l={render:o=>e.jsxs(t,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
