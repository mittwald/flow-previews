import{j as r}from"./iframe-Bro-TRXt.js";import{N as t,x as c,F as g,C as x,c as b}from"./Modal-BAz5qoSA.js";import{L as o}from"./Label-pkq-FNbp.js";import{B as h}from"./Button-BNo0n626.js";import{T as F}from"./Text-B-OG_Rvj.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-DkblynAy.js";import"./flowComponent-CGhBjY7C.js";import"./index-BTAhO2ke.js";import"./index-Dv_aaVf5.js";import"./context-DwPS9Zpq.js";import"./Button-DWgdDAXN.js";import"./utils-D8amqiwx.js";import"./ProgressBar--uLuv8cx.js";import"./Hidden-B42NMqJG.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-oX2aAP76.js";import"./useFocusRing-D0VZgEB2.js";import"./useFocusable-CZGxuR_3.js";import"./RSPContexts-Wp0EcsrM.js";import"./Collection-CYc71k62.js";import"./CollectionBuilder-CI1hg_cw.js";import"./SelectionIndicator-D-s_o7Qk.js";import"./Separator-BuskP0K-.js";import"./browser-BxJL1VR2.js";import"./useLocalizedStringFormatter-7nMsqE9H.js";import"./useStatic-D7gqpLQ0.js";import"./FileCardList-BvhGAyCg.js";import"./IconWarning-ZXxnaCRz.js";import"./Avatar-CpIxO7l4.js";import"./AlertIcon-BdNXmUtu.js";import"./Image-Bz5j-oXf.js";import"./Link-B4JntqcC.js";import"./ControlledNotification-DXrTnOuI.js";import"./LoadingSpinner--4B2tKnD.js";import"./Flex-T77zVCqz.js";import"./Accordion-DhsRg8DT.js";import"./Section-CKMH18Z5.js";import"./ActionGroup-z-m9HiSR.js";import"./Alert-rw15k5_3.js";import"./AlertBadge-BSU1Y84l.js";import"./Align-CRqQdHdC.js";import"./AvatarStack-Hi6fzEFf.js";import"./BigNumber-CuSywnor.js";import"./Breadcrumb-B3OUi1q-.js";import"./Heading-Dja--NLn.js";import"./Legend-BF5dTZhq.js";import"./Color-BbW_7Fl-.js";import"./TableFooterRow-BWpGavXP.js";import"./SkeletonText-C_FVkMiy.js";import"./Content-DoFaAGQT.js";import"./CounterBadge-DnkcQuYH.js";import"./DonutChart-CGXbZnO6.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BMKLJb1J.js";import"./Header-BBPSlw9V.js";import"./Initials-DpnqvnKg.js";import"./InlineCode-Cs1b_Cap.js";import"./LayoutCard-DTXM4eOW.js";import"./Separator-CYXscYsC.js";import"./MessageSeparator-D0goDhVZ.js";import"./NavigationGroup-6he7-QRX.js";import"./Notification-C1IUJMls.js";import"./NotificationProvider-BO0E7EIH.js";import"./ProgressBar-Cn62z-v9.js";import"./Rating-DnR4ClCl.js";import"./Skeleton-NzyvVlYM.js";import"./EmulatedBoldText-CJ_mmdOc.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...p.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>Age</Label>
      <FieldDescription>Enter your age</FieldDescription>
    </NumberField>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} defaultValue={34}>
      <Label>Age</Label>
    </NumberField>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} isInvalid isRequired>
      <Label>Age</Label>
      <FieldError>Age is required</FieldError>
    </NumberField>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} formatOptions={{
    style: "unit",
    unit: "gigabyte"
  }} defaultValue={12}>
      <Label>Storage</Label>
    </NumberField>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: props => <NumberField {...props} minValue={5} maxValue={10}>
      <Label>
        Age
        <ContextualHelpTrigger>
          <Button ariaSlot={null} />
          <ContextualHelp>
            <Text>Enter your age</Text>
          </ContextualHelp>
        </ContextualHelpTrigger>
      </Label>
    </NumberField>
}`,...u.parameters?.docs?.source}}};const _r=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,p as Required,u as WithContextualHelp,m as WithDefaultValue,n as WithFieldDescription,l as WithFieldError,d as WithUnit,_r as __namedExportsOrder,Hr as default};
