import{j as r}from"./iframe-BjQgS_dl.js";import{H as p}from"./Heading-DmijLSYI.js";import a from"./Default.stories-BER58RAR.js";import{a2 as i}from"./IconWarning-wUhw_T8r.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BuoAO-EF.js";import{C as d,a as l}from"./ContextualHelpTrigger-GCKXkGjA.js";import{B as c}from"./Button-mR6tCl9f.js";import{T as g}from"./Text-hFF5yDpy.js";import{B as x}from"./Badge-CWhMpUJo.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B3msEGiP.js";import"./mergeRefs-BqcSeRH_.js";import"./index-CCcXhUlF.js";import"./RSPContexts-JWS-CQt4.js";import"./utils-C6Mwuf68.js";import"./Section-BeaFJCve.js";import"./context-C9CRIziz.js";import"./Button-CWLE3PAH.js";import"./ProgressBar-DBLE5koh.js";import"./Hidden-CbsoacY0.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-3TgVXJa8.js";import"./useFocusRing-BWD7k8n6.js";import"./useFocusable-CMVEVLbf.js";import"./Collection-Uuc2P1Rm.js";import"./CollectionBuilder-SW3JOyLp.js";import"./SelectionIndicator-DDS3Avz9.js";import"./Separator-DKQ5QqW9.js";import"./browser-D8Ytpe6r.js";import"./useLocalizedStringFormatter-Dg6sdA5Z.js";import"./useStatic-CbhvCGnA.js";import"./dynamic-CTQIFy3Y.js";import"./AlertIcon-CKkF89KF.js";import"./Popover-DNrzHtdF.js";import"./OverlayTrigger-BZYsa2Ar.js";import"./LoadingSpinner-BVWf40cO.js";import"./EmulatedBoldText-CmEhCy_I.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
