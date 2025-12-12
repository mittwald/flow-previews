import{j as r}from"./iframe-BDeBfZSP.js";import{H as p}from"./Heading-iyX9InFB.js";import a from"./Default.stories-BDti7itS.js";import{a2 as i}from"./IconWarning-CWBVghBS.js";import{d as n}from"./dummyText-CX_I_Wpl.js";import{A as s}from"./AlertBadge-rZGJwZqq.js";import{C as d,a as l}from"./ContextualHelpTrigger-BB5lI167.js";import{B as c}from"./Button-Dbhe5AA0.js";import{T as g}from"./Text-DwrK8QpO.js";import{B as x}from"./Badge-KSMEjVCc.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CInYH9Sb.js";import"./mergeRefs-Dw41Nq7Z.js";import"./index-CAU0MqbG.js";import"./RSPContexts-BBQghKHL.js";import"./utils-Byz_563U.js";import"./Section-D09FbpBR.js";import"./context-DWFXzaDB.js";import"./Button-Cfa7dut0.js";import"./ProgressBar-W0aWvyTc.js";import"./Hidden-D2v2aeTK.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-CmX5Cpay.js";import"./useFocusRing-508WtmVR.js";import"./useFocusable-DTnDWSdy.js";import"./Collection-l4IMJ13J.js";import"./CollectionBuilder-CCh6UYnS.js";import"./SelectionIndicator-uDzrcrA1.js";import"./Separator-mHu8Ln7W.js";import"./browser--C_mCO56.js";import"./useLocalizedStringFormatter-QrEcyOeW.js";import"./useStatic-CE8Y1Vmb.js";import"./dynamic-BIVuw2Q_.js";import"./AlertIcon-CVet0SZ9.js";import"./Popover-DNzPOg2i.js";import"./OverlayTrigger-C0iwpCUS.js";import"./LoadingSpinner-BWJul6BV.js";import"./EmulatedBoldText-3F_0W9mf.js";const rr={...a,title:"Content/Heading/Edge Cases",component:p},t={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.medium]})},o={render:e=>r.jsxs(p,{...e,children:[r.jsx(i,{}),n.long,r.jsx(s,{children:"Alert"}),r.jsx(x,{children:"Badge"})]})},m={render:e=>r.jsxs(p,{...e,children:[n.long,r.jsxs(d,{children:[r.jsx(c,{}),r.jsx(l,{...e,children:r.jsx(g,{children:n.medium})})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
