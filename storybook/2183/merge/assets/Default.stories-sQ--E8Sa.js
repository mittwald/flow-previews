import{j as o}from"./iframe-D2Ryv2XM.js";import{a as d,c as u,b as l,s as y}from"./lib-DtkK3Fle.js";import{M as h}from"./Modal-CKzTusZw.js";import{A}from"./ActionGroup-DNKY23T8.js";import{B as p}from"./Button-0ymElbGx.js";import{H as f}from"./Heading-DXhz_H9M.js";import{C as F}from"./Content-jywu3Zso.js";import{A as r}from"./Action-P2r8aGEo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-CYMBERZG.js";import"./flowComponent-P0LvaFxL.js";import"./index-DQBbrLYy.js";import"./index-C63C9hiI.js";import"./Overlay-Lbc0BDC3.js";import"./OverlayContextProvider-B2OZPBTA.js";import"./context-FPyrczIP.js";import"./useStatic-Dp5ohCc9.js";import"./LoadingSpinner-BrbkAsB7.js";import"./IconApp-D72ec8J0.js";import"./remote-c0PQzJc6.js";import"./ariaLive-CUFvfrWF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D3q43d5z.js";import"./context-nMHmB_Zz.js";import"./utils-BqLZYyR8.js";import"./Dialog-Dv3Dn_KI.js";import"./Button-CBxmpU8U.js";import"./ProgressBar-Ftd9nhbH.js";import"./Label-BRB94mKh.js";import"./Hidden-BS4L5nhJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-xl5SJTPu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-oTeUo0kc.js";import"./useFocus-CHBEY2MC.js";import"./useFocusRing-Bonkbq1h.js";import"./useFocusable-DzubWnzm.js";import"./RSPContexts-B-8XijCb.js";import"./OverlayArrow-DTmL_qI5.js";import"./useControlledState-B1ZkKesc.js";import"./Collection-jKLygJGW.js";import"./CollectionBuilder-Da9Ni7nz.js";import"./SelectionIndicator-B0cJwLAx.js";import"./Separator-BR_z4vVr.js";import"./Text-D7v3tGEm.js";import"./SelectionManager-vwj_R8g4.js";import"./useEvent-OdyTuNWc.js";import"./useCollator-ZYyR423s.js";import"./FocusScope-1u2Sr5XR.js";import"./VisuallyHidden-CLaEN95T.js";import"./useOverlayController--hBRUqQr.js";import"./IconClose-thb6C0kQ.js";import"./IconX-DZdRXBmP.js";import"./ButtonView-BDYSj-1o.js";import"./Flex-DfKVTUEK.js";import"./Text-BztGJEd5.js";import"./browser-k7JOs1GI.js";import"./EmulatedBoldText-j8ZSwmcB.js";import"./getActionGroupSlot-W54WmM0W.js";import"./IconCheck-Bb3WY8_H.js";import"./Heading-DRwXALuA.js";const vo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
