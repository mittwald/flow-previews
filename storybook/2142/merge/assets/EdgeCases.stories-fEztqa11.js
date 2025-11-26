import{j as r}from"./iframe-B7faIpc2.js";import{H as p}from"./Heading-DQAVgOUX.js";import a from"./Default.stories-D9VMVL70.js";import{a2 as i}from"./IconWarning-RXBUNZpo.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-C_NAxNEx.js";import{C as d,a as l}from"./ContextualHelpTrigger-CoqA6lQ-.js";import{B as c}from"./Button-C65qYEPV.js";import{T as g}from"./Text-BW5jU57O.js";import{B as x}from"./Badge-BaUtza3s.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DvcRwh-b.js";import"./mergeRefs-DocynWAk.js";import"./index-Cm9A5t92.js";import"./RSPContexts-Bww9Tcci.js";import"./utils-Dgdioq7j.js";import"./Section-BRbBI6XS.js";import"./context-BRyJJeXK.js";import"./Button-Br-rQQva.js";import"./ProgressBar-Cpr3Nm-I.js";import"./Hidden-CI4Kyuw4.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BdWnF-Tv.js";import"./useFocusRing-BnSOUYVK.js";import"./useFocusable-BknYbShF.js";import"./Collection-B_b9uSvy.js";import"./CollectionBuilder-BF29HNem.js";import"./SelectionIndicator-CVtQG64z.js";import"./Separator-BwGATjgB.js";import"./browser-CF6H-xjM.js";import"./useLocalizedStringFormatter-CHCbdM4l.js";import"./useStatic-d3wvmCdr.js";import"./dynamic-DNE-pYSI.js";import"./AlertIcon-BgMVJ-0R.js";import"./Popover-QuqvLiOu.js";import"./OverlayTrigger-mzSlkfM-.js";import"./LoadingSpinner-mrsqqnDm.js";import"./EmulatedBoldText-C1Px7vMV.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
