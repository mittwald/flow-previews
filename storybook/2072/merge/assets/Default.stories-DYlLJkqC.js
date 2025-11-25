import{j as e}from"./iframe-Bro-TRXt.js";import{y as t,v as r,w as d,F as u}from"./Modal-BAz5qoSA.js";import{L as i}from"./Label-pkq-FNbp.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-DkblynAy.js";import"./flowComponent-CGhBjY7C.js";import"./index-BTAhO2ke.js";import"./index-Dv_aaVf5.js";import"./context-DwPS9Zpq.js";import"./Button-DWgdDAXN.js";import"./utils-D8amqiwx.js";import"./ProgressBar--uLuv8cx.js";import"./Hidden-B42NMqJG.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-oX2aAP76.js";import"./useFocusRing-D0VZgEB2.js";import"./useFocusable-CZGxuR_3.js";import"./RSPContexts-Wp0EcsrM.js";import"./Collection-CYc71k62.js";import"./CollectionBuilder-CI1hg_cw.js";import"./SelectionIndicator-D-s_o7Qk.js";import"./Separator-BuskP0K-.js";import"./browser-BxJL1VR2.js";import"./useLocalizedStringFormatter-7nMsqE9H.js";import"./useStatic-D7gqpLQ0.js";import"./FileCardList-BvhGAyCg.js";import"./IconWarning-ZXxnaCRz.js";import"./Avatar-CpIxO7l4.js";import"./AlertIcon-BdNXmUtu.js";import"./Image-Bz5j-oXf.js";import"./Text-B-OG_Rvj.js";import"./EmulatedBoldText-CJ_mmdOc.js";import"./Link-B4JntqcC.js";import"./Button-BNo0n626.js";import"./LoadingSpinner--4B2tKnD.js";import"./ControlledNotification-DXrTnOuI.js";import"./Flex-T77zVCqz.js";import"./Accordion-DhsRg8DT.js";import"./Section-CKMH18Z5.js";import"./ActionGroup-z-m9HiSR.js";import"./Alert-rw15k5_3.js";import"./AlertBadge-BSU1Y84l.js";import"./Align-CRqQdHdC.js";import"./AvatarStack-Hi6fzEFf.js";import"./BigNumber-CuSywnor.js";import"./Breadcrumb-B3OUi1q-.js";import"./Heading-Dja--NLn.js";import"./Legend-BF5dTZhq.js";import"./Color-BbW_7Fl-.js";import"./TableFooterRow-BWpGavXP.js";import"./SkeletonText-C_FVkMiy.js";import"./Content-DoFaAGQT.js";import"./CounterBadge-DnkcQuYH.js";import"./DonutChart-CGXbZnO6.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BMKLJb1J.js";import"./Header-BBPSlw9V.js";import"./Initials-DpnqvnKg.js";import"./InlineCode-Cs1b_Cap.js";import"./LayoutCard-DTXM4eOW.js";import"./Separator-CYXscYsC.js";import"./MessageSeparator-D0goDhVZ.js";import"./NavigationGroup-6he7-QRX.js";import"./Notification-C1IUJMls.js";import"./NotificationProvider-BO0E7EIH.js";import"./ProgressBar-Cn62z-v9.js";import"./Rating-DnR4ClCl.js";import"./Skeleton-NzyvVlYM.js";const{action:h}=__STORYBOOK_MODULE_ACTIONS__,Be={title:"Form Controls/CheckboxGroup",component:t,args:{onChange:h("onChange")},parameters:{controls:{exclude:["onChange"]}},render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},s={},a={args:{isDisabled:!0}},n={args:{isReadOnly:!0}},p={render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",isDisabled:!0,children:"Read"}),e.jsx(r,{value:"write",children:"Write"})]})},c={render:o=>e.jsxs(t,{...o,children:[e.jsx(i,{children:"Permissions"}),e.jsx(d,{value:"read",children:"Read"}),e.jsx(d,{value:"write",children:"Write"})]})},m={render:o=>e.jsxs(t,{...o,isInvalid:!0,isRequired:!0,children:[e.jsx(i,{children:"Permissions"}),e.jsx(r,{value:"read",children:"Read"}),e.jsx(r,{value:"write",children:"Write"}),e.jsx(u,{children:"Select at least one to continue"})]})},l={render:o=>e.jsxs(t,{l:[1,1,1],m:[1,1],...o,children:[e.jsx(i,{children:"Options"}),e.jsx(r,{value:"1",children:"Option 1"}),e.jsx(r,{value:"2",children:"Option 2"}),e.jsx(r,{value:"3",children:"Option 3"}),e.jsx(r,{value:"4",children:"Option 4"}),e.jsx(r,{value:"5",children:"Option 5"}),e.jsx(r,{value:"6",children:"Option 6"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
