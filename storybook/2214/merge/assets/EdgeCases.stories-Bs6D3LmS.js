import{j as r}from"./iframe-ALQ5zsOr.js";import{H as p}from"./Heading-D0DtiPxo.js";import a from"./Default.stories-D8BKuQ4K.js";import{a2 as i}from"./IconWarning-e5IJmYa2.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-XCHqrboo.js";import{C as d,a as l}from"./ContextualHelpTrigger-QzT4JqfM.js";import{B as c}from"./Button-BX6tjTLL.js";import{T as g}from"./Text-CARFdFUA.js";import{B as x}from"./Badge-pH50ychv.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CajZDkla.js";import"./mergeRefs-DuV0Rexf.js";import"./index-D7ydgW4V.js";import"./RSPContexts-CUYinsO9.js";import"./utils-Co6jRk79.js";import"./Section-Bs1N8UQx.js";import"./context-DQRC5U0a.js";import"./Button-CMqrvij-.js";import"./ProgressBar-Be_QMw9N.js";import"./Hidden-BWCTvshd.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-kp7gAgjv.js";import"./useFocusRing-CKtfjksp.js";import"./useFocusable-Cd2GyxLR.js";import"./Collection-DLxcLWTn.js";import"./CollectionBuilder-C5lgjdY8.js";import"./SelectionIndicator-DGcgd3ZA.js";import"./Separator-C_CbFzxr.js";import"./browser-BKuntv9s.js";import"./useLocalizedStringFormatter-D3jE5yaH.js";import"./useStatic-5go3Gdxn.js";import"./dynamic-0GSV0qwf.js";import"./AlertIcon-CfY0Fdcx.js";import"./Popover-uPtwk0G7.js";import"./OverlayTrigger-BGEoP9rw.js";import"./LoadingSpinner-vZR7mZ_m.js";import"./EmulatedBoldText-BY9TtX8n.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
