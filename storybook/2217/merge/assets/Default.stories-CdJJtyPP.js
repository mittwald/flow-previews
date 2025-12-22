import{j as o}from"./iframe-Du65Ph_c.js";import{a as d,c as u,b as l,s as y}from"./lib-BLGp4-ub.js";import{M as h}from"./Modal-C_Odsunt.js";import{A}from"./ActionGroup-CUUirHEC.js";import{B as p}from"./Button-2wmaPnFC.js";import{H as f}from"./Heading-t4nXMG5j.js";import{C as F}from"./Content-BHLNKpqX.js";import{A as r}from"./Action-BMmoeCN3.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-CM2nLyXn.js";import"./Dialog-BO9iihOE.js";import"./Button-CjwwJrCh.js";import"./utils-xIJEb5Gc.js";import"./index-XI88kJrR.js";import"./clsx-B-dksMZM.js";import"./index-c0t27COx.js";import"./ProgressBar-B4qFtVbo.js";import"./Label-D_GXaE34.js";import"./Hidden-BV9iY75y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BdNff0XI.js";import"./context-BMDcuGwa.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CyOin5iy.js";import"./useFocus-mAbeDdRN.js";import"./useFocusRing-B7cLewIC.js";import"./useFocusable-RoNPbAVl.js";import"./RSPContexts-CGKyxyrO.js";import"./OverlayArrow-CbRWYOrW.js";import"./useControlledState-Cdt3oZ6_.js";import"./Collection-C5ltbjdX.js";import"./CollectionBuilder-d6KQwCFJ.js";import"./SelectionIndicator-Cb43LM7W.js";import"./Separator-DKPq8LUH.js";import"./Text-Cl831mKA.js";import"./SelectionManager-BR7dbQPM.js";import"./useEvent-D0wfQKUV.js";import"./useCollator-DYYkh59M.js";import"./FocusScope-DUOtKQcD.js";import"./useLocalizedStringFormatter-Dhvhyrh1.js";import"./VisuallyHidden-rhukFLga.js";import"./flowComponent-CYbHZhXg.js";import"./context-Cb5nHwHn.js";import"./useStatic-B95N-aRU.js";import"./OverlayContextProvider-CsKpo_xf.js";import"./DialogTriggerView-efXOOibV.js";import"./dynamic-CtEU0XPC.js";import"./Overlay-g_Iibunn.js";import"./useOverlayController-D5h8n75v.js";import"./LoadingSpinner-DEfGApvw.js";import"./IconWarning-CGSd0Gik.js";import"./remote-D3fYDNUY.js";import"./ButtonView-Dgx7AxHv.js";import"./Flex--RpuLudL.js";import"./Text-CtX5enn3.js";import"./browser-57tL9X_d.js";import"./EmulatedBoldText-CITvecLd.js";import"./getActionGroupSlot-BXwxo_QL.js";import"./Heading-BTx9jAYe.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
