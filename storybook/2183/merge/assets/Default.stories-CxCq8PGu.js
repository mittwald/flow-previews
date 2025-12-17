import{j as o}from"./iframe-BXRQqxRF.js";import{a as d,c as u,b as l,s as y}from"./lib-ClUPgvlO.js";import{M as h}from"./Modal-Bi6lkQnJ.js";import{A}from"./ActionGroup-CBAIlTo2.js";import{B as p}from"./Button-C0lHC6Ss.js";import{H as f}from"./Heading-DhvPWVC0.js";import{C as F}from"./Content-BaHTMk9y.js";import{A as r}from"./Action-Co1N5x-Q.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-CLAkwN-B.js";import"./flowComponent-5zToaHXd.js";import"./index-BTygn0L6.js";import"./index-L-QBIyGf.js";import"./Overlay-_q_W2zGu.js";import"./OverlayContextProvider-yBtgBbFr.js";import"./context-BJK7zy3l.js";import"./useStatic-CDs84s8f.js";import"./LoadingSpinner-Qtcd5nhZ.js";import"./IconChevronDown-CrvlnwL_.js";import"./remote-B9tgrHbM.js";import"./ariaLive-BBnf0-S_.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C8dyVGX6.js";import"./context-Cfx64TkI.js";import"./utils-W_wb_I6t.js";import"./Dialog-CBkTvNeJ.js";import"./Button-DlzDIGUo.js";import"./ProgressBar-Bu0Rvbqr.js";import"./Label-x3iOqkWL.js";import"./Hidden-CXQdbF07.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DwfjYi-F.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DljSeqhE.js";import"./useFocus-BYFFuSzP.js";import"./useFocusRing-mlfcq67k.js";import"./useFocusable-Bn1h_ZhV.js";import"./RSPContexts-DBwrNRvT.js";import"./OverlayArrow-Bw8tO6jb.js";import"./useControlledState-DF5Prxi4.js";import"./Collection-XN92eLRe.js";import"./CollectionBuilder-BhdaTyDp.js";import"./SelectionIndicator-CTy77egS.js";import"./Separator-D8Gi_H7t.js";import"./Text-gjZ6zRux.js";import"./SelectionManager-Bic6iT0p.js";import"./useEvent-D_VKrqjP.js";import"./useCollator-CBeXlDOU.js";import"./FocusScope-CDou2-z6.js";import"./VisuallyHidden-DvIs4LpA.js";import"./useOverlayController-dv6jX9Vt.js";import"./IconClose-BUhhZBm5.js";import"./IconX-DvHkgbt1.js";import"./ButtonView-BdBt3zkg.js";import"./Flex-9ymb_NH1.js";import"./Text-KdIVkcjD.js";import"./browser-JidmR7ov.js";import"./EmulatedBoldText-DAyJKQWP.js";import"./getActionGroupSlot-BkAF4Kgk.js";import"./IconCheck-BZ_7T0kt.js";import"./Heading-DOlSIdLx.js";const vo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const wo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,c as Nested,i as NestedAsync,m as WithConfirmationModal,wo as __namedExportsOrder,vo as default};
