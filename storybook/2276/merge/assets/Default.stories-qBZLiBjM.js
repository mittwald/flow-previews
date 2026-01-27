import{j as o}from"./iframe-BbrP11p-.js";import{a as l,c as A,d as h,e as F,b as g,s as f}from"./lib-C-dQ4cOZ.js";import{M as x}from"./Modal-BXlcWO8o.js";import{A as b}from"./ActionGroup-aeCzi1SV.js";import{B as u}from"./Button-D_6ZCoU5.js";import{H as j}from"./Heading-DRj7axTi.js";import{C as S}from"./Content-BciwZ-cK.js";import{A as r}from"./Action-DGTK2X9F.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-BZQRt9cD.js";import"./Dialog-BH0tiGTi.js";import"./Button-DQobJtX3.js";import"./utils-CfXF9mMB.js";import"./index-l4GzuhKJ.js";import"./clsx-B-dksMZM.js";import"./index-CvmJvI2t.js";import"./ProgressBar-DY9U0Kry.js";import"./Label-C8vxG_o1.js";import"./Hidden-6YtfGJCG.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ChwTXcaC.js";import"./context-Cg0av1qu.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-VHqnVNy0.js";import"./useFocus-DdYA68cd.js";import"./useFocusRing-D-e5pHmS.js";import"./useFocusable-ssdBLHPa.js";import"./RSPContexts-D7TvdvVL.js";import"./OverlayArrow-C2TLtRQj.js";import"./useControlledState-CrzzGVbO.js";import"./Collection-C9vt1D1N.js";import"./CollectionBuilder-BqHvMLco.js";import"./SelectionIndicator-DLJIVGG7.js";import"./Separator-BdjTrZkK.js";import"./Text-BmgQOLJ4.js";import"./SelectionManager-C0oyBRkM.js";import"./useEvent-eSZL9DrQ.js";import"./useCollator-BxU86O8r.js";import"./FocusScope-DtyxLM97.js";import"./useLocalizedStringFormatter-au7M1iG_.js";import"./VisuallyHidden-BCVFUf4T.js";import"./flowComponent-Bjf10jjx.js";import"./context-DfqDLyvd.js";import"./useStatic-DG6eeeN5.js";import"./OverlayContextProvider-CX8G0M5v.js";import"./DialogTriggerView-DU_GRFLv.js";import"./dynamic-CazQQjW9.js";import"./Overlay-uX1AQSFE.js";import"./useOverlayController-BZ__G9XQ.js";import"./LoadingSpinner-CoKKKOJW.js";import"./IconWarning-BeRGE0lU.js";import"./remote-BUE50-N_.js";import"./ButtonView-vY_sxMN2.js";import"./Flex-DYlJ_0Ym.js";import"./Text-BLzGfhm5.js";import"./browser-CKsvW9Gw.js";import"./EmulatedBoldText-j9VeSllR.js";import"./getActionGroupSlot-BG0RRSMm.js";import"./Heading-qDkwaMZ2.js";const vo={title:"Actions/Action",component:r,render:y=>o.jsx(r,{...y,children:o.jsx(u,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},n={},t={args:{onAction:l}},e={args:{onAction:A}},s={args:{onAction:l,showFeedback:!0}},c={args:{onAction:A,showFeedback:!0}},a={args:{children:o.jsx(r,{onAction:f,children:g})}},i={args:{onAction:l,children:o.jsx(r,{onAction:l,children:g})}},m={args:{onAction:h}},p={args:{onAction:F}},d={render:()=>o.jsxs(r,{onAction:A,children:[o.jsxs(x,{slot:"actionConfirm",children:[o.jsx(j,{children:"Delete customer"}),o.jsx(S,{children:"Do you really want to delete the customer?"}),o.jsxs(b,{children:[o.jsx(u,{color:"danger",children:"Confirm"}),o.jsx(u,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(u,{color:"secondary",variant:"soft",children:"Delete customer"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunction
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncLongFunction
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunction,
    showFeedback: true
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncLongFunction,
    showFeedback: true
  }
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Action onAction={syncFunction}>{button}</Action>
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunction,
    children: <Action onAction={asyncFunction}>{button}</Action>
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: syncFunctionWithError
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunctionWithError
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const wo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","SyncError","AsyncError","WithConfirmationModal"];export{t as Async,p as AsyncError,e as AsyncLong,c as AsyncLongWithFeedback,s as AsyncWithFeedback,n as Default,a as Nested,i as NestedAsync,m as SyncError,d as WithConfirmationModal,wo as __namedExportsOrder,vo as default};
