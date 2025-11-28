import{j as r}from"./iframe-D_IiP5QF.js";import{N as t,v as c,g}from"./TimeField-D8SJmsIb.js";import{L as o}from"./Label-CdaBbVbz.js";import{C as x,a as b}from"./ContextualHelpTrigger-Dpf2pUop.js";import{B as h}from"./Button-DslN622a.js";import{T as F}from"./Text-DtkWnfcs.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-TH6V0sK9.js";import"./mergeRefs-Bp0aekJa.js";import"./index-BTEdBuyN.js";import"./clsx-B-dksMZM.js";import"./Accordion-BLud_gcY.js";import"./dynamic-0ssToOFv.js";import"./IconWarning-CeWNQ8u9.js";import"./Section-DN7xTxEc.js";import"./context-DdWIe0N6.js";import"./Button-wMdqoBKT.js";import"./utils-BUDUz3oT.js";import"./ProgressBar-D214GkFL.js";import"./Hidden-zZrG9yI5.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CzHIh5kC.js";import"./useFocusRing-DHnNsPBr.js";import"./useFocusable-dF9VeguM.js";import"./RSPContexts-rRqbWPHZ.js";import"./Collection-Dl2pWzkI.js";import"./CollectionBuilder-BsunlkxQ.js";import"./SelectionIndicator-BdD8HwUv.js";import"./Separator-DWlmTG_C.js";import"./browser-Xi37Uwf1.js";import"./useLocalizedStringFormatter-Bl7QXKV0.js";import"./useStatic-D7hf1hLx.js";import"./ActionGroup-BXHZPnYY.js";import"./Alert-CAMU0sJf.js";import"./AlertIcon-CiVM0veU.js";import"./AlertBadge-DIoWGYfv.js";import"./Align-Dt5Z_tfD.js";import"./Popover-LH5uR-Ai.js";import"./OverlayTrigger-B9GYFSa8.js";import"./TableFooterRow-BLUBBtbs.js";import"./SkeletonText-Dp6bSbtZ.js";import"./Avatar-fgBKjcwX.js";import"./AvatarStack-DD1RlKSP.js";import"./Badge-CKHtuWwK.js";import"./BigNumber-QFeyc9Z7.js";import"./Breadcrumb-DTcVTg7F.js";import"./Link-1CuEWTvW.js";import"./Heading-DD9mIgnZ.js";import"./Legend-EDbvCt-7.js";import"./FileCardList-C_PuopUU.js";import"./Image-BxIb2zH6.js";import"./Color-Daqpvuwq.js";import"./Content-C5HeRuSJ.js";import"./CounterBadge-DZiQt8Xn.js";import"./DonutChart-D6ZAMqYo.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CtlfmTig.js";import"./Header-DgvsXn7S.js";import"./Initials-O7Qdz8vn.js";import"./InlineCode-BQGvjfc4.js";import"./PopoverTrigger-_UX04Jxf.js";import"./LoadingSpinner-DAahn8uY.js";import"./Separator-DlDRANMe.js";import"./Message-Ii4ctpYX.js";import"./MessageSeparator-BTKC9hrY.js";import"./NavigationGroup-BpmkmOoX.js";import"./Notification-BI6q-vGx.js";import"./NotificationProvider-BANQjypq.js";import"./ProgressBar-pgqNFsRb.js";import"./Rating-cGBPgfkq.js";import"./Skeleton-Bw8asRqa.js";import"./EmulatedBoldText-D1D5MzAW.js";const{action:j}=__STORYBOOK_MODULE_ACTIONS__,vr={title:"Form Controls/NumberField",component:t,render:e=>r.jsx(t,{onChange:j("onChange"),...e,children:r.jsx(o,{children:"Age"})})},i={},a={args:{isDisabled:!0}},s={args:{isReadOnly:!0}},p={args:{isRequired:!0}},n={render:e=>r.jsxs(t,{...e,minValue:5,maxValue:10,children:[r.jsx(o,{children:"Age"}),r.jsx(c,{children:"Enter your age"})]})},m={render:e=>r.jsx(t,{...e,defaultValue:34,children:r.jsx(o,{children:"Age"})})},l={render:e=>r.jsxs(t,{...e,isInvalid:!0,isRequired:!0,children:[r.jsx(o,{children:"Age"}),r.jsx(g,{children:"Age is required"})]})},d={render:e=>r.jsx(t,{...e,formatOptions:{style:"unit",unit:"gigabyte"},defaultValue:12,children:r.jsx(o,{children:"Storage"})})},u={render:e=>r.jsx(t,{...e,minValue:5,maxValue:10,children:r.jsxs(o,{children:["Age",r.jsxs(x,{children:[r.jsx(h,{ariaSlot:null}),r.jsx(b,{children:r.jsx(F,{children:"Enter your age"})})]})]})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const Ir=["Default","Disabled","ReadOnly","Required","WithFieldDescription","WithDefaultValue","WithFieldError","WithUnit","WithContextualHelp"];export{i as Default,a as Disabled,s as ReadOnly,p as Required,u as WithContextualHelp,m as WithDefaultValue,n as WithFieldDescription,l as WithFieldError,d as WithUnit,Ir as __namedExportsOrder,vr as default};
