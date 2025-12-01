import{j as r}from"./iframe-Clmt7jYU.js";import{H as p}from"./Heading-DOf1Gbjg.js";import a from"./Default.stories-BZhrjgD8.js";import{a2 as i}from"./IconWarning-CMDAZJGy.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-B-cIikZ6.js";import{C as d,a as l}from"./ContextualHelpTrigger-Dzc-OR_f.js";import{B as c}from"./Button-Cpx-qVCp.js";import{T as g}from"./Text-BQs7jhBI.js";import{B as x}from"./Badge-DSWTM4Cn.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cmcxz_BG.js";import"./mergeRefs-BVqKkfsA.js";import"./index-DiVEBKFG.js";import"./RSPContexts-BNhmdufL.js";import"./utils-BaIVInUf.js";import"./Section-D-4V5L53.js";import"./context-BbRYzAs6.js";import"./Button-MP-U6i_K.js";import"./ProgressBar-D_4BHyIX.js";import"./Hidden-BZve3Xik.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-J-yaWB4J.js";import"./useFocusRing-SBYuaUD7.js";import"./useFocusable-BgBMU_CS.js";import"./Collection-xRwg1v5k.js";import"./CollectionBuilder-kvAQOu82.js";import"./SelectionIndicator-Wyz_1aA8.js";import"./Separator-Cl_cENZa.js";import"./browser-BVazs59Q.js";import"./useLocalizedStringFormatter--ByhM2n4.js";import"./useStatic-Bnfhfmst.js";import"./dynamic-ByO6kVlP.js";import"./AlertIcon-BuWV4Npm.js";import"./Popover--yCHfjbQ.js";import"./OverlayTrigger-Ce8vZdG2.js";import"./LoadingSpinner-CenMvatO.js";import"./EmulatedBoldText-D5ywUyQZ.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
