import{j as r}from"./iframe-BvEN2NvC.js";import{H as p}from"./Heading-BmIYVqpT.js";import a from"./Default.stories-CU349Enl.js";import{a2 as i}from"./IconWarning-BXkJ-YfP.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-XnLcIBhb.js";import{C as d,a as l}from"./ContextualHelpTrigger-Dg6Q6BSc.js";import{B as c}from"./Button-Bs-8xdNz.js";import{T as g}from"./Text-B-pkYbpH.js";import{B as x}from"./Badge-By_J3NvW.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-O5-VKPQz.js";import"./mergeRefs-g8AQtJ3m.js";import"./index-Cj5OZb7o.js";import"./RSPContexts-BVxsMlKh.js";import"./utils-C9Kbpp7Q.js";import"./Section-DxQGOPA_.js";import"./context-YRnoeiMa.js";import"./Button-rdkFrasx.js";import"./ProgressBar-BQTQq0xH.js";import"./Hidden-BwWPEWcQ.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BaB4gzT5.js";import"./useFocusRing-CLF9PT1b.js";import"./useFocusable-CY4PxcCA.js";import"./Collection-2Wi3GcVI.js";import"./CollectionBuilder-BPHXmLic.js";import"./SelectionIndicator-BH4md7QJ.js";import"./Separator-B9TFzlzp.js";import"./browser-8558U_eE.js";import"./useLocalizedStringFormatter-DGN2LQ2z.js";import"./useStatic-mqBjZ187.js";import"./dynamic-DLGtdFUV.js";import"./AlertIcon-DIx0PRwu.js";import"./Popover-DQy7sKpB.js";import"./OverlayTrigger-C-OXtxoJ.js";import"./LoadingSpinner-sib-jng1.js";import"./EmulatedBoldText-6Mje0LKd.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
