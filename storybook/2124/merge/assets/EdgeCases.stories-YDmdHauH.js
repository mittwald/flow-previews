import{j as r}from"./iframe-BUpOconN.js";import{H as i}from"./Heading-BGtG9kd2.js";import a from"./Default.stories-C6LQlalJ.js";import{a2 as n}from"./IconWarning-BhCngq7e.js";import{d as p}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-D6ZmWE1l.js";import{C as d,a as l}from"./ContextualHelpTrigger-B6DAcZCV.js";import{B as c}from"./Button-BI2nRdMO.js";import{T as g}from"./Text-BmeR1AHd.js";import{B as x}from"./Badge-Btso2PJq.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BlNboq0M.js";import"./index-DUL0RQ8a.js";import"./index-DbC_ni2B.js";import"./RSPContexts-DHzB_yYn.js";import"./utils-D0zgVK2Q.js";import"./Section-BpWTwwJh.js";import"./Action-zZ74f8ZW.js";import"./context-kOiZEgEs.js";import"./useStatic-lOwByp-V.js";import"./browser-BvUtNH1Q.js";import"./getActionGroupSlot-CQ_4bzXc.js";import"./dynamic-BC3S0Bwc.js";import"./Dialog-9peppKdC.js";import"./Button-kwZ3-LYf.js";import"./ProgressBar-CJ9Fgy9N.js";import"./Hidden-BRxj41U4.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BerssnGJ.js";import"./useFocusRing-Ctd_QOVX.js";import"./useFocusable-DIihcfGE.js";import"./OverlayArrow-YGRreMIm.js";import"./useControlledState-CATx7UtX.js";import"./Collection-8CZs5R9B.js";import"./CollectionBuilder-DKRji49J.js";import"./SelectionIndicator-Bv8zjct6.js";import"./Separator-C30545Sk.js";import"./useLocalizedStringFormatter-BfAN4zIg.js";import"./AlertIcon-BFFrkh8K.js";import"./Popover-Ba6VttQl.js";import"./OverlayTrigger-BUfLbgE9.js";import"./ControlledNotification-CFPZ3UPn.js";import"./ClearPropsContextView-B4rUpvsn.js";import"./LoadingSpinner-BP3hPEk8.js";import"./EmulatedBoldText-BYxux4hO.js";const nr={...a,title:"Content/Heading/Edge Cases",component:i},t={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.medium]})},o={render:e=>r.jsxs(i,{...e,children:[r.jsx(n,{}),p.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(i,{...e,children:[p.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:p.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
