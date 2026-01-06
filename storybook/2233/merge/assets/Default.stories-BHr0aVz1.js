import{j as o}from"./iframe-BAg_Vkif.js";import{a as d,c as u,b as l,s as y}from"./lib-DzhO2VGi.js";import{M as h}from"./Modal-Decgdm7b.js";import{A}from"./ActionGroup-DE4bxHka.js";import{B as p}from"./Button-CNza9GnT.js";import{H as f}from"./Heading-Dn2ss8TC.js";import{C as F}from"./Content-DJ9loXLW.js";import{A as r}from"./Action-BOjxF4Dl.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-JJZBSc9G.js";import"./Dialog-BlnwYq_Z.js";import"./Button-UGLVSCHM.js";import"./utils-BI8UFEcl.js";import"./index-DNdviT-s.js";import"./clsx-B-dksMZM.js";import"./index-ClwrdcL8.js";import"./ProgressBar-CpBnM9iR.js";import"./Label-Bx8dS0aq.js";import"./Hidden-BiPkEj1j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-8b0YN0Pv.js";import"./context-Dr2F39lD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNrva4v9.js";import"./useFocus-L8RhZ1QR.js";import"./useFocusRing-D5C_zsQK.js";import"./useFocusable-0NuZ-hi3.js";import"./RSPContexts-DM5FD37h.js";import"./OverlayArrow-CH26SGjP.js";import"./useControlledState-C63VSZxO.js";import"./Collection-CPHZYP7m.js";import"./CollectionBuilder-7_bsJlU3.js";import"./SelectionIndicator-zMpThTxY.js";import"./Separator-B5uze-er.js";import"./Text-B1sdohWQ.js";import"./SelectionManager-DlI-VKzy.js";import"./useEvent-CvZlzKtX.js";import"./useCollator--NIMsuGj.js";import"./FocusScope-CX8aMKJ8.js";import"./useLocalizedStringFormatter-BJUyDOOi.js";import"./VisuallyHidden-0Cja9mQD.js";import"./flowComponent-Br_xtRU3.js";import"./context-BAbefeLZ.js";import"./useStatic-DpED2Oge.js";import"./OverlayContextProvider-Bkht6Vbm.js";import"./DialogTriggerView-lQPzRwEp.js";import"./dynamic-eE1nsZvE.js";import"./Overlay-DaQ4BWYl.js";import"./useOverlayController-DRKioFUp.js";import"./LoadingSpinner-BktXBT1I.js";import"./IconWarning-eOJWxr99.js";import"./remote-OUS6bpte.js";import"./ButtonView-DBAtGP8R.js";import"./Flex-Fs-jWWU0.js";import"./Text-Cv_CDcg6.js";import"./browser-CG8hIWrH.js";import"./EmulatedBoldText-Dzw3SPd4.js";import"./getActionGroupSlot-B4_mqTXX.js";import"./Heading-DM0DAFfT.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
