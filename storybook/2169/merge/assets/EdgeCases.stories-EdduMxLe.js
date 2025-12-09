import{j as r}from"./iframe-D29QVi29.js";import{H as p}from"./Heading-DViBSNIF.js";import a from"./Default.stories-BbAeNHKt.js";import{a2 as i}from"./IconWarning-qRr2EWc4.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-BD8zfIUZ.js";import{C as d,a as l}from"./ContextualHelpTrigger-BZZdrkgN.js";import{B as c}from"./Button-BqO8ZFSe.js";import{T as g}from"./Text-BTGWwOlA.js";import{B as x}from"./Badge-CVEppqDk.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Di3M49gZ.js";import"./mergeRefs-Dxk1BzaE.js";import"./index-CR8Graxx.js";import"./RSPContexts-7wLun1z_.js";import"./utils-V6v5WZV5.js";import"./Section-N6-W-jGX.js";import"./context-i3-N7LSR.js";import"./Button-x1GyynEX.js";import"./ProgressBar-1j73270Z.js";import"./Hidden-DYWDaDdl.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-qGV7OOPv.js";import"./useFocusRing-BTna3mEs.js";import"./useFocusable-DTRRpH6w.js";import"./Collection-BnP1T9jt.js";import"./CollectionBuilder-DjTeQogG.js";import"./SelectionIndicator-T7jZrYkx.js";import"./Separator-CwRYG8QD.js";import"./browser-CsgOcZeL.js";import"./useLocalizedStringFormatter-Bqmt488r.js";import"./useStatic-lipZmjhB.js";import"./dynamic-BIIctUHv.js";import"./AlertIcon-kk-UzcPM.js";import"./Popover-0dSAyS70.js";import"./OverlayTrigger-BRRbGelm.js";import"./LoadingSpinner-BK6n1zCV.js";import"./EmulatedBoldText-C5bjRzZR.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
