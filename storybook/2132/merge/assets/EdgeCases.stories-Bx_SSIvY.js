import{j as r}from"./iframe-DjMRZ933.js";import{H as p}from"./Heading-BgHZ1ILD.js";import a from"./Default.stories-BnWmbp1a.js";import{a2 as i}from"./IconWarning-15BQJDPi.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-CHwJpuCJ.js";import{C as d,a as l}from"./ContextualHelpTrigger-CYoOPEVY.js";import{B as c}from"./Button-DcZikGPu.js";import{T as g}from"./Text-HqedTJ3_.js";import{B as x}from"./Badge-BN0x96Ky.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dfc22Cns.js";import"./mergeRefs-ktNCKXcN.js";import"./index-CdoC4W9G.js";import"./RSPContexts-xVWKxYWV.js";import"./utils-ChD4yM7Z.js";import"./Section-Cfn_XoWh.js";import"./context-o3mGNPxn.js";import"./Button-CVSjku2L.js";import"./ProgressBar-B_WWkX7i.js";import"./Hidden-C2WyT6w-.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CMNm5Xu1.js";import"./useFocusRing-CsWAde4M.js";import"./useFocusable-DMUCbXde.js";import"./Collection-N-WMj8Hm.js";import"./CollectionBuilder-B6_gBvnz.js";import"./SelectionIndicator-Be-dMYOv.js";import"./Separator-CDRx1yir.js";import"./browser-CRatz6fZ.js";import"./useLocalizedStringFormatter-D2Pb0dlM.js";import"./useStatic-CBLHZfUJ.js";import"./getActionGroupSlot-CJeZWLnB.js";import"./dynamic-xmc70gpV.js";import"./AlertIcon-DmCm2LWR.js";import"./Popover-C5QNOwBo.js";import"./OverlayTrigger-CrRJgUZu.js";import"./LoadingSpinner-fSHKWhSv.js";import"./EmulatedBoldText-B3brdLrg.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
