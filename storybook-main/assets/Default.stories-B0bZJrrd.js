import{j as o}from"./iframe-COrLnxQ5.js";import{a as d,c as u,b as l,s as g}from"./lib-DaFECogO.js";import{M as y}from"./Modal-C6bi54Qj.js";import{A as h}from"./ActionGroup-BkAJhlM8.js";import{B as p}from"./Button-B5T-9t49.js";import{H as f}from"./Heading--g-KOjmd.js";import{C as F}from"./Content-B4mAPZYH.js";import{A as r}from"./Action-DL1crjzC.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-Dx3VRxcY.js";import"./Dialog-CXGseDzt.js";import"./Button-XrgEKXm-.js";import"./utils-VsjjISTT.js";import"./index-B8mhWUvU.js";import"./clsx-B-dksMZM.js";import"./index-C_Qn4vD5.js";import"./ProgressBar-SUOC-8W4.js";import"./Label-B0iAgBS9.js";import"./Hidden-JddfwHBV.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Dc-mlO3X.js";import"./context-BGD9bWhq.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BYo5WNMt.js";import"./useFocus-D07Nw9k2.js";import"./useFocusRing-DLXXvYqO.js";import"./useFocusable-BKqCzfQc.js";import"./RSPContexts-Ds5AG3kQ.js";import"./OverlayArrow-B9AznsvA.js";import"./useControlledState-B-eslxlj.js";import"./Collection-DJX2nYwX.js";import"./CollectionBuilder-BrcW8xHd.js";import"./SelectionIndicator-DN8aDza5.js";import"./Separator-DW4a3XE2.js";import"./Text-DGq4TjGO.js";import"./SelectionManager-B2aYcQpR.js";import"./useEvent-BPQkjHeP.js";import"./useCollator-BPVzlqIU.js";import"./FocusScope-DyecdLbF.js";import"./useLocalizedStringFormatter-CnLjSwJ3.js";import"./VisuallyHidden-DMXfMtnF.js";import"./flowComponent-Whsy6gdm.js";import"./context-Dy8NilHt.js";import"./useStatic-CZwWlCB5.js";import"./OverlayContextProvider-BtJ2k2E0.js";import"./DialogTriggerView-DuFcxNsd.js";import"./dynamic-6q-iLiJj.js";import"./Overlay-B4VcLYFM.js";import"./useOverlayController-JMrb6iCJ.js";import"./LoadingSpinner-BLCck0My.js";import"./IconWarning-CG-OJrgb.js";import"./remote-DmDOnO_p.js";import"./ButtonView-BaOHg3N5.js";import"./Flex-pIfgDITq.js";import"./Text-xUIxpGpZ.js";import"./browser-_tQTAo3E.js";import"./EmulatedBoldText-BCoG1WnK.js";import"./getActionGroupSlot-CizQjHpL.js";import"./Heading-B77ZBR05.js";const Lo={title:"Actions/Action",component:r,render:A=>o.jsx(r,{...A,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{onAction:d}},e={args:{onAction:u}},s={args:{onAction:d,showFeedback:!0}},c={args:{onAction:u,showFeedback:!0}},i={args:{children:o.jsx(r,{onAction:g,children:l})}},a={args:{onAction:d,children:o.jsx(r,{onAction:d,children:l})}},m={render:()=>o.jsxs(r,{onAction:u,children:[o.jsxs(y,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(h,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunction
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Action onAction={syncFunction}>{button}</Action>
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunction,
    children: <Action onAction={asyncFunction}>{button}</Action>
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const So=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,c as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,i as Nested,a as NestedAsync,m as WithConfirmationModal,So as __namedExportsOrder,Lo as default};
