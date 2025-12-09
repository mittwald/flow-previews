import{j as r}from"./iframe-CLIUsYfM.js";import{H as p}from"./Heading-CKk-OBgv.js";import a from"./Default.stories-C9ATmkRq.js";import{a2 as i}from"./IconWarning-DzQ9tJI9.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BvA3n6JX.js";import{C as d,a as l}from"./ContextualHelpTrigger-B6boF4gV.js";import{B as c}from"./Button-C446Wk0s.js";import{T as g}from"./Text-D2QQWQR9.js";import{B as x}from"./Badge-wa7Q7exv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BEk6n_vi.js";import"./mergeRefs-CJFCUUg6.js";import"./index-CJ3flHUa.js";import"./RSPContexts-DWZje-yD.js";import"./utils-Duab__sA.js";import"./Section-Dkz1Z9Gc.js";import"./context-C4TkkEyw.js";import"./Button-B2kdw2yg.js";import"./ProgressBar-BbmNBh-t.js";import"./Hidden-BSEskgfC.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CpkmeH1J.js";import"./useFocusRing-D2OmgzqR.js";import"./useFocusable-C0n6CZKF.js";import"./Collection-B_Esl1Ys.js";import"./CollectionBuilder-szrRscFH.js";import"./SelectionIndicator-CU9wCljV.js";import"./Separator-BM0WI_Oi.js";import"./browser-D_3azSPf.js";import"./useLocalizedStringFormatter-Aw7TOpbQ.js";import"./useStatic-BzUzXPh5.js";import"./dynamic-BTR_FaAn.js";import"./AlertIcon-NB0p5Yms.js";import"./Popover-CVmaaSmy.js";import"./OverlayTrigger-e2PcLUgP.js";import"./LoadingSpinner-CW57px9k.js";import"./EmulatedBoldText-BUnoqqKP.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
