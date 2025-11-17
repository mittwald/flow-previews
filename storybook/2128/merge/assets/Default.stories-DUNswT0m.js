import{j as e}from"./iframe-Dxj0SZQz.js";import{y as t,v as r,w as d,F as u}from"./Modal-CL3ryr0m.js";import{L as i}from"./Label-r7-X59g3.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-BgiT-tjm.js";import"./flowComponent-D6iV2DzL.js";import"./index-Bd2Xf5pv.js";import"./index-BWjFPLHz.js";import"./context-DANfXhqK.js";import"./Button-CXPXZjsM.js";import"./utils-Cfq8faXc.js";import"./ProgressBar-LRI5m-um.js";import"./Hidden-Bwn6RBKf.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-C6-P6koC.js";import"./useFocusRing-DoLOI9UU.js";import"./useFocusable-DJxE8QS3.js";import"./RSPContexts-jyJS88rd.js";import"./Collection-A8jgBcw1.js";import"./CollectionBuilder-DAFFcbNw.js";import"./SelectionIndicator-DpzNLy52.js";import"./Separator-CHuWT96t.js";import"./browser-KBC6jiXy.js";import"./useLocalizedStringFormatter-eZsG_k2F.js";import"./useStatic-CdzpEGHk.js";import"./FileCardList-B5oao-64.js";import"./IconWarning-S0UXp0fg.js";import"./Avatar-B1NU17Uz.js";import"./AlertIcon-EqhFZIQA.js";import"./Image-B3ODdtrF.js";import"./Text-nz3YKbDr.js";import"./EmulatedBoldText-CgLGHcPw.js";import"./Link-CcIfSoxL.js";import"./Button-BkQ_NRiX.js";import"./LoadingSpinner-D4zskspE.js";import"./ControlledNotification-BWZxS6H1.js";import"./LayoutCard-DAKag2G9.js";import"./Accordion-B1R47Hbp.js";import"./Section-CFUbkEZF.js";import"./getActionGroupSlot-Di5FkjTO.js";import"./ActionGroup-WjAvs-BH.js";import"./Alert-CfoEhuU6.js";import"./AlertBadge-kPhBxQgx.js";import"./Align-hyosXLBb.js";import"./AvatarStack-DUps09Fx.js";import"./BigNumber-BGAos7Ap.js";import"./Breadcrumb-Bzo_Amw-.js";import"./Heading-DOS_NISo.js";import"./Legend-BNkBSiUS.js";import"./Color-BdzDTaI9.js";import"./TableFooterRow-BLcT84fb.js";import"./SkeletonText-Co3L-D1u.js";import"./Content-BKdb7Kra.js";import"./CounterBadge-D-Xb7Rtk.js";import"./DonutChart-DY9mPS7U.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Bf_xICCO.js";import"./Header-C6iAqINA.js";import"./Initials-DyQkgoJm.js";import"./InlineCode-FKDFRHZK.js";import"./Separator-Du6kbLAk.js";import"./MessageSeparator-BKDDL8-8.js";import"./NavigationGroup-D_-Rv13i.js";import"./Notification-Chd6t4iX.js";import"./NotificationProvider-BaN4hfIP.js";import"./ProgressBar-CD9e9P4f.js";import"./Rating-CmxrZzsX.js";import"./Skeleton-CcbZpjVZ.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Be={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},s={},a={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},p={render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},c={render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(d,{value:"read",children:"Read"}),e.jsx(d,{value:"write",children:"Write"})]})},m={render:o=>e.jsxs(t,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},l={render:o=>e.jsxs(t,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
