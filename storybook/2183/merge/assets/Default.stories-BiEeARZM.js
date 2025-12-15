import{j as o}from"./iframe-CH_aTfEL.js";import{a as d,c as u,b as l,s as y}from"./lib-BfuvSDh6.js";import{M as h}from"./Modal-DmcXL794.js";import{A}from"./ActionGroup-DOhwLXSI.js";import{B as p}from"./Button-D53gB1eO.js";import{H as f}from"./Heading-YtZItkx8.js";import{C as F}from"./Content-BuDnVATG.js";import{A as r}from"./Action-WNrTLAcY.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./dynamic-vwb-6_Ta.js";import"./PropsContextProvider-DjBCrPYH.js";import"./mergeRefs-BzpEnNcV.js";import"./index-XPJW_oiy.js";import"./TranslationProvider-CWofhASx.js";import"./OverlayContextProvider-D2TVPKxb.js";import"./context-DeId9iUj.js";import"./Button-B1aqxMhV.js";import"./utils-C8srcrY8.js";import"./ProgressBar-i73KRfPj.js";import"./Hidden-xsM_Dwee.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dl7i2EFq.js";import"./useFocusRing-AHO8ppps.js";import"./useFocusable-BEFnslrO.js";import"./RSPContexts-BB0WSv2m.js";import"./Collection-B-PgrD24.js";import"./CollectionBuilder-BkOVlqH0.js";import"./SelectionIndicator-CMFVzQc5.js";import"./Separator-IFFI1hok.js";import"./browser-CjAUGP0i.js";import"./useLocalizedStringFormatter-DVjHg6pM.js";import"./useStatic-DNN3uXbB.js";import"./LoadingSpinner-Cfaoz3gV.js";import"./IconApp-B8Pdxs7V.js";import"./remote-ZsoG4C7l.js";import"./ariaLive-Cw13p-6Q.js";import"./Activity-DkWdwXP6.js";import"./Text-BRh_x9bF.js";import"./EmulatedBoldText-D1x6Y0F_.js";import"./useOverlayController-CA1JZthw.js";import"./index-SBtdq8jY.js";import"./luxon-CkcISRbr.js";import"./IconClose--PUkN_kR.js";import"./IconX-DC29rh3t.js";import"./ButtonView-C0uj8v_y.js";import"./Flex-CI1ect-j.js";import"./getActionGroupSlot-Bn8FL-S5.js";import"./IconCheck-D02mUZL5.js";import"./Heading-DKHBxjOZ.js";const Ao={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},c={args:{children:o.jsx(r,{action:y,children:l})}},i={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const fo=["Default","Async","AsyncLong","AsyncWithFeedback","AsyncLongWithFeedback","Nested","NestedAsync","WithConfirmationModal"];export{n as Async,e as AsyncLong,a as AsyncLongWithFeedback,s as AsyncWithFeedback,t as Default,c as Nested,i as NestedAsync,m as WithConfirmationModal,fo as __namedExportsOrder,Ao as default};
