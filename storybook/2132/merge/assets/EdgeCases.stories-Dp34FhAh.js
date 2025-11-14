import{j as r}from"./iframe-DNdCOOr1.js";import{H as p}from"./Heading-BPbMgDfP.js";import a from"./Default.stories-CxmFZ6OW.js";import{a2 as i}from"./IconWarning-lDDrCB8Z.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-CdMzeFyf.js";import{C as d,a as l}from"./ContextualHelpTrigger-D8R9IQKT.js";import{B as c}from"./Button-Bi5-Bex0.js";import{T as g}from"./Text-BN_zs0IC.js";import{B as x}from"./Badge-BgTTIbTx.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BQ7eQhTD.js";import"./mergeRefs-BH624zqo.js";import"./index-C14X84sQ.js";import"./RSPContexts-CgZ3T_zH.js";import"./utils-B65MerL9.js";import"./Section-BzQXps3w.js";import"./context-EmNd6Ym2.js";import"./Button-CTVqlwB9.js";import"./ProgressBar-BQC3e8cN.js";import"./Hidden-D3qCYkY1.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BCLfHoxJ.js";import"./useFocusRing-D3q76LhO.js";import"./useFocusable-BkrL2nIQ.js";import"./Collection-BkL2_ZU0.js";import"./CollectionBuilder-BDT3C6pE.js";import"./SelectionIndicator-CQqAu7NQ.js";import"./Separator-D7EKlcCC.js";import"./browser-BSEwgGQy.js";import"./useLocalizedStringFormatter-L5dTHvQZ.js";import"./useStatic-Dgx0IMN1.js";import"./getActionGroupSlot-DNgGzsK5.js";import"./dynamic-DEywgUGw.js";import"./AlertIcon-CYdwEvIq.js";import"./Popover-DIiESuql.js";import"./OverlayTrigger-BJUnFqxk.js";import"./LoadingSpinner-nsia9vBo.js";import"./EmulatedBoldText-BjpVZV9x.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
