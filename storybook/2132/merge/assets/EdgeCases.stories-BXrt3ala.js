import{j as r}from"./iframe-Ao-19aY7.js";import{H as p}from"./Heading-QgN9T77K.js";import a from"./Default.stories-yDM9vXqb.js";import{a2 as i}from"./IconWarning-B7Z3gPWk.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-ChGUqDlc.js";import{C as d,a as l}from"./ContextualHelpTrigger-B3G8FKik.js";import{B as c}from"./Button-_rMwV1Xt.js";import{T as g}from"./Text-Cgpj2Q8N.js";import{B as x}from"./Badge-BuVQhiwS.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cs2UiszJ.js";import"./mergeRefs-CpqvPaGj.js";import"./index-Bwqp99l-.js";import"./RSPContexts-Bd7Uumw6.js";import"./utils-WPNuaWF4.js";import"./Section-2WoXliP6.js";import"./context-voT1I8WS.js";import"./Button-CfbtfR1G.js";import"./ProgressBar-BcqTIQAj.js";import"./Hidden-C5KNGjq4.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-7NlFttbo.js";import"./useFocusRing-ByqSttt6.js";import"./useFocusable-BMboqtpt.js";import"./Collection-D6xC-F9z.js";import"./CollectionBuilder-BTcaQmh_.js";import"./SelectionIndicator-M10krl_K.js";import"./Separator-DI5W5_TB.js";import"./browser-BDaFAJwm.js";import"./useLocalizedStringFormatter-C8j8z1fr.js";import"./useStatic-CAyH9HjC.js";import"./dynamic-BWdxymTp.js";import"./AlertIcon-C4DLD5al.js";import"./Popover-wNAiL1x4.js";import"./OverlayTrigger-BCM2xdVL.js";import"./LoadingSpinner-Bt9_hZhS.js";import"./EmulatedBoldText-RvYGXArR.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
