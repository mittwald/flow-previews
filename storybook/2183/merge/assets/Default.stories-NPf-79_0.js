import{j as o}from"./iframe-jqgUclr4.js";import{a as d,c as u,b as l,s as y}from"./lib-B3M9vFjp.js";import{M as h}from"./Modal-fKP9oM3r.js";import{A}from"./ActionGroup-B2OhWuHy.js";import{B as p}from"./Button-Df2EGOwf.js";import{H as f}from"./Heading-BlxvO5L5.js";import{C as F}from"./Content-CZKMoEr6.js";import{A as r}from"./Action-DzpPHaH9.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-CApc5zUm.js";import"./flowComponent-DyY94Eac.js";import"./index-BGlwBVxd.js";import"./index-KptOOerd.js";import"./Overlay-d_5ZqqEn.js";import"./OverlayContextProvider-Couwo4Zm.js";import"./context-BZOmdfdu.js";import"./useStatic-Hn0frKun.js";import"./LoadingSpinner-CE8K3mv7.js";import"./IconApp-B0Y2ZEG7.js";import"./remote-7w2FpeEf.js";import"./ariaLive-DpfDdvhx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BczlrwGV.js";import"./context-BwRvgyRH.js";import"./utils-5IALZqjS.js";import"./Dialog-MLUvkWk2.js";import"./Button-BXhO4gzH.js";import"./ProgressBar-BcVh39-H.js";import"./Label-BRPoLfQP.js";import"./Hidden-DkAwJJ8c.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cr6qu-mQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYHfZHyQ.js";import"./useFocus-FM6ro1uR.js";import"./useFocusRing-C1ZjOk7y.js";import"./useFocusable-Zu3bG2Sq.js";import"./RSPContexts-BB1SZI7P.js";import"./OverlayArrow-ERqZtQI-.js";import"./useControlledState-Cu6J25_e.js";import"./Collection-Com2yYnM.js";import"./CollectionBuilder-GNx_dNeS.js";import"./SelectionIndicator-BFlPMkh7.js";import"./Separator-BmEyAoWP.js";import"./Text-tTF8cKGK.js";import"./SelectionManager-Bd2Xd50m.js";import"./useEvent-DIea5lRE.js";import"./useCollator-B9XYqGj0.js";import"./FocusScope-CJmxo3uG.js";import"./VisuallyHidden-CdTYKgUx.js";import"./useOverlayController-BJtvb9v-.js";import"./IconClose-DzS3gTeK.js";import"./IconX-BapyfuEN.js";import"./ButtonView-DOf3FN9X.js";import"./Flex-D3uhNQ2H.js";import"./Text-B-prTEID.js";import"./browser-EX5vhkWE.js";import"./EmulatedBoldText-B9oQd6gk.js";import"./getActionGroupSlot-C1ZLvjFs.js";import"./IconCheck-BSwcfujb.js";import"./Heading-BCZhlYP-.js";const vo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
