import{j as r}from"./iframe-BnYuPSwa.js";import{H as i}from"./Heading-4zkTqPYo.js";import a from"./Default.stories-C4ZYs73G.js";import{a2 as n}from"./IconWarning-BustMFuX.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-B-Z_FZet.js";import{C as d,a as l}from"./ContextualHelpTrigger-9AdY9RaJ.js";import{B as c}from"./Button-D7B2hjaJ.js";import{T as g}from"./Text-DmoS4eOG.js";import{B as x}from"./Badge-BM88wgML.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DiACFF0p.js";import"./index-BcFNTWxO.js";import"./index-CqvtBndu.js";import"./RSPContexts-DdoqaBcc.js";import"./utils-DoWPBSSq.js";import"./Section-DPXS4_zS.js";import"./Action-DJ16dVnI.js";import"./context-CLEKsYXA.js";import"./useStatic-B3gZPUVa.js";import"./browser-Bkf_ja0R.js";import"./getActionGroupSlot-DLw-maV0.js";import"./dynamic-Dm-4Ig_M.js";import"./Dialog-BiHrEAWw.js";import"./Button-C47MeqAR.js";import"./ProgressBar-BRViR90l.js";import"./Hidden-C5Dr68xZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DQlYt1c9.js";import"./useFocusRing-CPn0GoCO.js";import"./useFocusable-bs-iuI5B.js";import"./OverlayArrow-DrXNZQ3T.js";import"./useControlledState-Cpob7QcG.js";import"./Collection-BD1KYYyZ.js";import"./CollectionBuilder-DbTeSjLO.js";import"./SelectionIndicator-B0tJx4x8.js";import"./Separator-Bd0C07Us.js";import"./useLocalizedStringFormatter-Cnytr8Uw.js";import"./AlertIcon-B4i3LjbA.js";import"./Popover-CIQAqIV0.js";import"./OverlayTrigger-dzvMh6qS.js";import"./ControlledNotification-DFyhdCgQ.js";import"./ClearPropsContextView-CsEGO0Nn.js";import"./LoadingSpinner-14_SbsZZ.js";import"./EmulatedBoldText-DyenmRAR.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
