import{j as o}from"./iframe-nUnY8CpM.js";import{a as d,c as u,b as l,s as y}from"./lib-BvJuhbuz.js";import{M as h}from"./Modal-CYaIt4oB.js";import{A}from"./ActionGroup-DFwXau3j.js";import{B as p}from"./Button-Drav3_ks.js";import{H as f}from"./Heading-wRPk5wst.js";import{C as F}from"./Content-DrDhpEui.js";import{A as r}from"./Action-Akn1uW1v.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-BZsQ8DvG.js";import"./flowComponent-DiVWNePS.js";import"./index-Czo4z9CC.js";import"./index-D5rarCk0.js";import"./Overlay-Bnc-w4uI.js";import"./OverlayContextProvider-QZV7xJtt.js";import"./context-CUJwrxJk.js";import"./useStatic-D4OCIKv7.js";import"./LoadingSpinner-Wr4Rr6kM.js";import"./IconChevronDown-C6KAqmcJ.js";import"./remote-Bcop36Tp.js";import"./ariaLive-BFPjGELJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DxwRSSu1.js";import"./context-B5Mk59jD.js";import"./utils-DtyHAF7C.js";import"./Dialog-x6GsWu_T.js";import"./Button-BQlojcF-.js";import"./ProgressBar-BfYlkvzs.js";import"./Label-B7kFjMQQ.js";import"./Hidden-DuLhuFUb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-ARnVSCS2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D0chnYNQ.js";import"./useFocus-ik1bIJBj.js";import"./useFocusRing-FZMFjSRM.js";import"./useFocusable-DICTyCVG.js";import"./RSPContexts-CWBH7SuF.js";import"./OverlayArrow-CHkAkv_A.js";import"./useControlledState-CaC4m18c.js";import"./Collection-DKxVpLoc.js";import"./CollectionBuilder-UHR0HG3W.js";import"./SelectionIndicator-Cj3HhkcP.js";import"./Separator-DDl87Ima.js";import"./Text-4n54moM_.js";import"./SelectionManager-f8KTi6JZ.js";import"./useEvent-DGx-2GiN.js";import"./useCollator-BNnpPJUs.js";import"./FocusScope-CB6t9Dkj.js";import"./VisuallyHidden-DJajrHPg.js";import"./useOverlayController-D3ZcYAE3.js";import"./IconClose-SanleU7O.js";import"./IconX-CEHyWrnq.js";import"./ButtonView-CBa0Ar2N.js";import"./Flex-DzU3Qzd_.js";import"./Text-CKSRxaE3.js";import"./browser-vyiLhVPE.js";import"./EmulatedBoldText-CfkdfDH6.js";import"./getActionGroupSlot-CsQGMPlH.js";import"./IconCheck-CMQi8hKM.js";import"./Heading-BKnaj6R8.js";const vo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Action action={syncFunction}>{button}</Action>
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    children: <Action action={asyncFunction}>{button}</Action>
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const wo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,c as Nested,i as NestedAsync,m as WithConfirmationModal,wo as __namedExportsOrder,vo as default};
