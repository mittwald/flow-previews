import{j as r}from"./iframe-Bo-CC4om.js";import{H as p}from"./Heading-BHjCTnZi.js";import a from"./Default.stories-e_svx116.js";import{a1 as i}from"./IconWarning-B7qIXHf5.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BIsElKxu.js";import{C as d,a as l}from"./ContextualHelpTrigger-qV88HZ0Q.js";import{B as c}from"./Button-DsbAYxy6.js";import{T as g}from"./Text-FWtYFqa_.js";import{B as x}from"./Badge-KHAUUQ1g.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-JVmwHNwK.js";import"./mergeRefs-BCVLU5t5.js";import"./index-Cq4e0PeD.js";import"./RSPContexts-BIpJdst2.js";import"./utils-BE4vzmGc.js";import"./Section-BSzb61PI.js";import"./context-Dp75aXTI.js";import"./Button-DEzwtm5X.js";import"./ProgressBar-1VAtpU2v.js";import"./Hidden-DO4405Os.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DUzMMmSG.js";import"./useFocusRing-ChCBtORy.js";import"./useFocusable-B-PGRSDZ.js";import"./Collection-D6MbkC5o.js";import"./CollectionBuilder-B0V3ZRNt.js";import"./SelectionIndicator-BLd_vFKr.js";import"./Separator-BoV_7H5z.js";import"./browser-CQUdwXOL.js";import"./useLocalizedStringFormatter-C8gMVCfn.js";import"./useStatic-CUzdYRpB.js";import"./dynamic-DI9mkNr1.js";import"./remote-B4cOsRJO.js";import"./AlertIcon-mGxxCUjy.js";import"./Popover-CuQlxumw.js";import"./OverlayTrigger-CdAPQ6Lz.js";import"./LoadingSpinner-U2Qf3euF.js";import"./EmulatedBoldText-DaZX5sg6.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
