import{j as r}from"./iframe-DP8YDTL2.js";import{H as p}from"./Heading-DQ_JsPVE.js";import a from"./Default.stories-CNXEH7mD.js";import{a2 as i}from"./IconWarning-Bww0inpG.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DweOtEPJ.js";import{C as d,a as l}from"./ContextualHelpTrigger-BADDKsT4.js";import{B as c}from"./Button-B0W1yT72.js";import{T as g}from"./Text-D-QDVbYg.js";import{B as x}from"./Badge-DB4ZdCrx.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B3HMXUKZ.js";import"./mergeRefs-DsuNZd-H.js";import"./index-CpbCmUJ7.js";import"./RSPContexts-BogeclaT.js";import"./utils-Dm1zmrBW.js";import"./Section-Co64I5rb.js";import"./context-BtDomXbz.js";import"./Button-DyaOfmyD.js";import"./ProgressBar-tqMwcDQP.js";import"./Hidden-DNrH43oS.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-02tevN2j.js";import"./useFocusRing-DixPSib4.js";import"./useFocusable-CgaYGH8g.js";import"./Collection-CPT1vu3H.js";import"./CollectionBuilder-Dz9u6crH.js";import"./SelectionIndicator-YAID1d9m.js";import"./Separator-BJVU84qu.js";import"./browser-SpSM5C6g.js";import"./useLocalizedStringFormatter-CJMUKkFM.js";import"./useStatic-oAu8wkWB.js";import"./dynamic-BTJXp5gG.js";import"./AlertIcon-DVh6pESV.js";import"./Popover-CQf2aBwQ.js";import"./OverlayTrigger-B2YRG83_.js";import"./LoadingSpinner-CpfR1KV-.js";import"./EmulatedBoldText-Crt4TFM2.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
