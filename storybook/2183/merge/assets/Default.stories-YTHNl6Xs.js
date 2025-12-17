import{j as o}from"./iframe-D8Xbwx9P.js";import{a as d,c as u,b as l,s as y}from"./lib-Bwehpx5y.js";import{M as h}from"./Modal-BtCKdWSD.js";import{A}from"./ActionGroup-DOap5xNu.js";import{B as p}from"./Button-DnjfJoF3.js";import{H as f}from"./Heading-YQCh4-8a.js";import{C as F}from"./Content-CCOnNFzG.js";import{A as r}from"./Action-Dmcwzy-D.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-C7V4-Zrv.js";import"./flowComponent-CigogB48.js";import"./index-CYTinXvO.js";import"./index-BkN34slO.js";import"./Overlay-NxtKr5Dm.js";import"./OverlayContextProvider-C9wat-C-.js";import"./context-DTPirBdX.js";import"./useStatic-76h0-2Qu.js";import"./LoadingSpinner-CRZU7QZf.js";import"./IconApp-Ch7b1vIu.js";import"./remote-BpFUxGPl.js";import"./ariaLive-CRfqyPSL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CXsD6kYA.js";import"./context-CMvcEg-k.js";import"./utils-C3Tuzz6i.js";import"./Dialog-Du_kPH7o.js";import"./Button-WVOu4VhQ.js";import"./ProgressBar-CVumlVqB.js";import"./Label-rFd_FIkn.js";import"./Hidden-zhCtJ-LB.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DE67nUnP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CvIVggVb.js";import"./useFocus-D1eNONK1.js";import"./useFocusRing-kQK9kbZa.js";import"./useFocusable-CozNvSU7.js";import"./RSPContexts-CsOhl7yw.js";import"./OverlayArrow-CaVIvu7y.js";import"./useControlledState-YZIEyxRh.js";import"./Collection-CquzgsCv.js";import"./CollectionBuilder-Cl1VQ76h.js";import"./SelectionIndicator-DvsfeWbh.js";import"./Separator-0bv_QzU7.js";import"./Text-C0Eqp9FN.js";import"./SelectionManager-CxpfoWMp.js";import"./useEvent-BrS2p23g.js";import"./useCollator-CoCLyJRC.js";import"./FocusScope-_ezdgzai.js";import"./VisuallyHidden-0JTBVxma.js";import"./useOverlayController-DFfxBH9t.js";import"./IconClose-nKEyU94I.js";import"./IconX-HMFf4w5l.js";import"./ButtonView-CmEGiNhn.js";import"./Flex-p-fRxYeK.js";import"./Text-ZHIm2izM.js";import"./browser-BEcu8ny4.js";import"./EmulatedBoldText-Cd0UPmPK.js";import"./getActionGroupSlot-cjlWHciT.js";import"./IconCheck-Djd4ZBy_.js";import"./Heading-B1sGhKQ8.js";const vo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
