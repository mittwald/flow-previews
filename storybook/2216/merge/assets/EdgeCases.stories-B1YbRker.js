import{j as r}from"./iframe-Y3MbZLc0.js";import{H as p}from"./Heading-CVXAzirZ.js";import a from"./Default.stories-CgwHJDeh.js";import{a2 as i}from"./IconWarning-B3PcMPJB.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BQxMpKlM.js";import{C as d,a as l}from"./ContextualHelpTrigger-k9oKfs6T.js";import{B as c}from"./Button-C-4kPg6X.js";import{T as g}from"./Text-C_4wJYC6.js";import{B as x}from"./Badge-sRwXs_wN.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DOjZhm--.js";import"./mergeRefs-CRQZITIl.js";import"./index-CsLL2H6p.js";import"./RSPContexts-q4i_V3tQ.js";import"./utils-DRnq9lS5.js";import"./Section-DS5qZGJz.js";import"./context-Bj7ZL7Rk.js";import"./Button-kcvbJBhw.js";import"./ProgressBar-B7UD30wQ.js";import"./Hidden-pCjGcrow.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CS7ddlXF.js";import"./useFocusRing-BPUGHIMZ.js";import"./useFocusable-DuA910js.js";import"./Collection-DMnM_9G9.js";import"./CollectionBuilder-B_T5ko0u.js";import"./SelectionIndicator-BaXUje1t.js";import"./Separator-BiaSXazW.js";import"./browser-BiLdcyq-.js";import"./useLocalizedStringFormatter-6lIKSxih.js";import"./useStatic-DqJeeTMW.js";import"./dynamic-D67dccmA.js";import"./AlertIcon-CV8NrYRI.js";import"./Popover-DQwwR1G3.js";import"./OverlayTrigger-DWI1tl1b.js";import"./LoadingSpinner-6Ne33LZp.js";import"./EmulatedBoldText-C3IQk-9R.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
