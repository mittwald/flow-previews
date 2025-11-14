import{j as r}from"./iframe-N2ZMMBua.js";import{H as p}from"./Heading-UwbM-u6i.js";import a from"./Default.stories-B4zvE9ww.js";import{a2 as i}from"./IconWarning-BFO_JV1T.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-CCMWeYGv.js";import{C as d,a as l}from"./ContextualHelpTrigger-MtOPALsd.js";import{B as c}from"./Button-CQTX7C-7.js";import{T as g}from"./Text-B0nKVVvA.js";import{B as x}from"./Badge-CmQdROSx.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-wZrUcs9C.js";import"./mergeRefs-D0sT2cWn.js";import"./index-C2BNDRbk.js";import"./RSPContexts-W5rfe12r.js";import"./utils-UqP59DSc.js";import"./Section-Dlm8T0mZ.js";import"./context-0hb6Imhj.js";import"./Button-ckJwL_Qm.js";import"./ProgressBar-DX8gLGDN.js";import"./Hidden-De6Yi14J.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CVOB-S2d.js";import"./useFocusRing-CsS12N7n.js";import"./useFocusable-CYxsuuBl.js";import"./Collection-B-VaM1xo.js";import"./CollectionBuilder-sM43fN06.js";import"./SelectionIndicator-Pu8gh7X4.js";import"./Separator-05e1ttKJ.js";import"./browser-C3uOmI6O.js";import"./useLocalizedStringFormatter-BWX2KnbU.js";import"./useStatic-BK7FFX-B.js";import"./getActionGroupSlot-DEBzWZmX.js";import"./dynamic-Bg49ug6j.js";import"./AlertIcon-DP3sd6M_.js";import"./Popover-ITKHSPMr.js";import"./OverlayTrigger-CtrEPdBT.js";import"./LoadingSpinner-BF2HGxsW.js";import"./EmulatedBoldText-zrEG-jWJ.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
