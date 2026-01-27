import{j as o}from"./iframe-BEQP9uXD.js";import{a as l,c as A,d as h,e as F,b as g,s as f}from"./lib-Y1_NdmLI.js";import{M as x}from"./Modal-Cw9Mz12Y.js";import{A as b}from"./ActionGroup-BV_YmXox.js";import{B as u}from"./Button-C9UvHdV0.js";import{H as j}from"./Heading-Cy1GdqFq.js";import{C as S}from"./Content-DNRSI0xJ.js";import{A as r}from"./Action-DdIVuJ0B.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-DCrQupdb.js";import"./Dialog-DQ54l-rN.js";import"./Button-BLAt4FO4.js";import"./utils-CvsvUfaH.js";import"./index-CA9bKJEG.js";import"./clsx-B-dksMZM.js";import"./index-COHhcPte.js";import"./ProgressBar-CsmWPwQb.js";import"./Label-DEkvlGAI.js";import"./Hidden-BRgRW0lF.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BaFA04Xw.js";import"./context-DjvYmnOm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BjEuYOvC.js";import"./useFocus-DENBDZ81.js";import"./useFocusRing-QizZnVOy.js";import"./useFocusable-WQftMZYd.js";import"./RSPContexts-22nxuYm5.js";import"./OverlayArrow-B0-Exi0z.js";import"./useControlledState-IAFCDfDW.js";import"./Collection-DrDb7tKr.js";import"./CollectionBuilder-DgIT4THq.js";import"./SelectionIndicator-Baqg4pYL.js";import"./Separator-CwdQYf1y.js";import"./Text-Dh3KhDzI.js";import"./SelectionManager-Cg9_nPGa.js";import"./useEvent-d-xS6mf7.js";import"./useCollator-Dxy4kckI.js";import"./FocusScope-D5mGJCBF.js";import"./useLocalizedStringFormatter-CVsWWxAE.js";import"./VisuallyHidden-BLDMQ79k.js";import"./flowComponent-84Jhttbw.js";import"./context-DGvxxzOj.js";import"./useStatic-DVE9BYeG.js";import"./OverlayContextProvider-DPAGiuqq.js";import"./DialogTriggerView-Cuicc85L.js";import"./dynamic-BAr_-wMD.js";import"./Overlay-CAXJWNfR.js";import"./useOverlayController-DPkum4Dd.js";import"./LoadingSpinner-Dfl-93Ba.js";import"./IconWarning-BArZWwdB.js";import"./remote-Ba3iobwA.js";import"./ButtonView-Cr-9skPP.js";import"./Flex-Dz4bH9V2.js";import"./Text-BQmA_ZwI.js";import"./browser-D8S-En3T.js";import"./EmulatedBoldText-BYVdDx5b.js";import"./getActionGroupSlot-B63naLE5.js";import"./Heading-KUn82X_l.js";const vo={title:"Actions/Action",component:r,render:y=>o.jsx(r,{...y,children:o.jsx(u,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},n={},t={args:{onAction:l}},e={args:{onAction:A}},s={args:{onAction:l,showFeedback:!0}},c={args:{onAction:A,showFeedback:!0}},a={args:{children:o.jsx(r,{onAction:f,children:g})}},i={args:{onAction:l,children:o.jsx(r,{onAction:l,children:g})}},m={args:{onAction:h}},p={args:{onAction:F}},d={render:()=>o.jsxs(r,{onAction:A,children:[o.jsxs(x,{slot:"actionConfirm",children:[o.jsx(j,{children:"Delete customer"}),o.jsx(S,{children:"Do you really want to delete the customer?"}),o.jsxs(b,{children:[o.jsx(u,{color:"danger",children:"Confirm"}),o.jsx(u,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(u,{color:"secondary",variant:"soft",children:"Delete customer"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
