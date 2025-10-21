import{j as o}from"./iframe-B0qqkRSc.js";import{a as d,c as u,b as l,s as y}from"./lib-BZbFpJrX.js";import{M as h}from"./Modal-B1sJaZ0l.js";import{A}from"./ActionGroup-Cmq5nBXt.js";import{B as p}from"./Button-DJYlHg31.js";import{H as f}from"./Heading-n9cps3Jv.js";import{C as F}from"./Content-DY1XS3E5.js";import{A as r}from"./Action-CH6Q1TZa.js";import"./index-nuYtCEEu.js";import"./OverlayTrigger-CFxq5mHG.js";import"./Dialog-Cf8VWc4Y.js";import"./Button-CBrpY8Iv.js";import"./utils-fD_u--Rs.js";import"./index-Bw7Y8sX9.js";import"./clsx-B-dksMZM.js";import"./index-ByDaWYpT.js";import"./ProgressBar-COiaV-p2.js";import"./Label-CSbZp_Tl.js";import"./Hidden-B-z-l7Br.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-sSRBc7PO.js";import"./context-D99v7Uqm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CRF7-NYn.js";import"./useFocus-D6s77d5g.js";import"./useFocusRing-6YYb42D4.js";import"./useFocusable-BBZGyB5D.js";import"./RSPContexts-JwdHw2w4.js";import"./OverlayArrow-B0r4AZS0.js";import"./useControlledState-CB1SzgEG.js";import"./Collection-BezXrWUC.js";import"./CollectionBuilder-CyiVnh3g.js";import"./SelectionIndicator-BJvhD4qq.js";import"./Separator-AYUu4xVa.js";import"./Text-Dr_aqSbj.js";import"./SelectionManager-pQfvjsBD.js";import"./useEvent-BB8Na9jU.js";import"./useCollator-D-k20A4-.js";import"./FocusScope-8IhL3Eed.js";import"./useLocalizedStringFormatter-Hp5e5rkz.js";import"./VisuallyHidden-CQaNZ-oY.js";import"./ControlledNotification-WPO1qXkk.js";import"./flowComponent-D28qUuL_.js";import"./context-CL6SRMFP.js";import"./useStatic-CDvxHEcU.js";import"./OverlayContextProvider-DBk643TH.js";import"./DialogTriggerView-K5zIqDqM.js";import"./dynamic-nZoDMFyL.js";import"./Overlay-b3TzR9n3.js";import"./useOverlayController-C7cC56ob.js";import"./ClearPropsContextView-D258LB2U.js";import"./ClearPropsContext-HA28kjj1.js";import"./IconWarning-BPZvpYf1.js";import"./ButtonView-DN7fl48R.js";import"./getActionGroupSlot-C0ojBLEj.js";import"./Text-BrTaOrXE.js";import"./browser-B1sj-_-y.js";import"./EmulatedBoldText-YngYColk.js";import"./LoadingSpinner-BhtZJAGg.js";import"./Heading-Db08qSfp.js";const So={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
