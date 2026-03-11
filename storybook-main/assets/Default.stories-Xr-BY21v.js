import{j as o}from"./iframe-BLisfkW1.js";import{a as r,c as F,d as g,e as j,b as x,s as f}from"./lib-KIXiR8qo.js";import"./ModalTrigger-Cns4vlEf.js";import{M}from"./Modal-C3_EO7YW.js";import{A as C}from"./ActionGroup-BXQPUWqY.js";import{B as t}from"./Button-BfYq4-Jl.js";import{H as b}from"./Heading-D7iYFS4a.js";import{C as S}from"./Content-B4EEZXPN.js";import{A as n}from"./ActionBatch-Ba3fo7J6.js";import{C as k,M as h}from"./MenuItem-DRz9rpZo.js";import{C as B}from"./ContextMenuTrigger-BY25kSqR.js";import"./ContextMenuSection-bY8Y-pvV.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-47H3bobw.js";import"./Dialog-YGNnE7N8.js";import"./Button-BryrJTx5.js";import"./utils-B2KexK2G.js";import"./index-DOES4bKx.js";import"./clsx-B-dksMZM.js";import"./index-CURFR8tK.js";import"./ProgressBar-DldYxOmc.js";import"./Label-BayswAfQ.js";import"./Hidden-DTcX35LP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DktisoZ5.js";import"./context-B09EtTwC.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bt2uh0Mh.js";import"./useFocus-CasiJiIj.js";import"./useFocusRing-whNl8W73.js";import"./useFocusable-2bJXkpaN.js";import"./RSPContexts-C6v4G0P9.js";import"./OverlayArrow-CazCWSIw.js";import"./useControlledState-BzKS6zrg.js";import"./Collection-B29ecyfu.js";import"./CollectionBuilder-CkN2XN_g.js";import"./SelectionIndicator-DkROylNb.js";import"./Separator-DUCS1p3N.js";import"./Text-CMQTkDl6.js";import"./SelectionManager-CZqcsdfY.js";import"./useEvent-DXG1g0h1.js";import"./useCollator-BipIKgaT.js";import"./FocusScope-CH3eRbFP.js";import"./useLocalizedStringFormatter-vseb4VB2.js";import"./VisuallyHidden-y8IU71vp.js";import"./flowComponent-DivMJame.js";import"./useOverlayController-UaqgI9Sz.js";import"./useStatic-Cf1wupkY.js";import"./OverlayContextProvider-DGMJcgiT.js";import"./DialogTriggerView-DSjjCQKo.js";import"./dynamic-B3kpKjwM.js";import"./Overlay-3FwDNFry.js";import"./LoadingSpinner-Bv9Y6jEa.js";import"./IconWarning-Chxh05Fa.js";import"./remote-fMZF2a4s.js";import"./ButtonView-DQ0cot0U.js";import"./Flex-CtHT3-Wb.js";import"./Text-BzdTXRF7.js";import"./browser-1YnzmFhG.js";import"./EmulatedBoldText-w1zEViUr.js";import"./getActionGroupSlot-JAeF61ot.js";import"./Heading-BRGk0Lny.js";import"./Popover-CG9tv1E3.js";import"./Switch-cT8WhVip.js";import"./useFieldComponent-DG2srt-t.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DrUVyNcG.js";import"./useFormReset-fweVV-SC.js";const Jo={title:"Actions/Action",component:n,render:y=>o.jsx(n,{...y,children:o.jsx(t,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},e={},s={args:{onAction:r}},c={args:{onAction:g}},i={args:{onAction:r,showFeedback:!0}},a={args:{onAction:g,showFeedback:!0}},m={args:{children:o.jsx(n,{onAction:f,children:x})}},p={args:{onAction:r,children:o.jsx(n,{onAction:r,children:x})}},d={args:{onAction:j}},u={args:{onAction:F}},l={render:()=>o.jsxs(n,{onAction:g,children:[o.jsxs(M,{slot:"actionConfirm",children:[o.jsx(b,{children:"Delete customer"}),o.jsx(S,{children:"Do you really want to delete the customer?"}),o.jsxs(C,{children:[o.jsx(t,{color:"danger",children:"Confirm"}),o.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(t,{color:"secondary",variant:"soft",children:"Delete customer"})]})},A={render:y=>o.jsxs(B,{children:[o.jsx(t,{children:"Trigger"}),o.jsxs(k,{...y,children:[o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Async"})}),o.jsx(n,{onAction:g,children:o.jsx(h,{children:"Async Long"})}),o.jsx(n,{onAction:r,children:o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Nested Async"})})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
