import{j as r}from"./iframe-CkyxEoEZ.js";import{H as p}from"./Heading-D13PuJy-.js";import a from"./Default.stories-CwuGqNli.js";import{a2 as i}from"./IconWarning-dMO6L9mh.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BNvXKuRH.js";import{C as d,a as l}from"./ContextualHelpTrigger-DPjIfJLZ.js";import{B as c}from"./Button-Ctvf1H7U.js";import{T as g}from"./Text-Ct1nYKdY.js";import{B as x}from"./Badge-BK2EStVc.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C-fhLM-T.js";import"./mergeRefs-p12aeMPz.js";import"./index-tj7lgiAm.js";import"./RSPContexts-BIZJIOxy.js";import"./utils-BtOaQozS.js";import"./Section-0QWuRp4X.js";import"./context-CmpACB2b.js";import"./Button-wjFvY1UY.js";import"./ProgressBar-x24Uteep.js";import"./Hidden-BZU7hI3a.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-F9TznhPu.js";import"./useFocusRing-BGGtyEFa.js";import"./useFocusable-6nBl_79g.js";import"./Collection-TWw2CUBu.js";import"./CollectionBuilder-DhRqM4RI.js";import"./SelectionIndicator-B6Bj9As3.js";import"./Separator-Bj8gDUdP.js";import"./browser-DbkHv7Lt.js";import"./useLocalizedStringFormatter-BjZwhmR3.js";import"./useStatic-tbDjUfBM.js";import"./dynamic-ly6SdvXD.js";import"./AlertIcon-D6QGpe3w.js";import"./Popover-Dfldgewc.js";import"./OverlayTrigger-D6oe3s8K.js";import"./LoadingSpinner-Bjw5E-ZO.js";import"./EmulatedBoldText-DT8aLwWG.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
