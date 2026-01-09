import{j as o}from"./iframe-BeQWUZkN.js";import{a as d,c as u,b as l,s as y}from"./lib-IUITjLIj.js";import{M as h}from"./Modal-CJZw7zPu.js";import{A}from"./ActionGroup-nS8Oj4Mn.js";import{B as p}from"./Button-CGVqLO1a.js";import{H as f}from"./Heading-Em1n1mkD.js";import{C as F}from"./Content-CCCkXUnY.js";import{A as r}from"./Action-E4S27TIO.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-CQFXwfOk.js";import"./Dialog-BcNKaqXQ.js";import"./Button-CL6J7LkF.js";import"./utils-DahaGO1Z.js";import"./index-1B1ExeLK.js";import"./clsx-B-dksMZM.js";import"./index-C7QqpnOV.js";import"./ProgressBar-DrS-kVcX.js";import"./Label-CrwWIO9R.js";import"./Hidden-CGYC7LW_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Bej11zP_.js";import"./context-BW8umLlU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DC5PU-Mt.js";import"./useFocus-B8WX1wz4.js";import"./useFocusRing-plkuiMUL.js";import"./useFocusable-5ZG33T1u.js";import"./RSPContexts-3R6axPUC.js";import"./OverlayArrow-CQhuNf01.js";import"./useControlledState-CVKu2BVA.js";import"./Collection-BT4mtoIi.js";import"./CollectionBuilder-8XmSCxqz.js";import"./SelectionIndicator-CpkhsEOb.js";import"./Separator-jKx-ftTc.js";import"./Text-oRZAcHnn.js";import"./SelectionManager-g_157G_P.js";import"./useEvent-D73bdPYV.js";import"./useCollator-BitTSQ9h.js";import"./FocusScope-BFFCHkyv.js";import"./useLocalizedStringFormatter-BinbCyOY.js";import"./VisuallyHidden-Dai9OIPt.js";import"./flowComponent-C5zRFTyN.js";import"./context-C8zS221N.js";import"./useStatic-H-gT8Tnv.js";import"./OverlayContextProvider-DSplWZAb.js";import"./DialogTriggerView-CKSxQMo-.js";import"./dynamic-CY8Jd6pV.js";import"./Overlay-Bet1T5Qv.js";import"./useOverlayController-Cg89pKF6.js";import"./LoadingSpinner-BzbdJJnJ.js";import"./IconWarning-BINGtqrd.js";import"./remote-BjhB0wla.js";import"./ButtonView-Cu0HfPXx.js";import"./Flex-BKQW48LT.js";import"./Text-DBLOUBNs.js";import"./browser-CC8M21FF.js";import"./EmulatedBoldText-Ds4ybabF.js";import"./getActionGroupSlot-Mt7aWTck.js";import"./Heading-DqQ4fdlj.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncFunction
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    showFeedback: true
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncLongFunction,
    showFeedback: true
  }
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Action action={syncFunction}>{button}</Action>
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    children: <Action action={asyncFunction}>{button}</Action>
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Action action={asyncLongFunction}>
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
}`,...m.parameters?.docs?.source}}};const So=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,c as Nested,i as NestedAsync,m as WithConfirmationModal,So as __namedExportsOrder,Lo as default};
