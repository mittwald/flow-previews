import{j as o}from"./iframe-CPZmCQj-.js";import{a as d,c as u,b as l,s as y}from"./lib-gVT6HpQz.js";import{M as h}from"./Modal-CryW_9V9.js";import{A}from"./ActionGroup-BEDNYTV6.js";import{B as p}from"./Button-CO0ZKbGC.js";import{H as f}from"./Heading-CTnOUdED.js";import{C as F}from"./Content-CcPX068H.js";import{A as r}from"./Action-C3sEJruT.js";import"./index-nuYtCEEu.js";import"./OverlayTrigger-Cze0ok7i.js";import"./Dialog-DJw1jmu7.js";import"./Button-BLjAzLtk.js";import"./utils-DbTuSxgD.js";import"./index-Ba68vLbY.js";import"./clsx-B-dksMZM.js";import"./index-Dx50g0n6.js";import"./ProgressBar-CVs_D_-w.js";import"./Label-DhGaeBi-.js";import"./Hidden-klXcLh_8.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeJHfKxc.js";import"./context-vwBy6rn7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-6Qpgo4V0.js";import"./useFocus-DSlim6kP.js";import"./useFocusRing-DtbYXXZs.js";import"./useFocusable-1MtRKrlE.js";import"./RSPContexts-gqgXzzK-.js";import"./OverlayArrow-K4lD0v3r.js";import"./useControlledState-BjliE2JI.js";import"./Collection-Ckm-o3oD.js";import"./CollectionBuilder-1xYKqHW3.js";import"./SelectionIndicator-DWNXk9hr.js";import"./Separator-BkoAy9r0.js";import"./Text-ev6zCoFy.js";import"./SelectionManager-D3rhuTf5.js";import"./useEvent-Bk3E68pD.js";import"./useCollator-CE-f4Kw6.js";import"./FocusScope-W4GOB1Wo.js";import"./useLocalizedStringFormatter-c3k8SeMC.js";import"./VisuallyHidden-m06vE6aQ.js";import"./ControlledNotification-EmmTuegF.js";import"./flowComponent-DZ7Ps0CL.js";import"./context-7pI23nLQ.js";import"./useStatic-BEtxpUKF.js";import"./OverlayContextProvider-Bz_eXqqG.js";import"./DialogTriggerView-D5-PWRoF.js";import"./dynamic-C0WBJwRj.js";import"./Overlay-BvR5tikF.js";import"./useOverlayController-DCVLgcvS.js";import"./ClearPropsContextView-C8p-nSKM.js";import"./ClearPropsContext-DZV6h8aR.js";import"./IconWarning-BHYwQlMQ.js";import"./ButtonView-BmTwnybw.js";import"./getActionGroupSlot-C_Q_KyMY.js";import"./Text-cGw-MBFK.js";import"./browser-Vbuqg8Bp.js";import"./EmulatedBoldText-D8f43xv1.js";import"./LoadingSpinner-Cx2qWY44.js";import"./Heading-3nGV8T5A.js";const So={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
