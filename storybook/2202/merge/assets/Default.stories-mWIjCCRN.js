import{j as o}from"./iframe-Cir6MTA5.js";import{a as d,c as u,b as l,s as y}from"./lib-kOxInSFb.js";import{M as h}from"./TimeField-C03E55-6.js";import{A}from"./ActionGroup-CQUlrc02.js";import{B as p}from"./Button-C2A0kxO-.js";import{H as f}from"./Heading-C81Sjkat.js";import{C as F}from"./Content-sj2198_-.js";import{A as r}from"./Section-CsBFEvqK.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-Cm8oeilI.js";import"./mergeRefs-B7VAW6Py.js";import"./index-Ib6Soh3C.js";import"./clsx-B-dksMZM.js";import"./Accordion--LccsWdU.js";import"./dynamic-C54c6iDK.js";import"./IconWarning-DBAWKFVr.js";import"./Alert-Cwf4c51S.js";import"./AlertIcon-THsOUfa2.js";import"./useLocalizedStringFormatter-BNOIxokj.js";import"./context-DCFpjcCd.js";import"./AlertBadge-DQEistgl.js";import"./Text-NWoOtLYD.js";import"./browser-DYyRc_is.js";import"./utils-D3-KZmBM.js";import"./EmulatedBoldText-CMuEkZzQ.js";import"./Align-CbiGC6Hm.js";import"./Popover-BnMf836y.js";import"./context-uB_U-Ll-.js";import"./Button-CVO9gXsi.js";import"./ProgressBar-DkofuhmP.js";import"./Hidden-B8OXM-sx.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BaJuMT9x.js";import"./useFocusable-DuTyQoFg.js";import"./RSPContexts-DBL9OuDo.js";import"./Collection-DXpzkPD8.js";import"./CollectionBuilder-Dzx_KF2Z.js";import"./SelectionIndicator-C9EgnhSM.js";import"./Separator-DJLduqtA.js";import"./useStatic-lrFYKeJo.js";import"./OverlayTrigger-D8wWf3qw.js";import"./TableFooterRow-Bn7VMJfM.js";import"./SkeletonText-BA7fTM6y.js";import"./Avatar-D1LE7OHQ.js";import"./AvatarStack-BjHAHFtd.js";import"./Badge-Dhmh7ReA.js";import"./BigNumber-Bdldp5Vs.js";import"./Breadcrumb-BgYb3jvA.js";import"./Link-DL2nVgdW.js";import"./Legend-DNzEDg1V.js";import"./FileCardList-CdiBIUzb.js";import"./Image-Bmzle01D.js";import"./Color-DwuvilaM.js";import"./Label-CD63mnMj.js";import"./ContextualHelpTrigger-Sr6lf3NJ.js";import"./CounterBadge-Blil8ag9.js";import"./DonutChart-CdK4877Z.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BjZ4vO5b.js";import"./Header-BqKpe2dR.js";import"./Initials-DaUoDTnU.js";import"./InlineCode-BDWrnhvQ.js";import"./PopoverTrigger-BDtzPLEN.js";import"./LoadingSpinner-Cbn--oub.js";import"./Separator-DYtvdLSf.js";import"./Message-BEPzM24B.js";import"./MessageSeparator-DCUCvEOC.js";import"./NavigationGroup-BZDK6UKv.js";import"./Notification-CZZ3xhm4.js";import"./NotificationProvider-DrRbbE28.js";import"./ProgressBar-DTjakmLk.js";import"./Rating-C6rR6C1R.js";import"./Skeleton-By5OXPEA.js";const qo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},i={args:{children:o.jsx(r,{action:y,children:l})}},c={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
