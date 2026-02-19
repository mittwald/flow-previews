import{j as o}from"./iframe-DepdzLEL.js";import{a as r,c as F,d as g,e as j,b as x,s as f}from"./lib-DUx0itoo.js";import"./ModalTrigger-CJNebYez.js";import{M}from"./Modal-BbNl1Qkg.js";import{A as C}from"./ActionGroup-C6xkxQp3.js";import{B as t}from"./Button-CNIywMH8.js";import{H as b}from"./Heading-BfiUETdQ.js";import{C as S}from"./Content-BP0iCj4e.js";import{A as n}from"./ActionBatch-CxGdjV-j.js";import{C as k,M as h}from"./MenuItem-BAI8GON0.js";import{C as B}from"./ContextMenuTrigger-QCL_t8W6.js";import"./ContextMenuSection-DuMO6oHS.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-BeYMVPU4.js";import"./Dialog-pPKxFXOM.js";import"./Button-BTig9cwD.js";import"./utils-7tdA0jB4.js";import"./index-BsHBlgok.js";import"./clsx-B-dksMZM.js";import"./index-QBVvmMGX.js";import"./ProgressBar-Db1s_185.js";import"./Label-DGPqobXV.js";import"./Hidden-Czdw4FHX.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B2Boz_gi.js";import"./context-BDIAQ50e.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BqHqHS4f.js";import"./useFocus-ZpAuijkN.js";import"./useFocusRing-DGi1wLvD.js";import"./useFocusable-Cun53ew4.js";import"./RSPContexts-C4BguXQB.js";import"./OverlayArrow-D9XOfekb.js";import"./useControlledState-BNsQxzmb.js";import"./Collection-CQf_iL2m.js";import"./CollectionBuilder-BRFKsZkG.js";import"./SelectionIndicator-D1BAj3_c.js";import"./Separator-Cs836uSa.js";import"./Text-CHX4WGB5.js";import"./SelectionManager-Y4qgtYQ4.js";import"./useEvent-DIoFJeOI.js";import"./useCollator-MpcrCLx0.js";import"./FocusScope-C6Ou1N9_.js";import"./useLocalizedStringFormatter-hW7UFah-.js";import"./VisuallyHidden-msEuPEko.js";import"./flowComponent-fKj6y8ty.js";import"./useOverlayController-Br9LJhfN.js";import"./useStatic-D2N_z3eO.js";import"./OverlayContextProvider-FdKPEOKm.js";import"./DialogTriggerView-C4EzYtrC.js";import"./dynamic-DyShJQHT.js";import"./Overlay-CViqvEV6.js";import"./LoadingSpinner-CFbq72U2.js";import"./IconWarning-DzJyip11.js";import"./remote-BQ4RO_kW.js";import"./ButtonView-DkAiozhy.js";import"./Flex-DV0RJgp7.js";import"./Text-DQklyFH_.js";import"./browser-DxvLCkxH.js";import"./EmulatedBoldText-MhUupop4.js";import"./getActionGroupSlot-DngwkT4-.js";import"./Heading-Dfg4FmbO.js";import"./Popover-D-HE80pU.js";import"./Switch-CTtGRWsg.js";import"./useFieldComponent-PSzBC9V7.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-3lRe43ig.js";import"./useFormReset-BQp6BNc9.js";const Jo={title:"Actions/Action",component:n,render:y=>o.jsx(n,{...y,children:o.jsx(t,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},e={},s={args:{onAction:r}},c={args:{onAction:g}},i={args:{onAction:r,showFeedback:!0}},a={args:{onAction:g,showFeedback:!0}},m={args:{children:o.jsx(n,{onAction:f,children:x})}},p={args:{onAction:r,children:o.jsx(n,{onAction:r,children:x})}},d={args:{onAction:j}},u={args:{onAction:F}},l={render:()=>o.jsxs(n,{onAction:g,children:[o.jsxs(M,{slot:"actionConfirm",children:[o.jsx(b,{children:"Delete customer"}),o.jsx(S,{children:"Do you really want to delete the customer?"}),o.jsxs(C,{children:[o.jsx(t,{color:"danger",children:"Confirm"}),o.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(t,{color:"secondary",variant:"soft",children:"Delete customer"})]})},A={render:y=>o.jsxs(B,{children:[o.jsx(t,{children:"Trigger"}),o.jsxs(k,{...y,children:[o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Async"})}),o.jsx(n,{onAction:g,children:o.jsx(h,{children:"Async Long"})}),o.jsx(n,{onAction:r,children:o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Nested Async"})})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
