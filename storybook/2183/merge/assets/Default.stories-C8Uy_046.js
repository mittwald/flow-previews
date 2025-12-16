import{j as o}from"./iframe-VGYf9uSR.js";import{a as d,c as u,b as l,s as y}from"./lib-BNDaIoCA.js";import{M as h}from"./Modal-CkrMC9z2.js";import{A}from"./ActionGroup-BlzYnYWF.js";import{B as p}from"./Button-C33JxfbF.js";import{H as f}from"./Heading-D2Jr2YRs.js";import{C as F}from"./Content-BQB-04b5.js";import{A as r}from"./Action-BU572vpz.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-BXsOFxWd.js";import"./PropsContextProvider-BJkjz94f.js";import"./mergeRefs-CoTJmqCf.js";import"./index-Bm_Mzlx6.js";import"./TranslationProvider-Ck575ucT.js";import"./OverlayContextProvider-Tja93TmG.js";import"./context-DPoGZDoo.js";import"./Button-DHkv2oj9.js";import"./utils-BB4afhje.js";import"./ProgressBar-Bb-cXNA8.js";import"./Hidden-apt2TR_r.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CKMs_ua8.js";import"./useFocusRing-BSBcwiCP.js";import"./useFocusable-CkZtY9Qx.js";import"./RSPContexts-D2Dnlu1I.js";import"./Collection-B44oh5ya.js";import"./CollectionBuilder-DsdXZBim.js";import"./SelectionIndicator-Byl_MQLN.js";import"./Separator-BZpKfwRn.js";import"./browser-BY7YAvyX.js";import"./useLocalizedStringFormatter-DhcIgiuG.js";import"./useStatic-DRLyxIeE.js";import"./LoadingSpinner-ChrQQ-Zb.js";import"./IconChevronDown-Dgoj3MhV.js";import"./remote-B1HlY5fu.js";import"./ariaLive-Cyrepnod.js";import"./Activity-CX_biUm5.js";import"./Text-CGbJaU4z.js";import"./EmulatedBoldText-BBr3yRY7.js";import"./useOverlayController-BKXV4RSL.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconClose-C4Rk0te9.js";import"./IconX-lmZxwzvL.js";import"./ButtonView-xzmbUdJ-.js";import"./Flex-DpouuS3F.js";import"./getActionGroupSlot-BnsqQCvq.js";import"./IconCheck-onGhd-IB.js";import"./Heading-CvNhLKAf.js";const Ao={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
