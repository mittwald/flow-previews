import{j as o}from"./iframe-CywxDTj6.js";import{a as d,c as u,b as l,s as y}from"./lib-DiYTS_4d.js";import{M as h}from"./Modal-BSmKy0xq.js";import{A}from"./ActionGroup-C_Gw-9qw.js";import{B as p}from"./Button-Dt6rqZC2.js";import{H as f}from"./Heading-DXOJNO6C.js";import{C as F}from"./Content-J8ZeJdWr.js";import{A as r}from"./Action-DyuzWneU.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-DpHz--ek.js";import"./Dialog-RfbYVzK-.js";import"./Button-DzvzizsP.js";import"./utils-JmAwA3ix.js";import"./index-BVyD66xE.js";import"./clsx-B-dksMZM.js";import"./index-CFicy-UB.js";import"./ProgressBar-BoAFCcAD.js";import"./Label-B7but0VW.js";import"./Hidden-D_vom6ZC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CtuLxX2S.js";import"./context-Wz-N3Tdz.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CStV9ujD.js";import"./useFocus-DDJfJTZx.js";import"./useFocusRing-D1WKjA4v.js";import"./useFocusable-D7CLIfGa.js";import"./RSPContexts-DB0ICqF0.js";import"./OverlayArrow-kC1F2-h6.js";import"./useControlledState-CrIAtAXB.js";import"./Collection-DZTo--rr.js";import"./CollectionBuilder-CNb94HNq.js";import"./SelectionIndicator-B2WWcQye.js";import"./Separator-DF0yS6SS.js";import"./Text-Dc57gZlo.js";import"./SelectionManager-Mk_lDA9T.js";import"./useEvent-CDXAxsds.js";import"./useCollator-Dm-KYvmX.js";import"./FocusScope-CPNFfVyd.js";import"./useLocalizedStringFormatter-OykjdJOp.js";import"./VisuallyHidden-CBo5v6jz.js";import"./flowComponent-DIqRYGZg.js";import"./context-DM4I0BsB.js";import"./useStatic-B4t8cENg.js";import"./OverlayContextProvider-C85v0gvj.js";import"./DialogTriggerView-Dc7AfJYY.js";import"./dynamic-D64zpBY8.js";import"./Overlay-d3FO9rxx.js";import"./useOverlayController-CQzVIUEY.js";import"./LoadingSpinner-Byj--1Pk.js";import"./IconWarning-BQFONsdl.js";import"./remote-DxJecAWu.js";import"./ButtonView-DTqaotBM.js";import"./Flex-7zANrPzg.js";import"./Text-vlJOJK2L.js";import"./browser-CaezisB_.js";import"./EmulatedBoldText-Vtu08ir6.js";import"./getActionGroupSlot-CAhf_Uni.js";import"./Heading-C30wQAmC.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
