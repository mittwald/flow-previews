import{j as o}from"./iframe-EUG4rdOg.js";import{a as l,c as A,d as h,e as F,b as g,s as f}from"./lib-30tCkZsR.js";import{M as x}from"./Modal-B8BX44PT.js";import{A as b}from"./ActionGroup-BZH42G79.js";import{B as u}from"./Button-CEake6G1.js";import{H as j}from"./Heading-Bi7E6SrE.js";import{C as S}from"./Content-QCAVaCkP.js";import{A as r}from"./Action-DJ1WPhSw.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-CAZY-Adw.js";import"./Dialog-ClYDKCvQ.js";import"./Button-_TVwxj4G.js";import"./utils-DJPQq0Ir.js";import"./index-DTdnl-5o.js";import"./clsx-B-dksMZM.js";import"./index-Dmbpubym.js";import"./ProgressBar-CixwbPNP.js";import"./Label-D6dDxJKJ.js";import"./Hidden-CsejW8LP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddt3ftMp.js";import"./context-DxYQrQkA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CyxS_pZ-.js";import"./useFocus-Ca80QzG_.js";import"./useFocusRing-pMATsfPY.js";import"./useFocusable-YuTP7Rcp.js";import"./RSPContexts-DeOxvpD0.js";import"./OverlayArrow-D1DBrKZH.js";import"./useControlledState-DorIVmrH.js";import"./Collection-D08qzwe9.js";import"./CollectionBuilder-B2OL-l6X.js";import"./SelectionIndicator-CBEc_uRa.js";import"./Separator-Hxx-CpzA.js";import"./Text-BNRjjFE0.js";import"./SelectionManager-l6xAmoDy.js";import"./useEvent-KRKJPCS3.js";import"./useCollator-DB4dbnWY.js";import"./FocusScope-BEv8tYIC.js";import"./useLocalizedStringFormatter-8TMbmljG.js";import"./VisuallyHidden-DwLUyGt6.js";import"./flowComponent-C1dTLmWR.js";import"./context-B_Qm6y3p.js";import"./useStatic-uvHDPGza.js";import"./OverlayContextProvider-bBBj8Jql.js";import"./DialogTriggerView--p8kbOfS.js";import"./dynamic-B-NoN6qZ.js";import"./Overlay-Cq6GQtlC.js";import"./useOverlayController-8UNjRd9m.js";import"./LoadingSpinner-CJqmAtLp.js";import"./IconWarning-CN_aXaJM.js";import"./remote-Bl5KctCq.js";import"./ButtonView-BC_ryqYl.js";import"./Flex-DMYuZ1Af.js";import"./Text-DlICJI4S.js";import"./browser-Dr5hWFfi.js";import"./EmulatedBoldText-wvGqieyl.js";import"./getActionGroupSlot-nY47Clec.js";import"./Heading-DsDU_kOR.js";const vo={title:"Actions/Action",component:r,render:y=>o.jsx(r,{...y,children:o.jsx(u,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},n={},t={args:{onAction:l}},e={args:{onAction:A}},s={args:{onAction:l,showFeedback:!0}},c={args:{onAction:A,showFeedback:!0}},a={args:{children:o.jsx(r,{onAction:f,children:g})}},i={args:{onAction:l,children:o.jsx(r,{onAction:l,children:g})}},m={args:{onAction:h}},p={args:{onAction:F}},d={render:()=>o.jsxs(r,{onAction:A,children:[o.jsxs(x,{slot:"actionConfirm",children:[o.jsx(j,{children:"Delete customer"}),o.jsx(S,{children:"Do you really want to delete the customer?"}),o.jsxs(b,{children:[o.jsx(u,{color:"danger",children:"Confirm"}),o.jsx(u,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(u,{color:"secondary",variant:"soft",children:"Delete customer"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunction
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncLongFunction
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunction,
    showFeedback: true
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncLongFunction,
    showFeedback: true
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Action onAction={syncFunction}>{button}</Action>
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunction,
    children: <Action onAction={asyncFunction}>{button}</Action>
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: syncFunctionWithError
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunctionWithError
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Action onAction={asyncLongFunction}>
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
}`,...d.parameters?.docs?.source}}};const wo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","SyncError","AsyncError","WithConfirmationModal"];export{t as Async,p as AsyncError,e as AsyncLong,c as AsyncLongWithFeedback,s as AsyncWithFeedback,n as Default,a as Nested,i as NestedAsync,m as SyncError,d as WithConfirmationModal,wo as __namedExportsOrder,vo as default};
