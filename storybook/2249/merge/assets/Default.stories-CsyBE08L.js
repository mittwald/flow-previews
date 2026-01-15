import{j as o}from"./iframe-pcvtdEGM.js";import{a as d,c as u,b as l,s as y}from"./lib-BSrqwub-.js";import{M as h}from"./Modal-BDJVqM5c.js";import{A}from"./ActionGroup-Cnw6IB4G.js";import{B as p}from"./Button-uyxj5lKX.js";import{H as f}from"./Heading-BaRKstVM.js";import{C as F}from"./Content-BU-0y3wb.js";import{A as r}from"./Action-DJjvSFsd.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-AmfCki8T.js";import"./Dialog-DwYtEz4y.js";import"./Button-C7g9LfsB.js";import"./utils-fsWZtkeO.js";import"./index-qOUwp4oz.js";import"./clsx-B-dksMZM.js";import"./index-YznY-g7A.js";import"./ProgressBar-BJtj52rd.js";import"./Label-BTMeT-8z.js";import"./Hidden-DReGI82W.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D_iN71C8.js";import"./context-We2COa_S.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dv_EQiAe.js";import"./useFocus-B8eWYfgC.js";import"./useFocusRing-Zb0us3UP.js";import"./useFocusable-3pO1u96t.js";import"./RSPContexts-DZfuqB-R.js";import"./OverlayArrow-KSA73Rxs.js";import"./useControlledState-CJg030Qn.js";import"./Collection-CigrVSlS.js";import"./CollectionBuilder-Bto5ITGH.js";import"./SelectionIndicator-PrkU8Fpu.js";import"./Separator-CvwRIy8P.js";import"./Text-DqkI-mFO.js";import"./SelectionManager-DshmmqnA.js";import"./useEvent-D-kKKOwz.js";import"./useCollator-BbVXsX3o.js";import"./FocusScope-Da3nqOUO.js";import"./useLocalizedStringFormatter-vFyNiPiP.js";import"./VisuallyHidden-DxWu5xEc.js";import"./flowComponent-BsMfbHRX.js";import"./context-rIsit77n.js";import"./useStatic-BCDrLUdV.js";import"./OverlayContextProvider-B8OuVkDx.js";import"./DialogTriggerView-CUqIg4o3.js";import"./dynamic-CjFFErYF.js";import"./Overlay-D07wrdaz.js";import"./useOverlayController-DYra3gnv.js";import"./LoadingSpinner-CRozfiA2.js";import"./IconWarning-BUxMadyi.js";import"./remote-O2EONUZN.js";import"./ButtonView-CX1Lh7Nh.js";import"./Flex-CqkyVaqo.js";import"./Text-B9qmJggM.js";import"./browser-DdUrC3oM.js";import"./EmulatedBoldText-BoMrbuLQ.js";import"./getActionGroupSlot-CPo9rPQE.js";import"./Heading-BBMu1zEG.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
