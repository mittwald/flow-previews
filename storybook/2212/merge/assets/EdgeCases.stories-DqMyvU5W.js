import{j as r}from"./iframe-DRHo_LWV.js";import{H as p}from"./Heading-DXCu3xfs.js";import a from"./Default.stories-FAhBXHCa.js";import{a2 as i}from"./IconWarning-DOCSYVJb.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-D9yH7rZh.js";import{C as d,a as l}from"./ContextualHelpTrigger-DKjAVjgi.js";import{B as c}from"./Button-CoKi_833.js";import{T as g}from"./Text-C8Z4-t3h.js";import{B as x}from"./Badge-BJlVMabo.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-eT31IdA5.js";import"./mergeRefs-ClO07P9v.js";import"./index-BxEgcTyQ.js";import"./RSPContexts-CCSm4UT8.js";import"./utils-BMeX6kjI.js";import"./Section-BepYC6c-.js";import"./context-B26OnoB_.js";import"./Button-CPvHspkD.js";import"./ProgressBar-CAz_kUXs.js";import"./Hidden-IGMaJsur.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DFFtEKCN.js";import"./useFocusRing-D0-Omahw.js";import"./useFocusable-Bpejanxv.js";import"./Collection-dKICFTeR.js";import"./CollectionBuilder-BKsjvRDC.js";import"./SelectionIndicator-D9ZkMsqt.js";import"./Separator-BclQH7dY.js";import"./browser-BUXnAcqH.js";import"./useLocalizedStringFormatter-DBrevv4a.js";import"./useStatic-DSG2Vd8Y.js";import"./dynamic-D3Z_5L-h.js";import"./AlertIcon-Db-Zh-lA.js";import"./Popover-BQgBoj25.js";import"./OverlayTrigger-DqaZeyEn.js";import"./LoadingSpinner-Bk5B-2KR.js";import"./EmulatedBoldText-B9Wwr1Zx.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
