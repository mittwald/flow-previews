import{j as o}from"./iframe-ICCBaEZ0.js";import{a as d,c as u,b as l,s as y}from"./lib-BrBh1iqL.js";import{M as h}from"./Modal-CTetR5s3.js";import{A}from"./ActionGroup-Cyu4G9Rw.js";import{B as p}from"./Button-BPUjkcWl.js";import{H as f}from"./Heading-_OIl0AzZ.js";import{C as F}from"./Content-ByBqh0OQ.js";import{A as r}from"./Action-BI-eqtgf.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-CZVSbWDN.js";import"./Dialog-YdLNLYvV.js";import"./Button-CEB885Bq.js";import"./utils-Bdyed02U.js";import"./index-Bz_4mo81.js";import"./clsx-B-dksMZM.js";import"./index-Dbcsq1pl.js";import"./ProgressBar-DNR75UAD.js";import"./Label-AJl99fin.js";import"./Hidden-DZAoEMIQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CrekXyf_.js";import"./context-BA_6GkxW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bkx3Up2v.js";import"./useFocus-sIQn0Mmu.js";import"./useFocusRing-C-l0oxpd.js";import"./useFocusable-Da3kr2d3.js";import"./RSPContexts-yVX-lDWS.js";import"./OverlayArrow-BzKyLQdS.js";import"./useControlledState-0-xiytms.js";import"./Collection-CXuidDK4.js";import"./CollectionBuilder-D1MQIG8v.js";import"./SelectionIndicator-6JK-VVYS.js";import"./Separator-Npr-6AmU.js";import"./Text-6VRpzXYD.js";import"./SelectionManager-CgsCNKwD.js";import"./useEvent-DVme5dXh.js";import"./useCollator-hfiTQ-EU.js";import"./FocusScope-BgxYME-V.js";import"./useLocalizedStringFormatter-CSoJHnbm.js";import"./VisuallyHidden-CIUq3upT.js";import"./flowComponent-BP2zunxu.js";import"./context-CFn3lEGQ.js";import"./useStatic-EBffme0U.js";import"./OverlayContextProvider-DutSGNyV.js";import"./DialogTriggerView-CX_Wmf8Y.js";import"./dynamic-D4nz3o_q.js";import"./Overlay-Dd5bKsRq.js";import"./useOverlayController-CTkEh9O7.js";import"./LoadingSpinner-DZTaEi_R.js";import"./IconWarning-DNTau7lk.js";import"./remote-CrBsxa38.js";import"./ButtonView-BszEJvVk.js";import"./Flex-BVm7cNPs.js";import"./Text-wotACWdr.js";import"./browser-BXZux_wF.js";import"./EmulatedBoldText-CJhsU2oU.js";import"./getActionGroupSlot-BNL4E6BB.js";import"./Heading-BmRm-FE-.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
