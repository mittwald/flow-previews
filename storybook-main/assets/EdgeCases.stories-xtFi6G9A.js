import{j as r}from"./iframe-C7yh_Fu5.js";import{H as p}from"./Heading-gezzzJQU.js";import a from"./Default.stories-bE935iDI.js";import{a2 as i}from"./IconWarning-U8_aSafZ.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-D2DN6G_u.js";import{C as d,a as l}from"./ContextualHelpTrigger-B1UysYmx.js";import{B as c}from"./Button-BwVKQ9X7.js";import{T as g}from"./Text-CSanHafV.js";import{B as x}from"./Badge-CrGIL66e.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C-EG-5z2.js";import"./mergeRefs-g85mVkDf.js";import"./index-Cevz_HyD.js";import"./RSPContexts-DMbDFkhS.js";import"./utils-BIDryOLh.js";import"./Section-eGYkYIra.js";import"./context-w3GWYnpb.js";import"./Button-iBtMEWbi.js";import"./ProgressBar-hejX-OOI.js";import"./Hidden-Du0bIFmN.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CEhtXY7m.js";import"./useFocusRing-C2uVCvlL.js";import"./useFocusable-CCwjyRCK.js";import"./Collection-BgKMjwD7.js";import"./CollectionBuilder-DKESVVhe.js";import"./SelectionIndicator-Bux7VXrO.js";import"./Separator-Di2JOJWZ.js";import"./browser-DU0Se26V.js";import"./useLocalizedStringFormatter-DQ2_29OK.js";import"./useStatic-BPJ4UqdO.js";import"./dynamic-BAOBaIPk.js";import"./AlertIcon-2MV1Vkb6.js";import"./Popover-CQFnWxW5.js";import"./OverlayTrigger-D2xYBiFg.js";import"./LoadingSpinner-4S8XnzlY.js";import"./EmulatedBoldText-CiGN-vVw.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
