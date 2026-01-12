import{j as o}from"./iframe-DkC9HeFh.js";import{a as d,c as u,b as l,s as y}from"./lib-KuDkLwxS.js";import{M as h}from"./Modal-CV904x5q.js";import{A}from"./ActionGroup-fpt_mN-q.js";import{B as p}from"./Button-B7ieOWfK.js";import{H as f}from"./Heading-C5UH4Hr2.js";import{C as F}from"./Content-CkVpucpm.js";import{A as r}from"./Action-BeqMUzE-.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-BY_bjwFe.js";import"./Dialog-BJyrAoE0.js";import"./Button-1sEra0ij.js";import"./utils-CQbe0cgS.js";import"./index-DvyT4dL7.js";import"./clsx-B-dksMZM.js";import"./index-84tLr-0T.js";import"./ProgressBar-CIHpzS8j.js";import"./Label-Dz_bjD6f.js";import"./Hidden-Dt8SDEzH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Yk9h4-sj.js";import"./context-FwWFVwDs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-zXWrYZpb.js";import"./useFocus-DkNOoSBL.js";import"./useFocusRing-C9ROKOON.js";import"./useFocusable-CeYJrI7n.js";import"./RSPContexts-CKa7E1cC.js";import"./OverlayArrow-BJ-VOV5h.js";import"./useControlledState-Ul0j90Sg.js";import"./Collection-CUZZqAxe.js";import"./CollectionBuilder-C7f0KbGc.js";import"./SelectionIndicator-2dj1bxWN.js";import"./Separator-YXmfk0mZ.js";import"./Text-BZKGVCR5.js";import"./SelectionManager-ElI-xXNm.js";import"./useEvent-DWxhQQFL.js";import"./useCollator-DUnRWfY0.js";import"./FocusScope-Bsk9Ww9W.js";import"./useLocalizedStringFormatter-BMEualnj.js";import"./VisuallyHidden-DWtp1z23.js";import"./flowComponent-1oYrvkPj.js";import"./context-Z29bubao.js";import"./useStatic-8Ma0Gu-h.js";import"./OverlayContextProvider-6aRE9S_a.js";import"./DialogTriggerView-C81GdE1z.js";import"./dynamic-DDaduNaQ.js";import"./Overlay-C5reTD6x.js";import"./useOverlayController-CKW4WHoS.js";import"./LoadingSpinner-lFYILNSp.js";import"./IconWarning-6DY0-AAa.js";import"./remote-C2KQESr1.js";import"./ButtonView-DQ4_PVPD.js";import"./Flex-C7RQaBoU.js";import"./Text-B-gx4bXK.js";import"./browser-tA6G_ksz.js";import"./EmulatedBoldText-ubSX6qOz.js";import"./getActionGroupSlot-BkxkF0Oa.js";import"./Heading-C_Zexpqw.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
