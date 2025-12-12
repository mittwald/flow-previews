import{j as r}from"./iframe-DEcBxJMv.js";import{H as p}from"./Heading-DVq-3Nns.js";import a from"./Default.stories-CMWrISWo.js";import{a1 as i}from"./IconWarning-BC7HEquB.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DgPHrTJs.js";import{C as d,a as l}from"./ContextualHelpTrigger-PNpDQr7A.js";import{B as c}from"./Button-SrFk_XSt.js";import{T as g}from"./Text-BBAymND1.js";import{B as x}from"./Badge-bbz8daB-.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-MiOt2FVz.js";import"./mergeRefs-sinOTIgX.js";import"./index-BqRQQrKV.js";import"./RSPContexts-WhR4y82c.js";import"./utils-UdYzeLBf.js";import"./Section-DBHphcZQ.js";import"./context-font-zWS.js";import"./Button-BxMepmz1.js";import"./ProgressBar-EpRxxAE3.js";import"./Hidden-D2mpT24u.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CCmXnIub.js";import"./useFocusRing-D_wOvvGC.js";import"./useFocusable-BmM1dgKm.js";import"./Collection-DpX_tac4.js";import"./CollectionBuilder-DE4qpmv-.js";import"./SelectionIndicator-Cf3jtetL.js";import"./Separator-UL7-w-P3.js";import"./browser-BXvtU8ie.js";import"./useLocalizedStringFormatter-BRb5cwJZ.js";import"./useStatic-BAiSxx7G.js";import"./dynamic-BupQFwyZ.js";import"./remote-DoDHjwnJ.js";import"./AlertIcon-B311quy6.js";import"./Popover-C7mJHuVQ.js";import"./OverlayTrigger-u_RpKHc5.js";import"./LoadingSpinner-BVhceB8v.js";import"./EmulatedBoldText-CK8KF88J.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const tr=["LongText","WithAlertBadge","WithContextualHelp"];export{t as LongText,o as WithAlertBadge,m as WithContextualHelp,tr as __namedExportsOrder,er as default};
