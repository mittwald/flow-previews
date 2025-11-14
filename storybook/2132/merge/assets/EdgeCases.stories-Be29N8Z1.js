import{j as r}from"./iframe-U-SQzk2U.js";import{H as p}from"./Heading-LgN9kaRj.js";import a from"./Default.stories-BvqbJEka.js";import{a2 as i}from"./IconWarning-CDCEBJyf.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BDdG2Xyu.js";import{C as d,a as l}from"./ContextualHelpTrigger-G5U05qXX.js";import{B as c}from"./Button-B_mH5guI.js";import{T as g}from"./Text-MZxPcWY_.js";import{B as x}from"./Badge-DINRYIZ4.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B4D8aI1U.js";import"./index-CCRDw9Jm.js";import"./index-CS9SnKd_.js";import"./RSPContexts-CXcRuCAV.js";import"./utils-DoPZZ_D6.js";import"./Section-Cs2_EqxV.js";import"./context-ChAoIJrl.js";import"./Button-DBw5Ol_w.js";import"./ProgressBar-CipRA_mB.js";import"./Hidden-D2mi6DaR.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DG48XepE.js";import"./useFocusRing-B2IDcSiC.js";import"./useFocusable-Ctp8Cukd.js";import"./Collection-D30Phmso.js";import"./CollectionBuilder-CnentVFR.js";import"./SelectionIndicator-CV40_W2v.js";import"./Separator-BXP_D1Un.js";import"./browser-w1PF0DBJ.js";import"./useLocalizedStringFormatter-DxYjk-pp.js";import"./useStatic-BAhUJhAM.js";import"./getActionGroupSlot-BsOJ1KeF.js";import"./dynamic-BNi_8Fxs.js";import"./AlertIcon-81NvLES1.js";import"./Popover-BJPafbQW.js";import"./OverlayTrigger-BjYUeewY.js";import"./ControlledNotification-CprxFH82.js";import"./LoadingSpinner-CC-MYLRK.js";import"./EmulatedBoldText-2j5mm0bP.js";const tr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const or=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,or as __namedExportsOrder,tr as default};
