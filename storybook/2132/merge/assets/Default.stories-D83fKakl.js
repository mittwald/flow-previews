import{j as o}from"./iframe-7JAb-nDd.js";import{a as d,c as u,b as l,s as y}from"./lib-BzDZnhF6.js";import{M as h}from"./TimeField-CNjMofKD.js";import{A}from"./ActionGroup-BD30m3yb.js";import{B as p}from"./Button-C274DNXY.js";import{H as f}from"./Heading-CHzNLXxT.js";import{C as F}from"./Content-Dg81XJRV.js";import{A as r}from"./Section--2nSNqYe.js";import"./index-nuYtCEEu.js";import"./PropsContextProvider-DI02RRNp.js";import"./mergeRefs-BqKaiHD8.js";import"./index-DRtDW0cb.js";import"./clsx-B-dksMZM.js";import"./utils-COcVuwM3.js";import"./Accordion-DYtLRAos.js";import"./dynamic-DAEQlq7s.js";import"./IconWarning-CrvOn5qf.js";import"./Alert-CLiUa977.js";import"./AlertIcon-WJ9tZl6s.js";import"./useLocalizedStringFormatter-BfdvS2qE.js";import"./context-DufoU_2Q.js";import"./AlertBadge-AOM4FSHZ.js";import"./Text-Cjgg9Pe-.js";import"./browser-ES8JYesh.js";import"./EmulatedBoldText-DX6Otmj0.js";import"./Align-B0gCmpdf.js";import"./Popover-BcXGNCBW.js";import"./context-49irLi2e.js";import"./Button-CcXbzio8.js";import"./ProgressBar-CubXbo9-.js";import"./Hidden-CYq8ZFci.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-JM7xFBIR.js";import"./useFocusable-B5p2nlfO.js";import"./RSPContexts-BRgQDZZ1.js";import"./Collection-DakGPO9D.js";import"./CollectionBuilder-DcGhuBQx.js";import"./SelectionIndicator-Co1wtinQ.js";import"./Separator-DCxDEExt.js";import"./useStatic-BMWFl-h1.js";import"./OverlayTrigger-DS9RFxPY.js";import"./TableFooterRow-ZODofEH1.js";import"./SkeletonText-B9c0QkCc.js";import"./Avatar-6DFit7Ya.js";import"./AvatarStack-4AL_jxUF.js";import"./Badge-B1Y6ruys.js";import"./BigNumber-NgHYAh3A.js";import"./Breadcrumb-DOyzkWnN.js";import"./Link-Do3eIhQO.js";import"./Legend-CZxHGHa6.js";import"./FileCardList-CFeSPxGX.js";import"./Image-CFjkhrGB.js";import"./Color-xIgWNHiv.js";import"./Label-Cq-3tAPE.js";import"./ContextualHelpTrigger-7crKzglp.js";import"./CounterBadge-CLW5yjQ7.js";import"./DonutChart-C7E8doOb.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DIdJbZ8G.js";import"./Header-DkLINSGj.js";import"./Initials-DCYS7rJh.js";import"./InlineCode-DdWzKy44.js";import"./PopoverTrigger-BiiRixsv.js";import"./LoadingSpinner-Ds95wBE7.js";import"./Separator-DvBTZY_D.js";import"./Message-jmWJmgsi.js";import"./MessageSeparator-dTBBbTVG.js";import"./NavigationGroup-BQQpe8Hu.js";import"./Notification-CAeZO54P.js";import"./NotificationProvider-Cquom2kb.js";import"./ProgressBar-CEJMgPBt.js";import"./Rating-Bg1reZHS.js";import"./Skeleton-DiJUmzB6.js";import"./getActionGroupSlot-o5MzPqMr.js";const zo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},i={args:{children:o.jsx(r,{action:y,children:l})}},c={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
