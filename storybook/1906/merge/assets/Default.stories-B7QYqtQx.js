import{j as o}from"./iframe-Cwcli8hM.js";import{a as d,c as u,b as l,s as y}from"./lib-mpzSO2LU.js";import{M as h}from"./Modal-FtpXqUfx.js";import{A}from"./ActionGroup-CmTRqzAJ.js";import{B as p}from"./Button-I78ZffkB.js";import{H as f}from"./Heading-BXqGaPUH.js";import{C as F}from"./Content-CbaVdjzx.js";import{A as r}from"./Action-BmzkYOqA.js";import"./preload-helper-PPVm8Dsz.js";import"./OverlayTrigger-hzfyObC1.js";import"./Dialog-q_50MZOU.js";import"./Button-CxQOY8r5.js";import"./utils-C3qjWKVL.js";import"./index-CUAtZNjK.js";import"./clsx-B-dksMZM.js";import"./index-CcWFAiT6.js";import"./ProgressBar-DHOJVCPT.js";import"./Label-BInCCjcu.js";import"./Hidden-D2HOHB0p.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-23O2EZ34.js";import"./context-ChPy2xgW.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CMhi8zJA.js";import"./useFocus-CSHYTGFD.js";import"./useFocusRing-Dl7LqS86.js";import"./useFocusable-CLuaS2Z4.js";import"./RSPContexts-BLwT6Sdo.js";import"./OverlayArrow-DeAkcNil.js";import"./useControlledState-ClHEyKKa.js";import"./Collection-S1sfFYaT.js";import"./CollectionBuilder-DdJjWtx-.js";import"./SelectionIndicator-BxaGM9C6.js";import"./Separator-Bk8vCnmb.js";import"./Text-C18q6Xnm.js";import"./SelectionManager-BU8PQU75.js";import"./useEvent-DJX5f_Tm.js";import"./useCollator-BttCli9Q.js";import"./FocusScope-Bznsa9g2.js";import"./useLocalizedStringFormatter-Bgk77FUt.js";import"./VisuallyHidden-BpjAuZe7.js";import"./flowComponent-B-m_iRlw.js";import"./context-Cu13uzRC.js";import"./useStatic-DFI4OZ-s.js";import"./OverlayContextProvider-Br5Omgfk.js";import"./DialogTriggerView-De21Bppx.js";import"./dynamic-kiJ_5GPX.js";import"./Overlay-y9VJ1oOm.js";import"./useOverlayController-YjLSX7hV.js";import"./LoadingSpinner-KOoU2K2x.js";import"./IconWarning-KJvMQc2O.js";import"./remote-wJ26wkpE.js";import"./ButtonView-D7GKlOQa.js";import"./Flex-8J53LqY5.js";import"./Text-D-waKGHU.js";import"./browser-Dim89v3O.js";import"./EmulatedBoldText-B6NHIM-L.js";import"./getActionGroupSlot-DirYDTjy.js";import"./Heading-BEUpHugf.js";const Lo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
