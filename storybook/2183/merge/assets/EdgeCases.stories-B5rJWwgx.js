import{j as r}from"./iframe-Ctq1zpNY.js";import{H as p}from"./Heading-CoaPK5Bd.js";import a from"./Default.stories-_AGZAMJz.js";import{a1 as i}from"./IconWarning-UjLKXv7l.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BEYUMP2v.js";import{C as d,a as l}from"./ContextualHelpTrigger-BSZNnUoZ.js";import{B as c}from"./Button-DNyG1kJP.js";import{T as g}from"./Text-BfSoULNy.js";import{B as x}from"./Badge-CP-oLjib.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BoUiLDJD.js";import"./mergeRefs-B0cZ0A1R.js";import"./index-CTRuU27q.js";import"./RSPContexts-DHJyFFU0.js";import"./utils-BnoqN3lQ.js";import"./Section-D2jBz3SO.js";import"./context-C8D6suKc.js";import"./Button-CDyTi84i.js";import"./ProgressBar-Bxh0Ye9X.js";import"./Hidden-DCaHa4pK.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BUbxt6aY.js";import"./useFocusRing-CS37ztg9.js";import"./useFocusable-wHVwTxSo.js";import"./Collection-Cmcp_j_K.js";import"./CollectionBuilder-6JKqc06M.js";import"./SelectionIndicator-BUhvtPLn.js";import"./Separator-DoPI3Rcg.js";import"./browser-D7Nrk8GS.js";import"./useLocalizedStringFormatter-Ca1VgSxY.js";import"./useStatic-BZ5oCv4Q.js";import"./dynamic-BfX5vXPY.js";import"./remote-0oz4JQoy.js";import"./AlertIcon-D5hQ6U-3.js";import"./Popover-BOF7jNb2.js";import"./OverlayTrigger-CsCUjwyJ.js";import"./LoadingSpinner-Daveedqv.js";import"./EmulatedBoldText-DAcbt9PZ.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
