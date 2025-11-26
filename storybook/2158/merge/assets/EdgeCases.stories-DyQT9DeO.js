import{j as r}from"./iframe-BULoVSu-.js";import{H as p}from"./Heading-Ds4iBrHb.js";import a from"./Default.stories-BZMEKvRG.js";import{a2 as i}from"./IconWarning-DrICVJv-.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DH8Oxe-N.js";import{C as d,a as l}from"./ContextualHelpTrigger-Cq74vnwF.js";import{B as c}from"./Button-DvOPlqIW.js";import{T as g}from"./Text-Bg3HcGTD.js";import{B as x}from"./Badge-CAMn07m4.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BPIZn01x.js";import"./mergeRefs-CEsjPslJ.js";import"./index-DQ_hsp85.js";import"./RSPContexts-DiGug6wA.js";import"./utils-BZ7EFgdg.js";import"./Section-dZ6T0Qjb.js";import"./context-DrExWdfs.js";import"./Button-DWJqXgIw.js";import"./ProgressBar-CiVynXjH.js";import"./Hidden-C5LzDjRJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BQ6yD6Hs.js";import"./useFocusRing-qHICYkG6.js";import"./useFocusable-BJ4RiU3A.js";import"./Collection-BGk_QoAN.js";import"./CollectionBuilder-CYT9SihX.js";import"./SelectionIndicator-DElX2Ml7.js";import"./Separator-CFtgJiRb.js";import"./browser-CQOPH7Oy.js";import"./useLocalizedStringFormatter-CNoz61n8.js";import"./useStatic-Dyq_KzQP.js";import"./dynamic-D5pGRiRC.js";import"./AlertIcon-BlR5z9QA.js";import"./Popover-CjClCujz.js";import"./OverlayTrigger-vU2Qjf7N.js";import"./LoadingSpinner-BfUy7fQr.js";import"./EmulatedBoldText-CVrOLZNg.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
