import{j as o}from"./iframe-BzW-9mMD.js";import{a as d,c as u,b as l,s as y}from"./lib-D9k_5sgZ.js";import{M as h}from"./Modal-r-WYj4RS.js";import{A}from"./ActionGroup-DtgroWHO.js";import{B as p}from"./Button-kdt8pR0M.js";import{H as f}from"./Heading-CFmOB0E2.js";import{C as F}from"./Content-BTDfmSOV.js";import{A as r}from"./Action-B9rUenjA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-C266PTaS.js";import"./flowComponent-tWRCe5l6.js";import"./index-XmU95KIL.js";import"./index-DBI39Uex.js";import"./Overlay-CBZrDVYC.js";import"./OverlayContextProvider-DkaFHDgz.js";import"./context-CzkXJT4I.js";import"./useStatic-CTmF8sLz.js";import"./LoadingSpinner-D5sbFVGI.js";import"./IconApp-BdfgmDZu.js";import"./remote-BEBWGiXy.js";import"./ariaLive-CVrDG-JG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CwmxuNTv.js";import"./context-42ert5Ah.js";import"./utils-BrWwMsiw.js";import"./Dialog-Djk-se_O.js";import"./Button-DgUosL-f.js";import"./ProgressBar-o-cVdTXN.js";import"./Label-CGJ_PWGO.js";import"./Hidden-Dd9I5XIl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Fj4NeiZR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DuLlpULp.js";import"./useFocus-dCAgOHv-.js";import"./useFocusRing-g2ZbegJf.js";import"./useFocusable-CVjqM_08.js";import"./RSPContexts-B2m0CCTC.js";import"./OverlayArrow-CmaTRoo4.js";import"./useControlledState-Bv03b0O5.js";import"./Collection-B6Gyca40.js";import"./CollectionBuilder-C5j0Sae3.js";import"./SelectionIndicator-C_2dk6EH.js";import"./Separator-DiQ9hKYu.js";import"./Text-lCB5Bcpt.js";import"./SelectionManager-X9WkTlTu.js";import"./useEvent-B5jRbMBF.js";import"./useCollator-DwX94Vm0.js";import"./FocusScope-CKC8wRja.js";import"./VisuallyHidden-BEoWdW55.js";import"./useOverlayController-D-du17tQ.js";import"./IconClose-8oKInEzR.js";import"./IconX-w5RRSC5U.js";import"./ButtonView-DPvVFvz8.js";import"./Flex-BkG4DAmy.js";import"./Text-V56jcQh9.js";import"./browser-C2fMNT9-.js";import"./EmulatedBoldText-xlY4BdXR.js";import"./getActionGroupSlot-DzbzA4bT.js";import"./IconCheck-ORikD9Q4.js";import"./Heading-C_mfasv9.js";const vo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
