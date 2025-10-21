import{j as o}from"./iframe-CMcq8v1f.js";import{a as d,c as u,b as l,s as y}from"./lib-4AsPcJmI.js";import{M as h}from"./Modal-Cn4Odf1L.js";import{A}from"./ActionGroup-DppP5Nb_.js";import{B as p}from"./Button-CRhbM7FI.js";import{H as f}from"./Heading-B3YRxumr.js";import{C as F}from"./Content-CagAH8x5.js";import{A as r}from"./Action-DzVfKIry.js";import"./index-nuYtCEEu.js";import"./OverlayTrigger-CxCtI9-h.js";import"./Dialog-Drh022ms.js";import"./Button-qWTNe4li.js";import"./utils-B4_KO4f3.js";import"./index-UsNUevoW.js";import"./clsx-B-dksMZM.js";import"./index-Tcjlyiep.js";import"./ProgressBar-DGR0UqD3.js";import"./Label-CtMkNZ5K.js";import"./Hidden-BSe2pCrZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-MLAtSIJy.js";import"./context-Bckjq63R.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bqdsvk60.js";import"./useFocus-B0Qlm3zv.js";import"./useFocusRing-CoJ5esee.js";import"./useFocusable-DlaONHPB.js";import"./RSPContexts-DoqEYCaI.js";import"./OverlayArrow-Czusrgg9.js";import"./useControlledState-C8UmWEhe.js";import"./Collection-lzDPGY_z.js";import"./CollectionBuilder-DClya-CG.js";import"./SelectionIndicator-npitMQ6K.js";import"./Separator-B5umkblU.js";import"./Text-CkmSClwy.js";import"./SelectionManager-CYX1bfTV.js";import"./useEvent-DWTRHc2N.js";import"./useCollator-DTERHYIY.js";import"./FocusScope-BZyWBR-T.js";import"./useLocalizedStringFormatter-BoDSEWEG.js";import"./VisuallyHidden-Dy6kQkYD.js";import"./ControlledNotification-B4XPi9m7.js";import"./flowComponent-DAEI1NYm.js";import"./context-haW4s5UJ.js";import"./useStatic-CKvWQ5ch.js";import"./OverlayContextProvider-CrE8gLZT.js";import"./DialogTriggerView-lwv7ss23.js";import"./dynamic-FUMijUiW.js";import"./Overlay-BdAi3wg_.js";import"./useOverlayController-B6qJG6eL.js";import"./ClearPropsContextView-Cy6OLcLC.js";import"./ClearPropsContext-CU9ecYMv.js";import"./IconWarning-pzLTBmMV.js";import"./ButtonView-DRYamufn.js";import"./getActionGroupSlot-CSYISPXH.js";import"./Text-DOkc_YZA.js";import"./browser-BnbqEoZX.js";import"./EmulatedBoldText-DAg28Pal.js";import"./LoadingSpinner-DgAvzAIP.js";import"./Heading-CmiL6R02.js";const So={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
