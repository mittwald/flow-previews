import{j as o}from"./iframe-C_YE0yRE.js";import{a as r,c as F,d as g,e as j,b as x,s as f}from"./lib-DuaLllgL.js";import{M}from"./Modal-wdhna7c-.js";import{A as C}from"./ActionGroup-BYxz3pVX.js";import{B as t}from"./Button-D40FTP7t.js";import{H as b}from"./Heading-Bwe8YU0o.js";import{C as S}from"./Content-F3e3WkxK.js";import{A as n}from"./Action-CzLuBWBI.js";import{C as k,M as h}from"./MenuItem-C8HSkuUG.js";import{C as B}from"./ContextMenuTrigger-G_k9Jgni.js";import"./ContextMenuSection-DRxdJG8v.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-Cf8TPiFY.js";import"./Dialog-BXH836dM.js";import"./Button-DRed6E24.js";import"./utils-DHqPz2V6.js";import"./index-ChMIoTzt.js";import"./clsx-B-dksMZM.js";import"./index-C1o6XGyU.js";import"./ProgressBar-kMuFl8PJ.js";import"./Label-F1_SF2kS.js";import"./Hidden-C0GYzrmR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C_Wx6KRi.js";import"./context-BsGh4Cu8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DNy1k_Tf.js";import"./useFocus-CNnZns0Y.js";import"./useFocusRing-BwrpFxJK.js";import"./useFocusable-CsoKnWSE.js";import"./RSPContexts-Bttm1G3N.js";import"./OverlayArrow-W6M7e9jX.js";import"./useControlledState-8IU_97yn.js";import"./Collection-0o2bfvEG.js";import"./CollectionBuilder-XRWmKPs0.js";import"./SelectionIndicator-DJtaN3Cu.js";import"./Separator-Wmo2b2bK.js";import"./Text-BXWHLDC_.js";import"./SelectionManager-CtZLz8is.js";import"./useEvent-DLbjVv1l.js";import"./useCollator-Be000Qje.js";import"./FocusScope-DmUSx-ox.js";import"./useLocalizedStringFormatter-D3Mabo4d.js";import"./VisuallyHidden-DZpEB13Q.js";import"./flowComponent-BmGOFz_C.js";import"./context-CDhP7Jox.js";import"./useStatic-C9zmt-CB.js";import"./OverlayContextProvider-BAAkSlrq.js";import"./DialogTriggerView-BiUKHl-a.js";import"./dynamic-DNhRkZnt.js";import"./Overlay-CI7W6mo1.js";import"./useOverlayController-DmoYfzmu.js";import"./LoadingSpinner-CWKEQFJy.js";import"./IconWarning-Cxe6oNxX.js";import"./remote-C68UFTqR.js";import"./ButtonView-U1F2-uB-.js";import"./Flex-LL1Hy7tF.js";import"./Text-DHPE0I2s.js";import"./browser-BLJ3u5oR.js";import"./EmulatedBoldText-CeaRH1vH.js";import"./getActionGroupSlot-C_onwoh9.js";import"./Heading-BsEG12w_.js";import"./Popover-BcERq8Yi.js";import"./Switch-ChyQ_IKG.js";import"./useFieldComponent-CWA258Fl.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-B8Rf9xQv.js";import"./useFormReset-CEMPEkJX.js";const Jo={title:"Actions/Action",component:n,render:y=>o.jsx(n,{...y,children:o.jsx(t,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},e={},s={args:{onAction:r}},c={args:{onAction:g}},i={args:{onAction:r,showFeedback:!0}},a={args:{onAction:g,showFeedback:!0}},m={args:{children:o.jsx(n,{onAction:f,children:x})}},p={args:{onAction:r,children:o.jsx(n,{onAction:r,children:x})}},d={args:{onAction:j}},u={args:{onAction:F}},l={render:()=>o.jsxs(n,{onAction:g,children:[o.jsxs(M,{slot:"actionConfirm",children:[o.jsx(b,{children:"Delete customer"}),o.jsx(S,{children:"Do you really want to delete the customer?"}),o.jsxs(C,{children:[o.jsx(t,{color:"danger",children:"Confirm"}),o.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(t,{color:"secondary",variant:"soft",children:"Delete customer"})]})},A={render:y=>o.jsxs(B,{children:[o.jsx(t,{children:"Trigger"}),o.jsxs(k,{...y,children:[o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Async"})}),o.jsx(n,{onAction:g,children:o.jsx(h,{children:"Async Long"})}),o.jsx(n,{onAction:r,children:o.jsx(n,{onAction:r,children:o.jsx(h,{children:"Nested Async"})})})]})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
