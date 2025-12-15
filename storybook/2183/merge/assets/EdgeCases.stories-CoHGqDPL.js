import{j as r}from"./iframe-AfMfDnul.js";import{H as p}from"./Heading-Cl5UGWqj.js";import a from"./Default.stories-DLDYLb-8.js";import{a1 as i}from"./IconWarning-BHjxQDF5.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-urZauIAv.js";import{C as d,a as l}from"./ContextualHelpTrigger-BGD0J07C.js";import{B as c}from"./Button-Dz-J0BZY.js";import{T as g}from"./Text-XXGzm8bZ.js";import{B as x}from"./Badge-eDxwdHYA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D0YtrswE.js";import"./mergeRefs-hRGJQS5p.js";import"./index-Cse-H3Oz.js";import"./RSPContexts-C5kaCkGg.js";import"./utils-wHWs8Mhj.js";import"./Section-ebqGZRf9.js";import"./context-WpTHPnjK.js";import"./Button-CnuzJqL8.js";import"./ProgressBar-BHyKVsx8.js";import"./Hidden-3-cgxJ5L.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-ESdZ7ZET.js";import"./useFocusRing-BCI7vGPi.js";import"./useFocusable-CBVaElx9.js";import"./Collection-B07e3AhT.js";import"./CollectionBuilder-cwz4h6ef.js";import"./SelectionIndicator-DvSIX2eN.js";import"./Separator-Cu7L9zFQ.js";import"./browser-D3b8NrdU.js";import"./useLocalizedStringFormatter-ZYKyDhtN.js";import"./useStatic-oE3CUH2s.js";import"./dynamic-B22nf4Sq.js";import"./remote-BbVCA53p.js";import"./AlertIcon-q77oMlDX.js";import"./Popover-CmYxShpW.js";import"./OverlayTrigger-CzOjAy2I.js";import"./LoadingSpinner-C1jt85JD.js";import"./EmulatedBoldText-pgpRP3jm.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
