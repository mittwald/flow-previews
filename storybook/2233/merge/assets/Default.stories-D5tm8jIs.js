import{j as o}from"./iframe-BMquwUxp.js";import{a as d,c as u,b as l,s as y}from"./lib-KBnB7C2b.js";import{M as h}from"./Modal-BWzUiaX8.js";import{A}from"./ActionGroup-CFM0ipne.js";import{B as p}from"./Button-DvE0An6z.js";import{H as f}from"./Heading-DmFdEGik.js";import{C as F}from"./Content-D3dymt8s.js";import{A as r}from"./Action-4VgG125V.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-C_Vz8Pl3.js";import"./Dialog-Dx0VK2pV.js";import"./Button-CwpJPQ3S.js";import"./utils-C54becjs.js";import"./index-BYK8miAY.js";import"./clsx-B-dksMZM.js";import"./index-cAMRUrux.js";import"./ProgressBar-ztA157SI.js";import"./Label-BA-uOG5q.js";import"./Hidden-DXpev5BT.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BNLCM250.js";import"./context-BcuHL9mG.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B-RZvczw.js";import"./useFocus-DaRXVXg_.js";import"./useFocusRing-CjhJ1DIN.js";import"./useFocusable-DNP9d3st.js";import"./RSPContexts-BjvY3wPf.js";import"./OverlayArrow-LMfUU-b0.js";import"./useControlledState-C-7-yrsk.js";import"./Collection-CkKzGnvH.js";import"./CollectionBuilder-C63eWLYU.js";import"./SelectionIndicator-BIlCebKJ.js";import"./Separator-CIx6Mbjl.js";import"./Text-CPXkgTZA.js";import"./SelectionManager-WBqA1WyO.js";import"./useEvent-DDWvHjPW.js";import"./useCollator-BviFHu9Y.js";import"./FocusScope-BR9ShKUP.js";import"./useLocalizedStringFormatter-C4X4wsGr.js";import"./VisuallyHidden-D31Z6xaf.js";import"./flowComponent-DgzAUF5h.js";import"./context-BbITb74L.js";import"./useStatic-BMpae3_g.js";import"./OverlayContextProvider-Box79lc0.js";import"./DialogTriggerView-D3ga0oyJ.js";import"./dynamic-B-3tImXr.js";import"./Overlay-C0PSVzv0.js";import"./useOverlayController-CAAAYEI-.js";import"./LoadingSpinner-BPW5hp_J.js";import"./IconWarning-wcTYZTVE.js";import"./remote-CiXlw4PI.js";import"./ButtonView-Bn6PP7IX.js";import"./Flex-CX5My2yW.js";import"./Text-EG4UQ_l2.js";import"./browser-CBlt42Oy.js";import"./EmulatedBoldText-CntJSrfE.js";import"./getActionGroupSlot-D40b9Kwq.js";import"./Heading-DxuUq0JW.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
