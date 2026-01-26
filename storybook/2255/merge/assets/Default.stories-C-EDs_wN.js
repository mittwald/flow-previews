import{j as o}from"./iframe-CO_SbVCH.js";import{a as d,c as u,b as l,s as g}from"./lib-lqetAiAc.js";import{M as y}from"./Modal-Cc5dqVLi.js";import{A as h}from"./ActionGroup-Y22B5gXp.js";import{B as p}from"./Button-D1ylE5rB.js";import{H as f}from"./Heading-CF6gKKdb.js";import{C as F}from"./Content-DjWFYK1e.js";import{A as r}from"./Action-0SsHJzT_.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-zJBbildq.js";import"./Dialog-UmHwq-hs.js";import"./Button-B5AHzCCb.js";import"./utils-D6Fob7yO.js";import"./index-BeUgZiCh.js";import"./clsx-B-dksMZM.js";import"./index-CiuYSwxA.js";import"./ProgressBar-B7Qw6Oz5.js";import"./Label-DuIRh-OA.js";import"./Hidden-ZdS7KL-c.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dm4P9x_e.js";import"./context-CagKbUB8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dh95oJrl.js";import"./useFocus-CPWqIWXE.js";import"./useFocusRing-BEFuW2jQ.js";import"./useFocusable-CMm0HKMh.js";import"./RSPContexts-BwOC89i_.js";import"./OverlayArrow-D4OM36Ak.js";import"./useControlledState-BplPLiu_.js";import"./Collection-ghLLd_h5.js";import"./CollectionBuilder-BVAhjiTU.js";import"./SelectionIndicator-Ca0su_yA.js";import"./Separator-CUNyVGir.js";import"./Text-CKhrTn1e.js";import"./SelectionManager-XN_Qhkpg.js";import"./useEvent-BzLyT1Z_.js";import"./useCollator-BikNysJq.js";import"./FocusScope-Ptf693hL.js";import"./useLocalizedStringFormatter-CAz6Kqbv.js";import"./VisuallyHidden-DDIsYkXL.js";import"./flowComponent-CeLLqyNG.js";import"./context-BbDJJF8K.js";import"./useStatic-D6cqHfiz.js";import"./OverlayContextProvider-6b1aLjhJ.js";import"./DialogTriggerView-hBiyDoeN.js";import"./dynamic-7BzGeVfl.js";import"./Overlay-BnRy0K17.js";import"./useOverlayController-2Ut0kNT7.js";import"./LoadingSpinner-d-LCgLDQ.js";import"./IconWarning-DnAYmwAM.js";import"./remote-CpzHRyGl.js";import"./ButtonView-Cwch5mTd.js";import"./Flex-BtfNHwzQ.js";import"./Text-DxwcuI28.js";import"./browser-DqZUP5aL.js";import"./EmulatedBoldText-f0IFAvFk.js";import"./getActionGroupSlot-DAKAs_h9.js";import"./Heading-Ij8bChZd.js";const Lo={title:"Actions/Action",component:r,render:A=>o.jsx(r,{...A,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{onAction:d}},e={args:{onAction:u}},s={args:{onAction:d,showFeedback:!0}},c={args:{onAction:u,showFeedback:!0}},i={args:{children:o.jsx(r,{onAction:g,children:l})}},a={args:{onAction:d,children:o.jsx(r,{onAction:d,children:l})}},m={render:()=>o.jsxs(r,{onAction:u,children:[o.jsxs(y,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(h,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
