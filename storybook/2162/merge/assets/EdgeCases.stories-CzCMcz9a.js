import{j as r}from"./iframe-C3akzpV1.js";import{H as p}from"./Heading-Dx6berQj.js";import a from"./Default.stories-BCRyMMm1.js";import{a2 as i}from"./IconWarning-C4SgI6OV.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-DKJSIQMi.js";import{C as d,a as l}from"./ContextualHelpTrigger-B4NbXTkX.js";import{B as c}from"./Button-C_UT-1QU.js";import{T as g}from"./Text-ItbFkn--.js";import{B as x}from"./Badge-A9sRZW6O.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DqwY9XEq.js";import"./mergeRefs-BXY85axa.js";import"./index-BSfx5kph.js";import"./RSPContexts-DVc_zOA3.js";import"./utils-FFzu0Pw2.js";import"./Section-5SrLYku3.js";import"./context-CfnX_riS.js";import"./Button-D5o5rXyo.js";import"./ProgressBar-72_GXUSH.js";import"./Hidden-Bcrhq7St.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BgN9eCaX.js";import"./useFocusRing-DQs4OSUU.js";import"./useFocusable-CC2L6-Hl.js";import"./Collection-DTGfPiJx.js";import"./CollectionBuilder-BExMR5Fd.js";import"./SelectionIndicator-B2cJMogF.js";import"./Separator-C1Ah5vxC.js";import"./browser-mTtOjkkJ.js";import"./useLocalizedStringFormatter-BXg2U2e2.js";import"./useStatic-DFnfS72f.js";import"./dynamic-O2zPY50D.js";import"./AlertIcon-KuJe6yIM.js";import"./Popover-Ds9ANfz7.js";import"./OverlayTrigger-BeAJLsRg.js";import"./LoadingSpinner-DNlomGtB.js";import"./EmulatedBoldText-B3LO_M0J.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
