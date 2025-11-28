import{j as o}from"./iframe-D_IiP5QF.js";import{a as d,c as u,b as l,s as y}from"./lib-6PLnLl9J.js";import{M as h}from"./TimeField-D8SJmsIb.js";import{A}from"./ActionGroup-BXHZPnYY.js";import{B as p}from"./Button-DslN622a.js";import{H as f}from"./Heading-DD9mIgnZ.js";import{C as F}from"./Content-C5HeRuSJ.js";import{A as r}from"./Section-DN7xTxEc.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-TH6V0sK9.js";import"./mergeRefs-Bp0aekJa.js";import"./index-BTEdBuyN.js";import"./clsx-B-dksMZM.js";import"./Accordion-BLud_gcY.js";import"./dynamic-0ssToOFv.js";import"./IconWarning-CeWNQ8u9.js";import"./Alert-CAMU0sJf.js";import"./AlertIcon-CiVM0veU.js";import"./useLocalizedStringFormatter-Bl7QXKV0.js";import"./context-CzHIh5kC.js";import"./AlertBadge-DIoWGYfv.js";import"./Text-DtkWnfcs.js";import"./browser-Xi37Uwf1.js";import"./utils-BUDUz3oT.js";import"./EmulatedBoldText-D1D5MzAW.js";import"./Align-Dt5Z_tfD.js";import"./Popover-LH5uR-Ai.js";import"./context-DdWIe0N6.js";import"./Button-wMdqoBKT.js";import"./ProgressBar-D214GkFL.js";import"./Hidden-zZrG9yI5.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-DHnNsPBr.js";import"./useFocusable-dF9VeguM.js";import"./RSPContexts-rRqbWPHZ.js";import"./Collection-Dl2pWzkI.js";import"./CollectionBuilder-BsunlkxQ.js";import"./SelectionIndicator-BdD8HwUv.js";import"./Separator-DWlmTG_C.js";import"./useStatic-D7hf1hLx.js";import"./OverlayTrigger-B9GYFSa8.js";import"./TableFooterRow-BLUBBtbs.js";import"./SkeletonText-Dp6bSbtZ.js";import"./Avatar-fgBKjcwX.js";import"./AvatarStack-DD1RlKSP.js";import"./Badge-CKHtuWwK.js";import"./BigNumber-QFeyc9Z7.js";import"./Breadcrumb-DTcVTg7F.js";import"./Link-1CuEWTvW.js";import"./Legend-EDbvCt-7.js";import"./FileCardList-C_PuopUU.js";import"./Image-BxIb2zH6.js";import"./Color-Daqpvuwq.js";import"./Label-CdaBbVbz.js";import"./ContextualHelpTrigger-Dpf2pUop.js";import"./CounterBadge-DZiQt8Xn.js";import"./DonutChart-D6ZAMqYo.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CtlfmTig.js";import"./Header-DgvsXn7S.js";import"./Initials-O7Qdz8vn.js";import"./InlineCode-BQGvjfc4.js";import"./PopoverTrigger-_UX04Jxf.js";import"./LoadingSpinner-DAahn8uY.js";import"./Separator-DlDRANMe.js";import"./Message-Ii4ctpYX.js";import"./MessageSeparator-BTKC9hrY.js";import"./NavigationGroup-BpmkmOoX.js";import"./Notification-BI6q-vGx.js";import"./NotificationProvider-BANQjypq.js";import"./ProgressBar-pgqNFsRb.js";import"./Rating-cGBPgfkq.js";import"./Skeleton-Bw8asRqa.js";const qo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},i={args:{children:o.jsx(r,{action:y,children:l})}},c={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncFunction
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    showFeedback: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction,
    showFeedback: true
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Action action={syncFunction}>{button}</Action>
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    children: <Action action={asyncFunction}>{button}</Action>
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Action action={asyncLongFunction}>
      <Modal slot="actionConfirm">
        <Heading>Delete customer</Heading>
        <Content>Do you really want to delete the customer?</Content>
        <ActionGroup>
          <Button color="danger">Confirm</Button>
          <Button color="secondary" variant="soft">
            Abort
          </Button>
        </ActionGroup>
      </Modal>
      <Button color="secondary" variant="soft">
        Delete customer
      </Button>
    </Action>
}`,...m.parameters?.docs?.source}}};const zo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,i as Nested,c as NestedAsync,m as WithConfirmationModal,zo as __namedExportsOrder,qo as default};
