import{j as o}from"./iframe-xTeLnFvu.js";import{a as d,c as u,b as l,s as y}from"./lib-CVGakha0.js";import{M as h}from"./Modal-CzYP2OEk.js";import{A}from"./ActionGroup-TgHXsP3h.js";import{B as p}from"./Button-BA5_aaZE.js";import{H as f}from"./Heading-cElDoL_q.js";import{C as F}from"./Content-BzWg7sN8.js";import{A as r}from"./Action-GyTbi50D.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-ndn1boAo.js";import"./PropsContextProvider-B-9yYF9r.js";import"./mergeRefs-CL4-4jLa.js";import"./index-D8cXiV4r.js";import"./TranslationProvider-Y_3SKiEv.js";import"./OverlayContextProvider-DUjO3Mxl.js";import"./context-B3gmiBCA.js";import"./Button-6mLbsxm5.js";import"./utils-DAXmWa5w.js";import"./ProgressBar-Du2Olg6q.js";import"./Hidden-CaRuxXNN.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-7tIPXbfR.js";import"./useFocusRing-DkBPZ0-v.js";import"./useFocusable-BaZ7v7IW.js";import"./RSPContexts-BbeCs0tS.js";import"./Collection-Bncr_TUN.js";import"./CollectionBuilder-CWex8B7o.js";import"./SelectionIndicator-vxn3ib0k.js";import"./Separator-CCxpf_MJ.js";import"./browser-RW8IAkpU.js";import"./useLocalizedStringFormatter-CRzuFQ02.js";import"./useStatic-DiiqycDM.js";import"./LoadingSpinner-DhmoM-Yl.js";import"./IconApp-B1jeSMHX.js";import"./remote-DmruOiXe.js";import"./ariaLive-DoOsJYhU.js";import"./Activity-D0VzS_Xj.js";import"./Text-CX0dnSU4.js";import"./EmulatedBoldText-st1IlPV2.js";import"./useOverlayController-SsWXLo7T.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconClose-CqXP_7hn.js";import"./IconX-D7i-QR82.js";import"./ButtonView-D7cjNXZ9.js";import"./Flex-DntyQhhk.js";import"./getActionGroupSlot-NSsr3wC7.js";import"./IconCheck-Cc3xyZRg.js";import"./Heading-Dpj368kt.js";const Ao={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const fo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,c as Nested,i as NestedAsync,m as WithConfirmationModal,fo as __namedExportsOrder,Ao as default};
