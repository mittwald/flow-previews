import{j as o}from"./iframe-DRxscI9O.js";import{a as d,c as u,b as l,s as g}from"./lib-DVzYpXGH.js";import{M as y}from"./Modal-BOsI0Llv.js";import{A as h}from"./ActionGroup-DaLtREB8.js";import{B as p}from"./Button-Cn0kN-cE.js";import{H as f}from"./Heading-xcTY6oLo.js";import{C as F}from"./Content-COyljEy7.js";import{A as r}from"./Action-BUOqPppc.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-CijLEP7N.js";import"./Dialog-Ds8Y2vRW.js";import"./Button-Cf4nBLFb.js";import"./utils-CR6NBPUA.js";import"./index-tYubnSWL.js";import"./clsx-B-dksMZM.js";import"./index-1XGI-8ge.js";import"./ProgressBar-KolsJC9x.js";import"./Label-CmD6OfqR.js";import"./Hidden-B1W2VzXU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D6Iwc6BC.js";import"./context-B7-PA0L6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-87CEVAU1.js";import"./useFocus-CSD6pEXF.js";import"./useFocusRing-Dd30mTT2.js";import"./useFocusable-_DeXT1Pt.js";import"./RSPContexts-O0Lvzjxz.js";import"./OverlayArrow-CnZ26m-G.js";import"./useControlledState-CvH2MSRC.js";import"./Collection-Tvviv49U.js";import"./CollectionBuilder-BZH3zSXW.js";import"./SelectionIndicator-BPr02Xgn.js";import"./Separator-BIe6_98T.js";import"./Text-C61ezR9Z.js";import"./SelectionManager-CY_OS_Gu.js";import"./useEvent-Dkz3YFeV.js";import"./useCollator-2RpDHACH.js";import"./FocusScope-CRHoWMnL.js";import"./useLocalizedStringFormatter-BVeqf5XE.js";import"./VisuallyHidden-hMszIaj5.js";import"./flowComponent-cRsKi5gV.js";import"./context-CkpccYw3.js";import"./useStatic-DhnGFhXh.js";import"./OverlayContextProvider-CoboHbSN.js";import"./DialogTriggerView-DxqIqCQq.js";import"./dynamic-CC7KPApC.js";import"./Overlay-Bi6ZnUkK.js";import"./useOverlayController-CJT4z6k_.js";import"./LoadingSpinner--1cga6s1.js";import"./IconWarning-B0GCVytt.js";import"./remote-5HtQVd9k.js";import"./ButtonView-3kbETHdX.js";import"./Flex-Df6FApdG.js";import"./Text-8YV9_ufN.js";import"./browser-D6b-4R0j.js";import"./EmulatedBoldText-BJ7pd3K2.js";import"./getActionGroupSlot-BLOtZzsx.js";import"./Heading-IJ9Uopg1.js";const Lo={title:"Actions/Action",component:r,render:A=>o.jsx(r,{...A,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{onAction:d}},e={args:{onAction:u}},s={args:{onAction:d,showFeedback:!0}},c={args:{onAction:u,showFeedback:!0}},i={args:{children:o.jsx(r,{onAction:g,children:l})}},a={args:{onAction:d,children:o.jsx(r,{onAction:d,children:l})}},m={render:()=>o.jsxs(r,{onAction:u,children:[o.jsxs(y,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(h,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
