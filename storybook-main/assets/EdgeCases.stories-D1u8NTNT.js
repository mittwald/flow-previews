import{j as r}from"./iframe-GdgkclWs.js";import{H as p}from"./Heading-C8_gRcPp.js";import a from"./Default.stories-COdMSCH5.js";import{a2 as i}from"./IconWarning-CGOSGhfQ.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-B0j6vp5K.js";import{C as d,a as l}from"./ContextualHelpTrigger-xDG4yDFQ.js";import{B as c}from"./Button-B0JEmBNK.js";import{T as g}from"./Text-Cto25n51.js";import{B as x}from"./Badge-CULYHS4O.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CVn6a-Br.js";import"./mergeRefs-CirupE_e.js";import"./index-BpewjHzz.js";import"./RSPContexts-Ih3Q_XqN.js";import"./utils-DoU55v00.js";import"./Section-VLscJ2rL.js";import"./context-C_Ye8hEJ.js";import"./Button-9ssRHwLo.js";import"./ProgressBar-BByvzxb3.js";import"./Hidden-DfAtz4Rp.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-G4rNg2r5.js";import"./useFocusRing-FWhz3ffE.js";import"./useFocusable-CGBhab3M.js";import"./Collection-DiuPOFRO.js";import"./CollectionBuilder-D0v6CoH5.js";import"./SelectionIndicator-CLOzYwLf.js";import"./Separator-DBBWSXz5.js";import"./browser-CClwHdx_.js";import"./useLocalizedStringFormatter-BYse3rRW.js";import"./useStatic-CV3hAC_1.js";import"./dynamic-PnYMfd4f.js";import"./AlertIcon-BHK-Daud.js";import"./Popover-DCEEmw0P.js";import"./OverlayTrigger-FDfyad1h.js";import"./LoadingSpinner-ChMWC-CB.js";import"./EmulatedBoldText-Ddlneh35.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
