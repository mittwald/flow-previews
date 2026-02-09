import{j as o}from"./iframe-C-RKPwSE.js";import{a as r,c as g,d as F,e as j,b as x,s as f}from"./lib-CRTtkfao.js";import{M}from"./Modal-D4PQjqqh.js";import{A as C}from"./ActionGroup-CdZy8cFO.js";import{B as t}from"./Button-C4QFurWq.js";import{H as b}from"./Heading-BLLuHX2c.js";import{C as S}from"./Content-E3I6lJAa.js";import{A as n}from"./Action-fo4y3mrQ.js";import{C as k,M as h}from"./MenuItem-B243Bmrf.js";import{C as B}from"./ContextMenuTrigger-GgQv_FW0.js";import"./ContextMenuSection-D3zQaczq.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-DlhOnJ8b.js";import"./Dialog-5IYWsYFe.js";import"./Button-BUrsQ2n2.js";import"./utils-BNo7v4Co.js";import"./index-ChFaffKJ.js";import"./clsx-B-dksMZM.js";import"./index-NcfLMdM4.js";import"./ProgressBar-CT-OPPKM.js";import"./Label-BVYBl4lk.js";import"./Hidden-0w5RaPP8.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DvGejoW4.js";import"./context-CG0zmStT.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D8JiKPWZ.js";import"./useFocus-EK5CVku_.js";import"./useFocusRing-CPvrkvyz.js";import"./useFocusable-BqhdVXbn.js";import"./RSPContexts-7oABi43d.js";import"./OverlayArrow-zXeQXnR5.js";import"./useControlledState-PGxEdwVp.js";import"./Collection-CZ-kw58d.js";import"./CollectionBuilder-DCVYcT7j.js";import"./SelectionIndicator-CCq6JAG-.js";import"./Separator-HdZXbs1f.js";import"./Text-CWybMa0K.js";import"./SelectionManager-CqNsU9e7.js";import"./useEvent-DJpgi1nc.js";import"./useCollator-CE95nY3l.js";import"./FocusScope-DV38vf4J.js";import"./useLocalizedStringFormatter-DtbvJlWC.js";import"./VisuallyHidden-lhIVNasT.js";import"./flowComponent-_zksvKqG.js";import"./context-C3Gge9in.js";import"./useStatic-CxBkvBNE.js";import"./OverlayContextProvider-wIYWseIw.js";import"./DialogTriggerView-PE2cTyQH.js";import"./dynamic-D4AljtfH.js";import"./Overlay-JziVBlUz.js";import"./useOverlayController-DFCL4B8t.js";import"./LoadingSpinner-B5fSKp-d.js";import"./IconWarning-B9kpDIcu.js";import"./remote-Dp4k7gKv.js";import"./ButtonView-lpEgsJ9B.js";import"./Flex-Ldqn0OZX.js";import"./Text-DceSOphz.js";import"./browser-BU-qC_3h.js";import"./EmulatedBoldText-CGXBgVzv.js";import"./getActionGroupSlot-CQZlUX1Z.js";import"./Heading-CcYcuTte.js";import"./Popover-IIDmJsK0.js";import"./Switch-BdeEEVcE.js";import"./useFieldComponent-ILpXs27H.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B9j8JfGT.js";import"./useFormReset-Bo6mTD_0.js";const Jo={title:"Actions/Action",component:n,render:y=>o.jsx(n,{...y,children:o.jsx(t,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},e={},s={args:{onAction:r}},c={args:{onAction:g}},i={args:{onAction:r,showFeedback:!0}},a={args:{onAction:g,showFeedback:!0}},m={args:{children:o.jsx(n,{onAction:f,children:x})}},p={args:{onAction:r,children:o.jsx(n,{onAction:r,children:x})}},d={args:{onAction:F}},u={args:{onAction:j}},l={render:()=>o.jsxs(n,{onAction:g,children:[o.jsxs(M,{slot:"actionConfirm",children:[o.jsx(b,{children:"Delete customer"}),o.jsx(S,{children:"Do you really want to delete the customer?"}),o.jsxs(C,{children:[o.jsx(t,{color:"danger",children:"Confirm"}),o.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(t,{color:"secondary",variant:"soft",children:"Delete customer"})]})},A={render:y=>o.jsxs(B,{children:[o.jsx(t,{children:"Trigger"}),o.jsxs(k,{...y,children:[o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Async"})}),o.jsx(n,{onAction:g,children:o.jsx(h,{children:"Async Long"})}),o.jsx(n,{onAction:r,children:o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Nested Async"})})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
