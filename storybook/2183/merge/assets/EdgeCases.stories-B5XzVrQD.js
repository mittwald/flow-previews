import{j as r}from"./iframe-6jyXgxue.js";import{H as p}from"./Heading-CJE26UUg.js";import a from"./Default.stories-CGsU9eCq.js";import{a1 as i}from"./IconWarning-C-gwxPU9.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DgAWcThQ.js";import{C as d,a as l}from"./ContextualHelpTrigger-CJ7SzJu0.js";import{B as c}from"./Button-C79y5FLr.js";import{T as g}from"./Text-Dlqenc2H.js";import{B as x}from"./Badge-WZr49ZKv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BY7KHLjg.js";import"./mergeRefs-DLi8bP-A.js";import"./index--zh6xbBg.js";import"./RSPContexts-B8t3YJD-.js";import"./utils-gjysgmBz.js";import"./Section-H3gIqLfl.js";import"./context-DHByHAd4.js";import"./Button-DvSQe7YO.js";import"./ProgressBar-BwsfQ2n1.js";import"./Hidden-DJLEoSnR.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-JQMt_ZQS.js";import"./useFocusRing-BAh6-13b.js";import"./useFocusable-CajPj44S.js";import"./Collection-D3_W2fei.js";import"./CollectionBuilder-CkuRVJqW.js";import"./SelectionIndicator-B4LTYmXz.js";import"./Separator-DRruZlSn.js";import"./browser-BMGdvove.js";import"./useLocalizedStringFormatter-BA1DAplF.js";import"./useStatic-D2icMmWp.js";import"./dynamic-DCXw5NHQ.js";import"./remote-D3kJiMg-.js";import"./AlertIcon-CE8OjIho.js";import"./Popover-D8d0zPXi.js";import"./OverlayTrigger-C4RVAI_V.js";import"./LoadingSpinner-D7O-q36Z.js";import"./EmulatedBoldText-BIdH-rcf.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
