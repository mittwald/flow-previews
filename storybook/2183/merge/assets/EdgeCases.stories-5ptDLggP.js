import{j as r}from"./iframe-b3Ga2wpf.js";import{H as p}from"./Heading-BGN7eCNA.js";import a from"./Default.stories-BBIWX8Xz.js";import{a1 as i}from"./IconWarning-C84U4k_5.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-Dc59NCSn.js";import{C as d,a as l}from"./ContextualHelpTrigger-B4h5NCtb.js";import{B as c}from"./Button-B9AKUFf2.js";import{T as g}from"./Text-DIbSGP69.js";import{B as x}from"./Badge-CmiaY70P.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D77bvxtu.js";import"./mergeRefs-Bi5mFM62.js";import"./index-EgQfkxQH.js";import"./RSPContexts-CzK-yBpk.js";import"./utils-DpwAoq2B.js";import"./Section-DpTqM0_J.js";import"./context-DvKCdNAh.js";import"./Button-Dn9RG0lS.js";import"./ProgressBar-CqHSuyvS.js";import"./Hidden-D7Ffx1fO.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-D39ROL5s.js";import"./useFocusRing-DyTaHyNc.js";import"./useFocusable-CNSeA0E2.js";import"./Collection-staaIP_8.js";import"./CollectionBuilder-DkVC1udd.js";import"./SelectionIndicator-H6x9m8Fd.js";import"./Separator-CC7MupLF.js";import"./browser-C0SY9BaM.js";import"./useLocalizedStringFormatter-Dw2puoxj.js";import"./useStatic-DjEoLORA.js";import"./dynamic-D7f7XAFP.js";import"./remote-DrytLFaS.js";import"./AlertIcon-BoIjIGQk.js";import"./Popover-C3t-XhdJ.js";import"./OverlayTrigger-9eU9gIuc.js";import"./LoadingSpinner-C8TYwtnu.js";import"./EmulatedBoldText-BWSYK2_K.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
