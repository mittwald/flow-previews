import{j as o}from"./iframe-DnKh_q8B.js";import{a as r,c as g,d as F,e as j,b as x,s as f}from"./lib-B7FRNroP.js";import{M}from"./Modal-Bh0-AiW1.js";import{A as C}from"./ActionGroup-Cv1d3BuW.js";import{B as t}from"./Button-B6Zpw5yd.js";import{H as b}from"./Heading-CB01boQE.js";import{C as S}from"./Content-Bf0HP8j5.js";import{A as n}from"./Action-B5Uq12lQ.js";import{C as k,M as h}from"./MenuItem-pzkZpSAZ.js";import{C as B}from"./ContextMenuTrigger-Bq0JAmU0.js";import"./ContextMenuSection-CPEZCChP.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-jX4CJ8wH.js";import"./Dialog-CHY6jywx.js";import"./Button-CX9zCyN4.js";import"./utils-BZc8lNcd.js";import"./index-DEpWzVfg.js";import"./clsx-B-dksMZM.js";import"./index-B5PweBHP.js";import"./ProgressBar-q35gM_9d.js";import"./Label-psEyVv54.js";import"./Hidden-qw9_5FuA.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-jAJMJRpZ.js";import"./context-CXoyow8k.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CFc3C1mq.js";import"./useFocus-BUIY7lOc.js";import"./useFocusRing-CZAaR2ds.js";import"./useFocusable-z3KWK7qq.js";import"./RSPContexts-wuQtf2CN.js";import"./OverlayArrow-2vICfEm4.js";import"./useControlledState-Dx9tzWN_.js";import"./Collection-BYEhy5Cw.js";import"./CollectionBuilder-3EWlmXpu.js";import"./SelectionIndicator-B7pzLsJc.js";import"./Separator-C3ZuVTcl.js";import"./Text-DobXAK13.js";import"./SelectionManager-Bvw1Vhun.js";import"./useEvent-DMn0oMqB.js";import"./useCollator-DnWbXdif.js";import"./FocusScope-Ddw08eyC.js";import"./useLocalizedStringFormatter-ClvwREm6.js";import"./VisuallyHidden-DfZCukwF.js";import"./flowComponent-NsMUrrXI.js";import"./context-CSnl0IXM.js";import"./useStatic-DlxvzgyM.js";import"./OverlayContextProvider-DSTl-nzt.js";import"./DialogTriggerView-Dgu_7owx.js";import"./dynamic-BE_n_a5m.js";import"./Overlay-CSNlzHah.js";import"./useOverlayController-BFPbq2tX.js";import"./LoadingSpinner-B--bUkFv.js";import"./IconWarning-C-jbuAIx.js";import"./remote-k0GnUd79.js";import"./ButtonView-DGagadkt.js";import"./Flex-BcyNSB4N.js";import"./Text-Drd9GdLo.js";import"./browser-BUa4T4SN.js";import"./EmulatedBoldText-C0uufS8q.js";import"./getActionGroupSlot-Dlj3DC4Q.js";import"./Heading-BwaoBSXr.js";import"./Popover-BSQWc1mY.js";import"./Switch-BVZiks4P.js";import"./useFieldComponent-ClvUady3.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Bu3ZhahO.js";import"./useFormReset-BbinXmMH.js";const Jo={title:"Actions/Action",component:n,render:y=>o.jsx(n,{...y,children:o.jsx(t,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},e={},s={args:{onAction:r}},c={args:{onAction:g}},i={args:{onAction:r,showFeedback:!0}},a={args:{onAction:g,showFeedback:!0}},m={args:{children:o.jsx(n,{onAction:f,children:x})}},p={args:{onAction:r,children:o.jsx(n,{onAction:r,children:x})}},d={args:{onAction:F}},u={args:{onAction:j}},l={render:()=>o.jsxs(n,{onAction:g,children:[o.jsxs(M,{slot:"actionConfirm",children:[o.jsx(b,{children:"Delete customer"}),o.jsx(S,{children:"Do you really want to delete the customer?"}),o.jsxs(C,{children:[o.jsx(t,{color:"danger",children:"Confirm"}),o.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(t,{color:"secondary",variant:"soft",children:"Delete customer"})]})},A={render:y=>o.jsxs(B,{children:[o.jsx(t,{children:"Trigger"}),o.jsxs(k,{...y,children:[o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Async"})}),o.jsx(n,{onAction:g,children:o.jsx(h,{children:"Async Long"})}),o.jsx(n,{onAction:r,children:o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Nested Async"})})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
