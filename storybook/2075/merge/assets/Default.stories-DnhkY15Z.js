import{j as o}from"./iframe-C3YinX3s.js";import{a as d,c as u,b as l,s as y}from"./lib-RNsDbM8J.js";import{M as h}from"./Modal-BlLGDFh5.js";import{A}from"./ActionGroup-BpJBuAaq.js";import{B as p}from"./Button-B9MewrUz.js";import{H as f}from"./Heading-BWuvehcD.js";import{C as F}from"./Content-nKB3Ih0q.js";import{A as r}from"./Action-DH4q3DMK.js";import"./index-nuYtCEEu.js";import"./OverlayTrigger-CcK_N3rx.js";import"./Dialog-CifFL37q.js";import"./Button-CBEcZBzR.js";import"./utils-CkQtaKCN.js";import"./index-PmbawSGG.js";import"./clsx-B-dksMZM.js";import"./index-BppZCGPZ.js";import"./ProgressBar-DHxU0Tpr.js";import"./Label-uL4LTRYY.js";import"./Hidden-RtymAw99.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-6oysTp78.js";import"./context-XadyItFl.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CEE7eirG.js";import"./useFocus-DuIK45_5.js";import"./useFocusRing-BT4tpo7d.js";import"./useFocusable-Cpx8bVI7.js";import"./RSPContexts-DbIyirJn.js";import"./OverlayArrow-Bx4uFTPE.js";import"./useControlledState-DTNxqflL.js";import"./Collection-CFBStWe-.js";import"./CollectionBuilder-YYQa8BK8.js";import"./SelectionIndicator-CWOLS5ft.js";import"./Separator-BjhRMKQy.js";import"./Text-2o-hGpxv.js";import"./SelectionManager-C2fMWUbc.js";import"./useEvent-NeYNfT16.js";import"./useCollator-DJ52WOHW.js";import"./FocusScope-fcPAzZ97.js";import"./useLocalizedStringFormatter-D8x_j-oY.js";import"./VisuallyHidden-Bah8oUIC.js";import"./ControlledNotification-8cMq_6Ir.js";import"./flowComponent-DbYaKppP.js";import"./context-C6PcGqQE.js";import"./useStatic-K2T119cA.js";import"./OverlayContextProvider-BLqueKvq.js";import"./DialogTriggerView-CNNSjuof.js";import"./dynamic-BlWCyvfa.js";import"./Overlay-8PPtxL-z.js";import"./useOverlayController-DQ84rk2f.js";import"./ClearPropsContextView-j5diIoDW.js";import"./ClearPropsContext-CJ1szkV5.js";import"./IconWarning-6TASCfRR.js";import"./ButtonView-BRFdUSD4.js";import"./getActionGroupSlot-DrHtarua.js";import"./Text-40KOd3GJ.js";import"./browser-DlgIuTl3.js";import"./EmulatedBoldText-DmHQDGMB.js";import"./LoadingSpinner-BiveWKkE.js";import"./Heading-DtjPUsAn.js";const So={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const vo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,c as Nested,i as NestedAsync,m as WithConfirmationModal,vo as __namedExportsOrder,So as default};
