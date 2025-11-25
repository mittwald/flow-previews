import{j as r}from"./iframe-56IBTyTv.js";import{H as p}from"./Heading-C8An-zqi.js";import a from"./Default.stories-Ulp5jpQa.js";import{a2 as i}from"./IconWarning-DWxFADKK.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-CSdPQEPk.js";import{C as d,a as l}from"./ContextualHelpTrigger-jAzey3OP.js";import{B as c}from"./Button-CFrxsoAe.js";import{T as g}from"./Text-D89DiGla.js";import{B as x}from"./Badge-BorAN_Zo.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bnm9-YIt.js";import"./mergeRefs-Cyrc671G.js";import"./index-CFQkVl6N.js";import"./RSPContexts-ONk7znnk.js";import"./utils-By6OiP0m.js";import"./Section-CWOxkqLh.js";import"./context-C8voyd_c.js";import"./Button-Bg0OEiur.js";import"./ProgressBar-BjWRzbkF.js";import"./Hidden-BYV7a_dx.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-C94D1Tcb.js";import"./useFocusRing-CwXi6gl-.js";import"./useFocusable-Ctb1BwR8.js";import"./Collection-BYrAemKx.js";import"./CollectionBuilder-Bc4oKRVn.js";import"./SelectionIndicator-DENIl1oK.js";import"./Separator-BgOKs_kR.js";import"./browser-DgtGg3YC.js";import"./useLocalizedStringFormatter-CJPwUZ4n.js";import"./useStatic-BFaumh86.js";import"./dynamic-CXTlw0o3.js";import"./AlertIcon-DXhK-bl3.js";import"./Popover-BfnMJAl3.js";import"./OverlayTrigger-BjNrDJjP.js";import"./LoadingSpinner-DIFU_u_Q.js";import"./EmulatedBoldText-BnqixNdP.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
