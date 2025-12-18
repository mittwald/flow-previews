import{j as o}from"./iframe-D_taohHE.js";import{a as d,c as u,b as l,s as y}from"./lib-r7i_-Hev.js";import{M as h}from"./TimeField-CWCEj6Gp.js";import{A}from"./ActionGroup-CtTj0KGg.js";import{B as p}from"./Button-BzDcn9gw.js";import{H as f}from"./Heading-B0K4zEMw.js";import{C as F}from"./Content-BMBcTKWL.js";import{A as r}from"./Section-BGMokIOG.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-DHsq54k3.js";import"./mergeRefs-K1QocDOZ.js";import"./index-C4Et8VlK.js";import"./clsx-B-dksMZM.js";import"./Accordion-hys_Z-y_.js";import"./dynamic-CPLuTyBP.js";import"./IconWarning-Bw09QPeB.js";import"./Alert-BVOvaJmZ.js";import"./AlertIcon-DsUCMzzQ.js";import"./useLocalizedStringFormatter-ofdICzIo.js";import"./context-EvUTNNVJ.js";import"./AlertBadge-DupL7VIa.js";import"./Text-ssmcNS2J.js";import"./browser-CjAcuXT7.js";import"./utils-pUWJ6aLq.js";import"./EmulatedBoldText-B54qJ1r4.js";import"./Align-lAtYkD7V.js";import"./Popover-CZk6Ipu0.js";import"./context-Bl1_lLpq.js";import"./Button-BveBpqmD.js";import"./ProgressBar-CjQdCBSe.js";import"./Hidden-D9ZNC0Hz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BpV933-R.js";import"./useFocusable-XY9B6x70.js";import"./RSPContexts-vZQTzHeQ.js";import"./Collection-DnhOSFxc.js";import"./CollectionBuilder-DgFesNsg.js";import"./SelectionIndicator-TPIlv31g.js";import"./Separator-B9t_aoMS.js";import"./useStatic-D1L299Q0.js";import"./OverlayTrigger-DdpU5CpM.js";import"./TableFooterRow-CkmR9iEr.js";import"./SkeletonText-DZCbX5t_.js";import"./Avatar-CyCWf7Sw.js";import"./AvatarStack-DjK4_GvM.js";import"./Badge-df7STlF7.js";import"./BigNumber-C4erlLZ0.js";import"./Breadcrumb-BQwb8t2O.js";import"./Link-DNZGcrEw.js";import"./Legend-DWlLuLfH.js";import"./FileCardList-DKvIBCyR.js";import"./Image-DajkgyNB.js";import"./Color-DoYXFuaB.js";import"./Label-BE25Mez9.js";import"./ContextualHelpTrigger-Di1ZUJxb.js";import"./CounterBadge-Ch0G_sYN.js";import"./DonutChart-CGEra__W.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DipKuwAa.js";import"./Header-BOGXXJwV.js";import"./Initials-B0t7F_wS.js";import"./InlineCode-DhfaAW0i.js";import"./PopoverTrigger-9SsYTlve.js";import"./LoadingSpinner-BB9iqpcc.js";import"./Separator-DNLy0jJN.js";import"./Message-aTJ2QV4k.js";import"./MessageSeparator-l6wGhyEd.js";import"./NavigationGroup-DObyIeLm.js";import"./Notification-D5W1roVe.js";import"./NotificationProvider-DOl1AdVQ.js";import"./ProgressBar-68JDRf4g.js";import"./Rating-Cq95JU_R.js";import"./Skeleton-T4ao3t7M.js";const qo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},i={args:{children:o.jsx(r,{action:y,children:l})}},c={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
