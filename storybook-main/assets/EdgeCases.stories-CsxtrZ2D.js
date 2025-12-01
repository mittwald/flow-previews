import{j as r}from"./iframe-2LgrIkRd.js";import{H as p}from"./Heading-DilTAoZJ.js";import a from"./Default.stories-thp6I5nT.js";import{a2 as i}from"./IconWarning-D60ymTiJ.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DD7luv0F.js";import{C as d,a as l}from"./ContextualHelpTrigger-TtfataTj.js";import{B as c}from"./Button-Cq_XMZKZ.js";import{T as g}from"./Text-CmoFb8XW.js";import{B as x}from"./Badge-BgCXtZ0L.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dvn5KZwR.js";import"./mergeRefs-BKadv8uE.js";import"./index-KXg12Vs8.js";import"./RSPContexts-Dor-CtSJ.js";import"./utils-BnxtooML.js";import"./Section-BlB_8KjT.js";import"./context-lHzLNF7G.js";import"./Button-EKWPB4tZ.js";import"./ProgressBar-DflgbsT0.js";import"./Hidden-8HkCLqkF.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CE6tX24V.js";import"./useFocusRing-DVyMMICP.js";import"./useFocusable-DWcchIDQ.js";import"./Collection-CsQEIojc.js";import"./CollectionBuilder-CXt63XdS.js";import"./SelectionIndicator-BqSKYRxe.js";import"./Separator-DQkcls0b.js";import"./browser-DE_neHhx.js";import"./useLocalizedStringFormatter-dwl9VKwt.js";import"./useStatic-yAY0kCCB.js";import"./dynamic-DCrPXVv3.js";import"./AlertIcon-5TMA0R6D.js";import"./Popover-BsRqhSlP.js";import"./OverlayTrigger-CbpE00TN.js";import"./LoadingSpinner-C9JNq8vi.js";import"./EmulatedBoldText-DybYTyQs.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
