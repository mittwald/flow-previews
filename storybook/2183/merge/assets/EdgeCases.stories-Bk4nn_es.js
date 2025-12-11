import{j as r}from"./iframe-DJotDYDy.js";import{H as p}from"./Heading-C_Kr3DP-.js";import a from"./Default.stories-40qHwiQy.js";import{a1 as i}from"./IconWarning-B2TzUZi8.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-hHuvqtIQ.js";import{C as d,a as l}from"./ContextualHelpTrigger-C6QZhAxg.js";import{B as c}from"./Button-CQDQfA67.js";import{T as g}from"./Text-D93KUIkM.js";import{B as x}from"./Badge-D6gkAHgL.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C8D7pSNe.js";import"./mergeRefs-TkKWhRS-.js";import"./index-ebT-aqWZ.js";import"./RSPContexts-CU0-oOpl.js";import"./utils-C6pspRr_.js";import"./Section-Bz15vzU3.js";import"./context-OUVwQ3_j.js";import"./Button-Dv79gn0L.js";import"./ProgressBar-Bd3Cq33t.js";import"./Hidden-W-9e78A-.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BRylSH4L.js";import"./useFocusRing-C6VIijHL.js";import"./useFocusable-CiM2gaeN.js";import"./Collection-BohX5TfD.js";import"./CollectionBuilder-BdsPzAgw.js";import"./SelectionIndicator-CS7AIL_l.js";import"./Separator-D2bXbcR5.js";import"./browser-D3MZEWQb.js";import"./useLocalizedStringFormatter-BEYdlta5.js";import"./useStatic-Dv4cIFiB.js";import"./dynamic-D8klVav1.js";import"./remote-C1ZUFjaQ.js";import"./AlertIcon-CudStmFb.js";import"./Popover-CTYLH_EU.js";import"./OverlayTrigger-Ba9XbFcO.js";import"./LoadingSpinner-C00dVMXY.js";import"./EmulatedBoldText-DL9TulOO.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
