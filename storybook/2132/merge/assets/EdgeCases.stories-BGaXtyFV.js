import{j as r}from"./iframe-DTBy15H7.js";import{H as p}from"./Heading-Ca-tELgf.js";import a from"./Default.stories-DQNbYxOd.js";import{a2 as i}from"./IconWarning-Djz7NATM.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-8jy2QUL6.js";import{C as d,a as l}from"./ContextualHelpTrigger-BRKcFrI9.js";import{B as c}from"./Button-QHOz67K3.js";import{T as g}from"./Text-Bj8vPlc0.js";import{B as x}from"./Badge-CT04WDK1.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Fi7tnu-J.js";import"./mergeRefs-CWVC3DZq.js";import"./index-C9i3V5R3.js";import"./RSPContexts-DH-gZpq1.js";import"./utils-Dl3W8pzT.js";import"./Section-CTt0hPdU.js";import"./context-DioYia5p.js";import"./Button-BYfJcV7w.js";import"./ProgressBar-BPzzwKl5.js";import"./Hidden-CGEKkcWL.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DDV21Rg9.js";import"./useFocusRing-DZNjyW13.js";import"./useFocusable-C5o0miI6.js";import"./Collection-D1XcVqi_.js";import"./CollectionBuilder-C71l8wdj.js";import"./SelectionIndicator-CxONpiWv.js";import"./Separator-CSQG4MPx.js";import"./browser-MW83o6M0.js";import"./useLocalizedStringFormatter-C6mCvBeu.js";import"./useStatic-eHzIFJyj.js";import"./dynamic-CCPexUYC.js";import"./AlertIcon-B0N13FEc.js";import"./Popover-7hNwjNSl.js";import"./OverlayTrigger-ZFUPrMkD.js";import"./LoadingSpinner-CRyT1UDC.js";import"./EmulatedBoldText-Dvqrfp28.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
