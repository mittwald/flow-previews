import{j as o}from"./iframe-CIhdjqSz.js";import{a as r,c as F,d as g,e as j,b as x,s as f}from"./lib-CjNUITW5.js";import"./ModalTrigger-7L6y-1G7.js";import{M}from"./Modal-BPdWM4cS.js";import{A as C}from"./ActionGroup-CRpQMoSl.js";import{B as t}from"./Button--NFWCTgK.js";import{H as b}from"./Heading-DFMRUW3K.js";import{C as S}from"./Content-C_lJcoxE.js";import{A as n}from"./ActionBatch-DvjVnKvH.js";import{C as k,M as h}from"./MenuItem-JBoS3pEj.js";import{C as B}from"./ContextMenuTrigger-CCML0O9_.js";import"./ContextMenuSection-B32Hv_M2.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-DlE73CJz.js";import"./Dialog-BaKpGYJ_.js";import"./Button-DTpgNeLS.js";import"./utils-3Ll5mTsj.js";import"./index-OQlE9mt9.js";import"./clsx-B-dksMZM.js";import"./index-D2Zvq_HV.js";import"./ProgressBar-uXwD_3g9.js";import"./Label-D3zNzQRu.js";import"./Hidden-BpzDMW_9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-wcYinYgg.js";import"./context-C9Id__Ro.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BAXbDaCF.js";import"./useFocus-CB1MjZml.js";import"./useFocusRing-ChVqcxnp.js";import"./useFocusable-DArPbii_.js";import"./RSPContexts-FgSmVkcq.js";import"./OverlayArrow-C-y_PFkG.js";import"./useControlledState-Bhs9bgfq.js";import"./Collection-CCRp5-Dk.js";import"./CollectionBuilder-NdwpQU0D.js";import"./SelectionIndicator-BybBuRuw.js";import"./Separator-CvRy5z-e.js";import"./Text-BWZGL9q7.js";import"./SelectionManager-BQHZJ_z4.js";import"./useEvent-kjaJonnh.js";import"./useCollator-DNIGrhrL.js";import"./FocusScope-DnRcaDs5.js";import"./useLocalizedStringFormatter-BU74X8dt.js";import"./VisuallyHidden-Szd7uPuS.js";import"./flowComponent-BeD38kgF.js";import"./useOverlayController-DM_j6n2m.js";import"./useStatic-BON1q5w1.js";import"./OverlayContextProvider-D7G_WMz6.js";import"./DialogTriggerView-hhXUY9V9.js";import"./dynamic-DC2aGj60.js";import"./Overlay-knx40pXC.js";import"./LoadingSpinner-CnQRgWlh.js";import"./IconWarning-NrGPSND5.js";import"./remote-C6ukCFNy.js";import"./ButtonView-DCesTJ_4.js";import"./Flex-JT-R-kzn.js";import"./Text-DgrqnOua.js";import"./browser-BTfojbbK.js";import"./EmulatedBoldText-DYoDUL8u.js";import"./getActionGroupSlot-BLtRHpNa.js";import"./Heading-N3mW0_Ma.js";import"./Popover-BtssMKQJ.js";import"./Switch-C36cgj48.js";import"./useFieldComponent-BDBEatho.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BgmV9dKe.js";import"./useFormReset-CCc0UGFI.js";const Jo={title:"Actions/Action",component:n,render:y=>o.jsx(n,{...y,children:o.jsx(t,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},e={},s={args:{onAction:r}},c={args:{onAction:g}},i={args:{onAction:r,showFeedback:!0}},a={args:{onAction:g,showFeedback:!0}},m={args:{children:o.jsx(n,{onAction:f,children:x})}},p={args:{onAction:r,children:o.jsx(n,{onAction:r,children:x})}},d={args:{onAction:j}},u={args:{onAction:F}},l={render:()=>o.jsxs(n,{onAction:g,children:[o.jsxs(M,{slot:"actionConfirm",children:[o.jsx(b,{children:"Delete customer"}),o.jsx(S,{children:"Do you really want to delete the customer?"}),o.jsxs(C,{children:[o.jsx(t,{color:"danger",children:"Confirm"}),o.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(t,{color:"secondary",variant:"soft",children:"Delete customer"})]})},A={render:y=>o.jsxs(B,{children:[o.jsx(t,{children:"Trigger"}),o.jsxs(k,{...y,children:[o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Async"})}),o.jsx(n,{onAction:g,children:o.jsx(h,{children:"Async Long"})}),o.jsx(n,{onAction:r,children:o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Nested Async"})})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
