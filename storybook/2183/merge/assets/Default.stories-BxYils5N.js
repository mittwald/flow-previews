import{j as o}from"./iframe-D0TBPZEN.js";import{a as d,c as u,b as l,s as y}from"./lib-CWo4_g30.js";import{M as h}from"./Modal-C2WNce9Z.js";import{A}from"./ActionGroup-DugK52bR.js";import{B as p}from"./Button-KdCw7j9H.js";import{H as f}from"./Heading-C0f3iUVO.js";import{C as F}from"./Content-DrzB-Ekv.js";import{A as r}from"./Action-CXRsCf2v.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-CjDg1E9a.js";import"./flowComponent-BJZeh5dT.js";import"./index-BDPp8Owz.js";import"./index-Cimb1y_J.js";import"./Overlay-D7hLiHcj.js";import"./OverlayContextProvider-DnKHH9W8.js";import"./context-Dojx0CKD.js";import"./useStatic-DuuDvcGk.js";import"./LoadingSpinner-DmqGaBhS.js";import"./IconChevronDown-Bbj4kj6E.js";import"./remote-Dx3xetcp.js";import"./ariaLive-BIzH68Db.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-PXbfbnRK.js";import"./context-qsxormAC.js";import"./utils-D99Vyo1b.js";import"./Dialog-iVAnmgSo.js";import"./Button-DCdA3b5l.js";import"./ProgressBar-NoiT46hC.js";import"./Label-B3MDDK1W.js";import"./Hidden-BgnID2na.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BXxZPVNQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Ccmkzzzz.js";import"./useFocus-DX98yPkU.js";import"./useFocusRing-BVlc85iC.js";import"./useFocusable-BcHjS_A6.js";import"./RSPContexts-CV0e_82S.js";import"./OverlayArrow-CuTWjvt2.js";import"./useControlledState-3iFUkpdV.js";import"./Collection-CLyoYIQ6.js";import"./CollectionBuilder-Dei-INuS.js";import"./SelectionIndicator-BBQRBzIb.js";import"./Separator-Cr3smolU.js";import"./Text-CculVWnY.js";import"./SelectionManager-B6gd3fvk.js";import"./useEvent-pwKWzrmw.js";import"./useCollator-CtMATBZL.js";import"./FocusScope-CRIWFmvd.js";import"./VisuallyHidden-C_1XSOyM.js";import"./useOverlayController-C5iE1soR.js";import"./IconClose-BLQPLvaY.js";import"./IconX-CN6PeFmZ.js";import"./ButtonView-D_l57KnP.js";import"./Flex-CAy2z1eJ.js";import"./Text-eR7t4eab.js";import"./browser-BxCdUhN6.js";import"./EmulatedBoldText-D0EAgwUh.js";import"./getActionGroupSlot-5-XTFZFu.js";import"./IconCheck-BEy8YdgR.js";import"./Heading-D4_SSoqk.js";const vo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
