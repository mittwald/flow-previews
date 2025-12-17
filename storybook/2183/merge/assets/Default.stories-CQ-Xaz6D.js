import{j as o}from"./iframe-CzrbZwQa.js";import{a as d,c as u,b as l,s as y}from"./lib-DwytJlfy.js";import{M as h}from"./Modal-B4ql83us.js";import{A}from"./ActionGroup-BVCTu7ST.js";import{B as p}from"./Button-BnubCMUU.js";import{H as f}from"./Heading-C4XKs7d2.js";import{C as F}from"./Content-6qOTyX4c.js";import{A as r}from"./Action-8VFfq5fK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-BsERbuwe.js";import"./flowComponent-8nLM6u8z.js";import"./index-i1sq50ab.js";import"./index-Qzp6tfP6.js";import"./Overlay-BRq1V5A0.js";import"./OverlayContextProvider-BRgyWi9O.js";import"./context-CO2P6JA_.js";import"./useStatic-CooBsGRu.js";import"./LoadingSpinner-DKQ9WaFR.js";import"./IconApp-BPXZ8R19.js";import"./remote-q4LXxmI0.js";import"./ariaLive-D6gA1Cyb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DkMEC5lK.js";import"./context-Dzfzncd2.js";import"./utils-Ds7wxNIq.js";import"./Dialog-2hzA1Zyr.js";import"./Button-Cr67WOIO.js";import"./ProgressBar-CBKtRO3f.js";import"./Label-DMBiwPLT.js";import"./Hidden-CPBzEaGa.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-FWCEqZCU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Ck2a0me6.js";import"./useFocus-3xUusYsT.js";import"./useFocusRing-CcZAMLZr.js";import"./useFocusable-C0tTc1z6.js";import"./RSPContexts-BXOP7wdA.js";import"./OverlayArrow-QhJyKZol.js";import"./useControlledState-D-hIONgW.js";import"./Collection-DJOD4Ed7.js";import"./CollectionBuilder-D4t-xJzw.js";import"./SelectionIndicator-BDndb0Ze.js";import"./Separator-C-FZVUdq.js";import"./Text-Bpo5VkCj.js";import"./SelectionManager-N2u60-Z6.js";import"./useEvent-q-bdr1zW.js";import"./useCollator-TfVuzSHy.js";import"./FocusScope-Ct7XodZT.js";import"./VisuallyHidden-CUes-LKT.js";import"./useOverlayController-vG2MUPAG.js";import"./IconClose-1Vi9D7Rd.js";import"./IconX-C4Avmif2.js";import"./ButtonView-C20zsGI4.js";import"./Flex-DbYs_TxU.js";import"./Text-u_8Z_6lo.js";import"./browser-Q6zcHXxX.js";import"./EmulatedBoldText-DGVF2eKI.js";import"./getActionGroupSlot-GuEuCuz_.js";import"./IconCheck-DAWvHQav.js";import"./Heading-CeI5rPkS.js";const vo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
