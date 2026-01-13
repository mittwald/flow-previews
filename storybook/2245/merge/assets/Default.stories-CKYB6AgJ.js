import{j as o}from"./iframe-DoM-BIwg.js";import{a as d,c as u,b as l,s as y}from"./lib-DoRamCUS.js";import{M as h}from"./Modal-C8c0_XNG.js";import{A}from"./ActionGroup-Bn43YAdA.js";import{B as p}from"./Button-CT5Y8uWS.js";import{H as f}from"./Heading-BBlWC_ix.js";import{C as F}from"./Content-CpENL-HX.js";import{A as r}from"./Action-KkrISRwO.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-6Bd8m9uJ.js";import"./Dialog-BESdyj17.js";import"./Button-BXmw0khj.js";import"./utils-D5il_mPj.js";import"./index-B9vDCLP1.js";import"./clsx-B-dksMZM.js";import"./index-BXuzzWnK.js";import"./ProgressBar-BJTn-fHy.js";import"./Label-DE9HqL8_.js";import"./Hidden-DgtxAirB.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cp7FQmHU.js";import"./context-CSqA08Z3.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-v4r7x8aW.js";import"./useFocus-ClxCJYgX.js";import"./useFocusRing-Bar7hbU_.js";import"./useFocusable-Cy5CQHPW.js";import"./RSPContexts-BpmX7ICR.js";import"./OverlayArrow-Di4XgwVw.js";import"./useControlledState--GEywRyg.js";import"./Collection-BU4jsGpu.js";import"./CollectionBuilder-DJn4hq3P.js";import"./SelectionIndicator-D4zCj7sf.js";import"./Separator-nJ0RJQXk.js";import"./Text-CiXcXSql.js";import"./SelectionManager-6w1Kk-2_.js";import"./useEvent-8dtJi2Bo.js";import"./useCollator-DkqZ4sPc.js";import"./FocusScope-DbX1j6h6.js";import"./useLocalizedStringFormatter-BiPCXUs5.js";import"./VisuallyHidden-GPtOnQVg.js";import"./flowComponent-Bw05Ss5u.js";import"./context-DP2lyaT2.js";import"./useStatic-BCI8JZji.js";import"./OverlayContextProvider-Evthga4H.js";import"./DialogTriggerView-0M0k7woF.js";import"./dynamic-CkeXur7S.js";import"./Overlay-DNYnXzeh.js";import"./useOverlayController-DJQxd8wz.js";import"./LoadingSpinner-CPr3D27j.js";import"./IconWarning-BD_MiEVG.js";import"./remote-BDffDiLd.js";import"./ButtonView-CsTLUfbB.js";import"./Flex-CgxoNoP2.js";import"./Text-lsEUOuuk.js";import"./browser-COZAGKbB.js";import"./EmulatedBoldText-DPZf3ZEq.js";import"./getActionGroupSlot-CjJPVShT.js";import"./Heading-Bf3wZM4z.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
