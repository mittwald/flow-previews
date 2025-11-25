import{j as o}from"./iframe-DjQX0xu7.js";import{a as d,c as u,b as l,s as y}from"./lib-CW0WKsHq.js";import{M as h}from"./Modal-BBNlMVze.js";import{A}from"./ActionGroup-BSKw1FYv.js";import{B as p}from"./Button-BzgEBlcG.js";import{H as f}from"./Heading-Ek-NbzZ5.js";import{C as F}from"./Content-C8r-jMKP.js";import{A as r}from"./Section-Cz82PiQz.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-22J8cjb3.js";import"./flowComponent-JYU8T0At.js";import"./index-Cs3FvKNT.js";import"./index-C69E--h5.js";import"./context-B6Z8BqUC.js";import"./Button-BjLxB9ET.js";import"./utils-C30iJzW5.js";import"./ProgressBar-CCJkQYvg.js";import"./Hidden-DiDVenMv.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-D5QUCTp7.js";import"./useFocusRing-UFpAQC1c.js";import"./useFocusable-DfpRXFuB.js";import"./RSPContexts-DSRMecLI.js";import"./Collection-9mWjKSNJ.js";import"./CollectionBuilder-DGVbcN1s.js";import"./SelectionIndicator-BCys4Qq1.js";import"./Separator-B8K4J-Om.js";import"./browser-BHlZuLqI.js";import"./useLocalizedStringFormatter-DeqRUlGI.js";import"./useStatic-QbJcOryG.js";import"./FileCardList-DoyIp-u1.js";import"./IconWarning-BuswXrVR.js";import"./Avatar-CD-JtxxQ.js";import"./AlertIcon-BUEZz4zv.js";import"./Image-BrUNo-p1.js";import"./Text-CBF9Mq5x.js";import"./EmulatedBoldText-C8hbjTYh.js";import"./Link-CkG0aVzf.js";import"./ControlledNotification-BMFbIoKB.js";import"./LoadingSpinner-CySWmfRx.js";import"./Flex-Rh0qQGjv.js";import"./Accordion-cPVhBb9_.js";import"./Alert-DEAo5TA3.js";import"./AlertBadge-CjbbHl0v.js";import"./Align-BIiffU6n.js";import"./AvatarStack-CWGa8hd6.js";import"./BigNumber-D2hG44RZ.js";import"./Breadcrumb-Cv5Q03Ns.js";import"./Legend-IlVWPDZR.js";import"./Color-Cv9cJ5fh.js";import"./TableFooterRow-CtfTvciP.js";import"./SkeletonText-CuL7hCDf.js";import"./Label-DwpG6CHQ.js";import"./CounterBadge-Cln_B5dZ.js";import"./DonutChart-CeYVkmS5.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CDOd4Rmd.js";import"./Header-D6EurdOg.js";import"./Initials-CZh9PsXN.js";import"./InlineCode-D-2oy3Ir.js";import"./LayoutCard-F3d117j-.js";import"./Separator-DfIOpBez.js";import"./MessageSeparator-BtlLyxAF.js";import"./NavigationGroup-BlAMWir7.js";import"./Notification-3EcIdYeY.js";import"./NotificationProvider-jYqbFyZ7.js";import"./ProgressBar-O_f2my1S.js";import"./Rating-5sVy98qX.js";import"./Skeleton-jyWQALH6.js";const Eo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},i={args:{children:o.jsx(r,{action:y,children:l})}},c={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
