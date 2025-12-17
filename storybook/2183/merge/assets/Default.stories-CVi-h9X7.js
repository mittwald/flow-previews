import{j as o}from"./iframe-B7RREkGu.js";import{a as d,c as u,b as l,s as y}from"./lib-DAfajxGR.js";import{M as h}from"./Modal-25qNymjo.js";import{A}from"./ActionGroup-WdHpAfwq.js";import{B as p}from"./Button-TsdLobX9.js";import{H as f}from"./Heading-CSSZTkJF.js";import{C as F}from"./Content-BjjUnL1J.js";import{A as r}from"./Action-BcGzUsr7.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-CWl0hyOW.js";import"./flowComponent-Ck0proso.js";import"./index-DRk3fGOo.js";import"./index-C8g7-GlJ.js";import"./Overlay-BcxU0KCj.js";import"./OverlayContextProvider-BF32Wl14.js";import"./context-BZ5WwvCq.js";import"./useStatic-tA9-ZYDd.js";import"./LoadingSpinner-BcPCL_oT.js";import"./IconChevronDown-D-2czTjO.js";import"./remote-Ba-TbkWY.js";import"./ariaLive-Cy4z0itg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DPy56mLw.js";import"./context-Bh5Je-Bl.js";import"./utils-IlafnyMI.js";import"./Dialog-DUDQW2g7.js";import"./Button-0GEfT2Oo.js";import"./ProgressBar-DnQzXKKa.js";import"./Label-B5AW6xg7.js";import"./Hidden-zIyTGZgm.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Br_94_1T.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C4dOiegp.js";import"./useFocus-BaUOkNoz.js";import"./useFocusRing-BOQTp4b_.js";import"./useFocusable-BSgkjvKf.js";import"./RSPContexts-ByjogFSB.js";import"./OverlayArrow-CQB6hAQJ.js";import"./useControlledState-CfgggjdY.js";import"./Collection-D4FMjQ2t.js";import"./CollectionBuilder-CqiHWup6.js";import"./SelectionIndicator-BAdp0X2f.js";import"./Separator-BITuXniK.js";import"./Text-CPOpiDMW.js";import"./SelectionManager-DVNQ1E_K.js";import"./useEvent-I95ZQAll.js";import"./useCollator-DB2PW37J.js";import"./FocusScope-BWn7UZVq.js";import"./VisuallyHidden-BevTIdSp.js";import"./useOverlayController-CZleQSK6.js";import"./IconClose-lC7f9WFw.js";import"./IconX-B38mn789.js";import"./ButtonView-D7alR_0v.js";import"./Flex-CwbhKQpN.js";import"./Text-DoQtsqjx.js";import"./browser-DkVC7uJT.js";import"./EmulatedBoldText-Coo_6hrl.js";import"./getActionGroupSlot-DiF9Ne2F.js";import"./IconCheck-KHnf6U2_.js";import"./Heading-DImOe7Bo.js";const vo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
