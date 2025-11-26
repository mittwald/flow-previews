import{j as r}from"./iframe-D1IXLGfs.js";import{H as p}from"./Heading-oQ8JRrCO.js";import a from"./Default.stories-B5iW5nid.js";import{a2 as i}from"./IconWarning-BxNDhWjd.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BYlu6Hm_.js";import{C as d,a as l}from"./ContextualHelpTrigger-DAOvEHNM.js";import{B as c}from"./Button-C4C6Tlp0.js";import{T as g}from"./Text-D1LKMi-w.js";import{B as x}from"./Badge-C-697TDl.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C_Awy-Mb.js";import"./mergeRefs-beV1eqaE.js";import"./index-CvlGE98O.js";import"./RSPContexts-BgSWsIZW.js";import"./utils-B-QWEDo7.js";import"./Section-C53WOw1M.js";import"./context-5e9UnPLe.js";import"./Button-CMJuT-cA.js";import"./ProgressBar-yyUOmkTp.js";import"./Hidden-CcqmDqte.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Co7rtKcb.js";import"./useFocusRing-D8NPA1ph.js";import"./useFocusable-C6Y2IEKU.js";import"./Collection-DvnA0NAr.js";import"./CollectionBuilder-DezSz7RI.js";import"./SelectionIndicator-CBNg2on9.js";import"./Separator-ifeGnJlj.js";import"./browser-tVHcyQIt.js";import"./useLocalizedStringFormatter-B1FtVS3l.js";import"./useStatic-CpvtqM-K.js";import"./dynamic-pDnrtSWy.js";import"./AlertIcon-D96GlUxX.js";import"./Popover-BXbsVRKM.js";import"./OverlayTrigger-B4YqZS9k.js";import"./LoadingSpinner-7FjPacVo.js";import"./EmulatedBoldText-DH1aO4MF.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
