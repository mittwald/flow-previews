import{j as r}from"./iframe-DpK2T2Nf.js";import{H as p}from"./Heading-CcD2dsF3.js";import a from"./Default.stories-Cwzhu6bS.js";import{a1 as i}from"./IconWarning-Cg4y-Lel.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-CiTXQfnp.js";import{C as d,a as l}from"./ContextualHelpTrigger-CBiXLQUX.js";import{B as c}from"./Button-KfPOVuM-.js";import{T as g}from"./Text-ClluuiBD.js";import{B as x}from"./Badge-DcxmWiGs.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-hxBwTeBf.js";import"./mergeRefs-dZVNHuSH.js";import"./index-Cxqu85Zl.js";import"./RSPContexts-7V3qTNb_.js";import"./utils-5sSs2C2Q.js";import"./Section-kGcYQ44e.js";import"./context-CPEq1qsE.js";import"./Button--HL08e3g.js";import"./ProgressBar-BP1RROy1.js";import"./Hidden-BSBCwIf4.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CrPZXd5J.js";import"./useFocusRing-XJTDMv14.js";import"./useFocusable-BDOA7VsR.js";import"./Collection-C-I12dkD.js";import"./CollectionBuilder-DnacpWim.js";import"./SelectionIndicator-D-pfjXW7.js";import"./Separator-Dg6KLd5_.js";import"./browser-Ckyi0rpL.js";import"./useLocalizedStringFormatter-CTYggBE6.js";import"./useStatic-3aliboqk.js";import"./dynamic-CdnvgWlT.js";import"./remote-Cox__P30.js";import"./AlertIcon-05dXw9V_.js";import"./Popover-BkpsMHU6.js";import"./OverlayTrigger-Dvz2NSVn.js";import"./LoadingSpinner-BQl4MMkz.js";import"./EmulatedBoldText-Bc0AgoG-.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
