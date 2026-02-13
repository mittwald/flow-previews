import{j as o}from"./iframe-C2cGCWBO.js";import{a as r,c as F,d as g,e as j,b as x,s as f}from"./lib-DTCKYqrA.js";import"./ModalTrigger-CbFSYAzC.js";import{M}from"./Modal-Dch_39m9.js";import{A as C}from"./ActionGroup-CWoZwwxK.js";import{B as t}from"./Button-B41LUuF3.js";import{H as b}from"./Heading-BMwLGtkc.js";import{C as S}from"./Content-CCqXW7YM.js";import{A as n}from"./ActionBatch-BZcBHaPT.js";import{C as k,M as h}from"./MenuItem-BVkkGfjr.js";import{C as B}from"./ContextMenuTrigger-C91aIj9h.js";import"./ContextMenuSection-DuK0dlwa.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-C08PeZoT.js";import"./Dialog-BW6BpcVd.js";import"./Button-BneP87GG.js";import"./utils-CPzpSZL2.js";import"./index-rbmoV-yM.js";import"./clsx-B-dksMZM.js";import"./index-Du1kNfMe.js";import"./ProgressBar-DV5MetAr.js";import"./Label-DeWWh5Nd.js";import"./Hidden-C_zHVHDn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DicB4RC2.js";import"./context-2EfdQWx2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BrmD8Kf2.js";import"./useFocus-O4uYrVbU.js";import"./useFocusRing-wtbg8X8X.js";import"./useFocusable-DwbuT13T.js";import"./RSPContexts-YUPb13EG.js";import"./OverlayArrow-DkMjnDr5.js";import"./useControlledState-MMDjipcl.js";import"./Collection-BNpysMuG.js";import"./CollectionBuilder-Bu0heHOT.js";import"./SelectionIndicator-vr7baVWi.js";import"./Separator-Dz7Bhpa-.js";import"./Text-D1LgYL-c.js";import"./SelectionManager-BVOuQNja.js";import"./useEvent-Brb253L4.js";import"./useCollator-CsE89UJT.js";import"./FocusScope-7k8F4i3d.js";import"./useLocalizedStringFormatter-BAIjrI3d.js";import"./VisuallyHidden-C7EnMW_k.js";import"./flowComponent-C6jxxEVz.js";import"./useOverlayController-CtyPLm8k.js";import"./useStatic-DUMwmPN3.js";import"./OverlayContextProvider-BBwaePGz.js";import"./DialogTriggerView-CAilZ6MB.js";import"./dynamic-DhyEqTLI.js";import"./Overlay-BChO2yc4.js";import"./LoadingSpinner-DIaaAh-V.js";import"./IconWarning-C4LD0r9W.js";import"./remote-w8RrxnGT.js";import"./ButtonView-Bho7TPlx.js";import"./Flex-D4R0lKsm.js";import"./Text-D3xXIOyH.js";import"./browser-BGhQMCSV.js";import"./EmulatedBoldText-CQEy9dVT.js";import"./getActionGroupSlot-C9frEoU7.js";import"./Heading-Dg4rLfib.js";import"./Popover-DJnPn-3r.js";import"./Switch-D9l8HAch.js";import"./useFieldComponent-D_KC3UxI.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DN8cgAFI.js";import"./useFormReset-BdRaO3QH.js";const Jo={title:"Actions/Action",component:n,render:y=>o.jsx(n,{...y,children:o.jsx(t,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},e={},s={args:{onAction:r}},c={args:{onAction:g}},i={args:{onAction:r,showFeedback:!0}},a={args:{onAction:g,showFeedback:!0}},m={args:{children:o.jsx(n,{onAction:f,children:x})}},p={args:{onAction:r,children:o.jsx(n,{onAction:r,children:x})}},d={args:{onAction:j}},u={args:{onAction:F}},l={render:()=>o.jsxs(n,{onAction:g,children:[o.jsxs(M,{slot:"actionConfirm",children:[o.jsx(b,{children:"Delete customer"}),o.jsx(S,{children:"Do you really want to delete the customer?"}),o.jsxs(C,{children:[o.jsx(t,{color:"danger",children:"Confirm"}),o.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(t,{color:"secondary",variant:"soft",children:"Delete customer"})]})},A={render:y=>o.jsxs(B,{children:[o.jsx(t,{children:"Trigger"}),o.jsxs(k,{...y,children:[o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Async"})}),o.jsx(n,{onAction:g,children:o.jsx(h,{children:"Async Long"})}),o.jsx(n,{onAction:r,children:o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Nested Async"})})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunction
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncLongFunction
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunction,
    showFeedback: true
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncLongFunction,
    showFeedback: true
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Action onAction={syncFunction}>{button}</Action>
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunction,
    children: <Action onAction={asyncFunction}>{button}</Action>
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: syncFunctionWithError
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunctionWithError
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: props => <ContextMenuTrigger>
      <Button>Trigger</Button>
      <ContextMenu {...props}>
        <Action onAction={asyncFunction}>
          <MenuItem>Async</MenuItem>
        </Action>
        <Action onAction={asyncLongFunction}>
          <MenuItem>Async Long</MenuItem>
        </Action>
        <Action onAction={asyncFunction}>
          <Action onAction={asyncFunction}>
            <MenuItem>Nested Async</MenuItem>
          </Action>
        </Action>
      </ContextMenu>
    </ContextMenuTrigger>
}`,...A.parameters?.docs?.source}}};const Ko=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","SyncError","AsyncError","WithConfirmationModal","InContextMenu"];export{s as Async,u as AsyncError,c as AsyncLong,a as AsyncLongWithFeedback,i as AsyncWithFeedback,e as Default,A as InContextMenu,m as Nested,p as NestedAsync,d as SyncError,l as WithConfirmationModal,Ko as __namedExportsOrder,Jo as default};
