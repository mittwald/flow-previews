import{j as o}from"./iframe-DBOgS3cI.js";import{a as r,c as F,d as g,e as j,b as x,s as f}from"./lib-B5Y3Vwdw.js";import"./ModalTrigger-Cyw9N_AB.js";import{M}from"./Modal-3YZrkyAE.js";import{A as C}from"./ActionGroup-B1DNkudK.js";import{B as t}from"./Button-DeSyDtjE.js";import{H as b}from"./Heading-BbxqBEBp.js";import{C as S}from"./Content-DrBXQyIN.js";import{A as n}from"./ActionBatch-C1BOMxBF.js";import{C as k,M as h}from"./MenuItem-DrhMcXlQ.js";import{C as B}from"./ContextMenuTrigger-BTpScWVR.js";import"./ContextMenuSection-DNl9G5pZ.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-B4nPvJJx.js";import"./Dialog-DyC1f_Bj.js";import"./Button-Dkv5VJcx.js";import"./utils-BhJeINWq.js";import"./index-Swo0Tmsl.js";import"./clsx-B-dksMZM.js";import"./index-2oGrDlIx.js";import"./ProgressBar-CW3L6DbF.js";import"./Label-DiLXicnZ.js";import"./Hidden-DDnoFhwK.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClWLYl61.js";import"./context-BFw_9KSH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-me2_PexI.js";import"./useFocus-C3U4okCI.js";import"./useFocusRing-CgHq_nb-.js";import"./useFocusable-Jw6d-A2p.js";import"./RSPContexts-Dpo7G8Um.js";import"./OverlayArrow-B-9JWNCe.js";import"./useControlledState-Pjvp5Vn-.js";import"./Collection-DWSmaXut.js";import"./CollectionBuilder-CEj6NMcL.js";import"./SelectionIndicator-CIbZ7UsS.js";import"./Separator-BkiuZI1g.js";import"./Text-TZlAM5yA.js";import"./SelectionManager-CG0jsfrs.js";import"./useCollator-_4fj7BF8.js";import"./FocusScope-CHtKZ_QX.js";import"./useLocalizedStringFormatter-BAHslQ_i.js";import"./VisuallyHidden-CQS9Xiyf.js";import"./flowComponent-D2rRGmRJ.js";import"./useOverlayController-CBPma3tn.js";import"./useStatic-_FEyJ1iK.js";import"./OverlayContextProvider-WXLLB1Pe.js";import"./DialogTriggerView-D_mi5HIo.js";import"./dynamic-Daa1kuSR.js";import"./Overlay-BcCO2Gjo.js";import"./LoadingSpinner-BMYl670W.js";import"./IconWarning-Bt9IWQ3I.js";import"./remote-CBP3xLJb.js";import"./ButtonView-8BynxnF3.js";import"./Flex-BqynvX0H.js";import"./Text-V6WF8rgy.js";import"./browser-aVPMedyb.js";import"./EmulatedBoldText-DZYRdmWA.js";import"./getActionGroupSlot-BVP40Z09.js";import"./Heading-BTHBDnxA.js";import"./Popover-BfI_0-2O.js";import"./Switch-Dz00-TDx.js";import"./useFieldComponent-pONIfnVv.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-iWMvozdM.js";import"./useFormReset-M_TceD0b.js";const zo={title:"Actions/Action",component:n,render:y=>o.jsx(n,{...y,children:o.jsx(t,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},e={},s={args:{onAction:r}},c={args:{onAction:g}},i={args:{onAction:r,showFeedback:!0}},a={args:{onAction:g,showFeedback:!0}},m={args:{children:o.jsx(n,{onAction:f,children:x})}},p={args:{onAction:r,children:o.jsx(n,{onAction:r,children:x})}},d={args:{onAction:j}},u={args:{onAction:F}},l={render:()=>o.jsxs(n,{onAction:g,children:[o.jsxs(M,{slot:"actionConfirm",children:[o.jsx(b,{children:"Delete customer"}),o.jsx(S,{children:"Do you really want to delete the customer?"}),o.jsxs(C,{children:[o.jsx(t,{color:"danger",children:"Confirm"}),o.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(t,{color:"secondary",variant:"soft",children:"Delete customer"})]})},A={render:y=>o.jsxs(B,{children:[o.jsx(t,{children:"Trigger"}),o.jsxs(k,{...y,children:[o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Async"})}),o.jsx(n,{onAction:g,children:o.jsx(h,{children:"Async Long"})}),o.jsx(n,{onAction:r,children:o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Nested Async"})})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};const Jo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","SyncError","AsyncError","WithConfirmationModal","InContextMenu"];export{s as Async,u as AsyncError,c as AsyncLong,a as AsyncLongWithFeedback,i as AsyncWithFeedback,e as Default,A as InContextMenu,m as Nested,p as NestedAsync,d as SyncError,l as WithConfirmationModal,Jo as __namedExportsOrder,zo as default};
