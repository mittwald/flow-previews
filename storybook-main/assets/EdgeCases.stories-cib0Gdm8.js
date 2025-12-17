import{j as r}from"./iframe-Dk60Gpin.js";import{H as p}from"./Heading-BClLfS9l.js";import a from"./Default.stories-D08iPB_f.js";import{a2 as i}from"./IconWarning-BTcUjjec.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-Ci3q7ONa.js";import{C as d,a as l}from"./ContextualHelpTrigger-3ee7SYMq.js";import{B as c}from"./Button-BaFAPk6P.js";import{T as g}from"./Text-BbMQM1DG.js";import{B as x}from"./Badge-Ci0_YhS-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BdZs02Td.js";import"./mergeRefs-MJGqjKNq.js";import"./index-DJhA7Wui.js";import"./RSPContexts-CVMXvjX8.js";import"./utils-Ch0ZZJ4D.js";import"./Section-CoeixnSJ.js";import"./context-BthpMtM5.js";import"./Button-BnOkCogS.js";import"./ProgressBar-D9iry1uY.js";import"./Hidden-D3Wnlg7j.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-fp4w0YcD.js";import"./useFocusRing-BRWpt41V.js";import"./useFocusable-BjdDuCYq.js";import"./Collection-BeF55kv5.js";import"./CollectionBuilder-B_txidaV.js";import"./SelectionIndicator-Dw3nAwCY.js";import"./Separator-CD2VJwjG.js";import"./browser-BvxtBXb9.js";import"./useLocalizedStringFormatter-Bc2xZT0_.js";import"./useStatic-CwfWB48x.js";import"./dynamic-4gi8GiXC.js";import"./AlertIcon-BvG3TXg-.js";import"./Popover-DUzfCkJT.js";import"./OverlayTrigger-D41F-SKL.js";import"./LoadingSpinner-BDrvrciy.js";import"./EmulatedBoldText-BXENtjIV.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
