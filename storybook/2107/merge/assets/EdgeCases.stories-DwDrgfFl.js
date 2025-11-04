import{j as r}from"./iframe-BxshUsxH.js";import{H as i}from"./Heading-DdZYTwhD.js";import a from"./Default.stories-B5SfJr-7.js";import{a2 as n}from"./IconWarning-B98y0Q8s.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-CATc84Up.js";import{C as d,a as l}from"./ContextualHelpTrigger-p7RfMObQ.js";import{B as c}from"./Button-HRLIFp2S.js";import{T as g}from"./Text-18K6QUAV.js";import{B as x}from"./Badge-Bk_g3Swr.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-De-qO8FI.js";import"./index-CCtjSUo0.js";import"./index-DKGU8PvL.js";import"./RSPContexts-B9j1N_uk.js";import"./utils-CVs5O02N.js";import"./Section-BZHA2v0g.js";import"./Action-CuTPfi8I.js";import"./context-Dpzgqk2_.js";import"./useStatic-B3TheZVH.js";import"./browser-CjJK-aFI.js";import"./getActionGroupSlot-DSKoPTOH.js";import"./dynamic-DbpBUg3_.js";import"./Dialog-g1S8F0Mk.js";import"./Button-BSW16sZi.js";import"./ProgressBar-BPkB7WeA.js";import"./Hidden-7g9wVqvD.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-jrbRSF4x.js";import"./useFocusRing-DAO3A_Iq.js";import"./useFocusable-BZtorROf.js";import"./OverlayArrow-DTdsHQge.js";import"./useControlledState-DZ1PCkag.js";import"./Collection-CF5-K3AD.js";import"./CollectionBuilder-CV9rF_PB.js";import"./SelectionIndicator-BLryBQpM.js";import"./Separator-6zjLgCNw.js";import"./useLocalizedStringFormatter-C0TDBAcX.js";import"./AlertIcon-CAIekxtK.js";import"./Popover-D8mPu2R9.js";import"./OverlayTrigger-DqSMwG9L.js";import"./ControlledNotification-BKvhz06W.js";import"./ClearPropsContextView-Bx13vTxG.js";import"./LoadingSpinner-CLA14IJX.js";import"./EmulatedBoldText-DJOIRjYG.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
