import{j as r}from"./iframe-PDaUHho1.js";import{H as i}from"./Heading-CDhtmS_q.js";import a from"./Default.stories-DKsg1riq.js";import{a2 as n}from"./IconWarning-B0hQIuUq.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DP82Q-mW.js";import{C as d,a as l}from"./ContextualHelpTrigger-B-T84-qA.js";import{B as c}from"./Button-C5eOeaT9.js";import{T as g}from"./Text-PjSitUb9.js";import{B as x}from"./Badge-DOKA-IzE.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-pwAlxQ7Y.js";import"./index-V7XxCnlO.js";import"./index-B4HwJOZh.js";import"./RSPContexts-DnH8q5jT.js";import"./utils-WYXKBT_h.js";import"./Section-HyeX5WSL.js";import"./Action-BuqSGnOY.js";import"./context-BGWGXkWs.js";import"./useStatic-UwW6yb2T.js";import"./browser-Dn1Bftrm.js";import"./getActionGroupSlot-BbmM7byy.js";import"./dynamic-DqsoKxlb.js";import"./Dialog-Bz5XATVl.js";import"./Button-vCn3sloq.js";import"./ProgressBar-m4wkDJ9q.js";import"./Hidden-Cu9gnBmg.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DBDDiU0I.js";import"./useFocusRing-msSK4oeu.js";import"./useFocusable-CU77Oyp_.js";import"./OverlayArrow-j70_eukt.js";import"./useControlledState-DpuOrhgy.js";import"./Collection-CoTpEGUK.js";import"./CollectionBuilder-CiodENHi.js";import"./SelectionIndicator-B4sxL3Ui.js";import"./Separator-BOyasXxD.js";import"./useLocalizedStringFormatter-hpfCA0Xp.js";import"./AlertIcon-VJR10kZy.js";import"./Popover-CQRfq8Pn.js";import"./OverlayTrigger-D2bNYkcD.js";import"./ControlledNotification-BKShNQFf.js";import"./ClearPropsContextView-DBaaVQ6i.js";import"./LoadingSpinner-bLHLQdUH.js";import"./EmulatedBoldText-DeDAxtsF.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const ar=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,ar as __namedExportsOrder,nr as default};
