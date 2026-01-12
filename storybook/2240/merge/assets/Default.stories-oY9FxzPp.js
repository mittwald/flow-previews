import{j as o}from"./iframe-Bt_Ape3b.js";import{a as d,c as u,b as l,s as y}from"./lib-q_KBic_v.js";import{M as h}from"./Modal-DOwE1Te9.js";import{A}from"./ActionGroup-BVJwbp62.js";import{B as p}from"./Button-Bm5EggmV.js";import{H as f}from"./Heading-C3-uF7Fn.js";import{C as F}from"./Content-CwIFb3RB.js";import{A as r}from"./Action-B2h50d-b.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-BxvpYE5H.js";import"./Dialog-3KThjjZh.js";import"./Button-pXrc8KX9.js";import"./utils-DGGum7sG.js";import"./index-DJTzXtHe.js";import"./clsx-B-dksMZM.js";import"./index-gN6AAF3-.js";import"./ProgressBar-DgNpOae2.js";import"./Label-Bfb_thp3.js";import"./Hidden-CJIrU941.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BAWBHbvC.js";import"./context-BGqy3a6E.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DErVZDbk.js";import"./useFocus-C-togmBu.js";import"./useFocusRing-Ba6s95SH.js";import"./useFocusable-BX_sV3cU.js";import"./RSPContexts-CtPg4mPr.js";import"./OverlayArrow-CVhGLAoZ.js";import"./useControlledState-Bw01eRXu.js";import"./Collection-CZkVMDHw.js";import"./CollectionBuilder-D9hZnXF0.js";import"./SelectionIndicator-7G59x11l.js";import"./Separator-fa_nI6Bk.js";import"./Text-DwU1R_Cs.js";import"./SelectionManager-BSKqz5jy.js";import"./useEvent-B7_y21W_.js";import"./useCollator-CvPTpoia.js";import"./FocusScope-BOag0uW3.js";import"./useLocalizedStringFormatter-Bayz7Ycu.js";import"./VisuallyHidden-CM2m0J8e.js";import"./flowComponent-CoHw3WqD.js";import"./context-CGPA3PGo.js";import"./useStatic-DpZVpe0y.js";import"./OverlayContextProvider-BwOUPmKM.js";import"./DialogTriggerView-BVEhLQjP.js";import"./dynamic-D3ysZU61.js";import"./Overlay-B1L_xSxT.js";import"./useOverlayController-GBUtTLO-.js";import"./LoadingSpinner-CXrerpwy.js";import"./IconWarning-BQjeLTWb.js";import"./remote-C9NcRL_b.js";import"./ButtonView-5kWU9QKD.js";import"./Flex-CPdGDyFA.js";import"./Text-Bs2hbxJA.js";import"./browser-BI8hAkYP.js";import"./EmulatedBoldText-213nH2nf.js";import"./getActionGroupSlot-Cx8mj5km.js";import"./Heading-CF5bGxey.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
