import{j as r}from"./iframe-Can218wR.js";import{H as p}from"./Heading-8IBs5lHH.js";import a from"./Default.stories-DO0VR1fI.js";import{a1 as i}from"./IconWarning-BNaFuPnH.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BHQgXXA1.js";import{C as d,a as l}from"./ContextualHelpTrigger-B581tVEc.js";import{B as c}from"./Button-AcWb1Ypk.js";import{T as g}from"./Text-C2o8kJX0.js";import{B as x}from"./Badge-DMgarT1o.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-S6gtJagB.js";import"./mergeRefs-BFKt9ill.js";import"./index-41Illj3A.js";import"./RSPContexts-DDMcPOu0.js";import"./utils-BpZeyfMN.js";import"./Section-BTVZhucR.js";import"./context-a0yvmfmj.js";import"./Button-DOjUwuNT.js";import"./ProgressBar-C-KA2KcW.js";import"./Hidden-Ce1Num8z.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DZl3H9Sd.js";import"./useFocusRing--c5UJZIk.js";import"./useFocusable-CkcRY4mN.js";import"./Collection-UY3diGBM.js";import"./CollectionBuilder-JWhtjQVf.js";import"./SelectionIndicator-91dIKEGk.js";import"./Separator-Cy0HWEka.js";import"./browser-BKQSdhjf.js";import"./useLocalizedStringFormatter-CTBkRU60.js";import"./useStatic-s9qeAkES.js";import"./dynamic-B5g7bVbH.js";import"./remote-CHcOizPe.js";import"./AlertIcon-BzlU70Rb.js";import"./Popover-DKl9KM4_.js";import"./OverlayTrigger-B0hM9LOB.js";import"./LoadingSpinner-kXbrPTzW.js";import"./EmulatedBoldText-CmVjk4cf.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const tr=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,tr as __namedExportsOrder,er as default};
