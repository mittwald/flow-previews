import{j as o}from"./iframe-EtTbRQoM.js";import{a as d,c as u,b as l,s as y}from"./lib-CIucluvC.js";import{M as h}from"./Modal-V1PNviii.js";import{A}from"./ActionGroup-Cl4D3H2T.js";import{B as p}from"./Button-DxuCaQyR.js";import{H as f}from"./Heading-YEToWG6x.js";import{C as F}from"./Content-BwQ1EB4k.js";import{A as r}from"./Action-CL-CoYGw.js";import"./index-nuYtCEEu.js";import"./OverlayTrigger-fEmiW_c4.js";import"./Dialog-D4gVf8vR.js";import"./Button-qX7xBgDX.js";import"./utils-C_hvyJpn.js";import"./index-DwnAt2PO.js";import"./clsx-B-dksMZM.js";import"./index-rMxpLDk9.js";import"./ProgressBar-C-f1QmIl.js";import"./Label-FPs7V2cE.js";import"./Hidden-BhWY_xu3.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-HEbrZrvP.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-sAonsHdy.js";import"./useFocus-9RWBE5qv.js";import"./useFocusRing-hCmULEnE.js";import"./useFocusable-Do_2l7DI.js";import"./RSPContexts-Cv7znJuu.js";import"./OverlayArrow-CczkULsk.js";import"./useControlledState-DmCe06Ai.js";import"./Collection-CmlnhQJV.js";import"./CollectionBuilder-DTV-m0tl.js";import"./SelectionIndicator-BOzSayKJ.js";import"./Separator-CwOt3VIi.js";import"./Text-CANjZEUs.js";import"./SelectionManager-DfS84ysN.js";import"./useEvent-DcRgbaUL.js";import"./useCollator-CjrbHKqV.js";import"./FocusScope-Dkurg4aB.js";import"./useLocalizedStringFormatter-FAUwXJff.js";import"./VisuallyHidden-B8Lwuqmn.js";import"./ControlledNotification-DztR7-dO.js";import"./flowComponent-CRP3amPt.js";import"./context-C1SllNhn.js";import"./useStatic-DxnBGf3l.js";import"./OverlayContextProvider-6Zh7EMbz.js";import"./DialogTriggerView-DtwpFE5k.js";import"./dynamic-Cv7GHFn6.js";import"./Overlay-C2ZjmJAP.js";import"./useOverlayController-BhlWBiph.js";import"./ClearPropsContextView-Bx4CA8qQ.js";import"./IconWarning-CO-lUcxm.js";import"./ButtonView-D15LOGJi.js";import"./getActionGroupSlot-CxKatSQe.js";import"./Text-CAO-zPwU.js";import"./browser-Cob99Do9.js";import"./EmulatedBoldText-rZpq4XPn.js";import"./LoadingSpinner-QwVO93wM.js";import"./Heading-DTQh2nx3.js";const Do={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const Lo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,c as Nested,i as NestedAsync,m as WithConfirmationModal,Lo as __namedExportsOrder,Do as default};
