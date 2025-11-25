import{j as o}from"./iframe-CwbJq3r1.js";import{a as d,c as u,b as l,s as y}from"./lib-DT0ZyFuo.js";import{M as h}from"./Modal-UmnffMZn.js";import{A}from"./ActionGroup-DSsfeKXt.js";import{B as p}from"./Button-CDiKsYfE.js";import{H as f}from"./Heading-FVvo5o9O.js";import{C as F}from"./Content-C5Mjar79.js";import{A as r}from"./Section-BfEoCltm.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-IznNfavT.js";import"./flowComponent-DXmJ7qTr.js";import"./index-DOh9HP8s.js";import"./index-BteSo1JG.js";import"./context-B56GsAs1.js";import"./Button-Bhd7ARuI.js";import"./utils-CPaMkJSd.js";import"./ProgressBar-D7w8upNS.js";import"./Hidden-kKtmtVK1.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BZjsOLmp.js";import"./useFocusRing-BPZjqIep.js";import"./useFocusable-Bezx6XMf.js";import"./RSPContexts-y_L0XZPW.js";import"./Collection-BPSIvTLJ.js";import"./CollectionBuilder-Dfx3RB_n.js";import"./SelectionIndicator-D2MfWhCg.js";import"./Separator-BubC8oQ4.js";import"./browser-kBiuzLEF.js";import"./useLocalizedStringFormatter-B4yqbLzs.js";import"./useStatic-D3JCqzcf.js";import"./FileCardList-CFXH-qjX.js";import"./IconWarning--_iZ6FJr.js";import"./Avatar-C4sAvZAr.js";import"./AlertIcon-D4SK6nAz.js";import"./Image-Bmadiq8c.js";import"./Text-CrE3MVm4.js";import"./EmulatedBoldText-BqYq2ptk.js";import"./Link-BAl7QXrG.js";import"./ControlledNotification-Deb0rzCB.js";import"./LoadingSpinner-mT4GMrz2.js";import"./Flex-DUcNemwf.js";import"./Accordion-BQnPG_jT.js";import"./Alert-x-P_ExCm.js";import"./AlertBadge-DzKW-VdF.js";import"./Align-DDaFErA1.js";import"./AvatarStack-DTk1p07I.js";import"./BigNumber-CBUp9ofh.js";import"./Breadcrumb-CmDjMlTt.js";import"./Legend-D05yZHp2.js";import"./Color-DfZVycWq.js";import"./TableFooterRow-DQtCx6U6.js";import"./SkeletonText-C0pUD_bb.js";import"./Label-hfc8gnGk.js";import"./CounterBadge-Dgds6XQc.js";import"./DonutChart-Bll2GL_J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CSYNvEVP.js";import"./Header-DUtH1frW.js";import"./Initials-DbAAmjP_.js";import"./InlineCode-CA30spDN.js";import"./LayoutCard-BEWgIH8M.js";import"./Separator-ucvqUY6a.js";import"./MessageSeparator-BVYCvU4X.js";import"./NavigationGroup-CmJE1VHy.js";import"./Notification-Cfojyaki.js";import"./NotificationProvider-x4r_49LO.js";import"./ProgressBar-DSuKBqER.js";import"./Rating-e_Mh9Lse.js";import"./Skeleton-DkzLlt2Q.js";const Eo={title:"Actions/Action",component:r,render:g=>o.jsx(r,{...g,children:o.jsx(p,{children:"Button"})}),parameters:{controls:{exclude:["children","action","closeOverlay","openOverlay","toggleOverlay","showFeedback","break","skip"]}}},t={},n={args:{action:d}},e={args:{action:u}},s={args:{action:d,showFeedback:!0}},a={args:{action:u,showFeedback:!0}},i={args:{children:o.jsx(r,{action:y,children:l})}},c={args:{action:d,children:o.jsx(r,{action:d,children:l})}},m={render:()=>o.jsxs(r,{action:u,children:[o.jsxs(h,{slot:"actionConfirm",children:[o.jsx(f,{children:"Delete customer"}),o.jsx(F,{children:"Do you really want to delete the customer?"}),o.jsxs(A,{children:[o.jsx(p,{color:"danger",children:"Confirm"}),o.jsx(p,{color:"secondary",variant:"soft",children:"Abort"})]})]}),o.jsx(p,{color:"secondary",variant:"soft",children:"Delete customer"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
