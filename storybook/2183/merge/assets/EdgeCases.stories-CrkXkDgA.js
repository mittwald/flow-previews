import{j as r}from"./iframe-Br-RCPWN.js";import{H as p}from"./Heading-BOVN6eFE.js";import a from"./Default.stories-z5YBObf4.js";import{a1 as i}from"./IconWarning-C1NRfwVV.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DZwGkMpO.js";import{C as d,a as l}from"./ContextualHelpTrigger-DYkgoDVG.js";import{B as c}from"./Button-D54g6t8r.js";import{T as g}from"./Text-CIylET5F.js";import{B as x}from"./Badge-AGFHXSuV.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CSAj95jw.js";import"./mergeRefs-DP0fvyvw.js";import"./index-DO8vOkwc.js";import"./RSPContexts-CI5k95q6.js";import"./utils-Dak_ECAp.js";import"./Section-DJ8xVnwh.js";import"./context-De-RWUql.js";import"./Button-CoaZdKpJ.js";import"./ProgressBar-DLYSkAPs.js";import"./Hidden-BWng0Hd6.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Bc5k9Bh6.js";import"./useFocusRing-kD3u5y5H.js";import"./useFocusable-B6Sg882a.js";import"./Collection-DW1fpUON.js";import"./CollectionBuilder-BjAB2jGU.js";import"./SelectionIndicator-H4UlTQ5u.js";import"./Separator-WgOMTL7q.js";import"./browser-Dyp86VHf.js";import"./useLocalizedStringFormatter-DcURVzAt.js";import"./useStatic-eGeAE8fm.js";import"./dynamic-CeRu270G.js";import"./remote-Bo4xuhzH.js";import"./AlertIcon-Ci_dM1ct.js";import"./Popover-QdAZ89s_.js";import"./OverlayTrigger-D0y2BIl1.js";import"./LoadingSpinner-B0xf-tui.js";import"./EmulatedBoldText-DiJCrkGJ.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
