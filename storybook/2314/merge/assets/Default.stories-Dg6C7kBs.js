import{j as o}from"./iframe-BnHQGzj-.js";import{a as r,c as F,d as g,e as j,b as x,s as f}from"./lib-8ahJZABy.js";import{M}from"./Modal-BpqGHcEc.js";import{A as C}from"./ActionGroup-BPljKUZx.js";import{B as t}from"./Button-kOzdzwoL.js";import{H as b}from"./Heading-2AT3piVo.js";import{C as S}from"./Content-CsNbWnd_.js";import{A as n}from"./Action-D5FY68jf.js";import{C as k,M as h}from"./MenuItem-DeAYTfXe.js";import{C as B}from"./ContextMenuTrigger-BXy8EQiw.js";import"./ContextMenuSection-BQD1q2_K.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-DgkWH0DW.js";import"./Dialog-vlYkkLZ8.js";import"./Button-7nIxjvHJ.js";import"./utils-B_drgFmA.js";import"./index-B4eSx5RY.js";import"./clsx-B-dksMZM.js";import"./index-CR3_Geu_.js";import"./ProgressBar-V752D4mF.js";import"./Label-C4kylnhO.js";import"./Hidden-DGNiPayS.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpMFroVF.js";import"./context-oT0KmQcZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DW43gzrd.js";import"./useFocus-BQLqug8q.js";import"./useFocusRing-BtYlF30D.js";import"./useFocusable-CpiznpYH.js";import"./RSPContexts-DJrv2Up2.js";import"./OverlayArrow-CU__1Pr_.js";import"./useControlledState-ARGAgX5I.js";import"./Collection-D7DmweA7.js";import"./CollectionBuilder-Dmus25Kx.js";import"./SelectionIndicator-Bje3agQK.js";import"./Separator-DEQQD5jL.js";import"./Text-CP9lFNhL.js";import"./SelectionManager-D547R46g.js";import"./useEvent-DbwR8Qxp.js";import"./useCollator-B-3R_2dL.js";import"./FocusScope-BV-dArZv.js";import"./useLocalizedStringFormatter-DfUxbFDU.js";import"./VisuallyHidden-DN_pHWhj.js";import"./flowComponent-B3zgfniW.js";import"./context-CLHbEMzO.js";import"./useStatic-CXOpTYPY.js";import"./OverlayContextProvider-DVcP4fWo.js";import"./DialogTriggerView-bkG5XCiq.js";import"./dynamic-Dg_y_eXk.js";import"./Overlay-D1UMujS-.js";import"./useOverlayController-nmD6fAp8.js";import"./LoadingSpinner-DoB6VVvS.js";import"./IconWarning-BD5ZgLZv.js";import"./remote-DzOTiMGq.js";import"./ButtonView-CPuOwsd2.js";import"./Flex-4iKkE0gS.js";import"./Text-BWqTdGF3.js";import"./browser-Byd_T3zS.js";import"./EmulatedBoldText-B2gQbs-b.js";import"./getActionGroupSlot-DFydpqIy.js";import"./Heading-BZTJ56jD.js";import"./Popover-By64ee4S.js";import"./Switch-BCdQfd5r.js";import"./useFieldComponent-BKOZgMTQ.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-e3rXJv8v.js";import"./useFormReset-C2cP98Fi.js";const Jo={title:"Actions/Action",component:n,render:y=>o.jsx(n,{...y,children:o.jsx(t,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},e={},s={args:{onAction:r}},c={args:{onAction:g}},i={args:{onAction:r,showFeedback:!0}},a={args:{onAction:g,showFeedback:!0}},m={args:{children:o.jsx(n,{onAction:f,children:x})}},p={args:{onAction:r,children:o.jsx(n,{onAction:r,children:x})}},d={args:{onAction:j}},u={args:{onAction:F}},l={render:()=>o.jsxs(n,{onAction:g,children:[o.jsxs(M,{slot:"actionConfirm",children:[o.jsx(b,{children:"Delete customer"}),o.jsx(S,{children:"Do you really want to delete the customer?"}),o.jsxs(C,{children:[o.jsx(t,{color:"danger",children:"Confirm"}),o.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(t,{color:"secondary",variant:"soft",children:"Delete customer"})]})},A={render:y=>o.jsxs(B,{children:[o.jsx(t,{children:"Trigger"}),o.jsxs(k,{...y,children:[o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Async"})}),o.jsx(n,{onAction:g,children:o.jsx(h,{children:"Async Long"})}),o.jsx(n,{onAction:r,children:o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Nested Async"})})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
