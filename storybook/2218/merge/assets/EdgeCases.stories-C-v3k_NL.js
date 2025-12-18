import{j as r}from"./iframe-DZYTde4e.js";import{H as p}from"./Heading-CAPeE680.js";import a from"./Default.stories-BAs0izz_.js";import{a2 as i}from"./IconWarning-DXCUbPmL.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-B-5ctEFQ.js";import{C as d,a as l}from"./ContextualHelpTrigger-ql3WkHfV.js";import{B as c}from"./Button-CI_UMDNZ.js";import{T as g}from"./Text-BDClvQAl.js";import{B as x}from"./Badge-X0UYy-cl.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CgtZzzdB.js";import"./mergeRefs-CwEw5UGZ.js";import"./index-DAiWoi8o.js";import"./RSPContexts-BlMA0jp2.js";import"./utils-Z6vXhZ96.js";import"./Section-BS2Y3V6J.js";import"./context-CBzv9cN1.js";import"./Button-CC2_Lwz2.js";import"./ProgressBar-DZyCS9ga.js";import"./Hidden-CW62RqME.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Du59aHbH.js";import"./useFocusRing-BNBaS5jL.js";import"./useFocusable-v1ukumRO.js";import"./Collection-BPkXYQex.js";import"./CollectionBuilder-D0jI_Gb0.js";import"./SelectionIndicator-BtmzIdOy.js";import"./Separator-B8KzwdIi.js";import"./browser-D1RFTwuv.js";import"./useLocalizedStringFormatter-Cqhwqj9s.js";import"./useStatic-Cc8Tg3eq.js";import"./dynamic-Cr3CK9yB.js";import"./AlertIcon-DI40NDQv.js";import"./Popover-DM3qcDl0.js";import"./OverlayTrigger-m1G0j68U.js";import"./LoadingSpinner-qhZotF0H.js";import"./EmulatedBoldText-S-B02nx0.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
