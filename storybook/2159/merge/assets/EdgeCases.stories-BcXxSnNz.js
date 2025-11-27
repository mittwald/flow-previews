import{j as r}from"./iframe-7BcSOkL1.js";import{H as p}from"./Heading-B3rrQZdA.js";import a from"./Default.stories-CSrjgUFY.js";import{a2 as i}from"./IconWarning-DFK7FPRm.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BLLOUyvy.js";import{C as d,a as l}from"./ContextualHelpTrigger-BM0OhULK.js";import{B as c}from"./Button-BCb61ouP.js";import{T as g}from"./Text-sNy_JVUg.js";import{B as x}from"./Badge-CnwbPEBD.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-T63dMOzs.js";import"./mergeRefs-O6Tz23YZ.js";import"./index-DFg9K6WW.js";import"./RSPContexts-VFAeT7fJ.js";import"./utils-CnXd-itf.js";import"./Section-BM04QQ4S.js";import"./context-BY2qRpUu.js";import"./Button-BRvXO2c0.js";import"./ProgressBar-LVm02CMO.js";import"./Hidden-BaJxX0T2.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BxMgKMFE.js";import"./useFocusRing-dBoRO-LN.js";import"./useFocusable-WK7F_Oar.js";import"./Collection-Nrq8gGX_.js";import"./CollectionBuilder-CIDh9Gu3.js";import"./SelectionIndicator-MGv3fhI5.js";import"./Separator-QlyzxrY4.js";import"./browser-DkuKIMCf.js";import"./useLocalizedStringFormatter-mETPtdfy.js";import"./useStatic-DpF8IrGJ.js";import"./dynamic-BRBd3S7h.js";import"./AlertIcon-sj9HDcTQ.js";import"./Popover-BpKg5fzM.js";import"./OverlayTrigger-CbmE6C3-.js";import"./LoadingSpinner-CQRWUrve.js";import"./EmulatedBoldText-KFps1Djg.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
