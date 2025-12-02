import{j as r}from"./iframe-D7uC-7V_.js";import{H as p}from"./Heading-f_QLDsgR.js";import a from"./Default.stories-dF8g5fa-.js";import{a2 as i}from"./IconWarning-BCNTNt6q.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BebrPRF6.js";import{C as d,a as l}from"./ContextualHelpTrigger-CXOGuB9Y.js";import{B as c}from"./Button-DiCPbDhS.js";import{T as g}from"./Text-BiV92KiG.js";import{B as x}from"./Badge-CY7C5Oi3.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D6ETz4eO.js";import"./mergeRefs-B2M5WDOC.js";import"./index-Bd9v0Vhf.js";import"./RSPContexts-DX_a6o14.js";import"./utils-DGPkAfM6.js";import"./Section-CzjrUr3W.js";import"./context-DmsiyyTB.js";import"./Button-Djt7NA3M.js";import"./ProgressBar-BjaQZGPw.js";import"./Hidden-B7ytCKiH.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-77px_zVw.js";import"./useFocusRing-DNcE5kU2.js";import"./useFocusable-0BAeD1Xf.js";import"./Collection-DSbN1ly0.js";import"./CollectionBuilder-B1mZ5m8d.js";import"./SelectionIndicator-BfrUmlWT.js";import"./Separator-CvniWKxN.js";import"./browser-BKGMjSP-.js";import"./useLocalizedStringFormatter-CCpeSzbu.js";import"./useStatic-Bxi8RVTv.js";import"./dynamic-osoyJDTl.js";import"./AlertIcon-BcCRWTe9.js";import"./Popover-Dwlz0jk0.js";import"./OverlayTrigger-H7UlFHIL.js";import"./LoadingSpinner-VIxuY4J8.js";import"./EmulatedBoldText-Dg54gE_i.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
