import{j as o}from"./iframe-8dFSbqJz.js";import{a as d,c as u,b as l,s as y}from"./lib-YDNHSB96.js";import{M as h}from"./Modal-Bja1x696.js";import{A}from"./ActionGroup-DXNvDjwv.js";import{B as p}from"./Button-Bp8IuIoY.js";import{H as f}from"./Heading-Dc4Eo12K.js";import{C as F}from"./Content-MqKiWSWQ.js";import{A as r}from"./Action-1KJHzV_0.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-DrPvW6ki.js";import"./flowComponent-K_HgwY7e.js";import"./index-DdTsJ3wf.js";import"./index-QKd42-im.js";import"./Overlay-dTweVu5T.js";import"./OverlayContextProvider-B1nyJ9fy.js";import"./context-Hd2oMXi6.js";import"./useStatic-BgApplVo.js";import"./LoadingSpinner-qRqEZFCl.js";import"./IconChevronDown-BoB9X9Lx.js";import"./remote-D1_oWH-e.js";import"./ariaLive-DqXsnKMw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-YU3aOu6y.js";import"./context-81xqWZ8H.js";import"./utils-CatxVoKl.js";import"./Dialog-BFHdNGes.js";import"./Button-BKsEcO3C.js";import"./ProgressBar-D99M34jy.js";import"./Label-BbJ0t0io.js";import"./Hidden-YN9d6EVo.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CKOrsKHI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BOmL6f1-.js";import"./useFocus-BOo9d3Bd.js";import"./useFocusRing-D1LOVY8w.js";import"./useFocusable-Bm2s2zNQ.js";import"./RSPContexts-CBm4dMuh.js";import"./OverlayArrow-CuoDJSSc.js";import"./useControlledState-DYZXiDwW.js";import"./Collection-qqIe35E-.js";import"./CollectionBuilder-CM8I1Is1.js";import"./SelectionIndicator-BcqL5ZP5.js";import"./Separator-zU8KIdJB.js";import"./Text-BVGarVrb.js";import"./SelectionManager-Cew3fhRb.js";import"./useEvent-gpwnJALn.js";import"./useCollator-B3xP_FE7.js";import"./FocusScope-KuXCUz--.js";import"./VisuallyHidden-PBFdwu-V.js";import"./useOverlayController-DaWbouZp.js";import"./IconClose-DvMPcB33.js";import"./IconX-Dl75Mnu2.js";import"./ButtonView-D6q_Zqot.js";import"./Flex-DjRTnAiZ.js";import"./Text-Bc5PmX1I.js";import"./browser-TJej2Zh2.js";import"./EmulatedBoldText-C5iTwKQF.js";import"./getActionGroupSlot-5XNUJgam.js";import"./IconCheck-ClCsyRZ4.js";import"./Heading-CqTr37PS.js";const vo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
