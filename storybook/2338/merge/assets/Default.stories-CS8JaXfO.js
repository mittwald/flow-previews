import{j as o}from"./iframe-CEWg6_IX.js";import{a as r,c as F,d as g,e as j,b as x,s as f}from"./lib-hIiwLT8c.js";import"./ModalTrigger-Bc6_o2UZ.js";import{M}from"./Modal-BUEX4x6z.js";import{A as C}from"./ActionGroup-2A27ggL_.js";import{B as t}from"./Button-CA6AkUR_.js";import{H as b}from"./Heading-BWEcB93I.js";import{C as S}from"./Content-CRiMoq0F.js";import{A as n}from"./ActionBatch-CnX-7Tzc.js";import{C as k,M as h}from"./MenuItem-DxoPi8dd.js";import{C as B}from"./ContextMenuTrigger-NQQLpLoe.js";import"./ContextMenuSection-y3Qnt4sa.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-DGu3y4_r.js";import"./Dialog-0Ix26WHm.js";import"./Button-Dhdc5WDI.js";import"./utils-VWmQzJjV.js";import"./index-CBGYsq4Q.js";import"./clsx-B-dksMZM.js";import"./index-BYd0o8d1.js";import"./ProgressBar-U95AIiub.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B6JubenB.js";import"./context-BwTFrxK2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNr3g4sC.js";import"./useFocus-BQlkvxNG.js";import"./useFocusRing-6TkqSe16.js";import"./useFocusable-B3euEuZy.js";import"./RSPContexts-ulpMISZ-.js";import"./OverlayArrow-LwODxVqr.js";import"./useControlledState-DV7blYjC.js";import"./Collection-Wb3olWvE.js";import"./CollectionBuilder-BS3MrMhz.js";import"./SelectionIndicator-C5jgIoGq.js";import"./Separator-DyFTk6rC.js";import"./Text-B3jOd0w4.js";import"./SelectionManager-B6Y4EMPJ.js";import"./useCollator-bALXm-sp.js";import"./FocusScope-BNRdhUBQ.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./VisuallyHidden-DHhRta61.js";import"./flowComponent-BozMiJR4.js";import"./useOverlayController-BjtWEYCu.js";import"./useStatic-B6Ppl0UQ.js";import"./OverlayContextProvider-BkZKjsKR.js";import"./DialogTriggerView-59a06wTI.js";import"./dynamic-JOnDgprM.js";import"./Overlay-3y_zvGr_.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./IconWarning-D3143lfN.js";import"./remote-BClk6GLL.js";import"./ButtonView-BDWHTqnS.js";import"./Flex-CzqKXhE0.js";import"./Text-Bw_cIJde.js";import"./browser-D6O_MAcc.js";import"./EmulatedBoldText-DLcv393z.js";import"./getActionGroupSlot-CRNHQnN5.js";import"./Heading-Nh2qIPHf.js";import"./Popover-CBq8Jp6I.js";import"./Switch-DWHYvKIq.js";import"./useFieldComponent-BOMK2S5G.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-PGBw0AOX.js";import"./useFormReset-D1AT4nVs.js";const zo={title:"Actions/Action",component:n,render:y=>o.jsx(n,{...y,children:o.jsx(t,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},e={},s={args:{onAction:r}},c={args:{onAction:g}},i={args:{onAction:r,showFeedback:!0}},a={args:{onAction:g,showFeedback:!0}},m={args:{children:o.jsx(n,{onAction:f,children:x})}},p={args:{onAction:r,children:o.jsx(n,{onAction:r,children:x})}},d={args:{onAction:j}},u={args:{onAction:F}},l={render:()=>o.jsxs(n,{onAction:g,children:[o.jsxs(M,{slot:"actionConfirm",children:[o.jsx(b,{children:"Delete customer"}),o.jsx(S,{children:"Do you really want to delete the customer?"}),o.jsxs(C,{children:[o.jsx(t,{color:"danger",children:"Confirm"}),o.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(t,{color:"secondary",variant:"soft",children:"Delete customer"})]})},A={render:y=>o.jsxs(B,{children:[o.jsx(t,{children:"Trigger"}),o.jsxs(k,{...y,children:[o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Async"})}),o.jsx(n,{onAction:g,children:o.jsx(h,{children:"Async Long"})}),o.jsx(n,{onAction:r,children:o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Nested Async"})})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
