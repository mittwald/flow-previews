import{j as r}from"./iframe-CXJD44gU.js";import{H as i}from"./Heading-BqJcdYMf.js";import a from"./Default.stories-BUnPROFo.js";import{a2 as n}from"./IconWarning-BGBHXtCn.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-0ly9k36p.js";import{C as d,a as l}from"./ContextualHelpTrigger-fA-EYHMX.js";import{B as c}from"./Button-Cqh03G4a.js";import{T as g}from"./Text-D7qfRA1L.js";import{B as x}from"./Badge-BzcGSwdk.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BFLjIfgO.js";import"./index-BSMrjjpe.js";import"./index-CRJWytS4.js";import"./RSPContexts-DduoqfxZ.js";import"./utils-BNVflTSU.js";import"./Section-C4fj5Uhb.js";import"./Action-3nbS0LG3.js";import"./context-CQFOhjaS.js";import"./useStatic-Dhs2fcV6.js";import"./browser-BB5suZC2.js";import"./getActionGroupSlot-B4xny-oM.js";import"./dynamic-By6FwFol.js";import"./Dialog-0oqd1mPP.js";import"./Button-BYCRTXMY.js";import"./ProgressBar-DkMPzF4_.js";import"./Hidden-DV6zenYn.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-FTDoYYrb.js";import"./useFocusRing-B8UGa5Q8.js";import"./useFocusable-BH-e1Dk3.js";import"./OverlayArrow-D2uhXVaI.js";import"./useControlledState-Bnjej2q1.js";import"./Collection-DYOHqOtc.js";import"./CollectionBuilder-D4Pa1_Ag.js";import"./SelectionIndicator-CQbg55hv.js";import"./Separator-FNjaa8bX.js";import"./useLocalizedStringFormatter-Cml1CPb-.js";import"./AlertIcon-D9uZzc44.js";import"./Popover-BkL35Kgm.js";import"./OverlayTrigger-CG63jM03.js";import"./ControlledNotification-CcIZA-Lf.js";import"./ClearPropsContextView-CQgAJ6wW.js";import"./LoadingSpinner-GTDlM8Wf.js";import"./EmulatedBoldText-BVX9n63_.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
