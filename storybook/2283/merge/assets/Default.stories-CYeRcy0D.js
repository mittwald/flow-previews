import{j as o}from"./iframe-DcJYxA4H.js";import{a as l,c as A,d as h,e as F,b as g,s as f}from"./lib-DbCOJq0c.js";import{M as x}from"./Modal-DQL1GPEZ.js";import{A as b}from"./ActionGroup-B_pSbWAL.js";import{B as u}from"./Button-ByRmZgOS.js";import{H as j}from"./Heading-CIr8mTXG.js";import{C as S}from"./Content-CMZGeW12.js";import{A as r}from"./Action-Dlz18l4c.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-bsYBPnMH.js";import"./Dialog-Dz1EswEt.js";import"./Button-igLlXErA.js";import"./utils-DilzIpMR.js";import"./index-DqZIl2km.js";import"./clsx-B-dksMZM.js";import"./index-BLaZpk-P.js";import"./ProgressBar-NBTy9B_U.js";import"./Label-C5pMaxrW.js";import"./Hidden-DfDLmmBw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpAfaget.js";import"./context-qV6jeEP3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CoiuKGvm.js";import"./useFocus-CBKKPZUx.js";import"./useFocusRing-KHZvHeNt.js";import"./useFocusable-CBOZtalu.js";import"./RSPContexts-B2T9ptP_.js";import"./OverlayArrow-wMKeeSQ0.js";import"./useControlledState-BqUYry3y.js";import"./Collection-CKg9fKRI.js";import"./CollectionBuilder-Cc_loPne.js";import"./SelectionIndicator-DgZf9HEL.js";import"./Separator-BAQ5hF_i.js";import"./Text-CtAF_MdJ.js";import"./SelectionManager-yA8P5A7T.js";import"./useEvent-stiRI7x_.js";import"./useCollator-CoXNjTxb.js";import"./FocusScope-CWIATeBq.js";import"./useLocalizedStringFormatter-CF3rZOx1.js";import"./VisuallyHidden-5QTr2j1N.js";import"./flowComponent-BLRiscD5.js";import"./context-D2f0m16x.js";import"./useStatic-CtzGIMZo.js";import"./OverlayContextProvider-77-UrxPo.js";import"./DialogTriggerView-BIVtx_zg.js";import"./dynamic-BeRAROrj.js";import"./Overlay-Bz1QQdth.js";import"./useOverlayController-B1TTUHMS.js";import"./LoadingSpinner-Cq4_0Dfa.js";import"./IconWarning-C1b-rglK.js";import"./remote-Bz3vE1W1.js";import"./ButtonView-ByBYPO5_.js";import"./Flex-fpbtd4s9.js";import"./Text-DtgxB8-I.js";import"./browser-DuGwj8Dx.js";import"./EmulatedBoldText-B8m3SU7U.js";import"./getActionGroupSlot-DWUJnrNV.js";import"./Heading-BwYTefZe.js";const vo={title:"Actions/Action",component:r,render:y=>o.jsx(r,{...y,children:o.jsx(u,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},n={},t={args:{onAction:l}},e={args:{onAction:A}},s={args:{onAction:l,showFeedback:!0}},c={args:{onAction:A,showFeedback:!0}},a={args:{children:o.jsx(r,{onAction:f,children:g})}},i={args:{onAction:l,children:o.jsx(r,{onAction:l,children:g})}},m={args:{onAction:h}},p={args:{onAction:F}},d={render:()=>o.jsxs(r,{onAction:A,children:[o.jsxs(x,{slot:"actionConfirm",children:[o.jsx(j,{children:"Delete customer"}),o.jsx(S,{children:"Do you really want to delete the customer?"}),o.jsxs(b,{children:[o.jsx(u,{color:"danger",children:"Confirm"}),o.jsx(u,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(u,{color:"secondary",variant:"soft",children:"Delete customer"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
