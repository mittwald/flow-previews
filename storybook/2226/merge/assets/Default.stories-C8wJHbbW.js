import{j as o}from"./iframe-ChVCZzSM.js";import{a as d,c as u,b as l,s as y}from"./lib-CcSDQ9hh.js";import{M as h}from"./Modal-DkFCi_xv.js";import{A}from"./ActionGroup-Da32zVp8.js";import{B as p}from"./Button-DDsnJhyb.js";import{H as f}from"./Heading-DGiEIOEA.js";import{C as F}from"./Content-DYWJ1E0X.js";import{A as r}from"./Action-BtwaxeJT.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-v4LHk93w.js";import"./Dialog-BaNJO3_y.js";import"./Button-DQvyXKNx.js";import"./utils-D2Dbeo4Y.js";import"./index-AQkY3hEg.js";import"./clsx-B-dksMZM.js";import"./index-B17aiXwm.js";import"./ProgressBar-Cxzv2Khu.js";import"./Label-B7WWEN6i.js";import"./Hidden-CmNYW2sS.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DQfYHHHP.js";import"./context-DJbicbqJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DJQIPi1Q.js";import"./useFocus-D0NBuExq.js";import"./useFocusRing-BKxozeV4.js";import"./useFocusable-DqNAAmsp.js";import"./RSPContexts-DU6h72_u.js";import"./OverlayArrow-CfPd7gS0.js";import"./useControlledState-BqHrqPJL.js";import"./Collection-BAX2Qk0i.js";import"./CollectionBuilder-BBxJk1-3.js";import"./SelectionIndicator-CB8Y-x_O.js";import"./Separator-CHS7wGgu.js";import"./Text-JkP9a4Kb.js";import"./SelectionManager-CbtLPV9G.js";import"./useEvent-DKVYVBpY.js";import"./useCollator-iud0owJE.js";import"./FocusScope-BLCDYAIb.js";import"./useLocalizedStringFormatter-CLU1Wmp0.js";import"./VisuallyHidden-DGYqp_5z.js";import"./flowComponent-CzVJsrSl.js";import"./context-5fKqnWzS.js";import"./useStatic-DfTrwEFp.js";import"./OverlayContextProvider-r_uJzIjb.js";import"./DialogTriggerView-J9VojhfB.js";import"./dynamic-M4vO8Oa6.js";import"./Overlay-1LxbuBK8.js";import"./useOverlayController-DK3_Ky4D.js";import"./LoadingSpinner-CIFEKnPX.js";import"./IconWarning-DiIA_Kv4.js";import"./remote-B9ld2KSn.js";import"./ButtonView-ERTDXvRy.js";import"./Flex-BovjNN7z.js";import"./Text-CDV1KOVg.js";import"./browser-Drl1pS0o.js";import"./EmulatedBoldText-DJ1rAIrZ.js";import"./getActionGroupSlot-Bdjbco6c.js";import"./Heading-DVvsLghH.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
