import{j as r}from"./iframe-D_IiP5QF.js";import{H as p}from"./Heading-DD9mIgnZ.js";import a from"./Default.stories-BqpUUJ5S.js";import{a2 as i}from"./IconWarning-CeWNQ8u9.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DIoWGYfv.js";import{C as d,a as l}from"./ContextualHelpTrigger-Dpf2pUop.js";import{B as c}from"./Button-DslN622a.js";import{T as g}from"./Text-DtkWnfcs.js";import{B as x}from"./Badge-CKHtuWwK.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-TH6V0sK9.js";import"./mergeRefs-Bp0aekJa.js";import"./index-BTEdBuyN.js";import"./RSPContexts-rRqbWPHZ.js";import"./utils-BUDUz3oT.js";import"./Section-DN7xTxEc.js";import"./context-DdWIe0N6.js";import"./Button-wMdqoBKT.js";import"./ProgressBar-D214GkFL.js";import"./Hidden-zZrG9yI5.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CzHIh5kC.js";import"./useFocusRing-DHnNsPBr.js";import"./useFocusable-dF9VeguM.js";import"./Collection-Dl2pWzkI.js";import"./CollectionBuilder-BsunlkxQ.js";import"./SelectionIndicator-BdD8HwUv.js";import"./Separator-DWlmTG_C.js";import"./browser-Xi37Uwf1.js";import"./useLocalizedStringFormatter-Bl7QXKV0.js";import"./useStatic-D7hf1hLx.js";import"./dynamic-0ssToOFv.js";import"./AlertIcon-CiVM0veU.js";import"./Popover-LH5uR-Ai.js";import"./OverlayTrigger-B9GYFSa8.js";import"./LoadingSpinner-DAahn8uY.js";import"./EmulatedBoldText-D1D5MzAW.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const er=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,er as __namedExportsOrder,rr as default};
