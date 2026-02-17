import{j as o}from"./iframe-olJof__V.js";import{a as r,c as F,d as g,e as j,b as x,s as f}from"./lib-DEsZ2JtC.js";import"./ModalTrigger-CBUxzRvi.js";import{M}from"./Modal-DS-pjQYs.js";import{A as C}from"./ActionGroup-7XqXhcJT.js";import{B as t}from"./Button-CPlz8rsS.js";import{H as b}from"./Heading-CFjejIim.js";import{C as S}from"./Content-BTv2gojb.js";import{A as n}from"./ActionBatch-DqsTFo-5.js";import{C as k,M as h}from"./MenuItem-CET-BlYw.js";import{C as B}from"./ContextMenuTrigger-DkBWWFGu.js";import"./ContextMenuSection-C9tKIY6H.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-CdRn1WXI.js";import"./Dialog-DOR07iZd.js";import"./Button-BzbIVXwM.js";import"./utils-B7tchdhx.js";import"./index-DXuGOHKQ.js";import"./clsx-B-dksMZM.js";import"./index-CQizCcaV.js";import"./ProgressBar-CgXlpLJ2.js";import"./Label-DdZBH8rR.js";import"./Hidden-DoUj_dUj.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CtYRRhYq.js";import"./context-DOTF4vQp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-UZLq5kUQ.js";import"./useFocus-C7qSpl6p.js";import"./useFocusRing-D32aTWMq.js";import"./useFocusable-3WtiVhvt.js";import"./RSPContexts-BVirgRiO.js";import"./OverlayArrow-B-0VQUib.js";import"./useControlledState-CGGJ5ydn.js";import"./Collection-WZVC-4xi.js";import"./CollectionBuilder-vpp5jjd8.js";import"./SelectionIndicator-D2HcZFFA.js";import"./Separator-8BcW__js.js";import"./Text-PinZmeRI.js";import"./SelectionManager-DXB33zuh.js";import"./useEvent-CNSbk4we.js";import"./useCollator-DxO-TF_t.js";import"./FocusScope-Db9L4ciT.js";import"./useLocalizedStringFormatter-DTXdFjR3.js";import"./VisuallyHidden-D0VqbVmf.js";import"./flowComponent-CoGNni0d.js";import"./useOverlayController-CA843Gf5.js";import"./useStatic-DVdbIJHO.js";import"./OverlayContextProvider-DbMF0xyh.js";import"./DialogTriggerView-DJfbuzoO.js";import"./dynamic-C_FBHMxE.js";import"./Overlay-CYa-63WO.js";import"./LoadingSpinner-CT-rb4W5.js";import"./IconWarning-Dxqo3db7.js";import"./remote-BFSWQwUW.js";import"./ButtonView-BwM21LNf.js";import"./Flex-6XeWCvWa.js";import"./Text-Dd-S15-B.js";import"./browser-IACFT9IC.js";import"./EmulatedBoldText-BFx3xjvZ.js";import"./getActionGroupSlot-CoFa2pz_.js";import"./Heading-CZbujKCp.js";import"./Popover-5M2oEFmF.js";import"./Switch-CtXhHT6w.js";import"./useFieldComponent-BI2nSVzd.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Dlp4u6PD.js";import"./useFormReset-BYGWiUrU.js";const Jo={title:"Actions/Action",component:n,render:y=>o.jsx(n,{...y,children:o.jsx(t,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},e={},s={args:{onAction:r}},c={args:{onAction:g}},i={args:{onAction:r,showFeedback:!0}},a={args:{onAction:g,showFeedback:!0}},m={args:{children:o.jsx(n,{onAction:f,children:x})}},p={args:{onAction:r,children:o.jsx(n,{onAction:r,children:x})}},d={args:{onAction:j}},u={args:{onAction:F}},l={render:()=>o.jsxs(n,{onAction:g,children:[o.jsxs(M,{slot:"actionConfirm",children:[o.jsx(b,{children:"Delete customer"}),o.jsx(S,{children:"Do you really want to delete the customer?"}),o.jsxs(C,{children:[o.jsx(t,{color:"danger",children:"Confirm"}),o.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(t,{color:"secondary",variant:"soft",children:"Delete customer"})]})},A={render:y=>o.jsxs(B,{children:[o.jsx(t,{children:"Trigger"}),o.jsxs(k,{...y,children:[o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Async"})}),o.jsx(n,{onAction:g,children:o.jsx(h,{children:"Async Long"})}),o.jsx(n,{onAction:r,children:o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Nested Async"})})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
