import{j as o}from"./iframe-DALg75d7.js";import{a as d,c as u,b as l,s as y}from"./lib-2jm5zliM.js";import{M as h}from"./Modal-D4tFA_wU.js";import{A}from"./ActionGroup-uPexo89O.js";import{B as p}from"./Button-CxCFU3Sm.js";import{H as f}from"./Heading-CnbEZOuS.js";import{C as F}from"./Content-DqvNxaOd.js";import{A as r}from"./Action-B-LX0Gdh.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-DY2Hgbuf.js";import"./Dialog-BcVnlKtW.js";import"./Button-CAn5W5h2.js";import"./utils-CCMGMBS3.js";import"./index-C1xeFTv-.js";import"./clsx-B-dksMZM.js";import"./index-BOS789La.js";import"./ProgressBar-BxOMxEJ2.js";import"./Label-BL63E4pM.js";import"./Hidden-DA9FnjM0.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-C6FFt053.js";import"./context-D-SwIuvT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BlF5TfdE.js";import"./useFocus-uyJaeSg2.js";import"./useFocusRing-DgbRXdyO.js";import"./useFocusable-KXnvIYuK.js";import"./RSPContexts-Bv06n-kH.js";import"./OverlayArrow-DlELcq_K.js";import"./useControlledState-10c65vgi.js";import"./Collection-BVQ9TfqB.js";import"./CollectionBuilder-CWHk20os.js";import"./SelectionIndicator-Dy2NyZ_L.js";import"./Separator-5S_7F0Gu.js";import"./Text-CuJqaQ90.js";import"./SelectionManager-CQ6fCu1T.js";import"./useEvent-BxcVXIUM.js";import"./useCollator-ClbbiMJu.js";import"./FocusScope-CEIkcXTC.js";import"./useLocalizedStringFormatter-CrSZ8rTF.js";import"./VisuallyHidden-BtdNRxOz.js";import"./flowComponent-D-am8ulk.js";import"./context-VL9rXB3T.js";import"./useStatic-C_Axqqwt.js";import"./OverlayContextProvider-BeL-SPbw.js";import"./DialogTriggerView-DiuSV62c.js";import"./dynamic-DnyVnPzZ.js";import"./Overlay-V_cVQ6zk.js";import"./useOverlayController-CJNm9GBn.js";import"./LoadingSpinner-DKmXkdSk.js";import"./IconWarning-CIuZ66pt.js";import"./remote-Bn6u74KD.js";import"./ButtonView-hke_KLLb.js";import"./Flex-DQKYRLrR.js";import"./Text-BfSm9wB3.js";import"./browser-BOjJAEEq.js";import"./EmulatedBoldText-BXgIlIDh.js";import"./getActionGroupSlot-CL-vXJAN.js";import"./Heading-D55KeDUv.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const So=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,c as Nested,i as NestedAsync,m as WithConfirmationModal,So as __namedExportsOrder,Lo as default};
