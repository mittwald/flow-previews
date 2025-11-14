import{j as r}from"./iframe-C60aMdie.js";import{N as t,x as c,F as g,C as x,c as b}from"./Modal-BRLjWmcI.js";import{L as o}from"./Label-CzVOnNLd.js";import{B as h}from"./Button-jX--b59C.js";import{T as F}from"./Text-SUPQTMUT.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-CVq1BkmJ.js";import"./flowComponent-jCG2SJhp.js";import"./index-my9L9zM2.js";import"./index-CLR1PkMI.js";import"./context-DSrUG3BE.js";import"./Button-CvbHAn2i.js";import"./utils-BQFwVYY5.js";import"./ProgressBar-B_mDm1JC.js";import"./Hidden-BZIUhw-w.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CbOMBxRf.js";import"./useFocusRing-DC3IjPh5.js";import"./useFocusable-Dew49z7P.js";import"./RSPContexts-DTGtZjZs.js";import"./Collection-BnGKbvLc.js";import"./CollectionBuilder-CwoEUOyQ.js";import"./SelectionIndicator-DueQdBHH.js";import"./Separator-y5zzyFFC.js";import"./browser-CNA-G9XW.js";import"./useLocalizedStringFormatter-CwhdRj3j.js";import"./useStatic-vNm-dgAB.js";import"./FileCardList-CCCPEiGj.js";import"./IconWarning-B5fkZC-l.js";import"./Avatar-B7kisHtJ.js";import"./AlertIcon-C7zTMkoz.js";import"./Image-CXRwncHw.js";import"./Link-lNOdoot_.js";import"./ControlledNotification-DflLvVYg.js";import"./LoadingSpinner-EerxDvmb.js";import"./LayoutCard-BHGne7SD.js";import"./Accordion-CKOAUBtf.js";import"./Section-BTXSJ-5X.js";import"./getActionGroupSlot-CdLyQOZc.js";import"./ActionGroup-pA_bsRMT.js";import"./Alert-BJKw0QeS.js";import"./AlertBadge-CnHLq6IR.js";import"./Align-BpStHQnP.js";import"./AvatarStack-TfH6cSvv.js";import"./BigNumber-CCd4dY5q.js";import"./Breadcrumb-DsZIUq31.js";import"./Heading-DAaBZvd2.js";import"./Legend-C-QoQfEn.js";import"./Color-DYvyagNb.js";import"./TableFooterRow-Byf_2RJW.js";import"./SkeletonText-DqQ9EdbR.js";import"./Content-CEAhgMHe.js";import"./CounterBadge-BSi8dS51.js";import"./DonutChart-DE-zhDub.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BTGMNUbe.js";import"./Header-CACiotaV.js";import"./Initials-CCakY2tg.js";import"./InlineCode-Cct-b4qD.js";import"./Separator-BSnGWgyT.js";import"./MessageSeparator-BdlWKUzt.js";import"./NavigationGroup-Bvrr1zmO.js";import"./Notification-CjMVwQai.js";import"./NotificationProvider-xKOj-JZj.js";import"./ProgressBar-BQfUYYSR.js";import"./Rating-CqYV9FLO.js";import"./Skeleton-CYpMvI04.js";import"./EmulatedBoldText-gDNBGAzw.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,Hr={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
