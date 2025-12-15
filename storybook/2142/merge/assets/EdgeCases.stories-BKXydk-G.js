import{j as r}from"./iframe-Cir6MTA5.js";import{H as p}from"./Heading-C81Sjkat.js";import a from"./Default.stories-DGxp74N2.js";import{a2 as i}from"./IconWarning-DBAWKFVr.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DQEistgl.js";import{C as d,a as l}from"./ContextualHelpTrigger-Sr6lf3NJ.js";import{B as c}from"./Button-C2A0kxO-.js";import{T as g}from"./Text-NWoOtLYD.js";import{B as x}from"./Badge-Dhmh7ReA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cm8oeilI.js";import"./mergeRefs-B7VAW6Py.js";import"./index-Ib6Soh3C.js";import"./RSPContexts-DBL9OuDo.js";import"./utils-D3-KZmBM.js";import"./Section-CsBFEvqK.js";import"./context-uB_U-Ll-.js";import"./Button-CVO9gXsi.js";import"./ProgressBar-DkofuhmP.js";import"./Hidden-B8OXM-sx.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DCFpjcCd.js";import"./useFocusRing-BaJuMT9x.js";import"./useFocusable-DuTyQoFg.js";import"./Collection-DXpzkPD8.js";import"./CollectionBuilder-Dzx_KF2Z.js";import"./SelectionIndicator-C9EgnhSM.js";import"./Separator-DJLduqtA.js";import"./browser-DYyRc_is.js";import"./useLocalizedStringFormatter-BNOIxokj.js";import"./useStatic-lrFYKeJo.js";import"./dynamic-C54c6iDK.js";import"./AlertIcon-THsOUfa2.js";import"./Popover-BnMf836y.js";import"./OverlayTrigger-D8wWf3qw.js";import"./LoadingSpinner-Cbn--oub.js";import"./EmulatedBoldText-CMuEkZzQ.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
