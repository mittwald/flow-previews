import{j as r}from"./iframe-B7t5ja2b.js";import{H as p}from"./Heading-DEtNPCJN.js";import a from"./Default.stories-BDLTE9lP.js";import{a2 as i}from"./IconWarning-DPxPg2Ca.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DzfN4yVX.js";import{C as d,a as l}from"./ContextualHelpTrigger-DvoCzQUP.js";import{B as c}from"./Button-BoOZwgfJ.js";import{T as g}from"./Text-CDnJtWF_.js";import{B as x}from"./Badge-BODqGCzs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DYQFvX9W.js";import"./mergeRefs-CZ0PXAOw.js";import"./index-0JV4jXfB.js";import"./RSPContexts-BRH8-qft.js";import"./utils-DDfw_94E.js";import"./Section-oj7pNCYW.js";import"./context-XJw--O2B.js";import"./Button-B-5trTj2.js";import"./ProgressBar-CHM1Xifb.js";import"./Hidden-BQUVCBE1.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DT7PsWv1.js";import"./useFocusRing-6FEqbhUJ.js";import"./useFocusable-CX5magUq.js";import"./Collection-DAazmHys.js";import"./CollectionBuilder-CJZxBA1k.js";import"./SelectionIndicator-BZI_ZwZN.js";import"./Separator-BYhTCqx2.js";import"./browser-Dz7UytJe.js";import"./useLocalizedStringFormatter-BbtlMh8_.js";import"./useStatic-BJbQzT7g.js";import"./dynamic-DFqFR_25.js";import"./AlertIcon-Ccz2YQls.js";import"./Popover-BzzsvlUu.js";import"./OverlayTrigger-CQXiz3lB.js";import"./LoadingSpinner-CmbUgNIV.js";import"./EmulatedBoldText-56hmy21w.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
