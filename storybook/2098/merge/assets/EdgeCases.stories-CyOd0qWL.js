import{j as r}from"./iframe-Dpfie29P.js";import{H as i}from"./Heading-eNsITwkI.js";import a from"./Default.stories-D1UqXWlb.js";import{a2 as n}from"./IconWarning-DahfVj-v.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DxMnuHAk.js";import{C as d,a as l}from"./ContextualHelpTrigger-CnpzHhgF.js";import{B as c}from"./Button-CP1CQ4aA.js";import{T as g}from"./Text-BxUYsUAw.js";import{B as x}from"./Badge-CHRXsszy.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cjzkqjb4.js";import"./index-__VJVmNO.js";import"./index-B8L1MmPw.js";import"./RSPContexts-Dy6WsHjT.js";import"./utils-ByCVrYF8.js";import"./Section-c2Df7q2j.js";import"./Action-C_vTBufy.js";import"./context-D7kPYOyQ.js";import"./useStatic-_lGyJa-K.js";import"./browser-SX7l3t_S.js";import"./getActionGroupSlot-BIjlchTd.js";import"./dynamic-CxKv4_uB.js";import"./Dialog-D4TBWAAb.js";import"./Button-CE70VFoQ.js";import"./ProgressBar-DBQgu7rG.js";import"./Hidden-X2etvrQI.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CImZbjU9.js";import"./useFocusRing-B3ev5CsH.js";import"./useFocusable-MRbdgJr0.js";import"./OverlayArrow-tgf2ia9L.js";import"./useControlledState-B9oskcjG.js";import"./Collection-DAHgHC5D.js";import"./CollectionBuilder-CVpE0_tX.js";import"./SelectionIndicator-DD22eJg1.js";import"./Separator-zYh5FghF.js";import"./useLocalizedStringFormatter-DKCw3c-I.js";import"./AlertIcon-CjVy_3fH.js";import"./Popover-DPNrzN76.js";import"./OverlayTrigger-B5J3YKQv.js";import"./ControlledNotification-4HAxUIZG.js";import"./ClearPropsContextView-xbn_SAqK.js";import"./LoadingSpinner-BvFhoBs5.js";import"./EmulatedBoldText-DQbMaGdb.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      {dummyText.medium}
    </Heading>
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      <IconMember />
      {dummyText.long}
      <AlertBadge>Alert</AlertBadge>
      <Badge>Badge</Badge>
    </Heading>
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <Heading {...props}>
      {dummyText.long}
      <ContextualHelpTrigger>
        <Button />
        <ContextualHelp {...props}>
          <Text>{dummyText.medium}</Text>
        </ContextualHelp>
      </ContextualHelpTrigger>
    </Heading>
}`,...m.parameters?.docs?.source}}};const ar=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,ar as __namedExportsOrder,nr as default};
