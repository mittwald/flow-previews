import{j as o}from"./iframe-4vGjmvQN.js";import{a as d,c as u,b as l,s as y}from"./lib-OO8Ukyv3.js";import{M as h}from"./Modal-KpM_4sGu.js";import{A}from"./ActionGroup-CFuf9kyv.js";import{B as p}from"./Button-Dkb2KJyV.js";import{H as f}from"./Heading-DVNwCXdo.js";import{C as F}from"./Content-Drd5qEGz.js";import{A as r}from"./Action-DFPEzuYz.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-CIaqJQvR.js";import"./Dialog-DWeru3ZY.js";import"./Button-C8uGqlfr.js";import"./utils-Cb3SeWCs.js";import"./index-DFF4TtWB.js";import"./clsx-B-dksMZM.js";import"./index--XKY9bK1.js";import"./ProgressBar-D3BQYEeZ.js";import"./Label-DRFrGBxg.js";import"./Hidden-DKOWGOBv.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dy2_qp8M.js";import"./context-Cugfl_gO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-SP29s-a6.js";import"./useFocus-BGpJf3EA.js";import"./useFocusRing-ctZhab72.js";import"./useFocusable-BvBcbeR1.js";import"./RSPContexts-BAo2RxOH.js";import"./OverlayArrow-Ss-CcX6O.js";import"./useControlledState-wPwtFL3G.js";import"./Collection-JwP5-obH.js";import"./CollectionBuilder-BFcqcbLB.js";import"./SelectionIndicator-Cti1f0QF.js";import"./Separator-CUemZlM2.js";import"./Text-DO-ESRpi.js";import"./SelectionManager-DMVUPuxd.js";import"./useEvent-CRBCWBzI.js";import"./useCollator-D5lNxT5d.js";import"./FocusScope-Blxz7JIY.js";import"./useLocalizedStringFormatter-Ci5i2g9p.js";import"./VisuallyHidden-C3YQx9t_.js";import"./flowComponent-BTnwUX2e.js";import"./context-C_iyWBEo.js";import"./useStatic-CkngZPNU.js";import"./OverlayContextProvider-BfvQVmDI.js";import"./DialogTriggerView-c-aaz2kd.js";import"./dynamic-CTwyIkzY.js";import"./Overlay-v2glELb9.js";import"./useOverlayController-D8-mco-D.js";import"./LoadingSpinner-Qei33fJA.js";import"./IconWarning-CMo0ZXSb.js";import"./remote-BMVFgzCt.js";import"./ButtonView-DU5uwmW9.js";import"./Flex-Dc6xWnZa.js";import"./Text-D_m0UGXp.js";import"./browser-BLim8y6B.js";import"./EmulatedBoldText-DOuKha2y.js";import"./getActionGroupSlot-ChdVdmUh.js";import"./Heading-D0PKdBSu.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
