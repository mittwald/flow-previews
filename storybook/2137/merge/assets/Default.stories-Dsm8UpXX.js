import{j as o}from"./iframe-Du_qouD_.js";import{a as d,c as u,b as l,s as y}from"./lib-CCOAJOAo.js";import{M as h}from"./Modal-MGKc6uhP.js";import{A}from"./ActionGroup-c_vby5Es.js";import{B as p}from"./Button-BKlVJwIr.js";import{H as f}from"./Heading-BD53zFfj.js";import{C as F}from"./Content-COgSVb0P.js";import{A as r}from"./Section-CP9sTMI1.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-DNgOdReL.js";import"./flowComponent-rDAUUIs0.js";import"./index-D82te6aO.js";import"./index-Cna9wk2l.js";import"./context-DfFGI3iw.js";import"./Button-9sEBXLr3.js";import"./utils-4z-LHo9M.js";import"./ProgressBar-C8JML2M-.js";import"./Hidden-CaZvTbg6.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-56QjP3j7.js";import"./useFocusRing-BYlN_rzy.js";import"./useFocusable-BqYSv_Ya.js";import"./RSPContexts-As5yeo4a.js";import"./Collection-BebXuOLE.js";import"./CollectionBuilder-D1Dgngsg.js";import"./SelectionIndicator-C_AcjXXq.js";import"./Separator-BJxFAi6I.js";import"./browser-BIThWoNI.js";import"./useLocalizedStringFormatter-BKry4ylq.js";import"./useStatic-6KqxvQye.js";import"./FileCardList--2ZieuqZ.js";import"./IconWarning-BYd1-Vrn.js";import"./Avatar-oOQkBEoe.js";import"./AlertIcon-BgpHVoHm.js";import"./Image-B0yvlgyM.js";import"./Text-DSmwKiK5.js";import"./EmulatedBoldText-B6vrvEtA.js";import"./Link-DmpqZIYe.js";import"./ControlledNotification-CTznOicW.js";import"./LoadingSpinner-BVVVUtHG.js";import"./LayoutCard-CmyaRvn3.js";import"./Accordion-D5QR60XG.js";import"./Alert-Uq-uDDS4.js";import"./AlertBadge-DNhsD8PX.js";import"./Align-CyVr7OuT.js";import"./AvatarStack-B5s0vN09.js";import"./BigNumber-Bu3QLXdy.js";import"./Breadcrumb-CfGUSdKq.js";import"./Legend-BiYpWzHE.js";import"./Color-7P_eHJ9S.js";import"./TableFooterRow-BddxhsDt.js";import"./SkeletonText-DpYKmaWm.js";import"./Label-DvpwKxrD.js";import"./CounterBadge-DDdYZMsC.js";import"./DonutChart-Bdt4MC04.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-Be-RmoYN.js";import"./Header-DGdm1J9_.js";import"./Initials-C70OZOod.js";import"./InlineCode-Bj3DEPPw.js";import"./Separator-eScn2XrM.js";import"./MessageSeparator-Brh9XJMv.js";import"./NavigationGroup-DtZinfMC.js";import"./Notification-C9dD5dH2.js";import"./NotificationProvider-RI2P6NdS.js";import"./ProgressBar-CmgKYrsQ.js";import"./Rating-CkwJjaD1.js";import"./Skeleton-DIz56cOV.js";import"./getActionGroupSlot-h_LfU4fO.js";const Eo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},i={args:{children:o.jsx(r,{action:y,children:l})}},c={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Action action={syncFunction}>{button}</Action>
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    action: asyncFunction,
    children: <Action action={asyncFunction}>{button}</Action>
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const _o=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,i as Nested,c as NestedAsync,m as WithConfirmationModal,_o as __namedExportsOrder,Eo as default};
