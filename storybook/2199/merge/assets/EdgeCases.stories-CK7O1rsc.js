import{j as r}from"./iframe-Ckegua2-.js";import{H as p}from"./Heading-CD3Wslox.js";import a from"./Default.stories-D_gjREb_.js";import{a2 as i}from"./IconWarning-Gc4Ng5zo.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-CARGCkX2.js";import{C as d,a as l}from"./ContextualHelpTrigger-CXW4Wy_s.js";import{B as c}from"./Button-DoXsYGKN.js";import{T as g}from"./Text-Bc5eZX2G.js";import{B as x}from"./Badge-DMon6P2Z.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B0wHrVrI.js";import"./mergeRefs-CXKhTFR6.js";import"./index-CxQn1E-Y.js";import"./RSPContexts-B2_NTObV.js";import"./utils-CYmNuJtI.js";import"./Section-hzyeLE3m.js";import"./context-CF7hXZMA.js";import"./Button-DWZpmyCC.js";import"./ProgressBar-DIFZ8Kql.js";import"./Hidden-kHVBbfV7.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Dskisrvm.js";import"./useFocusRing-BMhGy4sM.js";import"./useFocusable-oEaC2Y8Z.js";import"./Collection-ezizCYTp.js";import"./CollectionBuilder-BabOu3fh.js";import"./SelectionIndicator-BgkqkO5H.js";import"./Separator-B9FzUmmI.js";import"./browser-CQVzEu0I.js";import"./useLocalizedStringFormatter-Q4I4FS-7.js";import"./useStatic-CoW39G77.js";import"./dynamic-6Flvv8a3.js";import"./AlertIcon-Dy5HewGT.js";import"./Popover-D8pa3B3p.js";import"./OverlayTrigger-DO7Mueac.js";import"./LoadingSpinner-Cp0jDW5T.js";import"./EmulatedBoldText-DGrw2Xfi.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
