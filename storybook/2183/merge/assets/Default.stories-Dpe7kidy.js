import{j as o}from"./iframe-DEcBxJMv.js";import{a as d,c as u,b as l,s as y}from"./lib-CVp6C1A4.js";import{M as h}from"./TimeField-Dm82K8tp.js";import{A}from"./ActionGroup-DvFbVXMb.js";import{B as p}from"./Button-SrFk_XSt.js";import{H as f}from"./Heading-DVq-3Nns.js";import{C as F}from"./Content-ClXCVH_y.js";import{A as r}from"./Section-DBHphcZQ.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-MiOt2FVz.js";import"./mergeRefs-sinOTIgX.js";import"./index-BqRQQrKV.js";import"./clsx-B-dksMZM.js";import"./Accordion-BLxSKLD2.js";import"./dynamic-BupQFwyZ.js";import"./IconWarning-BC7HEquB.js";import"./remote-DoDHjwnJ.js";import"./Alert-Bj8aMttH.js";import"./AlertIcon-B311quy6.js";import"./useLocalizedStringFormatter-BRb5cwJZ.js";import"./context-CCmXnIub.js";import"./AlertBadge-DgPHrTJs.js";import"./Text-BBAymND1.js";import"./browser-BXvtU8ie.js";import"./utils-UdYzeLBf.js";import"./EmulatedBoldText-CK8KF88J.js";import"./Align-DJzhUqNo.js";import"./Popover-C7mJHuVQ.js";import"./context-font-zWS.js";import"./Button-BxMepmz1.js";import"./ProgressBar-EpRxxAE3.js";import"./Hidden-D2mpT24u.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-D_wOvvGC.js";import"./useFocusable-BmM1dgKm.js";import"./RSPContexts-WhR4y82c.js";import"./Collection-DpX_tac4.js";import"./CollectionBuilder-DE4qpmv-.js";import"./SelectionIndicator-Cf3jtetL.js";import"./Separator-UL7-w-P3.js";import"./useStatic-BAiSxx7G.js";import"./OverlayTrigger-u_RpKHc5.js";import"./TableFooterRow-C_lpJ_Ld.js";import"./SkeletonText-DAnNzdg5.js";import"./Avatar-bYuIu1Zy.js";import"./AvatarStack-DTmDz1dE.js";import"./Badge-bbz8daB-.js";import"./BigNumber-BlHVGSpu.js";import"./Breadcrumb-GNNk4mVy.js";import"./Link-CPvKToX3.js";import"./Legend-C5yWylkj.js";import"./FileCardList-Bi3qt08T.js";import"./Image-CcShDLXX.js";import"./Color-B19feJBC.js";import"./Label-DKovwxNh.js";import"./ContextualHelpTrigger-PNpDQr7A.js";import"./CounterBadge-BITuIXzG.js";import"./DonutChart-DfevOAtY.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Cw2rsL0x.js";import"./Header-DifY7CnZ.js";import"./Initials-TsKejgdG.js";import"./InlineCode-BkoHhJoS.js";import"./PopoverTrigger-BYjVsibp.js";import"./LoadingSpinner-BVhceB8v.js";import"./Separator-Cmo-OklH.js";import"./Message-Dzzvnonj.js";import"./MessageSeparator-DMvMYf8R.js";import"./NavigationGroup-DIvfJjdh.js";import"./Notification-DUi0yP4R.js";import"./NotificationProvider-Qm9FlLcY.js";import"./ProgressBar-ULT9xIn5.js";import"./Rating-C0VI3x7Z.js";import"./Skeleton-B3H61kIa.js";const zo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},i={args:{children:o.jsx(r,{action:y,children:l})}},c={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Io=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,i as Nested,c as NestedAsync,m as WithConfirmationModal,Io as __namedExportsOrder,zo as default};
