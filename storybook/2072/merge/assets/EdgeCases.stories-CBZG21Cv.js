import{j as r}from"./iframe-CzXG2_T8.js";import{H as p}from"./Heading-CrkkWjnL.js";import a from"./Default.stories-B_lfv54n.js";import{a2 as i}from"./IconWarning-BlYr5wdx.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-Bn2Sq-O3.js";import{C as d,a as l}from"./ContextualHelpTrigger-CRKS8P0J.js";import{B as c}from"./Button-CE0-K_QR.js";import{T as g}from"./Text-pNSdlFVE.js";import{B as x}from"./Badge-DuGjQabs.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CBC4MB9g.js";import"./mergeRefs-BrX_XdJI.js";import"./index-CW_J_3Lm.js";import"./RSPContexts-EC3Gwcat.js";import"./utils-CRR3kiFX.js";import"./Section-DRzJ9hQY.js";import"./context-BYHZfe66.js";import"./Button-S7e-r_k_.js";import"./ProgressBar-fGMPBnRY.js";import"./Hidden-QndGxZGG.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CoFMJFUW.js";import"./useFocusRing-BjdVgYEz.js";import"./useFocusable-BDJ0-yDW.js";import"./Collection-BP43cq6b.js";import"./CollectionBuilder-BY3GrVHa.js";import"./SelectionIndicator-Bu5dS93A.js";import"./Separator-kqblG9CO.js";import"./browser-TfqyRUmT.js";import"./useLocalizedStringFormatter-BqSTbtiO.js";import"./useStatic-CSFWNuey.js";import"./dynamic-D9Ldu2R_.js";import"./AlertIcon-CKFy_SRY.js";import"./Popover-BqNRrPxw.js";import"./OverlayTrigger-DvD8AAyr.js";import"./LoadingSpinner-DXLKn-V2.js";import"./EmulatedBoldText-Dax89Wj8.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
