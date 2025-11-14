import{j as r}from"./iframe-D4i-5dyB.js";import{H as p}from"./Heading-CqgoaxDG.js";import a from"./Default.stories-BPHLu29E.js";import{a2 as i}from"./IconWarning-CMFXnZAS.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BCJFFVr-.js";import{C as d,a as l}from"./ContextualHelpTrigger-BRqpivsA.js";import{B as c}from"./Button-C5iEQf44.js";import{T as g}from"./Text-D-HEhYG-.js";import{B as x}from"./Badge-DGIykoPb.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BnDJ-hIk.js";import"./mergeRefs-BSb0Bje6.js";import"./index-BqFsReNE.js";import"./RSPContexts-BOewTbeY.js";import"./utils-BWp3lM8P.js";import"./Section-B45bmdbE.js";import"./context-JCcCR3kh.js";import"./Button-BNk2Wifn.js";import"./ProgressBar-B4smC8yo.js";import"./Hidden-MqQXQobC.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-C76p02_s.js";import"./useFocusRing-BHC6C08N.js";import"./useFocusable-COObapRc.js";import"./Collection-E-HFRfBJ.js";import"./CollectionBuilder-C89H_4E6.js";import"./SelectionIndicator-BSmnnWZO.js";import"./Separator-BscBbSvj.js";import"./browser-Cwp7r97w.js";import"./useLocalizedStringFormatter-Csijhnwe.js";import"./useStatic-CrV_XbcB.js";import"./getActionGroupSlot-CzwDHsH8.js";import"./dynamic-l-Dsj5TR.js";import"./AlertIcon-CoWnPqgJ.js";import"./Popover-DY1u_i9c.js";import"./OverlayTrigger-D7YNoZK9.js";import"./LoadingSpinner-DCo1rAvM.js";import"./EmulatedBoldText-wsap70PU.js";const er={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
