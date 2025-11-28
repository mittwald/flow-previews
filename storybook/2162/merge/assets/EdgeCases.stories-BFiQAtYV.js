import{j as r}from"./iframe-BfrlpeCk.js";import{H as p}from"./Heading-BzrDriRC.js";import a from"./Default.stories-ClbdS8Qx.js";import{a2 as i}from"./IconWarning-DOKEq-WK.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-Dxv4P94g.js";import{C as d,a as l}from"./ContextualHelpTrigger-DO42vOyq.js";import{B as c}from"./Button-E46WDd4_.js";import{T as g}from"./Text-DdebjF6X.js";import{B as x}from"./Badge-MeQ_8EOt.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CPtIc9N-.js";import"./mergeRefs-B-vbhGNR.js";import"./index-r6rvd85P.js";import"./RSPContexts-Bw86vYvh.js";import"./utils-CZEyphdB.js";import"./Section-Bb4j7C6a.js";import"./context-DUvcrLtv.js";import"./Button-Cjbcx8Zu.js";import"./ProgressBar-DuqIuA6U.js";import"./Hidden-C6jP4SMJ.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-jvNFAhRM.js";import"./useFocusRing-CWlqAuzY.js";import"./useFocusable-DfB_R8F9.js";import"./Collection-BR-xLlJG.js";import"./CollectionBuilder-CmkBKKl-.js";import"./SelectionIndicator-jSUkmTlU.js";import"./Separator-D1Ouw6Ca.js";import"./browser-C0N36_KR.js";import"./useLocalizedStringFormatter-C5Ltlkui.js";import"./useStatic-Bz7IWGfO.js";import"./dynamic-BUKqVZ1H.js";import"./AlertIcon-CfJrkVpH.js";import"./Popover-C3qPsHTW.js";import"./OverlayTrigger-DKKj1P2l.js";import"./LoadingSpinner-BwJAEpX5.js";import"./EmulatedBoldText-eBeMz5kz.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
