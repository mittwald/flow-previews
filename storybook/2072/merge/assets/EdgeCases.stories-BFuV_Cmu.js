import{j as r}from"./iframe-DOEJXvGk.js";import{H as p}from"./Heading-B55jlt0S.js";import a from"./Default.stories-TjdLoykf.js";import{a2 as i}from"./IconWarning-Ci_z427u.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-F2NWY7KX.js";import{C as d,a as l}from"./ContextualHelpTrigger-SA4yZZHq.js";import{B as c}from"./Button-BYGUtkd2.js";import{T as g}from"./Text-D2s12SBY.js";import{B as x}from"./Badge-CoMRyfRW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Ccrn_JGz.js";import"./mergeRefs-BUxfbHrI.js";import"./index-cXd2_Nql.js";import"./RSPContexts-bWk5q8vU.js";import"./utils-DdqmmzJ9.js";import"./Section-BqMXvD2Y.js";import"./context-ClAoL54q.js";import"./Button-DlVwZwD1.js";import"./ProgressBar-DdcYoj3j.js";import"./Hidden-BmzTuRrq.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-fI8vs3af.js";import"./useFocusRing-8zbAs-ap.js";import"./useFocusable-DGnKZu4u.js";import"./Collection-Dx7U-2xV.js";import"./CollectionBuilder-CplTTDmS.js";import"./SelectionIndicator-D1mCVvRy.js";import"./Separator-vJb5vpxT.js";import"./browser-DH30uIAM.js";import"./useLocalizedStringFormatter-sTlF3R26.js";import"./useStatic-DU36eiHs.js";import"./dynamic-yU3-i23D.js";import"./AlertIcon-DeM3Y1y8.js";import"./Popover-DVCzA5rA.js";import"./OverlayTrigger-DmCvlVUl.js";import"./LoadingSpinner-C3IBuXDG.js";import"./EmulatedBoldText-8EHop2RJ.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
