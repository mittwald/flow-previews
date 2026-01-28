import{j as o}from"./iframe-lb0QDBc2.js";import{a as l,c as A,d as h,e as F,b as g,s as f}from"./lib-CRmYTV7b.js";import{M as x}from"./Modal-C_t96wST.js";import{A as b}from"./ActionGroup-egKtEln5.js";import{B as u}from"./Button-juKgyftR.js";import{H as j}from"./Heading-Be2qz7j6.js";import{C as S}from"./Content-DGSu-Ee-.js";import{A as r}from"./Action-4cKKicYt.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-DJa2X_ri.js";import"./Dialog-21JmjHkj.js";import"./Button-D3ym-GoV.js";import"./utils-r2dAqIcX.js";import"./index-B9b6xQ5S.js";import"./clsx-B-dksMZM.js";import"./index-DLJvSM0l.js";import"./ProgressBar-BWiLeXEa.js";import"./Label-BdYNaN4j.js";import"./Hidden-DFHOpifw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DBnvm8X4.js";import"./context-DKVhGweU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CgYa4G9K.js";import"./useFocus-B48NrLMU.js";import"./useFocusRing-J18h0CnC.js";import"./useFocusable-BRnBN5zK.js";import"./RSPContexts-YTE8c3lP.js";import"./OverlayArrow-CyZLGayb.js";import"./useControlledState-BS6Up44I.js";import"./Collection-qMjf8izv.js";import"./CollectionBuilder-C0jSlJnc.js";import"./SelectionIndicator-DyUDH3aS.js";import"./Separator-dugLvl-c.js";import"./Text-DV3fQztC.js";import"./SelectionManager-DxNkh6e5.js";import"./useEvent-DYKWYeYn.js";import"./useCollator-BRhgG2J7.js";import"./FocusScope-BL38dLR2.js";import"./useLocalizedStringFormatter-DaeZ3M4_.js";import"./VisuallyHidden-k_Pf5ETO.js";import"./flowComponent-CMLBvcrR.js";import"./context-C_yF8yzC.js";import"./useStatic-C9kOien4.js";import"./OverlayContextProvider-kVRdTbI-.js";import"./DialogTriggerView-CKqgs5pS.js";import"./dynamic-oimbFEy9.js";import"./Overlay-BWhYya0M.js";import"./useOverlayController-DrUwu9jx.js";import"./LoadingSpinner-D-Hn99XA.js";import"./IconWarning-BeH6azjz.js";import"./remote-HK64Xy28.js";import"./ButtonView-BbORIuhL.js";import"./Flex-BBTrb2GJ.js";import"./Text-Bvo-yLEA.js";import"./browser-D6xfswL2.js";import"./EmulatedBoldText-CqgiFE-g.js";import"./getActionGroupSlot-CYlSlA5g.js";import"./Heading-BMdu11KH.js";const vo={title:"Actions/Action",component:r,render:y=>o.jsx(r,{...y,children:o.jsx(u,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},n={},t={args:{onAction:l}},e={args:{onAction:A}},s={args:{onAction:l,showFeedback:!0}},c={args:{onAction:A,showFeedback:!0}},a={args:{children:o.jsx(r,{onAction:f,children:g})}},i={args:{onAction:l,children:o.jsx(r,{onAction:l,children:g})}},m={args:{onAction:h}},p={args:{onAction:F}},d={render:()=>o.jsxs(r,{onAction:A,children:[o.jsxs(x,{slot:"actionConfirm",children:[o.jsx(j,{children:"Delete customer"}),o.jsx(S,{children:"Do you really want to delete the customer?"}),o.jsxs(b,{children:[o.jsx(u,{color:"danger",children:"Confirm"}),o.jsx(u,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(u,{color:"secondary",variant:"soft",children:"Delete customer"})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
