import{j as o}from"./iframe-CVdzphmp.js";import{a as d,c as u,b as l,s as y}from"./lib-Bdh_VvfY.js";import{M as h}from"./Modal-dLKFywtU.js";import{A}from"./ActionGroup-CWQpjp5Z.js";import{B as p}from"./Button-Cy2rd34B.js";import{H as f}from"./Heading-DzvfYRfV.js";import{C as F}from"./Content-DxRrX9zb.js";import{A as r}from"./Section-DtrIGiG-.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-D15r1Yxg.js";import"./flowComponent-CzVecZL_.js";import"./index-DhI8Ssxe.js";import"./index-XbyfyjmF.js";import"./context-B-mwp0vS.js";import"./Button-CTZeRvkz.js";import"./utils-CFM6TLUG.js";import"./ProgressBar-1X1fHZT0.js";import"./Hidden-Dt0LCI07.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BRBaLiQc.js";import"./useFocusRing-BvvALaA3.js";import"./useFocusable-By55uwCe.js";import"./RSPContexts-DDuv6DrT.js";import"./Collection-D1raa_37.js";import"./CollectionBuilder-D0Q13mlX.js";import"./SelectionIndicator-wxrHnCmJ.js";import"./Separator-DMedQabI.js";import"./browser-NAvxjlqe.js";import"./useLocalizedStringFormatter-DSC0kUTs.js";import"./useStatic-CTNvYRV_.js";import"./FileCardList-CelLg_wh.js";import"./IconWarning-Dqi9ABql.js";import"./Avatar-5by9MeQI.js";import"./AlertIcon-Xp4f2JBr.js";import"./Image-C129SSb1.js";import"./Text-Bkok2Uad.js";import"./EmulatedBoldText-Buf1io-r.js";import"./Link-DafBlrAX.js";import"./ControlledNotification-Cxvk1MBM.js";import"./LoadingSpinner-DTzlaVu1.js";import"./Flex-CXweaQA0.js";import"./Accordion-CII8tjDR.js";import"./Alert-CxRF3ICH.js";import"./AlertBadge-g5AIFmAM.js";import"./Align-D1ekpy-F.js";import"./AvatarStack-gtLPvBlC.js";import"./BigNumber-DDAMaBcj.js";import"./Breadcrumb-D6jlLVdK.js";import"./Legend-Ch6lQmnj.js";import"./Color-bOvY6mSn.js";import"./TableFooterRow-BNbzk5NJ.js";import"./SkeletonText-CyW34AgL.js";import"./Label-BcwsyfCE.js";import"./CounterBadge-CKtsFS1H.js";import"./DonutChart-BqUMdaQw.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Y2YDUvsA.js";import"./Header-cd3ubJu7.js";import"./Initials-8P49ASMZ.js";import"./InlineCode-ClEEVqRB.js";import"./LayoutCard-DFxi45F0.js";import"./Separator-BfdYcmQH.js";import"./MessageSeparator-CuotSqOA.js";import"./NavigationGroup-CEF9lIWg.js";import"./Notification-3G2vZj4A.js";import"./NotificationProvider-BuTudFPl.js";import"./ProgressBar-Cb_NqQgZ.js";import"./Rating-D1vk6HX_.js";import"./Skeleton-DCmfrDd3.js";const Eo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},i={args:{children:o.jsx(r,{action:y,children:l})}},c={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const _o=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,i as Nested,c as NestedAsync,m as WithConfirmationModal,_o as __namedExportsOrder,Eo as default};
