import{j as o}from"./iframe-BGRRgBVS.js";import{a as d,c as u,b as l,s as y}from"./lib-C3J6c_Z3.js";import{M as h}from"./Modal-B7HK7gsm.js";import{A}from"./ActionGroup-J5J8sMqL.js";import{B as p}from"./Button-DE3NXKd3.js";import{H as f}from"./Heading-Cumb0HFc.js";import{C as F}from"./Content-WUqaR34u.js";import{A as r}from"./Section-CxYjgLxV.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-BLodhe7F.js";import"./flowComponent-DxP1iS0K.js";import"./index-BZgSK6Sm.js";import"./index-BMa1Nvcv.js";import"./context-BRtiiBiN.js";import"./Button-BqwVNYKG.js";import"./utils-Csx1o_4e.js";import"./ProgressBar-DH5v7dhL.js";import"./Hidden-BonuGHXz.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-u16jW8Lq.js";import"./useFocusRing-DfB0I3XE.js";import"./useFocusable-DNKvZOnB.js";import"./RSPContexts-DYF8VjHX.js";import"./Collection-CVup-l4E.js";import"./CollectionBuilder-VI38YI2I.js";import"./SelectionIndicator-C9TSpSC8.js";import"./Separator-BlumgMKZ.js";import"./browser-ClmblGlM.js";import"./useLocalizedStringFormatter-q3-eKfRR.js";import"./useStatic-CZqew5Ty.js";import"./FileCardList-CTiEP_oD.js";import"./IconWarning-H-qi_LLu.js";import"./Avatar-_Q-1CRZY.js";import"./AlertIcon-DXcBlIQl.js";import"./Image-m8wJl4Hq.js";import"./Text-DzPdDmfA.js";import"./EmulatedBoldText-DrL9qLDd.js";import"./Link-DUHrLYIV.js";import"./ControlledNotification-ClQ4DWvA.js";import"./LoadingSpinner-uAo8ll_j.js";import"./Flex-Cm5MtHoW.js";import"./Accordion-CWMlovg1.js";import"./Alert-DZ3SaNfX.js";import"./AlertBadge-BP8QuAoC.js";import"./Align-XZN-93fT.js";import"./AvatarStack-naPDjz-Y.js";import"./BigNumber-B2BemRIb.js";import"./Breadcrumb-89IOhSC8.js";import"./Legend-Cfzh9jRu.js";import"./Color-DhuO5H_5.js";import"./TableFooterRow-DxdhKCQ5.js";import"./SkeletonText-CETwMYrU.js";import"./Label-C71FRL96.js";import"./CounterBadge-jsL76cSL.js";import"./DonutChart-CBKPVTFl.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-fuO6rZ67.js";import"./Header-CWu5q_yZ.js";import"./Initials-wMj0dCzb.js";import"./InlineCode-BW_4nfEu.js";import"./LayoutCard-BYw3vf8Y.js";import"./Separator-DYQ__sSx.js";import"./MessageSeparator-C9JYZyz7.js";import"./NavigationGroup-BS96zRf9.js";import"./Notification-BxWa1kbr.js";import"./NotificationProvider-O7MbGuDR.js";import"./ProgressBar-Fo13G1Rz.js";import"./Rating-DPKBC8ZF.js";import"./Skeleton-CCnLs0pz.js";const Eo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},i={args:{children:o.jsx(r,{action:y,children:l})}},c={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
