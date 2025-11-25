import{j as o}from"./iframe-D6fHsxXv.js";import{a as d,c as u,b as l,s as y}from"./lib-DCrMUM6a.js";import{M as h}from"./Modal-CGXu-7BF.js";import{A}from"./ActionGroup-Bn5GGBe3.js";import{B as p}from"./Button-ByZH5IaN.js";import{H as f}from"./Heading-CN7gV4ri.js";import{C as F}from"./Content-CavwTwhy.js";import{A as r}from"./Section-DZa8lXDk.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-BLI65pIy.js";import"./flowComponent-CyxS6jtd.js";import"./index-a9Z31mTH.js";import"./index-BN2jmjED.js";import"./context-B25Uysh-.js";import"./Button-CGoM5cNA.js";import"./utils-CX0v46bh.js";import"./ProgressBar-p_vCaDV8.js";import"./Hidden-DOuWayhK.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DBHOSboP.js";import"./useFocusRing-mSLmiDmW.js";import"./useFocusable-C5yjySsw.js";import"./RSPContexts-ot9YLsND.js";import"./Collection-C7VAUULI.js";import"./CollectionBuilder-Da2MDVhj.js";import"./SelectionIndicator-BI8Ai2Ij.js";import"./Separator-CsPA1GTq.js";import"./browser-CwuXyXeK.js";import"./useLocalizedStringFormatter-CFiZqHkg.js";import"./useStatic-ZhhRmIwk.js";import"./FileCardList-CKOF_41c.js";import"./IconWarning-BQPhDOnw.js";import"./Avatar-BZa2aNzB.js";import"./AlertIcon-y7uDyP2w.js";import"./Image-BE61ZkEV.js";import"./Text-BlUe4lOx.js";import"./EmulatedBoldText-C3KADN9z.js";import"./Link-BXLnihOz.js";import"./ControlledNotification-DW7-c_1o.js";import"./LoadingSpinner-YR9PsY9I.js";import"./Flex-Bnwwl7yh.js";import"./Accordion-BNspTTT6.js";import"./Alert-QOLcAREl.js";import"./AlertBadge-D8pE3XVJ.js";import"./Align-jX76HIXo.js";import"./AvatarStack-D1CQ9CP4.js";import"./BigNumber-HDD6Ha1g.js";import"./Breadcrumb-C3NrF8Li.js";import"./Legend-g2tREy-a.js";import"./Color-Bkm_a0pP.js";import"./TableFooterRow-DGrjNW1t.js";import"./SkeletonText-3m6Qm9dA.js";import"./Label-BFZcxZYB.js";import"./CounterBadge-CM2z3a4b.js";import"./DonutChart-BhFaY8J1.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DyavuTK0.js";import"./Header-OT8Q3euI.js";import"./Initials-CZzuu5uh.js";import"./InlineCode-CKBf34T8.js";import"./LayoutCard-3KlgAbCz.js";import"./Separator-DVOspp54.js";import"./MessageSeparator-CCKnTU1s.js";import"./NavigationGroup-DV-BiGeA.js";import"./Notification-C3O4RVn7.js";import"./NotificationProvider-DlGFFFM5.js";import"./ProgressBar-DAX1bvy4.js";import"./Rating-Dfz4xv42.js";import"./Skeleton-sfWcrayS.js";const Eo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},i={args:{children:o.jsx(r,{action:y,children:l})}},c={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
