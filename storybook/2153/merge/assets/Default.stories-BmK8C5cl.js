import{j as e}from"./iframe-Bdha8Dos.js";import{y as t,v as r,w as d,F as u}from"./Modal-Aj_CgExV.js";import{L as i}from"./Label-Dn2sUami.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-DRPW6Rpg.js";import"./flowComponent-B8Uju4HR.js";import"./index-D82oAODb.js";import"./index-Dy-GF6N8.js";import"./context-5Dj5ASGX.js";import"./Button-BzZ_Ef_b.js";import"./utils-DRkQtTgN.js";import"./ProgressBar-DPQU74BD.js";import"./Hidden-CgXpbbtr.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-3OjubdPM.js";import"./useFocusRing-CBKtE_2O.js";import"./useFocusable-CPRTwPrN.js";import"./RSPContexts-CAeHzh3l.js";import"./Collection-DhVbXxy4.js";import"./CollectionBuilder-CI6cKXkO.js";import"./SelectionIndicator-zKM_RP2Q.js";import"./Separator-C0h06tUt.js";import"./browser-Dc0PT9zF.js";import"./useLocalizedStringFormatter-Bnw0-aa9.js";import"./useStatic-BN3Mf5gg.js";import"./FileCardList-DCzdLjIe.js";import"./IconWarning-BYkVHlH3.js";import"./Avatar-DCpppZC2.js";import"./AlertIcon-D8P-W6sm.js";import"./Image-DP0ZI2sD.js";import"./Text-DoSb3lbH.js";import"./EmulatedBoldText-CrNw8-Fv.js";import"./Link-Bw8zZtLF.js";import"./Button-C0-Fr6HH.js";import"./LoadingSpinner-KHyfkLfb.js";import"./ControlledNotification-CjmaONZw.js";import"./Flex-h-xfZw1g.js";import"./Accordion-DFcwElaU.js";import"./Section-Yfvm1zIN.js";import"./ActionGroup-BdiJCCv8.js";import"./Alert-Dx0A4bZf.js";import"./AlertBadge-plElskYS.js";import"./Align-CNxnU-VK.js";import"./AvatarStack-2m33Ddtx.js";import"./BigNumber-pV4cwxuQ.js";import"./Breadcrumb-Mg3slNRi.js";import"./Heading-D7df73UY.js";import"./Legend-CLh9Cweu.js";import"./Color-BvgoEP4D.js";import"./TableFooterRow-Dn4D5lV4.js";import"./SkeletonText-C3SnEUx2.js";import"./Content-Dv2IYPHI.js";import"./CounterBadge-ClteCI38.js";import"./DonutChart-LJEadiGp.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Cnrnw12O.js";import"./Header-CK0wvNYk.js";import"./Initials-hmCcaCSn.js";import"./InlineCode-nRx3MSIv.js";import"./LayoutCard-CsMFtYY4.js";import"./Separator-Cv4HYQX1.js";import"./MessageSeparator-M20ehGxL.js";import"./NavigationGroup-CKxBhPrE.js";import"./Notification-D7qFMSh0.js";import"./NotificationProvider-Bfyf-xJg.js";import"./ProgressBar-DXWjfO91.js";import"./Rating-DAeIfaa9.js";import"./Skeleton-DvR-lN_z.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Be={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},s={},a={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},p={render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},c={render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(d,{value:"read",children:"Read"}),e.jsx(d,{value:"write",children:"Write"})]})},m={render:o=>e.jsxs(t,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},l={render:o=>e.jsxs(t,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
