import{j as o}from"./iframe-kP2HEfFS.js";import{a as d,c as u,b as l,s as g}from"./lib-DoRzIlyV.js";import{M as y}from"./Modal-BsM5mIVe.js";import{A as h}from"./ActionGroup-CwS6zLOi.js";import{B as p}from"./Button-D2SKyW-T.js";import{H as f}from"./Heading-BD2z6cnX.js";import{C as F}from"./Content-C-6lFjS_.js";import{A as r}from"./Action-DkWPc0_f.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-iZasDHkJ.js";import"./Dialog-DLhIMuXA.js";import"./Button-BPAnAcar.js";import"./utils-C12UPk0k.js";import"./index-Bh9kNCDS.js";import"./clsx-B-dksMZM.js";import"./index-Gr0VxzdI.js";import"./ProgressBar-BJr25bRm.js";import"./Label-B6lEhZqq.js";import"./Hidden-6OIrW1CO.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-07phmwB_.js";import"./context-C1J5EAXU.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Zu3olfM4.js";import"./useFocus-C5lTzrJh.js";import"./useFocusRing-CKDLKfs4.js";import"./useFocusable-B7yvIBUC.js";import"./RSPContexts-BgFmjUDe.js";import"./OverlayArrow-CvR9rE0m.js";import"./useControlledState-K2EmMrc1.js";import"./Collection-MFl1TxyK.js";import"./CollectionBuilder-DD43TuPt.js";import"./SelectionIndicator-v5-gN0xn.js";import"./Separator-CNO8xmqY.js";import"./Text-Bt0sFzeR.js";import"./SelectionManager-DX3kNlRf.js";import"./useEvent-BZyKNwjW.js";import"./useCollator-eXCpI9bT.js";import"./FocusScope-BDiazwAe.js";import"./useLocalizedStringFormatter-C8FP4Fke.js";import"./VisuallyHidden-BxKC931y.js";import"./flowComponent-Cn3sZuxr.js";import"./context-Dy6MMTPO.js";import"./useStatic-D099is7R.js";import"./OverlayContextProvider-BizSMrSr.js";import"./DialogTriggerView-YgBqYt-h.js";import"./dynamic-Bb3YYypk.js";import"./Overlay-DDRE7z0q.js";import"./useOverlayController-BKD7nFkO.js";import"./LoadingSpinner-DqLZcArG.js";import"./IconWarning-3wMfkhbI.js";import"./remote-7RhInu5H.js";import"./ButtonView-B-wfMpgB.js";import"./Flex-DHNOJ9wH.js";import"./Text-DmTsXHLN.js";import"./browser-CLBqp6VR.js";import"./EmulatedBoldText-DuA7OeuM.js";import"./getActionGroupSlot-DpvImWBQ.js";import"./Heading-BzscSBm2.js";const Lo={title:"Actions/Action",component:r,render:A=>o.jsx(r,{...A,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{onAction:d}},e={args:{onAction:u}},s={args:{onAction:d,showFeedback:!0}},c={args:{onAction:u,showFeedback:!0}},i={args:{children:o.jsx(r,{onAction:g,children:l})}},a={args:{onAction:d,children:o.jsx(r,{onAction:d,children:l})}},m={render:()=>o.jsxs(r,{onAction:u,children:[o.jsxs(y,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(h,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunction
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Action onAction={syncFunction}>{button}</Action>
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    onAction: asyncFunction,
    children: <Action onAction={asyncFunction}>{button}</Action>
  }
}`,...a.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const So=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,c as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,i as Nested,a as NestedAsync,m as WithConfirmationModal,So as __namedExportsOrder,Lo as default};
