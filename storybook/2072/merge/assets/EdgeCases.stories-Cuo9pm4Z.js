import{j as r}from"./iframe-MIgL3t-o.js";import{H as p}from"./Heading-BGfwvjE9.js";import a from"./Default.stories-DpuMHrdh.js";import{a2 as i}from"./IconWarning-CaixpT4r.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-C2q-OhWS.js";import{C as d,a as l}from"./ContextualHelpTrigger-D-Yb9hBa.js";import{B as c}from"./Button-Bm-VICQC.js";import{T as g}from"./Text-CBtQMAPT.js";import{B as x}from"./Badge-cRRWToon.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D08VhguK.js";import"./mergeRefs-DFlQ0eaD.js";import"./index-D5QMlcQF.js";import"./RSPContexts-ByAL28zK.js";import"./utils-DBPvjchL.js";import"./Section-DSxo8JPS.js";import"./context-BpnnESCC.js";import"./Button-BoUtMxCQ.js";import"./ProgressBar-B2x1EXTK.js";import"./Hidden-DewfgLfM.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BN8VYe9y.js";import"./useFocusRing-qMh6fvoq.js";import"./useFocusable-LR8FLvJr.js";import"./Collection--DnqN1NB.js";import"./CollectionBuilder-49chxnhy.js";import"./SelectionIndicator-BNvv8rtj.js";import"./Separator-BNhZRG5D.js";import"./browser-ZlggRhGh.js";import"./useLocalizedStringFormatter-D7iWn3FU.js";import"./useStatic-Drcz9tkt.js";import"./dynamic-T1pzav9P.js";import"./AlertIcon-Cr2UlT4F.js";import"./Popover-CB28VzMp.js";import"./OverlayTrigger-BTgo3ogI.js";import"./LoadingSpinner-B8Zs_K9s.js";import"./EmulatedBoldText-DS7oXEiE.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
